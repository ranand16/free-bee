/*! For license information please see components-Breadcrumbs-Breadcrumbs-stories.2f001be3.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkfree_bee=self.webpackChunkfree_bee||[]).push([[998],{"./src/components/Breadcrumbs/Breadcrumbs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MaxBreadcrumbItems:()=>MaxBreadcrumbItems,Standard:()=>Standard,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Breadcrumbs_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");(0,dist.j)("",{variants:{variant:{default:""}},defaultVariants:{variant:"default"}});const Breadcrumbs=(0,react.forwardRef)(((_ref,ref)=>{let{children,maxItems,...props}=_ref;console.log(children.length);const[showAll,setShowAll]=(0,react.useState)(!1),total=children.length;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:maxItems&&children.length>maxItems&&!showAll?(0,jsx_runtime.jsxs)("div",{className:"flex",children:[(0,jsx_runtime.jsx)("div",{className:"mx-spacing-100",children:children[0]}),(0,jsx_runtime.jsx)("span",{className:"text-subtlest list-none after:content-['/'] after:p-space.100 before:content-['/'] before:p-space.100 "+(showAll?"hidden":""),onClick:()=>setShowAll(!showAll),children:(0,jsx_runtime.jsx)("span",{className:"cursor-pointer hover:underline",children:"..."})}),(0,jsx_runtime.jsx)("div",{className:"",children:children[total-1]})]}):(0,jsx_runtime.jsx)("div",{className:"flex",children})})})),Breadcrumbs_Breadcrumbs=Breadcrumbs;try{Breadcrumbs.displayName="Breadcrumbs",Breadcrumbs.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{maxItems:{defaultValue:null,description:"",name:"maxItems",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default" | null'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Breadcrumbs/Breadcrumbs.tsx#Breadcrumbs"]={docgenInfo:Breadcrumbs.__docgenInfo,name:"Breadcrumbs",path:"src/components/Breadcrumbs/Breadcrumbs.tsx#Breadcrumbs"})}catch(__react_docgen_typescript_loader_error){}const Breadcrumbs_BreadcrumbItem=(0,react.forwardRef)(((_ref,ref)=>{let{href,text,...props}=_ref;return(0,jsx_runtime.jsx)("li",{className:"breadcrumb-item list-none after:content-['/'] after:p-space.100 text-subtlest last:after:hidden",children:(0,jsx_runtime.jsx)("a",{href,className:"hover:underline",children:(0,jsx_runtime.jsx)("span",{children:text})})})}));try{BreadcrumbItem.displayName="BreadcrumbItem",BreadcrumbItem.__docgenInfo={description:"",displayName:"BreadcrumbItem",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Breadcrumbs/BreadcrumbItem.tsx#BreadcrumbItem"]={docgenInfo:BreadcrumbItem.__docgenInfo,name:"BreadcrumbItem",path:"src/components/Breadcrumbs/BreadcrumbItem.tsx#BreadcrumbItem"})}catch(__react_docgen_typescript_loader_error){}const Breadcrumbs_stories={title:"Components/Breadcrumbs",component:Breadcrumbs_Breadcrumbs,tags:["autodocs"],argTypes:{}},Standard=()=>(0,jsx_runtime.jsxs)(Breadcrumbs_Breadcrumbs,{children:[(0,jsx_runtime.jsx)(Breadcrumbs_BreadcrumbItem,{href:"./",text:"Item 1"}),(0,jsx_runtime.jsx)(Breadcrumbs_BreadcrumbItem,{href:"./",text:"Item 2"}),(0,jsx_runtime.jsx)(Breadcrumbs_BreadcrumbItem,{href:"./",text:"Item 3"}),(0,jsx_runtime.jsx)(Breadcrumbs_BreadcrumbItem,{href:"./",text:"Item 4"}),(0,jsx_runtime.jsx)(Breadcrumbs_BreadcrumbItem,{href:"./",text:"Item 5"})]});Standard.displayName="Standard";const MaxBreadcrumbItems=()=>(0,jsx_runtime.jsxs)(Breadcrumbs_Breadcrumbs,{maxItems:5,children:[(0,jsx_runtime.jsx)(Breadcrumbs_BreadcrumbItem,{href:"./",text:"Item 1"}),(0,jsx_runtime.jsx)(Breadcrumbs_BreadcrumbItem,{href:"./",text:"Item 2"}),(0,jsx_runtime.jsx)(Breadcrumbs_BreadcrumbItem,{href:"./",text:"Item 3"}),(0,jsx_runtime.jsx)(Breadcrumbs_BreadcrumbItem,{href:"./",text:"Item 4"}),(0,jsx_runtime.jsx)(Breadcrumbs_BreadcrumbItem,{href:"./",text:"Item 5"}),(0,jsx_runtime.jsx)(Breadcrumbs_BreadcrumbItem,{href:"./",text:"Item 6"}),(0,jsx_runtime.jsx)(Breadcrumbs_BreadcrumbItem,{href:"./",text:"Item 7"}),(0,jsx_runtime.jsx)(Breadcrumbs_BreadcrumbItem,{href:"./",text:"Item 8"}),(0,jsx_runtime.jsx)(Breadcrumbs_BreadcrumbItem,{href:"./",text:"Item 9"}),(0,jsx_runtime.jsx)(Breadcrumbs_BreadcrumbItem,{href:"./",text:"Item 10"})]});MaxBreadcrumbItems.displayName="MaxBreadcrumbItems",Standard.parameters={...Standard.parameters,docs:{...Standard.parameters?.docs,source:{originalSource:'() => <Breadcrumbs>\r\n    <BreadcrumbsItem href="./" text="Item 1" />\r\n    <BreadcrumbsItem href="./" text="Item 2" />\r\n    <BreadcrumbsItem href="./" text="Item 3" />\r\n    <BreadcrumbsItem href="./" text="Item 4" />\r\n    <BreadcrumbsItem href="./" text="Item 5" />\r\n  </Breadcrumbs>',...Standard.parameters?.docs?.source}}},MaxBreadcrumbItems.parameters={...MaxBreadcrumbItems.parameters,docs:{...MaxBreadcrumbItems.parameters?.docs,source:{originalSource:'() => <Breadcrumbs maxItems={5}>\r\n    <BreadcrumbsItem href="./" text="Item 1" />\r\n    <BreadcrumbsItem href="./" text="Item 2" />\r\n    <BreadcrumbsItem href="./" text="Item 3" />\r\n    <BreadcrumbsItem href="./" text="Item 4" />\r\n    <BreadcrumbsItem href="./" text="Item 5" />\r\n    <BreadcrumbsItem href="./" text="Item 6" />\r\n    <BreadcrumbsItem href="./" text="Item 7" />\r\n    <BreadcrumbsItem href="./" text="Item 8" />\r\n    <BreadcrumbsItem href="./" text="Item 9" />\r\n    <BreadcrumbsItem href="./" text="Item 10" />\r\n  </Breadcrumbs>',...MaxBreadcrumbItems.parameters?.docs?.source}}};const __namedExportsOrder=["Standard","MaxBreadcrumbItems"]},"./node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>cva});var clsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs");const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=clsx__WEBPACK_IMPORTED_MODULE_0__.W,cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{W:()=>clsx,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);