import { defineComponent as p, inject as Ye, toRaw as Ke, openBlock as a, createElementBlock as d, normalizeClass as W, normalizeStyle as Qe, createElementVNode as $, createBlock as _, resolveDynamicComponent as Xe, toDisplayString as O, createCommentVNode as g, computed as et, Fragment as $e, renderList as Ce, unref as P, renderSlot as c, normalizeProps as E, guardReactiveProps as w, resolveComponent as R, resolveDirective as tt, withDirectives as rt, mergeProps as ot, vModelDynamic as nt, createVNode as X, Transition as it, withCtx as D, createTextVNode as st } from "vue";
var at = Object.defineProperty, lt = (e, t, r) => t in e ? at(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, ut = (e, t, r) => (lt(e, typeof t != "symbol" ? t + "" : t, r), r), I = function() {
  return I = Object.assign || function(e) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, I.apply(this, arguments);
};
function ct(e) {
  return e.toLowerCase();
}
var dt = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], ht = /[^A-Z0-9]+/gi;
function ft(e, t) {
  t === void 0 && (t = {});
  for (var r = t.splitRegexp, o = r === void 0 ? dt : r, n = t.stripRegexp, u = n === void 0 ? ht : n, b = t.transform, V = b === void 0 ? ct : b, z = t.delimiter, T = z === void 0 ? " " : z, s = ee(ee(e, o, "$1\0$2"), u, "\0"), M = 0, L = s.length; s.charAt(M) === "\0"; )
    M++;
  for (; s.charAt(L - 1) === "\0"; )
    L--;
  return s.slice(M, L).split("\0").map(V).join(T);
}
function ee(e, t, r) {
  return t instanceof RegExp ? e.replace(t, r) : t.reduce(function(o, n) {
    return o.replace(n, r);
  }, e);
}
function pt(e, t) {
  return t === void 0 && (t = {}), ft(e, I({ delimiter: "." }, t));
}
function B(e, t) {
  return t === void 0 && (t = {}), pt(e, I({ delimiter: "-" }, t));
}
let yt = class {
  constructor(t = {}) {
    ut(this, "components"), this.components = /* @__PURE__ */ new Map(), Object.entries(t).forEach(([r, o]) => {
      this.register(r, o);
    });
  }
  get(t) {
    const r = this.components.get(
      t = B(t)
    );
    if (r)
      return r;
    throw new Error(`"${t}" has not been registered yet!`);
  }
  register(t, r) {
    return typeof t == "object" ? (Object.entries(t).forEach(([o, n]) => {
      this.register(B(o), n);
    }), this) : (this.components.set(B(t), r), this);
  }
  remove(t) {
    return this.components.delete(B(t)), this;
  }
  reset() {
    return this.components = /* @__PURE__ */ new Map(), this;
  }
};
function vt(e = {}) {
  return new yt(e);
}
const bt = vt();
function m(e, t = "px") {
  return e != null && e !== !1 && isFinite(e) ? `${e}${t}` : e;
}
const mt = p({
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
        width: m(this.width),
        maxWidth: m(this.maxWidth),
        minWidth: m(this.minWidth),
        height: m(this.height),
        maxHeight: m(this.maxHeight),
        minHeight: m(this.minHeight)
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
        return (t = Ye(this.registry || "indicators", bt)) == null ? void 0 : t.get(e);
      } catch {
      }
    },
    component() {
      return typeof this.type == "string" ? this.componentFromRegistry(this.type) : Ke(this.type);
    }
  }
}), gt = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, n] of t)
    r[o] = n;
  return r;
}, jt = { class: "activity-indicator-content" }, $t = {
  key: 0,
  class: "activity-indicator-label"
};
function Ct(e, t, r, o, n, u) {
  return a(), d("div", {
    class: W(["activity-indicator", e.classes]),
    style: Qe(e.style)
  }, [
    $("div", jt, [
      (a(), _(Xe(e.component()), { class: "mx-auto" })),
      e.label ? (a(), d("div", $t, O(e.label), 1)) : g("", !0)
    ])
  ], 6);
}
const St = /* @__PURE__ */ gt(mt, [["render", Ct]]), S = {};
function l(...e) {
  if (!e.length)
    return S;
  const [t, r] = e;
  return typeof t == "string" ? typeof S[t] < "u" ? S[t] : r : Array.isArray(t) ? t.reduce((o, n) => Object.assign(o, {
    //@ts-ignore
    [n]: S[n]
  }), {}) : Object.assign(S, ...e);
}
const Se = p({
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
var At = typeof global == "object" && global && global.Object === Object && global;
const Ae = At;
var Ot = typeof self == "object" && self && self.Object === Object && self, Et = Ae || Ot || Function("return this")();
const h = Et;
var wt = h.Symbol;
const C = wt;
var Oe = Object.prototype, kt = Oe.hasOwnProperty, xt = Oe.toString, A = C ? C.toStringTag : void 0;
function Ft(e) {
  var t = kt.call(e, A), r = e[A];
  try {
    e[A] = void 0;
    var o = !0;
  } catch {
  }
  var n = xt.call(e);
  return o && (t ? e[A] = r : delete e[A]), n;
}
var zt = Object.prototype, Bt = zt.toString;
function It(e) {
  return Bt.call(e);
}
var Nt = "[object Null]", Vt = "[object Undefined]", te = C ? C.toStringTag : void 0;
function y(e) {
  return e == null ? e === void 0 ? Vt : Nt : te && te in Object(e) ? Ft(e) : It(e);
}
function x(e) {
  return e != null && typeof e == "object";
}
var Tt = "[object Symbol]";
function Mt(e) {
  return typeof e == "symbol" || x(e) && y(e) == Tt;
}
function Lt(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length, n = Array(o); ++r < o; )
    n[r] = t(e[r], r, e);
  return n;
}
var Pt = Array.isArray;
const Ee = Pt;
var Rt = 1 / 0, re = C ? C.prototype : void 0, oe = re ? re.toString : void 0;
function we(e) {
  if (typeof e == "string")
    return e;
  if (Ee(e))
    return Lt(e, we) + "";
  if (Mt(e))
    return oe ? oe.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Rt ? "-0" : t;
}
function Q(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Dt = "[object AsyncFunction]", Ut = "[object Function]", Zt = "[object GeneratorFunction]", Ht = "[object Proxy]";
function ke(e) {
  if (!Q(e))
    return !1;
  var t = y(e);
  return t == Ut || t == Zt || t == Dt || t == Ht;
}
var Wt = h["__core-js_shared__"];
const U = Wt;
var ne = function() {
  var e = /[^.]+$/.exec(U && U.keys && U.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function _t(e) {
  return !!ne && ne in e;
}
var Gt = Function.prototype, qt = Gt.toString;
function v(e) {
  if (e != null) {
    try {
      return qt.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Jt = /[\\^$.*+?()[\]{}|]/g, Yt = /^\[object .+?Constructor\]$/, Kt = Function.prototype, Qt = Object.prototype, Xt = Kt.toString, er = Qt.hasOwnProperty, tr = RegExp(
  "^" + Xt.call(er).replace(Jt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function rr(e) {
  if (!Q(e) || _t(e))
    return !1;
  var t = ke(e) ? tr : Yt;
  return t.test(v(e));
}
function or(e, t) {
  return e == null ? void 0 : e[t];
}
function F(e, t) {
  var r = or(e, t);
  return rr(r) ? r : void 0;
}
var nr = F(h, "WeakMap");
const G = nr;
var ir = 9007199254740991;
function xe(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ir;
}
function sr(e) {
  return e != null && xe(e.length) && !ke(e);
}
var ar = Object.prototype;
function Fe(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || ar;
  return e === r;
}
var lr = "[object Arguments]";
function ie(e) {
  return x(e) && y(e) == lr;
}
var ze = Object.prototype, ur = ze.hasOwnProperty, cr = ze.propertyIsEnumerable, dr = ie(function() {
  return arguments;
}()) ? ie : function(e) {
  return x(e) && ur.call(e, "callee") && !cr.call(e, "callee");
};
const hr = dr;
function fr() {
  return !1;
}
var Be = typeof exports == "object" && exports && !exports.nodeType && exports, se = Be && typeof module == "object" && module && !module.nodeType && module, pr = se && se.exports === Be, ae = pr ? h.Buffer : void 0, yr = ae ? ae.isBuffer : void 0, vr = yr || fr;
const br = vr;
var mr = "[object Arguments]", gr = "[object Array]", jr = "[object Boolean]", $r = "[object Date]", Cr = "[object Error]", Sr = "[object Function]", Ar = "[object Map]", Or = "[object Number]", Er = "[object Object]", wr = "[object RegExp]", kr = "[object Set]", xr = "[object String]", Fr = "[object WeakMap]", zr = "[object ArrayBuffer]", Br = "[object DataView]", Ir = "[object Float32Array]", Nr = "[object Float64Array]", Vr = "[object Int8Array]", Tr = "[object Int16Array]", Mr = "[object Int32Array]", Lr = "[object Uint8Array]", Pr = "[object Uint8ClampedArray]", Rr = "[object Uint16Array]", Dr = "[object Uint32Array]", i = {};
i[Ir] = i[Nr] = i[Vr] = i[Tr] = i[Mr] = i[Lr] = i[Pr] = i[Rr] = i[Dr] = !0;
i[mr] = i[gr] = i[zr] = i[jr] = i[Br] = i[$r] = i[Cr] = i[Sr] = i[Ar] = i[Or] = i[Er] = i[wr] = i[kr] = i[xr] = i[Fr] = !1;
function Ur(e) {
  return x(e) && xe(e.length) && !!i[y(e)];
}
function Zr(e) {
  return function(t) {
    return e(t);
  };
}
var Ie = typeof exports == "object" && exports && !exports.nodeType && exports, k = Ie && typeof module == "object" && module && !module.nodeType && module, Hr = k && k.exports === Ie, Z = Hr && Ae.process, Wr = function() {
  try {
    var e = k && k.require && k.require("util").types;
    return e || Z && Z.binding && Z.binding("util");
  } catch {
  }
}();
const le = Wr;
var ue = le && le.isTypedArray, _r = ue ? Zr(ue) : Ur;
const Gr = _r;
function Ne(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var qr = Ne(Object.keys, Object);
const Jr = qr;
var Yr = Object.prototype, Kr = Yr.hasOwnProperty;
function Qr(e) {
  if (!Fe(e))
    return Jr(e);
  var t = [];
  for (var r in Object(e))
    Kr.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var Xr = F(h, "Map");
const q = Xr;
function Ve(e) {
  return e == null ? "" : we(e);
}
var eo = Ne(Object.getPrototypeOf, Object);
const to = eo;
var ro = "[object Object]", oo = Function.prototype, no = Object.prototype, Te = oo.toString, io = no.hasOwnProperty, so = Te.call(Object);
function ao(e) {
  if (!x(e) || y(e) != ro)
    return !1;
  var t = to(e);
  if (t === null)
    return !0;
  var r = io.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Te.call(r) == so;
}
function lo(e, t, r, o) {
  var n = -1, u = e == null ? 0 : e.length;
  for (o && u && (r = e[++n]); ++n < u; )
    r = t(r, e[n], n, e);
  return r;
}
function uo(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var co = {
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
}, ho = uo(co);
const fo = ho;
var po = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, yo = "\\u0300-\\u036f", vo = "\\ufe20-\\ufe2f", bo = "\\u20d0-\\u20ff", mo = yo + vo + bo, go = "[" + mo + "]", jo = RegExp(go, "g");
function $o(e) {
  return e = Ve(e), e && e.replace(po, fo).replace(jo, "");
}
var Co = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function So(e) {
  return e.match(Co) || [];
}
var Ao = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function Oo(e) {
  return Ao.test(e);
}
var Me = "\\ud800-\\udfff", Eo = "\\u0300-\\u036f", wo = "\\ufe20-\\ufe2f", ko = "\\u20d0-\\u20ff", xo = Eo + wo + ko, Le = "\\u2700-\\u27bf", Pe = "a-z\\xdf-\\xf6\\xf8-\\xff", Fo = "\\xac\\xb1\\xd7\\xf7", zo = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Bo = "\\u2000-\\u206f", Io = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Re = "A-Z\\xc0-\\xd6\\xd8-\\xde", No = "\\ufe0e\\ufe0f", De = Fo + zo + Bo + Io, Ue = "['’]", ce = "[" + De + "]", Vo = "[" + xo + "]", Ze = "\\d+", To = "[" + Le + "]", He = "[" + Pe + "]", We = "[^" + Me + De + Ze + Le + Pe + Re + "]", Mo = "\\ud83c[\\udffb-\\udfff]", Lo = "(?:" + Vo + "|" + Mo + ")", Po = "[^" + Me + "]", _e = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ge = "[\\ud800-\\udbff][\\udc00-\\udfff]", j = "[" + Re + "]", Ro = "\\u200d", de = "(?:" + He + "|" + We + ")", Do = "(?:" + j + "|" + We + ")", he = "(?:" + Ue + "(?:d|ll|m|re|s|t|ve))?", fe = "(?:" + Ue + "(?:D|LL|M|RE|S|T|VE))?", qe = Lo + "?", Je = "[" + No + "]?", Uo = "(?:" + Ro + "(?:" + [Po, _e, Ge].join("|") + ")" + Je + qe + ")*", Zo = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ho = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Wo = Je + qe + Uo, _o = "(?:" + [To, _e, Ge].join("|") + ")" + Wo, Go = RegExp([
  j + "?" + He + "+" + he + "(?=" + [ce, j, "$"].join("|") + ")",
  Do + "+" + fe + "(?=" + [ce, j + de, "$"].join("|") + ")",
  j + "?" + de + "+" + he,
  j + "+" + fe,
  Ho,
  Zo,
  Ze,
  _o
].join("|"), "g");
function qo(e) {
  return e.match(Go) || [];
}
function Jo(e, t, r) {
  return e = Ve(e), t = r ? void 0 : t, t === void 0 ? Oo(e) ? qo(e) : So(e) : e.match(t) || [];
}
var Yo = "['’]", Ko = RegExp(Yo, "g");
function Qo(e) {
  return function(t) {
    return lo(Jo($o(t).replace(Ko, "")), e, "");
  };
}
var Xo = F(h, "DataView");
const J = Xo;
var en = F(h, "Promise");
const Y = en;
var tn = F(h, "Set");
const K = tn;
var pe = "[object Map]", rn = "[object Object]", ye = "[object Promise]", ve = "[object Set]", be = "[object WeakMap]", me = "[object DataView]", on = v(J), nn = v(q), sn = v(Y), an = v(K), ln = v(G), f = y;
(J && f(new J(new ArrayBuffer(1))) != me || q && f(new q()) != pe || Y && f(Y.resolve()) != ye || K && f(new K()) != ve || G && f(new G()) != be) && (f = function(e) {
  var t = y(e), r = t == rn ? e.constructor : void 0, o = r ? v(r) : "";
  if (o)
    switch (o) {
      case on:
        return me;
      case nn:
        return pe;
      case sn:
        return ye;
      case an:
        return ve;
      case ln:
        return be;
    }
  return t;
});
const un = f;
var cn = "[object Map]", dn = "[object Set]", hn = Object.prototype, fn = hn.hasOwnProperty;
function pn(e) {
  if (e == null)
    return !0;
  if (sr(e) && (Ee(e) || typeof e == "string" || typeof e.splice == "function" || br(e) || Gr(e) || hr(e)))
    return !e.length;
  var t = un(e);
  if (t == cn || t == dn)
    return !e.size;
  if (Fe(e))
    return !Qr(e).length;
  for (var r in e)
    if (fn.call(e, r))
      return !1;
  return !0;
}
var yn = Qo(function(e, t, r) {
  return e + (r ? "-" : "") + t.toLowerCase();
});
const N = yn, vn = /* @__PURE__ */ p({
  __name: "FormControlErrors",
  props: {
    error: null,
    errors: null,
    name: null,
    id: null
  },
  setup(e) {
    const t = e, r = String((t == null ? void 0 : t.id) || (t == null ? void 0 : t.name)), o = et(() => t.error ? /* @__PURE__ */ new Map(
      [[r, [t.error]]]
    ) : ao(t.errors) ? new Map(
      Object.entries(t.errors)
    ) : Array.isArray(t.errors) ? /* @__PURE__ */ new Map(
      [[r, t.errors]]
    ) : /* @__PURE__ */ new Map());
    return (n, u) => (a(!0), d($e, null, Ce(P(o).get(P(r)), (b) => c(n.$slots, "default", E(w({ key: P(r), error: b })))), 256));
  }
}), bn = /* @__PURE__ */ p({
  __name: "FormControlFeedback",
  props: {
    feedback: null
  },
  setup(e) {
    return (t, r) => (a(!0), d($e, null, Ce([].concat(e.feedback), (o) => c(t.$slots, "default", E(w({ feedback: o })))), 256));
  }
});
function ge(e, t, r = "-") {
  const o = String(t).replace(new RegExp(`^${e}${r}?`), "");
  return [
    N(o),
    e
  ].filter((n) => !!n).join(r);
}
const mn = p({
  components: {
    FormControlErrors: vn,
    FormControlFeedback: bn
  },
  directives: {
    bindEvents: {
      created(e, t) {
        var r, o;
        (o = (r = t.instance) == null ? void 0 : r.bindEvents) == null || o.call(r, e);
      }
    }
  },
  mixins: [
    Se
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
      default: () => l("animated", !1)
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
      default: () => l("controlClass", "form-control")
    },
    /**
     * Add form-group wrapper to input.
     */
    group: {
      type: Boolean,
      default: () => l("group", !0)
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
      default: () => l("indicator", "spinner")
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
      default: () => l("labelClass", "form-label")
    },
    /**
     * The model default value.
     */
    modelValue: {
      type: [Boolean, Number, String, Array, Object],
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
      isDirty: !1
    };
  },
  computed: {
    model: {
      get() {
        return this.getModelValue();
      },
      set(e) {
        this.setModelValue(e);
      }
    },
    id() {
      return this.$attrs.id || Math.random().toString(36).slice(2);
    },
    isEmpty() {
      return pn(this.model);
    },
    isInvalid() {
      return !!(this.invalid || this.error || (Array.isArray(this.errors) ? this.errors.length : this.errors[this.$attrs.id || this.$attrs.name]));
    },
    isValid() {
      return !!(this.valid || this.feedback);
    },
    componentName() {
      return this.$options.name;
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
        "is-valid": this.isValid,
        "is-invalid": this.isInvalid
      }, this.shadowableClass);
    },
    controlSizeClass() {
      return ge(this.size, this.formControlClass);
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
        "is-invalid": this.isInvalid,
        "is-valid": this.isValid,
        [this.$attrs.class]: !!this.$attrs.class,
        [this.size && ge(this.size, this.componentName)]: !!this.size
      }, !!this.componentName && {
        [N(this.componentName)]: !0
      });
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
      return this.errors && !Array.isArray(this.errors) && (e = this.errors[this.$attrs.name || this.$attrs.id]), !e || Array.isArray(e) || Q(e) ? e : [e];
    },
    getModelValue() {
      return this.modelValue !== void 0 ? this.modelValue : this.currentValue;
    },
    setModelValue(e) {
      this.hasChanged = !0, this.currentValue = e, this.$emit("update:modelValue", e);
    }
  }
});
function H(e, t, r = "-") {
  const o = String(t).replace(new RegExp(`^${e}${r}?`), "");
  return [
    N(o),
    e
  ].filter((n) => !!n).join(r);
}
function je(e) {
  return !Array.isArray(e) && typeof e == "object";
}
p({
  directives: {
    bindEvents: {
      beforeMount(e, t) {
        var r, o;
        (o = (r = t.instance) == null ? void 0 : r.bindEvents) == null || o.call(r, e);
      }
    }
  },
  mixins: [
    Se
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
      default: () => l("animated", !1)
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
      default: () => l("defaultControlClass", "form-control")
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
      default: () => l("group", !0)
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
      default: () => l("indicator", "spinner")
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
      default: () => l("labelClass", "form-label")
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
      return H(this.size, this.controlClass);
    },
    formGroupClasses() {
      return Object.assign({
        [this.size && H(this.size, this.componentName)]: !!this.size,
        animated: this.animated,
        "default-empty": this.defaultEmpty,
        "form-group": this.group,
        [this.size && H(this.size, "form-group")]: !!this.size,
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
        [N(this.componentName)]: !0
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
      const o = e instanceof HTMLSelectElement ? (r = e.querySelectorAll("option")) == null ? void 0 : r[e.selectedIndex] : null;
      o && (e.value = o == null ? void 0 : o.value), e.value && t(e.value), this.hasChanged = !!e.value, this.isEmpty = !e.value, e.addEventListener("focus", () => {
        this.hasFocus = !0;
      }), e.addEventListener("blur", () => {
        this.hasFocus = !1;
      }), e.addEventListener("input", () => {
        this.isEmpty = !1, this.hasChanged = !0;
      }), e.addEventListener(
        e.tagName === "SELECT" ? "change" : "input",
        () => t(e.value)
      ), this.nativeEvents.forEach((n) => {
        e.addEventListener(n, (u) => {
          this.$emit(n, u);
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
      return this.errors && je(this.errors) && (e = this.errors[this.$attrs.name || this.$attrs.id]), !e || Array.isArray(e) || je(e) ? e : [e];
    },
    shouldChangeOnFocus() {
      return !this.getInputField().readOnly;
    },
    onInput(e) {
      this.$emit("update:modelValue", e);
    }
  }
});
const gn = p({
  name: "InputField",
  components: {
    ActivityIndicator: St
  },
  extends: mn
});
const jn = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, n] of t)
    r[o] = n;
  return r;
}, $n = ["for"], Cn = { class: "form-group-inner" }, Sn = {
  invalid: "",
  class: "invalid-feedback"
}, An = /* @__PURE__ */ $("br", null, null, -1), On = {
  valid: "",
  class: "valid-feedback"
};
function En(e, t, r, o, n, u) {
  const b = R("activity-indicator"), V = R("FormControlErrors"), z = R("FormControlFeedback"), T = tt("bind-events");
  return a(), d("div", {
    class: W(["input-field", e.formGroupClasses])
  }, [
    c(e.$slots, "label", {}, () => [
      e.label ? (a(), d("label", {
        key: 0,
        ref: "label",
        class: W(e.labelClass),
        for: e.id
      }, O(e.label), 11, $n)) : g("", !0)
    ]),
    $("div", Cn, [
      c(e.$slots, "control", E(w({ bindEvents: e.bindEvents, controlAttributes: e.controlAttributes })), () => [
        e.$slots.icon ? (a(), d("div", {
          key: 0,
          class: "form-group-inner-icon",
          onClick: t[0] || (t[0] = (...s) => e.focus && e.focus(...s))
        }, [
          c(e.$slots, "icon")
        ])) : g("", !0),
        rt($("input", ot({
          ref: "field",
          "onUpdate:modelValue": t[1] || (t[1] = (s) => e.model = s)
        }, e.controlAttributes), null, 16), [
          [nt, e.model],
          [T]
        ])
      ]),
      c(e.$slots, "activity", {}, () => [
        X(it, { name: "input-field-fade" }, {
          default: D(() => [
            e.activity ? (a(), _(b, {
              key: "activity",
              ref: "activity",
              type: e.indicator,
              size: e.indicatorSize || e.size
            }, null, 8, ["type", "size"])) : g("", !0)
          ]),
          _: 1
        })
      ])
    ]),
    c(e.$slots, "errors", E(w({ error: e.error, errors: e.errors, id: e.$attrs.id, name: e.$attrs.name })), () => [
      e.error || e.errors ? (a(), _(V, {
        key: 0,
        id: e.$attrs.id,
        name: e.$attrs.name,
        error: e.error,
        errors: e.errors
      }, {
        default: D(({ error: s }) => [
          $("div", Sn, [
            st(O(s), 1),
            An
          ])
        ]),
        _: 1
      }, 8, ["id", "name", "error", "errors"])) : g("", !0)
    ]),
    c(e.$slots, "feedback", E(w({ feedback: e.feedback })), () => [
      X(z, { feedback: e.feedback }, {
        default: D(({ feedback: s }) => [
          $("div", On, O(s), 1)
        ]),
        _: 1
      }, 8, ["feedback"])
    ]),
    c(e.$slots, "help", {}, () => [
      e.helpText ? (a(), d("small", {
        key: 0,
        ref: "help"
      }, O(e.helpText), 513)) : g("", !0)
    ])
  ], 2);
}
const xn = /* @__PURE__ */ jn(gn, [["render", En]]);
export {
  xn as InputField
};
