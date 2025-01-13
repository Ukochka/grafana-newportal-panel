/* [create-plugin] version: 5.13.0 */
define(["@emotion/css","@grafana/data","@grafana/runtime","@grafana/ui","module","react"],((e,t,a,n,r,l)=>(()=>{"use strict";var i={89:t=>{t.exports=e},781:e=>{e.exports=t},531:e=>{e.exports=a},7:e=>{e.exports=n},308:e=>{e.exports=r},959:e=>{e.exports=l}},o={};function s(e){var t=o[e];if(void 0!==t)return t.exports;var a=o[e]={exports:{}};return i[e](a,a.exports,s),a.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="public/plugins/grafana-newportal-panel/";var p={};s.r(p),s.d(p,{plugin:()=>h});var u=s(308),d=s.n(u);s.p=d()&&d().uri?d().uri.slice(0,d().uri.lastIndexOf("/")+1):"public/plugins/grafana-newportal-panel/";var c=s(781),m=s(959),f=s.n(m),g=s(89),x=s(7),v=s(531);const w=()=>({wrapper:g.css`
      font-family: Open Sans;
      position: relative;
    `,svg:g.css`
      position: absolute;
      top: 0;
      left: 0;
    `,textBox:g.css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `}),h=new c.PanelPlugin((({options:e,data:t,width:a,height:n,fieldConfig:r,id:l})=>{const i=(0,x.useTheme2)(),o=(0,x.useStyles2)(w);return 0===t.series.length?f().createElement(v.PanelDataErrorView,{fieldConfig:r,panelId:l,data:t,needsStringField:!0}):f().createElement("div",{className:(0,g.cx)(o.wrapper,g.css`
          width: ${a}px;
          height: ${n}px;
        `)},f().createElement("svg",{className:o.svg,width:a,height:n,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:`-${a/2} -${n/2} ${a} ${n}`},f().createElement("g",null,f().createElement("circle",{"data-testid":"simple-panel-circle",style:{fill:i.colors.primary.main},r:100}))),f().createElement("div",{className:o.textBox},e.showSeriesCount&&f().createElement("div",{"data-testid":"simple-panel-series-counter"},"Number of series: ",t.series.length),f().createElement("div",null,"Text option value: ",e.text)))})).setPanelOptions((e=>e.addTextInput({path:"text",name:"Simple text option",description:"Description of panel option",defaultValue:"Default value of text input option"}).addBooleanSwitch({path:"showSeriesCount",name:"Show series counter",defaultValue:!1}).addRadio({path:"seriesCountSize",defaultValue:"sm",name:"Series counter size",settings:{options:[{value:"sm",label:"Small"},{value:"md",label:"Medium"},{value:"lg",label:"Large"}]},showIf:e=>e.showSeriesCount})));return p})()));
//# sourceMappingURL=module.js.map