"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[9438],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return h}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),p=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=p(t.components);return r.createElement(d.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=p(a),c=n,h=m["".concat(d,".").concat(c)]||m[c]||u[c]||i;return a?r.createElement(h,l(l({ref:e},s),{},{components:a})):r.createElement(h,l({ref:e},s))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[m]="string"==typeof t?t:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1807:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p}});var r=a(3117),n=(a(7294),a(3905));const i={sidebar_position:1,slug:"/Pipelines/CEMBA_MethylC_Seq_Pipeline/README"},l="CEMBA Overview",o={unversionedId:"Pipelines/CEMBA_MethylC_Seq_Pipeline/README",id:"Pipelines/CEMBA_MethylC_Seq_Pipeline/README",title:"CEMBA Overview",description:"| Pipeline Version | Date Updated | Documentation Author | Questions or Feedback |",source:"@site/docs/Pipelines/CEMBA_MethylC_Seq_Pipeline/README.md",sourceDirName:"Pipelines/CEMBA_MethylC_Seq_Pipeline",slug:"/Pipelines/CEMBA_MethylC_Seq_Pipeline/README",permalink:"/warp/docs/Pipelines/CEMBA_MethylC_Seq_Pipeline/README",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/CEMBA_MethylC_Seq_Pipeline/README.md",tags:[],version:"current",lastUpdatedBy:"Kaylee Mathews",lastUpdatedAt:1697808054,formattedLastUpdatedAt:"Oct 20, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/Pipelines/CEMBA_MethylC_Seq_Pipeline/README"},sidebar:"docsSidebar",previous:{title:"ATAC Overview",permalink:"/warp/docs/Pipelines/ATAC/README"},next:{title:"CEMBA_v1.1.0 Publication Methods",permalink:"/warp/docs/Pipelines/CEMBA_MethylC_Seq_Pipeline/CEMBA.methods"}},d={},p=[{value:"Introduction to the CEMBA Workflow",id:"introduction-to-the-cemba-workflow",level:2},{value:"Quick Start Table",id:"quick-start-table",level:2},{value:"CEMBA Installation and Requirements",id:"cemba-installation-and-requirements",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Sample data input",id:"sample-data-input",level:3},{value:"Additional inputs",id:"additional-inputs",level:3},{value:"CEMBA Task Summary",id:"cemba-task-summary",level:2},{value:"Prior to running: set-up the workflow for using multiplexed samples",id:"prior-to-running-set-up-the-workflow-for-using-multiplexed-samples",level:3},{value:"1. Trim adaptors",id:"1-trim-adaptors",level:3},{value:"2. Extract cell barcodes",id:"2-extract-cell-barcodes",level:3},{value:"3. Trim degenerate bases, random primer indexes, and Adaptase C/T tail",id:"3-trim-degenerate-bases-random-primer-indexes-and-adaptase-ct-tail",level:3},{value:"4. Align to a reference genome",id:"4-align-to-a-reference-genome",level:3},{value:"5. Sort, remove duplicates, and filter",id:"5-sort-remove-duplicates-and-filter",level:3},{value:"6. Generate methylation reports",id:"6-generate-methylation-reports",level:3},{value:"7. Attach barcodes, merge BAMs, add read groups, sort and index BAMs",id:"7-attach-barcodes-merge-bams-add-read-groups-sort-and-index-bams",level:3},{value:"8. Call methylated bases",id:"8-call-methylated-bases",level:3},{value:"9. Create ALLC file",id:"9-create-allc-file",level:3},{value:"10. Compute coverage depth",id:"10-compute-coverage-depth",level:3},{value:"Versioning",id:"versioning",level:2},{value:"Citing the CEMBA Pipeline",id:"citing-the-cemba-pipeline",level:2},{value:"Consortia Support",id:"consortia-support",level:2},{value:"Have Suggestions?",id:"have-suggestions",level:2}],s={toc:p},m="wrapper";function u(t){let{components:e,...i}=t;return(0,n.kt)(m,(0,r.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cemba-overview"},"CEMBA Overview"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Pipeline Version"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Date Updated"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Documentation Author"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Questions or Feedback"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/releases"},"CEMBA_v1.1.0")),(0,n.kt)("td",{parentName:"tr",align:"center"},"February, 2021"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"mailto:ekiernan@broadinstitute.org"},"Elizabeth Kiernan")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Please file GitHub issues in warp or contact ",(0,n.kt)("a",{parentName:"td",href:"mailto:warp-pipelines-help@broadinstitute.org"},"the WARP team"))))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"CEMBA",src:a(6023).Z,width:"2999",height:"1687"})),(0,n.kt)("h2",{id:"introduction-to-the-cemba-workflow"},"Introduction to the CEMBA Workflow"),(0,n.kt)("p",null,"CEMBA is a pipeline developed by the ",(0,n.kt)("a",{parentName:"p",href:"https://braininitiative.nih.gov/"},"BRAIN Initiative")," that supports the processing of multiplexed single-nuclei bisulfite sequencing data. It is an alignment and methylated base calling pipeline that trims adaptors, attaches cell barcodes, aligns reads to the genome, filters reads based on quality, and creates both a VCF and ALLC file with methylation-site coverage."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Interested in using the pipeline for your publication? See the ",(0,n.kt)("a",{parentName:"p",href:"/warp/docs/Pipelines/CEMBA_MethylC_Seq_Pipeline/CEMBA.methods"},"\u201cCEMBA publication methods\u201d"),' for a generic "methods" style description of the pipeline.')),(0,n.kt)("h2",{id:"quick-start-table"},"Quick Start Table"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Pipeline Features"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Source"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Assay Type"),(0,n.kt)("td",{parentName:"tr",align:null},"Single-nucleus methylcytosine sequencing (snmC-seq)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://science.sciencemag.org/content/357/6351/600/tab-pdf"},"Luo et al. 2017"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Overall Workflow"),(0,n.kt)("td",{parentName:"tr",align:null},"Aligns reads and identifies methylated bases"),(0,n.kt)("td",{parentName:"tr",align:null},"Code available from ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/cemba/cemba_methylcseq/CEMBA.wdl"},"Github"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Workflow Language"),(0,n.kt)("td",{parentName:"tr",align:null},"WDL 1.0"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/openwdl/wdl"},"openWDL"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Genomic Reference Sequence"),(0,n.kt)("td",{parentName:"tr",align:null},"GRCH38 and GRCM38"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.gencodegenes.org/"},"GENCODE"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Aligner"),(0,n.kt)("td",{parentName:"tr",align:null},"BISMARK v0.21.0 with  --bowtie2"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.bioinformatics.babraham.ac.uk/projects/bismark/"},"Bismark"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Variant Caller"),(0,n.kt)("td",{parentName:"tr",align:null},"GATK 4.1.2.0"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://gatk.broadinstitute.org/hc/en-us"},"GATK 4.1.2.0"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Data Input File Format"),(0,n.kt)("td",{parentName:"tr",align:null},"File format in which sequencing data is provided"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://support.illumina.com/bulletins/2016/04/fastq-files-explained.html"},"Zipped FASTQs (.fastq.gz)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Data Output File Format"),(0,n.kt)("td",{parentName:"tr",align:null},"File formats in which CEMBA output is provided"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://samtools.github.io/hts-specs/"},"BAM"),", ",(0,n.kt)("a",{parentName:"td",href:"https://samtools.github.io/hts-specs/VCFv4.2.pdf"},"VCF"),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/yupenghe/methylpy#output-format"},"ALLC"))))),(0,n.kt)("h1",{id:"set-up"},"Set-up"),(0,n.kt)("h2",{id:"cemba-installation-and-requirements"},"CEMBA Installation and Requirements"),(0,n.kt)("p",null,"The CEMBA pipeline code is written in the ",(0,n.kt)("a",{parentName:"p",href:"https://openwdl.org/"},"Workflow Description Language (WDL)")," and can be downloaded by cloning the GitHub repository ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp"},"WARP"),'. For the latest release of CEMBA, please see the release tags prefixed with "CEMBA" ',(0,n.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tags"},"here"),". CEMBA can be deployed using ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/cromwell"},"Cromwell"),", a GA4GH compliant, flexible workflow management system that supports multiple computing platforms."),(0,n.kt)("p",null,"The workflow can also be run on Terra using the ",(0,n.kt)("a",{parentName:"p",href:"https://app.terra.bio/#workspaces/brain-initiative-bcdc/Methyl-c-seq_Pipeline"},"Methyl-c-seq_Pipeline workspace"),". This workspace contains the CEMBA workflow, workflow configurations, required reference data and other inputs, and demultiplexed example testing data."),(0,n.kt)("h2",{id:"inputs"},"Inputs"),(0,n.kt)("p",null,"CEMBA pipeline inputs are detailed in the example human configuration file (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/cemba/cemba_methylcseq/example_inputs/CEMBA.inputs.json"},"CEMBA.inputs.json"),"). Genomic reference files were built using the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/BICCN/CEMBA/blob/master/pipelines/build_cemba_references/BuildCembaReferences.wdl"},"BuildCembaReferencesWDL script (private repository)"),". See descriptions of all inputs in the tables below."),(0,n.kt)("h3",{id:"sample-data-input"},"Sample data input"),(0,n.kt)("p",null,"The pipeline accepts paired-end reads in the form of two compressed FASTQ files (fastq.gz). FASTQ files may represent a single cell sample or in the case of multiplexed samples, multiple cells."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fastq_r1_gzipped_input"),(0,n.kt)("td",{parentName:"tr",align:null},"Compressed FASTQ (.gz) for R1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fastq_r2_gzipped_input"),(0,n.kt)("td",{parentName:"tr",align:null},"Compressed FASTQ (.gz) for R2")))),(0,n.kt)("h3",{id:"additional-inputs"},"Additional inputs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"barcode_white_list"),(0,n.kt)("td",{parentName:"tr",align:null},"List of known cell barcodes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"output_base_sample_name"),(0,n.kt)("td",{parentName:"tr",align:null},"Prefix for all pipeline output files (final and intermediate)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"barcode_start_pos"),(0,n.kt)("td",{parentName:"tr",align:null},"Base location of barcode start")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"barcode_length"),(0,n.kt)("td",{parentName:"tr",align:null},"Length of cell barcode (bp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"reference_fasta"),(0,n.kt)("td",{parentName:"tr",align:null},"Reference FASTA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"reference_fasta_index"),(0,n.kt)("td",{parentName:"tr",align:null},"Reference FASTA index")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fwd_converted_reference_fasta"),(0,n.kt)("td",{parentName:"tr",align:null},"Bisulfite-converted forward reference genome reads for Bismark alignment")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rev_converted_reference_fasta"),(0,n.kt)("td",{parentName:"tr",align:null},"Bisulfite-converted reverse reference genome reads for Bismark alignment")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"reference_dictionary"),(0,n.kt)("td",{parentName:"tr",align:null},"Reference genome dictionary")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fwd_bowtie2_index_files"),(0,n.kt)("td",{parentName:"tr",align:null},"Forward bowtie2 index files")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rev_bowtie2_index_files"),(0,n.kt)("td",{parentName:"tr",align:null},"Reverse bowtie2 index files")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"quality_cutoff"),(0,n.kt)("td",{parentName:"tr",align:null},"Interval representing the number of base pairs to remove from 5\u2019 and 3\u2019 end in order to trim low quality reads")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"min_length_paired_end_trim"),(0,n.kt)("td",{parentName:"tr",align:null},"An interval to specify a minimum read length to avoid empty reads in paired-end mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"min_length_single_end_trim"),(0,n.kt)("td",{parentName:"tr",align:null},"An interval to specify a minimum read length to avoid empty reads in single-end mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"read1_adapter_seq"),(0,n.kt)("td",{parentName:"tr",align:null},"The R1 adaptor sequence")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"read2_adapter_seq"),(0,n.kt)("td",{parentName:"tr",align:null},"The R2 adaptor sequence")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cut_length"),(0,n.kt)("td",{parentName:"tr",align:null},"Interval provided to trim degenerate bases, random primer indexes, and Adaptase C/T tail")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"paired_end_run"),(0,n.kt)("td",{parentName:"tr",align:null},"Boolean; if true, workflow will run in paired-end mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"remove_duplicates"),(0,n.kt)("td",{parentName:"tr",align:null},"Boolean; if true Picard will remove duplicates and report duplication removal metrics")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"extract_and_attach_barcodes_in_single_end_run"),(0,n.kt)("td",{parentName:"tr",align:null},"Boolean; if true, workflow will create an unaligned BAM and extract barcodes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"min_map_quality"),(0,n.kt)("td",{parentName:"tr",align:null},"Numerical value that represents minimum map quality; if provided Samtools will filter reads and produce a BAM for reads above value and reads below value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"read_group_library_name"),(0,n.kt)("td",{parentName:"tr",align:null},'Library preparation type used for read group; default is "Methylation"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"read_group_platform_name"),(0,n.kt)("td",{parentName:"tr",align:null},'Sequencing platform used for read group; default is "Illumina"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"read_group_platform_unit_name"),(0,n.kt)("td",{parentName:"tr",align:null},'Platform unit for the read group (i.e. run barcode); default is "smmC-Seq"')))),(0,n.kt)("h1",{id:"cemba-tasks-and-tools"},"CEMBA Tasks and Tools"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/cemba/cemba_methylcseq/CEMBA.wdl"},"CEMBA.wdl"),' implements the workflow by importing individual "tasks" written in the ',(0,n.kt)("a",{parentName:"p",href:"https://openwdl.org/"},"WDL script"),"."),(0,n.kt)("h2",{id:"cemba-task-summary"},"CEMBA Task Summary"),(0,n.kt)("p",null,"The table and summary sections below detail the tasks and tools of the CEMBA pipeline; ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/cemba/cemba_methylcseq/CEMBA.wdl"},"the code")," is available through GitHub. Each task can be found in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/cemba/cemba_methylcseq/CEMBA.wdl"},"CEMBA WDL")," If you are looking for the specific parameters of each task/tool, please see the  ",(0,n.kt)("inlineCode",{parentName:"p"},"command {}")," section of the WDL script."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Task"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Tool(s)"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Purpose"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Docker"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Trim"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://cutadapt.readthedocs.io/en/stable/"},"Cutadapt v1.18")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Trim adaptors"),(0,n.kt)("td",{parentName:"tr",align:"left"},"quay.io/broadinstitute/cutadapt:1.18")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CreateUnmappedBam"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://broadinstitute.github.io/picard/"},"Picard v2.18.23")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Create uBAM for attaching barcodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"quay.io/broadinstitute/picard:2.18.23")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ExtractCellBarcodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://sctools.readthedocs.io/en/latest/sctools.html"},"sctools v0.3.4")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use whitelist to extract barcodes and tag to uBAM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"quay.io/humancellatlas/secondary-analysis-sctools:v0.3.4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Trim"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://cutadapt.readthedocs.io/en/stable/"},"Cutadapt v1.18")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Trim degenerate bases, primer index, C/T Adaptase tail of R1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"quay.io/broadinstitute/cutadapt:1.18")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Trim"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://cutadapt.readthedocs.io/en/stable/"},"Cutadapt v1.18")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Trim bases, primer index, C/T Adaptase tail of R2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"quay.io/broadinstitute/cutadapt:1.18")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Align"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.bioinformatics.babraham.ac.uk/projects/bismark/"},"Bismark v0.21.0")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Map multiplexed samples as single-end with --bowtie2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"quay.io/broadinstitute/bismark:0.21.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Sort"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://broadinstitute.github.io/picard/"},"Picard v2.18.23")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sort BAM(s) in coordinate order"),(0,n.kt)("td",{parentName:"tr",align:"left"},"quay.io/broadinstitute/picard:2.18.23")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FilterDuplicates"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://broadinstitute.github.io/picard/"},"Picard v2.18.23")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Removes duplicate reads from BAM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"quay.io/broadinstitute/picard:2.18.23")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Get MethylationReport"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.bioinformatics.babraham.ac.uk/projects/bismark/"},"Bismark v0.21.0")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Produce methylation report for duplicates-filtered BAM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"quay.io/broadinstitute/bismark:0.21.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FilterMapQuality"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"http://www.htslib.org/"},"Samtools v1.9")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Further filter duplicate-removed BAM by map quality"),(0,n.kt)("td",{parentName:"tr",align:"left"},"quay.io/broadinstitute/samtools:1.9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"GetMethylationReport"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.bioinformatics.babraham.ac.uk/projects/bismark/"},"Bismark v0.21.0")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Produce methylation report for reads above map quality and below map quality"),(0,n.kt)("td",{parentName:"tr",align:"left"},"quay.io/broadinstitute/bismark:0.21.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AttachBarcodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://broadinstitute.github.io/picard/"},"Picard v2.18.23")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add barcodes from the tagged uBAM to the aligned BAM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"quay.io/broadinstitute/picard:2.18.23")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MergeBams"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"http://www.htslib.org/"},"Samtools v.19")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Merge R1 and R2 BAM files into single BAM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"quay.io/broadinstitute/samtools:1.9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AddReadGroup"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://gatk.broadinstitute.org/hc/en-us"},"GATK v4.1.2.0")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add read groups to the merged BAM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"us.gcr.io/broad-gatk/gatk:4.3.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Sort"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://broadinstitute.github.io/picard/"},"Picard v2.18.23")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sort in coordinate order after adding read group"),(0,n.kt)("td",{parentName:"tr",align:"left"},"quay.io/broadinstitute/picard:2.18.23")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"IndexBam"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"http://www.htslib.org/"},"Samtools v1.9")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Index the output BAM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"quay.io/broadinstitute/samtools:1.9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MethylationTypeCaller"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://gatk.broadinstitute.org/hc/en-us"},"GATK v4.1.2.0")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Produce a  VCF with locus-specific methylation information"),(0,n.kt)("td",{parentName:"tr",align:"left"},"us.gcr.io/broad-gatk/gatk:4.3.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"VCFtoALLC"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Python"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Creates an ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/yupenghe/methylpy#output-format"},"ALLC")," file from the VCF produced with MethylationTypeCaller"),(0,n.kt)("td",{parentName:"tr",align:"left"},"quay.io/cemba/vcftoallc:v0.0.1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ComputeCoverageDepth"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"http://www.htslib.org/"},"Samtools v1.9")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Compute number of sites with coverage greater than 1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"quay.io/broadinstitute/samtools:1.9")))),(0,n.kt)("h3",{id:"prior-to-running-set-up-the-workflow-for-using-multiplexed-samples"},"Prior to running: set-up the workflow for using multiplexed samples"),(0,n.kt)("p",null,"The pipeline uses paired-end reads, but it can only perform multiplexing when running in single-end mode. If you have multiplexed samples and want to attach cell barcodes, you must run the pipeline in single-end mode. If you do not wish to attach cell barcodes, you may run in paired-end mode (even if your samples are multiplexed). You can specify single-end mode or paired-end mode using the paired_end_run boolean in the configuration file. You will also need to adjust the extract_and_attach_barcodes_in_single_end_run boolean to true if you want to attach barcodes."),(0,n.kt)("h3",{id:"1-trim-adaptors"},"1. Trim adaptors"),(0,n.kt)("p",null,"The CEMBA workflow Trim task uses Cutadapt software to remove the Read1 (R1) and Read2 (R2) adaptor sequences specified in the input configuration from the zipped R1 and R2 FASTQ files. Low-quality reads are trimmed from the 5\u2019 and 3\u2019 ends using the interval specified in the quality_cutoff input parameter.  To avoid empty reads, a threshold for read length is set using the min_length_paired_end_trim option."),(0,n.kt)("h3",{id:"2-extract-cell-barcodes"},"2. Extract cell barcodes"),(0,n.kt)("p",null,"CEMBA can extract cell barcodes from multiplexed samples if the extract_and_attach_barcodes_in_single_end_run boolean is true and the samples are run in single-end mode. To do this, the workflow uses the CreateUnmappedBam and ExtractCellBarcodes tasks to first make an unaligned BAM (uBAM) for the trimmed R1 FASTQ and then tag barcodes identified with the barcode_white_list input to the uBAM."),(0,n.kt)("h3",{id:"3-trim-degenerate-bases-random-primer-indexes-and-adaptase-ct-tail"},"3. Trim degenerate bases, random primer indexes, and Adaptase C/T tail"),(0,n.kt)("p",null,"After barcode extraction, the Trim task is used a second time to remove additional bases resulting from R1 random primer indexes (often used as barcodes) and the R2 C/T tail introduced by the Adaptase enzyme. Reads are trimmed using the cut_length input. The read length threshold is set by the min_length_single_end input."),(0,n.kt)("h3",{id:"4-align-to-a-reference-genome"},"4. Align to a reference genome"),(0,n.kt)("p",null,"The resulting trimmed FASTQ files can be aligned to a reference either in single-end mode for multiplexed samples or paired-end mode. For all modes, the workflow aligns with Bismark with --bowtie2 option. For paired-end or the single-end mode for R1, the workflow uses a directional option with --pbat parameter. For R2, the directional option is turned off."),(0,n.kt)("h3",{id:"5-sort-remove-duplicates-and-filter"},"5. Sort, remove duplicates, and filter"),(0,n.kt)("p",null,"The aligned BAM(s) are scattered and sorted in coordinate order using Picard. Duplicate reads are then removed from the sorted BAM. If a min_map_quality is provided in the input, reads will be filtered accordingly and a BAM produced for all reads above the min_map_quality and a BAM for reads below the min_map_quality."),(0,n.kt)("h3",{id:"6-generate-methylation-reports"},"6. Generate methylation reports"),(0,n.kt)("p",null,"Methylation reports are generated using the Bismark at two steps in the workflow: after the removal of duplicates and again after filtering on min_map_quality. The bismark_methylation_extraction function with the -- comprehensive --merge_non_CpG --report options outputs multiple reports which are detailed in the ",(0,n.kt)("a",{parentName:"p",href:"https://www.bioinformatics.babraham.ac.uk/projects/bismark/Bismark_User_Guide.pdf"},"Bismark documentation"),". These outputs include mbias, splitting, CpG context, and non-CpG context reports."),(0,n.kt)("h3",{id:"7-attach-barcodes-merge-bams-add-read-groups-sort-and-index-bams"},"7. Attach barcodes, merge BAMs, add read groups, sort and index BAMs"),(0,n.kt)("p",null,"In the AttachBarcodes task, Picard attaches the barcodes in the R1 uBAM to the aligned, duplicate-removed, and if applicable, filtered, R1 BAM. This produces a tagged_mapped.bam file. Once the barcodes are attached, the MergeBams task uses Samtools to merge the (barcoded if applicable) R1 BAM with the aligned and filtered R2 BAM. Read groups are then attached to the merged BAM file with GATK4 and the BAM is sorted with Picard. The BAM is indexed with Samtools."),(0,n.kt)("h3",{id:"8-call-methylated-bases"},"8. Call methylated bases"),(0,n.kt)("p",null,"Methylated bases are identified using the MethylationTypeCaller task which calls the GATK4 function MethylationTypeCaller. This produces a VCF with methylation calls."),(0,n.kt)("h3",{id:"9-create-allc-file"},"9. Create ALLC file"),(0,n.kt)("p",null,"The VCF containing methylation calls is used to create an additional ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/yupenghe/methylpy#output-format"},'ALLC ("all-cytosine") file')," which can be used for downstream differential methylated regions in downstream analyses."),(0,n.kt)("h3",{id:"10-compute-coverage-depth"},"10. Compute coverage depth"),(0,n.kt)("p",null,"The ComputeCoverageDepth task uses Samtools to calculate any region in the filtered, sorted BAM with a coverage depth greater than 1. This interval is read in the stdout of the workflow."),(0,n.kt)("h1",{id:"outputs"},"Outputs"),(0,n.kt)("p",null,"The table below details the pipeline outputs. ",(0,n.kt)("strong",{parentName:"p"},"If using multiplexed samples, the final files will represent reads from multiple cells and the output is not yet split by cell barcode.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Workflow Output Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"File Type (when applicable)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"bam_sort_output"),(0,n.kt)("td",{parentName:"tr",align:null},"Final aligned, filtered, (barcoded), and sorted BAM"),(0,n.kt)("td",{parentName:"tr",align:null},"BAM")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"bam_index_output"),(0,n.kt)("td",{parentName:"tr",align:null},"Index file for the final BAM"),(0,n.kt)("td",{parentName:"tr",align:null},"INDEX")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"methylation_vcf"),(0,n.kt)("td",{parentName:"tr",align:null},"VCF file demarcating methylation sites"),(0,n.kt)("td",{parentName:"tr",align:null},"VCF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"methylation_vcf_index"),(0,n.kt)("td",{parentName:"tr",align:null},"Index file for the VCF"),(0,n.kt)("td",{parentName:"tr",align:null},"INDEX")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"total_depth_count"),(0,n.kt)("td",{parentName:"tr",align:null},"Interval demarcated in the stdout file for reads with coverage greater than 1"),(0,n.kt)("td",{parentName:"tr",align:null},"NA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mapping_reports"),(0,n.kt)("td",{parentName:"tr",align:null},"Mapping reports generated by Bismark alignment"),(0,n.kt)("td",{parentName:"tr",align:null},"Array")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"metric_remove_dup_output"),(0,n.kt)("td",{parentName:"tr",align:null},"Duplication metrics generated by Picard"),(0,n.kt)("td",{parentName:"tr",align:null},"TXT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"methylation_mbias_report_output"),(0,n.kt)("td",{parentName:"tr",align:null},"Mbias reports generated by Bismark for the sorted duplicate-removed BAM and the two map quality-filtered BAMs (reads above map quality and reads below map quality)"),(0,n.kt)("td",{parentName:"tr",align:null},"TXT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"methylation_splitting_report_output"),(0,n.kt)("td",{parentName:"tr",align:null},"Splitting reports generated by Bismark for the sorted duplicate-removed BAM and the two map quality-filtered BAMs (reads above map quality and reads below map quality)"),(0,n.kt)("td",{parentName:"tr",align:null},"TXT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"methylation_CpG_context_report_output"),(0,n.kt)("td",{parentName:"tr",align:null},"CpG context reports generated by Bismark for the sorted duplicate-removed BAM and the two map quality-filtered BAMs (reads above map quality and reads below map quality)"),(0,n.kt)("td",{parentName:"tr",align:null},"TXT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"methylation_non_CpG_context_report_output"),(0,n.kt)("td",{parentName:"tr",align:null},"Non-CpG context reports generated by Bismark for the sorted duplicate-removed BAM and the two map quality-filtered BAMs (reads above map quality and reads below map quality)"),(0,n.kt)("td",{parentName:"tr",align:null},"TXT")))),(0,n.kt)("h2",{id:"versioning"},"Versioning"),(0,n.kt)("p",null,"All CEMBA pipeline releases are documented in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/cemba/cemba_methylcseq/CEMBA.changelog.md"},"CEMBA changelog"),"."),(0,n.kt)("h2",{id:"citing-the-cemba-pipeline"},"Citing the CEMBA Pipeline"),(0,n.kt)("p",null,"Please identify the pipeline in your methods section using the CEMBA Pipeline's ",(0,n.kt)("a",{parentName:"p",href:"https://scicrunch.org/scicrunch/Resources/record/nlx_144509-1/SCR_021219/resolver?q=CEMBA&l=CEMBA"},"SciCrunch resource identifier"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ex: ",(0,n.kt)("em",{parentName:"li"},"CEMBA MethylC Seq Pipeline (RRID:SCR_021219)"))),(0,n.kt)("h2",{id:"consortia-support"},"Consortia Support"),(0,n.kt)("p",null,"This pipeline is supported and used by the ",(0,n.kt)("a",{parentName:"p",href:"https://biccn.org/"},"BRAIN Initiative Cell Census Network")," (BICCN). "),(0,n.kt)("p",null,"If your organization also uses this pipeline, we would love to list you! Please reach out to us by contacting ",(0,n.kt)("a",{parentName:"p",href:"mailto:warp-pipelines-help@broadinstitute.org"},"the WARP team"),"."),(0,n.kt)("h2",{id:"have-suggestions"},"Have Suggestions?"),(0,n.kt)("p",null,"Please help us make our tools better by contacting ",(0,n.kt)("a",{parentName:"p",href:"mailto:warp-pipelines-help@broadinstitute.org"},"the WARP team")," for pipeline-related suggestions or questions."))}u.isMDXComponent=!0},6023:function(t,e,a){e.Z=a.p+"assets/images/CEMBA-d92c4880c99cd432f81ba94fcd614461.png"}}]);