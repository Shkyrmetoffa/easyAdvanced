webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
    var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
    var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'box';

    var element = document.createElement(tag);
    element.className = className;
    element.innerHTML = content;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var header = __webpack_require__(2)();
var footer = __webpack_require__(3)();

document.body.appendChild(header);
document.body.appendChild(footer);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var builder = __webpack_require__(0);

module.exports = function () {
    var content = '<h1>Header</h1>';

    return builder('header', content, 'header');
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var builder = __webpack_require__(0);

module.exports = function () {
    var content = '<h1>Footer</h1>';

    return builder('footer', content, 'footer');
};

/***/ })
],[1]);