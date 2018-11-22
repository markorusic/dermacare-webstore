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

var View =
/*#__PURE__*/
function () {
  function View(getHTML) {
    _classCallCheck(this, View);

    this.getHTML = getHTML;
  }

  _createClass(View, [{
    key: "render",
    value: function render() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      View.render.apply(View, [this.getHTML].concat(args));
    }
  }, {
    key: "renderList",
    value: function renderList() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      View.renderList.apply(View, [this.getHTML].concat(args));
    }
  }], [{
    key: "render",
    value: function render(getHTML, item, selector) {
      $(selector).html(getHTML(item));
    }
  }, {
    key: "renderList",
    value: function renderList(getHTML, items, selector) {
      $(selector).html(items.map(getHTML).join(''));
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
},{"./EventEmitter":"src/shared/utils/EventEmitter.js","./View":"src/shared/utils/View.js","./pagination":"src/shared/utils/pagination.js","./url":"src/shared/utils/url.js","./wait":"src/shared/utils/wait.js","./FormValidation":"src/shared/utils/FormValidation.js","./toaster":"src/shared/utils/toaster.js"}],"src/mockup/products.json":[function(require,module,exports) {
module.exports = [{
  "id": 1,
  "name": "24k premium Gold Mask",
  "price": "120",
  "slug": "24k-premium-gold-mask-1",
  "main_photo": "img/glow.jpg",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "created_at": 1540339200000,
  "category": {
    "name": "GLOW edition",
    "slug": "glow-edition"
  }
}, {
  "id": 2,
  "name": "Miracle premium Silver Mask",
  "price": "120",
  "slug": "miracle-premium-silver-mask-2",
  "main_photo": "img/pp-2.jpg",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "created_at": 1540425600000,
  "category": {
    "name": "GLOW edition",
    "slug": "glow-edition"
  }
}, {
  "id": 3,
  "name": "Pure Vitality Mask",
  "price": "400",
  "slug": "pure-vitality-mask-3",
  "main_photo": "img/pp-3.jpg",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "created_at": 1540598400000,
  "category": {
    "name": "BOOST",
    "slug": "boost"
  }
}, {
  "id": 4,
  "name": "Re-Birth Serum",
  "price": "50",
  "slug": "re-birth-serum-4",
  "main_photo": "img/pp-4.jpg",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "created_at": 1540684800000,
  "category": {
    "name": "BOOST",
    "slug": "boost"
  }
}, {
  "id": 5,
  "name": "24k premium Gold Mask",
  "price": "120",
  "slug": "24k-premium-gold-mask-5",
  "main_photo": "img/glow.jpg",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "created_at": 1540944000000,
  "category": {
    "name": "BOOST",
    "slug": "boost"
  }
}, {
  "id": 6,
  "name": "Miracle premium Silver Mask",
  "price": "120",
  "slug": "miracle-premium-silver-mask-6",
  "main_photo": "img/pp-2.jpg",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "created_at": 1541030400000,
  "category": {
    "name": "BOOST",
    "slug": "boost"
  }
}, {
  "id": 7,
  "name": "Pure Vitality Mask",
  "price": "120",
  "slug": "pure-vitality-mask-7",
  "main_photo": "img/pp-3.jpg",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "created_at": 1541116800000,
  "category": {
    "name": "BOOST",
    "slug": "boost"
  }
}, {
  "id": 8,
  "name": "Re-Birth Serum",
  "price": "120",
  "slug": "re-birth-serum-8",
  "main_photo": "img/pp-4.jpg",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "created_at": 1541289600000,
  "category": {
    "name": "BOOST",
    "slug": "boost"
  }
}, {
  "id": 9,
  "name": "24k premium Gold Mask",
  "price": "190",
  "slug": "24k-premium-gold-mask-9",
  "main_photo": "img/glow.jpg",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "created_at": 1541548800000,
  "category": {
    "name": "GLOW edition",
    "slug": "glow-edition"
  }
}, {
  "id": 10,
  "name": "Miracle premium Silver Mask",
  "price": "120",
  "slug": "miracle-premium-silver-mask-10",
  "main_photo": "img/pp-2.jpg",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "created_at": 1541635200000,
  "category": {
    "name": "GLOW edition",
    "slug": "glow-edition"
  }
}, {
  "id": 11,
  "name": "Pure Vitality Mask",
  "price": "120",
  "slug": "pure-vitality-mask-11",
  "main_photo": "img/pp-3.jpg",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "created_at": 1541721600000,
  "category": {
    "name": "GLOW edition",
    "slug": "glow-edition"
  }
}, {
  "id": 12,
  "name": "Re-Birth Serum",
  "price": "120",
  "slug": "re-birth-serum-12",
  "main_photo": "img/pp-4.jpg",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "created_at": 1541980800000,
  "category": {
    "name": "GLOW edition",
    "slug": "glow-edition"
  }
}, {
  "id": 13,
  "name": "24k premium Gold Mask",
  "price": "120",
  "slug": "24k-premium-gold-mask-13",
  "main_photo": "img/glow.jpg",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "created_at": 1542067200000,
  "category": {
    "name": "GLOW edition",
    "slug": "glow-edition"
  }
}, {
  "id": 14,
  "name": "Miracle premium Silver Mask",
  "price": "120",
  "slug": "miracle-premium-silver-mask-14",
  "main_photo": "img/pp-2.jpg",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "created_at": 1542153600000,
  "category": {
    "name": "GLOW edition",
    "slug": "glow-edition"
  }
}, {
  "id": 15,
  "name": "Pure Vitality Mask",
  "price": "120",
  "slug": "pure-vitality-mask-15",
  "main_photo": "img/pp-3.jpg",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "created_at": 1542499200000,
  "category": {
    "name": "GLOW edition",
    "slug": "glow-edition"
  }
}, {
  "id": 16,
  "name": "Re-Birth Serum",
  "price": "120",
  "slug": "re-birth-serum-16",
  "main_photo": "img/pp-4.jpg",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "created_at": 1542585600000,
  "category": {
    "name": "GLOW edition",
    "slug": "glow-edition"
  }
}, {
  "id": 17,
  "name": "24k premium Gold Mask",
  "price": "120",
  "slug": "24k-premium-gold-mask-17",
  "main_photo": "img/glow.jpg",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "created_at": 1542758400000,
  "category": {
    "name": "GLOW edition",
    "slug": "glow-edition"
  }
}, {
  "id": 18,
  "name": "Miracle premium Silver Mask",
  "price": "120",
  "slug": "miracle-premium-silver-mask-18",
  "main_photo": "img/pp-2.jpg",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "created_at": 1542844800000,
  "category": {
    "name": "GLOW edition",
    "slug": "glow-edition"
  }
}, {
  "id": 19,
  "name": "Pure Vitality Mask",
  "price": "120",
  "slug": "pure-vitality-mask-19",
  "main_photo": "img/pp-3.jpg",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "created_at": 1543017600000,
  "category": {
    "name": "GLOW edition",
    "slug": "glow-edition"
  }
}, {
  "id": 20,
  "name": "Re-Birth Serum",
  "price": "120",
  "slug": "re-birth-serum-20",
  "main_photo": "img/pp-4.jpg",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "created_at": 1543104000000,
  "category": {
    "name": "GLOW edition",
    "slug": "glow-edition"
  }
}, {
  "id": 171,
  "name": "24k premium Gold Mask 2",
  "price": "140",
  "slug": "24k-premium-gold-mask-2-171",
  "main_photo": "img/glow.jpg",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "created_at": 1542758400000,
  "category": {
    "name": "SKIN CARE",
    "slug": "skin-care"
  }
}, {
  "id": 181,
  "name": "Miracle premium Silver Mask 2",
  "price": "140",
  "slug": "miracle-premium-silver-mask-2-181",
  "main_photo": "img/pp-2.jpg",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "created_at": 1542844800000,
  "category": {
    "name": "SKIN CARE",
    "slug": "skin-care"
  }
}, {
  "id": 191,
  "name": "Pure Vitality Mask 2",
  "price": "140",
  "slug": "pure-vitality-mask-2-191",
  "main_photo": "img/pp-3.jpg",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "created_at": 1543017600000,
  "category": {
    "name": "SKIN CARE",
    "slug": "skin-care"
  }
}, {
  "id": 201,
  "name": "Re-Birth Serum 2",
  "price": "140",
  "slug": "re-birth-serum-2-201",
  "main_photo": "img/pp-4.jpg",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "created_at": 1543104000000,
  "category": {
    "name": "SKIN CARE",
    "slug": "skin-care"
  }
}];
},{}],"src/modules/product/productService.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _products = _interopRequireDefault(require("../../mockup/products.json"));

var _wait = _interopRequireDefault(require("../../shared/utils/wait"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  fetchAll: function fetchAll() {
    return (0, _wait.default)(_products.default, 500);
  },
  fetchFeatured: function fetchFeatured() {
    return (0, _wait.default)(_products.default.slice(0, 8));
  },
  fetchByCategory: function fetchByCategory(cateogrySlug) {
    return (0, _wait.default)(_products.default.filter(function (_ref) {
      var category = _ref.category;
      return category.slug === cateogrySlug;
    }));
  },
  checkout: function checkout() {
    return (0, _wait.default)(true, 1500);
  }
};
exports.default = _default;
},{"../../mockup/products.json":"src/mockup/products.json","../../shared/utils/wait":"src/shared/utils/wait.js"}],"src/modules/cart/config.js":[function(require,module,exports) {
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var templates = {
  cartProduct: function cartProduct(_ref) {
    var id = _ref.id,
        name = _ref.name,
        main_photo = _ref.main_photo,
        price = _ref.price,
        quantity = _ref.quantity;
    return "\n            <tr data-product-id=\"".concat(id, "\">\n                <td data-th=\"Product\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-4 hidden-xs\">\n                            <div class=\"card-product-img\"\n                                style=\"background-image: url('").concat(main_photo, "');\"></div>\n                        </div>\n                        <div class=\"col-sm-8 d-flex align-items-center\">\n                        \n                            <h4>").concat(name, "</h4>\n                        </div>\n                    </div>\n                </td>\n                <td data-th=\"Price\">").concat(price, " ").concat(_config.CURRENCY, "</td>\n                \n                <td data-th=\"Quantity\">\n                    <input value=\"").concat(quantity, "\" class=\"change-product-quantity input-number\" type=\"number\" step=\"1\" min=\"1\" name=\"quantity\">\n                </td>\n                <td data-th=\"Total\">\n                    <span class=\"single-product-total\">").concat(price * quantity, "</span> ").concat(_config.CURRENCY, "\n                </td>\n                <td class=\"actions\" data-th=\"Ukloni\">\n                    <button class=\"remove-from-cart btn btn-sm\"><img src=\"").concat(window.location.origin, "/img/x.svg\" alt=\"\"></button>\n                </td>\n            </tr>\n        ");
  },
  cartProductsWrapper: function cartProductsWrapper(productsHTML) {
    return "\n            <div class=\"col-md-8\">\n                <h6>Selected products (<span class=\"cart-items-count\"></span>)</h6>\n                <hr>\n                <div class=\"table-responsive\">\n                    <table id=\"cart\" class=\"table table-hover table-condensed\">\n                        <thead>\n                        <tr>\n                            <th>Product</th>\n                            <th>Price</th>\n                            <th>Quantity</th>\n                            <th>Total</th>\n                            <th>&nbsp;</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                            ".concat(productsHTML, "\n                        </tbody>\n                    </table>\n                </div>\n\n            </div>\n        ");
  },
  cartSum: function cartSum() {
    return "\n            <div class=\"col-md-4 info-box\">\n                <h6>Total</h6>\n                <hr>\n                <p class=\"d-flex flex-column justify-content-md-between flex-md-row\">\n                    <span>Total value of the products</span>\n                    <span><span class=\"cart-items-total\"></span> ".concat(_config.CURRENCY, "</span>\n                </p>\n\n                <p class=\"d-flex flex-column justify-content-md-between flex-md-row font-weight-bold mt-3 mb-5\">\n                    <span>Total</span>\n                    <span><span class=\"cart-items-total-with-shipping\"></span> ").concat(_config.CURRENCY, "</span>\n                </p>\n                <button\n                    class=\"btn-add-to-cart-look d-flex justify-content-between\"\n                    data-toggle=\"modal\"\n                    data-target=\"#orderModal\"\n                >\n                    <span>Continue</span>\n                    <span class=\"btn-add-to-cart-plus\"><img src=\"img/check.svg\" alt=\"Add to cart\"></span>\n                </button>\n            </div>\n        ");
  },
  emptyCart: "\n        <div class=\"col-12 col-md-6 offset-md-3\">\n            <div class=\"flex-center-col pt-4\">\n                <h3 class=\"uc font-size-21 text-center\">Your cart is currently empty.</h3>\n                <p class=\"small-p\">You did not insert the product into your cart.</p>\n                <a href=\"/collections.php\" class=\"uc btn btn-derma\">\n                    Back to shop\n                </a>\n            </div>\n        </div>\n    ",
  loader: "\n        <div class=\"cart-loader-wrapper\">\n            <div class=\"lds-ripple\"><div></div><div></div></div>\n        </div>\n    ",
  successfulyCheckout: "\n        <div class=\"flex-center-col\" style=\"height: 100%;\">\n            <h3 class=\"uc font-size-21 text-center\">Thank you for purchasing our products!</h3>\n            <p>Check your mail to complete your purchase</p>\n        </div>\n    "
};

var _default = _objectSpread({
  $cartWrapper: $('#cart-wrapper .row')
}, templates, {
  renderEmptyCart: function renderEmptyCart() {
    this.$cartWrapper.html(this.emptyCart);
  },
  renderLoader: function renderLoader() {
    this.$cartWrapper.html(this.loader);
  },
  initialRender: function initialRender(cart) {
    if (cart.length === 0) {
      this.renderEmptyCart();
      return false;
    }

    var productsHTML = cart.map(this.cartProduct).join('');
    var cartTableHTML = this.cartProductsWrapper(productsHTML);
    var cartSumHTML = this.cartSum();
    this.$cartWrapper.html(cartTableHTML + cartSumHTML);
    return true;
  }
});

exports.default = _default;
},{"./config":"src/modules/cart/config.js"}],"src/modules/cart/index.js":[function(require,module,exports) {
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
        $modalBody.addClass('flex-center-col').html(_view.default.successfulyCheckout);
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
},{"./cart":"src/modules/cart/index.js","./product":"src/modules/product/index.js","./category":"src/modules/category/index.js"}],"src/mockup/categories.json":[function(require,module,exports) {
module.exports = [{
  "id": 1,
  "name": "GLOW EDITION",
  "slug": "glow-edition",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "main_photo": "img/kat1.jpg"
}, {
  "id": 2,
  "name": "CLEAN & CLEAR",
  "slug": "clean-and-clear",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "main_photo": "img/kat2.jpg"
}, {
  "id": 3,
  "name": "BOOST",
  "slug": "boost",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "main_photo": "img/kat3.jpg"
}, {
  "id": 4,
  "name": "SKIN CARE",
  "slug": "skin-care",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "main_photo": "img/kat4.jpg"
}];
},{}],"src/modules/category/categoryService.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _categories = _interopRequireDefault(require("../../mockup/categories.json"));

var _wait = _interopRequireDefault(require("../../shared/utils/wait"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  fetchAll: function fetchAll() {
    return (0, _wait.default)(_categories.default);
  }
};
exports.default = _default;
},{"../../mockup/categories.json":"src/mockup/categories.json","../../shared/utils/wait":"src/shared/utils/wait.js"}],"src/app.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "34807" + '/');

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