import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (20121cc)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{addFonts,withCSS,addPropertyControls,ControlType,cx,useAddVariantProps,useVariantState,Text,Stack}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";const cycleOrder=["hqxC3D2Ef"];const variantClassNames={"hqxC3D2Ef":"framer-v-dwokwr"};const humanReadableVariantMap={};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({style,className,layoutId,width,height,variant:outerVariant="hqxC3D2Ef",name:W49taZxHk="Name",deepLink:CahSXLCZe="Deep Link",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"hqxC3D2Ef",variant,transitions,variantClassNames,cycleOrder});const variantProps=React.useMemo(()=>({}),[]);const addVariantProps=useAddVariantProps(baseVariant,gestureVariant,variantProps);const defaultLayoutId=useRandomID();return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-GAxNs",classNames),style:{"display":"contents"},children:/*#__PURE__*/ _jsx(motion.div,{...restProps,layoutId:"hqxC3D2Ef",className:cx("framer-dwokwr",className),style:{"backgroundColor":"rgb(255, 255, 255)",...style},"data-framer-name":"ProjectCard",transition:transition,ref:ref,...addVariantProps("hqxC3D2Ef"),children:/*#__PURE__*/ _jsxs(Stack,{layoutId:"DciVcpLt7",className:"framer-1gmvwcd",style:{"borderBottomLeftRadius":4,"borderBottomRightRadius":4,"borderTopRightRadius":4,"borderTopLeftRadius":4,"boxShadow":"0px 1px 8px 8px rgba(0,0,0,0.25)","backgroundColor":"rgb(240, 251, 255)","--border-bottom-width":"1px","--border-top-width":"1px","--border-right-width":"1px","--border-left-width":"1px","--border-style":"solid","--border-color":"rgb(238, 238, 238)"},direction:"vertical",distribution:"start",alignment:"start",gap:20,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"auto","height":"auto","padding":"59px 178px 59px 178px"},center:false,"data-border":true,transition:transition,...addVariantProps("DciVcpLt7"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Times New Roman\", serif","--framer-text-color":"rgb(0, 0, 0)","--framer-font-size":"36px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Times New Roman"],layoutId:"nixw5hkZK",className:"framer-3k1pje",rawHTML:"<div style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><div style='direction: ltr; font-size: 0'><span style=''>Name</span><br></div></div>",text:W49taZxHk,transition:transition,...addVariantProps("nixw5hkZK")}),/*#__PURE__*/ _jsx(Text,{style:{"opacity":0.53,"--framer-font-family":"\"Georgia\", serif","--framer-text-color":"rgb(255, 0, 0)","--framer-font-size":"16px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"underline","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Georgia"],layoutId:"xt0VMVoRX",className:"framer-1efzjhq",rawHTML:"<div style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><div style='direction: ltr; font-size: 0'><span style=''>Deep Link</span><br></div></div>",text:CahSXLCZe,transition:transition,...addVariantProps("xt0VMVoRX")})]})})})}));});const css=[".framer-GAxNs [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}",".framer-GAxNs * { box-sizing: border-box; }",".framer-GAxNs .framer-dwokwr { position: relative; overflow: visible; width: 200px; height: 200px; }",".framer-GAxNs .framer-1gmvwcd { position: absolute; overflow: visible; width: min-content; height: min-content; left: -121px; top: 0px; flex: none; }",".framer-GAxNs .framer-3k1pje, .framer-GAxNs .framer-1efzjhq { position: relative; overflow: visible; width: auto; height: auto; flex: none; white-space: pre; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 200
 * @framerIntrinsicWidth 200
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["fixed", "fixed"]}}}
 * @framerVariables {"W49taZxHk": "name", "CahSXLCZe": "deepLink"}
 */ const FramerJyoKQ0mea=withCSS(Component,css);export default FramerJyoKQ0mea;FramerJyoKQ0mea.displayName="Project";FramerJyoKQ0mea.defaultProps={"width":200,"height":200};addPropertyControls(FramerJyoKQ0mea,{"W49taZxHk":{"type":ControlType.String,"title":"Name","defaultValue":"Name","displayTextArea":false},"CahSXLCZe":{"type":ControlType.String,"title":"Deep Link","defaultValue":"Deep Link","placeholder":"Deep Link","displayTextArea":false}});addFonts(FramerJyoKQ0mea,[]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FramerJyoKQ0mea","slots":[],"annotations":{"framerIntrinsicWidth":"200","framerContractVersion":"1","framerIntrinsicHeight":"200","framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"fixed\", \"fixed\"]}}}","framerVariables":"{\"W49taZxHk\": \"name\", \"CahSXLCZe\": \"deepLink\"}"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./JyoKQ0mea.map