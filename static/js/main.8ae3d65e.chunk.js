(this.webpackJsonpmyfooddataclone=this.webpackJsonpmyfooddataclone||[]).push([[0],{116:function(e,a,t){e.exports=t.p+"static/media/logo.8357fd40.svg"},123:function(e,a,t){e.exports=t(195)},128:function(e,a,t){},130:function(e,a,t){},133:function(e,a,t){},160:function(e,a,t){},161:function(e,a,t){},162:function(e,a,t){},163:function(e,a,t){},164:function(e,a,t){},168:function(e,a,t){},169:function(e,a,t){},195:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),c=t.n(l),o=(t(128),t(204)),s=t(20),m=t(31),i=t(201);function u(){return Object(n.useContext)(m.a).store.foodItemDataStore}var d=t(206),f=t(203),E=t(200),p=t(56),h=t(35),g=t(66),v=t(60),b=t(37),N=t(202),y=t(22),w=t.n(y),F=(t(130),g.a.Option),D=1,I=1e4;var S=Object(m.c)((function(e){var a=e.foodItemData,t=w.a.entries(a.servings);return r.a.createElement(v.a,{className:"serving-size-selection-row__body",align:"middle"},r.a.createElement(b.a,{span:4},r.a.createElement(N.a,{min:D,max:I,value:a.selectedQuantity,placeholder:1,onChange:function(e){D<=e&&e<I&&a.setSelectedQuantity(e)},className:"serving-size-selection-row__serving-input"})),r.a.createElement(b.a,{span:2},r.a.createElement(p.a,null)),r.a.createElement(b.a,{span:18},r.a.createElement(g.a,{value:a.selectedWeight,className:"serving-size-selection-row__select",style:{width:"100%"},dropdownMatchSelectWidth:!1,onChange:a.setSelectedWeight},t.map((function(e){var a=Object(h.a)(e,2),t=a[0],n=a[1].description;return r.a.createElement(F,{value:t,key:t},n)})))))}));t(133);var C=function(e){var a=e.foodItemData,t=u().removeFoodItemData,n=r.a.createElement(d.a,{title:"close"},r.a.createElement(f.a,{type:"link",icon:r.a.createElement(p.a,null),onClick:function(){return t(a)},className:"sidebar-food-card__close-button"}));return r.a.createElement(E.a,{title:a.name,size:"small",extra:n,className:"sidebar-food-card"},r.a.createElement(S,{foodItemData:a}))};var O=Object(m.c)((function(){var e=u().foodItemDatas;return 0===e.length?null:r.a.createElement(i.b,{dataSource:e,renderItem:function(e){return r.a.createElement(i.b.Item,{key:e.name},r.a.createElement(C,{foodItemData:e}))}})})),_=t(83),A=t.n(_),j=(t(160),g.a.Option);var T=function(e){var a=e.placeholder,t=void 0===a?"\ud83d\udd0d Find Another Food":a,l=Object(n.useState)(),c=Object(h.a)(l,2),o=c[0],s=c[1],m=Object(n.useState)([]),i=Object(h.a)(m,2),d=i[0],f=i[1],E=u(),p=w.a.debounce((function(e){f([]),w.a.isEmpty(e)?s(null):A.a.get("https://us-central1-fasttripfinder-199123.cloudfunctions.net/my-food-data-search-proxy/?query=autocomplete/".concat(e)).then((function(a){var t=a.data.trim().split(",");s(e),f(t.map(w.a.trim))}))}),300);return r.a.createElement(g.a,{allowClear:!0,showSearch:!0,showArrow:!1,value:o,placeholder:t,notFoundContent:!1,filterOption:!1,onSearch:p,onChange:function(e){console.log("selected: ",e),s(null),e&&E.setFoodItemDataFromName(e)},className:"searchbar"},d.map((function(e){return r.a.createElement(j,{key:e},function(e,a){var t=new RegExp(a,"ig");return w.a.replace(e,t,(function(e){return"<=>".concat(e,"<=>")})).split("<=>").map((function(e,a){return a%2===1?r.a.createElement("span",{key:a,className:"highlighted"},e):e}))}(e,o))})))};t(161);var k=function(e){var a=e.className;return r.a.createElement("div",{className:a},r.a.createElement(o.a,{className:"sidebar"},r.a.createElement("div",{className:"sidebar__container"},r.a.createElement(T,null),r.a.createElement(O,null))))};t(162);var W=Object(m.c)((function(e){var a=e.foodItemData.nutritionFacts;if(!a)return null;var t=a.calories,n=a.totalFat,l=a.saturatedFat,c=a.transFat,o=a.cholesterol,s=a.sodium,m=a.totalCarbohydrates,i=a.fiber,u=a.sugar,d=a.addedSugar,f=a.protein,E=a.vitaminC,p=a.vitaminD,h=a.iron,g=a.calcium,b=a.potassium,N=a.phosphorus,y=a.servingDescription;return r.a.createElement("div",{className:"nutrition-facts-table"},r.a.createElement("div",{className:"facts-table-header"},r.a.createElement("b",null,"Nutrition Facts")),r.a.createElement("div",{className:"facts-table-serving large-border-bottom"},r.a.createElement("div",null,r.a.createElement("b",null,"Serving Size")),r.a.createElement("div",null,y)),r.a.createElement(v.a,{justify:"space-between",className:"calories medium-border-bottom"},r.a.createElement("span",{className:"label"},"Calories"),r.a.createElement("span",{className:"value"},t.value)),r.a.createElement(v.a,{justify:"end"},r.a.createElement("b",null,"% Daily Value *")),r.a.createElement("div",{className:"chart"},r.a.createElement(v.a,null,r.a.createElement("span",null,r.a.createElement("b",null,"Total Fat")," ",n.value,"g"),r.a.createElement("b",null,n.percentage,"%")),r.a.createElement(v.a,{className:"left-padding-1"},r.a.createElement("span",null,"Saturated Fat ",l.value,"g"),r.a.createElement("b",null,l.percentage,"%")),r.a.createElement(v.a,{className:"left-padding-1 thick-border-bottom"},r.a.createElement("span",null,r.a.createElement("em",null,"Trans")," Fat ",c.value,"g")),r.a.createElement(v.a,{className:"thick-border-bottom"},r.a.createElement("span",null,r.a.createElement("b",null,"Cholesterol")," ",o.value,"mg"),r.a.createElement("b",null,o.percentage,"%")),r.a.createElement(v.a,null,r.a.createElement("span",null,r.a.createElement("b",null,"Sodium")," ",s.value,"mg"),r.a.createElement("b",null,s.percentage,"%")),r.a.createElement(v.a,null,r.a.createElement("span",null,r.a.createElement("b",null,"Total Carbohydrate")," ",m.value,"g"),r.a.createElement("b",null,m.percentage,"%")),r.a.createElement(v.a,{className:"left-padding-1 thick-border-bottom"},r.a.createElement("span",null,"Dietary Fiber ",i.value,"g"),r.a.createElement("b",null,i.percentage,"%")),r.a.createElement(v.a,{className:"left-padding-1"},r.a.createElement("span",null,"Total Sugars ",u.value,"g"),r.a.createElement("b",null,u.percentage,"%")),r.a.createElement((function(){return"~"===d.value?r.a.createElement(v.a,{className:"no-sugar-added"},r.a.createElement("span",null,"~ No added sugar data collected"),r.a.createElement("b",null,"~")):r.a.createElement(v.a,{className:"no-sugar-added"},r.a.createElement("span",null,"Includes ",d.value,"g Added Sugars"),r.a.createElement("b",null,d.percentage))}),null),r.a.createElement(v.a,{className:"large-border-bottom"},r.a.createElement("span",null,r.a.createElement("b",null,"Protein")," ",f.value,"g"),r.a.createElement("b",null,f.percentage,"%")),r.a.createElement(v.a,null,r.a.createElement("span",null,"Vitamin C ",E.value,"mg"),E.percentage,"%"),r.a.createElement(v.a,null,r.a.createElement("span",null,"Vitamin D ",p.value,"mcg"),p.percentage,"%"),r.a.createElement(v.a,null,r.a.createElement("span",null,"Iron ",h.value,"mg"),h.percentage,"%"),r.a.createElement(v.a,null,r.a.createElement("span",null,"Calcium ",g.value,"mg"),g.percentage,"%"),r.a.createElement(v.a,null,r.a.createElement("span",null,"Potassium ",b.value,"mg"),b.percentage,"%"),r.a.createElement(v.a,{className:"medium-border-bottom"},r.a.createElement("span",null,"Phosphorus ",N.value,"mg"),N.percentage,"%"),r.a.createElement(v.a,{className:"facts-table-footer"},"*The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.")))})),R=t(205);t(163);function x(e){var a=e.foodItemData;if(!a)return null;var t=a.WATER,n=a.FAT,l=a.CHOCDF,c=a.PROCNT,o=a.ALC,s="~"!==t&&"~"!==n&&"~"!==l&&"~"!==c,m=Number(t),i=Number(n),u=Number(l),d=Number(c),f=Number(o),E=f>0,p=m+i+u+d+f,h=w.a.toInteger(m/p*100),g=w.a.toInteger(i/p*100),N=w.a.toInteger(u/p*100),y=w.a.toInteger(d/p*100),F=w.a.toInteger(f/p*100);return s&&r.a.createElement("div",{className:"histograms"},r.a.createElement("div",{className:"data-title"},"What is this food made of?"),r.a.createElement("div",{className:"data-tile"},r.a.createElement(v.a,{className:"square",align:"bottom"},r.a.createElement(b.a,{className:"water",style:{height:"".concat(h,"%")}}),r.a.createElement(b.a,{className:"fat",style:{height:"".concat(g,"%")}}),r.a.createElement(b.a,{className:"carbs",style:{height:"".concat(N,"%")}}),r.a.createElement(b.a,{className:"protein",style:{height:"".concat(y,"%")}}),E&&r.a.createElement(b.a,{className:"alcohol",style:{height:"".concat(F,"%")}})),r.a.createElement(v.a,{className:"legend"},r.a.createElement(b.a,null,r.a.createElement("div",null,h,"%"),r.a.createElement("div",null,"Water")),r.a.createElement(b.a,null,r.a.createElement("div",null,g,"%"),r.a.createElement("div",null,"Fat")),r.a.createElement(b.a,null,r.a.createElement("div",null,N,"%"),r.a.createElement("div",null,"Carbs")),r.a.createElement(b.a,null,r.a.createElement("div",null,y,"%"),r.a.createElement("div",null,"Protein")),E&&r.a.createElement(b.a,null,r.a.createElement("div",null,F,"%"),r.a.createElement("div",null,"Alcohol")))))}var P=768;function q(){var e=Object(n.useState)(window.innerWidth<P),a=Object(h.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){function e(){var e=window.innerWidth<P;e!==t&&r(e)}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[t,r]),t}t(164);var z=Object(m.c)((function(e){var a=e.className,t=Object(s.g)().params,l=t.foodName,c=t.weight,o=t.quantity,m=u(),i=m.foodItemData,d=Object(n.useState)(!1),E=Object(h.a)(d,2),p=E[0],g=E[1],b=q();return Object(n.useEffect)((function(){m.setFoodItemDataFromName(l,o,c),g(!1)}),[l]),i?r.a.createElement("div",{className:"".concat(a," facts-panel")},r.a.createElement((function(){return b&&r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{className:"facts-panel__button",size:"large",onClick:function(){return g(!0)}},"\ud83d\udd0d Find Another Food"),r.a.createElement(R.a,{title:"Find Food!",placement:"left",closable:!0,onClose:function(){return g(!1)},visible:p,style:{width:"100%"}},r.a.createElement(k,null)))}),null),r.a.createElement("h1",{className:"facts-panel-header"},i.name),r.a.createElement("div",{className:"facts-panel-subheader"},i.food_description),r.a.createElement("div",null,r.a.createElement("strong",null,"Database: "),i.data_db_name),r.a.createElement("div",null,r.a.createElement((function(){return b&&r.a.createElement("div",{className:"facts-panel-body"},r.a.createElement(v.a,{className:"serving-selector",style:{borderBottom:"1px solid #ddd"}},"Serving Size:"),r.a.createElement(S,{foodItemData:i}))}),null),r.a.createElement(v.a,{align:"middle",className:"facts-panel-body"},r.a.createElement(W,{foodItemData:i}),r.a.createElement(x,{foodItemData:i})))):null}));t(168);function V(e){var a=e.className;return r.a.createElement("div",{className:"".concat(a," home-page")},r.a.createElement("h1",{className:"home-header"},"Nutrition Facts Search Tool"),r.a.createElement("div",{className:"home-info-how-to-search-line"},"Use the search box to find a food and see the nutrient details."),r.a.createElement(T,{placeholder:"\ud83d\udd0d Search For A Food (Apples)"}))}var Q=t(116),H=t.n(Q),L=(t(169),o.a.Header),B=o.a.Content,G=o.a.Footer;var M=function(){var e=q(),a=!e;return r.a.createElement(o.a,{className:e&&"mobile",style:{minHeight:"100vh"}},r.a.createElement(L,{className:"header"},r.a.createElement("a",{href:"https://www.myfooddata.com"},r.a.createElement("img",{className:"header-logo",src:H.a,alt:"my food data",height:"100%"}))),r.a.createElement(B,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/myFoodDataClone/nutrition-facts/:foodName/:weight?/:quantity?"},a&&r.a.createElement(k,{className:"ant-layout-content__sidebar"}),r.a.createElement(z,{className:"ant-layout-content__nutrition-facts-panel"})),r.a.createElement(s.a,null,r.a.createElement(V,{className:"ant-layout-content__home-page"})))),r.a.createElement(G,{className:"app-footer"},r.a.createElement((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"app-footer-links"},r.a.createElement("a",{href:"https://www.myfooddata.com/"},"Home |"),r.a.createElement("a",{href:"https://www.myfooddata.com/contact.php"}," Contact |"),r.a.createElement("a",{href:"https://www.myfooddata.com/about.php"}," About |"),r.a.createElement("a",{href:"https://www.myfooddata.com/terms.php"}," Terms of Use |"),r.a.createElement("a",{href:"https://www.myfooddata.com/privacy.php"}," Privacy |"),r.a.createElement("a",{href:"https://www.myfooddata.com/faq.php"}," FAQ |"),r.a.createElement("a",{href:"https://www.myfooddata.com/sitemap.php"}," Sitemap")),r.a.createElement("div",{className:"app-footer-copyright"},"\xa9 2020 MyFoodData.com"))}),null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=t(71),U=t(117),J=t(16),$=t(59),X=t.n($),Y=1,Z=1e4;function ee(e){var a=function(e){var a=e.selectedQuantity,t=e.selectedWeight,n=w.a.toNumber(e.servings[t].weight)/100;return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!e[t])return ae;var l=w.a.toNumber(e[t])*n*a;return{value:Math.round(10*l/10),percentage:Math.round(l/(1*r)*100)}}}(e),t=e.servings[e.selectedWeight].description;return{calories:a("ENERC_KCAL",2e3),totalFat:a("FAT",65),saturatedFat:a("FASAT",20),transFat:a("FATRN"),cholesterol:a("CHOLE",300),sodium:a("NA",2400),totalCarbohydrates:a("CHOCDF",300),fiber:a("FIBTG",25),sugar:a("SUGAR",50),addedSugar:a("ADD_SG",50),protein:a("PROCNT",50),vitaminC:a("VITC",90),vitaminD:a("VITD",20),iron:a("FE",18),calcium:a("CA",1300),potassium:a("K",4700),phosphorus:a("P",1250),servingDescription:t}}var ae={value:"~",percentage:"~"};function te(e){return e>=Y&&e<=Z?e:Y}function ne(e,a){return w.a.has(e.servings,a)?a:w.a.first(w.a.keys(e.servings))}var re=J.c.maybeNull(J.c.number),le=J.c.model("FoodItemData",{NDB_No:J.c.identifier,name3:J.c.string,servingsizes:J.c.string,food_description:J.c.maybeNull(J.c.string),data_db_name:J.c.maybeNull(J.c.string),WATER:re,ALC:re,ENERC_KCAL:re,FAT:re,FASAT:re,FATRN:re,CHOLE:re,NA:re,CHOCDF:re,FIBTG:re,SUGAR:re,ADD_SG:re,PROCNT:re,VITC:re,VITD:re,FE:re,CA:re,K:re,P:re,selectedQuantity:J.c.optional(J.c.number,1),_selectedWeight:J.c.optional(J.c.string,"wt1")}).actions((function(e){return{setSelectedQuantity:function(a){e.selectedQuantity=te(Number(a)),e.updateStore()},setSelectedWeight:function(a){e._selectedWeight=ne(e,a),e.updateStore()},updateStore:function(){var a=Object(J.b)(e).updatePathname;a&&a()}}})).views((function(e){return{get nutritionFacts(){return ee(e)},get servings(){var a=JSON.parse(e.servingsizes);return w.a.mapValues(a,(function(e){var a=Object(h.a)(e,2),t=a[0],n=a[1];return{weight:t,description:"".concat(n," (").concat(t,"g)")}}))},get name(){return e.name3},get id(){return e.NDB_No},get selectedWeight(){return ne(e,e._selectedWeight)},get queryString(){var a=e.selectedQuantity,t=e.selectedWeight,n="nutrition-facts/".concat(e.name);return a&&t&&(n+="/".concat(t,"/").concat(a)),console.log("new query string: ",n),n}}})),ce=J.c.model("FoodItemDataStore",{foodItemDatas:J.c.array(le),pathname:J.c.maybeNull(J.c.string)}).actions((function(e){return{fetchFoodItemData:Object(J.a)(X.a.mark((function e(a){var t,n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("searching name: ",a),a){e.next=3;break}return e.abrupt("return",null);case 3:return e.next=5,A.a.get("https://us-central1-fasttripfinder-199123.cloudfunctions.net/my-food-data-search-proxy/?query=food/".concat(a));case 5:return t=e.sent,n=t.data,e.abrupt("return",le.create(n[0]));case 8:case"end":return e.stop()}}),e)}))),setFoodItemDataFromName:Object(J.a)(X.a.mark((function a(t,n,r){var l;return X.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.fetchFoodItemData(t);case 2:if(l=a.sent){a.next=6;break}return e.foodItemDatas=[],a.abrupt("return");case 6:0===e.foodItemDatas.length&&(l.setSelectedQuantity(n),l.setSelectedWeight(r)),e.pathname=l.queryString,e.foodItemDatas=[l],console.log("about to update root path after setFoodFromName"),Object(J.b)(e).updatePathname();case 11:case"end":return a.stop()}}),a)}))),removeFoodItemData:function(a){e.foodItemDatas.remove(a),Object(J.b)(e).updatePathname()}}})).views((function(e){return{get foodItemData(){return e.foodItemDatas.length>0?e.foodItemDatas[0]:null},get queryString(){return e.foodItemData?e.foodItemData.queryString:null}}})),oe="/myFoodDataClone/",se=J.c.model("RootStore",{foodItemDataStore:J.c.optional(ce,{}),pathname:J.c.maybeNull(J.c.string)}).volatile((function(e){return{router:null}})).actions((function(e){return{setRouter:function(a){e.router=a},updatePathname:function(){var a=e.pathname,t=e.foodItemDataStore.queryString;t=t?oe+t:oe,a===oe||t===oe?e.router.push({pathname:t}):e.router.replace({pathname:t}),e.pathname=t}}})).create({});c.a.render(r.a.createElement(K.a,{baseName:"myFoodDataClone"},r.a.createElement(U.RecoilRoot,null,r.a.createElement((function(){var e=Object(n.useMemo)((function(){return se}),[]),a=Object(s.f)();return Object(n.useEffect)((function(){e.setRouter(a)}),[a]),r.a.createElement(m.b,{store:e},r.a.createElement(M,null))}),null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[123,1,2]]]);
//# sourceMappingURL=main.8ae3d65e.chunk.js.map