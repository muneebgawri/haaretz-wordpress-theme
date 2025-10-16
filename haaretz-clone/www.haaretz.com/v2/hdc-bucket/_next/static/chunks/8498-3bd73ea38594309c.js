(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8498],{387:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return a},getMatchMediaString:function(){return i}});let n=r(17600),o=function(e){return e&&e.__esModule?e:{default:e}}(r(10965));function i(e){let t,r,i,{from:a,until:s,misc:u,type:l=n.DEFAULT_MEDIA_TYPE}=e;if(null!=u&&(t=o.default.misc[u]),null!=a){let e=o.default.widthsInEm[a];r=`(min-width:${e}em)`}if(null!=s){let e=o.default.untilWidthsInEm[s];i=`(max-width:${e}em)`}return`${l}${null==t?"":` and ${t}`}${null==r?"":` and ${r}`}${null==i?"":` and ${i}`}`}function a(e){return`@media ${i(e)}`}},1222:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>n});let n=r(6662).default},3266:(e,t,r)=>{"use strict";r.r(t),r.d(t,{PlatformProvider:()=>s,default:()=>u});var n=r(2619),o=r(387),i=r(82155);let a=i.createContext(void 0);function s(e){let{children:t,value:r}=e,[s,u]=i.useState(r);return i.useEffect(()=>{let e;function t(e){e?u("mobile"):u("desktop")}if("app"===s)return()=>void 0;if("app"!==s){let r=window.matchMedia((0,o.getMatchMediaString)({until:"s"}));t(r.matches),e=e=>{t(e.matches)},r.addEventListener("change",e)}return()=>{e&&window.matchMedia((0,o.getMatchMediaString)({until:"s"})).removeEventListener("change",e)}},[s]),(0,n.jsx)(a,{value:s,children:t})}function u(){let e=i.use(a);if(void 0===e)throw Error("usePlatform must be used within a PlatformProvider");return e}},6662:(e,t,r)=>{"use strict";r.r(t),r.d(t,{PreviewIdProvider:()=>u,default:()=>l,usePreviewIdAtom:()=>d,useSetPreviewId:()=>c});var n=r(32285),o=r(2619),i=r(82155);let a=i.createContext(void 0),s=i.createContext(void 0);function u(e){let t,r,u=(0,n.c)(4),{children:l,value:c}=e,[d,f]=i.useState(c);u[0]===Symbol.for("react.memo_cache_sentinel")?(t=e=>{f("string"==typeof e?e:null)},u[0]=t):t=u[0];let m=t;return u[1]!==l||u[2]!==d?(r=(0,o.jsx)(a,{value:d,children:(0,o.jsx)(s,{value:m,children:l})}),u[1]=l,u[2]=d,u[3]=r):r=u[3],r}function l(){let e=i.use(a);if(void 0===e)throw Error("usePreviewId must be used within a PreviewIdProvider");return e}function c(){let e=i.use(s);if(void 0===e)throw Error("useSetPreviewId must be used within a PreviewIdProvider");return e}function d(){let e,t=(0,n.c)(3),r=l(),o=c();return t[0]!==r||t[1]!==o?(e=[r,o],t[0]=r,t[1]=o,t[2]=e):e=t[2],e}},7532:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>n});let n=r(41437).default},8418:(e,t,r)=>{"use strict";r.r(t),r.d(t,{PageTypeProvider:()=>l,default:()=>c,usePageTypeAtom:()=>f,useSetPageType:()=>d});var n=r(32285),o=r(2619),i=r(58714),a=r(82155);let s=a.createContext(void 0),u=a.createContext(void 0);function l(e){let t,r,l=(0,n.c)(4),{children:c,value:d}=e,[f,m]=a.useState(d);l[0]===Symbol.for("react.memo_cache_sentinel")?(t=e=>{m(i.HY.includes(e)?e:"Homepage")},l[0]=t):t=l[0];let g=t;return l[1]!==c||l[2]!==f?(r=(0,o.jsx)(s,{value:f,children:(0,o.jsx)(u,{value:g,children:c})}),l[1]=c,l[2]=f,l[3]=r):r=l[3],r}function c(){let e=a.use(s);if(void 0===e)throw Error("usePageType must be used within a PageTypeProvider");return e}function d(){let e=a.use(u);if(void 0===e)throw Error("useSetPageType must be used within a PageTypeProvider");return e}function f(){let e,t=(0,n.c)(3),r=c(),o=d();return t[0]!==r||t[1]!==o?(e=[r,o],t[0]=r,t[1]=o,t[2]=e):e=t[2],e}},10965:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}});let r={widths:{s:600,m:768,l:1024,xl:1280,xxl:1632},widthsInEm:{s:37.5,m:48,l:64,xl:80,xxl:102},untilWidthsInEm:{s:37.4375,m:47.9375,l:63.9375,xl:79.9375,xxl:101.9375},misc:{landscape:"(orientation:landscape)",portrait:"(orientation:portrait)",reducedMotion:"(prefers-reduced-motion)"}}},12108:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>n});let n=r(19682).default},16706:(e,t,r)=>{"use strict";r.r(t),r.d(t,{PaywallTypeProvider:()=>l,default:()=>c,usePaywallTypeAtom:()=>f,useSetPaywallType:()=>d});var n=r(32285),o=r(2619),i=r(58714),a=r(82155);let s=a.createContext(void 0),u=a.createContext(void 0);function l(e){let t,r,l=(0,n.c)(4),{children:c,value:d}=e,[f,m]=a.useState(d);l[0]===Symbol.for("react.memo_cache_sentinel")?(t=e=>{m(i.go.includes(e)?e:"premium")},l[0]=t):t=l[0];let g=t;return l[1]!==c||l[2]!==f?(r=(0,o.jsx)(s,{value:f,children:(0,o.jsx)(u,{value:g,children:c})}),l[1]=c,l[2]=f,l[3]=r):r=l[3],r}function c(){let e=a.use(s);if(void 0===e)throw Error("usePaywallType must be used within a PaywallTypeProvider");return e}function d(){let e=a.use(u);if(void 0===e)throw Error("useSetPaywallType must be used within a PaywallTypeProvider");return e}function f(){let e,t=(0,n.c)(3),r=c(),o=d();return t[0]!==r||t[1]!==o?(e=[r,o],t[0]=r,t[1]=o,t[2]=e):e=t[2],e}},17600:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{COLOR_PROP_PREFIX:function(){return i},DEFAULT_BROWSER_FONT_SIZE:function(){return o},DEFAULT_CUSTOM_PROP_SELECTOR:function(){return u},DEFAULT_MEDIA_TYPE:function(){return l},FONT_SIZE_PROP_PREFIX:function(){return a},LINE_HEIGHT_PROP_PREFIX:function(){return s},THEME_CSS_FILENAME:function(){return c},baseTypeScaleOpts:function(){return p},borderSides:function(){return A},borderStyles:function(){return b},defaultTypeConfig:function(){return h},hdcTypeConfig:function(){return v},htzTypeConfig:function(){return y},miscBps:function(){return g},tmTypeConfig:function(){return _},untilWidthBpsInEm:function(){return m},widthBps:function(){return d},widthBpsInEm:function(){return f}});let n=function(e){return e&&e.__esModule?e:{default:e}}(r(10965)),o=16,i="--c-",a="--fz-",s="--lh-",u="root",l="all",c="theme.css",d=n.default.widths,f=n.default.widthsInEm,m=n.default.untilWidthsInEm,g=n.default.misc,p={base:16,minPadding:4,ratio:2,rhythmUnit:4,steps:5},h={[u]:p,xl:{...p,base:18},xxl:{...p,base:21}},y=h,v=h,_=h,A=["all","inline","block","top","bottom","left","right","inline-start","inline-end"],b=["none","hidden","dotted","dashed","solid","double","groove","ridge","inset","outset"]},19682:(e,t,r)=>{"use strict";r.r(t),r.d(t,{UserProvider:()=>p,default:()=>y,useSetUser:()=>v,useUserAtom:()=>_,userDispenserFactory:()=>h});var n=r(32285),o=r(2619),i=r(58714),a=r(27434),s=r(81501);let u=function(e){let t=e&&void 0!==e&&"object"==typeof e&&("string"==typeof e.userMail||!0===e.university),r=t&&"string"==typeof e.userMail&&/\S+@\S+\.\S+/.test(e.userMail),n=!r&&t&&!0===e.university;return!!(r||n)},l=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=(0,s.A)(e,t),n=r?.userDetails,o=r.anonymousId,a=i.ff;return n&&"object"==typeof n&&u(n)&&(a={...a,...n}),"string"==typeof o&&(a={...a,anonymousId:o}),Array.isArray(a.products)||(a={...a,products:[]}),a.isLoggedIn=!!a.userMail||!!a.university,a};var c=r(52557),d=r(82155);let f={...i.ff},m=d.createContext(void 0),g=d.createContext(void 0);function p(e){let t,r,i,a=(0,n.c)(8),{children:s,value:u,sbOverrideValue:p}=e;a[0]!==p||a[1]!==u?(t=p||l(document.cookie,!0),a[0]=p,a[1]=u,a[2]=t):t=a[2];let[h,y]=d.useState(t);a[3]===Symbol.for("react.memo_cache_sentinel")?(r=(e,t)=>{if("logout"===e)y(f);else{if("login"!==e)return void console.error(`Invalid user action: ${e}`);let t=l(document.cookie,!0),r=!!t.userMail||!!t.university;y({...t,isLoggedIn:r})}t?.()},a[3]=r):r=a[3];let v=r,_=`
          window.__HTZ = window.__HTZ || {};

          window.__HTZ.userType = "${h.userType}";
    `;return a[4]!==s||a[5]!==_||a[6]!==h?(i=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.default,{id:"htz-user",children:_}),(0,o.jsx)(m,{value:h,children:(0,o.jsx)(g,{value:v,children:s})})]}),a[4]=s,a[5]=_,a[6]=h,a[7]=i):i=a[7],i}function h(e){let t=l(e,!0);return{...t,isLoggedIn:!!t.userMail||!!t.university}}function y(e){let t,r=(0,n.c)(1),o=d.use(m),[s,u]=d.useState(e);if(r[0]===Symbol.for("react.memo_cache_sentinel")?(t=()=>{u("cookieValue")},r[0]=t):t=r[0],(0,a.A)(t,"serverValue"===e),void 0===o)throw Error("useUser must be used within a UserProvider");return"serverValue"===s?i.ff:o}function v(){let e=d.use(g);if(void 0===e)throw Error("useSetUser must be used within a UserProvider");return e}function _(e){let t,r=(0,n.c)(3),o=y(e),i=v();return r[0]!==o||r[1]!==i?(t=[o,i],r[0]=o,r[1]=i,r[2]=t):t=r[2],t}},25290:(e,t,r)=>{"use strict";r.r(t),r.d(t,{CountryCodeProvider:()=>a,default:()=>s});var n=r(2619),o=r(82155);let i=o.createContext(void 0);function a(e){let{children:t,value:r}=e;return(0,n.jsx)(i,{value:r,children:t})}function s(){let e=o.use(i);if(void 0===e)throw Error("useCountryCode must be used within a CountryCodeProvider");return e}},27434:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=r(37272).default},28597:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let n=function(e){return e&&e.__esModule?e:{default:e}}(r(44729));function o(e){let{key:t,storage:r,value:o,errorMessage:i}=e;try{(0,n.default)(r).setItem(t,"string"==typeof o?o:JSON.stringify(o))}catch(e){console.error(`${i?`${i}: `:""}${e.message}`)}}},32590:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(e,t)=>{let r={};for(let n in e)t.includes(n)||(r[n]=e[n]);return r}},32626:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var n=r(32285),o=r(59992),i=r(58714),a=r(27434),s=r(82155),u=r(71900);function l(e){let t,r,l,c,d=(0,n.c)(8),f=(0,o.A)(),[m,g]=s.useState("app"!==f);d[0]!==m?(t=()=>{m||g(!0)},d[0]=m,d[1]=t):t=d[1];let p=t,h=window[i.PK]?.Iphone.callHistory.loadElement??void 0;return d[2]!==m?(r=()=>{!m&&(h?.length||0)>0&&g(!0)},d[2]=m,d[3]=r):r=d[3],d[4]!==m?(l=[m,h?.length],d[4]=m,d[5]=l):l=d[5],s.useEffect(r,l),d[6]!==e?(c=()=>{e?.()},d[6]=e,d[7]=c):c=d[7],(0,a.A)(c,"app"===f&&m&&"function"==typeof e),(0,u.A)("loadElement",p,!1),m}},35097:(e,t,r)=>{"use strict";r.r(t),r.d(t,{BiDataContextProvider:()=>V,default:()=>X});var n=r(2619),o=r(86385),i=r(82155),a=r(7532),s=r(71111),u=r(46496),l=r(52489),c=r(59992),d=r(68325),f=r(12108),m=r(88425),g=r(53288),p=r(58714),h=r(38656),y=r(31056),v=r(37259);let _=h.A.get("appType"),A=function(){let e=(0,u.Ay)(),t=("promotions-page"===_?function(){return(0,v.useRouter)().pathname}:y.usePathname)();return"promotions-page"===_?"Promotions":t?.includes("ty-search")?"Search":t?.startsWith("/chatbot/")?"Chatbot":"login"===_?"Login":e.endsWith("Article")?"Article":"Homepage"===e?e:"Section"};var b=r(32285);let P=`
    fragment PageDataFragment on PageData {
  allSteps {
    ...StepDataFragment
  }
  contentId
  couponId
  couponErrorMessage
  toggleKicker {
    ...PurchaseToggleKickerFragment
  }
  annual {
    ...PurchaseOfferFragment
  }
  marketingBullets {
    ...MarketingBulletFragment
  }
  monthly {
    ...PurchaseOfferFragment
  }
  personalCouponId
  steps {
    ...StepDataFragment
  }
  specialSaleData {
    ...SpecialSaleDataFragment
  }
  thankYouPageText
  cartData {
    ...CartDataFragment
  }
  image {
    ...ImageFragment
  }
  selectedOffer {
    ...SelectedOfferFragment
  }
  abTest {
    ...AbTestDataFragment
  }
  log
  userProducts
  userType
  designVersion
  counter {
    ...CounterFragment
  }
}
    `,S=`
    fragment StepDataFragment on StepData {
  __typename
  content {
    ...HtmlNodeFragment
  }
  instructions
  messageIds
  messages
  name
  title
  mobileInstructions
  mobileTitle
}
    `;var w=r(93448);let I=`
    fragment PurchaseToggleKickerFragment on PurchaseToggleKicker {
  __typename
  billing
  text
}
    `,x=`
    fragment PurchaseOfferFragment on PurchaseOffer {
  __typename
  benefits {
    ...HtmlNodeFragment
  }
  benefitsHeading
  contentId
  description
  exclusive
  exclusiveStrip
  legalText {
    ...HtmlNodeFragment
  }
  line1Text {
    ...HtmlNodeFragment
  }
  line2Text {
    ...HtmlNodeFragment
  }
  note
  offerHighlight
  offerType
  paymentType
  periodCalc
  prices
  product
  productName
  productNumber
  promotionNumber
  saleCode
  thankYouMailTemplate
  currency
}
    `,C=`
    fragment MarketingBulletFragment on MarketingBullet {
  __typename
  text
  title
}
    `,T=`
    fragment SpecialSaleDataFragment on SpecialSaleData {
  __typename
  exclusive
  image {
    ...ImageFragment
  }
  title
}
    `;var E=r(46965),O=r(99516);let $=`
    fragment CartDataFragment on CartData {
  approveDebtClaim
  contentId
  currency
  periodCalc
  prices
  productNumber
  promotionNumber
  saleCode
  thankYouMailTemplate
  paymentType
  __typename
}
    `,F=`
    fragment SelectedOfferFragment on PurchaseOffer {
  __typename
  contentId
  periodCalc
  prices
  productNumber
  paymentType
  promotionNumber
  saleCode
  thankYouMailTemplate
  offerType
  currency
}
    `,k=`
    fragment AbTestDataFragment on AbTestData {
  testGroup
  testGroupLabel
  testName
  __typename
}
    `,M=`
    fragment CounterFragment on PurchaseCounter {
  endDate
  message {
    ...HtmlNodeFragment
  }
  buttonText
  buttonLink
  messageHeadline
}
    `;var N=r(48090),j=(r(84200),r(69173));let D=`
    query PurchasePagePersonalQuery($couponId: String, $pathSegment: String, $selectedOfferId: String, $ticketId: String, $userId: String, $cartData: Boolean, $previousSteps: String, $flow: String, $countryCode: String, $currency: String) {
  PurchasePage(
    couponId: $couponId
    pathSegment: $pathSegment
    selectedOfferId: $selectedOfferId
    ticketId: $ticketId
    userId: $userId
    cartData: $cartData
    previousSteps: $previousSteps
    flow: $flow
    countryCode: $countryCode
    currency: $currency
  ) {
    pageData {
      ...PageDataFragment
    }
  }
}
    ${P}
${S}
${w.q}
${I}
${x}
${C}
${T}
${E.a}
${O.G}
${$}
${F}
${k}
${M}`,L=(e,t)=>{let r,n,o=(0,b.c)(3);return o[0]!==e?(r=void 0===e?["PurchasePagePersonalQuery"]:["PurchasePagePersonalQuery",e],n=(0,j.A)(D,e),o[0]=e,o[1]=r,o[2]=n):(r=o[1],n=o[2]),(0,N.I)(r,n,t)};L.document=D,L.getKey=e=>void 0===e?["PurchasePagePersonalQuery"]:["PurchasePagePersonalQuery",e],L.fetcher=(e,t)=>(0,j.A)(D,e,t);let R=r(25290).default;var H=r(32590);let U=function(){let e=i.createContext(void 0);return function(){return e}}(),G=i.createContext(void 0);function Q(){let e=i.use(U());if(!e)throw Error("usePPDataStore must be used within a PPDataStoreContextProvider");return e}let B=i.createContext(void 0),z=function(e){let t=(0,v.useRouter)(),{contentId:r}=Q(),n=function(){let e=i.use(G);if(void 0===e)throw Error("usePPCouponStore must be used within a PPCouponStoreContext");return e}(),o=function(){let e=i.use(B);if(!e)throw Error("usePPOffsetStepsStore must be used within a PPOffsetStepsStoreContextProvider");return e}(),a=(0,f.Ay)("cookieValue"),s=R(),u=o.join(","),l=i.useMemo(()=>(function(e,t){let r=e.pathSegment,n=t&&"preference"in e,o=e.selectedOfferId,i=e.flow;return{pathSegment:r,cartData:n,previousSteps:"",flow:i,currency:e.currency,countryCode:e.countryCode,...o?{selectedOfferId:o}:{}}})(t.query,a.isLoggedIn||!1),[t.query,a?.isLoggedIn]);return i.useMemo(()=>(0,g.A)((0,H.A)({selectedOfferId:a?.isLoggedIn?r:void 0,...l,couponId:n,previousSteps:l.previousSteps||u,countryCode:s},e||[])),[r,s,n,e,u,a?.isLoggedIn,l])},q=function(){let e,t,r=(0,b.c)(2),n=(0,v.useRouter)().query.forceAbTest;r[0]===Symbol.for("react.memo_cache_sentinel")?(e=["selectedOfferId"],r[0]=e):e=r[0];let o=z(e);r[1]===Symbol.for("react.memo_cache_sentinel")?(t={enabled:!1},r[1]=t):t=r[1];let{data:i}=L(o,t);if(n&&"string"==typeof n)try{let e=atob(n);return JSON.parse(e)}catch(e){console.error(e)}return i?.PurchasePage?.pageData?.abTest},K=function(){let e,t,r,n,o,i=(0,b.c)(18),a=z(),s=Q();i[0]!==s.contentId?(t=s.contentId?{selectedOfferId:s.contentId}:{},i[0]=s.contentId,i[1]=t):t=i[1],i[2]!==a||i[3]!==t?(r={...t,...a},i[2]=a,i[3]=t,i[4]=r):r=i[4],e=r;let u=!a.selectedOfferId&&!!e.selectedOfferId;i[5]!==u?(n={enabled:u},i[5]=u,i[6]=n):n=i[6];let{data:l}=L(e,n),c=l?.PurchasePage?.pageData?.selectedOffer;if(!c)return null;let d=c?.contentId,f=c?.periodCalc,m=c?.prices,g=c?.productNumber,p=c?.paymentType,h=c?.promotionNumber,y=c?.saleCode,v=c?.thankYouMailTemplate,_=c?.offerType,A=c?.currency;return i[7]!==h||i[8]!==y||i[9]!==v||i[10]!==_||i[11]!==A||i[12]!==d||i[13]!==f||i[14]!==m||i[15]!==g||i[16]!==p?(o={contentId:d,periodCalc:f,prices:m,productNumber:g,paymentType:p,promotionNumber:h,saleCode:y,thankYouMailTemplate:v,offerType:_,currency:A},i[7]=h,i[8]=y,i[9]=v,i[10]=_,i[11]=A,i[12]=d,i[13]=f,i[14]=m,i[15]=g,i[16]=p,i[17]=o):o=i[17],o},J=()=>void 0,W=i.createContext(void 0),Y=()=>({}),Z=function(){let e=window,t=A(),r="Promotions"===t?K:J,n="Promotions"===t?q:J,o="Login"===t,h=(0,f.Ay)("cookieValue"),y=r(),v=(0,c.A)(),_=(0,a.Ay)(),b=(0,d.Ay)(),P=(0,l.Ay)(),S=(0,s.Ay)(),w=(0,u.Ay)(),I=n(),x=e?new URL(e.document.URL):void 0,C=new URLSearchParams(e?.location.search),{anonymousId:T,extendedUserType:E,userType:O}=h||{},{utm_medium:$,htm_medium:F,utm_content:k,htm_content:M,utm_source:N,htm_source:j,utm_campaign:D,htm_campaign:L,utm_segment:R,utm_type:H,htm_type:U}=Array.from(C.entries()).reduce((e,t)=>{let[r,n]=t;return{...e,[r]:n}},{});return i.useMemo(()=>(0,g.A)({ab_test_group_label:I?.testGroupLabel,ab_test_group:I?.testGroup,ab_test_name:I?.testName,action_id:J(),ad_block_state:J(),additional_info:J(),anonymous_id:T,article_id:_,article_type:w.endsWith("Article")?w:void 0,blocked:"blocked"===b,brand:p.CZ,campaign_details:J(),campaign_name:J(),darkmode:"undefined"!=typeof document?document.documentElement.classList.contains("darkMode"):void 0,feature_theme:J(),feature_type:o?"Marketing":J(),feature:J(),marketing_element:J(),newsletter_email:J(),newsletter_segment_id:J(),newsletter_segment_name:J(),next_article_id:J(),next_article_list_id:J(),next_article_list_name:J(),next_article_noinlist:J(),next_article_noinpage:J(),next_article_teaser_id:J(),next_article_viewname:J(),page_type:t,paywall_status:P,personal_feature:J(),platform:(0,m.A)(v),primary_section:J(),prod_no:y?.productNumber,promotions_no:y?.promotionNumber,recommendation_type:J(),refactor:!0,referrer_type:e?.document?.referrer,sale_code:y?.saleCode,scroll_height:J(),secondary_section:J(),site:x?.origin,stage:J(),url:x?.href,user_type:E||O,useragent:e?.navigator.userAgent,utm_campaign:D||L,utm_content:k||M,utm_medium:$||F,utm_segment:R,utm_source:N||j,utm_type:H||U,writer_name:S?.map(e=>e.name).toString()}),[I?.testGroupLabel,I?.testGroup,I?.testName,T,_,w,b,o,t,P,v,y?.productNumber,y?.promotionNumber,y?.saleCode,e?.document?.referrer,e?.navigator.userAgent,x?.origin,x?.href,E,O,D,L,k,M,$,F,R,N,j,H,U,S])};function V(e){let{children:t}=e;(0,o.A)()&&(Z=Y);let r=Z();return(0,n.jsx)(W,{value:r,children:t})}function X(){let e=i.use(W);if(void 0===e)throw Error("useBiDataContext must be used within a BiDataContext.");return e}},37272:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var n=r(32285),o=r(82155);function i(e,t){let r,i,a=(0,n.c)(4),s=(0,o.useRef)(!1);a[0]!==e||a[1]!==t?(r=()=>{let r;return!s.current&&t&&"function"==typeof e&&(s.current=!0,r=e()),r},i=[t,e],a[0]=e,a[1]=t,a[2]=r,a[3]=i):(r=a[2],i=a[3]),(0,o.useEffect)(r,i)}},38656:(e,t,r)=>{"use strict";Object.defineProperty(t,"A",{enumerable:!0,get:function(){return i}});let n=r(64033),o=r(40445),i=(0,n.shim)(o.getAppData)},40445:(e,t)=>{"use strict";function r(){let e=window.__HTZ_CONFIG__;if(!e)throw Error("No __HTZ_CONFIG__ detected.");return e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getAppData",{enumerable:!0,get:function(){return r}})},41437:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ArticleIdProvider:()=>u,default:()=>l,useArticleIdAtom:()=>d,useSetArticleId:()=>c});var n=r(32285),o=r(2619),i=r(82155);let a=i.createContext(void 0),s=i.createContext(void 0);function u(e){let t,r,u=(0,n.c)(4),{children:l,value:c}=e,[d,f]=i.useState(c);u[0]===Symbol.for("react.memo_cache_sentinel")?(t=e=>{f(e&&/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/.test(e)?e:null)},u[0]=t):t=u[0];let m=t;return u[1]!==d||u[2]!==l?(r=(0,o.jsx)(a,{value:d,children:(0,o.jsx)(s,{value:m,children:l})}),u[1]=d,u[2]=l,u[3]=r):r=u[3],r}function l(){let e=i.use(a);if(void 0===e)throw Error("useArticleId must be used within a ArticleIdProvider");return e}function c(){let e=i.use(s);if(void 0===e)throw Error("useSetArticleId must be used within a ArticleIdProviderMutator");return e}function d(){let e,t=(0,n.c)(3),r=l(),o=c();return t[0]!==r||t[1]!==o?(e=[r,o],t[0]=r,t[1]=o,t[2]=e):e=t[2],e}},43415:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});let n=/^((?:(ws|https?)(?::\/\/))?(?:(\w.*):(.+?)@)?(([^\s?#/]+?)\.([^\s?#/]+?))?(?::(\d{2,5}))?)?(\/[^\s?#]*?)?(?:\/?(\?[^\s#]+?))?(#.+)?$/;function o(e){let[t="",r="",o="",i="",a="",s="",,,u="",l="",c="",d=""]=n.exec(e)||[],f=s+u?`:${u}`:"",m=new URLSearchParams(c);return{href:t,origin:r,protocol:o,username:i,password:a,hostname:s,port:u,pathname:l,search:c,hash:d,host:f,searchParams:m,toString:e.toString}}let i=function(e){let t="string"==typeof e;if(!t||e.indexOf("://")>0||0===e.indexOf("//"))try{let{href:t,origin:r,protocol:n,username:o,password:i,hostname:a,port:s,pathname:u,search:l,hash:c,host:d,searchParams:f,toString:m}=new URL(e);return{href:t,origin:r,protocol:n,username:o,password:i,hostname:a,port:s,pathname:u,search:l,hash:c,host:d,searchParams:f,toString:m}}catch(r){return console.error(`Failed to parse URL: ${e}`),o(t?e:e.toString())}return o(e)}},44729:(e,t)=>{"use strict";function r(e){return window[`${e}Storage`]}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}})},46496:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>n});let n=r(8418).default},46965:(e,t,r)=>{"use strict";r.d(t,{a:()=>n});let n=`
    fragment ImageFragment on htz_image_Image {
  __typename
  alt
  caption
  contentId
  credit
  files {
    __typename
    crops {
      __typename
      headline {
        ...ImageCropFragment
      }
      landscape {
        ...ImageCropFragment
      }
      regular {
        ...ImageCropFragment
      }
      square {
        ...ImageCropFragment
      }
      vertical {
        ...ImageCropFragment
      }
      wide {
        ...ImageCropFragment
      }
    }
    height
    path
    width
  }
  link
  photographer
  type
}
    `},48382:(e,t,r)=>{"use strict";r.r(t),r.d(t,{RenderingKindProvider:()=>l,default:()=>c,useRenderingKindAtom:()=>f,useSetRenderingKind:()=>d});var n=r(32285),o=r(2619),i=r(58714),a=r(82155);let s=a.createContext(void 0),u=a.createContext(void 0);function l(e){let t,r,l=(0,n.c)(4),{children:c,value:d}=e,[f,m]=a.useState(d);l[0]===Symbol.for("react.memo_cache_sentinel")?(t=e=>{"string"==typeof e&&""!==e.trim()&&m(i.OJ.includes(e)?e:"blocked")},l[0]=t):t=l[0];let g=t;return l[1]!==c||l[2]!==f?(r=(0,o.jsx)(s,{value:f,children:(0,o.jsx)(u,{value:g,children:c})}),l[1]=c,l[2]=f,l[3]=r):r=l[3],r}function c(){let e=a.use(s);if(void 0===e)throw Error("useRenderingKind must be used within a RenderingKindProvider");return e}function d(){let e=a.use(u);if(void 0===e)throw Error("useSetRenderingKind must be used within a RenderingKindProvider");return e}function f(){let e,t=(0,n.c)(3),r=c(),o=d();return t[0]!==r||t[1]!==o?(e=[r,o],t[0]=r,t[1]=o,t[2]=e):e=t[2],e}},52489:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>n});let n=r(16706).default},53288:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=e=>{let t={};for(let r in e)null===e[r]||void 0===e[r]||Number.isNaN(e[r])||(t[r]=e[r]);return t}},58714:(e,t,r)=>{"use strict";r.d(t,{B7:()=>C,CZ:()=>m,FS:()=>x,Fd:()=>l,GX:()=>_,HY:()=>p,MI:()=>S,OI:()=>i,OJ:()=>y,PK:()=>b,Ps:()=>v,To:()=>I,Xz:()=>E,_P:()=>g,bu:()=>d,ff:()=>c,go:()=>h,lt:()=>w,oo:()=>u,pf:()=>$,qi:()=>f,sT:()=>T,sm:()=>A,u2:()=>F,v1:()=>P,vV:()=>O,xk:()=>a,ye:()=>k});var n=r(88425),o=r(30880);let i="haaretz.com",a=["haaretz.co.il","haaretz.com","themarker.com"],s={anonymous:"anonymous"},u={iphone:763,android:776},l={htz:[243,274],tm:[273,274],hdc:[239]},c={anonymousId:"",extendedUserType:(0,n.A)(s.anonymous),userType:s.anonymous,university:!1,isLoggedIn:!1},d=85,f={isTM:!1,isHDC:!0,isHTZ:!1},m="HDC",g="hdc",p=["Author","BlogSection","Homepage","Section","Tag"].concat(["StandardArticle","OpinionArticle","MagazineArticle","MidrugArticle","RecipeArticle","QuotesArticle","ReviewArticle","LiveBlogArticle","PodcastArticle","TimelineArticle","StoryArticle","GameArticle","TwentyQuestionsArticle","RiddleArticle","FaceArticle","ConferenceArticle","AdvertisementArticle","AdvertisementMagazineArticle","AdvertisementConferenceArticle","AdvertisementTimelineArticle"]),h=["free","highlight","open","premium"],y=["blocked","expanded","opened","proxy"],v={editors:"editors pick",similarArticle:"similar article",userHistory:"user history",TmBooster:"tm booster",colFiltering:"collaborative filtering",joni:"joni"},_="readingCountHistory",A="readingHistory",b="Haaretz",P="article-header";o.env.HAARETZ_SALT;let S="[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}",w="liveBlogItemId=(\\d+)#(\\d+)",I="https://finance.themarker.com",x={title:"HDC Error500"},C="teaser-kicker",T="teaser-title",E="live-blog-scroll-to-item-event",O="live-blog-load-all-items-event",$="live-blog-load-below-items-event",F="https://hdc.go.link/haaretz.com?adj_t=1i1gw0e4&adj_deep_link=Haaretz-English-Android%3A%2F%2Fhaaretz.com",k="htzColorMode"},59992:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=r(3266).default},61525:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=r(32626).default},64033:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"shim",{enumerable:!0,get:function(){return r}});let r=e=>({getSafe(t){let r,n=Array.isArray(t)?t:t.split("."),o=e();for(;n.length;){if(null===o||"object"!=typeof o){r=void 0;break}r=o[n.shift()]}return r},get(e){let t=Array.isArray(e)?e.join("."):e,r=this.getSafe(e);if(void 0===r)throw Error(`Configuration property "${t}" is not defined`);return r},has(e){return null!=e&&void 0!==this.getSafe(e)}})},68325:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>n});let n=r(48382).default},69173:(e,t,r)=>{"use strict";r.d(t,{A:()=>x});var n=r(38656),o=r(58714);let i=function(e){let t=e?.definitions?.filter(e=>"OperationDefinition"===e.kind&&e.name);return t?.map(e=>e?.name?.value)[0]||null},a=function(e){let t=e?.definitions?.find(e=>"OperationDefinition"===e.kind);return t?.operation||"query"};var s=r(56415);let u=function(e){try{return(0,s.qg)(e)}catch(e){return console.error(e.message),null}};var l=r(43415);let c=/(?:.+)?((?:\.)?(?:haaretz|themarker)(?:\.co\.il|\.com))/,d=function(e){let{hostname:t}=(0,l.A)(e),r=t.replaceAll("-","."),[,o]=c.exec(r)??[];if(!o){if(n.A.get("praedictaUri")?.includes(r))return"haaretz.co.il";throw Error(`Something went wrong, htz hostname of ${r} not found`)}return o},f=function(e,t){let r=d(t),n=d(e);if("string"==typeof e)return e.replace(n,r);let o=e.hostname.replace(n,r);return e.hostname=o,e};var m=r(84219),g=r.n(m),p=r(76998),h=r.n(p);let y=n.A.get("gqlServer");n.A.has("cmsGqlCluster")&&n.A.get("cmsGqlCluster"),n.A.has("praedictaUri")&&n.A.get("praedictaUri");let v=n.A.has("userInfo")?n.A.get("userInfo"):null,_=n.A.has("cmsGql")?n.A.get("cmsGql"):null,A=`fe.${o.OI}`,b=n.A.has("nodeEnv")?n.A.get("nodeEnv"):null,P=n.A.has("namespace")?n.A.get("namespace"):null;n.A.has("fetchTimeout")&&n.A.get("fetchTimeout");let S=["ArticleServerQuery","SectionServerQuery","AuthorServerQuery","TagServerQuery","ClusterServerQuery","LiveBlogItemsServerQuery","TenRecipesServerActionQuery","GetCommentsServerActionQuery","ImmutablePageDataServerQuery","ImmutablePageElementsServerQuery","SharedPageElementsServerQuery","PurchasePagePersonalQuery"],w=["GetPersonalAreaServerQuery","UserTypePersonalQuery","GetUserByMailPersonalQuery"];b?.startsWith("dev"),P?.startsWith("cu-");let I=new Map;function x(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return async function(s){try{if(n.next?.tags?.length)for(let e=0;e<n.next.tags.length;e++){let t=n.next.tags[e];t&&t.length>256&&(n.next.tags[e]=h()(t).toString(g()))}let[l,c,d]=I.get(e)||["",null,null];if(!l){let t=u(e);l=h()(e).toString(g()),t&&(c=i(t),d=a(t));let r=[l,c,d];I.set(e,r)}c=c||"unknown",d=d||"unknown";let m=y.startsWith("https://")?f(y,o.OI):y,p=c.endsWith("ListServerQuery"),{host:b,connection:P,...x}={...r||{},"content-type":"application/json",accept:"application/json",hostname:A};(S.includes(c)||p)&&_&&(delete x.hostname,delete x["content-type"],m=`${_}`);let C=w.includes(c)&&v;C&&(m=v);let{signal:T}=s||{},E={operationName:c,variables:JSON.stringify(t||{}),extensions:JSON.stringify({persistedQuery:{version:1,sha256Hash:l}})},O=new URLSearchParams(E),$=O.toString(),F=`${m}?${$}`,k=F.length<2e3,M=Array.from(O.values()).every(e=>e.length<=256);if("query"===d&&k&&M&&!C){let e=await fetch(F,{credentials:"include",method:"GET",headers:x,signal:T||void 0,...n});if(e.status<400){let t=await e.json();if(!t?.errors?.some(e=>"PersistedQueryNotFound"===e.message))return t.data}}let N=await fetch(`${m}?operation=${c}`,{method:"POST",credentials:"include",headers:x,body:JSON.stringify({query:e,variables:JSON.parse(O.get("variables")||""),operationName:c,extensions:JSON.parse(O.get("extensions")||"")}),signal:T,...n}),j=await N.json();if(j.errors){let{message:e}=j.errors[0]||{};throw Error(e||"Error…")}return j.data}catch(o){let r=u(e),n=r&&i(r)||"";throw console.error(`GraphQL fetcher error: ${o.message}, cause: ${o.cause}, name: ${o.name}, operationName: ${n}, variables: ${JSON.stringify(t)}`),o}}}},70418:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=function(e,t){return!(e?.length||t?.length)||!!e?.length&&!!t?.length&&e.every(e=>t.some(t=>t.contentId===e.contentId))}},71111:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>n});let n=r(84538).default},71900:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(82155);let o=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let[o,i,a]=t;n.useEffect(()=>(document.addEventListener(o,i,a),()=>{document.removeEventListener(o,i,a)}),[o,i,a])}},71922:()=>{},76873:(e,t,r)=>{"use strict";r.d(t,{A:()=>_});var n=r(32285),o=r(38656),i=r(59992),a=r(1222),s=r(32590),u=r(53288),l=r(95670),c=r(61525),d=r(27434),f=r(82155),m=r(58714);function g(e){var t;return(e&&!!(t=e)&&t in m.Ps&&m.Ps[e]||e)??void 0}var p=r(81722),h=r(35097);let y=o.A.get("appType"),v=o.A.get("bIServer"),_=function(e){let t,r,o,m=(0,n.c)(9),_=void 0===e?"action":e;m[0]===Symbol.for("react.memo_cache_sentinel")?(t=[],m[0]=t):t=m[0];let[A,b]=f.useState(t),P=(0,h.default)(),S=(0,c.A)(),w=(0,i.A)(),I=!!(0,a.Ay)(),x=f.useRef(null);m[1]!==_||m[2]!==P||m[3]!==S||m[4]!==I?(r=e=>{let t;if(I)return;let r=(0,l.A)(e)?function(e,t){let{campaign_name:r,contentId:n,index:o,kind:i,listStyle:a,teaser:s,testGroup:u,testGroupLabel:c,testName:d,title:f}=e;"action"===t&&(0,l.A)(e)&&e.teaser.origin&&((0,p.A)({key:"listOrigin",value:e.teaser.origin,storage:"session",errorMessage:"error writing recommendation type to session storage "}),(0,p.A)({key:"articleId",value:e.teaser.contentId,storage:"session",errorMessage:"error writing teaser article id to session storage "}),e.testGroup&&(0,p.A)({key:"ab_test_group",value:e.testGroup,storage:"session"}),e.testName&&(0,p.A)({key:"ab_test_name",value:e.testName,storage:"session"}),e.testGroupLabel&&(0,p.A)({key:"ab_test_group_label",value:e.testGroupLabel,storage:"session"}));let m={next_article_noinlist:o+1,action_id:109,next_article_viewname:a,next_article_list_name:f??"",next_article_list_id:n,next_article_teaser_id:s.teaserId||void 0,next_article_id:s.contentId};if("Scruffy"===a&&(r||console.error("campaign_name is required for Scruffy listStyle"),m={...m,action_id:109,feature:"Web Games List",feature_type:"Content",campaign_name:r}),"Schoonhoven"===a){let e=s.media;e&&e instanceof Object&&"PodcastEpisode"===e.__typename||console.error("media does not contain PodcastEpisode"),0===o&&(m={...m,feature:"Player in teaser",writer_name:e.channel?.channelName||void 0}),m={...m,writer_name:e.channel?.channelName||void 0}}return("personal"===i||"abTest"===i)&&(m={...m,recommendation_type:g(e.teaser.origin),personal_feature:!0}),"abTest"===i&&(m={...m,...u?{ab_test_group:u}:{},...d?{ab_test_name:d}:{},...c?{ab_test_group_label:c}:{}}),m}(e,_):function(e){let t={...e};if(t.recommendation_type){let r=g(e.recommendation_type);r&&(t.recommendation_type=r,t.additional_info||={},t.additional_info.origin=r)}return t}(e);if(!S){"pageview"!==_&&b(e=>[...e,r]);return}switch(_){case"impression":t=`${v}/impressionPlain`;break;case"pageview":if(x.current===P.url&&"login"!==y)return;x.current=P.url||null,t=`${v}/requestPlain`,P.article_id&&(t=`${t}?articleId=${P.article_id}`);break;default:t=`${v}/actionPlain`}let n=new URLSearchParams(document.location.search),o=JSON.stringify({...r?.additional_info??{},...n.has("gift")?{gift:n.get("gift")}:{}}),i={...P,...r,additional_info:o};"action"!==_&&i&&(i=(0,s.A)(i,["action_id"])),window.navigator?.sendBeacon(t,JSON.stringify((0,u.A)(i)))},m[1]=_,m[2]=P,m[3]=S,m[4]=I,m[5]=r):r=m[5];let C=r;return m[6]!==C||m[7]!==A?(o=()=>{A.forEach(e=>{C(e)})},m[6]=C,m[7]=A,m[8]=o):o=m[8],(0,d.A)(o,"app"===w&&S&&!I),C}},81501:(e,t,r)=>{"use strict";let n;r.d(t,{A:()=>a});var o=r(4072).hp;let i=[["user_details","userDetails",!0,!0],["promotions-response-message","ppResponseMessage",!1,!1]],a=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!n||t||"undefined"==typeof document)for(let t of(n=function(e){let{separator:t=/;\s*/,operator:r="="}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.create(null);if("string"!=typeof e)throw Error(`Parameter 'str' must be string, current value is ${e}`);if(!(t instanceof RegExp))throw Error(`Parameter 'Separator' must be instance of RegExp, current value is ${t}`);if("string"!=typeof r)throw Error(`Parameter 'operator' must be string, current value is ${r}`);return e.split(t).forEach(e=>{if("string"==typeof e){let t=e.indexOf(r),o=[e.substring(0,t),e.substring(t+1)];try{o[0]&&(n[o[0]]=decodeURIComponent(o[1]))}catch(e){console.error(e.message)}}}),n}(e,{separator:/;\s?/}),i)){let e=t[0],r=t[1],i=!!t[2],a=!!t[3],s=n[e];if("string"==typeof s)try{n[r]=JSON.parse(a?"undefined"==typeof document?o.from(s,"base64").toString("utf-8"):decodeURIComponent(Array.prototype.map.call(atob(s),function(e){return`%${`00${e.charCodeAt(0).toString(16)}`.slice(-2)}`}).join("")):s),i||delete n[e]}catch(e){console.error(e.message)}}return n}},81722:(e,t,r)=>{"use strict";Object.defineProperty(t,"A",{enumerable:!0,get:function(){return n}});let n=function(e){return e&&e.__esModule?e:{default:e}}(r(28597)).default},84538:(e,t,r)=>{"use strict";r.r(t),r.d(t,{AuthorsProvider:()=>l,default:()=>c,useAuthorsAtom:()=>f,useSetAuthors:()=>d});var n=r(32285),o=r(2619),i=r(70418),a=r(82155);let s=a.createContext(void 0),u=a.createContext(void 0);function l(e){let t,r,l=(0,n.c)(6),{children:c,value:d}=e,[f,m]=a.useState(d);l[0]!==f?(t=e=>{(Array.isArray(e)||null===e)&&!(0,i.A)(e,f)?m(e):e&&!Array.isArray(e)&&"object"==typeof e&&Object.keys(e).length&&!(0,i.A)([e],f)&&m([e])},l[0]=f,l[1]=t):t=l[1];let g=t;return l[2]!==f||l[3]!==g||l[4]!==c?(r=(0,o.jsx)(s,{value:f,children:(0,o.jsx)(u,{value:g,children:c})}),l[2]=f,l[3]=g,l[4]=c,l[5]=r):r=l[5],r}function c(){let e=a.use(s);if(void 0===e)throw Error("useAuthors must be used within a AuthorsProvider");return e}function d(){let e=a.use(u);if(void 0===e)throw Error("useSetAuthors must be used within a AuthorsProvider");return e}function f(){let e,t=(0,n.c)(3),r=c(),o=d();return t[0]!==r||t[1]!==o?(e=[r,o],t[0]=r,t[1]=o,t[2]=e):e=t[2],e}},86385:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=function(){return!!window?.__IS_STORYBOOK__}},88425:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=function(e){return e.replace(/\b[a-z]/gi,function(e){return e.toUpperCase()})}},93448:(e,t,r)=>{"use strict";r.d(t,{q:()=>n});let n=`
    fragment HtmlNodeFragment on HtmlNode {
  __typename
  as: tag
  content
}
    `},95670:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=function(e){return!!e&&"object"==typeof e&&void 0!==e.teaser}},99516:(e,t,r)=>{"use strict";r.d(t,{G:()=>n});let n=`
    fragment ImageCropFragment on ImageCrop {
  __typename
  height
  width
  x
  y
}
    `}}]);
//# sourceMappingURL=8498-3bd73ea38594309c.js.map