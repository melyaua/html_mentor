(()=>{function t(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||e(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}$(document).ready((function(){var r=$(".tabs > .active"),n=$(".tab__content"),a=n.find(".active"),o=a.outerHeight();a.show(),n.height(o),$(".tabs > li").on("click",(function(){$(".tabs > li").removeClass("active"),$(this).addClass("active"),r=$(".tabs .active"),a.fadeOut(250,(function(){$(".tab__content > li").removeClass("active");var t=r.index();$(".tab__content > li").eq(t).addClass("active"),a=$(".tab__content > .active"),o=a.outerHeight(),n.stop().delay(50).animate({height:o},500,(function(){a.delay(50).fadeIn(250)}))}))})),$(".colors li").on("click",(function(){$(".colors > li").removeClass("active-color"),$(this).addClass("active-color");var t=$(this).attr("data-color");$(".bg-color").css("background-color",t),$(".text-color").css("color",t)}));var i,c=document.querySelectorAll(".tabs a"),l=document.querySelectorAll(".tabs-panel"),u=function(t,r){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=e(t))||r&&t&&"number"==typeof t.length){n&&(t=n);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,i=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw i}}}}(c);try{var s=function(){var e=i.value;e.addEventListener("click",(function(r){r.preventDefault(),document.querySelector(".tabs li.active").classList.remove("active"),document.querySelector(".tabs-panel.active").classList.remove("active");var n=e.parentElement;n.classList.add("active");var a=t(n.parentElement.children).indexOf(n);t(l).filter((function(t){return t.getAttribute("data-index")==a}))[0].classList.add("active")}))};for(u.s();!(i=u.n()).done;)s()}catch(t){u.e(t)}finally{u.f()}}))})();