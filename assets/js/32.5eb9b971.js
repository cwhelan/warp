(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{412:function(e,t,a){"use strict";a.r(t);var i=a(19),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"smart-seq2-v2-1-0-publication-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smart-seq2-v2-1-0-publication-methods"}},[e._v("#")]),e._v(" Smart-seq2 v2.1.0 Publication Methods")]),e._v(" "),a("p",[e._v("Below we provide a sample methods sections for a publication. For the complete pipeline documentation, see the "),a("RouterLink",{attrs:{to:"/documentation/Pipelines/Smart-seq2_Multi_Sample_Pipeline/"}},[e._v("Smart-seq2 Multi Sample README")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),a("p",[e._v("Data preprocessing and count matrix construction for a sample batch (or plate) were performed using the Smart-seq2 Multi Sample v2.1.0 Pipeline. For each cell in the batch, paired- or single-end FASTQ files were first processed with the Smart-seq2 Single Sample v5.0.0 Pipeline. Reads were aligned to the GENCODE mouse (M21) or human (V27) reference genome using HISAT2 v2.1.0 with default parameters in addition to "),a("code",[e._v("--k 10")]),e._v(" options. Metrics were collected and duplicate reads marked using the Picard v.2.10.10 "),a("code",[e._v("CollectMultipleMetrics")]),e._v(" and "),a("code",[e._v("CollectRnaSeqMetrics")]),e._v(", and MarkDuplicates functions with validation_stringency=silent. For transcriptome quantification, reads were aligned to the GENCODE transcriptome using HISAT2 v2.1.0 with "),a("code",[e._v("--k 10 --no-mixed --no-softclip --no-discordant --rdg 99999999,99999999 --rfg 99999999,99999999 --no-spliced-alignment")]),e._v(" options. Gene expression was calculated using RSEM v1.3.0’s "),a("code",[e._v("rsem-calculate-expression --calc-pme --single-cell-prior")]),e._v(". QC metrics, RSEM TPMs and RSEM estimated counts were exported to a single Loom file for each cell. All individual Loom files for the entire batch were aggregated into a single Loom file for downstream processing. The final output included the unfiltered Loom and the tagged, unfiltered individual BAM files.")]),e._v(" "),a("p",[e._v("An example of the pipeline and outputs can be found in "),a("a",{attrs:{href:"https://app.terra.bio/#workspaces/featured-workspaces-hca/HCA%20Smart-seq2%20Multi%20Sample%20Pipeline",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terra"),a("OutboundLink")],1),e._v(" and additional documentation can be found at "),a("a",{attrs:{href:"https://github.com/HumanCellAtlas/skylab/tree/master/pipelines/smartseq2_multisample",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github"),a("OutboundLink")],1),e._v(". Examples of genomic references, whitelists, and other inputs are available in the Skylab repository (see the *_example.json files at "),a("a",{attrs:{href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_multisample/human_single_example.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("human_single_example"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);