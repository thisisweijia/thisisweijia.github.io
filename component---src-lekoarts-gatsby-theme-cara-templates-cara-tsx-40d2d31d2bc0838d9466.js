"use strict";(self.webpackChunkcara=self.webpackChunkcara||[]).push([[166],{6867:function(e,t,r){var o=r(7225),i=o.Nothing,n=o.isNothing,a="undefined"!=typeof window?window:i,l="undefined"!=typeof document?document:i;e.exports.u9=a,e.exports.Gg=function(e){return!n(e)}},7225:function(e,t,r){r.r(t),r.d(t,{Nothing:function(){return i},deserialize:function(){return c},isNothing:function(){return a},isSomething:function(){return l},serialize:function(){return s},toBool:function(){return n}});var o,i=((o=function(){return i}).toString=o.toLocaleString=o[Symbol.toPrimitive]=function(){return""},o.valueOf=function(){return!1},new Proxy(Object.freeze(o),{get:function(e,t){return e.hasOwnProperty(t)?e[t]:i}})),n=function(e){return!(!e||!e.valueOf())},a=function(e){return e===i},l=function(e){return!(e===i||null==e)},s=function(e){return JSON.stringify(e,(function(e,t){return t===i?null:t}))},c=function(e){return JSON.parse(e,(function(e,t){return null===t?i:t}))}},5723:function(e,t,r){r.r(t),r.d(t,{default:function(){return rt}});var o=r(7294),i=r(8557),n=r(6867),a=r(9709),l=r(977),s=r(5987),c=r(870),d=r(188),p=r(7825),f=r(7548);var u=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,g=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return u.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),h=r(6494),m=r.n(h),b=function(e,t){var r=m()({},e,t);for(var o in e){var i;e[o]&&"object"==typeof t[o]&&m()(r,((i={})[o]=m()(e[o],t[o]),i))}return r},y={breakpoints:[40,52,64].map((function(e){return e+"em"}))},w=function(e){return"@media screen and (min-width: "+e+")"},k=function(e,t){return v(t,e,e)},v=function(e,t,r,o,i){for(t=t&&t.split?t.split("."):[t],o=0;o<t.length;o++)e=e?e[t[o]]:i;return e===i?r:e},Z=function e(t){var r={},o=function(e){var o,i,n={},a=!1,l=e.theme&&e.theme.disableStyledSystemCache;for(var s in e)if(t[s]){var c=t[s],d=e[s],p=v(e.theme,c.scale,c.defaults);if("object"!=typeof d)m()(n,c(d,p,e));else{if(r.breakpoints=!l&&r.breakpoints||v(e.theme,"breakpoints",y.breakpoints),Array.isArray(d)){r.media=!l&&r.media||[null].concat(r.breakpoints.map(w)),n=b(n,x(r.media,c,p,d,e));continue}null!==d&&(n=b(n,S(r.breakpoints,c,p,d,e)),a=!0)}}return a&&(o=n,i={},Object.keys(o).sort((function(e,t){return e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"})})).forEach((function(e){i[e]=o[e]})),n=i),n};o.config=t,o.propNames=Object.keys(t),o.cache=r;var i=Object.keys(t).filter((function(e){return"config"!==e}));return i.length>1&&i.forEach((function(r){var i;o[r]=e(((i={})[r]=t[r],i))})),o},x=function(e,t,r,o,i){var n={};return o.slice(0,e.length).forEach((function(o,a){var l,s=e[a],c=t(o,r,i);s?m()(n,((l={})[s]=m()({},n[s],c),l)):m()(n,c)})),n},S=function(e,t,r,o,i){var n={};for(var a in o){var l=e[a],s=t(o[a],r,i);if(l){var c,d=w(l);m()(n,((c={})[d]=m()({},n[d],s),c))}else m()(n,s)}return n},R=function(e){var t=e.properties,r=e.property,o=e.scale,i=e.transform,n=void 0===i?k:i,a=e.defaultScale;t=t||[r];var l=function(e,r,o){var i={},a=n(e,r,o);if(null!==a)return t.forEach((function(e){i[e]=a})),i};return l.scale=o,l.defaults=a,l},C=function(e){void 0===e&&(e={});var t={};return Object.keys(e).forEach((function(r){var o=e[r];t[r]=!0!==o?"function"!=typeof o?R(o):o:R({property:r,scale:r})})),Z(t)},T=function(){for(var e={},t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];r.forEach((function(t){t&&t.config&&m()(e,t.config)}));var i=Z(e);return i},_=C({width:{property:"width",scale:"sizes",transform:function(e,t){return v(t,e,!function(e){return"number"==typeof e&&!isNaN(e)}(e)||e>1?e:100*e+"%")}},height:{property:"height",scale:"sizes"},minWidth:{property:"minWidth",scale:"sizes"},minHeight:{property:"minHeight",scale:"sizes"},maxWidth:{property:"maxWidth",scale:"sizes"},maxHeight:{property:"maxHeight",scale:"sizes"},size:{properties:["width","height"],scale:"sizes"},overflow:!0,overflowX:!0,overflowY:!0,display:!0,verticalAlign:!0}),L=_,A={color:{property:"color",scale:"colors"},backgroundColor:{property:"backgroundColor",scale:"colors"},opacity:!0};A.bg=A.backgroundColor;var B=C(A),E=B,j=C({fontFamily:{property:"fontFamily",scale:"fonts"},fontSize:{property:"fontSize",scale:"fontSizes",defaultScale:[12,14,16,20,24,32,48,64,72]},fontWeight:{property:"fontWeight",scale:"fontWeights"},lineHeight:{property:"lineHeight",scale:"lineHeights"},letterSpacing:{property:"letterSpacing",scale:"letterSpacings"},textAlign:!0,fontStyle:!0}),W=j,z=C({alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:!0,flex:!0,flexGrow:!0,flexShrink:!0,flexBasis:!0,justifySelf:!0,alignSelf:!0,order:!0}),M=z,D={space:[0,4,8,16,32,64,128,256,512]},O=C({gridGap:{property:"gridGap",scale:"space",defaultScale:D.space},gridColumnGap:{property:"gridColumnGap",scale:"space",defaultScale:D.space},gridRowGap:{property:"gridRowGap",scale:"space",defaultScale:D.space},gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridAutoRows:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0}),P=O,N={border:{property:"border",scale:"borders"},borderWidth:{property:"borderWidth",scale:"borderWidths"},borderStyle:{property:"borderStyle",scale:"borderStyles"},borderColor:{property:"borderColor",scale:"colors"},borderRadius:{property:"borderRadius",scale:"radii"},borderTop:{property:"borderTop",scale:"borders"},borderTopLeftRadius:{property:"borderTopLeftRadius",scale:"radii"},borderTopRightRadius:{property:"borderTopRightRadius",scale:"radii"},borderRight:{property:"borderRight",scale:"borders"},borderBottom:{property:"borderBottom",scale:"borders"},borderBottomLeftRadius:{property:"borderBottomLeftRadius",scale:"radii"},borderBottomRightRadius:{property:"borderBottomRightRadius",scale:"radii"},borderLeft:{property:"borderLeft",scale:"borders"},borderX:{properties:["borderLeft","borderRight"],scale:"borders"},borderY:{properties:["borderTop","borderBottom"],scale:"borders"},borderTopWidth:{property:"borderTopWidth",scale:"borderWidths"},borderTopColor:{property:"borderTopColor",scale:"colors"},borderTopStyle:{property:"borderTopStyle",scale:"borderStyles"}};N.borderTopLeftRadius={property:"borderTopLeftRadius",scale:"radii"},N.borderTopRightRadius={property:"borderTopRightRadius",scale:"radii"},N.borderBottomWidth={property:"borderBottomWidth",scale:"borderWidths"},N.borderBottomColor={property:"borderBottomColor",scale:"colors"},N.borderBottomStyle={property:"borderBottomStyle",scale:"borderStyles"},N.borderBottomLeftRadius={property:"borderBottomLeftRadius",scale:"radii"},N.borderBottomRightRadius={property:"borderBottomRightRadius",scale:"radii"},N.borderLeftWidth={property:"borderLeftWidth",scale:"borderWidths"},N.borderLeftColor={property:"borderLeftColor",scale:"colors"},N.borderLeftStyle={property:"borderLeftStyle",scale:"borderStyles"},N.borderRightWidth={property:"borderRightWidth",scale:"borderWidths"},N.borderRightColor={property:"borderRightColor",scale:"colors"},N.borderRightStyle={property:"borderRightStyle",scale:"borderStyles"};var F=C(N),I=F,X={background:!0,backgroundImage:!0,backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0};X.bgImage=X.backgroundImage,X.bgSize=X.backgroundSize,X.bgPosition=X.backgroundPosition,X.bgRepeat=X.backgroundRepeat;var G=C(X),H=G,Y={space:[0,4,8,16,32,64,128,256,512]},U=C({position:!0,zIndex:{property:"zIndex",scale:"zIndices"},top:{property:"top",scale:"space",defaultScale:Y.space},right:{property:"right",scale:"space",defaultScale:Y.space},bottom:{property:"bottom",scale:"space",defaultScale:Y.space},left:{property:"left",scale:"space",defaultScale:Y.space}}),q=U,V={space:[0,4,8,16,32,64,128,256,512]},K=function(e){return"number"==typeof e&&!isNaN(e)},Q=function(e,t){if(!K(e))return v(t,e,e);var r=e<0,o=Math.abs(e),i=v(t,o,o);return K(i)?i*(r?-1:1):r?"-"+i:i},J={};J.margin={margin:{property:"margin",scale:"space",transform:Q,defaultScale:V.space},marginTop:{property:"marginTop",scale:"space",transform:Q,defaultScale:V.space},marginRight:{property:"marginRight",scale:"space",transform:Q,defaultScale:V.space},marginBottom:{property:"marginBottom",scale:"space",transform:Q,defaultScale:V.space},marginLeft:{property:"marginLeft",scale:"space",transform:Q,defaultScale:V.space},marginX:{properties:["marginLeft","marginRight"],scale:"space",transform:Q,defaultScale:V.space},marginY:{properties:["marginTop","marginBottom"],scale:"space",transform:Q,defaultScale:V.space}},J.margin.m=J.margin.margin,J.margin.mt=J.margin.marginTop,J.margin.mr=J.margin.marginRight,J.margin.mb=J.margin.marginBottom,J.margin.ml=J.margin.marginLeft,J.margin.mx=J.margin.marginX,J.margin.my=J.margin.marginY,J.padding={padding:{property:"padding",scale:"space",defaultScale:V.space},paddingTop:{property:"paddingTop",scale:"space",defaultScale:V.space},paddingRight:{property:"paddingRight",scale:"space",defaultScale:V.space},paddingBottom:{property:"paddingBottom",scale:"space",defaultScale:V.space},paddingLeft:{property:"paddingLeft",scale:"space",defaultScale:V.space},paddingX:{properties:["paddingLeft","paddingRight"],scale:"space",defaultScale:V.space},paddingY:{properties:["paddingTop","paddingBottom"],scale:"space",defaultScale:V.space}},J.padding.p=J.padding.padding,J.padding.pt=J.padding.paddingTop,J.padding.pr=J.padding.paddingRight,J.padding.pb=J.padding.paddingBottom,J.padding.pl=J.padding.paddingLeft,J.padding.px=J.padding.paddingX,J.padding.py=J.padding.paddingY;var $=T(C(J.margin),C(J.padding)),ee=$,te=C({boxShadow:{property:"boxShadow",scale:"shadows"},textShadow:{property:"textShadow",scale:"shadows"}});function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}var oe=function(e,t,r,o,i){for(t=t&&t.split?t.split("."):[t],o=0;o<t.length;o++)e=e?e[t[o]]:i;return e===i?r:e},ie=[40,52,64].map((function(e){return e+"em"})),ne={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},ae={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},le={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},se={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},ce=function(e,t){if("number"!=typeof t||t>=0)return oe(e,t,t);var r=Math.abs(t),o=oe(e,r,r);return"string"==typeof o?"-"+o:-1*o},de=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce((function(e,t){var r;return re({},e,((r={})[t]=ce,r))}),{}),pe=function e(t){return function(r){void 0===r&&(r={});var o=re({},ne,{},r.theme||r),i={},n=function(e){return function(t){var r={},o=oe(t,"breakpoints",ie),i=[null].concat(o.map((function(e){return"@media screen and (min-width: "+e+")"})));for(var n in e){var a="function"==typeof e[n]?e[n](t):e[n];if(null!=a)if(Array.isArray(a))for(var l=0;l<a.slice(0,i.length).length;l++){var s=i[l];s?(r[s]=r[s]||{},null!=a[l]&&(r[s][n]=a[l])):r[n]=a[l]}else r[n]=a}return r}}("function"==typeof t?t(o):t)(o);for(var a in n){var l=n[a],s="function"==typeof l?l(o):l;if("variant"!==a)if(s&&"object"==typeof s)i[a]=e(s)(o);else{var c=oe(ae,a,a),d=oe(se,c),p=oe(o,d,oe(o,c,{})),f=oe(de,c,oe)(p,s,s);if(le[c])for(var u=le[c],g=0;g<u.length;g++)i[u[g]]=f;else i[c]=f}else i=re({},i,{},e(oe(o,s))(o))}return i}},fe=function(e){var t,r,o=e.scale,i=e.prop,n=void 0===i?"variant":i,a=e.variants,l=void 0===a?{}:a,s=e.key;(r=Object.keys(l).length?function(e,t,r){return pe(v(t,e,null))(r.theme)}:function(e,t){return v(t,e,null)}).scale=o||s,r.defaults=l;var c=((t={})[n]=r,t);return Z(c)},ue=fe({key:"buttons"}),ge=fe({key:"textStyles",prop:"textStyle"}),he=fe({key:"colorStyles",prop:"colors"}),me=(L.width,L.height,L.minWidth,L.minHeight,L.maxWidth,L.maxHeight,L.size,L.verticalAlign,L.display,L.overflow,L.overflowX,L.overflowY,E.opacity,W.fontSize,W.fontFamily,W.fontWeight,W.lineHeight,W.textAlign,W.fontStyle,W.letterSpacing,M.alignItems,M.alignContent,M.justifyItems,M.justifyContent,M.flexWrap,M.flexDirection,M.flex,M.flexGrow,M.flexShrink,M.flexBasis,M.justifySelf,M.alignSelf,M.order,P.gridGap,P.gridColumnGap,P.gridRowGap,P.gridColumn,P.gridRow,P.gridAutoFlow,P.gridAutoColumns,P.gridAutoRows,P.gridTemplateColumns,P.gridTemplateRows,P.gridTemplateAreas,P.gridArea,I.borderWidth,I.borderStyle,I.borderColor,I.borderTop,I.borderRight,I.borderBottom,I.borderLeft,I.borderRadius,H.backgroundImage,H.backgroundSize,H.backgroundPosition,H.backgroundRepeat,q.zIndex,q.top,q.right,q.bottom,q.left,function(e){var t=new RegExp("^("+e.join("|")+")$");return(0,f.Z)((function(e){return g(e)&&!t.test(e)}))}),be=(me(T($,j,B,_,z,F,G,U,O,te,ue,ge,he).propNames),r(3431)),ye=["size"];var we=[].concat((0,c.Z)(ee.propNames),(0,c.Z)(E.propNames)),ke=function(e){return we.includes(e)},ve=me(we),Ze=(0,d.Z)("div",{shouldForwardProp:ve})({boxSizing:"border-box",margin:0,minWidth:0},(function(e){return(0,p.iv)(e.__css)(e.theme)}),(function(e){var t=e.theme,r=e.variant,o=e.__themeKey,i=void 0===o?"variants":o;return(0,p.iv)((0,p.U2)(t,i+"."+r,(0,p.U2)(t,r)))}),ee,E,(function(e){return(0,p.iv)(e.sx)(e.theme)}),(function(e){return e.css}));Ze.displayName="Box";var xe=(0,d.Z)(Ze)({display:"flex"});function Se(){return(Se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}xe.displayName="Flex";var Re=o.forwardRef((function(e,t){return o.createElement(Ze,Se({ref:t,as:"a",variant:"styles.a"},e,{__themeKey:"links"}))})),Ce=function(e){var t=e.size,r=void 0===t?24:t,i=(0,s.Z)(e,ye);return o.createElement(Ze,Se({as:"svg",xmlns:"http://www.w3.org/2000/svg",width:r+"",height:r+"",viewBox:"0 0 24 24",fill:"currentcolor"},i))};Ce.displayName="SVG";var Te=function(e){return function(t){var r={};for(var o in t)e(o||"")&&(r[o]=t[o]);return r}},_e=/^m[trblxy]?$/,Le=(Te((function(e){return _e.test(e)})),Te((function(e){return!_e.test(e)})),(0,be.F4)({from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}}),Te(ke),Te((function(e){return!ke(e)})),r(7686)),Ae=r(6466),Be=r(7971),Ee=r(6722),je=r(4032),We=r(3366),ze=r(4983),Me=["components"],De={_frontmatter:{}};function Oe(e){var t=e.components,r=(0,We.Z)(e,Me);return(0,ze.kt)("wrapper",Object.assign({},De,r,{components:t,mdxType:"MDXLayout"}),(0,ze.kt)("h1",null,"Hi, I'm Weijia Sun"),(0,ze.kt)("p",null,"An astrophysicist interested in stellar evolution and star clusters"))}Oe.isMDXComponent=!0;var Pe,Ne=function(e){var t=e.offset,r=e.factor,o=void 0===r?1:r;return(0,l.tZ)("div",null,(0,l.tZ)(Le.Z,{speed:.2,offset:t,factor:o},(0,l.tZ)(je.w6,null,(0,l.tZ)(Ee.Z,{icon:"triangle",hiddenMobile:!0,width:48,stroke:!0,color:"icon_orange",left:"10%",top:"20%"}),(0,l.tZ)(Ee.Z,{icon:"hexa",width:48,stroke:!0,color:"icon_red",left:"60%",top:"70%"}),(0,l.tZ)(Ee.Z,{icon:"box",width:6,color:"icon_darker",left:"60%",top:"15%"})),(0,l.tZ)(je.sr,null,(0,l.tZ)(Ee.Z,{icon:"arrowUp",hiddenMobile:!0,width:16,color:"icon_blue",left:"80%",top:"10%"}),(0,l.tZ)(Ee.Z,{icon:"triangle",width:12,stroke:!0,color:"icon_brightest",left:"90%",top:"50%"}),(0,l.tZ)(Ee.Z,{icon:"circle",width:16,color:"icon_darker",left:"70%",top:"90%"}),(0,l.tZ)(Ee.Z,{icon:"triangle",width:16,stroke:!0,color:"icon_darkest",left:"30%",top:"65%"}),(0,l.tZ)(Ee.Z,{icon:"cross",width:16,stroke:!0,color:"icon_pink",left:"28%",top:"15%"}),(0,l.tZ)(Ee.Z,{icon:"circle",width:6,color:"icon_darkest",left:"75%",top:"10%"}),(0,l.tZ)(Ee.Z,{icon:"upDown",hiddenMobile:!0,width:8,color:"icon_darkest",left:"45%",top:"10%"})),(0,l.tZ)(Ee.Z,{icon:"circle",hiddenMobile:!0,width:24,color:"icon_darker",left:"5%",top:"70%"}),(0,l.tZ)(Ee.Z,{icon:"circle",width:6,color:"icon_darkest",left:"4%",top:"20%"}),(0,l.tZ)(Ee.Z,{icon:"circle",width:12,color:"icon_darkest",left:"50%",top:"60%"}),(0,l.tZ)(Ee.Z,{icon:"upDown",width:8,color:"icon_darkest",left:"95%",top:"90%"}),(0,l.tZ)(Ee.Z,{icon:"upDown",hiddenMobile:!0,width:24,color:"icon_darker",left:"40%",top:"80%"}),(0,l.tZ)(Ee.Z,{icon:"triangle",width:8,stroke:!0,color:"icon_darker",left:"25%",top:"5%"}),(0,l.tZ)(Ee.Z,{icon:"circle",width:64,color:"icon_green",left:"95%",top:"5%"}),(0,l.tZ)(Ee.Z,{icon:"box",hiddenMobile:!0,width:64,color:"icon_purple",left:"5%",top:"90%"}),(0,l.tZ)(Ee.Z,{icon:"box",width:6,color:"icon_darkest",left:"10%",top:"10%"}),(0,l.tZ)(Ee.Z,{icon:"box",width:12,color:"icon_darkest",left:"40%",top:"30%"}),(0,l.tZ)(Ee.Z,{icon:"hexa",width:16,stroke:!0,color:"icon_darker",left:"10%",top:"50%"}),(0,l.tZ)(Ee.Z,{icon:"hexa",width:8,stroke:!0,color:"icon_darker",left:"80%",top:"70%"})),(0,l.tZ)(xe,{sx:{svg:{width:"20px",height:"20px",".primary":{color:"iconPrimary"},".secondary":{color:"iconSecondary"},mr:2},justifyContent:"center",alignItems:"center",color:"text"}},(0,l.tZ)(Be.Z,{sx:{variant:"texts.bigger"},speed:.4,offset:t,factor:o},(0,l.tZ)(Ae.Z,null,(0,l.tZ)(Oe,null)),(0,l.tZ)("img",{src:"avatar.jpg",width:"256",style:{"border-radius":"50%"}}))))},Fe=["components"],Ie=(Pe="ProjectCard",function(e){return console.warn("Component "+Pe+" was not imported, exported, or provided by MDXProvider as global scope"),(0,ze.kt)("div",e)}),Xe={_frontmatter:{}};function Ge(e){var t=e.components,r=(0,We.Z)(e,Fe);return(0,ze.kt)("wrapper",Object.assign({},Xe,r,{components:t,mdxType:"MDXLayout"}),(0,ze.kt)("h2",null,"Leading Research"),(0,ze.kt)(Ie,{title:"Stellar rotation in star clusters",link:"project/pssrr",bg:"linear-gradient(to right, #D4145A 0%, #FBB03B 100%)",mdxType:"ProjectCard"},"A series of works to answer what's the underlying reason for split main sequence and extended main sequence turnoff, two unexpected features recently discovered in young and intermediate-age star clusters"),(0,ze.kt)(Ie,{title:"Stellar rotation of early-type stars in the fields",link:"project/esrs",bg:"linear-gradient(to right, #662D8C 0%, #ED1E79 100%)",mdxType:"ProjectCard"},"The (so far) largest (40,034) catalog of early-type stars with accurate stellar rotation"),(0,ze.kt)(Ie,{title:"Blue straggler stars in the Magellanic Clouds clusters",link:"project/bssrp",bg:"linear-gradient(to right, #009245 0%, #FCEE21 100%)",mdxType:"ProjectCard"},"Unvealing the formation channel of blue straggler stars in the Magellanic Clouds clusters and Using them as a probe for dynamical state of the clusters"),(0,ze.kt)(Ie,{title:"Planetary nebulae in globular clusters",link:"project/pngc",bg:"linear-gradient(to right, #D585FF 0%, #00FFEE 100%)",mdxType:"ProjectCard"},"A detection of planetary nebulae in a globular cluster in the Virgo cluster"),(0,ze.kt)(Ie,{title:"Properties of contact binaries",link:"project/cbp",bg:"linear-gradient(to right, #F3DE8A 0%, #CAE7B9 100%)",mdxType:"ProjectCard"},"An automatic Wilson–Devinney-type code to derive the absolute properties of contact binaries based on their light-curve morphology"),(0,ze.kt)(Ie,{title:"Mass function of young massive clusters",link:"project/uicmf",bg:"linear-gradient(to right, #F3DE8A 0%, #CAE7B9 100%)",mdxType:"ProjectCard"},"Whether the initial star cluster mass function is established through a universal, stochastic process?"))}Ge.isMDXComponent=!0;var He=function(e){var t=e.offset,r=e.factor,o=void 0===r?2:r;return(0,l.tZ)("div",null,(0,l.tZ)(Le.Z,{bg:"linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)",sx:{clipPath:"polygon(0 15%, 100% 25%, 100% 85%, 0 75%)"},speed:-.2,offset:1.1,factor:o}),(0,l.tZ)(Be.Z,{speed:.4,offset:t+.2,factor:o},(0,l.tZ)(Ae.Z,null,(0,l.tZ)("div",{sx:{display:"grid",gridGap:[4,4,4,5],gridTemplateColumns:["1fr","1fr","repeat(2, 1fr)"],h2:{gridColumn:"-1/1"}}},(0,l.tZ)(Ge,null)))),(0,l.tZ)(Le.Z,{speed:.1,offset:t,factor:o},(0,l.tZ)(je.w6,null,(0,l.tZ)(Ee.Z,{icon:"box",width:6,color:"icon_brightest",left:"85%",top:"75%"}),(0,l.tZ)(Ee.Z,{icon:"upDown",width:8,color:"icon_teal",left:"70%",top:"20%"}),(0,l.tZ)(Ee.Z,{icon:"triangle",width:8,stroke:!0,color:"icon_orange",left:"25%",top:"5%"}),(0,l.tZ)(Ee.Z,{icon:"circle",hiddenMobile:!0,width:24,color:"icon_brightest",left:"17%",top:"60%"})),(0,l.tZ)(je.sr,null,(0,l.tZ)(Ee.Z,{icon:"arrowUp",hiddenMobile:!0,width:16,color:"icon_green",left:"20%",top:"90%"}),(0,l.tZ)(Ee.Z,{icon:"triangle",width:12,stroke:!0,color:"icon_brightest",left:"90%",top:"30%"}),(0,l.tZ)(Ee.Z,{icon:"circle",width:16,color:"icon_yellow",left:"70%",top:"90%"}),(0,l.tZ)(Ee.Z,{icon:"triangle",hiddenMobile:!0,width:16,stroke:!0,color:"icon_teal",left:"18%",top:"75%"}),(0,l.tZ)(Ee.Z,{icon:"circle",width:6,color:"icon_brightest",left:"75%",top:"10%"}),(0,l.tZ)(Ee.Z,{icon:"upDown",hiddenMobile:!0,width:8,color:"icon_green",left:"45%",top:"10%"})),(0,l.tZ)(Ee.Z,{icon:"circle",hiddenMobile:!0,width:6,color:"icon_brightest",left:"4%",top:"20%"}),(0,l.tZ)(Ee.Z,{icon:"circle",width:12,color:"icon_pink",left:"80%",top:"60%"}),(0,l.tZ)(Ee.Z,{icon:"box",width:6,color:"icon_orange",left:"10%",top:"10%"}),(0,l.tZ)(Ee.Z,{icon:"box",width:12,color:"icon_yellow",left:"29%",top:"26%"}),(0,l.tZ)(Ee.Z,{icon:"hexa",width:16,stroke:!0,color:"icon_red",left:"75%",top:"30%"}),(0,l.tZ)(Ee.Z,{icon:"hexa",width:8,stroke:!0,color:"icon_yellow",left:"80%",top:"70%"})))},Ye=["components"],Ue={_frontmatter:{}};function qe(e){var t=e.components,r=(0,We.Z)(e,Ye);return(0,ze.kt)("wrapper",Object.assign({},Ue,r,{components:t,mdxType:"MDXLayout"}),(0,ze.kt)("h2",null,"About"),(0,ze.kt)("p",null,"I'm Weijia Sun (孙唯佳), a PhD candidate in ",(0,ze.kt)("a",{parentName:"p",href:"http://astro.pku.edu.cn/"},"Department of Physics")," and ",(0,ze.kt)("a",{parentName:"p",href:"http://kiaa.pku.edu.cn/"},"Kavli Institute for Astronomy and Astrophysics")," (KIAA) at ",(0,ze.kt)("a",{parentName:"p",href:"http://english.pku.edu.cn/"},"Peking University"),", where I work with ",(0,ze.kt)("a",{parentName:"p",href:"http://astro-expat.info/"},"Richard de Grijs")," and ",(0,ze.kt)("a",{parentName:"p",href:"https://www.iau.org/administration/membership/individual/335/"},"Licai Deng"),". My main research interest is star cluster evolution in terms of stellar rotation.           "),(0,ze.kt)("p",null,"These days, I'm using high-precision photometry and median-resolution spectroscopy to study the connection between single star evolution and cluster evolution. ",(0,ze.kt)("em",{parentName:"p"},"Stellar rotation")," is my thing. I am also interested in the stellar evolution, e.g., the binaries and all the other interesting features related to clusters. 😀"),(0,ze.kt)("p",null,"You can find my CV ",(0,ze.kt)("a",{parentName:"p",href:"https://docs.google.com/viewer?url=https://github.com/thisisweijia/CV/raw/master/CV.pdf"},"here"),"."))}qe.isMDXComponent=!0;var Ve=function(e){var t=e.offset,r=e.factor,i=void 0===r?1:r;return o.createElement("div",null,o.createElement(Le.Z,{bg:"divider",clipPath:"polygon(0 16%, 100% 4%, 100% 82%, 0 94%)",speed:.2,offset:t,factor:i}),o.createElement(Le.Z,{speed:.1,offset:t,factor:i},o.createElement(je.w6,null,o.createElement(Ee.Z,{icon:"box",hiddenMobile:!0,width:6,color:"icon_blue",left:"50%",top:"75%"}),o.createElement(Ee.Z,{icon:"upDown",hiddenMobile:!0,width:8,color:"icon_darkest",left:"70%",top:"20%"}),o.createElement(Ee.Z,{icon:"triangle",width:8,stroke:!0,color:"icon_darkest",left:"25%",top:"5%"}),o.createElement(Ee.Z,{icon:"upDown",hiddenMobile:!0,width:24,color:"icon_orange",left:"80%",top:"80%"})),o.createElement(je.sr,null,o.createElement(Ee.Z,{icon:"arrowUp",hiddenMobile:!0,width:16,color:"icon_purple",left:"5%",top:"80%"}),o.createElement(Ee.Z,{icon:"triangle",width:12,stroke:!0,color:"icon_brightest",left:"95%",top:"50%"}),o.createElement(Ee.Z,{icon:"circle",hiddenMobile:!0,width:6,color:"icon_brightest",left:"85%",top:"15%"}),o.createElement(Ee.Z,{icon:"upDown",hiddenMobile:!0,width:8,color:"icon_darkest",left:"45%",top:"10%"})),o.createElement(Ee.Z,{icon:"circle",hiddenMobile:!0,width:6,color:"icon_brightest",left:"4%",top:"20%"}),o.createElement(Ee.Z,{icon:"circle",width:12,color:"icon_darkest",left:"70%",top:"60%"}),o.createElement(Ee.Z,{icon:"box",width:6,color:"icon_orange",left:"10%",top:"10%"}),o.createElement(Ee.Z,{icon:"box",width:12,color:"icon_darkest",left:"20%",top:"30%"}),o.createElement(Ee.Z,{icon:"hexa",width:8,stroke:!0,color:"icon_darkest",left:"80%",top:"70%"})),o.createElement(Be.Z,{speed:.4,offset:t,factor:i},o.createElement(Ae.Z,null,o.createElement(qe,null))))},Ke=r(5078),Qe=function(){var e=(0,Ke.If)(),t=e[0],r=e[1],o="dark"===t;return(0,l.tZ)(Ze,{as:"footer",variant:"footer"},(0,l.tZ)("button",{sx:{variant:"buttons.toggle",fontWeight:"semibold",display:"block",mx:"auto",mb:3},onClick:function(e){r(o?"light":"dark")},type:"button","aria-label":"Toggle dark mode"},o?"Light":"Dark"),"Copyright © ",(new Date).getFullYear(),". All rights reserved.",(0,l.tZ)("br",null),(0,l.tZ)(xe,{sx:{justifyContent:"center",alignItems:"center",mt:3,color:"text",fontWeight:"semibold",a:{color:"text"}}},o?(0,l.tZ)("img",{width:"30",height:"30",src:"https://img.lekoarts.de/gatsby/logo_v2-light_w30.png",alt:"LekoArts Logo"}):(0,l.tZ)("img",{width:"30",height:"30",src:"https://img.lekoarts.de/gatsby/logo_v2_w30.png",alt:"LekoArts Logo"})," ",(0,l.tZ)(Re,{"aria-label":"Link to the theme's GitHub repository",sx:{ml:2},href:"https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-cara"},"Theme"),(0,l.tZ)("div",{sx:{mx:1}},"by")," ",(0,l.tZ)(Re,{"aria-label":"Link to the theme author's website",href:"https://www.lekoarts.de?utm_source=cara&utm_medium=Theme"},"LekoArts")))},Je=["components"],$e={_frontmatter:{}};function et(e){var t=e.components,r=(0,We.Z)(e,Je);return(0,ze.kt)("wrapper",Object.assign({},$e,r,{components:t,mdxType:"MDXLayout"}),(0,ze.kt)("h2",null,"Get in touch"),(0,ze.kt)("p",null,"Say ",(0,ze.kt)("a",{parentName:"p",href:"mailto:this.is.weijia@gmail.com"},"Hi")," or find me on other platforms:\n",(0,ze.kt)("a",{parentName:"p",href:"https://twitter.com/weijiasunastro"},"Twitter"),", ",(0,ze.kt)("a",{parentName:"p",href:"https://github.com/swj1442291549"},"Github"),", ",(0,ze.kt)("a",{parentName:"p",href:"https://ui.adsabs.harvard.edu/search/fq=%7B!type%3Daqp%20v%3D%24fq_database%7D&fq_database=(database%3Aastronomy)&p_=0&q=orcid%3A0000-0002-3279-0233&sort=date%20desc%2C%20bibcode%20desc"},"ADS")," and ",(0,ze.kt)("a",{parentName:"p",href:"https://scholar.google.com/citations?view_op=list_works&gmla=AJsN-F6Xc6zddYTWYKEN_2HlJNdG6p6UKC-ybGfS_Ty8jQSeTK02TifQDEvGdq-rPnHAL64DT_W7hibXNK39pO5GXl1g6lUSNK0zDJ1J2WtPz6gGCCOyfVI&user=CVAmcKgAAAAJ"},"Google Scholar")),(0,ze.kt)("p",null,"Email: ",(0,ze.kt)("a",{parentName:"p",href:"mailto:this.is.weijia@gmail.com"},"this.is.weijia@gmail.com")," "),(0,ze.kt)("p",null,"ORCID: ",(0,ze.kt)("a",{parentName:"p",href:"https://orcid.org/0000-0002-3279-0233"},"0000-0002-3279-0233")))}et.isMDXComponent=!0;var tt=function(e){var t=e.offset,r=e.factor,o=void 0===r?1:r;return(0,l.tZ)("div",null,(0,l.tZ)(Le.Z,{fill:"divider",speed:.2,offset:t,factor:o},(0,l.tZ)("div",{sx:{position:"absolute",bottom:0,width:"full",transform:"matrix(1, 0, 0, -1, 0, 0)"}},(0,l.tZ)("div",{sx:{position:"relative",height:"full",svg:{width:"100%",height:"40vh"},path:{animation:(0,je.Ry)("20s")}}},(0,l.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",id:"contact-wave",viewBox:"0 0 800 338.05",preserveAspectRatio:"none"},(0,l.tZ)("path",null,(0,l.tZ)("animate",{attributeName:"d",values:"M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z",repeatCount:"indefinite",dur:"30s"})))))),(0,l.tZ)(Be.Z,{speed:.4,offset:t,factor:o},(0,l.tZ)(Ae.Z,null,(0,l.tZ)(et,null)),(0,l.tZ)(Qe,null)),(0,l.tZ)(Le.Z,{speed:.1,offset:t,factor:o},(0,l.tZ)(je.w6,null,(0,l.tZ)(Ee.Z,{icon:"upDown",hiddenMobile:!0,width:8,color:"icon_darkest",left:"70%",top:"20%"}),(0,l.tZ)(Ee.Z,{icon:"triangle",width:8,stroke:!0,color:"icon_darkest",left:"25%",top:"5%"})),(0,l.tZ)(je.sr,null,(0,l.tZ)(Ee.Z,{icon:"triangle",width:12,stroke:!0,color:"icon_brightest",left:"95%",top:"50%"}),(0,l.tZ)(Ee.Z,{icon:"circle",width:6,color:"icon_brightest",left:"85%",top:"15%"}),(0,l.tZ)(Ee.Z,{icon:"upDown",hiddenMobile:!0,width:8,color:"icon_darkest",left:"45%",top:"10%"})),(0,l.tZ)(Ee.Z,{icon:"circle",width:6,color:"icon_brightest",left:"4%",top:"20%"}),(0,l.tZ)(Ee.Z,{icon:"circle",width:12,color:"icon_darkest",left:"70%",top:"60%"}),(0,l.tZ)(Ee.Z,{icon:"box",width:12,color:"icon_darkest",left:"20%",top:"30%"}),(0,l.tZ)(Ee.Z,{icon:"hexa",width:8,stroke:!0,color:"icon_darkest",left:"80%",top:"70%"})))};var rt=function(){var e=function(){var e=(0,o.useState)(n.u9.innerWidth),t=e[0],r=e[1],i={pages:6,projectsOffset:1,projectsFactor:3,aboutOffset:4,aboutFactor:1,contactOffset:5,contactFactor:1,width:t};if((0,n.Gg)(n.u9))switch((0,o.useEffect)((function(){var e=function(){return r(n.u9.innerWidth)};return n.u9.addEventListener("resize",e),function(){n.u9.removeEventListener("resize",e)}})),!0){case t<=400:i.pages=10.5,i.projectsOffset=1,i.projectsFactor=7,i.aboutOffset=8,i.aboutFactor=1.5,i.contactOffset=9.5,i.contactFactor=1;break;case t<=600:i.pages=9.5,i.projectsOffset=1,i.projectsFactor=6,i.aboutOffset=7,i.aboutFactor=1.5,i.contactOffset=8.5,i.contactFactor=1}return i}(),t=e.pages,r=e.projectsOffset,l=e.projectsFactor,s=e.aboutOffset,c=e.aboutFactor,d=e.contactOffset,p=e.contactFactor;return o.createElement(a.Z,null,o.createElement(i.V,{pages:t},o.createElement(Ne,{offset:0,factor:1}),o.createElement(He,{offset:r,factor:l}),o.createElement(Ve,{offset:s,factor:c}),o.createElement(tt,{offset:d,factor:p})))}}}]);
//# sourceMappingURL=component---src-lekoarts-gatsby-theme-cara-templates-cara-tsx-40d2d31d2bc0838d9466.js.map