(this.webpackJsonpmyfooddataclone=this.webpackJsonpmyfooddataclone||[]).push([[0],{148:function(e,a,t){e.exports=t.p+"static/media/logo.8357fd40.svg"},154:function(e,a,t){e.exports=t(265)},159:function(e,a,t){},184:function(e,a,t){},212:function(e,a,t){},253:function(e,a,t){},257:function(e,a,t){},260:function(e,a,t){},261:function(e,a,t){},262:function(e,a,t){},263:function(e,a,t){},264:function(e,a,t){},265:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),c=t.n(r),o=(t(159),t(273)),s=t(17),u=t(8),m=t(269),i=t(275),d=t(270),E=t(268),f=t(271),p=t(43),v=t(83),h=t(70),b=t(46),g=t(274),y=t(69),N=t(26),w=t.n(N);function O(e){var a=function(e){var a=e.selectedQuantity,t=e.selectedWeightIndex,n=w.a.toNumber(e["GmWt_"+t])/100;return function(t){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!e[t])return j;var r=w.a.toNumber(e[t])*n*a;return{value:Math.round(10*r/10),percentage:Math.round(r/(1*l)*100)}}}(e);return{calories:a("ENERC_KCAL",2e3),totalFat:a("FAT",65),saturatedFat:a("FASAT",20),transFat:a("FATRN"),cholesterol:a("CHOLE",300),sodium:a("NA",2400),totalCarbohydrates:a("CHOCDF",300),fiber:a("FIBTG",25),sugar:a("SUGAR",50),addedSugar:a("ADD_SG",50),protein:a("PROCNT",50),vitaminC:a("VITC",90),vitaminD:a("VITD",20),iron:a("FE",18),calcium:a("CA",1300),potassium:a("K",4700),phosphorus:a("P",1250)}}var j={value:"~",percentage:"~"};function S(e,a,t){return{selectedQuantity:function(e){return console.log("validating q:",e),e>=1&&e<=1e4?e:1}(t),selectedWeightIndex:1}}Object(u.selector)({key:"foodItemDataNameState",get:function(e){var a=(0,e.get)(F);return a&&a.name}}),Object(u.atom)({key:"foodItemQueryParamsState",default:{}});var F=Object(u.atom)({key:"foodItemDataState",default:null}),C=Object(u.atom)({key:"selectedQuantityState",default:1}),I=Object(u.atom)({key:"selectedWeightIndexState",default:1}),k=Object(u.selector)({key:"quantityWeightIndexState",get:function(e){var a=e.get;return{selectedQuantity:a(C),selectedWeightIndex:a(I)}},set:function(e,a){var t=e.set,n=function(e){return a instanceof u.DefaultValue?a:a[e]};t(C,n("selectedQuantity")),t(I,n("selectedWeightIndex"))}}),D=Object(u.selector)({key:"foodItemDataWithSelectedState",get:function(e){var a=e.get,t=a(F),n=a(k);return t?Object(y.a)(Object(y.a)({},t),n):null}}),R=Object(u.selector)({key:"foodItemDataNutritionFactsState",get:function(e){var a=(0,e.get)(D);return a?O(a):null}}),_=(Object(u.selector)({key:"foodItemDataURLState",get:function(e){var a=e.get,t=a(F),n=a(k);if(!t)return"";t.id;var l=n.selectedQuantity,r=n.selectedWeightIndex;return"?serv=".concat("wt"+r,"&qty=").concat(l)}}),t(184),v.a.Option);var A=function(e){var a=e.foodItemData,t=Object(u.useRecoilState)(C),n=Object(p.a)(t,2),r=n[0],c=n[1],o=Object(u.useRecoilState)(I),s=Object(p.a)(o,2),m=s[0],i=s[1],d=w.a.values(JSON.parse(a.servingsizes)).map((function(e){var a=Object(p.a)(e,2),t=a[0],n=a[1];return"".concat(n," (").concat(t,"g)")})),E=d[m];return l.a.createElement(h.a,{className:"serving-size-selection-row__body",align:"middle"},l.a.createElement(b.a,{span:4},l.a.createElement(g.a,{min:1,max:1e4,value:r,placeholder:1,onChange:function(e){1<=e&&e<1e4&&c(e)},className:"serving-size-selection-row__serving-input"})),l.a.createElement(b.a,{span:2},l.a.createElement(f.a,null)),l.a.createElement(b.a,{span:18},l.a.createElement(v.a,{value:E,className:"serving-size-selection-row__select",style:{width:"100%"},dropdownMatchSelectWidth:!1,onChange:i},d.map((function(e,a){return l.a.createElement(_,{value:a,key:e},e)})))))};t(212);var x=function(e){var a=e.foodItemData,t=Object(u.useResetRecoilState)(F),n=l.a.createElement(i.a,{title:"close"},l.a.createElement(d.a,{type:"link",icon:l.a.createElement(f.a,null),onClick:t,className:"sidebar-food-card__close-button"}));return l.a.createElement(E.a,{title:a.name,size:"small",extra:n,className:"sidebar-food-card"},l.a.createElement(A,{foodItemData:a}))};var T=function(){var e=Object(u.useRecoilValue)(F);return e?e&&l.a.createElement(m.b,{dataSource:[e],renderItem:function(e){return l.a.createElement(m.b.Item,{key:e.name},l.a.createElement(x,{foodItemData:e}))}}):null},W=t(95),V=t.n(W),q=(t(253),v.a.Option);var z=function(e){var a=e.placeholder,t=void 0===a?"\ud83d\udd0d Find Another Food":a,r=Object(n.useState)(),c=Object(p.a)(r,2),o=c[0],u=c[1],m=Object(n.useState)([]),i=Object(p.a)(m,2),d=i[0],E=i[1],f=Object(s.f)(),h=w.a.debounce((function(e){E([]),w.a.isEmpty(e)?u(void 0):V.a.get("https://us-central1-fasttripfinder-199123.cloudfunctions.net/my-food-data-search-proxy/?query=autocomplete/".concat(e)).then((function(a){var t=a.data.trim().split(",");u(e),E(t.map(w.a.trim))}))}),300);return l.a.createElement(v.a,{allowClear:!0,showSearch:!0,showArrow:!1,value:o,placeholder:t,notFoundContent:!1,filterOption:!1,onSearch:h,onChange:function(e){console.log("selected: ",e),w.a.isEmpty(e)?u(void 0):(u(e),f.push("/nutrition-facts/".concat(e)))},className:"searchbar"},d.map((function(e){return l.a.createElement(q,{key:e},function(e,a){var t=new RegExp(a,"ig");return w.a.replace(e,t,(function(e){return"<=>".concat(e,"<=>")})).split("<=>").map((function(e,a){return a%2===1?l.a.createElement("span",{key:a,className:"highlighted"},e):e}))}(e,o))})))};t(257);var P=function(e){var a=e.className;return l.a.createElement("div",{className:a},l.a.createElement(o.a,{className:"sidebar"},l.a.createElement("div",{className:"sidebar__container"},l.a.createElement(z,null),l.a.createElement(T,null))))};t(260);var Q=function(){var e=Object(u.useRecoilValue)(R);if(!e)return null;var a=e.calories,t=e.totalFat,n=e.saturatedFat,r=e.transFat,c=e.cholesterol,o=e.sodium,s=e.totalCarbohydrates,m=e.fiber,i=e.sugar,d=e.addedSugar,E=e.protein,f=e.vitaminC,p=e.vitaminD,v=e.iron,b=e.calcium,g=e.potassium,y=e.phosphorus,N=function(){return"~"===d.value?l.a.createElement(h.a,{className:"no-sugar-added"},l.a.createElement("span",null,"~ No added sugar data collected"),l.a.createElement("b",null,"~")):l.a.createElement(h.a,{className:"no-sugar-added"},l.a.createElement("span",null,"Includes ",d.value,"g Added Sugars"),l.a.createElement("b",null,d.percentage))};return l.a.createElement("div",{className:"nutrition-facts-table"},l.a.createElement("div",{className:"facts-table-header"},l.a.createElement("b",null,"Nutrition Facts")),l.a.createElement("div",{className:"facts-table-serving large-border-bottom"},l.a.createElement("div",null,l.a.createElement("b",null,"Serving Size")),l.a.createElement("div",null," 1 cup, quartered or chopped (125g)")),l.a.createElement(h.a,{justify:"space-between",className:"calories medium-border-bottom"},l.a.createElement("span",{className:"label"},"Calories"),l.a.createElement("span",{className:"value"},a.value)),l.a.createElement(h.a,{justify:"end"},l.a.createElement("b",null,"% Daily Value *")),l.a.createElement("div",{className:"chart"},l.a.createElement(h.a,null,l.a.createElement("span",null,l.a.createElement("b",null,"Total Fat")," ",t.value,"g"),l.a.createElement("b",null,t.percentage,"%")),l.a.createElement(h.a,{className:"left-padding-1"},l.a.createElement("span",null,"Saturated Fat ",n.value,"g"),l.a.createElement("b",null,n.percentage,"%")),l.a.createElement(h.a,{className:"left-padding-1 thick-border-bottom"},l.a.createElement("span",null,l.a.createElement("em",null,"Trans")," Fat ",r.value,"g")),l.a.createElement(h.a,{className:"thick-border-bottom"},l.a.createElement("span",null,l.a.createElement("b",null,"Cholesterol")," ",c.value,"mg"),l.a.createElement("b",null,c.percentage,"%")),l.a.createElement(h.a,null,l.a.createElement("span",null,l.a.createElement("b",null,"Sodium")," ",o.value,"mg"),l.a.createElement("b",null,o.percentage,"%")),l.a.createElement(h.a,null,l.a.createElement("span",null,l.a.createElement("b",null,"Total Carbohydrate")," ",s.value,"g"),l.a.createElement("b",null,s.percentage,"%")),l.a.createElement(h.a,{className:"left-padding-1 thick-border-bottom"},l.a.createElement("span",null,"Dietary Fiber ",m.value,"g"),l.a.createElement("b",null,m.percentage,"%")),l.a.createElement(h.a,{className:"left-padding-1"},l.a.createElement("span",null,"Total Sugars ",i.value,"g"),l.a.createElement("b",null,i.percentage,"%")),l.a.createElement(N,null),l.a.createElement(h.a,{className:"large-border-bottom"},l.a.createElement("span",null,l.a.createElement("b",null,"Protein")," ",E.value,"g"),l.a.createElement("b",null,E.percentage,"%")),l.a.createElement(h.a,null,l.a.createElement("span",null,"Vitamin C ",f.value,"mg"),f.percentage,"%"),l.a.createElement(h.a,null,l.a.createElement("span",null,"Vitamin D ",p.value,"mcg"),p.percentage,"%"),l.a.createElement(h.a,null,l.a.createElement("span",null,"Iron ",v.value,"mg"),v.percentage,"%"),l.a.createElement(h.a,null,l.a.createElement("span",null,"Calcium ",b.value,"mg"),b.percentage,"%"),l.a.createElement(h.a,null,l.a.createElement("span",null,"Potassium ",g.value,"mg"),g.percentage,"%"),l.a.createElement(h.a,{className:"medium-border-bottom"},l.a.createElement("span",null,"Phosphorus ",y.value,"mg"),y.percentage,"%"),l.a.createElement(h.a,{className:"facts-table-footer"},"*The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.")))},H=t(272);t(261);function L(){var e=Object(u.useRecoilValue)(F);if(!e)return null;var a=e.WATER,t=e.FAT,n=e.CHOCDF,r=e.PROCNT,c=e.ALC,o="~"!==a&&"~"!==t&&"~"!==n&&"~"!==r,s=Number(a),m=Number(t),i=Number(n),d=Number(r),E=Number(c),f=E>0,p=s+m+i+d+E,v=w.a.toInteger(s/p*100),g=w.a.toInteger(m/p*100),y=w.a.toInteger(i/p*100),N=w.a.toInteger(d/p*100),O=w.a.toInteger(E/p*100);return o&&l.a.createElement("div",{className:"histograms"},l.a.createElement("div",{className:"data-title"},"What is this food made of?"),l.a.createElement("div",{className:"data-tile"},l.a.createElement(h.a,{className:"square",align:"bottom"},l.a.createElement(b.a,{className:"water",style:{height:"".concat(v,"%")}}),l.a.createElement(b.a,{className:"fat",style:{height:"".concat(g,"%")}}),l.a.createElement(b.a,{className:"carbs",style:{height:"".concat(y,"%")}}),l.a.createElement(b.a,{className:"protein",style:{height:"".concat(N,"%")}}),f&&l.a.createElement(b.a,{className:"alcohol",style:{height:"".concat(O,"%")}})),l.a.createElement(h.a,{className:"legend"},l.a.createElement(b.a,null,l.a.createElement("div",null,v,"%"),l.a.createElement("div",null,"Water")),l.a.createElement(b.a,null,l.a.createElement("div",null,g,"%"),l.a.createElement("div",null,"Fat")),l.a.createElement(b.a,null,l.a.createElement("div",null,y,"%"),l.a.createElement("div",null,"Carbs")),l.a.createElement(b.a,null,l.a.createElement("div",null,N,"%"),l.a.createElement("div",null,"Protein")),f&&l.a.createElement(b.a,null,l.a.createElement("div",null,O,"%"),l.a.createElement("div",null,"Alcohol")))))}var M=Object(u.atom)({key:"isMobileState",default:window.innerWidth<768});var B=Object(u.atom)({key:"displayDrawerState",default:!1}),G=t(86),U=t.n(G),J=t(147);var K=function(){var e=Object(J.a)(U.a.mark((function e(a){var t,n,l;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,V.a.get("https://us-central1-fasttripfinder-199123.cloudfunctions.net/my-food-data-search-proxy/?query=food/".concat(a));case 4:return t=e.sent,n=t.data,l=n[0],e.abrupt("return",l&&Object(y.a)(Object(y.a)({},l),{},{id:l.ndbstring,name:l.name3}));case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();function $(){var e=Object(u.useRecoilValue)(F),a=Object(u.useSetRecoilState)(k),t=function(){var e=Object(u.useSetRecoilState)(F),a=Object(u.useSetRecoilState)(B),t=Object(u.useResetRecoilState)(k);return function(n){K(n).then(e),a(!1),t()}}(),l=Object(s.g)().params,r=l.foodName,c=l.weight,o=l.quantity;Object(n.useEffect)((function(){t(r)}),[r]),Object(n.useEffect)((function(){e&&a(S(0,0,Number(o)))}),[e,c,o])}t(262);function X(e){var a=e.className;$();var t=Object(u.useRecoilValue)(F),n=Object(u.useRecoilState)(B),r=Object(p.a)(n,2),c=r[0],o=r[1],s=Object(u.useRecoilValue)(M);if(!t)return null;var m=function(){return s&&l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{className:"facts-panel__button",size:"large",onClick:function(){return o(!0)}},"\ud83d\udd0d Find Another Food"),l.a.createElement(H.a,{title:"Find Food!",placement:"left",closable:!0,onClose:function(){return o(!1)},visible:c,style:{width:"100%"}},l.a.createElement(P,null)))},i=function(){return s&&l.a.createElement("div",{className:"facts-panel-body"},l.a.createElement(h.a,{className:"serving-selector",style:{borderBottom:"1px solid #ddd"}},"Serving Size:"),l.a.createElement(A,{foodItemData:t}))};return l.a.createElement("div",{className:"".concat(a," facts-panel")},l.a.createElement(m,null),l.a.createElement("h1",{className:"facts-panel-header"},t.name),l.a.createElement("div",{className:"facts-panel-subheader"},t.food_description),l.a.createElement("div",null,l.a.createElement("strong",null,"Database: "),t.datatype),l.a.createElement("div",null,l.a.createElement(i,null),l.a.createElement(h.a,{align:"middle",className:"facts-panel-body"},l.a.createElement(Q,null),l.a.createElement(L,null))))}t(263);function Y(e){var a=e.className;return l.a.createElement("div",{class:"".concat(a," home-page")},l.a.createElement("h1",{class:"home-header"},"Nutrition Facts Search Tool"),l.a.createElement("div",{class:"home-info-how-to-search-line"},"Use the search box to find a food and see the nutrient details."),l.a.createElement(z,{placeholder:"\ud83d\udd0d Search For A Food (Apples)"}))}var Z=t(148),ee=t.n(Z),ae=(t(264),o.a.Header),te=o.a.Content,ne=o.a.Footer;var le=function(){var e=function(){var e=Object(u.useRecoilState)(M),a=Object(p.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){function e(){var e=window.innerWidth<768;e!==t&&l(e)}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[t,l]),t}(),a=!e,t=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"app-footer-links"},l.a.createElement("a",{href:"https://www.myfooddata.com/"},"Home |"),l.a.createElement("a",{href:"https://www.myfooddata.com/contact.php"}," Contact |"),l.a.createElement("a",{href:"https://www.myfooddata.com/about.php"}," About |"),l.a.createElement("a",{href:"https://www.myfooddata.com/terms.php"}," Terms of Use |"),l.a.createElement("a",{href:"https://www.myfooddata.com/privacy.php"}," Privacy |"),l.a.createElement("a",{href:"https://www.myfooddata.com/faq.php"}," FAQ |"),l.a.createElement("a",{href:"https://www.myfooddata.com/sitemap.php"}," Sitemap")),l.a.createElement("div",{className:"app-footer-copyright"},"\xa9 2020 MyFoodData.com"))};return l.a.createElement(o.a,{className:e&&"mobile",style:{minHeight:"100vh"}},l.a.createElement(ae,{className:"header"},l.a.createElement("a",{href:"https://www.myfooddata.com"},l.a.createElement("img",{className:"header-logo",src:ee.a,alt:"my food data",height:"100%"}))),l.a.createElement(te,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/nutrition-facts/:foodName/:weight?/:quantity?"},a&&l.a.createElement(P,{className:"ant-layout-content__sidebar"}),l.a.createElement(X,{className:"ant-layout-content__nutrition-facts-panel"})),l.a.createElement(s.a,null,l.a.createElement(Y,{className:"ant-layout-content__home-page"})))),l.a.createElement(ne,{className:"app-footer"},l.a.createElement(t,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=t(72);c.a.render(l.a.createElement(re.a,{basename:"myFoodDataClone"},l.a.createElement(u.RecoilRoot,null,l.a.createElement(le,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[154,1,2]]]);
//# sourceMappingURL=main.a9c88905.chunk.js.map