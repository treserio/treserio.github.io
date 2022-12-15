"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./ts.ts":
/*!***************!*\
  !*** ./ts.ts ***!
  \***************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"moveSliders\": function() { return /* binding */ moveSliders; },\n/* harmony export */   \"setBoxFunctions\": function() { return /* binding */ setBoxFunctions; }\n/* harmony export */ });\nfunction setBoxFunctions() {\n    console.log(\"loaded\");\n    const boxList = [\n        \"TL\",\n        \"T\",\n        \"TR\",\n        \"L\",\n        \"R\",\n        \"BL\",\n        \"B\",\n        \"BR\"\n    ];\n    const boxes = document.querySelectorAll(\".box\");\n    for(let i = 0; i < 8; ++i){\n        boxes[i].onclick = (event)=>{\n            var _exp_firstElementChild;\n            const target = event.target;\n            target.classList.add(\"recenter\", \"\".concat(boxList[i]));\n            target.classList.remove(\"slide-\".concat(boxList[i]));\n            const exp = document.querySelector(\".expander-\".concat(boxList[i]));\n            // console.log('exp', exp)\n            // list of sections that need a vertical scroll bar\n            exp === null || exp === void 0 ? void 0 : exp.classList.remove(\".expander-\".concat(boxList[i]));\n            if ([\n                \"T\"\n            ].includes(boxList[i])) {\n                exp === null || exp === void 0 ? void 0 : exp.classList.add(\"blowUp\", \"yScroll\");\n            } else {\n                exp === null || exp === void 0 ? void 0 : exp.classList.add(\"blowUp\");\n            }\n            // set the close button of each expander box to reset the view with animation\n            const originator = exp === null || exp === void 0 ? void 0 : (_exp_firstElementChild = exp.firstElementChild) === null || _exp_firstElementChild === void 0 ? void 0 : _exp_firstElementChild.children[1];\n            originator.onclick = ()=>{\n                // console.log('closeEvent', event);\n                // set the class name of the parent of our X element to the correct expander\n                console.log(\"closing\");\n                exp === null || exp === void 0 ? void 0 : exp.classList.add(\"expander-\".concat(boxList[i]));\n                exp === null || exp === void 0 ? void 0 : exp.classList.remove(\"blowUp\", \"yScroll\");\n                // console.log(event.target.parentNode);\n                moveSliders();\n            };\n        // setTimeout(() => exp.classList.add('hmin'), 2000);\n        };\n    }\n}\nfunction moveSliders() {\n    // spiral order\n    const l = document.querySelector(\".L\");\n    // if (l) setTimeout(() => {l.classList = 'box slide-L sway4'}, 0);\n    if (l) {\n        l.classList.remove(\"L\", \"hidden\", \"recenter\");\n        l.classList.add(\"slide-L\");\n    }\n    const tl = document.querySelector(\".TL\");\n    // if (tl) setTimeout(() => {tl.classList = 'box slide-TL'}, 100);\n    if (tl) {\n        tl.classList.remove(\"TL\", \"hidden\", \"recenter\");\n        tl.classList.add(\"slide-TL\");\n    }\n    const t = document.querySelector(\".T\");\n    // if (t) setTimeout(() => {t.classList = 'box slide-T'}, 200);\n    if (t) {\n        t.classList.remove(\"T\", \"hidden\", \"recenter\");\n        t.classList.add(\"slide-T\");\n    }\n    const tr = document.querySelector(\".TR\");\n    // if (tr) setTimeout(() => {tr.classList = 'box slide-TR'}, 300);\n    if (tr) {\n        tr.classList.remove(\"TR\", \"hidden\", \"recenter\");\n        tr.classList.add(\"slide-TR\");\n    }\n    const r = document.querySelector(\".R\");\n    // // if (r) setTimeout(() => {r.classList = 'box slide-R'}, 400);\n    if (r) {\n        r.classList.remove(\"R\", \"hidden\", \"recenter\");\n        r.classList.add(\"slide-R\");\n    }\n    const br = document.querySelector(\".BR\");\n    // if (br) setTimeout(() => {br.classList = 'box slide-BR'}, 500);\n    if (br) {\n        br.classList.remove(\"BR\", \"hidden\", \"recenter\");\n        br.classList.add(\"slide-BR\");\n    }\n    const b = document.querySelector(\".B\");\n    // if (b) setTimeout(() => {b.classList = 'box slide-B'}, 600);\n    if (b) {\n        b.classList.remove(\"B\", \"hidden\", \"recenter\");\n        b.classList.add(\"slide-B\");\n    }\n    const bl = document.querySelector(\".BL\");\n    // if (bl) setTimeout(() => {bl.classList = 'box slide-BL'}, 700);\n    if (bl) {\n        bl.classList.remove(\"BL\", \"hidden\", \"recenter\");\n        bl.classList.add(\"slide-BL\");\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2xDLGtFQUFrRTtJQUNsRSxJQUFJUyxJQUFJO1FBQ0pBLEdBQUdaLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLE1BQU0sVUFBVTtRQUNwQ1UsR0FBR1osU0FBUyxDQUFDQyxHQUFHLENBQUM7SUFDckIsQ0FBQztJQUNELE1BQU1ZLElBQUlwQixTQUFTVSxhQUFhLENBQUM7SUFDakMsa0VBQWtFO0lBQ2xFLElBQUlVLEdBQUc7UUFDSEEsRUFBRWIsU0FBUyxDQUFDRSxNQUFNLENBQUMsS0FBSyxVQUFVO1FBQ2xDVyxFQUFFYixTQUFTLENBQUNDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBQ0QsTUFBTWEsS0FBS3JCLFNBQVNVLGFBQWEsQ0FBQztJQUNsQyxrRUFBa0U7SUFDbEUsSUFBSVcsSUFBSTtRQUNKQSxHQUFHZCxTQUFTLENBQUNFLE1BQU0sQ0FBQyxNQUFNLFVBQVU7UUFDcENZLEdBQUdkLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxNQUFNYyxJQUFJdEIsU0FBU1UsYUFBYSxDQUFDO0lBQ2pDLCtEQUErRDtJQUMvRCxJQUFJWSxHQUFHO1FBQ0hBLEVBQUVmLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLEtBQUssVUFBVTtRQUNsQ2EsRUFBRWYsU0FBUyxDQUFDQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUNELE1BQU1lLEtBQUt2QixTQUFTVSxhQUFhLENBQUM7SUFDbEMsa0VBQWtFO0lBQ2xFLElBQUlhLElBQUk7UUFDSkEsR0FBR2hCLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLE1BQU0sVUFBVTtRQUNwQ2MsR0FBR2hCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO0lBQ3JCLENBQUM7QUFDTDtBQUVzQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi90cy50cz8wNWI5Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNldEJveEZ1bmN0aW9ucygpIHtcbiAgICBjb25zb2xlLmxvZygnbG9hZGVkJylcbiAgICBjb25zdCBib3hMaXN0ID0gWydUTCcsICdUJywgJ1RSJywgJ0wnLCAnUicsICdCTCcsICdCJywgJ0JSJyBdXG4gICAgY29uc3QgYm94ZXMgOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3gnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7ICsraSkge1xuICAgICAgICBib3hlc1tpXS5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChgcmVjZW50ZXJgLCBgJHtib3hMaXN0W2ldfWApO1xuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoYHNsaWRlLSR7Ym94TGlzdFtpXX1gKTtcbiAgICAgICAgICAgIGNvbnN0IGV4cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5leHBhbmRlci0ke2JveExpc3RbaV19YCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZXhwJywgZXhwKVxuICAgICAgICAgICAgLy8gbGlzdCBvZiBzZWN0aW9ucyB0aGF0IG5lZWQgYSB2ZXJ0aWNhbCBzY3JvbGwgYmFyXG4gICAgICAgICAgICBleHA/LmNsYXNzTGlzdC5yZW1vdmUoYC5leHBhbmRlci0ke2JveExpc3RbaV19YCk7XG4gICAgICAgICAgICBpZiAoWydUJ10uaW5jbHVkZXMoYm94TGlzdFtpXSkpIHtcbiAgICAgICAgICAgICAgICBleHA/LmNsYXNzTGlzdC5hZGQoJ2Jsb3dVcCcsICd5U2Nyb2xsJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4cD8uY2xhc3NMaXN0LmFkZCgnYmxvd1VwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzZXQgdGhlIGNsb3NlIGJ1dHRvbiBvZiBlYWNoIGV4cGFuZGVyIGJveCB0byByZXNldCB0aGUgdmlldyB3aXRoIGFuaW1hdGlvblxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYXRvciA9IGV4cD8uZmlyc3RFbGVtZW50Q2hpbGQ/LmNoaWxkcmVuWzFdIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgb3JpZ2luYXRvci5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjbG9zZUV2ZW50JywgZXZlbnQpO1xuICAgICAgICAgICAgICAgIC8vIHNldCB0aGUgY2xhc3MgbmFtZSBvZiB0aGUgcGFyZW50IG9mIG91ciBYIGVsZW1lbnQgdG8gdGhlIGNvcnJlY3QgZXhwYW5kZXJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2xvc2luZycpO1xuICAgICAgICAgICAgICAgIGV4cD8uY2xhc3NMaXN0LmFkZChgZXhwYW5kZXItJHtib3hMaXN0W2ldfWApO1xuICAgICAgICAgICAgICAgIGV4cD8uY2xhc3NMaXN0LnJlbW92ZSgnYmxvd1VwJywgJ3lTY3JvbGwnKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQucGFyZW50Tm9kZSk7XG4gICAgICAgICAgICAgICAgbW92ZVNsaWRlcnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gZXhwLmNsYXNzTGlzdC5hZGQoJ2htaW4nKSwgMjAwMCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5mdW5jdGlvbiBtb3ZlU2xpZGVycygpIHtcbiAgICAvLyBzcGlyYWwgb3JkZXJcbiAgICBjb25zdCBsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkwnKTtcbiAgICAvLyBpZiAobCkgc2V0VGltZW91dCgoKSA9PiB7bC5jbGFzc0xpc3QgPSAnYm94IHNsaWRlLUwgc3dheTQnfSwgMCk7XG4gICAgaWYgKGwpIHtcbiAgICAgICAgbC5jbGFzc0xpc3QucmVtb3ZlKCdMJywgJ2hpZGRlbicsICdyZWNlbnRlcicpO1xuICAgICAgICBsLmNsYXNzTGlzdC5hZGQoJ3NsaWRlLUwnKTtcbiAgICB9XG4gICAgY29uc3QgdGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuVEwnKTtcbiAgICAvLyBpZiAodGwpIHNldFRpbWVvdXQoKCkgPT4ge3RsLmNsYXNzTGlzdCA9ICdib3ggc2xpZGUtVEwnfSwgMTAwKTtcbiAgICBpZiAodGwpIHtcbiAgICAgICAgdGwuY2xhc3NMaXN0LnJlbW92ZSgnVEwnLCAnaGlkZGVuJywgJ3JlY2VudGVyJyk7XG4gICAgICAgIHRsLmNsYXNzTGlzdC5hZGQoJ3NsaWRlLVRMJyk7XG4gICAgfVxuICAgIGNvbnN0IHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuVCcpO1xuICAgIC8vIGlmICh0KSBzZXRUaW1lb3V0KCgpID0+IHt0LmNsYXNzTGlzdCA9ICdib3ggc2xpZGUtVCd9LCAyMDApO1xuICAgIGlmICh0KSB7XG4gICAgICAgIHQuY2xhc3NMaXN0LnJlbW92ZSgnVCcsICdoaWRkZW4nLCAncmVjZW50ZXInKTtcbiAgICAgICAgdC5jbGFzc0xpc3QuYWRkKCdzbGlkZS1UJyk7XG4gICAgfVxuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlRSJyk7XG4gICAgLy8gaWYgKHRyKSBzZXRUaW1lb3V0KCgpID0+IHt0ci5jbGFzc0xpc3QgPSAnYm94IHNsaWRlLVRSJ30sIDMwMCk7XG4gICAgaWYgKHRyKSB7XG4gICAgICAgIHRyLmNsYXNzTGlzdC5yZW1vdmUoJ1RSJywgJ2hpZGRlbicsICdyZWNlbnRlcicpO1xuICAgICAgICB0ci5jbGFzc0xpc3QuYWRkKCdzbGlkZS1UUicpO1xuICAgIH1cbiAgICBjb25zdCByID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlInKTtcbiAgICAvLyAvLyBpZiAocikgc2V0VGltZW91dCgoKSA9PiB7ci5jbGFzc0xpc3QgPSAnYm94IHNsaWRlLVInfSwgNDAwKTtcbiAgICBpZiAocikge1xuICAgICAgICByLmNsYXNzTGlzdC5yZW1vdmUoJ1InLCAnaGlkZGVuJywgJ3JlY2VudGVyJyk7XG4gICAgICAgIHIuY2xhc3NMaXN0LmFkZCgnc2xpZGUtUicpO1xuICAgIH1cbiAgICBjb25zdCBiciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5CUicpO1xuICAgIC8vIGlmIChicikgc2V0VGltZW91dCgoKSA9PiB7YnIuY2xhc3NMaXN0ID0gJ2JveCBzbGlkZS1CUid9LCA1MDApO1xuICAgIGlmIChicikge1xuICAgICAgICBici5jbGFzc0xpc3QucmVtb3ZlKCdCUicsICdoaWRkZW4nLCAncmVjZW50ZXInKTtcbiAgICAgICAgYnIuY2xhc3NMaXN0LmFkZCgnc2xpZGUtQlInKTtcbiAgICB9XG4gICAgY29uc3QgYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5CJyk7XG4gICAgLy8gaWYgKGIpIHNldFRpbWVvdXQoKCkgPT4ge2IuY2xhc3NMaXN0ID0gJ2JveCBzbGlkZS1CJ30sIDYwMCk7XG4gICAgaWYgKGIpIHtcbiAgICAgICAgYi5jbGFzc0xpc3QucmVtb3ZlKCdCJywgJ2hpZGRlbicsICdyZWNlbnRlcicpO1xuICAgICAgICBiLmNsYXNzTGlzdC5hZGQoJ3NsaWRlLUInKTtcbiAgICB9XG4gICAgY29uc3QgYmwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuQkwnKTtcbiAgICAvLyBpZiAoYmwpIHNldFRpbWVvdXQoKCkgPT4ge2JsLmNsYXNzTGlzdCA9ICdib3ggc2xpZGUtQkwnfSwgNzAwKTtcbiAgICBpZiAoYmwpIHtcbiAgICAgICAgYmwuY2xhc3NMaXN0LnJlbW92ZSgnQkwnLCAnaGlkZGVuJywgJ3JlY2VudGVyJyk7XG4gICAgICAgIGJsLmNsYXNzTGlzdC5hZGQoJ3NsaWRlLUJMJyk7XG4gICAgfVxufVxuXG5leHBvcnR7IG1vdmVTbGlkZXJzLCBzZXRCb3hGdW5jdGlvbnMgfVxuIl0sIm5hbWVzIjpbInNldEJveEZ1bmN0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJib3hMaXN0IiwiYm94ZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwib25jbGljayIsImV2ZW50IiwiZXhwIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwicXVlcnlTZWxlY3RvciIsImluY2x1ZGVzIiwib3JpZ2luYXRvciIsImZpcnN0RWxlbWVudENoaWxkIiwiY2hpbGRyZW4iLCJtb3ZlU2xpZGVycyIsImwiLCJ0bCIsInQiLCJ0ciIsInIiLCJiciIsImIiLCJibCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./ts.ts\n"));

/***/ })

});