// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5NCuI":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "b00901706b9ca3e8";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"hTXjU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _cssJs = require("./css.js");
var _cssJsDefault = parcelHelpers.interopDefault(_cssJs);
const player = {
    n: 0,
    time: 50,
    string2: '',
    timer: undefined,
    init: ()=>{
        player.bindEvent();
        player.timer = player.play();
    },
    ui: {
        text: document.querySelector('.text'),
        demo: document.querySelector('.demo')
    },
    events: {
        '.playBtn': 'play',
        '.stopBtn': 'pause',
        '.slowestBtn': 'slowest',
        '.slowBtn': 'slow',
        '.fastBtn': 'fast'
    },
    bindEvent: ()=>{
        for(let key in player.events)if (player.events.hasOwnProperty(key)) document.querySelector(key).onclick = player[player.events[key]];
    },
    run: ()=>{
        if (_cssJsDefault.default[player.n] === '\n') player.string2 += '<br>';
        else if (_cssJsDefault.default[player.n] === ' ') player.string2 += '&nbsp';
        else player.string2 += _cssJsDefault.default[player.n];
        player.ui.text.innerHTML = player.string2;
        player.ui.demo.innerHTML = _cssJsDefault.default.substring(0, player.n);
        player.n += 1;
        if (player.n > _cssJsDefault.default.length - 1) {
            window.clearInterval(player.timer);
            return;
        }
        player.ui.text.scrollTop = player.ui.text.scrollHeight;
    },
    pause: ()=>{
        window.clearInterval(player.timer);
    },
    play: ()=>{
        if (player.n > _cssJsDefault.default.length - 1) {
            player.pause();
            player.n = 0;
            player.string2 = '';
            player.ui.text.innerHTML = '';
            player.ui.demo.innerHTML = '';
        }
        return player.timer = setInterval(player.run, player.time);
    },
    slowest: ()=>{
        player.pause();
        player.time = 100;
        player.play();
    },
    slow: ()=>{
        player.pause();
        player.time = 30;
        player.play();
    },
    fast: ()=>{
        player.pause();
        player.time = 0;
        player.play();
    }
};
player.init();

},{"./css.js":"590Nz","@parcel/transformer-js/src/esmodule-helpers.js":"9eikJ"}],"590Nz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const string = `\n.spongeBob{\n    background: rgb(250,238,56);\n}\n.eye{\n    position: absolute;\n    left: 50%;\n    top: 20px;\n    margin-left: -60px;\n    width: 120px;\n    height: 120px;\n    border: 5px solid #000;\n    background: #fff;\n    border-radius: 50%;\n    z-index: 5;\n}\n.leftEye{\n    transform: translateX(-60px);\n}\n.rightEye{\n    transform: translateX(60px);\n}\n.eyeBall{\n    width: 56px;\n    height: 56px;\n    border: 5px solid #000;\n    background: rgb(98,198,236);\n    border-radius: 50%;\n    position: absolute;\n    top: 50%;\n    margin-top: -28px;\n}\n.ebLeft{\n    right: 10px;\n}\n.ebRight{\n    left: 10px;\n}\n.pupil{\n    background: #000;\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n    position: absolute;\n    top: 11px;\n}\n.pupilLeft{\n    right: 7px;\n}\n.pupilRight{\n    left: 7px;\n}\n.eyelashes{\n    position: absolute;\n    left: 50%;\n    width: 240px;\n    height: 50px;\n    margin-left: -120px;\n}\n.eyelash{\n    width: 7px;\n    height: 40px;\n    position: absolute;\n    background: #000;\n}\n.el1{\n    left: 20px;\n    top: 8px;\n    transform: rotate(-28deg);\n}\n.el2{\n    left: 50px;\n}\n.el3{\n    left: 80px;\n    top: 2px;\n    transform: rotate(28deg);\n}\n.el4{\n    left: 150px;\n    top: 2px;\n    transform: rotate(-28deg);\n}\n.el5{\n    left: 180px;\n    transform: rotate(-2deg);\n}\n.el6{\n    left: 210px;\n    top: 8px;\n    transform: rotate(28deg);\n}\n.nose{\n    position: absolute;\n    left: 50%;\n    margin-left: -22px;\n    top: 93px;\n    width:44px;\n    height: 48px;\n    border: 5px solid #000;\n    border-bottom: none;\n    border-radius: 50% 50% 50% 40% / 40% 40% 60% 60% ;\n    background: rgb(250,238,56);\n    z-index: 10;\n}\n.face{\n    position: absolute;\n    left: 50%;\n    top: 108px;\n    width:58px;\n    height: 58px;\n    border: 5px solid rgb(177,87,1);\n    background: rgb(250,238,56);\n    border-bottom: none;\n    border-left: none;\n    border-radius:55% 70% 64% 31% / 60% 69% 50% 45%;\n    z-index: 5;\n}\n.leftFace{\n    margin-left: -140px;\n    transform: rotate(-58deg);\n}\n.rightFace{\n    width:58px;\n    height: 58px;\n    margin-left: 85px;\n    transform: rotate(-32deg);\n}\n.dot1,\n.dot2,\n.dot1::before,\n.dot1::after,\n.dot2::before,\n.dot2::after{\n    position: absolute;\n    background: rgb(177,87,1);\n    border-radius:50%;\n}\n.dot1{\n    width: 5px;\n    height: 6px;\n    top: 4px;\n    left: 22px;\n}\n.dot1::before{\n    content: '';\n    width: 6px;\n    height: 5px;\n    top: 11px;\n    left: 18px;\n}\n.dot1::after{\n    content: '';\n    width: 6px;\n    height: 5px;\n    top: 14px;\n    left: 2px;\n}\n.dot2{\n    width: 7px;\n    height: 4px;\n    top: 6px;\n    left: 30px;\n}\n.dot2::before{\n    content: '';\n    width: 6px;\n    height: 5px;\n    top: 18px;\n    left: 14px;\n}\n.dot2::after{\n    content: '';\n    width: 6px;\n    height: 6px;\n    top: 12px;\n    left: 2px;\n}\n.mouth, .mouth .hide{\n    position: absolute;\n    left: 50%;\n    border: 5px solid #000;\n    border-top: none;\n    border-radius: 50% / 0% 0% 100% 100%;\n}\n.mouth{\n    top: 148px;\n    margin-left: -112px;\n    width: 224px;\n    height: 120px;\n    background: rgb(78,16,22);\n    z-index: 6;\n    overflow: hidden;\n}\n.mouth .hide{\n    top: -154px;\n    margin-left: -200px;\n    width: 400px;\n    height: 190px;\n    background: rgb(250,238,56);\n    z-index: 7;\n}\n.mouth .tooth1, .mouth .tooth2{\n    position: absolute;\n    top: 20px;\n    left: 50%;\n    width: 40px;\n    height: 45px;\n    margin-left: -20px;\n    border: 5px solid #000;\n    background: #fff;\n}\n.mouth .tooth1{\n    transform: translateX(-26px) rotate(6deg);\n}\n.mouth .tooth2{\n    transform: translateX(26px) rotate(-6deg);\n}\n.smell1, .smell2{\n    position: absolute;\n    top: 144px;\n    left: 50%;\n    margin-left: -10px;\n    width: 22px;\n    height: 15px;\n    border-top: 4px solid rgb(78,16,22);\n    border-radius: 49% 51% 43% 57% / 47% 41% 59% 53% ;\n    z-index: 11;\n}\n.smell1{\n    transform: translateX(-107px) rotate(-40deg);\n}\n.smell2{\n    transform: translateX(107px) rotate(20deg);\n}\n.tongue{\n    position: absolute;\n    top: 80px;\n    left: 50%;\n    width: 70px;\n    height: 70px;\n    margin-left: -35px;\n    border: 5px solid #000;\n    background: rgb(246,156,168);\n    border-radius: 49% 51% 43% 57% / 47% 41% 59% 53% ;\n}\n.leftTongue{\n    transform: translateX(-30px);\n    border-right: none;\n}\n.rightTongue{\n    transform: translateX(30px);\n    border-left: none;\n}\n.rightTongue::after{\n    content: '';\n    position: absolute;\n    top: 12px;\n    width: 20px;\n    height: 20px;\n    background: rgb(246,156,168);\n}\n`;
exports.default = string;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"9eikJ"}],"9eikJ":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["5NCuI","hTXjU"], "hTXjU", "parcelRequire94c2")

//# sourceMappingURL=index.6b9ca3e8.js.map
