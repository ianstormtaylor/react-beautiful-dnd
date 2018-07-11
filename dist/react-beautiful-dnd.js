(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.ReactBeautifulDnd = {}),global.React));
}(this, (function (exports,React) { 'use strict';

	var React__default = 'default' in React ? React['default'] : React;

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var classCallCheck = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	});

	var _classCallCheck = unwrapExports(classCallCheck);

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	var _toInteger = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

	var _toInteger$1 = /*#__PURE__*/Object.freeze({
		default: _toInteger,
		__moduleExports: _toInteger
	});

	// 7.2.1 RequireObjectCoercible(argument)
	var _defined = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

	var _defined$1 = /*#__PURE__*/Object.freeze({
		default: _defined,
		__moduleExports: _defined
	});

	var toInteger = ( _toInteger$1 && _toInteger ) || _toInteger$1;

	var defined = ( _defined$1 && _defined ) || _defined$1;

	// true  -> String#at
	// false -> String#codePointAt
	var _stringAt = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

	var _stringAt$1 = /*#__PURE__*/Object.freeze({
		default: _stringAt,
		__moduleExports: _stringAt
	});

	var _library = true;

	var _library$1 = /*#__PURE__*/Object.freeze({
		default: _library,
		__moduleExports: _library
	});

	var _global = createCommonjsModule(function (module) {
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
	});

	var _global$1 = /*#__PURE__*/Object.freeze({
		default: _global,
		__moduleExports: _global
	});

	var _core = createCommonjsModule(function (module) {
	var core = module.exports = { version: '2.5.5' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
	});
	var _core_1 = _core.version;

	var _core$1 = /*#__PURE__*/Object.freeze({
		default: _core,
		__moduleExports: _core,
		version: _core_1
	});

	var _aFunction = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

	var _aFunction$1 = /*#__PURE__*/Object.freeze({
		default: _aFunction,
		__moduleExports: _aFunction
	});

	var aFunction = ( _aFunction$1 && _aFunction ) || _aFunction$1;

	// optional / simple context binding

	var _ctx = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var _ctx$1 = /*#__PURE__*/Object.freeze({
		default: _ctx,
		__moduleExports: _ctx
	});

	var _isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var _isObject$1 = /*#__PURE__*/Object.freeze({
		default: _isObject,
		__moduleExports: _isObject
	});

	var isObject = ( _isObject$1 && _isObject ) || _isObject$1;

	var _anObject = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

	var _anObject$1 = /*#__PURE__*/Object.freeze({
		default: _anObject,
		__moduleExports: _anObject
	});

	var _fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

	var _fails$1 = /*#__PURE__*/Object.freeze({
		default: _fails,
		__moduleExports: _fails
	});

	var require$$1 = ( _fails$1 && _fails ) || _fails$1;

	// Thank's IE8 for his funny defineProperty
	var _descriptors = !require$$1(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});

	var _descriptors$1 = /*#__PURE__*/Object.freeze({
		default: _descriptors,
		__moduleExports: _descriptors
	});

	var require$$0 = ( _global$1 && _global ) || _global$1;

	var document$1 = require$$0.document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document$1) && isObject(document$1.createElement);
	var _domCreate = function (it) {
	  return is ? document$1.createElement(it) : {};
	};

	var _domCreate$1 = /*#__PURE__*/Object.freeze({
		default: _domCreate,
		__moduleExports: _domCreate
	});

	var require$$0$1 = ( _descriptors$1 && _descriptors ) || _descriptors$1;

	var require$$2 = ( _domCreate$1 && _domCreate ) || _domCreate$1;

	var _ie8DomDefine = !require$$0$1 && !require$$1(function () {
	  return Object.defineProperty(require$$2('div'), 'a', { get: function () { return 7; } }).a != 7;
	});

	var _ie8DomDefine$1 = /*#__PURE__*/Object.freeze({
		default: _ie8DomDefine,
		__moduleExports: _ie8DomDefine
	});

	// 7.1.1 ToPrimitive(input [, PreferredType])

	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var _toPrimitive = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var _toPrimitive$1 = /*#__PURE__*/Object.freeze({
		default: _toPrimitive,
		__moduleExports: _toPrimitive
	});

	var anObject = ( _anObject$1 && _anObject ) || _anObject$1;

	var IE8_DOM_DEFINE = ( _ie8DomDefine$1 && _ie8DomDefine ) || _ie8DomDefine$1;

	var toPrimitive = ( _toPrimitive$1 && _toPrimitive ) || _toPrimitive$1;

	var dP = Object.defineProperty;

	var f = require$$0$1 ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var _objectDp = {
		f: f
	};

	var _objectDp$1 = /*#__PURE__*/Object.freeze({
		default: _objectDp,
		__moduleExports: _objectDp,
		f: f
	});

	var _propertyDesc = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var _propertyDesc$1 = /*#__PURE__*/Object.freeze({
		default: _propertyDesc,
		__moduleExports: _propertyDesc
	});

	var dP$1 = ( _objectDp$1 && _objectDp ) || _objectDp$1;

	var descriptor = ( _propertyDesc$1 && _propertyDesc ) || _propertyDesc$1;

	var _hide = require$$0$1 ? function (object, key, value) {
	  return dP$1.f(object, key, descriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var _hide$1 = /*#__PURE__*/Object.freeze({
		default: _hide,
		__moduleExports: _hide
	});

	var hasOwnProperty = {}.hasOwnProperty;
	var _has = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

	var _has$1 = /*#__PURE__*/Object.freeze({
		default: _has,
		__moduleExports: _has
	});

	var core = ( _core$1 && _core ) || _core$1;

	var require$$0$2 = ( _ctx$1 && _ctx ) || _ctx$1;

	var require$$0$3 = ( _hide$1 && _hide ) || _hide$1;

	var has = ( _has$1 && _has ) || _has$1;

	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? require$$0 : IS_STATIC ? require$$0[name] : (require$$0[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && has(exports, key)) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? require$$0$2(out, require$$0)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? require$$0$2(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) require$$0$3(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	var _export = $export;

	var _export$1 = /*#__PURE__*/Object.freeze({
		default: _export,
		__moduleExports: _export
	});

	var _redefine = require$$0$3;

	var _redefine$1 = /*#__PURE__*/Object.freeze({
		default: _redefine,
		__moduleExports: _redefine
	});

	var _iterators = {};

	var _iterators$1 = /*#__PURE__*/Object.freeze({
		default: _iterators,
		__moduleExports: _iterators
	});

	var toString = {}.toString;

	var _cof = function (it) {
	  return toString.call(it).slice(8, -1);
	};

	var _cof$1 = /*#__PURE__*/Object.freeze({
		default: _cof,
		__moduleExports: _cof
	});

	var cof = ( _cof$1 && _cof ) || _cof$1;

	// fallback for non-array-like ES3 and non-enumerable old V8 strings

	// eslint-disable-next-line no-prototype-builtins
	var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

	var _iobject$1 = /*#__PURE__*/Object.freeze({
		default: _iobject,
		__moduleExports: _iobject
	});

	var IObject = ( _iobject$1 && _iobject ) || _iobject$1;

	// to indexed object, toObject with fallback for non-array-like ES3 strings


	var _toIobject = function (it) {
	  return IObject(defined(it));
	};

	var _toIobject$1 = /*#__PURE__*/Object.freeze({
		default: _toIobject,
		__moduleExports: _toIobject
	});

	// 7.1.15 ToLength

	var min = Math.min;
	var _toLength = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

	var _toLength$1 = /*#__PURE__*/Object.freeze({
		default: _toLength,
		__moduleExports: _toLength
	});

	var max = Math.max;
	var min$1 = Math.min;
	var _toAbsoluteIndex = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min$1(index, length);
	};

	var _toAbsoluteIndex$1 = /*#__PURE__*/Object.freeze({
		default: _toAbsoluteIndex,
		__moduleExports: _toAbsoluteIndex
	});

	var toIObject = ( _toIobject$1 && _toIobject ) || _toIobject$1;

	var toLength = ( _toLength$1 && _toLength ) || _toLength$1;

	var toAbsoluteIndex = ( _toAbsoluteIndex$1 && _toAbsoluteIndex ) || _toAbsoluteIndex$1;

	// false -> Array#indexOf
	// true  -> Array#includes



	var _arrayIncludes = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var _arrayIncludes$1 = /*#__PURE__*/Object.freeze({
		default: _arrayIncludes,
		__moduleExports: _arrayIncludes
	});

	var SHARED = '__core-js_shared__';
	var store = require$$0[SHARED] || (require$$0[SHARED] = {});
	var _shared = function (key) {
	  return store[key] || (store[key] = {});
	};

	var _shared$1 = /*#__PURE__*/Object.freeze({
		default: _shared,
		__moduleExports: _shared
	});

	var id = 0;
	var px = Math.random();
	var _uid = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

	var _uid$1 = /*#__PURE__*/Object.freeze({
		default: _uid,
		__moduleExports: _uid
	});

	var require$$0$4 = ( _shared$1 && _shared ) || _shared$1;

	var uid = ( _uid$1 && _uid ) || _uid$1;

	var shared = require$$0$4('keys');

	var _sharedKey = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};

	var _sharedKey$1 = /*#__PURE__*/Object.freeze({
		default: _sharedKey,
		__moduleExports: _sharedKey
	});

	var require$$0$5 = ( _arrayIncludes$1 && _arrayIncludes ) || _arrayIncludes$1;

	var require$$0$6 = ( _sharedKey$1 && _sharedKey ) || _sharedKey$1;

	var arrayIndexOf = require$$0$5(false);
	var IE_PROTO = require$$0$6('IE_PROTO');

	var _objectKeysInternal = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

	var _objectKeysInternal$1 = /*#__PURE__*/Object.freeze({
		default: _objectKeysInternal,
		__moduleExports: _objectKeysInternal
	});

	// IE 8- don't enum bug keys
	var _enumBugKeys = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

	var _enumBugKeys$1 = /*#__PURE__*/Object.freeze({
		default: _enumBugKeys,
		__moduleExports: _enumBugKeys
	});

	var $keys = ( _objectKeysInternal$1 && _objectKeysInternal ) || _objectKeysInternal$1;

	var require$$0$7 = ( _enumBugKeys$1 && _enumBugKeys ) || _enumBugKeys$1;

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)



	var _objectKeys = Object.keys || function keys(O) {
	  return $keys(O, require$$0$7);
	};

	var _objectKeys$1 = /*#__PURE__*/Object.freeze({
		default: _objectKeys,
		__moduleExports: _objectKeys
	});

	var getKeys = ( _objectKeys$1 && _objectKeys ) || _objectKeys$1;

	var _objectDps = require$$0$1 ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP$1.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

	var _objectDps$1 = /*#__PURE__*/Object.freeze({
		default: _objectDps,
		__moduleExports: _objectDps
	});

	var document$2 = require$$0.document;
	var _html = document$2 && document$2.documentElement;

	var _html$1 = /*#__PURE__*/Object.freeze({
		default: _html,
		__moduleExports: _html
	});

	var dPs = ( _objectDps$1 && _objectDps ) || _objectDps$1;

	var require$$2$1 = ( _html$1 && _html ) || _html$1;

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



	var IE_PROTO$1 = require$$0$6('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE$1 = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = require$$2('iframe');
	  var i = require$$0$7.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  require$$2$1.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE$1][require$$0$7[i]];
	  return createDict();
	};

	var _objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE$1] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE$1] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

	var _objectCreate$1 = /*#__PURE__*/Object.freeze({
		default: _objectCreate,
		__moduleExports: _objectCreate
	});

	var _wks = createCommonjsModule(function (module) {
	var store = require$$0$4('wks');

	var Symbol = require$$0.Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;
	});

	var _wks$1 = /*#__PURE__*/Object.freeze({
		default: _wks,
		__moduleExports: _wks
	});

	var require$$1$1 = ( _wks$1 && _wks ) || _wks$1;

	var def = dP$1.f;

	var TAG = require$$1$1('toStringTag');

	var _setToStringTag = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

	var _setToStringTag$1 = /*#__PURE__*/Object.freeze({
		default: _setToStringTag,
		__moduleExports: _setToStringTag
	});

	var create = ( _objectCreate$1 && _objectCreate ) || _objectCreate$1;

	var setToStringTag = ( _setToStringTag$1 && _setToStringTag ) || _setToStringTag$1;

	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	require$$0$3(IteratorPrototype, require$$1$1('iterator'), function () { return this; });

	var _iterCreate = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

	var _iterCreate$1 = /*#__PURE__*/Object.freeze({
		default: _iterCreate,
		__moduleExports: _iterCreate
	});

	// 7.1.13 ToObject(argument)

	var _toObject = function (it) {
	  return Object(defined(it));
	};

	var _toObject$1 = /*#__PURE__*/Object.freeze({
		default: _toObject,
		__moduleExports: _toObject
	});

	var toObject = ( _toObject$1 && _toObject ) || _toObject$1;

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


	var IE_PROTO$2 = require$$0$6('IE_PROTO');
	var ObjectProto = Object.prototype;

	var _objectGpo = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO$2)) return O[IE_PROTO$2];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

	var _objectGpo$1 = /*#__PURE__*/Object.freeze({
		default: _objectGpo,
		__moduleExports: _objectGpo
	});

	var LIBRARY = ( _library$1 && _library ) || _library$1;

	var $export$1 = ( _export$1 && _export ) || _export$1;

	var redefine = ( _redefine$1 && _redefine ) || _redefine$1;

	var Iterators = ( _iterators$1 && _iterators ) || _iterators$1;

	var $iterCreate = ( _iterCreate$1 && _iterCreate ) || _iterCreate$1;

	var getPrototypeOf = ( _objectGpo$1 && _objectGpo ) || _objectGpo$1;

	var ITERATOR = require$$1$1('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') require$$0$3(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    require$$0$3(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export$1($export$1.P + $export$1.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

	var _iterDefine$1 = /*#__PURE__*/Object.freeze({
		default: _iterDefine,
		__moduleExports: _iterDefine
	});

	var require$$0$8 = ( _stringAt$1 && _stringAt ) || _stringAt$1;

	var require$$0$9 = ( _iterDefine$1 && _iterDefine ) || _iterDefine$1;

	var $at = require$$0$8(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	require$$0$9(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

	var _addToUnscopables = function () { /* empty */ };

	var _addToUnscopables$1 = /*#__PURE__*/Object.freeze({
		default: _addToUnscopables,
		__moduleExports: _addToUnscopables
	});

	var _iterStep = function (done, value) {
	  return { value: value, done: !!done };
	};

	var _iterStep$1 = /*#__PURE__*/Object.freeze({
		default: _iterStep,
		__moduleExports: _iterStep
	});

	var addToUnscopables = ( _addToUnscopables$1 && _addToUnscopables ) || _addToUnscopables$1;

	var step = ( _iterStep$1 && _iterStep ) || _iterStep$1;

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	var es6_array_iterator = require$$0$9(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

	var TO_STRING_TAG = require$$1$1('toStringTag');

	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');

	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = require$$0[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) require$$0$3(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

	var f$1 = require$$1$1;

	var _wksExt = {
		f: f$1
	};

	var _wksExt$1 = /*#__PURE__*/Object.freeze({
		default: _wksExt,
		__moduleExports: _wksExt,
		f: f$1
	});

	var wksExt = ( _wksExt$1 && _wksExt ) || _wksExt$1;

	var iterator = wksExt.f('iterator');

	var iterator$1 = /*#__PURE__*/Object.freeze({
		default: iterator,
		__moduleExports: iterator
	});

	var require$$0$10 = ( iterator$1 && iterator ) || iterator$1;

	var iterator$2 = createCommonjsModule(function (module) {
	module.exports = { "default": require$$0$10, __esModule: true };
	});

	var iterator$3 = unwrapExports(iterator$2);

	var iterator$4 = /*#__PURE__*/Object.freeze({
		default: iterator$3,
		__moduleExports: iterator$2
	});

	var _meta = createCommonjsModule(function (module) {
	var META = uid('meta');


	var setDesc = dP$1.f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !require$$1(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};
	});
	var _meta_1 = _meta.KEY;
	var _meta_2 = _meta.NEED;
	var _meta_3 = _meta.fastKey;
	var _meta_4 = _meta.getWeak;
	var _meta_5 = _meta.onFreeze;

	var _meta$1 = /*#__PURE__*/Object.freeze({
		default: _meta,
		__moduleExports: _meta,
		KEY: _meta_1,
		NEED: _meta_2,
		fastKey: _meta_3,
		getWeak: _meta_4,
		onFreeze: _meta_5
	});

	var defineProperty = dP$1.f;
	var _wksDefine = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : require$$0.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};

	var _wksDefine$1 = /*#__PURE__*/Object.freeze({
		default: _wksDefine,
		__moduleExports: _wksDefine
	});

	var f$2 = Object.getOwnPropertySymbols;

	var _objectGops = {
		f: f$2
	};

	var _objectGops$1 = /*#__PURE__*/Object.freeze({
		default: _objectGops,
		__moduleExports: _objectGops,
		f: f$2
	});

	var f$3 = {}.propertyIsEnumerable;

	var _objectPie = {
		f: f$3
	};

	var _objectPie$1 = /*#__PURE__*/Object.freeze({
		default: _objectPie,
		__moduleExports: _objectPie,
		f: f$3
	});

	var gOPS = ( _objectGops$1 && _objectGops ) || _objectGops$1;

	var pIE = ( _objectPie$1 && _objectPie ) || _objectPie$1;

	// all enumerable object keys, includes symbols



	var _enumKeys = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};

	var _enumKeys$1 = /*#__PURE__*/Object.freeze({
		default: _enumKeys,
		__moduleExports: _enumKeys
	});

	// 7.2.2 IsArray(argument)

	var _isArray = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};

	var _isArray$1 = /*#__PURE__*/Object.freeze({
		default: _isArray,
		__moduleExports: _isArray
	});

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

	var hiddenKeys = require$$0$7.concat('length', 'prototype');

	var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};

	var _objectGopn = {
		f: f$4
	};

	var _objectGopn$1 = /*#__PURE__*/Object.freeze({
		default: _objectGopn,
		__moduleExports: _objectGopn,
		f: f$4
	});

	var require$$0$11 = ( _objectGopn$1 && _objectGopn ) || _objectGopn$1;

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

	var gOPN = require$$0$11.f;
	var toString$1 = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	var f$5 = function getOwnPropertyNames(it) {
	  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};

	var _objectGopnExt = {
		f: f$5
	};

	var _objectGopnExt$1 = /*#__PURE__*/Object.freeze({
		default: _objectGopnExt,
		__moduleExports: _objectGopnExt,
		f: f$5
	});

	var gOPD = Object.getOwnPropertyDescriptor;

	var f$6 = require$$0$1 ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return descriptor(!pIE.f.call(O, P), O[P]);
	};

	var _objectGopd = {
		f: f$6
	};

	var _objectGopd$1 = /*#__PURE__*/Object.freeze({
		default: _objectGopd,
		__moduleExports: _objectGopd,
		f: f$6
	});

	var require$$0$12 = ( _meta$1 && _meta ) || _meta$1;

	var require$$0$13 = ( _wksDefine$1 && _wksDefine ) || _wksDefine$1;

	var enumKeys = ( _enumKeys$1 && _enumKeys ) || _enumKeys$1;

	var isArray = ( _isArray$1 && _isArray ) || _isArray$1;

	var gOPNExt = ( _objectGopnExt$1 && _objectGopnExt ) || _objectGopnExt$1;

	var require$$1$2 = ( _objectGopd$1 && _objectGopd ) || _objectGopd$1;

	// ECMAScript 6 symbols shim





	var META = require$$0$12.KEY;



















	var gOPD$1 = require$$1$2.f;
	var dP$2 = dP$1.f;
	var gOPN$1 = gOPNExt.f;
	var $Symbol = require$$0.Symbol;
	var $JSON = require$$0.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE$2 = 'prototype';
	var HIDDEN = require$$1$1('_hidden');
	var TO_PRIMITIVE = require$$1$1('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = require$$0$4('symbol-registry');
	var AllSymbols = require$$0$4('symbols');
	var OPSymbols = require$$0$4('op-symbols');
	var ObjectProto$1 = Object[PROTOTYPE$2];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = require$$0.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = require$$0$1 && require$$1(function () {
	  return create(dP$2({}, 'a', {
	    get: function () { return dP$2(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD$1(ObjectProto$1, key);
	  if (protoDesc) delete ObjectProto$1[key];
	  dP$2(it, key, D);
	  if (protoDesc && it !== ObjectProto$1) dP$2(ObjectProto$1, key, protoDesc);
	} : dP$2;

	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = create($Symbol[PROTOTYPE$2]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP$2(it, HIDDEN, descriptor(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = create(D, { enumerable: descriptor(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP$2(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create$$1(it, P) {
	  return P === undefined ? create(it) : $defineProperties(create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto$1 && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto$1 && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD$1(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN$1(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto$1;
	  var names = gOPN$1(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto$1) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, descriptor(1, value));
	    };
	    if (require$$0$1 && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
	    return this._k;
	  });

	  require$$1$2.f = $getOwnPropertyDescriptor;
	  dP$1.f = $defineProperty;
	  require$$0$11.f = gOPNExt.f = $getOwnPropertyNames;
	  pIE.f = $propertyIsEnumerable;
	  gOPS.f = $getOwnPropertySymbols;

	  if (require$$0$1 && !LIBRARY) {
	    redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function (name) {
	    return wrap(require$$1$1(name));
	  };
	}

	$export$1($export$1.G + $export$1.W + $export$1.F * !USE_NATIVE, { Symbol: $Symbol });

	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)require$$1$1(es6Symbols[j++]);

	for (var wellKnownSymbols = getKeys(require$$1$1.store), k = 0; wellKnownSymbols.length > k;) require$$0$13(wellKnownSymbols[k++]);

	$export$1($export$1.S + $export$1.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});

	$export$1($export$1.S + $export$1.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export$1($export$1.S + $export$1.F * (!USE_NATIVE || require$$1(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || require$$0$3($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(require$$0.JSON, 'JSON', true);

	require$$0$13('asyncIterator');

	require$$0$13('observable');

	var symbol = core.Symbol;

	var symbol$1 = /*#__PURE__*/Object.freeze({
		default: symbol,
		__moduleExports: symbol
	});

	var require$$0$14 = ( symbol$1 && symbol ) || symbol$1;

	var symbol$2 = createCommonjsModule(function (module) {
	module.exports = { "default": require$$0$14, __esModule: true };
	});

	var symbol$3 = unwrapExports(symbol$2);

	var symbol$4 = /*#__PURE__*/Object.freeze({
		default: symbol$3,
		__moduleExports: symbol$2
	});

	var _iterator = ( iterator$4 && iterator$3 ) || iterator$4;

	var _symbol = ( symbol$4 && symbol$3 ) || symbol$4;

	var _typeof_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _iterator2 = _interopRequireDefault(_iterator);



	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};
	});

	var _typeof = unwrapExports(_typeof_1);

	var possibleConstructorReturn = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _typeof3 = _interopRequireDefault(_typeof_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};
	});

	var _possibleConstructorReturn = unwrapExports(possibleConstructorReturn);

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */


	var check = function (O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	var _setProto = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = require$$0$2(Function.call, require$$1$2.f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};
	var _setProto_1 = _setProto.set;
	var _setProto_2 = _setProto.check;

	var _setProto$1 = /*#__PURE__*/Object.freeze({
		default: _setProto,
		__moduleExports: _setProto,
		set: _setProto_1,
		check: _setProto_2
	});

	var require$$0$15 = ( _setProto$1 && _setProto ) || _setProto$1;

	// 19.1.3.19 Object.setPrototypeOf(O, proto)

	$export$1($export$1.S, 'Object', { setPrototypeOf: require$$0$15.set });

	var setPrototypeOf = core.Object.setPrototypeOf;

	var setPrototypeOf$1 = /*#__PURE__*/Object.freeze({
		default: setPrototypeOf,
		__moduleExports: setPrototypeOf
	});

	var require$$0$16 = ( setPrototypeOf$1 && setPrototypeOf ) || setPrototypeOf$1;

	var setPrototypeOf$2 = createCommonjsModule(function (module) {
	module.exports = { "default": require$$0$16, __esModule: true };
	});

	var setPrototypeOf$3 = unwrapExports(setPrototypeOf$2);

	var setPrototypeOf$4 = /*#__PURE__*/Object.freeze({
		default: setPrototypeOf$3,
		__moduleExports: setPrototypeOf$2
	});

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export$1($export$1.S, 'Object', { create: create });

	var $Object = core.Object;
	var create$1 = function create(P, D) {
	  return $Object.create(P, D);
	};

	var create$2 = /*#__PURE__*/Object.freeze({
		default: create$1,
		__moduleExports: create$1
	});

	var require$$0$17 = ( create$2 && create$1 ) || create$2;

	var create$3 = createCommonjsModule(function (module) {
	module.exports = { "default": require$$0$17, __esModule: true };
	});

	var create$4 = unwrapExports(create$3);

	var create$5 = /*#__PURE__*/Object.freeze({
		default: create$4,
		__moduleExports: create$3
	});

	var _setPrototypeOf = ( setPrototypeOf$4 && setPrototypeOf$3 ) || setPrototypeOf$4;

	var _create = ( create$5 && create$4 ) || create$5;

	var inherits = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);



	var _create2 = _interopRequireDefault(_create);



	var _typeof3 = _interopRequireDefault(_typeof_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};
	});

	var _inherits = unwrapExports(inherits);

	var getRect = function getRect(_ref) {
	  var top = _ref.top,
	      right = _ref.right,
	      bottom = _ref.bottom,
	      left = _ref.left;

	  var width = right - left;
	  var height = bottom - top;

	  var rect = {
	    top: top,
	    right: right,
	    bottom: bottom,
	    left: left,
	    width: width,
	    height: height,

	    x: left,
	    y: top,

	    center: {
	      x: (right + left) / 2,
	      y: (bottom + top) / 2
	    }
	  };

	  return rect;
	};

	var expand = function expand(target, expandBy) {
	  return {
	    top: target.top - expandBy.top,
	    left: target.left - expandBy.left,

	    bottom: target.bottom + expandBy.bottom,
	    right: target.right + expandBy.right
	  };
	};

	var shrink = function shrink(target, shrinkBy) {
	  return {
	    top: target.top + shrinkBy.top,
	    left: target.left + shrinkBy.left,

	    bottom: target.bottom - shrinkBy.bottom,
	    right: target.right - shrinkBy.right
	  };
	};

	var shift = function shift(spacing, point) {
	  return {
	    top: spacing.top + point.y,
	    left: spacing.left + point.x,
	    bottom: spacing.bottom + point.y,
	    right: spacing.right + point.x
	  };
	};

	var noSpacing = {
	  top: 0,
	  right: 0,
	  bottom: 0,
	  left: 0
	};

	var createBox = function createBox(_ref2) {
	  var borderBox = _ref2.borderBox,
	      _ref2$margin = _ref2.margin,
	      margin = _ref2$margin === undefined ? noSpacing : _ref2$margin,
	      _ref2$border = _ref2.border,
	      border = _ref2$border === undefined ? noSpacing : _ref2$border,
	      _ref2$padding = _ref2.padding,
	      padding = _ref2$padding === undefined ? noSpacing : _ref2$padding;

	  var marginBox = getRect(expand(borderBox, margin));

	  var paddingBox = getRect(shrink(borderBox, border));

	  var contentBox = getRect(shrink(paddingBox, padding));

	  return {
	    marginBox: marginBox,
	    borderBox: getRect(borderBox),
	    paddingBox: paddingBox,
	    contentBox: contentBox,
	    margin: margin,
	    border: border,
	    padding: padding
	  };
	};

	var parse = function parse(value) {
	  return parseInt(value, 10);
	};
	var getWindowScroll = function getWindowScroll() {
	  return {
	    x: window.pageXOffset,
	    y: window.pageYOffset
	  };
	};

	var offset = function offset(original, change) {
	  var borderBox = original.borderBox,
	      border = original.border,
	      margin = original.margin,
	      padding = original.padding;

	  var shifted = shift(borderBox, change);

	  return createBox({
	    borderBox: shifted,
	    border: border,
	    margin: margin,
	    padding: padding
	  });
	};

	var withScroll = function withScroll(original) {
	  var scroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getWindowScroll();
	  return offset(original, scroll);
	};

	var calculateBox = function calculateBox(borderBox, styles) {
	  var margin = {
	    top: parse(styles.marginTop),
	    right: parse(styles.marginRight),
	    bottom: parse(styles.marginBottom),
	    left: parse(styles.marginLeft)
	  };
	  var padding = {
	    top: parse(styles.paddingTop),
	    right: parse(styles.paddingRight),
	    bottom: parse(styles.paddingBottom),
	    left: parse(styles.paddingLeft)
	  };
	  var border = {
	    top: parse(styles.borderTopWidth),
	    right: parse(styles.borderRightWidth),
	    bottom: parse(styles.borderBottomWidth),
	    left: parse(styles.borderLeftWidth)
	  };

	  return createBox({
	    borderBox: borderBox,
	    margin: margin,
	    padding: padding,
	    border: border
	  });
	};

	var getBox = function getBox(el) {
	  var borderBox = el.getBoundingClientRect();
	  var styles = window.getComputedStyle(el);

	  return calculateBox(borderBox, styles);
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	var emptyFunction_1 = emptyFunction;

	var emptyFunction$1 = /*#__PURE__*/Object.freeze({
		default: emptyFunction_1,
		__moduleExports: emptyFunction_1
	});

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	{
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	var invariant_1 = invariant;

	var invariant$1 = /*#__PURE__*/Object.freeze({
		default: invariant_1,
		__moduleExports: invariant_1
	});

	var emptyFunction$2 = ( emptyFunction$1 && emptyFunction_1 ) || emptyFunction$1;

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction$2;

	{
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	var warning_1 = warning;

	var warning$1 = /*#__PURE__*/Object.freeze({
		default: warning_1,
		__moduleExports: warning_1
	});

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject$1(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject$1(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty$1.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	var objectAssign$1 = /*#__PURE__*/Object.freeze({
		default: objectAssign,
		__moduleExports: objectAssign
	});

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	var ReactPropTypesSecret$1 = /*#__PURE__*/Object.freeze({
		default: ReactPropTypesSecret_1,
		__moduleExports: ReactPropTypesSecret_1
	});

	var require$$0$18 = ( invariant$1 && invariant_1 ) || invariant$1;

	var require$$1$3 = ( warning$1 && warning_1 ) || warning$1;

	var require$$2$2 = ( ReactPropTypesSecret$1 && ReactPropTypesSecret_1 ) || ReactPropTypesSecret$1;

	{
	  var invariant$2 = require$$0$18;
	  var warning$2 = require$$1$3;
	  var ReactPropTypesSecret$2 = require$$2$2;
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant$2(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$2);
	        } catch (ex) {
	          error = ex;
	        }
	        warning$2(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning$2(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	var checkPropTypes_1 = checkPropTypes;

	var checkPropTypes$1 = /*#__PURE__*/Object.freeze({
		default: checkPropTypes_1,
		__moduleExports: checkPropTypes_1
	});

	var assign = ( objectAssign$1 && objectAssign ) || objectAssign$1;

	var checkPropTypes$2 = ( checkPropTypes$1 && checkPropTypes_1 ) || checkPropTypes$1;

	var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== require$$2$2) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          require$$0$18(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            require$$1$3(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction$2.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', require$$2$2);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      require$$1$3(false, 'Invalid argument supplied to oneOf, expected an instance of array.');
	      return emptyFunction$2.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, require$$2$2);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      require$$1$3(false, 'Invalid argument supplied to oneOfType, expected an instance of array.');
	      return emptyFunction$2.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        require$$1$3(
	          false,
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction$2.thatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, require$$2$2) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, require$$2$2);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, require$$2$2);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes$2;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	var factoryWithTypeCheckers$1 = /*#__PURE__*/Object.freeze({
		default: factoryWithTypeCheckers,
		__moduleExports: factoryWithTypeCheckers
	});

	var require$$0$19 = ( factoryWithTypeCheckers$1 && factoryWithTypeCheckers ) || factoryWithTypeCheckers$1;

	var propTypes = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	{
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = require$$0$19(isValidElement, throwOnDirectAccess);
	}
	});

	function symbolObservablePonyfill(root) {
		var result;
		var Symbol = root.Symbol;

		if (typeof Symbol === 'function') {
			if (Symbol.observable) {
				result = Symbol.observable;
			} else {
				result = Symbol('observable');
				Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	}

	/* global window */

	var root;

	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (typeof module !== 'undefined') {
	  root = module;
	} else {
	  root = Function('return this')();
	}

	var result = symbolObservablePonyfill(root);

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = {
	  INIT: '@@redux/INIT' + Math.random().toString(36).substring(7).split('').join('.'),
	  REPLACE: '@@redux/REPLACE' + Math.random().toString(36).substring(7).split('').join('.')
	};

	var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	function isPlainObject(obj) {
	  if ((typeof obj === 'undefined' ? 'undefined' : _typeof$1(obj)) !== 'object' || obj === null) return false;

	  var proto = obj;
	  while (Object.getPrototypeOf(proto) !== null) {
	    proto = Object.getPrototypeOf(proto);
	  }

	  return Object.getPrototypeOf(obj) === proto;
	}

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    if (isDispatching) {
	      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
	    }

	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected the listener to be a function.');
	    }

	    if (isDispatching) {
	      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      if (isDispatching) {
	        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!isPlainObject(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      var listener = listeners[i];
	      listener();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.REPLACE });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/tc39/proposal-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if ((typeof observer === 'undefined' ? 'undefined' : _typeof$1(observer)) !== 'object' || observer === null) {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[result] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[result] = observable, _ref2;
	}

	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning$3(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	  } catch (e) {} // eslint-disable-line no-empty
	}

	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(this, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof$1(actionCreators)) !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof$1(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  return funcs.reduce(function (a, b) {
	    return function () {
	      return a(b.apply(undefined, arguments));
	    };
	  });
	}

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function () {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      var store = createStore.apply(undefined, args);
	      var _dispatch = function dispatch() {
	        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
	      };

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch() {
	          return _dispatch.apply(undefined, arguments);
	        }
	      };
	      var chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = compose.apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

	/*
	 * This is a dummy function to check if the function name has been altered by minification.
	 * If the function has been minified and NODE_ENV !== 'production', warn the user.
	 */
	function isCrushed() {}

	if (typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  warning$3("You are currently using minified code outside of NODE_ENV === 'production'. " + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	var lib = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	function createThunkMiddleware(extraArgument) {
	  return function (_ref) {
	    var dispatch = _ref.dispatch,
	        getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        if (typeof action === 'function') {
	          return action(dispatch, getState, extraArgument);
	        }

	        return next(action);
	      };
	    };
	  };
	}

	var thunk = createThunkMiddleware();
	thunk.withExtraArgument = createThunkMiddleware;

	exports['default'] = thunk;
	});

	var thunk = unwrapExports(lib);

	// most Object methods by ES6 should accept primitives



	var _objectSap = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export$1($export$1.S + $export$1.F * require$$1(function () { fn(1); }), 'Object', exp);
	};

	var _objectSap$1 = /*#__PURE__*/Object.freeze({
		default: _objectSap,
		__moduleExports: _objectSap
	});

	var require$$0$20 = ( _objectSap$1 && _objectSap ) || _objectSap$1;

	// 19.1.2.14 Object.keys(O)



	require$$0$20('keys', function () {
	  return function keys(it) {
	    return getKeys(toObject(it));
	  };
	});

	var keys = core.Object.keys;

	var keys$1 = /*#__PURE__*/Object.freeze({
		default: keys,
		__moduleExports: keys
	});

	var require$$0$21 = ( keys$1 && keys ) || keys$1;

	var keys$2 = createCommonjsModule(function (module) {
	module.exports = { "default": require$$0$21, __esModule: true };
	});

	var _Object$keys = unwrapExports(keys$2);

	// 19.1.2.1 Object.assign(target, source, ...)





	var $assign = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	var _objectAssign = !$assign || require$$1(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = gOPS.f;
	  var isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]);
	    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;

	var _objectAssign$1 = /*#__PURE__*/Object.freeze({
		default: _objectAssign,
		__moduleExports: _objectAssign
	});

	var require$$0$22 = ( _objectAssign$1 && _objectAssign ) || _objectAssign$1;

	// 19.1.3.1 Object.assign(target, source)


	$export$1($export$1.S + $export$1.F, 'Object', { assign: require$$0$22 });

	var assign$1 = core.Object.assign;

	var assign$2 = /*#__PURE__*/Object.freeze({
		default: assign$1,
		__moduleExports: assign$1
	});

	var require$$0$23 = ( assign$2 && assign$1 ) || assign$2;

	var assign$3 = createCommonjsModule(function (module) {
	module.exports = { "default": require$$0$23, __esModule: true };
	});

	var _Object$assign = unwrapExports(assign$3);

	var assign$4 = /*#__PURE__*/Object.freeze({
		default: _Object$assign,
		__moduleExports: assign$3
	});

	var _assign = ( assign$4 && _Object$assign ) || assign$4;

	var _extends$1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};
	});

	var _extends$2 = unwrapExports(_extends$1);

	var simpleIsEqual = function simpleIsEqual(a, b) {
	  return a === b;
	};

	function memoizeOne (resultFn) {
	  var isEqual = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : simpleIsEqual;

	  var lastThis = void 0;
	  var lastArgs = [];
	  var lastResult = void 0;
	  var calledOnce = false;

	  var isNewArgEqualToLast = function isNewArgEqualToLast(newArg, index) {
	    return isEqual(newArg, lastArgs[index]);
	  };

	  var result = function result() {
	    for (var _len = arguments.length, newArgs = Array(_len), _key = 0; _key < _len; _key++) {
	      newArgs[_key] = arguments[_key];
	    }

	    if (calledOnce && lastThis === this && newArgs.length === lastArgs.length && newArgs.every(isNewArgEqualToLast)) {
	      return lastResult;
	    }

	    calledOnce = true;
	    lastThis = this;
	    lastArgs = newArgs;
	    lastResult = resultFn.apply(this, newArgs);
	    return lastResult;
	  };

	  return result;
	}

	var add = function add(point1, point2) {
	  return {
	    x: point1.x + point2.x,
	    y: point1.y + point2.y
	  };
	};

	var subtract = function subtract(point1, point2) {
	  return {
	    x: point1.x - point2.x,
	    y: point1.y - point2.y
	  };
	};

	var isEqual = function isEqual(point1, point2) {
	  return point1.x === point2.x && point1.y === point2.y;
	};

	var negate = function negate(point) {
	  return {
	    x: point.x !== 0 ? -point.x : 0,
	    y: point.y !== 0 ? -point.y : 0
	  };
	};

	var absolute = function absolute(point) {
	  return {
	    x: Math.abs(point.x),
	    y: Math.abs(point.y)
	  };
	};

	var patch = function patch(line, value) {
	  var _ref;

	  var otherValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	  return _ref = {}, _ref[line] = value, _ref[line === 'x' ? 'y' : 'x'] = otherValue, _ref;
	};

	var distance = function distance(point1, point2) {
	  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
	};

	var closest = function closest(target, points) {
	  return Math.min.apply(Math, points.map(function (point) {
	    return distance(target, point);
	  }));
	};

	var apply = function apply(fn) {
	  return function (point) {
	    return {
	      x: fn(point.x),
	      y: fn(point.y)
	    };
	  };
	};

	var origin = { x: 0, y: 0 };

	var noMovement = {
	  displaced: [],
	  amount: origin,
	  isBeyondStartPosition: false
	};

	var noImpact = {
	  movement: noMovement,
	  direction: null,
	  destination: null
	};

	var getDraggablesInsideDroppable = memoizeOne(function (droppable, draggables) {
	  return _Object$keys(draggables).map(function (id) {
	    return draggables[id];
	  }).filter(function (draggable) {
	    return droppable.descriptor.id === draggable.descriptor.droppableId;
	  }).sort(function (a, b) {
	    return a.descriptor.index - b.descriptor.index;
	  });
	});

	var isWithin = (function (lowerBound, upperBound) {
	  return function (value) {
	    return value <= upperBound && value >= lowerBound;
	  };
	});

	var isPositionInFrame = (function (frame) {
	  var isWithinVertical = isWithin(frame.top, frame.bottom);
	  var isWithinHorizontal = isWithin(frame.left, frame.right);

	  return function (point) {
	    return isWithinVertical(point.y) && isWithinVertical(point.y) && isWithinHorizontal(point.x) && isWithinHorizontal(point.x);
	  };
	});

	var offsetByPosition = function offsetByPosition(spacing, point) {
	  return {
	    top: spacing.top + point.y,
	    left: spacing.left + point.x,
	    bottom: spacing.bottom + point.y,
	    right: spacing.right + point.x
	  };
	};

	var expandByPosition = function expandByPosition(spacing, position) {
	  return {
	    top: spacing.top - position.y,
	    left: spacing.left - position.x,

	    right: spacing.right + position.x,
	    bottom: spacing.bottom + position.y
	  };
	};

	var getCorners = function getCorners(spacing) {
	  return [{ x: spacing.left, y: spacing.top }, { x: spacing.right, y: spacing.top }, { x: spacing.left, y: spacing.bottom }, { x: spacing.right, y: spacing.bottom }];
	};

	var isProduction = "development" === 'production';
	var prefix = 'Invariant failed';

	var index = (function (condition, message) {
	  if (condition) {
	    return;
	  }

	  if (isProduction) {
	    throw new Error(prefix);
	  }

	  throw new Error(prefix + ': ' + (message || ''));
	});

	var vertical = {
	  direction: 'vertical',
	  line: 'y',
	  crossAxisLine: 'x',
	  start: 'top',
	  end: 'bottom',
	  size: 'height',
	  crossAxisStart: 'left',
	  crossAxisEnd: 'right',
	  crossAxisSize: 'width'
	};

	var horizontal = {
	  direction: 'horizontal',
	  line: 'x',
	  crossAxisLine: 'y',
	  start: 'left',
	  end: 'right',
	  size: 'width',
	  crossAxisStart: 'top',
	  crossAxisEnd: 'bottom',
	  crossAxisSize: 'height'
	};

	var getMaxScroll = (function (_ref) {
	  var scrollHeight = _ref.scrollHeight,
	      scrollWidth = _ref.scrollWidth,
	      height = _ref.height,
	      width = _ref.width;

	  var maxScroll = subtract({ x: scrollWidth, y: scrollHeight }, { x: width, y: height });

	  var adjustedMaxScroll = {
	    x: Math.max(0, maxScroll.x),
	    y: Math.max(0, maxScroll.y)
	  };

	  return adjustedMaxScroll;
	});

	var clip = function clip(frame, subject) {
	  var result = getRect({
	    top: Math.max(subject.top, frame.top),
	    right: Math.min(subject.right, frame.right),
	    bottom: Math.min(subject.bottom, frame.bottom),
	    left: Math.max(subject.left, frame.left)
	  });

	  if (result.width <= 0 || result.height <= 0) {
	    return null;
	  }

	  return result;
	};

	var origin$1 = { x: 0, y: 0 };

	var getDroppableDimension = function getDroppableDimension(_ref) {
	  var descriptor = _ref.descriptor,
	      isEnabled = _ref.isEnabled,
	      direction = _ref.direction,
	      client = _ref.client,
	      page = _ref.page,
	      closest$$1 = _ref.closest;

	  var scrollable = function () {
	    if (!closest$$1) {
	      return null;
	    }

	    var maxScroll = getMaxScroll({
	      scrollHeight: closest$$1.scrollHeight,
	      scrollWidth: closest$$1.scrollWidth,
	      height: closest$$1.client.paddingBox.height,
	      width: closest$$1.client.paddingBox.width
	    });

	    return {
	      framePageMarginBox: closest$$1.page.marginBox,
	      shouldClipSubject: closest$$1.shouldClipSubject,
	      scroll: {
	        initial: closest$$1.scroll,
	        current: closest$$1.scroll,
	        max: maxScroll,
	        diff: {
	          value: origin$1,
	          displacement: origin$1
	        }
	      }
	    };
	  }();

	  var subjectPageMarginBox = page.marginBox;

	  var clippedPageMarginBox = scrollable && scrollable.shouldClipSubject ? clip(scrollable.framePageMarginBox, subjectPageMarginBox) : subjectPageMarginBox;

	  var viewport = {
	    closestScrollable: scrollable,
	    subjectPageMarginBox: subjectPageMarginBox,
	    clippedPageMarginBox: clippedPageMarginBox
	  };

	  var dimension = {
	    descriptor: descriptor,
	    axis: direction === 'vertical' ? vertical : horizontal,
	    isEnabled: isEnabled,
	    client: client,
	    page: page,
	    viewport: viewport
	  };

	  return dimension;
	};

	var scrollDroppable = function scrollDroppable(droppable, newScroll) {
	  index(droppable.viewport.closestScrollable);

	  var scrollable = droppable.viewport.closestScrollable;
	  var framePageMarginBox = scrollable.framePageMarginBox;

	  var scrollDiff = subtract(newScroll, scrollable.scroll.initial);

	  var scrollDisplacement = negate(scrollDiff);

	  var closestScrollable = {
	    framePageMarginBox: scrollable.framePageMarginBox,
	    shouldClipSubject: scrollable.shouldClipSubject,
	    scroll: {
	      initial: scrollable.scroll.initial,
	      current: newScroll,
	      diff: {
	        value: scrollDiff,
	        displacement: scrollDisplacement
	      },

	      max: scrollable.scroll.max
	    }
	  };

	  var displacedSubject = offsetByPosition(droppable.viewport.subjectPageMarginBox, scrollDisplacement);

	  var clippedPageMarginBox = closestScrollable.shouldClipSubject ? clip(framePageMarginBox, displacedSubject) : getRect(displacedSubject);

	  var viewport = {
	    closestScrollable: closestScrollable,
	    subjectPageMarginBox: droppable.viewport.subjectPageMarginBox,
	    clippedPageMarginBox: clippedPageMarginBox
	  };

	  var result = _extends$2({}, droppable, {
	    viewport: viewport
	  });
	  return result;
	};

	var getRequiredGrowth = memoizeOne(function (draggable, draggables, droppable) {

	  var getResult = function getResult(existingSpace) {
	    var requiredSpace = draggable.page.marginBox[droppable.axis.size];

	    if (requiredSpace <= existingSpace) {
	      return null;
	    }
	    var requiredGrowth = patch(droppable.axis.line, requiredSpace - existingSpace);

	    return requiredGrowth;
	  };

	  var dimensions = getDraggablesInsideDroppable(droppable, draggables);

	  if (!dimensions.length) {
	    var _existingSpace = droppable.page.marginBox[droppable.axis.size];
	    return getResult(_existingSpace);
	  }

	  var endOfDraggables = dimensions[dimensions.length - 1].page.marginBox[droppable.axis.end];
	  var endOfDroppable = droppable.page.marginBox[droppable.axis.end];
	  var existingSpace = endOfDroppable - endOfDraggables;

	  return getResult(existingSpace);
	});

	var getWithGrowth = memoizeOne(function (area, growth) {
	  return getRect(expandByPosition(area, growth));
	});

	var getClippedRectWithPlaceholder = function getClippedRectWithPlaceholder(_ref) {
	  var draggable = _ref.draggable,
	      draggables = _ref.draggables,
	      droppable = _ref.droppable,
	      previousDroppableOverId = _ref.previousDroppableOverId;

	  var isHome = draggable.descriptor.droppableId === droppable.descriptor.id;
	  var wasOver = Boolean(previousDroppableOverId && previousDroppableOverId === droppable.descriptor.id);
	  var clippedPageMarginBox = droppable.viewport.clippedPageMarginBox;

	  if (!clippedPageMarginBox) {
	    return clippedPageMarginBox;
	  }

	  if (isHome || !wasOver) {
	    return clippedPageMarginBox;
	  }

	  var requiredGrowth = getRequiredGrowth(draggable, draggables, droppable);

	  if (!requiredGrowth) {
	    return clippedPageMarginBox;
	  }

	  var subjectWithGrowth = getWithGrowth(clippedPageMarginBox, requiredGrowth);
	  var closestScrollable = droppable.viewport.closestScrollable;

	  if (!closestScrollable) {
	    return subjectWithGrowth;
	  }

	  if (!closestScrollable.shouldClipSubject) {
	    return subjectWithGrowth;
	  }

	  return clip(closestScrollable.framePageMarginBox, subjectWithGrowth);
	};

	var getDroppableOver = (function (_ref2) {
	  var target = _ref2.target,
	      draggable = _ref2.draggable,
	      draggables = _ref2.draggables,
	      droppables = _ref2.droppables,
	      previousDroppableOverId = _ref2.previousDroppableOverId;

	  var maybe = _Object$keys(droppables).map(function (id) {
	    return droppables[id];
	  }).filter(function (droppable) {
	    return droppable.isEnabled;
	  }).find(function (droppable) {
	    var withPlaceholder = getClippedRectWithPlaceholder({
	      draggable: draggable, draggables: draggables, droppable: droppable, previousDroppableOverId: previousDroppableOverId
	    });

	    if (!withPlaceholder) {
	      return false;
	    }

	    return isPositionInFrame(withPlaceholder)(target);
	  });

	  return maybe ? maybe.descriptor.id : null;
	});

	var getDisplacementMap = memoizeOne(function (displaced) {
	  return displaced.reduce(function (map, displacement) {
	    map[displacement.draggableId] = displacement;
	    return map;
	  }, {});
	});

	var isPartiallyVisibleThroughFrame = (function (frame) {
	  var isWithinVertical = isWithin(frame.top, frame.bottom);
	  var isWithinHorizontal = isWithin(frame.left, frame.right);

	  return function (subject) {
	    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);

	    if (isContained) {
	      return true;
	    }

	    var isPartiallyVisibleVertically = isWithinVertical(subject.top) || isWithinVertical(subject.bottom);
	    var isPartiallyVisibleHorizontally = isWithinHorizontal(subject.left) || isWithinHorizontal(subject.right);

	    var isPartiallyContained = isPartiallyVisibleVertically && isPartiallyVisibleHorizontally;

	    if (isPartiallyContained) {
	      return true;
	    }

	    var isBiggerVertically = subject.top < frame.top && subject.bottom > frame.bottom;
	    var isBiggerHorizontally = subject.left < frame.left && subject.right > frame.right;

	    var isTargetBiggerThanFrame = isBiggerVertically && isBiggerHorizontally;

	    if (isTargetBiggerThanFrame) {
	      return true;
	    }

	    var isTargetBiggerOnOneAxis = isBiggerVertically && isPartiallyVisibleHorizontally || isBiggerHorizontally && isPartiallyVisibleVertically;

	    return isTargetBiggerOnOneAxis;
	  };
	});

	var isTotallyVisibleThroughFrame = (function (frame) {
	  var isWithinVertical = isWithin(frame.top, frame.bottom);
	  var isWithinHorizontal = isWithin(frame.left, frame.right);

	  return function (subject) {
	    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);

	    return isContained;
	  };
	});

	var origin$2 = { x: 0, y: 0 };

	var isVisible = function isVisible(_ref) {
	  var target = _ref.target,
	      destination = _ref.destination,
	      viewport = _ref.viewport,
	      isVisibleThroughFrameFn = _ref.isVisibleThroughFrameFn;

	  var displacement = destination.viewport.closestScrollable ? destination.viewport.closestScrollable.scroll.diff.displacement : origin$2;
	  var withDisplacement = offsetByPosition(target, displacement);

	  if (!destination.viewport.clippedPageMarginBox) {
	    return false;
	  }

	  var isVisibleInDroppable = isVisibleThroughFrameFn(destination.viewport.clippedPageMarginBox)(withDisplacement);

	  var isVisibleInViewport = isVisibleThroughFrameFn(viewport)(withDisplacement);

	  return isVisibleInDroppable && isVisibleInViewport;
	};

	var isPartiallyVisible = function isPartiallyVisible(_ref2) {
	  var target = _ref2.target,
	      destination = _ref2.destination,
	      viewport = _ref2.viewport;
	  return isVisible({
	    target: target,
	    destination: destination,
	    viewport: viewport,
	    isVisibleThroughFrameFn: isPartiallyVisibleThroughFrame
	  });
	};

	var isTotallyVisible = function isTotallyVisible(_ref3) {
	  var target = _ref3.target,
	      destination = _ref3.destination,
	      viewport = _ref3.viewport;
	  return isVisible({
	    target: target,
	    destination: destination,
	    viewport: viewport,
	    isVisibleThroughFrameFn: isTotallyVisibleThroughFrame
	  });
	};

	var getDisplacement = (function (_ref) {
	  var draggable = _ref.draggable,
	      destination = _ref.destination,
	      previousImpact = _ref.previousImpact,
	      viewport = _ref.viewport;

	  var id = draggable.descriptor.id;
	  var map = getDisplacementMap(previousImpact.movement.displaced);

	  var isVisible = isPartiallyVisible({
	    target: draggable.page.marginBox,
	    destination: destination,
	    viewport: viewport
	  });

	  var shouldAnimate = function () {
	    if (!isVisible) {
	      return false;
	    }

	    var previous = map[id];

	    if (!previous) {
	      return true;
	    }

	    return previous.shouldAnimate;
	  }();

	  var displacement = {
	    draggableId: id,
	    isVisible: isVisible,
	    shouldAnimate: shouldAnimate
	  };

	  return displacement;
	});

	var withDroppableScroll = (function (droppable, point) {
	  var closestScrollable = droppable.viewport.closestScrollable;
	  if (!closestScrollable) {
	    return point;
	  }

	  return add(point, closestScrollable.scroll.diff.value);
	});

	var inHomeList = (function (_ref) {
	  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
	      draggable = _ref.draggable,
	      home = _ref.home,
	      insideHome = _ref.insideHome,
	      previousImpact = _ref.previousImpact,
	      viewport = _ref.viewport;

	  var axis = home.axis;

	  var originalCenter = draggable.page.borderBox.center;

	  var currentCenter = withDroppableScroll(home, pageBorderBoxCenter);

	  var isBeyondStartPosition = currentCenter[axis.line] - originalCenter[axis.line] > 0;

	  var amount = patch(axis.line, draggable.client.marginBox[axis.size]);

	  var displaced = insideHome.filter(function (child) {
	    if (child === draggable) {
	      return false;
	    }

	    var borderBox = child.page.borderBox;

	    if (isBeyondStartPosition) {
	      if (borderBox.center[axis.line] < originalCenter[axis.line]) {
	        return false;
	      }

	      return currentCenter[axis.line] > borderBox[axis.start];
	    }

	    if (originalCenter[axis.line] < borderBox.center[axis.line]) {
	      return false;
	    }

	    return currentCenter[axis.line] < borderBox[axis.end];
	  }).map(function (dimension) {
	    return getDisplacement({
	      draggable: dimension,
	      destination: home,
	      previousImpact: previousImpact,
	      viewport: viewport.subject
	    });
	  });

	  var ordered = isBeyondStartPosition ? displaced.reverse() : displaced;
	  var index = function () {
	    var startIndex = insideHome.indexOf(draggable);
	    var length = ordered.length;
	    if (!length) {
	      return startIndex;
	    }

	    if (isBeyondStartPosition) {
	      return startIndex + length;
	    }

	    return startIndex - length;
	  }();

	  var movement = {
	    amount: amount,
	    displaced: ordered,
	    isBeyondStartPosition: isBeyondStartPosition
	  };

	  var impact = {
	    movement: movement,
	    direction: axis.direction,
	    destination: {
	      droppableId: home.descriptor.id,
	      index: index
	    }
	  };

	  return impact;
	});

	var inForeignList = (function (_ref) {
	  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
	      draggable = _ref.draggable,
	      destination = _ref.destination,
	      insideDestination = _ref.insideDestination,
	      previousImpact = _ref.previousImpact,
	      viewport = _ref.viewport;

	  var axis = destination.axis;

	  var currentCenter = withDroppableScroll(destination, pageBorderBoxCenter);

	  var displaced = insideDestination.filter(function (child) {
	    var threshold = child.page.borderBox[axis.end];
	    return threshold > currentCenter[axis.line];
	  }).map(function (dimension) {
	    return getDisplacement({
	      draggable: dimension,
	      destination: destination,
	      previousImpact: previousImpact,
	      viewport: viewport.subject
	    });
	  });

	  var newIndex = insideDestination.length - displaced.length;

	  var movement = {
	    amount: patch(axis.line, draggable.page.marginBox[axis.size]),
	    displaced: displaced,
	    isBeyondStartPosition: false
	  };

	  var impact = {
	    movement: movement,
	    direction: axis.direction,
	    destination: {
	      droppableId: destination.descriptor.id,
	      index: newIndex
	    }
	  };

	  return impact;
	});

	var getDragImpact = (function (_ref) {
	  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
	      draggable = _ref.draggable,
	      draggables = _ref.draggables,
	      droppables = _ref.droppables,
	      previousImpact = _ref.previousImpact,
	      viewport = _ref.viewport;

	  var previousDroppableOverId = previousImpact.destination && previousImpact.destination.droppableId;

	  var destinationId = getDroppableOver({
	    target: pageBorderBoxCenter,
	    draggable: draggable,
	    draggables: draggables,
	    droppables: droppables,
	    previousDroppableOverId: previousDroppableOverId
	  });

	  if (!destinationId) {
	    return noImpact;
	  }

	  var destination = droppables[destinationId];

	  if (!destination.isEnabled) {
	    return noImpact;
	  }

	  var home = droppables[draggable.descriptor.droppableId];
	  var isWithinHomeDroppable = home.descriptor.id === destinationId;
	  var insideDestination = getDraggablesInsideDroppable(destination, draggables);

	  if (isWithinHomeDroppable) {
	    return inHomeList({
	      pageBorderBoxCenter: pageBorderBoxCenter,
	      draggable: draggable,
	      home: home,
	      insideHome: insideDestination,
	      previousImpact: previousImpact || noImpact,
	      viewport: viewport
	    });
	  }

	  return inForeignList({
	    pageBorderBoxCenter: pageBorderBoxCenter,
	    draggable: draggable,
	    destination: destination,
	    insideDestination: insideDestination,
	    previousImpact: previousImpact || noImpact,
	    viewport: viewport
	  });
	});

	var withDroppableDisplacement = (function (droppable, point) {
	  var closestScrollable = droppable.viewport.closestScrollable;
	  if (!closestScrollable) {
	    return point;
	  }

	  return add(point, closestScrollable.scroll.diff.displacement);
	});

	var isTotallyVisibleInNewLocation = (function (_ref) {
	  var draggable = _ref.draggable,
	      destination = _ref.destination,
	      newPageBorderBoxCenter = _ref.newPageBorderBoxCenter,
	      viewport = _ref.viewport;

	  var diff = subtract(newPageBorderBoxCenter, draggable.page.borderBox.center);
	  var shifted = offsetByPosition(draggable.page.borderBox, diff);

	  return isTotallyVisible({
	    target: shifted,
	    destination: destination,
	    viewport: viewport
	  });
	});

	var moveToEdge = (function (_ref) {
	  var source = _ref.source,
	      sourceEdge = _ref.sourceEdge,
	      destination = _ref.destination,
	      destinationEdge = _ref.destinationEdge,
	      destinationAxis = _ref.destinationAxis;

	  var getCorner = function getCorner(area) {
	    return patch(destinationAxis.line, area[destinationAxis[destinationEdge]], area[destinationAxis.crossAxisStart]);
	  };

	  var corner = getCorner(destination);

	  var centerDiff = absolute(subtract(source.center, getCorner(source)));

	  var signed = patch(destinationAxis.line, (sourceEdge === 'end' ? -1 : 1) * centerDiff[destinationAxis.line], centerDiff[destinationAxis.crossAxisLine]);

	  return add(corner, signed);
	});

	var withFirstAdded = function withFirstAdded(_ref) {
	  var add = _ref.add,
	      previousImpact = _ref.previousImpact,
	      droppable = _ref.droppable,
	      draggables = _ref.draggables,
	      viewport = _ref.viewport;

	  var newDisplacement = {
	    draggableId: add,
	    isVisible: true,
	    shouldAnimate: true
	  };

	  var added = [newDisplacement].concat(previousImpact.movement.displaced);

	  var withUpdatedVisibility = added.map(function (current) {
	    if (current === newDisplacement) {
	      return current;
	    }

	    var updated = getDisplacement({
	      draggable: draggables[current.draggableId],
	      destination: droppable,
	      previousImpact: previousImpact,
	      viewport: viewport.subject
	    });

	    return updated;
	  });

	  return withUpdatedVisibility;
	};

	var forceVisibleDisplacement = function forceVisibleDisplacement(current) {
	  if (current.isVisible) {
	    return current;
	  }

	  return {
	    draggableId: current.draggableId,
	    isVisible: true,
	    shouldAnimate: false
	  };
	};

	var withFirstRemoved = function withFirstRemoved(_ref2) {
	  var dragging = _ref2.dragging,
	      isVisibleInNewLocation = _ref2.isVisibleInNewLocation,
	      previousImpact = _ref2.previousImpact,
	      droppable = _ref2.droppable,
	      draggables = _ref2.draggables;

	  var last = previousImpact.movement.displaced;
	  if (!last.length) {
	    console.error('cannot remove displacement from empty list');
	    return [];
	  }

	  var withFirstRestored = last.slice(1, last.length);

	  if (!withFirstRestored.length) {
	    return withFirstRestored;
	  }

	  if (isVisibleInNewLocation) {
	    return withFirstRestored;
	  }

	  var axis = droppable.axis;

	  var sizeOfRestored = draggables[last[0].draggableId].page.marginBox[axis.size];
	  var sizeOfDragging = draggables[dragging].page.marginBox[axis.size];
	  var buffer = sizeOfRestored + sizeOfDragging;

	  var withUpdatedVisibility = withFirstRestored.map(function (displacement, index) {
	    if (index === 0) {
	      return forceVisibleDisplacement(displacement);
	    }

	    if (buffer > 0) {
	      var current = draggables[displacement.draggableId];
	      var size = current.page.marginBox[axis.size];
	      buffer -= size;

	      return forceVisibleDisplacement(displacement);
	    }

	    return {
	      draggableId: displacement.draggableId,
	      isVisible: false,
	      shouldAnimate: false
	    };
	  });

	  return withUpdatedVisibility;
	};

	var inHomeList$1 = (function (_ref) {
	  var isMovingForward = _ref.isMovingForward,
	      draggableId = _ref.draggableId,
	      previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
	      previousImpact = _ref.previousImpact,
	      droppable = _ref.droppable,
	      draggables = _ref.draggables,
	      viewport = _ref.viewport;

	  var location = previousImpact.destination;

	  if (!location) {
	    console.error('cannot move to next index when there is not previous destination');
	    return null;
	  }

	  var draggable = draggables[draggableId];
	  var axis = droppable.axis;

	  var insideDroppable = getDraggablesInsideDroppable(droppable, draggables);

	  var startIndex = draggable.descriptor.index;
	  var currentIndex = location.index;
	  var proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;

	  if (startIndex === -1) {
	    console.error('could not find draggable inside current droppable');
	    return null;
	  }

	  if (proposedIndex > insideDroppable.length - 1) {
	    return null;
	  }

	  if (proposedIndex < 0) {
	    return null;
	  }

	  var destination = insideDroppable[proposedIndex];
	  var isMovingTowardStart = isMovingForward && proposedIndex <= startIndex || !isMovingForward && proposedIndex >= startIndex;

	  var edge = function () {
	    if (!isMovingTowardStart) {
	      return isMovingForward ? 'end' : 'start';
	    }

	    return isMovingForward ? 'start' : 'end';
	  }();

	  var newPageBorderBoxCenter = moveToEdge({
	    source: draggable.page.borderBox,
	    sourceEdge: edge,
	    destination: destination.page.borderBox,
	    destinationEdge: edge,
	    destinationAxis: droppable.axis
	  });

	  var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
	    draggable: draggable,
	    destination: droppable,
	    newPageBorderBoxCenter: newPageBorderBoxCenter,
	    viewport: viewport.subject
	  });

	  var displaced = function () {
	    if (isMovingTowardStart) {
	      return withFirstRemoved({
	        dragging: draggableId,
	        isVisibleInNewLocation: isVisibleInNewLocation,
	        previousImpact: previousImpact,
	        droppable: droppable,
	        draggables: draggables
	      });
	    }
	    return withFirstAdded({
	      add: destination.descriptor.id,
	      previousImpact: previousImpact,
	      droppable: droppable,
	      draggables: draggables,
	      viewport: viewport
	    });
	  }();

	  var newImpact = {
	    movement: {
	      displaced: displaced,
	      amount: patch(axis.line, draggable.page.marginBox[axis.size]),
	      isBeyondStartPosition: proposedIndex > startIndex
	    },
	    destination: {
	      droppableId: droppable.descriptor.id,
	      index: proposedIndex
	    },
	    direction: droppable.axis.direction
	  };

	  if (isVisibleInNewLocation) {
	    return {
	      pageBorderBoxCenter: withDroppableDisplacement(droppable, newPageBorderBoxCenter),
	      impact: newImpact,
	      scrollJumpRequest: null
	    };
	  }

	  var distance$$1 = subtract(newPageBorderBoxCenter, previousPageBorderBoxCenter);
	  var distanceWithScroll = withDroppableDisplacement(droppable, distance$$1);

	  return {
	    pageBorderBoxCenter: previousPageBorderBoxCenter,
	    impact: newImpact,
	    scrollJumpRequest: distanceWithScroll
	  };
	});

	var inForeignList$1 = (function (_ref) {
	  var isMovingForward = _ref.isMovingForward,
	      draggableId = _ref.draggableId,
	      previousImpact = _ref.previousImpact,
	      previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
	      droppable = _ref.droppable,
	      draggables = _ref.draggables,
	      viewport = _ref.viewport;

	  if (!previousImpact.destination) {
	    console.error('cannot move to next index when there is not previous destination');
	    return null;
	  }

	  var location = previousImpact.destination;
	  var draggable = draggables[draggableId];
	  var axis = droppable.axis;

	  var insideForeignDroppable = getDraggablesInsideDroppable(droppable, draggables);

	  var currentIndex = location.index;
	  var proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;
	  var lastIndex = insideForeignDroppable.length - 1;

	  if (proposedIndex > insideForeignDroppable.length) {
	    return null;
	  }

	  if (proposedIndex < 0) {
	    return null;
	  }

	  var movingRelativeTo = insideForeignDroppable[Math.min(proposedIndex, lastIndex)];

	  var isMovingPastLastIndex = proposedIndex > lastIndex;
	  var sourceEdge = 'start';
	  var destinationEdge = function () {
	    if (isMovingPastLastIndex) {
	      return 'end';
	    }

	    return 'start';
	  }();

	  var newPageBorderBoxCenter = moveToEdge({
	    source: draggable.page.borderBox,
	    sourceEdge: sourceEdge,
	    destination: movingRelativeTo.page.marginBox,
	    destinationEdge: destinationEdge,
	    destinationAxis: droppable.axis
	  });

	  var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
	    draggable: draggable,
	    destination: droppable,
	    newPageBorderBoxCenter: newPageBorderBoxCenter,
	    viewport: viewport.subject
	  });

	  var displaced = function () {
	    if (isMovingForward) {
	      return withFirstRemoved({
	        dragging: draggableId,
	        isVisibleInNewLocation: isVisibleInNewLocation,
	        previousImpact: previousImpact,
	        droppable: droppable,
	        draggables: draggables
	      });
	    }
	    return withFirstAdded({
	      add: movingRelativeTo.descriptor.id,
	      previousImpact: previousImpact,
	      droppable: droppable,
	      draggables: draggables,
	      viewport: viewport
	    });
	  }();

	  var newImpact = {
	    movement: {
	      displaced: displaced,
	      amount: patch(axis.line, draggable.page.marginBox[axis.size]),

	      isBeyondStartPosition: false
	    },
	    destination: {
	      droppableId: droppable.descriptor.id,
	      index: proposedIndex
	    },
	    direction: droppable.axis.direction
	  };

	  if (isVisibleInNewLocation) {
	    return {
	      pageBorderBoxCenter: withDroppableDisplacement(droppable, newPageBorderBoxCenter),
	      impact: newImpact,
	      scrollJumpRequest: null
	    };
	  }

	  var distanceMoving = subtract(newPageBorderBoxCenter, previousPageBorderBoxCenter);
	  var distanceWithScroll = withDroppableDisplacement(droppable, distanceMoving);

	  return {
	    pageBorderBoxCenter: previousPageBorderBoxCenter,
	    impact: newImpact,
	    scrollJumpRequest: distanceWithScroll
	  };
	});

	var moveToNextIndex = (function (args) {
	  var draggableId = args.draggableId,
	      draggables = args.draggables,
	      droppable = args.droppable;


	  var draggable = draggables[draggableId];
	  var isInHomeList = draggable.descriptor.droppableId === droppable.descriptor.id;

	  if (!droppable.isEnabled) {
	    return null;
	  }

	  if (isInHomeList) {
	    return inHomeList$1(args);
	  }

	  return inForeignList$1(args);
	});

	var getSafeClipped = function getSafeClipped(droppable) {
	  var rect = droppable.viewport.clippedPageMarginBox;

	  index(rect, 'Cannot get clipped area from droppable');

	  return rect;
	};

	var getBestCrossAxisDroppable = (function (_ref) {
	  var isMovingForward = _ref.isMovingForward,
	      pageBorderBoxCenter = _ref.pageBorderBoxCenter,
	      source = _ref.source,
	      droppables = _ref.droppables,
	      viewport = _ref.viewport;

	  var sourceClipped = source.viewport.clippedPageMarginBox;

	  if (!sourceClipped) {
	    return null;
	  }

	  var axis = source.axis;
	  var isBetweenSourceClipped = isWithin(sourceClipped[axis.start], sourceClipped[axis.end]);
	  var candidates = _Object$keys(droppables).map(function (id) {
	    return droppables[id];
	  }).filter(function (droppable) {
	    return droppable !== source;
	  }).filter(function (droppable) {
	    return droppable.isEnabled;
	  }).filter(function (droppable) {
	    var clippedPageMarginBox = droppable.viewport.clippedPageMarginBox;

	    if (!clippedPageMarginBox) {
	      return false;
	    }

	    return isPartiallyVisibleThroughFrame(viewport.subject)(clippedPageMarginBox);
	  }).filter(function (droppable) {
	    var targetClipped = getSafeClipped(droppable);

	    if (isMovingForward) {
	      return sourceClipped[axis.crossAxisEnd] <= targetClipped[axis.crossAxisStart];
	    }

	    return targetClipped[axis.crossAxisEnd] <= sourceClipped[axis.crossAxisStart];
	  }).filter(function (droppable) {
	    var targetClipped = getSafeClipped(droppable);

	    var isBetweenDestinationClipped = isWithin(targetClipped[axis.start], targetClipped[axis.end]);

	    return isBetweenSourceClipped(targetClipped[axis.start]) || isBetweenSourceClipped(targetClipped[axis.end]) || isBetweenDestinationClipped(sourceClipped[axis.start]) || isBetweenDestinationClipped(sourceClipped[axis.end]);
	  }).sort(function (a, b) {
	    var first = getSafeClipped(a)[axis.crossAxisStart];
	    var second = getSafeClipped(b)[axis.crossAxisStart];

	    if (isMovingForward) {
	      return first - second;
	    }
	    return second - first;
	  }).filter(function (droppable, index$$1, array) {
	    return getSafeClipped(droppable)[axis.crossAxisStart] === getSafeClipped(array[0])[axis.crossAxisStart];
	  });

	  if (!candidates.length) {
	    return null;
	  }

	  if (candidates.length === 1) {
	    return candidates[0];
	  }

	  var contains = candidates.filter(function (droppable) {
	    var isWithinDroppable = isWithin(getSafeClipped(droppable)[axis.start], getSafeClipped(droppable)[axis.end]);
	    return isWithinDroppable(pageBorderBoxCenter[axis.line]);
	  });

	  if (contains.length === 1) {
	    return contains[0];
	  }

	  if (contains.length > 1) {
	    return contains.sort(function (a, b) {
	      return getSafeClipped(a)[axis.start] - getSafeClipped(b)[axis.start];
	    })[0];
	  }

	  return candidates.sort(function (a, b) {
	    var first = closest(pageBorderBoxCenter, getCorners(getSafeClipped(a)));
	    var second = closest(pageBorderBoxCenter, getCorners(getSafeClipped(b)));

	    if (first !== second) {
	      return first - second;
	    }

	    return getSafeClipped(a)[axis.start] - getSafeClipped(b)[axis.start];
	  })[0];
	});

	var getClosestDraggable = (function (_ref) {
	  var axis = _ref.axis,
	      viewport = _ref.viewport,
	      pageBorderBoxCenter = _ref.pageBorderBoxCenter,
	      destination = _ref.destination,
	      insideDestination = _ref.insideDestination;

	  if (!insideDestination.length) {
	    return null;
	  }

	  var result = insideDestination.filter(function (draggable) {
	    return isTotallyVisible({
	      target: draggable.page.borderBox,
	      destination: destination,
	      viewport: viewport.subject
	    });
	  }).sort(function (a, b) {
	    var distanceToA = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, a.page.borderBox.center));
	    var distanceToB = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, b.page.borderBox.center));

	    if (distanceToA < distanceToB) {
	      return -1;
	    }

	    if (distanceToB < distanceToA) {
	      return 1;
	    }

	    return a.page.borderBox[axis.start] - b.page.borderBox[axis.start];
	  });

	  return result.length ? result[0] : null;
	});

	var toHomeList = (function (_ref) {
	  var amount = _ref.amount,
	      originalIndex = _ref.originalIndex,
	      target = _ref.target,
	      insideDroppable = _ref.insideDroppable,
	      draggable = _ref.draggable,
	      droppable = _ref.droppable,
	      previousImpact = _ref.previousImpact,
	      viewport = _ref.viewport;

	  if (!target) {
	    console.error('there will always be a target in the original list');
	    return null;
	  }

	  var axis = droppable.axis;
	  var targetIndex = insideDroppable.indexOf(target);

	  if (targetIndex === -1) {
	    console.error('unable to find target in destination droppable');
	    return null;
	  }

	  if (targetIndex === originalIndex) {
	    var _newCenter = draggable.page.borderBox.center;
	    var _newImpact = {
	      movement: {
	        displaced: [],
	        amount: amount,
	        isBeyondStartPosition: false
	      },
	      direction: droppable.axis.direction,
	      destination: {
	        droppableId: droppable.descriptor.id,
	        index: originalIndex
	      }
	    };

	    return {
	      pageBorderBoxCenter: withDroppableDisplacement(droppable, _newCenter),
	      impact: _newImpact
	    };
	  }

	  var isMovingPastOriginalIndex = targetIndex > originalIndex;
	  var edge = isMovingPastOriginalIndex ? 'end' : 'start';

	  var newCenter = moveToEdge({
	    source: draggable.page.borderBox,
	    sourceEdge: edge,
	    destination: isMovingPastOriginalIndex ? target.page.borderBox : target.page.marginBox,
	    destinationEdge: edge,
	    destinationAxis: axis
	  });

	  var modified = function () {
	    if (!isMovingPastOriginalIndex) {
	      return insideDroppable.slice(targetIndex, originalIndex);
	    }

	    var from = originalIndex + 1;

	    var to = targetIndex + 1;

	    return insideDroppable.slice(from, to).reverse();
	  }();

	  var displaced = modified.map(function (dimension) {
	    return getDisplacement({
	      draggable: dimension,
	      destination: droppable,
	      previousImpact: previousImpact,
	      viewport: viewport.subject
	    });
	  });

	  var newImpact = {
	    movement: {
	      displaced: displaced,
	      amount: amount,
	      isBeyondStartPosition: isMovingPastOriginalIndex
	    },
	    direction: axis.direction,
	    destination: {
	      droppableId: droppable.descriptor.id,
	      index: targetIndex
	    }
	  };

	  return {
	    pageBorderBoxCenter: withDroppableDisplacement(droppable, newCenter),
	    impact: newImpact
	  };
	});

	var toForeignList = (function (_ref) {
	  var amount = _ref.amount,
	      pageBorderBoxCenter = _ref.pageBorderBoxCenter,
	      target = _ref.target,
	      insideDroppable = _ref.insideDroppable,
	      draggable = _ref.draggable,
	      droppable = _ref.droppable,
	      previousImpact = _ref.previousImpact,
	      viewport = _ref.viewport;

	  var axis = droppable.axis;
	  var isGoingBeforeTarget = Boolean(target && pageBorderBoxCenter[droppable.axis.line] < target.page.borderBox.center[droppable.axis.line]);

	  if (!target) {

	    var _newCenter = moveToEdge({
	      source: draggable.page.borderBox,
	      sourceEdge: 'start',
	      destination: droppable.page.contentBox,
	      destinationEdge: 'start',
	      destinationAxis: axis
	    });

	    var _newImpact = {
	      movement: {
	        displaced: [],
	        amount: amount,
	        isBeyondStartPosition: false
	      },
	      direction: axis.direction,
	      destination: {
	        droppableId: droppable.descriptor.id,
	        index: 0
	      }
	    };

	    return {
	      pageBorderBoxCenter: withDroppableDisplacement(droppable, _newCenter),
	      impact: _newImpact
	    };
	  }

	  var targetIndex = insideDroppable.indexOf(target);
	  var proposedIndex = isGoingBeforeTarget ? targetIndex : targetIndex + 1;

	  if (targetIndex === -1) {
	    console.error('could not find target inside destination');
	    return null;
	  }

	  var newCenter = moveToEdge({
	    source: draggable.page.borderBox,
	    sourceEdge: 'start',
	    destination: target.page.marginBox,
	    destinationEdge: isGoingBeforeTarget ? 'start' : 'end',
	    destinationAxis: axis
	  });

	  var displaced = insideDroppable.slice(proposedIndex, insideDroppable.length).map(function (dimension) {
	    return getDisplacement({
	      draggable: dimension,
	      destination: droppable,
	      viewport: viewport.subject,
	      previousImpact: previousImpact
	    });
	  });

	  var newImpact = {
	    movement: {
	      displaced: displaced,
	      amount: amount,
	      isBeyondStartPosition: false
	    },
	    direction: axis.direction,
	    destination: {
	      droppableId: droppable.descriptor.id,
	      index: proposedIndex
	    }
	  };

	  return {
	    pageBorderBoxCenter: withDroppableDisplacement(droppable, newCenter),
	    impact: newImpact
	  };
	});

	var moveToNewDroppable = (function (_ref) {
	  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
	      destination = _ref.destination,
	      draggable = _ref.draggable,
	      target = _ref.target,
	      home = _ref.home,
	      insideDestination = _ref.insideDestination,
	      previousImpact = _ref.previousImpact,
	      viewport = _ref.viewport;

	  var amount = patch(destination.axis.line, draggable.client.marginBox[destination.axis.size]);

	  if (destination.descriptor.id === draggable.descriptor.droppableId) {
	    return toHomeList({
	      amount: amount,
	      originalIndex: home.index,
	      target: target,
	      insideDroppable: insideDestination,
	      draggable: draggable,
	      droppable: destination,
	      previousImpact: previousImpact,
	      viewport: viewport
	    });
	  }

	  return toForeignList({
	    amount: amount,
	    pageBorderBoxCenter: pageBorderBoxCenter,
	    target: target,
	    insideDroppable: insideDestination,
	    draggable: draggable,
	    droppable: destination,
	    previousImpact: previousImpact,
	    viewport: viewport
	  });
	});

	var moveCrossAxis = (function (_ref) {
	  var isMovingForward = _ref.isMovingForward,
	      pageBorderBoxCenter = _ref.pageBorderBoxCenter,
	      draggableId = _ref.draggableId,
	      droppableId = _ref.droppableId,
	      home = _ref.home,
	      draggables = _ref.draggables,
	      droppables = _ref.droppables,
	      previousImpact = _ref.previousImpact,
	      viewport = _ref.viewport;

	  var draggable = draggables[draggableId];
	  var source = droppables[droppableId];

	  var destination = getBestCrossAxisDroppable({
	    isMovingForward: isMovingForward,
	    pageBorderBoxCenter: pageBorderBoxCenter,
	    source: source,
	    droppables: droppables,
	    viewport: viewport
	  });

	  if (!destination) {
	    return null;
	  }

	  var insideDestination = getDraggablesInsideDroppable(destination, draggables);

	  var target = getClosestDraggable({
	    axis: destination.axis,
	    pageBorderBoxCenter: pageBorderBoxCenter,
	    destination: destination,
	    insideDestination: insideDestination,
	    viewport: viewport
	  });

	  if (insideDestination.length && !target) {
	    return null;
	  }

	  return moveToNewDroppable({
	    pageBorderBoxCenter: pageBorderBoxCenter,
	    destination: destination,
	    draggable: draggable,
	    target: target,
	    insideDestination: insideDestination,
	    home: home,
	    previousImpact: previousImpact || noImpact,
	    viewport: viewport
	  });
	});

	var noDimensions = {
	  request: null,
	  draggable: {},
	  droppable: {}
	};

	var origin$3 = { x: 0, y: 0 };

	var clean = memoizeOne(function () {
	  var phase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'IDLE';
	  return {
	    phase: phase,
	    drag: null,
	    drop: null,
	    dimension: noDimensions
	  };
	});

	var canPublishDimension = function canPublishDimension(phase) {
	  return ['IDLE', 'DROP_ANIMATING', 'DROP_COMPLETE'].indexOf(phase) === -1;
	};

	var move = function move(_ref) {
	  var state = _ref.state,
	      clientSelection = _ref.clientSelection,
	      shouldAnimate = _ref.shouldAnimate,
	      proposedViewport = _ref.viewport,
	      impact = _ref.impact,
	      scrollJumpRequest = _ref.scrollJumpRequest;

	  if (state.phase !== 'DRAGGING') {
	    console.error('cannot move while not dragging');
	    return clean();
	  }

	  var last = state.drag;

	  if (last == null) {
	    console.error('cannot move if there is no drag information');
	    return clean();
	  }

	  var previous = last.current;
	  var initial = last.initial;
	  var viewport = proposedViewport || previous.viewport;
	  var currentWindowScroll = viewport.scroll;

	  var client = function () {
	    var offset = subtract(clientSelection, initial.client.selection);

	    var result = {
	      offset: offset,
	      selection: clientSelection,
	      borderBoxCenter: add(offset, initial.client.borderBoxCenter)
	    };
	    return result;
	  }();

	  var page = {
	    selection: add(client.selection, currentWindowScroll),
	    offset: add(client.offset, currentWindowScroll),
	    borderBoxCenter: add(client.borderBoxCenter, currentWindowScroll)
	  };

	  var current = {
	    client: client,
	    page: page,
	    shouldAnimate: shouldAnimate,
	    viewport: viewport,
	    hasCompletedFirstBulkPublish: previous.hasCompletedFirstBulkPublish
	  };

	  var newImpact = impact || getDragImpact({
	    pageBorderBoxCenter: page.borderBoxCenter,
	    draggable: state.dimension.draggable[initial.descriptor.id],
	    draggables: state.dimension.draggable,
	    droppables: state.dimension.droppable,
	    previousImpact: last.impact,
	    viewport: viewport
	  });

	  var drag = {
	    initial: initial,
	    impact: newImpact,
	    current: current,
	    scrollJumpRequest: scrollJumpRequest
	  };

	  return _extends$2({}, state, {
	    drag: drag
	  });
	};

	var updateStateAfterDimensionChange = function updateStateAfterDimensionChange(newState, impact) {
	  if (newState.phase === 'COLLECTING_INITIAL_DIMENSIONS') {
	    return newState;
	  }

	  if (newState.phase !== 'DRAGGING') {
	    return newState;
	  }

	  if (!newState.drag) {
	    console.error('cannot update a draggable dimension in an existing drag as there is invalid drag state');
	    return clean();
	  }

	  return move({
	    state: newState,

	    clientSelection: newState.drag.current.client.selection,
	    shouldAnimate: newState.drag.current.shouldAnimate,
	    impact: impact
	  });
	};

	var reducer = (function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : clean('IDLE');
	  var action = arguments[1];

	  if (action.type === 'CLEAN') {
	    return clean();
	  }

	  if (action.type === 'PREPARE') {
	    return clean('PREPARING');
	  }

	  if (action.type === 'REQUEST_DIMENSIONS') {
	    if (state.phase !== 'PREPARING') {
	      console.error('trying to start a lift while not preparing for a lift');
	      return clean();
	    }

	    var request = action.payload;

	    return {
	      phase: 'COLLECTING_INITIAL_DIMENSIONS',
	      drag: null,
	      drop: null,
	      dimension: {
	        request: request,
	        draggable: {},
	        droppable: {}
	      }
	    };
	  }

	  if (action.type === 'PUBLISH_DRAGGABLE_DIMENSION') {
	    var _extends2;

	    var dimension = action.payload;

	    if (!canPublishDimension(state.phase)) {
	      console.warn('dimensions rejected as no longer allowing dimension capture in phase', state.phase);
	      return state;
	    }

	    var newState = _extends$2({}, state, {
	      dimension: {
	        request: state.dimension.request,
	        droppable: state.dimension.droppable,
	        draggable: _extends$2({}, state.dimension.draggable, (_extends2 = {}, _extends2[dimension.descriptor.id] = dimension, _extends2))
	      }
	    });

	    return updateStateAfterDimensionChange(newState);
	  }

	  if (action.type === 'PUBLISH_DROPPABLE_DIMENSION') {
	    var _extends3;

	    var _dimension = action.payload;

	    if (!canPublishDimension(state.phase)) {
	      console.warn('dimensions rejected as no longer allowing dimension capture in phase', state.phase);
	      return state;
	    }

	    var _newState = _extends$2({}, state, {
	      dimension: {
	        request: state.dimension.request,
	        draggable: state.dimension.draggable,
	        droppable: _extends$2({}, state.dimension.droppable, (_extends3 = {}, _extends3[_dimension.descriptor.id] = _dimension, _extends3))
	      }
	    });

	    return updateStateAfterDimensionChange(_newState);
	  }

	  if (action.type === 'BULK_DIMENSION_PUBLISH') {
	    var draggables = action.payload.draggables;
	    var droppables = action.payload.droppables;

	    if (!canPublishDimension(state.phase)) {
	      console.warn('dimensions rejected as no longer allowing dimension capture in phase', state.phase);
	      return state;
	    }

	    var newDraggables = draggables.reduce(function (previous, current) {
	      previous[current.descriptor.id] = current;
	      return previous;
	    }, {});

	    var newDroppables = droppables.reduce(function (previous, current) {
	      previous[current.descriptor.id] = current;
	      return previous;
	    }, {});

	    var drag = function () {
	      var existing = state.drag;
	      if (!existing) {
	        return null;
	      }

	      if (existing.current.hasCompletedFirstBulkPublish) {
	        return existing;
	      }

	      var newDrag = _extends$2({}, existing, {
	        current: _extends$2({}, existing.current, {
	          hasCompletedFirstBulkPublish: true
	        })
	      });

	      return newDrag;
	    }();

	    var _newState2 = _extends$2({}, state, {
	      drag: drag,
	      dimension: {
	        request: state.dimension.request,
	        draggable: _extends$2({}, state.dimension.draggable, newDraggables),
	        droppable: _extends$2({}, state.dimension.droppable, newDroppables)
	      }
	    });

	    return updateStateAfterDimensionChange(_newState2);
	  }

	  if (action.type === 'COMPLETE_LIFT') {
	    if (state.phase !== 'COLLECTING_INITIAL_DIMENSIONS') {
	      console.error('trying complete lift without collecting dimensions');
	      return state;
	    }

	    var _action$payload = action.payload,
	        id = _action$payload.id,
	        client = _action$payload.client,
	        _viewport = _action$payload.viewport,
	        autoScrollMode = _action$payload.autoScrollMode;

	    var page = {
	      selection: add(client.selection, _viewport.scroll),
	      borderBoxCenter: add(client.borderBoxCenter, _viewport.scroll)
	    };

	    var draggable = state.dimension.draggable[id];

	    if (!draggable) {
	      console.error('could not find draggable in store after lift');
	      return clean();
	    }

	    var descriptor = draggable.descriptor;

	    var initial = {
	      descriptor: descriptor,
	      autoScrollMode: autoScrollMode,
	      client: client,
	      page: page,
	      viewport: _viewport
	    };

	    var current = {
	      client: {
	        selection: client.selection,
	        borderBoxCenter: client.borderBoxCenter,
	        offset: origin$3
	      },
	      page: {
	        selection: page.selection,
	        borderBoxCenter: page.borderBoxCenter,
	        offset: origin$3
	      },
	      viewport: _viewport,
	      hasCompletedFirstBulkPublish: false,
	      shouldAnimate: false
	    };

	    var home = state.dimension.droppable[descriptor.droppableId];

	    if (!home) {
	      console.error('Cannot find home dimension for initial lift');
	      return clean();
	    }

	    var destination = {
	      index: descriptor.index,
	      droppableId: descriptor.droppableId
	    };

	    var _impact = {
	      movement: noMovement,
	      direction: home.axis.direction,
	      destination: destination
	    };

	    return _extends$2({}, state, {
	      phase: 'DRAGGING',
	      drag: {
	        initial: initial,
	        current: current,
	        impact: _impact,
	        scrollJumpRequest: null
	      }
	    });
	  }

	  if (action.type === 'UPDATE_DROPPABLE_DIMENSION_SCROLL') {
	    var _extends4;

	    if (state.phase !== 'DRAGGING') {
	      console.error('cannot update a droppable dimensions scroll when not dragging');
	      return clean();
	    }

	    var _drag = state.drag;

	    if (_drag == null) {
	      console.error('invalid store state');
	      return clean();
	    }

	    var _action$payload2 = action.payload,
	        _id = _action$payload2.id,
	        offset = _action$payload2.offset;


	    var target = state.dimension.droppable[_id];

	    if (!target) {
	      console.warn('cannot update scroll for droppable as it has not yet been collected');
	      return state;
	    }

	    var _dimension2 = scrollDroppable(target, offset);

	    var _impact2 = _drag.initial.autoScrollMode === 'JUMP' ? _drag.impact : null;

	    var _newState3 = _extends$2({}, state, {
	      dimension: {
	        request: state.dimension.request,
	        draggable: state.dimension.draggable,
	        droppable: _extends$2({}, state.dimension.droppable, (_extends4 = {}, _extends4[_id] = _dimension2, _extends4))
	      }
	    });

	    return updateStateAfterDimensionChange(_newState3, _impact2);
	  }

	  if (action.type === 'UPDATE_DROPPABLE_DIMENSION_IS_ENABLED') {
	    var _extends5;

	    if (!_Object$keys(state.dimension.droppable).length) {
	      return state;
	    }

	    var _action$payload3 = action.payload,
	        _id2 = _action$payload3.id,
	        isEnabled = _action$payload3.isEnabled;

	    var _target = state.dimension.droppable[_id2];

	    if (!_target) {
	      return state;
	    }

	    if (_target.isEnabled === isEnabled) {
	      console.warn('Trying to set droppable isEnabled to ' + String(isEnabled) + ' but it is already ' + String(isEnabled));
	      return state;
	    }

	    var updatedDroppableDimension = _extends$2({}, _target, {
	      isEnabled: isEnabled
	    });

	    var result = _extends$2({}, state, {
	      dimension: _extends$2({}, state.dimension, {
	        droppable: _extends$2({}, state.dimension.droppable, (_extends5 = {}, _extends5[_id2] = updatedDroppableDimension, _extends5))
	      })
	    });

	    return updateStateAfterDimensionChange(result);
	  }

	  if (action.type === 'MOVE') {
	    var _action$payload4 = action.payload,
	        _client = _action$payload4.client,
	        _viewport2 = _action$payload4.viewport,
	        _shouldAnimate = _action$payload4.shouldAnimate;

	    var _drag2 = state.drag;

	    if (!_drag2) {
	      console.error('Cannot move while there is no drag state');
	      return state;
	    }

	    var _impact3 = function () {
	      if (!_drag2.current.hasCompletedFirstBulkPublish) {
	        return _drag2.impact;
	      }

	      if (_drag2.initial.autoScrollMode === 'JUMP') {
	        return _drag2.impact;
	      }

	      return null;
	    }();

	    return move({
	      state: state,
	      clientSelection: _client,
	      viewport: _viewport2,
	      shouldAnimate: _shouldAnimate,
	      impact: _impact3
	    });
	  }

	  if (action.type === 'MOVE_BY_WINDOW_SCROLL') {
	    var _viewport3 = action.payload.viewport;

	    var _drag3 = state.drag;

	    if (!_drag3) {
	      console.error('cannot move with window scrolling if no current drag');
	      return clean();
	    }

	    if (isEqual(_viewport3.scroll, _drag3.current.viewport.scroll)) {
	      return state;
	    }

	    var isJumpScrolling = _drag3.initial.autoScrollMode === 'JUMP';

	    var _impact4 = isJumpScrolling ? _drag3.impact : null;

	    return move({
	      state: state,
	      clientSelection: _drag3.current.client.selection,
	      viewport: _viewport3,
	      shouldAnimate: false,
	      impact: _impact4
	    });
	  }

	  if (action.type === 'MOVE_FORWARD' || action.type === 'MOVE_BACKWARD') {
	    if (state.phase !== 'DRAGGING') {
	      console.error('cannot move while not dragging', action);
	      return clean();
	    }

	    if (!state.drag) {
	      console.error('cannot move if there is no drag information');
	      return clean();
	    }

	    var existing = state.drag;
	    var isMovingForward = action.type === 'MOVE_FORWARD';

	    if (!existing.impact.destination) {
	      return state;
	    }

	    var droppable = state.dimension.droppable[existing.impact.destination.droppableId];

	    var _result = moveToNextIndex({
	      isMovingForward: isMovingForward,
	      draggableId: existing.initial.descriptor.id,
	      droppable: droppable,
	      draggables: state.dimension.draggable,
	      previousPageBorderBoxCenter: existing.current.page.borderBoxCenter,
	      previousImpact: existing.impact,
	      viewport: existing.current.viewport
	    });

	    if (!_result) {
	      return state;
	    }

	    var _impact5 = _result.impact;
	    var pageBorderBoxCenter = _result.pageBorderBoxCenter;
	    var clientBorderBoxCenter = subtract(pageBorderBoxCenter, existing.current.viewport.scroll);

	    return move({
	      state: state,
	      impact: _impact5,
	      clientSelection: clientBorderBoxCenter,
	      shouldAnimate: true,
	      scrollJumpRequest: _result.scrollJumpRequest
	    });
	  }

	  if (action.type === 'CROSS_AXIS_MOVE_FORWARD' || action.type === 'CROSS_AXIS_MOVE_BACKWARD') {
	    if (state.phase !== 'DRAGGING') {
	      console.error('cannot move cross axis when not dragging');
	      return clean();
	    }

	    var _drag4 = state.drag;
	    if (!_drag4) {
	      console.error('cannot move cross axis if there is no drag information');
	      return clean();
	    }

	    var droppableId = function () {
	      if (_drag4.impact.destination) {
	        return _drag4.impact.destination.droppableId;
	      }

	      return _drag4.initial.descriptor.droppableId;
	    }();

	    var _current = _drag4.current;
	    var _descriptor = _drag4.initial.descriptor;
	    var draggableId = _descriptor.id;
	    var _pageBorderBoxCenter = _current.page.borderBoxCenter;
	    var _home = {
	      index: _descriptor.index,
	      droppableId: _descriptor.droppableId
	    };

	    var _result2 = moveCrossAxis({
	      isMovingForward: action.type === 'CROSS_AXIS_MOVE_FORWARD',
	      pageBorderBoxCenter: _pageBorderBoxCenter,
	      draggableId: draggableId,
	      droppableId: droppableId,
	      home: _home,
	      draggables: state.dimension.draggable,
	      droppables: state.dimension.droppable,
	      previousImpact: _drag4.impact,
	      viewport: _current.viewport
	    });

	    if (!_result2) {
	      return state;
	    }

	    var _page = _result2.pageBorderBoxCenter;
	    var _client2 = subtract(_page, _current.viewport.scroll);

	    return move({
	      state: state,
	      clientSelection: _client2,
	      impact: _result2.impact,
	      shouldAnimate: true
	    });
	  }

	  if (action.type === 'DROP_ANIMATE') {
	    var _action$payload5 = action.payload,
	        newHomeOffset = _action$payload5.newHomeOffset,
	        _impact6 = _action$payload5.impact,
	        _result3 = _action$payload5.result;


	    if (state.phase !== 'DRAGGING') {
	      console.error('cannot animate drop while not dragging', action);
	      return state;
	    }

	    if (!state.drag) {
	      console.error('cannot animate drop - invalid drag state');
	      return clean();
	    }

	    var pending = {
	      newHomeOffset: newHomeOffset,
	      result: _result3,
	      impact: _impact6
	    };

	    return {
	      phase: 'DROP_ANIMATING',
	      drag: null,
	      drop: {
	        pending: pending,
	        result: null
	      },
	      dimension: state.dimension
	    };
	  }

	  if (action.type === 'DROP_COMPLETE') {
	    var _result4 = action.payload;

	    return {
	      phase: 'DROP_COMPLETE',
	      drag: null,
	      drop: {
	        pending: null,
	        result: _result4
	      },
	      dimension: noDimensions
	    };
	  }

	  return state;
	});

	var composeEnhancers = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

	var createStore$1 = (function () {
	  return createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
	});

	var onDragStart = function onDragStart(start) {
	  return '\n  You have lifted an item in position ' + (start.source.index + 1) + '.\n  Use the arrow keys to move, space bar to drop, and escape to cancel.\n';
	};

	var onDragUpdate = function onDragUpdate(update) {
	  if (!update.destination) {
	    return 'You are currently not dragging over a droppable area';
	  }

	  if (update.source.droppableId === update.destination.droppableId) {
	    return 'You have moved the item to position ' + (update.destination.index + 1);
	  }

	  return '\n    You have moved the item from list ' + update.source.droppableId + ' in position ' + (update.source.index + 1) + '\n    to list ' + update.destination.droppableId + ' in position ' + (update.destination.index + 1) + '\n  ';
	};

	var onDragEnd = function onDragEnd(result) {
	  if (result.reason === 'CANCEL') {
	    return '\n      Movement cancelled.\n      The item has returned to its starting position of ' + (result.source.index + 1) + '\n    ';
	  }

	  if (!result.destination) {
	    return '\n      The item has been dropped while not over a droppable location.\n      The item has returned to its starting position of ' + (result.source.index + 1) + '\n    ';
	  }

	  if (result.source.droppableId === result.destination.droppableId) {
	    if (result.source.index === result.destination.index) {
	      return '\n        You have dropped the item.\n        It has been dropped on its starting position of ' + (result.source.index + 1) + '\n      ';
	    }

	    return '\n      You have dropped the item.\n      It has moved from position ' + (result.source.index + 1) + ' to ' + (result.destination.index + 1) + '\n    ';
	  }

	  return '\n    You have dropped the item.\n    It has moved from position ' + (result.source.index + 1) + ' in list ' + result.source.droppableId + '\n    to position ' + (result.destination.index + 1) + ' in list ' + result.destination.droppableId + '\n  ';
	};

	var preset = {
	  onDragStart: onDragStart, onDragUpdate: onDragUpdate, onDragEnd: onDragEnd
	};

	var records = {};

	var flag = '__react-beautiful-dnd-debug-timings-hook__';

	var isTimingsEnabled = function isTimingsEnabled() {
	  return Boolean(window[flag]);
	};

	var start = function start(key) {
	  if (!isTimingsEnabled()) {
	    return;
	  }
	  var now = performance.now();

	  records[key] = now;
	};

	var finish = function finish(key) {
	  if (!isTimingsEnabled()) {
	    return;
	  }
	  var now = performance.now();

	  var previous = records[key];

	  if (previous == null) {
	    console.error('cannot finish timing as no previous time found');
	    return;
	  }

	  var result = now - previous;
	  var rounded = result.toFixed(2);

	  var style = function () {
	    if (result < 16) {
	      return {
	        textColor: 'green',
	        symbol: '✅'
	      };
	    }
	    if (result < 40) {
	      return {
	        textColor: 'orange',
	        symbol: '⚠️'
	      };
	    }
	    return {
	      textColor: 'red',
	      symbol: '❌'
	    };
	  }();

	  console.log(style.symbol + ' %cTiming %c' + rounded + ' %cms %c' + key, 'color: blue; font-weight: bold; ', 'color: ' + style.textColor + '; font-size: 1.1em;', 'color: grey;', 'color: purple; font-weight: bold;');
	};

	var withTimings = function withTimings(key, fn) {
	  start(key);
	  fn();
	  finish(key);
	};

	var notDragging = {
	  isDragging: false,
	  start: null,
	  lastDestination: null,
	  hasMovedFromStartLocation: false
	};

	var areLocationsEqual = function areLocationsEqual(current, next) {
	  if (current == null && next == null) {
	    return true;
	  }

	  if (current == null || next == null) {
	    return false;
	  }

	  return current.droppableId === next.droppableId && current.index === next.index;
	};

	var getAnnouncerForConsumer = function getAnnouncerForConsumer(announce) {
	  var wasCalled = false;
	  var isExpired = false;

	  setTimeout(function () {
	    isExpired = true;
	  });

	  var result = function result(message) {
	    if (wasCalled) {
	      console.warn('Announcement already made. Not making a second announcement');
	      return;
	    }

	    if (isExpired) {
	      console.warn('\n        Announcements cannot be made asynchronously.\n        Default message has already been announced.\n      ');
	      return;
	    }

	    wasCalled = true;
	    announce(message);
	  };

	  result.wasCalled = function () {
	    return wasCalled;
	  };

	  return result;
	};

	var createHookCaller = (function (announce) {
	  var state = notDragging;

	  var setState = function setState(partial) {
	    var newState = _extends$2({}, state, partial);
	    state = newState;
	  };

	  var getDragStart = function getDragStart(appState) {
	    if (!appState.drag) {
	      return null;
	    }

	    var descriptor = appState.drag.initial.descriptor;
	    var home = appState.dimension.droppable[descriptor.droppableId];

	    if (!home) {
	      return null;
	    }

	    var source = {
	      index: descriptor.index,
	      droppableId: descriptor.droppableId
	    };

	    var start$$1 = {
	      draggableId: descriptor.id,
	      type: home.descriptor.type,
	      source: source
	    };

	    return start$$1;
	  };

	  var execute = function execute(hook, data, getDefaultMessage) {
	    if (!hook) {
	      announce(getDefaultMessage(data));
	      return;
	    }

	    var managed = getAnnouncerForConsumer(announce);
	    var provided = {
	      announce: managed
	    };

	    hook(data, provided);

	    if (!managed.wasCalled()) {
	      announce(getDefaultMessage(data));
	    }
	  };

	  var onDrag = function onDrag(current, onDragUpdate) {
	    if (!state.isDragging) {
	      console.error('Cannot process dragging update if drag has not started');
	      return;
	    }

	    var drag = current.drag;
	    var start$$1 = getDragStart(current);
	    if (!start$$1 || !drag) {
	      console.error('Cannot update drag when there is invalid state');
	      return;
	    }

	    var destination = drag.impact.destination;
	    var update = {
	      draggableId: start$$1.draggableId,
	      type: start$$1.type,
	      source: start$$1.source,
	      destination: destination
	    };

	    if (!state.hasMovedFromStartLocation) {
	      if (areLocationsEqual(start$$1.source, destination)) {
	        return;
	      }

	      setState({
	        lastDestination: destination,
	        hasMovedFromStartLocation: true
	      });

	      execute(onDragUpdate, update, preset.onDragUpdate);

	      return;
	    }

	    if (areLocationsEqual(state.lastDestination, destination)) {
	      return;
	    }

	    setState({
	      lastDestination: destination
	    });

	    execute(onDragUpdate, update, preset.onDragUpdate);
	  };

	  var onStateChange = function onStateChange(hooks, previous, current) {
	    var onDragStart = hooks.onDragStart,
	        onDragUpdate = hooks.onDragUpdate,
	        onDragEnd = hooks.onDragEnd;

	    var currentPhase = current.phase;
	    var previousPhase = previous.phase;

	    if (currentPhase === 'DRAGGING' && previousPhase === 'DRAGGING') {
	      onDrag(current, onDragUpdate);
	      return;
	    }

	    if (state.isDragging) {
	      setState(notDragging);
	    }

	    if (currentPhase === previousPhase) {
	      return;
	    }

	    if (currentPhase === 'DRAGGING' && previousPhase !== 'DRAGGING') {
	      var _start = getDragStart(current);

	      if (!_start) {
	        console.error('Unable to publish onDragStart');
	        return;
	      }

	      setState({
	        isDragging: true,
	        hasMovedFromStartLocation: false,
	        start: _start
	      });

	      withTimings('hook:onDragStart', function () {
	        return execute(onDragStart, _start, preset.onDragStart);
	      });
	      return;
	    }

	    if (currentPhase === 'DROP_COMPLETE' && previousPhase !== 'DROP_COMPLETE') {
	      if (!current.drop || !current.drop.result) {
	        console.error('cannot fire onDragEnd hook without drag state', { current: current, previous: previous });
	        return;
	      }
	      var result = current.drop.result;

	      withTimings('hook:onDragEnd', function () {
	        return execute(onDragEnd, result, preset.onDragEnd);
	      });
	      return;
	    }

	    if (currentPhase === 'IDLE' && previousPhase === 'DRAGGING') {
	      if (!previous.drag) {
	        console.error('cannot fire onDragEnd for cancel because cannot find previous drag');
	        return;
	      }

	      var descriptor = previous.drag.initial.descriptor;
	      var home = previous.dimension.droppable[descriptor.droppableId];

	      if (!home) {
	        console.error('cannot find dimension for home droppable');
	        return;
	      }

	      var source = {
	        index: descriptor.index,
	        droppableId: descriptor.droppableId
	      };
	      var _result = {
	        draggableId: descriptor.id,
	        type: home.descriptor.type,
	        source: source,
	        destination: null,
	        reason: 'CANCEL'
	      };

	      withTimings('hook:onDragEnd (cancel)', function () {
	        return execute(onDragEnd, _result, preset.onDragEnd);
	      });
	      return;
	    }

	    if (currentPhase === 'IDLE' && previousPhase === 'DROP_ANIMATING') {
	      if (!previous.drop || !previous.drop.pending) {
	        console.error('cannot fire onDragEnd for cancel because cannot find previous pending drop');
	        return;
	      }

	      var _result2 = {
	        draggableId: previous.drop.pending.result.draggableId,
	        type: previous.drop.pending.result.type,
	        source: previous.drop.pending.result.source,
	        destination: null,
	        reason: 'CANCEL'
	      };

	      execute(onDragEnd, _result2, preset.onDragEnd);
	    }
	  };

	  var caller = {
	    onStateChange: onStateChange
	  };

	  return caller;
	});

	var createDimensionMarshal = (function (callbacks) {
	  var state = {
	    droppables: {},
	    draggables: {},
	    isCollecting: false,
	    scrollOptions: null,
	    request: null,
	    requestType: null,
	    frameId: null
	  };

	  var setState = function setState(partial) {
	    var newState = _extends$2({}, state, partial);
	    state = newState;
	  };

	  var cancel = function cancel() {
	    var _console;

	    (_console = console).error.apply(_console, arguments);

	    callbacks.cancel();

	    if (!state.isCollecting) {
	      return;
	    }

	    stopCollecting();
	  };

	  var cancelIfModifyingActiveDraggable = function cancelIfModifyingActiveDraggable(descriptor) {
	    if (!state.isCollecting) {
	      return;
	    }

	    var home = state.droppables[descriptor.droppableId];

	    if (!home) {
	      return;
	    }

	    if (home.descriptor.type !== state.requestType) {
	      return;
	    }

	    cancel('Adding or removing a Draggable during a drag is currently not supported');
	  };

	  var cancelIfModifyingActiveDroppable = function cancelIfModifyingActiveDroppable(descriptor) {
	    if (!state.isCollecting) {
	      return;
	    }

	    if (descriptor.type !== state.requestType) {
	      return;
	    }

	    cancel('Adding or removing a Droppable during a drag is currently not supported');
	  };

	  var registerDraggable = function registerDraggable(descriptor, getDimension) {
	    var _extends2;

	    var id = descriptor.id;

	    var entry = {
	      descriptor: descriptor,
	      getDimension: getDimension
	    };
	    var draggables = _extends$2({}, state.draggables, (_extends2 = {}, _extends2[id] = entry, _extends2));

	    setState({
	      draggables: draggables
	    });

	    cancelIfModifyingActiveDraggable(descriptor);
	  };

	  var registerDroppable = function registerDroppable(descriptor, droppableCallbacks) {
	    var _extends3;

	    var id = descriptor.id;

	    var entry = {
	      descriptor: descriptor,
	      callbacks: droppableCallbacks
	    };

	    var droppables = _extends$2({}, state.droppables, (_extends3 = {}, _extends3[id] = entry, _extends3));

	    setState({
	      droppables: droppables
	    });

	    cancelIfModifyingActiveDroppable(descriptor);
	  };

	  var updateDroppableIsEnabled = function updateDroppableIsEnabled(id, isEnabled) {
	    if (!state.droppables[id]) {
	      cancel('Cannot update the scroll on Droppable ' + id + ' as it is not registered');
	      return;
	    }

	    if (!state.isCollecting) {
	      return;
	    }

	    callbacks.updateDroppableIsEnabled(id, isEnabled);
	  };

	  var updateDroppableScroll = function updateDroppableScroll(id, newScroll) {
	    if (!state.droppables[id]) {
	      cancel('Cannot update the scroll on Droppable ' + id + ' as it is not registered');
	      return;
	    }

	    if (!state.isCollecting) {
	      return;
	    }
	    callbacks.updateDroppableScroll(id, newScroll);
	  };

	  var scrollDroppable = function scrollDroppable(id, change) {
	    var entry = state.droppables[id];
	    if (!entry) {
	      return;
	    }

	    if (!state.isCollecting) {
	      return;
	    }

	    entry.callbacks.scroll(change);
	  };

	  var unregisterDraggable = function unregisterDraggable(descriptor) {
	    var entry = state.draggables[descriptor.id];

	    if (!entry) {
	      cancel('Cannot unregister Draggable with id ' + descriptor.id + ' as it is not registered');
	      return;
	    }

	    if (entry.descriptor !== descriptor) {
	      return;
	    }

	    var newMap = _extends$2({}, state.draggables);
	    delete newMap[descriptor.id];

	    setState({
	      draggables: newMap
	    });

	    cancelIfModifyingActiveDraggable(descriptor);
	  };

	  var unregisterDroppable = function unregisterDroppable(descriptor) {
	    var entry = state.droppables[descriptor.id];

	    if (!entry) {
	      cancel('Cannot unregister Droppable with id ' + descriptor.id + ' as as it is not registered');
	      return;
	    }

	    if (entry.descriptor !== descriptor) {
	      return;
	    }

	    var newMap = _extends$2({}, state.droppables);
	    delete newMap[descriptor.id];

	    setState({
	      droppables: newMap
	    });

	    cancelIfModifyingActiveDroppable(descriptor);
	  };

	  var getToBeCollected = function getToBeCollected() {
	    var draggables = state.draggables;
	    var droppables = state.droppables;
	    var request = state.request;

	    if (!request) {
	      console.error('cannot find request in state');
	      return [];
	    }
	    var draggableId = request.draggableId;
	    var descriptor = draggables[draggableId].descriptor;
	    var home = droppables[descriptor.droppableId].descriptor;

	    var draggablesToBeCollected = _Object$keys(draggables).map(function (id) {
	      return draggables[id].descriptor;
	    }).filter(function (item) {
	      return item.id !== descriptor.id;
	    }).filter(function (item) {
	      var entry = droppables[item.droppableId];

	      if (!entry) {
	        console.warn('Orphan Draggable found ' + item.id + ' which says it belongs to unknown Droppable ' + item.droppableId);
	        return false;
	      }

	      return entry.descriptor.type === home.type;
	    });

	    var droppablesToBeCollected = _Object$keys(droppables).map(function (id) {
	      return droppables[id].descriptor;
	    }).filter(function (item) {
	      return item.id !== home.id;
	    }).filter(function (item) {
	      var droppable = droppables[item.id].descriptor;
	      return droppable.type === home.type;
	    });

	    var toBeCollected = [].concat(droppablesToBeCollected, draggablesToBeCollected);

	    return toBeCollected;
	  };

	  var processPrimaryDimensions = function processPrimaryDimensions(request) {
	    if (state.isCollecting) {
	      cancel('Cannot start capturing dimensions for a drag it is already dragging');
	      return;
	    }

	    if (!request) {
	      cancel('Cannot start capturing dimensions with an invalid request', request);
	      return;
	    }

	    var draggables = state.draggables;
	    var droppables = state.droppables;
	    var draggableId = request.draggableId;
	    var draggableEntry = draggables[draggableId];

	    if (!draggableEntry) {
	      cancel('Cannot find Draggable with id ' + draggableId + ' to start collecting dimensions');
	      return;
	    }

	    var homeEntry = droppables[draggableEntry.descriptor.droppableId];

	    if (!homeEntry) {
	      cancel('\n        Cannot find home Droppable [id:' + draggableEntry.descriptor.droppableId + ']\n        for Draggable [id:' + request.draggableId + ']\n      ');
	      return;
	    }

	    setState({
	      isCollecting: true,
	      request: request,
	      requestType: homeEntry.descriptor.type
	    });

	    var home = homeEntry.callbacks.getDimension();
	    var draggable = draggableEntry.getDimension();

	    callbacks.publishDroppable(home);
	    callbacks.publishDraggable(draggable);

	    homeEntry.callbacks.watchScroll(request.scrollOptions);
	  };

	  var setFrameId = function setFrameId(frameId) {
	    setState({
	      frameId: frameId
	    });
	  };

	  var processSecondaryDimensions = function processSecondaryDimensions(requestInAppState) {
	    if (!state.isCollecting) {
	      cancel('Cannot collect secondary dimensions when collection is not occurring');
	      return;
	    }

	    var request = state.request;

	    if (!request) {
	      cancel('Cannot process secondary dimensions without a request');
	      return;
	    }

	    if (!requestInAppState) {
	      cancel('Cannot process secondary dimensions without a request on the state');
	      return;
	    }

	    if (requestInAppState.draggableId !== request.draggableId) {
	      cancel('Cannot process secondary dimensions as local request does not match app state');
	      return;
	    }

	    var toBeCollected = getToBeCollected();

	    var collectFrameId = requestAnimationFrame(function () {
	      var toBePublishedBuffer = toBeCollected.map(function (descriptor) {
	        if (descriptor.type) {
	          return state.droppables[descriptor.id].callbacks.getDimension();
	        }

	        return state.draggables[descriptor.id].getDimension();
	      });

	      var publishFrameId = requestAnimationFrame(function () {
	        var toBePublished = toBePublishedBuffer.reduce(function (previous, dimension) {
	          if (dimension.placeholder) {
	            previous.draggables.push(dimension);
	          } else {
	            previous.droppables.push(dimension);
	          }
	          return previous;
	        }, { draggables: [], droppables: [] });

	        callbacks.bulkPublish(toBePublished.droppables, toBePublished.draggables);

	        toBePublished.droppables.forEach(function (dimension) {
	          var entry = state.droppables[dimension.descriptor.id];
	          entry.callbacks.watchScroll(request.scrollOptions);
	        });

	        setFrameId(null);
	      });

	      setFrameId(publishFrameId);
	    });

	    setFrameId(collectFrameId);
	  };

	  var stopCollecting = function stopCollecting() {
	    _Object$keys(state.droppables).forEach(function (id) {
	      return state.droppables[id].callbacks.unwatchScroll();
	    });

	    if (state.frameId) {
	      cancelAnimationFrame(state.frameId);
	    }

	    setState({
	      isCollecting: false,
	      request: null,
	      frameId: null
	    });
	  };

	  var onPhaseChange = function onPhaseChange(current) {
	    var phase = current.phase;

	    if (phase === 'COLLECTING_INITIAL_DIMENSIONS') {
	      processPrimaryDimensions(current.dimension.request);
	      return;
	    }

	    if (phase === 'DRAGGING') {
	      processSecondaryDimensions(current.dimension.request);
	      return;
	    }

	    if (phase === 'DROP_ANIMATING' || phase === 'DROP_COMPLETE') {
	      if (state.isCollecting) {
	        stopCollecting();
	      }
	      return;
	    }

	    if (phase === 'IDLE') {
	      if (state.isCollecting) {
	        stopCollecting();
	      }
	    }
	  };

	  var marshal = {
	    registerDraggable: registerDraggable,
	    unregisterDraggable: unregisterDraggable,
	    registerDroppable: registerDroppable,
	    unregisterDroppable: unregisterDroppable,
	    updateDroppableIsEnabled: updateDroppableIsEnabled,
	    scrollDroppable: scrollDroppable,
	    updateDroppableScroll: updateDroppableScroll,
	    onPhaseChange: onPhaseChange
	  };

	  return marshal;
	});

	var physics = function () {
	  var base = {
	    stiffness: 1000,
	    damping: 60,

	    precision: 0.99
	  };

	  var standard = _extends$2({}, base);

	  var fast = _extends$2({}, base, {
	    stiffness: base.stiffness * 2
	  });

	  return { standard: standard, fast: fast };
	}();

	var css = {
	  outOfTheWay: 'transform 0.2s cubic-bezier(0.2, 0, 0, 1)'
	};

	var prefix$1 = 'data-react-beautiful-dnd';
	var dragHandle = prefix$1 + '-drag-handle';
	var draggable = prefix$1 + '-draggable';
	var droppable = prefix$1 + '-droppable';

	var getStyles = (function (styleContext) {
	  var dragHandleSelector = '[' + dragHandle + '="' + styleContext + '"]';
	  var draggableSelector = '[' + draggable + '="' + styleContext + '"]';
	  var droppableSelector = '[' + droppable + '="' + styleContext + '"]';

	  var dragHandleStyles = {
	    base: '\n      ' + dragHandleSelector + ' {\n        -webkit-touch-callout: none;\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        touch-action: manipulation;\n      }\n    ',
	    grabCursor: '\n      ' + dragHandleSelector + ' {\n        cursor: -webkit-grab;\n        cursor: grab;\n      }\n    ',
	    blockPointerEvents: '\n      ' + dragHandleSelector + ' {\n        pointer-events: none;\n      }\n    '
	  };

	  var draggableStyles = {
	    animateMovement: '\n      ' + draggableSelector + ' {\n        transition: ' + css.outOfTheWay + ';\n      }\n    '
	  };

	  var droppableStyles = {
	    base: '\n      ' + droppableSelector + ' {\n        overflow-anchor: none;\n      }\n    '
	  };

	  var bodyStyles = {
	    whileActiveDragging: '\n      body {\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n      }\n    '
	  };

	  var base = [dragHandleStyles.base, droppableStyles.base];

	  var resting = [].concat(base, [dragHandleStyles.grabCursor]).join('');

	  var dragging = [].concat(base, [dragHandleStyles.blockPointerEvents, draggableStyles.animateMovement, bodyStyles.whileActiveDragging]).join('');

	  var dropAnimating = [].concat(base, [dragHandleStyles.grabCursor, draggableStyles.animateMovement]).join('');

	  var userCancel = [].concat(base, [draggableStyles.animateMovement]).join('');

	  return { resting: resting, dragging: dragging, dropAnimating: dropAnimating, userCancel: userCancel };
	});

	var count = 0;

	var resetStyleContext = function resetStyleContext() {
	  count = 0;
	};

	var createStyleMarshal = (function () {
	  var context = '' + count++;
	  var styles = getStyles(context);

	  var state = {
	    el: null
	  };

	  var setState = function setState(newState) {
	    state = newState;
	  };

	  var setStyle = memoizeOne(function (proposed) {
	    if (!state.el) {
	      console.error('cannot set style of style tag if not mounted');
	      return;
	    }

	    state.el.innerHTML = proposed;
	  });

	  var mount = function mount() {
	    if (state.el) {
	      console.error('Style marshal already mounted');
	      return;
	    }

	    var el = document.createElement('style');
	    el.type = 'text/css';

	    el.setAttribute(prefix$1, context);
	    var head = document.querySelector('head');

	    index(head, 'Cannot find the head to append a style to');

	    head.appendChild(el);
	    setState({
	      el: el
	    });

	    setStyle(styles.resting);
	  };

	  var onPhaseChange = function onPhaseChange(current) {
	    if (!state.el) {
	      console.error('cannot update styles until style marshal is mounted');
	      return;
	    }

	    var phase = current.phase;

	    if (phase === 'DRAGGING') {
	      setStyle(styles.dragging);
	      return;
	    }

	    if (phase === 'DROP_ANIMATING') {
	      if (!current.drop || !current.drop.pending) {
	        console.error('Invalid state found in style-marshal');
	        return;
	      }

	      var reason = current.drop.pending.result.reason;

	      if (reason === 'DROP') {
	        setStyle(styles.dropAnimating);
	        return;
	      }
	      setStyle(styles.userCancel);
	      return;
	    }

	    setStyle(styles.resting);
	  };

	  var unmount = function unmount() {
	    if (!state.el) {
	      console.error('Cannot unmount style marshal as it is already unmounted');
	      return;
	    }
	    var previous = state.el;

	    setState({
	      el: null
	    });

	    if (!previous.parentNode) {
	      console.error('Cannot unmount style marshal as cannot find parent');
	      return;
	    }

	    previous.parentNode.removeChild(previous);
	  };

	  var marshal = {
	    onPhaseChange: onPhaseChange,
	    styleContext: context,
	    mount: mount,
	    unmount: unmount
	  };

	  return marshal;
	});

	var canStartDrag = (function (state, id) {
	  var phase = state.phase;

	  if (phase === 'IDLE' || phase === 'DROP_COMPLETE') {
	    return true;
	  }

	  if (phase === 'PREPARING' || phase === 'COLLECTING_INITIAL_DIMENSIONS' || phase === 'DRAGGING') {
	    return false;
	  }

	  if (phase === 'DROP_ANIMATING') {
	    if (!state.drop || !state.drop.pending) {
	      console.error('Invalid state shape for drop animating');
	      return false;
	    }

	    if (state.drop.pending.result.draggableId === id) {
	      return false;
	    }

	    return state.drop.pending.result.reason === 'DROP';
	  }

	  console.warn('unhandled phase ' + phase + ' in canLift check');
	  return false;
	});

	var scrollWindow = (function (change) {
	  window.scrollBy(change.x, change.y);
	});

	var count$1 = 0;

	var visuallyHidden = {
	  position: 'absolute',
	  width: '1px',
	  height: '1px',
	  margin: '-1px',
	  border: '0',
	  padding: '0',
	  overflow: 'hidden',
	  clip: 'rect(0 0 0 0)',

	  'clip-path': 'inset(100%)'
	};

	var createAnnouncer = (function () {
	  var id = 'react-beautiful-dnd-announcement-' + count$1++;

	  var state = {
	    el: null
	  };

	  var setState = function setState(newState) {
	    state = newState;
	  };

	  var announce = function announce(message) {
	    var el = state.el;
	    if (!el) {
	      console.error('Cannot announce to unmounted node');
	      return;
	    }

	    el.textContent = message;
	  };

	  var mount = function mount() {
	    if (state.el) {
	      console.error('Announcer already mounted');
	      return;
	    }

	    var el = document.createElement('div');

	    el.id = id;

	    el.setAttribute('aria-live', 'assertive');
	    el.setAttribute('role', 'log');

	    el.setAttribute('aria-atomic', 'true');

	    _Object$assign(el.style, visuallyHidden);

	    index(document.body, 'Cannot find the head to append a style to');

	    document.body.appendChild(el);
	    setState({
	      el: el
	    });
	  };

	  var unmount = function unmount() {
	    if (!state.el) {
	      console.error('Will not unmount annoucer as it is already unmounted');
	      return;
	    }
	    var node = state.el;

	    setState({
	      el: null
	    });

	    if (!node.parentNode) {
	      console.error('Cannot unmount style marshal as cannot find parent');
	      return;
	    }

	    node.parentNode.removeChild(node);
	  };

	  var announcer = {
	    announce: announce,
	    id: id,
	    mount: mount,
	    unmount: unmount
	  };

	  return announcer;
	});

	var rafSchd = (function (fn) {
	  var lastArgs = [];
	  var frameId = null;

	  var wrapperFn = function wrapperFn() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    lastArgs = args;

	    if (frameId) {
	      return frameId;
	    }

	    frameId = requestAnimationFrame(function () {
	      frameId = null;
	      fn.apply(undefined, lastArgs);
	    });

	    return frameId;
	  };

	  wrapperFn.cancel = function () {
	    if (!frameId) {
	      return;
	    }

	    cancelAnimationFrame(frameId);
	    frameId = null;
	  };

	  var resultFn = wrapperFn;

	  return resultFn;
	});

	var getScrollableDroppables = memoizeOne(function (droppables) {
	  return _Object$keys(droppables).map(function (id) {
	    return droppables[id];
	  }).filter(function (droppable) {
	    if (!droppable.isEnabled) {
	      return false;
	    }

	    if (!droppable.viewport.closestScrollable) {
	      return false;
	    }

	    return true;
	  });
	});

	var getScrollableDroppableOver = function getScrollableDroppableOver(target, droppables) {
	  var maybe = getScrollableDroppables(droppables).find(function (droppable) {
	    index(droppable.viewport.closestScrollable, 'Invalid result');
	    return isPositionInFrame(droppable.viewport.closestScrollable.framePageMarginBox)(target);
	  });

	  return maybe;
	};

	var getBestScrollableDroppable = (function (_ref) {
	  var center = _ref.center,
	      destination = _ref.destination,
	      droppables = _ref.droppables;


	  if (destination) {
	    var _dimension = droppables[destination.droppableId];
	    if (!_dimension.viewport.closestScrollable) {
	      return null;
	    }
	    return _dimension;
	  }

	  var dimension = getScrollableDroppableOver(center, droppables);

	  return dimension;
	});

	var origin$4 = { x: 0, y: 0 };

	var smallestSigned = apply(function (value) {
	  if (value === 0) {
	    return 0;
	  }
	  return value > 0 ? 1 : -1;
	});

	var getOverlap = function () {
	  var getRemainder = function getRemainder(target, max) {
	    if (target < 0) {
	      return target;
	    }
	    if (target > max) {
	      return target - max;
	    }
	    return 0;
	  };

	  return function (_ref) {
	    var current = _ref.current,
	        max = _ref.max,
	        change = _ref.change;

	    var targetScroll = add(current, change);

	    var overlap = {
	      x: getRemainder(targetScroll.x, max.x),
	      y: getRemainder(targetScroll.y, max.y)
	    };

	    if (isEqual(overlap, origin$4)) {
	      return null;
	    }

	    return overlap;
	  };
	}();

	var canPartiallyScroll = function canPartiallyScroll(_ref2) {
	  var max = _ref2.max,
	      current = _ref2.current,
	      change = _ref2.change;

	  var smallestChange = smallestSigned(change);

	  var overlap = getOverlap({
	    max: max, current: current, change: smallestChange
	  });

	  if (!overlap) {
	    return true;
	  }

	  if (smallestChange.x !== 0 && overlap.x === 0) {
	    return true;
	  }

	  if (smallestChange.y !== 0 && overlap.y === 0) {
	    return true;
	  }

	  return false;
	};

	var canScrollWindow = function canScrollWindow(viewport, change) {
	  return canPartiallyScroll({
	    current: viewport.scroll,
	    max: viewport.maxScroll,
	    change: change
	  });
	};

	var canScrollDroppable = function canScrollDroppable(droppable, change) {
	  var closestScrollable = droppable.viewport.closestScrollable;

	  if (!closestScrollable) {
	    return false;
	  }

	  return canPartiallyScroll({
	    current: closestScrollable.scroll.current,
	    max: closestScrollable.scroll.max,
	    change: change
	  });
	};

	var getWindowOverlap = function getWindowOverlap(viewport, change) {
	  if (!canScrollWindow(viewport, change)) {
	    return null;
	  }

	  var max = viewport.maxScroll;
	  var current = viewport.scroll;

	  return getOverlap({
	    current: current,
	    max: max,
	    change: change
	  });
	};

	var getDroppableOverlap = function getDroppableOverlap(droppable, change) {
	  if (!canScrollDroppable(droppable, change)) {
	    return null;
	  }

	  var closestScrollable = droppable.viewport.closestScrollable;

	  if (!closestScrollable) {
	    return null;
	  }

	  return getOverlap({
	    current: closestScrollable.scroll.current,
	    max: closestScrollable.scroll.max,
	    change: change
	  });
	};

	var config = {
	  startFrom: 0.25,
	  maxSpeedAt: 0.05,

	  maxScrollSpeed: 28,

	  ease: function ease(percentage) {
	    return Math.pow(percentage, 2);
	  }
	};

	var origin$5 = { x: 0, y: 0 };

	var clean$1 = apply(function (value) {
	  return value === 0 ? 0 : value;
	});

	var getPixelThresholds = function getPixelThresholds(container, axis) {
	  var startFrom = container[axis.size] * config.startFrom;
	  var maxSpeedAt = container[axis.size] * config.maxSpeedAt;
	  var accelerationPlane = startFrom - maxSpeedAt;

	  var thresholds = {
	    startFrom: startFrom,
	    maxSpeedAt: maxSpeedAt,
	    accelerationPlane: accelerationPlane
	  };

	  return thresholds;
	};

	var getSpeed = function getSpeed(distance$$1, thresholds) {
	  if (distance$$1 >= thresholds.startFrom) {
	    return 0;
	  }

	  if (distance$$1 <= thresholds.maxSpeedAt) {
	    return config.maxScrollSpeed;
	  }

	  var distancePastStart = thresholds.startFrom - distance$$1;
	  var percentage = distancePastStart / thresholds.accelerationPlane;
	  var transformed = config.ease(percentage);

	  var speed = config.maxScrollSpeed * transformed;

	  return speed;
	};

	var adjustForSizeLimits = function adjustForSizeLimits(_ref) {
	  var container = _ref.container,
	      subject = _ref.subject,
	      proposedScroll = _ref.proposedScroll;

	  var isTooBigVertically = subject.height > container.height;
	  var isTooBigHorizontally = subject.width > container.width;

	  if (!isTooBigHorizontally && !isTooBigVertically) {
	    return proposedScroll;
	  }

	  if (isTooBigHorizontally && isTooBigVertically) {
	    return null;
	  }

	  return {
	    x: isTooBigHorizontally ? 0 : proposedScroll.x,
	    y: isTooBigVertically ? 0 : proposedScroll.y
	  };
	};

	var getRequiredScroll = function getRequiredScroll(_ref2) {
	  var container = _ref2.container,
	      subject = _ref2.subject,
	      center = _ref2.center;

	  var distance$$1 = {
	    top: center.y - container.top,
	    right: container.right - center.x,
	    bottom: container.bottom - center.y,
	    left: center.x - container.left
	  };

	  var y = function () {
	    var thresholds = getPixelThresholds(container, vertical);
	    var isCloserToBottom = distance$$1.bottom < distance$$1.top;

	    if (isCloserToBottom) {
	      return getSpeed(distance$$1.bottom, thresholds);
	    }

	    return -1 * getSpeed(distance$$1.top, thresholds);
	  }();

	  var x = function () {
	    var thresholds = getPixelThresholds(container, horizontal);
	    var isCloserToRight = distance$$1.right < distance$$1.left;

	    if (isCloserToRight) {
	      return getSpeed(distance$$1.right, thresholds);
	    }

	    return -1 * getSpeed(distance$$1.left, thresholds);
	  }();

	  var required = clean$1({ x: x, y: y });

	  if (isEqual(required, origin$5)) {
	    return null;
	  }

	  var limited = adjustForSizeLimits({
	    container: container,
	    subject: subject,
	    proposedScroll: required
	  });

	  if (!limited) {
	    return null;
	  }

	  return isEqual(limited, origin$5) ? null : limited;
	};

	var withPlaceholder = function withPlaceholder(droppable, draggable) {
	  var closest$$1 = droppable.viewport.closestScrollable;

	  if (!closest$$1) {
	    return null;
	  }

	  var isOverHome = droppable.descriptor.id === draggable.descriptor.droppableId;
	  var max = closest$$1.scroll.max;
	  var current = closest$$1.scroll.current;

	  if (isOverHome) {
	    return { max: max, current: current };
	  }

	  var spaceForPlaceholder = patch(droppable.axis.line, draggable.placeholder.client.borderBox[droppable.axis.size]);

	  var newMax = add(max, spaceForPlaceholder);

	  var newCurrent = {
	    x: Math.min(current.x, newMax.x),
	    y: Math.min(current.y, newMax.y)
	  };

	  return {
	    max: newMax,
	    current: newCurrent
	  };
	};

	var createFluidScroller = (function (_ref3) {
	  var scrollWindow = _ref3.scrollWindow,
	      scrollDroppable = _ref3.scrollDroppable;

	  var scheduleWindowScroll = rafSchd(scrollWindow);
	  var scheduleDroppableScroll = rafSchd(scrollDroppable);

	  var scroller = function scroller(state) {
	    var drag = state.drag;
	    if (!drag) {
	      console.error('Invalid drag state');
	      return;
	    }

	    var center = drag.current.page.borderBoxCenter;

	    var draggable = state.dimension.draggable[drag.initial.descriptor.id];
	    var subject = draggable.page.marginBox;
	    var viewport = drag.current.viewport;
	    var requiredWindowScroll = getRequiredScroll({
	      container: viewport.subject,
	      subject: subject,
	      center: center
	    });

	    if (requiredWindowScroll && canScrollWindow(viewport, requiredWindowScroll)) {
	      scheduleWindowScroll(requiredWindowScroll);
	      return;
	    }

	    var droppable = getBestScrollableDroppable({
	      center: center,
	      destination: drag.impact.destination,
	      droppables: state.dimension.droppable
	    });

	    if (!droppable) {
	      return;
	    }

	    var closestScrollable = droppable.viewport.closestScrollable;

	    if (!closestScrollable) {
	      return;
	    }

	    var requiredFrameScroll = getRequiredScroll({
	      container: closestScrollable.framePageMarginBox,
	      subject: subject,
	      center: center
	    });

	    if (!requiredFrameScroll) {
	      return;
	    }

	    var result = withPlaceholder(droppable, draggable);

	    if (!result) {
	      return;
	    }

	    var canScrollDroppable$$1 = canPartiallyScroll({
	      max: result.max,
	      current: result.current,
	      change: requiredFrameScroll
	    });

	    if (canScrollDroppable$$1) {
	      scheduleDroppableScroll(droppable.descriptor.id, requiredFrameScroll);
	    }
	  };

	  scroller.cancel = function () {
	    scheduleWindowScroll.cancel();
	    scheduleDroppableScroll.cancel();
	  };

	  return scroller;
	});

	var createJumpScroller = (function (_ref) {
	  var move = _ref.move,
	      scrollDroppable = _ref.scrollDroppable,
	      scrollWindow = _ref.scrollWindow;

	  var moveByOffset = function moveByOffset(state, offset) {
	    var drag = state.drag;
	    if (!drag) {
	      console.error('Cannot move by offset when not dragging');
	      return;
	    }

	    var client = add(drag.current.client.selection, offset);
	    move(drag.initial.descriptor.id, client, drag.current.viewport, true);
	  };

	  var scrollDroppableAsMuchAsItCan = function scrollDroppableAsMuchAsItCan(droppable, change) {
	    if (!canScrollDroppable(droppable, change)) {
	      return change;
	    }

	    var overlap = getDroppableOverlap(droppable, change);

	    if (!overlap) {
	      scrollDroppable(droppable.descriptor.id, change);
	      return null;
	    }

	    var whatTheDroppableCanScroll = subtract(change, overlap);
	    scrollDroppable(droppable.descriptor.id, whatTheDroppableCanScroll);

	    var remainder = subtract(change, whatTheDroppableCanScroll);
	    return remainder;
	  };

	  var scrollWindowAsMuchAsItCan = function scrollWindowAsMuchAsItCan(viewport, change) {
	    if (!canScrollWindow(viewport, change)) {
	      return change;
	    }

	    var overlap = getWindowOverlap(viewport, change);

	    if (!overlap) {
	      scrollWindow(change);
	      return null;
	    }

	    var whatTheWindowCanScroll = subtract(change, overlap);
	    scrollWindow(whatTheWindowCanScroll);

	    var remainder = subtract(change, whatTheWindowCanScroll);
	    return remainder;
	  };

	  var jumpScroller = function jumpScroller(state) {
	    var drag = state.drag;

	    if (!drag) {
	      return;
	    }

	    var request = drag.scrollJumpRequest;

	    if (!request) {
	      return;
	    }

	    var destination = drag.impact.destination;

	    if (!destination) {
	      console.error('Cannot perform a jump scroll when there is no destination');
	      return;
	    }

	    var droppableRemainder = scrollDroppableAsMuchAsItCan(state.dimension.droppable[destination.droppableId], request);

	    if (!droppableRemainder) {
	      return;
	    }

	    var viewport = drag.current.viewport;
	    var windowRemainder = scrollWindowAsMuchAsItCan(viewport, droppableRemainder);

	    if (!windowRemainder) {
	      return;
	    }

	    moveByOffset(state, windowRemainder);
	  };

	  return jumpScroller;
	});

	var createAutoScroller = (function (_ref) {
	  var scrollDroppable = _ref.scrollDroppable,
	      scrollWindow = _ref.scrollWindow,
	      move = _ref.move;

	  var fluidScroll = createFluidScroller({
	    scrollWindow: scrollWindow,
	    scrollDroppable: scrollDroppable
	  });

	  var jumpScroll = createJumpScroller({
	    move: move,
	    scrollWindow: scrollWindow,
	    scrollDroppable: scrollDroppable
	  });

	  var onStateChange = function onStateChange(previous, current) {
	    if (current.phase === 'DRAGGING') {
	      if (!current.drag) {
	        console.error('invalid drag state');
	        return;
	      }

	      if (current.drag.initial.autoScrollMode === 'FLUID') {
	        fluidScroll(current);
	        return;
	      }

	      if (!current.drag.scrollJumpRequest) {
	        return;
	      }

	      jumpScroll(current);
	      return;
	    }

	    if (previous.phase === 'DRAGGING' && current.phase !== 'DRAGGING') {
	      fluidScroll.cancel();
	    }
	  };

	  var marshal = {
	    onStateChange: onStateChange
	  };

	  return marshal;
	});

	var prefix$2 = function prefix(key) {
	  return 'private-react-beautiful-dnd-key-do-not-use-' + key;
	};

	var storeKey = prefix$2('store');
	var droppableIdKey = prefix$2('droppable-id');
	var dimensionMarshalKey = prefix$2('dimension-marshal');
	var styleContextKey = prefix$2('style-context');
	var canLiftContextKey = prefix$2('can-lift');

	var getNewHomeClientBorderBoxCenter = (function (_ref) {
	  var movement = _ref.movement,
	      draggable = _ref.draggable,
	      draggables = _ref.draggables,
	      destination = _ref.destination;

	  var originalCenter = draggable.client.borderBox.center;

	  if (destination == null) {
	    return originalCenter;
	  }

	  var displaced = movement.displaced,
	      isBeyondStartPosition = movement.isBeyondStartPosition;

	  var axis = destination.axis;

	  var isWithinHomeDroppable = destination.descriptor.id === draggable.descriptor.droppableId;

	  if (isWithinHomeDroppable && !displaced.length) {
	    return originalCenter;
	  }

	  var draggablesInDestination = getDraggablesInsideDroppable(destination, draggables);

	  var movingRelativeTo = function () {
	    if (isWithinHomeDroppable) {
	      return draggables[displaced[0].draggableId].client.borderBox;
	    }

	    if (displaced.length) {
	      return draggables[displaced[0].draggableId].client.borderBox;
	    }

	    if (draggablesInDestination.length) {
	      return draggablesInDestination[draggablesInDestination.length - 1].client.marginBox;
	    }

	    return destination.client.contentBox;
	  }();

	  var _ref2 = function () {
	    if (isWithinHomeDroppable) {
	      if (isBeyondStartPosition) {
	        return { sourceEdge: 'end', destinationEdge: 'end' };
	      }

	      return { sourceEdge: 'start', destinationEdge: 'start' };
	    }

	    if (!displaced.length && draggablesInDestination.length) {
	      return { sourceEdge: 'start', destinationEdge: 'end' };
	    }

	    return { sourceEdge: 'start', destinationEdge: 'start' };
	  }(),
	      sourceEdge = _ref2.sourceEdge,
	      destinationEdge = _ref2.destinationEdge;

	  var source = draggable.client.borderBox;

	  var targetCenter = moveToEdge({
	    source: source,
	    sourceEdge: sourceEdge,
	    destination: movingRelativeTo,
	    destinationEdge: destinationEdge,
	    destinationAxis: axis
	  });

	  return targetCenter;
	});

	var origin$6 = { x: 0, y: 0 };

	var getScrollDiff = function getScrollDiff(_ref) {
	  var initial = _ref.initial,
	      current = _ref.current,
	      droppable = _ref.droppable;

	  var windowScrollDiff = subtract(initial.viewport.scroll, current.viewport.scroll);

	  if (!droppable) {
	    return windowScrollDiff;
	  }

	  return withDroppableDisplacement(droppable, windowScrollDiff);
	};

	var requestDimensions = function requestDimensions(request) {
	  return {
	    type: 'REQUEST_DIMENSIONS',
	    payload: request
	  };
	};

	var completeLift = function completeLift(id, client, viewport, autoScrollMode) {
	  return {
	    type: 'COMPLETE_LIFT',
	    payload: {
	      id: id,
	      client: client,
	      viewport: viewport,
	      autoScrollMode: autoScrollMode
	    }
	  };
	};

	var publishDraggableDimension = function publishDraggableDimension(dimension) {
	  return {
	    type: 'PUBLISH_DRAGGABLE_DIMENSION',
	    payload: dimension
	  };
	};

	var publishDroppableDimension = function publishDroppableDimension(dimension) {
	  return {
	    type: 'PUBLISH_DROPPABLE_DIMENSION',
	    payload: dimension
	  };
	};

	var bulkPublishDimensions = function bulkPublishDimensions(droppables, draggables) {
	  return {
	    type: 'BULK_DIMENSION_PUBLISH',
	    payload: {
	      droppables: droppables,
	      draggables: draggables
	    }
	  };
	};

	var updateDroppableDimensionScroll = function updateDroppableDimensionScroll(id, offset) {
	  return {
	    type: 'UPDATE_DROPPABLE_DIMENSION_SCROLL',
	    payload: {
	      id: id,
	      offset: offset
	    }
	  };
	};

	var updateDroppableDimensionIsEnabled = function updateDroppableDimensionIsEnabled(id, isEnabled) {
	  return {
	    type: 'UPDATE_DROPPABLE_DIMENSION_IS_ENABLED',
	    payload: {
	      id: id,
	      isEnabled: isEnabled
	    }
	  };
	};

	var move$1 = function move(id, client, viewport) {
	  var shouldAnimate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	  return {
	    type: 'MOVE',
	    payload: {
	      id: id,
	      client: client,
	      viewport: viewport,
	      shouldAnimate: shouldAnimate
	    }
	  };
	};

	var moveByWindowScroll = function moveByWindowScroll(id, viewport) {
	  return {
	    type: 'MOVE_BY_WINDOW_SCROLL',
	    payload: {
	      id: id,
	      viewport: viewport
	    }
	  };
	};

	var moveBackward = function moveBackward(id) {
	  return {
	    type: 'MOVE_BACKWARD',
	    payload: id
	  };
	};

	var moveForward = function moveForward(id) {
	  return {
	    type: 'MOVE_FORWARD',
	    payload: id
	  };
	};

	var crossAxisMoveForward = function crossAxisMoveForward(id) {
	  return {
	    type: 'CROSS_AXIS_MOVE_FORWARD',
	    payload: id
	  };
	};

	var crossAxisMoveBackward = function crossAxisMoveBackward(id) {
	  return {
	    type: 'CROSS_AXIS_MOVE_BACKWARD',
	    payload: id
	  };
	};

	var clean$2 = function clean() {
	  return {
	    type: 'CLEAN',
	    payload: null
	  };
	};

	var prepare = function prepare() {
	  return {
	    type: 'PREPARE',
	    payload: null
	  };
	};

	var animateDrop = function animateDrop(_ref2) {
	  var newHomeOffset = _ref2.newHomeOffset,
	      impact = _ref2.impact,
	      result = _ref2.result;
	  return {
	    type: 'DROP_ANIMATE',
	    payload: {
	      newHomeOffset: newHomeOffset,
	      impact: impact,
	      result: result
	    }
	  };
	};

	var completeDrop = function completeDrop(result) {
	  return {
	    type: 'DROP_COMPLETE',
	    payload: result
	  };
	};

	var drop = function drop() {
	  return function (dispatch, getState) {
	    var state = getState();

	    if (state.phase === 'PREPARING' || state.phase === 'COLLECTING_INITIAL_DIMENSIONS') {
	      dispatch(clean$2());
	      return;
	    }

	    if (state.phase !== 'DRAGGING') {
	      console.error('not able to drop in phase: \'' + state.phase + '\'');
	      dispatch(clean$2());
	      return;
	    }

	    if (!state.drag) {
	      console.error('not able to drop when there is invalid drag state', state);
	      dispatch(clean$2());
	      return;
	    }

	    var _state$drag = state.drag,
	        impact = _state$drag.impact,
	        initial = _state$drag.initial,
	        current = _state$drag.current;

	    var descriptor = initial.descriptor;
	    var draggable = state.dimension.draggable[initial.descriptor.id];
	    var home = state.dimension.droppable[draggable.descriptor.droppableId];
	    var destination = impact.destination ? state.dimension.droppable[impact.destination.droppableId] : null;

	    var source = {
	      droppableId: descriptor.droppableId,
	      index: descriptor.index
	    };

	    var result = {
	      draggableId: descriptor.id,
	      type: home.descriptor.type,
	      source: source,
	      destination: impact.destination,
	      reason: 'DROP'
	    };

	    var newBorderBoxCenter = getNewHomeClientBorderBoxCenter({
	      movement: impact.movement,
	      draggable: draggable,
	      draggables: state.dimension.draggable,
	      destination: destination
	    });

	    var clientOffset = subtract(newBorderBoxCenter, draggable.client.borderBox.center);
	    var scrollDiff = getScrollDiff({
	      initial: initial,
	      current: current,
	      droppable: destination || home
	    });
	    var newHomeOffset = add(clientOffset, scrollDiff);

	    var isAnimationRequired = !isEqual(current.client.offset, newHomeOffset);

	    if (!isAnimationRequired) {
	      dispatch(completeDrop(result));
	      return;
	    }

	    dispatch(animateDrop({
	      newHomeOffset: newHomeOffset,
	      impact: impact,
	      result: result
	    }));
	  };
	};

	var cancel = function cancel() {
	  return function (dispatch, getState) {
	    var state = getState();

	    if (state.phase !== 'DRAGGING') {
	      dispatch(clean$2());
	      return;
	    }

	    if (!state.drag) {
	      console.error('invalid drag state', state);
	      dispatch(clean$2());
	      return;
	    }

	    var _state$drag2 = state.drag,
	        initial = _state$drag2.initial,
	        current = _state$drag2.current;

	    var descriptor = initial.descriptor;
	    var home = state.dimension.droppable[descriptor.droppableId];

	    var source = {
	      index: descriptor.index,
	      droppableId: descriptor.droppableId
	    };

	    var result = {
	      draggableId: descriptor.id,
	      type: home.descriptor.type,
	      source: source,

	      destination: null,
	      reason: 'CANCEL'
	    };

	    var isAnimationRequired = !isEqual(current.client.offset, origin$6);

	    if (!isAnimationRequired) {
	      dispatch(completeDrop(result));
	      return;
	    }

	    var scrollDiff = getScrollDiff({ initial: initial, current: current, droppable: home });

	    dispatch(animateDrop({
	      newHomeOffset: scrollDiff,
	      impact: noImpact,
	      result: result
	    }));
	  };
	};

	var dropAnimationFinished = function dropAnimationFinished() {
	  return function (dispatch, getState) {
	    var state = getState();

	    if (state.phase !== 'DROP_ANIMATING') {
	      console.error('cannot end drop that is no longer animating', state);
	      dispatch(clean$2());
	      return;
	    }

	    if (!state.drop || !state.drop.pending) {
	      console.error('cannot end drop that has no pending state', state);
	      dispatch(clean$2());
	      return;
	    }

	    dispatch(completeDrop(state.drop.pending.result));
	  };
	};

	var lift = function lift(id, client, viewport, autoScrollMode) {
	  return function (dispatch, getState) {
	    var initial = getState();

	    if (initial.phase === 'DROP_ANIMATING') {
	      if (!initial.drop || !initial.drop.pending) {
	        console.error('cannot flush drop animation if there is no pending');
	        dispatch(clean$2());
	      } else {
	        dispatch(completeDrop(initial.drop.pending.result));
	      }
	    }

	    dispatch(prepare());

	    setTimeout(function () {
	      var state = getState();

	      if (state.phase !== 'PREPARING') {
	        return;
	      }

	      var scrollOptions = {
	        shouldPublishImmediately: autoScrollMode === 'JUMP'
	      };
	      var request = {
	        draggableId: id,
	        scrollOptions: scrollOptions
	      };
	      dispatch(requestDimensions(request));

	      setTimeout(function () {
	        var newState = getState();

	        if (newState.phase !== 'COLLECTING_INITIAL_DIMENSIONS') {
	          return;
	        }

	        dispatch(completeLift(id, client, viewport, autoScrollMode));
	        finish('LIFT');
	      });
	    });
	  };
	};

	var _DragDropContext$chil;

	var resetServerContext = function resetServerContext() {
	  resetStyleContext();
	};

	var DragDropContext = function (_React$Component) {
	  _inherits(DragDropContext, _React$Component);

	  function DragDropContext(props, context) {
	    _classCallCheck(this, DragDropContext);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

	    _this.canLift = function (id) {
	      return canStartDrag(_this.store.getState(), id);
	    };

	    _this.store = createStore$1();

	    _this.announcer = createAnnouncer();

	    _this.hookCaller = createHookCaller(_this.announcer.announce);

	    _this.styleMarshal = createStyleMarshal();

	    var callbacks = {
	      cancel: function cancel$$1() {
	        _this.store.dispatch(clean$2());
	      },
	      publishDraggable: function publishDraggable(dimension) {
	        _this.store.dispatch(publishDraggableDimension(dimension));
	      },
	      publishDroppable: function publishDroppable(dimension) {
	        _this.store.dispatch(publishDroppableDimension(dimension));
	      },
	      bulkPublish: function bulkPublish(droppables, draggables) {
	        _this.store.dispatch(bulkPublishDimensions(droppables, draggables));
	      },
	      updateDroppableScroll: function updateDroppableScroll(id, newScroll) {
	        _this.store.dispatch(updateDroppableDimensionScroll(id, newScroll));
	      },
	      updateDroppableIsEnabled: function updateDroppableIsEnabled(id, isEnabled) {
	        _this.store.dispatch(updateDroppableDimensionIsEnabled(id, isEnabled));
	      }
	    };
	    _this.dimensionMarshal = createDimensionMarshal(callbacks);
	    _this.autoScroller = createAutoScroller({
	      scrollWindow: scrollWindow,
	      scrollDroppable: _this.dimensionMarshal.scrollDroppable,
	      move: function move$$1(id, client, viewport, shouldAnimate) {
	        _this.store.dispatch(move$1(id, client, viewport, shouldAnimate));
	      }
	    });

	    var previous = _this.store.getState();

	    _this.unsubscribe = _this.store.subscribe(function () {
	      var current = _this.store.getState();
	      var previousInThisExecution = previous;
	      var isPhaseChanging = current.phase !== previous.phase;

	      previous = current;

	      if (isPhaseChanging) {
	        _this.styleMarshal.onPhaseChange(current);
	      }

	      var isDragEnding = previousInThisExecution.phase === 'DRAGGING' && current.phase !== 'DRAGGING';

	      if (isDragEnding) {
	        _this.dimensionMarshal.onPhaseChange(current);
	      }

	      var hooks = {
	        onDragStart: _this.props.onDragStart,
	        onDragEnd: _this.props.onDragEnd,
	        onDragUpdate: _this.props.onDragUpdate
	      };
	      _this.hookCaller.onStateChange(hooks, previousInThisExecution, current);

	      if (isPhaseChanging && !isDragEnding) {
	        _this.dimensionMarshal.onPhaseChange(current);
	      }

	      _this.autoScroller.onStateChange(previousInThisExecution, current);
	    });
	    return _this;
	  }

	  DragDropContext.prototype.getChildContext = function getChildContext() {
	    var _ref;

	    return _ref = {}, _ref[storeKey] = this.store, _ref[dimensionMarshalKey] = this.dimensionMarshal, _ref[styleContextKey] = this.styleMarshal.styleContext, _ref[canLiftContextKey] = this.canLift, _ref;
	  };

	  DragDropContext.prototype.componentDidMount = function componentDidMount() {
	    this.styleMarshal.mount();
	    this.announcer.mount();
	  };

	  DragDropContext.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.unsubscribe();
	    this.styleMarshal.unmount();
	    this.announcer.unmount();
	  };

	  DragDropContext.prototype.render = function render() {
	    return this.props.children;
	  };

	  return DragDropContext;
	}(React__default.Component);

	DragDropContext.childContextTypes = (_DragDropContext$chil = {}, _DragDropContext$chil[storeKey] = propTypes.shape({
	  dispatch: propTypes.func.isRequired,
	  subscribe: propTypes.func.isRequired,
	  getState: propTypes.func.isRequired
	}).isRequired, _DragDropContext$chil[dimensionMarshalKey] = propTypes.object.isRequired, _DragDropContext$chil[styleContextKey] = propTypes.string.isRequired, _DragDropContext$chil[canLiftContextKey] = propTypes.func.isRequired, _DragDropContext$chil);

	var subscriptionShape = propTypes.shape({
	  trySubscribe: propTypes.func.isRequired,
	  tryUnsubscribe: propTypes.func.isRequired,
	  notifyNestedSubs: propTypes.func.isRequired,
	  isSubscribed: propTypes.func.isRequired
	});

	var storeShape = propTypes.shape({
	  subscribe: propTypes.func.isRequired,
	  dispatch: propTypes.func.isRequired,
	  getState: propTypes.func.isRequired
	});

	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning$4(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

	function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  warning$4('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	function createProvider() {
	  var _Provider$childContex;

	  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
	  var subKey = arguments[1];

	  var subscriptionKey = subKey || storeKey + 'Subscription';

	  var Provider = function (_Component) {
	    _inherits$1(Provider, _Component);

	    Provider.prototype.getChildContext = function getChildContext() {
	      var _ref;

	      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
	    };

	    function Provider(props, context) {
	      _classCallCheck$1(this, Provider);

	      var _this = _possibleConstructorReturn$1(this, _Component.call(this, props, context));

	      _this[storeKey] = props.store;
	      return _this;
	    }

	    Provider.prototype.render = function render() {
	      return React.Children.only(this.props.children);
	    };

	    return Provider;
	  }(React.Component);

	  {
	    Provider.prototype.componentWillReceiveProps = function (nextProps) {
	      if (this[storeKey] !== nextProps.store) {
	        warnAboutReceivingStore();
	      }
	    };
	  }

	  Provider.propTypes = {
	    store: storeShape.isRequired,
	    children: propTypes.element.isRequired
	  };
	  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = storeShape.isRequired, _Provider$childContex[subscriptionKey] = subscriptionShape, _Provider$childContex);

	  return Provider;
	}

	createProvider();

	var hoistNonReactStatics = createCommonjsModule(function (module, exports) {
	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	(function (global, factory) {
	    module.exports = factory();
	}(commonjsGlobal, (function () {
	    
	    var REACT_STATICS = {
	        childContextTypes: true,
	        contextTypes: true,
	        defaultProps: true,
	        displayName: true,
	        getDefaultProps: true,
	        getDerivedStateFromProps: true,
	        mixins: true,
	        propTypes: true,
	        type: true
	    };
	    
	    var KNOWN_STATICS = {
	        name: true,
	        length: true,
	        prototype: true,
	        caller: true,
	        callee: true,
	        arguments: true,
	        arity: true
	    };
	    
	    var defineProperty = Object.defineProperty;
	    var getOwnPropertyNames = Object.getOwnPropertyNames;
	    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	    var getPrototypeOf = Object.getPrototypeOf;
	    var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
	    
	    return function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	        if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	            
	            if (objectPrototype) {
	                var inheritedComponent = getPrototypeOf(sourceComponent);
	                if (inheritedComponent && inheritedComponent !== objectPrototype) {
	                    hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	                }
	            }
	            
	            var keys = getOwnPropertyNames(sourceComponent);
	            
	            if (getOwnPropertySymbols) {
	                keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	            }
	            
	            for (var i = 0; i < keys.length; ++i) {
	                var key = keys[i];
	                if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
	                    var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
	                    try { // Avoid failures from read-only properties
	                        defineProperty(targetComponent, key, descriptor);
	                    } catch (e) {}
	                }
	            }
	            
	            return targetComponent;
	        }
	        
	        return targetComponent;
	    };
	})));
	});

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var NODE_ENV = "development";

	var invariant$3 = function(condition, format, a, b, c, d, e, f) {
	  if (NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	var invariant_1$1 = invariant$3;

	function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// encapsulates the subscription logic for connecting a component to the redux store, as
	// well as nesting subscriptions of descendant components, so that we can ensure the
	// ancestor components re-render before descendants

	var CLEARED = null;
	var nullListeners = {
	  notify: function notify() {}
	};

	function createListenerCollection() {
	  // the current/next pattern is copied from redux's createStore code.
	  // TODO: refactor+expose that code to be reusable here?
	  var current = [];
	  var next = [];

	  return {
	    clear: function clear() {
	      next = CLEARED;
	      current = CLEARED;
	    },
	    notify: function notify() {
	      var listeners = current = next;
	      for (var i = 0; i < listeners.length; i++) {
	        listeners[i]();
	      }
	    },
	    get: function get() {
	      return next;
	    },
	    subscribe: function subscribe(listener) {
	      var isSubscribed = true;
	      if (next === current) next = current.slice();
	      next.push(listener);

	      return function unsubscribe() {
	        if (!isSubscribed || current === CLEARED) return;
	        isSubscribed = false;

	        if (next === current) next = current.slice();
	        next.splice(next.indexOf(listener), 1);
	      };
	    }
	  };
	}

	var Subscription = function () {
	  function Subscription(store, parentSub, onStateChange) {
	    _classCallCheck$2(this, Subscription);

	    this.store = store;
	    this.parentSub = parentSub;
	    this.onStateChange = onStateChange;
	    this.unsubscribe = null;
	    this.listeners = nullListeners;
	  }

	  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
	    this.trySubscribe();
	    return this.listeners.subscribe(listener);
	  };

	  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
	    this.listeners.notify();
	  };

	  Subscription.prototype.isSubscribed = function isSubscribed() {
	    return Boolean(this.unsubscribe);
	  };

	  Subscription.prototype.trySubscribe = function trySubscribe() {
	    if (!this.unsubscribe) {
	      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

	      this.listeners = createListenerCollection();
	    }
	  };

	  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
	    if (this.unsubscribe) {
	      this.unsubscribe();
	      this.unsubscribe = null;
	      this.listeners.clear();
	      this.listeners = nullListeners;
	    }
	  };

	  return Subscription;
	}();

	var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var hotReloadingVersion = 0;
	var dummyState = {};
	function noop() {}
	function makeSelectorStateful(sourceSelector, store) {
	  // wrap the selector in an object that tracks its results between runs.
	  var selector = {
	    run: function runComponentSelector(props) {
	      try {
	        var nextProps = sourceSelector(store.getState(), props);
	        if (nextProps !== selector.props || selector.error) {
	          selector.shouldComponentUpdate = true;
	          selector.props = nextProps;
	          selector.error = null;
	        }
	      } catch (error) {
	        selector.shouldComponentUpdate = true;
	        selector.error = error;
	      }
	    }
	  };

	  return selector;
	}

	function connectAdvanced(
	/*
	  selectorFactory is a func that is responsible for returning the selector function used to
	  compute new props from state, props, and dispatch. For example:
	     export default connectAdvanced((dispatch, options) => (state, props) => ({
	      thing: state.things[props.thingId],
	      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
	    }))(YourComponent)
	   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
	  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
	  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
	   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
	  props. Do not use connectAdvanced directly without memoizing results between calls to your
	  selector, otherwise the Connect component will re-render on every state or props change.
	*/
	selectorFactory) {
	  var _contextTypes, _childContextTypes;

	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      _ref$getDisplayName = _ref.getDisplayName,
	      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
	    return 'ConnectAdvanced(' + name + ')';
	  } : _ref$getDisplayName,
	      _ref$methodName = _ref.methodName,
	      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
	      _ref$renderCountProp = _ref.renderCountProp,
	      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
	      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
	      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
	      _ref$storeKey = _ref.storeKey,
	      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
	      _ref$withRef = _ref.withRef,
	      withRef = _ref$withRef === undefined ? false : _ref$withRef,
	      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

	  var subscriptionKey = storeKey + 'Subscription';
	  var version = hotReloadingVersion++;

	  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = storeShape, _contextTypes[subscriptionKey] = subscriptionShape, _contextTypes);
	  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = subscriptionShape, _childContextTypes);

	  return function wrapWithConnect(WrappedComponent) {
	    invariant_1$1(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + (methodName + '. Instead received ' + JSON.stringify(WrappedComponent)));

	    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

	    var displayName = getDisplayName(wrappedComponentName);

	    var selectorFactoryOptions = _extends$3({}, connectOptions, {
	      getDisplayName: getDisplayName,
	      methodName: methodName,
	      renderCountProp: renderCountProp,
	      shouldHandleStateChanges: shouldHandleStateChanges,
	      storeKey: storeKey,
	      withRef: withRef,
	      displayName: displayName,
	      wrappedComponentName: wrappedComponentName,
	      WrappedComponent: WrappedComponent
	    });

	    var Connect = function (_Component) {
	      _inherits$2(Connect, _Component);

	      function Connect(props, context) {
	        _classCallCheck$3(this, Connect);

	        var _this = _possibleConstructorReturn$2(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.state = {};
	        _this.renderCount = 0;
	        _this.store = props[storeKey] || context[storeKey];
	        _this.propsMode = Boolean(props[storeKey]);
	        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

	        invariant_1$1(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

	        _this.initSelector();
	        _this.initSubscription();
	        return _this;
	      }

	      Connect.prototype.getChildContext = function getChildContext() {
	        var _ref2;

	        // If this component received store from props, its subscription should be transparent
	        // to any descendants receiving store+subscription from context; it passes along
	        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
	        // Connect to control ordering of notifications to flow top-down.
	        var subscription = this.propsMode ? null : this.subscription;
	        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        if (!shouldHandleStateChanges) return;

	        // componentWillMount fires during server side rendering, but componentDidMount and
	        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
	        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
	        // To handle the case where a child component may have triggered a state change by
	        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
	        // re-render.
	        this.subscription.trySubscribe();
	        this.selector.run(this.props);
	        if (this.selector.shouldComponentUpdate) this.forceUpdate();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        this.selector.run(nextProps);
	      };

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return this.selector.shouldComponentUpdate;
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        if (this.subscription) this.subscription.tryUnsubscribe();
	        this.subscription = null;
	        this.notifyNestedSubs = noop;
	        this.store = null;
	        this.selector.run = noop;
	        this.selector.shouldComponentUpdate = false;
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        invariant_1$1(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
	        return this.wrappedInstance;
	      };

	      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
	        this.wrappedInstance = ref;
	      };

	      Connect.prototype.initSelector = function initSelector() {
	        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
	        this.selector = makeSelectorStateful(sourceSelector, this.store);
	        this.selector.run(this.props);
	      };

	      Connect.prototype.initSubscription = function initSubscription() {
	        if (!shouldHandleStateChanges) return;

	        // parentSub's source should match where store came from: props vs. context. A component
	        // connected to the store via props shouldn't use subscription from context, or vice versa.
	        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
	        this.subscription = new Subscription(this.store, parentSub, this.onStateChange.bind(this));

	        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
	        // the middle of the notification loop, where `this.subscription` will then be null. An
	        // extra null check every change can be avoided by copying the method onto `this` and then
	        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
	        // listeners logic is changed to not call listeners that have been unsubscribed in the
	        // middle of the notification loop.
	        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
	      };

	      Connect.prototype.onStateChange = function onStateChange() {
	        this.selector.run(this.props);

	        if (!this.selector.shouldComponentUpdate) {
	          this.notifyNestedSubs();
	        } else {
	          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
	          this.setState(dummyState);
	        }
	      };

	      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
	        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
	        // needs to notify nested subs. Once called, it unimplements itself until further state
	        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
	        // a boolean check every time avoids an extra method call most of the time, resulting
	        // in some perf boost.
	        this.componentDidUpdate = undefined;
	        this.notifyNestedSubs();
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return Boolean(this.subscription) && this.subscription.isSubscribed();
	      };

	      Connect.prototype.addExtraProps = function addExtraProps(props) {
	        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
	        // make a shallow copy so that fields added don't leak to the original selector.
	        // this is especially important for 'ref' since that's a reference back to the component
	        // instance. a singleton memoized selector would then be holding a reference to the
	        // instance, preventing the instance from being garbage collected, and that would be bad
	        var withExtras = _extends$3({}, props);
	        if (withRef) withExtras.ref = this.setWrappedInstance;
	        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
	        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
	        return withExtras;
	      };

	      Connect.prototype.render = function render() {
	        var selector = this.selector;
	        selector.shouldComponentUpdate = false;

	        if (selector.error) {
	          throw selector.error;
	        } else {
	          return React.createElement(WrappedComponent, this.addExtraProps(selector.props));
	        }
	      };

	      return Connect;
	    }(React.Component);

	    Connect.WrappedComponent = WrappedComponent;
	    Connect.displayName = displayName;
	    Connect.childContextTypes = childContextTypes;
	    Connect.contextTypes = contextTypes;
	    Connect.propTypes = contextTypes;

	    {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        var _this2 = this;

	        // We are hot reloading!
	        if (this.version !== version) {
	          this.version = version;
	          this.initSelector();

	          // If any connected descendants don't hot reload (and resubscribe in the process), their
	          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
	          // listeners, this does mean that the old versions of connected descendants will still be
	          // notified of state changes; however, their onStateChange function is a no-op so this
	          // isn't a huge deal.
	          var oldListeners = [];

	          if (this.subscription) {
	            oldListeners = this.subscription.listeners.get();
	            this.subscription.tryUnsubscribe();
	          }
	          this.initSubscription();
	          if (shouldHandleStateChanges) {
	            this.subscription.trySubscribe();
	            oldListeners.forEach(function (listener) {
	              return _this2.subscription.listeners.subscribe(listener);
	            });
	          }
	        }
	      };
	    }

	    return hoistNonReactStatics(Connect, WrappedComponent);
	  };
	}

	var hasOwn = Object.prototype.hasOwnProperty;

	function is$1(x, y) {
	  if (x === y) {
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    return x !== x && y !== y;
	  }
	}

	function shallowEqual(objA, objB) {
	  if (is$1(objA, objB)) return true;

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) return false;

	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || !is$1(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root$1 = freeGlobal || freeSelf || Function('return this')();

	/** Built-in value references. */
	var Symbol$1 = root$1.Symbol;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$2 = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty$2.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$1.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString$1.call(value);
	}

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag$1 && symToStringTag$1 in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto$2 = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$3 = objectProto$2.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject$1(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty$3.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	function verifyPlainObject(value, displayName, methodName) {
	  if (!isPlainObject$1(value)) {
	    warning$4(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
	  }
	}

	function wrapMapToPropsConstant(getConstant) {
	  return function initConstantSelector(dispatch, options) {
	    var constant = getConstant(dispatch, options);

	    function constantSelector() {
	      return constant;
	    }
	    constantSelector.dependsOnOwnProps = false;
	    return constantSelector;
	  };
	}

	// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
	// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
	// whether mapToProps needs to be invoked when props have changed.
	// 
	// A length of one signals that mapToProps does not depend on props from the parent component.
	// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
	// therefore not reporting its length accurately..
	function getDependsOnOwnProps(mapToProps) {
	  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
	}

	// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
	// this function wraps mapToProps in a proxy function which does several things:
	// 
	//  * Detects whether the mapToProps function being called depends on props, which
	//    is used by selectorFactory to decide if it should reinvoke on props changes.
	//    
	//  * On first call, handles mapToProps if returns another function, and treats that
	//    new function as the true mapToProps for subsequent calls.
	//    
	//  * On first call, verifies the first result is a plain object, in order to warn
	//    the developer that their mapToProps function is not returning a valid result.
	//    
	function wrapMapToPropsFunc(mapToProps, methodName) {
	  return function initProxySelector(dispatch, _ref) {
	    var displayName = _ref.displayName;

	    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
	      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
	    };

	    // allow detectFactoryAndVerify to get ownProps
	    proxy.dependsOnOwnProps = true;

	    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
	      proxy.mapToProps = mapToProps;
	      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
	      var props = proxy(stateOrDispatch, ownProps);

	      if (typeof props === 'function') {
	        proxy.mapToProps = props;
	        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
	        props = proxy(stateOrDispatch, ownProps);
	      }

	      verifyPlainObject(props, displayName, methodName);

	      return props;
	    };

	    return proxy;
	  };
	}

	function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
	  return typeof mapDispatchToProps === 'function' ? wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : undefined;
	}

	function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
	  return !mapDispatchToProps ? wrapMapToPropsConstant(function (dispatch) {
	    return { dispatch: dispatch };
	  }) : undefined;
	}

	function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
	  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? wrapMapToPropsConstant(function (dispatch) {
	    return bindActionCreators(mapDispatchToProps, dispatch);
	  }) : undefined;
	}

	var defaultMapDispatchToPropsFactories = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

	function whenMapStateToPropsIsFunction(mapStateToProps) {
	  return typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : undefined;
	}

	function whenMapStateToPropsIsMissing(mapStateToProps) {
	  return !mapStateToProps ? wrapMapToPropsConstant(function () {
	    return {};
	  }) : undefined;
	}

	var defaultMapStateToPropsFactories = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

	var _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function defaultMergeProps(stateProps, dispatchProps, ownProps) {
	  return _extends$4({}, ownProps, stateProps, dispatchProps);
	}

	function wrapMergePropsFunc(mergeProps) {
	  return function initMergePropsProxy(dispatch, _ref) {
	    var displayName = _ref.displayName,
	        pure = _ref.pure,
	        areMergedPropsEqual = _ref.areMergedPropsEqual;

	    var hasRunOnce = false;
	    var mergedProps = void 0;

	    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
	      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

	      if (hasRunOnce) {
	        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
	      } else {
	        hasRunOnce = true;
	        mergedProps = nextMergedProps;

	        verifyPlainObject(mergedProps, displayName, 'mergeProps');
	      }

	      return mergedProps;
	    };
	  };
	}

	function whenMergePropsIsFunction(mergeProps) {
	  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
	}

	function whenMergePropsIsOmitted(mergeProps) {
	  return !mergeProps ? function () {
	    return defaultMergeProps;
	  } : undefined;
	}

	var defaultMergePropsFactories = [whenMergePropsIsFunction, whenMergePropsIsOmitted];

	function verify(selector, methodName, displayName) {
	  if (!selector) {
	    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
	  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
	    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
	      warning$4('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
	    }
	  }
	}

	function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
	  verify(mapStateToProps, 'mapStateToProps', displayName);
	  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
	  verify(mergeProps, 'mergeProps', displayName);
	}

	function _objectWithoutProperties$1(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
	  return function impureFinalPropsSelector(state, ownProps) {
	    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
	  };
	}

	function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
	  var areStatesEqual = _ref.areStatesEqual,
	      areOwnPropsEqual = _ref.areOwnPropsEqual,
	      areStatePropsEqual = _ref.areStatePropsEqual;

	  var hasRunAtLeastOnce = false;
	  var state = void 0;
	  var ownProps = void 0;
	  var stateProps = void 0;
	  var dispatchProps = void 0;
	  var mergedProps = void 0;

	  function handleFirstCall(firstState, firstOwnProps) {
	    state = firstState;
	    ownProps = firstOwnProps;
	    stateProps = mapStateToProps(state, ownProps);
	    dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    hasRunAtLeastOnce = true;
	    return mergedProps;
	  }

	  function handleNewPropsAndNewState() {
	    stateProps = mapStateToProps(state, ownProps);

	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }

	  function handleNewProps() {
	    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }

	  function handleNewState() {
	    var nextStateProps = mapStateToProps(state, ownProps);
	    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
	    stateProps = nextStateProps;

	    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

	    return mergedProps;
	  }

	  function handleSubsequentCalls(nextState, nextOwnProps) {
	    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
	    var stateChanged = !areStatesEqual(nextState, state);
	    state = nextState;
	    ownProps = nextOwnProps;

	    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
	    if (propsChanged) return handleNewProps();
	    if (stateChanged) return handleNewState();
	    return mergedProps;
	  }

	  return function pureFinalPropsSelector(nextState, nextOwnProps) {
	    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
	  };
	}

	// TODO: Add more comments

	// If pure is true, the selector returned by selectorFactory will memoize its results,
	// allowing connectAdvanced's shouldComponentUpdate to return false if final
	// props have not changed. If false, the selector will always return a new
	// object and shouldComponentUpdate will always return true.

	function finalPropsSelectorFactory(dispatch, _ref2) {
	  var initMapStateToProps = _ref2.initMapStateToProps,
	      initMapDispatchToProps = _ref2.initMapDispatchToProps,
	      initMergeProps = _ref2.initMergeProps,
	      options = _objectWithoutProperties$1(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

	  var mapStateToProps = initMapStateToProps(dispatch, options);
	  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
	  var mergeProps = initMergeProps(dispatch, options);

	  {
	    verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
	  }

	  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

	  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
	}

	var _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties$2(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/*
	  connect is a facade over connectAdvanced. It turns its args into a compatible
	  selectorFactory, which has the signature:

	    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
	  
	  connect passes its args to connectAdvanced as options, which will in turn pass them to
	  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

	  selectorFactory returns a final props selector from its mapStateToProps,
	  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
	  mergePropsFactories, and pure args.

	  The resulting final props selector is called by the Connect component instance whenever
	  it receives new props or store state.
	 */

	function match(arg, factories, name) {
	  for (var i = factories.length - 1; i >= 0; i--) {
	    var result = factories[i](arg);
	    if (result) return result;
	  }

	  return function (dispatch, options) {
	    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
	  };
	}

	function strictEqual(a, b) {
	  return a === b;
	}

	// createConnect with default args builds the 'official' connect behavior. Calling it with
	// different options opens up some testing and extensibility scenarios
	function createConnect() {
	  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      _ref$connectHOC = _ref.connectHOC,
	      connectHOC = _ref$connectHOC === undefined ? connectAdvanced : _ref$connectHOC,
	      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
	      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? defaultMapStateToPropsFactories : _ref$mapStateToPropsF,
	      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
	      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? defaultMapDispatchToPropsFactories : _ref$mapDispatchToPro,
	      _ref$mergePropsFactor = _ref.mergePropsFactories,
	      mergePropsFactories = _ref$mergePropsFactor === undefined ? defaultMergePropsFactories : _ref$mergePropsFactor,
	      _ref$selectorFactory = _ref.selectorFactory,
	      selectorFactory = _ref$selectorFactory === undefined ? finalPropsSelectorFactory : _ref$selectorFactory;

	  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
	        _ref2$pure = _ref2.pure,
	        pure = _ref2$pure === undefined ? true : _ref2$pure,
	        _ref2$areStatesEqual = _ref2.areStatesEqual,
	        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
	        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
	        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? shallowEqual : _ref2$areOwnPropsEqua,
	        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
	        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? shallowEqual : _ref2$areStatePropsEq,
	        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
	        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? shallowEqual : _ref2$areMergedPropsE,
	        extraOptions = _objectWithoutProperties$2(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

	    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
	    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
	    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

	    return connectHOC(selectorFactory, _extends$5({
	      // used in error messages
	      methodName: 'connect',

	      // used to compute Connect's displayName from the wrapped component's displayName.
	      getDisplayName: function getDisplayName(name) {
	        return 'Connect(' + name + ')';
	      },

	      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
	      shouldHandleStateChanges: Boolean(mapStateToProps),

	      // passed through to selectorFactory
	      initMapStateToProps: initMapStateToProps,
	      initMapDispatchToProps: initMapDispatchToProps,
	      initMergeProps: initMergeProps,
	      pure: pure,
	      areStatesEqual: areStatesEqual,
	      areOwnPropsEqual: areOwnPropsEqual,
	      areStatePropsEqual: areStatePropsEqual,
	      areMergedPropsEqual: areMergedPropsEqual

	    }, extraOptions));
	  };
	}

	var connect = createConnect();

	var lib$1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.defaultMemoize = defaultMemoize;
	exports.createSelectorCreator = createSelectorCreator;
	exports.createStructuredSelector = createStructuredSelector;
	function defaultEqualityCheck(a, b) {
	  return a === b;
	}

	function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
	  if (prev === null || next === null || prev.length !== next.length) {
	    return false;
	  }

	  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
	  var length = prev.length;
	  for (var i = 0; i < length; i++) {
	    if (!equalityCheck(prev[i], next[i])) {
	      return false;
	    }
	  }

	  return true;
	}

	function defaultMemoize(func) {
	  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

	  var lastArgs = null;
	  var lastResult = null;
	  // we reference arguments instead of spreading them for performance reasons
	  return function () {
	    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
	      // apply arguments instead of spreading for performance.
	      lastResult = func.apply(null, arguments);
	    }

	    lastArgs = arguments;
	    return lastResult;
	  };
	}

	function getDependencies(funcs) {
	  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

	  if (!dependencies.every(function (dep) {
	    return typeof dep === 'function';
	  })) {
	    var dependencyTypes = dependencies.map(function (dep) {
	      return typeof dep;
	    }).join(', ');
	    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
	  }

	  return dependencies;
	}

	function createSelectorCreator(memoize) {
	  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    memoizeOptions[_key - 1] = arguments[_key];
	  }

	  return function () {
	    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      funcs[_key2] = arguments[_key2];
	    }

	    var recomputations = 0;
	    var resultFunc = funcs.pop();
	    var dependencies = getDependencies(funcs);

	    var memoizedResultFunc = memoize.apply(undefined, [function () {
	      recomputations++;
	      // apply arguments instead of spreading for performance.
	      return resultFunc.apply(null, arguments);
	    }].concat(memoizeOptions));

	    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
	    var selector = defaultMemoize(function () {
	      var params = [];
	      var length = dependencies.length;

	      for (var i = 0; i < length; i++) {
	        // apply arguments instead of spreading and mutate a local list of params for performance.
	        params.push(dependencies[i].apply(null, arguments));
	      }

	      // apply arguments instead of spreading for performance.
	      return memoizedResultFunc.apply(null, params);
	    });

	    selector.resultFunc = resultFunc;
	    selector.recomputations = function () {
	      return recomputations;
	    };
	    selector.resetRecomputations = function () {
	      return recomputations = 0;
	    };
	    return selector;
	  };
	}

	var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

	function createStructuredSelector(selectors) {
	  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

	  if (typeof selectors !== 'object') {
	    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
	  }
	  var objectKeys = Object.keys(selectors);
	  return selectorCreator(objectKeys.map(function (key) {
	    return selectors[key];
	  }), function () {
	    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	      values[_key3] = arguments[_key3];
	    }

	    return values.reduce(function (composition, value, index) {
	      composition[objectKeys[index]] = value;
	      return composition;
	    }, {});
	  });
	}
	});

	unwrapExports(lib$1);
	var lib_1 = lib$1.defaultMemoize;
	var lib_2 = lib$1.createSelectorCreator;
	var lib_3 = lib$1.createStructuredSelector;
	var lib_4 = lib$1.createSelector;

	var phaseSelector = function phaseSelector(state) {
	  return state.phase;
	};

	var pendingDropSelector = function pendingDropSelector(state) {
	  if (!state.drop || !state.drop.pending) {
	    return null;
	  }
	  return state.drop.pending;
	};

	var dragSelector = function dragSelector(state) {
	  return state.drag;
	};

	var draggableMapSelector = function draggableMapSelector(state) {
	  return state.dimension.draggable;
	};

	var draggingDraggableSelector = lib_4([phaseSelector, dragSelector, pendingDropSelector, draggableMapSelector], function (phase, drag, pending, draggables) {
	  if (phase === 'DRAGGING') {
	    if (!drag) {
	      console.error('cannot get placeholder dimensions as there is an invalid drag state');
	      return null;
	    }

	    var draggable = draggables[drag.initial.descriptor.id];
	    return draggable;
	  }

	  if (phase === 'DROP_ANIMATING') {
	    if (!pending) {
	      console.error('cannot get placeholder dimensions as there is an invalid drag state');
	      return null;
	    }

	    if (!pending.result.destination) {
	      return null;
	    }

	    var _draggable = draggables[pending.result.draggableId];
	    return _draggable;
	  }

	  return null;
	});

	var isScrollable = function isScrollable() {
	  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
	    values[_key] = arguments[_key];
	  }

	  return values.some(function (value) {
	    return value === 'auto' || value === 'scroll';
	  });
	};

	var isElementScrollable = function isElementScrollable(el) {
	  var style = window.getComputedStyle(el);
	  return isScrollable(style.overflow, style.overflowY, style.overflowX);
	};

	var getClosestScrollable = function getClosestScrollable(el) {
	  if (el == null) {
	    return null;
	  }

	  if (!isElementScrollable(el)) {
	    return getClosestScrollable(el.parentElement);
	  }

	  return el;
	};

	var _DroppableDimensionPu;


	var origin$7 = { x: 0, y: 0 };

	var getScroll = function getScroll(el) {
	  return {
	    x: el.scrollLeft,
	    y: el.scrollTop
	  };
	};

	var DroppableDimensionPublisher = function (_Component) {
	  _inherits(DroppableDimensionPublisher, _Component);

	  function DroppableDimensionPublisher(props, context) {
	    _classCallCheck(this, DroppableDimensionPublisher);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.closestScrollable = null;
	    _this.isWatchingScroll = false;
	    _this.scrollOptions = null;
	    _this.publishedDescriptor = null;

	    _this.getClosestScroll = function () {
	      if (!_this.closestScrollable) {
	        return origin$7;
	      }

	      return getScroll(_this.closestScrollable);
	    };

	    _this.memoizedUpdateScroll = memoizeOne(function (x, y) {
	      if (!_this.publishedDescriptor) {
	        console.error('Cannot update scroll on unpublished droppable');
	        return;
	      }

	      var newScroll = { x: x, y: y };
	      var marshal = _this.context[dimensionMarshalKey];
	      marshal.updateDroppableScroll(_this.publishedDescriptor.id, newScroll);
	    });

	    _this.updateScroll = function () {
	      var offset$$1 = _this.getClosestScroll();
	      _this.memoizedUpdateScroll(offset$$1.x, offset$$1.y);
	    };

	    _this.scheduleScrollUpdate = rafSchd(_this.updateScroll);

	    _this.onClosestScroll = function () {
	      if (!_this.scrollOptions) {
	        console.error('Cannot find scroll options while scrolling');
	        return;
	      }
	      if (_this.scrollOptions.shouldPublishImmediately) {
	        _this.updateScroll();
	        return;
	      }
	      _this.scheduleScrollUpdate();
	    };

	    _this.scroll = function (change) {
	      if (_this.closestScrollable == null) {
	        console.error('Cannot scroll a droppable with no closest scrollable');
	        return;
	      }

	      if (!_this.isWatchingScroll) {
	        console.error('Updating Droppable scroll while not watching for updates');
	        return;
	      }

	      _this.closestScrollable.scrollTop += change.y;
	      _this.closestScrollable.scrollLeft += change.x;
	    };

	    _this.watchScroll = function (options) {
	      if (!_this.props.getDroppableRef()) {
	        console.error('cannot watch droppable scroll if not in the dom');
	        return;
	      }

	      if (_this.closestScrollable == null) {
	        return;
	      }

	      if (_this.isWatchingScroll) {
	        return;
	      }

	      _this.isWatchingScroll = true;
	      _this.scrollOptions = options;
	      _this.closestScrollable.addEventListener('scroll', _this.onClosestScroll, { passive: true });
	    };

	    _this.unwatchScroll = function () {
	      if (!_this.isWatchingScroll) {
	        return;
	      }

	      _this.isWatchingScroll = false;
	      _this.scrollOptions = null;
	      _this.scheduleScrollUpdate.cancel();

	      if (!_this.closestScrollable) {
	        console.error('cannot unbind event listener if element is null');
	        return;
	      }

	      _this.closestScrollable.removeEventListener('scroll', _this.onClosestScroll);
	    };

	    _this.getMemoizedDescriptor = memoizeOne(function (id, type) {
	      return {
	        id: id,
	        type: type
	      };
	    });

	    _this.publish = function () {
	      var descriptor = _this.getMemoizedDescriptor(_this.props.droppableId, _this.props.type);

	      if (descriptor === _this.publishedDescriptor) {
	        return;
	      }

	      if (_this.publishedDescriptor) {
	        _this.unpublish();
	      }

	      var marshal = _this.context[dimensionMarshalKey];
	      marshal.registerDroppable(descriptor, _this.callbacks);
	      _this.publishedDescriptor = descriptor;
	    };

	    _this.unpublish = function () {
	      if (!_this.publishedDescriptor) {
	        console.error('Cannot unpublish descriptor when none is published');
	        return;
	      }

	      var marshal = _this.context[dimensionMarshalKey];
	      marshal.unregisterDroppable(_this.publishedDescriptor);
	      _this.publishedDescriptor = null;
	    };

	    _this.getDimension = function () {
	      var _this$props = _this.props,
	          direction = _this$props.direction,
	          ignoreContainerClipping = _this$props.ignoreContainerClipping,
	          isDropDisabled = _this$props.isDropDisabled,
	          getDroppableRef = _this$props.getDroppableRef;


	      var targetRef = getDroppableRef();
	      var descriptor = _this.publishedDescriptor;

	      index(targetRef, 'DimensionPublisher cannot calculate a dimension when not attached to the DOM');
	      index(!_this.isWatchingScroll, 'Attempting to recapture Droppable dimension while already watching scroll on previous capture');
	      index(descriptor, 'Cannot get dimension for unpublished droppable');

	      var scrollableRef = getClosestScrollable(targetRef);

	      _this.closestScrollable = scrollableRef;

	      var client = function () {
	        var base = getBox(targetRef);

	        if (!scrollableRef) {
	          return base;
	        }

	        if (targetRef !== scrollableRef) {
	          return base;
	        }

	        var top = base.paddingBox.top - scrollableRef.scrollTop;
	        var left = base.paddingBox.left - scrollableRef.scrollLeft;
	        var bottom = top + scrollableRef.scrollHeight;
	        var right = left + scrollableRef.scrollWidth;

	        var paddingBox = {
	          top: top, right: right, bottom: bottom, left: left
	        };

	        var borderBox = {
	          top: paddingBox.top - base.border.top,
	          right: paddingBox.right + base.border.right,
	          bottom: paddingBox.bottom + base.border.bottom,
	          left: paddingBox.left - base.border.left
	        };

	        return createBox({
	          borderBox: borderBox,
	          margin: base.margin,
	          border: base.border,
	          padding: base.padding
	        });
	      }();

	      var page = withScroll(client);

	      var closest = function () {
	        if (!scrollableRef) {
	          return null;
	        }

	        var frameClient = getBox(scrollableRef);

	        return {
	          client: frameClient,
	          page: withScroll(frameClient),
	          scrollHeight: scrollableRef.scrollHeight,
	          scrollWidth: scrollableRef.scrollWidth,
	          scroll: getScroll(scrollableRef),
	          shouldClipSubject: !ignoreContainerClipping
	        };
	      }();

	      return getDroppableDimension({
	        descriptor: descriptor,
	        isEnabled: !isDropDisabled,
	        direction: direction,
	        client: client,
	        page: page,
	        closest: closest
	      });
	    };

	    var callbacks = {
	      getDimension: _this.getDimension,
	      watchScroll: _this.watchScroll,
	      unwatchScroll: _this.unwatchScroll,
	      scroll: _this.scroll
	    };
	    _this.callbacks = callbacks;
	    return _this;
	  }

	  DroppableDimensionPublisher.prototype.componentDidMount = function componentDidMount() {
	    this.publish();
	  };

	  DroppableDimensionPublisher.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    this.publish();

	    if (this.props.isDropDisabled === prevProps.isDropDisabled) {
	      return;
	    }

	    var marshal = this.context[dimensionMarshalKey];
	    marshal.updateDroppableIsEnabled(this.props.droppableId, !this.props.isDropDisabled);
	  };

	  DroppableDimensionPublisher.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.isWatchingScroll) {
	      console.warn('unmounting droppable while it was watching scroll');
	      this.unwatchScroll();
	    }

	    this.unpublish();
	  };

	  DroppableDimensionPublisher.prototype.render = function render() {
	    return this.props.children;
	  };

	  return DroppableDimensionPublisher;
	}(React.Component);

	DroppableDimensionPublisher.contextTypes = (_DroppableDimensionPu = {}, _DroppableDimensionPu[dimensionMarshalKey] = propTypes.object.isRequired, _DroppableDimensionPu);

	var Placeholder = function (_PureComponent) {
	  _inherits(Placeholder, _PureComponent);

	  function Placeholder() {
	    _classCallCheck(this, Placeholder);

	    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
	  }

	  Placeholder.prototype.render = function render() {
	    var placeholder = this.props.placeholder;
	    var client = placeholder.client;
	    var display = placeholder.display;
	    var tagName = placeholder.tagName;

	    var style = {
	      display: display,

	      width: client.borderBox.width,
	      height: client.borderBox.height,

	      boxSizing: 'border-box',

	      marginTop: client.margin.top,
	      marginLeft: client.margin.left,
	      marginBottom: client.margin.bottom,
	      marginRight: client.margin.right,

	      flexShrink: '0',
	      flexGrow: '0',

	      pointerEvents: 'none'
	    };

	    return React__default.createElement(tagName, { style: style });
	  };

	  return Placeholder;
	}(React.PureComponent);

	var _Droppable$contextTyp, _Droppable$childConte;

	var Droppable = function (_Component) {
	  _inherits(Droppable, _Component);

	  function Droppable(props, context) {
	    _classCallCheck(this, Droppable);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.ref = null;

	    _this.setRef = function (ref) {
	      if (ref === null) {
	        return;
	      }

	      if (ref === _this.ref) {
	        return;
	      }

	      _this.ref = ref;
	    };

	    _this.getDroppableRef = function () {
	      return _this.ref;
	    };

	    _this.styleContext = context[styleContextKey];
	    return _this;
	  }

	  Droppable.prototype.getChildContext = function getChildContext() {
	    var _value;

	    var value = (_value = {}, _value[droppableIdKey] = this.props.droppableId, _value);
	    return value;
	  };

	  Droppable.prototype.componentDidMount = function componentDidMount() {
	    if (!this.ref) {
	      console.error('\n        Droppable has not been provided with a ref.\n        Please use the DroppableProvided > innerRef function\n      ');
	    }
	  };

	  Droppable.prototype.getPlaceholder = function getPlaceholder() {
	    if (!this.props.placeholder) {
	      return null;
	    }

	    return React__default.createElement(Placeholder, { placeholder: this.props.placeholder });
	  };

	  Droppable.prototype.render = function render() {
	    var _props = this.props,
	        children = _props.children,
	        direction = _props.direction,
	        droppableId = _props.droppableId,
	        ignoreContainerClipping = _props.ignoreContainerClipping,
	        isDraggingOver = _props.isDraggingOver,
	        isDropDisabled = _props.isDropDisabled,
	        draggingOverWith = _props.draggingOverWith,
	        type = _props.type;

	    var provided = {
	      innerRef: this.setRef,
	      placeholder: this.getPlaceholder(),
	      droppableProps: {
	        'data-react-beautiful-dnd-droppable': this.styleContext
	      }
	    };
	    var snapshot = {
	      isDraggingOver: isDraggingOver,
	      draggingOverWith: draggingOverWith
	    };

	    return React__default.createElement(
	      DroppableDimensionPublisher,
	      {
	        droppableId: droppableId,
	        type: type,
	        direction: direction,
	        ignoreContainerClipping: ignoreContainerClipping,
	        isDropDisabled: isDropDisabled,
	        getDroppableRef: this.getDroppableRef
	      },
	      children(provided, snapshot)
	    );
	  };

	  return Droppable;
	}(React.Component);

	Droppable.contextTypes = (_Droppable$contextTyp = {}, _Droppable$contextTyp[styleContextKey] = propTypes.string.isRequired, _Droppable$contextTyp);
	Droppable.childContextTypes = (_Droppable$childConte = {}, _Droppable$childConte[droppableIdKey] = propTypes.string.isRequired, _Droppable$childConte);

	var makeSelector = function makeSelector() {
	  var idSelector = function idSelector(state, ownProps) {
	    return ownProps.droppableId;
	  };
	  var isDropDisabledSelector = function isDropDisabledSelector(state, ownProps) {
	    return ownProps.isDropDisabled || false;
	  };

	  var getIsDraggingOver = memoizeOne(function (id, destination) {
	    if (!destination) {
	      return false;
	    }
	    return destination.droppableId === id;
	  });

	  var getPlaceholder = memoizeOne(function (id, destination, draggable) {
	    if (!draggable) {
	      return null;
	    }

	    if (!destination) {
	      return null;
	    }

	    if (id === draggable.descriptor.droppableId) {
	      return null;
	    }

	    if (id !== destination.droppableId) {
	      return null;
	    }

	    return draggable.placeholder;
	  });

	  var getMapProps = memoizeOne(function (isDraggingOver, draggingOverWith, placeholder) {
	    return {
	      isDraggingOver: isDraggingOver,
	      draggingOverWith: draggingOverWith,
	      placeholder: placeholder
	    };
	  });

	  return lib_4([phaseSelector, dragSelector, draggingDraggableSelector, pendingDropSelector, idSelector, isDropDisabledSelector], function (phase, drag, draggable, pending, id, isDropDisabled) {
	    if (isDropDisabled) {
	      return getMapProps(false, null, null);
	    }

	    if (phase === 'DRAGGING') {
	      if (!drag) {
	        console.error('cannot determine dragging over as there is not drag');
	        return getMapProps(false, null, null);
	      }

	      var isDraggingOver = getIsDraggingOver(id, drag.impact.destination);
	      var draggingOverWith = isDraggingOver ? drag.initial.descriptor.id : null;

	      var placeholder = getPlaceholder(id, drag.impact.destination, draggable);

	      return getMapProps(isDraggingOver, draggingOverWith, placeholder);
	    }

	    if (phase === 'DROP_ANIMATING') {
	      if (!pending) {
	        console.error('cannot determine dragging over as there is no pending result');
	        return getMapProps(false, null, null);
	      }

	      var _isDraggingOver = getIsDraggingOver(id, pending.impact.destination);
	      var _draggingOverWith = _isDraggingOver ? pending.result.draggableId : null;

	      var _placeholder = getPlaceholder(id, pending.result.destination, draggable);
	      return getMapProps(_isDraggingOver, _draggingOverWith, _placeholder);
	    }

	    return getMapProps(false, null, null);
	  });
	};

	var makeMapStateToProps = function makeMapStateToProps() {
	  var selector = makeSelector();
	  return function (state, props) {
	    return selector(state, props);
	  };
	};

	var connectedDroppable = connect(makeMapStateToProps, null, null, { storeKey: storeKey })(Droppable);

	connectedDroppable.defaultProps = {
	  type: 'DEFAULT',
	  isDropDisabled: false,
	  direction: 'vertical',
	  ignoreContainerClipping: false
	};

	var getWindowScroll$1 = (function () {
	  return {
	    x: window.pageXOffset,
	    y: window.pageYOffset
	  };
	});

	var _DraggableDimensionPu;

	var DraggableDimensionPublisher = function (_Component) {
	  _inherits(DraggableDimensionPublisher, _Component);

	  function DraggableDimensionPublisher() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, DraggableDimensionPublisher);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.publishedDescriptor = null, _this.getMemoizedDescriptor = memoizeOne(function (id, droppableId, index$$1) {
	      return {
	        id: id,
	        droppableId: droppableId,
	        index: index$$1
	      };
	    }), _this.publish = function () {
	      var descriptor = _this.getMemoizedDescriptor(_this.props.draggableId, _this.props.droppableId, _this.props.index);

	      if (descriptor === _this.publishedDescriptor) {
	        return;
	      }

	      if (_this.publishedDescriptor) {
	        _this.unpublish();
	      }

	      var marshal = _this.context[dimensionMarshalKey];
	      marshal.registerDraggable(descriptor, _this.getDimension);
	      _this.publishedDescriptor = descriptor;
	    }, _this.unpublish = function () {
	      if (!_this.publishedDescriptor) {
	        console.error('cannot unpublish descriptor when none is published');
	        return;
	      }

	      var marshal = _this.context[dimensionMarshalKey];
	      marshal.unregisterDraggable(_this.publishedDescriptor);
	      _this.publishedDescriptor = null;
	    }, _this.getDimension = function () {
	      var targetRef = _this.props.getDraggableRef();
	      var descriptor = _this.publishedDescriptor;

	      index(targetRef, 'DraggableDimensionPublisher cannot calculate a dimension when not attached to the DOM');
	      index(descriptor, 'Cannot get dimension for unpublished draggable');

	      var style = window.getComputedStyle(targetRef);

	      var client = calculateBox(targetRef.getBoundingClientRect(), style);
	      var page = withScroll(client, getWindowScroll$1());

	      var placeholder = {
	        client: client,
	        tagName: targetRef.tagName.toLowerCase(),
	        display: style.display
	      };

	      var dimension = {
	        descriptor: descriptor,
	        placeholder: placeholder,
	        client: client,
	        page: page
	      };

	      return dimension;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  DraggableDimensionPublisher.prototype.componentDidMount = function componentDidMount() {
	    this.publish();
	  };

	  DraggableDimensionPublisher.prototype.componentDidUpdate = function componentDidUpdate() {
	    this.publish();
	  };

	  DraggableDimensionPublisher.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.unpublish();
	  };

	  DraggableDimensionPublisher.prototype.render = function render() {
	    return this.props.children;
	  };

	  return DraggableDimensionPublisher;
	}(React.Component);

	DraggableDimensionPublisher.contextTypes = (_DraggableDimensionPu = {}, _DraggableDimensionPu[dimensionMarshalKey] = propTypes.object.isRequired, _DraggableDimensionPu);

	var mapToZero_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports['default'] = mapToZero;

	function mapToZero(obj) {
	  var ret = {};
	  for (var key in obj) {
	    if (Object.prototype.hasOwnProperty.call(obj, key)) {
	      ret[key] = 0;
	    }
	  }
	  return ret;
	}

	module.exports = exports['default'];
	});

	var mapToZero = unwrapExports(mapToZero_1);

	var mapToZero$1 = /*#__PURE__*/Object.freeze({
		default: mapToZero,
		__moduleExports: mapToZero_1
	});

	var stripStyle_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports['default'] = stripStyle;

	function stripStyle(style) {
	  var ret = {};
	  for (var key in style) {
	    if (!Object.prototype.hasOwnProperty.call(style, key)) {
	      continue;
	    }
	    ret[key] = typeof style[key] === 'number' ? style[key] : style[key].val;
	  }
	  return ret;
	}

	module.exports = exports['default'];
	});

	var stripStyle = unwrapExports(stripStyle_1);

	var stripStyle$1 = /*#__PURE__*/Object.freeze({
		default: stripStyle,
		__moduleExports: stripStyle_1
	});

	var stepper_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports["default"] = stepper;

	var reusedTuple = [0, 0];

	function stepper(secondPerFrame, x, v, destX, k, b, precision) {
	  // Spring stiffness, in kg / s^2

	  // for animations, destX is really spring length (spring at rest). initial
	  // position is considered as the stretched/compressed position of a spring
	  var Fspring = -k * (x - destX);

	  // Damping, in kg / s
	  var Fdamper = -b * v;

	  // usually we put mass here, but for animation purposes, specifying mass is a
	  // bit redundant. you could simply adjust k and b accordingly
	  // let a = (Fspring + Fdamper) / mass;
	  var a = Fspring + Fdamper;

	  var newV = v + a * secondPerFrame;
	  var newX = x + newV * secondPerFrame;

	  if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
	    reusedTuple[0] = destX;
	    reusedTuple[1] = 0;
	    return reusedTuple;
	  }

	  reusedTuple[0] = newX;
	  reusedTuple[1] = newV;
	  return reusedTuple;
	}

	module.exports = exports["default"];
	// array reference around.
	});

	var stepper = unwrapExports(stepper_1);

	var stepper$1 = /*#__PURE__*/Object.freeze({
		default: stepper,
		__moduleExports: stepper_1
	});

	var performanceNow = createCommonjsModule(function (module) {
	// Generated by CoffeeScript 1.7.1
	(function() {
	  var getNanoSeconds, hrtime, loadTime;

	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }

	}).call(commonjsGlobal);
	});

	var performanceNow$1 = /*#__PURE__*/Object.freeze({
		default: performanceNow,
		__moduleExports: performanceNow
	});

	var performanceNow$2 = createCommonjsModule(function (module) {
	// Generated by CoffeeScript 1.12.2
	(function() {
	  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - nodeLoadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    moduleLoadTime = getNanoSeconds();
	    upTime = process.uptime() * 1e9;
	    nodeLoadTime = moduleLoadTime - upTime;
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }

	}).call(commonjsGlobal);


	});

	var performanceNow$3 = /*#__PURE__*/Object.freeze({
		default: performanceNow$2,
		__moduleExports: performanceNow$2
	});

	var now = ( performanceNow$3 && performanceNow$2 ) || performanceNow$3;

	var root$2 = typeof window === 'undefined' ? commonjsGlobal : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = root$2['request' + suffix]
	  , caf = root$2['cancel' + suffix] || root$2['cancelRequest' + suffix];

	for(var i$1 = 0; !raf && i$1 < vendors.length; i$1++) {
	  raf = root$2[vendors[i$1] + 'Request' + suffix];
	  caf = root$2[vendors[i$1] + 'Cancel' + suffix]
	      || root$2[vendors[i$1] + 'CancelRequest' + suffix];
	}

	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id$1 = 0
	    , queue = []
	    , frameDuration = 1000 / 60;

	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last));
	      last = next + _now;
	      setTimeout(function() {
	        var cp = queue.slice(0);
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0;
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last);
	            } catch(e) {
	              setTimeout(function() { throw e }, 0);
	            }
	          }
	        }
	      }, Math.round(next));
	    }
	    queue.push({
	      handle: ++id$1,
	      callback: callback,
	      cancelled: false
	    });
	    return id$1
	  };

	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true;
	      }
	    }
	  };
	}

	var raf_1 = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(root$2, fn)
	};
	var cancel$1 = function() {
	  caf.apply(root$2, arguments);
	};
	var polyfill = function() {
	  root$2.requestAnimationFrame = raf;
	  root$2.cancelAnimationFrame = caf;
	};
	raf_1.cancel = cancel$1;
	raf_1.polyfill = polyfill;

	var raf$1 = /*#__PURE__*/Object.freeze({
		default: raf_1,
		__moduleExports: raf_1,
		cancel: cancel$1,
		polyfill: polyfill
	});

	var shouldStopAnimation_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports['default'] = shouldStopAnimation;

	function shouldStopAnimation(currentStyle, style, currentVelocity) {
	  for (var key in style) {
	    if (!Object.prototype.hasOwnProperty.call(style, key)) {
	      continue;
	    }

	    if (currentVelocity[key] !== 0) {
	      return false;
	    }

	    var styleValue = typeof style[key] === 'number' ? style[key] : style[key].val;
	    // stepper will have already taken care of rounding precision errors, so
	    // won't have such thing as 0.9999 !=== 1
	    if (currentStyle[key] !== styleValue) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports['default'];
	});

	var shouldStopAnimation = unwrapExports(shouldStopAnimation_1);

	var shouldStopAnimation$1 = /*#__PURE__*/Object.freeze({
		default: shouldStopAnimation,
		__moduleExports: shouldStopAnimation_1
	});

	var _mapToZero = ( mapToZero$1 && mapToZero ) || mapToZero$1;

	var _stripStyle = ( stripStyle$1 && stripStyle ) || stripStyle$1;

	var _stepper3 = ( stepper$1 && stepper ) || stepper$1;

	var _performanceNow = ( performanceNow$1 && performanceNow ) || performanceNow$1;

	var _raf = ( raf$1 && raf_1 ) || raf$1;

	var _shouldStopAnimation = ( shouldStopAnimation$1 && shouldStopAnimation ) || shouldStopAnimation$1;

	var Motion_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



	var _mapToZero2 = _interopRequireDefault(_mapToZero);



	var _stripStyle2 = _interopRequireDefault(_stripStyle);



	var _stepper4 = _interopRequireDefault(_stepper3);



	var _performanceNow2 = _interopRequireDefault(_performanceNow);



	var _raf2 = _interopRequireDefault(_raf);



	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);



	var _react2 = _interopRequireDefault(React__default);



	var _propTypes2 = _interopRequireDefault(propTypes);

	var msPerFrame = 1000 / 60;

	var Motion = (function (_React$Component) {
	  _inherits(Motion, _React$Component);

	  _createClass(Motion, null, [{
	    key: 'propTypes',
	    value: {
	      // TOOD: warn against putting a config in here
	      defaultStyle: _propTypes2['default'].objectOf(_propTypes2['default'].number),
	      style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired,
	      children: _propTypes2['default'].func.isRequired,
	      onRest: _propTypes2['default'].func
	    },
	    enumerable: true
	  }]);

	  function Motion(props) {
	    var _this = this;

	    _classCallCheck(this, Motion);

	    _React$Component.call(this, props);
	    this.wasAnimating = false;
	    this.animationID = null;
	    this.prevTime = 0;
	    this.accumulatedTime = 0;
	    this.unreadPropStyle = null;

	    this.clearUnreadPropStyle = function (destStyle) {
	      var dirty = false;
	      var _state = _this.state;
	      var currentStyle = _state.currentStyle;
	      var currentVelocity = _state.currentVelocity;
	      var lastIdealStyle = _state.lastIdealStyle;
	      var lastIdealVelocity = _state.lastIdealVelocity;

	      for (var key in destStyle) {
	        if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
	          continue;
	        }

	        var styleValue = destStyle[key];
	        if (typeof styleValue === 'number') {
	          if (!dirty) {
	            dirty = true;
	            currentStyle = _extends({}, currentStyle);
	            currentVelocity = _extends({}, currentVelocity);
	            lastIdealStyle = _extends({}, lastIdealStyle);
	            lastIdealVelocity = _extends({}, lastIdealVelocity);
	          }

	          currentStyle[key] = styleValue;
	          currentVelocity[key] = 0;
	          lastIdealStyle[key] = styleValue;
	          lastIdealVelocity[key] = 0;
	        }
	      }

	      if (dirty) {
	        _this.setState({ currentStyle: currentStyle, currentVelocity: currentVelocity, lastIdealStyle: lastIdealStyle, lastIdealVelocity: lastIdealVelocity });
	      }
	    };

	    this.startAnimationIfNecessary = function () {
	      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	      // call cb? No, otherwise accidental parent rerender causes cb trigger
	      _this.animationID = _raf2['default'](function (timestamp) {
	        // check if we need to animate in the first place
	        var propsStyle = _this.props.style;
	        if (_shouldStopAnimation2['default'](_this.state.currentStyle, propsStyle, _this.state.currentVelocity)) {
	          if (_this.wasAnimating && _this.props.onRest) {
	            _this.props.onRest();
	          }

	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.wasAnimating = false;
	          _this.accumulatedTime = 0;
	          return;
	        }

	        _this.wasAnimating = true;

	        var currentTime = timestamp || _performanceNow2['default']();
	        var timeDelta = currentTime - _this.prevTime;
	        _this.prevTime = currentTime;
	        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	        // more than 10 frames? prolly switched browser tab. Restart
	        if (_this.accumulatedTime > msPerFrame * 10) {
	          _this.accumulatedTime = 0;
	        }

	        if (_this.accumulatedTime === 0) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.startAnimationIfNecessary();
	          return;
	        }

	        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

	        var newLastIdealStyle = {};
	        var newLastIdealVelocity = {};
	        var newCurrentStyle = {};
	        var newCurrentVelocity = {};

	        for (var key in propsStyle) {
	          if (!Object.prototype.hasOwnProperty.call(propsStyle, key)) {
	            continue;
	          }

	          var styleValue = propsStyle[key];
	          if (typeof styleValue === 'number') {
	            newCurrentStyle[key] = styleValue;
	            newCurrentVelocity[key] = 0;
	            newLastIdealStyle[key] = styleValue;
	            newLastIdealVelocity[key] = 0;
	          } else {
	            var newLastIdealStyleValue = _this.state.lastIdealStyle[key];
	            var newLastIdealVelocityValue = _this.state.lastIdealVelocity[key];
	            for (var i = 0; i < framesToCatchUp; i++) {
	              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	              newLastIdealStyleValue = _stepper[0];
	              newLastIdealVelocityValue = _stepper[1];
	            }

	            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	            var nextIdealX = _stepper2[0];
	            var nextIdealV = _stepper2[1];

	            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	            newLastIdealStyle[key] = newLastIdealStyleValue;
	            newLastIdealVelocity[key] = newLastIdealVelocityValue;
	          }
	        }

	        _this.animationID = null;
	        // the amount we're looped over above
	        _this.accumulatedTime -= framesToCatchUp * msPerFrame;

	        _this.setState({
	          currentStyle: newCurrentStyle,
	          currentVelocity: newCurrentVelocity,
	          lastIdealStyle: newLastIdealStyle,
	          lastIdealVelocity: newLastIdealVelocity
	        });

	        _this.unreadPropStyle = null;

	        _this.startAnimationIfNecessary();
	      });
	    };

	    this.state = this.defaultState();
	  }

	  Motion.prototype.defaultState = function defaultState() {
	    var _props = this.props;
	    var defaultStyle = _props.defaultStyle;
	    var style = _props.style;

	    var currentStyle = defaultStyle || _stripStyle2['default'](style);
	    var currentVelocity = _mapToZero2['default'](currentStyle);
	    return {
	      currentStyle: currentStyle,
	      currentVelocity: currentVelocity,
	      lastIdealStyle: currentStyle,
	      lastIdealVelocity: currentVelocity
	    };
	  };

	  // it's possible that currentStyle's value is stale: if props is immediately
	  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
	  // at 0 (didn't have time to tick and interpolate even once). If we naively
	  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	  // In reality currentStyle should be 400

	  Motion.prototype.componentDidMount = function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  };

	  Motion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
	    if (this.unreadPropStyle != null) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyle);
	    }

	    this.unreadPropStyle = props.style;
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  };

	  Motion.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  };

	  Motion.prototype.render = function render() {
	    var renderedChildren = this.props.children(this.state.currentStyle);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  };

	  return Motion;
	})(_react2['default'].Component);

	exports['default'] = Motion;
	module.exports = exports['default'];

	// after checking for unreadPropStyle != null, we manually go set the
	// non-interpolating values (those that are a number, without a spring
	// config)
	});

	var Motion = unwrapExports(Motion_1);

	var Motion$1 = /*#__PURE__*/Object.freeze({
		default: Motion,
		__moduleExports: Motion_1
	});

	var StaggeredMotion_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



	var _mapToZero2 = _interopRequireDefault(_mapToZero);



	var _stripStyle2 = _interopRequireDefault(_stripStyle);



	var _stepper4 = _interopRequireDefault(_stepper3);



	var _performanceNow2 = _interopRequireDefault(_performanceNow);



	var _raf2 = _interopRequireDefault(_raf);



	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);



	var _react2 = _interopRequireDefault(React__default);



	var _propTypes2 = _interopRequireDefault(propTypes);

	var msPerFrame = 1000 / 60;

	function shouldStopAnimationAll(currentStyles, styles, currentVelocities) {
	  for (var i = 0; i < currentStyles.length; i++) {
	    if (!_shouldStopAnimation2['default'](currentStyles[i], styles[i], currentVelocities[i])) {
	      return false;
	    }
	  }
	  return true;
	}

	var StaggeredMotion = (function (_React$Component) {
	  _inherits(StaggeredMotion, _React$Component);

	  _createClass(StaggeredMotion, null, [{
	    key: 'propTypes',
	    value: {
	      // TOOD: warn against putting a config in here
	      defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].objectOf(_propTypes2['default'].number)),
	      styles: _propTypes2['default'].func.isRequired,
	      children: _propTypes2['default'].func.isRequired
	    },
	    enumerable: true
	  }]);

	  function StaggeredMotion(props) {
	    var _this = this;

	    _classCallCheck(this, StaggeredMotion);

	    _React$Component.call(this, props);
	    this.animationID = null;
	    this.prevTime = 0;
	    this.accumulatedTime = 0;
	    this.unreadPropStyles = null;

	    this.clearUnreadPropStyle = function (unreadPropStyles) {
	      var _state = _this.state;
	      var currentStyles = _state.currentStyles;
	      var currentVelocities = _state.currentVelocities;
	      var lastIdealStyles = _state.lastIdealStyles;
	      var lastIdealVelocities = _state.lastIdealVelocities;

	      var someDirty = false;
	      for (var i = 0; i < unreadPropStyles.length; i++) {
	        var unreadPropStyle = unreadPropStyles[i];
	        var dirty = false;

	        for (var key in unreadPropStyle) {
	          if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
	            continue;
	          }

	          var styleValue = unreadPropStyle[key];
	          if (typeof styleValue === 'number') {
	            if (!dirty) {
	              dirty = true;
	              someDirty = true;
	              currentStyles[i] = _extends({}, currentStyles[i]);
	              currentVelocities[i] = _extends({}, currentVelocities[i]);
	              lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
	              lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
	            }
	            currentStyles[i][key] = styleValue;
	            currentVelocities[i][key] = 0;
	            lastIdealStyles[i][key] = styleValue;
	            lastIdealVelocities[i][key] = 0;
	          }
	        }
	      }

	      if (someDirty) {
	        _this.setState({ currentStyles: currentStyles, currentVelocities: currentVelocities, lastIdealStyles: lastIdealStyles, lastIdealVelocities: lastIdealVelocities });
	      }
	    };

	    this.startAnimationIfNecessary = function () {
	      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	      // call cb? No, otherwise accidental parent rerender causes cb trigger
	      _this.animationID = _raf2['default'](function (timestamp) {
	        var destStyles = _this.props.styles(_this.state.lastIdealStyles);

	        // check if we need to animate in the first place
	        if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities)) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.accumulatedTime = 0;
	          return;
	        }

	        var currentTime = timestamp || _performanceNow2['default']();
	        var timeDelta = currentTime - _this.prevTime;
	        _this.prevTime = currentTime;
	        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	        // more than 10 frames? prolly switched browser tab. Restart
	        if (_this.accumulatedTime > msPerFrame * 10) {
	          _this.accumulatedTime = 0;
	        }

	        if (_this.accumulatedTime === 0) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.startAnimationIfNecessary();
	          return;
	        }

	        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

	        var newLastIdealStyles = [];
	        var newLastIdealVelocities = [];
	        var newCurrentStyles = [];
	        var newCurrentVelocities = [];

	        for (var i = 0; i < destStyles.length; i++) {
	          var destStyle = destStyles[i];
	          var newCurrentStyle = {};
	          var newCurrentVelocity = {};
	          var newLastIdealStyle = {};
	          var newLastIdealVelocity = {};

	          for (var key in destStyle) {
	            if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
	              continue;
	            }

	            var styleValue = destStyle[key];
	            if (typeof styleValue === 'number') {
	              newCurrentStyle[key] = styleValue;
	              newCurrentVelocity[key] = 0;
	              newLastIdealStyle[key] = styleValue;
	              newLastIdealVelocity[key] = 0;
	            } else {
	              var newLastIdealStyleValue = _this.state.lastIdealStyles[i][key];
	              var newLastIdealVelocityValue = _this.state.lastIdealVelocities[i][key];
	              for (var j = 0; j < framesToCatchUp; j++) {
	                var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	                newLastIdealStyleValue = _stepper[0];
	                newLastIdealVelocityValue = _stepper[1];
	              }

	              var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	              var nextIdealX = _stepper2[0];
	              var nextIdealV = _stepper2[1];

	              newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	              newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	              newLastIdealStyle[key] = newLastIdealStyleValue;
	              newLastIdealVelocity[key] = newLastIdealVelocityValue;
	            }
	          }

	          newCurrentStyles[i] = newCurrentStyle;
	          newCurrentVelocities[i] = newCurrentVelocity;
	          newLastIdealStyles[i] = newLastIdealStyle;
	          newLastIdealVelocities[i] = newLastIdealVelocity;
	        }

	        _this.animationID = null;
	        // the amount we're looped over above
	        _this.accumulatedTime -= framesToCatchUp * msPerFrame;

	        _this.setState({
	          currentStyles: newCurrentStyles,
	          currentVelocities: newCurrentVelocities,
	          lastIdealStyles: newLastIdealStyles,
	          lastIdealVelocities: newLastIdealVelocities
	        });

	        _this.unreadPropStyles = null;

	        _this.startAnimationIfNecessary();
	      });
	    };

	    this.state = this.defaultState();
	  }

	  StaggeredMotion.prototype.defaultState = function defaultState() {
	    var _props = this.props;
	    var defaultStyles = _props.defaultStyles;
	    var styles = _props.styles;

	    var currentStyles = defaultStyles || styles().map(_stripStyle2['default']);
	    var currentVelocities = currentStyles.map(function (currentStyle) {
	      return _mapToZero2['default'](currentStyle);
	    });
	    return {
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      lastIdealStyles: currentStyles,
	      lastIdealVelocities: currentVelocities
	    };
	  };

	  StaggeredMotion.prototype.componentDidMount = function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  };

	  StaggeredMotion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
	    if (this.unreadPropStyles != null) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyles);
	    }

	    this.unreadPropStyles = props.styles(this.state.lastIdealStyles);
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  };

	  StaggeredMotion.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  };

	  StaggeredMotion.prototype.render = function render() {
	    var renderedChildren = this.props.children(this.state.currentStyles);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  };

	  return StaggeredMotion;
	})(_react2['default'].Component);

	exports['default'] = StaggeredMotion;
	module.exports = exports['default'];

	// it's possible that currentStyle's value is stale: if props is immediately
	// changed from 0 to 400 to spring(0) again, the async currentStyle is still
	// at 0 (didn't have time to tick and interpolate even once). If we naively
	// compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	// In reality currentStyle should be 400

	// after checking for unreadPropStyles != null, we manually go set the
	// non-interpolating values (those that are a number, without a spring
	// config)
	});

	var StaggeredMotion = unwrapExports(StaggeredMotion_1);

	var StaggeredMotion$1 = /*#__PURE__*/Object.freeze({
		default: StaggeredMotion,
		__moduleExports: StaggeredMotion_1
	});

	var mergeDiff_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports['default'] = mergeDiff;

	function mergeDiff(prev, next, onRemove) {
	  // bookkeeping for easier access of a key's index below. This is 2 allocations +
	  // potentially triggering chrome hash map mode for objs (so it might be faster

	  var prevKeyIndex = {};
	  for (var i = 0; i < prev.length; i++) {
	    prevKeyIndex[prev[i].key] = i;
	  }
	  var nextKeyIndex = {};
	  for (var i = 0; i < next.length; i++) {
	    nextKeyIndex[next[i].key] = i;
	  }

	  // first, an overly elaborate way of merging prev and next, eliminating
	  // duplicates (in terms of keys). If there's dupe, keep the item in next).
	  // This way of writing it saves allocations
	  var ret = [];
	  for (var i = 0; i < next.length; i++) {
	    ret[i] = next[i];
	  }
	  for (var i = 0; i < prev.length; i++) {
	    if (!Object.prototype.hasOwnProperty.call(nextKeyIndex, prev[i].key)) {
	      // this is called my TM's `mergeAndSync`, which calls willLeave. We don't
	      // merge in keys that the user desires to kill
	      var fill = onRemove(i, prev[i]);
	      if (fill != null) {
	        ret.push(fill);
	      }
	    }
	  }

	  // now all the items all present. Core sorting logic to have the right order
	  return ret.sort(function (a, b) {
	    var nextOrderA = nextKeyIndex[a.key];
	    var nextOrderB = nextKeyIndex[b.key];
	    var prevOrderA = prevKeyIndex[a.key];
	    var prevOrderB = prevKeyIndex[b.key];

	    if (nextOrderA != null && nextOrderB != null) {
	      // both keys in next
	      return nextKeyIndex[a.key] - nextKeyIndex[b.key];
	    } else if (prevOrderA != null && prevOrderB != null) {
	      // both keys in prev
	      return prevKeyIndex[a.key] - prevKeyIndex[b.key];
	    } else if (nextOrderA != null) {
	      // key a in next, key b in prev

	      // how to determine the order between a and b? We find a "pivot" (term
	      // abuse), a key present in both prev and next, that is sandwiched between
	      // a and b. In the context of our above example, if we're comparing a and
	      // d, b's (the only) pivot
	      for (var i = 0; i < next.length; i++) {
	        var pivot = next[i].key;
	        if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
	          continue;
	        }

	        if (nextOrderA < nextKeyIndex[pivot] && prevOrderB > prevKeyIndex[pivot]) {
	          return -1;
	        } else if (nextOrderA > nextKeyIndex[pivot] && prevOrderB < prevKeyIndex[pivot]) {
	          return 1;
	        }
	      }
	      // pluggable. default to: next bigger than prev
	      return 1;
	    }
	    // prevOrderA, nextOrderB
	    for (var i = 0; i < next.length; i++) {
	      var pivot = next[i].key;
	      if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
	        continue;
	      }
	      if (nextOrderB < nextKeyIndex[pivot] && prevOrderA > prevKeyIndex[pivot]) {
	        return 1;
	      } else if (nextOrderB > nextKeyIndex[pivot] && prevOrderA < prevKeyIndex[pivot]) {
	        return -1;
	      }
	    }
	    // pluggable. default to: next bigger than prev
	    return -1;
	  });
	}

	module.exports = exports['default'];
	// to loop through and find a key's index each time), but I no longer care
	});

	var mergeDiff = unwrapExports(mergeDiff_1);

	var mergeDiff$1 = /*#__PURE__*/Object.freeze({
		default: mergeDiff,
		__moduleExports: mergeDiff_1
	});

	var _mergeDiff = ( mergeDiff$1 && mergeDiff ) || mergeDiff$1;

	var TransitionMotion_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



	var _mapToZero2 = _interopRequireDefault(_mapToZero);



	var _stripStyle2 = _interopRequireDefault(_stripStyle);



	var _stepper4 = _interopRequireDefault(_stepper3);



	var _mergeDiff2 = _interopRequireDefault(_mergeDiff);



	var _performanceNow2 = _interopRequireDefault(_performanceNow);



	var _raf2 = _interopRequireDefault(_raf);



	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);



	var _react2 = _interopRequireDefault(React__default);



	var _propTypes2 = _interopRequireDefault(propTypes);

	var msPerFrame = 1000 / 60;

	// the children function & (potential) styles function asks as param an
	// Array<TransitionPlainStyle>, where each TransitionPlainStyle is of the format
	// {key: string, data?: any, style: PlainStyle}. However, the way we keep
	// internal states doesn't contain such a data structure (check the state and
	// TransitionMotionState). So when children function and others ask for such
	// data we need to generate them on the fly by combining mergedPropsStyles and
	// currentStyles/lastIdealStyles
	function rehydrateStyles(mergedPropsStyles, unreadPropStyles, plainStyles) {
	  // Copy the value to a `const` so that Flow understands that the const won't
	  // change and will be non-nullable in the callback below.
	  var cUnreadPropStyles = unreadPropStyles;
	  if (cUnreadPropStyles == null) {
	    return mergedPropsStyles.map(function (mergedPropsStyle, i) {
	      return {
	        key: mergedPropsStyle.key,
	        data: mergedPropsStyle.data,
	        style: plainStyles[i]
	      };
	    });
	  }
	  return mergedPropsStyles.map(function (mergedPropsStyle, i) {
	    for (var j = 0; j < cUnreadPropStyles.length; j++) {
	      if (cUnreadPropStyles[j].key === mergedPropsStyle.key) {
	        return {
	          key: cUnreadPropStyles[j].key,
	          data: cUnreadPropStyles[j].data,
	          style: plainStyles[i]
	        };
	      }
	    }
	    return { key: mergedPropsStyle.key, data: mergedPropsStyle.data, style: plainStyles[i] };
	  });
	}

	function shouldStopAnimationAll(currentStyles, destStyles, currentVelocities, mergedPropsStyles) {
	  if (mergedPropsStyles.length !== destStyles.length) {
	    return false;
	  }

	  for (var i = 0; i < mergedPropsStyles.length; i++) {
	    if (mergedPropsStyles[i].key !== destStyles[i].key) {
	      return false;
	    }
	  }

	  // we have the invariant that mergedPropsStyles and
	  // currentStyles/currentVelocities/last* are synced in terms of cells, see
	  // mergeAndSync comment for more info
	  for (var i = 0; i < mergedPropsStyles.length; i++) {
	    if (!_shouldStopAnimation2['default'](currentStyles[i], destStyles[i].style, currentVelocities[i])) {
	      return false;
	    }
	  }

	  return true;
	}

	// core key merging logic

	// things to do: say previously merged style is {a, b}, dest style (prop) is {b,
	// c}, previous current (interpolating) style is {a, b}
	// **invariant**: current[i] corresponds to merged[i] in terms of key

	// steps:
	// turn merged style into {a?, b, c}
	//    add c, value of c is destStyles.c
	//    maybe remove a, aka call willLeave(a), then merged is either {b, c} or {a, b, c}
	// turn current (interpolating) style from {a, b} into {a?, b, c}
	//    maybe remove a
	//    certainly add c, value of c is willEnter(c)
	// loop over merged and construct new current
	// dest doesn't change, that's owner's
	function mergeAndSync(willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldLastIdealStyles, oldLastIdealVelocities) {
	  var newMergedPropsStyles = _mergeDiff2['default'](oldMergedPropsStyles, destStyles, function (oldIndex, oldMergedPropsStyle) {
	    var leavingStyle = willLeave(oldMergedPropsStyle);
	    if (leavingStyle == null) {
	      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
	      return null;
	    }
	    if (_shouldStopAnimation2['default'](oldCurrentStyles[oldIndex], leavingStyle, oldCurrentVelocities[oldIndex])) {
	      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
	      return null;
	    }
	    return { key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data, style: leavingStyle };
	  });

	  var newCurrentStyles = [];
	  var newCurrentVelocities = [];
	  var newLastIdealStyles = [];
	  var newLastIdealVelocities = [];
	  for (var i = 0; i < newMergedPropsStyles.length; i++) {
	    var newMergedPropsStyleCell = newMergedPropsStyles[i];
	    var foundOldIndex = null;
	    for (var j = 0; j < oldMergedPropsStyles.length; j++) {
	      if (oldMergedPropsStyles[j].key === newMergedPropsStyleCell.key) {
	        foundOldIndex = j;
	        break;
	      }
	    }
	    // TODO: key search code
	    if (foundOldIndex == null) {
	      var plainStyle = willEnter(newMergedPropsStyleCell);
	      newCurrentStyles[i] = plainStyle;
	      newLastIdealStyles[i] = plainStyle;

	      var velocity = _mapToZero2['default'](newMergedPropsStyleCell.style);
	      newCurrentVelocities[i] = velocity;
	      newLastIdealVelocities[i] = velocity;
	    } else {
	      newCurrentStyles[i] = oldCurrentStyles[foundOldIndex];
	      newLastIdealStyles[i] = oldLastIdealStyles[foundOldIndex];
	      newCurrentVelocities[i] = oldCurrentVelocities[foundOldIndex];
	      newLastIdealVelocities[i] = oldLastIdealVelocities[foundOldIndex];
	    }
	  }

	  return [newMergedPropsStyles, newCurrentStyles, newCurrentVelocities, newLastIdealStyles, newLastIdealVelocities];
	}

	var TransitionMotion = (function (_React$Component) {
	  _inherits(TransitionMotion, _React$Component);

	  _createClass(TransitionMotion, null, [{
	    key: 'propTypes',
	    value: {
	      defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
	        key: _propTypes2['default'].string.isRequired,
	        data: _propTypes2['default'].any,
	        style: _propTypes2['default'].objectOf(_propTypes2['default'].number).isRequired
	      })),
	      styles: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
	        key: _propTypes2['default'].string.isRequired,
	        data: _propTypes2['default'].any,
	        style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired
	      }))]).isRequired,
	      children: _propTypes2['default'].func.isRequired,
	      willEnter: _propTypes2['default'].func,
	      willLeave: _propTypes2['default'].func,
	      didLeave: _propTypes2['default'].func
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      willEnter: function willEnter(styleThatEntered) {
	        return _stripStyle2['default'](styleThatEntered.style);
	      },
	      // recall: returning null makes the current unmounting TransitionStyle
	      // disappear immediately
	      willLeave: function willLeave() {
	        return null;
	      },
	      didLeave: function didLeave() {}
	    },
	    enumerable: true
	  }]);

	  function TransitionMotion(props) {
	    var _this = this;

	    _classCallCheck(this, TransitionMotion);

	    _React$Component.call(this, props);
	    this.unmounting = false;
	    this.animationID = null;
	    this.prevTime = 0;
	    this.accumulatedTime = 0;
	    this.unreadPropStyles = null;

	    this.clearUnreadPropStyle = function (unreadPropStyles) {
	      var _mergeAndSync = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, unreadPropStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);

	      var mergedPropsStyles = _mergeAndSync[0];
	      var currentStyles = _mergeAndSync[1];
	      var currentVelocities = _mergeAndSync[2];
	      var lastIdealStyles = _mergeAndSync[3];
	      var lastIdealVelocities = _mergeAndSync[4];

	      for (var i = 0; i < unreadPropStyles.length; i++) {
	        var unreadPropStyle = unreadPropStyles[i].style;
	        var dirty = false;

	        for (var key in unreadPropStyle) {
	          if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
	            continue;
	          }

	          var styleValue = unreadPropStyle[key];
	          if (typeof styleValue === 'number') {
	            if (!dirty) {
	              dirty = true;
	              currentStyles[i] = _extends({}, currentStyles[i]);
	              currentVelocities[i] = _extends({}, currentVelocities[i]);
	              lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
	              lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
	              mergedPropsStyles[i] = {
	                key: mergedPropsStyles[i].key,
	                data: mergedPropsStyles[i].data,
	                style: _extends({}, mergedPropsStyles[i].style)
	              };
	            }
	            currentStyles[i][key] = styleValue;
	            currentVelocities[i][key] = 0;
	            lastIdealStyles[i][key] = styleValue;
	            lastIdealVelocities[i][key] = 0;
	            mergedPropsStyles[i].style[key] = styleValue;
	          }
	        }
	      }

	      // unlike the other 2 components, we can't detect staleness and optionally
	      // opt out of setState here. each style object's data might contain new
	      // stuff we're not/cannot compare
	      _this.setState({
	        currentStyles: currentStyles,
	        currentVelocities: currentVelocities,
	        mergedPropsStyles: mergedPropsStyles,
	        lastIdealStyles: lastIdealStyles,
	        lastIdealVelocities: lastIdealVelocities
	      });
	    };

	    this.startAnimationIfNecessary = function () {
	      if (_this.unmounting) {
	        return;
	      }

	      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	      // call cb? No, otherwise accidental parent rerender causes cb trigger
	      _this.animationID = _raf2['default'](function (timestamp) {
	        // https://github.com/chenglou/react-motion/pull/420
	        // > if execution passes the conditional if (this.unmounting), then
	        // executes async defaultRaf and after that component unmounts and after
	        // that the callback of defaultRaf is called, then setState will be called
	        // on unmounted component.
	        if (_this.unmounting) {
	          return;
	        }

	        var propStyles = _this.props.styles;
	        var destStyles = typeof propStyles === 'function' ? propStyles(rehydrateStyles(_this.state.mergedPropsStyles, _this.unreadPropStyles, _this.state.lastIdealStyles)) : propStyles;

	        // check if we need to animate in the first place
	        if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities, _this.state.mergedPropsStyles)) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.accumulatedTime = 0;
	          return;
	        }

	        var currentTime = timestamp || _performanceNow2['default']();
	        var timeDelta = currentTime - _this.prevTime;
	        _this.prevTime = currentTime;
	        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	        // more than 10 frames? prolly switched browser tab. Restart
	        if (_this.accumulatedTime > msPerFrame * 10) {
	          _this.accumulatedTime = 0;
	        }

	        if (_this.accumulatedTime === 0) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.startAnimationIfNecessary();
	          return;
	        }

	        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

	        var _mergeAndSync2 = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, destStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);

	        var newMergedPropsStyles = _mergeAndSync2[0];
	        var newCurrentStyles = _mergeAndSync2[1];
	        var newCurrentVelocities = _mergeAndSync2[2];
	        var newLastIdealStyles = _mergeAndSync2[3];
	        var newLastIdealVelocities = _mergeAndSync2[4];

	        for (var i = 0; i < newMergedPropsStyles.length; i++) {
	          var newMergedPropsStyle = newMergedPropsStyles[i].style;
	          var newCurrentStyle = {};
	          var newCurrentVelocity = {};
	          var newLastIdealStyle = {};
	          var newLastIdealVelocity = {};

	          for (var key in newMergedPropsStyle) {
	            if (!Object.prototype.hasOwnProperty.call(newMergedPropsStyle, key)) {
	              continue;
	            }

	            var styleValue = newMergedPropsStyle[key];
	            if (typeof styleValue === 'number') {
	              newCurrentStyle[key] = styleValue;
	              newCurrentVelocity[key] = 0;
	              newLastIdealStyle[key] = styleValue;
	              newLastIdealVelocity[key] = 0;
	            } else {
	              var newLastIdealStyleValue = newLastIdealStyles[i][key];
	              var newLastIdealVelocityValue = newLastIdealVelocities[i][key];
	              for (var j = 0; j < framesToCatchUp; j++) {
	                var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	                newLastIdealStyleValue = _stepper[0];
	                newLastIdealVelocityValue = _stepper[1];
	              }

	              var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	              var nextIdealX = _stepper2[0];
	              var nextIdealV = _stepper2[1];

	              newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	              newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	              newLastIdealStyle[key] = newLastIdealStyleValue;
	              newLastIdealVelocity[key] = newLastIdealVelocityValue;
	            }
	          }

	          newLastIdealStyles[i] = newLastIdealStyle;
	          newLastIdealVelocities[i] = newLastIdealVelocity;
	          newCurrentStyles[i] = newCurrentStyle;
	          newCurrentVelocities[i] = newCurrentVelocity;
	        }

	        _this.animationID = null;
	        // the amount we're looped over above
	        _this.accumulatedTime -= framesToCatchUp * msPerFrame;

	        _this.setState({
	          currentStyles: newCurrentStyles,
	          currentVelocities: newCurrentVelocities,
	          lastIdealStyles: newLastIdealStyles,
	          lastIdealVelocities: newLastIdealVelocities,
	          mergedPropsStyles: newMergedPropsStyles
	        });

	        _this.unreadPropStyles = null;

	        _this.startAnimationIfNecessary();
	      });
	    };

	    this.state = this.defaultState();
	  }

	  TransitionMotion.prototype.defaultState = function defaultState() {
	    var _props = this.props;
	    var defaultStyles = _props.defaultStyles;
	    var styles = _props.styles;
	    var willEnter = _props.willEnter;
	    var willLeave = _props.willLeave;
	    var didLeave = _props.didLeave;

	    var destStyles = typeof styles === 'function' ? styles(defaultStyles) : styles;

	    // this is special. for the first time around, we don't have a comparison
	    // between last (no last) and current merged props. we'll compute last so:
	    // say default is {a, b} and styles (dest style) is {b, c}, we'll
	    // fabricate last as {a, b}
	    var oldMergedPropsStyles = undefined;
	    if (defaultStyles == null) {
	      oldMergedPropsStyles = destStyles;
	    } else {
	      oldMergedPropsStyles = defaultStyles.map(function (defaultStyleCell) {
	        // TODO: key search code
	        for (var i = 0; i < destStyles.length; i++) {
	          if (destStyles[i].key === defaultStyleCell.key) {
	            return destStyles[i];
	          }
	        }
	        return defaultStyleCell;
	      });
	    }
	    var oldCurrentStyles = defaultStyles == null ? destStyles.map(function (s) {
	      return _stripStyle2['default'](s.style);
	    }) : defaultStyles.map(function (s) {
	      return _stripStyle2['default'](s.style);
	    });
	    var oldCurrentVelocities = defaultStyles == null ? destStyles.map(function (s) {
	      return _mapToZero2['default'](s.style);
	    }) : defaultStyles.map(function (s) {
	      return _mapToZero2['default'](s.style);
	    });

	    var _mergeAndSync3 = mergeAndSync(
	    // Because this is an old-style createReactClass component, Flow doesn't
	    // understand that the willEnter and willLeave props have default values
	    // and will always be present.
	    willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldCurrentStyles, // oldLastIdealStyles really
	    oldCurrentVelocities);

	    var mergedPropsStyles = _mergeAndSync3[0];
	    var currentStyles = _mergeAndSync3[1];
	    var currentVelocities = _mergeAndSync3[2];
	    var lastIdealStyles = _mergeAndSync3[3];
	    var lastIdealVelocities = _mergeAndSync3[4];
	    // oldLastIdealVelocities really

	    return {
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      lastIdealStyles: lastIdealStyles,
	      lastIdealVelocities: lastIdealVelocities,
	      mergedPropsStyles: mergedPropsStyles
	    };
	  };

	  // after checking for unreadPropStyles != null, we manually go set the
	  // non-interpolating values (those that are a number, without a spring
	  // config)

	  TransitionMotion.prototype.componentDidMount = function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  };

	  TransitionMotion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
	    if (this.unreadPropStyles) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyles);
	    }

	    var styles = props.styles;
	    if (typeof styles === 'function') {
	      this.unreadPropStyles = styles(rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles));
	    } else {
	      this.unreadPropStyles = styles;
	    }

	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  };

	  TransitionMotion.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.unmounting = true;
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  };

	  TransitionMotion.prototype.render = function render() {
	    var hydratedStyles = rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles);
	    var renderedChildren = this.props.children(hydratedStyles);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  };

	  return TransitionMotion;
	})(_react2['default'].Component);

	exports['default'] = TransitionMotion;
	module.exports = exports['default'];

	// list of styles, each containing interpolating values. Part of what's passed
	// to children function. Notice that this is
	// Array<ActualInterpolatingStyleObject>, without the wrapper that is {key: ...,
	// data: ... style: ActualInterpolatingStyleObject}. Only mergedPropsStyles
	// contains the key & data info (so that we only have a single source of truth
	// for these, and to save space). Check the comment for `rehydrateStyles` to
	// see how we regenerate the entirety of what's passed to children function

	// the array that keeps track of currently rendered stuff! Including stuff
	// that you've unmounted but that's still animating. This is where it lives

	// it's possible that currentStyle's value is stale: if props is immediately
	// changed from 0 to 400 to spring(0) again, the async currentStyle is still
	// at 0 (didn't have time to tick and interpolate even once). If we naively
	// compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	// In reality currentStyle should be 400
	});

	var TransitionMotion = unwrapExports(TransitionMotion_1);

	var TransitionMotion$1 = /*#__PURE__*/Object.freeze({
		default: TransitionMotion,
		__moduleExports: TransitionMotion_1
	});

	var presets = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports["default"] = {
	  noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
	  gentle: { stiffness: 120, damping: 14 },
	  wobbly: { stiffness: 180, damping: 12 },
	  stiff: { stiffness: 210, damping: 20 }
	};
	module.exports = exports["default"];
	});

	var presets$1 = unwrapExports(presets);

	var presets$2 = /*#__PURE__*/Object.freeze({
		default: presets$1,
		__moduleExports: presets
	});

	var _presets = ( presets$2 && presets$1 ) || presets$2;

	var spring_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = spring;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }



	var _presets2 = _interopRequireDefault(_presets);

	var defaultConfig = _extends({}, _presets2['default'].noWobble, {
	  precision: 0.01
	});

	function spring(val, config) {
	  return _extends({}, defaultConfig, config, { val: val });
	}

	module.exports = exports['default'];
	});

	var spring = unwrapExports(spring_1);

	var spring$1 = /*#__PURE__*/Object.freeze({
		default: spring,
		__moduleExports: spring_1
	});

	var reorderKeys_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports['default'] = reorderKeys;

	var hasWarned = false;

	function reorderKeys() {
	  {
	    if (!hasWarned) {
	      hasWarned = true;
	      console.error('`reorderKeys` has been removed, since it is no longer needed for TransitionMotion\'s new styles array API.');
	    }
	  }
	}

	module.exports = exports['default'];
	});

	var reorderKeys = unwrapExports(reorderKeys_1);

	var reorderKeys$1 = /*#__PURE__*/Object.freeze({
		default: reorderKeys,
		__moduleExports: reorderKeys_1
	});

	var _Motion = ( Motion$1 && Motion ) || Motion$1;

	var _StaggeredMotion = ( StaggeredMotion$1 && StaggeredMotion ) || StaggeredMotion$1;

	var _TransitionMotion = ( TransitionMotion$1 && TransitionMotion ) || TransitionMotion$1;

	var _spring = ( spring$1 && spring ) || spring$1;

	var _reorderKeys = ( reorderKeys$1 && reorderKeys ) || reorderKeys$1;

	var reactMotion = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }



	exports.Motion = _interopRequire(_Motion);



	exports.StaggeredMotion = _interopRequire(_StaggeredMotion);



	exports.TransitionMotion = _interopRequire(_TransitionMotion);



	exports.spring = _interopRequire(_spring);



	exports.presets = _interopRequire(_presets);



	exports.stripStyle = _interopRequire(_stripStyle);

	// deprecated, dummy warning function



	exports.reorderKeys = _interopRequire(_reorderKeys);
	});

	unwrapExports(reactMotion);
	var reactMotion_1 = reactMotion.Motion;
	var reactMotion_2 = reactMotion.StaggeredMotion;
	var reactMotion_3 = reactMotion.TransitionMotion;
	var reactMotion_4 = reactMotion.spring;
	var reactMotion_5 = reactMotion.presets;
	var reactMotion_6 = reactMotion.stripStyle;
	var reactMotion_7 = reactMotion.reorderKeys;

	var origin$8 = {
	  x: 0,
	  y: 0
	};

	var noMovement$1 = {
	  transform: null
	};

	var isAtOrigin = function isAtOrigin(point) {
	  return point.x === origin$8.x && point.y === origin$8.y;
	};

	var getStyle = function getStyle(isNotMoving, x, y) {
	  if (isNotMoving) {
	    return noMovement$1;
	  }

	  var point = { x: x, y: y };

	  if (isAtOrigin(point)) {
	    return noMovement$1;
	  }
	  var style = {
	    transform: 'translate(' + point.x + 'px, ' + point.y + 'px)'
	  };
	  return style;
	};

	var Movable = function (_Component) {
	  _inherits(Movable, _Component);

	  function Movable() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, Movable);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onRest = function () {
	      var onMoveEnd = _this.props.onMoveEnd;


	      if (!onMoveEnd) {
	        return;
	      }

	      setTimeout(function () {
	        return onMoveEnd();
	      });
	    }, _this.getFinal = function () {
	      var destination = _this.props.destination;
	      var speed = _this.props.speed;

	      if (speed === 'INSTANT') {
	        return destination;
	      }

	      var selected = speed === 'FAST' ? physics.fast : physics.standard;

	      return {
	        x: reactMotion_4(destination.x, selected),
	        y: reactMotion_4(destination.y, selected)
	      };
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  Movable.prototype.render = function render() {
	    var _this2 = this;

	    var final = this.getFinal();

	    var isNotMoving = isAtOrigin(final);

	    return React__default.createElement(
	      reactMotion_1,
	      { defaultStyle: origin$8, style: final, onRest: this.onRest },
	      function (current) {
	        return _this2.props.children(getStyle(isNotMoving, current.x, current.y));
	      }
	    );
	  };

	  return Movable;
	}(React.Component);

	Movable.defaultProps = {
	  destination: origin$8
	};

	var getWindowFromRef = (function (ref) {
	  return ref ? ref.ownerDocument.defaultView : window;
	});

	var selector = '[' + dragHandle + ']';

	var getDragHandleRef = function getDragHandleRef(draggableRef) {
	  if (draggableRef.hasAttribute(dragHandle)) {
	    return draggableRef;
	  }

	  var el = draggableRef.querySelector(selector);

	  return el || null;
	};

	var retainingFocusFor = null;

	var clearRetentionOnFocusChange = function () {
	  var isBound = false;

	  var bind = function bind() {
	    if (isBound) {
	      return;
	    }

	    isBound = true;

	    window.addEventListener('focus', onWindowFocusChange, { capture: true });
	  };

	  var unbind = function unbind() {
	    if (!isBound) {
	      return;
	    }

	    isBound = false;

	    window.removeEventListener('focus', onWindowFocusChange, { capture: true });
	  };

	  var onWindowFocusChange = function onWindowFocusChange() {
	    unbind();
	    retainingFocusFor = null;
	  };

	  var result = function result() {
	    return bind();
	  };
	  result.cancel = function () {
	    return unbind();
	  };

	  return result;
	}();

	var retain = function retain(id) {
	  retainingFocusFor = id;
	  clearRetentionOnFocusChange();
	};

	var tryRestoreFocus = function tryRestoreFocus(id, draggableRef) {
	  if (!retainingFocusFor) {
	    return;
	  }

	  if (id !== retainingFocusFor) {
	    return;
	  }

	  retainingFocusFor = null;

	  clearRetentionOnFocusChange.cancel();

	  var dragHandleRef = getDragHandleRef(draggableRef);

	  if (!dragHandleRef) {
	    console.warn('Could not find drag handle in the DOM to focus on it');
	    return;
	  }
	  dragHandleRef.focus();
	};

	var retainer = {
	  retain: retain,
	  tryRestoreFocus: tryRestoreFocus
	};

	var interactiveTagNames = {
	  input: true,
	  button: true,
	  textarea: true,
	  select: true,
	  option: true,
	  optgroup: true,
	  video: true,
	  audio: true
	};

	var isAnInteractiveElement = function isAnInteractiveElement(parent, current) {
	  if (current == null) {
	    return false;
	  }

	  var hasAnInteractiveTag = Boolean(interactiveTagNames[current.tagName.toLowerCase()]);

	  if (hasAnInteractiveTag) {
	    return true;
	  }

	  var attribute = current.getAttribute('contenteditable');
	  if (attribute === 'true' || attribute === '') {
	    return true;
	  }

	  if (current === parent) {
	    return false;
	  }

	  return isAnInteractiveElement(parent, current.parentElement);
	};

	var shouldAllowDraggingFromTarget = (function (event, props) {
	  if (props.canDragInteractiveElements) {
	    return true;
	  }

	  var target = event.target,
	      currentTarget = event.currentTarget;

	  if (!(target instanceof Element) || !(currentTarget instanceof Element)) {
	    return true;
	  }

	  return !isAnInteractiveElement(currentTarget, target);
	});

	var createScheduler = (function (callbacks) {
	  var memoizedMove = memoizeOne(function (x, y) {
	    var point = { x: x, y: y };
	    callbacks.onMove(point);
	  });

	  var move = rafSchd(function (point) {
	    return memoizedMove(point.x, point.y);
	  });
	  var moveForward = rafSchd(callbacks.onMoveForward);
	  var moveBackward = rafSchd(callbacks.onMoveBackward);
	  var crossAxisMoveForward = rafSchd(callbacks.onCrossAxisMoveForward);
	  var crossAxisMoveBackward = rafSchd(callbacks.onCrossAxisMoveBackward);
	  var windowScrollMove = rafSchd(callbacks.onWindowScroll);

	  var cancel = function cancel() {

	    move.cancel();
	    moveForward.cancel();
	    moveBackward.cancel();
	    crossAxisMoveForward.cancel();
	    crossAxisMoveBackward.cancel();
	    windowScrollMove.cancel();
	  };

	  return {
	    move: move,
	    moveForward: moveForward,
	    moveBackward: moveBackward,
	    crossAxisMoveForward: crossAxisMoveForward,
	    crossAxisMoveBackward: crossAxisMoveBackward,
	    windowScrollMove: windowScrollMove,
	    cancel: cancel
	  };
	});

	var sloppyClickThreshold = 5;

	var isSloppyClickThresholdExceeded = (function (original, current) {
	  return Math.abs(current.x - original.x) >= sloppyClickThreshold || Math.abs(current.y - original.y) >= sloppyClickThreshold;
	});

	var tab = 9;
	var enter = 13;
	var escape = 27;
	var space = 32;
	var pageUp = 33;
	var pageDown = 34;
	var end = 35;
	var home = 36;
	var arrowLeft = 37;
	var arrowUp = 38;
	var arrowRight = 39;
	var arrowDown = 40;

	var _preventedKeys;

	var preventedKeys = (_preventedKeys = {}, _preventedKeys[enter] = true, _preventedKeys[tab] = true, _preventedKeys);

	var preventStandardKeyEvents = (function (event) {
	  if (preventedKeys[event.keyCode]) {
	    event.preventDefault();
	  }
	});

	var bindEvents = function bindEvents(el, bindings, sharedOptions) {
	  bindings.forEach(function (binding) {
	    var options = _extends$2({}, sharedOptions, binding.options);

	    el.addEventListener(binding.eventName, binding.fn, options);
	  });
	};

	var unbindEvents = function unbindEvents(el, bindings, sharedOptions) {
	  bindings.forEach(function (binding) {
	    var options = _extends$2({}, sharedOptions, binding.options);

	    el.removeEventListener(binding.eventName, binding.fn, options);
	  });
	};

	var createPostDragEventPreventer = (function (getWindow) {
	  var isBound = false;

	  var bind = function bind() {
	    if (isBound) {
	      return;
	    }
	    isBound = true;
	    bindEvents(getWindow(), pointerEvents, { capture: true });
	  };

	  var unbind = function unbind() {
	    if (!isBound) {
	      return;
	    }
	    isBound = false;
	    unbindEvents(getWindow(), pointerEvents, { capture: true });
	  };

	  var pointerEvents = [{
	    eventName: 'click',
	    fn: function fn(event) {
	      event.preventDefault();
	      unbind();
	    }
	  }, {
	    eventName: 'mousedown',

	    fn: unbind
	  }, {
	    eventName: 'touchstart',
	    fn: unbind
	  }];

	  var preventNext = function preventNext() {
	    if (isBound) {
	      unbind();
	    }

	    bind();
	  };

	  var preventer = {
	    preventNext: preventNext,
	    abort: unbind
	  };

	  return preventer;
	});

	var createEventMarshal = (function () {
	  var isMouseDownHandled = false;

	  var handle = function handle() {
	    if (isMouseDownHandled) {
	      console.error('Cannot handle mouse down as it is already handled');
	      return;
	    }
	    isMouseDownHandled = true;
	  };

	  var isHandled = function isHandled() {
	    return isMouseDownHandled;
	  };

	  var reset = function reset() {
	    isMouseDownHandled = false;
	  };

	  return {
	    handle: handle,
	    isHandled: isHandled,
	    reset: reset
	  };
	});

	var supportedEventName = function () {
	  var base = 'visibilitychange';

	  if (typeof document === 'undefined') {
	    return base;
	  }

	  var candidates = [base, 'ms' + base, 'webkit' + base, 'moz' + base, 'o' + base];

	  var supported = candidates.find(function (eventName) {
	    return 'on' + eventName in document;
	  });

	  return supported || base;
	}();

	var primaryButton = 0;
	var noop$1 = function noop() {};

	var mouseDownMarshal = createEventMarshal();

	var createMouseSensor = (function (_ref) {
	  var callbacks = _ref.callbacks,
	      getWindow = _ref.getWindow,
	      canStartCapturing = _ref.canStartCapturing;

	  var state = {
	    isDragging: false,
	    pending: null
	  };
	  var setState = function setState(newState) {
	    state = newState;
	  };
	  var isDragging = function isDragging() {
	    return state.isDragging;
	  };
	  var isCapturing = function isCapturing() {
	    return Boolean(state.pending || state.isDragging);
	  };
	  var schedule = createScheduler(callbacks);
	  var postDragEventPreventer = createPostDragEventPreventer(getWindow);

	  var startDragging = function startDragging() {
	    var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop$1;

	    setState({
	      pending: null,
	      isDragging: true
	    });
	    fn();
	  };
	  var stopDragging = function stopDragging() {
	    var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop$1;
	    var shouldBlockClick = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	    schedule.cancel();
	    unbindWindowEvents();
	    mouseDownMarshal.reset();
	    if (shouldBlockClick) {
	      postDragEventPreventer.preventNext();
	    }
	    setState({
	      isDragging: false,
	      pending: null
	    });
	    fn();
	  };
	  var startPendingDrag = function startPendingDrag(point) {
	    setState({ pending: point, isDragging: false });
	    bindWindowEvents();
	  };
	  var stopPendingDrag = function stopPendingDrag() {
	    stopDragging(noop$1, false);
	  };

	  var kill = function kill() {
	    var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop$1;

	    if (state.pending) {
	      stopPendingDrag();
	      return;
	    }
	    stopDragging(fn);
	  };

	  var unmount = function unmount() {
	    kill();
	    postDragEventPreventer.abort();
	  };

	  var cancel = function cancel() {
	    kill(callbacks.onCancel);
	  };

	  var windowBindings = [{
	    eventName: 'mousemove',
	    fn: function fn(event) {
	      var button = event.button,
	          clientX = event.clientX,
	          clientY = event.clientY;

	      if (button !== primaryButton) {
	        return;
	      }

	      var point = {
	        x: clientX,
	        y: clientY
	      };

	      if (state.isDragging) {
	        event.preventDefault();
	        schedule.move(point);
	        return;
	      }

	      if (!state.pending) {
	        console.error('invalid state');
	        return;
	      }

	      if (!isSloppyClickThresholdExceeded(state.pending, point)) {
	        return;
	      }

	      event.preventDefault();
	      startDragging(function () {
	        return callbacks.onLift({
	          client: point,
	          autoScrollMode: 'FLUID'
	        });
	      });
	    }
	  }, {
	    eventName: 'mouseup',
	    fn: function fn(event) {
	      if (state.pending) {
	        stopPendingDrag();
	        return;
	      }

	      event.preventDefault();
	      stopDragging(callbacks.onDrop);
	    }
	  }, {
	    eventName: 'mousedown',
	    fn: function fn(event) {
	      if (state.isDragging) {
	        event.preventDefault();
	      }

	      stopDragging(callbacks.onCancel);
	    }
	  }, {
	    eventName: 'keydown',
	    fn: function fn(event) {
	      if (!state.isDragging) {
	        cancel();
	        return;
	      }

	      if (event.keyCode === escape) {
	        event.preventDefault();
	        cancel();
	        return;
	      }

	      preventStandardKeyEvents(event);
	    }
	  }, {
	    eventName: 'resize',
	    fn: cancel
	  }, {
	    eventName: 'scroll',

	    options: { passive: true, capture: false },
	    fn: function fn() {
	      if (state.pending) {
	        stopPendingDrag();
	        return;
	      }
	      schedule.windowScrollMove();
	    }
	  }, {
	    eventName: 'webkitmouseforcechanged',
	    fn: function fn(event) {
	      if (event.webkitForce == null || MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN == null) {
	        console.error('handling a mouse force changed event when it is not supported');
	        return;
	      }

	      var forcePressThreshold = MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN;
	      var isForcePressing = event.webkitForce >= forcePressThreshold;

	      if (isForcePressing) {
	        cancel();
	      }
	    }
	  }, {
	    eventName: supportedEventName,
	    fn: cancel
	  }];

	  var bindWindowEvents = function bindWindowEvents() {
	    var win = getWindow();
	    bindEvents(win, windowBindings, { capture: true });
	  };

	  var unbindWindowEvents = function unbindWindowEvents() {
	    var win = getWindow();
	    unbindEvents(win, windowBindings, { capture: true });
	  };

	  var onMouseDown = function onMouseDown(event) {
	    if (mouseDownMarshal.isHandled()) {
	      return;
	    }

	    if (!canStartCapturing(event)) {
	      return;
	    }

	    if (isCapturing()) {
	      console.error('should not be able to perform a mouse down while a drag or pending drag is occurring');
	      cancel();
	      return;
	    }

	    if (event.button !== primaryButton) {
	      return;
	    }

	    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
	      return;
	    }

	    mouseDownMarshal.handle();

	    event.preventDefault();

	    var point = {
	      x: event.clientX,
	      y: event.clientY
	    };

	    startPendingDrag(point);
	  };

	  var sensor = {
	    onMouseDown: onMouseDown,
	    kill: kill,
	    isCapturing: isCapturing,
	    isDragging: isDragging,
	    unmount: unmount
	  };

	  return sensor;
	});

	var getBorderBoxCenterPosition = (function (el) {
	  return getRect(el.getBoundingClientRect()).center;
	});

	var _scrollJumpKeys;


	var scrollJumpKeys = (_scrollJumpKeys = {}, _scrollJumpKeys[pageDown] = true, _scrollJumpKeys[pageUp] = true, _scrollJumpKeys[home] = true, _scrollJumpKeys[end] = true, _scrollJumpKeys);

	var noop$2 = function noop() {};

	var createKeyboardSensor = (function (_ref) {
	  var callbacks = _ref.callbacks,
	      getWindow = _ref.getWindow,
	      getDraggableRef = _ref.getDraggableRef,
	      canStartCapturing = _ref.canStartCapturing;

	  var state = {
	    isDragging: false
	  };
	  var setState = function setState(newState) {
	    state = newState;
	  };
	  var startDragging = function startDragging() {
	    var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop$2;

	    setState({
	      isDragging: true
	    });
	    bindWindowEvents();
	    fn();
	  };
	  var stopDragging = function stopDragging() {
	    var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop$2;

	    schedule.cancel();
	    unbindWindowEvents();
	    setState({ isDragging: false });
	    fn();
	  };
	  var kill = function kill() {
	    return stopDragging();
	  };
	  var cancel = function cancel() {
	    stopDragging(callbacks.onCancel);
	  };
	  var isDragging = function isDragging() {
	    return state.isDragging;
	  };
	  var schedule = createScheduler(callbacks);

	  var onKeyDown = function onKeyDown(event, props) {
	    var direction = props.direction;

	    if (!isDragging()) {
	      if (event.defaultPrevented) {
	        return;
	      }

	      if (!canStartCapturing(event)) {
	        return;
	      }

	      if (event.keyCode !== space) {
	        return;
	      }

	      var ref = getDraggableRef();

	      if (!ref) {
	        console.error('cannot start a keyboard drag without a draggable ref');
	        return;
	      }

	      var center = getBorderBoxCenterPosition(ref);

	      event.preventDefault();
	      startDragging(function () {
	        return callbacks.onLift({
	          client: center,
	          autoScrollMode: 'JUMP'
	        });
	      });
	      return;
	    }

	    if (event.keyCode === escape) {
	      event.preventDefault();
	      cancel();
	      return;
	    }

	    if (event.keyCode === space) {
	      event.preventDefault();
	      stopDragging(callbacks.onDrop);
	      return;
	    }

	    if (!direction) {
	      console.error('Cannot handle keyboard movement event if direction is not provided');

	      event.preventDefault();
	      cancel();
	      return;
	    }

	    var executeBasedOnDirection = function executeBasedOnDirection(fns) {
	      if (direction === 'vertical') {
	        fns.vertical();
	        return;
	      }
	      fns.horizontal();
	    };

	    if (event.keyCode === arrowDown) {
	      event.preventDefault();
	      executeBasedOnDirection({
	        vertical: schedule.moveForward,
	        horizontal: schedule.crossAxisMoveForward
	      });
	      return;
	    }

	    if (event.keyCode === arrowUp) {
	      event.preventDefault();
	      executeBasedOnDirection({
	        vertical: schedule.moveBackward,
	        horizontal: schedule.crossAxisMoveBackward
	      });
	      return;
	    }

	    if (event.keyCode === arrowRight) {
	      event.preventDefault();
	      executeBasedOnDirection({
	        vertical: schedule.crossAxisMoveForward,
	        horizontal: schedule.moveForward
	      });
	      return;
	    }

	    if (event.keyCode === arrowLeft) {
	      event.preventDefault();
	      executeBasedOnDirection({
	        vertical: schedule.crossAxisMoveBackward,
	        horizontal: schedule.moveBackward
	      });
	    }

	    if (scrollJumpKeys[event.keyCode]) {
	      event.preventDefault();
	      return;
	    }

	    preventStandardKeyEvents(event);
	  };

	  var windowBindings = [{
	    eventName: 'mousedown',
	    fn: cancel
	  }, {
	    eventName: 'mouseup',
	    fn: cancel
	  }, {
	    eventName: 'click',
	    fn: cancel
	  }, {
	    eventName: 'touchstart',
	    fn: cancel
	  }, {
	    eventName: 'resize',
	    fn: cancel
	  }, {
	    eventName: 'wheel',
	    fn: cancel
	  }, {
	    eventName: 'scroll',

	    options: { capture: false },
	    fn: callbacks.onWindowScroll
	  }, {
	    eventName: supportedEventName,
	    fn: cancel
	  }];

	  var bindWindowEvents = function bindWindowEvents() {
	    bindEvents(getWindow(), windowBindings, { capture: true });
	  };

	  var unbindWindowEvents = function unbindWindowEvents() {
	    unbindEvents(getWindow(), windowBindings, { capture: true });
	  };

	  var sensor = {
	    onKeyDown: onKeyDown,
	    kill: kill,
	    isDragging: isDragging,

	    isCapturing: isDragging,

	    unmount: kill
	  };

	  return sensor;
	});

	var timeForLongPress = 150;
	var forcePressThreshold = 0.15;
	var touchStartMarshal = createEventMarshal();
	var noop$3 = function noop() {};

	var webkitHack = function () {
	  var stub = {
	    preventTouchMove: noop$3,
	    releaseTouchMove: noop$3
	  };

	  if (typeof window === 'undefined') {
	    return stub;
	  }

	  if (!('ontouchstart' in window)) {
	    return stub;
	  }

	  var isBlocking = false;

	  window.addEventListener('touchmove', function (event) {
	    if (!isBlocking) {
	      return;
	    }

	    if (event.defaultPrevented) {
	      return;
	    }

	    event.preventDefault();
	  }, { passive: false, capture: false });

	  var preventTouchMove = function preventTouchMove() {
	    isBlocking = true;
	  };
	  var releaseTouchMove = function releaseTouchMove() {
	    isBlocking = false;
	  };

	  return { preventTouchMove: preventTouchMove, releaseTouchMove: releaseTouchMove };
	}();

	var initial = {
	  isDragging: false,
	  pending: null,
	  hasMoved: false,
	  longPressTimerId: null
	};

	var createTouchSensor = (function (_ref) {
	  var callbacks = _ref.callbacks,
	      getWindow = _ref.getWindow,
	      canStartCapturing = _ref.canStartCapturing;

	  var state = initial;

	  var setState = function setState(partial) {
	    state = _extends$2({}, state, partial);
	  };
	  var isDragging = function isDragging() {
	    return state.isDragging;
	  };
	  var isCapturing = function isCapturing() {
	    return Boolean(state.pending || state.isDragging || state.longPressTimerId);
	  };
	  var schedule = createScheduler(callbacks);
	  var postDragEventPreventer = createPostDragEventPreventer(getWindow);

	  var startDragging = function startDragging() {
	    var pending = state.pending;

	    if (!pending) {
	      console.error('cannot start a touch drag without a pending position');
	      kill();
	      return;
	    }

	    setState({
	      isDragging: true,

	      hasMoved: false,

	      pending: null,
	      longPressTimerId: null
	    });

	    callbacks.onLift({
	      client: pending,
	      autoScrollMode: 'FLUID'
	    });
	  };
	  var stopDragging = function stopDragging() {
	    var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop$3;

	    schedule.cancel();
	    touchStartMarshal.reset();
	    webkitHack.releaseTouchMove();
	    unbindWindowEvents();
	    postDragEventPreventer.preventNext();
	    setState(initial);
	    fn();
	  };

	  var startPendingDrag = function startPendingDrag(event) {
	    var touch = event.touches[0];
	    var clientX = touch.clientX,
	        clientY = touch.clientY;

	    var point = {
	      x: clientX,
	      y: clientY
	    };

	    var longPressTimerId = setTimeout(startDragging, timeForLongPress);

	    setState({
	      longPressTimerId: longPressTimerId,
	      pending: point,
	      isDragging: false,
	      hasMoved: false
	    });
	    bindWindowEvents();
	  };

	  var stopPendingDrag = function stopPendingDrag() {
	    if (state.longPressTimerId) {
	      clearTimeout(state.longPressTimerId);
	    }
	    schedule.cancel();
	    touchStartMarshal.reset();
	    webkitHack.releaseTouchMove();
	    unbindWindowEvents();

	    setState(initial);
	  };

	  var kill = function kill() {
	    var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop$3;

	    if (state.pending) {
	      stopPendingDrag();
	      return;
	    }
	    stopDragging(fn);
	  };

	  var unmount = function unmount() {
	    kill();
	    postDragEventPreventer.abort();
	  };

	  var cancel = function cancel() {
	    kill(callbacks.onCancel);
	  };

	  var windowBindings = [{
	    eventName: 'touchmove',

	    options: { passive: false },
	    fn: function fn(event) {
	      if (!state.isDragging) {
	        stopPendingDrag();
	        return;
	      }

	      if (!state.hasMoved) {
	        setState({
	          hasMoved: true
	        });
	      }

	      var _event$touches$ = event.touches[0],
	          clientX = _event$touches$.clientX,
	          clientY = _event$touches$.clientY;


	      var point = {
	        x: clientX,
	        y: clientY
	      };

	      event.preventDefault();
	      schedule.move(point);
	    }
	  }, {
	    eventName: 'touchend',
	    fn: function fn(event) {
	      if (!state.isDragging) {
	        stopPendingDrag();
	        return;
	      }

	      event.preventDefault();
	      stopDragging(callbacks.onDrop);
	    }
	  }, {
	    eventName: 'touchcancel',
	    fn: function fn(event) {
	      if (!state.isDragging) {
	        stopPendingDrag();
	        return;
	      }

	      event.preventDefault();
	      stopDragging(callbacks.onCancel);
	    }
	  }, {
	    eventName: 'touchstart',
	    fn: cancel
	  }, {
	    eventName: 'orientationchange',
	    fn: cancel
	  }, {
	    eventName: 'resize',
	    fn: cancel
	  }, {
	    eventName: 'scroll',
	    options: { passive: true, capture: false },
	    fn: function fn() {
	      if (state.pending) {
	        stopPendingDrag();
	        return;
	      }
	      schedule.windowScrollMove();
	    }
	  }, {
	    eventName: 'contextmenu',
	    fn: function fn(event) {
	      event.preventDefault();
	    }
	  }, {
	    eventName: 'keydown',
	    fn: function fn(event) {
	      if (!state.isDragging) {
	        cancel();
	        return;
	      }

	      if (event.keyCode === escape) {
	        event.preventDefault();
	      }
	      cancel();
	    }
	  }, {
	    eventName: 'touchforcechange',
	    fn: function fn(event) {
	      if (state.hasMoved) {
	        event.preventDefault();
	        return;
	      }

	      var touch = event.touches[0];

	      if (touch.force >= forcePressThreshold) {
	        cancel();
	      }
	    }
	  }, {
	    eventName: supportedEventName,
	    fn: cancel
	  }];

	  var bindWindowEvents = function bindWindowEvents() {
	    bindEvents(getWindow(), windowBindings, { capture: true });
	  };

	  var unbindWindowEvents = function unbindWindowEvents() {
	    unbindEvents(getWindow(), windowBindings, { capture: true });
	  };

	  var onTouchStart = function onTouchStart(event) {
	    if (touchStartMarshal.isHandled()) {
	      return;
	    }

	    if (!canStartCapturing(event)) {
	      return;
	    }

	    if (isCapturing()) {
	      console.error('should not be able to perform a touch start while a drag or pending drag is occurring');
	      cancel();
	      return;
	    }

	    touchStartMarshal.handle();

	    webkitHack.preventTouchMove();
	    startPendingDrag(event);
	  };

	  var sensor = {
	    onTouchStart: onTouchStart,
	    kill: kill,
	    isCapturing: isCapturing,
	    isDragging: isDragging,
	    unmount: unmount
	  };

	  return sensor;
	});

	var _DragHandle$contextTy;

	var preventHtml5Dnd = function preventHtml5Dnd(event) {
	  event.preventDefault();
	};

	var DragHandle = function (_Component) {
	  _inherits(DragHandle, _Component);

	  function DragHandle(props, context) {
	    _classCallCheck(this, DragHandle);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.isFocused = false;

	    _this.onFocus = function () {
	      _this.isFocused = true;
	    };

	    _this.onBlur = function () {
	      _this.isFocused = false;
	    };

	    _this.onKeyDown = function (event) {
	      if (_this.mouseSensor.isCapturing()) {
	        return;
	      }

	      _this.keyboardSensor.onKeyDown(event, _this.props);
	    };

	    _this.onMouseDown = function (event) {
	      if (_this.keyboardSensor.isCapturing() || _this.mouseSensor.isCapturing()) {
	        return;
	      }

	      _this.mouseSensor.onMouseDown(event);
	    };

	    _this.onTouchStart = function (event) {
	      if (_this.mouseSensor.isCapturing() || _this.keyboardSensor.isCapturing()) {
	        console.error('mouse or keyboard already listening when attempting to touch drag');
	        return;
	      }

	      _this.touchSensor.onTouchStart(event);
	    };

	    _this.canStartCapturing = function (event) {
	      if (_this.isAnySensorCapturing()) {
	        return false;
	      }

	      if (!_this.canLift(_this.props.draggableId)) {
	        return false;
	      }

	      return shouldAllowDraggingFromTarget(event, _this.props);
	    };

	    _this.isAnySensorCapturing = function () {
	      return _this.sensors.some(function (sensor) {
	        return sensor.isCapturing();
	      });
	    };

	    _this.getProvided = memoizeOne(function (isEnabled) {
	      if (!isEnabled) {
	        return null;
	      }

	      var provided = {
	        onMouseDown: _this.onMouseDown,
	        onKeyDown: _this.onKeyDown,
	        onTouchStart: _this.onTouchStart,
	        onFocus: _this.onFocus,
	        onBlur: _this.onBlur,
	        tabIndex: 0,
	        'data-react-beautiful-dnd-drag-handle': _this.styleContext,

	        'aria-roledescription': 'Draggable item. Press space bar to lift',
	        draggable: false,
	        onDragStart: preventHtml5Dnd
	      };

	      return provided;
	    });


	    var getWindow = function getWindow() {
	      return getWindowFromRef(_this.props.getDraggableRef());
	    };

	    var args = {
	      callbacks: _this.props.callbacks,
	      getDraggableRef: _this.props.getDraggableRef,
	      getWindow: getWindow,
	      canStartCapturing: _this.canStartCapturing
	    };

	    _this.mouseSensor = createMouseSensor(args);
	    _this.keyboardSensor = createKeyboardSensor(args);
	    _this.touchSensor = createTouchSensor(args);
	    _this.sensors = [_this.mouseSensor, _this.keyboardSensor, _this.touchSensor];
	    _this.styleContext = context[styleContextKey];

	    _this.canLift = context[canLiftContextKey];
	    return _this;
	  }

	  DragHandle.prototype.componentDidMount = function componentDidMount() {
	    var draggableRef = this.props.getDraggableRef();

	    this.lastDraggableRef = draggableRef;

	    if (!draggableRef) {
	      console.error('Cannot get draggable ref from drag handle');
	      return;
	    }

	    if (!this.props.isEnabled) {
	      return;
	    }

	    var dragHandleRef = getDragHandleRef(draggableRef);
	    index(dragHandleRef, 'DragHandle could not find drag handle element');

	    retainer.tryRestoreFocus(this.props.draggableId, dragHandleRef);
	  };

	  DragHandle.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    var _this2 = this;

	    var ref = this.props.getDraggableRef();
	    if (ref !== this.lastDraggableRef) {
	      this.lastDraggableRef = ref;

	      if (!ref || !this.isFocused) {
	        return;
	      }

	      if (!this.props.isEnabled) {
	        return;
	      }

	      var dragHandleRef = getDragHandleRef(ref);
	      index(dragHandleRef, 'DragHandle could not find drag handle element');

	      dragHandleRef.focus();
	    }

	    var isCapturing = this.isAnySensorCapturing();

	    if (!isCapturing) {
	      return;
	    }

	    var isDragStopping = prevProps.isDragging && !this.props.isDragging;

	    if (isDragStopping) {
	      this.sensors.forEach(function (sensor) {
	        if (sensor.isCapturing()) {
	          sensor.kill();
	        }
	      });
	      return;
	    }

	    if (!this.props.isEnabled) {
	      this.sensors.forEach(function (sensor) {
	        if (sensor.isCapturing()) {
	          var wasDragging = sensor.isDragging();

	          sensor.kill();

	          if (wasDragging) {
	            _this2.props.callbacks.onCancel();
	          }
	        }
	      });
	    }
	  };

	  DragHandle.prototype.componentWillUnmount = function componentWillUnmount() {
	    var _this3 = this;

	    this.sensors.forEach(function (sensor) {
	      var wasDragging = sensor.isDragging();

	      sensor.unmount();

	      if (wasDragging) {
	        _this3.props.callbacks.onCancel();
	      }
	    });

	    var shouldRetainFocus = function () {
	      if (!_this3.props.isEnabled) {
	        return false;
	      }

	      if (!_this3.isFocused) {
	        return false;
	      }

	      return _this3.props.isDragging || _this3.props.isDropAnimating;
	    }();

	    if (shouldRetainFocus) {
	      retainer.retain(this.props.draggableId);
	    }
	  };

	  DragHandle.prototype.render = function render() {
	    var _props = this.props,
	        children = _props.children,
	        isEnabled = _props.isEnabled;


	    return children(this.getProvided(isEnabled));
	  };

	  return DragHandle;
	}(React.Component);

	DragHandle.contextTypes = (_DragHandle$contextTy = {}, _DragHandle$contextTy[styleContextKey] = propTypes.string.isRequired, _DragHandle$contextTy[canLiftContextKey] = propTypes.func.isRequired, _DragHandle$contextTy);

	var getViewport = (function () {
	  var scroll = getWindowScroll$1();

	  var top = scroll.y;
	  var left = scroll.x;

	  var doc = document.documentElement;

	  index(doc, 'Could not find document.documentElement');

	  var width = doc.clientWidth;
	  var height = doc.clientHeight;

	  var right = left + width;
	  var bottom = top + height;

	  var subject = getRect({
	    top: top, left: left, right: right, bottom: bottom
	  });

	  var maxScroll = getMaxScroll({
	    scrollHeight: doc.scrollHeight,
	    scrollWidth: doc.scrollWidth,
	    width: subject.width,
	    height: subject.height
	  });

	  var viewport = {
	    subject: subject,
	    maxScroll: maxScroll,
	    scroll: scroll
	  };

	  return viewport;
	});

	var _Draggable$contextTyp;


	var zIndexOptions = {
	  dragging: 5000,
	  dropAnimating: 4500
	};

	var Draggable = function (_Component) {
	  _inherits(Draggable, _Component);

	  function Draggable(props, context) {
	    _classCallCheck(this, Draggable);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.ref = null;

	    _this.onMoveEnd = function () {
	      if (!_this.props.isDropAnimating) {
	        return;
	      }

	      _this.props.dropAnimationFinished();
	    };

	    _this.onLift = function (options) {
	      start('LIFT');
	      _this.throwIfCannotDrag();
	      var client = options.client,
	          autoScrollMode = options.autoScrollMode;
	      var _this$props = _this.props,
	          lift = _this$props.lift,
	          draggableId = _this$props.draggableId;

	      var ref = _this.ref;

	      index(ref, 'Cannot lift at this time as there is no ref');

	      var initial = {
	        selection: client,
	        borderBoxCenter: getBorderBoxCenterPosition(ref)
	      };

	      lift(draggableId, initial, getViewport(), autoScrollMode);
	    };

	    _this.onMove = function (client) {
	      _this.throwIfCannotDrag();

	      var _this$props2 = _this.props,
	          draggableId = _this$props2.draggableId,
	          dimension = _this$props2.dimension,
	          move = _this$props2.move;

	      if (!dimension) {
	        return;
	      }

	      move(draggableId, client, getViewport());
	    };

	    _this.onMoveForward = function () {
	      _this.throwIfCannotDrag();
	      _this.props.moveForward(_this.props.draggableId);
	    };

	    _this.onMoveBackward = function () {
	      _this.throwIfCannotDrag();
	      _this.props.moveBackward(_this.props.draggableId);
	    };

	    _this.onCrossAxisMoveForward = function () {
	      _this.throwIfCannotDrag();
	      _this.props.crossAxisMoveForward(_this.props.draggableId);
	    };

	    _this.onCrossAxisMoveBackward = function () {
	      _this.throwIfCannotDrag();
	      _this.props.crossAxisMoveBackward(_this.props.draggableId);
	    };

	    _this.onWindowScroll = function () {
	      _this.throwIfCannotDrag();
	      _this.props.moveByWindowScroll(_this.props.draggableId, getViewport());
	    };

	    _this.onDrop = function () {
	      _this.throwIfCannotDrag();
	      _this.props.drop();
	    };

	    _this.onCancel = function () {
	      _this.props.cancel();
	    };

	    _this.setRef = function (ref) {
	      if (ref === null) {
	        return;
	      }

	      if (ref === _this.ref) {
	        return;
	      }

	      _this.ref = ref;
	    };

	    _this.getDraggableRef = function () {
	      return _this.ref;
	    };

	    _this.getDraggingStyle = memoizeOne(function (dimension, isDropAnimating, movementStyle) {
	      var _dimension$client$bor = dimension.client.borderBox,
	          width = _dimension$client$bor.width,
	          height = _dimension$client$bor.height,
	          top = _dimension$client$bor.top,
	          left = _dimension$client$bor.left;

	      var style = {
	        position: 'fixed',
	        boxSizing: 'border-box',
	        zIndex: isDropAnimating ? zIndexOptions.dropAnimating : zIndexOptions.dragging,
	        width: width,
	        height: height,
	        top: top,
	        left: left,
	        margin: 0,
	        pointerEvents: 'none',
	        transition: 'none',
	        transform: movementStyle.transform ? '' + movementStyle.transform : null
	      };
	      return style;
	    });
	    _this.getNotDraggingStyle = memoizeOne(function (movementStyle, shouldAnimateDisplacement) {
	      var style = {
	        transform: movementStyle.transform,

	        transition: shouldAnimateDisplacement ? null : 'none'
	      };
	      return style;
	    });
	    _this.getProvided = memoizeOne(function (isDragging, isDropAnimating, shouldAnimateDisplacement, dimension, dragHandleProps, movementStyle) {
	      var useDraggingStyle = isDragging || isDropAnimating;

	      var draggableStyle = function () {
	        if (!useDraggingStyle) {
	          return _this.getNotDraggingStyle(movementStyle, shouldAnimateDisplacement);
	        }

	        index(dimension, 'draggable dimension required for dragging');

	        return _this.getDraggingStyle(dimension, isDropAnimating, movementStyle);
	      }();

	      var provided = {
	        innerRef: _this.setRef,
	        draggableProps: {
	          'data-react-beautiful-dnd-draggable': _this.styleContext,
	          style: draggableStyle
	        },
	        dragHandleProps: dragHandleProps
	      };
	      return provided;
	    });
	    _this.getSnapshot = memoizeOne(function (isDragging, isDropAnimating, draggingOver) {
	      return {
	        isDragging: isDragging || isDropAnimating,
	        draggingOver: draggingOver
	      };
	    });
	    _this.getSpeed = memoizeOne(function (isDragging, shouldAnimateDragMovement, isDropAnimating) {
	      if (isDropAnimating) {
	        return 'STANDARD';
	      }

	      if (isDragging && shouldAnimateDragMovement) {
	        return 'FAST';
	      }

	      return 'INSTANT';
	    });

	    _this.renderChildren = function (movementStyle, dragHandleProps) {
	      var _this$props3 = _this.props,
	          isDragging = _this$props3.isDragging,
	          isDropAnimating = _this$props3.isDropAnimating,
	          dimension = _this$props3.dimension,
	          draggingOver = _this$props3.draggingOver,
	          shouldAnimateDisplacement = _this$props3.shouldAnimateDisplacement,
	          children = _this$props3.children;


	      var child = children(_this.getProvided(isDragging, isDropAnimating, shouldAnimateDisplacement, dimension, dragHandleProps, movementStyle), _this.getSnapshot(isDragging, isDropAnimating, draggingOver));

	      var isDraggingOrDropping = isDragging || isDropAnimating;

	      var placeholder = function () {
	        if (!isDraggingOrDropping) {
	          return null;
	        }

	        if (!dimension) {
	          console.error('Draggable: Dimension is required for dragging');
	          return null;
	        }

	        return React__default.createElement(Placeholder, { placeholder: dimension.placeholder });
	      }();

	      return React__default.createElement(
	        React.Fragment,
	        null,
	        child,
	        placeholder
	      );
	    };

	    var callbacks = {
	      onLift: _this.onLift,
	      onMove: _this.onMove,
	      onDrop: _this.onDrop,
	      onCancel: _this.onCancel,
	      onMoveBackward: _this.onMoveBackward,
	      onMoveForward: _this.onMoveForward,
	      onCrossAxisMoveForward: _this.onCrossAxisMoveForward,
	      onCrossAxisMoveBackward: _this.onCrossAxisMoveBackward,
	      onWindowScroll: _this.onWindowScroll
	    };

	    _this.callbacks = callbacks;
	    _this.styleContext = context[styleContextKey];
	    return _this;
	  }

	  Draggable.prototype.componentDidMount = function componentDidMount() {
	    if (!this.ref) {
	      console.error('\n        Draggable has not been provided with a ref.\n        Please use the DraggableProvided > innerRef function\n      ');
	    }
	  };

	  Draggable.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.ref = null;
	  };

	  Draggable.prototype.throwIfCannotDrag = function throwIfCannotDrag() {
	    index(this.ref, '\n      Draggable: cannot drag as no DOM node has been provided\n      Please ensure you provide a DOM node using the DraggableProvided > innerRef function\n    ');
	    index(!this.props.isDragDisabled, 'Draggable: cannot drag as dragging is not enabled');
	  };

	  Draggable.prototype.render = function render() {
	    var _this2 = this;

	    var _props = this.props,
	        draggableId = _props.draggableId,
	        index$$1 = _props.index,
	        offset = _props.offset,
	        isDragging = _props.isDragging,
	        isDropAnimating = _props.isDropAnimating,
	        isDragDisabled = _props.isDragDisabled,
	        direction = _props.direction,
	        shouldAnimateDragMovement = _props.shouldAnimateDragMovement,
	        disableInteractiveElementBlocking = _props.disableInteractiveElementBlocking;

	    var droppableId = this.context[droppableIdKey];

	    var speed = this.getSpeed(isDragging, shouldAnimateDragMovement, isDropAnimating);

	    return React__default.createElement(
	      DraggableDimensionPublisher,
	      {
	        key: draggableId,
	        draggableId: draggableId,
	        droppableId: droppableId,
	        index: index$$1,
	        getDraggableRef: this.getDraggableRef
	      },
	      React__default.createElement(
	        Movable,
	        {
	          speed: speed,
	          destination: offset,
	          onMoveEnd: this.onMoveEnd
	        },
	        function (movementStyle) {
	          return React__default.createElement(
	            DragHandle,
	            {
	              draggableId: draggableId,
	              isDragging: isDragging,
	              isDropAnimating: isDropAnimating,
	              direction: direction,
	              isEnabled: !isDragDisabled,
	              callbacks: _this2.callbacks,
	              getDraggableRef: _this2.getDraggableRef,

	              canDragInteractiveElements: disableInteractiveElementBlocking
	            },
	            function (dragHandleProps) {
	              return _this2.renderChildren(movementStyle, dragHandleProps);
	            }
	          );
	        }
	      )
	    );
	  };

	  return Draggable;
	}(React.Component);

	Draggable.contextTypes = (_Draggable$contextTyp = {}, _Draggable$contextTyp[droppableIdKey] = propTypes.string.isRequired, _Draggable$contextTyp[styleContextKey] = propTypes.string.isRequired, _Draggable$contextTyp);

	var origin$9 = { x: 0, y: 0 };

	var defaultMapProps = {
	  isDropAnimating: false,
	  isDragging: false,
	  offset: origin$9,
	  shouldAnimateDragMovement: false,

	  shouldAnimateDisplacement: true,

	  dimension: null,
	  direction: null,
	  draggingOver: null
	};

	var makeSelector$1 = function makeSelector() {
	  var memoizedOffset = memoizeOne(function (x, y) {
	    return {
	      x: x, y: y
	    };
	  });

	  var getNotDraggingProps = memoizeOne(function (offset, shouldAnimateDisplacement) {
	    return {
	      isDropAnimating: false,
	      isDragging: false,
	      offset: offset,
	      shouldAnimateDisplacement: shouldAnimateDisplacement,

	      shouldAnimateDragMovement: false,
	      dimension: null,
	      direction: null,
	      draggingOver: null
	    };
	  });

	  var getDraggingProps = memoizeOne(function (offset, shouldAnimateDragMovement, dimension, direction, draggingOver) {
	    return {
	      isDragging: true,
	      isDropAnimating: false,
	      shouldAnimateDisplacement: false,
	      offset: offset,
	      shouldAnimateDragMovement: shouldAnimateDragMovement,
	      dimension: dimension,
	      direction: direction,
	      draggingOver: draggingOver
	    };
	  });

	  var draggingSelector = function draggingSelector(state, ownProps) {
	    if (state.phase !== 'DRAGGING' && state.phase !== 'DROP_ANIMATING') {
	      return null;
	    }

	    if (state.phase === 'DRAGGING') {
	      var drag = state.drag;
	      if (!drag) {
	        console.error('invalid drag state found in selector');
	        return null;
	      }

	      if (drag.initial.descriptor.id !== ownProps.draggableId) {
	        return null;
	      }

	      var offset = drag.current.client.offset;
	      var dimension = state.dimension.draggable[ownProps.draggableId];
	      var _direction = function () {
	        if (drag.impact.direction) {
	          return drag.impact.direction;
	        }

	        var home = state.dimension.droppable[drag.initial.descriptor.droppableId];
	        return home.axis.direction;
	      }();
	      var shouldAnimateDragMovement = drag.current.shouldAnimate;
	      var _draggingOver = drag.impact.destination ? drag.impact.destination.droppableId : null;

	      return getDraggingProps(memoizedOffset(offset.x, offset.y), shouldAnimateDragMovement, dimension, _direction, _draggingOver);
	    }

	    var pending = state.drop && state.drop.pending;

	    if (!pending) {
	      console.error('cannot provide props for dropping item when there is invalid state');
	      return null;
	    }

	    if (pending.result.draggableId !== ownProps.draggableId) {
	      return null;
	    }

	    var draggingOver = pending.result.destination ? pending.result.destination.droppableId : null;
	    var direction = pending.impact.direction ? pending.impact.direction : null;

	    return {
	      isDragging: false,
	      isDropAnimating: true,
	      offset: pending.newHomeOffset,

	      dimension: state.dimension.draggable[ownProps.draggableId],
	      draggingOver: draggingOver,
	      direction: direction,

	      shouldAnimateDragMovement: false,

	      shouldAnimateDisplacement: false
	    };
	  };

	  var getOutOfTheWayMovement = function getOutOfTheWayMovement(id, movement) {
	    var map = getDisplacementMap(movement.displaced);
	    var displacement = map[id];

	    if (!displacement) {
	      return null;
	    }

	    if (!displacement.isVisible) {
	      return null;
	    }

	    var amount = movement.isBeyondStartPosition ? negate(movement.amount) : movement.amount;

	    return getNotDraggingProps(memoizedOffset(amount.x, amount.y), displacement.shouldAnimate);
	  };

	  var movingOutOfTheWaySelector = function movingOutOfTheWaySelector(state, ownProps) {
	    if (state.phase !== 'DRAGGING' && state.phase !== 'DROP_ANIMATING') {
	      return null;
	    }

	    if (state.phase === 'DRAGGING') {
	      if (!state.drag) {
	        console.error('cannot correctly move item out of the way when there is invalid state');
	        return null;
	      }

	      if (state.drag.initial.descriptor.id === ownProps.draggableId) {
	        return null;
	      }

	      return getOutOfTheWayMovement(ownProps.draggableId, state.drag.impact.movement);
	    }

	    if (!state.drop || !state.drop.pending) {
	      console.error('cannot provide props for dropping item when there is invalid state');
	      return null;
	    }

	    if (state.drop.pending.result.draggableId === ownProps.draggableId) {
	      return null;
	    }

	    return getOutOfTheWayMovement(ownProps.draggableId, state.drop.pending.impact.movement);
	  };

	  return lib_4([draggingSelector, movingOutOfTheWaySelector], function (dragging, movingOutOfTheWay) {
	    if (dragging) {
	      return dragging;
	    }

	    if (movingOutOfTheWay) {
	      return movingOutOfTheWay;
	    }

	    return defaultMapProps;
	  });
	};

	var makeMapStateToProps$1 = function makeMapStateToProps() {
	  var selector = makeSelector$1();
	  return function (state, props) {
	    return selector(state, props);
	  };
	};

	var mapDispatchToProps = {
	  lift: lift,
	  move: move$1,
	  moveForward: moveForward,
	  moveBackward: moveBackward,
	  crossAxisMoveForward: crossAxisMoveForward,
	  crossAxisMoveBackward: crossAxisMoveBackward,
	  moveByWindowScroll: moveByWindowScroll,
	  drop: drop,
	  dropAnimationFinished: dropAnimationFinished,
	  cancel: cancel
	};

	var ConnectedDraggable = connect(makeMapStateToProps$1, mapDispatchToProps, null, { storeKey: storeKey })(Draggable);

	ConnectedDraggable.defaultProps = {
	  isDragDisabled: false,

	  disableInteractiveElementBlocking: false
	};

	exports.DragDropContext = DragDropContext;
	exports.Droppable = connectedDroppable;
	exports.Draggable = ConnectedDraggable;
	exports.resetServerContext = resetServerContext;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
