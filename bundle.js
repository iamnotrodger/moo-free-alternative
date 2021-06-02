(()=>{"use strict";function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var n=new Map,r="cart",a=function(){return n},o=function(e){document.getElementById("cart-num").innerText=e||""},c=function(e,t,r){t.forEach((function(t){var a,o=(a=String(t.id),n.has(a)),c=i(t,o,r);e.appendChild(c)}))},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s,r=document.createElement("div");r.classList.add("product");var a=document.createElement("div");a.classList.add("product__image"),a.style.backgroundImage="url(".concat(e.image,")"),r.appendChild(a);var o=document.createElement("i");o.className+="material-icons product__button ".concat(t?"product__button--selected":""),o.innerHTML=t?"remove":"add_shopping_cart",o.addEventListener("click",n(e)),a.appendChild(o);var c=document.createElement("div");c.classList.add("product__info");var i=document.createElement("h3");i.classList.add("product__name"),i.innerHTML=e.name;var d=document.createElement("p");d.classList.add("product__price"),d.innerHTML="$"+e.price.toFixed(2),c.appendChild(i),c.appendChild(d),r.appendChild(c);var u=l(e.lactoseFree,e.nutFree);return r.appendChild(u),r},s=function(t){return function(a){var c=a.target;c.classList.contains("product__button--selected")?(c.innerHTML="add_shopping_cart",function(t){n.delete(String(t.id)),o(n.size),localStorage.setItem(r,JSON.stringify(e(n)))}(t)):(c.innerHTML="remove",function(t){t.selected=!0,n.set(String(t.id),t),o(n.size),localStorage.setItem(r,JSON.stringify(e(n)))}(t)),c.classList.toggle("product__button--selected")}},l=function(e,t){var n=document.createElement("div");if(n.classList.add("product__widget"),!e){var r=d("Lactose","lactose");n.appendChild(r)}if(!t){var a=d("Nut","nut");n.appendChild(a)}return n},d=function(e,t){var n=document.createElement("div");return n.classList.add("category"),n.classList.add("category--".concat(t)),n.innerHTML="<a class='material-icons category__icon'>error</a>",n.innerHTML+="<p class='category__text'>".concat(e,"</p>"),n},u=document.getElementById("checkout-receipt"),p=document.getElementById("checkout-products"),m=function(){u.innerHTML="";var e=a(),t=0;e.forEach((function(e){u.innerHTML+='\n            <div class="purchase-item">\n                <h3 class="purchase-item__name">'.concat(e.name,'</h3>\n                <p class="purchase-item__price">$').concat(e.price.toFixed(2),"</p>\n            </div>\n            "),t+=e.price})),u.innerHTML+='<h2 class="checkout-receipt__total">$'.concat(t.toFixed(2),"</h2>")},f=function(e){return function(t){s(e)(t);var n=t.target.parentElement.parentElement;n.classList.add("product-remove"),n.addEventListener("transitionend",(function(){n.remove()}),{once:!0}),m()}};const h=[{id:1,name:"Nut",nutFree:!1,lactoseFree:!0,price:1.99,image:"https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/11/chestnut-nut-nuts-peanuts-pistachio-cashew-1296x728-header-1296x728.jpg?w=1155&h=1528"},{id:2,name:"Milk",nutFree:!0,lactoseFree:!1,price:2.35,image:"https://post.greatist.com/wp-content/uploads/sites/2/2020/10/226177-grt-Does-Drinking-Milk-Before-Bed-Really-Help-You-Sleep-1200x628-Facebook-1200x628.jpg"},{id:3,name:"Chicken",nutFree:!0,lactoseFree:!0,price:10,image:"https://fitfoodiefinds.com/wp-content/uploads/2020/07/chicken-chop-salad-1-1sq.jpg"},{id:4,name:"Almond Milk",nutFree:!1,lactoseFree:!0,price:5,image:"https://media.istockphoto.com/photos/almond-milk-in-glass-with-almonds-on-background-square-format-picture-id851979124?k=6&m=851979124&s=170667a&w=0&h=PbIu8byNBcBxizNr8LrlV7TShHhY3a4Qkc1vbPKaKTM="},{id:5,name:"Tomato",nutFree:!0,lactoseFree:!0,price:5,image:"https://toriavey.com/images/2012/04/Tomatoes-Main.jpg"},{id:6,name:"Cheeze",nutFree:!0,lactoseFree:!1,price:9,image:"https://www.noracooks.com/wp-content/uploads/2020/05/square.jpg"},{id:7,name:"Ketchup",nutFree:!0,lactoseFree:!0,price:5.5,image:"https://www.livingsmartandhealthy.com/wp-content/uploads/2020/07/Tomato-Ketchup-with-fresh-tomatoes10-500x500.jpg"},{id:8,name:"Bacon",nutFree:!0,lactoseFree:!0,price:7.75,image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg?crop=0.645xw:0.967xh;0.170xw,0.0204xh&resize=480:*"},{id:9,name:"Granola Bar",nutFree:!1,lactoseFree:!0,price:3.5,image:"https://thebigmansworld.com/wp-content/uploads/2019/03/vegan-granola-bars3.jpg"},{id:10,name:"Cabbage",nutFree:!0,lactoseFree:!0,price:1.5,image:"https://www.farmersalmanac.com/wp-content/uploads/2020/11/cabbage-health-benefits-AdobeStock_173509538.jpeg"}];function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v,y=function(e,t){var n=new FormData(e),r=n.getAll("category"),a=n.get("price");if(t.innerHTML="",r.length>0||a){var o=b(h,r,a);c(t,o)}else c(t,h)},b=function(e,t,n){var r=e.filter((function(e){var n,r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw o}}}}(t);try{for(r.s();!(n=r.n()).done;){var a=n.value;if("lactose-free"==a&&!e.lactoseFree)return!1;if("nut-free"==a&&!e.nutFree)return!1}}catch(e){r.e(e)}finally{r.f()}return!0}));return"low-to-high"==n?r.sort((function(e,t){return e.price-t.price})):"high-to-low"==n&&r.sort((function(e,t){return t.price-e.price})),r},w=function(e){var t=document.querySelector(".active-tab"),n=document.getElementById(e.target.value);t.id!==n.id&&(t.classList.remove("active-tab"),t.classList.add("inactive-tab"),n.classList.add("active-tab"),n.classList.remove("inactive-tab"))},L=document.getElementById("checkout-tab"),_=document.getElementById("checkout-button"),E=document.getElementById("filter"),F=document.getElementById("filter-clear"),k=document.getElementById("shop-products"),S=document.getElementById("shop-tab"),I=document.querySelectorAll(".tab__link");(v=localStorage.getItem(r))&&(n=new Map(JSON.parse(v))),o(n.size),c(k,h),E.addEventListener("submit",(function(e){e.preventDefault(),y(e.target,k)})),F.addEventListener("click",(function(){E.reset()})),S.addEventListener("click",(function(){y(E,k)})),L.addEventListener("click",(function(){!function(){var e=a();p.innerHTML="",e.forEach((function(e){var t=i(e,!0,f);p.appendChild(t)}))}(),m()})),_.addEventListener("click",(function(){n.clear(),localStorage.removeItem(r),o(0),u.innerHTML="",m()})),I.forEach((function(e){return e.addEventListener("click",w)}))})();
//# sourceMappingURL=bundle.js.map