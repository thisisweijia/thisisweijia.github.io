"use strict";(self.webpackChunkcara=self.webpackChunkcara||[]).push([[527],{2007:function(e,t,r){r.r(t),r.d(t,{default:function(){return tt}});var o=r(7294),i=r(8557),a=r(9709),n=r(977),l=r(5987),s=r(870),c=r(188),d=r(7825),p=r(7548);var g=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,f=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return g.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),h=r(6494),u=r.n(h),m=function(e,t){var r=u()({},e,t);for(var o in e){var i;e[o]&&"object"==typeof t[o]&&u()(r,((i={})[o]=u()(e[o],t[o]),i))}return r},b={breakpoints:[40,52,64].map((function(e){return e+"em"}))},y=function(e){return"@media screen and (min-width: "+e+")"},k=function(e,t){return w(t,e,e)},w=function(e,t,r,o,i){for(t=t&&t.split?t.split("."):[t],o=0;o<t.length;o++)e=e?e[t[o]]:i;return e===i?r:e},v=function e(t){var r={},o=function(e){var o,i,a={},n=!1,l=e.theme&&e.theme.disableStyledSystemCache;for(var s in e)if(t[s]){var c=t[s],d=e[s],p=w(e.theme,c.scale,c.defaults);if("object"!=typeof d)u()(a,c(d,p,e));else{if(r.breakpoints=!l&&r.breakpoints||w(e.theme,"breakpoints",b.breakpoints),Array.isArray(d)){r.media=!l&&r.media||[null].concat(r.breakpoints.map(y)),a=m(a,Z(r.media,c,p,d,e));continue}null!==d&&(a=m(a,x(r.breakpoints,c,p,d,e)),n=!0)}}return n&&(o=a,i={},Object.keys(o).sort((function(e,t){return e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"})})).forEach((function(e){i[e]=o[e]})),a=i),a};o.config=t,o.propNames=Object.keys(t),o.cache=r;var i=Object.keys(t).filter((function(e){return"config"!==e}));return i.length>1&&i.forEach((function(r){var i;o[r]=e(((i={})[r]=t[r],i))})),o},Z=function(e,t,r,o,i){var a={};return o.slice(0,e.length).forEach((function(o,n){var l,s=e[n],c=t(o,r,i);s?u()(a,((l={})[s]=u()({},a[s],c),l)):u()(a,c)})),a},x=function(e,t,r,o,i){var a={};for(var n in o){var l=e[n],s=t(o[n],r,i);if(l){var c,d=y(l);u()(a,((c={})[d]=u()({},a[d],s),c))}else u()(a,s)}return a},S=function(e){var t=e.properties,r=e.property,o=e.scale,i=e.transform,a=void 0===i?k:i,n=e.defaultScale;t=t||[r];var l=function(e,r,o){var i={},n=a(e,r,o);if(null!==n)return t.forEach((function(e){i[e]=n})),i};return l.scale=o,l.defaults=n,l},R=function(e){void 0===e&&(e={});var t={};return Object.keys(e).forEach((function(r){var o=e[r];t[r]=!0!==o?"function"!=typeof o?S(o):o:S({property:r,scale:r})})),v(t)},C=function(){for(var e={},t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];r.forEach((function(t){t&&t.config&&u()(e,t.config)}));var i=v(e);return i},T=R({width:{property:"width",scale:"sizes",transform:function(e,t){return w(t,e,!function(e){return"number"==typeof e&&!isNaN(e)}(e)||e>1?e:100*e+"%")}},height:{property:"height",scale:"sizes"},minWidth:{property:"minWidth",scale:"sizes"},minHeight:{property:"minHeight",scale:"sizes"},maxWidth:{property:"maxWidth",scale:"sizes"},maxHeight:{property:"maxHeight",scale:"sizes"},size:{properties:["width","height"],scale:"sizes"},overflow:!0,overflowX:!0,overflowY:!0,display:!0,verticalAlign:!0}),_=T,L={color:{property:"color",scale:"colors"},backgroundColor:{property:"backgroundColor",scale:"colors"},opacity:!0};L.bg=L.backgroundColor;var A=R(L),B=A,E=R({fontFamily:{property:"fontFamily",scale:"fonts"},fontSize:{property:"fontSize",scale:"fontSizes",defaultScale:[12,14,16,20,24,32,48,64,72]},fontWeight:{property:"fontWeight",scale:"fontWeights"},lineHeight:{property:"lineHeight",scale:"lineHeights"},letterSpacing:{property:"letterSpacing",scale:"letterSpacings"},textAlign:!0,fontStyle:!0}),W=E,z=R({alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:!0,flex:!0,flexGrow:!0,flexShrink:!0,flexBasis:!0,justifySelf:!0,alignSelf:!0,order:!0}),M=z,D={space:[0,4,8,16,32,64,128,256,512]},j=R({gridGap:{property:"gridGap",scale:"space",defaultScale:D.space},gridColumnGap:{property:"gridColumnGap",scale:"space",defaultScale:D.space},gridRowGap:{property:"gridRowGap",scale:"space",defaultScale:D.space},gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridAutoRows:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0}),P=j,I={border:{property:"border",scale:"borders"},borderWidth:{property:"borderWidth",scale:"borderWidths"},borderStyle:{property:"borderStyle",scale:"borderStyles"},borderColor:{property:"borderColor",scale:"colors"},borderRadius:{property:"borderRadius",scale:"radii"},borderTop:{property:"borderTop",scale:"borders"},borderTopLeftRadius:{property:"borderTopLeftRadius",scale:"radii"},borderTopRightRadius:{property:"borderTopRightRadius",scale:"radii"},borderRight:{property:"borderRight",scale:"borders"},borderBottom:{property:"borderBottom",scale:"borders"},borderBottomLeftRadius:{property:"borderBottomLeftRadius",scale:"radii"},borderBottomRightRadius:{property:"borderBottomRightRadius",scale:"radii"},borderLeft:{property:"borderLeft",scale:"borders"},borderX:{properties:["borderLeft","borderRight"],scale:"borders"},borderY:{properties:["borderTop","borderBottom"],scale:"borders"},borderTopWidth:{property:"borderTopWidth",scale:"borderWidths"},borderTopColor:{property:"borderTopColor",scale:"colors"},borderTopStyle:{property:"borderTopStyle",scale:"borderStyles"}};I.borderTopLeftRadius={property:"borderTopLeftRadius",scale:"radii"},I.borderTopRightRadius={property:"borderTopRightRadius",scale:"radii"},I.borderBottomWidth={property:"borderBottomWidth",scale:"borderWidths"},I.borderBottomColor={property:"borderBottomColor",scale:"colors"},I.borderBottomStyle={property:"borderBottomStyle",scale:"borderStyles"},I.borderBottomLeftRadius={property:"borderBottomLeftRadius",scale:"radii"},I.borderBottomRightRadius={property:"borderBottomRightRadius",scale:"radii"},I.borderLeftWidth={property:"borderLeftWidth",scale:"borderWidths"},I.borderLeftColor={property:"borderLeftColor",scale:"colors"},I.borderLeftStyle={property:"borderLeftStyle",scale:"borderStyles"},I.borderRightWidth={property:"borderRightWidth",scale:"borderWidths"},I.borderRightColor={property:"borderRightColor",scale:"colors"},I.borderRightStyle={property:"borderRightStyle",scale:"borderStyles"};var N=R(I),X=N,H={background:!0,backgroundImage:!0,backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0};H.bgImage=H.backgroundImage,H.bgSize=H.backgroundSize,H.bgPosition=H.backgroundPosition,H.bgRepeat=H.backgroundRepeat;var O=R(H),G=O,F={space:[0,4,8,16,32,64,128,256,512]},Y=R({position:!0,zIndex:{property:"zIndex",scale:"zIndices"},top:{property:"top",scale:"space",defaultScale:F.space},right:{property:"right",scale:"space",defaultScale:F.space},bottom:{property:"bottom",scale:"space",defaultScale:F.space},left:{property:"left",scale:"space",defaultScale:F.space}}),U=Y,q={space:[0,4,8,16,32,64,128,256,512]},V=function(e){return"number"==typeof e&&!isNaN(e)},K=function(e,t){if(!V(e))return w(t,e,e);var r=e<0,o=Math.abs(e),i=w(t,o,o);return V(i)?i*(r?-1:1):r?"-"+i:i},Q={};Q.margin={margin:{property:"margin",scale:"space",transform:K,defaultScale:q.space},marginTop:{property:"marginTop",scale:"space",transform:K,defaultScale:q.space},marginRight:{property:"marginRight",scale:"space",transform:K,defaultScale:q.space},marginBottom:{property:"marginBottom",scale:"space",transform:K,defaultScale:q.space},marginLeft:{property:"marginLeft",scale:"space",transform:K,defaultScale:q.space},marginX:{properties:["marginLeft","marginRight"],scale:"space",transform:K,defaultScale:q.space},marginY:{properties:["marginTop","marginBottom"],scale:"space",transform:K,defaultScale:q.space}},Q.margin.m=Q.margin.margin,Q.margin.mt=Q.margin.marginTop,Q.margin.mr=Q.margin.marginRight,Q.margin.mb=Q.margin.marginBottom,Q.margin.ml=Q.margin.marginLeft,Q.margin.mx=Q.margin.marginX,Q.margin.my=Q.margin.marginY,Q.padding={padding:{property:"padding",scale:"space",defaultScale:q.space},paddingTop:{property:"paddingTop",scale:"space",defaultScale:q.space},paddingRight:{property:"paddingRight",scale:"space",defaultScale:q.space},paddingBottom:{property:"paddingBottom",scale:"space",defaultScale:q.space},paddingLeft:{property:"paddingLeft",scale:"space",defaultScale:q.space},paddingX:{properties:["paddingLeft","paddingRight"],scale:"space",defaultScale:q.space},paddingY:{properties:["paddingTop","paddingBottom"],scale:"space",defaultScale:q.space}},Q.padding.p=Q.padding.padding,Q.padding.pt=Q.padding.paddingTop,Q.padding.pr=Q.padding.paddingRight,Q.padding.pb=Q.padding.paddingBottom,Q.padding.pl=Q.padding.paddingLeft,Q.padding.px=Q.padding.paddingX,Q.padding.py=Q.padding.paddingY;var J=C(R(Q.margin),R(Q.padding)),$=J,ee=R({boxShadow:{property:"boxShadow",scale:"shadows"},textShadow:{property:"textShadow",scale:"shadows"}});function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}var re=function(e,t,r,o,i){for(t=t&&t.split?t.split("."):[t],o=0;o<t.length;o++)e=e?e[t[o]]:i;return e===i?r:e},oe=[40,52,64].map((function(e){return e+"em"})),ie={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},ae={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},ne={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},le={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},se=function(e,t){if("number"!=typeof t||t>=0)return re(e,t,t);var r=Math.abs(t),o=re(e,r,r);return"string"==typeof o?"-"+o:-1*o},ce=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce((function(e,t){var r;return te({},e,((r={})[t]=se,r))}),{}),de=function e(t){return function(r){void 0===r&&(r={});var o=te({},ie,{},r.theme||r),i={},a=function(e){return function(t){var r={},o=re(t,"breakpoints",oe),i=[null].concat(o.map((function(e){return"@media screen and (min-width: "+e+")"})));for(var a in e){var n="function"==typeof e[a]?e[a](t):e[a];if(null!=n)if(Array.isArray(n))for(var l=0;l<n.slice(0,i.length).length;l++){var s=i[l];s?(r[s]=r[s]||{},null!=n[l]&&(r[s][a]=n[l])):r[a]=n[l]}else r[a]=n}return r}}("function"==typeof t?t(o):t)(o);for(var n in a){var l=a[n],s="function"==typeof l?l(o):l;if("variant"!==n)if(s&&"object"==typeof s)i[n]=e(s)(o);else{var c=re(ae,n,n),d=re(le,c),p=re(o,d,re(o,c,{})),g=re(ce,c,re)(p,s,s);if(ne[c])for(var f=ne[c],h=0;h<f.length;h++)i[f[h]]=g;else i[c]=g}else i=te({},i,{},e(re(o,s))(o))}return i}},pe=function(e){var t,r,o=e.scale,i=e.prop,a=void 0===i?"variant":i,n=e.variants,l=void 0===n?{}:n,s=e.key;(r=Object.keys(l).length?function(e,t,r){return de(w(t,e,null))(r.theme)}:function(e,t){return w(t,e,null)}).scale=o||s,r.defaults=l;var c=((t={})[a]=r,t);return v(c)},ge=pe({key:"buttons"}),fe=pe({key:"textStyles",prop:"textStyle"}),he=pe({key:"colorStyles",prop:"colors"}),ue=(_.width,_.height,_.minWidth,_.minHeight,_.maxWidth,_.maxHeight,_.size,_.verticalAlign,_.display,_.overflow,_.overflowX,_.overflowY,B.opacity,W.fontSize,W.fontFamily,W.fontWeight,W.lineHeight,W.textAlign,W.fontStyle,W.letterSpacing,M.alignItems,M.alignContent,M.justifyItems,M.justifyContent,M.flexWrap,M.flexDirection,M.flex,M.flexGrow,M.flexShrink,M.flexBasis,M.justifySelf,M.alignSelf,M.order,P.gridGap,P.gridColumnGap,P.gridRowGap,P.gridColumn,P.gridRow,P.gridAutoFlow,P.gridAutoColumns,P.gridAutoRows,P.gridTemplateColumns,P.gridTemplateRows,P.gridTemplateAreas,P.gridArea,X.borderWidth,X.borderStyle,X.borderColor,X.borderTop,X.borderRight,X.borderBottom,X.borderLeft,X.borderRadius,G.backgroundImage,G.backgroundSize,G.backgroundPosition,G.backgroundRepeat,U.zIndex,U.top,U.right,U.bottom,U.left,function(e){var t=new RegExp("^("+e.join("|")+")$");return(0,p.Z)((function(e){return f(e)&&!t.test(e)}))}),me=(ue(C(J,E,A,T,z,N,O,Y,j,ee,ge,fe,he).propNames),r(3431)),be=["size"];var ye=[].concat((0,s.Z)($.propNames),(0,s.Z)(B.propNames)),ke=function(e){return ye.includes(e)},we=ue(ye),ve=(0,c.Z)("div",{shouldForwardProp:we})({boxSizing:"border-box",margin:0,minWidth:0},(function(e){return(0,d.iv)(e.__css)(e.theme)}),(function(e){var t=e.theme,r=e.variant,o=e.__themeKey,i=void 0===o?"variants":o;return(0,d.iv)((0,d.U2)(t,i+"."+r,(0,d.U2)(t,r)))}),$,B,(function(e){return(0,d.iv)(e.sx)(e.theme)}),(function(e){return e.css}));ve.displayName="Box";var Ze=(0,c.Z)(ve)({display:"flex"});function xe(){return(xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}Ze.displayName="Flex";var Se=o.forwardRef((function(e,t){return o.createElement(ve,xe({ref:t,as:"a",variant:"styles.a"},e,{__themeKey:"links"}))})),Re=function(e){var t=e.size,r=void 0===t?24:t,i=(0,l.Z)(e,be);return o.createElement(ve,xe({as:"svg",xmlns:"http://www.w3.org/2000/svg",width:r+"",height:r+"",viewBox:"0 0 24 24",fill:"currentcolor"},i))};Re.displayName="SVG";var Ce=function(e){return function(t){var r={};for(var o in t)e(o||"")&&(r[o]=t[o]);return r}},Te=/^m[trblxy]?$/,_e=(Ce((function(e){return Te.test(e)})),Ce((function(e){return!Te.test(e)})),(0,me.F4)({from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}}),Ce(ke),Ce((function(e){return!ke(e)})),r(7686)),Le=r(6466),Ae=r(7971),Be=r(6722),Ee=r(4032),We=r(3366),ze=r(4983),Me=["components"],De={_frontmatter:{}};function je(e){var t=e.components,r=(0,We.Z)(e,Me);return(0,ze.kt)("wrapper",Object.assign({},De,r,{components:t,mdxType:"MDXLayout"}),(0,ze.kt)("h1",null,"Hi, I'm Weijia Sun"),(0,ze.kt)("p",null,"An astrophysicist interested in stellar evolution and star clusters"))}je.isMDXComponent=!0;var Pe,Ie=function(e){var t=e.offset,r=e.factor,o=void 0===r?1:r;return(0,n.tZ)("div",null,(0,n.tZ)(_e.Z,{speed:.2,offset:t,factor:o},(0,n.tZ)(Ee.w6,null,(0,n.tZ)(Be.Z,{icon:"triangle",hiddenMobile:!0,width:48,stroke:!0,color:"icon_orange",left:"10%",top:"20%"}),(0,n.tZ)(Be.Z,{icon:"hexa",width:48,stroke:!0,color:"icon_red",left:"60%",top:"70%"}),(0,n.tZ)(Be.Z,{icon:"box",width:6,color:"icon_darker",left:"60%",top:"15%"})),(0,n.tZ)(Ee.sr,null,(0,n.tZ)(Be.Z,{icon:"arrowUp",hiddenMobile:!0,width:16,color:"icon_blue",left:"80%",top:"10%"}),(0,n.tZ)(Be.Z,{icon:"triangle",width:12,stroke:!0,color:"icon_brightest",left:"90%",top:"50%"}),(0,n.tZ)(Be.Z,{icon:"circle",width:16,color:"icon_darker",left:"70%",top:"90%"}),(0,n.tZ)(Be.Z,{icon:"triangle",width:16,stroke:!0,color:"icon_darkest",left:"30%",top:"65%"}),(0,n.tZ)(Be.Z,{icon:"cross",width:16,stroke:!0,color:"icon_pink",left:"28%",top:"15%"}),(0,n.tZ)(Be.Z,{icon:"circle",width:6,color:"icon_darkest",left:"75%",top:"10%"}),(0,n.tZ)(Be.Z,{icon:"upDown",hiddenMobile:!0,width:8,color:"icon_darkest",left:"45%",top:"10%"})),(0,n.tZ)(Be.Z,{icon:"circle",hiddenMobile:!0,width:24,color:"icon_darker",left:"5%",top:"70%"}),(0,n.tZ)(Be.Z,{icon:"circle",width:6,color:"icon_darkest",left:"4%",top:"20%"}),(0,n.tZ)(Be.Z,{icon:"circle",width:12,color:"icon_darkest",left:"50%",top:"60%"}),(0,n.tZ)(Be.Z,{icon:"upDown",width:8,color:"icon_darkest",left:"95%",top:"90%"}),(0,n.tZ)(Be.Z,{icon:"upDown",hiddenMobile:!0,width:24,color:"icon_darker",left:"40%",top:"80%"}),(0,n.tZ)(Be.Z,{icon:"triangle",width:8,stroke:!0,color:"icon_darker",left:"25%",top:"5%"}),(0,n.tZ)(Be.Z,{icon:"circle",width:64,color:"icon_green",left:"95%",top:"5%"}),(0,n.tZ)(Be.Z,{icon:"box",hiddenMobile:!0,width:64,color:"icon_purple",left:"5%",top:"90%"}),(0,n.tZ)(Be.Z,{icon:"box",width:6,color:"icon_darkest",left:"10%",top:"10%"}),(0,n.tZ)(Be.Z,{icon:"box",width:12,color:"icon_darkest",left:"40%",top:"30%"}),(0,n.tZ)(Be.Z,{icon:"hexa",width:16,stroke:!0,color:"icon_darker",left:"10%",top:"50%"}),(0,n.tZ)(Be.Z,{icon:"hexa",width:8,stroke:!0,color:"icon_darker",left:"80%",top:"70%"})),(0,n.tZ)(Ze,{sx:{svg:{width:"20px",height:"20px",".primary":{color:"iconPrimary"},".secondary":{color:"iconSecondary"},mr:2},justifyContent:"center",alignItems:"center",color:"text"}},(0,n.tZ)(Ae.Z,{sx:{variant:"texts.bigger"},speed:.4,offset:t,factor:o},(0,n.tZ)(Le.Z,null,(0,n.tZ)(je,null)),(0,n.tZ)("img",{src:"avatar.jpg",width:"256",style:{"border-radius":"50%"}}))))},Ne=["components"],Xe=(Pe="ProjectCard",function(e){return console.warn("Component "+Pe+" was not imported, exported, or provided by MDXProvider as global scope"),(0,ze.kt)("div",e)}),He={_frontmatter:{}};function Oe(e){var t=e.components,r=(0,We.Z)(e,Ne);return(0,ze.kt)("wrapper",Object.assign({},He,r,{components:t,mdxType:"MDXLayout"}),(0,ze.kt)("h2",null,"Leading Research"),(0,ze.kt)(Xe,{title:"Stellar rotation in star clusters",link:"pssrr",bg:"linear-gradient(to right, #D4145A 0%, #FBB03B 100%)",mdxType:"ProjectCard"},"A series of works to answer what's the underlying reason for split main sequence and extended main sequence turnoff, two unexpected features recently discovered in young and intermediate-age star clusters"),(0,ze.kt)(Xe,{title:"Stellar rotation of early-type stars in the fields",link:"ESRS",bg:"linear-gradient(to right, #662D8C 0%, #ED1E79 100%)",mdxType:"ProjectCard"},"The (so far) largest (40,034) catalog of early-type stars with accurate stellar rotation"),(0,ze.kt)(Xe,{title:"Blue straggler stars in the Magellanic Clouds clusters",link:"bssrp",bg:"linear-gradient(to right, #009245 0%, #FCEE21 100%)",mdxType:"ProjectCard"},"Unvealing the formation channel of blue straggler stars in the Magellanic Clouds clusters and Using them as a probe for dynamical state of the clusters"),(0,ze.kt)(Xe,{title:"Planetary nebulae in globular clusters",link:"pngc",bg:"linear-gradient(to right, #D585FF 0%, #00FFEE 100%)",mdxType:"ProjectCard"},"A detection of planetary nebulae in a globular cluster in the Virgo cluster."))}Oe.isMDXComponent=!0;var Ge=function(e){var t=e.offset,r=e.factor,o=void 0===r?2:r;return(0,n.tZ)("div",null,(0,n.tZ)(_e.Z,{bg:"linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)",sx:{clipPath:"polygon(0 15%, 100% 25%, 100% 85%, 0 75%)"},speed:-.2,offset:1.1,factor:o}),(0,n.tZ)(Ae.Z,{speed:.4,offset:t+.2,factor:o},(0,n.tZ)(Le.Z,null,(0,n.tZ)("div",{sx:{display:"grid",gridGap:[4,4,4,5],gridTemplateColumns:["1fr","1fr","repeat(2, 1fr)"],h2:{gridColumn:"-1/1"}}},(0,n.tZ)(Oe,null)))),(0,n.tZ)(_e.Z,{speed:.1,offset:t,factor:o},(0,n.tZ)(Ee.w6,null,(0,n.tZ)(Be.Z,{icon:"box",width:6,color:"icon_brightest",left:"85%",top:"75%"}),(0,n.tZ)(Be.Z,{icon:"upDown",width:8,color:"icon_teal",left:"70%",top:"20%"}),(0,n.tZ)(Be.Z,{icon:"triangle",width:8,stroke:!0,color:"icon_orange",left:"25%",top:"5%"}),(0,n.tZ)(Be.Z,{icon:"circle",hiddenMobile:!0,width:24,color:"icon_brightest",left:"17%",top:"60%"})),(0,n.tZ)(Ee.sr,null,(0,n.tZ)(Be.Z,{icon:"arrowUp",hiddenMobile:!0,width:16,color:"icon_green",left:"20%",top:"90%"}),(0,n.tZ)(Be.Z,{icon:"triangle",width:12,stroke:!0,color:"icon_brightest",left:"90%",top:"30%"}),(0,n.tZ)(Be.Z,{icon:"circle",width:16,color:"icon_yellow",left:"70%",top:"90%"}),(0,n.tZ)(Be.Z,{icon:"triangle",hiddenMobile:!0,width:16,stroke:!0,color:"icon_teal",left:"18%",top:"75%"}),(0,n.tZ)(Be.Z,{icon:"circle",width:6,color:"icon_brightest",left:"75%",top:"10%"}),(0,n.tZ)(Be.Z,{icon:"upDown",hiddenMobile:!0,width:8,color:"icon_green",left:"45%",top:"10%"})),(0,n.tZ)(Be.Z,{icon:"circle",hiddenMobile:!0,width:6,color:"icon_brightest",left:"4%",top:"20%"}),(0,n.tZ)(Be.Z,{icon:"circle",width:12,color:"icon_pink",left:"80%",top:"60%"}),(0,n.tZ)(Be.Z,{icon:"box",width:6,color:"icon_orange",left:"10%",top:"10%"}),(0,n.tZ)(Be.Z,{icon:"box",width:12,color:"icon_yellow",left:"29%",top:"26%"}),(0,n.tZ)(Be.Z,{icon:"hexa",width:16,stroke:!0,color:"icon_red",left:"75%",top:"30%"}),(0,n.tZ)(Be.Z,{icon:"hexa",width:8,stroke:!0,color:"icon_yellow",left:"80%",top:"70%"})))},Fe=["components"],Ye={_frontmatter:{}};function Ue(e){var t=e.components,r=(0,We.Z)(e,Fe);return(0,ze.kt)("wrapper",Object.assign({},Ye,r,{components:t,mdxType:"MDXLayout"}),(0,ze.kt)("h2",null,"About"),(0,ze.kt)("p",null,"I'm Weijia Sun (孙唯佳), a PhD candidate in ",(0,ze.kt)("a",{parentName:"p",href:"http://astro.pku.edu.cn/"},"Department of Physics")," and ",(0,ze.kt)("a",{parentName:"p",href:"http://kiaa.pku.edu.cn/"},"Kavli Institute for Astronomy and Astrophysics")," (KIAA) at ",(0,ze.kt)("a",{parentName:"p",href:"http://english.pku.edu.cn/"},"Peking University"),", where I work with ",(0,ze.kt)("a",{parentName:"p",href:"http://astro-expat.info/"},"Richard de Grijs")," and ",(0,ze.kt)("a",{parentName:"p",href:"https://www.iau.org/administration/membership/individual/335/"},"Licai Deng"),". My main research interest is star cluster evolution in terms of stellar rotation.           "),(0,ze.kt)("p",null,"These days, I'm using high-precision photometry and median-resolution spectroscopy to study the connection between single star evolution and cluster evolution. ",(0,ze.kt)("em",{parentName:"p"},"Stellar rotation")," is my thing. I am also interested in the stellar evolution, e.g., the binaries and all the other interesting features related to clusters. 😀"),(0,ze.kt)("p",null,"You can find my CV ",(0,ze.kt)("a",{parentName:"p",href:"https://docs.google.com/viewer?url=https://github.com/thisisweijia/CV/raw/master/CV.pdf"},"here"),"."))}Ue.isMDXComponent=!0;var qe=function(e){var t=e.offset,r=e.factor,i=void 0===r?1:r;return o.createElement("div",null,o.createElement(_e.Z,{bg:"divider",clipPath:"polygon(0 16%, 100% 4%, 100% 82%, 0 94%)",speed:.2,offset:t,factor:i}),o.createElement(_e.Z,{speed:.1,offset:t,factor:i},o.createElement(Ee.w6,null,o.createElement(Be.Z,{icon:"box",hiddenMobile:!0,width:6,color:"icon_blue",left:"50%",top:"75%"}),o.createElement(Be.Z,{icon:"upDown",hiddenMobile:!0,width:8,color:"icon_darkest",left:"70%",top:"20%"}),o.createElement(Be.Z,{icon:"triangle",width:8,stroke:!0,color:"icon_darkest",left:"25%",top:"5%"}),o.createElement(Be.Z,{icon:"upDown",hiddenMobile:!0,width:24,color:"icon_orange",left:"80%",top:"80%"})),o.createElement(Ee.sr,null,o.createElement(Be.Z,{icon:"arrowUp",hiddenMobile:!0,width:16,color:"icon_purple",left:"5%",top:"80%"}),o.createElement(Be.Z,{icon:"triangle",width:12,stroke:!0,color:"icon_brightest",left:"95%",top:"50%"}),o.createElement(Be.Z,{icon:"circle",hiddenMobile:!0,width:6,color:"icon_brightest",left:"85%",top:"15%"}),o.createElement(Be.Z,{icon:"upDown",hiddenMobile:!0,width:8,color:"icon_darkest",left:"45%",top:"10%"})),o.createElement(Be.Z,{icon:"circle",hiddenMobile:!0,width:6,color:"icon_brightest",left:"4%",top:"20%"}),o.createElement(Be.Z,{icon:"circle",width:12,color:"icon_darkest",left:"70%",top:"60%"}),o.createElement(Be.Z,{icon:"box",width:6,color:"icon_orange",left:"10%",top:"10%"}),o.createElement(Be.Z,{icon:"box",width:12,color:"icon_darkest",left:"20%",top:"30%"}),o.createElement(Be.Z,{icon:"hexa",width:8,stroke:!0,color:"icon_darkest",left:"80%",top:"70%"})),o.createElement(Ae.Z,{speed:.4,offset:t,factor:i},o.createElement(Le.Z,null,o.createElement(Ue,null))))},Ve=r(5078),Ke=function(){var e=(0,Ve.If)(),t=e[0],r=e[1],o="dark"===t;return(0,n.tZ)(ve,{as:"footer",variant:"footer"},(0,n.tZ)("button",{sx:{variant:"buttons.toggle",fontWeight:"semibold",display:"block",mx:"auto",mb:3},onClick:function(e){r(o?"light":"dark")},type:"button","aria-label":"Toggle dark mode"},o?"Light":"Dark"),"Copyright © ",(new Date).getFullYear(),". All rights reserved.",(0,n.tZ)("br",null),(0,n.tZ)(Ze,{sx:{justifyContent:"center",alignItems:"center",mt:3,color:"text",fontWeight:"semibold",a:{color:"text"}}},o?(0,n.tZ)("img",{width:"30",height:"30",src:"https://img.lekoarts.de/gatsby/logo_v2-light_w30.png",alt:"LekoArts Logo"}):(0,n.tZ)("img",{width:"30",height:"30",src:"https://img.lekoarts.de/gatsby/logo_v2_w30.png",alt:"LekoArts Logo"})," ",(0,n.tZ)(Se,{"aria-label":"Link to the theme's GitHub repository",sx:{ml:2},href:"https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-cara"},"Theme"),(0,n.tZ)("div",{sx:{mx:1}},"by")," ",(0,n.tZ)(Se,{"aria-label":"Link to the theme author's website",href:"https://www.lekoarts.de?utm_source=cara&utm_medium=Theme"},"LekoArts")))},Qe=["components"],Je={_frontmatter:{}};function $e(e){var t=e.components,r=(0,We.Z)(e,Qe);return(0,ze.kt)("wrapper",Object.assign({},Je,r,{components:t,mdxType:"MDXLayout"}),(0,ze.kt)("h2",null,"Get in touch"),(0,ze.kt)("p",null,"Say ",(0,ze.kt)("a",{parentName:"p",href:"mailto:this.is.weijia@gmail.com"},"Hi")," or find me on other platforms:\n",(0,ze.kt)("a",{parentName:"p",href:"https://twitter.com/weijiasunastro"},"Twitter"),", ",(0,ze.kt)("a",{parentName:"p",href:"https://github.com/swj1442291549"},"Github"),", ",(0,ze.kt)("a",{parentName:"p",href:"https://ui.adsabs.harvard.edu/search/fq=%7B!type%3Daqp%20v%3D%24fq_database%7D&fq_database=(database%3Aastronomy)&p_=0&q=orcid%3A0000-0002-3279-0233&sort=date%20desc%2C%20bibcode%20desc"},"ADS")," and ",(0,ze.kt)("a",{parentName:"p",href:"https://scholar.google.com/citations?view_op=list_works&gmla=AJsN-F6Xc6zddYTWYKEN_2HlJNdG6p6UKC-ybGfS_Ty8jQSeTK02TifQDEvGdq-rPnHAL64DT_W7hibXNK39pO5GXl1g6lUSNK0zDJ1J2WtPz6gGCCOyfVI&user=CVAmcKgAAAAJ"},"Google Scholar")),(0,ze.kt)("p",null,"Department of Astronomy, School of Physics ",(0,ze.kt)("br",null),"\n& Kavli Institute for Astronomy and Astrophysics ",(0,ze.kt)("br",null),"\nPeking University ",(0,ze.kt)("br",null),"\nNo.5, YiHeYuan Road, Haidian District ",(0,ze.kt)("br",null),"\nBeijing 100871, China ",(0,ze.kt)("br",null)),(0,ze.kt)("p",null,"Email: ",(0,ze.kt)("a",{parentName:"p",href:"mailto:this.is.weijia@gmail.com"},"this.is.weijia@gmail.com")," ",(0,ze.kt)("br",null),"\nORCID: ",(0,ze.kt)("a",{parentName:"p",href:"https://orcid.org/0000-0002-3279-0233"},"0000-0002-3279-0233")))}$e.isMDXComponent=!0;var et=function(e){var t=e.offset,r=e.factor,o=void 0===r?1:r;return(0,n.tZ)("div",null,(0,n.tZ)(_e.Z,{fill:"divider",speed:.2,offset:t,factor:o},(0,n.tZ)("div",{sx:{position:"absolute",bottom:0,width:"full",transform:"matrix(1, 0, 0, -1, 0, 0)"}},(0,n.tZ)("div",{sx:{position:"relative",height:"full",svg:{width:"100%",height:"40vh"},path:{animation:(0,Ee.Ry)("20s")}}},(0,n.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",id:"contact-wave",viewBox:"0 0 800 338.05",preserveAspectRatio:"none"},(0,n.tZ)("path",null,(0,n.tZ)("animate",{attributeName:"d",values:"M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z",repeatCount:"indefinite",dur:"30s"})))))),(0,n.tZ)(Ae.Z,{speed:.4,offset:t,factor:o},(0,n.tZ)(Le.Z,null,(0,n.tZ)($e,null)),(0,n.tZ)(Ke,null)),(0,n.tZ)(_e.Z,{speed:.1,offset:t,factor:o},(0,n.tZ)(Ee.w6,null,(0,n.tZ)(Be.Z,{icon:"upDown",hiddenMobile:!0,width:8,color:"icon_darkest",left:"70%",top:"20%"}),(0,n.tZ)(Be.Z,{icon:"triangle",width:8,stroke:!0,color:"icon_darkest",left:"25%",top:"5%"})),(0,n.tZ)(Ee.sr,null,(0,n.tZ)(Be.Z,{icon:"triangle",width:12,stroke:!0,color:"icon_brightest",left:"95%",top:"50%"}),(0,n.tZ)(Be.Z,{icon:"circle",width:6,color:"icon_brightest",left:"85%",top:"15%"}),(0,n.tZ)(Be.Z,{icon:"upDown",hiddenMobile:!0,width:8,color:"icon_darkest",left:"45%",top:"10%"})),(0,n.tZ)(Be.Z,{icon:"circle",width:6,color:"icon_brightest",left:"4%",top:"20%"}),(0,n.tZ)(Be.Z,{icon:"circle",width:12,color:"icon_darkest",left:"70%",top:"60%"}),(0,n.tZ)(Be.Z,{icon:"box",width:12,color:"icon_darkest",left:"20%",top:"30%"}),(0,n.tZ)(Be.Z,{icon:"hexa",width:8,stroke:!0,color:"icon_darkest",left:"80%",top:"70%"})))},tt=function(){return o.createElement(a.Z,null,o.createElement(i.V,{pages:5},o.createElement(Ie,{offset:0,factor:1}),o.createElement(Ge,{offset:1,factor:2}),o.createElement(qe,{offset:3,factor:1}),o.createElement(et,{offset:4,factor:1})))}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-cara-src-templates-cara-tsx-b962af0da0866bf4d6ba.js.map