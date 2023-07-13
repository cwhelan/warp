"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[784],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return h}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=s(a),u=r,h=m["".concat(d,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(h,l(l({ref:e},p),{},{components:a})):n.createElement(h,l({ref:e},p))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[m]="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4961:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s}});var n=a(3117),r=(a(7294),a(3905));const i={sidebar_position:4},l="Optimus Count Matrix Overview",o={unversionedId:"Pipelines/Optimus_Pipeline/Loom_schema",id:"Pipelines/Optimus_Pipeline/Loom_schema",title:"Optimus Count Matrix Overview",description:"The Loom matrix is deprecated and the default matrix is now h5ad.",source:"@site/docs/Pipelines/Optimus_Pipeline/Loom_schema.md",sourceDirName:"Pipelines/Optimus_Pipeline",slug:"/Pipelines/Optimus_Pipeline/Loom_schema",permalink:"/warp/docs/Pipelines/Optimus_Pipeline/Loom_schema",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/Optimus_Pipeline/Loom_schema.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1689253685,formattedLastUpdatedAt:"Jul 13, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"What tags are included in an Optimus BAM file?",permalink:"/warp/docs/Pipelines/Optimus_Pipeline/Bam_tags"},next:{title:"Consortia Data Processing",permalink:"/warp/docs/Pipelines/Optimus_Pipeline/consortia-processing"}},d={},s=[{value:"Table 1. Global attributes",id:"table-1-global-attributes",level:2},{value:"Table 2. Cell metrics",id:"table-2-cell-metrics",level:2},{value:"Table 3. Gene metrics",id:"table-3-gene-metrics",level:2}],p={toc:s},m="wrapper";function c(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"optimus-count-matrix-overview"},"Optimus Count Matrix Overview"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The Loom matrix is deprecated and the default matrix is now h5ad.")),(0,r.kt)("p",null,"The Optimus pipeline's default count matrix output is a h5ad file generated using ",(0,r.kt)("a",{parentName:"p",href:"https://anndata.readthedocs.io/en/latest/index.html"},"AnnData"),". "),(0,r.kt)("p",null,"It contains the raw, but UMI-corrected cell by gene counts, which vary depending on the workflow's ",(0,r.kt)("inlineCode",{parentName:"p"},"counting_mode")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"count_exons")," parameters. If running single-cell data (",(0,r.kt)("inlineCode",{parentName:"p"},"counting_mode")," is sc_rna), the counts will include only exonic gene counts. If running single-nucleus data (",(0,r.kt)("inlineCode",{parentName:"p"},"counting_mode")," is sn_rna), the counts will be whole transcript. Additionally, if ",(0,r.kt)("inlineCode",{parentName:"p"},"count_exons")," is set to true in sn_rna mode, the h5ad will contain the whole transcript counts as well as an additional layer with exonic counts."),(0,r.kt)("p",null,"You can determine which type of counts are in the h5ad by looking at the unstructured metadata (anndata.uns) ",(0,r.kt)("inlineCode",{parentName:"p"},"expression_data_type")," (see Table 1 below)."),(0,r.kt)("p",null,"The matrix also contains multiple metrics for both individual cells (the anndata.obs of the matrix; ",(0,r.kt)("a",{parentName:"p",href:"#table-2-cell-metrics"},"Table 2")," and individual genes (the anndata.var of the matrix; ",(0,r.kt)("a",{parentName:"p",href:"#table-3-gene-metrics"},"Table 3"),"). "),(0,r.kt)("admonition",{title:"Additional Matrix Processing for Consortia",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Previous Loom files generated by Optimus for consortia, such as the Human Cell Atlas (HCA) or the BRAIN Initiative Cell Census Network (BICCN), may have additional processing steps. Read the ",(0,r.kt)("a",{parentName:"p",href:"/warp/docs/Pipelines/Optimus_Pipeline/consortia-processing#hca-data-coordination-platform-matrix-processing"},"Consortia Processing Overview")," for details on consortia-specific matrix changes.")),(0,r.kt)("h2",{id:"table-1-global-attributes"},"Table 1. Global attributes"),(0,r.kt)("p",null,"The global attributes (unstuctured metadata) in the h5ad apply to the whole file, not any specific part. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Details"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"expression_data_type"),(0,r.kt)("td",{parentName:"tr",align:"left"},'String describing if the pipeline counts exonic or whole transcript (exonic and intronic) reads. For the single-cell mode (counting_mode = sc_rna), the value will be "exonic"; for the single-nucleus mode (counting_mode = sn_rna), the value will be "whole_transcript"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"input_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The sample or cell id listed in the pipeline configuration file. This can be any string, but we recommend it be consistent with any sample metadata.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"input_name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional string that can be used to further describe the input")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"input_id_metadata_field"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional string that describes, when applicable, the metadata field containing the ",(0,r.kt)("inlineCode",{parentName:"td"},"input_id"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"input_name_metadata_field"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional string that describes, when applicable, the metadata field containing the ",(0,r.kt)("inlineCode",{parentName:"td"},"input_name"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pipeline_version"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String describing the Optimus version")))),(0,r.kt)("h2",{id:"table-2-cell-metrics"},"Table 2. Cell metrics"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Cell Metrics"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Program"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Details"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CellID")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The unique identifier for each cell based on cell barcodes; identical to ",(0,r.kt)("inlineCode",{parentName:"td"},"cell_names"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cell_names")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The unique identifier for each cell based on cell barcodes; identical to ",(0,r.kt)("inlineCode",{parentName:"td"},"CellID"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"input_id")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Provided as pipeline input"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The sample or cell id listed in the pipeline configuration file. This can be any string, but we recommend it be consistent with any sample metadata.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"n_reads")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reads associated with this entity. n_reads, like all metrics, are calculated from the Optimus output BAM. Prior to alignment with STARsolo, reads are checked against the whitelist (1 hamming distance). These CB-corrected reads are the input to the STAR aligner. Then, the reads also get CB correction during STAR. For this reason, almost all reads in the aligned BAM have a CB tag and UB tag. Therefore, n_reads represents CB corrected reads, not all reads in the input FASTQ files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"noise_reads")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},'Number of reads that are categorized by 10x Genomics Cell Ranger as "noise". Refers to long polymers, or reads with high numbers of N (ambiguous) nucleotides.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"perfect_molecule_barcodes")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reads with molecule barcodes that have no errors.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"n_mitochondrial_genes")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of mitochondrial genes detected by this cell.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"n_mitochondrial_molecules")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of molecules from mitochondrial genes detected for this cell.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pct_mitochondrial_molecules")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The percentage of molecules from mitochondrial genes detected for this cell.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"reads_mapped_uniquely")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reads mapped to a single unambiguous location in the genome.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"reads_mapped_multiple")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reads mapped to multiple genomic positions with equal confidence.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"spliced_reads")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reads that overlap splicing junctions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"antisense_reads")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reads that are mapped to the antisense strand instead of the transcribed strand.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"molecule_barcode_fraction_bases_above_30_mean")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The average fraction of bases in molecule barcodes that receive quality scores greater than 30 across the reads of this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"molecule_barcode_fraction_bases_above_30_variance")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The variance in the fraction of bases in molecule barcodes that receive quality scores greater than 30 across the reads of this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"genomic_reads_fraction_bases_quality_above_30_mean")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The average fraction of bases in the genomic read that receive quality scores greater than 30 across the reads of this entity (included for 10x Cell Ranger count comparison).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"genomic_reads_fraction_bases_quality_above_30_variance")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The variance in the fraction of bases in the genomic read that receive quality scores greater than 30 across the reads of this entity (included for 10x Cell Ranger count comparison).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"genomic_read_quality_mean")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Average quality of Illumina base calls in the genomic reads corresponding to this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"genomic_read_quality_variance")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Variance in quality of Illumina base calls in the genomic reads corresponding to this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"n_molecules")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of molecules corresponding to this entity (only reflects reads with CB and UB tags).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"n_fragments")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of fragments corresponding to this entity. See README.md for the definition of a Fragment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"reads_per_fragment")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The average number of reads associated with each fragment in this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fragments_per_molecule")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The average number of fragments associated with each molecule in this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fragments_with_single_read_evidence")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of fragments associated with this entity that are observed by only one read.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"molecules_with_single_read_evidence")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of molecules associated with this entity that are observed by only one read.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"perfect_cell_barcodes")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reads whose cell barcodes contain no error.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"reads_mapped_too_many_loci")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reads that were mapped to too many loci across the genome and as a consequence, are reported unmapped by the aligner.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cell_barcode_fraction_bases_above_30_variance")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The variance of the fraction of Illumina base calls for the cell barcode sequence that are greater than 30, across molecules.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cell_barcode_fraction_bases_above_30_mean")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The average fraction of Illumina base calls for the cell barcode sequences that are greater than 30, across molecules.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"n_genes")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of genes detected by this cell.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"genes_detected_multiple_observations")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of genes that are observed by more than one read in this cell.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"emptydrops_FDR")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://bioconductor.org/packages/release/bioc/html/DropletUtils.html"},"dropletUtils")),(0,r.kt)("td",{parentName:"tr",align:"left"},'False Discovery Rate (FDR) for being a non-empty droplet; single-cell data will read "NA" if task is unable to detect knee point inflection. Column is not included for data run in the sn_rna mode')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"emptydrops_IsCell")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://bioconductor.org/packages/release/bioc/html/DropletUtils.html"},"dropletUtils")),(0,r.kt)("td",{parentName:"tr",align:"left"},'Binarized call of cell/background based on predefined FDR cutoff; single-cell data will read "NA" if task is unable to detect knee point inflection. Column is not included for data run in the sn_rna mode')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"emptydrops_Limited")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://bioconductor.org/packages/release/bioc/html/DropletUtils.html"},"dropletUtils")),(0,r.kt)("td",{parentName:"tr",align:"left"},'Indicates whether a lower p-value could be obtained by increasing the number of iterations; single-cell data will read "NA" if task is unable to detect knee point inflection. Column is not included for data run in the sn_rna mode')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"emptydrops_LogProb")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://bioconductor.org/packages/release/bioc/html/DropletUtils.html"},"dropletUtils")),(0,r.kt)("td",{parentName:"tr",align:"left"},'The log-probability of observing the barcode\u2019s count vector under the null model; single-cell data will read "NA" if the task is unable to detect knee point inflection. Column is not included for data run in the sn_rna mode')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"emptydrops_PValue")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://bioconductor.org/packages/release/bioc/html/DropletUtils.html"},"dropletUtils")),(0,r.kt)("td",{parentName:"tr",align:"left"},'Numeric, the Monte Carlo p-value against the null model; single-cell data will read "NA" if task is unable to detect knee point inflection. Column is not included for data run in the sn_rna mode')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"emptydrops_Total")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://bioconductor.org/packages/release/bioc/html/DropletUtils.html"},"dropletUtils")),(0,r.kt)("td",{parentName:"tr",align:"left"},'Numeric, the total read counts for each barcode; single-cell data will read "NA" if task is unable to detect knee point inflection. Column is not included for data run in the sn_rna mode')))),(0,r.kt)("h2",{id:"table-3-gene-metrics"},"Table 3. Gene metrics"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Gene Metrics"),(0,r.kt)("th",{parentName:"tr",align:null},"Program"),(0,r.kt)("th",{parentName:"tr",align:null},"Details"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ensembl_ids")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.gencodegenes.org/"},"GENCODE GTF")),(0,r.kt)("td",{parentName:"tr",align:null},"The gene_id listed in the GENCODE GTF.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Gene")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.gencodegenes.org/"},"GENCODE GTF")),(0,r.kt)("td",{parentName:"tr",align:null},"The unique gene_name provided in the GENCODE GTF; identical to the ",(0,r.kt)("inlineCode",{parentName:"td"},"gene_names")," attribute.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gene_names")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.gencodegenes.org/"},"GENCODE GTF")),(0,r.kt)("td",{parentName:"tr",align:null},"The unique gene_name provided in the GENCODE GTF; identical to the ",(0,r.kt)("inlineCode",{parentName:"td"},"Gene")," attribute.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"n_reads")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of reads associated with this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"noise_reads")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:null},'The number of reads that are categorized by 10x Genomics Cell Ranger as "noise". Refers to long polymers, or reads with high numbers of N (ambiguous) nucleotides.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"perfect_molecule_barcodes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of reads with molecule barcodes that have no errors.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reads_mapped_uniquely")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of reads mapped to a single unambiguous location in the genome.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reads_mapped_multiple")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of reads mapped to multiple genomic positions with equal confidence.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"spliced_reads")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of reads that overlap splicing junctions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"antisense_reads")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of reads that are mapped to the antisense strand instead of the transcribed strand.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"molecule_barcode_fraction_bases_above_30_mean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:null},"The average fraction of bases in molecule barcodes that receive quality scores greater than 30 across the reads of this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"molecule_barcode_fraction_bases_above_30_variance")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:null},"The variance in the fraction of bases in molecule barcodes that receive quality scores greater than 30 across the reads of this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"genomic_reads_fraction_bases_quality_above_30_mean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:null},"The average fraction of bases in the genomic read that receive quality scores greater than 30 across the reads of this entity (included for 10x Cell Ranger count comparison).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"genomic_reads_fraction_bases_quality_above_30_variance")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:null},"The variance in the fraction of bases in the genomic read that receive quality scores greater than 30 across the reads of this entity (included for 10x Cell Ranger count comparison).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"genomic_read_quality_mean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:null},"Average quality of Illumina base calls in the genomic reads corresponding to this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"genomic_read_quality_variance")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:null},"Variance in quality of Illumina base calls in the genomic reads corresponding to this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"n_molecules")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of molecules corresponding to this entity (only reflects reads with CB and UB tags).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"n_fragments")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of fragments corresponding to this entity. See README.md for the definition of a Fragment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reads_per_molecule")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:null},"The average number of reads associated with each molecule in this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reads_per_fragment")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:null},"The average number of reads associated with each fragment in this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fragments_per_molecule")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:null},"The average number of fragments associated with each molecule in this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fragments_with_single_read_evidence")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of fragments associated with this entity that are observed by only one read.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"molecules_with_single_read_evidence")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of molecules associated with this entity that are observed by only one read.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number_cells_detected_multiple")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of cells which observe more than one read of this gene.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number_cells_expressing")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools"},"warp-tools")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of cells that detect this gene.")))))}c.isMDXComponent=!0}}]);