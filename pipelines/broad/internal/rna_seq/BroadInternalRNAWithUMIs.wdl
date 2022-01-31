version 1.0

import "../../../../pipelines/broad/rna_seq/RNAWithUMIsPipeline.wdl" as RNAWithUMIs
import "../../../../pipelines/broad/qc/CheckFingerprint.wdl" as FP
import "../../../../tasks/broad/RNAWithUMIsTasks.wdl" as tasks
import "../../../../tasks/broad/Utilities.wdl" as utils

workflow BroadInternalRNAWithUMIs {

  String pipeline_version = "1.0.1"

  input {
    # input needs to be either "hg19" or "hg38"
    String reference_build

    String sample_lsid

    # RNAWithUMIs inputs
    File r1_fastq
    File r2_fastq
    String read1Structure
    String read2Structure
    String output_basename

    String platform
    String library_name
    String platform_unit
    String read_group_name
    String sequencing_center = "BI"

    String environment
    File vault_token_path
  }

  File starIndex = if (reference_build == "hg19") then "gs://broad-gotc-test-storage/rna_seq/hg19/STAR2.7.10a_genome_hg19_noALT_noHLA_noDecoy_v19_oh145.tar.gz" else "gs://broad-gotc-test-storage/rna_seq/hg38/STAR2.7.10a_genome_GRCh38_noALT_noHLA_noDecoy_v34_oh145.tar.gz"
  File gtf = if (reference_build == "hg19") then "gs://broad-gotc-test-storage/rna_seq/hg19/gencode.v19.genes.v7.collapsed_only.patched_contigs.gtf" else "gs://broad-gotc-test-storage/rna_seq/hg38/gencode.v34.annotation_collapsed_only.gtf"
  File ref = if (reference_build == "hg19") then "gs://gcp-public-data--broad-references/hg19/v0/Homo_sapiens_assembly19.fasta" else "gs://broad-gotc-test-storage/rna_seq/hg38/Homo_sapiens_assembly38_noALT_noHLA_noDecoy.fasta"
  File refIndex = if (reference_build == "hg19") then "gs://gcp-public-data--broad-references/hg19/v0/Homo_sapiens_assembly19.fasta.fai" else "gs://broad-gotc-test-storage/rna_seq/hg38/Homo_sapiens_assembly38_noALT_noHLA_noDecoy.fasta.fai"
  File refDict = if (reference_build == "hg19") then "gs://gcp-public-data--broad-references/hg19/v0/Homo_sapiens_assembly19.dict" else "gs://broad-gotc-test-storage/rna_seq/hg38/Homo_sapiens_assembly38_noALT_noHLA_noDecoy.dict"
  File refFlat = if (reference_build == "hg19") then "gs://broad-gotc-test-storage/rna_seq/hg19/Homo_sapiens_assembly19.refFlat.txt" else "gs://broad-gotc-test-storage/rna_seq/hg38/GRCh38_gencode.v27.refFlat.txt"
  File haplotype_database_file = if (reference_build == "hg19") then "gs://gcp-public-data--broad-references/hg19/v0/Homo_sapiens_assembly19.haplotype_database.txt" else "gs://broad-gotc-test-storage/rna_seq/hg38/Homo_sapiens_assembly38_noALT_noHLA_noDecoy.haplotype_database.txt"
  File ribosomalIntervals = if (reference_build == "hg19") then "gs://broad-gotc-test-storage/rna_seq/hg19/Homo_sapiens_assembly19.rRNA.interval_list" else "gs://broad-gotc-test-storage/rna_seq/hg38/gencode.v26.rRNA.withMT.interval_list"
  File exonBedFile = if (reference_build == "hg19") then "gs://broad-gotc-test-storage/rna_seq/hg19/gencode.v19.hg19.insert_size_intervals_geq1000bp.bed" else "gs://broad-gotc-test-storage/rna_seq/hg38/gencode.v26.GRCh38.insert_size_intervals_geq1000bp.bed"

  parameter_meta {
    reference_build: "String used to define the reference genome build; should be set to 'hg19' or 'hg38'"
    sample_lsid: "The sample lsid (an identifier used to retrieve fingerrints from Mercury)"
    r1_fastq: "Read 1 FASTQ file"
    r2_fastq: "Read 2 FASTQ file"
    read1Structure: "String describing how the bases in a sequencing run should be allocated into logical reads for read 1"
    read2Structure: "String describing how the bases in a sequencing run should be allocated into logical reads for read 2"
    output_basename: "String used as a prefix in workflow output files"
    platform: "String used to describe the sequencing platform"
    library_name: "String used to describe the library"
    platform_unit: "String used to describe the platform unit"
    read_group_name: "String used to describe the read group name"
    sequencing_center: "String used to describe the sequencing center; default is set to 'BI'"
    environment: "The environment (dev or prod) used for determining which service to use to retrieve Mercury fingerprints"
    vault_token_path: "The path to the vault token used for accessing the Mercury Fingerprint Store"
  }

  # make sure either hg19 or hg38 is supplied as reference_build input
  if ((reference_build != "hg19") && (reference_build != "hg38")) {
    call utils.ErrorWithMessage as ErrorMessageIncorrectInput {
      input:
        message = "reference_build must be supplied with either 'hg19' or 'hg38'."
    }
  }

  call RNAWithUMIs.RNAWithUMIsPipeline as RNAWithUMIs {
    input:
      r1_fastq = r1_fastq,
      r2_fastq = r2_fastq,
      read1Structure = read1Structure,
      read2Structure = read2Structure,
      starIndex = starIndex,
      output_basename = output_basename,
      gtf = gtf,
      platform = platform,
      library_name = library_name,
      platform_unit = platform_unit,
      read_group_name = read_group_name,
      sequencing_center = sequencing_center,
      ref = ref,
      refIndex = refIndex,
      refDict = refDict,
      refFlat = refFlat,
      ribosomalIntervals = ribosomalIntervals,
      exonBedFile = exonBedFile
  }

  call FP.CheckFingerprint as CheckFingerprint {
    input:
      input_bam = RNAWithUMIs.output_bam,
      input_bam_index = RNAWithUMIs.output_bam_index,
      sample_alias = RNAWithUMIs.sample_name,
      sample_lsid = sample_lsid,
      output_basename = output_basename,
      ref_fasta = ref,
      ref_fasta_index = refIndex,
      ref_dict = refDict,
      read_fingerprint_from_mercury = true,
      haplotype_database_file = haplotype_database_file,
      environment = environment,
      vault_token_path = vault_token_path
  }

  call tasks.MergeMetrics {
    input:
      alignment_summary_metrics = RNAWithUMIs.picard_alignment_summary_metrics,
      insert_size_metrics = RNAWithUMIs.picard_insert_size_metrics,
      picard_rna_metrics = RNAWithUMIs.picard_rna_metrics,
      duplicate_metrics = RNAWithUMIs.duplicate_metrics,
      rnaseqc2_metrics = RNAWithUMIs.rnaseqc2_metrics,
      fingerprint_summary_metrics = CheckFingerprint.fingerprint_summary_metrics_file,
      output_basename = RNAWithUMIs.sample_name
  }

  output {
    File transcriptome_bam = RNAWithUMIs.transcriptome_bam
    File transcriptome_bam_index = RNAWithUMIs.transcriptome_bam_index
    File transcriptome_duplicate_metrics = RNAWithUMIs.transcriptome_duplicate_metrics
    File output_bam = RNAWithUMIs.output_bam
    File output_bam_index = RNAWithUMIs.output_bam_index
    File duplicate_metrics = RNAWithUMIs.duplicate_metrics
    File rnaseqc2_gene_tpm = RNAWithUMIs.rnaseqc2_gene_tpm
    File rnaseqc2_gene_counts = RNAWithUMIs.rnaseqc2_gene_counts
    File rnaseqc2_exon_counts = RNAWithUMIs.rnaseqc2_exon_counts
    File rnaseqc2_fragment_size_histogram = RNAWithUMIs.rnaseqc2_fragment_size_histogram
    File rnaseqc2_metrics = RNAWithUMIs.rnaseqc2_metrics
    File picard_rna_metrics = RNAWithUMIs.picard_rna_metrics
    File picard_alignment_summary_metrics = RNAWithUMIs.picard_alignment_summary_metrics
    File picard_insert_size_metrics = RNAWithUMIs.picard_insert_size_metrics
    File picard_insert_size_histogram = RNAWithUMIs.picard_insert_size_histogram
    File picard_base_distribution_by_cycle_metrics = RNAWithUMIs.picard_base_distribution_by_cycle_metrics
    File picard_base_distribution_by_cycle_pdf = RNAWithUMIs.picard_base_distribution_by_cycle_pdf
    File picard_quality_by_cycle_metrics = RNAWithUMIs.picard_quality_by_cycle_metrics
    File picard_quality_by_cycle_pdf = RNAWithUMIs.picard_quality_by_cycle_pdf
    File picard_quality_distribution_metrics = RNAWithUMIs.picard_quality_distribution_metrics
    File picard_quality_distribution_pdf = RNAWithUMIs.picard_quality_distribution_pdf
    File? picard_fingerprint_summary_metrics = CheckFingerprint.fingerprint_summary_metrics_file
    File? picard_fingerprint_detail_metrics = CheckFingerprint.fingerprint_detail_metrics_file
    File unified_metrics = MergeMetrics.unified_metrics
  }
}