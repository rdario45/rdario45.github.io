/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// asking for GitHub username\nvar user = prompt('Please enter your github username.');\n\n// show username \nconst usernameElement =  document.querySelector('#username')\nconst usernameText = document.createTextNode(user)\nusernameElement.appendChild(usernameText)\n\nvar r = new XMLHttpRequest();\n\nvar promise = new Promise(function(resolve, reject) {\n  try {\n    r.open(\"GET\", `https://api.github.com/users/${user}/repos`, true)\n    r.onreadystatechange = function () {    \n      if (r.readyState != 4 || r.status != 200) return;\n      resolve(r);\n    };\n    r.send()\n  } catch(e) {\n    reject(Error(\"It broke\"));\n  }\n})\n\nvar ul = document.querySelector('#bebe')\n\nvar promiseNames = promise\n.then( xhr => JSON.parse(xhr.response))\n.then( json => json.map(obj=> obj.name))\n.then( names => {  \n  // show total repos \n  const total =  document.querySelector('#total')\n  const textTotal = document.createTextNode(\"= \"+names.length)\n  total.appendChild(textTotal)\n\n  if(names.length > 0) {\n    // remove no items li\n    const noItem = document.querySelector('#no_items')    \n    ul.removeChild(noItem);\n\n    // add repos names as li\n     names.forEach(n => {\n      const li = document.createElement(\"LI\")\n      const textName = document.createTextNode(n)\n      li.appendChild(textName)\n      ul.appendChild(li)\n    });\n  }\n})\n\n\n//# sourceURL=webpack://node/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;