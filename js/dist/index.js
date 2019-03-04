// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"src/shared/utils/EventEmitter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.events = {};
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(event, handler) {
      if (this.events[event]) {
        this.events[event].push(handler);
      } else {
        this.events[event] = [handler];
      }
    }
  }, {
    key: "emit",
    value: function emit(event, payload) {
      var eventHandlers = this.events[event];

      if (eventHandlers) {
        eventHandlers.forEach(function (eventHandler) {
          eventHandler(payload);
        });
      }
    }
  }]);

  return EventEmitter;
}();

exports.default = EventEmitter;
},{}],"src/shared/utils/View.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var allowedMethods = ['html', 'append', 'prepend'];

var View =
/*#__PURE__*/
function () {
  function View(getHTML) {
    _classCallCheck(this, View);

    this.getHTML = getHTML;
  }

  _createClass(View, [{
    key: "render",
    value: function render(item, selector) {
      var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'html';
      View.validateRenderMethod(method);
      $(selector)[method](this.getHTML(item));
    }
  }, {
    key: "renderList",
    value: function renderList(items, selector) {
      var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'html';
      View.validateRenderMethod(method);
      $(selector)[method](items.map(this.getHTML).join(''));
    }
  }], [{
    key: "validateRenderMethod",
    value: function validateRenderMethod(method) {
      if (!allowedMethods.includes(method)) {
        throw new Error('Invalid render method');
      }
    }
  }]);

  return View;
}();

exports.default = View;
},{}],"src/shared/utils/pagination.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function () {
  var _ref;

  var SHOW_PER_CLICK = 8;
  var $dom = {
    loadMore: null,
    all: null,
    hidden: null,
    counter: null,
    api: {
      refreshAll: function refreshAll() {
        $dom.all = $('[data-pageable]');
      },
      refreshHidden: function refreshHidden() {
        $dom.hidden = $('[data-pageable]:hidden');
      }
    }
  };

  function _cacheDom() {
    $dom.loadMore = $('#loadMore');
    $dom.loadMoreWrapper = $dom.loadMore.parent().parent();
    $dom.counter = $('.currently-showing');
    $dom.counterTotal = $('.total');
    $dom.api.refreshAll();
    $dom.api.refreshHidden();
  }

  function _bindEvents() {
    $dom.loadMore.on('click', _handleShowMore);
  }

  function _handleShowMore(event) {
    $dom.api.refreshHidden();
    event.preventDefault();
    $dom.hidden.slice(0, SHOW_PER_CLICK).slideDown();
    $dom.api.refreshHidden();

    if ($dom.hidden.length <= 0) {
      $dom.loadMoreWrapper.hide();
    }

    _updateCounter();
  }

  function _updateCounter() {
    if ($dom.counter.length > 0) {
      $dom.counter.text($dom.all.length - $dom.hidden.length);
      $dom.counterTotal.text($dom.all.length);
    }
  }

  return _ref = {
    init: function init() {
      _cacheDom();

      _bindEvents();

      _updateCounter();

      if ($dom.hidden.length > 0) {
        $dom.loadMoreWrapper.show();
      }
    },
    countAll: function countAll() {
      $dom.api.refreshAll();
      return $dom.all.length;
    }
  }, _defineProperty(_ref, "countAll", function countAll() {
    $dom.api.refreshHidden();
    return $dom.hidden.length;
  }), _defineProperty(_ref, "countVisible", function countVisible() {
    $dom.api.refreshAll();
    $dom.api.refreshHidden();
    return $dom.all.length - $dom.hidden.length;
  }), _ref;
}();

exports.default = _default;
},{}],"src/shared/utils/url.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  getParams: function getParams() {
    var search = location.search.substring(1);

    try {
      return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    } catch (_unused) {
      return {};
    }
  },
  getParam: function getParam(param) {
    return this.getParams()[param];
  }
};
exports.default = _default;
},{}],"src/shared/utils/wait.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(data) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(data);
    }, time);
  });
};

exports.default = _default;
},{}],"src/shared/utils/FormValidation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var selector = {
  field: '[data-validate]',
  errorPlaceholder: '.validation-error-placeholder'
};
var defaultRules = {
  required: null,
  pattern: '(.*?)',
  patternMessage: ''
};

var extractField = function extractField(field) {
  var $field = $(field);

  var _$field$data = $field.data(),
      validate = _$field$data.validate,
      rules = _objectWithoutProperties(_$field$data, ["validate"]);

  return {
    rules: _objectSpread({}, defaultRules, rules),
    $el: $field
  };
};

var FormValidation =
/*#__PURE__*/
function () {
  function FormValidation(_ref) {
    var _this = this;

    var $form = _ref.$form,
        _ref$validateOnChange = _ref.validateOnChange,
        validateOnChange = _ref$validateOnChange === void 0 ? true : _ref$validateOnChange;

    _classCallCheck(this, FormValidation);

    if (!$form) {
      throw new Error('FormValidation constructor - Invalid $form');
    }

    this.$form = $form;
    this.fields = this.$form.find(selector.field).toArray().map(extractField);

    if (validateOnChange) {
      this.fields.forEach(function (field) {
        field.$el.on('change', function () {
          _this.validateField(field);
        });
      });
    }
  }

  _createClass(FormValidation, [{
    key: "validate",
    value: function validate() {
      var fieldValidities = this.fields.map(this.validateField.bind(this));
      return fieldValidities.every(function (v) {
        return v;
      });
    }
  }, {
    key: "validateField",
    value: function validateField(field) {
      var errorMessages = [];
      var rules = field.rules,
          $el = field.$el;
      var value = $el.val();

      if (rules.required && !value) {
        errorMessages.push(rules.required);
      }

      if (rules.pattern && !new RegExp(rules.pattern).test(value)) {
        errorMessages.push(rules.patternMessage);
      }

      if (errorMessages.length > 0) {
        this.showErrorMessage($el, errorMessages.join('<br />'));
        return false;
      }

      this.removeErrorMessage($el);
      return true;
    }
  }, {
    key: "showErrorMessage",
    value: function showErrorMessage($el, message) {
      var $placeholder = $el.siblings(selector.errorPlaceholder).first();

      if ($placeholder.length === 0) {
        $el.after("<div class=\"".concat(selector.errorPlaceholder.slice(1), "\"></div>"));
        $placeholder = $el.next();
      }

      $placeholder.html(message);
    }
  }, {
    key: "removeErrorMessage",
    value: function removeErrorMessage($el) {
      $el.siblings(selector.errorPlaceholder).remove();
    }
  }]);

  return FormValidation;
}();

exports.default = FormValidation;
},{}],"src/shared/utils/toaster.js":[function(require,module,exports) {
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/***********************************************************************************
 * Add Array.indexOf                                                                *
 ***********************************************************************************/
;

(function () {
  if (typeof Array.prototype.indexOf !== 'function') {
    Array.prototype.indexOf = function (searchElement, fromIndex) {
      for (var i = fromIndex || 0, j = this.length; i < j; i += 1) {
        if (searchElement === undefined || searchElement === null) {
          if (this[i] === searchElement) {
            return i;
          }
        } else if (this[i] === searchElement) {
          return i;
        }
      }

      return -1;
    };
  }
})()
/**********************************************************************************/
;

(function ($, undefined) {
  var toasting = {
    gettoaster: function gettoaster() {
      var toaster = $('#' + settings.toaster.id);

      if (toaster.length < 1) {
        toaster = $(settings.toaster.template).attr('id', settings.toaster.id).css(settings.toaster.css).addClass(settings.toaster['class']);

        if (settings.stylesheet && !$('link[href=' + settings.stylesheet + ']').length) {
          $('head').appendTo('<link rel="stylesheet" href="' + settings.stylesheet + '">');
        }

        $(settings.toaster.container).append(toaster);
      }

      return toaster;
    },
    notify: function notify(title, message, priority) {
      var $toaster = this.gettoaster();
      var delimiter = title && message ? settings.toast.defaults.delimiter : '';
      var $toast = $(settings.toast.template.replace('%priority%', priority).replace('%delimiter%', delimiter)).hide().css(settings.toast.css).addClass(settings.toast['class']);
      $('.title', $toast).css(settings.toast.csst).html(title);
      $('.message', $toast).css(settings.toast.cssm).html(message);

      if (settings.debug && window.console) {
        console.log(toast);
      }

      $toaster.append(settings.toast.display($toast));

      if (settings.donotdismiss.indexOf(priority) === -1) {
        var timeout = typeof settings.timeout === 'number' ? settings.timeout : _typeof(settings.timeout) === 'object' && priority in settings.timeout ? settings.timeout[priority] : 1500;
        setTimeout(function () {
          settings.toast.remove($toast, function () {
            $toast.remove();
          });
        }, timeout);
      }
    }
  };
  var defaults = {
    toaster: {
      id: 'toaster',
      container: 'body',
      template: '<div></div>',
      class: 'toaster',
      css: {
        position: 'fixed',
        top: '75px',
        right: '10px',
        width: '300px',
        zIndex: 50000
      }
    },
    toast: {
      template: '<div class="alert alert-%priority% alert-dismissible" role="alert">' + '<button type="button" class="close" data-dismiss="alert">' + '<span aria-hidden="true">&times;</span>' + '<span class="sr-only">Close</span>' + '</button>' + '<span class="title"></span>%delimiter% <span class="message"></span>' + '</div>',
      defaults: {
        title: '',
        priority: 'success',
        delimiter: ':'
      },
      css: {},
      cssm: {},
      csst: {
        fontWeight: 'bold'
      },
      fade: 'slow',
      display: function display($toast) {
        return $toast.fadeIn(settings.toast.fade);
      },
      remove: function remove($toast, callback) {
        return $toast.animate({
          opacity: '0',
          padding: '0px',
          margin: '0px',
          height: '0px'
        }, {
          duration: settings.toast.fade,
          complete: callback
        });
      }
    },
    debug: false,
    timeout: 4500,
    stylesheet: null,
    donotdismiss: []
  };
  var settings = {};
  $.extend(settings, defaults);

  $.toaster = function (options) {
    if (_typeof(options) === 'object') {
      if ('settings' in options) {
        settings = $.extend(true, settings, options.settings);
      }
    } else {
      var values = Array.prototype.slice.call(arguments, 0);
      var labels = ['message', 'title', 'priority'];
      options = {};

      for (var i = 0, l = values.length; i < l; i += 1) {
        options[labels[i]] = values[i];
      }
    }

    var title = 'title' in options && typeof options.title === 'string' ? options.title : settings.toast.defaults.title;
    var message = 'message' in options ? options.message : null;
    var priority = 'priority' in options && typeof options.priority === 'string' ? options.priority : settings.toast.defaults.priority;

    if (message !== null) {
      toasting.notify(title, message, priority);
    }
  };

  $.toaster.reset = function () {
    settings = {};
    $.extend(settings, defaults);
  };
})(jQuery);
},{}],"src/shared/utils/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "EventEmitter", {
  enumerable: true,
  get: function () {
    return _EventEmitter.default;
  }
});
Object.defineProperty(exports, "View", {
  enumerable: true,
  get: function () {
    return _View.default;
  }
});
Object.defineProperty(exports, "pagination", {
  enumerable: true,
  get: function () {
    return _pagination.default;
  }
});
Object.defineProperty(exports, "url", {
  enumerable: true,
  get: function () {
    return _url.default;
  }
});
Object.defineProperty(exports, "wait", {
  enumerable: true,
  get: function () {
    return _wait.default;
  }
});
Object.defineProperty(exports, "FormValidation", {
  enumerable: true,
  get: function () {
    return _FormValidation.default;
  }
});
Object.defineProperty(exports, "toaster", {
  enumerable: true,
  get: function () {
    return _toaster.default;
  }
});

var _EventEmitter = _interopRequireDefault(require("./EventEmitter"));

var _View = _interopRequireDefault(require("./View"));

var _pagination = _interopRequireDefault(require("./pagination"));

var _url = _interopRequireDefault(require("./url"));

var _wait = _interopRequireDefault(require("./wait"));

var _FormValidation = _interopRequireDefault(require("./FormValidation"));

var _toaster = _interopRequireDefault(require("./toaster"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./EventEmitter":"src/shared/utils/EventEmitter.js","./View":"src/shared/utils/View.js","./pagination":"src/shared/utils/pagination.js","./url":"src/shared/utils/url.js","./wait":"src/shared/utils/wait.js","./FormValidation":"src/shared/utils/FormValidation.js","./toaster":"src/shared/utils/toaster.js"}],"src/modules/product/productService.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../../shared/utils");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIAL_STATE = {
  items: [],
  isLoading: false,
  isLoaded: false,
  error: null,
  loadingPromise: null
};
var state = INITIAL_STATE;

var setState = function setState(newState) {
  state = _objectSpread({}, state, newState);
};

var _default = {
  fetchAll: function fetchAll() {
    if (state.isLoaded) {
      return Promise.resolve(state.items);
    }

    if (!state.isLoading) {
      setState({
        isLoading: true,
        loadingPromise: fetch('/api/products.json').then(function (res) {
          return res.json();
        }).then(function (products) {
          setState({
            items: products,
            isLoaded: true,
            isLoading: false,
            error: null
          });
          return state.items;
        }).catch(function (error) {
          setState({
            isLoading: false,
            error: error
          });
          console.warn('Error fetching products data!');
          console.log(error);
          return Promise.reject(error);
        })
      });
    }

    return state.loadingPromise;
  },
  fetchFeatured: function fetchFeatured() {
    return this.fetchAll().then(function (products) {
      return products.filter(function (product) {
        return product.isFetured;
      });
    });
  },
  fetchByCategory: function fetchByCategory(cateogrySlug) {
    return this.fetchAll().then(function (products) {
      return products.filter(function (_ref) {
        var category = _ref.category;
        return category.slug === cateogrySlug;
      });
    });
  },
  checkout: function checkout() {
    return (0, _utils.wait)(true, 1500);
  }
};
exports.default = _default;
},{"../../shared/utils":"src/shared/utils/index.js"}],"src/modules/cart/config.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ACTIONS = exports.LC_CART_KEY = exports.SHIPPING_FEE = exports.CURRENCY = void 0;
var CURRENCY = '€';
exports.CURRENCY = CURRENCY;
var SHIPPING_FEE = 0;
exports.SHIPPING_FEE = SHIPPING_FEE;
var LC_CART_KEY = 'cart-items';
exports.LC_CART_KEY = LC_CART_KEY;
var ACTIONS = {
  CART_UPDATED: 'cart:updated',
  CART_PRODUCTS_LOADING: 'cart:loading',
  CART_PRODUCTS_LOADED: 'cart:products-loaded',
  EMPTY_CART: 'cart:empty'
};
exports.ACTIONS = ACTIONS;
},{}],"src/modules/cart/store.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _productService = _interopRequireDefault(require("../product/productService"));

var _EventEmitter = _interopRequireDefault(require("../../shared/utils/EventEmitter"));

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  eventBus: new _EventEmitter.default(),
  cart: [],
  initCart: function initCart() {
    var _this = this;

    var cartItems = [];

    try {
      cartItems = JSON.parse(localStorage.getItem(_config.LC_CART_KEY)) || [];
    } catch (e) {}

    if (cartItems.length === 0) {
      this.eventBus.emit(_config.ACTIONS.CART_PRODUCTS_LOADED, cartItems);
      this.setItems(cartItems);
      return;
    }

    var cartItemsIds = cartItems.map(function (item) {
      return item.id;
    });
    this.eventBus.emit(_config.ACTIONS.CART_PRODUCTS_LOADING);

    _productService.default.fetchAll().then(function (products) {
      var productIds = products.map(function (_ref) {
        var id = _ref.id;
        return id;
      });
      cartItems = cartItems.filter(function (item) {
        return productIds.includes(item.id);
      }).map(function (item, index, cart) {
        var product = products.find(function (p) {
          return p.id === item.id;
        });
        return _objectSpread({}, item, product);
      });

      _this.eventBus.emit(_config.ACTIONS.CART_PRODUCTS_LOADED, cartItems);

      _this.setItems(cartItems);
    }, 1500);
  },
  setItems: function setItems(cart) {
    this.cart = _toConsumableArray(cart);
    localStorage.setItem(_config.LC_CART_KEY, JSON.stringify(this.cart));
    this.eventBus.emit(_config.ACTIONS.CART_UPDATED, this.cart);
  },
  getMiniCart: function getMiniCart() {
    return this.cart.map(function (_ref2) {
      var id = _ref2.id,
          quantity = _ref2.quantity;
      return {
        id: id,
        quantity: quantity
      };
    });
  },
  countItems: function countItems() {
    return this.cart.reduce(function (currentValue, currentItem) {
      return currentValue + currentItem.quantity;
    }, 0);
  },
  total: function total() {
    return this.cart.reduce(function (currentValue, currentItem) {
      return currentValue + currentItem.price * currentItem.quantity;
    }, 0) + _config.SHIPPING_FEE;
  },
  totalByProduct: function totalByProduct(id) {
    var item = this.cart.find(function (item) {
      return item.id === id;
    });

    if (item) {
      return item.price * item.quantity;
    }

    return 0;
  },
  add: function add(_ref3) {
    var id = _ref3.id,
        quantity = _ref3.quantity;
    var sumQuantities = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var cartItem = this.cart.find(function (product) {
      return product.id === id;
    });

    if (!cartItem) {
      this.setItems(_toConsumableArray(this.cart).concat([{
        id: id,
        quantity: quantity
      }]));
    } else {
      if (sumQuantities) {
        cartItem.quantity += quantity;
      } else {
        cartItem.quantity = quantity;
      }

      this.setItems(this.cart.map(function (item) {
        return item.id === id ? cartItem : item;
      }));
    }
  },
  remove: function remove(id) {
    this.setItems(this.cart.filter(function (item) {
      return item.id !== id;
    }));
  },
  clear: function clear() {
    this.setItems([]);
  }
};
exports.default = _default;
},{"../product/productService":"src/modules/product/productService.js","../../shared/utils/EventEmitter":"src/shared/utils/EventEmitter.js","./config":"src/modules/cart/config.js"}],"src/modules/cart/view.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = require("./config");

var _utils = require("../../shared/utils");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var views = {
  cartProductView: new _utils.View(function (_ref) {
    var id = _ref.id,
        name = _ref.name,
        main_photo = _ref.main_photo,
        price = _ref.price,
        quantity = _ref.quantity;
    return "\n        <tr data-product-id=\"".concat(id, "\">\n            <td data-th=\"Product\">\n                <div class=\"row\">\n                    <div class=\"col-sm-4 hidden-xs\">\n                        <div class=\"card-product-img\"\n                            style=\"background-image: url('").concat(main_photo, "');\"></div>\n                    </div>\n                    <div class=\"col-sm-8 d-flex align-items-center\">\n                    \n                        <h4>").concat(name, "</h4>\n                    </div>\n                </div>\n            </td>\n            <td data-th=\"Price\">").concat(price, " ").concat(_config.CURRENCY, "</td>\n            \n            <td data-th=\"Quantity\">\n                <input value=\"").concat(quantity, "\" class=\"change-product-quantity input-number\" type=\"number\" step=\"1\" min=\"1\" name=\"quantity\">\n            </td>\n            <td data-th=\"Total\">\n                <span class=\"single-product-total\">\n                    ").concat(price * quantity, "\n                </span> ").concat(_config.CURRENCY, "\n            </td>\n            <td class=\"actions\" data-th=\"Remove\">\n                <button class=\"remove-from-cart btn btn-sm\">\n                    <img src=\"img/x.svg\" alt=\"Remove from cart\">\n                </button>\n            </td>\n        </tr>\n    ");
  }),
  cartProductsTableView: new _utils.View(function (_ref2) {
    var _ref2$cols = _ref2.cols,
        cols = _ref2$cols === void 0 ? ['Product', 'Price', 'Quantity', 'Total', '&nbsp;'] : _ref2$cols;
    return "\n        <div class=\"col-md-8\">\n            <h6>Selected products (<span class=\"cart-items-count\"></span>)</h6>\n            <hr>\n            <div class=\"table-responsive\">\n                <table id=\"cart\" class=\"table table-hover table-condensed\">\n                    <thead>\n                    <tr>\n                        ".concat(cols.map(function (col) {
      return "<th>".concat(col, "</th>");
    }).join(''), "\n                    </tr>\n                    </thead>\n                    <tbody></tbody>\n                </table>\n            </div>\n\n        </div>\n    ");
  }),
  cartInfoView: new _utils.View(function (currency) {
    return "\n       <div class=\"col-md-4 info-box\">\n            <h6>Total</h6>\n            <hr>\n            <p class=\"d-flex flex-column justify-content-md-between flex-md-row\">\n                <span>Total value of the products</span>\n                <span><span class=\"cart-items-total\"></span> ".concat(currency, "</span>\n            </p>\n\n            <p class=\"d-flex flex-column justify-content-md-between flex-md-row font-weight-bold mt-3 mb-5\">\n                <span>Total</span>\n                <span><span class=\"cart-items-total-with-shipping\"></span> ").concat(currency, "</span>\n            </p>\n            <button\n                class=\"btn-add-to-cart-look d-flex justify-content-between\"\n                data-toggle=\"modal\"\n                data-target=\"#orderModal\"\n            >\n                <span>Continue</span>\n                <span class=\"btn-add-to-cart-plus\"><img src=\"img/check.svg\" alt=\"Add to cart\"></span>\n            </button>\n        </div>\n        ");
  }),
  emptyCartView: new _utils.View(function (_ref3) {
    var _ref3$title = _ref3.title,
        title = _ref3$title === void 0 ? 'Your cart is currently empty.' : _ref3$title,
        _ref3$message = _ref3.message,
        message = _ref3$message === void 0 ? 'You did not insert the product into your cart.' : _ref3$message,
        _ref3$backButtonTitle = _ref3.backButtonTitle,
        backButtonTitle = _ref3$backButtonTitle === void 0 ? 'Back to shop' : _ref3$backButtonTitle;
    return "\n        <div class=\"col-12 col-md-6 offset-md-3\">\n            <div class=\"flex-center-col pt-4\">\n                <h3 class=\"uc font-size-21 text-center\">".concat(title, "</h3>\n                <p class=\"small-p\">").concat(message, "</p>\n                <a href=\"/collections.php\" class=\"uc btn btn-derma\">\n                    ").concat(backButtonTitle, "\n                </a>\n            </div>\n        </div>\n    ");
  }),
  loaderView: new _utils.View(function () {
    return "\n        <div class=\"cart-loader-wrapper\">\n            <div class=\"lds-ripple\"><div></div><div></div></div>\n        </div>\n    ";
  }),
  successfulCheckoutView: new _utils.View(function (_ref4) {
    var _ref4$title = _ref4.title,
        title = _ref4$title === void 0 ? 'Thank you for purchasing our products!' : _ref4$title,
        _ref4$message = _ref4.message,
        message = _ref4$message === void 0 ? 'Check your mail to complete your purchase' : _ref4$message;
    return "\n        <div class=\"flex-center-col\" style=\"height: 100%; width: 100%;\">\n            <h3 class=\"uc font-size-21 text-center\">".concat(title, "</h3>\n            <p class=\"text-center\">").concat(message, "</p>\n        </div>\n    ");
  })
};

var _default = _objectSpread({
  $cartRoot: $('#cart-wrapper .row')
}, views, {
  renderEmptyCart: function renderEmptyCart() {
    this.emptyCartView.render({}, this.$cartRoot);
  },
  renderLoader: function renderLoader() {
    this.loaderView.render({}, this.$cartRoot);
  },
  initialRender: function initialRender(cart) {
    if (cart.length === 0) {
      this.renderEmptyCart();
      return false;
    }

    this.cartInfoView.render(_config.CURRENCY, this.$cartRoot);
    this.cartProductsTableView.render({}, this.$cartRoot, 'prepend');
    this.cartProductView.renderList(cart, '#cart tbody');
    return true;
  }
});

exports.default = _default;
},{"./config":"src/modules/cart/config.js","../../shared/utils":"src/shared/utils/index.js"}],"src/modules/cart/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../../shared/utils");

var _productService = _interopRequireDefault(require("../product/productService"));

var _store = _interopRequireDefault(require("./store"));

var _view = _interopRequireDefault(require("./view"));

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CART_PRODUCTS_LOADING = _config.ACTIONS.CART_PRODUCTS_LOADING,
    CART_PRODUCTS_LOADED = _config.ACTIONS.CART_PRODUCTS_LOADED,
    CART_UPDATED = _config.ACTIONS.CART_UPDATED;

var _default = function () {
  var isCartPage = window.location.pathname === '/cart.php';
  var checkoutFormValidator = null;
  var checkoutInProgress = false;
  var $dom = {};

  function _initCart() {
    _store.default.eventBus.on(CART_PRODUCTS_LOADING, function () {
      if (isCartPage) {
        _view.default.renderLoader();
      }
    });

    _store.default.eventBus.on(CART_PRODUCTS_LOADED, function (cart) {
      if (isCartPage) {
        _view.default.initialRender(cart);

        _cahceCartDom();

        checkoutFormValidator = new _utils.FormValidation({
          $form: $dom.checkoutForm
        });

        _bindCartEvents();
      }
    });

    _store.default.eventBus.on(CART_UPDATED, function (cart) {
      $dom.cartItemsCount.text(_store.default.countItems());

      if (isCartPage) {
        if (cart.length === 0) {
          _view.default.renderEmptyCart();
        }

        var total = parseFloat(_store.default.total()).toFixed(2);
        var totalWithFee = parseFloat(total + _config.SHIPPING_FEE).toFixed(2);
        $dom.cartTotal.text(total);
        $dom.cartTotalWithShipping.text(totalWithFee);
      }
    });

    _store.default.initCart();
  }

  function _cacheDom() {
    $dom.addToCart = $('.btn-add-to-cart');
    $dom.addToCartQuantity = $('#add-to-cart-quantity');
    $dom.cartItemsCount = $('.cart-items-count');
  }

  function _cahceCartDom() {
    $dom.cartTotal = $('.cart-items-total');
    $dom.cartTotalWithShipping = $('.cart-items-total-with-shipping');
    $dom.removeFromCart = $('.remove-from-cart');
    $dom.changeQuantity = $('.change-product-quantity');
    $dom.cartItemsCount = $('.cart-items-count');
    $dom.checkoutForm = $('#checkout-form');
    $dom.orderModal = $('#orderModal');
  }

  function _bindEvents() {
    $dom.addToCart.on('click', _handleAddToCart);
  }

  function _bindCartEvents() {
    $dom.removeFromCart.on('click', _handleRemoveFromCart);
    $dom.changeQuantity.on('change keydown', _handleQuantityChange);
    $dom.checkoutForm.on('submit', _handleCheckout);
  }

  function _handleAddToCart(event) {
    event.preventDefault();
    var $btn = $(event.target).closest('[data-product-id]');
    var id = $btn.data().productId;
    var quantity = 1;

    if (!id) {
      return;
    }

    if ($dom.addToCartQuantity.length > 0) {
      quantity = parseInt($dom.addToCartQuantity.val());
    }

    _store.default.add({
      id: id,
      quantity: quantity
    });

    $.toaster('Successfully added to <a href="/cart.php">cart</a>!');
  }

  function _handleRemoveFromCart(event) {
    event.preventDefault();
    var $el = $(event.target);
    var $product = $el.closest('[data-product-id]');

    _store.default.remove($product.data().productId);

    $product.fadeOut();
  }

  function _handleQuantityChange(event) {
    event.preventDefault();
    var $el = $(event.target);
    var $product = $el.closest('[data-product-id]');
    var product = $product.data();
    var quantity = parseInt($el.val());

    if (isNaN(quantity)) {
      return;
    }

    _store.default.add({
      id: product.productId,
      quantity: quantity
    }, false);

    $product.find('.single-product-total').text(_store.default.totalByProduct(product.productId));
  }

  function _handleCheckout(event) {
    event.preventDefault();

    if (checkoutInProgress) {
      return;
    }

    if (!checkoutFormValidator.validate()) {
      return;
    }

    checkoutInProgress = true;
    var $form = $(event.target);
    var $btn = $form.find('button[type="submit"]');
    var $modalBody = $form.parent();
    var btnTextBefore = $btn.text();
    $btn.css({
      'pointer-events': 'none'
    }).text('Please wait...');

    _productService.default.checkout().then(function () {
      localStorage.removeItem(_config.LC_CART_KEY);
      $form.fadeOut(function () {
        $modalBody.addClass('flex-center-col');

        _view.default.successfulCheckoutView.render({}, $modalBody);
      });
      $dom.orderModal.on('hide.bs.modal', function () {
        return _store.default.clear();
      });
      checkoutInProgress = false;
    }).catch(function () {
      checkoutInProgress = false;
      $btn.css({
        'pointer-events': 'auto'
      }).text(btnTextBefore);
      alert('An error has occurred!');
    });
  }

  return {
    init: function init() {
      _cacheDom();

      _initCart();

      _bindEvents();
    }
  };
}();

exports.default = _default;
},{"../../shared/utils":"src/shared/utils/index.js","../product/productService":"src/modules/product/productService.js","./store":"src/modules/cart/store.js","./view":"src/modules/cart/view.js","./config":"src/modules/cart/config.js"}],"src/modules/product/ordering.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pagination = _interopRequireDefault(require("../../shared/utils/pagination"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function () {
  var orderingTypes = {
    createdAt: 'date',
    priceAsc: 'price',
    priceDesc: 'price-desc'
  };
  var $dom = {};

  function _cacheDom() {
    $dom.root = $('#product-list');
    $dom.ordering = $('.product-ordering');

    _cacheProducts();
  }

  function _cacheProducts() {
    $dom.products = $dom.root.children();
  }

  function _bindEvents() {
    $dom.ordering.on('change', _handleOrderingChange);
  }

  function _getById(id) {
    return $dom.root.find("[data-product=".concat(id, "]")).get(0).outerHTML;
  }

  function _handleOrderingChange(event) {
    event.preventDefault();
    var orderBy = $(event.target).val();
    var $sortedProducts = null;

    switch (orderBy) {
      case orderingTypes.createdAt:
        $sortedProducts = _getSortedDomElements('createdAt', true);
        break;

      case orderingTypes.priceAsc:
        $sortedProducts = _getSortedDomElements('price', false);
        break;

      case orderingTypes.priceDesc:
        $sortedProducts = _getSortedDomElements('price', true);
        break;

      default:
    }

    _render($sortedProducts);
  }

  function _render($products) {
    $dom.root.append($products);

    var visible = _pagination.default.countVisible();

    $dom.root.children().each(function (index, element) {
      if (index > visible - 1) {
        $(element).hide();
      } else {
        $(element).show();
      }
    });

    _renderEffects();
  }

  function _renderEffects() {
    _cacheProducts();
  }

  function _getSortedDomElements(prop, desc) {
    return $dom.products.sort(function (current, next) {
      var currentData = $(current).data();
      var nextData = $(next).data();

      if (currentData[prop] < nextData[prop]) {
        return desc ? 1 : -1;
      }

      if (currentData[prop] > nextData[prop]) {
        return desc ? -1 : 1;
      }

      return 0;
    });
  }

  return {
    init: function init() {
      _cacheDom();

      _bindEvents();

      _renderEffects();
    }
  };
}();

exports.default = _default;
},{"../../shared/utils/pagination":"src/shared/utils/pagination.js"}],"src/modules/product/view.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = require("../cart/config");

var _View = _interopRequireDefault(require("../../shared/utils/View"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = new _View.default(function (_ref, index) {
  var id = _ref.id,
      name = _ref.name,
      price = _ref.price,
      slug = _ref.slug,
      main_photo = _ref.main_photo,
      category = _ref.category,
      created_at = _ref.created_at;
  return "\n    <div\n      class=\"col-6 col-md-4 col-lg-3\"\n      data-pageable\n      data-product-id=\"".concat(id, "\"\n      data-price=\"").concat(price, "\"\n      data-created-at=\"").concat(created_at, "\"\n      style=\"display:").concat(index > 7 ? 'none' : 'block', ";\"\n    >\n      <article class=\"product-preview-article\">\n          <div class=\"product-image-preview position-relative\">\n              <a href=\"/product.php?slug=").concat(slug, "\">\n                  <img src=\"").concat(main_photo, "\" alt=\"").concat(name, "\" class=\"img-fluid\">\n              </a>\n              <button data-product-id=\"").concat(id, "\" class=\"btn-add-to-cart d-flex justify-content-between preview-product-atc\">\n                <span>Add to cart</span>\n                <span class=\"btn-add-to-cart-plus\"><img src=\"img/plus.svg\" alt=\"Add to cart\"></span>\n              </button>\n          </div>\n          <div class=\"d-flex flex-column justify-content-md-between flex-md-row\">\n              <h4><a href=\"/product.php?slug=").concat(slug, "\">").concat(name, "</a></h4>\n              <h4>").concat(price, "  ").concat(_config.CURRENCY, "</h4>\n          </div>\n          ").concat(category && function () {
    return "\n              <h6 class=\"pb-1\">\n                <a style=\"color: inherit;\" href=\"/collection.php?slug=".concat(category.slug, "\">\n                  ").concat(category.name, "\n                </a>\n              </h6>\n          ");
  }(), "\n      </article>\n    </div>\n  ");
});

exports.default = _default;
},{"../cart/config":"src/modules/cart/config.js","../../shared/utils/View":"src/shared/utils/View.js"}],"src/modules/product/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ordering = _interopRequireDefault(require("./ordering"));

var _view = _interopRequireDefault(require("./view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  view: _view.default,
  init: function init(_ref) {
    var featuredProducts = _ref.featuredProducts,
        categoryProducts = _ref.categoryProducts;

    _view.default.renderList(featuredProducts.slice(0, 4), '#home-product-group-1 .row');

    _view.default.renderList(featuredProducts.slice(4, 8), '#home-product-group-2 .row');

    _view.default.renderList(categoryProducts, '#product-list');

    _ordering.default.init();
  }
};
exports.default = _default;
},{"./ordering":"src/modules/product/ordering.js","./view":"src/modules/product/view.js"}],"src/modules/category/view.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _View = _interopRequireDefault(require("../../shared/utils/View"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = new _View.default(function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      slug = _ref.slug,
      main_photo = _ref.main_photo;
  return "\n    <div class=\"col-6 col-md-4 col-lg-3\">\n      <article class=\"product-preview-article\">\n          <div class=\"position-relative product-image-preview d-flex justify-content-center align-items-center flex-column\">\n              <img src=\"".concat(main_photo, "\" alt=\"").concat(name, "\" class=\"img-fluid\">\n              <div class=\"image-overlay position-absolute\"></div>\n              <div class=\"position-absolute box-block d-flex justify-content-center align-items-center flex-column\">\n                  <a class=\"text-center full-wh flex-center-col\" href=\"collection.php?slug=").concat(slug, "\">\n                    ").concat(name, "\n                  </a>\n              </div>\n          </div>\n          <div class=\"text-center\">\n              <h4><a href=\"collection.php?slug=").concat(slug, "\">").concat(name, "</a></h4>\n          </div>\n      </article>\n    </div>\n    ");
});

exports.default = _default;
},{"../../shared/utils/View":"src/shared/utils/View.js"}],"src/modules/category/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _view = _interopRequireDefault(require("./view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  view: _view.default,
  init: function init(_ref) {
    var categories = _ref.categories;

    _view.default.renderList(categories, '#collection-row');
  }
};
exports.default = _default;
},{"./view":"src/modules/category/view.js"}],"src/modules/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "cart", {
  enumerable: true,
  get: function () {
    return _cart.default;
  }
});
Object.defineProperty(exports, "product", {
  enumerable: true,
  get: function () {
    return _product.default;
  }
});
Object.defineProperty(exports, "category", {
  enumerable: true,
  get: function () {
    return _category.default;
  }
});

var _cart = _interopRequireDefault(require("./cart"));

var _product = _interopRequireDefault(require("./product"));

var _category = _interopRequireDefault(require("./category"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./cart":"src/modules/cart/index.js","./product":"src/modules/product/index.js","./category":"src/modules/category/index.js"}],"src/modules/category/categoryService.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  fetchAll: function fetchAll() {
    return fetch('/api/categories.json').then(function (res) {
      return res.json();
    });
  }
};
exports.default = _default;
},{}],"src/app.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("./shared/utils");

var _modules = require("./modules");

var _config = require("./modules/cart/config");

var _productService = _interopRequireDefault(require("./modules/product/productService"));

var _categoryService = _interopRequireDefault(require("./modules/category/categoryService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var app = {
  load: function load() {
    var slug = _utils.url.getParam('slug');

    return Promise.all([_productService.default.fetchFeatured(), _productService.default.fetchByCategory(slug), _categoryService.default.fetchAll()]);
  },
  initVideoModal: function initVideoModal() {
    var $videoModal = $('#videoModal');
    var $videoIframe = $videoModal.find('iframe');
    $videoModal.on('show.bs.modal', function (event) {
      var videoId = $(event.relatedTarget).data().video.split('?')[1].slice(2);
      var embedUrl = "https://www.youtube.com/embed/".concat(videoId, "?autoplay=1");
      $videoIframe.attr('src', embedUrl);
    }).on('hide.bs.modal', function () {
      $videoIframe.attr('src', '');
    });
  },
  initContactForm: function initContactForm() {
    var $form = $('#contact-form');
    var validator = new _utils.FormValidation({
      $form: $form
    });
    $form.on('submit', function (event) {
      event.preventDefault();

      if (!validator.validate()) {
        return;
      }

      var $btn = $form.find('button[type="submit"]');
      var $formWrapper = $form.parent();
      $btn.css({
        'pointer-events': 'none'
      }).text('Please wait...');
      (0, _utils.wait)({}, 1000).then(function () {
        $form.fadeOut(function () {
          $formWrapper.html("<div><p class=\"font-size-21\">Thank you. You have successfully sent a message. We'll answer soon.</p></div>");
        });
      });
    });
  },
  initNewsletterForm: function initNewsletterForm() {
    var $form = $('#newsletter-form');
    var validator = new _utils.FormValidation({
      $form: $form
    });
    $form.on('submit', function (event) {
      event.preventDefault();

      if (!validator.validate()) {
        return;
      }

      var $formWrapper = $form.parent();
      (0, _utils.wait)({}, 100).then(function () {
        $form.fadeOut(function () {
          $formWrapper.append("<div><p class=\"font-size-18 text-center\">You have successfully singed up for newsletter.</p></div>");
        });
      });
    });
  },
  showCurrency: function showCurrency() {
    $('.currency').text(_config.CURRENCY);
  },
  init: function init() {
    app.initNewsletterForm();
    app.initContactForm();
    app.initVideoModal();
    app.load().then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 3),
          featuredProducts = _ref2[0],
          categoryProducts = _ref2[1],
          categories = _ref2[2];

      _modules.product.init({
        featuredProducts: featuredProducts,
        categoryProducts: categoryProducts
      });

      _modules.category.init({
        categories: categories
      });

      _modules.cart.init();

      _utils.pagination.init();

      app.showCurrency();
    });
  }
};
var _default = app;
exports.default = _default;
},{"./shared/utils":"src/shared/utils/index.js","./modules":"src/modules/index.js","./modules/cart/config":"src/modules/cart/config.js","./modules/product/productService":"src/modules/product/productService.js","./modules/category/categoryService":"src/modules/category/categoryService.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _app = _interopRequireDefault(require("./src/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(_app.default.init);
},{"./src/app":"src/app.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37503" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/index.map