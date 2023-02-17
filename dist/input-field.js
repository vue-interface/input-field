import { defineComponent as S, resolveComponent as Be, resolveDirective as Ie, openBlock as u, createElementBlock as f, normalizeClass as N, renderSlot as h, toDisplayString as L, createCommentVNode as y, createElementVNode as V, withDirectives as Te, mergeProps as Ne, vModelDynamic as Le, createVNode as Ve, Transition as De, withCtx as Me, createBlock as Pe, normalizeProps as Ue, guardReactiveProps as Re } from "vue";
const m = {};
function s(...e) {
  if (!e.length)
    return m;
  const [t, r] = e;
  return typeof t == "string" ? typeof m[t] < "u" ? m[t] : r : Array.isArray(t) ? t.reduce((i, o) => Object.assign(i, {
    //@ts-ignore
    [o]: m[o]
  }), {}) : Object.assign(m, ...e);
}
const oe = S({
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
var Ze = typeof global == "object" && global && global.Object === Object && global;
const se = Ze;
var Ge = typeof self == "object" && self && self.Object === Object && self, He = se || Ge || Function("return this")();
const l = He;
var _e = l.Symbol;
const v = _e;
var ae = Object.prototype, qe = ae.hasOwnProperty, We = ae.toString, g = v ? v.toStringTag : void 0;
function Ye(e) {
  var t = qe.call(e, g), r = e[g];
  try {
    e[g] = void 0;
    var i = !0;
  } catch {
  }
  var o = We.call(e);
  return i && (t ? e[g] = r : delete e[g]), o;
}
var Je = Object.prototype, Ke = Je.toString;
function Qe(e) {
  return Ke.call(e);
}
var Xe = "[object Null]", et = "[object Undefined]", D = v ? v.toStringTag : void 0;
function b(e) {
  return e == null ? e === void 0 ? et : Xe : D && D in Object(e) ? Ye(e) : Qe(e);
}
function A(e) {
  return e != null && typeof e == "object";
}
var tt = "[object Symbol]";
function rt(e) {
  return typeof e == "symbol" || A(e) && b(e) == tt;
}
function it(e, t) {
  for (var r = -1, i = e == null ? 0 : e.length, o = Array(i); ++r < i; )
    o[r] = t(e[r], r, e);
  return o;
}
var nt = Array.isArray;
const le = nt;
var ot = 1 / 0, M = v ? v.prototype : void 0, P = M ? M.toString : void 0;
function ue(e) {
  if (typeof e == "string")
    return e;
  if (le(e))
    return it(e, ue) + "";
  if (rt(e))
    return P ? P.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ot ? "-0" : t;
}
function T(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var st = "[object AsyncFunction]", at = "[object Function]", lt = "[object GeneratorFunction]", ut = "[object Proxy]";
function ce(e) {
  if (!T(e))
    return !1;
  var t = b(e);
  return t == at || t == lt || t == st || t == ut;
}
var ct = l["__core-js_shared__"];
const E = ct;
var U = function() {
  var e = /[^.]+$/.exec(E && E.keys && E.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function dt(e) {
  return !!U && U in e;
}
var ft = Function.prototype, ht = ft.toString;
function d(e) {
  if (e != null) {
    try {
      return ht.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var pt = /[\\^$.*+?()[\]{}|]/g, vt = /^\[object .+?Constructor\]$/, bt = Function.prototype, yt = Object.prototype, mt = bt.toString, gt = yt.hasOwnProperty, jt = RegExp(
  "^" + mt.call(gt).replace(pt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ct(e) {
  if (!T(e) || dt(e))
    return !1;
  var t = ce(e) ? jt : vt;
  return t.test(d(e));
}
function St(e, t) {
  return e == null ? void 0 : e[t];
}
function C(e, t) {
  var r = St(e, t);
  return Ct(r) ? r : void 0;
}
var At = C(l, "WeakMap");
const x = At;
var kt = 9007199254740991;
function de(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= kt;
}
function $t(e) {
  return e != null && de(e.length) && !ce(e);
}
var Et = Object.prototype;
function fe(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Et;
  return e === r;
}
var Ot = "[object Arguments]";
function R(e) {
  return A(e) && b(e) == Ot;
}
var he = Object.prototype, Ft = he.hasOwnProperty, xt = he.propertyIsEnumerable, wt = R(function() {
  return arguments;
}()) ? R : function(e) {
  return A(e) && Ft.call(e, "callee") && !xt.call(e, "callee");
};
const zt = wt;
function Bt() {
  return !1;
}
var pe = typeof exports == "object" && exports && !exports.nodeType && exports, Z = pe && typeof module == "object" && module && !module.nodeType && module, It = Z && Z.exports === pe, G = It ? l.Buffer : void 0, Tt = G ? G.isBuffer : void 0, Nt = Tt || Bt;
const Lt = Nt;
var Vt = "[object Arguments]", Dt = "[object Array]", Mt = "[object Boolean]", Pt = "[object Date]", Ut = "[object Error]", Rt = "[object Function]", Zt = "[object Map]", Gt = "[object Number]", Ht = "[object Object]", _t = "[object RegExp]", qt = "[object Set]", Wt = "[object String]", Yt = "[object WeakMap]", Jt = "[object ArrayBuffer]", Kt = "[object DataView]", Qt = "[object Float32Array]", Xt = "[object Float64Array]", er = "[object Int8Array]", tr = "[object Int16Array]", rr = "[object Int32Array]", ir = "[object Uint8Array]", nr = "[object Uint8ClampedArray]", or = "[object Uint16Array]", sr = "[object Uint32Array]", n = {};
n[Qt] = n[Xt] = n[er] = n[tr] = n[rr] = n[ir] = n[nr] = n[or] = n[sr] = !0;
n[Vt] = n[Dt] = n[Jt] = n[Mt] = n[Kt] = n[Pt] = n[Ut] = n[Rt] = n[Zt] = n[Gt] = n[Ht] = n[_t] = n[qt] = n[Wt] = n[Yt] = !1;
function ar(e) {
  return A(e) && de(e.length) && !!n[b(e)];
}
function lr(e) {
  return function(t) {
    return e(t);
  };
}
var ve = typeof exports == "object" && exports && !exports.nodeType && exports, j = ve && typeof module == "object" && module && !module.nodeType && module, ur = j && j.exports === ve, O = ur && se.process, cr = function() {
  try {
    var e = j && j.require && j.require("util").types;
    return e || O && O.binding && O.binding("util");
  } catch {
  }
}();
const H = cr;
var _ = H && H.isTypedArray, dr = _ ? lr(_) : ar;
const fr = dr;
function hr(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var pr = hr(Object.keys, Object);
const vr = pr;
var br = Object.prototype, yr = br.hasOwnProperty;
function mr(e) {
  if (!fe(e))
    return vr(e);
  var t = [];
  for (var r in Object(e))
    yr.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var gr = C(l, "Map");
const w = gr;
function be(e) {
  return e == null ? "" : ue(e);
}
function jr(e, t, r, i) {
  var o = -1, a = e == null ? 0 : e.length;
  for (i && a && (r = e[++o]); ++o < a; )
    r = t(r, e[o], o, e);
  return r;
}
function Cr(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var Sr = {
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
}, Ar = Cr(Sr);
const kr = Ar;
var $r = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Er = "\\u0300-\\u036f", Or = "\\ufe20-\\ufe2f", Fr = "\\u20d0-\\u20ff", xr = Er + Or + Fr, wr = "[" + xr + "]", zr = RegExp(wr, "g");
function Br(e) {
  return e = be(e), e && e.replace($r, kr).replace(zr, "");
}
var Ir = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function Tr(e) {
  return e.match(Ir) || [];
}
var Nr = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function Lr(e) {
  return Nr.test(e);
}
var ye = "\\ud800-\\udfff", Vr = "\\u0300-\\u036f", Dr = "\\ufe20-\\ufe2f", Mr = "\\u20d0-\\u20ff", Pr = Vr + Dr + Mr, me = "\\u2700-\\u27bf", ge = "a-z\\xdf-\\xf6\\xf8-\\xff", Ur = "\\xac\\xb1\\xd7\\xf7", Rr = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Zr = "\\u2000-\\u206f", Gr = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", je = "A-Z\\xc0-\\xd6\\xd8-\\xde", Hr = "\\ufe0e\\ufe0f", Ce = Ur + Rr + Zr + Gr, Se = "['’]", q = "[" + Ce + "]", _r = "[" + Pr + "]", Ae = "\\d+", qr = "[" + me + "]", ke = "[" + ge + "]", $e = "[^" + ye + Ce + Ae + me + ge + je + "]", Wr = "\\ud83c[\\udffb-\\udfff]", Yr = "(?:" + _r + "|" + Wr + ")", Jr = "[^" + ye + "]", Ee = "(?:\\ud83c[\\udde6-\\uddff]){2}", Oe = "[\\ud800-\\udbff][\\udc00-\\udfff]", p = "[" + je + "]", Kr = "\\u200d", W = "(?:" + ke + "|" + $e + ")", Qr = "(?:" + p + "|" + $e + ")", Y = "(?:" + Se + "(?:d|ll|m|re|s|t|ve))?", J = "(?:" + Se + "(?:D|LL|M|RE|S|T|VE))?", Fe = Yr + "?", xe = "[" + Hr + "]?", Xr = "(?:" + Kr + "(?:" + [Jr, Ee, Oe].join("|") + ")" + xe + Fe + ")*", ei = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", ti = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ri = xe + Fe + Xr, ii = "(?:" + [qr, Ee, Oe].join("|") + ")" + ri, ni = RegExp([
  p + "?" + ke + "+" + Y + "(?=" + [q, p, "$"].join("|") + ")",
  Qr + "+" + J + "(?=" + [q, p + W, "$"].join("|") + ")",
  p + "?" + W + "+" + Y,
  p + "+" + J,
  ti,
  ei,
  Ae,
  ii
].join("|"), "g");
function oi(e) {
  return e.match(ni) || [];
}
function si(e, t, r) {
  return e = be(e), t = r ? void 0 : t, t === void 0 ? Lr(e) ? oi(e) : Tr(e) : e.match(t) || [];
}
var ai = "['’]", li = RegExp(ai, "g");
function ui(e) {
  return function(t) {
    return jr(si(Br(t).replace(li, "")), e, "");
  };
}
var ci = C(l, "DataView");
const z = ci;
var di = C(l, "Promise");
const B = di;
var fi = C(l, "Set");
const I = fi;
var K = "[object Map]", hi = "[object Object]", Q = "[object Promise]", X = "[object Set]", ee = "[object WeakMap]", te = "[object DataView]", pi = d(z), vi = d(w), bi = d(B), yi = d(I), mi = d(x), c = b;
(z && c(new z(new ArrayBuffer(1))) != te || w && c(new w()) != K || B && c(B.resolve()) != Q || I && c(new I()) != X || x && c(new x()) != ee) && (c = function(e) {
  var t = b(e), r = t == hi ? e.constructor : void 0, i = r ? d(r) : "";
  if (i)
    switch (i) {
      case pi:
        return te;
      case vi:
        return K;
      case bi:
        return Q;
      case yi:
        return X;
      case mi:
        return ee;
    }
  return t;
});
const gi = c;
var ji = "[object Map]", Ci = "[object Set]", Si = Object.prototype, Ai = Si.hasOwnProperty;
function re(e) {
  if (e == null)
    return !0;
  if ($t(e) && (le(e) || typeof e == "string" || typeof e.splice == "function" || Lt(e) || fr(e) || zt(e)))
    return !e.length;
  var t = gi(e);
  if (t == ji || t == Ci)
    return !e.size;
  if (fe(e))
    return !mr(e).length;
  for (var r in e)
    if (Ai.call(e, r))
      return !1;
  return !0;
}
var ki = ui(function(e, t, r) {
  return e + (r ? "-" : "") + t.toLowerCase();
});
const k = ki;
function ie(e, t, r = "-") {
  const i = String(t).replace(new RegExp(`^${e}${r}?`), "");
  return [
    k(i),
    e
  ].filter((o) => !!o).join(r);
}
const $i = S({
  directives: {
    bindEvents(e, t) {
      var r;
      for (const i of (r = t.instance) == null ? void 0 : r.$options.emits)
        e.addEventListener(i, (o) => {
          var a;
          (a = t.instance) == null || a.$emit(i, o);
        });
      e.addEventListener("focus", () => {
        t.instance.isDirty = !0, t.instance.hasFocus = !0;
      }), e.addEventListener("blur", () => {
        t.instance.hasFocus = !1;
      });
    }
  },
  mixins: [
    oe
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
      default: () => s("animated", !1)
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
      default: () => s("controlClass", "form-control")
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
      default: () => s("indicator", "spinner")
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
      default: () => s("labelClass", "form-label")
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
      currentValue: this.modelValue,
      hasChanged: !1,
      hasFocus: !1,
      isDirty: !1,
      isEmpty: re(this.modelValue)
    };
  },
  computed: {
    id() {
      return this.$attrs.id || this.$attrs.name || Math.random().toString(36).slice(2);
    },
    componentName() {
      return this.$options.name;
    },
    formGroupClasses() {
      return Object.assign({
        animated: this.animated,
        "has-activity": this.activity,
        "has-changed": this.hasChanged,
        "has-focus": this.hasFocus,
        "has-icon": !!this.$slots.icon,
        "is-dirty": this.isDirty,
        "is-empty": this.isEmpty,
        "is-invalid": !!(this.invalid || this.invalidFeedback),
        "is-valid": !!(this.valid || this.validFeedback),
        [this.$attrs.class]: !!this.$attrs.class,
        [this.size && ie(this.size, this.componentName)]: !!this.size
      }, !!this.componentName && {
        [k(this.componentName)]: !0
      });
    },
    controlAttributes() {
      return Object.assign({}, this.$attrs, {
        id: this.id,
        class: this.controlClasses,
        value: this.modelValue
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
      return ie(this.size, this.formControlClass);
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
  watch: {
    currentValue(e) {
      this.hasChanged = !0, this.isEmpty = re(e), this.$emit("update:modelValue", e);
    }
  },
  methods: {
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
      return this.errors && !Array.isArray(this.errors) && (e = this.errors[this.$attrs.name || this.$attrs.id]), !e || Array.isArray(e) || T(e) ? e : [e];
    }
  }
});
function F(e, t, r = "-") {
  const i = String(t).replace(new RegExp(`^${e}${r}?`), "");
  return [
    k(i),
    e
  ].filter((o) => !!o).join(r);
}
function ne(e) {
  return !Array.isArray(e) && typeof e == "object";
}
S({
  directives: {
    bindEvents: {
      beforeMount(e, t) {
        var r, i;
        (i = (r = t.instance) == null ? void 0 : r.bindEvents) == null || i.call(r, e);
      }
    }
  },
  mixins: [
    oe
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
      default: () => s("animated", !1)
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
      default: () => s("defaultControlClass", "form-control")
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
      default: () => s("group", !0)
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
      default: () => s("indicator", "spinner")
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
      default: () => s("labelClass", "form-label")
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
      return F(this.size, this.controlClass);
    },
    formGroupClasses() {
      return Object.assign({
        [this.size && F(this.size, this.componentName)]: !!this.size,
        animated: this.animated,
        "default-empty": this.defaultEmpty,
        "form-group": this.group,
        [this.size && F(this.size, "form-group")]: !!this.size,
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
        [k(this.componentName)]: !0
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
      ), this.nativeEvents.forEach((o) => {
        e.addEventListener(o, (a) => {
          this.$emit(o, a);
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
      return this.errors && ne(this.errors) && (e = this.errors[this.$attrs.name || this.$attrs.id]), !e || Array.isArray(e) || ne(e) ? e : [e];
    },
    shouldChangeOnFocus() {
      return !this.getInputField().readOnly;
    },
    onInput(e) {
      this.$emit("update:modelValue", e);
    }
  }
});
const Ei = S({
  name: "InputField",
  extends: $i
});
const Oi = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [i, o] of t)
    r[i] = o;
  return r;
}, Fi = ["for"], xi = { class: "form-group-inner" }, wi = ["innerHTML"], zi = ["innerHTML"];
function Bi(e, t, r, i, o, a) {
  const we = Be("activity-indicator"), ze = Ie("bind-events");
  return u(), f("div", {
    class: N(["input-field form-group", e.formGroupClasses])
  }, [
    h(e.$slots, "label", {}, () => [
      e.label ? (u(), f("label", {
        key: 0,
        ref: "label",
        class: N(e.labelClass),
        for: e.id
      }, L(e.label), 11, Fi)) : y("", !0)
    ]),
    V("div", xi, [
      h(e.$slots, "control", {}, () => [
        e.$slots.icon ? (u(), f("div", {
          key: 0,
          class: "form-group-inner-icon",
          onClick: t[0] || (t[0] = (...$) => e.focus && e.focus(...$))
        }, [
          h(e.$slots, "icon")
        ])) : y("", !0),
        Te(V("input", Ne({
          ref: "field",
          "onUpdate:modelValue": t[1] || (t[1] = ($) => e.currentValue = $)
        }, e.controlAttributes), null, 16), [
          [Le, e.currentValue],
          [ze]
        ])
      ]),
      h(e.$slots, "activity", {}, () => [
        Ve(De, { name: "input-field-fade" }, {
          default: Me(() => [
            e.activity ? (u(), Pe(we, {
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
    h(e.$slots, "feedback", Ue(Re({ invalid: e.invalid, invalidFeedback: e.invalidFeedback, valid: e.valid, validFeedback: e.validFeedback })), () => [
      e.invalidFeedback ? (u(), f("div", {
        key: 0,
        class: "invalid-feedback",
        invalid: "",
        innerHTML: e.invalidFeedback
      }, null, 8, wi)) : e.validFeedback ? (u(), f("div", {
        key: 1,
        class: "valid-feedback",
        valid: "",
        innerHTML: e.validFeedback
      }, null, 8, zi)) : y("", !0)
    ]),
    h(e.$slots, "help", {}, () => [
      e.helpText ? (u(), f("small", {
        key: 0,
        ref: "help"
      }, L(e.helpText), 513)) : y("", !0)
    ])
  ], 2);
}
const Ti = /* @__PURE__ */ Oi(Ei, [["render", Bi]]);
export {
  Ti as InputField
};
