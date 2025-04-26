(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{121:function(e,t,a){e.exports=a(144)},143:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(88),o=a.n(r),l=a(30),s=a(5),d=a(3);const c={bg:"#1C1C27",bgLight:"#1C1E27",primary:"#854CE6",text_primary:"#F2F3F4",text_secondary:"#b1b2b3",card:"#171721",card_light:"#191924",button:"#854CE6",white:"#FFFFFF",black:"#000000"};a(75);var p=a(58);const m=Object(d.b)(p.Link)`
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${e=>{let{theme:t}=e;return t.primary}};
  }

  &.active {
    border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.primary}};
  }
`,h=d.b.div`
  background-color: ${e=>{let{theme:t}=e;return t.card_light}};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: top 0.3s ease-in-out; 
  
  &.hidden {
    top: -80px; 
  }
  
  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`,u=d.b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`,x=(d.b.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`,d.b.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`),g=(d.b.a`
    color: ${e=>{let{theme:t}=e;return t.text_primary}};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${e=>{let{theme:t}=e;return t.primary}};
    }

    &.active {
      border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.primary}};
    }
`,d.b.a`
  border: 1.8px solid ${e=>{let{theme:t}=e;return t.primary}};
  justify-content: center;
  display: flex;
  white-space: nowrap;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${e=>{let{theme:t}=e;return t.primary}};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${e=>{let{theme:t}=e;return t.primary}};
      color: ${e=>{let{theme:t}=e;return t.white}};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`),b=d.b.div`

  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`,f=d.b.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${e=>{let{theme:t}=e;return t.text_primary}};
  }
`,w=d.b.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    text-align: center;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${e=>{let{theme:t}=e;return t.card_light+99}};
    transition: all 0.6s ease-in-out;
    transform: ${e=>{let{isOpen:t}=e;return t?"translateY(0)":"translateY(-100%)"}};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.2);
    opacity: ${e=>{let{isOpen:t}=e;return t?"100%":"0"}};
    z-index: ${e=>{let{isOpen:t}=e;return t?"1000":"-1000"}};

`;d.b.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none; 
  width: 100%;
  height: 100%;
`,Object(d.b)(l.b)`
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${e=>{let{theme:t}=e;return t.primary}};
  }

  &.active {
    border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.primary}};
  }
`,d.b.a`
  border: 1.8px solid ${e=>{let{theme:t}=e;return t.primary}};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${e=>{let{theme:t}=e;return t.primary}};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${e=>{let{theme:t}=e;return t.primary}};
    color: ${e=>{let{theme:t}=e;return t.white}};
  }
`,d.b.a`
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${e=>{let{theme:t}=e;return t.primary}};
  }

  &.active {
    border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.primary}};
  }
`,Object(d.b)(l.b)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;var y=a(76),v=a(92);var E=e=>{let{navbarData:t,sections:a}=e;const[r,o]=Object(n.useState)(!1),[l,s]=Object(n.useState)("up"),c=Object(n.useRef)(window.pageYOffset),p=Object(d.c)(),E=Object(n.useRef)(null);Object(n.useEffect)(()=>{const e=Object(v.throttle)(()=>{const e=window.pageYOffset,t=c.current<e,a=Math.abs(e-c.current)>25;t&&a?s("down"):!t&&a&&s("up"),c.current=e,r&&o(!1)},100);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[r]),Object(n.useEffect)(()=>{const e=()=>{window.innerWidth>768&&o(!1)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),Object(n.useEffect)(()=>{const e=e=>{E.current&&!E.current.contains(e.target)&&o(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const j=()=>{o(!1)};return i.a.createElement(h,{className:"down"===l?"hidden":"",ref:E},i.a.createElement(u,null,i.a.createElement("a",{href:null===t||void 0===t?void 0:t.portalLink,target:"_blank",style:{display:"flex",alignItems:"center",color:"white",cursor:"pointer",textDecoration:"none"}}),i.a.createElement(f,{"aria-label":"Open mobile menu"},i.a.createElement(y.a,{onClick:()=>o(!r)})),i.a.createElement(x,null,a.map(e=>i.a.createElement("li",{key:e},i.a.createElement(m,{to:e.toLowerCase(),smooth:!0,duration:100,offset:15,onClick:j},e)))),i.a.createElement(b,null,i.a.createElement(g,{href:null===t||void 0===t?void 0:t.github,target:"_blank"},"Github Profile")),r&&i.a.createElement(w,{isOpen:r},a.map(e=>i.a.createElement("li",{key:e,style:{listStyleType:"none",padding:0,margin:0}},i.a.createElement(m,{to:e.toLowerCase(),smooth:!0,duration:100,offset:10,onClick:()=>o(!1)},e))),i.a.createElement(g,{style:{padding:"10px 16px",background:p.primary,color:"white",width:"100%"},href:null===t||void 0===t?void 0:t.github,target:"_blank"},"Github Profile"))))};const j=d.b.div`
    width:600px;
    height: 500px;
`;var A=()=>i.a.createElement(j,null,i.a.createElement("svg",{className:"BgAnimation__svg",viewBox:"0 0 602 602",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("g",{opacity:"0.15"},i.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z",stroke:"url(#paint0_radial)",id:"path_0"}),i.a.createElement("path",{d:"M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z",stroke:"url(#paint1_radial)",id:"path_1"}),i.a.createElement("path",{d:"M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z",stroke:"url(#paint2_radial)",id:"path_2"})),i.a.createElement("ellipse",{cx:"295.027",cy:"193.118",transform:"translate(-295.027 -193.118)",rx:"1.07306",ry:"1.07433",fill:"#945DD6"},i.a.createElement("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_2"}))),i.a.createElement("path",{d:"M294.685 193.474L268.932 219.258",transform:"translate(-294.685 -193.474) rotate(45 294.685 193.474)",stroke:"url(#paint3_linear)"},i.a.createElement("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_2"}))),i.a.createElement("ellipse",{cx:"295.027",cy:"193.118",transform:"translate(-295.027 -193.118)",rx:"1.07306",ry:"1.07433",fill:"#46737"},i.a.createElement("animateMotion",{dur:"5s",begin:"1",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_2"}))),i.a.createElement("path",{d:"M294.685 193.474L268.932 219.258",transform:"translate(-294.685 -193.474) rotate(45 294.685 193.474)",stroke:"url(#paint7_linear)"},i.a.createElement("animateMotion",{dur:"5s",begin:"1",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_2"}))),i.a.createElement("ellipse",{cx:"476.525",cy:"363.313",rx:"1.07433",ry:"1.07306",transform:"translate(-476.525 -363.313) rotate(90 476.525 363.313)",fill:"#945DD6"},i.a.createElement("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("path",{d:"M476.171 362.952L450.417 337.168",transform:"translate(-476.525 -363.313) rotate(-45 476.171 362.952)",stroke:"url(#paint4_linear)"},i.a.createElement("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("ellipse",{cx:"382.164",cy:"155.029",rx:"1.07433",ry:"1.07306",transform:"translate(-382.164 -155.029) rotate(90 382.164 155.029)",fill:"#F46737"},i.a.createElement("animateMotion",{dur:"10s",begin:"1",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("path",{d:"M381.81 154.669L356.057 128.885",transform:"translate(-381.81 -154.669) rotate(-45 381.81 154.669)",stroke:"url(#paint5_linear)"},i.a.createElement("animateMotion",{dur:"10s",begin:"1",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("ellipse",{cx:"333.324",cy:"382.691",rx:"1.07306",ry:"1.07433",transform:"translate(-333.324 -382.691) rotate(-180 333.324 382.691)",fill:"#F46737"},i.a.createElement("animateMotion",{dur:"5s",begin:"0",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_1"}))),i.a.createElement("path",{d:"M333.667 382.335L359.42 356.551",transform:"scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",stroke:"url(#paint6_linear)"},i.a.createElement("animateMotion",{dur:"5s",begin:"0",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_1"}))),i.a.createElement("ellipse",{cx:"165.524",cy:"93.9596",rx:"1.07306",ry:"1.07433",transform:"translate(-165.524 -93.9596)",fill:"#F46737"},i.a.createElement("animateMotion",{dur:"10s",begin:"3",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("path",{d:"M165.182 94.3159L139.429 120.1",transform:"translate(-165.182 -94.3159) rotate(45 165.182 94.3159)",stroke:"url(#paint7_linear)"},i.a.createElement("animateMotion",{dur:"10s",begin:"3",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("ellipse",{cx:"476.525",cy:"363.313",rx:"1.07433",ry:"1.07306",transform:"translate(-476.525 -363.313) rotate(90 476.525 363.313)",fill:"#13ADC7"},i.a.createElement("animateMotion",{dur:"12s",begin:"4",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("path",{d:"M476.171 362.952L450.417 337.168",transform:"translate(-476.525 -363.313) rotate(-45 476.171 362.952)",stroke:"url(#paint11_linear)"},i.a.createElement("animateMotion",{dur:"12s",begin:"4",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("defs",null,i.a.createElement("radialGradient",{id:"paint0_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)"},i.a.createElement("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),i.a.createElement("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})),i.a.createElement("radialGradient",{id:"paint1_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)"},i.a.createElement("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),i.a.createElement("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})),i.a.createElement("radialGradient",{id:"paint2_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)"},i.a.createElement("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),i.a.createElement("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint3_linear",x1:"295.043",y1:"193.116",x2:"269.975",y2:"218.154",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#945DD6"}),i.a.createElement("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint4_linear",x1:"476.529",y1:"363.31",x2:"451.461",y2:"338.272",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#945DD6"}),i.a.createElement("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint5_linear",x1:"382.168",y1:"155.027",x2:"357.1",y2:"129.989",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#F46737"}),i.a.createElement("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint6_linear",x1:"333.309",y1:"382.693",x2:"358.376",y2:"357.655",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#F46737"}),i.a.createElement("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint7_linear",x1:"165.54",y1:"93.9578",x2:"140.472",y2:"118.996",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#F46737"}),i.a.createElement("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint8_linear",x1:"414.367",y1:"301.156",x2:"439.435",y2:"276.118",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#13ADC7"}),i.a.createElement("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint9_linear",x1:"515.943",y1:"288.238",x2:"541.339",y2:"291.454",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#13ADC7"}),i.a.createElement("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint10_linear",x1:"117.001",y1:"230.619",x2:"117.36",y2:"258.193",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#945DD6"}),i.a.createElement("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint11_linear",x1:"476.529",y1:"363.31",x2:"451.461",y2:"338.272",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#13ADC7"}),i.a.createElement("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"}))))),k=a(93),D=a.n(k);const O=d.b.div`
  background: ${e=>{let{theme:t}=e;return t.card_light}};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`,z=d.b.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`,M=d.b.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`,C=d.b.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,S=d.b.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`,L=d.b.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${e=>{let{theme:t}=e;return t.primary}};

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`,I=d.b.div`
  font-weight: 700;
  font-size: 50px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`,G=d.b.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`,R=d.b.span`
  color: ${e=>{let{theme:t}=e;return t.primary}};
  cursor: pointer;
`,J=d.b.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${e=>{let{theme:t}=e;return t.text_primary+95}};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;d.b.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${e=>{let{theme:t}=e;return t.white}};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634, -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;var W=a(94),T=a.n(W);var P=e=>{let{heroData:t}=e;return i.a.createElement("section",{id:"about"},i.a.createElement(O,null,i.a.createElement(z,null,i.a.createElement(A,null)),i.a.createElement(M,null,i.a.createElement(C,null,i.a.createElement(I,null,"Hi, I am SDE ",i.a.createElement("br",null)," ",null===t||void 0===t?void 0:t.name),i.a.createElement(G,null,"I am a Developer",i.a.createElement(R,null,i.a.createElement(T.a,{options:{strings:(null===t||void 0===t?void 0:t.roles)||[],autoStart:!0,loop:!0}}))),i.a.createElement(J,null,"Hi, I\u2019m Thejaswi Gadhiraju \u2014 a passionate and results-driven Software Engineer with strong expertise in backend development and full-stack solutions. I\u2019ve had the privilege of working at industry-leading companies like Apple and Volkswagen Group of America, where I contributed to building scalable systems, enhancing application performance, and solving complex engineering challenges. With a solid foundation in computer science and a commitment to writing clean, efficient, and maintainable code, I take pride in delivering high-quality solutions that drive real-world impact. Outside of coding, I enjoy traveling, staying active with sports, and immersing myself in music and movies.")),i.a.createElement(S,null,i.a.createElement(L,{src:D.a,alt:"Thejaswi Gadhiraj - Profile Picture"})))))};const U=d.b.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`,q=d.b.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,V=d.b.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,K=d.b.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${e=>{let{theme:t}=e;return t.text_secondary}};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,Y=d.b.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`,B=d.b.div`
  width: 100%;
  max-width: 500px;
  background: ${e=>{let{theme:t}=e;return t.card}};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`,F=d.b.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.text_secondary}};
  margin-bottom: 20px;
  text-align: center;
`,H=d.b.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`,N=d.b.div`
  font-size: 16px;
  font-weight: 400;
  color: ${e=>{let{theme:t}=e;return t.text_primary+80}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.text_primary+80}};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`,Z=d.b.img`
  width: 24px;
  height: 24px;
`;var X=e=>{let{skillsData:t}=e;return i.a.createElement(U,{id:"skills"},i.a.createElement(q,null,i.a.createElement(V,null,"Skills"),i.a.createElement(K,null,"Here are some of my skills on which I have been working!"),i.a.createElement(Y,null,[{title:"Frontend",skills:[{name:"React JS",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},{name:"Angular",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"},{name:"HTML",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},{name:"CSS",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},{name:"JavaScript",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"}]},{title:"Backend",skills:[{name:"Java",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"},{name:"Spring Boot",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"},{name:"Node.js",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},{name:"REST API",image:"https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.svg"}]},{title:"Databases",skills:[{name:"MySQL",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},{name:"MongoDB",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},{name:"Cassandra",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg"},{name:"Oracle DB",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"}]},{title:"Big Data",skills:[{name:"Hadoop",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg"},{name:"Hive",image:"data:image/png;base64,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"},{name:"Spark",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg"}]},{title:"Cloud & DevOps",skills:[{name:"AWS",image:"data:image/png;base64,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"},{name:"Microsoft Azure",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"},{name:"Docker",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"},{name:"Kubernetes",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"},{name:"Jenkins",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"},{name:"GitHub",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZLYBiovD__L58iSOJAp3KTs0-MrXk4qLQwA&s"}]},{title:"Testing",skills:[{name:"Selenium",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg"},{name:"Cucumber",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cucumber/cucumber-plain.svg"},{name:"Karate",image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAflBMVEUAAAD////5+fnw8PDMzMyzs7O9vb38/PxfX196enr19fWmpqYrKyvCwsKLi4u5ubkXFxfo6OjZ2dnR0dFaWlpxcXHg4OCbm5tQUFBqamrc3NypqakODg5lZWU0NDQ+Pj5GRkYbGxuQkJCDg4MkJCQ4ODgnJyeYmJhNTU1CQkIAwxtPAAASbklEQVR4nO1da5uyKhQttSzL7nkpK7tMNf//Dx7ZCKIigor1nmfWh3lmGlNcwmbtCzgY/OEPf/jDH/7wh04wj3fhdOGPxtbG8zbWaPHz6RZ9Kc4b07DtYR52+OlmfSdGQx7+yOIhKHYqwPbTzfpObP86ljSmXK7Wn27WV+Kx5pI1/nS7vhIzLldD/9Pt+kbEXOs+HM4+3bBvxI3P1fD46YZ9I04VZC0/3bBvxG8FWe6nG/aNeJp8sqxPN+wr4X0JWfOpP956nmeNbkHf15aG9Q1knWc5tWds971eXhrHz5O14zww49VjA6TB93Z6JGvO902HxqK3Jkhjwm9qb7Phgn99hM28r0bI4uJwG9qXznKruRp+YeiD70j3pOD5F8/wbZaLbzL68Q3ruPo6tvgOTy+NPNRyNRze+2iIPPxPtXEswdVw+O6hJQrgDcST/stWiJYiTP0tUcFvyT80rav2q0aGHFnfFi2ajkaudTANhEQNHiePHi7KT8Dx8F353lT8RdH1lOiefvyyuTRXxJs4Hbdrx/Rc/7OONhlzp3GiUJ1LL9eU71jDYTwYvNnZwJx9TttHEfq5WuCZ3OynIbIWC8G9lOagjxmy+TN5ckdi5b1erik5FVbD3PXSTozzJHj//jxRp1pd91aW5Oknb8/6hNbs5o8zF3VzX2DcZjR24y8y3FPdP+2loQkeM2do24bhmOZ6fch5Hf3EGzJuSIZySj7K+fBpWvPMfrZJD+wnhhMtKiLv0L8tP/yJNLfgTK/G0JAapnwyPAYOc5MO9ZJ6UM6Daa3/anjua3euP9Pg5S+m+9MkkDmWBXFIzRX76YZD1uCJPvspH5bAXg00I9yUyeHCOSzvE3FzaIrW2ao9ZWLfJ/DXM8BkYFEPZAUJ3ljShMln4TuABxIlH/9mORbd8VwVfYMe/U1wrhOT+9+oNWM+QZYATyZIQh2gb/qULHzSEfw/fbpILRSlrFZ9+qgIeAuwrlT0F9byKSsO9CXojtgE2U/UPEqWwTyCO/4dhdiKZOmcuuOKLKEYVsXzC3OcKjYFBuJ1kI1ImATXBbIgsHypJmv4bE5GDUJ+vL0eS64vO0koouw7im1xyXeIHwOhGKtIFgxEAVnaSqMWFeVFEnB49jtA/YnkHQ25SMXqPj4k2m77clh+AOgPt0gW9DcBWbrGYVUplhQ8jvKKDdQ3drhz2bFEE6L89CJBFpLpDwFZqh1aFrGK71oCp7+fnaGT9Kdohp6CLeGr7QuPq54ssIRTAVlDTaG3igyhJIyy2dobQ/sX/TJBdrk+x1cK9gvIwh9trswRfLJ+O+Mnhx+BjyOBnM/4M3jjWo7J4DJ14bdassrVqwKypvf7fRrD94JhNVnGVtV3kMS5HVlsBPURjNIR5W6gvxruqc6dDMtnFJDFgDS7TJanL6g7VyOrNB2sieszGRmzIPcfX+L5coyADFkr6sgWyXJ0xmgqKt4rYJbrgCBLfXkd4IbooLK3Uxl/lpedBLKoT4H+KJE1zWalElk6QyMrJbL8smNkxIO9ixu/JR6bs5R0z3i6BcjyLRcD/UHJ2k0STI/sYCgNQ/CFovcu1sGWiq/j8PqhRz8zV4Pf5Pa9l2zAnlvZVM6fFmbDHMo2yx/s8T1tu3eoZUoLaMvOQqFhJyTdtnv5gcCtERCQxdGEnNkwizaNOmMphWwgC93GqqpAPgWSoCpZa24dVmuyGHQd2lIIz7wGL/EBi8FAyeHnXrtLsroukqooTObdxbXu4MT7OavMRtzTAVmu4WC0JGvYrTyVJ+tWa+DGNOkvB255kYQjzaCOrG7zrtIR5UR+PmocSS/pWSrXrjbwnZHV8XrSl2TcYVG9pie7z7mSJtzxT6JCFi8Gn0O3ZA12UuphHQ3edZrMwMlseVSKUimy7mG4j5OPozAMJ1XiumOyEtdfIgI4ZZ2MKoSK9SOV7o4UWdyMtHayBqdateVVLVHJ4a5YG7ji8C9PFj8jXWy3BgSztYFhl/YJQVhIzZrKcw+nbqbbniXKcLbAOYquj/n5Er93k3A/xVUrt5fvz46W7cj427anXpVRnoydyeS0o7ceJH8g7WrtTpNTgazp5ESx4zdQVzQ+qhhC58U2pxhMvpm3N80qFZcST6E5dAUCrzzjfHmVuvd28H5tCs/YtJpvgCRY1NQamgbhgCO+L7ctx3xBUu6ysGh3M5fTVtmUuXhdU3M4OANgkfqUX6u7yGC+b1wWG76gIJ78Y79M7IR3nLS/8mphmUYO6EK20QbONjWgyPn3UCOPIBY7wjUzWj+3baWoYhI610mgKYqLZsNuolHpKHf3EF/tjK1nOph+FpZIpPay6LAzsqKC5OmMLWS0LguenWLRefiRh+561mDl5yfzbs46OM8LKoGLXhYdbjvtwrlM7rqbMkq57LTOrY524+USvIDdfr+HZXLJB+O46vBZ8t8UbqaorrvFcbRc+vfMoJ5ZZ8jsZL0WN7xUgj7tgr2fvOhGV6ycb5kGk3Wj8xmjme3NgvDFeLadqPqVXHJaZ8oXkZU3KkKynpSV1HkIyh7sOFVEd/pJJ7Xf99KFuNC5PkyRLOJvp8U8V766TScKUlbRyfqHSDLdqnOnAErWZDqdQm8Rk7XHTcKxmqzQy9m6rpu5ZGZAT550wk4aGkrWAOpcwUDJorOhmCxc/of/T6yStSfOV+KEpJ/hxd1QoN9JUP6x2snlWztwbypByaI6S3xFSA/h6Tkdkcf8VHdJRya2//BHF4t7UKphIVEG6GqqqgMokvVG/8ULE3BWbVvO8e7wtIUpQvdndKDhIex4rt0o4Dh4aFxWTslyDcMGwSUkC4YCNHzG9J8icOcC67HHt9AWz5SCidDMG2jwa6pBRFCbDSEzB4MQl+Ok83Q0ddeG4XhLMm8DkzZYMkRvexOfMfByyvV9KfBCUbXcoBLUyELDwIDfwHykApCRn8aN+QjicEE2JJsjYiJ/83ew201CFIe/L24Ir9fL9/3Z7Kd0bMdQIiuyyZgaZaMrzIeW1rjJ4O2A5kFdq23G56oS69Q3DpXIAhGNLDpkpDED5TIfGAxPmxwBVitu10ql+79qW0hEyfIty4LRIiDLImMLRhm43bzdaEGRAolg451h21hApHb72rpWTjrUiVI04O7kGAh2v3mGFksFgxyD5sZDq0ZGOyWjrU09qOismIzCkI42wV7jEKAgl2g3H84d070r9BddJl7a3Ql8yyDHIvMOTkxVJCAepHYtJL+Y7i1u1cihsfXfUl3mGepaWEvJui1HS5ACXLJoqRKYLI/0wiqJSFd4UpmL0LhinoaBzO1rJyYsRhnDtSarJTkb0jpguHs00yFiz8MKwBmXLLeAhuHld06crLevjC9aqXIO7wt/ufHwoRs9+wGokoUmzB8y0vZVZMGeBmg+hMFKO0bDWyhWE9FUwdW1yTQb5A/Rs4WIKll70jA0pKqj4kgzoGkA5D4tRWlGVlSIJ1MiTmigb2P8RyFiqyV9SMmKVqsV2JR6ssCAoU+rq2On5DB0StozmpFVKJKii3lTOezg0Flx7YiOrSUZ6WALpAOfrOpqO0oWMi80L9aMrELtfuqsX7OPsT9aTAZo2CJHUmdRshALoESRt1Y9DCfkO+jL7YZhIZ5MEtzM0hM85IpdS8OLw/ZcskoLrWnTUO8G4RQMRAYezd03cmqa1WhCVjG1SjLOjMRLjVhx9YjT9dZevs0lq7RVNyULDkHeHrIUjyquYBJE0gGCqjTf2oSsAgVGnH7OOKVplVFpje66050AfaxKymQljyVP146Ev+HuUdRlTH7hAU60zp+xWYlI0SzShVRMgQDZVKK0MMnrTm69bPZilCzi7hXomk+P6D8GaSgwXDUO0SgExYqsMYzawyxs4t6WyoVpDpUJx5P5sbz8u6taOp/I4gPOtGVVNHtKV6FuADajQXIT5jn4Gr9rgcyHR49+uROO1VHa1iFLqzG1FCahpNyaTuRWRFpxIBMfW3IUEroKKT/0JehviGgYkD88rrDIRf2WhmgUd6pKcS2V2m9eswTH0WjJ0rg28YK2isUzbXFNr51NGPn6rBA3s9Ah6G1nkT3OQLQhsAwdC54EuoVmErGLuuoO5NaqQFW5mC30ymSBBUFUrOgkylmEEKOPoct59IBG81InVdV2+7IaICsX9ilV/lHXjoFBDgI5ivVNkA8AbnBuId3HZIBjDo0SFrtWm/Z0yBaQlRNtJbL2HLLQuLBhVgMy0sF1y3TjOm0Z6FCwWDAZNNnW/qy0pYOIrbab6jckCwYX2EwcEiEG4TSz1mvP8skO+8CVASrnwDmNDCKFdfd1aMlWQ7KwtwoGCPv83JLdK75POD14JU3Mu9z7DyTRrnayKVkgtbAOwFOVF5fOna6ShAEJK/aaVEnKLB9UQKsa5qZk4QgCvnT67N04dwAp3cBd/0BpU4PsRGjbBk9dldFGbzUmCzt6WPSTCM3hRmzV6UisMo6PQP9oUMxW3DuuDON+Ok12uyD+/YmlViK1eBVwY7JS/wurDmY5orfZeJmo9nDmLo0MKKfxgvqqtVxv3ctMnG5jP7ExWUQlYLYirsYmpTRkLKluNSkhGgoW+yGz/UNjr7opWZndTX3KS4kumnDJ4qhqRutaLxrKpRMTiQ0Ntg0jNlfmfjG4ZBWz7mxpA23w3cpG4zpbd8FYErVtvet7CU+wRH59OfO2WRFE5M9I8VeKEllxckTxCf6wDbKyoqlLePNn/m2SWafcCmre7qqVqH9TREVS8Ld+Bf6mo/iW3Kqw/It2K7XeOTdBKcVnLrWrTqptj+hlBHXfVYLkErp5fnUcV5uf8wNJzYuu3TBrIxhL81rd30k08AYlMhLBn8JLnO1lIW32uBfss1rcr3bplycu+tjXrVpp4vk8EmRdki6MYe4seiaHcL6Jtw7d7uhIsw/H6eQyf5zjyW2cmaojZNcVuZrUWWkzrjnD6ig+haH+Or0r+l4mHbLHkRnPCgU/QNtUGZCYFj1EKy0NUeOqdltSR6L0KhBLD/UNxvM6i61JowuFKskazImjNamaf8jqzoeiS1Zncgy5LPNL6AEoL4XKk8UKOtq1qsliMJ+V+8Jm0TRdV7ukUFbdCreVVPYSr+hb1DSzo5zWH0EqQuZUU7bbj1ssYYvrXEJ54yyaU01l+RAnoB2APRUV7dd3cojUudjn2GYnkzo3R6E+nLPddoZ2NRCtXq9C82oIbdYWlvdez0PJ/om6VrvSLVZENinvz+xWi/LEuqWqaqcWda12L9xg9jtstDYwm8SaB7vnNapB1VERjGlDcQFnhLY1y7Rw5rxmevxyS46RO9tu5mPMmtdU14Q7lZ266tox5dFzzRNDXgXE6mPZ2bAb1ATdGwSFBV1LsfapHPzbj6xjbtqX0lldIRBnHZq4v6JQj1o0skxWCb2SJXZ/m20oJIidKq67QlOP2M9C84mu3Q6LEGcJG6axRF1LaV8RaJ0rMsc47qhzz6AMImPcIuUn6K4K6oGmmqoJJgbX7OG95OKX6zR/XiJXU1rFM7KqauV41oW1vvwEQxg7byG3RdvXSEtcpnFV7gmjprXvCyd8mUKrkg5B15J6Ad2gsPCN37VyV2nTXAkIa9ZaFgsJvALJPpAzp3yLkMs46H0Hueg1RK3L0ARS15Ezxrluw59qcr6Hzh2phClVu/XGYaInITdx5MKIfJuQ0z3qEX4FCMyK0cEma4KuJbnJJRsL4Tvg7AorrcJU8LJHp4seLepacmOcibJVvVOIuYbWV9tXx+icbnYN423SkUIy8ZS9G7gqtZCtnND79vFK2WB2NK1cBV1L8nGkBlywSJ3E4nSrrD1/HJqdGUqBipO9t91os1mKEzH78WE7i1s3tg7vg1GOJ6+7u64gb9vdjuK9YRpc9v7IMh3CmW14Xa6qrOxaW70CUgdCO40APILpYuQe72HQ7X4fD66b7nhtBe8HsDBYeRjpGBg/wenuH8fWYW2uN1tr7N/DXTC/69x2Ug+w+iXGc6Vxc8MEj0tW2hUMjdG/NQx/06TCOi2v1MsVu3fiCtSTN/t3+NpTa4KjS3ONW4wCIvo0qD/XyRtBegCbrkduwkPfNpAEc97S8/Uo1LMpUneIcrVYRsA8do0Xxdcoyfr1MdZ/8RYobsezUnpdalPMoQ9x1oXYvbz7oimKCeNpL3IauhY/R6ZjW6SOcC74OO0qW+SRdK2KZFIvL+xphnmeLCfu6bpJ1+JHbbwecn6NEY5Go+VyOR6PXde1+vM95pfovkRq3iEOvOGYnuW3evna/xbYNkbXx3OO8Xx8u3L4wx/+8Id/Bv8BBjHwimTnHZ8AAAAASUVORK5CYII="},{name:"TestNG",image:"data:image/png;base64,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"}]},{title:"Programming Languages",skills:[{name:"Python",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},{name:"C",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"},{name:"C++",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"},{name:"Java",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"}]}].map((e,t)=>i.a.createElement(B,{key:t},i.a.createElement(F,null,e.title),i.a.createElement(H,null,e.skills.map((e,t)=>i.a.createElement(N,{key:t},i.a.createElement(Z,{src:e.image,alt:`${e.name} - Thejaswi Gadhiraj skills`}),e.name))))))))},Q=a(195),_=a(198),$=a(200),ee=a(196),te=a(199);const ae=d.b.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`,ne=d.b.p`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_primary+99}};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`,ie=d.b.span`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`,re=d.b.article`
    width: 650px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover {
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px) {
        padding: 10px;
        gap: 12px;
        width: 300px;
    }
    @media only screen and (max-width: 575px) {
        width: 290px;
        padding: 12px 8px;
    }
    &:hover ${ae} {
        display: block;
    }
    &:hover ${ie} {
        overflow: visible;
        -webkit-line-clamp: unset;
    }
    border: 0.1px solid #306EE8;
`,oe=d.b.header`
    width: 100%;
    display: flex;
    gap: 12px;
`,le=d.b.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px) {
        height: 40px;
    }
`,se=d.b.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`,de=d.b.h3`
    font-size: 18px;
    font-weight: 600;
    color: ${e=>{let{theme:t}=e;return t.text_primary+99}};
    @media only screen and (max-width: 768px) {
        font-size: 14px;
    }
`,ce=d.b.p`
    font-size: 14px;
    font-weight: 500;
    color: ${e=>{let{theme:t}=e;return t.text_secondary+99}};
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`,pe=d.b.p`
    font-size: 12px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_secondary+80}};
    @media only screen and (max-width: 768px) {
        font-size: 10px;
    }
`,me=d.b.section`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;
`,he=d.b.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,ue=d.b.p`
    font-size: 15px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_primary+99}};
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;var xe=e=>{let{experience:t}=e;return i.a.createElement(re,{"aria-labelledby":`experience-card-${t.id}`,role:"region","aria-label":`Experience at ${t.company}`},i.a.createElement(oe,null,i.a.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(le,{src:t.img,alt:`Logo for ${t.role} role at ${t.company} - Thejaswi Gadhiraj`})),i.a.createElement(se,null,i.a.createElement(de,null,t.role),i.a.createElement(ce,null,t.company),i.a.createElement(pe,null,t.date))),i.a.createElement(ne,null,(null===t||void 0===t?void 0:t.desc)&&i.a.createElement(ie,null,t.desc),(null===t||void 0===t?void 0:t.skills)&&i.a.createElement(i.a.Fragment,null,i.a.createElement("br",null),i.a.createElement(me,null,i.a.createElement("b",null,"Skills:"),i.a.createElement(he,null,t.skills.map((e,t)=>i.a.createElement(ue,{key:t},"\u2022 ",e)))))))},ge=a(72),be=a(95);a(145);const fe=Object(be.a)({apiKey:"AIzaSyEXAMPLE",authDomain:"my-app.firebaseapp.com",projectId:"my-app",storageBucket:"my-app.appspot.com",messagingSenderId:"1234567890",appId:"1:1234567890:web:abcdef123456"}),we=(Object(ge.a)(fe),d.b.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 60px;
  position: relative;
  z-index: 1;
`),ye=d.b.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  padding: 40px 0 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,ve=d.b.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,Ee=d.b.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${e=>{let{theme:t}=e;return t.text_secondary}};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,je=d.b.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  @media (max-width: 400px) {
    align-items: flex-end;
  }
`;var Ae=()=>{const e=[{company:"Apple Inc.",date:"Dec 2020 - Present",desc:"Worked across three major teams \u2014 Ads Platform, Notification Services, and IDMS \u2014 contributing to ad campaign management, secure identity services, and real-time notifications using technologies like Spring Boot, React, Kafka, AWS, and Jenkins.",id:0,img:"https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_100_100/company-logo_100_100/0/1630637844948/apple_logo?e=1750896000&v=beta&t=OvhAJwkL4eUhjmSHJuC4w6WktbUVqHCmiJwQ8lo4nTQ",link:"https://www.apple.com",role:"Software Engineer",skills:["Spring Boot","ReactJS","Kafka","AWS","Jenkins","OAuth2","JWT","Docker","Kubernetes","MySQL","MongoDB","Hive","Spark","Hadoop"]},{company:"Volkswagen Group of America",date:"Sept 2020 \u2013 Dec 2020",desc:"Maintained and optimized the Volkswagen dealer application, developed responsive UIs using React and AngularJS, improved performance through lazy loading, and ensured cross-browser compatibility.",id:1,img:"data:image/png;base64,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",link:"https://www.vw.com",role:"Full Stack Developer",skills:["ReactJS","AngularJS","JavaScript","HTML","CSS","API Integration","Performance Optimization"]},{company:"YKS IT Services",date:"Jan 2018 \u2013 Dec 2018",desc:"Developed backend features for shopping sites like Snapdeal and Lime Road using Angular and Node.js, ensured secure and scalable code, performed unit testing, and maintained deployed systems.",id:2,img:"https://media.licdn.com/dms/image/v2/C4D0BAQEEUATFuNX0KQ/company-logo_100_100/company-logo_100_100/0/1659949932508?e=1750896000&v=beta&t=7cnBRXPgzptn60KTo-Eupjmr7ISx1xCeUU_dziGghAc",link:"#",role:"Software Engineer",skills:["Angular","Node.js","MySQL","JavaScript","HTML","Security","Scrum","Unit Testing"]},{company:"DRDO - Advanced Systems Laboratory",date:"June 2017",desc:"Worked on servo controller systems for electromechanical actuators. Debugged circuits using lab equipment and applied signal processing in MATLAB for defense-grade applications.",id:3,img:"https://media.licdn.com/dms/image/v2/C4D0BAQHr0-w-4HF1ow/company-logo_100_100/company-logo_100_100/0/1630576665362?e=1750896000&v=beta&t=9aFrgGD45PNPSSJ7X9KwSyHEIcg5QRJtScfOAbZp1YM",link:"https://drdo.gov.in",role:"Software Developer Intern",skills:["MATLAB","Signal Processing","Electronics Debugging","Sensors & Actuators"]},{company:"Smart Bridge",date:"2017",desc:"Built an IoT-based Automatic Toll Gate and Accident Response System using JavaScript, C++, and React to automate toll collection and incident reporting.",id:4,img:"https://media.licdn.com/dms/image/v2/C4E0BAQE6IrOttCF2xQ/company-logo_100_100/company-logo_100_100/0/1631352490257?e=1750896000&v=beta&t=sa71LV1IyZ-78ZUIWSKCnL2_hF-yif8Jz8LAJHzr-AQ",link:"#",role:"Software Intern",skills:["JavaScript","C++","React","IoT"]}];return i.a.createElement(we,{id:"experience"},i.a.createElement(ye,null,i.a.createElement(ve,null,"Experience"),i.a.createElement(Ee,null,"My work experience as a Developer and other roles on different clubs and team projects."),i.a.createElement(je,null,e.map((t,a)=>i.a.createElement(Q.a,{key:t.id,"aria-label":`Experience item ${a+1}`},i.a.createElement(_.a,null,i.a.createElement(te.a,{variant:"outlined",color:"secondary"}),a<e.length-1&&i.a.createElement($.a,{style:{background:"#854CE6"}})),i.a.createElement(ee.a,null,i.a.createElement(xe,{experience:t})))))))},ke=a(201);const De=d.b.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`,Oe=d.b.p`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_primary+99}};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`,ze=d.b.span`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`,Me=d.b.article`
    width: 650px;
    border-radius: 10px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover {
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px) {
        padding: 10px;
        gap: 8px;
        width: 300px;
    }
    &:hover ${De} {
        display: flex;
    }
    &:hover ${ze} {
        overflow: visible;
        -webkit-line-clamp: unset;
    }
    border: 0.1px solid #854CE6;
`,Ce=d.b.div`
    width: 100%;
    display: flex;
    gap: 12px;
`,Se=d.b.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px) {
        height: 40px;
    }
`,Le=d.b.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`,Ie=d.b.h2`
    font-size: 18px;
    font-weight: 600;
    color: ${e=>{let{theme:t}=e;return t.text_primary+99}};
    @media only screen and (max-width: 768px) {
        font-size: 14px;
    }
`,Ge=d.b.p`
    font-size: 14px;
    font-weight: 500;
    color: ${e=>{let{theme:t}=e;return t.text_secondary+99}};
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`,Re=d.b.p`
    font-size: 12px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_secondary+80}};
    @media only screen and (max-width: 768px) {
        font-size: 10px;
    }
`,Je=d.b.p`
    font-size: 14px;
    font-weight: 500;
    color: ${e=>{let{theme:t}=e;return t.text_secondary+99}};
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;var We=e=>{let{education:t}=e;return i.a.createElement(Me,{"aria-labelledby":`education-card-${t.id}`,role:"article",tabIndex:"0"},i.a.createElement(Ce,null,i.a.createElement(Se,{src:t.img,alt:`${t.school} - Thejaswi Gadhiraju`}),i.a.createElement(Le,null,i.a.createElement(Ie,null,t.school),i.a.createElement(Ge,null,t.degree),i.a.createElement(Re,null,t.date))),i.a.createElement(Je,null,i.a.createElement("b",null,"Grade: "),t.grade),i.a.createElement(Oe,null,i.a.createElement(ze,null,t.desc)))};const Te=d.b.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 60px;
  position: relative;
  z-index: 1;
  @media (max-width: 960px) {
    padding: 0;
  }
`,Pe=d.b.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  padding: 40px 0 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,Ue=d.b.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,qe=d.b.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${e=>{let{theme:t}=e;return t.text_secondary}};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,Ve=d.b.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  @media (max-width: 660px) {
    align-items: flex-end;
  }
`;var Ke=()=>{const e=[{date:"2018 - 2020",degree:"Master of Science in Computer Science",desc:"Completed a 30-credit program focusing on both theoretical and practical aspects of computer science. Coursework included Algorithm Design, Database Systems, Software Engineering, and Artificial Intelligence. Engaged in a capstone project, applying learned skills to real-world problems.",grade:"GPA: 3.6",id:0,img:"https://upload.wikimedia.org/wikipedia/en/0/02/University_of_Dayton.svg",school:"University of Dayton, Ohio"},{date:"2014 - 2018",degree:"Bachelor of Technology (B.Tech) in Electronics and Computer Engineering",desc:"Completed a comprehensive undergraduate program integrating core concepts from both Computer Science and Electronics Engineering. The curriculum encompassed foundational and advanced courses, providing a multidisciplinary skill set.",grade:"GPA: 3.47 (First Class with Distinction)",id:1,img:"https://free-images.com/md/71bc/snist_logo.jpg",school:"Sreenidhi Institute of Science and Technology, Hyderabad, India"},{date:"2012 - 2014",degree:"Intermediate Education (Class XI & XII)",desc:"Completed a rigorous two-year intermediate program with a focus on Mathematics, Physics, and Chemistry. Achieved a commendable aggregate of 91%, laying a strong foundation for advanced studies in engineering and technology.",grade:"Percentage: 91%",id:2,img:"https://www.narayanagroup.com/images/logo.png",school:"Narayana Junior College, Hyderabad, India"}];return i.a.createElement(Te,{id:"education"},i.a.createElement(Pe,null,i.a.createElement(Ue,null,"Education"),i.a.createElement(qe,null,"My education has been a journey of self-discovery and growth. My educational details are as follows."),i.a.createElement(Ve,null,i.a.createElement(ke.a,null,e.map((t,a)=>i.a.createElement(Q.a,{key:t.id},i.a.createElement(ee.a,{sx:{py:"12px",px:2}},i.a.createElement(We,{education:t})),i.a.createElement(_.a,null,i.a.createElement(te.a,{variant:"outlined",color:"secondary"}),a<e.length-1&&i.a.createElement($.a,{style:{background:"#854CE6"}}))))))))};a(104);const Ye=d.b.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`,Be=d.b.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,Fe=d.b.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,He=d.b.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${e=>{let{theme:t}=e;return t.text_secondary}};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;d.b.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${e=>{let{theme:t}=e;return t.card}};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`,d.b.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
`,d.b.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${e=>{let{theme:t}=e;return t.text_secondary}};
  outline: none;
  font-size: 18px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${e=>{let{theme:t}=e;return t.primary}};
  }
`,d.b.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${e=>{let{theme:t}=e;return t.text_secondary}};
  outline: none;
  font-size: 18px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  border-radius: 12px;
  padding: 12px 16px;
  resize: vertical;
  &:focus {
    border: 1px solid ${e=>{let{theme:t}=e;return t.primary}};
  }
`,d.b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  font-size: 14px;
  color: ${e=>{let{theme:t}=e;return t.text_secondary}};

  input {
    margin-right: 8px;
    width: 15px;
    height: 15px;
    border-radius: 3px;
    cursor: pointer; 
  }
`,d.b.div`
  color: ${e=>{let{theme:t}=e;return t.BgLight}};
  @media (max-width: 575px) {
    font-size: 12px;
  }
`,d.b.a`
  color: ${e=>{let{theme:t}=e;return t.primary}};
  font-weight: 500;

  &:hover{
    cursor: pointer;
    opacity: 0.9;
  }
`,d.b.input`
  width: 100%;
  text-align: center;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  font-size: 18px;
  font-weight: 600;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 20px 20px 60px #1f2634;
    cursor: pointer;
  }

  &:active {
    transform: scale(0.95);
    filter: brightness(0.5);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;var Ne=()=>{Object(s.p)();const[e,t]=Object(n.useState)({open:!1,message:"",severity:"success"}),[a,r]=Object(n.useState)(!1);Object(n.useRef)();return i.a.createElement(Ye,null,i.a.createElement(Be,null,i.a.createElement(Fe,null,"Contact"),i.a.createElement(He,null,"Feel free to reach out to me for any questions or collaboration!"),i.a.createElement(He,null,i.a.createElement("a",{href:"mailto:thejaswivarma@gmail.com",style:{textDecoration:"none",color:"inherit"}},"\ud83d\udce7 thejaswivarma@gmail.com"))))},Ze=a(98),Xe=a.n(Ze),Qe=a(99),_e=a.n(Qe),$e=a(189);const et=d.b.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`,tt=d.b.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
`,at=(d.b.img`
  height: 5rem;
  width: 4rem;
  padding: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`,d.b.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${e=>{let{theme:t}=e;return t.primary}};
`),nt=d.b.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`,it=Object(d.b)(p.Link)`
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.primary}};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,rt=d.b.div`
  display: flex;
  margin-top: 1rem;
`,ot=d.b.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.primary}};
  }
`,lt=(d.b.div`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.primary}};
  }
`,d.b.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${e=>{let{theme:t}=e;return t.soft2}};
  text-align: center;
`);var st=e=>{let{footerData1:t,links:a=[]}=e;const[r,o]=Object(n.useState)(null),l={description:"As a final-year B.Tech AI & Data Science student at Kathir College of Engineering, I\u2019m not just studying technology\u2014I\u2019m living it. With a passion for AI/ML and full-stack development, I strive to create solutions that shape the future. I believe technology can change the world, and I\u2019m ready to be part of that change.",github:"https://github.com/ThejaswiG",insta:"https://www.instagram.com/tejugadhiraju/",linkedin:"https://www.linkedin.com/in/thejaswigadhiraju",name:"Thejaswi Gadhiraj",profilepic:"",resume:"",roles:["Full Stack Developer","Python Developer","AI/ML Developer"]};Object(n.useEffect)(()=>{const e=e=>{e.preventDefault(),o(e)};return window.addEventListener("beforeinstallprompt",e),()=>{window.removeEventListener("beforeinstallprompt",e)}},[]);return i.a.createElement(et,null,i.a.createElement(tt,null,i.a.createElement("a",{href:""}),i.a.createElement(at,null,"Thejaswi Gadhiraj"),i.a.createElement(nt,null,a.map((e,t)=>i.a.createElement(it,{to:e.toLowerCase(),smooth:!0,duration:100,offset:-80,key:t,"aria-label":`${e} section`},e))),i.a.createElement(rt,null,i.a.createElement(ot,{href:"https://github.com/ThejaswiG",target:"_blank","aria-label":"GitHub profile"},i.a.createElement($e.a,null)),i.a.createElement(ot,{href:(null===l||void 0===l?void 0:l.linkedin)||"#",target:"_blank","aria-label":"LinkedIn profile"},i.a.createElement(Xe.a,null)),i.a.createElement(ot,{href:(null===l||void 0===l?void 0:l.insta)||"#",target:"_blank","aria-label":"Instagram profile"},i.a.createElement(_e.a,null))),i.a.createElement(lt,null,"\xa9 ",(new Date).getFullYear()," Thejaswi Gadhiraj. All rights reserved.")))},dt=a(193),ct=a(194);const pt=d.b.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`,mt=d.b.div`
  max-width: 800px;
  width: 100%;
  border-radius: 16px;
  margin: 50px 12px;
  height: min-content;
  background-color: ${e=>{let{theme:t}=e;return t.card}};
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`,ht=d.b.div`
  font-size: 28px;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
      font-size: 24px;
      margin: 6px 6px 0px 6px;
  }
`,ut=d.b.div`
    font-size: 16px;
    margin: 2px 6px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_secondary}};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,xt=d.b.div`
    font-size: 16px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_primary}};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        margin: 6px 6px;
    }
`,gt=d.b.img`
    width: 100%;
    border-radius: 12px;
    margin-top: 25px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
`,bt=(d.b.div`
    font-size: 20px;
    font-weight: 600;
    color: ${e=>{let{theme:t}=e;return t.text_primary}};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 16px;
        margin: 8px 6px;
    }
`,d.b.div`
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0px;
    @media only screen and (max-width: 600px) {
        margin: 4px 0px;
    }
`),ft=d.b.div`
    font-size: 14px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.primary}};
    margin: 4px;
    padding: 4px 8px;
    border-radius: 8px;
    background-color: ${e=>{let{theme:t}=e;return t.primary+20}};
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`,wt=(d.b.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex-wrap: wrap;
    margin: 12px 6px;
    @media only screen and (max-width: 600px) {
        margin: 4px 6px;
    }
`,d.b.div`
    display: flex;
    align-items: center;
    gap: 12px;
`,d.b.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 4px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
    @media only screen and (max-width: 600px) {
        width: 32px;
        height: 32px;
    }
`,d.b.div`
    font-size: 16px;
    font-weight: 500;
    width: 200px;
    color: ${e=>{let{theme:t}=e;return t.text_primary}};
    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
    @media only screen and (max-width: 400px) {
        width: 150px
    }    
`,d.b.div`
    display: flex;
    justify-content: flex-end;
    margin: 12px 0px;
    gap: 12px;
`),yt=d.b.a`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: ${e=>{let{theme:t}=e;return t.text_primary}};
    padding: 12px 16px;
    border-radius: 8px;
    background-color: ${e=>{let{theme:t}=e;return t.primary}};
    ${e=>{let{dull:t,theme:a}=e;return t&&`\n        background-color: ${a.bgLight};\n        color: ${a.text_secondary};\n        &:hover {\n            background-color: ${e=>{let{theme:t}=e;return t.bg+99}};\n        }\n    `}}
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        background-color: ${e=>{let{theme:t}=e;return t.primary+99}};
    }
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;var vt=e=>{let{openModal:t,setOpenModal:a}=e;const n=null===t||void 0===t?void 0:t.project;return i.a.createElement(ct.a,{open:(null===t||void 0===t?void 0:t.state)||!1,onClose:()=>{a({state:!1,project:null})},"aria-labelledby":"project-title","aria-describedby":"project-description"},i.a.createElement(pt,null,i.a.createElement(mt,null,i.a.createElement(dt.a,{style:{position:"absolute",top:"10px",right:"20px",cursor:"pointer"},onClick:()=>{a({state:!1,project:null})}}),i.a.createElement(gt,{src:null===n||void 0===n?void 0:n.image,alt:`Image for project titled ${n.title} - by Thejaswi Gadhiraj`}),i.a.createElement(ht,null,null===n||void 0===n?void 0:n.title),i.a.createElement(ut,null,n.date),i.a.createElement(bt,null,null===n||void 0===n?void 0:n.tags.map(e=>i.a.createElement(ft,{key:e},e))),i.a.createElement(xt,null,null===n||void 0===n?void 0:n.description),n.member&&i.a.createElement(i.a.Fragment,null),i.a.createElement(wt,null,(null===n||void 0===n?void 0:n.github)&&i.a.createElement(yt,{dull:!0,href:null===n||void 0===n?void 0:n.github,target:"_blank"},"View Code"),(null===n||void 0===n?void 0:n.webapp)&&i.a.createElement(yt,{href:n.webapp,target:"_blank"},"View Live")))))},Et=a(40);const jt=d.b.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%),
    linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`,At=Object(n.lazy)(()=>a.e(0).then(a.bind(null,205)));var kt=e=>{let{firebaseData:t,openModal:a,setOpenModal:r}=e;return i.a.createElement(i.a.Fragment,null,i.a.createElement(Et.a,null,i.a.createElement("title",null,"Thejaswi Gadhiraj | AI/ML & Web Developer Portfolio"),i.a.createElement("meta",{name:"description",content:"Welcome to the portfolio of Thejaswi Gadhiraj, showcasing skills, projects, and experiences in AI/ML and Web Development."}),i.a.createElement("meta",{name:"keywords",content:"MyMind, Thejaswi Gadhiraj, Machine Learning, Python Developer, Frontend Developer, Fullstack Developer, Squad of Creators, Portfolio"})),i.a.createElement(E,{navbarData:{github:"https://github.com/ThejaswiG"},sections:["About","Skills","Experience","Projects","Education"],links:["About","Skills","Experience","Projects","Education"]}),i.a.createElement(P,{heroData:t.Bio||{}}),i.a.createElement(jt,null,i.a.createElement(X,{skillsData:t.skills||[]}),i.a.createElement(Ae,null)),i.a.createElement(n.Suspense,null,i.a.createElement(At,{projectsData:t.projects||[],openModal:a,setOpenModal:r,defaultfilter:"top",AllCard:1,projectFilters:null,ShowTitle:!0,IntroText:!0})),i.a.createElement(jt,null,i.a.createElement(Ke,{education:t.education||[]}),i.a.createElement(Ne,null)),i.a.createElement(st,{footerData:t.Bio||{},links:["About","Skills","Experience","Projects","Education"]}),a.state&&i.a.createElement(vt,{projectsData:t.projects||[],openModal:a,setOpenModal:r}))},Dt=a(103);const Ot=d.b.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${e=>{let{theme:t}=e;return t.card_light}};
  position: fixed;
  top: 0;
  z-index: 10;
  padding: 0 20px;
`,zt=d.b.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${e=>{let{theme:t}=e;return t.white}};
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.3s ease;
  border-radius: 30px; 
  padding: 5px 10px 5px 5px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.white}}; 
  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.card}};
  }
  @media (max-width: 768px) {
    border: none; 
  }
`,Mt=Object(d.b)(Dt.a)`
  color: ${e=>{let{theme:t}=e;return t.white}};
  font-size: 24px;
`,Ct=d.b.span`
  @media (max-width: 768px) {
    display: none; 
  }
`,St=d.b.h1`
  color: ${e=>{let{theme:t}=e;return t.white}};
  font-size: large;
  font-weight: 600;
  position: absolute;
  left: 50%;
  transform: translateX(-43%);
  white-space: nowrap;
`;var Lt=function(e){let{Title:t}=e;const a=Object(s.p)();return i.a.createElement(Ot,null,i.a.createElement(zt,{onClick:()=>{a("/")}},i.a.createElement(Mt,null),i.a.createElement(Ct,null,"Back")),i.a.createElement(St,null,t||""))};const It=Object(n.lazy)(()=>a.e(0).then(a.bind(null,205))),Gt=d.b.div`
  padding-top: 80px;
  background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 60.83%);
  min-height: 100vh;
`;var Rt=function(e){let{firebaseData:t,openModal:a,setOpenModal:r}=e;return Object(n.useEffect)(()=>{window.scrollTo(0,0)},[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(Et.a,null,i.a.createElement("title",null,"Projects | Thejaswi Gadhiraj Portfolio"),i.a.createElement("meta",{name:"description",content:"MyMind - the portfolio of Thejaswi Gadhiraj, showcasing Web, Machine Learning, Deep Learning, and Python projects."}),i.a.createElement("meta",{name:"keywords",content:"MyMind, Thejaswi Gadhiraj, AI/ML, Web Development, Portfolio, Projects, sibi, siddharth"}),i.a.createElement("meta",{name:"author",content:"Thejaswi Gadhiraj"}),i.a.createElement("link",{rel:"canonical",href:"https://sibisiddharth8.github.io/portfolio-react/#/AllProjects"}),i.a.createElement("meta",{property:"og:title",content:"MyMind - Thejaswi Gadhiraj Portfolio | Projects"}),i.a.createElement("meta",{property:"og:type",content:"website"}),i.a.createElement("meta",{property:"og:url",content:"https://sibisiddharth8.github.io/portfolio-react/#/AllProjects"}),i.a.createElement("meta",{property:"og:image",content:"https://sibisiddharth8.github.io/portfolio-react/Og-card-banner-SibiSiddharthS.png"}),i.a.createElement("meta",{property:"og:description",content:"Explore projects developed by Thejaswi Gadhiraj, showcasing skills in AI/ML and Web Development."}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:title",content:"MyMind - Projects"}),i.a.createElement("meta",{name:"twitter:description",content:"Explore projects developed by Thejaswi Gadhiraj."}),i.a.createElement("meta",{name:"twitter:image",content:"https://sibisiddharth8.github.io/portfolio-react/Og-card-banner-SibiSiddharthS.png"})),i.a.createElement(Lt,{Title:"Projects Page"}),i.a.createElement(Gt,null,i.a.createElement(n.Suspense,null,i.a.createElement(It,{projectsData:t.projects||[],openModal:a,setOpenModal:r,defaultfilter:"all",projectFilters:["all","Web","Deep Learning","Machine Learning"],ViewAllCard:0,ShowTitle:null,IntroText:1})),a.state&&i.a.createElement(vt,{projectsData:t.projects||[],openModal:a,setOpenModal:r}),i.a.createElement(st,{footerData:t.Bio||{}})))};const Jt=d.b.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  background-color: ${e=>{let{theme:t}=e;return t.BgLight}};
`,Wt=d.b.div`
  background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 60.83%);
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,Tt=d.b.div`
  max-width: 992px;
  color: ${e=>{let{theme:t}=e;return t.white}};
  padding: 50px 30px;

  @media (max-width: 768px) {
    width: 95%;
    padding: 30px;
  }
  @media (max-width: 575px) {
    padding: 10px;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    padding: 0.5rem 0;
    color: ${e=>{let{theme:t}=e;return t.primary}};

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  p, li {
    line-height: 1.8;
    font-size: 1rem;
    padding-bottom: 10px;
    font-weight: 350;
    color: ${e=>{let{theme:t}=e;return t.text_secondary}};

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }

  ul {
    list-style: inside;
    padding-left: 10px;

    @media (max-width: 768px) {
      padding-left: 5px;
    }
  }
`,Pt=d.b.span`
  font-weight: 600;
`;var Ut=e=>{let{firebaseData:t}=e;return Object(n.useEffect)(()=>{window.scrollTo(0,0)}),n.React.createElement(n.React.Fragment,null,n.React.createElement(Et.a,null,n.React.createElement("title",null,"Terms & Conditions | Thejaswi Gadhiraj Portfolio"),n.React.createElement("meta",{charset:"utf-8"}),n.React.createElement("meta",{name:"author",content:"Thejaswi Gadhiraj"}),n.React.createElement("meta",{name:"description",content:"Read the Terms & Conditions for using Thejaswi Gadhiraj's portfolio website and understand the guidelines around intellectual property, website use, and content ownership."}),n.React.createElement("meta",{name:"keywords",content:"Terms & Conditions, Thejaswi Gadhiraj, Portfolio, Website Policy, Intellectual Property, Use of Website, MyMind"}),n.React.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),n.React.createElement("meta",{name:"theme-color",content:"#000000"}),n.React.createElement("link",{rel:"canonical",href:"https://sibisiddharth8.github.io/portfolio-react/#/terms-and-conditions"}),n.React.createElement("meta",{property:"og:title",content:"Terms & Conditions | Thejaswi Gadhiraj Portfolio"}),n.React.createElement("meta",{property:"og:type",content:"website"}),n.React.createElement("meta",{property:"og:url",content:"https://sibisiddharth8.github.io/portfolio-react/#/terms-and-conditions"}),n.React.createElement("meta",{property:"og:image",content:"https://sibisiddharth8.github.io/portfolio-react/Og-card-banner-SibiSiddharthS.png"}),n.React.createElement("meta",{property:"og:description",content:"Read the Terms & Conditions for using Thejaswi Gadhiraj's portfolio website."}),n.React.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.React.createElement("meta",{name:"twitter:title",content:"Terms & Conditions | Thejaswi Gadhiraj Portfolio"}),n.React.createElement("meta",{name:"twitter:description",content:"Read the Terms & Conditions for using Thejaswi Gadhiraj's portfolio website."}),n.React.createElement("meta",{name:"twitter:image",content:"https://sibisiddharth8.github.io/portfolio-react/Og-card-banner-SibiSiddharthS.png"})),n.React.createElement(d.a,{theme:c},n.React.createElement(Wt,null,n.React.createElement(Lt,{Title:"Terms & Conditions"}),n.React.createElement(Tt,null,n.React.createElement("h2",null,"1. Acceptance of Terms"),n.React.createElement("p",null,"By accessing and using this website, you agree to comply with the following terms and conditions. If you do not agree with any part of these terms, please do not use this website."),n.React.createElement("h2",null,"2. Intellectual Property"),n.React.createElement("p",null,"All content on this website, including text, images, graphics, and code, is the intellectual property of ",n.React.createElement(Pt,null,"Thejaswi Gadhiraj")," unless otherwise stated. Unauthorized use, reproduction, or distribution of this material is prohibited without explicit permission."),n.React.createElement("h2",null,"3. Use of Website"),n.React.createElement("p",null,"By using this website, you agree not to:"),n.React.createElement("ul",null,n.React.createElement("li",null,"Copy, modify, or distribute any content without prior written consent."),n.React.createElement("li",null,"Misuse contact information for spam or unsolicited communication."),n.React.createElement("li",null,"Engage in any unlawful or harmful activity that affects the performance, security, or integrity of the website."),n.React.createElement("li",null,"Attempt to bypass any security features of the website.")),n.React.createElement("h2",null,"4. User-Generated Content"),n.React.createElement("p",null,"If this website allows for user submissions or comments, users are responsible for the content they post. Inappropriate or harmful content may be removed without prior notice."),n.React.createElement("h2",null,"5. Limitation of Liability"),n.React.createElement("p",null,"The content provided on this website is for informational purposes only. While every effort is made to ensure accuracy, ",n.React.createElement(Pt,null,"Thejaswi Gadhiraj")," makes no guarantees or warranties of any kind regarding the completeness, reliability, or suitability of the information on the site."),n.React.createElement("h2",null,"6. External Links"),n.React.createElement("p",null,"This website may contain links to external websites. ",n.React.createElement(Pt,null,"Thejaswi Gadhiraj")," is not responsible for the content or practices of any linked websites and does not endorse the content of these external sites."),n.React.createElement("h2",null,"7. Privacy Policy"),n.React.createElement("p",null,"We value your privacy. Any personal information collected through the website will be used in accordance with our Privacy Policy, which details how we collect, store, and use your data."),n.React.createElement("h2",null,"8. Changes to Terms"),n.React.createElement("p",null,"These terms and conditions are subject to change at any time. It is your responsibility to review the terms periodically for any updates."),n.React.createElement("h2",null,"9. Governing Law"),n.React.createElement("p",null,"These terms and conditions are governed by the laws of India, and any disputes arising will be subject to the jurisdiction of Indian courts."),n.React.createElement("h2",null,"10. Contact Information"),n.React.createElement("p",null,"For any inquiries, collaborations, or issues regarding the terms, please feel free to reach out through the contact information provided on the website."))),n.React.createElement(Jt,null,n.React.createElement(st,{footerData:t.Bio||{},links:[]}))))};a(143);const qt=d.b.div`
  background-color: ${e=>{let{theme:t}=e;return t.bg}};
`;var Vt=()=>{const[e,t]=Object(n.useState)(!0),[a,r]=Object(n.useState)({state:!1,project:null}),[o,p]=Object(n.useState)({Bio:null,skills:null,projects:null,education:null});return i.a.createElement(d.a,{theme:c},i.a.createElement(l.a,null,i.a.createElement(n.Suspense,null,i.a.createElement(qt,null,i.a.createElement(s.c,null,i.a.createElement(s.a,{path:"/",element:i.a.createElement(kt,{firebaseData:o,openModal:a,setOpenModal:r})}),i.a.createElement(s.a,{path:"/AllProjects",element:i.a.createElement(Rt,{firebaseData:o,openModal:a,setOpenModal:r})}),i.a.createElement(s.a,{path:"/TermsandConditions",element:i.a.createElement(Ut,{firebaseData:o})}),i.a.createElement(s.a,{path:"*",element:i.a.createElement(kt,{firebaseData:o,openModal:a,setOpenModal:r})}))))))};o.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Vt,null)))},75:function(e,t,a){"use strict"},93:function(e,t,a){e.exports=a.p+"static/media/profile_pic-1.8e36b51d.jpg"}},[[121,2,3]]]);
//# sourceMappingURL=main.7fce712a.chunk.js.map