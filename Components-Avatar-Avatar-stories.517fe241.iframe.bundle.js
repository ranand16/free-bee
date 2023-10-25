"use strict";(self.webpackChunkfree_bee=self.webpackChunkfree_bee||[]).push([[456],{"./src/Components/Avatar/Avatar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PersonAvatar:()=>PersonAvatar,PersonAvatarStatus:()=>PersonAvatarStatus,ProjectAvatar:()=>ProjectAvatar,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Avatar_stories});var dist=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),functions=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/utility/functions.ts")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const avatarVariants=(0,dist.j)("border-2 border-white",{variants:{size:{xs:"w-4 h-4",sm:"w-6 h-6",md:"w-8 h-8",lg:"w-12 h-12",xl:"w-16 h-16",xxl:"w-24 h-24",xxxl:"w-32 h-32"},rounded:{xs:"rounded",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",xl:"rounded-xl",xxl:"rounded-2xl",xxxl:"rounded-3xl",full:"rounded-full"}}}),statusVariants=(0,dist.j)("absolute",{variants:{size:{xs:"w-[4px] h-[4px]",sm:"w-[6px] h-[6px]",md:"w-[8px] h-[8px]",lg:"w-[12px] h-[12px]",xl:"w-[16px] h-[16px]",xxl:"w-[24px] h-[24px]",xxxl:"w-[32px] h-[32px]"},position:{topLeft:"top-0 left-0",topRight:"top-0 right-0",bottomLeft:"bottom-0 left-0",bottomRight:"bottom-0 right-0"}}}),Avatar=_ref=>{let{src,width,height,alt,size,rounded,status,statusColor="#36B37E",statusSize,statusPosition="topRight",...props}=_ref;return(0,jsx_runtime.jsxs)("div",{className:"relative",children:[(0,jsx_runtime.jsx)("img",{src,width,height,alt,className:(0,functions.cn)(avatarVariants({size,rounded})),...props}),status&&(0,jsx_runtime.jsx)("div",{style:{background:statusColor},className:(0,functions.cn)("h-auto rounded-full border-2 border-white",statusVariants({position:statusPosition,size:statusSize||size}))})]})};Avatar.displayName="Avatar";try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"boolean"}},statusSize:{defaultValue:null,description:"",name:"statusSize",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xs"'},{value:'"xxl"'},{value:'"xxxl"'}]}},statusColor:{defaultValue:{value:"#36B37E"},description:"",name:"statusColor",required:!1,type:{name:"string"}},statusPosition:{defaultValue:{value:"topRight"},description:"",name:"statusPosition",required:!1,type:{name:"enum",value:[{value:'"topLeft"'},{value:'"topRight"'},{value:'"bottomLeft"'},{value:'"bottomRight"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "md" | "lg" | "xl" | "xs" | "xxl" | "xxxl" | null'}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:'"sm" | "md" | "lg" | "xl" | "full" | "xs" | "xxl" | "xxxl" | null'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/Components/Avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}const Avatar_stories={title:"Components/Avatar",component:Avatar},avatarSrc="https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg",projectSrc="https://aui.atlassian.com/aui/latest/docs/images/avatar-project.svg",PersonAvatar=()=>(0,jsx_runtime.jsxs)("div",{className:"flex items-end gap-1",children:[(0,jsx_runtime.jsx)(Avatar,{size:"xs",src:avatarSrc}),(0,jsx_runtime.jsx)(Avatar,{size:"sm",src:avatarSrc}),(0,jsx_runtime.jsx)(Avatar,{size:"md",src:avatarSrc}),(0,jsx_runtime.jsx)(Avatar,{size:"lg",src:"https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"}),(0,jsx_runtime.jsx)(Avatar,{size:"xl",src:avatarSrc}),(0,jsx_runtime.jsx)(Avatar,{size:"xxl",src:avatarSrc}),(0,jsx_runtime.jsx)(Avatar,{size:"xxxl",src:"https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"})]});PersonAvatar.displayName="PersonAvatar";const ProjectAvatar=()=>(0,jsx_runtime.jsxs)("div",{className:"flex items-end gap-1",children:[(0,jsx_runtime.jsx)(Avatar,{size:"xs",rounded:"xs",src:projectSrc}),(0,jsx_runtime.jsx)(Avatar,{size:"sm",rounded:"sm",src:projectSrc}),(0,jsx_runtime.jsx)(Avatar,{size:"md",rounded:"md",src:projectSrc}),(0,jsx_runtime.jsx)(Avatar,{size:"lg",rounded:"lg",src:projectSrc}),(0,jsx_runtime.jsx)(Avatar,{size:"xl",rounded:"xl",src:projectSrc}),(0,jsx_runtime.jsx)(Avatar,{size:"xxl",rounded:"xxl",src:projectSrc}),(0,jsx_runtime.jsx)(Avatar,{size:"xxxl",rounded:"xxxl",src:projectSrc}),(0,jsx_runtime.jsx)(Avatar,{size:"xxxl",rounded:"full",src:projectSrc})]});ProjectAvatar.displayName="ProjectAvatar";const PersonAvatarStatus=()=>(0,jsx_runtime.jsxs)("div",{className:"flex items-end gap-1",children:[(0,jsx_runtime.jsx)(Avatar,{size:"xs",src:avatarSrc,status:!0}),(0,jsx_runtime.jsx)(Avatar,{size:"sm",src:avatarSrc,status:!0}),(0,jsx_runtime.jsx)(Avatar,{size:"md",src:avatarSrc,status:!0,statusColor:"#FF5630"}),(0,jsx_runtime.jsx)(Avatar,{size:"lg",src:avatarSrc,status:!0}),(0,jsx_runtime.jsx)(Avatar,{size:"xl",src:avatarSrc,status:!0,statusColor:"#FF5630"}),(0,jsx_runtime.jsx)(Avatar,{size:"xxl",src:avatarSrc,status:!0}),(0,jsx_runtime.jsx)(Avatar,{size:"xxxl",src:avatarSrc,status:!0})]});PersonAvatarStatus.displayName="PersonAvatarStatus",PersonAvatar.parameters={...PersonAvatar.parameters,docs:{...PersonAvatar.parameters?.docs,source:{originalSource:'() => {\n  // The avatar is full rounded by default\n  return <div className="flex items-end gap-1">\n            <Avatar size={"xs"} src={avatarSrc} />\n            <Avatar size={"sm"} src={avatarSrc} />\n            <Avatar size={"md"} src={avatarSrc} />\n            <Avatar size={"lg"} src={"https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"} />\n            <Avatar size={"xl"} src={avatarSrc} />\n            <Avatar size={"xxl"} src={avatarSrc} />\n            <Avatar size={"xxxl"} src={"https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"} />\n        </div>;\n}',...PersonAvatar.parameters?.docs?.source}}},ProjectAvatar.parameters={...ProjectAvatar.parameters,docs:{...ProjectAvatar.parameters?.docs,source:{originalSource:'() => {\n  // The icon is sqaure by default\n  return <div className="flex items-end gap-1">\n            <Avatar size={"xs"} rounded={"xs"} src={projectSrc} />\n            <Avatar size={"sm"} rounded={"sm"} src={projectSrc} />\n            <Avatar size={"md"} rounded={"md"} src={projectSrc} />\n            <Avatar size={"lg"} rounded={"lg"} src={projectSrc} />\n            <Avatar size={"xl"} rounded={"xl"} src={projectSrc} />\n            <Avatar size={"xxl"} rounded={"xxl"} src={projectSrc} />\n            <Avatar size={"xxxl"} rounded={"xxxl"} src={projectSrc} />\n            <Avatar size={"xxxl"} rounded={"full"} src={projectSrc} />\n        </div>;\n}',...ProjectAvatar.parameters?.docs?.source}}},PersonAvatarStatus.parameters={...PersonAvatarStatus.parameters,docs:{...PersonAvatarStatus.parameters?.docs,source:{originalSource:'() => {\n  return <div className="flex items-end gap-1">\n            <Avatar size={"xs"} src={avatarSrc} status />\n            <Avatar size={"sm"} src={avatarSrc} status />\n            <Avatar size={"md"} src={avatarSrc} status statusColor="#FF5630" />\n            <Avatar size={"lg"} src={avatarSrc} status />\n            <Avatar size={"xl"} src={avatarSrc} status statusColor="#FF5630" />\n            <Avatar size={"xxl"} src={avatarSrc} status />\n            <Avatar size={"xxxl"} src={avatarSrc} status />\n        </div>;\n}',...PersonAvatarStatus.parameters?.docs?.source}}};const __namedExportsOrder=["PersonAvatar","ProjectAvatar","PersonAvatarStatus"]},"./src/utility/functions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.m)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.W)(inputs))}},"./node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>cva});var clsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs");const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=clsx__WEBPACK_IMPORTED_MODULE_0__.W,cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}}}]);