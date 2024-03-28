/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["p5"] = factory();
	else
		root["p5"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ../../node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/cuixiaohuan/Project/lerna-first/packages/p5/src/index.js: Support for the experimental syntax 'jsx' isn't currently enabled (9:3):\\n\\n   7 | const root = ReactDOM.createRoot(document.getElementById('root'));\\n   8 | root.render(\\n>  9 |   <React.StrictMode>\\n     |   ^\\n  10 |     <App />\\n  11 |   </React.StrictMode>\\n  12 | );\\n\\nAdd @babel/preset-react (https://github.com/babel/babel/tree/main/packages/babel-preset-react) to the 'presets' section of your Babel config to enable transformation.\\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-jsx) to the 'plugins' section to enable parsing.\\n\\nIf you already added the plugin for this syntax to your config, it's possible that your config isn't being loaded.\\nYou can re-run Babel with the BABEL_SHOW_CONFIG_FOR environment variable to show the loaded configuration:\\n\\tnpx cross-env BABEL_SHOW_CONFIG_FOR=/Users/cuixiaohuan/Project/lerna-first/packages/p5/src/index.js <your build command>\\nSee https://babeljs.io/docs/configuration#print-effective-configs for more info.\\n\\n    at constructor (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:353:19)\\n    at Parser.raise (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:3277:19)\\n    at Parser.expectOnePlugin (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:3311:18)\\n    at Parser.parseExprAtom (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:10935:18)\\n    at Parser.parseExprSubscripts (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:10590:23)\\n    at Parser.parseUpdate (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:10573:21)\\n    at Parser.parseMaybeUnary (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:10551:23)\\n    at Parser.parseMaybeUnaryOrPrivate (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:10405:61)\\n    at Parser.parseExprOps (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:10410:23)\\n    at Parser.parseMaybeConditional (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:10387:23)\\n    at Parser.parseMaybeAssign (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:10348:21)\\n    at /Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:10318:39\\n    at Parser.allowInAnd (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:11936:12)\\n    at Parser.parseMaybeAssignAllowIn (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:10318:17)\\n    at Parser.parseExprListItem (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:11696:18)\\n    at Parser.parseCallExpressionArguments (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:10776:22)\\n    at Parser.parseCoverCallAndAsyncArrowHead (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:10693:29)\\n    at Parser.parseSubscript (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:10630:19)\\n    at Parser.parseSubscripts (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:10603:19)\\n    at Parser.parseExprSubscripts (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:10594:17)\\n    at Parser.parseUpdate (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:10573:21)\\n    at Parser.parseMaybeUnary (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:10551:23)\\n    at Parser.parseMaybeUnaryOrPrivate (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:10405:61)\\n    at Parser.parseExprOps (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:10410:23)\\n    at Parser.parseMaybeConditional (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:10387:23)\\n    at Parser.parseMaybeAssign (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:10348:21)\\n    at Parser.parseExpressionBase (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:10302:23)\\n    at /Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:10298:39\\n    at Parser.allowInAnd (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:11931:16)\\n    at Parser.parseExpression (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:10298:17)\\n    at Parser.parseStatementContent (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:12372:23)\\n    at Parser.parseStatementLike (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:12239:17)\\n    at Parser.parseModuleItem (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:12216:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:12796:36)\\n    at Parser.parseBlockBody (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:12789:10)\\n    at Parser.parseProgram (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:12116:10)\\n    at Parser.parseTopLevel (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:12106:25)\\n    at Parser.parse (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:13905:10)\\n    at parse (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/parser/lib/index.js:13947:38)\\n    at parser (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/core/lib/parser/index.js:41:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/core/lib/transformation/normalize-file.js:64:37)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/core/lib/transformation/index.js:21:50)\\n    at run.next (<anonymous>)\\n    at transform (/Users/cuixiaohuan/Project/lerna-first/node_modules/@babel/core/lib/transform.js:22:33)\\n    at transform.next (<anonymous>)\\n    at step (/Users/cuixiaohuan/Project/lerna-first/node_modules/gensync/index.js:261:32)\\n    at /Users/cuixiaohuan/Project/lerna-first/node_modules/gensync/index.js:273:13\\n    at async.call.result.err.err (/Users/cuixiaohuan/Project/lerna-first/node_modules/gensync/index.js:223:11)\");\n\n//# sourceURL=webpack://p5/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});