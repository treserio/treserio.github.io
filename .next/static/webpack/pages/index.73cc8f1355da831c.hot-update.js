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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"moveSliders\": function() { return /* binding */ moveSliders; },\n/* harmony export */   \"setBoxFunctions\": function() { return /* binding */ setBoxFunctions; }\n/* harmony export */ });\nfunction setBoxFunctions() {\n    console.log(\"loaded\");\n    const boxList = [\n        \"TL\",\n        \"T\",\n        \"TR\",\n        \"L\",\n        \"R\",\n        \"BL\",\n        \"B\",\n        \"BR\"\n    ];\n    const boxes = document.querySelectorAll(\".box\");\n    for(let i = 0; i < 8; ++i){\n        boxes[i].onclick = (event)=>{\n            var _exp_firstElementChild;\n            const target = event.target;\n            target.classList.add(\"recenter\", \"\".concat(boxList[i]));\n            target.classList.remove(\"slide-\".concat(boxList[i]));\n            const exp = document.querySelector(\".expander-\".concat(boxList[i]));\n            // console.log('exp', exp)\n            // list of sections that need a vertical scroll bar\n            exp === null || exp === void 0 ? void 0 : exp.classList.remove(\".expander-\".concat(boxList[i]));\n            if ([\n                \"T\"\n            ].includes(boxList[i])) {\n                exp === null || exp === void 0 ? void 0 : exp.classList.add(\"blowUp\", \"yScroll\");\n            } else {\n                exp === null || exp === void 0 ? void 0 : exp.classList.add(\"blowUp\");\n            }\n            // set the close button of each expander box to reset the view with animation\n            const originator = exp === null || exp === void 0 ? void 0 : (_exp_firstElementChild = exp.firstElementChild) === null || _exp_firstElementChild === void 0 ? void 0 : _exp_firstElementChild.children[1];\n            originator.onclick = ()=>{\n                // console.log('closeEvent', event);\n                // set the class name of the parent of our X element to the correct expander\n                exp === null || exp === void 0 ? void 0 : exp.classList.add(\"expander-\".concat(boxList[i]));\n                // console.log(event.target.parentNode);\n                moveSliders();\n            };\n        // setTimeout(() => exp.classList.add('hmin'), 2000);\n        };\n    }\n}\nfunction moveSliders() {\n    // spiral order\n    const l = document.querySelector(\".L\");\n    // if (l) setTimeout(() => {l.classList = 'box slide-L sway4'}, 0);\n    if (l) {\n        l.classList.remove(\"L\", \"hidden\");\n        l.classList.add(\"slide-L\");\n    }\n    const tl = document.querySelector(\".TL\");\n    // if (tl) setTimeout(() => {tl.classList = 'box slide-TL'}, 100);\n    if (tl) {\n        tl.classList.remove(\"TL\", \"hidden\");\n        tl.classList.add(\"slide-TL\");\n    }\n    const t = document.querySelector(\".T\");\n    // if (t) setTimeout(() => {t.classList = 'box slide-T'}, 200);\n    if (t) {\n        t.classList.remove(\"T\", \"hidden\");\n        t.classList.add(\"slide-T\");\n    }\n    const tr = document.querySelector(\".TR\");\n    // if (tr) setTimeout(() => {tr.classList = 'box slide-TR'}, 300);\n    if (tr) {\n        tr.classList.remove(\"TR\", \"hidden\");\n        tr.classList.add(\"slide-TR\");\n    }\n    const r = document.querySelector(\".R\");\n    // // if (r) setTimeout(() => {r.classList = 'box slide-R'}, 400);\n    if (r) {\n        r.classList.remove(\"R\", \"hidden\");\n        r.classList.add(\"slide-R\");\n    }\n    const br = document.querySelector(\".BR\");\n    // if (br) setTimeout(() => {br.classList = 'box slide-BR'}, 500);\n    if (br) {\n        br.classList.remove(\"BR\", \"hidden\");\n        br.classList.add(\"slide-BR\");\n    }\n    const b = document.querySelector(\".B\");\n    // if (b) setTimeout(() => {b.classList = 'box slide-B'}, 600);\n    if (b) {\n        b.classList.remove(\"B\", \"hidden\");\n        b.classList.add(\"slide-B\");\n    }\n    const bl = document.querySelector(\".BL\");\n    // if (bl) setTimeout(() => {bl.classList = 'box slide-BL'}, 700);\n    if (bl) {\n        bl.classList.remove(\"BL\", \"hidden\");\n        bl.classList.add(\"slide-BL\");\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztJQUNELE1BQU1ZLElBQUlwQixTQUFTVSxhQUFhLENBQUM7SUFDakMsa0VBQWtFO0lBQ2xFLElBQUlVLEdBQUc7UUFDSEEsRUFBRWIsU0FBUyxDQUFDRSxNQUFNLENBQUMsS0FBSztRQUN4QlcsRUFBRWIsU0FBUyxDQUFDQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUNELE1BQU1hLEtBQUtyQixTQUFTVSxhQUFhLENBQUM7SUFDbEMsa0VBQWtFO0lBQ2xFLElBQUlXLElBQUk7UUFDSkEsR0FBR2QsU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTTtRQUMxQlksR0FBR2QsU0FBUyxDQUFDQyxHQUFHLENBQUM7SUFDckIsQ0FBQztJQUNELE1BQU1jLElBQUl0QixTQUFTVSxhQUFhLENBQUM7SUFDakMsK0RBQStEO0lBQy9ELElBQUlZLEdBQUc7UUFDSEEsRUFBRWYsU0FBUyxDQUFDRSxNQUFNLENBQUMsS0FBSztRQUN4QmEsRUFBRWYsU0FBUyxDQUFDQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUNELE1BQU1lLEtBQUt2QixTQUFTVSxhQUFhLENBQUM7SUFDbEMsa0VBQWtFO0lBQ2xFLElBQUlhLElBQUk7UUFDSkEsR0FBR2hCLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLE1BQU07UUFDMUJjLEdBQUdoQixTQUFTLENBQUNDLEdBQUcsQ0FBQztJQUNyQixDQUFDO0FBQ0w7QUFFc0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdHMudHM/MDViOSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzZXRCb3hGdW5jdGlvbnMoKSB7XG4gICAgY29uc29sZS5sb2coJ2xvYWRlZCcpXG4gICAgY29uc3QgYm94TGlzdCA9IFsnVEwnLCAnVCcsICdUUicsICdMJywgJ1InLCAnQkwnLCAnQicsICdCUicgXVxuICAgIGNvbnN0IGJveGVzIDogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm94Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyArK2kpIHtcbiAgICAgICAgYm94ZXNbaV0ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoYHJlY2VudGVyYCwgYCR7Ym94TGlzdFtpXX1gKTtcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGBzbGlkZS0ke2JveExpc3RbaV19YCk7XG4gICAgICAgICAgICBjb25zdCBleHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZXhwYW5kZXItJHtib3hMaXN0W2ldfWApO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2V4cCcsIGV4cClcbiAgICAgICAgICAgIC8vIGxpc3Qgb2Ygc2VjdGlvbnMgdGhhdCBuZWVkIGEgdmVydGljYWwgc2Nyb2xsIGJhclxuICAgICAgICAgICAgZXhwPy5jbGFzc0xpc3QucmVtb3ZlKGAuZXhwYW5kZXItJHtib3hMaXN0W2ldfWApO1xuICAgICAgICAgICAgaWYgKFsnVCddLmluY2x1ZGVzKGJveExpc3RbaV0pKSB7XG4gICAgICAgICAgICAgICAgZXhwPy5jbGFzc0xpc3QuYWRkKCdibG93VXAnLCAneVNjcm9sbCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleHA/LmNsYXNzTGlzdC5hZGQoJ2Jsb3dVcCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2V0IHRoZSBjbG9zZSBidXR0b24gb2YgZWFjaCBleHBhbmRlciBib3ggdG8gcmVzZXQgdGhlIHZpZXcgd2l0aCBhbmltYXRpb25cbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmF0b3IgPSBleHA/LmZpcnN0RWxlbWVudENoaWxkPy5jaGlsZHJlblsxXSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIG9yaWdpbmF0b3Iub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY2xvc2VFdmVudCcsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIGNsYXNzIG5hbWUgb2YgdGhlIHBhcmVudCBvZiBvdXIgWCBlbGVtZW50IHRvIHRoZSBjb3JyZWN0IGV4cGFuZGVyXG4gICAgICAgICAgICAgICAgZXhwPy5jbGFzc0xpc3QuYWRkKGBleHBhbmRlci0ke2JveExpc3RbaV19YCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUpO1xuICAgICAgICAgICAgICAgIG1vdmVTbGlkZXJzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IGV4cC5jbGFzc0xpc3QuYWRkKCdobWluJyksIDIwMDApO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZnVuY3Rpb24gbW92ZVNsaWRlcnMoKSB7XG4gICAgLy8gc3BpcmFsIG9yZGVyXG4gICAgY29uc3QgbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5MJyk7XG4gICAgLy8gaWYgKGwpIHNldFRpbWVvdXQoKCkgPT4ge2wuY2xhc3NMaXN0ID0gJ2JveCBzbGlkZS1MIHN3YXk0J30sIDApO1xuICAgIGlmIChsKSB7XG4gICAgICAgIGwuY2xhc3NMaXN0LnJlbW92ZSgnTCcsICdoaWRkZW4nKTtcbiAgICAgICAgbC5jbGFzc0xpc3QuYWRkKCdzbGlkZS1MJyk7XG4gICAgfVxuICAgIGNvbnN0IHRsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlRMJyk7XG4gICAgLy8gaWYgKHRsKSBzZXRUaW1lb3V0KCgpID0+IHt0bC5jbGFzc0xpc3QgPSAnYm94IHNsaWRlLVRMJ30sIDEwMCk7XG4gICAgaWYgKHRsKSB7XG4gICAgICAgIHRsLmNsYXNzTGlzdC5yZW1vdmUoJ1RMJywgJ2hpZGRlbicpO1xuICAgICAgICB0bC5jbGFzc0xpc3QuYWRkKCdzbGlkZS1UTCcpO1xuICAgIH1cbiAgICBjb25zdCB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlQnKTtcbiAgICAvLyBpZiAodCkgc2V0VGltZW91dCgoKSA9PiB7dC5jbGFzc0xpc3QgPSAnYm94IHNsaWRlLVQnfSwgMjAwKTtcbiAgICBpZiAodCkge1xuICAgICAgICB0LmNsYXNzTGlzdC5yZW1vdmUoJ1QnLCAnaGlkZGVuJyk7XG4gICAgICAgIHQuY2xhc3NMaXN0LmFkZCgnc2xpZGUtVCcpO1xuICAgIH1cbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5UUicpO1xuICAgIC8vIGlmICh0cikgc2V0VGltZW91dCgoKSA9PiB7dHIuY2xhc3NMaXN0ID0gJ2JveCBzbGlkZS1UUid9LCAzMDApO1xuICAgIGlmICh0cikge1xuICAgICAgICB0ci5jbGFzc0xpc3QucmVtb3ZlKCdUUicsICdoaWRkZW4nKTtcbiAgICAgICAgdHIuY2xhc3NMaXN0LmFkZCgnc2xpZGUtVFInKTtcbiAgICB9XG4gICAgY29uc3QgciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5SJyk7XG4gICAgLy8gLy8gaWYgKHIpIHNldFRpbWVvdXQoKCkgPT4ge3IuY2xhc3NMaXN0ID0gJ2JveCBzbGlkZS1SJ30sIDQwMCk7XG4gICAgaWYgKHIpIHtcbiAgICAgICAgci5jbGFzc0xpc3QucmVtb3ZlKCdSJywgJ2hpZGRlbicpO1xuICAgICAgICByLmNsYXNzTGlzdC5hZGQoJ3NsaWRlLVInKTtcbiAgICB9XG4gICAgY29uc3QgYnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuQlInKTtcbiAgICAvLyBpZiAoYnIpIHNldFRpbWVvdXQoKCkgPT4ge2JyLmNsYXNzTGlzdCA9ICdib3ggc2xpZGUtQlInfSwgNTAwKTtcbiAgICBpZiAoYnIpIHtcbiAgICAgICAgYnIuY2xhc3NMaXN0LnJlbW92ZSgnQlInLCAnaGlkZGVuJyk7XG4gICAgICAgIGJyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlLUJSJyk7XG4gICAgfVxuICAgIGNvbnN0IGIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuQicpO1xuICAgIC8vIGlmIChiKSBzZXRUaW1lb3V0KCgpID0+IHtiLmNsYXNzTGlzdCA9ICdib3ggc2xpZGUtQid9LCA2MDApO1xuICAgIGlmIChiKSB7XG4gICAgICAgIGIuY2xhc3NMaXN0LnJlbW92ZSgnQicsICdoaWRkZW4nKTtcbiAgICAgICAgYi5jbGFzc0xpc3QuYWRkKCdzbGlkZS1CJyk7XG4gICAgfVxuICAgIGNvbnN0IGJsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkJMJyk7XG4gICAgLy8gaWYgKGJsKSBzZXRUaW1lb3V0KCgpID0+IHtibC5jbGFzc0xpc3QgPSAnYm94IHNsaWRlLUJMJ30sIDcwMCk7XG4gICAgaWYgKGJsKSB7XG4gICAgICAgIGJsLmNsYXNzTGlzdC5yZW1vdmUoJ0JMJywgJ2hpZGRlbicpO1xuICAgICAgICBibC5jbGFzc0xpc3QuYWRkKCdzbGlkZS1CTCcpO1xuICAgIH1cbn1cblxuZXhwb3J0eyBtb3ZlU2xpZGVycywgc2V0Qm94RnVuY3Rpb25zIH1cbiJdLCJuYW1lcyI6WyJzZXRCb3hGdW5jdGlvbnMiLCJjb25zb2xlIiwibG9nIiwiYm94TGlzdCIsImJveGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsIm9uY2xpY2siLCJldmVudCIsImV4cCIsInRhcmdldCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInF1ZXJ5U2VsZWN0b3IiLCJpbmNsdWRlcyIsIm9yaWdpbmF0b3IiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImNoaWxkcmVuIiwibW92ZVNsaWRlcnMiLCJsIiwidGwiLCJ0IiwidHIiLCJyIiwiYnIiLCJiIiwiYmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ts.ts\n"));

/***/ })

});