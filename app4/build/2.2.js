webpackJsonp([2],{

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _viewImg = __webpack_require__(236);

	var _viewImg2 = _interopRequireDefault(_viewImg);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var About = _react2.default.createClass({
	    displayName: 'About',


	    getInitialState: function getInitialState() {
	        return {
	            showBigImg: false
	        };
	    },
	    handleClickImg: function handleClickImg() {
	        this.setState({
	            showBigImg: true
	        });
	    },
	    handleClose: function handleClose() {
	        this.setState({
	            showBigImg: false
	        });
	    },
	    render: function render() {
	        var showBigImg = this.state.showBigImg;


	        return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement('img', { src: '//www.baidu.com/img/bd_logo1.png', onClick: this.handleClickImg }),
	            showBigImg ? _react2.default.createElement(_viewImg2.default, { onClose: this.handleClose, url: '//www.baidu.com/img/bd_logo1.png' }) : null
	        );
	    }
	});
	module.exports = About;

/***/ },

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(237);
	var ViewImg = _react2.default.createClass({
	    displayName: "ViewImg",

	    getInitialState: function getInitialState() {
	        return {
	            initWidth: "", //图片最开始的宽度
	            size: 1 };
	    },
	    componentDidMount: function componentDidMount() {
	        this.setState({
	            initWidth: window.getComputedStyle(this.refs.img).width
	        });
	    },
	    mousePositionStart: { //拖动之前的位置
	        x: null,
	        y: null,
	        scrollTop: null,
	        scrollLeft: null
	    },
	    close: function close() {
	        this.props.onClose();
	    },
	    /**
	     * 缩小
	     * */
	    shrink: function shrink() {
	        var size = this.state.size;

	        size -= 0.25;
	        if (size < 1) {
	            return;
	        }
	        this.setState({
	            size: size
	        });
	    },
	    /**
	     * 放大
	     * */
	    magnify: function magnify(e) {
	        var size = this.state.size;

	        size += 0.25;
	        if (size > 4) {
	            return;
	        }
	        this.setState({
	            size: size
	        });
	    },
	    handleMouseDown: function handleMouseDown(e) {
	        e.preventDefault();
	        this.mousePositionStart = {
	            x: e.clientX,
	            y: e.clientY,
	            scrollTop: this.refs.container.scrollTop,
	            scrollLeft: this.refs.container.scrollLeft
	        };
	        var target = e.currentTarget;
	        target.addEventListener("mousemove", this.mouseMove);
	    },
	    mouseMove: function mouseMove(e) {
	        e.preventDefault();
	        this.refs.container.scrollTop = this.mousePositionStart.scrollTop + this.mousePositionStart.y - e.clientY;
	        this.refs.container.scrollLeft = this.mousePositionStart.scrollLeft + this.mousePositionStart.x - e.clientX;
	    },
	    handleMouseUp: function handleMouseUp(e) {
	        e.currentTarget.removeEventListener("mousemove", this.mouseMove);
	    },
	    handleMouseLeave: function handleMouseLeave(e) {
	        e.currentTarget.removeEventListener("mousemove", this.mouseMove);
	    },

	    render: function render() {
	        var url = this.props.url;
	        var _state = this.state,
	            initWidth = _state.initWidth,
	            size = _state.size;

	        var width = parseFloat(initWidth.substring(0, initWidth.length - 2)) * size + "px";
	        return _react2.default.createElement(
	            "div",
	            { className: "show-big-img" },
	            _react2.default.createElement(
	                "div",
	                { className: "wrap" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "control" },
	                    _react2.default.createElement("span", { className: "close", onClick: this.close }),
	                    _react2.default.createElement("span", { className: "big", onClick: this.magnify }),
	                    _react2.default.createElement("span", { className: "small", onClick: this.shrink }),
	                    _react2.default.createElement(
	                        "span",
	                        { className: "size" },
	                        size * 100 + "%"
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "img-container", ref: "container" },
	                    _react2.default.createElement("img", { ref: "img", style: { width: width }, src: url, onMouseDown: this.handleMouseDown, onMouseLeave: this.handleMouseLeave, onMouseUp: this.handleMouseUp })
	                )
	            )
	        );
	    }
	});
	module.exports = ViewImg;

/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(238);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(240)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.4.1.1@sass-loader/index.js!./view-img.scss", function() {
				var newContent = require("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.4.1.1@sass-loader/index.js!./view-img.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(239)();
	// imports


	// module
	exports.push([module.id, ".show-big-img {\n  background-color: rgba(10, 10, 10, 0.7);\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0; }\n  .show-big-img .wrap {\n    position: relative;\n    width: 100%;\n    height: 100%; }\n  .show-big-img .img-container {\n    overflow: auto;\n    position: absolute;\n    top: 50px;\n    bottom: 0;\n    width: 100%; }\n    .show-big-img .img-container > img {\n      height: auto;\n      display: block;\n      margin: 0 auto; }\n  .show-big-img .control {\n    height: 50px;\n    background-color: #000;\n    color: #ddd;\n    padding-right: 50px; }\n    .show-big-img .control > span {\n      float: right;\n      display: inline-block;\n      width: 50px;\n      height: 50px;\n      background-repeat: no-repeat;\n      background-position: center center;\n      cursor: pointer; }\n      .show-big-img .control > span:hover {\n        background-color: #666666; }\n    .show-big-img .control .size {\n      line-height: 50px; }\n    .show-big-img .control .close {\n      background-image: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+MTYvaTAwMjdfY2xvc2UtZGlhbG9nPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48cGF0aCBkPSJNOS42NCA4bDQuMDE2IDQuMDE2Yy4yMy4yMy4zNDQuNTAyLjM0NC44MiAwIC4zMTgtLjExNS41OS0uMzQ0LjgyLS4yMy4yMy0uNTAyLjM0NC0uODIuMzQ0LS4zMTggMC0uNTktLjExNS0uODItLjM0NEw4IDkuNjRsLTQuMDE2IDQuMDE2Yy0uMjMuMjMtLjUwMi4zNDQtLjgyLjM0NC0uMzE4IDAtLjU5LS4xMTUtLjgyLS4zNDQtLjIzLS4yMy0uMzQ0LS41MDItLjM0NC0uODIgMC0uMzE4LjExNS0uNTkuMzQ0LS44Mkw2LjM2IDggMi4zNzQgNC4wMTZjLS4yMy0uMjMtLjM0NC0uNTAzLS4zNDQtLjgyIDAtLjMxOC4xMTYtLjU4Ny4zNDUtLjgwNS4yMy0uMjMuNTAzLS4zNC44Mi0uMzQuMzE4IDAgLjU5LjExMy44Mi4zNDNMOCA2LjM3Nmw0LjAzLTQuMDNjLjIzLS4yMy41MDQtLjM0NS44MjItLjM0NS4zMTcgMCAuNTkuMTE3LjgyLjM0Ni4yMi4yMy4zMjguNTAyLjMyOC44MiAwIC4zMTgtLjExLjU4Ni0uMzI4LjgwNUw5LjY0MiA4eiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+\"); }\n    .show-big-img .control .small {\n      background-image: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxOSAxOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+U2xpY2UgMjwvdGl0bGU+PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNOS41IDYuMTdWNy4yaC02VjYuMTdoNnoiIGZpbGw9IiNmZmYiLz48cmVjdCBmaWxsPSIjZmZmIiB0cmFuc2Zvcm09InJvdGF0ZSg0NSAxMy42MTYgMTMuNDYyKSIgeD0iMTAuMTE2IiB5PSIxMi40NjIiIHdpZHRoPSI3IiBoZWlnaHQ9IjIuMDU3IiByeD0iMSIvPjxlbGxpcHNlIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBjeD0iNi41IiBjeT0iNi42ODYiIHJ4PSI2LjUiIHJ5PSI2LjY4NiIvPjwvZz48L3N2Zz4=\"); }\n    .show-big-img .control .big {\n      background-image: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxOSAxOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+U2xpY2UgMjwvdGl0bGU+PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNiAzLjZoMXYyLjU3aDIuNVY3LjJIN3YyLjU3SDZWNy4ySDMuNVY2LjE3SDZWMy42eiIgZmlsbD0iI2ZmZiIvPjxyZWN0IGZpbGw9IiNmZmYiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDEzLjYxNiAxMy40NjIpIiB4PSIxMC4xMTYiIHk9IjEyLjQ2MiIgd2lkdGg9IjciIGhlaWdodD0iMi4wNTciIHJ4PSIxIi8+PGVsbGlwc2Ugc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuMjUiIGN4PSI2LjUiIGN5PSI2LjY4NiIgcng9IjYuNSIgcnk9IjYuNjg2Ii8+PC9nPjwvc3ZnPg==\"); }\n", ""]);

	// exports


/***/ },

/***/ 239:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }

});