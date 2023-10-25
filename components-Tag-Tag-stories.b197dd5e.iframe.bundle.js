/*! For license information please see components-Tag-Tag-stories.b197dd5e.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkfree_bee=self.webpackChunkfree_bee||[]).push([[143],{"./src/components/Tag/Tag.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LinkTag:()=>LinkTag,Standard:()=>Standard,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tag_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");(0,dist.j)("",{variants:{variant:{default:""}},defaultVariants:{variant:"default"}});const Tag=(0,react.forwardRef)(((_ref,ref)=>{let{label,href,className,variant,removeButtonLabel,...props}=_ref;return(0,jsx_runtime.jsx)("div",{className:`tag inline-flex items-center h-[20px] m-[4px] p-0 relative bg-default-bold dark:bg-inverse ${href?"dark:hover:bg-neutral-hovered":""} rounded-[3px] overflow-hidden`,ref,children:href?(0,jsx_runtime.jsx)("a",{href,className:"text-sm whitespace-nowrap text-ellipsis max-w-[180px] px-[4px] py-[2px] no-underline hover:underline text-brand-bold hover:bg-default-bold-hovered",children:label}):(0,jsx_runtime.jsx)("span",{className:"text-sm whitespace-nowrap text-ellipsis dark:text-neutral-bold-hovered-dark max-w-[180px] px-[4px] py-[2px]",children:label})})})),Tag_Tag=Tag;try{Tag.displayName="Tag",Tag.__docgenInfo={description:"",displayName:"Tag",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},removeButtonLabel:{defaultValue:null,description:"",name:"removeButtonLabel",required:!1,type:{name:"any"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default" | null'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tag/Tag.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"src/components/Tag/Tag.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}const Tag_stories={title:"Components/Tag",component:Tag_Tag,tags:["autodocs"],argTypes:{}},Standard=()=>(0,jsx_runtime.jsx)(Tag_Tag,{label:"Tag"});Standard.displayName="Standard";const LinkTag=()=>(0,jsx_runtime.jsx)(Tag_Tag,{label:"Tag Link",href:"/"});LinkTag.displayName="LinkTag",Standard.parameters={...Standard.parameters,docs:{...Standard.parameters?.docs,source:{originalSource:'() => <Tag label="Tag" />',...Standard.parameters?.docs?.source}}},LinkTag.parameters={...LinkTag.parameters,docs:{...LinkTag.parameters?.docs,source:{originalSource:'() => <Tag label="Tag Link" href="/" />',...LinkTag.parameters?.docs?.source}}};const __namedExportsOrder=["Standard","LinkTag"]},"./node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>cva});var clsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs");const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=clsx__WEBPACK_IMPORTED_MODULE_0__.W,cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{W:()=>clsx,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);