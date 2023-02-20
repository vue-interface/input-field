import { defineComponent as C, inject as He, toRaw as Ze, openBlock as s, createElementBlock as u, normalizeClass as V, normalizeStyle as We, createElementVNode as R, createBlock as ye, resolveDynamicComponent as Ge, toDisplayString as D, createCommentVNode as y, resolveComponent as qe, resolveDirective as Ye, renderSlot as p, normalizeProps as G, guardReactiveProps as q, withDirectives as _e, mergeProps as Je, vModelDynamic as Ke, createVNode as Qe, Transition as Xe, withCtx as et } from "vue";
var tt = Object.defineProperty, rt = (e, t, r) => t in e ? tt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, it = (e, t, r) => (rt(e, typeof t != "symbol" ? t + "" : t, r), r), x = function() {
  return x = Object.assign || function(e) {
    for (var t, r = 1, i = arguments.length; r < i; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, x.apply(this, arguments);
};
function nt(e) {
  return e.toLowerCase();
}
var ot = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], st = /[^A-Z0-9]+/gi;
function at(e, t) {
  t === void 0 && (t = {});
  for (var r = t.splitRegexp, i = r === void 0 ? ot : r, n = t.stripRegexp, l = n === void 0 ? st : n, E = t.transform, z = E === void 0 ? nt : E, f = t.delimiter, Ue = f === void 0 ? " " : f, O = Y(Y(e, i, "$1\0$2"), l, "\0"), B = 0, N = O.length; O.charAt(B) === "\0"; )
    B++;
  for (; O.charAt(N - 1) === "\0"; )
    N--;
  return O.slice(B, N).split("\0").map(z).join(Ue);
}
function Y(e, t, r) {
  return t instanceof RegExp ? e.replace(t, r) : t.reduce(function(i, n) {
    return i.replace(n, r);
  }, e);
}
function lt(e, t) {
  return t === void 0 && (t = {}), at(e, x({ delimiter: "." }, t));
}
function k(e, t) {
  return t === void 0 && (t = {}), lt(e, x({ delimiter: "-" }, t));
}
let ut = class {
  constructor(t = {}) {
    it(this, "components"), this.components = /* @__PURE__ */ new Map(), Object.entries(t).forEach(([r, i]) => {
      this.register(r, i);
    });
  }
  get(t) {
    const r = this.components.get(
      t = k(t)
    );
    if (r)
      return r;
    throw new Error(`"${t}" has not been registered yet!`);
  }
  register(t, r) {
    return typeof t == "object" ? (Object.entries(t).forEach(([i, n]) => {
      this.register(k(i), n);
    }), this) : (this.components.set(k(t), r), this);
  }
  remove(t) {
    return this.components.delete(k(t)), this;
  }
  reset() {
    return this.components = /* @__PURE__ */ new Map(), this;
  }
};
function ct(e = {}) {
  return new ut(e);
}
const dt = ct();
function v(e, t = "px") {
  return e != null && e !== !1 && isFinite(e) ? `${e}${t}` : e;
}
const ht = C({
  props: {
    absolute: Boolean,
    center: Boolean,
    label: {
      type: String,
      default: void 0
    },
    size: {
      type: String,
      default: "md"
    },
    registry: {
      type: String,
      default: "indicators"
    },
    type: {
      type: [Object, String],
      required: !0
    },
    height: {
      type: [String, Number],
      default: void 0
    },
    maxHeight: {
      type: [String, Number],
      default: void 0
    },
    minHeight: {
      type: [String, Number],
      default: void 0
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    maxWidth: {
      type: [String, Number],
      default: void 0
    },
    minWidth: {
      type: [String, Number],
      default: void 0
    }
  },
  data: () => ({
    is: null
  }),
  computed: {
    classes() {
      return {
        "activity-indicator-center": this.center,
        "activity-indicator-absolute": this.absolute,
        [this.size && `activity-indicator-${this.size}`]: !!this.size
      };
    },
    style() {
      return {
        width: v(this.width),
        maxWidth: v(this.maxWidth),
        minWidth: v(this.minWidth),
        height: v(this.height),
        maxHeight: v(this.maxHeight),
        minHeight: v(this.minHeight)
      };
    }
  },
  // async mounted() {
  //     const component = await this.component();
  //     this.is = () => component;
  // },
  methods: {
    componentFromRegistry(e) {
      var t;
      try {
        return (t = He(this.registry || "indicators", dt)) == null ? void 0 : t.get(e);
      } catch {
      }
    },
    component() {
      return typeof this.type == "string" ? this.componentFromRegistry(this.type) : Ze(this.type);
    }
  }
}), ft = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [i, n] of t)
    r[i] = n;
  return r;
}, pt = { class: "activity-indicator-content" }, vt = {
  key: 0,
  class: "activity-indicator-label"
};
function yt(e, t, r, i, n, l) {
  return s(), u("div", {
    class: V(["activity-indicator", e.classes]),
    style: We(e.style)
  }, [
    R("div", pt, [
      (s(), ye(Ge(e.component()), { class: "mx-auto" })),
      e.label ? (s(), u("div", vt, D(e.label), 1)) : y("", !0)
    ])
  ], 6);
}
const bt = /* @__PURE__ */ ft(ht, [["render", yt]]), j = {};
function a(...e) {
  if (!e.length)
    return j;
  const [t, r] = e;
  return typeof t == "string" ? typeof j[t] < "u" ? j[t] : r : Array.isArray(t) ? t.reduce((i, n) => Object.assign(i, {
    //@ts-ignore
    [n]: j[n]
  }), {}) : Object.assign(j, ...e);
}
const be = C({
  props: {
    dropShadow: {
      type: [Boolean, String],
      default: void 0
    },
    dropShadowableClassPrefix: {
      type: String,
      default: "drop-shadow"
    },
    shadow: {
      type: [Boolean, String],
      default: void 0
    },
    shadowableClassPrefix: {
      type: String,
      default: "shadow"
    }
  },
  computed: {
    shadowableClass() {
      const e = this.dropShadow === !0 ? "" : this.dropShadow && `-${this.dropShadow}`, t = this.shadow === !0 ? "" : this.shadow && `-${this.shadow}`;
      return {
        [`${this.dropShadowableClassPrefix}${e}`]: !!this.dropShadow,
        [`${this.shadowableClassPrefix}${t}`]: !!this.shadow
      };
    }
  }
});
var mt = typeof global == "object" && global && global.Object === Object && global;
const me = mt;
var gt = typeof self == "object" && self && self.Object === Object && self, jt = me || gt || Function("return this")();
const c = jt;
var St = c.Symbol;
const m = St;
var ge = Object.prototype, $t = ge.hasOwnProperty, Ct = ge.toString, S = m ? m.toStringTag : void 0;
function At(e) {
  var t = $t.call(e, S), r = e[S];
  try {
    e[S] = void 0;
    var i = !0;
  } catch {
  }
  var n = Ct.call(e);
  return i && (t ? e[S] = r : delete e[S]), n;
}
var Et = Object.prototype, Ot = Et.toString;
function kt(e) {
  return Ot.call(e);
}
var xt = "[object Null]", wt = "[object Undefined]", _ = m ? m.toStringTag : void 0;
function g(e) {
  return e == null ? e === void 0 ? wt : xt : _ && _ in Object(e) ? At(e) : kt(e);
}
function w(e) {
  return e != null && typeof e == "object";
}
var Ft = "[object Symbol]";
function zt(e) {
  return typeof e == "symbol" || w(e) && g(e) == Ft;
}
function Bt(e, t) {
  for (var r = -1, i = e == null ? 0 : e.length, n = Array(i); ++r < i; )
    n[r] = t(e[r], r, e);
  return n;
}
var Nt = Array.isArray;
const je = Nt;
var It = 1 / 0, J = m ? m.prototype : void 0, K = J ? J.toString : void 0;
function Se(e) {
  if (typeof e == "string")
    return e;
  if (je(e))
    return Bt(e, Se) + "";
  if (zt(e))
    return K ? K.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -It ? "-0" : t;
}
function W(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Tt = "[object AsyncFunction]", Lt = "[object Function]", Vt = "[object GeneratorFunction]", Rt = "[object Proxy]";
function $e(e) {
  if (!W(e))
    return !1;
  var t = g(e);
  return t == Lt || t == Vt || t == Tt || t == Rt;
}
var Dt = c["__core-js_shared__"];
const I = Dt;
var Q = function() {
  var e = /[^.]+$/.exec(I && I.keys && I.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Mt(e) {
  return !!Q && Q in e;
}
var Pt = Function.prototype, Ut = Pt.toString;
function h(e) {
  if (e != null) {
    try {
      return Ut.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ht = /[\\^$.*+?()[\]{}|]/g, Zt = /^\[object .+?Constructor\]$/, Wt = Function.prototype, Gt = Object.prototype, qt = Wt.toString, Yt = Gt.hasOwnProperty, _t = RegExp(
  "^" + qt.call(Yt).replace(Ht, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Jt(e) {
  if (!W(e) || Mt(e))
    return !1;
  var t = $e(e) ? _t : Zt;
  return t.test(h(e));
}
function Kt(e, t) {
  return e == null ? void 0 : e[t];
}
function A(e, t) {
  var r = Kt(e, t);
  return Jt(r) ? r : void 0;
}
var Qt = A(c, "WeakMap");
const M = Qt;
var Xt = 9007199254740991;
function Ce(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Xt;
}
function er(e) {
  return e != null && Ce(e.length) && !$e(e);
}
var tr = Object.prototype;
function Ae(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || tr;
  return e === r;
}
var rr = "[object Arguments]";
function X(e) {
  return w(e) && g(e) == rr;
}
var Ee = Object.prototype, ir = Ee.hasOwnProperty, nr = Ee.propertyIsEnumerable, or = X(function() {
  return arguments;
}()) ? X : function(e) {
  return w(e) && ir.call(e, "callee") && !nr.call(e, "callee");
};
const sr = or;
function ar() {
  return !1;
}
var Oe = typeof exports == "object" && exports && !exports.nodeType && exports, ee = Oe && typeof module == "object" && module && !module.nodeType && module, lr = ee && ee.exports === Oe, te = lr ? c.Buffer : void 0, ur = te ? te.isBuffer : void 0, cr = ur || ar;
const dr = cr;
var hr = "[object Arguments]", fr = "[object Array]", pr = "[object Boolean]", vr = "[object Date]", yr = "[object Error]", br = "[object Function]", mr = "[object Map]", gr = "[object Number]", jr = "[object Object]", Sr = "[object RegExp]", $r = "[object Set]", Cr = "[object String]", Ar = "[object WeakMap]", Er = "[object ArrayBuffer]", Or = "[object DataView]", kr = "[object Float32Array]", xr = "[object Float64Array]", wr = "[object Int8Array]", Fr = "[object Int16Array]", zr = "[object Int32Array]", Br = "[object Uint8Array]", Nr = "[object Uint8ClampedArray]", Ir = "[object Uint16Array]", Tr = "[object Uint32Array]", o = {};
o[kr] = o[xr] = o[wr] = o[Fr] = o[zr] = o[Br] = o[Nr] = o[Ir] = o[Tr] = !0;
o[hr] = o[fr] = o[Er] = o[pr] = o[Or] = o[vr] = o[yr] = o[br] = o[mr] = o[gr] = o[jr] = o[Sr] = o[$r] = o[Cr] = o[Ar] = !1;
function Lr(e) {
  return w(e) && Ce(e.length) && !!o[g(e)];
}
function Vr(e) {
  return function(t) {
    return e(t);
  };
}
var ke = typeof exports == "object" && exports && !exports.nodeType && exports, $ = ke && typeof module == "object" && module && !module.nodeType && module, Rr = $ && $.exports === ke, T = Rr && me.process, Dr = function() {
  try {
    var e = $ && $.require && $.require("util").types;
    return e || T && T.binding && T.binding("util");
  } catch {
  }
}();
const re = Dr;
var ie = re && re.isTypedArray, Mr = ie ? Vr(ie) : Lr;
const Pr = Mr;
function Ur(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Hr = Ur(Object.keys, Object);
const Zr = Hr;
var Wr = Object.prototype, Gr = Wr.hasOwnProperty;
function qr(e) {
  if (!Ae(e))
    return Zr(e);
  var t = [];
  for (var r in Object(e))
    Gr.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var Yr = A(c, "Map");
const P = Yr;
function xe(e) {
  return e == null ? "" : Se(e);
}
function _r(e, t, r, i) {
  var n = -1, l = e == null ? 0 : e.length;
  for (i && l && (r = e[++n]); ++n < l; )
    r = t(r, e[n], n, e);
  return r;
}
function Jr(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var Kr = {
  // Latin-1 Supplement block.
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  // Latin Extended-A block.
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "s"
}, Qr = Jr(Kr);
const Xr = Qr;
var ei = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ti = "\\u0300-\\u036f", ri = "\\ufe20-\\ufe2f", ii = "\\u20d0-\\u20ff", ni = ti + ri + ii, oi = "[" + ni + "]", si = RegExp(oi, "g");
function ai(e) {
  return e = xe(e), e && e.replace(ei, Xr).replace(si, "");
}
var li = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function ui(e) {
  return e.match(li) || [];
}
var ci = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function di(e) {
  return ci.test(e);
}
var we = "\\ud800-\\udfff", hi = "\\u0300-\\u036f", fi = "\\ufe20-\\ufe2f", pi = "\\u20d0-\\u20ff", vi = hi + fi + pi, Fe = "\\u2700-\\u27bf", ze = "a-z\\xdf-\\xf6\\xf8-\\xff", yi = "\\xac\\xb1\\xd7\\xf7", bi = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", mi = "\\u2000-\\u206f", gi = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Be = "A-Z\\xc0-\\xd6\\xd8-\\xde", ji = "\\ufe0e\\ufe0f", Ne = yi + bi + mi + gi, Ie = "['’]", ne = "[" + Ne + "]", Si = "[" + vi + "]", Te = "\\d+", $i = "[" + Fe + "]", Le = "[" + ze + "]", Ve = "[^" + we + Ne + Te + Fe + ze + Be + "]", Ci = "\\ud83c[\\udffb-\\udfff]", Ai = "(?:" + Si + "|" + Ci + ")", Ei = "[^" + we + "]", Re = "(?:\\ud83c[\\udde6-\\uddff]){2}", De = "[\\ud800-\\udbff][\\udc00-\\udfff]", b = "[" + Be + "]", Oi = "\\u200d", oe = "(?:" + Le + "|" + Ve + ")", ki = "(?:" + b + "|" + Ve + ")", se = "(?:" + Ie + "(?:d|ll|m|re|s|t|ve))?", ae = "(?:" + Ie + "(?:D|LL|M|RE|S|T|VE))?", Me = Ai + "?", Pe = "[" + ji + "]?", xi = "(?:" + Oi + "(?:" + [Ei, Re, De].join("|") + ")" + Pe + Me + ")*", wi = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Fi = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", zi = Pe + Me + xi, Bi = "(?:" + [$i, Re, De].join("|") + ")" + zi, Ni = RegExp([
  b + "?" + Le + "+" + se + "(?=" + [ne, b, "$"].join("|") + ")",
  ki + "+" + ae + "(?=" + [ne, b + oe, "$"].join("|") + ")",
  b + "?" + oe + "+" + se,
  b + "+" + ae,
  Fi,
  wi,
  Te,
  Bi
].join("|"), "g");
function Ii(e) {
  return e.match(Ni) || [];
}
function Ti(e, t, r) {
  return e = xe(e), t = r ? void 0 : t, t === void 0 ? di(e) ? Ii(e) : ui(e) : e.match(t) || [];
}
var Li = "['’]", Vi = RegExp(Li, "g");
function Ri(e) {
  return function(t) {
    return _r(Ti(ai(t).replace(Vi, "")), e, "");
  };
}
var Di = A(c, "DataView");
const U = Di;
var Mi = A(c, "Promise");
const H = Mi;
var Pi = A(c, "Set");
const Z = Pi;
var le = "[object Map]", Ui = "[object Object]", ue = "[object Promise]", ce = "[object Set]", de = "[object WeakMap]", he = "[object DataView]", Hi = h(U), Zi = h(P), Wi = h(H), Gi = h(Z), qi = h(M), d = g;
(U && d(new U(new ArrayBuffer(1))) != he || P && d(new P()) != le || H && d(H.resolve()) != ue || Z && d(new Z()) != ce || M && d(new M()) != de) && (d = function(e) {
  var t = g(e), r = t == Ui ? e.constructor : void 0, i = r ? h(r) : "";
  if (i)
    switch (i) {
      case Hi:
        return he;
      case Zi:
        return le;
      case Wi:
        return ue;
      case Gi:
        return ce;
      case qi:
        return de;
    }
  return t;
});
const Yi = d;
var _i = "[object Map]", Ji = "[object Set]", Ki = Object.prototype, Qi = Ki.hasOwnProperty;
function fe(e) {
  if (e == null)
    return !0;
  if (er(e) && (je(e) || typeof e == "string" || typeof e.splice == "function" || dr(e) || Pr(e) || sr(e)))
    return !e.length;
  var t = Yi(e);
  if (t == _i || t == Ji)
    return !e.size;
  if (Ae(e))
    return !qr(e).length;
  for (var r in e)
    if (Qi.call(e, r))
      return !1;
  return !0;
}
var Xi = Ri(function(e, t, r) {
  return e + (r ? "-" : "") + t.toLowerCase();
});
const F = Xi;
function pe(e, t, r = "-") {
  const i = String(t).replace(new RegExp(`^${e}${r}?`), "");
  return [
    F(i),
    e
  ].filter((n) => !!n).join(r);
}
const en = C({
  directives: {
    bindEvents: {
      created(e, t) {
        var r, i;
        (i = (r = t.instance) == null ? void 0 : r.bindEvents) == null || i.call(r, e);
      }
    }
  },
  mixins: [
    be
  ],
  inheritAttrs: !1,
  props: {
    /**
     * Show type activity indicator.
     */
    activity: {
      type: Boolean,
      default: !1
    },
    /**
     * Animate floating labels inside the input.
     */
    animated: {
      type: Boolean,
      default: () => a("animated", !1)
    },
    /**
     * Additional classes assigned to the control element. These do not
     * override any of the classes assigned by the FormControl.
     */
    controlClass: {
      type: [Array, Object, String],
      default: void 0
    },
    /**
     * An inline field validation error.
     */
    error: {
      type: [String, Array, Boolean],
      default: void 0
    },
    /**
     * An inline field validation errors passed as object with key/value
     * pairs. If errors passed as an object, the form name will be used for
     * the key.
     */
    errors: {
      type: [Array, Object, Boolean],
      default() {
        return {};
      }
    },
    /**
     * Some feedback to add to the field once the field is successfully
     * valid.
     */
    feedback: {
      type: [String, Array],
      default: void 0
    },
    /**
     * The primary class assigned to the form control.
     */
    formControlClass: {
      type: [Array, Object, String],
      default: () => a("controlClass", "form-control")
    },
    /**
     * Add form-group wrapper to input.
     */
    group: {
      type: Boolean,
      default: () => a("group", !0)
    },
    /**
     * Some instructions to appear under the field label.
     */
    helpText: {
      type: [Number, String],
      default: void 0
    },
    /**
     * The activity indicator type.
     */
    indicator: {
      type: [Object, String, Boolean],
      default: () => a("indicator", "spinner")
    },
    /**
     * The activity indicator size.
     */
    indicatorSize: {
      type: String,
      default: void 0
    },
    /**
     * Force the input to be invalid.
     */
    invalid: Boolean,
    /**
     * The value of label element. If no value, no label will appear.
     */
    label: {
      type: [Number, String],
      default: void 0
    },
    /**
     * The default label class assigned to the label element.
     */
    labelClass: {
      type: [Object, String],
      default: () => a("labelClass", "form-label")
    },
    /**
     * The model default value.
     */
    modelValue: {
      type: [Number, String, Array, Object],
      default: void 0
    },
    /**
     * Should the control look like plaintext.
     */
    plaintext: Boolean,
    /**
     * The size of the form control.
     */
    size: {
      type: String,
      default: void 0
    },
    /**
     * Force the input to be valid.
     */
    valid: Boolean
  },
  emits: [
    "focus",
    "blur",
    "change",
    "click",
    "keypress",
    "keyup",
    "keydown",
    "progress",
    "paste",
    "update:modelValue"
  ],
  data() {
    return {
      currentValue: null,
      hasChanged: !1,
      hasFocus: !1,
      isDirty: !1,
      isEmpty: fe(this.modelValue)
    };
  },
  computed: {
    model: {
      get() {
        return this.modelValue !== void 0 ? this.modelValue : this.currentValue;
      },
      set(e) {
        this.currentValue = e, this.hasChanged = !0, this.isEmpty = fe(e), this.$emit("update:modelValue", e);
      }
    },
    id() {
      return this.$attrs.id || Math.random().toString(36).slice(2);
    },
    componentName() {
      return this.$options.name;
    },
    formGroupClasses() {
      return Object.assign({
        animated: this.animated,
        "form-group": this.group,
        "has-activity": this.activity,
        "has-changed": this.hasChanged,
        "has-focus": this.hasFocus,
        "has-icon": !!this.$slots.icon,
        "is-dirty": this.isDirty,
        "is-empty": this.isEmpty,
        "is-invalid": !!(this.invalid || this.invalidFeedback),
        "is-valid": !!(this.valid || this.validFeedback),
        [this.$attrs.class]: !!this.$attrs.class,
        [this.size && pe(this.size, this.componentName)]: !!this.size
      }, !!this.componentName && {
        [F(this.componentName)]: !0
      });
    },
    controlAttributes() {
      return Object.assign({}, this.$attrs, {
        id: this.id,
        class: this.controlClasses
        // value: this.model
      });
    },
    controlClasses() {
      return Object.assign({
        [this.controlClass]: !!this.controlClass,
        [this.controlSizeClass]: !!this.controlSizeClass,
        [this.formControlClass]: !!this.formControlClass,
        [this.plaintextClass]: this.plaintext,
        "form-control-icon": !!this.$slots.icon,
        "is-valid": !!(this.valid || this.validFeedback),
        "is-invalid": !!(this.invalid || this.invalidFeedback)
      }, this.shadowableClass);
    },
    controlSizeClass() {
      return pe(this.size, this.formControlClass);
    },
    invalidFeedback() {
      if (this.error === "")
        return null;
      if (this.error)
        return this.error;
      const e = this.getFieldErrors();
      return Array.isArray(e) ? e.filter((t) => t && typeof t == "string").join("<br>") : e;
    },
    validFeedback() {
      return Array.isArray(this.feedback) ? this.feedback.join("<br>") : this.feedback;
    },
    plaintextClass() {
      return "form-control-plaintext";
    }
  },
  methods: {
    bindEvents(e) {
      for (const t of this.$options.emits)
        e.addEventListener(t, (r) => {
          this.$emit(t, r);
        });
      e.addEventListener("focus", () => {
        this.isDirty = !0, this.hasFocus = !0;
      }), e.addEventListener("blur", () => {
        this.hasFocus = !1;
      });
    },
    blur() {
      var e;
      (e = this.$refs.field) == null || e.blur();
    },
    focus() {
      var e;
      (e = this.$refs.field) == null || e.focus();
    },
    getFieldErrors() {
      let e = this.error || this.errors;
      return this.errors && !Array.isArray(this.errors) && (e = this.errors[this.$attrs.name || this.$attrs.id]), !e || Array.isArray(e) || W(e) ? e : [e];
    }
  }
});
function L(e, t, r = "-") {
  const i = String(t).replace(new RegExp(`^${e}${r}?`), "");
  return [
    F(i),
    e
  ].filter((n) => !!n).join(r);
}
function ve(e) {
  return !Array.isArray(e) && typeof e == "object";
}
C({
  directives: {
    bindEvents: {
      beforeMount(e, t) {
        var r, i;
        (i = (r = t.instance) == null ? void 0 : r.bindEvents) == null || i.call(r, e);
      }
    }
  },
  mixins: [
    be
  ],
  inheritAttrs: !1,
  props: {
    modelValue: {
      default: void 0
    },
    /**
     * Show type activity indicator.
     */
    activity: {
      type: Boolean,
      default: !1
    },
    /**
     * Animate floating labels inside the input.
     */
    animated: {
      type: Boolean,
      default: () => a("animated", !1)
    },
    /**
     * An array of event names that correlate with callback functions.
     */
    nativeEvents: {
      type: Array,
      default() {
        return ["focus", "blur", "change", "click", "keypress", "keyup", "keydown", "progress", "paste"];
      }
    },
    /**
     * The default class name assigned to the control element.
     */
    defaultControlClass: {
      type: String,
      default: () => a("defaultControlClass", "form-control")
    },
    /**
     * An inline field validation error.
     */
    error: {
      type: [String, Array, Boolean],
      default: void 0
    },
    /**
     * An inline field validation errors passed as object with key/value
     * pairs. If errors passed as an object, the form name will be used for
     * the key.
     */
    errors: {
      type: [Array, Object, Boolean],
      default() {
        return {};
      }
    },
    /**
     * Some feedback to add to the field once the field is successfully
     * valid.
     */
    feedback: {
      type: [String, Array],
      default: void 0
    },
    /**
     * Add form-group wrapper to input.
     */
    group: {
      type: Boolean,
      default: () => a("group", !0)
    },
    /**
     * Some instructions to appear under the field label.
     */
    helpText: {
      type: [Number, String],
      default: void 0
    },
    /**
     * Hide the label for browsers, but leave it for screen readers.
     */
    hideLabel: Boolean,
    /**
     * The activity indicator type.
     */
    indicator: {
      type: [String, Boolean],
      default: () => a("indicator", "spinner")
    },
    /**
     * The activity indicator size.
     */
    indicatorSize: {
      type: String,
      default: void 0
    },
    /**
     * Display the form field inline.
     */
    inline: Boolean,
    /**
     * The invalid property.
     */
    invalid: Boolean,
    /**
     * The value of label element. If no value, no label will appear.
     */
    label: {
      type: [Number, String],
      default: void 0
    },
    /**
     * The default label class assigned to the label element.
     */
    labelClass: {
      type: [Object, String],
      default: () => a("labelClass", "form-label")
    },
    /**
     * Should the control look like a pill.
     */
    pill: Boolean,
    /**
     * Should the control look like plaintext.
     */
    plaintext: Boolean,
    /**
     * The size of the form control.
     */
    size: {
      type: String,
      default: void 0
    },
    /**
     * Additional margin/padding classes for fine control of spacing.
     */
    spacing: {
      type: String,
      default: void 0
    },
    /**
     * The valid property.
     */
    valid: Boolean
  },
  emits: [
    "blur",
    "change",
    "click",
    "focus",
    "keydown",
    "keypress",
    "keyup",
    "update:modelValue"
  ],
  data() {
    return {
      defaultEmpty: !1,
      hasChanged: !1,
      hasFocus: !1,
      isEmpty: !0
    };
  },
  computed: {
    id() {
      return this.$attrs.id || this.$attrs.name || (Math.random() + 1).toString(36).substring(7);
    },
    componentName() {
      return this.$options.name;
    },
    controlAttributes() {
      return Object.fromEntries(
        Object.entries(this.$attrs).concat([
          ["id", this.id],
          ["class", this.controlClasses],
          ["value", this.modelValue]
        ])
      );
    },
    controlClass() {
      return this.defaultControlClass;
    },
    controlSizeClass() {
      return L(this.size, this.controlClass);
    },
    formGroupClasses() {
      return Object.assign({
        [this.size && L(this.size, this.componentName)]: !!this.size,
        animated: this.animated,
        "default-empty": this.defaultEmpty,
        "form-group": this.group,
        [this.size && L(this.size, "form-group")]: !!this.size,
        "has-activity": this.activity,
        "has-changed": this.hasChanged,
        "has-focus": this.hasFocus,
        "has-icon": !!this.$slots.icon,
        "is-empty": this.isEmpty,
        "is-invalid": !!(this.invalid || this.invalidFeedback),
        "is-valid": !!(this.valid || this.validFeedback),
        [this.$attrs.class]: !!this.$attrs.class,
        [this.$attrs.id]: !!this.$attrs.id
      }, !!this.componentName && {
        [F(this.componentName)]: !0
      });
    },
    controlClasses() {
      return Object.assign({
        [this.controlClass]: !!this.controlClass,
        [this.controlSizeClass]: !!this.controlSizeClass,
        "form-control-icon": !!this.$slots.icon,
        "is-valid": !!(this.valid || this.validFeedback),
        "is-invalid": !!(this.invalid || this.invalidFeedback),
        [this.pillClasses]: this.pill,
        [this.plaintextClass]: this.plaintext,
        [this.spacing]: !!this.spacing
      }, this.shadowableClass);
    },
    hasDefaultSlot() {
      return !!this.$slots.default;
    },
    invalidFeedback() {
      if (this.error === "")
        return null;
      if (this.error)
        return this.error;
      const e = this.getFieldErrors();
      return Array.isArray(e) ? e.filter((t) => t && typeof t == "string").join("<br>") : e;
    },
    pillClasses() {
      return "rounded rounded-pill";
    },
    plaintextClass() {
      return "form-control-plaintext";
    },
    validFeedback() {
      return Array.isArray(this.feedback) ? this.feedback.join("<br>") : this.feedback;
    }
  },
  watch: {
    hasFocus() {
      this.shouldChangeOnFocus() && (this.hasChanged = !0);
    },
    defaultEmpty() {
      this.hasChanged = !0;
    }
  },
  methods: {
    bindEvents(e, t) {
      var r;
      t || (t = this.onInput);
      const i = e instanceof HTMLSelectElement ? (r = e.querySelectorAll("option")) == null ? void 0 : r[e.selectedIndex] : null;
      i && (e.value = i == null ? void 0 : i.value), e.value && t(e.value), this.hasChanged = !!e.value, this.isEmpty = !e.value, e.addEventListener("focus", () => {
        this.hasFocus = !0;
      }), e.addEventListener("blur", () => {
        this.hasFocus = !1;
      }), e.addEventListener("input", () => {
        this.isEmpty = !1, this.hasChanged = !0;
      }), e.addEventListener(
        e.tagName === "SELECT" ? "change" : "input",
        () => t(e.value)
      ), this.nativeEvents.forEach((n) => {
        e.addEventListener(n, (l) => {
          this.$emit(n, l);
        });
      });
    },
    blur() {
      this.getInputField() && this.getInputField().blur();
    },
    focus() {
      this.getInputField() && this.getInputField().focus();
    },
    getInputField() {
      return this.$el.querySelector(
        ".form-control, input, select, textarea"
      );
    },
    getFieldErrors() {
      let e = this.error || this.errors;
      return this.errors && ve(this.errors) && (e = this.errors[this.$attrs.name || this.$attrs.id]), !e || Array.isArray(e) || ve(e) ? e : [e];
    },
    shouldChangeOnFocus() {
      return !this.getInputField().readOnly;
    },
    onInput(e) {
      this.$emit("update:modelValue", e);
    }
  }
});
const tn = C({
  name: "InputField",
  components: {
    ActivityIndicator: bt
  },
  extends: en
});
const rn = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [i, n] of t)
    r[i] = n;
  return r;
}, nn = ["for"], on = { class: "form-group-inner" }, sn = ["innerHTML"], an = ["innerHTML"];
function ln(e, t, r, i, n, l) {
  const E = qe("activity-indicator"), z = Ye("bind-events");
  return s(), u("div", {
    class: V(["input-field", e.formGroupClasses])
  }, [
    p(e.$slots, "label", {}, () => [
      e.label ? (s(), u("label", {
        key: 0,
        ref: "label",
        class: V(e.labelClass),
        for: e.id
      }, D(e.label), 11, nn)) : y("", !0)
    ]),
    R("div", on, [
      p(e.$slots, "control", G(q({ bindEvents: e.bindEvents, controlAttributes: e.controlAttributes })), () => [
        e.$slots.icon ? (s(), u("div", {
          key: 0,
          class: "form-group-inner-icon",
          onClick: t[0] || (t[0] = (...f) => e.focus && e.focus(...f))
        }, [
          p(e.$slots, "icon")
        ])) : y("", !0),
        _e(R("input", Je({
          ref: "field",
          "onUpdate:modelValue": t[1] || (t[1] = (f) => e.model = f)
        }, e.controlAttributes), null, 16), [
          [Ke, e.model],
          [z]
        ])
      ]),
      p(e.$slots, "activity", {}, () => [
        Qe(Xe, { name: "input-field-fade" }, {
          default: et(() => [
            e.activity ? (s(), ye(E, {
              key: "activity",
              ref: "activity",
              type: e.indicator,
              size: e.indicatorSize || e.size
            }, null, 8, ["type", "size"])) : y("", !0)
          ]),
          _: 1
        })
      ])
    ]),
    p(e.$slots, "feedback", G(q({ invalid: e.invalid, invalidFeedback: e.invalidFeedback, valid: e.valid, validFeedback: e.validFeedback })), () => [
      e.invalidFeedback ? (s(), u("div", {
        key: 0,
        class: "invalid-feedback",
        invalid: "",
        innerHTML: e.invalidFeedback
      }, null, 8, sn)) : e.validFeedback ? (s(), u("div", {
        key: 1,
        class: "valid-feedback",
        valid: "",
        innerHTML: e.validFeedback
      }, null, 8, an)) : y("", !0)
    ]),
    p(e.$slots, "help", {}, () => [
      e.helpText ? (s(), u("small", {
        key: 0,
        ref: "help"
      }, D(e.helpText), 513)) : y("", !0)
    ])
  ], 2);
}
const dn = /* @__PURE__ */ rn(tn, [["render", ln]]);
export {
  dn as InputField
};
