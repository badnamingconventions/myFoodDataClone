(this.webpackJsonpmyfooddataclone=this.webpackJsonpmyfooddataclone||[]).push([[0],{114:function(e,t,a){e.exports=a.p+"static/media/logo.8357fd40.svg"},120:function(e,t,a){e.exports=a(191)},125:function(e,t,a){},150:function(e,t,a){},153:function(e,t,a){},181:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){},187:function(e,t,a){},188:function(e,t,a){},189:function(e,t,a){},190:function(e,t,a){},191:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),c=a.n(l),o=(a(125),a(200)),s=a(19),i=a(8),u=a(197),m=a(202),d=a(199),f=a(196),p=a(54),E=a(25),b=a(64),g=a(57),v=a(36),h=a(198),y=a(70),O=a(21),w=a.n(O),N=1,j=1e4;function S(e){var t=function(e){var t=e.selectedQuantity,a=e.selectedWeight,n=w.a.toNumber(e.servings[a].weight)/100;return function(a){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!e[a])return D;var l=w.a.toNumber(e[a])*n*t;return{value:Math.round(10*l/10),percentage:Math.round(l/(1*r)*100)}}}(e),a=e.servings[e.selectedWeight].description;return{calories:t("ENERC_KCAL",2e3),totalFat:t("FAT",65),saturatedFat:t("FASAT",20),transFat:t("FATRN"),cholesterol:t("CHOLE",300),sodium:t("NA",2400),totalCarbohydrates:t("CHOCDF",300),fiber:t("FIBTG",25),sugar:t("SUGAR",50),addedSugar:t("ADD_SG",50),protein:t("PROCNT",50),vitaminC:t("VITC",90),vitaminD:t("VITD",20),iron:t("FE",18),calcium:t("CA",1300),potassium:t("K",4700),phosphorus:t("P",1250),servingDescription:a}}var D={value:"~",percentage:"~"};function F(e){return e>=N&&e<=j?e:N}function C(e,t){return w.a.has(e.servings,t)?t:"wt1"}function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}Object(i.selector)({key:"foodItemDataNameState",get:function(e){var t=(0,e.get)(R);return t&&t.name}}),Object(i.atom)({key:"foodItemQueryParamsState",default:{}});var R=Object(i.atom)({key:"foodItemDataState",default:null}),P=Object(i.atom)({key:"selectedQuantityState",default:1}),I=Object(i.atom)({key:"selectedWeightState",default:"wt1"}),_=Object(i.selector)({key:"quantityWeightState",get:function(e){var t,a,n=e.get,r=n(R),l=n(P),c=n(I);return r?(t=r,a=c,{selectedQuantity:F(l),selectedWeight:C(t,a)}):{selectedQuantity:1,selectedWeight:"wt1"}},set:function(e,t){var a=e.set,n=function(e){return t instanceof i.DefaultValue?t:t[e]};n("selectedQuantity"),n("selectedWeight");a(P,n("selectedQuantity")),a(I,n("selectedWeight"))}}),A=Object(i.selector)({key:"foodItemDataWithSelectedState",get:function(e){var t=e.get,a=t(R),n=t(_);return a?function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach((function(t){Object(y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a,{},n):null}}),W=Object(i.selector)({key:"foodItemDataNutritionFactsState",get:function(e){var t=(0,e.get)(A);return t?S(t):null}}),T=Object(i.selector)({key:"foodItemDataURLState",get:function(e){var t=e.get,a=t(R),n=t(_);if(!a)return"";var r=n.selectedQuantity,l=n.selectedWeight,c="/nutrition-facts/".concat(a.name);return r&&l&&(c+="/".concat(l,"/").concat(r)),c}}),V=(a(150),b.a.Option),x=1,Q=1e4;var z=function(e){var t=e.foodItemData,a=Object(i.useRecoilState)(P),n=Object(E.a)(a,2),l=n[0],c=n[1],o=Object(i.useRecoilState)(I),s=Object(E.a)(o,2),u=s[0],m=s[1],d=w.a.entries(t.servings);return r.a.createElement(g.a,{className:"serving-size-selection-row__body",align:"middle"},r.a.createElement(v.a,{span:4},r.a.createElement(h.a,{min:x,max:Q,value:l,placeholder:1,onChange:function(e){x<=e&&e<Q&&c(e)},className:"serving-size-selection-row__serving-input"})),r.a.createElement(v.a,{span:2},r.a.createElement(p.a,null)),r.a.createElement(v.a,{span:18},r.a.createElement(b.a,{value:u,className:"serving-size-selection-row__select",style:{width:"100%"},dropdownMatchSelectWidth:!1,onChange:m},d.map((function(e){var t=Object(E.a)(e,2),a=t[0],n=t[1].description;return r.a.createElement(V,{value:a,key:a},n)})))))};a(153);var q=function(e){var t=e.foodItemData,a=Object(i.useResetRecoilState)(R),n=r.a.createElement(m.a,{title:"close"},r.a.createElement(d.a,{type:"link",icon:r.a.createElement(p.a,null),onClick:a,className:"sidebar-food-card__close-button"}));return r.a.createElement(f.a,{title:t.name,size:"small",extra:n,className:"sidebar-food-card"},r.a.createElement(z,{foodItemData:t}))};var H=function(){var e=Object(i.useRecoilValue)(R);return e?e&&r.a.createElement(u.b,{dataSource:[e],renderItem:function(e){return r.a.createElement(u.b.Item,{key:e.name},r.a.createElement(q,{foodItemData:e}))}}):null},L=a(82),M=a.n(L),B=(a(181),b.a.Option);var U=function(e){var t=e.placeholder,a=void 0===t?"\ud83d\udd0d Find Another Food":t,l=Object(n.useState)(),c=Object(E.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)([]),m=Object(E.a)(u,2),d=m[0],f=m[1],p=Object(s.f)(),g=w.a.debounce((function(e){f([]),w.a.isEmpty(e)?i(null):M.a.get("https://us-central1-fasttripfinder-199123.cloudfunctions.net/my-food-data-search-proxy/?query=autocomplete/".concat(e)).then((function(t){var a=t.data.trim().split(",");i(e),f(a.map(w.a.trim))}))}),300);return r.a.createElement(b.a,{allowClear:!0,showSearch:!0,showArrow:!1,value:o,placeholder:a,notFoundContent:!1,filterOption:!1,onSearch:g,onChange:function(e){console.log("selected: ",e),i(null),p.push("/nutrition-facts/".concat(e))},className:"searchbar"},d.map((function(e){return r.a.createElement(B,{key:e},function(e,t){var a=new RegExp(t,"ig");return w.a.replace(e,a,(function(e){return"<=>".concat(e,"<=>")})).split("<=>").map((function(e,t){return t%2===1?r.a.createElement("span",{key:t,className:"highlighted"},e):e}))}(e,o))})))};a(185);var G=function(e){var t=e.className;return r.a.createElement("div",{className:t},r.a.createElement(o.a,{className:"sidebar"},r.a.createElement("div",{className:"sidebar__container"},r.a.createElement(U,null),r.a.createElement(H,null))))};a(186);var J=function(){var e=Object(i.useRecoilValue)(W);if(!e)return null;var t=e.calories,a=e.totalFat,n=e.saturatedFat,l=e.transFat,c=e.cholesterol,o=e.sodium,s=e.totalCarbohydrates,u=e.fiber,m=e.sugar,d=e.addedSugar,f=e.protein,p=e.vitaminC,E=e.vitaminD,b=e.iron,v=e.calcium,h=e.potassium,y=e.phosphorus,O=e.servingDescription;return r.a.createElement("div",{className:"nutrition-facts-table"},r.a.createElement("div",{className:"facts-table-header"},r.a.createElement("b",null,"Nutrition Facts")),r.a.createElement("div",{className:"facts-table-serving large-border-bottom"},r.a.createElement("div",null,r.a.createElement("b",null,"Serving Size")),r.a.createElement("div",null,O)),r.a.createElement(g.a,{justify:"space-between",className:"calories medium-border-bottom"},r.a.createElement("span",{className:"label"},"Calories"),r.a.createElement("span",{className:"value"},t.value)),r.a.createElement(g.a,{justify:"end"},r.a.createElement("b",null,"% Daily Value *")),r.a.createElement("div",{className:"chart"},r.a.createElement(g.a,null,r.a.createElement("span",null,r.a.createElement("b",null,"Total Fat")," ",a.value,"g"),r.a.createElement("b",null,a.percentage,"%")),r.a.createElement(g.a,{className:"left-padding-1"},r.a.createElement("span",null,"Saturated Fat ",n.value,"g"),r.a.createElement("b",null,n.percentage,"%")),r.a.createElement(g.a,{className:"left-padding-1 thick-border-bottom"},r.a.createElement("span",null,r.a.createElement("em",null,"Trans")," Fat ",l.value,"g")),r.a.createElement(g.a,{className:"thick-border-bottom"},r.a.createElement("span",null,r.a.createElement("b",null,"Cholesterol")," ",c.value,"mg"),r.a.createElement("b",null,c.percentage,"%")),r.a.createElement(g.a,null,r.a.createElement("span",null,r.a.createElement("b",null,"Sodium")," ",o.value,"mg"),r.a.createElement("b",null,o.percentage,"%")),r.a.createElement(g.a,null,r.a.createElement("span",null,r.a.createElement("b",null,"Total Carbohydrate")," ",s.value,"g"),r.a.createElement("b",null,s.percentage,"%")),r.a.createElement(g.a,{className:"left-padding-1 thick-border-bottom"},r.a.createElement("span",null,"Dietary Fiber ",u.value,"g"),r.a.createElement("b",null,u.percentage,"%")),r.a.createElement(g.a,{className:"left-padding-1"},r.a.createElement("span",null,"Total Sugars ",m.value,"g"),r.a.createElement("b",null,m.percentage,"%")),r.a.createElement((function(){return"~"===d.value?r.a.createElement(g.a,{className:"no-sugar-added"},r.a.createElement("span",null,"~ No added sugar data collected"),r.a.createElement("b",null,"~")):r.a.createElement(g.a,{className:"no-sugar-added"},r.a.createElement("span",null,"Includes ",d.value,"g Added Sugars"),r.a.createElement("b",null,d.percentage))}),null),r.a.createElement(g.a,{className:"large-border-bottom"},r.a.createElement("span",null,r.a.createElement("b",null,"Protein")," ",f.value,"g"),r.a.createElement("b",null,f.percentage,"%")),r.a.createElement(g.a,null,r.a.createElement("span",null,"Vitamin C ",p.value,"mg"),p.percentage,"%"),r.a.createElement(g.a,null,r.a.createElement("span",null,"Vitamin D ",E.value,"mcg"),E.percentage,"%"),r.a.createElement(g.a,null,r.a.createElement("span",null,"Iron ",b.value,"mg"),b.percentage,"%"),r.a.createElement(g.a,null,r.a.createElement("span",null,"Calcium ",v.value,"mg"),v.percentage,"%"),r.a.createElement(g.a,null,r.a.createElement("span",null,"Potassium ",h.value,"mg"),h.percentage,"%"),r.a.createElement(g.a,{className:"medium-border-bottom"},r.a.createElement("span",null,"Phosphorus ",y.value,"mg"),y.percentage,"%"),r.a.createElement(g.a,{className:"facts-table-footer"},"*The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.")))},K=a(201);a(187);function $(){var e=Object(i.useRecoilValue)(R);if(!e)return null;var t=e.WATER,a=e.FAT,n=e.CHOCDF,l=e.PROCNT,c=e.ALC,o="~"!==t&&"~"!==a&&"~"!==n&&"~"!==l,s=Number(t),u=Number(a),m=Number(n),d=Number(l),f=Number(c),p=f>0,E=s+u+m+d+f,b=w.a.toInteger(s/E*100),h=w.a.toInteger(u/E*100),y=w.a.toInteger(m/E*100),O=w.a.toInteger(d/E*100),N=w.a.toInteger(f/E*100);return o&&r.a.createElement("div",{className:"histograms"},r.a.createElement("div",{className:"data-title"},"What is this food made of?"),r.a.createElement("div",{className:"data-tile"},r.a.createElement(g.a,{className:"square",align:"bottom"},r.a.createElement(v.a,{className:"water",style:{height:"".concat(b,"%")}}),r.a.createElement(v.a,{className:"fat",style:{height:"".concat(h,"%")}}),r.a.createElement(v.a,{className:"carbs",style:{height:"".concat(y,"%")}}),r.a.createElement(v.a,{className:"protein",style:{height:"".concat(O,"%")}}),p&&r.a.createElement(v.a,{className:"alcohol",style:{height:"".concat(N,"%")}})),r.a.createElement(g.a,{className:"legend"},r.a.createElement(v.a,null,r.a.createElement("div",null,b,"%"),r.a.createElement("div",null,"Water")),r.a.createElement(v.a,null,r.a.createElement("div",null,h,"%"),r.a.createElement("div",null,"Fat")),r.a.createElement(v.a,null,r.a.createElement("div",null,y,"%"),r.a.createElement("div",null,"Carbs")),r.a.createElement(v.a,null,r.a.createElement("div",null,O,"%"),r.a.createElement("div",null,"Protein")),p&&r.a.createElement(v.a,null,r.a.createElement("div",null,N,"%"),r.a.createElement("div",null,"Alcohol")))))}var X=768,Y=Object(i.atom)({key:"isMobileState",default:window.innerWidth<X});var Z=Object(i.atom)({key:"displayDrawerState",default:!1}),ee=a(69),te=a.n(ee),ae=a(113);function ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function re(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ne(a,!0).forEach((function(t){Object(y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ne(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var le=function(){var e=Object(ae.a)(te.a.mark((function e(t){var a,n,r,l,c;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,M.a.get("https://us-central1-fasttripfinder-199123.cloudfunctions.net/my-food-data-search-proxy/?query=food/".concat(t));case 4:if(a=e.sent,n=a.data,r=n[0]){e.next=9;break}return e.abrupt("return",null);case 9:return l=JSON.parse(r.servingsizes),c=w.a.mapValues(l,(function(e){var t=Object(E.a)(e,2),a=t[0],n=t[1];return{weight:a,description:"".concat(n," (").concat(a,"g)")}})),e.abrupt("return",re({},r,{id:r.ndbstring,name:r.name3,servings:c}));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function ce(){var e=Object(i.useSetRecoilState)(_),t=function(){var e=Object(i.useSetRecoilState)(R),t=Object(i.useSetRecoilState)(Z),a=Object(i.useResetRecoilState)(_);return function(n){le(n).then(e),t(!1),a()}}(),a=Object(s.g)().params,r=a.foodName,l=a.weight,c=a.quantity;Object(n.useEffect)((function(){t(r)}),[r]),Object(n.useEffect)((function(){e({selectedQuantity:Number(c),selectedWeight:l})}),[])}a(188);function oe(e){var t=e.className;ce();var a=Object(i.useRecoilValue)(R),n=Object(i.useRecoilState)(Z),l=Object(E.a)(n,2),c=l[0],o=l[1],s=Object(i.useRecoilValue)(Y);if(!a)return null;return r.a.createElement("div",{className:"".concat(t," facts-panel")},r.a.createElement((function(){return s&&r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{className:"facts-panel__button",size:"large",onClick:function(){return o(!0)}},"\ud83d\udd0d Find Another Food"),r.a.createElement(K.a,{title:"Find Food!",placement:"left",closable:!0,onClose:function(){return o(!1)},visible:c,style:{width:"100%"}},r.a.createElement(G,null)))}),null),r.a.createElement("h1",{className:"facts-panel-header"},a.name),r.a.createElement("div",{className:"facts-panel-subheader"},a.food_description),r.a.createElement("div",null,r.a.createElement("strong",null,"Database: "),a.data_db_name),r.a.createElement("div",null,r.a.createElement((function(){return s&&r.a.createElement("div",{className:"facts-panel-body"},r.a.createElement(g.a,{className:"serving-selector",style:{borderBottom:"1px solid #ddd"}},"Serving Size:"),r.a.createElement(z,{foodItemData:a}))}),null),r.a.createElement(g.a,{align:"middle",className:"facts-panel-body"},r.a.createElement(J,null),r.a.createElement($,null))))}a(189);function se(e){var t=e.className;return r.a.createElement("div",{class:"".concat(t," home-page")},r.a.createElement("h1",{class:"home-header"},"Nutrition Facts Search Tool"),r.a.createElement("div",{class:"home-info-how-to-search-line"},"Use the search box to find a food and see the nutrient details."),r.a.createElement(U,{placeholder:"\ud83d\udd0d Search For A Food (Apples)"}))}var ie=function(e){return{selectedWeight:w.a.first(w.a.keys(e.servings)),selectedQuantity:1}},ue=a(114),me=a.n(ue),de=(a(190),o.a.Header),fe=o.a.Content,pe=o.a.Footer;var Ee=function(){!function(){var e=Object(s.f)(),t=Object(i.useRecoilValue)(T),a=Object(i.useRecoilValue)(R),r=Object(i.useRecoilState)(_),l=Object(E.a)(r,2),c=l[0],o=l[1];Object(n.useEffect)((function(){a&&o(ie(a))}),[a]),Object(n.useEffect)((function(){var a=t;e.replace({pathname:a})}),[c])}();var e=function(){var e=Object(i.useRecoilState)(Y),t=Object(E.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){var e=window.innerWidth<X;e!==a&&r(e)}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[a,r]),a}(),t=!e;return r.a.createElement(o.a,{className:e&&"mobile",style:{minHeight:"100vh"}},r.a.createElement(de,{className:"header"},r.a.createElement("a",{href:"https://www.myfooddata.com"},r.a.createElement("img",{className:"header-logo",src:me.a,alt:"my food data",height:"100%"}))),r.a.createElement(fe,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/nutrition-facts/:foodName/:weight?/:quantity?"},t&&r.a.createElement(G,{className:"ant-layout-content__sidebar"}),r.a.createElement(oe,{className:"ant-layout-content__nutrition-facts-panel"})),r.a.createElement(s.a,null,r.a.createElement(se,{className:"ant-layout-content__home-page"})))),r.a.createElement(pe,{className:"app-footer"},r.a.createElement((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"app-footer-links"},r.a.createElement("a",{href:"https://www.myfooddata.com/"},"Home |"),r.a.createElement("a",{href:"https://www.myfooddata.com/contact.php"}," Contact |"),r.a.createElement("a",{href:"https://www.myfooddata.com/about.php"}," About |"),r.a.createElement("a",{href:"https://www.myfooddata.com/terms.php"}," Terms of Use |"),r.a.createElement("a",{href:"https://www.myfooddata.com/privacy.php"}," Privacy |"),r.a.createElement("a",{href:"https://www.myfooddata.com/faq.php"}," FAQ |"),r.a.createElement("a",{href:"https://www.myfooddata.com/sitemap.php"}," Sitemap")),r.a.createElement("div",{className:"app-footer-copyright"},"\xa9 2020 MyFoodData.com"))}),null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var be=a(58);c.a.render(r.a.createElement(be.a,{basename:"myFoodDataClone"},r.a.createElement(i.RecoilRoot,null,r.a.createElement(Ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[120,1,2]]]);
//# sourceMappingURL=main.7f6a240a.chunk.js.map