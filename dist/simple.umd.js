({837:function(){function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function t(t){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?e(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function n(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=i(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==i(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(e){if("string"==typeof e)return r(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var c,a,l;c="undefined"!=typeof window?window:this,(l=function(e){return document.querySelector(e)}).click=function(e,t){var n;(n="string"==typeof e?l(e):e)?n.addEventListener("click",t):console.error('Element with selector "'.concat(e,'" not found.'))},l.dbclick=function(e,t){var n;(n="string"==typeof e?l(e):e)?"function"==typeof t?n.addEventListener("dblclick",t):console.error("Error: The second argument (callback) must be a function."):console.error('Element with selector "'.concat(e,'" not found.'))},l.hover=function(e,t){var n,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};(n="string"==typeof e?l(e):e)?"function"==typeof t?o&&"function"!=typeof o?console.error("Error: The second argument (callback2) must be a function."):(n.addEventListener("mouseover",t),n.addEventListener("mouseout",o)):console.error("Error: The first argument (callback) must be a function."):console.error('Element with selector "'.concat(e,'" not found.'))},l.show=function(e){var t;(t="string"==typeof e?l(e):e)?t.style.display="block":console.error('Element with selector "'.concat(e,'" not found.'))},l.hide=function(e){var t;(t="string"==typeof e?l(e):e)?t.style.display="none":console.error('Element with selector "'.concat(e,'" not found.'))},l.toggle=function(e){var t;(t="string"==typeof e?l(e):e)?"none"==t.style.display?t.style.display="block":t.style.display="none":console.error('Element with selector "'.concat(e,'" not found.'))},l.clone=function(e){var t,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(t="string"==typeof e?l(e):e)return t.cloneNode(n);console.error('Element with selector "'.concat(e,'" not found.'))},l.cloneAppend=function(e){var t,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(t="string"==typeof e?l(e):e){var o=t.cloneNode(n);return t.parentNode.insertBefore(o,t.nextSibling),o}console.error('Element with selector "'.concat(e,'" not found.'))},l.addClass=function(e){var t,n;if(n="string"==typeof e?l(e):e){for(var o=arguments.length,r=new Array(o>1?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];return(t=n.classList).add.apply(t,r)}console.error('Element with selector "'.concat(e,'" not found.'))},l.removeClass=function(e){var t,n;if(n="string"==typeof e?l(e):e){for(var o=arguments.length,r=new Array(o>1?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];return(t=n.classList).remove.apply(t,r)}console.error('Element with selector "'.concat(e,'" not found.'))},l.toggleClass=function(e){var t,n;if(n="string"==typeof e?l(e):e){for(var o=arguments.length,r=new Array(o>1?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];return(t=n.classList).toggle.apply(t,r)}console.error('Element with selector "'.concat(e,'" not found.'))},l.css=function(e,t,n){var o;(o="string"==typeof e?l(e):e)?t&&void 0!==n?o.style[t]=n:console.error("Property and value are required."):console.error('Element with selector "'.concat(e,'" not found.'))},l.text=function(e,t){var n;if(n="string"==typeof e?l(e):e)return n.textContent=t;console.error('Element with selector "'.concat(e,'" not found.'))},l.html=function(e,t){var n,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(n="string"==typeof e?l(e):e)return n.innerHTML=o?n.innerHTML+t:t;console.error('Element with selector "'.concat(e,'" not found.'))},l.scrollTo=function(e){var t;if(t="string"==typeof e?l(e):e)return t.scrollIntoView({behavior:"smooth"});console.error('Element with selector "'.concat(e,'" not found.'))},l.toLink=function(e){window.location.href=e},l.on=function(e,t,n){var o;(o="string"==typeof e?l(e):e)?o instanceof NodeList||Array.isArray(o)?o.forEach((function(e){e.addEventListener(t,n)})):o instanceof HTMLElement&&o.addEventListener(t,n):console.error('Element with selector "'.concat(e,'" not found.'))},l.off=function(e,t,n){var o;(o="string"==typeof e?l(e):e)?o instanceof NodeList||Array.isArray(o)?o.forEach((function(e){e.removeEventListener(t,n)})):o instanceof HTMLElement&&o.removeEventListener(t,n):console.error('Element with selector "'.concat(e,'" not found.'))},l.clipboard=function(e){return e?((arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){})(),navigator.clipboard.writeText(e)):console.error("text should not be empty")},l.device=function(){var e=navigator.userAgent||navigator.vendor||window.opera;return/android|iphone|ipad|ipod|windows phone/i.test(e)?"mobile":"desktop"},l.shuffleArray=function(e){if("object"!==i(e))return console.error("must be an array");if(e.length<2)return console.error("array length must be greater > 1");for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),o=[e[n],e[t]];e[t]=o[0],e[n]=o[1]}return e},l.metadata=function(e){if(e.title&&(document.title=e.title),e.description){var t=document.querySelector("meta[name='description']");t?t.setAttribute("content",e.description):((t=document.createElement("meta")).setAttribute("name","description"),t.setAttribute("content",e.description),document.head.appendChild(t))}if(e.keywords){var n=document.querySelector("meta[name='keywords']");n?n.setAttribute("content",e.keywords):((n=document.createElement("meta")).setAttribute("name","keywords"),n.setAttribute("content",e.keywords),document.head.appendChild(n))}if(e.author){var o=document.querySelector("meta[name='author']");o?o.setAttribute("content",e.author):((o=document.createElement("meta")).setAttribute("name","author"),o.setAttribute("content",e.author),document.head.appendChild(o))}if(e.ogTitle){var r=document.querySelector("meta[property='og:title']");r?r.setAttribute("content",e.ogTitle):((r=document.createElement("meta")).setAttribute("property","og:title"),r.setAttribute("content",e.ogTitle),document.head.appendChild(r))}if(e.ogDescription){var i=document.querySelector("meta[property='og:description']");i?i.setAttribute("content",e.ogDescription):((i=document.createElement("meta")).setAttribute("property","og:description"),i.setAttribute("content",e.ogDescription),document.head.appendChild(i))}if(e.ogImage){var c=document.querySelector("meta[property='og:image']");c?c.setAttribute("content",e.ogImage):((c=document.createElement("meta")).setAttribute("property","og:image"),c.setAttribute("content",e.ogImage),document.head.appendChild(c))}if(e.twitterTitle){var a=document.querySelector("meta[name='twitter:title']");a?a.setAttribute("content",e.twitterTitle):((a=document.createElement("meta")).setAttribute("name","twitter:title"),a.setAttribute("content",e.twitterTitle),document.head.appendChild(a))}if(e.twitterDescription){var l=document.querySelector("meta[name='twitter:description']");l?l.setAttribute("content",e.twitterDescription):((l=document.createElement("meta")).setAttribute("name","twitter:description"),l.setAttribute("content",e.twitterDescription),document.head.appendChild(l))}if(e.twitterImage){var s=document.querySelector("meta[name='twitter:image']");s?s.setAttribute("content",e.twitterImage):((s=document.createElement("meta")).setAttribute("name","twitter:image"),s.setAttribute("content",e.twitterImage),document.head.appendChild(s))}if(e.robots){var u=document.querySelector("meta[name='robots']");u?u.setAttribute("content",e.robots):((u=document.createElement("meta")).setAttribute("name","robots"),u.setAttribute("content",e.robots),document.head.appendChild(u))}if(e.favicon){var d=document.querySelector("link[rel='icon']");d?d.setAttribute("href",e.favicon):((d=document.createElement("link")).setAttribute("rel","icon"),d.setAttribute("href",e.favicon),document.head.appendChild(d))}if(e.appleTouchIcon){var f=document.querySelector("link[rel='apple-touch-icon']");f?f.setAttribute("href",e.appleTouchIcon):((f=document.createElement("link")).setAttribute("rel","apple-touch-icon"),f.setAttribute("href",e.appleTouchIcon),document.head.appendChild(f))}if(e.themeColor){var m=document.querySelector("meta[name='theme-color']");m?m.setAttribute("content",e.themeColor):((m=document.createElement("meta")).setAttribute("name","theme-color"),m.setAttribute("content",e.themeColor),document.head.appendChild(m))}},l.textTime=function(e,t,n,o){var r;if(r="string"==typeof e?l(e):e)return t?n&&o?"string"!=typeof t?console.error("text must be a string"):"number"!=typeof n||"number"!=typeof o?console.error("delay or duration must be a number"):void setTimeout((function(){var e=0,n=o/t.length,i=setInterval((function(){r.textContent=t.slice(0,e),++e>t.length&&clearInterval(i)}),n)}),n):console.error("delay or duration should not be empty"):console.error("text should not be empty");console.error('Element with selector "'.concat(e,'" not found.'))},l.textTimeConsole=function(e,t){return e?t?"string"!=typeof e?console.error("text must be a string"):"number"!=typeof t?console.error("delay must be a number"):void setTimeout((function(){console.log(e)}),t):console.error("delay should not be empty"):console.error("text should not be empty")},l.highlightText=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"yellow",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"black";if("string"!=typeof e||"string"!=typeof t)return console.error("bgColor or textColor must be a string");var n=window.getSelection().getRangeAt(0),o=document.createElement("span");o.style.backgroundColor=e,o.style.color=t,n.surroundContents(o)},l.copy=function(e,t){var n;(n="string"==typeof e?l(e):e)?"function"==typeof t?n.addEventListener("copy",t):console.error("Error: The second argument (callback) must be a function. Use it like: Simple.copy('#selector', () => alert('hello'))"):console.error('Element with selector "'.concat(e,'" not found.'))},l.textSpeech=function(e){if(e||"string"==typeof e){if(!("speechSynthesis"in window))return console.log("The browser does not support Speech Synthesis.");window.getSelection().toString();var t=new SpeechSynthesisUtterance(e);window.speechSynthesis.speak(t)}else{if(!("speechSynthesis"in window))return console.log("The browser does not support Speech Synthesis.");var n=window.getSelection().toString(),o=new SpeechSynthesisUtterance(n);window.speechSynthesis.speak(o)}},l.useId=(a=1,function(){return"".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"j","-").concat(a++)}),l.Button=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=document.createElement("button");return n.textContent=e.text||"Default Button",n.style.backgroundColor=e.color||"black",n.style.fontWeight="bold",n.style.color=e.colorText||"white",n.style.borderRadius="9999px",n.style.fontSize=e.size||"16px",n.style.border="0",n.style.padding="10px 20px",n.innerHTML=e.icon?'<i class="'.concat(e.icon,'"></i> ').concat(n.textContent):n.textContent,n.style.transition=e.smooth?"all .2s":"",e.transition&&(e.transition.includes("s")?n.style.transition="all ".concat(e.transition):n.style.transition="all ".concat(e.transition,"s")),n.classList.add(t||"button_".concat(l.useId())),l.hover(n,(function(){"scale"===e.hoverEffect&&(n.style.transform="scale(1.1)")}),(function(){n.style.transform="scale(1)"})),n},l.dragAndDrop=function(e,t){var n=l(e);if(n)if(n.id=l.useId("drag"),n.draggable=!0,n.addEventListener("dragstart",(function(e){e.dataTransfer.setData("text/plain",n.id)})),t){var o=document.body.querySelectorAll(t);if(!o)return void console.error("Drop zone tidak ditemukan!");o.forEach((function(e){e.addEventListener("dragover",(function(e){e.preventDefault()})),e.addEventListener("drop",(function(t){t.preventDefault();var n=t.dataTransfer.getData("text/plain"),o=document.getElementById(n);e.appendChild(o)}))}))}else{var r=document.body.querySelectorAll("*");if(!r)return void console.error("Drop zone tidak ditemukan!");r.forEach((function(e){e.addEventListener("dragover",(function(e){e.preventDefault()})),e.addEventListener("drop",(function(t){t.preventDefault();var n=t.dataTransfer.getData("text/plain"),o=document.getElementById(n);e.appendChild(o)}))}))}else console.error("Elemen tidak ditemukan!")},l.formatNumber=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id-ID";return e&&"number"==typeof e?new Intl.NumberFormat(t).format(e):console.error("number is empty or type of number is not number")},l.create=function(e,t,n){var o;if(o="string"==typeof e?l(e):e){if("string"!=typeof t||!t)return console.error("newElement is empty or not string");var r=document.createElement(t);return r.innerHTML=n,o.appendChild(r),r}console.error('Element with selector "'.concat(e,'" not found.'))},l.typing=function(e,t){var n,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;if(n="string"==typeof e?l(e):e){var i=0,c=!0;n.style.display="inline-block",n.style.borderRight="1.5px black solid",function e(){c?(n.textContent+=t[i],++i===t.length?(c=!1,setTimeout(e,r)):setTimeout(e,o)):(n.textContent=t.substring(0,i),--i<0?(c=!0,i=0,setTimeout(e,r)):setTimeout(e,o))}()}else console.error('Element with selector "'.concat(e,'" not found.'))},l.scrollToBottom=function(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})},l.scrollToTop=function(){window.scrollTo({top:0,behavior:"smooth"})},l.triggerScroll=function(e,t,n){var r,i;(r="string"==typeof e?l(e):e)?(i="string"==typeof t?l(t):t)?new IntersectionObserver((function(e){var t,r;(t=e,r=1,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,c,a=[],l=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(o=i.call(n)).done)&&(a.push(o.value),a.length!==t);l=!0);}catch(e){s=!0,r=e}finally{try{if(!l&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(s)throw r}}return a}}(t,r)||o(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0].isIntersecting?l.addClass(i,n):l.removeClass(i,n)}),{threshold:.9}).observe(r):console.error('Element with selector "'.concat(t,'" not found.')):console.error('Element with selector "'.concat(e,'" not found.'))},l.randomColor=function(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))},l.capitalize=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},l.arrayUnique=function(e){return function(e){if(Array.isArray(e))return r(e)}(t=new Set(e))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||o(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();var t},l.getRandomInt=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},l.deepMerge=function(e,n){for(var o in n)n[o]instanceof Object&&Object.assign(n[o],l.deepMerge(e[o]||{},n[o]));return t(t({},e),n)},l.hexToRGB=function(e){var t=parseInt(e.replace("#",""),16);return{r:t>>16&255,g:t>>8&255,b:255&t}},l.rgbToHex=function(e,t,n){return"#".concat(((1<<24)+(e<<16)+(t<<8)+n).toString(16).slice(1).toUpperCase())},l.encrypt=function(e){return btoa(unescape(encodeURIComponent(e)))},l.decrypt=function(e){return decodeURIComponent(escape(atob(e)))},l.generateGradient=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"right",t=l.randomColor(),n=l.randomColor();return"linear-gradient(to ".concat(e,", ").concat(t,", ").concat(n,")")},l.limitText=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return e.length>t?e.slice(0,t)+"...":e},l.setCookie=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7,o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3),document.cookie="".concat(e,"=").concat(t,";expires=").concat(o.toUTCString(),";path=/")},l.getCookie=function(e){var t=document.cookie.match(new RegExp("(^| )"+e+"=([^;]+)"));return t?t[2]:null},c.Simple=l}})[837]();