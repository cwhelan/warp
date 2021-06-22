(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[1051],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return t?i.createElement(h,o(o({ref:n},u),{},{components:t})):i.createElement(h,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7948:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var i=t(2122),r=t(9756),a=(t(7294),t(3905)),o={sidebar_position:4},s="Version and Release Pipelines",l={unversionedId:"About_WARP/VersionAndReleasePipelines",id:"About_WARP/VersionAndReleasePipelines",isDocsHomePage:!1,title:"Version and Release Pipelines",description:"WARP Pipelines are versioned semantically, allowing you to determine how and when your data was created (provenance). This promotes compatibility across datasets and ensures that analyses can be reproduced by the global scientific community. Semantic version numbers (written as major.minor.patch) are human readable and give immediate insight into the compatibility of pipeline outputs (see the Versioning Guidelines below).",source:"@site/docs/About_WARP/VersionAndReleasePipelines.md",sourceDirName:"About_WARP",slug:"/About_WARP/VersionAndReleasePipelines",permalink:"/warp/docs/About_WARP/VersionAndReleasePipelines",editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/About_WARP/VersionAndReleasePipelines.md",version:"current",lastUpdatedBy:"Chengchen(Rex) Wang",lastUpdatedAt:1624374024,formattedLastUpdatedAt:"6/22/2021",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Testing Pipelines",permalink:"/warp/docs/About_WARP/TestingPipelines"},next:{title:"CEMBA Overview",permalink:"/warp/docs/Pipelines/CEMBA_MethylC_Seq_Pipeline/README"}},p=[{value:"Versioning Requirements",id:"versioning-requirements",children:[]},{value:"Versioning Guidelines",id:"versioning-guidelines",children:[]}],u={toc:p};function c(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"version-and-release-pipelines"},"Version and Release Pipelines"),(0,a.kt)("p",null,"WARP Pipelines are versioned semantically, allowing you to determine how and when your data was created (provenance). This promotes compatibility across datasets and ensures that analyses can be reproduced by the global scientific community. Semantic version numbers (written as major.minor.patch) are human readable and give immediate insight into the compatibility of pipeline outputs (see the ",(0,a.kt)("a",{parentName:"p",href:"#versioning-guidelines"},"Versioning Guidelines")," below)."),(0,a.kt)("p",null,"Versions of each pipeline are packaged into releases and published on GitHub (see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/releases"},"WARP Release page"),"). A published release of a pipeline version in GitHub has passed scientific tests (read more in ",(0,a.kt)("a",{parentName:"p",href:"/warp/docs/About_WARP/TestingPipelines"},"TestingPipelines"),") and is available to be used in production systems."),(0,a.kt)("h2",{id:"versioning-requirements"},"Versioning Requirements"),(0,a.kt)("p",null,"All versioned pipelines must have:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A release version number in the main workflow WDL. The version number is in the form ",(0,a.kt)("inlineCode",{parentName:"li"},"major.minor.patch")," and is included as a field in the standardized format ",(0,a.kt)("inlineCode",{parentName:"li"},'String pipeline_version = "1.0.0"'),"."),(0,a.kt)("li",{parentName:"ul"},"A cumulative changelog file containing the changes introduced in the PR and all previous changes in reverse chronological order. Changelog entries are to be formatted according to the ",(0,a.kt)("a",{parentName:"li",href:"/warp/docs/contribution/contribute_to_warp/changelog_style"},"changelog style guide")," and will include the version number, date of last commit, and a bulleted list of changes since the last release.")),(0,a.kt)("h2",{id:"versioning-guidelines"},"Versioning Guidelines"),(0,a.kt)("p",null,"In WARP, a pipeline requires a version change when any change is made to the pipeline\u2019s main WDL workflow or any of the WDL workflow dependencies. If a change requires a new pipeline version number, the changes and new version number are demarcated in the pipeline\u2019s changelog."),(0,a.kt)("p",null,"Pipeline version numbers are updated based the following  guidelines:"),(0,a.kt)("h4",{id:"major-changes"},"Major changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Any qualitative change to the pipeline\u2019s scientific outputs. If you use the pipeline\u2019s data output, this change indicates a possible need to reprocess data analyzed with a previous release version."),(0,a.kt)("li",{parentName:"ul"},"Any breaking changes to the pipeline, including input/output refactors, renaming of the pipeline, and changes to input/output formats.")),(0,a.kt)("h4",{id:"minor-changes"},"Minor changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Addition of new outputs that don\u2019t impact previous outputs; for example, adding a new md5 checksum output or outputting new QC metrics."),(0,a.kt)("li",{parentName:"ul"},"Changes to the pipeline that do not qualitatively impact the scientific outputs, but may produce slightly different outputs (no data reprocessing needed).")),(0,a.kt)("h4",{id:"patch-micro-changes"},"Patch (micro) changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Memory changes, internal refactor or variable name changes, speed or cost optimizations, comments, metadata."),(0,a.kt)("li",{parentName:"ul"},"Addition of optional inputs.")),(0,a.kt)("p",null,"When pipelines are promoted to the master branch, a script packages the pipeline for release on GitHub. A release contains three components:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A release name comprising the pipeline name and version number listed in the changelog (i.e. SmartSeq2SingleSample_v5.0.0)"),(0,a.kt)("li",{parentName:"ol"},"Release notes comprising the corresponding version changelog entry"),(0,a.kt)("li",{parentName:"ol"},"Artifacts including the main workflow WDL, a zip of all workflow dependencies, and when applicable, an options file")),(0,a.kt)("p",null,"Upon release, the pipeline is automatically pushed to Dockstore based on the WARP ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/.dockstore.yml"},"Dockstore configuration"),"."),(0,a.kt)("p",null,"To support early integration testing of our pipelines, we also maintain a floating \u201cdev\u201d pre-release for each pipeline named \u201cPipelineName_develop\u201d."))}c.isMDXComponent=!0}}]);