import{g as d}from"./index-CpdIYu2n.js";import{r as u}from"./haskell-Ds42Eazu.js";function p(t,r){for(var e=0;e<r.length;e++){const i=r[e];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in t)){const o=Object.getOwnPropertyDescriptor(i,a);o&&Object.defineProperty(t,a,o.get?o:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var n,s;function c(){if(s)return n;s=1;var t=u();n=r,r.displayName="idris",r.aliases=["idr"];function r(e){e.register(t),e.languages.idris=e.languages.extend("haskell",{comment:{pattern:/(?:(?:--|\|\|\|).*$|\{-[\s\S]*?-\})/m},keyword:/\b(?:Type|case|class|codata|constructor|corecord|data|do|dsl|else|export|if|implementation|implicit|import|impossible|in|infix|infixl|infixr|instance|interface|let|module|mutual|namespace|of|parameters|partial|postulate|private|proof|public|quoteGoal|record|rewrite|syntax|then|total|using|where|with)\b/,builtin:void 0}),e.languages.insertBefore("idris","keyword",{"import-statement":{pattern:/(^\s*import\s+)(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*/m,lookbehind:!0,inside:{punctuation:/\./}}}),e.languages.idr=e.languages.idris}return n}var l=c();const f=d(l),b=p({__proto__:null,default:f},[l]);export{b as i};
//# sourceMappingURL=idris-DnaJh9Nz.js.map
