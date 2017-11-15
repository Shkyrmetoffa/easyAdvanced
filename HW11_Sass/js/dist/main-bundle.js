webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(1);
module.exports = function () {
    var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
    var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'box';

    var element = document.createElement(tag);
    $(element).addClass(className).html(content);
    return element;
};

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var header = __webpack_require__(3)();
var main = __webpack_require__(5)();
var footer = __webpack_require__(7)();
__webpack_require__(9);
var $ = __webpack_require__(1);

$('body').append(header).append(main).append(footer);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var builder = __webpack_require__(0);
__webpack_require__(4);

module.exports = function () {
    var content = '<h1>Header</h1><div class="triangle"></div>';

    return builder('header', content, 'header');
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var builder = __webpack_require__(0);
__webpack_require__(6);

module.exports = function () {
    var getDate = function getDate() {
        return new Date().toLocaleDateString();
    };
    var content = 'Oh no! You\'ve been hacked!';
    return builder('div', content, 'error form-error');
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var builder = __webpack_require__(0);
__webpack_require__(8);

module.exports = function () {
    var content = '<h1>Footer</h1><p> Text</p>';

    return builder('footer', content, 'footer');
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[2]);