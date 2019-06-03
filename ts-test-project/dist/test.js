/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/test.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../dist/editor.min.js":
/*!*****************************!*\
  !*** ../dist/editor.min.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var o,i=function(){function t(t){var e=this;this.editor=t,this.elem=document.createElement("div"),this.container=document.createElement("div"),this.deleteButton=document.createElement("span"),this.deleteIcon=document.createElement("div"),this.control=new g(t,this),this.elem.classList.add("editor-block"),this.elem.appendChild(this.control.elem),this.elem.addEventListener("click",function(){this.focus(),this.editor.showDeleteButton(this)}.bind(this)),this.elem.appendChild(this.container),this.container.classList.add("editor-block__container"),this.container.appendChild(this.deleteButton),this.deleteButton.classList.add("editor-block__container__delete-button"),this.deleteButton.innerHTML='<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="12" height="13"  viewBox="0 0 448 512"><path fill="currentColor" d="M192 188v216c0 6.627-5.373 12-12 12h-24c-6.627 0-12-5.373-12-12V188c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12zm100-12h-24c-6.627 0-12 5.373-12 12v216c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12V188c0-6.627-5.373-12-12-12zm132-96c13.255 0 24 10.745 24 24v12c0 6.627-5.373 12-12 12h-20v336c0 26.51-21.49 48-48 48H80c-26.51 0-48-21.49-48-48V128H12c-6.627 0-12-5.373-12-12v-12c0-13.255 10.745-24 24-24h74.411l34.018-56.696A48 48 0 0 1 173.589 0h100.823a48 48 0 0 1 41.16 23.304L349.589 80H424zm-269.611 0h139.223L276.16 50.913A6 6 0 0 0 271.015 48h-94.028a6 6 0 0 0-5.145 2.913L154.389 80zM368 128H80v330a6 6 0 0 0 6 6h276a6 6 0 0 0 6-6V128z"></path></svg>',this.deleteButton.appendChild(this.deleteIcon),this.deleteButton.onclick=function(){e.editor.remove(e)}}return t.prototype.focus=function(){this.editor.showDeleteButton(this)},t.prototype.enableNewLinePrevention=function(t){t.addEventListener("keypress",function(t){13==t.keyCode&&t.preventDefault()})},t.prototype.enableAutoresizing=function(t){t.addEventListener("input",function(){t.style.height="auto",t.style.height=t.scrollHeight+"px"}),window.addEventListener("DOMContentLoaded",function(){var e=document.createEvent("Event");e.initEvent("input",!0,!0),t.dispatchEvent(e)},!1)},t}(),a=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=function(){function t(){}return t.prototype.canParse=function(t){return"image"==t.type},t.prototype.parse=function(t,e){return new l(e,t.url)},t}(),l=function(t){function e(e,n){var o=t.call(this,e)||this;return o.editor=e,o.url=n,o.uploadPanel=document.createElement("div"),o.uploadIcon=document.createElement("div"),o.uploadLabel=document.createElement("div"),o.uploadButton=document.createElement("button"),o.loadingIcon=document.createElement("span"),o.inputFile=document.createElement("input"),o.imagePanel=document.createElement("div"),o.img=document.createElement("img"),o.elem.classList.add("editor-block__image"),o.img.classList.add("editor-block__image__img"),o.elem.appendChild(o.uploadPanel),o.elem.appendChild(o.imagePanel),o.uploadPanel.appendChild(o.inputFile),o.uploadPanel.appendChild(o.uploadButton),o.uploadPanel.appendChild(o.uploadIcon),o.uploadPanel.appendChild(o.uploadLabel),o.uploadPanel.appendChild(o.loadingIcon),o.imagePanel.appendChild(o.img),o.uploadPanel.classList.add("editor-block__image__upload-panel"),o.uploadIcon.classList.add("editor-block__image__upload-panel__icon"),o.uploadButton.classList.add("editor-block__image__upload-panel__button"),o.inputFile.classList.add("editor-block__image__upload-panel__input"),o.uploadIcon.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="53" height="42" viewBox="0 0 53 42">\n    <defs>\n        <path id="b" d="M13 0v29h30V0h20v53H0V0h13z"/>\n        <rect id="a" width="53" height="34" x="5" y="12" rx="2"/>\n        <mask id="d" width="53" height="34" x="0" y="0" fill="#fff">\n            <use xlink:href="#a"/>\n        </mask>\n    </defs>\n    <g fill="none" fill-rule="evenodd" transform="translate(-5 -4)">\n        <mask id="c" fill="#fff">\n            <use xlink:href="#b"/>\n        </mask>\n        <g fill-rule="nonzero" stroke="#666" stroke-dasharray="4,2" stroke-width="4" mask="url(#c)">\n            <use mask="url(#d)" xlink:href="#a"/>\n        </g>\n        <path fill="#666" fill-rule="nonzero" d="M15.283 4C14.035 4 13 5.088 13 6.4v19.2c0 1.312 1.035 2.4 2.283 2.4h25.434C41.965 28 43 26.912 43 25.6V6.4C43 5.088 41.965 4 40.717 4H15.283zm.042 2h25.35c.197 0 .325.135.325.344V20l-4.916-4.155a.96.96 0 0 0-1.157-.054l-4.611 3.35-6.257-5.357a.95.95 0 0 0-.72-.226.95.95 0 0 0-.448.183L15 19.495V6.344c0-.209.128-.344.325-.344zM30 9c-1.645 0-3 1.355-3 3s1.355 3 3 3 3-1.355 3-3-1.355-3-3-3zm0 2c.564 0 1 .436 1 1 0 .564-.436 1-1 1-.564 0-1-.436-1-1 0-.564.436-1 1-1zm-6.59 5l6.256 5.32a.963.963 0 0 0 1.157.054l4.601-3.333L41 22.73v2.927c0 .207-.128.342-.325.342h-25.35c-.197 0-.325-.135-.325-.342V22.1l8.41-6.1z"/>\n        <path stroke="#666" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M34 24l-3 11h4l1 5h3l-1-5h4z"/>\n    </g>\n</svg>\n',o.isAdvancedUpload()?o.uploadLabel.innerHTML="Drag and drop a photo to upload or tap to upload":o.uploadLabel.innerHTML="Tap to upload",o.uploadPanel.onclick=function(){o.inputFile.click()},["dragenter","dragover","dragleave","drop"].forEach(function(t){o.uploadPanel.addEventListener(t,o.preventDefaults,!1)}),["dragenter","dragover"].forEach(function(t){o.uploadPanel.addEventListener(t,function(){o.uploadPanel.classList.add("editor-block__image__upload-panel--active")})}),["dragleave","drop"].forEach(function(t){o.uploadPanel.addEventListener(t,function(){o.uploadPanel.classList.remove("editor-block__image__upload-panel--active")})}),o.uploadPanel.addEventListener("drop",function(t){var e=t.dataTransfer.files;o.handleFiles(e)}),o.loadingIcon.innerHTML="Uploading image...",o.stopLoading(),o.uploadButton.innerHTML="Upload image",o.uploadButton.onclick=function(){o.inputFile.click()},o.inputFile.type="file",o.inputFile.onchange=function(t){var e=t.target;o.handleFiles(e.files)},o.updateView(),o}return a(e,t),e.prototype.handleFiles=function(t){var e=this;if(0!=t.length){this.startLoading();this.editor.options.uploadImage(t[0],function(t){e.stopLoading(),e.url=t,e.updateView()},function(t){e.stopLoading()}),this.inputFile.value=""}},e.prototype.preventDefaults=function(t){t.preventDefault(),t.stopPropagation()},e.prototype.startLoading=function(){this.uploadLabel.style.display="none",this.loadingIcon.style.display="inline-block"},e.prototype.stopLoading=function(){this.uploadLabel.style.display="inline-block",this.loadingIcon.style.display="none"},e.prototype.isAdvancedUpload=function(){return"draggable"in this.uploadPanel||"ondragstart"in this.uploadPanel&&"ondrop"in this.uploadPanel},e.prototype.updateView=function(){this.url?(this.img.src=this.url,this.imagePanel.style.display="block",this.uploadPanel.style.display="none"):(this.imagePanel.style.display="none",this.uploadPanel.style.display="block")},e.prototype.focus=function(){t.prototype.focus.call(this)},e.prototype.getRawContent=function(){return{type:"image",url:this.url}},e}(i),d=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),s=function(){function t(){}return t.prototype.canParse=function(t){return"quote"==t.type},t.prototype.parse=function(t,e){return new c(e,t.content)},t}(),c=function(t){function e(e,n){var o=t.call(this,e)||this;return o.editor=e,o.content=n,o.textarea=document.createElement("textarea"),o.elem.classList.add("editor-block__text"),o.elem.appendChild(o.textarea),o.textarea.classList.add("editor-block__container__editor","editor-block__quote"),o.textarea.placeholder="Quote",o.textarea.rows=1,o.textarea.innerHTML=o.content,o.enableNewLinePrevention(o.textarea),o.enableAutoresizing(o.textarea),o}return d(e,t),e.prototype.focus=function(){t.prototype.focus.call(this),this.textarea.focus()},e.prototype.getRawContent=function(){return{type:"quote",content:this.textarea.value}},e}(i),u=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),p=function(){function t(){}return t.prototype.canParse=function(t){return"header"==t.type},t.prototype.parse=function(t,e){return new h(e,t.content)},t}(),h=function(t){function e(e,n){var o=t.call(this,e)||this;return o.editor=e,o.content=n,o.textarea=document.createElement("textarea"),o.elem.classList.add("editor-block","editor-block__text"),o.elem.appendChild(o.textarea),o.textarea.classList.add("editor-block__container__editor","editor-block__header"),o.textarea.placeholder="Header",o.textarea.rows=1,o.textarea.innerHTML=o.content,o.enableNewLinePrevention(o.textarea),o.enableAutoresizing(o.textarea),o}return u(e,t),e.prototype.focus=function(){t.prototype.focus.call(this),this.textarea.focus()},e.prototype.getRawContent=function(){return{type:"header",content:this.textarea.value}},e}(i),f=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),v=function(){function t(){}return t.prototype.canParse=function(t){return"text"==t.type},t.prototype.parse=function(t,e){return new m(e,t.content)},t}(),m=function(t){function e(e,n){var o=t.call(this,e)||this;return o.editor=e,o.content=n,o.textarea=document.createElement("textarea"),o.elem.classList.add("editor-block__text"),o.elem.appendChild(o.textarea),o.textarea.classList.add("editor-block__container__editor","editor-block__body"),o.textarea.placeholder="Body text",o.textarea.rows=1,o.textarea.innerHTML=o.content,o.enableAutoresizing(o.textarea),o}return f(e,t),e.prototype.focus=function(){t.prototype.focus.call(this),this.textarea.focus()},e.prototype.getRawContent=function(){return{type:"text",content:this.textarea.value}},e}(i),_=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),y=function(){function t(){}return t.prototype.canParse=function(t){return"video"==t.type},t.prototype.parse=function(t,e){return new b(e,t.url)},t}(),b=function(t){function e(e,n){var o=t.call(this,e)||this;return o.editor=e,o.videoUrl=n,o.uploadPanel=document.createElement("div"),o.inputTextContainer=document.createElement("div"),o.inputTextLabel=document.createElement("div"),o.inputTextIcon=document.createElement("span"),o.inputText=document.createElement("input"),o.videoPanel=document.createElement("div"),o.videoElem=document.createElement("video"),o.videoIframe=document.createElement("iframe"),o.elem.classList.add("editor-block__video"),o.videoElem.classList.add("editor-block__video__video-elem"),o.elem.appendChild(o.uploadPanel),o.elem.appendChild(o.videoPanel),o.videoPanel.appendChild(o.videoElem),o.videoPanel.appendChild(o.videoIframe),o.videoIframe.frameBorder="0",o.uploadPanel.appendChild(o.inputTextLabel),o.uploadPanel.appendChild(o.inputTextContainer),o.inputTextContainer.appendChild(o.inputTextIcon),o.inputTextContainer.appendChild(o.inputText),o.uploadPanel.classList.add("editor-block__video__upload-panel"),o.inputTextContainer.classList.add("editor-block__video__upload-panel__input-container"),o.inputTextLabel.classList.add("editor-block__video__upload-panel__input-container__label"),o.inputTextIcon.classList.add("editor-block__video__upload-panel__input-container__icon"),o.inputText.classList.add("editor-block__video__upload-panel__input-container__input"),o.videoIframe.classList.add("js-video-iframe"),o.inputTextLabel.innerHTML="Or, upload a Youtube or Vimeo video",o.inputTextIcon.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20"><g fill="#666" fill-rule="evenodd"><path d="M6.25 0C4.915 0 3.9-.004 3.06.092 2.222.188 1.485.397.939.952c-.545.554-.75 1.305-.846 2.16C-.002 3.969 0 5.003 0 6.365v7.272c0 1.36-.004 2.393.09 3.248.095.855.3 1.606.845 2.16.544.556 1.282.766 2.122.862.84.097 1.856.094 3.193.094h12.5c1.336 0 2.35.004 3.19-.092.84-.096 1.577-.305 2.122-.86.545-.554.75-1.305.846-2.16.095-.856.092-1.89.092-3.252V6.364c0-1.36.004-2.393-.09-3.248-.095-.855-.3-1.605-.845-2.16C23.521.4 22.783.19 21.943.093 21.103-.002 20.087 0 18.75 0H6.25zm0 1.818h12.5c1.336 0 2.327.005 2.993.082.665.076.934.21 1.06.339.126.129.256.402.331 1.08.075.677.08 1.685.08 3.045v7.272c0 1.361-.005 2.37-.08 3.047-.075.678-.207.951-.333 1.08-.126.128-.394.261-1.06.337-.666.076-1.656.082-2.99.082H6.25c-1.337 0-2.327-.005-2.993-.082-.666-.076-.934-.21-1.06-.339-.127-.129-.257-.402-.332-1.08-.075-.677-.08-1.685-.08-3.045V6.364c0-1.361.005-2.37.08-3.047.075-.678.207-.951.333-1.08.126-.128.395-.261 1.06-.337.666-.076 1.656-.082 2.991-.082z"/><path d="M8.744 4.192a1.369 1.369 0 0 0-.708 1.202v9.212c0 .5.271.965.708 1.202.434.236.965.21 1.374-.067l6.784-4.606h.001a1.376 1.376 0 0 0-.001-2.27c-1.428-.968-5.216-3.54-6.784-4.605a1.324 1.324 0 0 0-1.374-.068zm1.078 2.05c1.61 1.094 4.078 2.77 5.535 3.758l-5.535 3.757V6.243z"/></g></svg>',o.inputText.type="text",o.inputText.value=n,o.inputText.onchange=function(t){o.videoUrl=o.inputText.value.trim(),o.updateView()},o.updateView(),o}return _(e,t),e.extractYoutubeId=function(t){var e=t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/);return e?e[2]:null},e.extractVimeoId=function(t){var e=t.match(/^.+vimeo.com\/(.*\/)?([^#\?]*)/);return e?e[2]||e[1]:null},e.prototype.updateView=function(){if(this.videoUrl){if(this.videoUrl.includes("cloudinary"))this.videoElem.src=this.videoUrl,this.videoPanel.style.display="block",this.videoIframe.style.display="none",this.uploadPanel.style.display="none";else if(this.videoUrl.includes("youtube")){var t=e.extractYoutubeId(this.videoUrl);this.videoIframe.src="https://www.youtube.com/embed/"+t+"?rel=0",this.videoIframe.width="560",this.videoIframe.height="315",this.videoPanel.style.display="block",this.videoElem.style.display="none",this.uploadPanel.style.display="none"}else if(this.videoUrl.includes("vimeo")){var n=e.extractVimeoId(this.videoUrl);this.videoIframe.src="https://player.vimeo.com/video/"+n+"?color=ec7070&portrait=0",this.videoIframe.width="640",this.videoIframe.height="240",this.videoPanel.style.display="block",this.videoElem.style.display="none",this.uploadPanel.style.display="none"}}else this.videoPanel.style.display="none",this.uploadPanel.style.display="block"},e.prototype.focus=function(){t.prototype.focus.call(this)},e.prototype.getRawContent=function(){return{type:"video",url:this.videoUrl}},e}(i),g=function(){function t(t,e){var n=this;this.editor=t,this.block=e,this.elem=document.createElement("div"),this.dashboard=document.createElement("div"),this.expandHandle=document.createElement("div"),this.expandButton=document.createElement("div"),this.quoteButton=document.createElement("div"),this.headerButton=document.createElement("div"),this.textButton=document.createElement("div"),this.elem.classList.add("editor-control"),this.elem.appendChild(this.expandHandle),this.expandHandle.classList.add("editor-control__expand-handle","js-expand-handle"),this.expandHandle.appendChild(this.expandButton),this.expandButton.classList.add("editor-control__expand-handle__button"),this.expandButton.innerHTML="+ ADD",this.expandHandle.onclick=function(){n.toggleDashboard()},this.elem.appendChild(this.dashboard),this.dashboard.classList.add("editor-control__dashboard"),this.dashboard.appendChild(this.headerButton),this.headerButton.classList.add("editor-control__dashboard__button","js-header-button"),this.headerButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14"><text fill="#666" fill-rule="evenodd" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="20" font-weight="bold" transform="translate(-48 -33)"><tspan x="46.98" y="47">H1</tspan></text></svg><p>Header Text</p>',this.headerButton.onclick=function(){t.add(new h(t,""),n.block),n.collapseAll()},this.dashboard.appendChild(this.quoteButton),this.quoteButton.classList.add("editor-control__dashboard__button","js-quote-button"),this.quoteButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15"><path fill="#666" fill-rule="evenodd" d="M6.881 14.195H.511V9.64c0-1.843.163-3.298.488-4.363.325-1.065.926-2.021 1.802-2.867C3.677 1.562 4.796.898 6.156.414l1.246 2.63c-1.269.422-2.18 1.012-2.731 1.767-.552.756-.842 1.76-.873 3.015h3.083v6.37zm10.63 0h-6.369V9.64c0-1.858.163-3.317.488-4.374.325-1.058.929-2.01 1.813-2.856.884-.847 1.998-1.511 3.343-1.995l1.247 2.63c-1.27.422-2.18 1.012-2.731 1.767-.552.756-.843 1.76-.873 3.015h3.083v6.37z"/></svg><p>Quote<p>',this.quoteButton.onclick=function(){t.add(new c(t,""),n.block),n.collapseAll()},this.dashboard.appendChild(this.textButton),this.textButton.classList.add("editor-control__dashboard__button","js-text-button"),this.textButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16"><text fill="#666" fill-rule="evenodd" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="20" transform="translate(-146 -32)"> <tspan x="144.57" y="47">Bd</tspan> </text></svg><p>Body Text</p>',this.textButton.onclick=function(){t.add(new m(t,""),n.block),n.collapseAll()},this.editor.options.uploadImage&&(this.imageButton=document.createElement("div"),this.dashboard.appendChild(this.imageButton),this.imageButton.classList.add("editor-control__dashboard__button","js-image-button"),this.imageButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20"><path fill="#666" fill-rule="nonzero" d="M1.902 0C.862 0 0 .907 0 2v16c0 1.093.862 2 1.902 2h21.196c1.04 0 1.902-.907 1.902-2V2c0-1.093-.862-2-1.902-2H1.902zm0 1.714h21.196c.164 0 .272.113.272.286v11.357l-4.11-3.455a.805.805 0 0 0-.969-.045l-3.855 2.786-5.23-4.455A.798.798 0 0 0 8.601 8a.796.796 0 0 0-.373.152L1.63 12.937V2c0-.173.108-.286.272-.286zM14.402 4c-1.34 0-2.445 1.161-2.445 2.571 0 1.41 1.104 2.572 2.445 2.572 1.341 0 2.446-1.162 2.446-2.572 0-1.41-1.105-2.571-2.446-2.571zm0 1.714c.46 0 .815.374.815.857 0 .484-.355.858-.815.858-.46 0-.815-.374-.815-.858 0-.483.355-.857.815-.857zM8.662 9.93l5.23 4.446a.805.805 0 0 0 .969.045l3.847-2.786 4.662 3.92V18c0 .173-.108.286-.272.286H1.902c-.164 0-.272-.113-.272-.286v-2.973l7.032-5.098z"/></svg><p>Image</p>',this.imageButton.onclick=function(){t.add(new l(t,""),n.block),n.collapseAll()}),this.videoButton=document.createElement("div"),this.dashboard.appendChild(this.videoButton),this.videoButton.classList.add("editor-control__dashboard__button","js-video-button"),this.videoButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20"><g fill="#666" fill-rule="evenodd"><path d="M6.25 0C4.915 0 3.9-.004 3.06.092 2.222.188 1.485.397.939.952c-.545.554-.75 1.305-.846 2.16C-.002 3.969 0 5.003 0 6.365v7.272c0 1.36-.004 2.393.09 3.248.095.855.3 1.606.845 2.16.544.556 1.282.766 2.122.862.84.097 1.856.094 3.193.094h12.5c1.336 0 2.35.004 3.19-.092.84-.096 1.577-.305 2.122-.86.545-.554.75-1.305.846-2.16.095-.856.092-1.89.092-3.252V6.364c0-1.36.004-2.393-.09-3.248-.095-.855-.3-1.605-.845-2.16C23.521.4 22.783.19 21.943.093 21.103-.002 20.087 0 18.75 0H6.25zm0 1.818h12.5c1.336 0 2.327.005 2.993.082.665.076.934.21 1.06.339.126.129.256.402.331 1.08.075.677.08 1.685.08 3.045v7.272c0 1.361-.005 2.37-.08 3.047-.075.678-.207.951-.333 1.08-.126.128-.394.261-1.06.337-.666.076-1.656.082-2.99.082H6.25c-1.337 0-2.327-.005-2.993-.082-.666-.076-.934-.21-1.06-.339-.127-.129-.257-.402-.332-1.08-.075-.677-.08-1.685-.08-3.045V6.364c0-1.361.005-2.37.08-3.047.075-.678.207-.951.333-1.08.126-.128.395-.261 1.06-.337.666-.076 1.656-.082 2.991-.082z"/><path d="M8.744 4.192a1.369 1.369 0 0 0-.708 1.202v9.212c0 .5.271.965.708 1.202.434.236.965.21 1.374-.067l6.784-4.606h.001a1.376 1.376 0 0 0-.001-2.27c-1.428-.968-5.216-3.54-6.784-4.605a1.324 1.324 0 0 0-1.374-.068zm1.078 2.05c1.61 1.094 4.078 2.77 5.535 3.758l-5.535 3.757V6.243z"/></g></svg><p>Video</p>',this.videoButton.onclick=function(){t.add(new b(t,""),n.block)}}return t.prototype.toggleDashboard=function(){"0px"==this.dashboard.style.maxHeight?this.expandDashboard():this.collapseDashboard()},t.prototype.collapseDashboard=function(){this.dashboard.style.maxHeight="0px",this.expandButton.innerHTML="+ ADD"},t.prototype.expandDashboard=function(){this.collapseAll(),this.dashboard.style.maxHeight=this.dashboard.scrollHeight+30+"px",this.expandButton.innerHTML="HIDE"},t.prototype.collapseAll=function(){for(var t=0;t<this.editor.blocks.length;t++)this.editor.blocks[t].control.collapseDashboard();this.editor.lastControl.collapseDashboard()},t}(),x=[new v,new p,new s,new r,new y];var w=function(){function t(t,e){this.elem=t,this.options=e,this.blocks=function(t,e){for(var n=[],o=0,i=t;o<i.length;o++){for(var a=i[o],r=!1,l=0,d=x;l<d.length;l++){var s=d[l];if(s.canParse(a)){r=!0,n.push(s.parse(a,e));break}}r||console.warn("Unrecognized block type: '"+a.type+"'. Ignore.")}return n}(this.options.content,this),this.render()}return t.prototype.add=function(t,e){if(e){for(var n=0;n<this.blocks.length;n++)if(e==this.blocks[n]){this.blocks.splice(n,0,t);break}this.elem.insertBefore(t.elem,e.elem)}else this.blocks.push(t),this.elem.insertBefore(t.elem,this.lastControl.elem);t.focus(),t.control.expandDashboard()},t.prototype.remove=function(t){for(var e=0;e<this.blocks.length;e++)if(t==this.blocks[e]){this.blocks.splice(e,1),t.elem.remove();break}},t.prototype.getContent=function(){for(var t=[],e=0,n=this.blocks;e<n.length;e++){var o=n[e];t.push(o.getRawContent())}return t},t.prototype.showDeleteButton=function(t){for(var e=0;e<this.blocks.length;e++)this.blocks[e].deleteButton.style.display="none",t==this.blocks[e]&&(this.blocks[e].deleteButton.style.display="inline-block")},t.prototype.render=function(){for(var t=0,e=this.blocks;t<e.length;t++){var n=e[t];this.elem.appendChild(n.elem)}this.lastControl=new g(this,null),this.elem.appendChild(this.lastControl.elem),this.lastControl.expandDashboard()},t}();n.d(e,"Editor",function(){return w}),window.installEditor=function(t,e){return void 0===e&&(e={}),new w(t,e)}}])});

/***/ }),

/***/ "./src/ts/test.ts":
/*!************************!*\
  !*** ./src/ts/test.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! editor */ "../dist/editor.min.js");
/* harmony import */ var editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(editor__WEBPACK_IMPORTED_MODULE_0__);

window.initializeEditor = function () {
    var elem = document.querySelector('#editor');
    if (elem == null) {
        throw "The element #testElement doesn't exist";
    }
    var options = {
        content: []
    };
    return new editor__WEBPACK_IMPORTED_MODULE_0__["Editor"](elem, options);
};


/***/ })

/******/ });