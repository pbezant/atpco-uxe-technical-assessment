const tA = globalThis, $A = tA.ShadowRoot && (tA.ShadyCSS === void 0 || tA.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, e1 = /* @__PURE__ */ Symbol(), f1 = /* @__PURE__ */ new WeakMap();
let pi = class {
  constructor(e, A, i) {
    if (this._$cssResult$ = !0, i !== e1) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = A;
  }
  get styleSheet() {
    let e = this.o;
    const A = this.t;
    if ($A && e === void 0) {
      const i = A !== void 0 && A.length === 1;
      i && (e = f1.get(A)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && f1.set(A, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const xa = (t) => new pi(typeof t == "string" ? t : t + "", void 0, e1), k = (t, ...e) => {
  const A = t.length === 1 ? t[0] : e.reduce((i, a, r) => i + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(a) + t[r + 1], t[0]);
  return new pi(A, t, e1);
}, Ta = (t, e) => {
  if ($A) t.adoptedStyleSheets = e.map((A) => A instanceof CSSStyleSheet ? A : A.styleSheet);
  else for (const A of e) {
    const i = document.createElement("style"), a = tA.litNonce;
    a !== void 0 && i.setAttribute("nonce", a), i.textContent = A.cssText, t.appendChild(i);
  }
}, v1 = $A ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let A = "";
  for (const i of e.cssRules) A += i.cssText;
  return xa(A);
})(t) : t;
const { is: Oa, defineProperty: Ha, getOwnPropertyDescriptor: Za, getOwnPropertyNames: Ya, getOwnPropertySymbols: za, getPrototypeOf: Na } = Object, IA = globalThis, k1 = IA.trustedTypes, Fa = k1 ? k1.emptyScript : "", Ra = IA.reactiveElementPolyfillSupport, xt = (t, e) => t, rA = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? Fa : null;
      break;
    case Object:
    case Array:
      t = t == null ? t : JSON.stringify(t);
  }
  return t;
}, fromAttribute(t, e) {
  let A = t;
  switch (e) {
    case Boolean:
      A = t !== null;
      break;
    case Number:
      A = t === null ? null : Number(t);
      break;
    case Object:
    case Array:
      try {
        A = JSON.parse(t);
      } catch {
        A = null;
      }
  }
  return A;
} }, t1 = (t, e) => !Oa(t, e), y1 = { attribute: !0, type: String, converter: rA, reflect: !1, useDefault: !1, hasChanged: t1 };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), IA.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let nt = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ??= []).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, A = y1) {
    if (A.state && (A.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((A = Object.create(A)).wrapped = !0), this.elementProperties.set(e, A), !A.noAccessor) {
      const i = /* @__PURE__ */ Symbol(), a = this.getPropertyDescriptor(e, i, A);
      a !== void 0 && Ha(this.prototype, e, a);
    }
  }
  static getPropertyDescriptor(e, A, i) {
    const { get: a, set: r } = Za(this.prototype, e) ?? { get() {
      return this[A];
    }, set(n) {
      this[A] = n;
    } };
    return { get: a, set(n) {
      const s = a?.call(this);
      r?.call(this, n), this.requestUpdate(e, s, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? y1;
  }
  static _$Ei() {
    if (this.hasOwnProperty(xt("elementProperties"))) return;
    const e = Na(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(xt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(xt("properties"))) {
      const A = this.properties, i = [...Ya(A), ...za(A)];
      for (const a of i) this.createProperty(a, A[a]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const A = litPropertyMetadata.get(e);
      if (A !== void 0) for (const [i, a] of A) this.elementProperties.set(i, a);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [A, i] of this.elementProperties) {
      const a = this._$Eu(A, i);
      a !== void 0 && this._$Eh.set(a, A);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const A = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const a of i) A.unshift(v1(a));
    } else e !== void 0 && A.push(v1(e));
    return A;
  }
  static _$Eu(e, A) {
    const i = A.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
  }
  addController(e) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
  }
  removeController(e) {
    this._$EO?.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), A = this.constructor.elementProperties;
    for (const i of A.keys()) this.hasOwnProperty(i) && (e.set(i, this[i]), delete this[i]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Ta(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((e) => e.hostDisconnected?.());
  }
  attributeChangedCallback(e, A, i) {
    this._$AK(e, i);
  }
  _$ET(e, A) {
    const i = this.constructor.elementProperties.get(e), a = this.constructor._$Eu(e, i);
    if (a !== void 0 && i.reflect === !0) {
      const r = (i.converter?.toAttribute !== void 0 ? i.converter : rA).toAttribute(A, i.type);
      this._$Em = e, r == null ? this.removeAttribute(a) : this.setAttribute(a, r), this._$Em = null;
    }
  }
  _$AK(e, A) {
    const i = this.constructor, a = i._$Eh.get(e);
    if (a !== void 0 && this._$Em !== a) {
      const r = i.getPropertyOptions(a), n = typeof r.converter == "function" ? { fromAttribute: r.converter } : r.converter?.fromAttribute !== void 0 ? r.converter : rA;
      this._$Em = a;
      const s = n.fromAttribute(A, r.type);
      this[a] = s ?? this._$Ej?.get(a) ?? s, this._$Em = null;
    }
  }
  requestUpdate(e, A, i, a = !1, r) {
    if (e !== void 0) {
      const n = this.constructor;
      if (a === !1 && (r = this[e]), i ??= n.getPropertyOptions(e), !((i.hasChanged ?? t1)(r, A) || i.useDefault && i.reflect && r === this._$Ej?.get(e) && !this.hasAttribute(n._$Eu(e, i)))) return;
      this.C(e, A, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, A, { useDefault: i, reflect: a, wrapped: r }, n) {
    i && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, n ?? A ?? this[e]), r !== !0 || n !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (A = void 0), this._$AL.set(e, A)), a === !0 && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (A) {
      Promise.reject(A);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [a, r] of this._$Ep) this[a] = r;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [a, r] of i) {
        const { wrapped: n } = r, s = this[a];
        n !== !0 || this._$AL.has(a) || s === void 0 || this.C(a, void 0, r, s);
      }
    }
    let e = !1;
    const A = this._$AL;
    try {
      e = this.shouldUpdate(A), e ? (this.willUpdate(A), this._$EO?.forEach((i) => i.hostUpdate?.()), this.update(A)) : this._$EM();
    } catch (i) {
      throw e = !1, this._$EM(), i;
    }
    e && this._$AE(A);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    this._$EO?.forEach((A) => A.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Eq &&= this._$Eq.forEach((A) => this._$ET(A, this[A])), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
nt.elementStyles = [], nt.shadowRootOptions = { mode: "open" }, nt[xt("elementProperties")] = /* @__PURE__ */ new Map(), nt[xt("finalized")] = /* @__PURE__ */ new Map(), Ra?.({ ReactiveElement: nt }), (IA.reactiveElementVersions ??= []).push("2.1.2");
const A1 = globalThis, w1 = (t) => t, nA = A1.trustedTypes, S1 = nA ? nA.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, ui = "$lit$", Je = `lit$${Math.random().toFixed(9).slice(2)}$`, hi = "?" + Je, Va = `<${hi}>`, je = document, Ht = () => je.createComment(""), Zt = (t) => t === null || typeof t != "object" && typeof t != "function", i1 = Array.isArray, Pa = (t) => i1(t) || typeof t?.[Symbol.iterator] == "function", SA = `[ 	
\f\r]`, St = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, M1 = /-->/g, J1 = />/g, Fe = RegExp(`>|${SA}(?:([^\\s"'>=/]+)(${SA}*=${SA}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), L1 = /'/g, D1 = /"/g, Ii = /^(?:script|style|textarea|title)$/i, Ua = (t) => (e, ...A) => ({ _$litType$: t, strings: e, values: A }), g = Ua(1), xe = /* @__PURE__ */ Symbol.for("lit-noChange"), u = /* @__PURE__ */ Symbol.for("lit-nothing"), x1 = /* @__PURE__ */ new WeakMap(), Ue = je.createTreeWalker(je, 129);
function mi(t, e) {
  if (!i1(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return S1 !== void 0 ? S1.createHTML(e) : e;
}
const Ka = (t, e) => {
  const A = t.length - 1, i = [];
  let a, r = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", n = St;
  for (let s = 0; s < A; s++) {
    const o = t[s];
    let d, c, p = -1, B = 0;
    for (; B < o.length && (n.lastIndex = B, c = n.exec(o), c !== null); ) B = n.lastIndex, n === St ? c[1] === "!--" ? n = M1 : c[1] !== void 0 ? n = J1 : c[2] !== void 0 ? (Ii.test(c[2]) && (a = RegExp("</" + c[2], "g")), n = Fe) : c[3] !== void 0 && (n = Fe) : n === Fe ? c[0] === ">" ? (n = a ?? St, p = -1) : c[1] === void 0 ? p = -2 : (p = n.lastIndex - c[2].length, d = c[1], n = c[3] === void 0 ? Fe : c[3] === '"' ? D1 : L1) : n === D1 || n === L1 ? n = Fe : n === M1 || n === J1 ? n = St : (n = Fe, a = void 0);
    const h = n === Fe && t[s + 1].startsWith("/>") ? " " : "";
    r += n === St ? o + Va : p >= 0 ? (i.push(d), o.slice(0, p) + ui + o.slice(p) + Je + h) : o + Je + (p === -2 ? s : h);
  }
  return [mi(t, r + (t[A] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class Yt {
  constructor({ strings: e, _$litType$: A }, i) {
    let a;
    this.parts = [];
    let r = 0, n = 0;
    const s = e.length - 1, o = this.parts, [d, c] = Ka(e, A);
    if (this.el = Yt.createElement(d, i), Ue.currentNode = this.el.content, A === 2 || A === 3) {
      const p = this.el.content.firstChild;
      p.replaceWith(...p.childNodes);
    }
    for (; (a = Ue.nextNode()) !== null && o.length < s; ) {
      if (a.nodeType === 1) {
        if (a.hasAttributes()) for (const p of a.getAttributeNames()) if (p.endsWith(ui)) {
          const B = c[n++], h = a.getAttribute(p).split(Je), S = /([.?@])?(.*)/.exec(B);
          o.push({ type: 1, index: r, name: S[2], strings: h, ctor: S[1] === "." ? ja : S[1] === "?" ? Xa : S[1] === "@" ? Wa : mA }), a.removeAttribute(p);
        } else p.startsWith(Je) && (o.push({ type: 6, index: r }), a.removeAttribute(p));
        if (Ii.test(a.tagName)) {
          const p = a.textContent.split(Je), B = p.length - 1;
          if (B > 0) {
            a.textContent = nA ? nA.emptyScript : "";
            for (let h = 0; h < B; h++) a.append(p[h], Ht()), Ue.nextNode(), o.push({ type: 2, index: ++r });
            a.append(p[B], Ht());
          }
        }
      } else if (a.nodeType === 8) if (a.data === hi) o.push({ type: 2, index: r });
      else {
        let p = -1;
        for (; (p = a.data.indexOf(Je, p + 1)) !== -1; ) o.push({ type: 7, index: r }), p += Je.length - 1;
      }
      r++;
    }
  }
  static createElement(e, A) {
    const i = je.createElement("template");
    return i.innerHTML = e, i;
  }
}
function Ct(t, e, A = t, i) {
  if (e === xe) return e;
  let a = i !== void 0 ? A._$Co?.[i] : A._$Cl;
  const r = Zt(e) ? void 0 : e._$litDirective$;
  return a?.constructor !== r && (a?._$AO?.(!1), r === void 0 ? a = void 0 : (a = new r(t), a._$AT(t, A, i)), i !== void 0 ? (A._$Co ??= [])[i] = a : A._$Cl = a), a !== void 0 && (e = Ct(t, a._$AS(t, e.values), a, i)), e;
}
class Ga {
  constructor(e, A) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = A;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: A }, parts: i } = this._$AD, a = (e?.creationScope ?? je).importNode(A, !0);
    Ue.currentNode = a;
    let r = Ue.nextNode(), n = 0, s = 0, o = i[0];
    for (; o !== void 0; ) {
      if (n === o.index) {
        let d;
        o.type === 2 ? d = new Rt(r, r.nextSibling, this, e) : o.type === 1 ? d = new o.ctor(r, o.name, o.strings, this, e) : o.type === 6 && (d = new qa(r, this, e)), this._$AV.push(d), o = i[++s];
      }
      n !== o?.index && (r = Ue.nextNode(), n++);
    }
    return Ue.currentNode = je, a;
  }
  p(e) {
    let A = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, A), A += i.strings.length - 2) : i._$AI(e[A])), A++;
  }
}
class Rt {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(e, A, i, a) {
    this.type = 2, this._$AH = u, this._$AN = void 0, this._$AA = e, this._$AB = A, this._$AM = i, this.options = a, this._$Cv = a?.isConnected ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const A = this._$AM;
    return A !== void 0 && e?.nodeType === 11 && (e = A.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, A = this) {
    e = Ct(this, e, A), Zt(e) ? e === u || e == null || e === "" ? (this._$AH !== u && this._$AR(), this._$AH = u) : e !== this._$AH && e !== xe && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Pa(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== u && Zt(this._$AH) ? this._$AA.nextSibling.data = e : this.T(je.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    const { values: A, _$litType$: i } = e, a = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = Yt.createElement(mi(i.h, i.h[0]), this.options)), i);
    if (this._$AH?._$AD === a) this._$AH.p(A);
    else {
      const r = new Ga(a, this), n = r.u(this.options);
      r.p(A), this.T(n), this._$AH = r;
    }
  }
  _$AC(e) {
    let A = x1.get(e.strings);
    return A === void 0 && x1.set(e.strings, A = new Yt(e)), A;
  }
  k(e) {
    i1(this._$AH) || (this._$AH = [], this._$AR());
    const A = this._$AH;
    let i, a = 0;
    for (const r of e) a === A.length ? A.push(i = new Rt(this.O(Ht()), this.O(Ht()), this, this.options)) : i = A[a], i._$AI(r), a++;
    a < A.length && (this._$AR(i && i._$AB.nextSibling, a), A.length = a);
  }
  _$AR(e = this._$AA.nextSibling, A) {
    for (this._$AP?.(!1, !0, A); e !== this._$AB; ) {
      const i = w1(e).nextSibling;
      w1(e).remove(), e = i;
    }
  }
  setConnected(e) {
    this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
  }
}
class mA {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, A, i, a, r) {
    this.type = 1, this._$AH = u, this._$AN = void 0, this.element = e, this.name = A, this._$AM = a, this.options = r, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = u;
  }
  _$AI(e, A = this, i, a) {
    const r = this.strings;
    let n = !1;
    if (r === void 0) e = Ct(this, e, A, 0), n = !Zt(e) || e !== this._$AH && e !== xe, n && (this._$AH = e);
    else {
      const s = e;
      let o, d;
      for (e = r[0], o = 0; o < r.length - 1; o++) d = Ct(this, s[i + o], A, o), d === xe && (d = this._$AH[o]), n ||= !Zt(d) || d !== this._$AH[o], d === u ? e = u : e !== u && (e += (d ?? "") + r[o + 1]), this._$AH[o] = d;
    }
    n && !a && this.j(e);
  }
  j(e) {
    e === u ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ja extends mA {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === u ? void 0 : e;
  }
}
class Xa extends mA {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== u);
  }
}
class Wa extends mA {
  constructor(e, A, i, a, r) {
    super(e, A, i, a, r), this.type = 5;
  }
  _$AI(e, A = this) {
    if ((e = Ct(this, e, A, 0) ?? u) === xe) return;
    const i = this._$AH, a = e === u && i !== u || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, r = e !== u && (i === u || a);
    a && this.element.removeEventListener(this.name, this, i), r && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class qa {
  constructor(e, A, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = A, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Ct(this, e);
  }
}
const _a = A1.litHtmlPolyfillSupport;
_a?.(Yt, Rt), (A1.litHtmlVersions ??= []).push("3.3.2");
const $a = (t, e, A) => {
  const i = A?.renderBefore ?? e;
  let a = i._$litPart$;
  if (a === void 0) {
    const r = A?.renderBefore ?? null;
    i._$litPart$ = a = new Rt(e.insertBefore(Ht(), r), r, void 0, A ?? {});
  }
  return a._$AI(t), a;
};
const a1 = globalThis;
let b = class extends nt {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const e = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= e.firstChild, e;
  }
  update(e) {
    const A = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = $a(A, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return xe;
  }
};
b._$litElement$ = !0, b.finalized = !0, a1.litElementHydrateSupport?.({ LitElement: b });
const er = a1.litElementPolyfillSupport;
er?.({ LitElement: b });
(a1.litElementVersions ??= []).push("4.2.2");
const Z = (t) => t ?? u;
const Q = (t) => (e, A) => {
  A !== void 0 ? A.addInitializer(() => {
    customElements.define(t, e);
  }) : customElements.define(t, e);
};
const tr = { attribute: !0, type: String, converter: rA, reflect: !1, hasChanged: t1 }, Ar = (t = tr, e, A) => {
  const { kind: i, metadata: a } = A;
  let r = globalThis.litPropertyMetadata.get(a);
  if (r === void 0 && globalThis.litPropertyMetadata.set(a, r = /* @__PURE__ */ new Map()), i === "setter" && ((t = Object.create(t)).wrapped = !0), r.set(A.name, t), i === "accessor") {
    const { name: n } = A;
    return { set(s) {
      const o = e.get.call(this);
      e.set.call(this, s), this.requestUpdate(n, o, t, !0, s);
    }, init(s) {
      return s !== void 0 && this.C(n, void 0, t, s), s;
    } };
  }
  if (i === "setter") {
    const { name: n } = A;
    return function(s) {
      const o = this[n];
      e.call(this, s), this.requestUpdate(n, o, t, !0, s);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function l(t) {
  return (e, A) => typeof A == "object" ? Ar(t, e, A) : ((i, a, r) => {
    const n = a.hasOwnProperty(r);
    return a.constructor.createProperty(r, i), n ? Object.getOwnPropertyDescriptor(a, r) : void 0;
  })(t, e, A);
}
function ir(t) {
  return l({ ...t, state: !0, attribute: !1 });
}
const Bi = (t, e, A) => (A.configurable = !0, A.enumerable = !0, Reflect.decorate && typeof e != "object" && Object.defineProperty(t, e, A), A);
function Vt(t, e) {
  return (A, i, a) => {
    const r = (n) => n.renderRoot?.querySelector(t) ?? null;
    return Bi(A, i, { get() {
      return r(this);
    } });
  };
}
function qe(t) {
  return (e, A) => {
    const { slot: i, selector: a } = t ?? {}, r = "slot" + (i ? `[name=${i}]` : ":not([name])");
    return Bi(e, A, { get() {
      const n = this.renderRoot?.querySelector(r), s = n?.assignedElements(t) ?? [];
      return a === void 0 ? s : s.filter((o) => o.matches(a));
    } });
  };
}
const ar = k`
  .alert {
    display: flex;
    align-items: center;
    gap: var(--atp-space-s);
    min-block-size: var(--atp-alert-height);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-s);
    font-weight: var(--atp-font-weight-semibold);
    line-height: var(--atp-line-height-body-s);
  }

  .alert .label-button-container {
    display: flex;
    align-items: center;
    gap: var(--atp-space-xs);
  }

  .buttons {
    display: flex;
    gap: var(--atp-space-xs);
  }

  .alert.full {
    padding-block: var(--atp-space-xs);
    padding-inline: 40px;
    justify-content: space-between;
  }

  :where(.toast, .expandable, .page, .page-small) {
    padding-block: var(--atp-space-xs);
    padding-inline: var(--atp-space-s);
    border-radius: var(--atp-border-radius-m);
    justify-content: flex-start;
  }

  .page-small {
    inline-size: fit-content;
    block-size: var(--atp-alert-page-small-height);
    min-block-size: var(--atp-alert-page-small-height);
    padding-block: var(--atp-space-xs);
    padding-inline: var(--atp-space-xs);
  }

  .page-small .label {
    font-size: var(--atp-font-size-body-xs);
    font-weight: var(--atp-font-weight-regular);
    line-height: var(--atp-line-height-body-xs);
  }

  :is(.page, .page-small) .label-button-container {
    gap: var(--atp-space-s);
    flex-grow: 1;
  }

  :is(.toast, .expandable) .label-button-container {
    justify-content: space-between;
    flex-grow: 1;
  }

  :is(.page, .page-small).info {
    border: 1px solid var(--atp-content-primary-medium-enabled);
    background: var(--atp-element-fill-blue-medium-enabled);
    color: var(--atp-content-primary-strong-enabled);
  }

  .danger:where(.toast, .expandable, .full) {
    color: var(--atp-content-inverse-medium-enabled);
    background: var(--atp-danger-primary-strong-enabled);
  }

  .warning:where(.toast, .expandable, .full) {
    color: var(--atp-content-primary-strong-enabled);
    background: var(--atp-element-fill-orange-strong-enabled);
  }

  :is(.page, .page-small).danger {
    border: 1px solid var(--atp-danger-primary-strong-enabled);
    background: var(--atp-element-fill-red-weak-enabled);
    color: var(--atp-danger-primary-strong-enabled);
  }

  .page-small.danger {
    color: var(--atp-content-primary-strong-enabled);
  }

  :is(.page, .page-small).warning {
    border: 1px solid var(--atp-element-fill-orange-strong-enabled);
    background: var(--atp-element-fill-orange-weak-enabled);
    color: var(--atp-content-primary-strong-enabled);
  }

  .toast.info {
    color: var(--atp-content-inverse-medium-enabled);
    background: var(--atp-element-fill-primary-strong-enabled);
  }

  .expandable.info,
  .full.info {
    background: var(--atp-element-fill-blue-strong-enabled);
    color: var(--atp-content-inverse-medium-enabled);
  }

  .expandable.open {
    border-start-start-radius: var(--atp-border-radius-m);
    border-start-end-radius: var(--atp-border-radius-m);
    border-end-start-radius: 0;
    border-end-end-radius: 0;
  }

  .outer-wrapper:has(.toast),
  .outer-wrapper:has(.expandable) {
    box-shadow: var(--atp-box-shadow-toast);
    border-radius: var(--atp-border-radius-m);
  }

  .content-wrapper {
    border-start-start-radius: 0;
    border-start-end-radius: 0;
    border-end-start-radius: var(--atp-border-radius-m);
    border-end-end-radius: var(--atp-border-radius-m);
    border: 1px solid var(--atp-element-fill-blue-strong-enabled);
    background: var(--atp-element-fill-blue-medium-enabled);
  }

  .danger + .content-wrapper {
    border: 1px solid var(--atp-danger-primary-strong-enabled);
    background: var(--atp-element-fill-red-weak-enabled);
  }

  .warning + .content-wrapper {
    border: 1px solid var(--atp-element-fill-orange-strong-enabled);
    background: var(--atp-element-fill-orange-weak-enabled);
  }

  .toggle {
    transition: all var(--atp-transition-standard);
  }

  .toggle.rotate {
    transform: rotate(-90deg);
  }
`, rr = k`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .icon-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    inline-size: fit-content;
    position: relative;
  }

  .icon-container .icon {
    fill: var(--atp-icon-fill, var(--atp-slate-900));
  }

  .badge {
    position: absolute;
    inset-block-end: 50%;
    inset-inline-start: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    block-size: calc(var(--atp-line-height-body-xs) + 2 * (var(--atp-space-xxxs)));
    inline-size: auto;
    aspect-ratio: 1;
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-xs);
    font-weight: var(--atp-font-weight-regular);
    line-height: var(--atp-line-height-body-xs);
    text-align: center;
    vertical-align: middle;
    border-radius: 50%;
  }
`;
const r1 = { ATTRIBUTE: 1, CHILD: 2 }, n1 = (t) => (...e) => ({ _$litDirective$: t, values: e });
class s1 {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, A, i) {
    this._$Ct = e, this._$AM = A, this._$Ci = i;
  }
  _$AS(e, A) {
    return this.update(e, A);
  }
  update(e, A) {
    return this.render(...A);
  }
}
let NA = class extends s1 {
  constructor(e) {
    if (super(e), this.it = u, e.type !== r1.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(e) {
    if (e === u || e == null) return this._t = void 0, this.it = e;
    if (e === xe) return e;
    if (typeof e != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (e === this.it) return this._t;
    this.it = e;
    const A = [e];
    return A.raw = A, this._t = { _$litType$: this.constructor.resultType, strings: A, values: [] };
  }
};
NA.directiveName = "unsafeHTML", NA.resultType = 1;
const T1 = n1(NA), O1 = {
  "icon-lightbulb": `
  <symbol id="icon-lightbulb" viewBox="0 0 12 16">
    <path d="M9.26562 9.09688C10.0312 8.2875 10.5 7.2 10.5 6C10.5 3.51563 8.48438 1.5 6 1.5C3.51563 1.5 1.5 3.51563 1.5 6C1.5 7.2 1.96875 8.2875 2.73438 9.09688C3.4 9.79688 4.1375 10.7844 4.4 12H7.6C7.8625 10.7812 8.6 9.79688 9.26562 9.09688ZM10.3531 10.1281C9.61563 10.9063 9 11.8563 9 12.9281V13.5C9 14.8813 7.88125 16 6.5 16H5.5C4.11875 16 3 14.8813 3 13.5V12.9281C3 11.8563 2.38438 10.9063 1.64688 10.1281C0.625 9.05313 0 7.6 0 6C0 2.6875 2.6875 0 6 0C9.3125 0 12 2.6875 12 6C12 7.6 11.375 9.05313 10.3531 10.1281ZM4.5 5.75C4.5 6.16563 4.16563 6.5 3.75 6.5C3.33437 6.5 3 6.16563 3 5.75C3 4.23125 4.23125 3 5.75 3C6.16563 3 6.5 3.33438 6.5 3.75C6.5 4.16563 6.16563 4.5 5.75 4.5C5.05937 4.5 4.5 5.05938 4.5 5.75Z"/>
  </symbol>`,
  "icon-search": `<symbol id="icon-search" viewBox="0 0 16 16">
      <path
        
        d="M15.75 14.7188C16.0625 15.0729 16.0729 15.4271 15.7812 15.7812C15.6354 15.9271 15.4583 16 15.25 16C15.0625 16 14.875 15.9271 14.6875 15.7812L10.5 11.5938C9.375 12.5104 8.03125 12.9792 6.46875 13C4.63542 12.9583 3.11458 12.3229 1.90625 11.0938C0.677083 9.86458 0.0416667 8.33333 0 6.5C0.0416667 4.66667 0.666667 3.13542 1.875 1.90625C3.10417 0.677083 4.63542 0.0416667 6.46875 0C8.30208 0.0416667 9.83333 0.677083 11.0625 1.90625C12.2917 3.13542 12.9271 4.66667 12.9688 6.5C12.9479 8.04167 12.4792 9.38542 11.5625 10.5312L15.75 14.7188ZM1.5 6.5C1.54167 7.91667 2.03125 9.09375 2.96875 10.0312C3.90625 10.9688 5.08333 11.4583 6.5 11.5C7.91667 11.4583 9.09375 10.9688 10.0312 10.0312C10.9688 9.09375 11.4583 7.91667 11.5 6.5C11.4583 5.08333 10.9688 3.90625 10.0312 2.96875C9.09375 2.03125 7.91667 1.54167 6.5 1.5C5.08333 1.54167 3.90625 2.03125 2.96875 2.96875C2.03125 3.90625 1.54167 5.08333 1.5 6.5Z"
      />
    </symbol>`,
  "icon-paperclip-vertical": `<symbol id="icon-paperclip-vertical" viewBox="0 0 16 16">
      <path
        
        d="M7.5 16C6.22917 15.9583 5.16667 15.5208 4.3125 14.6875C3.47917 13.8333 3.04167 12.7708 3 11.5V3.375C3.02083 2.41667 3.35417 1.625 4 1C4.625 0.354167 5.41667 0.0208333 6.375 0C7.33333 0.0208333 8.125 0.354167 8.75 1C9.39583 1.625 9.72917 2.41667 9.75 3.375V10.75C9.72917 11.3958 9.51042 11.9271 9.09375 12.3438C8.67708 12.7604 8.14583 12.9792 7.5 13C6.85417 12.9792 6.32292 12.7604 5.90625 12.3438C5.48958 11.9271 5.27083 11.3958 5.25 10.75V4.75C5.29167 4.29167 5.54167 4.04167 6 4C6.45833 4.04167 6.70833 4.29167 6.75 4.75V10.75C6.79167 11.2083 7.04167 11.4583 7.5 11.5C7.95833 11.4583 8.20833 11.2083 8.25 10.75V3.375C8.22917 2.85417 8.04167 2.41667 7.6875 2.0625C7.33333 1.70833 6.89583 1.52083 6.375 1.5C5.85417 1.52083 5.41667 1.70833 5.0625 2.0625C4.70833 2.41667 4.52083 2.85417 4.5 3.375V11.5C4.52083 12.3542 4.8125 13.0625 5.375 13.625C5.9375 14.1875 6.64583 14.4792 7.5 14.5C8.35417 14.4792 9.0625 14.1875 9.625 13.625C10.1875 13.0625 10.4792 12.3542 10.5 11.5V4.75C10.5417 4.29167 10.7917 4.04167 11.25 4C11.7083 4.04167 11.9583 4.29167 12 4.75V11.5C11.9583 12.7708 11.5208 13.8333 10.6875 14.6875C9.83333 15.5208 8.77083 15.9583 7.5 16Z"
      />
    </symbol>`,
  "icon-x": `<symbol id="icon-x" viewBox="0 0 384 512">
      <path
        
        d="M345 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L73 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L39 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L311 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L345 137z"
      />
    </symbol>`,
  "icon-xmark": `<symbol id="icon-xmark" viewBox="0 0 384 512">
      <path
        
        d="M345 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L73 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L39 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L311 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L345 137z"
      />
    </symbol>`,
  "icon-upload": `<symbol id="icon-upload" viewBox="0 0 16 16">
      <path
        
        d="M14 9.5C14.5625 9.52083 15.0312 9.71875 15.4062 10.0938C15.7812 10.4688 15.9792 10.9375 16 11.5V14C15.9792 14.5625 15.7812 15.0312 15.4062 15.4062C15.0312 15.7812 14.5625 15.9792 14 16H2C1.4375 15.9792 0.96875 15.7812 0.59375 15.4062C0.21875 15.0312 0.0208333 14.5625 0 14V11.5C0.0208333 10.9375 0.21875 10.4688 0.59375 10.0938C0.96875 9.71875 1.4375 9.52083 2 9.5H6V11H2C1.6875 11.0208 1.52083 11.1875 1.5 11.5V14C1.52083 14.3125 1.6875 14.4792 2 14.5H14C14.3125 14.4792 14.4792 14.3125 14.5 14V11.5C14.4792 11.1875 14.3125 11.0208 14 11H10V9.5H14ZM4.25 5.5C3.91667 5.8125 3.57292 5.82292 3.21875 5.53125C2.92708 5.17708 2.92708 4.82292 3.21875 4.46875L7.46875 0.21875C7.82292 -0.0729167 8.17708 -0.0729167 8.53125 0.21875L12.7812 4.46875C13.0729 4.82292 13.0729 5.17708 12.7812 5.53125C12.6354 5.67708 12.4583 5.75 12.25 5.75C12.0417 5.75 11.8646 5.67708 11.7188 5.53125L8.75 2.5625V11C8.70833 11.4583 8.45833 11.7083 8 11.75C7.54167 11.7083 7.29167 11.4583 7.25 11V2.5625L4.25 5.5ZM13.5 12.75C13.4583 13.2083 13.2083 13.4583 12.75 13.5C12.2917 13.4583 12.0417 13.2083 12 12.75C12.0417 12.2917 12.2917 12.0417 12.75 12C13.2083 12.0417 13.4583 12.2917 13.5 12.75Z"
      />
    </symbol>`,
  "icon-download": `<symbol id="icon-download" viewBox="0 0 16 16">
      <path
        
        d="M14 9.5C14.5625 9.52083 15.0312 9.71875 15.4062 10.0938C15.7812 10.4688 15.9792 10.9375 16 11.5V14C15.9792 14.5625 15.7812 15.0312 15.4062 15.4062C15.0312 15.7812 14.5625 15.9792 14 16H2C1.4375 15.9792 0.96875 15.7812 0.59375 15.4062C0.21875 15.0312 0.0208333 14.5625 0 14V11.5C0.0208333 10.9375 0.21875 10.4688 0.59375 10.0938C0.96875 9.71875 1.4375 9.52083 2 9.5H3.6875L5.1875 11H2C1.6875 11.0208 1.52083 11.1875 1.5 11.5V14C1.52083 14.3125 1.6875 14.4792 2 14.5H14C14.3125 14.4792 14.4792 14.3125 14.5 14V11.5C14.4792 11.1875 14.3125 11.0208 14 11H10.8438L12.3438 9.5H14ZM13.5 12.75C13.4583 13.2083 13.2083 13.4583 12.75 13.5C12.2917 13.4583 12.0417 13.2083 12 12.75C12.0417 12.2917 12.2917 12.0417 12.75 12C13.2083 12.0417 13.4583 12.2917 13.5 12.75ZM7.46875 11.5L3.1875 7.28125C2.89583 6.92708 2.89583 6.57292 3.1875 6.21875C3.54167 5.92708 3.89583 5.92708 4.25 6.21875L7.25 9.1875V0.75C7.29167 0.291667 7.54167 0.0416667 8 0C8.45833 0.0416667 8.70833 0.291667 8.75 0.75V9.1875L11.7188 6.21875C12.0729 5.92708 12.4271 5.92708 12.7812 6.21875C13.0729 6.57292 13.0729 6.92708 12.7812 7.28125L8.53125 11.5312C8.38542 11.6771 8.20833 11.75 8 11.75C7.79167 11.75 7.61458 11.6667 7.46875 11.5Z"
      />
    </symbol>`,
  "icon-trending-down": `<symbol id="icon-trending-down" viewBox="0 0 18 16">
      <path
        
        d="M18 6.75V12.25C17.9583 12.7083 17.7083 12.9583 17.25 13H11.75C11.2917 12.9583 11.0417 12.7083 11 12.25C11.0417 11.7917 11.2917 11.5417 11.75 11.5H15.4375L10 6.0625L6.5 9.5C6.375 9.66667 6.20833 9.75 6 9.75C5.79167 9.75 5.61458 9.66667 5.46875 9.5L0.21875 4.25C0.0729167 4.125 0 3.95833 0 3.75C0.0416667 3.29167 0.291667 3.04167 0.75 3C0.958333 3 1.13542 3.07292 1.28125 3.21875L6 7.9375L9.46875 4.46875C9.61458 4.32292 9.79167 4.25 10 4.25C10.2083 4.25 10.3854 4.32292 10.5312 4.46875L16.5 10.4375V6.75C16.5417 6.29167 16.7917 6.04167 17.25 6C17.7083 6.04167 17.9583 6.29167 18 6.75Z"
      />
    </symbol>`,
  "icon-trending-up": `<symbol id="icon-trending-up" viewBox="0 0 18 16">
      <path
        
        d="M18 3.75V9.25C17.9583 9.70833 17.7083 9.95833 17.25 10C16.7917 9.95833 16.5417 9.70833 16.5 9.25V5.5625L10.5312 11.5312C10.3854 11.6771 10.2083 11.75 10 11.75C9.79167 11.75 9.61458 11.6771 9.46875 11.5312L6 8.0625L1.28125 12.7812C1.13542 12.9271 0.958333 13 0.75 13C0.458333 12.9792 0.260417 12.8854 0.15625 12.7188C0.0520833 12.5312 0 12.375 0 12.25C0 12.0417 0.0729167 11.8646 0.21875 11.7188L5.46875 6.46875C5.61458 6.32292 5.79167 6.25 6 6.25C6.20833 6.25 6.38542 6.32292 6.53125 6.46875L10 9.9375L15.4375 4.5H11.75C11.2917 4.45833 11.0417 4.20833 11 3.75C11.0417 3.29167 11.2917 3.04167 11.75 3H17.25C17.7083 3.04167 17.9583 3.29167 18 3.75Z"
      />
    </symbol>`,
  "icon-expand-less": `<symbol id="icon-expand-less" viewBox="0 0 32 18">
      <path
        id="expand-less"
        d="M15.7-14.3,30,0l1.406-1.406-15.7-15.7L0-1.406,1.406,0Z"
        transform="translate(0 17.109)"
      />
    </symbol>`,
  "icon-help-filled": `<symbol id="icon-help-filled" viewBox="0 0 30 30">
      <path
        id="help-filled"
        d="M15,30a14.914,14.914,0,0,1-3.992-.531A14.973,14.973,0,0,1,.531,18.992a15.271,15.271,0,0,1,0-7.984A14.977,14.977,0,0,1,11.008.531a15.271,15.271,0,0,1,7.984,0A14.97,14.97,0,0,1,29.469,11.008a15.271,15.271,0,0,1,0,7.984A14.966,14.966,0,0,1,18.992,29.469,14.9,14.9,0,0,1,15,30Zm-1-8v2h2V22Zm.84-13a2.77,2.77,0,0,1,2.753,1.462A3.564,3.564,0,0,1,18,12a2.254,2.254,0,0,1-1.169,2.143c-.227.176-.346.269-.455.356C14.644,15.884,14,17.374,14,20h2c0-2,.395-2.956,1.625-3.939.095-.076.2-.157.409-.32l.028-.022A4.128,4.128,0,0,0,20,12a5.423,5.423,0,0,0-.633-2.462A4.756,4.756,0,0,0,14.84,7a4.416,4.416,0,0,0-4.262,2.567A5.723,5.723,0,0,0,10,12h2a3.872,3.872,0,0,1,.382-1.567A2.445,2.445,0,0,1,14.84,9Z"
      />
    </symbol>`,
  "icon-filter": `<symbol id="icon-filter" viewBox="0 0 16 16">
      <path
        
        d="M15.8804 0.84375C16.1096 1.38542 16.0366 1.88542 15.6616 2.34375L10.5054 8.6875V12.8125C10.5054 13.1458 10.3908 13.4271 10.1616 13.6562C9.93247 13.8854 9.64081 14 9.28664 14C9.03664 14 8.80747 13.9271 8.59914 13.7812L6.03664 11.7812C5.7033 11.5312 5.52622 11.2083 5.50539 10.8125V8.6875L0.349138 2.34375C-0.0258621 1.88542 -0.0987787 1.38542 0.130388 0.84375C0.401221 0.302083 0.849138 0.0208333 1.47414 0H14.5366C15.1616 0.0208333 15.6096 0.302083 15.8804 0.84375ZM9.22414 7.84375L14.4116 1.5H1.59914L6.78664 7.875C6.93247 8.0625 7.00539 8.27083 7.00539 8.5V10.6562L9.00539 12.1875V8.46875C9.00539 8.23958 9.07831 8.03125 9.22414 7.84375Z"
      />
    </symbol>`,
  "icon-filter-filled": `<symbol id="icon-filter-filled" viewBox="0 0 32 28">
      <path id="filter-filled" d="M0,0H32V3.422l-12,12V28H12V15.422l-12-12Z" />
    </symbol>`,
  "icon-expand-more": `<symbol id="icon-expand-more" viewBox="0 0 32 18">
      <path id="expand-more" d="M15.7,14.3,30,0l1.406,1.406-15.7,15.7L0,1.406,1.406,0Z" />
    </symbol>`,
  "icon-help": `<symbol id="icon-help" viewBox="0 0 16 16">
      <path
        
        d="M8 0C9.5 0.0208333 10.8438 0.385417 12.0312 1.09375C13.2396 1.80208 14.1979 2.76042 14.9062 3.96875C15.6146 5.15625 15.9792 6.5 16 8C15.9792 9.5 15.6146 10.8438 14.9062 12.0312C14.1979 13.2396 13.2396 14.1979 12.0312 14.9062C10.8438 15.6146 9.5 15.9792 8 16C6.5 15.9792 5.15625 15.6146 3.96875 14.9062C2.76042 14.1979 1.80208 13.2396 1.09375 12.0312C0.385417 10.8438 0.0208333 9.5 0 8C0.0208333 6.5 0.385417 5.15625 1.09375 3.96875C1.80208 2.76042 2.76042 1.80208 3.96875 1.09375C5.15625 0.385417 6.5 0.0208333 8 0ZM8 14.5C9.83333 14.4583 11.3646 13.8229 12.5938 12.5938C13.8229 11.3646 14.4583 9.83333 14.5 8C14.4583 6.16667 13.8229 4.63542 12.5938 3.40625C11.3646 2.17708 9.83333 1.54167 8 1.5C6.16667 1.54167 4.63542 2.17708 3.40625 3.40625C2.17708 4.63542 1.54167 6.16667 1.5 8C1.54167 9.83333 2.17708 11.3646 3.40625 12.5938C4.63542 13.8229 6.16667 14.4583 8 14.5ZM8 10.5C8.27083 10.5 8.5 10.5938 8.6875 10.7812C8.89583 10.9688 9 11.2083 9 11.5C9 11.7917 8.89583 12.0312 8.6875 12.2188C8.5 12.4062 8.27083 12.5 8 12.5C7.375 12.4583 7.04167 12.125 7 11.5C7 11.2083 7.09375 10.9688 7.28125 10.7812C7.46875 10.5938 7.70833 10.5 8 10.5ZM9.03125 4C9.67708 4.02083 10.1979 4.22917 10.5938 4.625C11.0104 5.04167 11.2188 5.5625 11.2188 6.1875C11.1979 6.97917 10.8438 7.60417 10.1562 8.0625L8.75 8.9375V9C8.70833 9.45833 8.45833 9.70833 8 9.75C7.54167 9.70833 7.29167 9.45833 7.25 9V8.5C7.25 8.22917 7.375 8.01042 7.625 7.84375L9.40625 6.75C9.63542 6.625 9.75 6.4375 9.75 6.1875C9.70833 5.77083 9.45833 5.54167 9 5.5H7.40625C7.01042 5.54167 6.79167 5.77083 6.75 6.1875C6.70833 6.64583 6.45833 6.89583 6 6.9375C5.54167 6.89583 5.29167 6.64583 5.25 6.1875C5.27083 5.5625 5.47917 5.04167 5.875 4.625C6.29167 4.22917 6.8125 4.02083 7.4375 4H9.03125Z"
      />
    </symbol>`,
  "icon-info-filled": `<symbol id="icon-info-filled" viewBox="0 0 30 30">
      <path
        id="info-filled"
        d="M15,30A15,15,0,0,1,4.393,4.393,15,15,0,1,1,25.606,25.606,14.9,14.9,0,0,1,15,30ZM14,12V22h2V12Zm0-4v2h2V8Z"
      />
    </symbol>`,
  "icon-chevron-left": `<symbol id="icon-chevron-left" viewBox="0 0 16 16">
      <path
        
        d="M9.96875 14.7726L4.25 8.56845C4.08333 8.35189 4 8.157 4 7.98376C4 7.78886 4.07292 7.60479 4.21875 7.43155L9.9375 1.22738C10.2708 0.924207 10.625 0.924207 11 1.22738C11.2917 1.57386 11.2917 1.942 11 2.33179L5.78125 7.98376L11.0312 13.6682C11.3229 14.058 11.3229 14.4261 11.0312 14.7726C10.6562 15.0758 10.3021 15.0758 9.96875 14.7726Z"
      />
    </symbol>`,
  "icon-chevron-right": `<symbol id="icon-chevron-right" viewBox="0 0 16 16">
      <path
        
        d="M5.78125 1.22777L11.5 7.47517C11.6458 7.62701 11.7188 7.80055 11.7188 7.99578C11.7188 8.19101 11.6458 8.3754 11.5 8.54894L5.78125 14.7638C5.44792 15.0675 5.09375 15.0783 4.71875 14.7963C4.42708 14.4276 4.42708 14.0588 4.71875 13.69L9.96875 7.96324L4.71875 2.33408C4.42708 1.94362 4.42708 1.57485 4.71875 1.22777C5.09375 0.924077 5.44792 0.924077 5.78125 1.22777Z"
      />
    </symbol>`,
  "icon-chevron-down": `<symbol id="icon-chevron-down" viewBox="0 0 16 16">
      <path
        
        d="M14.7731 5.78125L8.58333 11.5C8.36728 11.6667 8.17284 11.75 8 11.75C7.80556 11.75 7.62191 11.6771 7.44907 11.5312L1.22685 5.78125C1.07562 5.63542 1 5.45833 1 5.25C1 5.04167 1.07562 4.86458 1.22685 4.71875C1.57253 4.42708 1.93981 4.42708 2.3287 4.71875L8 9.96875L13.6713 4.71875C14.0602 4.42708 14.4275 4.4375 14.7731 4.75C14.9244 4.875 15 5.04167 15 5.25C15 5.45833 14.9244 5.63542 14.7731 5.78125Z"
      />
    </symbol>`,
  "icon-chevron-up": `<symbol id="icon-chevron-up" viewBox="0 0 16 16">
      <path
        
        d="M1.22738 10L7.46404 4.28125C7.63728 4.09375 7.82135 4 8.01624 4C8.21114 4 8.39521 4.07292 8.56845 4.21875L14.7726 9.9375C15.0758 10.2917 15.0758 10.6458 14.7726 11C14.4261 11.2917 14.058 11.3021 13.6682 11.0312L8.01624 5.8125L2.33179 11.0625C1.942 11.3542 1.57386 11.3438 1.22738 11.0312C0.924207 10.6771 0.924207 10.3333 1.22738 10Z"
      />
    </symbol>`,
  "icon-compress": `<symbol id="icon-compress" viewBox="0 0 16 16">
      <path
        
        d="M11.75 7C11.2917 6.95833 11.0417 6.70833 11 6.25V2.75C11.0417 2.29167 11.2917 2.04167 11.75 2C12.2083 2.04167 12.4583 2.29167 12.5 2.75V5.5H15.25C15.7083 5.54167 15.9583 5.79167 16 6.25C15.9583 6.70833 15.7083 6.95833 15.25 7H11.75ZM4.25 9C4.70833 9.04167 4.95833 9.29167 5 9.75V13.25C4.95833 13.7083 4.70833 13.9583 4.25 14C3.79167 13.9583 3.54167 13.7083 3.5 13.25V10.5H0.75C0.291667 10.4583 0.0416667 10.2083 0 9.75C0.0416667 9.29167 0.291667 9.04167 0.75 9H4.25ZM15.25 9C15.7083 9.04167 15.9583 9.29167 16 9.75C15.9583 10.2083 15.7083 10.4583 15.25 10.5H12.5V13.25C12.4583 13.7083 12.2083 13.9583 11.75 14C11.2917 13.9583 11.0417 13.7083 11 13.25V9.75C11.0417 9.29167 11.2917 9.04167 11.75 9H15.25ZM4.25 2C4.70833 2.04167 4.95833 2.29167 5 2.75V6.25C4.95833 6.70833 4.70833 6.95833 4.25 7H0.75C0.291667 6.95833 0.0416667 6.70833 0 6.25C0.0416667 5.79167 0.291667 5.54167 0.75 5.5H3.5V2.75C3.54167 2.29167 3.79167 2.04167 4.25 2Z"
      />
    </symbol>`,
  "icon-delete": `<symbol id="icon-delete" viewBox="0 0 16 16">
      <path
        
        d="M14.5 2.5C14.8125 2.52083 14.9792 2.6875 15 3V3.5C14.9792 3.8125 14.8125 3.97917 14.5 4H14V14C13.9792 14.5625 13.7812 15.0312 13.4062 15.4062C13.0312 15.7812 12.5625 15.9792 12 16H4C3.4375 15.9792 2.96875 15.7812 2.59375 15.4062C2.21875 15.0312 2.02083 14.5625 2 14V4H1.5C1.1875 3.97917 1.02083 3.8125 1 3.5V3C1.02083 2.6875 1.1875 2.52083 1.5 2.5H4.0625L5.125 0.71875C5.4375 0.260417 5.86458 0.0208333 6.40625 0H9.59375C10.1354 0.0208333 10.5625 0.260417 10.875 0.71875L11.9375 2.5H14.5ZM6.375 1.59375L5.8125 2.5H10.1875L9.625 1.59375C9.58333 1.53125 9.53125 1.5 9.46875 1.5H6.53125C6.46875 1.5 6.41667 1.53125 6.375 1.59375ZM12 14.5C12.3125 14.4792 12.4792 14.3125 12.5 14V4H3.5V14C3.52083 14.3125 3.6875 14.4792 4 14.5H12ZM8 13C7.6875 12.9792 7.52083 12.8125 7.5 12.5V6C7.52083 5.6875 7.6875 5.52083 8 5.5C8.3125 5.52083 8.47917 5.6875 8.5 6V12.5C8.47917 12.8125 8.3125 12.9792 8 13ZM5.5 13C5.1875 12.9792 5.02083 12.8125 5 12.5V6C5.02083 5.6875 5.1875 5.52083 5.5 5.5C5.8125 5.52083 5.97917 5.6875 6 6V12.5C5.97917 12.8125 5.8125 12.9792 5.5 13ZM10.5 13C10.1875 12.9792 10.0208 12.8125 10 12.5V6C10.0208 5.6875 10.1875 5.52083 10.5 5.5C10.8125 5.52083 10.9792 5.6875 11 6V12.5C10.9792 12.8125 10.8125 12.9792 10.5 13Z"
      />
    </symbol>`,
  "icon-crash": `<symbol id="icon-crash" viewBox="0 0 21 32">
      <path
        id="crash"
        d="M4.515,32h0L7.806,18H0L16.1,0,13.113,12H21ZM12.209,7.349,4.472,16H10.33L8.422,24.114,16.759,14h-6.2Z"
      />
    </symbol>`,
  "icon-crash-filled": `<symbol id="icon-crash-filled" viewBox="0 0 21 32">
      <path id="crash-filled" d="M16.1,0,13.113,12H21L4.513,32,7.805,18H0Z" />
    </symbol>`,
  "icon-info": `<symbol id="icon-info" viewBox="0 0 30 30">
      <g fill="none" fill-rule="evenodd">
        <path d="M0 0h32v32H0z" />
        <path
          
          fill-rule="nonzero"
          d="M15 28c7.18 0 13-5.82 13-13S22.18 2 15 2 2 7.82 2 15s5.82 13 13 13zm0 2C6.716 30 0 23.284 0 15 0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15zm-1-18h2v10h-2V12zm0-4h2v2h-2V8z"
        />
      </g>
    </symbol>`,
  "icon-more-vertical": `<symbol id="icon-more-vertical" viewBox="0 0 16 16">
      <path
        
        d="M8 3.5C7.58333 3.47917 7.22917 3.33333 6.9375 3.0625C6.66667 2.77083 6.52083 2.41667 6.5 2C6.52083 1.58333 6.66667 1.22917 6.9375 0.9375C7.22917 0.666667 7.58333 0.520833 8 0.5C8.41667 0.520833 8.77083 0.666667 9.0625 0.9375C9.33333 1.22917 9.47917 1.58333 9.5 2C9.47917 2.41667 9.33333 2.77083 9.0625 3.0625C8.77083 3.33333 8.41667 3.47917 8 3.5ZM8 12.5C8.41667 12.5208 8.77083 12.6667 9.0625 12.9375C9.33333 13.2292 9.47917 13.5833 9.5 14C9.47917 14.4167 9.33333 14.7708 9.0625 15.0625C8.77083 15.3333 8.41667 15.4792 8 15.5C7.58333 15.4792 7.22917 15.3333 6.9375 15.0625C6.66667 14.7708 6.52083 14.4167 6.5 14C6.52083 13.5833 6.66667 13.2292 6.9375 12.9375C7.22917 12.6667 7.58333 12.5208 8 12.5ZM8 6.5C8.41667 6.52083 8.77083 6.66667 9.0625 6.9375C9.33333 7.22917 9.47917 7.58333 9.5 8C9.47917 8.41667 9.33333 8.77083 9.0625 9.0625C8.77083 9.33333 8.41667 9.47917 8 9.5C7.58333 9.47917 7.22917 9.33333 6.9375 9.0625C6.66667 8.77083 6.52083 8.41667 6.5 8C6.52083 7.58333 6.66667 7.22917 6.9375 6.9375C7.22917 6.66667 7.58333 6.52083 8 6.5Z"
      />
    </symbol>`,
  "icon-more-horizontal": `<symbol id="icon-more-horizontal" viewBox="0 0 16 16">
      <path
        
        d="M12.5 8C12.5208 7.58333 12.6667 7.22917 12.9375 6.9375C13.2292 6.66667 13.5833 6.52083 14 6.5C14.4167 6.52083 14.7708 6.66667 15.0625 6.9375C15.3333 7.22917 15.4792 7.58333 15.5 8C15.4792 8.41667 15.3333 8.77083 15.0625 9.0625C14.7708 9.33333 14.4167 9.47917 14 9.5C13.5833 9.47917 13.2292 9.33333 12.9375 9.0625C12.6667 8.77083 12.5208 8.41667 12.5 8ZM3.5 8C3.47917 8.41667 3.33333 8.77083 3.0625 9.0625C2.77083 9.33333 2.41667 9.47917 2 9.5C1.58333 9.47917 1.22917 9.33333 0.9375 9.0625C0.666667 8.77083 0.520833 8.41667 0.5 8C0.520833 7.58333 0.666667 7.22917 0.9375 6.9375C1.22917 6.66667 1.58333 6.52083 2 6.5C2.41667 6.52083 2.77083 6.66667 3.0625 6.9375C3.33333 7.22917 3.47917 7.58333 3.5 8ZM9.5 8C9.47917 8.41667 9.33333 8.77083 9.0625 9.0625C8.77083 9.33333 8.41667 9.47917 8 9.5C7.58333 9.47917 7.22917 9.33333 6.9375 9.0625C6.66667 8.77083 6.52083 8.41667 6.5 8C6.52083 7.58333 6.66667 7.22917 6.9375 6.9375C7.22917 6.66667 7.58333 6.52083 8 6.5C8.41667 6.52083 8.77083 6.66667 9.0625 6.9375C9.33333 7.22917 9.47917 7.58333 9.5 8Z"
      />
    </symbol>`,
  "icon-settings": `<symbol id="icon-settings" viewBox="0 0 16 16">
      <path
        d="M15.75 9.84375C15.7292 10.1562 15.5729 10.6354 15.2812 11.2812C14.9896 11.9062 14.6458 12.4896 14.25 13.0312C13.8333 13.5729 13.4479 13.8542 13.0938 13.875C12.9479 13.875 12.8125 13.8438 12.6875 13.7812L11.6875 13.1875C11.3542 13.4167 11 13.625 10.625 13.8125V15C10.5833 15.375 10.3854 15.6146 10.0312 15.7188C9.36458 15.9062 8.67708 16 7.96875 16C7.30208 16 6.625 15.9062 5.9375 15.7188C5.58333 15.5938 5.39583 15.3438 5.375 14.9688V13.7812C5 13.6146 4.64583 13.4062 4.3125 13.1562L3.28125 13.75C3.15625 13.8125 3.02083 13.8438 2.875 13.8438C2.5 13.8229 2.11458 13.5312 1.71875 12.9688C1.30208 12.4062 0.958333 11.8125 0.6875 11.1875C0.395833 10.5625 0.25 10.1146 0.25 9.84375C0.25 9.57292 0.375 9.36458 0.625 9.21875L1.65625 8.625C1.63542 8.41667 1.625 8.20833 1.625 8C1.625 7.79167 1.63542 7.58333 1.65625 7.375L0.625 6.78125C0.375 6.63542 0.25 6.41667 0.25 6.125C0.270833 5.8125 0.427083 5.34375 0.71875 4.71875C1.01042 4.09375 1.35417 3.51042 1.75 2.96875C2.14583 2.42708 2.52083 2.14583 2.875 2.125C3.02083 2.125 3.15625 2.15625 3.28125 2.21875L4.3125 2.8125C4.64583 2.58333 5 2.375 5.375 2.1875V1C5.39583 0.625 5.58333 0.385417 5.9375 0.28125C6.625 0.09375 7.3125 0 8 0C8.70833 0 9.39583 0.09375 10.0625 0.28125C10.4167 0.385417 10.6042 0.625 10.625 1V2.1875C11 2.375 11.3542 2.58333 11.6875 2.8125L12.7188 2.21875C12.8438 2.15625 12.9792 2.125 13.125 2.125C13.5 2.16667 13.8854 2.45833 14.2812 3C14.6979 3.5625 15.0417 4.15625 15.3125 4.78125C15.6042 5.42708 15.75 5.875 15.75 6.125C15.75 6.41667 15.625 6.63542 15.375 6.78125L14.3438 7.375C14.3646 7.58333 14.375 7.79167 14.375 8C14.375 8.20833 14.3646 8.40625 14.3438 8.59375L15.375 9.1875C15.625 9.33333 15.75 9.55208 15.75 9.84375ZM12.9688 12.1562C13.4688 11.5938 13.8542 10.9479 14.125 10.2188L12.75 9.4375C12.7708 9.27083 12.7812 9.125 12.7812 9C12.8438 8.54167 12.875 8.20833 12.875 8C12.875 7.79167 12.8438 7.45833 12.7812 7C12.7812 6.875 12.7708 6.72917 12.75 6.5625L14.125 5.78125C13.8542 5.05208 13.4688 4.39583 12.9688 3.8125L11.625 4.59375C11.0833 4.19792 10.7083 3.9375 10.5 3.8125C10.3125 3.70833 9.98958 3.55208 9.53125 3.34375C9.40625 3.30208 9.27083 3.23958 9.125 3.15625V1.59375C8.85417 1.53125 8.47917 1.5 8 1.5C7.66667 1.5 7.29167 1.53125 6.875 1.59375V3.15625C6.25 3.42708 5.84375 3.61458 5.65625 3.71875C5.44792 3.84375 5.13542 4.05208 4.71875 4.34375C4.63542 4.42708 4.52083 4.51042 4.375 4.59375L3.03125 3.8125C2.53125 4.39583 2.14583 5.05208 1.875 5.78125L3.25 6.5625C3.22917 6.72917 3.21875 6.875 3.21875 7C3.15625 7.45833 3.125 7.79167 3.125 8C3.125 8.16667 3.13542 8.39583 3.15625 8.6875C3.17708 8.875 3.19792 9.125 3.21875 9.4375L1.875 10.1875C2.14583 10.9167 2.53125 11.5729 3.03125 12.1562L4.375 11.375C4.91667 11.7708 5.29167 12.0312 5.5 12.1562C5.6875 12.2604 6.01042 12.4167 6.46875 12.625C6.59375 12.6875 6.72917 12.75 6.875 12.8125V14.375C7.125 14.4375 7.5 14.4688 8 14.4688C8.33333 14.4688 8.70833 14.4375 9.125 14.375V12.8125C9.75 12.5417 10.1562 12.3542 10.3438 12.25C10.5521 12.1458 10.8646 11.9375 11.2812 11.625C11.3646 11.5417 11.4792 11.4583 11.625 11.375L12.9688 12.1562ZM8 4.96875C8.85417 4.98958 9.5625 5.28125 10.125 5.84375C10.6875 6.40625 10.9792 7.11458 11 7.96875C10.9792 8.82292 10.6875 9.53125 10.125 10.0938C9.5625 10.6562 8.85417 10.9479 8 10.9688C7.14583 10.9479 6.4375 10.6562 5.875 10.0938C5.3125 9.53125 5.02083 8.82292 5 7.96875C5.02083 7.11458 5.3125 6.40625 5.875 5.84375C6.4375 5.28125 7.14583 4.98958 8 4.96875ZM8 9.5C8.41667 9.47917 8.77083 9.33333 9.0625 9.0625C9.33333 8.77083 9.47917 8.41667 9.5 8C9.47917 7.58333 9.33333 7.22917 9.0625 6.9375C8.77083 6.66667 8.41667 6.52083 8 6.5C7.58333 6.52083 7.22917 6.66667 6.9375 6.9375C6.66667 7.22917 6.52083 7.58333 6.5 8C6.52083 8.41667 6.66667 8.77083 6.9375 9.0625C7.22917 9.33333 7.58333 9.47917 8 9.5Z"
      />
    </symbol>`,
  "icon-remove": `<symbol id="icon-remove" viewBox="0 0 16 16">
      <path
        
        d="M16 8C15.9583 8.45833 15.7083 8.70833 15.25 8.75H0.75C0.291667 8.70833 0.0416667 8.45833 0 8C0.0416667 7.54167 0.291667 7.29167 0.75 7.25H15.25C15.7083 7.29167 15.9583 7.54167 16 8Z"
      />
    </symbol>`,
  "icon-share": `<symbol id="icon-share"
      id="icon-share"
     viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
      <polyline points="16 6 12 2 8 6"></polyline>
      <line x1="12" y1="2" x2="12" y2="15"></line>
    </symbol>`,
  "icon-email": `<symbol id="icon-email" viewBox="0 0 16 16">
      <path
        
        d="M14 2C14.5625 2.02083 15.0312 2.21875 15.4062 2.59375C15.7812 2.96875 15.9792 3.4375 16 4V12C15.9792 12.5625 15.7812 13.0312 15.4062 13.4062C15.0312 13.7812 14.5625 13.9792 14 14H2C1.4375 13.9792 0.96875 13.7812 0.59375 13.4062C0.21875 13.0312 0.0208333 12.5625 0 12V4C0.0208333 3.4375 0.21875 2.96875 0.59375 2.59375C0.96875 2.21875 1.4375 2.02083 2 2H14ZM2 3.5C1.6875 3.52083 1.52083 3.6875 1.5 4V4.6875L6.71875 9C7.09375 9.3125 7.52083 9.46875 8 9.46875C8.47917 9.46875 8.90625 9.3125 9.28125 9L14.5 4.6875V4C14.4792 3.6875 14.3125 3.52083 14 3.5H2ZM14 12.5C14.3125 12.4792 14.4792 12.3125 14.5 12V6.65625L10.25 10.1875C9.58333 10.7292 8.83333 11 8 11C7.16667 11 6.41667 10.7292 5.75 10.1875L1.5 6.65625V12C1.52083 12.3125 1.6875 12.4792 2 12.5H14Z"
      />
    </symbol>`,
  "icon-edit": `<symbol id="icon-edit" viewBox="0 0 16 16">
      <path
        
        d="M15.408 1.75C15.8038 2.16667 16.0017 2.63542 16.0017 3.15625C16.0017 3.69792 15.8038 4.17708 15.408 4.59375L4.97049 15.0312C4.90799 15.0938 4.82465 15.1354 4.72049 15.1562L0.595486 16C0.574653 16 0.543403 16 0.501736 16C0.147569 15.9583 -0.0190972 15.75 0.00173611 15.375L0.845486 11.25C0.866319 11.1667 0.907986 11.0833 0.970486 11L11.408 0.59375C11.8247 0.197917 12.3038 0 12.8455 0C13.3663 0 13.8351 0.197917 14.2517 0.59375L15.408 1.75ZM4.12674 13.75L4.87674 13H3.00174V11.125L2.25174 11.875L1.78299 14.2188L4.12674 13.75ZM4.50174 11.5H6.37674L11.908 6L10.033 4.125L4.50174 9.625V11.5Z"
      />
    </symbol>`,
  "icon-share-nodes": `<symbol id="icon-share-nodes" viewBox="0 0 16 16">
      <path
        
        d="M12 9C12.8542 9.02083 13.5625 9.3125 14.125 9.875C14.6875 10.4375 14.9792 11.1458 15 12C14.9792 12.8542 14.6875 13.5625 14.125 14.125C13.5625 14.6875 12.8542 14.9792 12 15C11.1458 14.9792 10.4375 14.6875 9.875 14.125C9.3125 13.5625 9.02083 12.8542 9 12C9 11.7917 9.02083 11.5833 9.0625 11.375L6.25 9.96875C5.66667 10.6354 4.91667 10.9792 4 11C3.14583 10.9792 2.4375 10.6875 1.875 10.125C1.3125 9.5625 1.02083 8.85417 1 8C1.02083 7.14583 1.3125 6.4375 1.875 5.875C2.4375 5.3125 3.14583 5.02083 4 5C4.91667 5.02083 5.66667 5.36458 6.25 6.03125L9.0625 4.625C9.02083 4.41667 9 4.20833 9 4C9.02083 3.14583 9.3125 2.4375 9.875 1.875C10.4375 1.3125 11.1458 1.02083 12 1C12.8542 1.02083 13.5625 1.3125 14.125 1.875C14.6875 2.4375 14.9792 3.14583 15 4C14.9792 4.85417 14.6875 5.5625 14.125 6.125C13.5625 6.6875 12.8542 6.97917 12 7C11.0833 6.97917 10.3333 6.63542 9.75 5.96875L6.9375 7.375C6.97917 7.58333 7 7.79167 7 8C7 8.20833 6.97917 8.41667 6.9375 8.625L9.75 10.0312C10.3333 9.36458 11.0833 9.02083 12 9ZM12 2.5C11.5833 2.52083 11.2292 2.66667 10.9375 2.9375C10.6667 3.22917 10.5208 3.58333 10.5 4C10.5208 4.41667 10.6667 4.77083 10.9375 5.0625C11.2292 5.33333 11.5833 5.47917 12 5.5C12.4167 5.47917 12.7708 5.33333 13.0625 5.0625C13.3333 4.77083 13.4792 4.41667 13.5 4C13.4792 3.58333 13.3333 3.22917 13.0625 2.9375C12.7708 2.66667 12.4167 2.52083 12 2.5ZM4 9.5C4.41667 9.47917 4.77083 9.33333 5.0625 9.0625C5.33333 8.77083 5.47917 8.41667 5.5 8C5.47917 7.58333 5.33333 7.22917 5.0625 6.9375C4.77083 6.66667 4.41667 6.52083 4 6.5C3.58333 6.52083 3.22917 6.66667 2.9375 6.9375C2.66667 7.22917 2.52083 7.58333 2.5 8C2.52083 8.41667 2.66667 8.77083 2.9375 9.0625C3.22917 9.33333 3.58333 9.47917 4 9.5ZM12 13.5C12.4167 13.4792 12.7708 13.3333 13.0625 13.0625C13.3333 12.7708 13.4792 12.4167 13.5 12C13.4792 11.5833 13.3333 11.2292 13.0625 10.9375C12.7708 10.6667 12.4167 10.5208 12 10.5C11.5833 10.5208 11.2292 10.6667 10.9375 10.9375C10.6667 11.2292 10.5208 11.5833 10.5 12C10.5208 12.4167 10.6667 12.7708 10.9375 13.0625C11.2292 13.3333 11.5833 13.4792 12 13.5Z"
      />
    </symbol>`,
  "icon-menu": `<symbol id="icon-menu" viewBox="0 0 16 16">
      <path
        
        d="M14.25 12.25C14.7083 12.2917 14.9583 12.5521 15 13.0312C14.9583 13.4688 14.7083 13.7083 14.25 13.75H1.71875C1.28125 13.7083 1.04167 13.4479 1 12.9688C1 12.7812 1.07292 12.6146 1.21875 12.4688C1.36458 12.3229 1.53125 12.25 1.71875 12.25H14.25ZM14.25 2.25C14.4583 2.25 14.6354 2.33333 14.7812 2.5C14.9271 2.64583 15 2.82292 15 3.03125C14.9583 3.46875 14.7083 3.70833 14.25 3.75H1.71875C1.53125 3.75 1.36458 3.66667 1.21875 3.5C1.07292 3.35417 1 3.17708 1 2.96875C1 2.78125 1.07292 2.61458 1.21875 2.46875C1.36458 2.32292 1.53125 2.25 1.71875 2.25H14.25ZM14.25 7.25C14.7083 7.29167 14.9583 7.54167 15 8C14.9583 8.45833 14.7083 8.70833 14.25 8.75H1.71875C1.28125 8.70833 1.04167 8.45833 1 8C1.04167 7.54167 1.28125 7.29167 1.71875 7.25H14.25Z"
      />
    </symbol>`,
  "icon-open-new": `<symbol id="icon-open-new" viewBox="0 0 16 16">
      <path
        
        d="M12.25 10C12.7083 10.0417 12.9583 10.2917 13 10.75V14.25C12.9792 14.75 12.8125 15.1667 12.5 15.5C12.1667 15.8125 11.75 15.9792 11.25 16H1.75C1.25 15.9792 0.833333 15.8125 0.5 15.5C0.1875 15.1667 0.0208333 14.75 0 14.25V4.75C0.0208333 4.25 0.1875 3.83333 0.5 3.5C0.833333 3.1875 1.25 3.02083 1.75 3H5.25C5.70833 3.04167 5.95833 3.29167 6 3.75C5.95833 4.20833 5.70833 4.45833 5.25 4.5H1.75C1.60417 4.52083 1.52083 4.60417 1.5 4.75V14.25C1.52083 14.3958 1.60417 14.4792 1.75 14.5H11.25C11.3958 14.4792 11.4792 14.3958 11.5 14.25V10.75C11.5417 10.2917 11.7917 10.0417 12.25 10ZM15.25 0C15.7083 0.0416667 15.9583 0.291667 16 0.75V6C15.9583 6.45833 15.7083 6.70833 15.25 6.75C14.7917 6.70833 14.5417 6.45833 14.5 6V2.5625L6.78125 10.2812C6.63542 10.4271 6.45833 10.5 6.25 10.5C6.04167 10.5 5.86458 10.4271 5.71875 10.2812C5.42708 9.92708 5.42708 9.57292 5.71875 9.21875L13.4375 1.5H10C9.54167 1.45833 9.29167 1.20833 9.25 0.75C9.29167 0.291667 9.54167 0.0416667 10 0H15.25Z"
      />
    </symbol>`,
  "icon-copy": `<symbol id="icon-copy" viewBox="0 0 16 16">
      <path
        
        d="M15.7188 2.21875C15.9062 2.40625 16 2.63542 16 2.90625V10C15.9792 10.5625 15.7812 11.0312 15.4062 11.4062C15.0312 11.7812 14.5625 11.9792 14 12H8C7.4375 11.9792 6.96875 11.7812 6.59375 11.4062C6.19792 11.0312 5.98958 10.5625 5.96875 10V2C5.98958 1.4375 6.1875 0.96875 6.5625 0.59375C6.9375 0.21875 7.40625 0.0208333 7.96875 0H13.0938C13.3646 0 13.5938 0.09375 13.7812 0.28125L15.7188 2.21875ZM14.5 10H14.4688V4H13C12.7083 4 12.4688 3.90625 12.2812 3.71875C12.0938 3.53125 12 3.29167 12 3L11.9688 1.5H7.96875C7.65625 1.54167 7.48958 1.70833 7.46875 2V10C7.48958 10.3125 7.65625 10.4792 7.96875 10.5H14C14.3125 10.4792 14.4792 10.3125 14.5 10ZM8.5 14L8.53125 13H10V14C9.97917 14.5625 9.78125 15.0312 9.40625 15.4062C9.03125 15.7812 8.5625 15.9792 8 16H2C1.4375 15.9792 0.96875 15.7812 0.59375 15.4062C0.21875 15.0312 0.0208333 14.5625 0 14V6C0.0208333 5.4375 0.21875 4.96875 0.59375 4.59375C0.96875 4.21875 1.4375 4.02083 2 4H5V5.5H2C1.6875 5.52083 1.52083 5.6875 1.5 6L1.46875 14C1.48958 14.3125 1.65625 14.4792 1.96875 14.5H8C8.3125 14.4792 8.47917 14.3125 8.5 14Z"
      />
    </symbol>`,
  "icon-paste": `<symbol id="icon-paste" viewBox="0 0 16 16">
      <path
        
        d="M15.7188 6.21875C15.9062 6.40625 16 6.63542 16 6.90625V14C15.9792 14.5625 15.7812 15.0312 15.4062 15.4062C15.0312 15.7812 14.5625 15.9792 14 16H8C7.4375 15.9792 6.96875 15.7812 6.59375 15.4062C6.21875 15.0312 6.02083 14.5521 6 13.9688V6C6 5.4375 6.1875 4.96875 6.5625 4.59375C6.95833 4.21875 7.4375 4.02083 8 4H13.0938C13.3646 4 13.5938 4.09375 13.7812 4.28125L15.7188 6.21875ZM14.5 14V8H13C12.7083 8 12.4688 7.90625 12.2812 7.71875C12.0938 7.53125 12 7.29167 12 7V5.5H8C7.6875 5.52083 7.52083 5.6875 7.5 6V14C7.52083 14.3125 7.6875 14.4792 8 14.5H14C14.3125 14.4792 14.4792 14.3125 14.5 14ZM9.9375 3H8C7.4375 3 6.9375 3.13542 6.5 3.40625C6.04167 3.67708 5.67708 4.04167 5.40625 4.5H3.5C3.20833 4.5 2.96875 4.40625 2.78125 4.21875C2.59375 4.03125 2.5 3.79167 2.5 3.5V3H2C1.6875 3.02083 1.52083 3.1875 1.5 3.5V12C1.52083 12.3125 1.6875 12.4792 2 12.5H5V14H2C1.4375 13.9792 0.96875 13.7812 0.59375 13.4062C0.21875 13.0312 0.0208333 12.5625 0 12V3.5C0.0208333 2.9375 0.21875 2.46875 0.59375 2.09375C0.96875 1.71875 1.4375 1.52083 2 1.5H3.28125C3.34375 1.0625 3.53125 0.708333 3.84375 0.4375C4.15625 0.145833 4.54167 0 5 0C5.45833 0 5.84375 0.145833 6.15625 0.4375C6.46875 0.708333 6.65625 1.0625 6.71875 1.5H8C8.47917 1.5 8.88542 1.64583 9.21875 1.9375C9.57292 2.20833 9.8125 2.5625 9.9375 3ZM5 2.25C5.3125 2.22917 5.47917 2.0625 5.5 1.75C5.47917 1.4375 5.3125 1.27083 5 1.25C4.6875 1.27083 4.52083 1.4375 4.5 1.75C4.52083 2.0625 4.6875 2.22917 5 2.25Z"
      />
    </symbol>`,
  "icon-add": `<symbol id="icon-add" viewBox="0 0 16 16">
      <path
        
        d="M14.5 8C14.4583 8.45833 14.2083 8.70833 13.75 8.75H8.75V13.75C8.70833 14.2083 8.45833 14.4583 8 14.5C7.54167 14.4583 7.29167 14.2083 7.25 13.75V8.75H2.25C1.79167 8.70833 1.54167 8.45833 1.5 8C1.54167 7.54167 1.79167 7.29167 2.25 7.25H7.25V2.25C7.29167 1.79167 7.54167 1.54167 8 1.5C8.45833 1.54167 8.70833 1.79167 8.75 2.25V7.25H13.75C14.2083 7.29167 14.4583 7.54167 14.5 8Z"
      />
    </symbol>`,
  "icon-minus": `<symbol id="icon-minus"
    viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </symbol>`,
  "icon-check": `<symbol id="icon-check" viewBox="0 0 16 16">
      <path
        
        d="M15.25 4.25L6.75 12.75C6.625 12.9167 6.45833 13 6.25 13C6.04167 13 5.86458 12.9271 5.71875 12.7812L1.21875 8.28125C0.927083 7.92708 0.927083 7.57292 1.21875 7.21875C1.57292 6.92708 1.92708 6.92708 2.28125 7.21875L6.25 11.1875L14.2188 3.21875C14.5729 2.92708 14.9271 2.92708 15.2812 3.21875C15.5729 3.57292 15.5625 3.91667 15.25 4.25Z"
      />
    </symbol>`,
  "icon-circle-xmark": `<symbol id="icon-circle-xmark" viewBox="0 0 16 16">
      <path
        
        d="M10.5 5.46875C10.8125 5.82292 10.8229 6.17708 10.5312 6.53125L9.0625 8L10.5312 9.46875C10.8229 9.82292 10.8229 10.1771 10.5312 10.5312C10.1771 10.8229 9.82292 10.8229 9.46875 10.5312L8 9.0625L6.53125 10.5312C6.17708 10.8229 5.82292 10.8229 5.46875 10.5312C5.17708 10.1771 5.17708 9.82292 5.46875 9.46875L6.90625 8L5.4375 6.53125C5.14583 6.17708 5.14583 5.82292 5.4375 5.46875C5.79167 5.17708 6.14583 5.17708 6.5 5.46875L8 6.9375L9.4375 5.46875C9.79167 5.17708 10.1458 5.17708 10.5 5.46875ZM8 0C9.5 0.0208333 10.8438 0.385417 12.0312 1.09375C13.2396 1.80208 14.1979 2.76042 14.9062 3.96875C15.6146 5.15625 15.9792 6.5 16 8C15.9792 9.5 15.6146 10.8438 14.9062 12.0312C14.1979 13.2396 13.2396 14.1979 12.0312 14.9062C10.8438 15.6146 9.5 15.9792 8 16C6.5 15.9792 5.15625 15.6146 3.96875 14.9062C2.76042 14.1979 1.80208 13.2396 1.09375 12.0312C0.385417 10.8438 0.0208333 9.5 0 8C0.0208333 6.5 0.385417 5.15625 1.09375 3.96875C1.80208 2.76042 2.76042 1.80208 3.96875 1.09375C5.15625 0.385417 6.5 0.0208333 8 0ZM8 14.5C9.83333 14.4583 11.3646 13.8229 12.5938 12.5938C13.8229 11.3646 14.4583 9.83333 14.5 8C14.4583 6.16667 13.8229 4.63542 12.5938 3.40625C11.3646 2.17708 9.83333 1.54167 8 1.5C6.16667 1.54167 4.63542 2.17708 3.40625 3.40625C2.17708 4.63542 1.54167 6.16667 1.5 8C1.54167 9.83333 2.17708 11.3646 3.40625 12.5938C4.63542 13.8229 6.16667 14.4583 8 14.5Z"
      />
    </symbol>`,
  "icon-cart": `<symbol id="icon-cart" viewBox="0 0 24 22">
      <path
        d="M10,20.5 C10,21.329 9.328,22 8.5,22 C7.672,22 7,21.329 7,20.5 C7,19.672 7.672,19 8.5,19 C9.328,19 10,19.672 10,20.5 Z M13.5,19 C12.672,19 12,19.671 12,20.5 C12,21.329 12.672,22 13.5,22 C14.328,22 15,21.329 15,20.5 C15,19.672 14.328,19 13.5,19 Z M19.805,4 L16.373,16 L5.945,16 L2.168,7 L0,7 L4.615,18 L17.854,18 L21.328,6 L23.257,6 L24,4 L19.805,4 Z M6,0 C12.712,1.617 13,9 13,9 L15,9 L11,13 L7,9 L9,9 C9,9 9.94,2.58 6,0 Z"
      />
    </symbol>`,
  "icon-picture": `<symbol id="icon-picture" viewBox="0 0 75 56.25">
      <rect style="fill: transparent" width="75" height="56.25" />
      <path
        d="M28.125,31.125a3.125,3.125,0,1,1,3.128,3.125A3.127,3.127,0,0,1,28.125,31.125Zm19.375,0L42.187,39.25l-4.062-5-10,12.5h31.25ZM65.625,9.25V3H0V49.875H6.25V9.25ZM75,15.5V59.25H12.5V15.5Zm-6.25,6.25h-50V53h50Z"
      />
    </symbol>`,
  "icon-file": `<symbol id="icon-file" viewBox="0 0 16 16">
      <path
        
        d="M13.4062 2.90625C13.8021 3.30208 14 3.78125 14 4.34375V14C13.9792 14.5625 13.7812 15.0312 13.4062 15.4062C13.0312 15.7812 12.5625 15.9792 12 16H4C3.4375 15.9792 2.96875 15.7812 2.59375 15.4062C2.21875 15.0312 2.02083 14.5625 2 14V2C2.02083 1.4375 2.21875 0.96875 2.59375 0.59375C2.96875 0.21875 3.4375 0.0208333 4 0H9.65625C10.2188 0 10.6979 0.197917 11.0938 0.59375L13.4062 2.90625ZM12 14.5C12.3125 14.4792 12.4688 14.3125 12.4688 14V5H10C9.70833 5 9.46875 4.90625 9.28125 4.71875C9.09375 4.53125 9 4.29167 9 4V1.5H4C3.6875 1.54167 3.52083 1.70833 3.5 2V14.0312C3.54167 14.3021 3.70833 14.4583 4 14.5H12Z"
      />
    </symbol>`,
  "icon-network-tree": `<symbol id="icon-network-tree" viewBox="0 0 20 16">
      <path
        
        d="M11.5 10C11.9167 10.0208 12.2708 10.1667 12.5625 10.4375C12.8333 10.7292 12.9792 11.0833 13 11.5V14.5C12.9792 14.9167 12.8333 15.2708 12.5625 15.5625C12.2708 15.8333 11.9167 15.9792 11.5 16H8.5C8.08333 15.9792 7.72917 15.8333 7.4375 15.5625C7.16667 15.2708 7.02083 14.9167 7 14.5V11.5C7.02083 11.0833 7.16667 10.7292 7.4375 10.4375C7.72917 10.1667 8.08333 10.0208 8.5 10H11.5ZM11.5 14.5V11.5H8.5V14.5H11.5ZM18.4688 0C18.9062 0.0208333 19.2604 0.166667 19.5312 0.4375C19.8229 0.729167 19.9688 1.08333 19.9688 1.5V4.5C19.9688 4.91667 19.8229 5.27083 19.5312 5.5625C19.2396 5.83333 18.8854 5.97917 18.4688 6H15.4688C15.0521 5.97917 14.6979 5.83333 14.4062 5.5625C14.1354 5.27083 13.9896 4.91667 13.9688 4.5V1.5C13.9896 1.08333 14.1354 0.729167 14.4062 0.4375C14.6979 0.166667 15.0521 0.0208333 15.4688 0H18.4688ZM18.5 4.5V1.5H15.5V4.5H18.5ZM12.25 2.25C12.7083 2.29167 12.9583 2.54167 13 3C12.9583 3.45833 12.7083 3.70833 12.25 3.75H6V4.5C6 4.83333 5.89583 5.13542 5.6875 5.40625L7.40625 8.375C7.59375 8.79167 7.5 9.13542 7.125 9.40625C7 9.46875 6.875 9.5 6.75 9.5C6.47917 9.5 6.26042 9.375 6.09375 9.125L4.3125 6H1.5C1.08333 5.97917 0.729167 5.83333 0.4375 5.5625C0.166667 5.27083 0.0208333 4.91667 0 4.5V1.5C0.0208333 1.08333 0.166667 0.729167 0.4375 0.4375C0.729167 0.166667 1.08333 0.0208333 1.5 0H4.5C4.91667 0.0208333 5.27083 0.166667 5.5625 0.4375C5.83333 0.729167 5.97917 1.08333 6 1.5V2.25H12.25ZM4.5 4.5V1.5H1.5V4.5H4.5Z"
      />
    </symbol>`,
  "icon-alert-circle": `<symbol id="icon-alert-circle" viewBox="0 0 16 16">
      <path
        
        d="M8 0C9.5 0.0208333 10.8438 0.385417 12.0312 1.09375C13.2396 1.80208 14.1979 2.76042 14.9062 3.96875C15.6146 5.15625 15.9792 6.5 16 8C15.9792 9.5 15.6146 10.8438 14.9062 12.0312C14.1979 13.2396 13.2396 14.1979 12.0312 14.9062C10.8438 15.6146 9.5 15.9792 8 16C6.5 15.9792 5.15625 15.6146 3.96875 14.9062C2.76042 14.1979 1.80208 13.2396 1.09375 12.0312C0.385417 10.8438 0.0208333 9.5 0 8C0.0208333 6.5 0.385417 5.15625 1.09375 3.96875C1.80208 2.76042 2.76042 1.80208 3.96875 1.09375C5.15625 0.385417 6.5 0.0208333 8 0ZM8 14.5C9.83333 14.4583 11.3646 13.8229 12.5938 12.5938C13.8229 11.3646 14.4583 9.83333 14.5 8C14.4583 6.16667 13.8229 4.63542 12.5938 3.40625C11.3646 2.17708 9.83333 1.54167 8 1.5C6.16667 1.54167 4.63542 2.17708 3.40625 3.40625C2.17708 4.63542 1.54167 6.16667 1.5 8C1.54167 9.83333 2.17708 11.3646 3.40625 12.5938C4.63542 13.8229 6.16667 14.4583 8 14.5ZM8 9.5C7.54167 9.45833 7.29167 9.20833 7.25 8.75V4.75C7.29167 4.29167 7.54167 4.04167 8 4C8.45833 4.04167 8.70833 4.29167 8.75 4.75V8.75C8.70833 9.20833 8.45833 9.45833 8 9.5ZM8 10.5312C8.27083 10.5312 8.5 10.625 8.6875 10.8125C8.875 11 8.96875 11.2396 8.96875 11.5312C8.96875 11.8021 8.875 12.0312 8.6875 12.2188C8.5 12.4062 8.27083 12.5 8 12.5C7.72917 12.5 7.5 12.4062 7.3125 12.2188C7.125 12.0312 7.03125 11.8021 7.03125 11.5312C7.03125 11.2396 7.125 11 7.3125 10.8125C7.5 10.625 7.72917 10.5312 8 10.5312Z"
      />
    </symbol>`,
  "icon-arrow-up": `<symbol id="icon-arrow-up" viewBox="0 0 16 16">
      <path
        
        d="M2.21875 6.75L7.46875 1.25C7.61458 1.08333 7.79167 1 8 1C8.20833 1 8.38542 1.07292 8.53125 1.21875L13.7812 6.71875C14.0729 7.09375 14.0729 7.44792 13.7812 7.78125C13.4062 8.07292 13.0521 8.07292 12.7188 7.78125L8.75 3.625V14.25C8.70833 14.6875 8.46875 14.9271 8.03125 14.9688C7.82292 14.9688 7.64583 14.9062 7.5 14.7812C7.33333 14.6354 7.25 14.4583 7.25 14.25V3.625L3.28125 7.78125C2.94792 8.07292 2.59375 8.07292 2.21875 7.78125C1.92708 7.44792 1.92708 7.10417 2.21875 6.75Z"
      />
    </symbol>`,
  "icon-arrow-left": `<symbol id="icon-arrow-left" viewBox="0 0 16 16">
      <path
        
        d="M14.9688 8C14.9271 8.45833 14.6771 8.70833 14.2188 8.75H3.625L7.78125 12.7188C8.07292 13.0521 8.07292 13.4062 7.78125 13.7812C7.44792 14.0729 7.09375 14.0729 6.71875 13.7812L1.21875 8.53125C1.07292 8.38542 1 8.20833 1 8C1 7.79167 1.07292 7.61458 1.21875 7.46875L6.71875 2.21875C7.09375 1.92708 7.44792 1.92708 7.78125 2.21875C8.07292 2.59375 8.07292 2.94792 7.78125 3.28125L3.625 7.25H14.25C14.6875 7.29167 14.9271 7.54167 14.9688 8Z"
      />
    </symbol>`,
  "icon-arrow-down": `<symbol id="icon-arrow-down" viewBox="0 0 16 16">
      <path
        
        d="M13.7812 9.28125L8.53125 14.7812C8.38542 14.9271 8.20833 15 8 15C7.79167 15 7.61458 14.9271 7.46875 14.7812L2.21875 9.28125C1.92708 8.90625 1.92708 8.55208 2.21875 8.21875C2.59375 7.92708 2.94792 7.92708 3.28125 8.21875L7.25 12.375V1.75C7.29167 1.29167 7.53125 1.04167 7.96875 1C8.17708 1 8.35417 1.07292 8.5 1.21875C8.66667 1.36458 8.75 1.54167 8.75 1.75V12.375L12.7188 8.21875C13.0521 7.92708 13.4062 7.92708 13.7812 8.21875C14.0729 8.55208 14.0729 8.90625 13.7812 9.28125Z"
      />
    </symbol>`,
  "icon-do-not-enter": `<symbol id="icon-do-not-enter" viewBox="0 0 16 16">
      <path
        
        d="M11.75 6.5C12.2083 6.54167 12.4583 6.79167 12.5 7.25V8.75C12.4583 9.20833 12.2083 9.45833 11.75 9.5H4.25C3.79167 9.45833 3.54167 9.20833 3.5 8.75V7.25C3.54167 6.79167 3.79167 6.54167 4.25 6.5H11.75ZM8 0C9.5 0.0208333 10.8438 0.385417 12.0312 1.09375C13.2396 1.80208 14.1979 2.76042 14.9062 3.96875C15.6146 5.15625 15.9792 6.5 16 8C15.9792 9.5 15.6146 10.8438 14.9062 12.0312C14.1979 13.2396 13.2396 14.1979 12.0312 14.9062C10.8438 15.6146 9.5 15.9792 8 16C6.5 15.9792 5.15625 15.6146 3.96875 14.9062C2.76042 14.1979 1.80208 13.2396 1.09375 12.0312C0.385417 10.8438 0.0208333 9.5 0 8C0.0208333 6.5 0.385417 5.15625 1.09375 3.96875C1.80208 2.76042 2.76042 1.80208 3.96875 1.09375C5.15625 0.385417 6.5 0.0208333 8 0ZM8 14.5C9.83333 14.4583 11.3646 13.8229 12.5938 12.5938C13.8229 11.3646 14.4583 9.83333 14.5 8C14.4583 6.16667 13.8229 4.63542 12.5938 3.40625C11.3646 2.17708 9.83333 1.54167 8 1.5C6.16667 1.54167 4.63542 2.17708 3.40625 3.40625C2.17708 4.63542 1.54167 6.16667 1.5 8C1.54167 9.83333 2.17708 11.3646 3.40625 12.5938C4.63542 13.8229 6.16667 14.4583 8 14.5Z"
      />
    </symbol>`,
  "icon-arrow-right": `<symbol id="icon-arrow-right" viewBox="0 0 16 16">
      <path
        
        d="M9.28125 2.21875L14.7812 7.46875C14.9271 7.61458 15 7.79167 15 8C15 8.20833 14.9271 8.38542 14.7812 8.53125L9.28125 13.7812C8.90625 14.0729 8.55208 14.0729 8.21875 13.7812C7.92708 13.4062 7.92708 13.0521 8.21875 12.7188L12.375 8.75H1.75C1.29167 8.70833 1.04167 8.45833 1 8C1.04167 7.54167 1.29167 7.29167 1.75 7.25H12.375L8.21875 3.28125C7.92708 2.94792 7.92708 2.59375 8.21875 2.21875C8.55208 1.92708 8.90625 1.92708 9.28125 2.21875Z"
      />
    </symbol>`,
  "icon-arrow-rotate-left": `<symbol id="icon-arrow-rotate-left" viewBox="0 0 16 16">
      <path
        
        d="M1.75 1C2.20833 1.04167 2.45833 1.29167 2.5 1.75V4.9375C3.14583 3.89583 3.98958 3.0625 5.03125 2.4375C6.07292 1.83333 7.22917 1.52083 8.5 1.5C9.8125 1.52083 10.9896 1.84375 12.0312 2.46875C13.0938 3.09375 13.9271 3.92708 14.5312 4.96875C15.1562 6.03125 15.4792 7.20833 15.5 8.5C15.4792 9.79167 15.1562 10.9688 14.5312 12.0312C13.9271 13.0729 13.0938 13.9062 12.0312 14.5312C10.9896 15.1562 9.8125 15.4792 8.5 15.5C6.8125 15.4792 5.32292 14.9375 4.03125 13.875C3.69792 13.5417 3.66667 13.1875 3.9375 12.8125C4.25 12.5 4.59375 12.4688 4.96875 12.7188C6.01042 13.5521 7.1875 13.9792 8.5 14C10.0625 13.9583 11.3542 13.4167 12.375 12.375C13.4167 11.3542 13.9583 10.0625 14 8.5C13.9583 6.9375 13.4167 5.64583 12.375 4.625C11.3542 3.58333 10.0625 3.04167 8.5 3C7.4375 3.02083 6.47917 3.29167 5.625 3.8125C4.77083 4.35417 4.10417 5.08333 3.625 6H6.75C7.20833 6.04167 7.45833 6.29167 7.5 6.75C7.45833 7.20833 7.20833 7.45833 6.75 7.5H1.75C1.29167 7.45833 1.04167 7.20833 1 6.75V1.75C1.04167 1.29167 1.29167 1.04167 1.75 1Z"
      />
    </symbol>`,
  "icon-minus-circle": `<symbol id="icon-minus-circle" viewBox="0 0 16 16">
      <path
        
        d="M11 7.25C11.4583 7.29167 11.7083 7.54167 11.75 8C11.7083 8.45833 11.4583 8.70833 11 8.75H5C4.54167 8.70833 4.29167 8.45833 4.25 8C4.29167 7.54167 4.54167 7.29167 5 7.25H11ZM8 0C9.5 0.0208333 10.8438 0.385417 12.0312 1.09375C13.2396 1.80208 14.1979 2.76042 14.9062 3.96875C15.6146 5.15625 15.9792 6.5 16 8C15.9792 9.5 15.6146 10.8438 14.9062 12.0312C14.1979 13.2396 13.2396 14.1979 12.0312 14.9062C10.8438 15.6146 9.5 15.9792 8 16C6.5 15.9792 5.15625 15.6146 3.96875 14.9062C2.76042 14.1979 1.80208 13.2396 1.09375 12.0312C0.385417 10.8438 0.0208333 9.5 0 8C0.0208333 6.5 0.385417 5.15625 1.09375 3.96875C1.80208 2.76042 2.76042 1.80208 3.96875 1.09375C5.15625 0.385417 6.5 0.0208333 8 0ZM8 14.5C9.83333 14.4583 11.3646 13.8229 12.5938 12.5938C13.8229 11.3646 14.4583 9.83333 14.5 8C14.4583 6.16667 13.8229 4.63542 12.5938 3.40625C11.3646 2.17708 9.83333 1.54167 8 1.5C6.16667 1.54167 4.63542 2.17708 3.40625 3.40625C2.17708 4.63542 1.54167 6.16667 1.5 8C1.54167 9.83333 2.17708 11.3646 3.40625 12.5938C4.63542 13.8229 6.16667 14.4583 8 14.5Z"
      />
    </symbol>`,
  "icon-plus-circle": `<symbol id="icon-plus-circle" viewBox="0 0 16 16">
      <path
        
        d="M11 7.25C11.4583 7.29167 11.7083 7.54167 11.75 8C11.7083 8.45833 11.4583 8.70833 11 8.75H8.75V11C8.70833 11.4583 8.45833 11.7083 8 11.75C7.54167 11.7083 7.29167 11.4583 7.25 11V8.75H5C4.54167 8.70833 4.29167 8.45833 4.25 8C4.29167 7.54167 4.54167 7.29167 5 7.25H7.25V5C7.25 4.79167 7.33333 4.61458 7.5 4.46875C7.64583 4.32292 7.82292 4.25 8.03125 4.25C8.46875 4.29167 8.70833 4.54167 8.75 5V7.25H11ZM8 0C9.5 0.0208333 10.8438 0.385417 12.0312 1.09375C13.2396 1.80208 14.1979 2.76042 14.9062 3.96875C15.6146 5.15625 15.9792 6.5 16 8C15.9792 9.5 15.6146 10.8438 14.9062 12.0312C14.1979 13.2396 13.2396 14.1979 12.0312 14.9062C10.8438 15.6146 9.5 15.9792 8 16C6.5 15.9792 5.15625 15.6146 3.96875 14.9062C2.76042 14.1979 1.80208 13.2396 1.09375 12.0312C0.385417 10.8438 0.0208333 9.5 0 8C0.0208333 6.5 0.385417 5.15625 1.09375 3.96875C1.80208 2.76042 2.76042 1.80208 3.96875 1.09375C5.15625 0.385417 6.5 0.0208333 8 0ZM8 14.5C9.83333 14.4583 11.3646 13.8229 12.5938 12.5938C13.8229 11.3646 14.4583 9.83333 14.5 8C14.4583 6.16667 13.8229 4.63542 12.5938 3.40625C11.3646 2.17708 9.83333 1.54167 8 1.5C6.16667 1.54167 4.63542 2.17708 3.40625 3.40625C2.17708 4.63542 1.54167 6.16667 1.5 8C1.54167 9.83333 2.17708 11.3646 3.40625 12.5938C4.63542 13.8229 6.16667 14.4583 8 14.5Z"
      />
    </symbol>`,
  "icon-stop-circle": `<symbol id="icon-stop-circle"
  viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <rect x="9" y="9" width="6" height="6"></rect>
    </symbol>`,
  "icon-slash-circle": `<symbol id="icon-slash-circle"
     viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
    </symbol>`,
  "icon-message": `<symbol id="icon-message" viewBox="0 0 16 16">
      <path
        
        d="M8.00368 1C9.48284 1.02083 10.8266 1.3125 12.0349 1.875C13.2224 2.45833 14.1703 3.23958 14.8787 4.21875C15.587 5.19792 15.9516 6.29167 15.9724 7.5C15.9516 8.70833 15.587 9.80208 14.8787 10.7812C14.1703 11.7604 13.2224 12.5417 12.0349 13.125C10.8266 13.6875 9.48284 13.9792 8.00368 14C6.96201 14 5.99326 13.8542 5.09743 13.5625C4.61826 13.8958 4.01409 14.2188 3.28493 14.5312C2.55576 14.8229 1.71201 14.9792 0.753676 15C0.441176 14.9792 0.21201 14.8229 0.0661765 14.5312C-0.0588235 14.2396 -0.0067402 13.9688 0.222426 13.7188C0.24326 13.6979 0.420343 13.4688 0.753676 13.0312C1.08701 12.6146 1.38909 12.0833 1.65993 11.4375C0.597426 10.3333 0.0453431 9.02083 0.00367647 7.5C0.0245098 6.29167 0.389093 5.19792 1.09743 4.21875C1.80576 3.23958 2.76409 2.45833 3.97243 1.875C5.15993 1.3125 6.50368 1.02083 8.00368 1ZM8.00368 12.5C9.83701 12.4583 11.3683 11.9688 12.5974 11.0312C13.8266 10.0938 14.462 8.91667 14.5037 7.5C14.462 6.08333 13.8266 4.90625 12.5974 3.96875C11.3683 3.03125 9.83701 2.54167 8.00368 2.5C6.17034 2.54167 4.63909 3.03125 3.40993 3.96875C2.18076 4.90625 1.54534 6.08333 1.50368 7.5C1.52451 8.16667 1.65993 8.73958 1.90993 9.21875C2.18076 9.71875 2.46201 10.1146 2.75368 10.4062L3.37868 11.0938L3.06618 11.9688C2.87868 12.4271 2.67034 12.8542 2.44118 13.25C3.19118 12.9792 3.78493 12.6771 4.22243 12.3438L4.84743 11.9062L5.56618 12.125C6.35784 12.375 7.17034 12.5 8.00368 12.5Z"
      />
    </symbol>`,
  "icon-bell": `<symbol id="icon-bell" viewBox="0 0 16 16">
      <path
        
        d="M9.0125 1V1.5625C10.1792 1.77083 11.1271 2.30208 11.8562 3.15625C12.6062 4.01042 12.9917 5.04167 13.0125 6.25V7.28125C13.0333 8.73958 13.4917 10.0417 14.3875 11.1875L14.8562 11.7812C15.0437 12.0312 15.075 12.2917 14.95 12.5625C14.8042 12.8333 14.575 12.9792 14.2625 13H1.7625C1.45 12.9792 1.22083 12.8333 1.075 12.5625C0.95 12.2917 0.98125 12.0312 1.16875 11.7812L1.6375 11.1875C2.53333 10.0417 2.99167 8.73958 3.0125 7.28125V6.25C3.03333 5.04167 3.41875 4.01042 4.16875 3.15625C4.89792 2.30208 5.84583 1.77083 7.0125 1.5625V1C7.0125 0.708333 7.10625 0.46875 7.29375 0.28125C7.48125 0.09375 7.72083 0 8.0125 0C8.30417 0 8.54375 0.09375 8.73125 0.28125C8.91875 0.46875 9.0125 0.708333 9.0125 1ZM7.7625 3C6.84583 3.02083 6.075 3.33333 5.45 3.9375C4.84583 4.5625 4.53333 5.33333 4.5125 6.25V7.28125C4.5125 8.82292 4.09583 10.2292 3.2625 11.5H12.7625C11.9292 10.2292 11.5125 8.82292 11.5125 7.28125V6.25C11.4917 5.33333 11.1792 4.5625 10.575 3.9375C9.95 3.33333 9.17917 3.02083 8.2625 3H7.7625ZM10.0125 14C10.0125 14.5417 9.81458 15.0104 9.41875 15.4062C9.02292 15.8021 8.55417 16 8.0125 16C7.47083 16 7.00208 15.8021 6.60625 15.4062C6.21042 15.0104 6.0125 14.5417 6.0125 14H10.0125Z"
      />
    </symbol>`,
  "icon-tag": `<symbol id="icon-tag" viewBox="0 0 16 16">
      <path
        
        d="M14.3125 6.625C14.7708 7.10417 15 7.64583 15 8.25C15 8.875 14.7708 9.42708 14.3125 9.90625L9.90625 14.3125C9.42708 14.7708 8.875 15 8.25 15C7.64583 15 7.10417 14.7708 6.625 14.3125L1.6875 9.375C1.47917 9.16667 1.3125 8.91667 1.1875 8.625C1.0625 8.33333 1 8.04167 1 7.75V2.53125C1.02083 2.09375 1.16667 1.72917 1.4375 1.4375C1.72917 1.16667 2.09375 1.02083 2.53125 1H7.75C8.04167 1 8.33333 1.0625 8.625 1.1875C8.91667 1.3125 9.16667 1.47917 9.375 1.6875L14.3125 6.625ZM13.25 8.84375C13.4167 8.67708 13.5 8.47917 13.5 8.25C13.5 8.02083 13.4167 7.83333 13.25 7.6875L8.3125 2.75C8.14583 2.60417 7.95833 2.52083 7.75 2.5H2.53125L2.5 2.53125V7.75C2.52083 7.95833 2.60417 8.14583 2.75 8.3125L7.6875 13.25C8.0625 13.5833 8.44792 13.5833 8.84375 13.25L13.25 8.84375ZM5.21875 4.5C5.17708 4.04167 4.9375 3.79167 4.5 3.75C4.04167 3.79167 3.79167 4.04167 3.75 4.5C3.79167 4.95833 4.03125 5.20833 4.46875 5.25C4.92708 5.20833 5.17708 4.95833 5.21875 4.5Z"
      />
    </symbol>`,
  "icon-download-cloud": `<symbol id="icon-download-cloud" viewBox="0 0 20 16">
      <path
        
        d="M16.9688 6.71875C17.8646 6.98958 18.5938 7.48958 19.1562 8.21875C19.6979 8.92708 19.9792 9.77083 20 10.75C19.9792 11.9583 19.5625 12.9583 18.75 13.75C17.9583 14.5625 16.9583 14.9792 15.75 15H4.5C3.22917 14.9583 2.16667 14.5208 1.3125 13.6875C0.479167 12.8333 0.0416667 11.7708 0 10.5C0.0208333 9.5 0.302083 8.625 0.84375 7.875C1.38542 7.125 2.10417 6.59375 3 6.28125C3.02083 4.78125 3.53125 3.54167 4.53125 2.5625C5.51042 1.5625 6.75 1.04167 8.25 1C9.125 1 9.92708 1.19792 10.6562 1.59375C11.3854 1.98958 11.9896 2.51042 12.4688 3.15625C12.8021 3.05208 13.1458 3 13.5 3C14.5 3.02083 15.3229 3.36458 15.9688 4.03125C16.6354 4.67708 16.9792 5.5 17 6.5C17 6.54167 17 6.58333 17 6.625C16.9792 6.64583 16.9688 6.67708 16.9688 6.71875ZM15.75 13.5C16.5208 13.4792 17.1667 13.2083 17.6875 12.6875C18.2083 12.1667 18.4792 11.5208 18.5 10.75C18.5 10.1458 18.3229 9.60417 17.9688 9.125C17.6146 8.64583 17.1354 8.3125 16.5312 8.125L15.4062 7.78125L15.4688 6.625C15.4896 5.97917 15.2708 5.42708 14.8125 4.96875C14.3333 4.53125 13.6979 4.40625 12.9062 4.59375L11.9062 4.90625L11.2812 4.0625C10.5104 3.04167 9.5 2.52083 8.25 2.5C7.20833 2.52083 6.33333 2.875 5.625 3.5625C4.91667 4.25 4.54167 5.11458 4.5 6.15625C4.5 6.19792 4.5 6.23958 4.5 6.28125C4.5 6.32292 4.5 6.47917 4.5 6.75C4.5 6.89583 4.5 7.09375 4.5 7.34375L3.5 7.6875C2.89583 7.91667 2.41667 8.28125 2.0625 8.78125C1.6875 9.28125 1.5 9.85417 1.5 10.5C1.52083 11.3542 1.8125 12.0625 2.375 12.625C2.9375 13.1875 3.64583 13.4792 4.5 13.5H15.75ZM12.2188 8.46875C12.5729 8.17708 12.9271 8.17708 13.2812 8.46875C13.5729 8.82292 13.5729 9.17708 13.2812 9.53125L10.5312 12.2812C10.4688 12.3438 10.3854 12.3958 10.2812 12.4375C10.1979 12.4792 10.1042 12.5 10 12.5C9.91667 12.5 9.8125 12.4792 9.6875 12.4375C9.60417 12.3958 9.52083 12.3438 9.4375 12.2812L6.6875 9.53125C6.39583 9.17708 6.39583 8.82292 6.6875 8.46875C7.04167 8.17708 7.39583 8.17708 7.75 8.46875L9.25 9.9375V6C9.29167 5.54167 9.54167 5.29167 10 5.25C10.4583 5.29167 10.7083 5.54167 10.75 6V9.9375L12.2188 8.46875Z"
      />
    </symbol>`,
  "icon-upload-cloud": `<symbol id="icon-upload-cloud" viewBox="0 0 20 16">
      <path
        
        d="M16.9688 6.71875C17.8646 6.98958 18.5938 7.48958 19.1562 8.21875C19.6979 8.92708 19.9792 9.77083 20 10.75C19.9792 11.9583 19.5625 12.9583 18.75 13.75C17.9583 14.5625 16.9583 14.9792 15.75 15H4.5C3.22917 14.9583 2.16667 14.5208 1.3125 13.6875C0.479167 12.8333 0.0416667 11.7708 0 10.5C0.0208333 9.5 0.302083 8.625 0.84375 7.875C1.38542 7.125 2.10417 6.59375 3 6.28125C3.02083 4.78125 3.53125 3.54167 4.53125 2.5625C5.51042 1.5625 6.75 1.04167 8.25 1C9.125 1 9.92708 1.19792 10.6562 1.59375C11.3854 1.98958 11.9896 2.51042 12.4688 3.15625C12.8021 3.05208 13.1458 3 13.5 3C14.5 3.02083 15.3229 3.36458 15.9688 4.03125C16.6354 4.67708 16.9792 5.5 17 6.5C17 6.54167 17 6.58333 17 6.625C16.9792 6.64583 16.9688 6.67708 16.9688 6.71875ZM15.75 13.5C16.5208 13.4792 17.1667 13.2083 17.6875 12.6875C18.2083 12.1667 18.4792 11.5208 18.5 10.75C18.5 10.1458 18.3229 9.60417 17.9688 9.125C17.6146 8.64583 17.1354 8.3125 16.5312 8.125L15.4062 7.78125L15.4688 6.625C15.4896 5.97917 15.2708 5.42708 14.8125 4.96875C14.3333 4.53125 13.6979 4.40625 12.9062 4.59375L11.9062 4.90625L11.2812 4.0625C10.5104 3.04167 9.5 2.52083 8.25 2.5C7.20833 2.52083 6.33333 2.875 5.625 3.5625C4.91667 4.25 4.54167 5.11458 4.5 6.15625C4.5 6.19792 4.5 6.23958 4.5 6.28125C4.5 6.32292 4.5 6.47917 4.5 6.75C4.5 6.89583 4.5 7.09375 4.5 7.34375L3.5 7.6875C2.89583 7.91667 2.41667 8.28125 2.0625 8.78125C1.6875 9.28125 1.5 9.85417 1.5 10.5C1.52083 11.3542 1.8125 12.0625 2.375 12.625C2.9375 13.1875 3.64583 13.4792 4.5 13.5H15.75ZM10.5 5.46875L13.2812 8.21875C13.5729 8.57292 13.5729 8.92708 13.2812 9.28125C13.1354 9.42708 12.9583 9.5 12.75 9.5C12.5417 9.5 12.3646 9.42708 12.2188 9.28125L10.75 7.8125V11.75C10.7083 12.2083 10.4583 12.4583 10 12.5C9.54167 12.4583 9.29167 12.2083 9.25 11.75V7.8125L7.78125 9.28125C7.42708 9.57292 7.07292 9.57292 6.71875 9.28125C6.42708 8.92708 6.42708 8.57292 6.71875 8.21875L9.46875 5.46875C9.55208 5.40625 9.625 5.35417 9.6875 5.3125C9.875 5.22917 10.0625 5.22917 10.25 5.3125C10.3542 5.35417 10.4375 5.40625 10.5 5.46875Z"
      />
    </symbol>`,
  "icon-flag": `<symbol id="icon-flag" viewBox="0 0 16 16">
      <path
        
        d="M14.875 0.00347222C15.1875 0.00347222 15.4479 0.0868055 15.6562 0.253472C15.8854 0.420139 16 0.659722 16 0.972222V10.3785C15.9792 10.7951 15.7604 11.0972 15.3438 11.2847C14.0104 11.7847 12.8438 12.0243 11.8438 12.0035C10.7396 11.9618 9.70833 11.7951 8.75 11.5035C7.8125 11.2118 6.78125 11.0451 5.65625 11.0035C4.53125 10.9618 3.14583 11.2951 1.5 12.0035V15.2535C1.45833 15.7118 1.20833 15.9618 0.75 16.0035C0.291667 15.9618 0.0416667 15.7118 0 15.2535V0.753472C0.0416667 0.295139 0.291667 0.0451389 0.75 0.00347222C1.20833 0.0451389 1.45833 0.295139 1.5 0.753472V1.00347C3.3125 0.295139 4.73958 -0.0381944 5.78125 0.00347222C6.86458 0.0659722 7.78125 0.243056 8.53125 0.534722C9.23958 0.805556 10.0312 0.961806 10.9062 1.00347C11.7604 1.04514 12.8854 0.753472 14.2812 0.128472C14.4896 0.0451389 14.6875 0.00347222 14.875 0.00347222ZM14.5 10.0035V1.69097C13.1875 2.23264 11.9896 2.50347 10.9062 2.50347C9.80208 2.46181 8.86458 2.28472 8.09375 1.97222C7.38542 1.70139 6.61458 1.54514 5.78125 1.50347C4.78125 1.50347 3.54167 1.80556 2.0625 2.40972L1.5 2.62847V10.3785C2.95833 9.79514 4.34375 9.50347 5.65625 9.50347C6.96875 9.56597 8.125 9.74306 9.125 10.0347C10 10.3056 10.9062 10.4618 11.8438 10.5035C12.6771 10.5035 13.5625 10.3368 14.5 10.0035Z"
      />
    </symbol>`,
  "icon-triangle-exclamation": `<symbol id="icon-triangle-exclamation" viewBox="0 0 16 16">
      <path
        
        d="M7.7625 2.63438C7.8125 2.55 7.90312 2.5 8 2.5C8.09688 2.5 8.1875 2.55 8.2375 2.63438L14.4344 12.8125C14.4781 12.8844 14.5 12.9656 14.5 13.0469C14.5 13.2969 14.2969 13.5 14.0469 13.5H1.95312C1.70312 13.5 1.5 13.2969 1.5 13.0469C1.5 12.9625 1.52187 12.8813 1.56562 12.8125L7.7625 2.63438ZM6.48125 1.85312L0.284375 12.0312C0.096875 12.3375 0 12.6875 0 13.0469C0 14.125 0.875 15 1.95312 15H14.0469C15.125 15 16 14.125 16 13.0469C16 12.6875 15.9 12.3375 15.7156 12.0312L9.51875 1.85312C9.19688 1.325 8.62187 1 8 1C7.37813 1 6.80312 1.325 6.48125 1.85312ZM9 11.5C9 11.2348 8.89464 10.9804 8.70711 10.7929C8.51957 10.6054 8.26522 10.5 8 10.5C7.73478 10.5 7.48043 10.6054 7.29289 10.7929C7.10536 10.9804 7 11.2348 7 11.5C7 11.7652 7.10536 12.0196 7.29289 12.2071C7.48043 12.3946 7.73478 12.5 8 12.5C8.26522 12.5 8.51957 12.3946 8.70711 12.2071C8.89464 12.0196 9 11.7652 9 11.5ZM8.75 5.75C8.75 5.33437 8.41562 5 8 5C7.58437 5 7.25 5.33437 7.25 5.75V8.75C7.25 9.16562 7.58437 9.5 8 9.5C8.41562 9.5 8.75 9.16562 8.75 8.75V5.75Z"
      />
    </symbol>`,
  "icon-folder": `<symbol id="icon-folder" viewBox="0 0 16 16">
      <path
        
        d="M14 3C14.5625 3.02083 15.0312 3.21875 15.4062 3.59375C15.7812 3.96875 15.9792 4.4375 16 5V13C15.9792 13.5625 15.7812 14.0312 15.4062 14.4062C15.0312 14.7812 14.5625 14.9792 14 15H2C1.4375 14.9792 0.96875 14.7812 0.59375 14.4062C0.21875 14.0312 0.0208333 13.5625 0 13V3C0.0208333 2.4375 0.21875 1.96875 0.59375 1.59375C0.96875 1.21875 1.4375 1.02083 2 1H5.6875C6.22917 1 6.69792 1.19792 7.09375 1.59375L8.625 3H14ZM2 2.5C1.6875 2.52083 1.52083 2.6875 1.5 3V6H14.5V5C14.4792 4.6875 14.3125 4.52083 14 4.5H8L6.03125 2.65625C5.92708 2.55208 5.8125 2.5 5.6875 2.5H2ZM14 13.5C14.3125 13.4792 14.4792 13.3125 14.5 13V7.5H1.5V13C1.52083 13.3125 1.6875 13.4792 2 13.5H14Z"
      />
    </symbol>`,
  "icon-list": `<symbol id="icon-list" viewBox="0 0 16 16">
      <path
        
        d="M2.5 6.5C2.8125 6.52083 2.97917 6.6875 3 7V9C2.97917 9.3125 2.8125 9.47917 2.5 9.5H0.5C0.1875 9.47917 0.0208333 9.3125 0 9V7C0.0208333 6.6875 0.1875 6.52083 0.5 6.5H2.5ZM2.5 11.5C2.8125 11.5208 2.97917 11.6875 3 12V14C2.97917 14.3125 2.8125 14.4792 2.5 14.5H0.5C0.1875 14.4792 0.0208333 14.3125 0 14V12C0.0208333 11.6875 0.1875 11.5208 0.5 11.5H2.5ZM2.5 1.5C2.8125 1.52083 2.97917 1.6875 3 2V4C2.97917 4.3125 2.8125 4.47917 2.5 4.5H0.5C0.1875 4.47917 0.0208333 4.3125 0 4V2C0.0208333 1.6875 0.1875 1.52083 0.5 1.5H2.5ZM15.25 7.25C15.7083 7.29167 15.9583 7.54167 16 8C15.9583 8.45833 15.7083 8.70833 15.25 8.75H5.71875C5.28125 8.70833 5.04167 8.45833 5 8C5.04167 7.54167 5.28125 7.29167 5.71875 7.25H15.25ZM15.25 2.25C15.4583 2.25 15.6354 2.33333 15.7812 2.5C15.9271 2.64583 16 2.82292 16 3.03125C15.9583 3.46875 15.7083 3.70833 15.25 3.75H5.71875C5.53125 3.75 5.36458 3.66667 5.21875 3.5C5.07292 3.35417 5 3.17708 5 2.96875C5.04167 2.53125 5.28125 2.29167 5.71875 2.25H15.25ZM15.25 12.25C15.7083 12.2917 15.9583 12.5417 16 13C15.9583 13.4583 15.7083 13.7083 15.25 13.75H5.71875C5.28125 13.7083 5.04167 13.4583 5 13C5.04167 12.5417 5.28125 12.2917 5.71875 12.25H15.25Z"
      />
    </symbol>`,
  "icon-refresh": `<symbol id="icon-refresh" viewBox="0 0 16 16">
      <path
        
        d="M14.2188 9C14.6354 9.1875 14.7917 9.51042 14.6875 9.96875C14.2292 11.4688 13.3854 12.6771 12.1562 13.5938C10.9479 14.5104 9.55208 14.9792 7.96875 15C6.71875 14.9792 5.57292 14.6667 4.53125 14.0625C3.48958 13.4375 2.64583 12.6042 2 11.5625V14.75C1.95833 15.2083 1.70833 15.4583 1.25 15.5C0.791667 15.4583 0.541667 15.2083 0.5 14.75V9.75C0.541667 9.29167 0.791667 9.04167 1.25 9H6.25C6.6875 9.04167 6.92708 9.29167 6.96875 9.75C6.92708 10.2083 6.67708 10.4583 6.21875 10.5H3.09375C3.57292 11.4167 4.23958 12.1458 5.09375 12.6875C5.94792 13.2083 6.90625 13.4792 7.96875 13.5C9.21875 13.4792 10.3229 13.1146 11.2812 12.4062C12.2604 11.6771 12.9271 10.7083 13.2812 9.5C13.4479 9.08333 13.7604 8.91667 14.2188 9ZM14.75 0.5C15.2083 0.541667 15.4583 0.791667 15.5 1.25V6.25C15.4583 6.70833 15.2083 6.95833 14.75 7H9.75C9.29167 6.95833 9.04167 6.70833 9 6.25C9.04167 5.79167 9.29167 5.54167 9.75 5.5H12.9062C12.4062 4.58333 11.7292 3.85417 10.875 3.3125C10.0208 2.79167 9.0625 2.52083 8 2.5C6.75 2.52083 5.64583 2.88542 4.6875 3.59375C3.75 4.32292 3.09375 5.28125 2.71875 6.46875C2.55208 6.88542 2.23958 7.05208 1.78125 6.96875C1.36458 6.80208 1.19792 6.48958 1.28125 6.03125C1.73958 4.53125 2.58333 3.32292 3.8125 2.40625C5.02083 1.48958 6.41667 1.02083 8 1C9.27083 1.02083 10.4271 1.33333 11.4688 1.9375C12.5104 2.5625 13.3542 3.39583 14 4.4375V1.25C14.0417 0.791667 14.2917 0.541667 14.75 0.5Z"
      />
    </symbol>`,
  "icon-star": `<symbol id="icon-star" viewBox="0 0 18 16">
      <path
        
        d="M16.5 5.375C16.9167 5.45833 17.1771 5.67708 17.2812 6.03125C17.4062 6.40625 17.3229 6.76042 17.0312 7.09375L13.7187 10.2812L14.5 14.8438C14.5625 15.1771 14.4896 15.4479 14.2812 15.6562C14.0729 15.8854 13.8229 16 13.5312 16C13.3646 16 13.2083 15.9583 13.0625 15.875L8.96875 13.75L4.875 15.875C4.72917 15.9583 4.57292 16 4.40625 16C4.11458 16 3.86458 15.8854 3.65625 15.6562C3.44792 15.4479 3.375 15.1771 3.4375 14.8438L4.21875 10.25L0.906248 7.0625C0.614582 6.75 0.531248 6.40625 0.656248 6.03125C0.760415 5.67708 1.02083 5.45833 1.4375 5.375L6.03125 4.6875L8.0625 0.5625C8.29167 0.1875 8.58333 0 8.9375 0C9.35417 0 9.66667 0.1875 9.875 0.5625L11.9062 4.6875L16.5 5.375ZM12.1562 10.0312C12.1354 9.84375 12.1875 9.6875 12.3125 9.5625L15.2812 6.6875L11.1875 6.09375C11 6.07292 10.875 5.97917 10.8125 5.8125L8.96875 2.125L7.125 5.84375C7.0625 5.98958 6.9375 6.07292 6.75 6.09375L2.6875 6.6875L5.625 9.5625C5.72917 9.6875 5.78125 9.84375 5.78125 10.0312L5.0625 14.0938L8.75 12.1562C8.89583 12.0938 9.04167 12.0938 9.1875 12.1562L12.875 14.0938L12.1562 10.0312Z"
      />
    </symbol>`,
  "icon-star-filled": `<symbol id="icon-star-filled" viewBox="0 0 18 16">
      <path
        
        d="M9.88071 0.5625C9.7127 0.21875 9.35765 0 8.96772 0C8.5778 0 8.22591 0.21875 8.05473 0.5625L6.01634 4.69688L1.46406 5.35938C1.08365 5.41563 0.766634 5.67812 0.64934 6.0375C0.532045 6.39687 0.627149 6.79375 0.899779 7.05937L4.20304 10.2812L3.42319 14.8344C3.35979 15.2094 3.51829 15.5906 3.83214 15.8125C4.14598 16.0344 4.56126 16.0625 4.90363 15.8844L8.97089 13.7437L13.0381 15.8844C13.3805 16.0625 13.7958 16.0375 14.1096 15.8125C14.4235 15.5875 14.582 15.2094 14.5186 14.8344L13.7356 10.2812L17.0388 7.05937C17.3115 6.79375 17.4097 6.39687 17.2893 6.0375C17.1688 5.67812 16.855 5.41563 16.4746 5.35938L11.9191 4.69688L9.88071 0.5625Z"
      />
    </symbol>`,
  "icon-user": `<symbol id="icon-user" viewBox="0 0 16 16">
      <path
        
        d="M9.5 9.5C11.0625 9.54167 12.3542 10.0833 13.375 11.125C14.4167 12.1458 14.9583 13.4375 15 15C15 15.2917 14.9062 15.5312 14.7188 15.7188C14.5312 15.9062 14.2917 16 14 16H2C1.70833 16 1.46875 15.9062 1.28125 15.7188C1.09375 15.5312 1 15.2917 1 15C1.04167 13.4375 1.58333 12.1458 2.625 11.125C3.64583 10.0833 4.9375 9.54167 6.5 9.5H9.5ZM2.53125 14.5H13.4688C13.3229 13.5 12.8854 12.6667 12.1562 12C11.4271 11.3542 10.5417 11.0208 9.5 11H6.5C5.45833 11.0208 4.57292 11.3542 3.84375 12C3.11458 12.6667 2.67708 13.5 2.53125 14.5ZM8 8C6.875 7.97917 5.92708 7.59375 5.15625 6.84375C4.40625 6.07292 4.02083 5.125 4 4C4.02083 2.875 4.40625 1.92708 5.15625 1.15625C5.92708 0.40625 6.875 0.0208333 8 0C9.125 0.0208333 10.0729 0.40625 10.8438 1.15625C11.5938 1.92708 11.9792 2.875 12 4C11.9792 5.125 11.5938 6.07292 10.8438 6.84375C10.0729 7.59375 9.125 7.97917 8 8ZM8 1.5C7.29167 1.52083 6.69792 1.76042 6.21875 2.21875C5.76042 2.69792 5.52083 3.29167 5.5 4C5.52083 4.70833 5.76042 5.30208 6.21875 5.78125C6.69792 6.23958 7.29167 6.47917 8 6.5C8.70833 6.47917 9.30208 6.23958 9.78125 5.78125C10.2396 5.30208 10.4792 4.70833 10.5 4C10.4792 3.29167 10.2396 2.69792 9.78125 2.21875C9.30208 1.76042 8.70833 1.52083 8 1.5Z"
      />
    </symbol>`,
  "icon-users": `<symbol id="icon-users" viewBox="0 0 20 16">
      <path
        
        d="M7 8C5.875 7.97917 4.92708 7.59375 4.15625 6.84375C3.40625 6.07292 3.02083 5.125 3 4C3.02083 2.875 3.40625 1.92708 4.15625 1.15625C4.92708 0.40625 5.875 0.0208333 7 0C8.125 0.0208333 9.07292 0.40625 9.84375 1.15625C10.5938 1.92708 10.9792 2.875 11 4C10.9792 5.125 10.5938 6.07292 9.84375 6.84375C9.07292 7.59375 8.125 7.97917 7 8ZM7 1.5C6.29167 1.52083 5.69792 1.76042 5.21875 2.21875C4.76042 2.69792 4.52083 3.29167 4.5 4C4.52083 4.70833 4.76042 5.30208 5.21875 5.78125C5.69792 6.23958 6.29167 6.47917 7 6.5C7.70833 6.47917 8.30208 6.23958 8.78125 5.78125C9.23958 5.30208 9.47917 4.70833 9.5 4C9.47917 3.29167 9.23958 2.69792 8.78125 2.21875C8.30208 1.76042 7.70833 1.52083 7 1.5ZM8.59375 9.5C10.1146 9.54167 11.3854 10.0729 12.4062 11.0938C13.4271 12.1146 13.9583 13.3854 14 14.9062C14 15.2188 13.8958 15.4792 13.6875 15.6875C13.4792 15.8958 13.2188 16 12.9062 16H1.09375C0.78125 16 0.520833 15.8958 0.3125 15.6875C0.104167 15.4792 0 15.2188 0 14.9062C0.0416667 13.3854 0.572917 12.1146 1.59375 11.0938C2.61458 10.0729 3.88542 9.54167 5.40625 9.5H8.59375ZM1.53125 14.5H12.4688C12.3438 13.5 11.9167 12.6667 11.1875 12C10.4792 11.3542 9.61458 11.0208 8.59375 11H5.40625C4.38542 11.0208 3.51042 11.3542 2.78125 12C2.07292 12.6667 1.65625 13.5 1.53125 14.5ZM14.9688 10C16.4062 10.0417 17.5938 10.5312 18.5312 11.4688C19.4688 12.4062 19.9583 13.5729 20 14.9688C20 15.2604 19.9062 15.5 19.7188 15.6875C19.5312 15.8958 19.2917 16 19 16H14.6875C14.8958 15.6875 15 15.3229 15 14.9062C15 13.9271 14.7917 13.0104 14.375 12.1562C13.9583 11.3229 13.3854 10.6042 12.6562 10H14.9688ZM13.5 8C12.5 7.97917 11.6667 7.63542 11 6.96875C11.6458 6.11458 11.9792 5.125 12 4C11.9792 3.16667 11.7812 2.40625 11.4062 1.71875C12.0104 1.26042 12.7083 1.02083 13.5 1C14.5 1.02083 15.3229 1.36458 15.9688 2.03125C16.6354 2.67708 16.9792 3.5 17 4.5C16.9792 5.5 16.6354 6.32292 15.9688 6.96875C15.3229 7.63542 14.5 7.97917 13.5 8Z"
      />
    </symbol>`,
  "icon-user-plus": `<symbol id="icon-user-plus" viewBox="0 0 20 16">
      <path
        
        d="M7 8C5.875 7.97917 4.92708 7.59375 4.15625 6.84375C3.40625 6.07292 3.02083 5.125 3 4C3.02083 2.875 3.40625 1.92708 4.15625 1.15625C4.92708 0.40625 5.875 0.0208333 7 0C8.125 0.0208333 9.07292 0.40625 9.84375 1.15625C10.5938 1.92708 10.9792 2.875 11 4C10.9792 5.125 10.5938 6.07292 9.84375 6.84375C9.07292 7.59375 8.125 7.97917 7 8ZM7 1.5C6.29167 1.52083 5.69792 1.76042 5.21875 2.21875C4.76042 2.69792 4.52083 3.29167 4.5 4C4.52083 4.70833 4.76042 5.30208 5.21875 5.78125C5.69792 6.23958 6.29167 6.47917 7 6.5C7.70833 6.47917 8.30208 6.23958 8.78125 5.78125C9.23958 5.30208 9.47917 4.70833 9.5 4C9.47917 3.29167 9.23958 2.69792 8.78125 2.21875C8.30208 1.76042 7.70833 1.52083 7 1.5ZM8.59375 9.5C10.1146 9.54167 11.3854 10.0729 12.4062 11.0938C13.4271 12.1146 13.9583 13.3854 14 14.9062C14 15.2188 13.8958 15.4792 13.6875 15.6875C13.4792 15.8958 13.2188 16 12.9062 16H1.09375C0.78125 16 0.520833 15.8958 0.3125 15.6875C0.104167 15.4792 0 15.2188 0 14.9062C0.0416667 13.3854 0.572917 12.1146 1.59375 11.0938C2.61458 10.0729 3.88542 9.54167 5.40625 9.5H8.59375ZM1.53125 14.5H12.4688C12.3438 13.5 11.9167 12.6667 11.1875 12C10.4792 11.3542 9.61458 11.0208 8.59375 11H5.40625C4.38542 11.0208 3.51042 11.3542 2.78125 12C2.07292 12.6667 1.65625 13.5 1.53125 14.5ZM19.25 6.25C19.7083 6.29167 19.9583 6.54167 20 7C19.9583 7.45833 19.7083 7.70833 19.25 7.75H17.75V9.25C17.7083 9.70833 17.4583 9.95833 17 10C16.5417 9.95833 16.2917 9.70833 16.25 9.25V7.75H14.75C14.2917 7.70833 14.0417 7.45833 14 7C14.0417 6.54167 14.2917 6.29167 14.75 6.25H16.25V4.75C16.2917 4.29167 16.5417 4.04167 17 4C17.4583 4.04167 17.7083 4.29167 17.75 4.75V6.25H19.25Z"
      />
    </symbol>`,
  "icon-user-check": `<symbol id="icon-user-check" viewBox="0 0 20 16">
      <path
        
        d="M8.59375 9.5C10.1146 9.54167 11.3854 10.0729 12.4062 11.0938C13.4271 12.1146 13.9583 13.3854 14 14.9062C14 15.2188 13.8958 15.4792 13.6875 15.6875C13.4792 15.8958 13.2188 16 12.9062 16H1.09375C0.78125 16 0.520833 15.8958 0.3125 15.6875C0.104167 15.4792 0 15.2188 0 14.9062C0.0416667 13.3854 0.572917 12.1146 1.59375 11.0938C2.61458 10.0729 3.88542 9.54167 5.40625 9.5H8.59375ZM1.53125 14.5H12.4688C12.3438 13.5 11.9167 12.6667 11.1875 12C10.4792 11.3542 9.61458 11.0208 8.59375 11H5.40625C4.38542 11.0208 3.51042 11.3542 2.78125 12C2.07292 12.6667 1.65625 13.5 1.53125 14.5ZM7 8C5.875 7.97917 4.92708 7.59375 4.15625 6.84375C3.40625 6.07292 3.02083 5.125 3 4C3.02083 2.875 3.40625 1.92708 4.15625 1.15625C4.92708 0.40625 5.875 0.0208333 7 0C8.125 0.0208333 9.07292 0.40625 9.84375 1.15625C10.5938 1.92708 10.9792 2.875 11 4C10.9792 5.125 10.5938 6.07292 9.84375 6.84375C9.07292 7.59375 8.125 7.97917 7 8ZM7 1.5C6.29167 1.52083 5.69792 1.76042 5.21875 2.21875C4.76042 2.69792 4.52083 3.29167 4.5 4C4.52083 4.70833 4.76042 5.30208 5.21875 5.78125C5.69792 6.23958 6.29167 6.47917 7 6.5C7.70833 6.47917 8.30208 6.23958 8.78125 5.78125C9.23958 5.30208 9.47917 4.70833 9.5 4C9.47917 3.29167 9.23958 2.69792 8.78125 2.21875C8.30208 1.76042 7.70833 1.52083 7 1.5ZM19.75 4.1875C20.0625 4.54167 20.0833 4.89583 19.8125 5.25L16.5625 8.75C16.4167 8.91667 16.2292 9 16 9C15.7917 9 15.6146 8.92708 15.4688 8.78125L13.7188 7.03125C13.4271 6.67708 13.4271 6.32292 13.7188 5.96875C14.0729 5.67708 14.4271 5.67708 14.7812 5.96875L15.9688 7.15625L18.6875 4.25C19.0417 3.9375 19.3958 3.91667 19.75 4.1875Z"
      />
    </symbol>`,
  "icon-user-x": `<symbol id="icon-user-x" viewBox="0 0 20 16">
      <path
        
        d="M8.59375 9.5C10.1146 9.54167 11.3854 10.0729 12.4062 11.0938C13.4271 12.1146 13.9583 13.3854 14 14.9062C14 15.2188 13.8958 15.4792 13.6875 15.6875C13.4792 15.8958 13.2188 16 12.9062 16H1.09375C0.78125 16 0.520833 15.8958 0.3125 15.6875C0.104167 15.4792 0 15.2188 0 14.9062C0.0416667 13.3854 0.572917 12.1146 1.59375 11.0938C2.61458 10.0729 3.88542 9.54167 5.40625 9.5H8.59375ZM1.53125 14.5H12.4688C12.3438 13.5 11.9167 12.6667 11.1875 12C10.4792 11.3542 9.61458 11.0208 8.59375 11H5.40625C4.38542 11.0208 3.51042 11.3542 2.78125 12C2.07292 12.6667 1.65625 13.5 1.53125 14.5ZM7 8C5.875 7.97917 4.92708 7.59375 4.15625 6.84375C3.40625 6.07292 3.02083 5.125 3 4C3.02083 2.875 3.40625 1.92708 4.15625 1.15625C4.92708 0.40625 5.875 0.0208333 7 0C8.125 0.0208333 9.07292 0.40625 9.84375 1.15625C10.5938 1.92708 10.9792 2.875 11 4C10.9792 5.125 10.5938 6.07292 9.84375 6.84375C9.07292 7.59375 8.125 7.97917 7 8ZM7 1.5C6.29167 1.52083 5.69792 1.76042 5.21875 2.21875C4.76042 2.69792 4.52083 3.29167 4.5 4C4.52083 4.70833 4.76042 5.30208 5.21875 5.78125C5.69792 6.23958 6.29167 6.47917 7 6.5C7.70833 6.47917 8.30208 6.23958 8.78125 5.78125C9.23958 5.30208 9.47917 4.70833 9.5 4C9.47917 3.29167 9.23958 2.69792 8.78125 2.21875C8.30208 1.76042 7.70833 1.52083 7 1.5ZM18.0625 6.96875L19.5312 8.46875C19.8229 8.82292 19.8229 9.17708 19.5312 9.53125C19.1771 9.82292 18.8229 9.82292 18.4688 9.53125L17 8.0625L15.5312 9.53125C15.1771 9.82292 14.8229 9.82292 14.4688 9.53125C14.1771 9.17708 14.1771 8.82292 14.4688 8.46875L15.9375 7L14.4688 5.53125C14.1771 5.17708 14.1771 4.82292 14.4688 4.46875C14.8229 4.17708 15.1771 4.17708 15.5312 4.46875L17 5.9375L18.4688 4.4375C18.8229 4.14583 19.1771 4.14583 19.5312 4.4375C19.8229 4.79167 19.8229 5.14583 19.5312 5.5L18.0625 6.96875Z"
      />
    </symbol>`,
  "icon-image": `<symbol id="icon-image" viewBox="0 0 16 16">
      <path
        
        d="M4.75 3.75C5.16667 3.77083 5.52083 3.91667 5.8125 4.1875C6.08333 4.47917 6.22917 4.83333 6.25 5.25C6.22917 5.66667 6.08333 6.02083 5.8125 6.3125C5.52083 6.58333 5.16667 6.72917 4.75 6.75C4.33333 6.72917 3.97917 6.58333 3.6875 6.3125C3.41667 6.02083 3.27083 5.66667 3.25 5.25C3.27083 4.83333 3.41667 4.47917 3.6875 4.1875C3.97917 3.91667 4.33333 3.77083 4.75 3.75ZM13.9688 1C14.5521 1.02083 15.0312 1.21875 15.4062 1.59375C15.7604 1.96875 15.9479 2.4375 15.9688 3V13C15.9479 13.5625 15.75 14.0312 15.375 14.4062C15 14.7812 14.5312 14.9792 13.9688 15H1.96875C1.42708 14.9792 0.96875 14.7812 0.59375 14.4062C0.21875 14.0312 0.0208333 13.5625 0 13V3C0.0208333 2.4375 0.21875 1.96875 0.59375 1.59375C0.96875 1.21875 1.42708 1.02083 1.96875 1H13.9688ZM14.4688 12.7812H14.5V3C14.4792 2.6875 14.3125 2.52083 14 2.5H2C1.6875 2.52083 1.52083 2.6875 1.5 3V12.9688L3.875 10.0312C3.97917 9.90625 4.125 9.84375 4.3125 9.84375C4.52083 9.84375 4.67708 9.90625 4.78125 10.0312L5.9375 11.4688L9.28125 6.96875C9.38542 6.82292 9.54167 6.75 9.75 6.75C9.95833 6.75 10.1042 6.82292 10.1875 6.96875L14.4688 12.7812Z"
      />
    </symbol>`,
  "icon-inbox": `<symbol id="icon-inbox" viewBox="0 0 16 16">
      <path
        
        d="M15.875 9.5625C15.9583 9.875 16 10.1979 16 10.5312V13.0312C15.9792 13.5938 15.7812 14.0625 15.4062 14.4375C15.0312 14.8125 14.5625 15.0104 14 15.0312H2C1.4375 15.0104 0.96875 14.8125 0.59375 14.4375C0.21875 14.0625 0.0208333 13.5938 0 13.0312V10.5312C0 10.1979 0.0416667 9.875 0.125 9.5625L2.03125 1.75C2.17708 1.29167 2.5 1.04167 3 1H13C13.5 1.02083 13.8229 1.28125 13.9688 1.78125L15.875 9.5625ZM3.40625 2.53125L1.78125 9.03125H4.5C4.8125 9.05208 5.04167 9.1875 5.1875 9.4375L5.96875 11.0312H10.0312L10.8438 9.4375C10.9688 9.1875 11.1875 9.05208 11.5 9.03125H14.2188L12.625 2.53125H3.40625ZM14.5 13.0312V10.5312H11.9688L11.1562 12.125C11.0312 12.375 10.8125 12.5104 10.5 12.5312H5.5C5.1875 12.5104 4.96875 12.375 4.84375 12.125L4.03125 10.5312H1.5V13.0312C1.52083 13.3438 1.6875 13.5104 2 13.5312H14C14.3125 13.5104 14.4792 13.3438 14.5 13.0312Z"
      />
    </symbol>`,
  "icon-inbox-filled": `<symbol id="icon-inbox-filled" viewBox="0 0 16 16">
      <path
        
        d="M15.875 9.53125C15.9583 9.84375 16 10.1667 16 10.5V13C15.9792 13.5625 15.7812 14.0312 15.4062 14.4062C15.0312 14.7812 14.5625 14.9792 14 15H2C1.4375 14.9792 0.96875 14.7812 0.59375 14.4062C0.21875 14.0312 0.0208333 13.5625 0 13V10.5C0 10.1667 0.0416667 9.84375 0.125 9.53125L2.03125 1.75C2.17708 1.27083 2.5 1.02083 3 1H13C13.5 1.02083 13.8229 1.27083 13.9688 1.75L15.875 9.53125ZM3.40625 2.5L1.78125 9H4.5C4.8125 9.02083 5.04167 9.15625 5.1875 9.40625L5.96875 11H10.0312L10.8438 9.40625C10.9688 9.15625 11.1875 9.02083 11.5 9H14.2188L12.625 2.5H3.40625ZM14.5 13V10.5H11.9688L11.1562 12.0938C11.0312 12.3438 10.8125 12.4792 10.5 12.5H5.5C5.1875 12.4792 4.96875 12.3438 4.84375 12.0938L4.03125 10.5H1.5V13C1.52083 13.3125 1.6875 13.4792 2 13.5H14C14.3125 13.4792 14.4792 13.3125 14.5 13ZM5.75 5.5C5.29167 5.45833 5.04167 5.20833 5 4.75C5.04167 4.29167 5.29167 4.04167 5.75 4H10.25C10.7083 4.04167 10.9583 4.29167 11 4.75C10.9583 5.20833 10.7083 5.45833 10.25 5.5H5.75ZM11.25 8H4.75C4.29167 7.95833 4.04167 7.70833 4 7.25C4.04167 6.79167 4.29167 6.54167 4.75 6.5H11.25C11.7083 6.54167 11.9583 6.79167 12 7.25C11.9583 7.70833 11.7083 7.95833 11.25 8Z"
      />
    </symbol>`,
  "icon-clock": `<symbol id="icon-clock" viewBox="0 0 16 16">
      <path
        
        d="M7.25 3.75C7.29167 3.29167 7.54167 3.04167 8 3C8.45833 3.04167 8.70833 3.29167 8.75 3.75V7.59375L11.4062 9.375C11.7812 9.66667 11.8438 10.0104 11.5938 10.4062C11.3229 10.7812 10.9896 10.8438 10.5938 10.5938L7.59375 8.59375C7.36458 8.46875 7.25 8.26042 7.25 7.96875V3.75ZM8 0C9.5 0.0208333 10.8438 0.385417 12.0312 1.09375C13.2396 1.80208 14.1979 2.76042 14.9062 3.96875C15.6146 5.15625 15.9792 6.5 16 8C15.9792 9.5 15.6146 10.8438 14.9062 12.0312C14.1979 13.2396 13.2396 14.1979 12.0312 14.9062C10.8438 15.6146 9.5 15.9792 8 16C6.5 15.9792 5.15625 15.6146 3.96875 14.9062C2.76042 14.1979 1.80208 13.2396 1.09375 12.0312C0.385417 10.8438 0.0208333 9.5 0 8C0.0208333 6.5 0.385417 5.15625 1.09375 3.96875C1.80208 2.76042 2.76042 1.80208 3.96875 1.09375C5.15625 0.385417 6.5 0.0208333 8 0ZM1.5 8C1.54167 9.83333 2.17708 11.3646 3.40625 12.5938C4.63542 13.8229 6.16667 14.4583 8 14.5C9.83333 14.4583 11.3646 13.8229 12.5938 12.5938C13.8229 11.3646 14.4583 9.83333 14.5 8C14.4583 6.16667 13.8229 4.63542 12.5938 3.40625C11.3646 2.17708 9.83333 1.54167 8 1.5C6.16667 1.54167 4.63542 2.17708 3.40625 3.40625C2.17708 4.63542 1.54167 6.16667 1.5 8Z"
      />
    </symbol>`,
  "icon-eye-off": `<symbol id="icon-eye-off" viewBox="0 0 20 16">
      <path
        
        d="M19.7232 14.6562C20.0565 14.9896 20.0878 15.3333 19.817 15.6875C19.5045 16.0208 19.1503 16.0625 18.7545 15.8125L0.285714 1.34375C-0.047619 1.03125 -0.0892857 0.677083 0.160714 0.28125C0.327381 0.09375 0.525298 0 0.754464 0C0.921131 0 1.07738 0.0520833 1.22321 0.15625L4.66071 2.90625C6.24405 1.69792 8.0253 1.08333 10.0045 1.0625C11.942 1.08333 13.692 1.67708 15.2545 2.84375C16.817 3.98958 18.0357 5.54167 18.9107 7.5C18.9732 7.66667 19.0045 7.84375 19.0045 8.03125C19.0045 8.21875 18.9732 8.39583 18.9107 8.5625C18.2857 9.91667 17.4732 11.1042 16.4732 12.125L19.7232 14.6562ZM12.317 8.875C12.442 8.60417 12.5045 8.3125 12.5045 8C12.4836 7.29167 12.244 6.69792 11.7857 6.21875C11.3065 5.76042 10.7128 5.52083 10.0045 5.5C10.0045 5.5 9.99405 5.5 9.97321 5.5C9.95238 5.5 9.93155 5.5 9.91071 5.5C9.95238 5.66667 9.97321 5.83333 9.97321 6C9.95238 6.3125 9.88988 6.61458 9.78571 6.90625L12.317 8.875ZM13.5357 9.8125L15.2857 11.1562C16.1815 10.3021 16.9211 9.23958 17.5045 7.96875C16.7128 6.28125 15.6607 4.94792 14.3482 3.96875C13.0357 3.01042 11.5878 2.52083 10.0045 2.5C8.5253 2.52083 7.1503 2.95833 5.87946 3.8125L7.37946 5C8.10863 4.35417 8.98363 4.02083 10.0045 4C11.1295 4.02083 12.0774 4.41667 12.8482 5.1875C13.5982 5.9375 13.9836 6.875 14.0045 8C13.9836 8.66667 13.8274 9.27083 13.5357 9.8125ZM10.0045 12C8.87946 11.9792 7.93155 11.5938 7.16071 10.8438C6.41071 10.0729 6.0253 9.125 6.00446 8C6.00446 7.95833 6.00446 7.90625 6.00446 7.84375C6.0253 7.80208 6.03571 7.77083 6.03571 7.75L7.78571 9.125C8.13988 9.8125 8.70238 10.25 9.47321 10.4375L11.192 11.8125C10.817 11.9375 10.4211 12 10.0045 12ZM10.0045 13.5C10.942 13.5 11.817 13.3021 12.6295 12.9062L13.9732 13.9688C12.744 14.6354 11.4107 14.9688 9.97321 14.9688C8.03571 14.9479 6.28571 14.3542 4.72321 13.1875C3.16071 12.0417 1.95238 10.4896 1.09821 8.53125C1.01488 8.36458 0.973214 8.1875 0.973214 8C0.994048 7.8125 1.03571 7.63542 1.09821 7.46875C1.49405 6.57292 1.97321 5.75 2.53571 5L3.72321 5.96875C3.26488 6.59375 2.85863 7.28125 2.50446 8.03125C3.29613 9.71875 4.34821 11.0521 5.66071 12.0312C6.97321 12.9896 8.42113 13.4792 10.0045 13.5Z"
      />
    </symbol>`,
  "icon-eye": `<symbol id="icon-eye" viewBox="0 0 18 16">
      <path
        
        d="M17.9062 7.4375C17.9688 7.625 18 7.8125 18 8C18 8.16667 17.9688 8.35417 17.9062 8.5625C17.0312 10.5 15.8125 12.0521 14.25 13.2188C12.6875 14.3854 10.9375 14.9792 9 15C7.0625 14.9792 5.3125 14.3854 3.75 13.2188C2.1875 12.0521 0.96875 10.4896 0.09375 8.53125C0.03125 8.36458 0 8.1875 0 8C0 7.8125 0.03125 7.625 0.09375 7.4375C0.96875 5.5 2.1875 3.94792 3.75 2.78125C5.3125 1.61458 7.0625 1.02083 9 1C10.9375 1.02083 12.6875 1.61458 14.25 2.78125C15.8125 3.94792 17.0312 5.5 17.9062 7.4375ZM9 13.5C10.5833 13.4792 12.0312 12.9896 13.3438 12.0312C14.6354 11.0521 15.6875 9.69792 16.5 7.96875C15.7083 6.28125 14.6562 4.94792 13.3438 3.96875C12.0312 3.01042 10.5833 2.52083 9 2.5C7.41667 2.52083 5.96875 3.01042 4.65625 3.96875C3.34375 4.94792 2.29167 6.30208 1.5 8.03125C2.29167 9.71875 3.34375 11.0521 4.65625 12.0312C5.96875 12.9896 7.41667 13.4792 9 13.5ZM9 4C10.125 4.02083 11.0729 4.41667 11.8438 5.1875C12.5938 5.9375 12.9792 6.875 13 8C12.9792 9.125 12.5833 10.0729 11.8125 10.8438C11.0625 11.5938 10.125 11.9792 9 12C7.875 11.9792 6.92708 11.5938 6.15625 10.8438C5.40625 10.0729 5.02083 9.125 5 8C5.02083 6.875 5.40625 5.92708 6.15625 5.15625C6.92708 4.40625 7.875 4.02083 9 4ZM9 10.5C9.70833 10.4792 10.3021 10.2396 10.7812 9.78125C11.2396 9.30208 11.4792 8.70833 11.5 8C11.4792 7.29167 11.2396 6.69792 10.7812 6.21875C10.3021 5.76042 9.70833 5.52083 9 5.5C8.97917 5.5 8.96875 5.5 8.96875 5.5C8.94792 5.5 8.9375 5.5 8.9375 5.5C8.97917 5.66667 9 5.83333 9 6C8.97917 6.5625 8.78125 7.03125 8.40625 7.40625C8.03125 7.78125 7.5625 7.97917 7 8C6.83333 8 6.66667 7.97917 6.5 7.9375C6.5 7.9375 6.5 7.94792 6.5 7.96875C6.5 7.96875 6.5 7.97917 6.5 8C6.52083 8.70833 6.76042 9.30208 7.21875 9.78125C7.69792 10.2396 8.29167 10.4792 9 10.5Z"
      />
    </symbol>`,
  "icon-location-dot": `<symbol id="icon-location-dot" viewBox="0 0 16 16">
      <path
        
        d="M8 0C9.70833 0.0416667 11.125 0.625 12.25 1.75C13.375 2.875 13.9583 4.29167 14 6C14 6.64583 13.9167 7.22917 13.75 7.75C13.5833 8.29167 13.2604 8.92708 12.7812 9.65625C12.3021 10.4062 11.6146 11.4062 10.7188 12.6562C10.1354 13.4896 9.4375 14.5 8.625 15.6875C8.45833 15.8958 8.25 16 8 16C7.75 16 7.54167 15.8958 7.375 15.6875C6.58333 14.5208 5.88542 13.5208 5.28125 12.6875C4.38542 11.4167 3.69792 10.4062 3.21875 9.65625C2.73958 8.92708 2.41667 8.29167 2.25 7.75C2.08333 7.22917 2 6.64583 2 6C2.04167 4.29167 2.625 2.875 3.75 1.75C4.875 0.625 6.29167 0.0416667 8 0ZM8 13.9375C8.16667 13.6875 8.33333 13.4479 8.5 13.2188C8.85417 12.6979 9.17708 12.2292 9.46875 11.8125C10.3646 10.5417 11.0312 9.57292 11.4688 8.90625C11.9062 8.23958 12.1875 7.70833 12.3125 7.3125C12.4583 6.89583 12.5208 6.45833 12.5 6C12.4583 4.72917 12.0208 3.66667 11.1875 2.8125C10.3333 1.97917 9.27083 1.54167 8 1.5C6.72917 1.54167 5.66667 1.97917 4.8125 2.8125C3.97917 3.66667 3.54167 4.72917 3.5 6C3.47917 6.45833 3.54167 6.89583 3.6875 7.3125C3.8125 7.70833 4.09375 8.23958 4.53125 8.90625C4.96875 9.57292 5.63542 10.5417 6.53125 11.8125C6.96875 12.4375 7.45833 13.1458 8 13.9375ZM8 3.46875C8.70833 3.48958 9.30208 3.73958 9.78125 4.21875C10.2396 4.67708 10.4792 5.26042 10.5 5.96875C10.4792 6.67708 10.2396 7.27083 9.78125 7.75C9.30208 8.20833 8.70833 8.44792 8 8.46875C7.29167 8.44792 6.69792 8.20833 6.21875 7.75C5.76042 7.27083 5.52083 6.67708 5.5 5.96875C5.52083 5.26042 5.76042 4.67708 6.21875 4.21875C6.69792 3.73958 7.29167 3.48958 8 3.46875ZM8 7C8.29167 7 8.53125 6.90625 8.71875 6.71875C8.90625 6.53125 9 6.29167 9 6C9 5.70833 8.90625 5.46875 8.71875 5.28125C8.53125 5.09375 8.29167 5 8 5C7.70833 5 7.46875 5.09375 7.28125 5.28125C7.09375 5.46875 7 5.70833 7 6C7 6.29167 7.09375 6.53125 7.28125 6.71875C7.46875 6.90625 7.70833 7 8 7Z"
      />
    </symbol>`,
  "icon-lock-keyhole": `<symbol id="icon-lock-keyhole" viewBox="0 0 16 16">
      <path
        
        d="M13 6C13.5625 6.02083 14.0312 6.21875 14.4062 6.59375C14.7812 6.96875 14.9792 7.4375 15 8V13.9688C14.9792 14.5312 14.7812 15 14.4062 15.375C14.0312 15.75 13.5625 15.9479 13 15.9688H3C2.4375 15.9479 1.96875 15.75 1.59375 15.375C1.21875 15 1.02083 14.5312 1 13.9688V8C1.02083 7.4375 1.21875 6.96875 1.59375 6.59375C1.96875 6.21875 2.4375 6.02083 3 6H4V3.96875C4.02083 2.84375 4.41667 1.90625 5.1875 1.15625C5.9375 0.40625 6.875 0.0208333 8 0C9.125 0.0208333 10.0625 0.40625 10.8125 1.15625C11.5833 1.90625 11.9792 2.84375 12 3.96875V6H13ZM5.5 4V6H10.5V4C10.4792 3.29167 10.2396 2.69792 9.78125 2.21875C9.30208 1.76042 8.70833 1.52083 8 1.5C7.29167 1.52083 6.69792 1.76042 6.21875 2.21875C5.76042 2.69792 5.52083 3.29167 5.5 4ZM13.5 14V8C13.4792 7.6875 13.3125 7.52083 13 7.5H3C2.6875 7.52083 2.52083 7.6875 2.5 8V14C2.52083 14.3125 2.6875 14.4792 3 14.5H13C13.3125 14.4792 13.4792 14.3125 13.5 14ZM8 9.5C8.45833 9.54167 8.70833 9.79167 8.75 10.25V11.75C8.70833 12.2083 8.45833 12.4479 8 12.4688C7.54167 12.4271 7.29167 12.1875 7.25 11.75V10.25C7.29167 9.79167 7.54167 9.54167 8 9.5Z"
      />
    </symbol>`,
  "icon-lock-keyhole-open": `<symbol id="icon-lock-keyhole-open" viewBox="0 0 18 16">
      <path
        
        d="M13.5 0C14.625 0.0208333 15.5625 0.416667 16.3125 1.1875C17.0833 1.9375 17.4792 2.875 17.5 4V6.25C17.4583 6.70833 17.2083 6.95833 16.75 7C16.2917 6.95833 16.0417 6.70833 16 6.25V4C15.9792 3.29167 15.7396 2.69792 15.2812 2.21875C14.8021 1.76042 14.2083 1.52083 13.5 1.5C12.7917 1.52083 12.1979 1.76042 11.7188 2.21875C11.2604 2.69792 11.0208 3.29167 11 4V6H12C12.5625 6.02083 13.0312 6.21875 13.4062 6.59375C13.7812 6.96875 13.9792 7.4375 14 8V14C13.9792 14.5625 13.7812 15.0312 13.4062 15.4062C13.0312 15.7812 12.5625 15.9792 12 16H2C1.4375 15.9792 0.96875 15.7812 0.59375 15.4062C0.21875 15.0312 0.0208333 14.5625 0 14V8C0.0208333 7.4375 0.21875 6.96875 0.59375 6.59375C0.96875 6.21875 1.4375 6.02083 2 6H9.5V4C9.52083 2.875 9.91667 1.9375 10.6875 1.1875C11.4375 0.416667 12.375 0.0208333 13.5 0ZM12 7.5H2C1.6875 7.52083 1.52083 7.6875 1.5 8V14C1.52083 14.3125 1.6875 14.4792 2 14.5H12C12.3125 14.4792 12.4792 14.3125 12.5 14V8C12.4792 7.6875 12.3125 7.52083 12 7.5ZM7 12.5C6.54167 12.4583 6.29167 12.2083 6.25 11.75V10.25C6.29167 9.79167 6.54167 9.54167 7 9.5C7.45833 9.54167 7.70833 9.79167 7.75 10.25V11.75C7.70833 12.2083 7.45833 12.4583 7 12.5Z"
      />
    </symbol>`,
  "icon-calendar": `<symbol id="icon-calendar" viewBox="0 0 16 16">
      <path
        
        d="M5.75 2H10.25V0.75C10.2917 0.291667 10.5417 0.0416667 11 0C11.4583 0.0416667 11.7083 0.291667 11.75 0.75V2H13C13.5625 2.02083 14.0312 2.21875 14.4062 2.59375C14.7812 2.96875 14.9792 3.4375 15 4V14C14.9792 14.5625 14.7812 15.0312 14.4062 15.4062C14.0312 15.7812 13.5625 15.9792 13 16H3C2.4375 15.9792 1.96875 15.7812 1.59375 15.4062C1.21875 15.0312 1.02083 14.5625 1 14V4C1.02083 3.4375 1.21875 2.96875 1.59375 2.59375C1.96875 2.21875 2.4375 2.02083 3 2H4.25V0.75C4.29167 0.291667 4.54167 0.0416667 5 0C5.45833 0.0416667 5.70833 0.291667 5.75 0.75V2ZM2.5 14C2.52083 14.3125 2.6875 14.4792 3 14.5H13C13.3125 14.4792 13.4792 14.3125 13.5 14V6H2.5V14Z"
      />
    </symbol>`,
  "icon-expand-arrows": `<symbol id="icon-expand-arrows" viewBox="0 0 16 16">
      <path
        
        d="M15.5312 0.0625C15.7188 0.145833 15.8542 0.28125 15.9375 0.46875C15.9792 0.552083 16 0.645833 16 0.75V5.21875C15.9583 5.69792 15.7083 5.95833 15.25 6C14.7917 5.95833 14.5417 5.70833 14.5 5.25V2.5625L10.2812 6.78125C9.92708 7.07292 9.57292 7.07292 9.21875 6.78125C8.92708 6.42708 8.92708 6.07292 9.21875 5.71875L13.4375 1.5H10.75C10.2917 1.45833 10.0417 1.20833 10 0.75C10.0417 0.291667 10.3021 0.0416667 10.7812 0H15.25C15.3542 0 15.4479 0.0208333 15.5312 0.0625ZM0.46875 15.9375C0.28125 15.8542 0.145833 15.7188 0.0625 15.5312C0.0208333 15.4479 0 15.3542 0 15.25V10.75C0.0416667 10.2917 0.291667 10.0417 0.75 10C1.20833 10.0417 1.45833 10.2917 1.5 10.75V13.4375L5.71875 9.21875C6.07292 8.92708 6.42708 8.92708 6.78125 9.21875C7.07292 9.57292 7.07292 9.92708 6.78125 10.2812L2.5625 14.5H5.25C5.70833 14.5417 5.95833 14.7917 6 15.25C5.95833 15.7083 5.69792 15.9583 5.21875 16H0.75C0.645833 16 0.552083 15.9792 0.46875 15.9375Z"
      />
    </symbol>`,
  "icon-collapse-arrows": `<symbol id="icon-collapse-arrows" viewBox="0 0 16 16">
      <path
        
        d="M8.96875 7.4375C8.76042 7.35417 8.625 7.21875 8.5625 7.03125C8.52083 6.94792 8.5 6.85417 8.5 6.75V2.25C8.54167 1.79167 8.79167 1.54167 9.25 1.5C9.70833 1.54167 9.95833 1.79167 10 2.25V4.9375L14.2188 0.71875C14.5729 0.427083 14.9271 0.427083 15.2812 0.71875C15.5729 1.07292 15.5729 1.42708 15.2812 1.78125L11.0625 6H13.75C14.2083 6.04167 14.4583 6.29167 14.5 6.75C14.4583 7.20833 14.2083 7.45833 13.75 7.5H9.25C9.14583 7.5 9.05208 7.47917 8.96875 7.4375ZM7.03125 8.5625C7.21875 8.625 7.35417 8.76042 7.4375 8.96875C7.47917 9.05208 7.5 9.14583 7.5 9.25V13.75C7.45833 14.2083 7.20833 14.4583 6.75 14.5C6.29167 14.4583 6.04167 14.2083 6 13.75V11.0625L1.78125 15.2812C1.42708 15.5729 1.07292 15.5729 0.71875 15.2812C0.427083 14.9271 0.427083 14.5729 0.71875 14.2188L4.9375 10H2.25C1.79167 9.95833 1.54167 9.70833 1.5 9.25C1.54167 8.79167 1.79167 8.54167 2.25 8.5H6.75C6.85417 8.5 6.94792 8.52083 7.03125 8.5625Z"
      />
    </symbol>`,
  "icon-arrow-down-a-z": `<symbol id="icon-arrow-down-a-z" viewBox="0 0 16 16">
      <path
        
        d="M14.4699 13.5C14.9282 13.5417 15.1574 13.7917 15.1574 14.25C15.1365 14.7083 14.8969 14.9583 14.4386 15H10.9699C10.699 14.9792 10.4803 14.8438 10.3136 14.5938C10.2094 14.3021 10.2407 14.0312 10.4074 13.7812L12.9699 10.5H11.0011C10.5636 10.4583 10.324 10.2083 10.2824 9.75C10.324 9.29167 10.5636 9.04167 11.0011 9H14.4699C14.8032 9.02083 15.0428 9.15625 15.1886 9.40625C15.3136 9.69792 15.2824 9.96875 15.0949 10.2188L12.5324 13.5H14.4699ZM15.6886 5.90625C15.8344 6.34375 15.7199 6.67708 15.3449 6.90625C15.2199 6.96875 15.1053 7 15.0011 7C14.7094 7 14.4803 6.86458 14.3136 6.59375L14.1574 6.25H11.3449L11.2199 6.59375C10.9907 6.96875 10.6574 7.07292 10.2199 6.90625C9.82403 6.67708 9.70945 6.34375 9.87612 5.90625L12.0949 1.40625C12.2615 1.15625 12.4907 1.03125 12.7824 1.03125C13.074 1.03125 13.2928 1.15625 13.4386 1.40625L15.6886 5.90625ZM12.0949 4.75H13.4074L12.7511 3.4375L12.0949 4.75ZM7.18862 10.4688C7.33445 10.3229 7.51153 10.25 7.71987 10.25C7.90737 10.25 8.06362 10.3229 8.18862 10.4688C8.50112 10.8021 8.52195 11.1562 8.25112 11.5312L5.28237 14.7812C5.1157 14.9271 4.9282 15 4.71987 15C4.51153 15 4.32403 14.9271 4.15737 14.7812L1.18862 11.5312C0.917783 11.1562 0.938616 10.8021 1.25112 10.4688C1.39695 10.3229 1.56362 10.25 1.75112 10.25C1.95945 10.25 2.14695 10.3333 2.31362 10.5L4.00112 12.3438V1.75C4.04278 1.29167 4.29278 1.04167 4.75112 1C5.20945 1.04167 5.45945 1.29167 5.50112 1.75V12.3438L7.18862 10.4688Z"
      />
    </symbol>`,
  "icon-arrow-up-arrow-down": `<symbol id="icon-arrow-up-arrow-down" viewBox="0 0 16 16">
      <path
        
        d="M8.25112 5.53125C7.89695 5.82292 7.54278 5.8125 7.18862 5.5L5.50112 3.65625V14.25C5.45945 14.7083 5.20945 14.9583 4.75112 15C4.29278 14.9583 4.04278 14.7083 4.00112 14.25V3.65625L2.31362 5.5C2.14695 5.66667 1.95945 5.75 1.75112 5.75C1.56362 5.75 1.39695 5.67708 1.25112 5.53125C0.938616 5.19792 0.917783 4.84375 1.18862 4.46875L4.18862 1.21875C4.35528 1.07292 4.54278 1 4.75112 1C4.95945 1 5.14695 1.07292 5.31362 1.21875L8.31362 4.46875C8.58445 4.84375 8.56362 5.19792 8.25112 5.53125ZM14.2511 10.4688C14.5636 10.8021 14.5636 11.1562 14.2511 11.5312L11.2824 14.7812C11.1157 14.9271 10.9282 15 10.7199 15C10.5115 15 10.324 14.9271 10.1574 14.7812L7.18862 11.5312C6.91778 11.1562 6.93862 10.8021 7.25112 10.4688C7.39695 10.3229 7.56362 10.25 7.75112 10.25C7.95945 10.25 8.14695 10.3333 8.31362 10.5L10.0011 12.3438V1.75C10.0428 1.29167 10.2928 1.04167 10.7511 1C11.2094 1.04167 11.4594 1.29167 11.5011 1.75V12.3438L13.1886 10.5C13.5428 10.1875 13.8969 10.1771 14.2511 10.4688Z"
      />
    </symbol>`,
  "icon-arrow-right-from-bracket": `<symbol id="icon-arrow-right-from-bracket" viewBox="0 0 16 16">
      <path
        
        d="M6 14.25C5.95833 13.7917 5.70833 13.5417 5.25 13.5H3C2.58333 13.4792 2.22917 13.3333 1.9375 13.0625C1.66667 12.7708 1.52083 12.4167 1.5 12V4C1.52083 3.58333 1.66667 3.22917 1.9375 2.9375C2.22917 2.66667 2.58333 2.52083 3 2.5H5.25C5.70833 2.45833 5.95833 2.20833 6 1.75C5.95833 1.29167 5.70833 1.04167 5.25 1H3C2.14583 1.02083 1.4375 1.3125 0.875 1.875C0.3125 2.4375 0.0208333 3.14583 0 4V12C0.0208333 12.8542 0.3125 13.5625 0.875 14.125C1.4375 14.6875 2.14583 14.9792 3 15H5.25C5.70833 14.9583 5.95833 14.7083 6 14.25ZM15.8125 7.5C16.0833 7.83333 16.0625 8.16667 15.75 8.5L11.7812 12.75C11.6146 12.9167 11.4271 13 11.2188 13C11.0521 13 10.8854 12.9271 10.7188 12.7812C10.4062 12.4479 10.3958 12.1042 10.6875 11.75L13.5 8.75H5.71875C5.28125 8.70833 5.04167 8.45833 5 8C5.04167 7.54167 5.28125 7.29167 5.71875 7.25H13.5L10.7188 4.25C10.4479 3.89583 10.4583 3.55208 10.75 3.21875C11.125 2.92708 11.4792 2.9375 11.8125 3.25L15.8125 7.5Z"
      />
    </symbol>`,
  "icon-arrow-down-z-a": `<symbol id="icon-arrow-down-z-a" viewBox="0 0 16 16">
      <path
        
        d="M10.9699 2.5C10.5532 2.45833 10.324 2.20833 10.2824 1.75C10.324 1.29167 10.5636 1.04167 11.0011 1H14.4699C14.8032 1.02083 15.0428 1.15625 15.1886 1.40625C15.3136 1.69792 15.2824 1.96875 15.0949 2.21875L12.5324 5.5H14.4699C14.9074 5.54167 15.1469 5.79167 15.1886 6.25C15.1678 6.70833 14.9282 6.95833 14.4699 7H11.0011C10.6886 6.97917 10.4594 6.83333 10.3136 6.5625C10.2094 6.29167 10.2407 6.03125 10.4074 5.78125L12.9386 2.5H10.9699ZM15.6886 13.9062C15.8344 14.3438 15.7407 14.6771 15.4074 14.9062C15.2824 14.9688 15.1678 15 15.0636 15C14.7719 15 14.5428 14.8646 14.3761 14.5938L14.2199 14.25H11.4074L11.2199 14.5938C10.9907 14.9688 10.6574 15.0729 10.2199 14.9062C9.82403 14.6771 9.70945 14.3438 9.87612 13.9062L12.0949 9.40625C12.2615 9.15625 12.4907 9.03125 12.7824 9.03125C13.074 9.03125 13.2928 9.15625 13.4386 9.40625L15.6886 13.9062ZM12.0949 12.7188H13.4074L12.7511 11.4062L12.0949 12.7188ZM7.18862 10.4688C7.33445 10.3229 7.51153 10.25 7.71987 10.25C7.90737 10.25 8.06362 10.3229 8.18862 10.4688C8.50112 10.8021 8.52195 11.1562 8.25112 11.5312L5.28237 14.7812C5.1157 14.9271 4.9282 15 4.71987 15C4.51153 15 4.32403 14.9271 4.15737 14.7812L1.18862 11.5312C0.917783 11.1562 0.938616 10.8021 1.25112 10.4688C1.39695 10.3229 1.56362 10.25 1.75112 10.25C1.95945 10.25 2.14695 10.3333 2.31362 10.5L4.00112 12.3438V1.75C4.04278 1.29167 4.29278 1.04167 4.75112 1C5.20945 1.04167 5.45945 1.29167 5.50112 1.75V12.3438L7.18862 10.4688Z"
      />
    </symbol>`,
  "icon-arrow-up-a-z": `<symbol id="icon-arrow-up-a-z" viewBox="0 0 512 512">
      <path
        d="M478.3 456.8l-79.99-159.1c-5.438-10.81-23.19-10.81-28.62 0l-79.99 159.1c-3.953 7.902-.75 17.5 7.156 21.46c7.906 4 17.51 .7187 21.47-7.152l11.58-23.15h108.2l11.58 23.15c3.094 6.152 12.08 11.88 21.47 7.152C479.1 474.3 482.3 464.7 478.3 456.8zM345.9 415.9L384 339.7l38.11 76.21H345.9zM320 63.1h94.7l-107.2 133.1c-3.842 4.812-4.576 11.38-1.92 16.94c2.67 5.531 8.261 9.078 14.42 9.078h127.1c8.844 0 15.1-7.172 15.1-16.02s-7.154-16-15.1-16h-94.7l107.2-133.1c3.842-4.812 4.576-11.37 1.92-16.93C459.7 35.53 454.2 32 447.1 32h-127.1c-8.844 0-15.1 7.156-15.1 16C304 56.84 311.2 63.1 320 63.1zM139.3 36.69c-6.25-6.25-16.38-6.25-22.62 0l-96 96c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0L112 86.63V464c0 8.844 7.157 16 16 16S144 472.8 144 464V86.63l68.69 68.69C215.8 158.4 219.9 160 224 160s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L139.3 36.69z"
      />
    </symbol>`,
  "icon-arrow-down-1-9": `<symbol id="icon-arrow-down-1-9" viewBox="0 0 16 16">
      <path
        
        d="M11.7511 5.49279H12.2511V3.05529L12.1261 3.14904C11.7094 3.33654 11.3657 3.24279 11.0949 2.86779C10.9074 2.47196 11.0011 2.13862 11.3761 1.86779L12.6261 1.11779C12.8761 0.971955 13.1261 0.961538 13.3761 1.08654C13.6261 1.23237 13.7511 1.45112 13.7511 1.74279V5.49279H14.2511C14.7094 5.53445 14.9594 5.78445 15.0011 6.24279C14.9594 6.70112 14.7094 6.95112 14.2511 6.99279H11.7199C11.2824 6.95112 11.0428 6.70112 11.0011 6.24279C11.0428 5.78445 11.2928 5.53445 11.7511 5.49279ZM13.0011 8.02404C13.7719 8.04487 14.4178 8.3157 14.9386 8.83654C15.4594 9.35737 15.7303 10.0032 15.7511 10.774C15.7719 11.2324 15.6678 11.649 15.4386 12.024C15.2094 12.399 14.7615 12.972 14.0949 13.7428C13.8032 14.097 13.4699 14.5136 13.0949 14.9928C12.9282 15.1803 12.7303 15.274 12.5011 15.274C12.3344 15.274 12.1782 15.222 12.0324 15.1178C11.699 14.7845 11.6574 14.4303 11.9074 14.0553L12.4074 13.4615C11.7824 13.3157 11.2719 12.9928 10.8761 12.4928C10.4803 12.0136 10.2719 11.4407 10.2511 10.774C10.2719 10.0032 10.5428 9.35737 11.0636 8.83654C11.5844 8.3157 12.2303 8.04487 13.0011 8.02404ZM13.9074 11.6178C14.1365 11.3886 14.2511 11.1074 14.2511 10.774C14.2511 10.4199 14.1261 10.1282 13.8761 9.89904C13.6469 9.64904 13.3553 9.52404 13.0011 9.52404C12.6469 9.52404 12.3553 9.64904 12.1261 9.89904C11.8761 10.1282 11.7511 10.4199 11.7511 10.774C11.7511 11.1282 11.8761 11.4199 12.1261 11.649C12.3553 11.899 12.6469 12.024 13.0011 12.024C13.3553 12.024 13.6469 11.9095 13.8761 11.6803L13.9074 11.6178ZM7.18862 10.4928C7.33445 10.347 7.51153 10.274 7.71987 10.274C7.90737 10.274 8.06362 10.347 8.18862 10.4928C8.50112 10.8261 8.52195 11.1803 8.25112 11.5553L5.28237 14.8053C5.1157 14.9511 4.9282 15.024 4.71987 15.024C4.51153 15.024 4.32403 14.9511 4.15737 14.8053L1.18862 11.5553C0.917783 11.1803 0.938616 10.8261 1.25112 10.4928C1.39695 10.347 1.56362 10.274 1.75112 10.274C1.95945 10.274 2.14695 10.3574 2.31362 10.524L4.00112 12.3678V1.77404C4.04278 1.31571 4.29278 1.06571 4.75112 1.02404C5.20945 1.06571 5.45945 1.31571 5.50112 1.77404V12.3678L7.18862 10.4928Z"
      />
    </symbol>`,
  "icon-arrow-down-9-1": `<symbol id="icon-arrow-down-9-1" viewBox="0 0 16 16">
      <path
        
        d="M7.18862 10.4688C7.33445 10.3229 7.51153 10.25 7.71987 10.25C7.90737 10.25 8.06362 10.3229 8.18862 10.4688C8.50112 10.8021 8.52195 11.1562 8.25112 11.5312L5.28237 14.7812C5.1157 14.9271 4.9282 15 4.71987 15C4.51153 15 4.32403 14.9271 4.15737 14.7812L1.18862 11.5312C0.917783 11.1562 0.938616 10.8021 1.25112 10.4688C1.39695 10.3229 1.56362 10.25 1.75112 10.25C1.95945 10.25 2.14695 10.3333 2.31362 10.5L4.00112 12.3438V1.75C4.04278 1.29167 4.29278 1.04167 4.75112 1C5.20945 1.04167 5.45945 1.29167 5.50112 1.75V12.3438L7.18862 10.4688ZM14.2511 13.5C14.7094 13.5417 14.9594 13.7917 15.0011 14.25C14.9594 14.7083 14.7094 14.9583 14.2511 15H11.7511C11.2928 14.9583 11.0428 14.7083 11.0011 14.25C11.0428 13.7917 11.2928 13.5417 11.7511 13.5H12.2511V11.0625L12.1261 11.1562C11.7094 11.3438 11.3657 11.25 11.0949 10.875C10.9074 10.4583 11.0011 10.1146 11.3761 9.84375L12.6261 9.09375C12.8761 8.96875 13.1261 8.96875 13.3761 9.09375C13.6261 9.23958 13.7511 9.45833 13.7511 9.75V13.5H14.2511ZM12.3761 6.4375C11.7511 6.29167 11.2407 5.96875 10.8449 5.46875C10.449 4.98958 10.2511 4.41667 10.2511 3.75C10.2719 2.97917 10.5428 2.33333 11.0636 1.8125C11.5844 1.29167 12.2303 1.02083 13.0011 1C13.7719 1.02083 14.4178 1.29167 14.9386 1.8125C15.4594 2.33333 15.7303 2.97917 15.7511 3.75C15.7719 4.20833 15.6678 4.625 15.4386 5C15.2094 5.375 14.7615 5.94792 14.0949 6.71875C13.8032 7.07292 13.4699 7.48958 13.0949 7.96875C12.9282 8.15625 12.7303 8.25 12.5011 8.25C12.3344 8.25 12.1678 8.19792 12.0011 8.09375C11.6678 7.76042 11.6365 7.40625 11.9074 7.03125L12.3761 6.4375ZM13.0011 2.5C12.6469 2.5 12.3553 2.625 12.1261 2.875C11.8761 3.10417 11.7511 3.39583 11.7511 3.75C11.7511 4.10417 11.8761 4.39583 12.1261 4.625C12.3553 4.875 12.6469 5 13.0011 5C13.3553 5 13.6469 4.88542 13.8761 4.65625L13.9074 4.59375C14.1365 4.36458 14.2511 4.08333 14.2511 3.75C14.2511 3.39583 14.1261 3.10417 13.8761 2.875C13.6469 2.625 13.3553 2.5 13.0011 2.5Z"
      />
    </symbol>`,
  "icon-arrow-turn-down-left": `<symbol id="icon-arrow-turn-down-left" viewBox="0 0 16 16">
      <path
        
        d="M4.21875 14.5L0.21875 10.5C0.0729167 10.375 0 10.2083 0 10C0 9.79167 0.0729167 9.61458 0.21875 9.46875L4.21875 5.46875C4.57292 5.17708 4.92708 5.17708 5.28125 5.46875C5.57292 5.82292 5.57292 6.17708 5.28125 6.53125L2.5625 9.25H14.5V2.75C14.5417 2.29167 14.7917 2.04167 15.25 2C15.7083 2.04167 15.9583 2.29167 16 2.75V10C15.9583 10.4583 15.7083 10.7083 15.25 10.75H2.5625L5.28125 13.4688C5.57292 13.8229 5.57292 14.1771 5.28125 14.5312C4.92708 14.8229 4.57292 14.8125 4.21875 14.5Z"
      />
    </symbol>`,
  "icon-circle-info": `<symbol id="icon-circle-info" viewBox="0 0 16 16">
      <path
        
        d="M8 0C9.5 0.0208333 10.8438 0.385417 12.0312 1.09375C13.2396 1.80208 14.1979 2.76042 14.9062 3.96875C15.6146 5.15625 15.9792 6.5 16 8C15.9792 9.5 15.6146 10.8438 14.9062 12.0312C14.1979 13.2396 13.2396 14.1979 12.0312 14.9062C10.8438 15.6146 9.5 15.9792 8 16C6.5 15.9792 5.15625 15.6146 3.96875 14.9062C2.76042 14.1979 1.80208 13.2396 1.09375 12.0312C0.385417 10.8438 0.0208333 9.5 0 8C0.0208333 6.5 0.385417 5.15625 1.09375 3.96875C1.80208 2.76042 2.76042 1.80208 3.96875 1.09375C5.15625 0.385417 6.5 0.0208333 8 0ZM8 14.5C9.83333 14.4583 11.3646 13.8229 12.5938 12.5938C13.8229 11.3646 14.4583 9.83333 14.5 8C14.4583 6.16667 13.8229 4.63542 12.5938 3.40625C11.3646 2.17708 9.83333 1.54167 8 1.5C6.16667 1.54167 4.63542 2.17708 3.40625 3.40625C2.17708 4.63542 1.54167 6.16667 1.5 8C1.54167 9.83333 2.17708 11.3646 3.40625 12.5938C4.63542 13.8229 6.16667 14.4583 8 14.5ZM9.25 10.5C9.70833 10.5417 9.95833 10.7917 10 11.25C9.95833 11.7083 9.70833 11.9583 9.25 12H6.75C6.29167 11.9583 6.04167 11.7083 6 11.25C6.04167 10.7917 6.29167 10.5417 6.75 10.5H7.25V8.5H7C6.54167 8.45833 6.29167 8.20833 6.25 7.75C6.29167 7.29167 6.54167 7.04167 7 7H8C8.45833 7.04167 8.70833 7.29167 8.75 7.75V10.5H9.25ZM8 6C7.70833 6 7.46875 5.90625 7.28125 5.71875C7.09375 5.53125 7 5.29167 7 5C7 4.70833 7.09375 4.46875 7.28125 4.28125C7.46875 4.09375 7.70833 4 8 4C8.29167 4 8.53125 4.09375 8.71875 4.28125C8.90625 4.46875 9 4.70833 9 5C9 5.29167 8.90625 5.53125 8.71875 5.71875C8.53125 5.90625 8.29167 6 8 6Z"
      />
    </symbol>`,
  "icon-circle-user": `<symbol id="icon-circle-user" viewBox="0 0 16 16">
      <path
        
        d="M8 3.5C8.77083 3.52083 9.41667 3.79167 9.9375 4.3125C10.4583 4.83333 10.7292 5.47917 10.75 6.25C10.7292 7.02083 10.4583 7.66667 9.9375 8.1875C9.41667 8.70833 8.77083 8.97917 8 9C7.22917 8.97917 6.58333 8.70833 6.0625 8.1875C5.54167 7.66667 5.27083 7.02083 5.25 6.25C5.27083 5.47917 5.54167 4.83333 6.0625 4.3125C6.58333 3.79167 7.22917 3.52083 8 3.5ZM8 7.5C8.35417 7.5 8.64583 7.375 8.875 7.125C9.125 6.89583 9.25 6.60417 9.25 6.25C9.25 5.89583 9.125 5.60417 8.875 5.375C8.64583 5.125 8.35417 5 8 5C7.64583 5 7.35417 5.125 7.125 5.375C6.875 5.60417 6.75 5.89583 6.75 6.25C6.75 6.60417 6.875 6.89583 7.125 7.125C7.35417 7.375 7.64583 7.5 8 7.5ZM8 0C9.5 0.0208333 10.8438 0.385417 12.0312 1.09375C13.2396 1.80208 14.1979 2.76042 14.9062 3.96875C15.6146 5.15625 15.9792 6.5 16 8C15.9792 9.5 15.6146 10.8438 14.9062 12.0312C14.1979 13.2396 13.2396 14.1979 12.0312 14.9062C10.8438 15.6146 9.5 15.9792 8 16C6.5 15.9792 5.15625 15.6146 3.96875 14.9062C2.76042 14.1979 1.80208 13.2396 1.09375 12.0312C0.385417 10.8438 0.0208333 9.5 0 8C0.0208333 6.5 0.385417 5.15625 1.09375 3.96875C1.80208 2.76042 2.76042 1.80208 3.96875 1.09375C5.15625 0.385417 6.5 0.0208333 8 0ZM8 14.5C9.47917 14.4792 10.7812 14.0417 11.9062 13.1875C11.6146 12.6667 11.2292 12.2604 10.75 11.9688C10.2708 11.6562 9.72917 11.5 9.125 11.5H6.875C6.27083 11.5 5.72917 11.6562 5.25 11.9688C4.77083 12.2604 4.39583 12.6667 4.125 13.1875C5.22917 14.0417 6.52083 14.4792 8 14.5ZM13 12.1562C13.9583 10.9896 14.4583 9.60417 14.5 8C14.4583 6.16667 13.8229 4.63542 12.5938 3.40625C11.3646 2.17708 9.83333 1.54167 8 1.5C6.16667 1.54167 4.63542 2.17708 3.40625 3.40625C2.17708 4.63542 1.54167 6.16667 1.5 8C1.54167 9.60417 2.04167 10.9792 3 12.125C3.4375 11.4583 3.98958 10.9375 4.65625 10.5625C5.32292 10.1875 6.0625 10 6.875 10H9.125C9.9375 10 10.6771 10.1875 11.3438 10.5625C12.0312 10.9583 12.5833 11.4896 13 12.1562Z"
      />
    </symbol>`,
  "icon-circle-check": `<symbol id="icon-circle-check" viewBox="0 0 16 16">
      <path
        
        d="M10.4688 5.46875C10.8229 5.17708 11.1771 5.17708 11.5312 5.46875C11.8229 5.82292 11.8229 6.17708 11.5312 6.53125L7.53125 10.5312C7.38542 10.6771 7.20833 10.75 7 10.75C6.8125 10.75 6.625 10.6771 6.4375 10.5312L4.4375 8.53125C4.14583 8.17708 4.14583 7.82292 4.4375 7.46875C4.79167 7.17708 5.14583 7.17708 5.5 7.46875L7 8.9375L10.4688 5.46875ZM8 0C9.5 0.0208333 10.8438 0.385417 12.0312 1.09375C13.2396 1.80208 14.1979 2.76042 14.9062 3.96875C15.6146 5.15625 15.9792 6.5 16 8C15.9792 9.5 15.6146 10.8438 14.9062 12.0312C14.1979 13.2396 13.2396 14.1979 12.0312 14.9062C10.8438 15.6146 9.5 15.9792 8 16C6.5 15.9792 5.15625 15.6146 3.96875 14.9062C2.76042 14.1979 1.80208 13.2396 1.09375 12.0312C0.385417 10.8438 0.0208333 9.5 0 8C0.0208333 6.5 0.385417 5.15625 1.09375 3.96875C1.80208 2.76042 2.76042 1.80208 3.96875 1.09375C5.15625 0.385417 6.5 0.0208333 8 0ZM8 14.5C9.83333 14.4583 11.3646 13.8229 12.5938 12.5938C13.8229 11.3646 14.4583 9.83333 14.5 8C14.4583 6.16667 13.8229 4.63542 12.5938 3.40625C11.3646 2.17708 9.83333 1.54167 8 1.5C6.16667 1.54167 4.63542 2.17708 3.40625 3.40625C2.17708 4.63542 1.54167 6.16667 1.5 8C1.54167 9.83333 2.17708 11.3646 3.40625 12.5938C4.63542 13.8229 6.16667 14.4583 8 14.5Z"
      />
    </symbol>`,
  "icon-expand-wide": `<symbol id="icon-expand-wide" viewBox="0 0 16 16">
      <path
        
        d="M4.25 12.5C4.70833 12.5417 4.95833 12.7917 5 13.25C4.95833 13.7083 4.70833 13.9583 4.25 14H0.75C0.291667 13.9583 0.0416667 13.7083 0 13.25V9.75C0.0416667 9.29167 0.291667 9.04167 0.75 9C1.20833 9.04167 1.45833 9.29167 1.5 9.75V12.5H4.25ZM4.25 2C4.70833 2.04167 4.95833 2.29167 5 2.75C4.95833 3.20833 4.70833 3.45833 4.25 3.5H1.5V6.25C1.45833 6.70833 1.20833 6.95833 0.75 7C0.291667 6.95833 0.0416667 6.70833 0 6.25V2.75C0.0416667 2.29167 0.291667 2.04167 0.75 2H4.25ZM15.25 2C15.7083 2.04167 15.9583 2.29167 16 2.75V6.25C15.9583 6.70833 15.7083 6.95833 15.25 7C14.7917 6.95833 14.5417 6.70833 14.5 6.25V3.5H11.75C11.2917 3.45833 11.0417 3.20833 11 2.75C11.0417 2.29167 11.2917 2.04167 11.75 2H15.25ZM15.25 9C15.7083 9.04167 15.9583 9.29167 16 9.75V13.25C15.9583 13.7083 15.7083 13.9583 15.25 14H11.75C11.2917 13.9583 11.0417 13.7083 11 13.25C11.0417 12.7917 11.2917 12.5417 11.75 12.5H14.5V9.75C14.5417 9.29167 14.7917 9.04167 15.25 9Z"
      />
    </symbol>`,
  "icon-arrow-up-1-9": `<symbol id="icon-arrow-up-1-9" viewBox="0 0 512 512">
      <path
        d="M384 256c-44.13 0-80 35.88-80 80S339.9 416 384 416c16.73 0 32.25-5.199 45.11-14.01C421.3 428.5 396.1 448 368 448c-8.844 0-16 7.156-16 16s7.156 16 16 16c52.94 0 96-43.06 96-96v-48C464 291.9 428.1 256 384 256zM384 384c-26.47 0-48-21.53-48-48S357.5 288 384 288s48 21.53 48 48S410.5 384 384 384zM336 224l96-.0039c8.844 0 16-7.152 16-15.1S440.8 192 432 192h-32V48C400 39.16 392.8 32 384 32h-32c-8.844 0-16 7.156-16 16S343.2 64 352 64h16v128h-32C327.2 192 320 199.2 320 208S327.2 224 336 224zM139.3 36.69c-6.25-6.25-16.38-6.25-22.62 0l-96 96c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0L112 86.63V464c0 8.844 7.157 15.1 16 15.1S144 472.8 144 464V86.63l68.69 68.69C215.8 158.4 219.9 160 224 160s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L139.3 36.69z"
      />
    </symbol>`,
  "icon-caret-right": `<symbol id="icon-caret-right" viewBox="0 0 16 16">
      <path
        
        d="M7.21875 3.29167L11.2188 7.29167C11.4062 7.52083 11.5 7.75 11.5 7.97917C11.5 8.22917 11.4062 8.46875 11.2188 8.69792L7.21875 12.6667C6.88542 12.9583 6.52083 13.0312 6.125 12.8854C5.72917 12.7188 5.52083 12.4167 5.5 11.9792V4.01042C5.52083 3.57292 5.72917 3.26042 6.125 3.07292C6.52083 2.92708 6.88542 3 7.21875 3.29167Z"
      />
    </symbol>`,
  "icon-caret-up": `<symbol id="icon-caret-up" viewBox="0 0 16 16">
      <path
        
        d="M3.29167 9.28125L7.26042 5.28125C7.48958 5.09375 7.73958 5 8.01042 5C8.28125 5 8.52083 5.09375 8.72917 5.28125L12.6979 9.28125C12.9896 9.61458 13.0625 9.97917 12.9167 10.375C12.75 10.7708 12.4375 10.9792 11.9792 11H4.01042C3.57292 10.9792 3.26042 10.7708 3.07292 10.375C2.92708 9.97917 3 9.61458 3.29167 9.28125Z"
      />
    </symbol>`,
  "icon-caret-left": `<symbol id="icon-caret-left" viewBox="0 0 16 16">
      <path
        
        d="M8.78125 12.7292L4.78125 8.76042C4.59375 8.53125 4.5 8.27083 4.5 7.97917C4.5 7.70833 4.59375 7.46875 4.78125 7.26042L8.78125 3.29167C9.11458 3 9.47917 2.92708 9.875 3.07292C10.2708 3.26042 10.4792 3.57292 10.5 4.01042V11.9792C10.4792 12.4167 10.2708 12.7292 9.875 12.9167C9.47917 13.0625 9.11458 13 8.78125 12.7292Z"
      />
    </symbol>`,
  "icon-caret-down": `<symbol id="icon-caret-down" viewBox="0 0 16 16">
      <path
        
        d="M12.7259 7.21875L8.7571 11.2188C8.52794 11.4062 8.27794 11.5 8.0071 11.5C7.73627 11.5 7.49669 11.4062 7.28835 11.2188L3.3196 7.21875C3.0071 6.88542 2.92377 6.52083 3.0696 6.125C3.2571 5.72917 3.5696 5.52083 4.0071 5.5H11.9759C12.4134 5.52083 12.7259 5.72917 12.9134 6.125C13.0592 6.52083 12.9967 6.88542 12.7259 7.21875Z"
      />
    </symbol>`,
  "icon-previous": `<symbol id="icon-previous" viewBox="0 0 16 16">
      <path
        
        d="M13.4688 2.75C13.5104 2.29167 13.7604 2.04167 14.2188 2C14.6979 2.04167 14.9583 2.29167 15 2.75V13.25C14.9583 13.7083 14.6979 13.9583 14.2188 14C13.7604 13.9583 13.5104 13.7083 13.4688 13.25V2.75ZM6.5 11.4688C6.79167 11.8021 6.80208 12.1458 6.53125 12.5C6.19792 12.8125 5.84375 12.8229 5.46875 12.5312L1.21875 8.53125C1.07292 8.38542 1 8.20833 1 8C1 7.79167 1.07292 7.61458 1.21875 7.46875L5.46875 3.46875C5.84375 3.17708 6.19792 3.1875 6.53125 3.5C6.67708 3.64583 6.75 3.8125 6.75 4C6.75 4.20833 6.66667 4.38542 6.5 4.53125L3.625 7.25H11.25C11.7083 7.29167 11.9583 7.54167 12 8C11.9583 8.45833 11.7083 8.70833 11.25 8.75H3.625L6.5 11.4688Z"
      />
    </symbol>`,
  "icon-next": `<symbol id="icon-next" viewBox="0 0 16 16">
      <path
        
        d="M2.5 13.25C2.45833 13.7083 2.20833 13.9583 1.75 14C1.29167 13.9583 1.04167 13.7083 1 13.25V2.75C1.04167 2.29167 1.29167 2.04167 1.75 2C2.20833 2.04167 2.45833 2.29167 2.5 2.75V13.25ZM9.5 4.5625C9.1875 4.20833 9.17708 3.85417 9.46875 3.5C9.80208 3.1875 10.1562 3.17708 10.5312 3.46875L14.7812 7.46875C14.9271 7.61458 15 7.79167 15 8C15 8.20833 14.9271 8.38542 14.7812 8.53125L10.5312 12.5312C10.1562 12.8229 9.80208 12.8125 9.46875 12.5C9.32292 12.3542 9.25 12.1875 9.25 12C9.25 11.7917 9.33333 11.6146 9.5 11.4688L12.375 8.75H4.75C4.29167 8.70833 4.04167 8.45833 4 8C4.04167 7.54167 4.29167 7.29167 4.75 7.25H12.375L9.5 4.5625Z"
      />
    </symbol>`,
  "icon-last": `<symbol id="icon-last" viewBox="0 0 16 16">
      <path
        
        d="M13.4688 2.75C13.4688 2.54167 13.5417 2.36458 13.6875 2.21875C13.8333 2.07292 14.0104 2 14.2188 2C14.6979 2.04167 14.9583 2.29167 15 2.75V13.25C14.9583 13.7083 14.6979 13.9583 14.2188 14C13.7604 13.9583 13.5104 13.7083 13.4688 13.25V2.75ZM6.5 4.5625C6.16667 4.20833 6.15625 3.85417 6.46875 3.5C6.80208 3.1875 7.15625 3.17708 7.53125 3.46875L11.7812 7.46875C11.9271 7.61458 12 7.79167 12 8C12 8.20833 11.9271 8.38542 11.7812 8.53125L7.53125 12.5312C7.15625 12.8229 6.80208 12.8125 6.46875 12.5C6.32292 12.3542 6.25 12.1875 6.25 12C6.25 11.7917 6.33333 11.6146 6.5 11.4688L9.375 8.75H1.75C1.29167 8.70833 1.04167 8.45833 1 8C1.04167 7.54167 1.29167 7.29167 1.75 7.25H9.375L6.5 4.5625Z"
      />
    </symbol>`,
  "icon-first": `<symbol id="icon-first" viewBox="0 0 16 16">
      <path
        
        d="M2.5 13.25C2.45833 13.7083 2.20833 13.9583 1.75 14C1.29167 13.9583 1.04167 13.7083 1 13.25V2.75C1.04167 2.29167 1.29167 2.04167 1.75 2C2.20833 2.04167 2.45833 2.29167 2.5 2.75V13.25ZM9.5 11.4688C9.8125 11.8021 9.82292 12.1562 9.53125 12.5312C9.19792 12.8438 8.84375 12.8542 8.46875 12.5625L4.21875 8.5625C4.07292 8.41667 4 8.23958 4 8.03125C4 7.82292 4.07292 7.63542 4.21875 7.46875L8.46875 3.46875C8.84375 3.19792 9.19792 3.20833 9.53125 3.5C9.67708 3.66667 9.75 3.84375 9.75 4.03125C9.75 4.23958 9.66667 4.41667 9.5 4.5625L6.625 7.28125H14.25C14.7083 7.30208 14.9583 7.54167 15 8C14.9583 8.45833 14.7083 8.70833 14.25 8.75H6.625L9.5 11.4688Z"
      />
    </symbol>`,
  "icon-arrows-up-down": `<symbol id="icon-arrows-up-down" viewBox="0 0 16 16">
      <path
        
        d="M7.75 16C7.54167 16 7.35417 15.9167 7.1875 15.75L4.1875 12.5C4.0625 12.3542 4 12.1875 4 12C4 11.7917 4.08333 11.6042 4.25 11.4375C4.60417 11.1667 4.95833 11.1875 5.3125 11.5L7 13.3438V2.6875L5.34375 4.53125C4.98958 4.84375 4.63542 4.86458 4.28125 4.59375C4.11458 4.42708 4.03125 4.22917 4.03125 4C4.03125 3.8125 4.09375 3.64583 4.21875 3.5L7.21875 0.25C7.38542 0.0833333 7.57292 0 7.78125 0C7.98958 0 8.17708 0.0833333 8.34375 0.25L11.3438 3.5C11.6146 3.85417 11.5938 4.20833 11.2812 4.5625C10.9271 4.83333 10.5729 4.8125 10.2188 4.5L8.53125 2.65625V13.3438L10.2188 11.5C10.5729 11.1875 10.9271 11.1771 11.2812 11.4688C11.5938 11.8021 11.6146 12.1458 11.3438 12.5L8.34375 15.75C8.19792 15.9375 8 16.0208 7.75 16Z"
      />
    </symbol>`,
  "icon-arrows-up-down-left-right": `<symbol id="icon-arrows-up-down-left-right" viewBox="0 0 16 16">
      <path
        
        d="M16 7.96875C16 8.19792 15.9167 8.38542 15.75 8.53125L13 11.0312C12.8542 11.1771 12.6875 11.25 12.5 11.25C12.0417 11.2083 11.7917 10.9583 11.75 10.5C11.75 10.2917 11.8333 10.1042 12 9.9375L13.3125 8.75H8.75V13.3125L9.9375 12C10.1042 11.8333 10.2917 11.75 10.5 11.75C10.9583 11.7917 11.2083 12.0417 11.25 12.5C11.25 12.6875 11.1875 12.8542 11.0625 13L8.5625 15.75C8.41667 15.9167 8.22917 16 8 16C7.77083 16 7.58333 15.9167 7.4375 15.75L4.9375 13C4.8125 12.8542 4.75 12.6875 4.75 12.5C4.79167 12.0417 5.03125 11.7917 5.46875 11.75C5.67708 11.75 5.86458 11.8333 6.03125 12L7.25 13.3125V8.75H2.6875L4 9.9375C4.16667 10.1042 4.25 10.2917 4.25 10.5C4.20833 10.9583 3.95833 11.2083 3.5 11.25C3.3125 11.25 3.14583 11.1875 3 11.0625L0.25 8.5625C0.0833333 8.41667 0 8.21875 0 7.96875C0 7.73958 0.0833333 7.55208 0.25 7.40625L3 4.90625C3.14583 4.80208 3.3125 4.75 3.5 4.75C3.95833 4.79167 4.20833 5.04167 4.25 5.5C4.25 5.70833 4.16667 5.89583 4 6.0625L2.6875 7.25H7.25V2.6875L6.0625 4C5.89583 4.16667 5.69792 4.25 5.46875 4.25C5.03125 4.20833 4.79167 3.95833 4.75 3.5C4.75 3.3125 4.8125 3.14583 4.9375 3L7.4375 0.21875C7.60417 0.0729167 7.79167 0 8 0C8.20833 0 8.39583 0.0833333 8.5625 0.25L11.0625 3C11.1875 3.14583 11.25 3.3125 11.25 3.5C11.2083 3.95833 10.9583 4.20833 10.5 4.25C10.2917 4.25 10.1042 4.16667 9.9375 4L8.75 2.6875V7.25H13.3125L12 6.0625C11.8333 5.89583 11.75 5.70833 11.75 5.5C11.7917 5.04167 12.0417 4.79167 12.5 4.75C12.6875 4.75 12.8542 4.8125 13 4.9375L15.75 7.4375C15.9167 7.60417 16 7.78125 16 7.96875Z"
      />
    </symbol>`,
  "icon-chart-column": `<symbol id="icon-chart-column" viewBox="0 0 16 16">
      <path
        
        d="M15.25 13.5C15.7083 13.5417 15.9583 13.7917 16 14.25C15.9583 14.7083 15.7083 14.9583 15.25 15H1C0.708333 15 0.46875 14.9062 0.28125 14.7188C0.09375 14.5312 0 14.2917 0 14V1.75C0.0416667 1.29167 0.291667 1.04167 0.75 1C1.20833 1.04167 1.45833 1.29167 1.5 1.75V13.5H15.25ZM5.25 11C4.79167 10.9583 4.54167 10.7083 4.5 10.25V8.75C4.54167 8.29167 4.79167 8.04167 5.25 8C5.70833 8.04167 5.95833 8.29167 6 8.75V10.25C5.95833 10.7083 5.70833 10.9583 5.25 11ZM8.25 11C7.79167 10.9583 7.54167 10.7083 7.5 10.25V4.75C7.54167 4.29167 7.79167 4.04167 8.25 4C8.70833 4.04167 8.95833 4.29167 9 4.75V10.25C8.95833 10.7083 8.70833 10.9583 8.25 11ZM11.25 11C10.7917 10.9583 10.5417 10.7083 10.5 10.25V6.75C10.5417 6.29167 10.7917 6.04167 11.25 6C11.7083 6.04167 11.9583 6.29167 12 6.75V10.25C11.9583 10.7083 11.7083 10.9583 11.25 11ZM14.25 11C13.7917 10.9583 13.5417 10.7083 13.5 10.25V3.75C13.5417 3.29167 13.7917 3.04167 14.25 3C14.7083 3.04167 14.9583 3.29167 15 3.75V10.25C14.9583 10.7083 14.7083 10.9583 14.25 11Z"
      />
    </symbol>`,
  "icon-ban": `<symbol id="icon-ban" viewBox="0 0 16 16">
      <path
        
        d="M8 0C9.5 0.0208333 10.8438 0.385417 12.0312 1.09375C13.2396 1.80208 14.1979 2.76042 14.9062 3.96875C15.6146 5.15625 15.9792 6.5 16 8C15.9792 9.5 15.6146 10.8438 14.9062 12.0312C14.1979 13.2396 13.2396 14.1979 12.0312 14.9062C10.8438 15.6146 9.5 15.9792 8 16C6.5 15.9792 5.15625 15.6146 3.96875 14.9062C2.76042 14.1979 1.80208 13.2396 1.09375 12.0312C0.385417 10.8438 0.0208333 9.5 0 8C0.0208333 6.5 0.385417 5.15625 1.09375 3.96875C1.80208 2.76042 2.76042 1.80208 3.96875 1.09375C5.15625 0.385417 6.5 0.0208333 8 0ZM1.5 8C1.54167 9.83333 2.17708 11.3646 3.40625 12.5938C4.63542 13.8229 6.16667 14.4583 8 14.5C9.54167 14.4583 10.8854 14 12.0312 13.125L2.90625 4C1.98958 5.10417 1.52083 6.4375 1.5 8ZM13.0938 12C14.0104 10.8958 14.4792 9.5625 14.5 8C14.4583 6.16667 13.8229 4.63542 12.5938 3.40625C11.3646 2.17708 9.83333 1.54167 8 1.5C6.45833 1.52083 5.11458 1.98958 3.96875 2.90625L13.0938 12Z"
      />
    </symbol>`,
  "icon-radio-unselected": `<symbol id="icon-radio-unselected" class="circle-regular" viewBox="0 0 512 512">
      <path
        
        d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
      />
    </symbol>`,
  "icon-radio-selected": `<symbol id="icon-radio-selected" class="circle-dot-regular" viewBox="0 0 512 512">
      <path
        
        d="M160 256C160 202.1 202.1 160 256 160C309 160 352 202.1 352 256C352 309 309 352 256 352C202.1 352 160 309 160 256zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
      />
    </symbol>`,
  "icon-file-excel": `<symbol id="icon-file-excel" viewBox="0 0 384 512">
      <path
        
        d="M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM229.1 233.3L192 280.9L154.9 233.3C146.8 222.8 131.8 220.9 121.3 229.1C110.8 237.2 108.9 252.3 117.1 262.8L161.6 320l-44.53 57.25c-8.156 10.47-6.25 25.56 4.188 33.69C125.7 414.3 130.8 416 135.1 416c7.156 0 14.25-3.188 18.97-9.25L192 359.1l37.06 47.65C233.8 412.8 240.9 416 248 416c5.125 0 10.31-1.656 14.72-5.062c10.44-8.125 12.34-23.22 4.188-33.69L222.4 320l44.53-57.25c8.156-10.47 6.25-25.56-4.188-33.69C252.2 220.9 237.2 222.8 229.1 233.3z"
      />
    </symbol>`,
  "icon-file-csv": `<symbol id="icon-file-csv" viewBox="0 0 16 16">
      <g clip-path="url(#clip0_2865_64906)">
        <path
          
          d="M2 14.5H3V16H2C0.896875 16 0 15.1031 0 14V2C0 0.896875 0.896875 0 2 0H7.17188C7.70312 0 8.2125 0.209375 8.5875 0.584375L11.4156 3.4125C11.7906 3.7875 12 4.29688 12 4.82812V9H10.5V5H8C7.44688 5 7 4.55312 7 4V1.5H2C1.725 1.5 1.5 1.725 1.5 2V14C1.5 14.275 1.725 14.5 2 14.5ZM6.25 11H6.75C7.44063 11 8 11.5594 8 12.25V12.5C8 12.775 7.775 13 7.5 13C7.225 13 7 12.775 7 12.5V12.25C7 12.1125 6.8875 12 6.75 12H6.25C6.1125 12 6 12.1125 6 12.25V14.75C6 14.8875 6.1125 15 6.25 15H6.75C6.8875 15 7 14.8875 7 14.75V14.5C7 14.225 7.225 14 7.5 14C7.775 14 8 14.225 8 14.5V14.75C8 15.4406 7.44063 16 6.75 16H6.25C5.55937 16 5 15.4406 5 14.75V12.25C5 11.5594 5.55937 11 6.25 11ZM10.4094 11H11.5C11.775 11 12 11.225 12 11.5C12 11.775 11.775 12 11.5 12H10.4094C10.1844 12 10 12.1844 10 12.4094C10 12.5719 10.0938 12.7188 10.2437 12.7844L11.4125 13.3031C11.9219 13.5281 12.25 14.0344 12.25 14.5906C12.25 15.3687 11.6187 16 10.8406 16H9.5C9.225 16 9 15.775 9 15.5C9 15.225 9.225 15 9.5 15H10.8406C11.0656 15 11.25 14.8156 11.25 14.5906C11.25 14.4281 11.1562 14.2812 11.0063 14.2156L9.8375 13.6969C9.32812 13.4719 9 12.9656 9 12.4094C9 11.6313 9.63125 11 10.4094 11ZM13.5 11C13.775 11 14 11.225 14 11.5V12.4875C14 13.2063 14.1719 13.9125 14.5 14.55C14.8281 13.9156 15 13.2094 15 12.4875V11.5C15 11.225 15.225 11 15.5 11C15.775 11 16 11.225 16 11.5V12.4875C16 13.5719 15.6781 14.6344 15.075 15.5375L14.9156 15.7781C14.8219 15.9187 14.6656 16 14.5 16C14.3344 16 14.1781 15.9156 14.0844 15.7781L13.925 15.5375C13.3219 14.6344 13 13.5719 13 12.4875V11.5C13 11.225 13.225 11 13.5 11Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_2865_64906">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </symbol>`,
  "icon-file-png": `<symbol id="icon-file-png" viewBox="0 0 16 16">
      <g clip-path="url(#clip0_2865_64907)">
        <path
          
          d="M2 14.5H3.5V16H2C0.896875 16 0 15.1031 0 14V2C0 0.896875 0.896875 0 2 0H7.17188C7.70312 0 8.2125 0.209375 8.5875 0.584375L11.4156 3.4125C11.7906 3.7875 12 4.29688 12 4.82812V9.5H10.5V5H8C7.44688 5 7 4.55312 7 4V1.5H2C1.725 1.5 1.5 1.725 1.5 2V14C1.5 14.275 1.725 14.5 2 14.5ZM9.94687 11.275L11 13.3813V11.5C11 11.225 11.225 11 11.5 11C11.775 11 12 11.225 12 11.5V15.5C12 15.7312 11.8406 15.9344 11.6156 15.9875C11.3906 16.0406 11.1562 15.9313 11.0531 15.725L10 13.6187V15.5C10 15.775 9.775 16 9.5 16C9.225 16 9 15.775 9 15.5V11.5C9 11.2688 9.15937 11.0656 9.38437 11.0125C9.60938 10.9594 9.84375 11.0687 9.94687 11.275ZM5.5 11H6.5C7.46562 11 8.25 11.7844 8.25 12.75C8.25 13.7156 7.46562 14.5 6.5 14.5H6V15.5C6 15.775 5.775 16 5.5 16C5.225 16 5 15.775 5 15.5V14V11.5C5 11.225 5.225 11 5.5 11ZM6.5 13.5C6.91563 13.5 7.25 13.1656 7.25 12.75C7.25 12.3344 6.91563 12 6.5 12H6V13.5H6.5ZM13 12.25C13 11.5594 13.5594 11 14.25 11H14.75C15.4406 11 16 11.5594 16 12.25V12.5C16 12.775 15.775 13 15.5 13C15.225 13 15 12.775 15 12.5V12.25C15 12.1125 14.8875 12 14.75 12H14.25C14.1125 12 14 12.1125 14 12.25V14.75C14 14.8875 14.1125 15 14.25 15H14.75C14.8875 15 15 14.8875 15 14.75V14.5C14.725 14.5 14.5 14.275 14.5 14C14.5 13.725 14.725 13.5 15 13.5H15.5C15.775 13.5 16 13.725 16 14V14.75C16 15.4406 15.4406 16 14.75 16H14.25C13.5594 16 13 15.4406 13 14.75V12.25Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_2865_64907">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </symbol>`,
  "icon-file-xls": `<symbol id="icon-file-xls" viewBox="0 0 16 16">
      <g clip-path="url(#clip0_2865_64908)">
        <path
          
          d="M4 14.5H2C1.725 14.5 1.5 14.275 1.5 14V2C1.5 1.725 1.725 1.5 2 1.5H7V4C7 4.55312 7.44688 5 8 5H10.5V9H12V4.82812C12 4.29688 11.7906 3.7875 11.4156 3.4125L8.58438 0.584375C8.20938 0.209375 7.70312 0 7.17188 0H2C0.896875 0 0 0.896875 0 2V14C0 15.1031 0.896875 16 2 16H4V14.5ZM7 11.5C7 11.225 6.775 11 6.5 11C6.225 11 6 11.225 6 11.5C6 11.925 6.125 12.3406 6.3625 12.6938L6.9 13.5L6.3625 14.3062C6.125 14.6594 6 15.075 6 15.5C6 15.775 6.225 16 6.5 16C6.775 16 7 15.775 7 15.5C7 15.2719 7.06875 15.05 7.19375 14.8625L7.5 14.4031L7.80625 14.8625C7.93125 15.0531 8 15.275 8 15.5C8 15.775 8.225 16 8.5 16C8.775 16 9 15.775 9 15.5C9 15.075 8.875 14.6594 8.6375 14.3062L8.1 13.5L8.6375 12.6938C8.875 12.3406 9 11.925 9 11.5C9 11.225 8.775 11 8.5 11C8.225 11 8 11.225 8 11.5C8 11.7281 7.93125 11.95 7.80625 12.1375L7.5 12.6L7.19375 12.1406C7.06875 11.95 7 11.7281 7 11.5031V11.5ZM10 15.5C10 15.775 10.225 16 10.5 16H12C12.275 16 12.5 15.775 12.5 15.5C12.5 15.225 12.275 15 12 15H11V11.5C11 11.225 10.775 11 10.5 11C10.225 11 10 11.225 10 11.5V15.5ZM12.75 12.4281C12.75 12.9688 13.0563 13.4625 13.5375 13.7031L14.5125 14.1906C14.6562 14.2625 14.75 14.4094 14.75 14.5719C14.75 14.8062 14.5594 15 14.3219 15H13.5C13.225 15 13 15.225 13 15.5C13 15.775 13.225 16 13.5 16H14.3219C15.1094 16 15.75 15.3625 15.75 14.5719C15.75 14.0312 15.4437 13.5375 14.9625 13.2969L13.9875 12.8094C13.8438 12.7375 13.75 12.5906 13.75 12.4281C13.75 12.1938 13.9406 12 14.1781 12H15C15.275 12 15.5 11.775 15.5 11.5C15.5 11.225 15.275 11 15 11H14.1781C13.3906 11 12.75 11.6375 12.75 12.4281Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_2865_64908">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </symbol>`,
  "icon-file-pdf": `<symbol id="icon-file-pdf" viewBox="0 0 16 16">
      <g clip-path="url(#clip0_2865_64905)">
        <path
          
          d="M2 14.5H3.5V16H2C0.896875 16 0 15.1031 0 14V2C0 0.896875 0.896875 0 2 0H7.17188C7.70312 0 8.2125 0.209375 8.5875 0.584375L11.4156 3.4125C11.7906 3.7875 12 4.29688 12 4.82812V9.5H10.5V5H8C7.44688 5 7 4.55312 7 4V1.5H2C1.725 1.5 1.5 1.725 1.5 2V14C1.5 14.275 1.725 14.5 2 14.5ZM5.5 11H6.5C7.46562 11 8.25 11.7844 8.25 12.75C8.25 13.7156 7.46562 14.5 6.5 14.5H6V15.5C6 15.775 5.775 16 5.5 16C5.225 16 5 15.775 5 15.5V14V11.5C5 11.225 5.225 11 5.5 11ZM6.5 13.5C6.91563 13.5 7.25 13.1656 7.25 12.75C7.25 12.3344 6.91563 12 6.5 12H6V13.5H6.5ZM9.5 11H10.5C11.3281 11 12 11.6719 12 12.5V14.5C12 15.3281 11.3281 16 10.5 16H9.5C9.225 16 9 15.775 9 15.5V11.5C9 11.225 9.225 11 9.5 11ZM10.5 15C10.775 15 11 14.775 11 14.5V12.5C11 12.225 10.775 12 10.5 12H10V15H10.5ZM13 11.5C13 11.225 13.225 11 13.5 11H15C15.275 11 15.5 11.225 15.5 11.5C15.5 11.775 15.275 12 15 12H14V13H15C15.275 13 15.5 13.225 15.5 13.5C15.5 13.775 15.275 14 15 14H14V15.5C14 15.775 13.775 16 13.5 16C13.225 16 13 15.775 13 15.5V13.5V11.5Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_2865_64905">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </symbol>`,
  "icon-file-ppt": `<symbol id="icon-file-ppt" viewBox="0 0 16 16">
      <g clip-path="url(#clip0_2865_64904)">
        <path
          
          d="M2 14.5H3V16H2C0.896875 16 0 15.1031 0 14V2C0 0.896875 0.896875 0 2 0H7.17188C7.70312 0 8.2125 0.209375 8.5875 0.584375L11.4156 3.4125C11.7906 3.7875 12 4.29688 12 4.82812V9H10.5V5H8C7.44688 5 7 4.55312 7 4V1.5H2C1.725 1.5 1.5 1.725 1.5 2V14C1.5 14.275 1.725 14.5 2 14.5ZM9.5 11H10.5C11.4656 11 12.25 11.7844 12.25 12.75C12.25 13.7156 11.4656 14.5 10.5 14.5H10V15.5C10 15.775 9.775 16 9.5 16C9.225 16 9 15.775 9 15.5V14V11.5C9 11.225 9.225 11 9.5 11ZM10.5 13.5C10.9156 13.5 11.25 13.1656 11.25 12.75C11.25 12.3344 10.9156 12 10.5 12H10V13.5H10.5ZM5.5 11H6.5C7.46562 11 8.25 11.7844 8.25 12.75C8.25 13.7156 7.46562 14.5 6.5 14.5H6V15.5C6 15.775 5.775 16 5.5 16C5.225 16 5 15.775 5 15.5V14V11.5C5 11.225 5.225 11 5.5 11ZM6.5 13.5C6.91563 13.5 7.25 13.1656 7.25 12.75C7.25 12.3344 6.91563 12 6.5 12H6V13.5H6.5ZM13 11.5C13 11.225 13.225 11 13.5 11H14.5H15.5C15.775 11 16 11.225 16 11.5C16 11.775 15.775 12 15.5 12H15V15.5C15 15.775 14.775 16 14.5 16C14.225 16 14 15.775 14 15.5V12H13.5C13.225 12 13 11.775 13 11.5Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_2865_64904">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </symbol>`,
  "icon-file-doc": `<symbol id="icon-file-doc" viewBox="0 0 16 16">
      <g clip-path="url(#clip0_2865_64903)">
        <path
          
          d="M2 14.5H3V16H2C0.896875 16 0 15.1031 0 14V2C0 0.896875 0.896875 0 2 0H7.17188C7.70312 0 8.2125 0.209375 8.5875 0.584375L11.4156 3.4125C11.7906 3.7875 12 4.29688 12 4.82812V9H10.5V5H8C7.44688 5 7 4.55312 7 4V1.5H2C1.725 1.5 1.5 1.725 1.5 2V14C1.5 14.275 1.725 14.5 2 14.5ZM5.5 11H6.5C7.32812 11 8 11.6719 8 12.5V14.5C8 15.3281 7.32812 16 6.5 16H5.5C5.225 16 5 15.775 5 15.5V11.5C5 11.225 5.225 11 5.5 11ZM6 15H6.5C6.775 15 7 14.775 7 14.5V12.5C7 12.225 6.775 12 6.5 12H6V15ZM14.25 11H14.75C15.4406 11 16 11.5594 16 12.25V12.5C16 12.775 15.775 13 15.5 13C15.225 13 15 12.775 15 12.5V12.25C15 12.1125 14.8875 12 14.75 12H14.25C14.1125 12 14 12.1125 14 12.25V14.75C14 14.8875 14.1125 15 14.25 15H14.75C14.8875 15 15 14.8875 15 14.75V14.5C15 14.225 15.225 14 15.5 14C15.775 14 16 14.225 16 14.5V14.75C16 15.4406 15.4406 16 14.75 16H14.25C13.5594 16 13 15.4406 13 14.75V12.25C13 11.5594 13.5594 11 14.25 11ZM9 12.25C9 11.5594 9.55937 11 10.25 11H10.75C11.4406 11 12 11.5594 12 12.25V14.75C12 15.4406 11.4406 16 10.75 16H10.25C9.55937 16 9 15.4406 9 14.75V12.25ZM10.25 12C10.1125 12 10 12.1125 10 12.25V14.75C10 14.8875 10.1125 15 10.25 15H10.75C10.8875 15 11 14.8875 11 14.75V12.25C11 12.1125 10.8875 12 10.75 12H10.25Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_2865_64903">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </symbol>`,
  "icon-eye-dropper": `<symbol id="icon-eye-dropper" class="eye-dropper-half-regular" viewBox="0 0 512 512">
      <path
        
        d="M191 160.1C181.7 151.6 181.7 136.4 191 127C200.4 117.7 215.6 117.7 224.1 127L232.1 135L338.2 29.82C357.3 10.73 383.2 0 410.2 0C466.4 0 512 45.59 512 101.8C512 128.8 501.3 154.7 482.2 173.8L376.1 279L384.1 287C394.3 296.4 394.3 311.6 384.1 320.1C375.6 330.3 360.4 330.3 351 320.1L191 160.1zM343 245.1L448.2 139.9C458.3 129.8 464 116.1 464 101.8C464 72.1 439.9 48 410.2 48C395.9 48 382.2 53.67 372.1 63.76L266.9 168.1L343 245.1zM217.4 232.6L129.9 320H254.1L279.4 294.6L313.4 328.6L183 458.9C169.5 472.4 151.2 480 132.1 480H79.27L37.31 507.1C27.79 514.3 15.12 513.1 7.03 504.1C-1.06 496.9-2.315 484.2 4.031 474.7L32 432.7V379.9C32 360.8 39.59 342.5 53.09 328.1L183.4 198.6L217.4 232.6z"
      />
    </symbol>`,
  "icon-columns": `<symbol id="icon-columns" viewBox="0 0 16 16">
      <path
        
        d="M6.25 4.25C6.70833 4.29167 6.95833 4.54167 7 5C6.95833 5.45833 6.70833 5.70833 6.25 5.75H0.71875C0.53125 5.75 0.364583 5.66667 0.21875 5.5C0.0729167 5.35417 0 5.17708 0 4.96875C0.0416667 4.53125 0.28125 4.29167 0.71875 4.25H6.25ZM6.25 8.25C6.70833 8.29167 6.95833 8.54167 7 9C6.95833 9.45833 6.70833 9.70833 6.25 9.75H0.71875C0.28125 9.70833 0.0416667 9.45833 0 9C0.0416667 8.54167 0.28125 8.29167 0.71875 8.25H6.25ZM6.25 0.25C6.70833 0.291667 6.95833 0.541667 7 1C6.95833 1.45833 6.70833 1.70833 6.25 1.75H0.71875C0.53125 1.75 0.364583 1.66667 0.21875 1.5C0.0729167 1.35417 0 1.17708 0 0.96875C0.0416667 0.53125 0.28125 0.291667 0.71875 0.25H6.25ZM6.25 12.25C6.70833 12.2917 6.95833 12.5417 7 13C6.95833 13.4583 6.70833 13.7083 6.25 13.75H0.71875C0.28125 13.7083 0.0416667 13.4583 0 13C0.0416667 12.5417 0.28125 12.2917 0.71875 12.25H6.25ZM15.25 0.25C15.4583 0.25 15.6354 0.333333 15.7812 0.5C15.9271 0.645833 16 0.822917 16 1.03125C15.9583 1.46875 15.7083 1.70833 15.25 1.75H9.71875C9.53125 1.75 9.36458 1.66667 9.21875 1.5C9.07292 1.35417 9 1.17708 9 0.96875C9.04167 0.53125 9.29167 0.291667 9.75 0.25H15.25ZM15.25 4.25C15.4583 4.25 15.6354 4.33333 15.7812 4.5C15.9271 4.64583 16 4.82292 16 5.03125C15.9583 5.46875 15.7083 5.70833 15.25 5.75H9.71875C9.53125 5.75 9.36458 5.66667 9.21875 5.5C9.07292 5.35417 9 5.17708 9 4.96875C9.04167 4.53125 9.29167 4.29167 9.75 4.25H15.25ZM15.25 12.25C15.7083 12.2917 15.9583 12.5417 16 13C15.9583 13.4583 15.7083 13.7083 15.25 13.75H9.71875C9.28125 13.7083 9.04167 13.4583 9 13C9.04167 12.5417 9.29167 12.2917 9.75 12.25H15.25ZM15.25 8.25C15.7083 8.29167 15.9583 8.54167 16 9C15.9583 9.45833 15.7083 9.70833 15.25 9.75H9.71875C9.28125 9.70833 9.04167 9.45833 9 9C9.04167 8.54167 9.29167 8.29167 9.75 8.25H15.25Z"
      />
    </symbol>`,
  "icon-grip": `<symbol id="icon-grip" viewBox="0 0 16 16">
      <path
        
        d="M4 3C4.02083 2.58333 4.16667 2.22917 4.4375 1.9375C4.72917 1.66667 5.08333 1.52083 5.5 1.5C5.91667 1.52083 6.27083 1.66667 6.5625 1.9375C6.83333 2.22917 6.97917 2.58333 7 3C6.97917 3.41667 6.83333 3.77083 6.5625 4.0625C6.27083 4.33333 5.91667 4.47917 5.5 4.5C5.08333 4.47917 4.72917 4.33333 4.4375 4.0625C4.16667 3.77083 4.02083 3.41667 4 3ZM4 8C4.02083 7.58333 4.16667 7.22917 4.4375 6.9375C4.72917 6.66667 5.08333 6.52083 5.5 6.5C5.91667 6.52083 6.27083 6.66667 6.5625 6.9375C6.83333 7.22917 6.97917 7.58333 7 8C6.97917 8.41667 6.83333 8.77083 6.5625 9.0625C6.27083 9.33333 5.91667 9.47917 5.5 9.5C5.08333 9.47917 4.72917 9.33333 4.4375 9.0625C4.16667 8.77083 4.02083 8.41667 4 8ZM7 13C6.97917 13.4167 6.83333 13.7708 6.5625 14.0625C6.27083 14.3333 5.91667 14.4792 5.5 14.5C5.08333 14.4792 4.72917 14.3333 4.4375 14.0625C4.16667 13.7708 4.02083 13.4167 4 13C4.02083 12.5833 4.16667 12.2292 4.4375 11.9375C4.72917 11.6667 5.08333 11.5208 5.5 11.5C5.91667 11.5208 6.27083 11.6667 6.5625 11.9375C6.83333 12.2292 6.97917 12.5833 7 13ZM9 3C9.02083 2.58333 9.16667 2.22917 9.4375 1.9375C9.72917 1.66667 10.0833 1.52083 10.5 1.5C10.9167 1.52083 11.2708 1.66667 11.5625 1.9375C11.8333 2.22917 11.9792 2.58333 12 3C11.9792 3.41667 11.8333 3.77083 11.5625 4.0625C11.2708 4.33333 10.9167 4.47917 10.5 4.5C10.0833 4.47917 9.72917 4.33333 9.4375 4.0625C9.16667 3.77083 9.02083 3.41667 9 3ZM12 8C11.9792 8.41667 11.8333 8.77083 11.5625 9.0625C11.2708 9.33333 10.9167 9.47917 10.5 9.5C10.0833 9.47917 9.72917 9.33333 9.4375 9.0625C9.16667 8.77083 9.02083 8.41667 9 8C9.02083 7.58333 9.16667 7.22917 9.4375 6.9375C9.72917 6.66667 10.0833 6.52083 10.5 6.5C10.9167 6.52083 11.2708 6.66667 11.5625 6.9375C11.8333 7.22917 11.9792 7.58333 12 8ZM9 13C9.02083 12.5833 9.16667 12.2292 9.4375 11.9375C9.72917 11.6667 10.0833 11.5208 10.5 11.5C10.9167 11.5208 11.2708 11.6667 11.5625 11.9375C11.8333 12.2292 11.9792 12.5833 12 13C11.9792 13.4167 11.8333 13.7708 11.5625 14.0625C11.2708 14.3333 10.9167 14.4792 10.5 14.5C10.0833 14.4792 9.72917 14.3333 9.4375 14.0625C9.16667 13.7708 9.02083 13.4167 9 13Z"
      />
    </symbol>`,
  "icon-thumbtack": `<symbol id="icon-thumbtack" viewBox="0 0 384 512">
      <path
        
        d="M168 352H32C22.15 352 12.84 347.5 6.778 339.7C.7133 331.9-1.434 321.8 .9555 312.2L7.202 287.3C17.51 246 42.58 211.5 75.93 188.9L86.77 48H56C51.56 48 47.41 46.8 43.84 44.7C36.76 40.53 32 32.82 32 24C32 10.75 42.75 0 56 0H328C341.3 0 352 10.75 352 24C352 32.82 347.2 40.53 340.2 44.7C336.6 46.8 332.4 48 328 48H297.2L308.1 188.9C341.4 211.5 366.5 246 376.8 287.3L383 312.2C385.4 321.8 383.3 331.9 377.2 339.7C371.2 347.5 361.9 352 352 352H216V488C216 501.3 205.3 512 191.1 512C178.7 512 167.1 501.3 167.1 488L168 352zM122 215.7L102.9 228.7C79.01 244.8 61.13 269.4 53.77 298.9L52.49 304H168V216C168 202.7 178.7 192 192 192C205.3 192 216 202.7 216 216V304H331.5L330.2 298.9C322.9 269.4 304.1 244.8 281.1 228.7L261.1 215.7L249.1 48H134.9L122 215.7z"
      />
    </symbol>`,
  "icon-table-pivot": `<symbol id="icon-table-pivot" viewBox="0 0 16 16">
      <path
        
        d="M4 1V5H0V3C0.0208333 2.4375 0.21875 1.96875 0.59375 1.59375C0.96875 1.21875 1.4375 1.02083 2 1H4ZM8.5625 9.0625C8.64583 9 8.73958 8.97917 8.84375 9C8.92708 9.04167 8.97917 9.11458 9 9.21875V10H10.75C10.8958 9.97917 10.9792 9.89583 11 9.75V8H10.25C10.1458 8 10.0729 7.94792 10.0312 7.84375C9.98958 7.76042 10 7.66667 10.0625 7.5625L11.3125 6.3125C11.4375 6.22917 11.5625 6.22917 11.6875 6.3125L12.9375 7.5625C13 7.64583 13.0208 7.73958 13 7.84375C12.9583 7.94792 12.875 8 12.75 8H12V9.75C12 10.1042 11.875 10.3958 11.625 10.625C11.3958 10.875 11.1042 11 10.75 11H9V11.7188C8.9375 11.9896 8.79167 12.0625 8.5625 11.9375L7.3125 10.6875C7.22917 10.5625 7.22917 10.4375 7.3125 10.3125L8.5625 9.0625ZM14 1C14.5625 1.02083 15.0312 1.21875 15.4062 1.59375C15.7812 1.96875 15.9792 2.4375 16 3V13C15.9792 13.5625 15.7812 14.0312 15.4062 14.4062C15.0312 14.7812 14.5625 14.9792 14 15H2C1.4375 14.9792 0.96875 14.7812 0.59375 14.4062C0.21875 14.0312 0.0208333 13.5625 0 13V6H3.5V13.5H14C14.3125 13.4792 14.4792 13.3125 14.5 13V4.5H5V1H14Z"
      />
    </symbol>`,
  "icon-checkbox-unchecked": `<symbol id="icon-checkbox-unchecked" class="square-regular" viewBox="0 0 448 512">
      <path
        
        d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 80H64C55.16 80 48 87.16 48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80z"
      />
    </symbol>`,
  "icon-square-plus": `<symbol id="icon-square-plus" viewBox="0 0 448 512">
      <path
        
        d="M200 344V280H136C122.7 280 112 269.3 112 256C112 242.7 122.7 232 136 232H200V168C200 154.7 210.7 144 224 144C237.3 144 248 154.7 248 168V232H312C325.3 232 336 242.7 336 256C336 269.3 325.3 280 312 280H248V344C248 357.3 237.3 368 224 368C210.7 368 200 357.3 200 344zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"
      />
    </symbol>`,
  "icon-checkbox-indeterminate": `<symbol id="icon-checkbox-indeterminate" class="square-minus-regular" viewBox="0 0 448 512">
      <path
        
        d="M312 232C325.3 232 336 242.7 336 256C336 269.3 325.3 280 312 280H136C122.7 280 112 269.3 112 256C112 242.7 122.7 232 136 232H312zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"
      />
    </symbol>`,
  "icon-checkbox-checked": `<symbol id="icon-checkbox-checked" class="square-check-regular" viewBox="0 0 448 512">
      <path
        
        d="M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"
      />
    </symbol>`,
  "icon-sigma": `<symbol id="icon-sigma" viewBox="0 0 384 512">
      <path
        
        d="M335.1 136l.0005-56H83.59l165 158.7C253.3 243.2 255.1 249.5 255.1 256s-2.656 12.78-7.375 17.31L83.59 432h252.4l-.0005-56c0-13.25 10.75-24 24-24C373.2 352 384 362.8 384 376v80c0 13.25-10.75 24-24 24H23.99c-9.782 0-18.59-5.938-22.25-15.03s-1.438-19.47 5.625-26.28L197.4 256L7.364 73.31C.3015 66.5-1.917 56.13 1.739 47.03S14.21 32 23.99 32h336C373.2 32 384 42.75 384 56v80C384 149.3 373.2 160 359.1 160C346.7 160 335.1 149.3 335.1 136z"
      />
    </symbol>`,
  "icon-list-tree": `<symbol id="icon-list-tree" viewBox="0 0 16 16">
      <path
        
        d="M5.75 3.75C5.29167 3.70833 5.04167 3.45833 5 3C5.04167 2.54167 5.29167 2.29167 5.75 2.25H15.25C15.7083 2.29167 15.9583 2.54167 16 3C15.9583 3.45833 15.7083 3.70833 15.25 3.75H5.75ZM6.5 6.5C6.8125 6.52083 6.97917 6.6875 7 7V9C6.97917 9.3125 6.8125 9.47917 6.5 9.5H4.5C4.1875 9.47917 4.02083 9.3125 4 9V8.75H2.25V12C2.27083 12.1458 2.35417 12.2292 2.5 12.25H4V12C4.02083 11.6875 4.1875 11.5208 4.5 11.5H6.5C6.8125 11.5208 6.97917 11.6875 7 12V14C6.97917 14.3125 6.8125 14.4792 6.5 14.5H4.5C4.1875 14.4792 4.02083 14.3125 4 14V13.75H2.5C2 13.7292 1.58333 13.5625 1.25 13.25C0.9375 12.9167 0.770833 12.5 0.75 12V4.5H0.5C0.1875 4.47917 0.0208333 4.3125 0 4V2C0.0208333 1.6875 0.1875 1.52083 0.5 1.5H2.5C2.8125 1.52083 2.97917 1.6875 3 2V4C2.97917 4.3125 2.8125 4.47917 2.5 4.5H2.25V7.25H4V7C4.02083 6.6875 4.1875 6.52083 4.5 6.5H6.5ZM15.25 12.25C15.7083 12.2917 15.9583 12.5417 16 13C15.9583 13.4583 15.7083 13.7083 15.25 13.75H9.75C9.29167 13.7083 9.04167 13.4583 9 13C9.04167 12.5417 9.29167 12.2917 9.75 12.25H15.25ZM15.25 7.25C15.7083 7.29167 15.9583 7.54167 16 8C15.9583 8.45833 15.7083 8.70833 15.25 8.75H9.75C9.29167 8.70833 9.04167 8.45833 9 8C9.04167 7.54167 9.29167 7.29167 9.75 7.25H15.25Z"
      />
    </symbol>`,
  "icon-link-slash": `<symbol id="icon-link-slash" viewBox="0 0 20 16">
      <path
        
        d="M6.62946 13.5938L8.22321 12.0312C8.59821 12.3854 9.01488 12.6771 9.47321 12.9062L7.69196 14.6875C6.75446 15.5625 5.69196 16 4.50446 16C3.29613 16 2.23363 15.5625 1.31696 14.6875C0.441964 13.7708 0.00446429 12.7083 0.00446429 11.5C0.00446429 10.3125 0.441964 9.25 1.31696 8.3125L3.72321 5.9375L4.91071 6.84375L2.37946 9.34375C1.79613 9.96875 1.50446 10.6771 1.50446 11.4688C1.50446 12.2812 1.79613 12.9896 2.37946 13.5938C3.00446 14.1771 3.7128 14.4688 4.50446 14.4688C5.29613 14.4688 6.00446 14.1771 6.62946 13.5938ZM15.2232 11.1562L19.692 14.625C20.0253 14.9375 20.067 15.2917 19.817 15.6875C19.5045 16.0208 19.1503 16.0625 18.7545 15.8125L0.285714 1.34375C-0.047619 1.03125 -0.0892857 0.677083 0.160714 0.28125C0.327381 0.09375 0.525298 0 0.754464 0C0.921131 0 1.07738 0.0520833 1.22321 0.15625L6.06696 3.9375C6.67113 3.625 7.32738 3.46875 8.03571 3.46875C9.26488 3.48958 10.3274 3.92708 11.2232 4.78125C12.0774 5.67708 12.5149 6.73958 12.5357 7.96875C12.5357 8.30208 12.494 8.625 12.4107 8.9375L14.0357 10.2188C14.0357 10.1979 14.0461 10.1875 14.067 10.1875C14.067 10.1667 14.0774 10.1562 14.0982 10.1562L17.6295 6.625C18.2128 6 18.5045 5.29167 18.5045 4.5C18.5045 3.70833 18.2128 3 17.6295 2.375C17.0045 1.79167 16.2961 1.5 15.5045 1.5C14.7128 1.5 14.0045 1.79167 13.3795 2.375L11.7857 3.96875C11.4107 3.61458 10.994 3.32292 10.5357 3.09375L12.317 1.3125C13.2545 0.4375 14.317 0 15.5045 0C16.7128 0 17.7753 0.4375 18.692 1.3125C19.567 2.22917 20.0045 3.29167 20.0045 4.5C20.0045 5.6875 19.567 6.75 18.692 7.6875L15.2232 11.1562ZM7.47321 5.0625L11.0357 7.84375C10.994 7.07292 10.7024 6.40625 10.1607 5.84375C9.80655 5.48958 9.38988 5.25 8.91071 5.125C8.43155 5 7.95238 4.97917 7.47321 5.0625ZM8.78571 11.2188C8.13988 10.5729 7.72321 9.8125 7.53571 8.9375L12.1295 12.5312C12.1086 12.5312 12.0774 12.5312 12.0357 12.5312C12.0149 12.5312 11.994 12.5312 11.9732 12.5312C10.744 12.5104 9.68155 12.0729 8.78571 11.2188Z"
      />
    </symbol>`,
  "icon-link": `<symbol id="icon-link" viewBox="0 0 20 16">
      <path
        
        d="M18.6875 1.31321C19.5417 2.22988 19.9792 3.29238 20 4.50071C19.9792 5.68821 19.5417 6.75071 18.6875 7.68821L15.1562 11.2195C14.2604 12.0736 13.1979 12.5111 11.9688 12.532C10.7396 12.5111 9.67708 12.0736 8.78125 11.2195C7.92708 10.3236 7.48958 9.26113 7.46875 8.03196C7.46875 7.30279 7.63542 6.62571 7.96875 6.00071C7.98958 6.00071 8 6.00071 8 6.00071C8.02083 6.00071 8.03125 6.00071 8.03125 6.00071C8.57292 6.00071 9.03125 6.16738 9.40625 6.50071C9.11458 6.95904 8.96875 7.46946 8.96875 8.03196C8.96875 8.86529 9.26042 9.57363 9.84375 10.157C10.4479 10.7195 11.1562 11.0007 11.9688 11.0007C12.7812 11.0007 13.4896 10.7195 14.0938 10.157L17.625 6.62571C18.2083 6.00071 18.5 5.29238 18.5 4.50071C18.5 3.70904 18.2083 3.00071 17.625 2.37571C17 1.79238 16.2917 1.50071 15.5 1.50071C14.7083 1.50071 14 1.79238 13.375 2.37571L11.7812 3.96946C11.4062 3.61529 10.9896 3.32363 10.5312 3.09446L12.3438 1.31321C13.2812 0.417377 14.3646 -0.0201231 15.5938 0.000710227C16.7604 0.0215436 17.7917 0.459044 18.6875 1.31321ZM6.625 13.5945L8.21875 12.032C8.59375 12.3861 9.01042 12.6778 9.46875 12.907L7.6875 14.6882C6.6875 15.6257 5.54167 16.0632 4.25 16.0007C3.14583 15.9382 2.16667 15.5007 1.3125 14.6882C0.4375 13.7715 0 12.709 0 11.5007C0 10.3132 0.4375 9.25071 1.3125 8.31321L4.84375 4.75071C5.73958 3.89654 6.80208 3.45904 8.03125 3.43821C9.26042 3.45904 10.3229 3.89654 11.2188 4.75071C12.0729 5.64654 12.5104 6.70904 12.5312 7.93821C12.5312 8.66738 12.3646 9.34446 12.0312 9.96946C12.0104 9.96946 12 9.96946 12 9.96946C11.9792 9.96946 11.9688 9.96946 11.9688 9.96946C11.4271 9.96946 10.9688 9.80279 10.5938 9.46946C10.8854 9.01113 11.0312 8.50071 11.0312 7.93821C11.0312 7.12571 10.7396 6.41738 10.1562 5.81321C9.55208 5.25071 8.84375 4.96946 8.03125 4.96946C7.21875 4.96946 6.51042 5.25071 5.90625 5.81321L2.375 9.34446C1.79167 9.96946 1.5 10.6778 1.5 11.4695C1.5 12.282 1.79167 12.9903 2.375 13.5945C3 14.1778 3.70833 14.4695 4.5 14.4695C5.29167 14.4695 6 14.1778 6.625 13.5945Z"
      />
    </symbol>`,
  "icon-table-list": `<symbol id="icon-table-list" viewBox="0 0 16 16">
      <path
        
        d="M14 1C14.5625 1.02083 15.0312 1.21875 15.4062 1.59375C15.7812 1.96875 15.9792 2.4375 16 3V13C15.9792 13.5625 15.7812 14.0312 15.4062 14.4062C15.0312 14.7812 14.5625 14.9792 14 15H2C1.4375 14.9792 0.96875 14.7812 0.59375 14.4062C0.21875 14.0312 0.0208333 13.5625 0 13V3C0.0208333 2.4375 0.21875 1.96875 0.59375 1.59375C0.96875 1.21875 1.4375 1.02083 2 1H14ZM14.5 3C14.4792 2.6875 14.3125 2.52083 14 2.5H5.75V5.25H14.5V3ZM5.75 6.75V9.25H14.5V6.75H5.75ZM4.25 9.25V6.75H1.5V9.25H4.25ZM2 2.5C1.6875 2.52083 1.52083 2.6875 1.5 3V5.25H4.25V2.5H2ZM1.5 13C1.52083 13.3125 1.6875 13.4792 2 13.5H4.25V10.75H1.5V13ZM14 13.5C14.3125 13.4792 14.4792 13.3125 14.5 13V10.75H5.75V13.5H14Z"
      />
    </symbol>`,
  "icon-arrow-left-standard": `<symbol id="icon-arrow-left-standard" class="arrow-left-regular" viewBox="0 0 448 512">
      <path
        
        d="M447.1 256c0 13.25-10.76 24.01-24.01 24.01H83.9l132.7 126.6c9.625 9.156 9.969 24.41 .8125 33.94c-9.156 9.594-24.34 9.938-33.94 .8125l-176-168C2.695 268.9 .0078 262.6 .0078 256S2.695 243.2 7.445 238.6l176-168C193 61.51 208.2 61.85 217.4 71.45c9.156 9.5 8.812 24.75-.8125 33.94l-132.7 126.6h340.1C437.2 232 447.1 242.8 447.1 256z"
      />
    </symbol>`,
  "icon-arrow-right-standard": `<symbol id="icon-arrow-right-standard" class="arrow-right-regular" viewBox="0 0 448 512">
      <path
        
        d="M264.6 70.63l176 168c4.75 4.531 7.438 10.81 7.438 17.38s-2.688 12.84-7.438 17.38l-176 168c-9.594 9.125-24.78 8.781-33.94-.8125c-9.156-9.5-8.812-24.75 .8125-33.94l132.7-126.6H24.01c-13.25 0-24.01-10.76-24.01-24.01s10.76-23.99 24.01-23.99h340.1l-132.7-126.6C221.8 96.23 221.5 80.98 230.6 71.45C239.8 61.85 254.1 61.51 264.6 70.63z"
      />
    </symbol>`,
  "icon-arrow-down-standard": `<symbol id="icon-arrow-down-standard" class="arrow-down-regular" viewBox="0 0 384 512">
      <path
        
        d="M377.4 296.6l-168 176C204.8 477.3 198.6 480 192 480s-12.84-2.688-17.38-7.438l-168-176C-2.5 286.1-2.156 271.8 7.438 262.6c9.5-9.156 24.75-8.812 33.94 .8125L168 396.1V56.02c0-13.25 10.75-24.01 23.1-24.01S216 42.77 216 56.02v340.1l126.6-132.7c9.156-9.625 24.41-9.969 33.94-.8125C386.2 271.8 386.5 286.1 377.4 296.6z"
      />
    </symbol>`,
  "icon-arrow-up-standard": `<symbol id="icon-arrow-up-standard" class="arrow-up-regular" viewBox="0 0 384 512">
      <path
        
        d="M6.625 215.5l168-176C179.2 34.7 185.4 32.02 192 32.02s12.84 2.688 17.38 7.438l168 176c9.125 9.594 8.781 24.78-.8125 33.94c-9.5 9.156-24.75 8.812-33.94-.8125L216 115.9V456c0 13.25-10.75 23.1-23.1 23.1S168 469.3 168 456V115.9l-126.6 132.7C32.22 258.2 16.97 258.5 7.438 249.4C-2.156 240.2-2.5 225 6.625 215.5z"
      />
    </symbol>`,
  "icon-arrow-right-arrow-left": `<symbol id="icon-arrow-right-arrow-left" viewBox="0 0 17 16">
      <path
        
        d="M15.25 10.75C15.7083 10.7917 15.9583 11.0417 16 11.5C15.9583 11.9583 15.7083 12.2083 15.25 12.25H2.46875L4.8125 14.75C5.08333 15.1042 5.0625 15.4583 4.75 15.8125C4.60417 15.9375 4.4375 16 4.25 16C4.04167 16 3.86458 15.9167 3.71875 15.75L0.21875 12C-0.0520833 11.6667 -0.0520833 11.3333 0.21875 11L3.71875 7.25C4.05208 6.9375 4.39583 6.92708 4.75 7.21875C5.0625 7.55208 5.08333 7.89583 4.8125 8.25L2.46875 10.75H15.25ZM0.75 5.25C0.291667 5.20833 0.0416667 4.95833 0 4.5C0.0416667 4.04167 0.291667 3.79167 0.75 3.75H13.5312L11.1875 1.25C10.9167 0.895833 10.9375 0.541667 11.25 0.1875C11.3958 0.0625 11.5625 0 11.75 0C11.9583 0 12.1458 0.0833333 12.3125 0.25L15.8125 4C16.0833 4.33333 16.0833 4.66667 15.8125 5L12.3125 8.75C11.9583 9.0625 11.6042 9.08333 11.25 8.8125C10.9375 8.45833 10.9271 8.10417 11.2188 7.75L13.5312 5.25H0.75Z"
      />
    </symbol>`,
  "icon-turn-down-left": `<symbol id="icon-turn-down-left" viewBox="0 0 512 512">
      <path
        
        d="M119.7 409.6l-112-104c-10.23-9.5-10.23-25.69 0-35.19l112-104c6.984-6.484 17.17-8.219 25.92-4.406s14.41 12.45 14.41 22L159.1 264h304V56c0-13.25 10.75-24 24-24s24 10.75 24 24V288c0 13.25-10.75 24-24 24h-328l.0015 80c0 9.547-5.656 18.19-14.41 22S126.7 416.1 119.7 409.6z"
      />
    </symbol>`,
  "icon-grid-dividers": `<symbol id="icon-grid-dividers" viewBox="0 0 16 16">
      <path
        
        d="M0.75 1.5C0.291667 1.45833 0.0416667 1.20833 0 0.75C0.0416667 0.291667 0.291667 0.0416667 0.75 0H15.25C15.7083 0.0416667 15.9583 0.291667 16 0.75C15.9583 1.20833 15.7083 1.45833 15.25 1.5H0.75ZM12 3H14C14.2917 3 14.5312 3.09375 14.7188 3.28125C14.9062 3.46875 15 3.70833 15 4V6C15 6.29167 14.9062 6.53125 14.7188 6.71875C14.5312 6.90625 14.2917 7 14 7H12C11.7083 7 11.4688 6.90625 11.2812 6.71875C11.0938 6.53125 11 6.29167 11 6V4C11 3.70833 11.0938 3.46875 11.2812 3.28125C11.4688 3.09375 11.7083 3 12 3ZM13.5 5.5V4.5H12.5V5.5H13.5ZM7 3H9C9.29167 3 9.53125 3.09375 9.71875 3.28125C9.90625 3.46875 10 3.70833 10 4V6C10 6.29167 9.90625 6.53125 9.71875 6.71875C9.53125 6.90625 9.29167 7 9 7H7C6.70833 7 6.46875 6.90625 6.28125 6.71875C6.09375 6.53125 6 6.29167 6 6V4C6 3.70833 6.09375 3.46875 6.28125 3.28125C6.46875 3.09375 6.70833 3 7 3ZM8.5 5.5V4.5H7.5V5.5H8.5ZM2 3H4C4.29167 3 4.53125 3.09375 4.71875 3.28125C4.90625 3.46875 5 3.70833 5 4V6C5 6.29167 4.90625 6.53125 4.71875 6.71875C4.53125 6.90625 4.29167 7 4 7H2C1.70833 7 1.46875 6.90625 1.28125 6.71875C1.09375 6.53125 1 6.29167 1 6V4C1 3.70833 1.09375 3.46875 1.28125 3.28125C1.46875 3.09375 1.70833 3 2 3ZM3.5 5.5V4.5H2.5V5.5H3.5ZM15.25 9C15.7083 9.04167 15.9583 9.29167 16 9.75C15.9583 10.2083 15.7083 10.4583 15.25 10.5H0.75C0.291667 10.4583 0.0416667 10.2083 0 9.75C0.0416667 9.29167 0.291667 9.04167 0.75 9H15.25ZM9 12C9.29167 12 9.53125 12.0938 9.71875 12.2812C9.90625 12.4688 10 12.7083 10 13V15C10 15.2917 9.90625 15.5312 9.71875 15.7188C9.53125 15.9062 9.29167 16 9 16H7C6.70833 16 6.46875 15.9062 6.28125 15.7188C6.09375 15.5312 6 15.2917 6 15V13C6 12.7083 6.09375 12.4688 6.28125 12.2812C6.46875 12.0938 6.70833 12 7 12H9ZM8.5 14.5V13.5H7.5V14.5H8.5ZM14 12C14.2917 12 14.5312 12.0938 14.7188 12.2812C14.9062 12.4688 15 12.7083 15 13V15C15 15.2917 14.9062 15.5312 14.7188 15.7188C14.5312 15.9062 14.2917 16 14 16H12C11.7083 16 11.4688 15.9062 11.2812 15.7188C11.0938 15.5312 11 15.2917 11 15V13C11 12.7083 11.0938 12.4688 11.2812 12.2812C11.4688 12.0938 11.7083 12 12 12H14ZM13.5 14.5V13.5H12.5V14.5H13.5ZM4 12C4.29167 12 4.53125 12.0938 4.71875 12.2812C4.90625 12.4688 5 12.7083 5 13V15C5 15.2917 4.90625 15.5312 4.71875 15.7188C4.53125 15.9062 4.29167 16 4 16H2C1.70833 16 1.46875 15.9062 1.28125 15.7188C1.09375 15.5312 1 15.2917 1 15V13C1 12.7083 1.09375 12.4688 1.28125 12.2812C1.46875 12.0938 1.70833 12 2 12H4ZM3.5 14.5V13.5H2.5V14.5H3.5Z"
      />
    </symbol>`,
  "icon-plane-engines": `<symbol id="icon-plane-engines" viewBox="0 0 18 16">
      <path
        
        d="M11.9062 5.5H14.4688C14.9062 5.5 15.3958 5.60417 15.9375 5.8125C16.4792 6.02083 16.9479 6.3125 17.3438 6.6875C17.7604 7.0625 17.9792 7.5 18 8C17.9792 8.52083 17.7604 8.96875 17.3438 9.34375C16.9479 9.69792 16.4792 9.97917 15.9375 10.1875C15.3958 10.3958 14.9167 10.5 14.5 10.5H11.9375L10.9375 12.0938C11.2917 12.2812 11.4792 12.5833 11.5 13C11.5 13.2917 11.4062 13.5312 11.2188 13.7188C11.0312 13.9062 10.7917 14 10.5 14H9.75L8.8125 15.5C8.625 15.8333 8.33333 16 7.9375 16H5.9375C5.60417 16 5.33333 15.875 5.125 15.625C4.91667 15.3333 4.86458 15.0312 4.96875 14.7188L6.3125 10.5H4.78125L3.5625 12.125C3.35417 12.375 3.09375 12.5 2.78125 12.5H1C0.6875 12.5 0.427083 12.375 0.21875 12.125C0.03125 11.875 -0.0208333 11.5833 0.0625 11.25L0.71875 8.96875C0.28125 8.80208 0.0416667 8.47917 0 8C0.0208333 7.52083 0.260417 7.19792 0.71875 7.03125L0.03125 4.75C-0.03125 4.45833 0.03125 4.17708 0.21875 3.90625C0.427083 3.65625 0.6875 3.52083 1 3.5H2.78125C3.09375 3.52083 3.35417 3.65625 3.5625 3.90625L4.78125 5.5H6.3125L4.96875 1.28125C4.86458 0.96875 4.91667 0.677083 5.125 0.40625C5.33333 0.15625 5.60417 0.0208333 5.9375 0H7.9375C8.33333 0.0208333 8.61458 0.1875 8.78125 0.5L9.71875 2H10.5C10.7917 2 11.0312 2.09375 11.2188 2.28125C11.4062 2.46875 11.5 2.70833 11.5 3C11.4792 3.41667 11.2812 3.71875 10.9062 3.90625L11.9062 5.5ZM11.0938 9H14.4688C14.9271 8.97917 15.3646 8.85417 15.7812 8.625C16.1979 8.39583 16.4271 8.1875 16.4688 8C16.4062 7.8125 16.1667 7.60417 15.75 7.375C15.3333 7.14583 14.9062 7.02083 14.4688 7H11.0938L7.65625 1.5H6.625L8.3125 7H4.03125L2.53125 5H1.6875L2.5625 8L1.6875 11H2.53125L4.03125 9H8.3125L6.625 14.5H7.65625L11.0938 9Z"
      />
    </symbol>`,
  "icon-satellite-dish": `<symbol id="icon-satellite-dish" viewBox="0 0 16 16">
      <path
        
        d="M6.3125 10.7812L9.28125 13.75C9.44792 13.9167 9.52083 14.1146 9.5 14.3438C9.47917 14.5729 9.375 14.75 9.1875 14.875C8.16667 15.625 7.03125 16 5.78125 16C4.13542 15.9583 2.77083 15.3958 1.6875 14.3125C0.604167 13.2292 0.0416667 11.8646 0 10.2188C0 8.96875 0.375 7.83333 1.125 6.8125C1.25 6.625 1.42708 6.52083 1.65625 6.5C1.88542 6.5 2.08333 6.57292 2.25 6.71875L5.25 9.71875L6.71875 8.21875C7.07292 7.92708 7.42708 7.92708 7.78125 8.21875C8.07292 8.57292 8.07292 8.92708 7.78125 9.28125L6.3125 10.7812ZM5.78125 14.5C6.40625 14.5 6.98958 14.375 7.53125 14.125L1.875 8.46875C1.625 9.01042 1.5 9.59375 1.5 10.2188C1.52083 11.4271 1.9375 12.4375 2.75 13.25C3.5625 14.0625 4.57292 14.4792 5.78125 14.5ZM6.75 0C8.47917 0.0208333 10.0312 0.4375 11.4062 1.25C12.8021 2.08333 13.9167 3.19792 14.75 4.59375C15.5625 5.96875 15.9792 7.52083 16 9.25C15.9583 9.70833 15.7083 9.95833 15.25 10C14.7917 9.95833 14.5417 9.70833 14.5 9.25C14.4792 7.8125 14.125 6.51042 13.4375 5.34375C12.75 4.17708 11.8229 3.25 10.6562 2.5625C9.48958 1.875 8.1875 1.52083 6.75 1.5C6.29167 1.45833 6.04167 1.20833 6 0.75C6.04167 0.291667 6.29167 0.0416667 6.75 0ZM6.75 3.25C8.4375 3.29167 9.85417 3.875 11 5C12.125 6.14583 12.7083 7.5625 12.75 9.25C12.7083 9.70833 12.4583 9.95833 12 10C11.5417 9.95833 11.2917 9.70833 11.25 9.25C11.2083 7.97917 10.7708 6.91667 9.9375 6.0625C9.08333 5.22917 8.02083 4.79167 6.75 4.75C6.29167 4.70833 6.04167 4.45833 6 4C6.04167 3.54167 6.29167 3.29167 6.75 3.25Z"
      />
    </symbol>`,
  "icon-grid": `<symbol id="icon-grid" viewBox="0 0 16 16">
      <path
        
        d="M4 1C4.29167 1 4.53125 1.09375 4.71875 1.28125C4.90625 1.46875 5 1.70833 5 2V4C5 4.29167 4.90625 4.53125 4.71875 4.71875C4.53125 4.90625 4.29167 5 4 5H2C1.70833 5 1.46875 4.90625 1.28125 4.71875C1.09375 4.53125 1 4.29167 1 4V2C1 1.70833 1.09375 1.46875 1.28125 1.28125C1.46875 1.09375 1.70833 1 2 1H4ZM9 1C9.29167 1 9.53125 1.09375 9.71875 1.28125C9.90625 1.46875 10 1.70833 10 2V4C10 4.29167 9.90625 4.53125 9.71875 4.71875C9.53125 4.90625 9.29167 5 9 5H7C6.70833 5 6.46875 4.90625 6.28125 4.71875C6.09375 4.53125 6 4.29167 6 4V2C6 1.70833 6.09375 1.46875 6.28125 1.28125C6.46875 1.09375 6.70833 1 7 1H9ZM14 1C14.2917 1 14.5312 1.09375 14.7188 1.28125C14.9062 1.46875 15 1.70833 15 2V4C15 4.29167 14.9062 4.53125 14.7188 4.71875C14.5312 4.90625 14.2917 5 14 5H12C11.7083 5 11.4688 4.90625 11.2812 4.71875C11.0938 4.53125 11 4.29167 11 4V2C11 1.70833 11.0938 1.46875 11.2812 1.28125C11.4688 1.09375 11.7083 1 12 1H14ZM4 11C4.29167 11 4.53125 11.0938 4.71875 11.2812C4.90625 11.4688 5 11.7083 5 12V14C5 14.2917 4.90625 14.5312 4.71875 14.7188C4.53125 14.9062 4.29167 15 4 15H2C1.70833 15 1.46875 14.9062 1.28125 14.7188C1.09375 14.5312 1 14.2917 1 14V12C1 11.7083 1.09375 11.4688 1.28125 11.2812C1.46875 11.0938 1.70833 11 2 11H4ZM9 11C9.29167 11 9.53125 11.0938 9.71875 11.2812C9.90625 11.4688 10 11.7083 10 12V14C10 14.2917 9.90625 14.5312 9.71875 14.7188C9.53125 14.9062 9.29167 15 9 15H7C6.70833 15 6.46875 14.9062 6.28125 14.7188C6.09375 14.5312 6 14.2917 6 14V12C6 11.7083 6.09375 11.4688 6.28125 11.2812C6.46875 11.0938 6.70833 11 7 11H9ZM14 11C14.2917 11 14.5312 11.0938 14.7188 11.2812C14.9062 11.4688 15 11.7083 15 12V14C15 14.2917 14.9062 14.5312 14.7188 14.7188C14.5312 14.9062 14.2917 15 14 15H12C11.7083 15 11.4688 14.9062 11.2812 14.7188C11.0938 14.5312 11 14.2917 11 14V12C11 11.7083 11.0938 11.4688 11.2812 11.2812C11.4688 11.0938 11.7083 11 12 11H14ZM4 6C4.29167 6 4.53125 6.09375 4.71875 6.28125C4.90625 6.46875 5 6.70833 5 7V9C5 9.29167 4.90625 9.53125 4.71875 9.71875C4.53125 9.90625 4.29167 10 4 10H2C1.70833 10 1.46875 9.90625 1.28125 9.71875C1.09375 9.53125 1 9.29167 1 9V7C1 6.70833 1.09375 6.46875 1.28125 6.28125C1.46875 6.09375 1.70833 6 2 6H4ZM9 6C9.29167 6 9.53125 6.09375 9.71875 6.28125C9.90625 6.46875 10 6.70833 10 7V9C10 9.29167 9.90625 9.53125 9.71875 9.71875C9.53125 9.90625 9.29167 10 9 10H7C6.70833 10 6.46875 9.90625 6.28125 9.71875C6.09375 9.53125 6 9.29167 6 9V7C6 6.70833 6.09375 6.46875 6.28125 6.28125C6.46875 6.09375 6.70833 6 7 6H9ZM14 6C14.2917 6 14.5312 6.09375 14.7188 6.28125C14.9062 6.46875 15 6.70833 15 7V9C15 9.29167 14.9062 9.53125 14.7188 9.71875C14.5312 9.90625 14.2917 10 14 10H12C11.7083 10 11.4688 9.90625 11.2812 9.71875C11.0938 9.53125 11 9.29167 11 9V7C11 6.70833 11.0938 6.46875 11.2812 6.28125C11.4688 6.09375 11.7083 6 12 6H14Z"
      />
    </symbol>`,
  "icon-square": `<symbol id="icon-square" viewBox="0 0 16 16">
      <path
        
        d="M13.7143 1.71429C14.0286 1.71429 14.2857 1.97143 14.2857 2.28571V13.7143C14.2857 14.0286 14.0286 14.2857 13.7143 14.2857H2.28571C1.97143 14.2857 1.71429 14.0286 1.71429 13.7143V2.28571C1.71429 1.97143 1.97143 1.71429 2.28571 1.71429H13.7143ZM2.28571 0C1.025 0 0 1.025 0 2.28571V13.7143C0 14.975 1.025 16 2.28571 16H13.7143C14.975 16 16 14.975 16 13.7143V2.28571C16 1.025 14.975 0 13.7143 0H2.28571Z"
      />
    </symbol>`,
  "icon-square-check": `<symbol id="icon-square-check" viewBox="0 0 16 16">
      <path
        
        d="M2.28571 0C1.025 0 0 1.025 0 2.28571V13.7143C0 14.975 1.025 16 2.28571 16H13.7143C14.975 16 16 14.975 16 13.7143V2.28571C16 1.025 14.975 0 13.7143 0H2.28571ZM12.0357 6.32143L7.46429 10.8929C7.12857 11.2286 6.58571 11.2286 6.25357 10.8929L3.96786 8.60714C3.63214 8.27143 3.63214 7.72857 3.96786 7.39643C4.30357 7.06429 4.84643 7.06071 5.17857 7.39643L6.85714 9.075L10.8214 5.10714C11.1571 4.77143 11.7 4.77143 12.0321 5.10714C12.3643 5.44286 12.3679 5.98571 12.0321 6.31786L12.0357 6.32143Z"
      />
    </symbol>`,
  "icon-square-minus": `<symbol id="icon-square-minus" viewBox="0 0 16 16">
      <path
        
        d="M2.28571 0C1.025 0 0 1.025 0 2.28571V13.7143C0 14.975 1.025 16 2.28571 16H13.7143C14.975 16 16 14.975 16 13.7143V2.28571C16 1.025 14.975 0 13.7143 0H2.28571ZM5.42857 7.14286H10.5714C11.0464 7.14286 11.4286 7.525 11.4286 8C11.4286 8.475 11.0464 8.85714 10.5714 8.85714H5.42857C4.95357 8.85714 4.57143 8.475 4.57143 8C4.57143 7.525 4.95357 7.14286 5.42857 7.14286Z"
      />
    </symbol>`,
  "icon-circle": `<symbol id="icon-circle" viewBox="0 0 16 16">
      <path
        
        d="M14.5 8C14.5 6.27609 13.8152 4.62279 12.5962 3.40381C11.3772 2.18482 9.72391 1.5 8 1.5C6.27609 1.5 4.62279 2.18482 3.40381 3.40381C2.18482 4.62279 1.5 6.27609 1.5 8C1.5 9.72391 2.18482 11.3772 3.40381 12.5962C4.62279 13.8152 6.27609 14.5 8 14.5C9.72391 14.5 11.3772 13.8152 12.5962 12.5962C13.8152 11.3772 14.5 9.72391 14.5 8ZM0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8Z"
      />
    </symbol>`,
  "icon-circle-dot": `<symbol id="icon-circle-dot" viewBox="0 0 16 16">
      <path
        
        d="M14.5 8C14.5 6.27609 13.8152 4.62279 12.5962 3.40381C11.3772 2.18482 9.72391 1.5 8 1.5C6.27609 1.5 4.62279 2.18482 3.40381 3.40381C2.18482 4.62279 1.5 6.27609 1.5 8C1.5 9.72391 2.18482 11.3772 3.40381 12.5962C4.62279 13.8152 6.27609 14.5 8 14.5C9.72391 14.5 11.3772 13.8152 12.5962 12.5962C13.8152 11.3772 14.5 9.72391 14.5 8ZM0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8ZM8 5C8.79565 5 9.55871 5.31607 10.1213 5.87868C10.6839 6.44129 11 7.20435 11 8C11 8.79565 10.6839 9.55871 10.1213 10.1213C9.55871 10.6839 8.79565 11 8 11C7.20435 11 6.44129 10.6839 5.87868 10.1213C5.31607 9.55871 5 8.79565 5 8C5 7.20435 5.31607 6.44129 5.87868 5.87868C6.44129 5.31607 7.20435 5 8 5Z"
      />
    </symbol>`,
  "icon-circle-small": `<symbol id="icon-circle-small" viewBox="0 0 16 16">
      <path
        
        d="M5 8C5 7.20435 5.31607 6.44129 5.87868 5.87868C6.44129 5.31607 7.20435 5 8 5C8.79565 5 9.55871 5.31607 10.1213 5.87868C10.6839 6.44129 11 7.20435 11 8C11 8.79565 10.6839 9.55871 10.1213 10.1213C9.55871 10.6839 8.79565 11 8 11C7.20435 11 6.44129 10.6839 5.87868 10.1213C5.31607 9.55871 5 8.79565 5 8Z"
        fill="black"
      />
    </symbol>`,
  "icon-heart": `<symbol id="icon-heart" viewBox="0 0 16 16">
      <path
        
        d="M7.05625 13.6315L6.97813 13.5596L1.50312 8.4752C0.54375 7.58458 0 6.33458 0 5.0252V4.92208C0 2.72208 1.5625 0.834577 3.725 0.422077C4.95625 0.184577 6.21562 0.468952 7.21875 1.1752C7.5 1.3752 7.7625 1.60645 8 1.87208C8.13125 1.72208 8.27188 1.58458 8.42188 1.45645C8.5375 1.35645 8.65625 1.2627 8.78125 1.1752C9.78438 0.468952 11.0437 0.184577 12.275 0.418952C14.4375 0.831452 16 2.72208 16 4.92208V5.0252C16 6.33458 15.4563 7.58458 14.4969 8.4752L9.02188 13.5596L8.94375 13.6315C8.6875 13.869 8.35 14.0033 8 14.0033C7.65 14.0033 7.3125 13.8721 7.05625 13.6315ZM7.47188 3.53145C7.45938 3.52208 7.45 3.50958 7.44063 3.49708L6.88438 2.87208L6.88125 2.86895C6.15937 2.05958 5.06875 1.69083 4.00625 1.89395C2.55 2.17208 1.5 3.44083 1.5 4.92208V5.0252C1.5 5.91583 1.87188 6.76895 2.525 7.3752L8 12.4596L13.475 7.3752C14.1281 6.76895 14.5 5.91583 14.5 5.0252V4.92208C14.5 3.44395 13.45 2.17208 11.9969 1.89395C10.9344 1.69083 9.84062 2.0627 9.12187 2.86895C9.12187 2.86895 9.12187 2.86895 9.11875 2.87208C9.11562 2.8752 9.11875 2.87208 9.11563 2.8752L8.55937 3.5002C8.55 3.5127 8.5375 3.52208 8.52812 3.53458C8.3875 3.6752 8.19687 3.75333 8 3.75333C7.80312 3.75333 7.6125 3.6752 7.47188 3.53458V3.53145Z"
      />
    </symbol>`,
  "icon-highlighter-line": `<symbol id="icon-highlighter-line" viewBox="0 0 18 16">
      <path
        
        d="M7.15625 7.15625L13.875 2.20625L14.7906 3.12188L9.84375 9.84375L7.15625 7.15625ZM4 10L3.20625 10.7937C2.81562 11.1844 2.81562 11.8188 3.20625 12.2094L4.79062 13.7937C5.18125 14.1844 5.81562 14.1844 6.20625 13.7937L7 13H9.24062C9.71875 13 10.1656 12.775 10.4469 12.3906L16.7375 3.85625C16.9094 3.625 17 3.34375 17 3.05625C17 2.7 16.8594 2.35625 16.6063 2.10313L14.8937 0.39375C14.6406 0.140625 14.3 0 13.9437 0C13.6562 0 13.375 0.090625 13.1437 0.2625L4.60937 6.55C4.225 6.83125 4 7.28125 4 7.75625V10ZM2.19062 12.6031L0.221874 14.5719C0.0812492 14.7125 0.00312424 14.9031 0.00312424 15.1031V15.25C0.00312424 15.6656 0.337499 16 0.753124 16H2.89687C3.09687 16 3.2875 15.9219 3.42812 15.7812L4.39687 14.8125L2.19062 12.6031ZM7 14.5C6.58437 14.5 6.25 14.8344 6.25 15.25C6.25 15.6656 6.58437 16 7 16H17.25C17.6656 16 18 15.6656 18 15.25C18 14.8344 17.6656 14.5 17.25 14.5H7Z"
      />
    </symbol>`,
  "icon-comment-check": `<symbol id="icon-comment-check" viewBox="0 0 16 16">
      <path
        
        d="M5.25317 12.0281C4.7847 11.8594 4.26313 11.9312 3.86024 12.2281C3.60414 12.4156 3.16377 12.6906 2.62971 12.9375C2.80461 12.4781 2.9389 11.9594 2.98263 11.3938C3.01386 10.9906 2.87956 10.5906 2.61409 10.2844C1.88639 9.4625 1.49912 8.5 1.49912 7.5C1.49912 5.01562 4.10072 2.5 7.99532 2.5C11.8899 2.5 14.4915 5.01562 14.4915 7.5C14.4915 9.98438 11.8899 12.5 7.99532 12.5C7.00839 12.5 6.08081 12.3281 5.25317 12.0281ZM0.821394 13.2437C0.771423 13.3281 0.718329 13.4125 0.662112 13.4969L0.652743 13.5125C0.602772 13.5844 0.552801 13.6562 0.50283 13.7281C0.393519 13.875 0.274839 14.0187 0.149912 14.15C0.00624635 14.2937 -0.0343549 14.5063 0.0437244 14.6938C0.121804 14.8813 0.302948 15.0031 0.505954 15.0031C0.665235 15.0031 0.824517 14.9937 0.983799 14.9781L1.00566 14.975C1.14308 14.9594 1.2805 14.9406 1.41792 14.9156C1.4429 14.9125 1.46789 14.9062 1.49288 14.9C2.0488 14.7906 2.58286 14.6031 3.05758 14.3969C3.77279 14.0844 4.38181 13.7125 4.75346 13.4406C5.74663 13.8 6.84599 14 8.00468 14C12.4208 14 16 11.0906 16 7.5C16 3.90937 12.4115 1 7.99532 1C3.57915 1 0 3.90937 0 7.5C0 8.90938 0.552801 10.2125 1.48975 11.2781C1.43041 12.0437 1.13371 12.725 0.821394 13.2437ZM11.5245 6.03125C11.8181 5.7375 11.8181 5.2625 11.5245 4.97188C11.2309 4.68125 10.7562 4.67813 10.4657 4.97188L6.99902 8.44063L5.53113 6.97188C5.23756 6.67813 4.76283 6.67813 4.47238 6.97188C4.18192 7.26562 4.1788 7.74062 4.47238 8.03125L6.47121 10.0312C6.76479 10.325 7.23951 10.325 7.52996 10.0312L11.5245 6.03125Z"
      />
    </symbol>`,
  "icon-sidebar": `<symbol id="icon-sidebar" viewBox="0 0 16 16">
      <path
        
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 13.5V2.5H14C14.275 2.5 14.5 2.725 14.5 3V13C14.5 13.275 14.275 13.5 14 13.5H7ZM2 1C0.896875 1 0 1.89688 0 3V13C0 14.1031 0.896875 15 2 15H14C15.1031 15 16 14.1031 16 13V3C16 1.89688 15.1031 1 14 1H2ZM2.75 4.5C2.33437 4.5 2 4.16563 2 3.75C2 3.33437 2.33437 3 2.75 3H4.25C4.66563 3 5 3.33437 5 3.75C5 4.16563 4.66563 4.5 4.25 4.5H2.75ZM2 6.75C2 6.33437 2.33437 6 2.75 6H4.25C4.66563 6 5 6.33437 5 6.75C5 7.16563 4.66563 7.5 4.25 7.5H2.75C2.33437 7.5 2 7.16563 2 6.75ZM2.75 10.5C2.33437 10.5 2 10.1656 2 9.75C2 9.33438 2.33437 9 2.75 9H4.25C4.66563 9 5 9.33438 5 9.75C5 10.1656 4.66563 10.5 4.25 10.5H2.75ZM12.9577 8.49736C13.1302 8.4856 13.4217 8.46573 13.4217 8C13.4217 7.53532 13.1251 7.51449 12.9575 7.50272C12.9448 7.50182 12.9328 7.50098 12.9217 7.5H9.9217L10.5 6.5C10.6044 6.38889 10.5317 6.19792 10.4273 6.07292C10.308 5.97569 10.1812 5.97569 10.047 6.07292L8.0783 7.82292C8.0261 7.87153 8 7.93056 8 8C8 8.06944 8.0261 8.12847 8.0783 8.17708L10.047 9.92708C10.1812 10.0243 10.308 10.0243 10.4273 9.92708C10.5317 9.80208 10.6044 9.61111 10.5 9.5L10 8.5H12.9217C12.9329 8.49905 12.945 8.49823 12.9577 8.49736Z"
      />
    </symbol>`,
  "icon-sidebar-flip": `<symbol id="icon-sidebar-flip" viewBox="0 0 16 16">
      <path
        
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 13.5H9V2.5H2C1.725 2.5 1.5 2.725 1.5 3V13C1.5 13.275 1.725 13.5 2 13.5ZM14 1C15.1031 1 16 1.89688 16 3V13C16 14.1031 15.1031 15 14 15H2C0.896875 15 0 14.1031 0 13V3C0 1.89688 0.896875 1 2 1H14ZM13.25 4.5C13.6656 4.5 14 4.16563 14 3.75C14 3.33437 13.6656 3 13.25 3H11.75C11.3344 3 11 3.33437 11 3.75C11 4.16563 11.3344 4.5 11.75 4.5H13.25ZM14 6.75C14 6.33437 13.6656 6 13.25 6H11.75C11.3344 6 11 6.33437 11 6.75C11 7.16563 11.3344 7.5 11.75 7.5H13.25C13.6656 7.5 14 7.16563 14 6.75ZM13.25 10.5C13.6656 10.5 14 10.1656 14 9.75C14 9.33438 13.6656 9 13.25 9H11.75C11.3344 9 11 9.33438 11 9.75C11 10.1656 11.3344 10.5 11.75 10.5H13.25ZM3.04232 8.49736C2.86978 8.4856 2.57831 8.46573 2.57831 8C2.57831 7.53532 2.8749 7.51449 3.04251 7.50272C3.05525 7.50182 3.06724 7.50098 3.07831 7.5H6.0783L5.5 6.5C5.3956 6.38889 5.46831 6.19792 5.57271 6.07292C5.69202 5.97569 5.81879 5.97569 5.95302 6.07292L7.9217 7.82292C7.9739 7.87153 8 7.93056 8 8C8 8.06944 7.9739 8.12847 7.9217 8.17708L5.95302 9.92708C5.81879 10.0243 5.69202 10.0243 5.57271 9.92708C5.46831 9.80208 5.3956 9.61111 5.5 9.5L6 8.5H3.07831C3.06707 8.49905 3.05501 8.49823 3.04232 8.49736Z"
      />
    </symbol>`,
  "icon-photo-film": `<symbol id="icon-photo-film" viewBox="0 0 640 512">
      <path
        
        d="M256 48c-8.8 0-16 7.2-16 16l0 224c0 8.7 6.9 15.8 15.6 16l69.1-94.2c4.5-6.2 11.7-9.8 19.4-9.8s14.8 3.6 19.4 9.8L380 232.4l56-85.6c4.4-6.8 12-10.9 20.1-10.9s15.7 4.1 20.1 10.9L578.7 303.8c7.6-1.3 13.3-7.9 13.3-15.8l0-224c0-8.8-7.2-16-16-16L256 48zM192 64c0-35.3 28.7-64 64-64L576 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-320 0c-35.3 0-64-28.7-64-64l0-224zm-56 64l24 0 0 48 0 88 0 112 0 8 0 80 192 0 0-80 48 0 0 80 48 0c8.8 0 16-7.2 16-16l0-64 48 0 0 64c0 35.3-28.7 64-64 64l-48 0-24 0-24 0-192 0-24 0-24 0-48 0c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64l48 0 24 0zm-24 48l-48 0c-8.8 0-16 7.2-16 16l0 48 64 0 0-64zm0 288l0-64-64 0 0 48c0 8.8 7.2 16 16 16l48 0zM48 352l64 0 0-64-64 0 0 64zM304 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
      />
    </symbol>`,
  "icon-icons": `<symbol id="icon-icons" viewBox="0 0 512 512">
      <path
        
        d="M59.6 54.4c11.1-9.4 30.8-8.7 43.5 3.7l8 8.1 17.5 17.8 17.1-18.3L153 58c12.5-12 31.7-13.1 43.8-3.4c14.2 12.1 14.8 33.3 2 46.2c0 0 0 0 0 0l-70.7 70.8-71-70.8s0 0 0 0C44.3 87.9 44.9 66.6 59.5 54.5c0 0 0 0 0 0l.1-.1zM28.8 17.6C-7.7 47.9-9.4 102 23.1 134.6c0 0 0 0 0 0L101.7 213c14.7 15.1 38.3 14.1 52.5 .4c0 0 0 0 0 0l.3-.3 78.3-78.5s0 0 0 0C265.4 102 263.6 48 227.6 17.7c0 0 0 0 0 0l-.3-.3c-29.9-24.3-71-21.9-99.3-1C99.7-4.4 58.2-7 28.8 17.6zM512 24c0-7.2-3.2-14-8.8-18.6s-12.9-6.4-19.9-5l-160 32C312.1 34.7 304 44.6 304 56l0 105.5c-5.1-1-10.5-1.5-16-1.5c-35.3 0-64 21.5-64 48s28.7 48 64 48s64-21.5 64-48l0-132.3L464 53.3l0 76.2c-5.1-1-10.5-1.5-16-1.5c-35.3 0-64 21.5-64 48s28.7 48 64 48s64-21.5 64-48l0-152zM106.9 309.5l2.7-5.5 68.7 0 2.7 5.5c8.1 16.3 24.8 26.5 42.9 26.5c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16c18.2 0 34.8-10.3 42.9-26.5zM224 288l-7.2-14.3c-5.4-10.8-16.5-17.7-28.6-17.7l-88.4 0c-12.1 0-23.2 6.8-28.6 17.7L64 288c-35.3 0-64 28.7-64 64l0 96c0 35.3 28.7 64 64 64l160 0c35.3 0 64-28.7 64-64l0-96c0-35.3-28.7-64-64-64zM192 392a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM473.4 259.1c-6-4.4-14.3-4-19.9 .9l-128 112c-5 4.4-6.8 11.4-4.4 17.7s8.3 10.4 15 10.4l55.7 0-38.4 89.7c-2.9 6.9-.7 14.9 5.3 19.2s14.3 4 19.9-.9l128-112c5-4.4 6.8-11.4 4.4-17.7s-8.3-10.4-15-10.4l-55.7 0 38.4-89.7c2.9-6.9 .7-14.9-5.3-19.2z"
      />
    </symbol>`,
  "icon-paper-plane": `<symbol id="icon-paper-plane" viewBox="0 0 512 512">
      <path
        
        d="M133.9 232L65.8 95.9 383.4 232l-249.5 0zm0 48l249.5 0L65.8 416.1l68-136.1zM44.6 34.6C32.3 29.3 17.9 32.3 8.7 42S-2.6 66.3 3.4 78.3L92.2 256 3.4 433.7c-6 12-3.9 26.5 5.3 36.3s23.5 12.7 35.9 7.5l448-192c11.8-5 19.4-16.6 19.4-29.4s-7.6-24.4-19.4-29.4l-448-192z"
      />
    </symbol>`,
  "icon-at": `<symbol id="icon-at" viewBox="0 0 512 512">
      <path
        
        d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208c13.3 0 24 10.7 24 24s-10.7 24-24 24C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256l0 28c0 50.8-41.2 92-92 92c-31.1 0-58.7-15.5-75.3-39.2C322.7 360.9 291.1 376 256 376c-66.3 0-120-53.7-120-120s53.7-120 120-120c28.8 0 55.2 10.1 75.8 27c4.3-6.6 11.7-11 20.2-11c13.3 0 24 10.7 24 24l0 80 0 28c0 24.3 19.7 44 44 44s44-19.7 44-44l0-28c0-114.9-93.1-208-208-208zm72 208a72 72 0 1 0 -144 0 72 72 0 1 0 144 0z"
      />
    </symbol>`
};
var nr = Object.defineProperty, sr = Object.getOwnPropertyDescriptor, _e = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? sr(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && nr(e, A, a), a;
};
let fe = class extends b {
  constructor() {
    super(), this._heightString = "height: 16px;", this._widthString = "width: 16px;";
  }
  render() {
    return g`
      ${T1(this._getSvgStringRef())}
      <span class="icon-container"
        >${T1(this._getHtml())}
        ${this.badge ? g`<span
              style="background-color: ${this.badge.backgroundColor}; color: ${this.badge.color};"
              class="badge"
              >${this.badge.label}</span
            >` : u}
      </span>
    `;
  }
  _getSvgStringRef() {
    const t = O1[`icon-${this.icon}`];
    return t ? `
      <svg
        aria-hidden="true"
        style="position: absolute; width: 0; height: 0; overflow: hidden"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          ${t}
        </defs>
      </svg>
    ` : "";
  }
  _getSvgString(t) {
    return `<svg class="icon icon-${t}" style="${this._heightString}${this._widthString}${this.color ? `--atp-icon-fill:${this.color};` : ""}"><use xlink:href="#icon-${t}"></use></svg>`;
  }
  _setStyles() {
    this.height && (this._heightString = `height: ${this.height}px;`, this._widthString = `width: ${this.height}px;`);
  }
  _getHtml() {
    return this._setStyles(), O1[`icon-${this.icon}`] ? this._getSvgString(this.icon) : this.icon ? this.icon.replace("<svg", `<svg style="${this._heightString}"`) : "";
  }
};
fe.styles = [rr];
_e([
  l()
], fe.prototype, "icon", 2);
_e([
  l({ type: Number })
], fe.prototype, "height", 2);
_e([
  l()
], fe.prototype, "color", 2);
_e([
  l()
], fe.prototype, "hoverColor", 2);
_e([
  l()
], fe.prototype, "pressedColor", 2);
_e([
  l({ type: Object })
], fe.prototype, "badge", 2);
fe = _e([
  Q("atp-icon")
], fe);
const or = k`
  :host {
    --atp-box-shadow-icon-clickable-background-hover-dark: hsl(0 0 0 / 0.34);
    --atp-box-shadow-icon-clickable-background-pressed-dark: hsl(0 0 0 / 0.5);
    --atp-box-shadow-icon-clickable-background-hover-light: hsl(0 0 100 / 0.34);
    --atp-box-shadow-icon-clickable-background-pressed-light: hsl(0 0 100 / 0.5);
  }

  .button {
    --atp-icon-fill: currentColor;

    overflow: hidden;
    position: relative;
    color: var(--atp-button-inverse-medium-enabled);
    background-color: var(--atp-button-primary-medium-enabled);
    border-radius: var(--atp-border-radius-m);
    box-sizing: border-box;
    border: none;
    outline-offset: inherit;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--atp-space-xxs);
    white-space: nowrap;
    transition: all var(--atp-transition-standard);
  }

  .button.full-width {
    inline-size: 100%;
    padding-block: unset;
  }

  .button:focus-visible {
    outline: var(--atp-focus-width) solid var(--atp-focus-color);
    outline-offset: var(--atp-focus-outline-offset);
  }

  .button.focus-inverse:focus-visible {
    outline: var(--atp-focus-width) solid var(--atp-focus-color-inverse);
  }

  .button.reversed {
    flex-direction: row-reverse;
  }

  .icon.text {
    justify-content: center;
    transition: all var(--atp-transition-standard);
    border-radius: 0;
  }

  .icon.text:hover,
  .icon.text:focus-visible {
    box-shadow: var(--atp-box-shadow-icon-clickable-hover-dark);
    background: var(--atp-box-shadow-icon-clickable-background-hover-dark);
    border-radius: var(--atp-border-radius-s);
    outline-offset: var(--atp-focus-outline-offset-extended);
  }

  .icon.text:active {
    box-shadow: var(--atp-box-shadow-icon-clickable-pressed-dark);
    background: var(--atp-box-shadow-icon-clickable-background-pressed-dark);
  }

  .icon.light.text:hover,
  .icon.text:focus-visible {
    box-shadow: var(--atp-box-shadow-icon-clickable-hover-light);
    background: var(--atp-box-shadow-icon-clickable-background-hover-light);
  }

  .icon.light.text:active {
    box-shadow: var(--atp-box-shadow-icon-clickable-pressed-light);
    background: var(--atp-box-shadow-icon-clickable-background-pressed-light);
  }

  .icon.text:is(.disabled, .loading):is(:hover, :focus-visible, :active) {
    box-shadow: none;
    background-color: transparent;
  }

  .loading .spinner {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    inset: 0;
    cursor: default;
  }

  .loading.fill .spinner {
    background-color: var(--atp-button-primary-medium-enabled);
  }

  .loading.outline .spinner {
    background-color: var(--atp-button-secondary-medium-enabled);
  }

  .loading.danger.outline .spinner {
    background: #f8d7de; /** TODO: This needs to be added as a token as --danger-primary-weak-enabled */
  }

  .loading.danger.fill .spinner {
    background-color: var(--atp-button-danger-medium-enabled);
  }

  .button.loading.text,
  .button.loading.text.danger {
    color: transparent;
    overflow: visible;
  }

  .button.disabled {
    cursor: default;
    opacity: 0.5;
    text-decoration: none;
  }

  .fill {
    color: var(--atp-button-inverse-medium-enabled);
    background-color: var(--atp-button-primary-medium-enabled);
  }

  .fill:hover,
  .fill:focus-visible {
    background-color: var(--atp-button-primary-medium-hover);
  }

  .fill:active {
    background-color: var(--atp-button-primary-medium-pressed);
  }

  .fill:is(.disabled, .loading),
  .fill:is(.disabled, .loading):is(:hover, :focus-visible, :active) {
    background-color: var(--atp-button-primary-medium-disabled);
  }

  .outline {
    border: 1px solid transparent;
    color: var(--atp-button-primary-medium-enabled);
    background-color: var(--atp-button-secondary-medium-enabled);
  }

  .outline:hover,
  .outline:focus-visible {
    border: 1px solid var(--atp-button-primary-medium-enabled);
    background: var(--atp-button-secondary-medium-hover);
  }

  .outline:active {
    border: 1px solid var(--atp-button-primary-medium-enabled);
    background: var(--atp-button-secondary-medium-pressed);
  }

  .outline:is(.disabled, .loading),
  .outline:is(.disabled, .loading):is(:hover, :focus-visible, :active) {
    border: 1px solid transparent;
    background: var(--atp-button-secondary-medium-disabled);
    color: var(--atp-button-primary-medium-disabled);
  }

  .button.light.text {
    color: var(--atp-content-inverse-medium-enabled);
  }

  .button.text {
    color: var(--atp-button-primary-medium-enabled);
    background-color: transparent;
    overflow: visible;
  }

  .text:is(:hover, :focus-visible, :active) {
    text-decoration: underline;
  }

  .text:is(.disabled, .loading):is(:hover, :focus-visible, :active) {
    text-decoration: none;
  }

  /* stylelint-disable no-descending-specificity -- keep danger styling grouped together */
  .danger:is(.outline),
  .danger:is(.outline):is(.disabled, .loading):is(:hover, :focus-visible, :active) {
    border: 1px solid var(--atp-button-danger-medium-enabled);
    background: transparent;
    color: var(--atp-button-danger-medium-enabled);
  }

  .danger:is(.outline):hover,
  .danger:is(.outline):focus-visible {
    border: 1px solid var(--atp-button-danger-medium-hover);
    background: var(--atp-danger-primary-weak-hover);
    color: var(--atp-button-danger-medium-hover);
  }

  .danger:is(.outline):active {
    border: 1px solid var(--atp-button-danger-medium-pressed);
    background: var(--atp-danger-primary-weak-pressed);
    color: var(--atp-button-danger-medium-pressed);
  }

  .danger:is(.fill),
  .danger:is(.fill):is(.disabled, .loading):is(:hover, :focus-visible, :active) {
    color: var(--atp-button-inverse-medium-enabled);
    background-color: var(--atp-button-danger-medium-enabled);
  }

  .danger:is(.fill):hover,
  .danger:is(.fill):focus-visible {
    background-color: var(--atp-button-danger-medium-hover);
  }

  .danger:is(.fill):active {
    background-color: var(--atp-button-danger-medium-pressed);
  }
  /* stylelint-enable no-descending-specificity  */

  .danger.text {
    color: var(--atp-button-danger-medium-hover);
  }

  .large {
    padding-block: var(--atp-button-padding-block-large);
    padding-inline: var(--atp-button-padding-block-large);
    block-size: var(--atp-button-block-size-large);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-l);
    font-weight: var(--atp-font-weight-semibold);
    line-height: var(--atp-line-height-body-l);
  }

  .large.icon {
    inline-size: var(--atp-button-block-size-large);
  }

  .medium {
    padding: var(--atp-space-xs);
    block-size: var(--atp-space-l);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-s);
    font-weight: var(--atp-font-weight-semibold);
    line-height: var(--atp-line-height-body-s);
  }

  .medium.icon {
    inline-size: var(--atp-space-l);
  }

  .small {
    padding-block: var(--atp-space-xxs);
    padding-inline: var(--atp-space-xs);
    block-size: var(--atp-space-m);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-s);
    font-weight: var(--atp-font-weight-semibold);
    line-height: var(--atp-line-height-body-s);
  }

  .small.icon {
    inline-size: var(--atp-space-m);
  }

  .medium.text,
  .small.text,
  .large.text {
    padding-block: 0;
    padding-inline: 0;
    block-size: unset;
  }

  .large.text.text-block-padding {
    padding-block: var(--atp-button-padding-block-large);
    block-size: var(--atp-button-block-size-large);
  }

  .medium.text.text-block-padding {
    padding-block: var(--atp-space-xs);
    block-size: var(--atp-space-l);
  }

  .small.text.text-block-padding {
    padding-block: var(--atp-space-xxs);
    block-size: var(--atp-space-m);
  }

  .medium.text:not(.full-width),
  .small.text:not(.full-width),
  .large.text:not(.full-width) {
    inline-size: unset;
  }
`;
var lr = /* @__PURE__ */ ((t) => (t.DEFAULT = "", t.PRIMARY = "primary", t.SECONDARY = "secondary", t.ACCENT = "accent", t.SUCCESS = "success", t.WARNING = "warning", t.DANGER = "danger", t.WEAK = "weak", t.STRONG = "strong", t.INVERSE = "inverse", t.TERTIARY = "tertiary", t.DISABLED = "disabled", t.UTILITY = "utility", t))(lr || {}), gr = /* @__PURE__ */ ((t) => (t.LARGE = "large", t.MEDIUM = "medium", t.SMALL = "small", t))(gr || {}), pe = /* @__PURE__ */ ((t) => (t.LARGE = "large", t.MEDIUM = "medium", t.SMALL = "small", t))(pe || {}), o1 = /* @__PURE__ */ ((t) => (t.DEFAULT = "default", t.UTILITY_BLUE = "utility-blue", t.SLATE = "slate", t))(o1 || {}), Qe = /* @__PURE__ */ ((t) => (t.LEFT = "left", t.RIGHT = "right", t.TOP = "top", t.BOTTOM = "bottom", t))(Qe || {});
function l1(t, e) {
  return !t.composedPath().includes(e);
}
function Te(t) {
  return t || "id" + Date.now() + Math.random().toString().replace(".", "");
}
function E(t) {
  return Object.entries(t).filter(([, e]) => e).map(([e]) => e).join(" ");
}
function bi(t) {
  switch (t) {
    case pe.LARGE:
      return 16;
    case pe.MEDIUM:
      return 12;
    case pe.SMALL:
      return 12;
  }
}
const y = k`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`, dr = k`
  .spinner-wrapper {
    position: relative;
    block-size: fit-content;
    inline-size: fit-content;
  }

  /* stylelint-disable -- re-enable this once we no longer need -webkit-mask-image */
  .spinner {
    inline-size: var(--atp-space-m);
    block-size: var(--atp-space-m);
    border-radius: 50%;
    -webkit-mask-image: radial-gradient(
      circle at center,
      transparent 55%,
      black 56%
    ); /* TODO: legacy browser support for Safari <=15.3; remove when no longer necessary */
    mask-image: radial-gradient(circle at center, transparent 55%, black 56%);
    background: conic-gradient(
      from 180deg at 50% 50%,
      hsl(0 0% 100% / 100%) 0deg,
      hsl(0 0% 100% / 60%) 360deg
    );
    animation: spin 1s linear infinite;
  }
  /* stylelint-enable */

  .progress {
    position: absolute;
    color: var(--atp-content-inverse-medium-enabled);
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-xs);
    font-weight: var(--atp-font-weight-regular);
    line-height: var(--atp-line-height-body-xs);
  }

  .spinner-wrapper:has(.size-xxl) .progress {
    font-size: var(--atp-font-size-body-m);
    font-weight: var(--atp-font-weight-regular);
    line-height: var(--atp-line-height-body-m);
  }

  .spinner.waiting:is(.slate, .white, .red) {
    background: var(--atp-content-primary-weak-disabled);
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .spinner.size-s {
    block-size: var(--atp-space-s);
    inline-size: var(--atp-space-s);
  }

  .spinner.size-l {
    block-size: var(--atp-space-l);
    inline-size: var(--atp-space-l);
  }

  .spinner.size-xl {
    block-size: var(--atp-space-xl);
    inline-size: var(--atp-space-xl);
  }

  .spinner.size-xxl {
    block-size: var(--atp-space-xxl);
    inline-size: var(--atp-space-xxl);
  }

  .spinner.slate {
    background: conic-gradient(
      from 180deg at 50% 50%,
      hsl(209 20% 39% / 1) 0deg,
      hsl(209 20% 39% / 0.6) 360deg
    );
  }

  .spinner-wrapper:has(.slate) .progress {
    color: var(--atp-element-fill-primary-strong-enabled);
  }

  .spinner.red {
    background: conic-gradient(
      from 180deg at 50% 50%,
      hsl(348 68% 52% / 1) 0deg,
      hsl(348 68% 52% / 0.6) 360deg
    );
  }

  .spinner-wrapper:has(.red) .progress {
    color: var(--atp-danger-primary-strong-enabled);
  }

  .visually-hidden {
    border: 0;
    padding: 0;
    margin: 0;
    position: absolute !important;
    block-size: 1px;
    inline-size: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
`;
var Cr = Object.defineProperty, cr = Object.getOwnPropertyDescriptor, Pt = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? cr(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && Cr(e, A, a), a;
}, Ke = /* @__PURE__ */ ((t) => (t.SLATE = "slate", t.WHITE = "white", t.RED = "red", t))(Ke || {}), ct = /* @__PURE__ */ ((t) => (t.XXL = "xxl", t.XL = "xl", t.L = "l", t.M = "m", t.S = "s", t))(ct || {});
let Xe = class extends b {
  constructor() {
    super(...arguments), this.color = "slate", this.size = "m", this.isWaiting = !1;
  }
  render() {
    return g`
      <div class="spinner-wrapper">
        <div class="${this._getClasses()}"></div>
        <span class="visually-hidden">${this.progress === 100 ? "complete" : "loading"}</span>
        ${!this.isWaiting && this.progress && (this.size === "xl" || this.size === "xxl") ? g`<div class="progress">${this.progress}%</div>` : u}
      </div>
    `;
  }
  _getClasses() {
    return E({
      [this.color]: !0,
      spinner: !0,
      [`size-${this.size}`]: !0,
      waiting: this.isWaiting
    });
  }
};
Xe.styles = [dr];
Pt([
  l()
], Xe.prototype, "color", 2);
Pt([
  l()
], Xe.prototype, "size", 2);
Pt([
  l({ type: Number })
], Xe.prototype, "progress", 2);
Pt([
  l({ type: Boolean })
], Xe.prototype, "isWaiting", 2);
Xe = Pt([
  Q("atp-spinner")
], Xe);
var pr = Object.defineProperty, ur = Object.getOwnPropertyDescriptor, x = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? ur(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && pr(e, A, a), a;
}, ue = /* @__PURE__ */ ((t) => (t.FILL = "fill", t.OUTLINE = "outline", t.TEXT = "text", t))(ue || {}), zt = /* @__PURE__ */ ((t) => (t.LEFT = "left", t.RIGHT = "right", t))(zt || {}), sA = /* @__PURE__ */ ((t) => (t.LARGE = "large", t.MEDIUM = "medium", t.SMALL = "small", t))(sA || {});
let L = class extends b {
  constructor() {
    super(), this.type = "button", this.name = "", this.value = "", this.label = "", this.appearance = "fill", this.size = "medium", this.isDestructive = !1, this.disabled = !1, this.iconPosition = "right", this.tabNumber = 0, this.isLoading = !1, this.focusInverse = !1, this.dataTrackingId = null, this.iconClickableLight = !1, this.fullWidth = !1, this.hasTextBlockPadding = !1, this._internals = this.attachInternals();
  }
  static get formAssociated() {
    return !0;
  }
  render() {
    return g`
      <button
        type="button"
        ?disabled=${this.disabled || this.isLoading}
        tabindex=${this.tabNumber}
        class=${this._getClasses()}
        @click=${this._onClick}
        @blur=${this._onBlur}
        @focus=${this._onFocus}
        aria-label="${this.iconConfig?.label ?? ""}"
        data-tracking-id=${Z(this.dataTrackingId)}
      >
        ${this.iconConfig ? g`<atp-icon
              aria-hidden=${!0}
              .color="${this.iconConfig.color}"
              .icon="${this.iconConfig.icon}"
              .height="${this.iconConfig.height}"
            ></atp-icon>` : ""}${this.label}
        ${this.secondaryIconConfig ? g`<atp-icon
              aria-hidden=${!0}
              .color="${this.secondaryIconConfig.color}"
              .icon="${this.secondaryIconConfig.icon}"
              .height="${this.secondaryIconConfig.height}"
            ></atp-icon>` : ""}
        <slot></slot>
        ${this.isLoading ? g`<atp-spinner
              class="spinner"
              .size="${this.size === "large" ? ct.M : ct.S}"
              .color="${this._getSpinnerColor()}"
            ></atp-spinner>` : ""}
      </button>
    `;
  }
  _onClick() {
    if (this.disabled || this.isLoading) return;
    const t = this._internals.form;
    t && (this.type === "submit" ? (this.name && this._internals.setFormValue(this.value), t.requestSubmit()) : this.type === "reset" && t.reset()), this.dispatchEvent(new CustomEvent("clickEventOutput", { bubbles: !0, composed: !0 }));
  }
  /**
   * the form this button is associated with, or null if not in a form
   */
  get form() {
    return this._internals.form;
  }
  formDisabledCallback(t) {
    this.disabled = t;
  }
  _onFocus() {
    this.dispatchEvent(new CustomEvent("focusEventOutput", { bubbles: !0, composed: !0 }));
  }
  _onBlur() {
    this.dispatchEvent(new CustomEvent("blurEventOutput", { bubbles: !0, composed: !0 }));
  }
  focusButton() {
    this._buttonElement?.focus();
  }
  blurButton() {
    this._buttonElement?.blur();
  }
  _getSpinnerColor() {
    return this.appearance === "text" && !this.isDestructive ? Ke.SLATE : this.isDestructive && this.appearance !== "fill" ? Ke.RED : this.appearance === "outline" && !this.isDestructive ? Ke.SLATE : Ke.WHITE;
  }
  _getClasses() {
    return E({
      button: !0,
      loading: this.isLoading,
      [`${this.appearance}`]: !0,
      [`${this.size}`]: !0,
      danger: this.isDestructive,
      disabled: this.disabled,
      reversed: this.iconConfig && this.iconPosition === "right",
      icon: this.iconConfig && !this.label,
      light: this.iconClickableLight,
      "focus-inverse": this.focusInverse,
      "full-width": this.fullWidth,
      "text-block-padding": this.appearance === "text" && this.hasTextBlockPadding
    });
  }
};
L.styles = [y, or];
x([
  l()
], L.prototype, "type", 2);
x([
  l({ type: String })
], L.prototype, "name", 2);
x([
  l({ type: String })
], L.prototype, "value", 2);
x([
  l()
], L.prototype, "label", 2);
x([
  l()
], L.prototype, "appearance", 2);
x([
  l()
], L.prototype, "size", 2);
x([
  l({ type: Boolean })
], L.prototype, "isDestructive", 2);
x([
  l({ type: Boolean })
], L.prototype, "disabled", 2);
x([
  l()
], L.prototype, "iconPosition", 2);
x([
  l({ type: Object })
], L.prototype, "iconConfig", 2);
x([
  l({ type: Object })
], L.prototype, "secondaryIconConfig", 2);
x([
  l({ type: Number })
], L.prototype, "tabNumber", 2);
x([
  l({ type: Boolean })
], L.prototype, "isLoading", 2);
x([
  l({ type: Boolean })
], L.prototype, "focusInverse", 2);
x([
  l({ type: String })
], L.prototype, "dataTrackingId", 2);
x([
  l({ type: Boolean })
], L.prototype, "iconClickableLight", 2);
x([
  l({ type: Boolean })
], L.prototype, "fullWidth", 2);
x([
  l({ type: Boolean })
], L.prototype, "hasTextBlockPadding", 2);
x([
  Vt("button")
], L.prototype, "_buttonElement", 2);
L = x([
  Q("atp-button")
], L);
const hr = k`
  :host {
    flex-shrink: 0;
  }

  .button {
    --atp-icon-fill: currentcolor;

    all: unset;
    box-sizing: border-box;
    padding-block: var(--atp-space-xxs);
    padding-inline: var(--atp-space-xs);
    display: flex;
    block-size: var(--atp-space-l);
    gap: var(--atp-space-xxs);
    align-items: center;
    color: var(--atp-button-primary-medium-enabled);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-s);
    font-weight: var(--atp-font-weight-semibold);
    line-height: var(--atp-line-height-body-s);
    white-space: nowrap;
    background-color: var(--atp-button-translucent-light-medium-enabled);
    border-radius: var(--atp-border-radius-m);
    cursor: pointer;
    transition: all var(--atp-transition-standard);
  }

  .button:focus-visible {
    outline: var(--atp-focus-width) solid currentcolor;
    outline-offset: var(--atp-focus-outline-offset);
  }

  .button.focus-inverse:focus-visible {
    outline: var(--atp-focus-width) solid var(--atp-focus-color-inverse);
  }

  .button.reversed {
    flex-direction: row-reverse;
  }

  .button.large {
    padding: var(--atp-space-xs);
    font-size: var(--atp-font-size-body-l);
    font-weight: var(--atp-font-weight-semibold);
    line-height: var(--atp-line-height-body-l);
    block-size: var(--atp-button-block-size-large);
  }

  .button.small {
    block-size: var(--atp-space-m);
  }

  .button:hover,
  .button:focus-visible {
    background-color: var(--atp-button-translucent-light-medium-hover);
  }

  .button:active {
    background-color: var(--atp-button-translucent-light-medium-pressed);
  }

  .button.text:is(.medium, .large, .small) {
    padding: 0;
    background-color: transparent;
  }

  .button.text:is(.medium, .large, .small):is(:hover, :focus-visible, :active) {
    text-decoration: underline;
  }

  .button.text:is(.medium, .large, .small):focus-visible,
  .button.text:is(.medium, .large, .small):hover {
    color: var(--atp-button-primary-medium-hover);
  }

  .button.text:is(.medium, .large, .small):active {
    color: var(--atp-button-primary-medium-pressed);
  }

  .button.light.text:is(.medium, .large, .small),
  .button.light.text:is(.medium, .large, .small):is(:hover, :focus-visible, :active) {
    color: var(--atp-button-inverse-medium-enabled);
  }

  .button.danger.text:is(.medium, .large, .small) {
    color: var(--atp-button-danger-medium-enabled);
  }

  .button.danger.text:is(.medium, .large, .small):focus-visible,
  .button.danger.text:is(.medium, .large, .small):hover {
    color: var(--atp-button-danger-medium-hover);
  }

  .button.danger.text:is(.medium, .large, .small):active {
    color: var(--atp-button-danger-medium-pressed);
  }
`;
var Ir = Object.defineProperty, mr = Object.getOwnPropertyDescriptor, be = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? mr(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && Ir(e, A, a), a;
};
let te = class extends b {
  constructor() {
    super(...arguments), this.label = "", this.appearance = ue.FILL, this.size = sA.MEDIUM, this.iconPosition = zt.RIGHT, this.isLoading = !1, this.lightLoader = !1, this.textButtonColor = "dark", this.focusInverse = !1;
  }
  render() {
    return g`
      <button class=${this._getClasses()} @click=${this._onClick}>
        ${this.iconConfig ? g`<atp-icon
              .color="${this.iconConfig.color}"
              .icon="${this.iconConfig.icon}"
              .height="${this.iconConfig.height}"
            ></atp-icon>` : ""}${this.label}
        ${this.isLoading ? g`<atp-spinner
              class="spinner"
              .size="${this.size === sA.LARGE ? ct.M : ct.S}"
              .color="${this.lightLoader ? Ke.WHITE : Ke.SLATE}"
            ></atp-spinner>` : ""}
      </button>
    `;
  }
  _onClick() {
    this.dispatchEvent(new CustomEvent("clickEventOutput", { bubbles: !0, composed: !0 }));
  }
  _getClasses() {
    return E({
      button: !0,
      loading: this.isLoading,
      [`${this.appearance}`]: !0,
      [`${this.size}`]: !0,
      reversed: this.iconPosition === zt.RIGHT,
      [`${this.textButtonColor}`]: !0,
      "focus-inverse": this.focusInverse
    });
  }
};
te.styles = [y, hr];
be([
  l()
], te.prototype, "label", 2);
be([
  l()
], te.prototype, "appearance", 2);
be([
  l()
], te.prototype, "size", 2);
be([
  l()
], te.prototype, "iconPosition", 2);
be([
  l({ type: Object })
], te.prototype, "iconConfig", 2);
be([
  l({ type: Boolean })
], te.prototype, "isLoading", 2);
be([
  l({ type: Boolean })
], te.prototype, "lightLoader", 2);
be([
  l({ type: String })
], te.prototype, "textButtonColor", 2);
be([
  l({ type: Boolean })
], te.prototype, "focusInverse", 2);
te = be([
  Q("atp-alert-button")
], te);
var Br = Object.defineProperty, br = Object.getOwnPropertyDescriptor, $e = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? br(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && Br(e, A, a), a;
}, Er = /* @__PURE__ */ ((t) => (t.DANGER = "danger", t.WARNING = "warning", t.INFO = "info", t))(Er || {}), Qr = /* @__PURE__ */ ((t) => (t.FULL = "full", t.PAGE = "page", t.EXPANDABLE = "expandable", t.PAGE_SMALL = "page-small", t.TOAST = "toast", t))(Qr || {}), fr = /* @__PURE__ */ ((t) => (t.NONE = "none", t.ALERT = "alert", t.STATUS = "status", t))(fr || {});
let ve = class extends b {
  constructor() {
    super(...arguments), this.label = "", this.appearance = "full", this.color = "info", this.hideClose = !1, this.role = "none", this._showContent = !0;
  }
  render() {
    return g`
      <div class="outer-wrapper">
        <div class=${this._getClasses()} role=${Z(this._getRole())}>
          ${this.appearance === "expandable" ? g` <atp-button
                class="toggle ${this._showContent ? "" : "rotate"}"
                appearance="text"
                .iconConfig=${{
      icon: "chevron-down",
      height: 16,
      color: this._getColor(),
      label: this._showContent ? "Collapse alert" : "Expand alert"
    }}
                .focusInverse=${this._useFocusInverse()}
                @clickEventOutput="${this._toggleContent}"
              ></atp-button>` : u}
          ${this.appearance === "full" ? g`<span></span>` : ""}
          ${this.icon && this.appearance !== "expandable" && this.appearance !== "full" ? g`<atp-icon
                .height=${16}
                .color=${this._getColor()}
                .icon=${this.icon}
              ></atp-icon>` : ""}
          <div class="label-button-container">
            <div class="label">${this.label}</div>
            <div class="buttons">
              <slot name="button"></slot>
            </div>
          </div>
          ${this.hideClose ? "" : g`<atp-button
                @clickEventOutput=${this._closeHandler}
                appearance="text"
                .iconConfig=${{
      icon: "x",
      height: 16,
      color: this._getColor(),
      label: "Close alert"
    }}
                .focusInverse=${this._useFocusInverse()}
              ></atp-button>`}
          ${this.hideClose && this.appearance === "full" ? g`<span></span>` : ""}
        </div>
        ${this.appearance === "expandable" && this._showContent ? g`<div class="content-wrapper">
              <slot name="content"></slot>
            </div>` : u}
      </div>
    `;
  }
  _getClasses() {
    return E({
      alert: !0,
      [`${this.appearance}`]: !0,
      [`${this.color}`]: !0,
      open: this._showContent
    });
  }
  _getRole() {
    return this.role !== "none" ? this.role : void 0;
  }
  _useFocusInverse() {
    return (this.appearance === "expandable" || this.appearance === "full" || this.appearance === "toast") && this.color === "info";
  }
  _toggleContent() {
    this._showContent = !this._showContent, this.requestUpdate();
  }
  _closeHandler() {
    this.dispatchEvent(new CustomEvent("closeEventOutput", { bubbles: !0, composed: !0 }));
  }
  _getColor() {
    return this.color === "warning" ? "var(--atp-content-primary-medium-enabled)" : this.appearance === "page-small" && this.color === "danger" ? "var(--atp-content-primary-strong-enabled)" : this.appearance === "page" || this.appearance === "page-small" ? this.color === "danger" ? "var(--atp-danger-primary-strong-enabled)" : "var(--atp-content-primary-medium-enabled)" : "var(--atp-content-inverse-medium-enabled)";
  }
};
ve.styles = [y, ar];
$e([
  l()
], ve.prototype, "icon", 2);
$e([
  l()
], ve.prototype, "label", 2);
$e([
  l()
], ve.prototype, "appearance", 2);
$e([
  l()
], ve.prototype, "color", 2);
$e([
  l({ type: Boolean })
], ve.prototype, "hideClose", 2);
$e([
  l()
], ve.prototype, "role", 2);
ve = $e([
  Q("atp-alert")
], ve);
const vr = k`
  :host {
    display: block;
  }

  .anchor-bar {
    background: var(--atp-element-fill-inverse-weak-enabled);
  }
`;
var kr = Object.defineProperty, yr = Object.getOwnPropertyDescriptor, BA = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? yr(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && kr(e, A, a), a;
};
let pt = class extends b {
  constructor() {
    super(...arguments), this.scrollableViewportId = "", this.parentBarId = "", this.scrollOffsetTop = 0, this._anchorBarLinks = null, this._activeIndex = -1, this._sectionIds = [], this._intersectionObserver = null, this._observedEls = [], this._lockedIndex = null, this._isProgrammaticScroll = !1, this._scrollIdleTimer = null, this._lockEpsilonPx = 12, this._idleMs = 150, this._overshootPx = 1, this._onScroll = () => {
      if (this._scrollIdleTimer != null && (clearTimeout(this._scrollIdleTimer), this._scrollIdleTimer = null), this._isProgrammaticScroll) {
        this._scrollIdleTimer = window.setTimeout(() => {
          this._isProgrammaticScroll = !1, this._updateActiveSectionFromPositions();
        }, this._idleMs);
        return;
      }
      this._updateActiveSectionFromPositions();
    }, this._onHostClick = (t) => {
      const e = t.target?.closest?.("a");
      if (!e) return;
      const A = e.getAttribute("href") || "";
      if (!A.startsWith("#")) return;
      t.preventDefault(), t.stopImmediatePropagation?.(), t.stopPropagation();
      const i = A.slice(1), a = document.getElementById(i);
      if (!a) return;
      a.hasAttribute("tabindex") || (a.setAttribute("tabindex", "-1"), a.addEventListener("blur", () => a.removeAttribute("tabindex"), { once: !0 })), a.focus({ preventScroll: !0 });
      const r = this._sectionIds.indexOf(i);
      r >= 0 && (this._lockedIndex = r, this._selectLinkByIndex(r));
      const n = this._computeTargetScrollTop(a);
      this._isProgrammaticScroll = !0, requestAnimationFrame(() => this._scrollTo(n));
    }, this._setupObserverAndSections = () => {
      this._intersectionObserver && (this._observedEls.forEach((t) => this._intersectionObserver.unobserve(t)), this._intersectionObserver.disconnect()), this._intersectionObserver = null, this._observedEls = [], this._anchorBarLinks = this.querySelectorAll(
        '.atp-anchor-bar-list a, a[href^="#"]'
      ), this._sectionIds = [], this._anchorBarLinks.forEach((t) => {
        const e = (t.getAttribute("href") || "").replace("#", "");
        this._sectionIds.push(e);
      }), this._intersectionObserver = new IntersectionObserver(this._handleIntersection, {
        root: this._getContainer(),
        rootMargin: `-${this.scrollOffsetTop}px 0px 0px 0px`,
        threshold: [0, 0.01, 0.25, 0.5, 0.75, 1]
      }), this._observedEls = [], this._sectionIds.forEach((t) => {
        if (!t) return;
        const e = document.getElementById(t);
        e && (this._intersectionObserver.observe(e), this._observedEls.push(e));
      }), this._updateActiveSectionFromPositions();
    }, this._handleIntersection = (t) => {
      if (this._isProgrammaticScroll) {
        this._lockedIndex != null && this._activeIndex !== this._lockedIndex && this._selectLinkByIndex(this._lockedIndex);
        return;
      }
      this._updateActiveSectionFromPositions();
    };
  }
  // scroll past the line by 1px
  _getContainer() {
    return document.getElementById(this.scrollableViewportId);
  }
  /** Gets top activation boundry, it use this to compare to section positions to determine which is active  */
  _getActivationLineTop() {
    return this._getContainer().getBoundingClientRect().top + this.scrollOffsetTop;
  }
  _scrollTo(t) {
    this._getContainer().scrollTo({ top: t, behavior: "smooth" });
  }
  /** Compute target scrollTop for a given section, for either window or element root. */
  _computeTargetScrollTop(t) {
    const e = this._getContainer().getBoundingClientRect(), A = t.getBoundingClientRect();
    return this._getContainer().scrollTop + (A.top - e.top) - this.scrollOffsetTop - this._overshootPx;
  }
  _attachScrollListener() {
    this._getContainer().addEventListener("scroll", this._onScroll, { passive: !0 });
  }
  _detachScrollListener() {
    this._getContainer().removeEventListener("scroll", this._onScroll), this._scrollIdleTimer != null && (clearTimeout(this._scrollIdleTimer), this._scrollIdleTimer = null);
  }
  /** set active link */
  _selectLinkByIndex(t) {
    if (!this._anchorBarLinks || t < 0 || t >= this._anchorBarLinks.length) return;
    const e = this._anchorBarLinks[t];
    this.querySelectorAll("a[aria-current]").forEach((A) => A.removeAttribute("aria-current")), e.setAttribute("aria-current", "location"), this._activeIndex = t;
  }
  /** Logic for setting the active section  */
  _updateActiveSectionFromPositions() {
    if (this._lockedIndex != null) {
      const n = this._sectionIds[this._lockedIndex], s = n ? document.getElementById(n) : null;
      if (s) {
        const o = s.getBoundingClientRect().top - this._getActivationLineTop(), d = o > 0, c = o <= 0 && o > -this._lockEpsilonPx;
        if (d || c) {
          this._activeIndex !== this._lockedIndex && this._selectLinkByIndex(this._lockedIndex);
          return;
        }
      }
      this._lockedIndex = null;
    }
    if (!this._sectionIds.length || !this._anchorBarLinks?.length) return;
    const t = this._getActivationLineTop();
    let e = -1, A = -1 / 0, i = -1, a = 1 / 0;
    for (let n = 0; n < this._sectionIds.length; n++) {
      const s = this._sectionIds[n], o = s ? document.getElementById(s) : null;
      if (!o) continue;
      const d = o.getBoundingClientRect().top - t;
      d <= 0 && d > A && (A = d, e = n), d > 0 && d < a && (a = d, i = n);
    }
    const r = e >= 0 ? e : i >= 0 ? i : -1;
    r >= 0 && r !== this._activeIndex && this._selectLinkByIndex(r);
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("click", this._onHostClick, { capture: !0, passive: !1 }), this._attachScrollListener(), this._sentinel = document.createElement("div"), this._sentinel.setAttribute("aria-hidden", "true"), this._sentinel.style.cssText = `
      height:1px; pointer-events:none; inline-size:100%; block-size:1px; visibility:hidden;
    `;
    const t = document.getElementById(this.parentBarId);
    t ? t?.before(this._sentinel) : this.parentElement?.insertBefore(this._sentinel, this), this._rootEl = this._getContainer(), this._io = new IntersectionObserver(
      ([e]) => {
        const A = e.intersectionRatio === 0;
        this.classList.toggle("at-top", A);
      },
      {
        root: this._rootEl,
        threshold: [0, 1]
      }
    ), this._io.observe(this._sentinel);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("click", this._onHostClick, { capture: !0 }), this._detachScrollListener(), this._intersectionObserver && (this._observedEls.forEach((t) => this._intersectionObserver.unobserve(t)), this._intersectionObserver.disconnect()), this._intersectionObserver = null, this._observedEls = [], this._lockedIndex = null, this._scrollIdleTimer != null && (clearTimeout(this._scrollIdleTimer), this._scrollIdleTimer = null), this._io?.disconnect(), this._sentinel?.parentNode && this._sentinel.parentNode.removeChild(this._sentinel), this._sentinel = void 0;
  }
  render() {
    return g`
      <nav aria-label="Sections on this page" class="anchor-bar">
        <slot @slotchange=${this._setupObserverAndSections}></slot>
      </nav>
    `;
  }
};
pt.styles = [y, vr];
BA([
  l()
], pt.prototype, "scrollableViewportId", 2);
BA([
  l()
], pt.prototype, "parentBarId", 2);
BA([
  l({ type: Number })
], pt.prototype, "scrollOffsetTop", 2);
pt = BA([
  Q("atp-anchor-bar")
], pt);
const wr = k`
  :host {
    --atp-breadcrumb-inline-padding: var(--atp-space-xs);
  }

  .breadcrumbs {
    margin-inline-start: calc(-1 * var(--atp-breadcrumb-inline-padding));
    font-size: var(--atp-font-size-body-s);
    line-height: var(--atp-line-height-body-s);
  }

  .breadcrumbs.large {
    font-size: var(--atp-font-size-heading-s);
    line-height: var(--atp-line-height-heading-s);
  }

  .breadcrumbs ul {
    display: inline-flex;
    flex-wrap: wrap;
    gap: var(--atp-breadcrumb-inline-padding);
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .breadcrumbs li {
    display: inline-flex;
    flex-wrap: nowrap;
    align-items: baseline;
  }

  /* 
    for a11y purposes, we can't use a slash character inside the content property, 
    since it will be read out by assistive technologies. 
    Instead, draw a fake slash using CSS.
    This is the W3C-recommended pattern: 
    https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/examples/breadcrumb/
  */
  .breadcrumbs li::after {
    content: '';
    display: inline-block;
    block-size: 0.8em;
    inline-size: 1px;
    padding-inline-start: var(--atp-breadcrumb-inline-padding);
    border-inline-end: 1px solid currentcolor;
    rotate: 15deg;
  }

  .breadcrumbs li:last-of-type::after {
    display: none;
  }

  .breadcrumbs a,
  .breadcrumbs .current-page {
    display: inline-block;
    padding-block: var(--atp-space-xxxs);
    padding-inline: var(--atp-space-xs);
    text-decoration: none;
    font-weight: var(--atp-font-weight-regular);
    color: var(--atp-content-primary-enabled-weak);
    white-space: nowrap;
    border-radius: var(--atp-border-radius-m);
    transition: all var(--atp-transition-standard);
  }

  .breadcrumbs a:focus-visible {
    outline: var(--atp-focus-width) solid var(--atp-focus-color);
    outline-offset: var(--atp-focus-outline-offset);
  }

  .breadcrumbs .current-page {
    font-weight: var(--atp-font-weight-medium);
    color: var(--atp-content-primary-enabled-medium);
  }

  .breadcrumbs a:hover {
    background: var(--atp-element-fill-blue-weak-hover);
  }

  .breadcrumbs a:active {
    background: var(--atp-element-fill-blue-weak-pressed);
  }
`;
var Sr = Object.defineProperty, Mr = Object.getOwnPropertyDescriptor, g1 = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? Mr(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && Sr(e, A, a), a;
}, Jr = /* @__PURE__ */ ((t) => (t.LARGE = "large", t.SMALL = "small", t))(Jr || {});
let Nt = class extends b {
  constructor() {
    super(...arguments), this.itemsList = [], this.size = "small";
  }
  _onClick(t) {
    t.preventDefault(), this.dispatchEvent(
      new CustomEvent("clickEventOutput", {
        bubbles: !0,
        composed: !0,
        detail: t.target.id
      })
    );
  }
  render() {
    return g`
      <nav class="${this._getClasses()}" aria-label="Breadcrumb">
        <ul>
          ${this.itemsList.map(
      (t, e) => g`
              <li aria-current="${e === this.itemsList.length - 1 ? "page" : u}">
                ${e == this.itemsList.length - 1 ? g`<span class="current-page" id=${Te(t.id)}>${t.name}</span>` : g`<a
                      href="${t.href ? t.href : "#"}"
                      id=${Te(t.id)}
                      @click=${t.emitEvent ? this._onClick : u}
                    >
                      ${t.name}</a
                    >`}
              </li>
            `
    )}
        </ul>
      </nav>
    `;
  }
  _getClasses() {
    return E({
      breadcrumbs: !0,
      large: this.size === "large"
      /* LARGE */
    });
  }
};
Nt.styles = [y, wr];
g1([
  l({ type: Array })
], Nt.prototype, "itemsList", 2);
g1([
  l()
], Nt.prototype, "size", 2);
Nt = g1([
  Q("atp-breadcrumbs")
], Nt);
const d1 = k`
  :host {
    --atp-card-gutter-vertical: var(--atp-space-s);
    --atp-card-gutter-horizontal-start: var(--atp-space-s);
    --atp-card-gutter-horizontal-end: var(--atp-space-s);
    --atp-card-header-font-size: var(--atp-font-size-body-l);
    --atp-card-header-line-height: var(--atp-font-size-body-l);
    --atp-card-border-width: 1px;
    --atp-card-border-radius: var(--atp-border-radius-m);
    --atp-card-border-decoration-width: 8px;
    --atp-card-border-decoration-color: var(--atp-slate-600);

    display: block;
  }

  .card {
    position: relative;
    display: block;
    block-size: 100%;
    border: var(--atp-card-border-width) solid var(--atp-element-border-primary-strong-enabled);
    border-radius: var(--atp-card-border-radius);
  }

  .card-header,
  .card-footer {
    position: relative;
    z-index: var(--atp-z-index-base);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--atp-space-xs);
  }

  .card-header,
  .card-footer,
  .card-content-wrapper {
    padding-block: var(--atp-card-gutter-vertical) var(--atp-card-gutter-vertical);
    padding-inline: var(--atp-card-gutter-horizontal-start) var(--atp-card-gutter-horizontal-end);
  }

  /* 
   For a11y, users can/should use the appropriate h* tag for the Card's heading, but we want the 
   typography and layout to stay consistent regardless of which tag (or no tag) gets used.
   We also want the same size for the footer content.
  */
  .card-header,
  .card-header ::slotted(:is(h1, h2, h3, h4, h5, h6, p)),
  .card-footer,
  .card-footer ::slotted(:is(h1, h2, h3, h4, h5, h6, p, *)) {
    margin: 0;
    font-size: var(--atp-card-header-font-size);
    line-height: var(--atp-card-header-line-height);
  }

  .card-header ::slotted(:is(h1, h2, h3, h4, h5, h6, p)) {
    font-weight: var(--atp-font-weight-bold);
  }

  .card-header {
    font-weight: bold;
  }

  .header-fill-light .card-header-wrapper {
    background: var(--atp-element-fill-primary-weak-enabled);
  }

  /* we want to maximize the width for the header/footer's actual text, but not the buttons and icons */
  .card-header ::slotted(*),
  .card-footer ::slotted(*) {
    flex-grow: 9999;
  }

  .card-header ::slotted(atp-icon),
  .card-header ::slotted(button),
  .card-header ::slotted(atp-button),
  .card-footer ::slotted(atp-icon),
  .card-footer ::slotted(button),
  .card-footer ::slotted(atp-button) {
    flex-grow: 1;
  }

  /* dividers */
  .divider-header .card-header-wrapper {
    border-block-end: 1px solid var(--atp-element-border-primary-medium-enabled);
  }

  .divider-footer .card-footer-wrapper {
    border-block-start: 1px solid var(--atp-element-border-primary-medium-enabled);
  }

  /* compact density */
  .card.density-compact {
    --atp-card-gutter-vertical: var(--atp-space-xs);
    --atp-card-gutter-horizontal-start: var(--atp-space-xs);
    --atp-card-gutter-horizontal-end: var(--atp-space-xs);
  }

  .card-header.density-compact,
  .card-footer.density-compact {
    --atp-card-header-font-size: var(--atp-font-size-body-s);
    --atp-card-gutter-vertical: var(--atp-space-xs);
    --atp-card-gutter-horizontal-start: var(--atp-space-xs);
    --atp-card-gutter-horizontal-end: var(--atp-space-xs);
  }

  /* if the card is compact and had a border, add some extra space */
  .card.density-compact.border-decoration-start {
    padding-inline-start: var(--atp-space-xs);
  }

  /* wide density */
  .card.density-wide {
    --atp-card-gutter-vertical: var(--atp-space-m);
    --atp-card-gutter-horizontal-start: var(--atp-space-m);
    --atp-card-gutter-horizontal-end: var(--atp-space-m);
  }

  .card-header.density-wide,
  .card-footer.density-wide {
    --atp-card-gutter-vertical: var(--atp-space-s);
    --atp-card-gutter-horizontal-start: var(--atp-space-m);
    --atp-card-gutter-horizontal-end: var(--atp-space-m);
  }

  /* colors */
  .header-fill-light-slate .card-header-wrapper {
    background: var(--atp-element-fill-primary-weak-enabled);
  }

  .color-red,
  .header-fill-red .card-header-wrapper {
    background: var(--atp-element-fill-red-weak-enabled);
  }

  .color-red.border-decoration-start {
    --atp-card-border-decoration-color: var(
      --atp-danger-primary-strong-enabled
    ); /* TODO: update to --atp-element-fill-red-strong-enabled, once it's available */
  }

  .color-orange,
  .header-fill-orange .card-header-wrapper {
    background: var(--atp-element-fill-orange-weak-enabled);
  }

  .color-orange.border-decoration-start {
    --atp-card-border-decoration-color: var(--atp-element-fill-orange-strong-enabled);
  }

  .color-green,
  .header-fill-green .card-header-wrapper {
    background: var(--atp-element-fill-green-weak-enabled);
  }

  .color-green.border-decoration-start {
    --atp-card-border-decoration-color: var(--atp-element-fill-green-strong-enabled);
  }

  .color-blue,
  .header-fill-blue .card-header-wrapper {
    background: var(--atp-element-fill-blue-weak-enabled);
  }

  .color-blue.border-decoration-start {
    --atp-card-border-decoration-color: var(--atp-element-fill-blue-strong-enabled);
  }

  .color-purple,
  .header-fill-purple .card-header-wrapper {
    background: var(--atp-element-fill-purple-weak-enabled);
  }

  .color-purple.border-decoration-start {
    --atp-card-border-decoration-color: var(--atp-element-fill-purple-strong-enabled);
  }

  /* 
   * the "border" decoration is done as a positioned pseudo-element, so that it covers any divider
   * in the header and footer 
  */
  .border-decoration-start::before {
    content: '';
    display: block;
    position: absolute;
    z-index: var(--atp-z-index-over-base);

    inset-block: calc(
      var(--atp-card-border-width) * -1
    ); /* so the decoration covers the card's border */

    inset-inline-start: calc(
      var(--atp-card-border-width) * -1
    ); /* so the decoration covers the card's border */

    inline-size: var(--atp-card-border-decoration-width);
    background: var(--atp-card-border-decoration-color);
    border-start-start-radius: var(--atp-card-border-radius);
    border-start-end-radius: 0;
    border-end-start-radius: var(--atp-card-border-radius);
    border-end-end-radius: 0;
  }

  /* header corners */
  /* stylelint-disable no-descending-specificity -- so we can keep features grouped together */
  .card-header-wrapper {
    border-start-start-radius: var(--atp-card-border-radius);
    border-start-end-radius: var(--atp-card-border-radius);
  }

  .card.collapsible:not([open]) .card-header-wrapper {
    border-end-start-radius: var(--atp-card-border-radius);
    border-end-end-radius: var(--atp-card-border-radius);
  }

  /* collapsible */
  .card.collapsible summary {
    position: relative;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    inline-size: 100%;
    cursor: pointer;
  }

  .card-collapsible-header-icon {
    flex-grow: 1;
    display: flex;
    align-items: center;
    margin-inline: var(--atp-card-gutter-horizontal-start)
      calc(var(--atp-card-gutter-horizontal-end) * -1 + var(--atp-space-xs));
    rotate: 0deg;
    transition: all var(--atp-transition-standard);
  }

  .card.collapsible[open] .card-collapsible-header-icon {
    rotate: 90deg;
    transition: all var(--atp-transition-standard);
  }

  .card.collapsible:not([open]) .card-header-wrapper,
  .card.collapsible:not([open]) .card-footer-wrapper {
    border-width: 0;
    transition-delay: 300ms;
  }

  .card-collapsible-header-content {
    flex-grow: 9999;
  }

  .card.collapsible[animate] {
    overflow: hidden;
  }

  /* 
    animate the opening/closing. 

    disabling stylelint because while this uses properties without baseline support,
    it also gracefully degrades.
   */
  /* stylelint-disable */
  .card.collapsible::details-content {
    interpolate-size: allow-keywords;
  }

  .card.collapsible::details-content {
    block-size: 0;
    overflow: hidden;
    transition: all;
    transition-duration: 300ms;
    transition-behavior: allow-discrete;
  }

  .card.collapsible[open]::details-content {
    block-size: auto;
    overflow: visible;
    content-visibility: visible;
  }
  /* stylelint-enable */

  /* full bleed */
  .full-bleed .card-content-wrapper {
    padding: 0;
  }
`;
var Lr = Object.defineProperty, Dr = Object.getOwnPropertyDescriptor, G = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? Dr(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && Lr(e, A, a), a;
}, xr = /* @__PURE__ */ ((t) => (t.DEFAULT = "default", t.RED = "red", t.ORANGE = "orange", t.GREEN = "green", t.BLUE = "blue", t.PURPLE = "purple", t))(xr || {}), Tr = /* @__PURE__ */ ((t) => (t.DEFAULT = "default", t.RED = "red", t.ORANGE = "orange", t.GREEN = "green", t.BLUE = "blue", t.PURPLE = "purple", t.LIGHT_SLATE = "light-slate", t))(Tr || {}), Or = /* @__PURE__ */ ((t) => (t.DEFAULT = "default", t.COMPACT = "compact", t.WIDE = "wide", t))(Or || {}), Hr = /* @__PURE__ */ ((t) => (t.DEFAULT = "default", t.START = "start", t))(Hr || {}), Zr = /* @__PURE__ */ ((t) => (t.DEFAULT = "default", t.HEADER = "header", t.FOOTER = "footer", t.BOTH = "both", t))(Zr || {});
let Ae = class extends b {
  constructor() {
    super(...arguments), this.color = "default", this.density = "default", this.borderDecoration = "default", this.divider = "default", this.collapsible = !1, this.open = !1, this.headerFill = "default", this.fullBleed = !1, this.isAnimating = !1;
  }
  render() {
    return this.collapsible ? g`
          <details
            class=${this._getStyleClasses()}
            ?animate=${this.isAnimating}
            @transitionend=${() => this.isAnimating = !1}
            open=${this.open ? "true" : u}
            @toggle=${this._onDetailsToggle}
          >
            <summary class="card-header-wrapper">
              <div class="card-collapsible-header-icon">
                <atp-icon icon="chevron-right" height="16"></atp-icon>
              </div>
              <div class="card-collapsible-header-content">
                <slot name="header"></slot>
              </div>
            </summary>
            <div class="card-content-wrapper">
              <slot></slot>
            </div>
            <div class="card-footer-wrapper">
              <slot name="footer"></slot>
            </div>
          </details>
        ` : g` <div class=${this._getStyleClasses()}>
          <div class="card-header-wrapper">
            <slot name="header"></slot>
          </div>
          <div class="card-content-wrapper">
            <slot></slot>
          </div>
          <div class="card-footer-wrapper">
            <slot name="footer"></slot>
          </div>
        </div>`;
  }
  _getStyleClasses() {
    return E({
      card: !0,
      collapsible: this.collapsible,
      [`header-fill-${this.headerFill}`]: this.headerFill !== "default",
      "divider-header": this.divider === "header" || this.divider === "both",
      "divider-footer": this.divider === "footer" || this.divider === "both",
      [`density-${this.density}`]: this.density !== "default",
      "full-bleed": this.fullBleed,
      [`color-${this.color}`]: this.color !== "default",
      "border-decoration-start": this.borderDecoration !== "default" && this.headerFill === "default" && !this.collapsible
    });
  }
  _onDetailsToggle(t) {
    this.isAnimating = !0;
    const e = t.currentTarget.open;
    this.dispatchEvent(
      new CustomEvent("collapsibleCardToggleEvent", {
        detail: { open: e },
        bubbles: !0,
        composed: !0
      })
    );
  }
};
Ae.styles = [y, d1];
G([
  l()
], Ae.prototype, "color", 2);
G([
  l()
], Ae.prototype, "density", 2);
G([
  l()
], Ae.prototype, "borderDecoration", 2);
G([
  l()
], Ae.prototype, "divider", 2);
G([
  l({ type: Boolean })
], Ae.prototype, "collapsible", 2);
G([
  l({ type: Boolean })
], Ae.prototype, "open", 2);
G([
  l()
], Ae.prototype, "headerFill", 2);
G([
  l({ type: Boolean })
], Ae.prototype, "fullBleed", 2);
G([
  ir()
], Ae.prototype, "isAnimating", 2);
Ae = G([
  Q("atp-card")
], Ae);
let oA = class extends b {
  constructor() {
    super(...arguments), this.density = "default";
  }
  render() {
    return g`
      <div class=${this._getStyleClasses()}>
        <slot></slot>
      </div>
    `;
  }
  _getStyleClasses() {
    return E({
      "card-header": !0,
      [`density-${this.density}`]: this.density !== "default"
      /* DEFAULT */
    });
  }
};
oA.styles = [d1, y];
G([
  l()
], oA.prototype, "density", 2);
oA = G([
  Q("atp-card-header")
], oA);
let lA = class extends b {
  constructor() {
    super(...arguments), this.density = "default";
  }
  render() {
    return g`
      <div class=${this._getStyleClasses()}>
        <slot></slot>
      </div>
    `;
  }
  _getStyleClasses() {
    return E({
      "card-footer": !0,
      [`density-${this.density}`]: this.density !== "default"
      /* DEFAULT */
    });
  }
};
lA.styles = [d1, y];
G([
  l()
], lA.prototype, "density", 2);
lA = G([
  Q("atp-card-footer")
], lA);
const Yr = (t) => t.strings === void 0;
const Tt = (t, e) => {
  const A = t._$AN;
  if (A === void 0) return !1;
  for (const i of A) i._$AO?.(e, !1), Tt(i, e);
  return !0;
}, gA = (t) => {
  let e, A;
  do {
    if ((e = t._$AM) === void 0) break;
    A = e._$AN, A.delete(t), t = e;
  } while (A?.size === 0);
}, Ei = (t) => {
  for (let e; e = t._$AM; t = e) {
    let A = e._$AN;
    if (A === void 0) e._$AN = A = /* @__PURE__ */ new Set();
    else if (A.has(t)) break;
    A.add(t), Fr(e);
  }
};
function zr(t) {
  this._$AN !== void 0 ? (gA(this), this._$AM = t, Ei(this)) : this._$AM = t;
}
function Nr(t, e = !1, A = 0) {
  const i = this._$AH, a = this._$AN;
  if (a !== void 0 && a.size !== 0) if (e) if (Array.isArray(i)) for (let r = A; r < i.length; r++) Tt(i[r], !1), gA(i[r]);
  else i != null && (Tt(i, !1), gA(i));
  else Tt(this, t);
}
const Fr = (t) => {
  t.type == r1.CHILD && (t._$AP ??= Nr, t._$AQ ??= zr);
};
class Rr extends s1 {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(e, A, i) {
    super._$AT(e, A, i), Ei(this), this.isConnected = e._$AU;
  }
  _$AO(e, A = !0) {
    e !== this.isConnected && (this.isConnected = e, e ? this.reconnected?.() : this.disconnected?.()), A && (Tt(this, e), gA(this));
  }
  setValue(e) {
    if (Yr(this._$Ct)) this._$Ct._$AI(e, this);
    else {
      const A = [...this._$Ct._$AH];
      A[this._$Ci] = e, this._$Ct._$AI(A, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
const ot = () => new Vr();
class Vr {
}
const MA = /* @__PURE__ */ new WeakMap(), lt = n1(class extends Rr {
  render(t) {
    return u;
  }
  update(t, [e]) {
    const A = e !== this.G;
    return A && this.G !== void 0 && this.rt(void 0), (A || this.lt !== this.ct) && (this.G = e, this.ht = t.options?.host, this.rt(this.ct = t.element)), u;
  }
  rt(t) {
    if (this.isConnected || (t = void 0), typeof this.G == "function") {
      const e = this.ht ?? globalThis;
      let A = MA.get(e);
      A === void 0 && (A = /* @__PURE__ */ new WeakMap(), MA.set(e, A)), A.get(this.G) !== void 0 && this.G.call(this.ht, void 0), A.set(this.G, t), t !== void 0 && this.G.call(this.ht, t);
    } else this.G.value = t;
  }
  get lt() {
    return typeof this.G == "function" ? MA.get(this.ht ?? globalThis)?.get(this.G) : this.G?.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
}), Pr = k`
  :host {
    --atp-checkbox-input-width: 16px;
    --atp-checkbox-input-border-width: 2px;
    --atp-checkbox-between-input-and-label: var(--atp-space-xs);
    --atp-checkbox-label-padding-inline-start: calc(
      var(--atp-checkbox-input-width) + var(--atp-checkbox-between-input-and-label)
    );
    --atp-checkbox-icon-width: 10px;
    --atp-checkbox-bordered-padding-inline-start: var(--atp-space-s);
  }

  .container {
    position: relative;
    display: inline-flex;
    align-items: center;
  }

  .input {
    position: absolute;
    block-size: 1px;
    inline-size: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  .label {
    position: relative;
    color: var(--atp-content-primary-medium-enabled);
    cursor: pointer;
    display: inline-block;
    min-block-size: var(--atp-space-s);
    margin-block: 0;
    padding-inline-start: var(--atp-checkbox-label-padding-inline-start);
    font-size: var(--atp-font-size-body-s);
    font-weight: normal;
    line-height: var(--atp-line-height-body-s);
    vertical-align: middle;
    white-space: nowrap;
    transition: all var(--atp-transition-standard);
  }

  .label:focus-visible,
  .input:focus-visible + .label {
    border-radius: 1px;
    outline: var(--atp-focus-width) solid var(--atp-focus-color);
    outline-offset: var(--atp-focus-outline-offset);
  }

  /* the visible "checkbox" */
  .label::before {
    background: var(--atp-neutral-0);
    border: var(--atp-checkbox-input-border-width) solid currentcolor;
    border-radius: 2px;
    color: var(--atp-content-primary-medium-enabled); /* used for border and background color */
    content: '';
    padding-block: 0;
    padding-inline: 1px;
    position: absolute;
    display: block;
    inset-block-start: 50%;
    inset-inline-start: 0;
    transform: translateY(-50%);
    inline-size: var(--atp-checkbox-input-width);
    block-size: var(--atp-checkbox-input-width);
    z-index: var(--atp-z-index-base);
    transition: all var(--atp-transition-standard);
  }

  .label:hover::before {
    color: var(--atp-utility-primary-medium-hover);
  }

  .label:active::before {
    color: var(--atp-utility-primary-medium-pressed);
  }

  .icon {
    fill: var(--atp-element-fill-inverse-weak-enabled);
    stroke: var(--atp-element-fill-inverse-weak-enabled);
    opacity: 0;
    position: absolute;
    inset-inline-start: calc(
      (var(--atp-checkbox-input-width) - var(--atp-checkbox-icon-width)) / 2
    );
    inset-block-start: 50%;
    transform: translateY(-50%);
    block-size: var(--atp-checkbox-icon-width);
    inline-size: var(--atp-checkbox-icon-width);
    z-index: var(--atp-z-index-over-base);
  }

  /* checked state */
  .input:checked + .label::before {
    color: var(--atp-utility-primary-medium-enabled);
    background-color: currentColor;
  }

  .input:checked + .label .icon {
    opacity: 1;
  }

  .input:checked + .label:hover::before {
    color: var(--atp-utility-primary-medium-hover);
  }

  .input:checked + .label:active::before {
    color: var(--atp-utility-primary-medium-pressed);
  }

  /* stylelint-disable no-descending-specificity -- so we can keep features grouped together */

  /* disabled state */
  .input:disabled + .label {
    cursor: not-allowed;
  }

  .input:disabled + .label::before {
    color: var(--atp-content-primary-weak-disabled);
  }

  .input:checked:disabled + .label::before,
  .input:indeterminate:disabled + .label::before {
    color: var(--atp-utility-primary-medium-disabled);
  }

  /* error/invalid */
  .input[aria-invalid] + .label::before {
    color: var(--atp-danger-primary-strong-enabled);
  }

  .input[aria-invalid]:checked + .label::before {
    background-color: currentColor;
  }

  .input[aria-invalid] + .label:hover::before,
  .input[aria-invalid]:checked + .label:hover::before {
    color: var(--atp-danger-primary-strong-hover);
  }

  .input[aria-invalid] + .label:active::before,
  .input[aria-invalid]:checked + .label:active::before {
    color: var(--atp-danger-primary-strong-pressed);
  }

  .input[aria-invalid]:disabled + .label::before,
  .input[aria-invalid]:disabled + .label:hover::before,
  .input[aria-invalid]:disabled + .label:active::before {
    color: var(--atp-danger-primary-strong-disabled);
  }

  /* bordered */
  .bordered .label {
    display: inline-block;
    padding-block: var(--atp-space-xs);
    padding-inline: calc(
        var(--atp-checkbox-label-padding-inline-start) +
          var(--atp-checkbox-bordered-padding-inline-start)
      )
      var(--atp-space-s);
    border-radius: var(--atp-border-radius-s);
    border: 1px solid var(--atp-element-border-primary-medium-enabled);
  }

  .bordered .label::before {
    inset-inline-start: var(--atp-checkbox-bordered-padding-inline-start);
  }

  .bordered .input:checked + .label {
    background: var(--atp-element-fill-blue-medium-enabled);
    border-color: var(--atp-utility-primary-medium-enabled);
  }

  .bordered .label:hover,
  .bordered .input:checked + label:hover {
    border-color: var(--atp-utility-primary-medium-enabled);
  }

  .bordered .label:active,
  .bordered .input:checked + label:active {
    border-color: var(--atp-utility-primary-medium-pressed);
  }

  .bordered .input:disabled + .label,
  .bordered .input:checked:disabled + .label {
    background: var(--atp-element-fill-inverse-medium-disabled);
    border-color: var(--atp-element-border-primary-medium-enabled);
  }

  .bordered .input[aria-invalid] + .label {
    background-color: var(--atp-element-fill-red-weak-enabled);
    border-color: var(--atp-danger-primary-strong-enabled);
  }

  .bordered .input[aria-invalid] + .label:hover {
    background-color: var(--atp-element-fill-red-weak-hover);
    border-color: var(--atp-danger-primary-strong-hover);
  }

  .bordered .input[aria-invalid] + .label:active {
    background-color: var(--atp-element-fill-red-weak-pressed);
    border-color: var(--atp-danger-primary-strong-pressed);
  }

  .bordered .input[aria-invalid]:disabled + .label {
    background: var(--atp-element-fill-inverse-medium-disabled);
    border-color: var(--atp-element-border-primary-medium-enabled);
  }

  .bordered .icon {
    inset-inline-start: calc(
      var(--atp-checkbox-bordered-padding-inline-start) +
        ((var(--atp-checkbox-input-width) - var(--atp-checkbox-icon-width)) / 2)
    );
  }

  /* no label */
  .no-label {
    /* stylelint-disable-next-line -- logical property value "inline-start" doesn't have baseline support yet */
    float: left;
    margin-inline-end: var(--atp-checkbox-between-input-and-label);
  }

  .no-label .label {
    padding-inline-start: var(--atp-checkbox-input-width);
  }

  .bordered.no-label .label {
    min-block-size: calc(1em + (2 * var(--atp-space-xs)));
    margin-inline-end: 0;
    padding: var(--atp-space-xs);
    padding-inline-start: calc(
      var(--atp-checkbox-label-padding-inline-start) +
        var(--atp-checkbox-bordered-padding-inline-start)
    );
  }

  /* stylelint-enable no-descending-specificity */
`;
var Ur = Object.defineProperty, Kr = Object.getOwnPropertyDescriptor, q = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? Kr(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && Ur(e, A, a), a;
};
let F = class extends b {
  constructor() {
    super(), this.checked = !1, this.disabled = !1, this.indeterminate = !1, this.isError = !1, this.required = !1, this.bordered = !1, this.tabindex = 0, this._inputId = Te(this.id), this.inputRef = ot(), this._invalidMessage = "This checkbox is required.", this._internals = this.attachInternals();
  }
  checkIconTemplate() {
    return g`
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="32"
        viewBox="0 0 40 32"
        class="icon"
        aria-hidden="true"
      >
        <title>Checked</title>
        <path
          d="M13.26 32l-13.26-13.26 4.994-4.994 8.265 8.265 21.967-22.011 4.994 4.994-26.961 27.006z"
        ></path>
      </svg>
    `;
  }
  indeterminateIconTemplate() {
    return g`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon"
        aria-hidden="true"
      >
        <title>Indeterminate</title>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    `;
  }
  static get formAssociated() {
    return !0;
  }
  render() {
    return g`
      <div class=${this._getContainerStyleClasses()}>
        <input
          ${lt(this.inputRef)}
          class=${this._getInputStyleClasses()}
          type="checkbox"
          name=${Z(this.name)}
          value=${Z(this.value)}
          ?checked=${this.checked || this.indeterminate}
          ?disabled=${this.disabled}
          ?required=${this.required}
          ?aria-required=${this.required}
          tabindex=${this.tabindex}
          id=${this._inputId}
          ?indeterminate=${this.indeterminate}
          ?aria-invalid=${this.isError}
          aria-errormessage=${Z(this.ariaErrorMessage)}
          aria-label=${Z(this.ariaLabel)}
          @click=${this._onClick}
          @change=${this._onChange}
          @keydown=${this._onKeyDown}
          @blur=${this._onBlur}
          @focus=${this._onFocus}
        />
        <label
          class="label"
          for=${this._inputId}
          title=${this.label}
          aria-label=${this.label ? null : Z(this.ariaLabel)}
          @keydown=${this._onKeyDown}
          @blur=${this._onBlur}
          @focus=${this._onFocus}
        >
          ${this.label}
          ${this.indeterminate ? this.indeterminateIconTemplate() : this.checkIconTemplate()}
        </label>
      </div>
    `;
  }
  setValidity() {
    this._internals.setValidity(
      { valueMissing: this.required && !this.checked },
      this.required && !this.checked ? this._invalidMessage : ""
    ), this._internals.setFormValue(this.checked ? this.value ? this.value : "on" : null);
  }
  checkValidity() {
    return this._internals.checkValidity();
  }
  reportValidity() {
    this._internals.reportValidity();
  }
  get validity() {
    return this._internals.validity;
  }
  get validationMessage() {
    return this._internals.validationMessage;
  }
  updated(t) {
    (t.has("checked") || t.has("required")) && (this.setValidity(), this._internals.setFormValue(this.checked ? this.value ? this.value : "on" : null));
  }
  _onKeyDown(t) {
    if (t.code === "Space" && this.disabled == !1) {
      this._onChange();
      const e = this.inputRef.value;
      e.checked = !e.checked;
    }
    t.code === "Space" && t.preventDefault();
  }
  update(t) {
    super.update(t), t.has("checked") && (this.inputRef.value.checked = this.checked);
  }
  _onChange() {
    this.checked = !this.checked, this.indeterminate = !1, this._internals.setFormValue(this.checked ? this.value ? this.value : "on" : null), this.dispatchEvent(new CustomEvent("changeEventOutput", { bubbles: !0, composed: !0 }));
  }
  _onClick() {
    this.dispatchEvent(new CustomEvent("clickEventOutput", { bubbles: !0, composed: !0 }));
  }
  _onFocus() {
    this.dispatchEvent(new CustomEvent("focusEventOutput", { bubbles: !0, composed: !0 }));
  }
  _onBlur() {
    this.dispatchEvent(new CustomEvent("blurEventOutput", { bubbles: !0, composed: !0 }));
  }
  /* TODO: update this to use the utility class that sets style classes */
  _getContainerStyleClasses() {
    return `container ${this.label ? "" : "no-label"} ${this.bordered ? "bordered" : ""}`.trim();
  }
  _getInputStyleClasses() {
    return `input ${this.indeterminate ? "indeterminate" : ""}`.trim();
  }
  connectedCallback() {
    super.connectedCallback(), this.setValidity(), this._internals.setFormValue(this.checked ? this.value ? this.value : "on" : null);
  }
  formDisabledCallback(t) {
    this.disabled = t;
  }
};
F.styles = [y, Pr];
q([
  l({ type: String || void 0 })
], F.prototype, "label", 2);
q([
  l({ type: String })
], F.prototype, "name", 2);
q([
  l({ type: String })
], F.prototype, "value", 2);
q([
  l({ type: String })
], F.prototype, "ariaLabel", 2);
q([
  l({ type: String })
], F.prototype, "ariaErrorMessage", 2);
q([
  l({ type: Boolean, reflect: !0 })
], F.prototype, "checked", 2);
q([
  l({ type: Boolean })
], F.prototype, "disabled", 2);
q([
  l({ type: Boolean })
], F.prototype, "indeterminate", 2);
q([
  l({ type: Boolean, reflect: !0 })
], F.prototype, "isError", 2);
q([
  l({ type: Boolean, reflect: !0 })
], F.prototype, "required", 2);
q([
  l({ type: Boolean })
], F.prototype, "bordered", 2);
q([
  l({ type: Number })
], F.prototype, "tabindex", 2);
F = q([
  Q("atp-checkbox")
], F);
class et extends Error {
}
class Gr extends et {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class jr extends et {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class Xr extends et {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class st extends et {
}
class Qi extends et {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}
class H extends et {
}
class Se extends et {
  constructor() {
    super("Zone is an abstract class");
  }
}
const C = "numeric", ge = "short", X = "long", dA = {
  year: C,
  month: C,
  day: C
}, fi = {
  year: C,
  month: ge,
  day: C
}, Wr = {
  year: C,
  month: ge,
  day: C,
  weekday: ge
}, vi = {
  year: C,
  month: X,
  day: C
}, ki = {
  year: C,
  month: X,
  day: C,
  weekday: X
}, yi = {
  hour: C,
  minute: C
}, wi = {
  hour: C,
  minute: C,
  second: C
}, Si = {
  hour: C,
  minute: C,
  second: C,
  timeZoneName: ge
}, Mi = {
  hour: C,
  minute: C,
  second: C,
  timeZoneName: X
}, Ji = {
  hour: C,
  minute: C,
  hourCycle: "h23"
}, Li = {
  hour: C,
  minute: C,
  second: C,
  hourCycle: "h23"
}, Di = {
  hour: C,
  minute: C,
  second: C,
  hourCycle: "h23",
  timeZoneName: ge
}, xi = {
  hour: C,
  minute: C,
  second: C,
  hourCycle: "h23",
  timeZoneName: X
}, Ti = {
  year: C,
  month: C,
  day: C,
  hour: C,
  minute: C
}, Oi = {
  year: C,
  month: C,
  day: C,
  hour: C,
  minute: C,
  second: C
}, Hi = {
  year: C,
  month: ge,
  day: C,
  hour: C,
  minute: C
}, Zi = {
  year: C,
  month: ge,
  day: C,
  hour: C,
  minute: C,
  second: C
}, qr = {
  year: C,
  month: ge,
  day: C,
  weekday: ge,
  hour: C,
  minute: C
}, Yi = {
  year: C,
  month: X,
  day: C,
  hour: C,
  minute: C,
  timeZoneName: ge
}, zi = {
  year: C,
  month: X,
  day: C,
  hour: C,
  minute: C,
  second: C,
  timeZoneName: ge
}, Ni = {
  year: C,
  month: X,
  day: C,
  weekday: X,
  hour: C,
  minute: C,
  timeZoneName: X
}, Fi = {
  year: C,
  month: X,
  day: C,
  weekday: X,
  hour: C,
  minute: C,
  second: C,
  timeZoneName: X
};
class Ut {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new Se();
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new Se();
  }
  /**
   * The IANA name of this zone.
   * Defaults to `name` if not overwritten by a subclass.
   * @abstract
   * @type {string}
   */
  get ianaName() {
    return this.name;
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  get isUniversal() {
    throw new Se();
  }
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(e, A) {
    throw new Se();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(e, A) {
    throw new Se();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(e) {
    throw new Se();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    throw new Se();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new Se();
  }
}
let JA = null;
class bA extends Ut {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    return JA === null && (JA = new bA()), JA;
  }
  /** @override **/
  get type() {
    return "system";
  }
  /** @override **/
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName(e, { format: A, locale: i }) {
    return _i(e, A, i);
  }
  /** @override **/
  formatOffset(e, A) {
    return Ot(this.offset(e), A);
  }
  /** @override **/
  offset(e) {
    return -new Date(e).getTimezoneOffset();
  }
  /** @override **/
  equals(e) {
    return e.type === "system";
  }
  /** @override **/
  get isValid() {
    return !0;
  }
}
const FA = /* @__PURE__ */ new Map();
function _r(t) {
  let e = FA.get(t);
  return e === void 0 && (e = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: t,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  }), FA.set(t, e)), e;
}
const $r = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function en(t, e) {
  const A = t.format(e).replace(/\u200E/g, ""), i = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(A), [, a, r, n, s, o, d, c] = i;
  return [n, a, r, s, o, d, c];
}
function tn(t, e) {
  const A = t.formatToParts(e), i = [];
  for (let a = 0; a < A.length; a++) {
    const { type: r, value: n } = A[a], s = $r[r];
    r === "era" ? i[s] = n : m(s) || (i[s] = parseInt(n, 10));
  }
  return i;
}
const LA = /* @__PURE__ */ new Map();
class ke extends Ut {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(e) {
    let A = LA.get(e);
    return A === void 0 && LA.set(e, A = new ke(e)), A;
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    LA.clear(), FA.clear();
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated For backward compatibility, this forwards to isValidZone, better use `isValidZone()` directly instead.
   * @return {boolean}
   */
  static isValidSpecifier(e) {
    return this.isValidZone(e);
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidZone(e) {
    if (!e)
      return !1;
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: e }).format(), !0;
    } catch {
      return !1;
    }
  }
  constructor(e) {
    super(), this.zoneName = e, this.valid = ke.isValidZone(e);
  }
  /**
   * The type of zone. `iana` for all instances of `IANAZone`.
   * @override
   * @type {string}
   */
  get type() {
    return "iana";
  }
  /**
   * The name of this zone (i.e. the IANA zone name).
   * @override
   * @type {string}
   */
  get name() {
    return this.zoneName;
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year:
   * Always returns false for all IANA zones.
   * @override
   * @type {boolean}
   */
  get isUniversal() {
    return !1;
  }
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(e, { format: A, locale: i }) {
    return _i(e, A, i, this.name);
  }
  /**
   * Returns the offset's value as a string
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(e, A) {
    return Ot(this.offset(e), A);
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @override
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(e) {
    if (!this.valid) return NaN;
    const A = new Date(e);
    if (isNaN(A)) return NaN;
    const i = _r(this.name);
    let [a, r, n, s, o, d, c] = i.formatToParts ? tn(i, A) : en(i, A);
    s === "BC" && (a = -Math.abs(a) + 1);
    const B = QA({
      year: a,
      month: r,
      day: n,
      hour: o === 24 ? 0 : o,
      minute: d,
      second: c,
      millisecond: 0
    });
    let h = +A;
    const S = h % 1e3;
    return h -= S >= 0 ? S : 1e3 + S, (B - h) / (60 * 1e3);
  }
  /**
   * Return whether this Zone is equal to another zone
   * @override
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    return e.type === "iana" && e.name === this.name;
  }
  /**
   * Return whether this Zone is valid.
   * @override
   * @type {boolean}
   */
  get isValid() {
    return this.valid;
  }
}
let H1 = {};
function An(t, e = {}) {
  const A = JSON.stringify([t, e]);
  let i = H1[A];
  return i || (i = new Intl.ListFormat(t, e), H1[A] = i), i;
}
const RA = /* @__PURE__ */ new Map();
function VA(t, e = {}) {
  const A = JSON.stringify([t, e]);
  let i = RA.get(A);
  return i === void 0 && (i = new Intl.DateTimeFormat(t, e), RA.set(A, i)), i;
}
const PA = /* @__PURE__ */ new Map();
function an(t, e = {}) {
  const A = JSON.stringify([t, e]);
  let i = PA.get(A);
  return i === void 0 && (i = new Intl.NumberFormat(t, e), PA.set(A, i)), i;
}
const UA = /* @__PURE__ */ new Map();
function rn(t, e = {}) {
  const { base: A, ...i } = e, a = JSON.stringify([t, i]);
  let r = UA.get(a);
  return r === void 0 && (r = new Intl.RelativeTimeFormat(t, e), UA.set(a, r)), r;
}
let Jt = null;
function nn() {
  return Jt || (Jt = new Intl.DateTimeFormat().resolvedOptions().locale, Jt);
}
const KA = /* @__PURE__ */ new Map();
function Ri(t) {
  let e = KA.get(t);
  return e === void 0 && (e = new Intl.DateTimeFormat(t).resolvedOptions(), KA.set(t, e)), e;
}
const GA = /* @__PURE__ */ new Map();
function sn(t) {
  let e = GA.get(t);
  if (!e) {
    const A = new Intl.Locale(t);
    e = "getWeekInfo" in A ? A.getWeekInfo() : A.weekInfo, "minimalDays" in e || (e = { ...Vi, ...e }), GA.set(t, e);
  }
  return e;
}
function on(t) {
  const e = t.indexOf("-x-");
  e !== -1 && (t = t.substring(0, e));
  const A = t.indexOf("-u-");
  if (A === -1)
    return [t];
  {
    let i, a;
    try {
      i = VA(t).resolvedOptions(), a = t;
    } catch {
      const o = t.substring(0, A);
      i = VA(o).resolvedOptions(), a = o;
    }
    const { numberingSystem: r, calendar: n } = i;
    return [a, r, n];
  }
}
function ln(t, e, A) {
  return (A || e) && (t.includes("-u-") || (t += "-u"), A && (t += `-ca-${A}`), e && (t += `-nu-${e}`)), t;
}
function gn(t) {
  const e = [];
  for (let A = 1; A <= 12; A++) {
    const i = I.utc(2009, A, 1);
    e.push(t(i));
  }
  return e;
}
function dn(t) {
  const e = [];
  for (let A = 1; A <= 7; A++) {
    const i = I.utc(2016, 11, 13 + A);
    e.push(t(i));
  }
  return e;
}
function Wt(t, e, A, i) {
  const a = t.listingMode();
  return a === "error" ? null : a === "en" ? A(e) : i(e);
}
function Cn(t) {
  return t.numberingSystem && t.numberingSystem !== "latn" ? !1 : t.numberingSystem === "latn" || !t.locale || t.locale.startsWith("en") || Ri(t.locale).numberingSystem === "latn";
}
class cn {
  constructor(e, A, i) {
    this.padTo = i.padTo || 0, this.floor = i.floor || !1;
    const { padTo: a, floor: r, ...n } = i;
    if (!A || Object.keys(n).length > 0) {
      const s = { useGrouping: !1, ...i };
      i.padTo > 0 && (s.minimumIntegerDigits = i.padTo), this.inf = an(e, s);
    }
  }
  format(e) {
    if (this.inf) {
      const A = this.floor ? Math.floor(e) : e;
      return this.inf.format(A);
    } else {
      const A = this.floor ? Math.floor(e) : h1(e, 3);
      return D(A, this.padTo);
    }
  }
}
class pn {
  constructor(e, A, i) {
    this.opts = i, this.originalZone = void 0;
    let a;
    if (this.opts.timeZone)
      this.dt = e;
    else if (e.zone.type === "fixed") {
      const n = -1 * (e.offset / 60), s = n >= 0 ? `Etc/GMT+${n}` : `Etc/GMT${n}`;
      e.offset !== 0 && ke.create(s).valid ? (a = s, this.dt = e) : (a = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    } else e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, a = e.zone.name) : (a = "UTC", this.dt = e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    const r = { ...this.opts };
    r.timeZone = r.timeZone || a, this.dtf = VA(A, r);
  }
  format() {
    return this.originalZone ? this.formatToParts().map(({ value: e }) => e).join("") : this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    const e = this.dtf.formatToParts(this.dt.toJSDate());
    return this.originalZone ? e.map((A) => {
      if (A.type === "timeZoneName") {
        const i = this.originalZone.offsetName(this.dt.ts, {
          locale: this.dt.locale,
          format: this.opts.timeZoneName
        });
        return {
          ...A,
          value: i
        };
      } else
        return A;
    }) : e;
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class un {
  constructor(e, A, i) {
    this.opts = { style: "long", ...i }, !A && Wi() && (this.rtf = rn(e, i));
  }
  format(e, A) {
    return this.rtf ? this.rtf.format(e, A) : Zn(A, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, A) {
    return this.rtf ? this.rtf.formatToParts(e, A) : [];
  }
}
const Vi = {
  firstDay: 1,
  minimalDays: 4,
  weekend: [6, 7]
};
class w {
  static fromOpts(e) {
    return w.create(
      e.locale,
      e.numberingSystem,
      e.outputCalendar,
      e.weekSettings,
      e.defaultToEN
    );
  }
  static create(e, A, i, a, r = !1) {
    const n = e || J.defaultLocale, s = n || (r ? "en-US" : nn()), o = A || J.defaultNumberingSystem, d = i || J.defaultOutputCalendar, c = XA(a) || J.defaultWeekSettings;
    return new w(s, o, d, c, n);
  }
  static resetCache() {
    Jt = null, RA.clear(), PA.clear(), UA.clear(), KA.clear(), GA.clear();
  }
  static fromObject({ locale: e, numberingSystem: A, outputCalendar: i, weekSettings: a } = {}) {
    return w.create(e, A, i, a);
  }
  constructor(e, A, i, a, r) {
    const [n, s, o] = on(e);
    this.locale = n, this.numberingSystem = A || s || null, this.outputCalendar = i || o || null, this.weekSettings = a, this.intl = ln(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = r, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = Cn(this)), this.fastNumbersCached;
  }
  listingMode() {
    const e = this.isEnglish(), A = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return e && A ? "en" : "intl";
  }
  clone(e) {
    return !e || Object.getOwnPropertyNames(e).length === 0 ? this : w.create(
      e.locale || this.specifiedLocale,
      e.numberingSystem || this.numberingSystem,
      e.outputCalendar || this.outputCalendar,
      XA(e.weekSettings) || this.weekSettings,
      e.defaultToEN || !1
    );
  }
  redefaultToEN(e = {}) {
    return this.clone({ ...e, defaultToEN: !0 });
  }
  redefaultToSystem(e = {}) {
    return this.clone({ ...e, defaultToEN: !1 });
  }
  months(e, A = !1) {
    return Wt(this, e, ta, () => {
      const i = this.intl === "ja" || this.intl.startsWith("ja-");
      A &= !i;
      const a = A ? { month: e, day: "numeric" } : { month: e }, r = A ? "format" : "standalone";
      if (!this.monthsCache[r][e]) {
        const n = i ? (s) => this.dtFormatter(s, a).format() : (s) => this.extract(s, a, "month");
        this.monthsCache[r][e] = gn(n);
      }
      return this.monthsCache[r][e];
    });
  }
  weekdays(e, A = !1) {
    return Wt(this, e, aa, () => {
      const i = A ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, a = A ? "format" : "standalone";
      return this.weekdaysCache[a][e] || (this.weekdaysCache[a][e] = dn(
        (r) => this.extract(r, i, "weekday")
      )), this.weekdaysCache[a][e];
    });
  }
  meridiems() {
    return Wt(
      this,
      void 0,
      () => ra,
      () => {
        if (!this.meridiemCache) {
          const e = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [I.utc(2016, 11, 13, 9), I.utc(2016, 11, 13, 19)].map(
            (A) => this.extract(A, e, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(e) {
    return Wt(this, e, na, () => {
      const A = { era: e };
      return this.eraCache[e] || (this.eraCache[e] = [I.utc(-40, 1, 1), I.utc(2017, 1, 1)].map(
        (i) => this.extract(i, A, "era")
      )), this.eraCache[e];
    });
  }
  extract(e, A, i) {
    const a = this.dtFormatter(e, A), r = a.formatToParts(), n = r.find((s) => s.type.toLowerCase() === i);
    return n ? n.value : null;
  }
  numberFormatter(e = {}) {
    return new cn(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, A = {}) {
    return new pn(e, this.intl, A);
  }
  relFormatter(e = {}) {
    return new un(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return An(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || Ri(this.intl).locale.startsWith("en-us");
  }
  getWeekSettings() {
    return this.weekSettings ? this.weekSettings : qi() ? sn(this.locale) : Vi;
  }
  getStartOfWeek() {
    return this.getWeekSettings().firstDay;
  }
  getMinDaysInFirstWeek() {
    return this.getWeekSettings().minimalDays;
  }
  getWeekendDays() {
    return this.getWeekSettings().weekend;
  }
  equals(e) {
    return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar;
  }
  toString() {
    return `Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`;
  }
}
let DA = null;
class N extends Ut {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return DA === null && (DA = new N(0)), DA;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(e) {
    return e === 0 ? N.utcInstance : new N(e);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  static parseSpecifier(e) {
    if (e) {
      const A = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (A)
        return new N(fA(A[1], A[2]));
    }
    return null;
  }
  constructor(e) {
    super(), this.fixed = e;
  }
  /**
   * The type of zone. `fixed` for all instances of `FixedOffsetZone`.
   * @override
   * @type {string}
   */
  get type() {
    return "fixed";
  }
  /**
   * The name of this zone.
   * All fixed zones' names always start with "UTC" (plus optional offset)
   * @override
   * @type {string}
   */
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${Ot(this.fixed, "narrow")}`;
  }
  /**
   * The IANA name of this zone, i.e. `Etc/UTC` or `Etc/GMT+/-nn`
   *
   * @override
   * @type {string}
   */
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${Ot(-this.fixed, "narrow")}`;
  }
  /**
   * Returns the offset's common name at the specified timestamp.
   *
   * For fixed offset zones this equals to the zone name.
   * @override
   */
  offsetName() {
    return this.name;
  }
  /**
   * Returns the offset's value as a string
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(e, A) {
    return Ot(this.fixed, A);
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year:
   * Always returns true for all fixed offset zones.
   * @override
   * @type {boolean}
   */
  get isUniversal() {
    return !0;
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   *
   * For fixed offset zones, this is constant and does not depend on a timestamp.
   * @override
   * @return {number}
   */
  offset() {
    return this.fixed;
  }
  /**
   * Return whether this Zone is equal to another zone (i.e. also fixed and same offset)
   * @override
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    return e.type === "fixed" && e.fixed === this.fixed;
  }
  /**
   * Return whether this Zone is valid:
   * All fixed offset zones are valid.
   * @override
   * @type {boolean}
   */
  get isValid() {
    return !0;
  }
}
class hn extends Ut {
  constructor(e) {
    super(), this.zoneName = e;
  }
  /** @override **/
  get type() {
    return "invalid";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName() {
    return null;
  }
  /** @override **/
  formatOffset() {
    return "";
  }
  /** @override **/
  offset() {
    return NaN;
  }
  /** @override **/
  equals() {
    return !1;
  }
  /** @override **/
  get isValid() {
    return !1;
  }
}
function Le(t, e) {
  if (m(t) || t === null)
    return e;
  if (t instanceof Ut)
    return t;
  if (Qn(t)) {
    const A = t.toLowerCase();
    return A === "default" ? e : A === "local" || A === "system" ? bA.instance : A === "utc" || A === "gmt" ? N.utcInstance : N.parseSpecifier(A) || ke.create(t);
  } else return De(t) ? N.instance(t) : typeof t == "object" && "offset" in t && typeof t.offset == "function" ? t : new hn(t);
}
const C1 = {
  arab: "[٠-٩]",
  arabext: "[۰-۹]",
  bali: "[᭐-᭙]",
  beng: "[০-৯]",
  deva: "[०-९]",
  fullwide: "[０-９]",
  gujr: "[૦-૯]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[០-៩]",
  knda: "[೦-೯]",
  laoo: "[໐-໙]",
  limb: "[᥆-᥏]",
  mlym: "[൦-൯]",
  mong: "[᠐-᠙]",
  mymr: "[၀-၉]",
  orya: "[୦-୯]",
  tamldec: "[௦-௯]",
  telu: "[౦-౯]",
  thai: "[๐-๙]",
  tibt: "[༠-༩]",
  latn: "\\d"
}, Z1 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}, In = C1.hanidec.replace(/[\[|\]]/g, "").split("");
function mn(t) {
  let e = parseInt(t, 10);
  if (isNaN(e)) {
    e = "";
    for (let A = 0; A < t.length; A++) {
      const i = t.charCodeAt(A);
      if (t[A].search(C1.hanidec) !== -1)
        e += In.indexOf(t[A]);
      else
        for (const a in Z1) {
          const [r, n] = Z1[a];
          i >= r && i <= n && (e += i - r);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
const jA = /* @__PURE__ */ new Map();
function Bn() {
  jA.clear();
}
function se({ numberingSystem: t }, e = "") {
  const A = t || "latn";
  let i = jA.get(A);
  i === void 0 && (i = /* @__PURE__ */ new Map(), jA.set(A, i));
  let a = i.get(e);
  return a === void 0 && (a = new RegExp(`${C1[A]}${e}`), i.set(e, a)), a;
}
let Y1 = () => Date.now(), z1 = "system", N1 = null, F1 = null, R1 = null, V1 = 60, P1, U1 = null;
class J {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return Y1;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(e) {
    Y1 = e;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(e) {
    z1 = e;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return Le(z1, bA.instance);
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return N1;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(e) {
    N1 = e;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return F1;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(e) {
    F1 = e;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return R1;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(e) {
    R1 = e;
  }
  /**
   * @typedef {Object} WeekSettings
   * @property {number} firstDay
   * @property {number} minimalDays
   * @property {number[]} weekend
   */
  /**
   * @return {WeekSettings|null}
   */
  static get defaultWeekSettings() {
    return U1;
  }
  /**
   * Allows overriding the default locale week settings, i.e. the start of the week, the weekend and
   * how many days are required in the first week of a year.
   * Does not affect existing instances.
   *
   * @param {WeekSettings|null} weekSettings
   */
  static set defaultWeekSettings(e) {
    U1 = XA(e);
  }
  /**
   * Get the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return V1;
  }
  /**
   * Set the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
   * @type {number}
   * @example Settings.twoDigitCutoffYear = 0 // all 'yy' are interpreted as 20th century
   * @example Settings.twoDigitCutoffYear = 99 // all 'yy' are interpreted as 21st century
   * @example Settings.twoDigitCutoffYear = 50 // '49' -> 2049; '50' -> 1950
   * @example Settings.twoDigitCutoffYear = 1950 // interpreted as 50
   * @example Settings.twoDigitCutoffYear = 2050 // ALSO interpreted as 50
   */
  static set twoDigitCutoffYear(e) {
    V1 = e % 100;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return P1;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(e) {
    P1 = e;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    w.resetCache(), ke.resetCache(), I.resetCache(), Bn();
  }
}
class le {
  constructor(e, A) {
    this.reason = e, this.explanation = A;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
const Pi = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Ui = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function $(t, e) {
  return new le(
    "unit out of range",
    `you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`
  );
}
function c1(t, e, A) {
  const i = new Date(Date.UTC(t, e - 1, A));
  t < 100 && t >= 0 && i.setUTCFullYear(i.getUTCFullYear() - 1900);
  const a = i.getUTCDay();
  return a === 0 ? 7 : a;
}
function Ki(t, e, A) {
  return A + (Kt(t) ? Ui : Pi)[e - 1];
}
function Gi(t, e) {
  const A = Kt(t) ? Ui : Pi, i = A.findIndex((r) => r < e), a = e - A[i];
  return { month: i + 1, day: a };
}
function p1(t, e) {
  return (t - e + 7) % 7 + 1;
}
function CA(t, e = 4, A = 1) {
  const { year: i, month: a, day: r } = t, n = Ki(i, a, r), s = p1(c1(i, a, r), A);
  let o = Math.floor((n - s + 14 - e) / 7), d;
  return o < 1 ? (d = i - 1, o = Ft(d, e, A)) : o > Ft(i, e, A) ? (d = i + 1, o = 1) : d = i, { weekYear: d, weekNumber: o, weekday: s, ...vA(t) };
}
function K1(t, e = 4, A = 1) {
  const { weekYear: i, weekNumber: a, weekday: r } = t, n = p1(c1(i, 1, e), A), s = gt(i);
  let o = a * 7 + r - n - 7 + e, d;
  o < 1 ? (d = i - 1, o += gt(d)) : o > s ? (d = i + 1, o -= gt(i)) : d = i;
  const { month: c, day: p } = Gi(d, o);
  return { year: d, month: c, day: p, ...vA(t) };
}
function xA(t) {
  const { year: e, month: A, day: i } = t, a = Ki(e, A, i);
  return { year: e, ordinal: a, ...vA(t) };
}
function G1(t) {
  const { year: e, ordinal: A } = t, { month: i, day: a } = Gi(e, A);
  return { year: e, month: i, day: a, ...vA(t) };
}
function j1(t, e) {
  if (!m(t.localWeekday) || !m(t.localWeekNumber) || !m(t.localWeekYear)) {
    if (!m(t.weekday) || !m(t.weekNumber) || !m(t.weekYear))
      throw new st(
        "Cannot mix locale-based week fields with ISO-based week fields"
      );
    return m(t.localWeekday) || (t.weekday = t.localWeekday), m(t.localWeekNumber) || (t.weekNumber = t.localWeekNumber), m(t.localWeekYear) || (t.weekYear = t.localWeekYear), delete t.localWeekday, delete t.localWeekNumber, delete t.localWeekYear, {
      minDaysInFirstWeek: e.getMinDaysInFirstWeek(),
      startOfWeek: e.getStartOfWeek()
    };
  } else
    return { minDaysInFirstWeek: 4, startOfWeek: 1 };
}
function bn(t, e = 4, A = 1) {
  const i = EA(t.weekYear), a = ee(
    t.weekNumber,
    1,
    Ft(t.weekYear, e, A)
  ), r = ee(t.weekday, 1, 7);
  return i ? a ? r ? !1 : $("weekday", t.weekday) : $("week", t.weekNumber) : $("weekYear", t.weekYear);
}
function En(t) {
  const e = EA(t.year), A = ee(t.ordinal, 1, gt(t.year));
  return e ? A ? !1 : $("ordinal", t.ordinal) : $("year", t.year);
}
function ji(t) {
  const e = EA(t.year), A = ee(t.month, 1, 12), i = ee(t.day, 1, cA(t.year, t.month));
  return e ? A ? i ? !1 : $("day", t.day) : $("month", t.month) : $("year", t.year);
}
function Xi(t) {
  const { hour: e, minute: A, second: i, millisecond: a } = t, r = ee(e, 0, 23) || e === 24 && A === 0 && i === 0 && a === 0, n = ee(A, 0, 59), s = ee(i, 0, 59), o = ee(a, 0, 999);
  return r ? n ? s ? o ? !1 : $("millisecond", a) : $("second", i) : $("minute", A) : $("hour", e);
}
function m(t) {
  return typeof t > "u";
}
function De(t) {
  return typeof t == "number";
}
function EA(t) {
  return typeof t == "number" && t % 1 === 0;
}
function Qn(t) {
  return typeof t == "string";
}
function fn(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function Wi() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function qi() {
  try {
    return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
  } catch {
    return !1;
  }
}
function vn(t) {
  return Array.isArray(t) ? t : [t];
}
function X1(t, e, A) {
  if (t.length !== 0)
    return t.reduce((i, a) => {
      const r = [e(a), a];
      return i && A(i[0], r[0]) === i[0] ? i : r;
    }, null)[1];
}
function kn(t, e) {
  return e.reduce((A, i) => (A[i] = t[i], A), {});
}
function ut(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function XA(t) {
  if (t == null)
    return null;
  if (typeof t != "object")
    throw new H("Week settings must be an object");
  if (!ee(t.firstDay, 1, 7) || !ee(t.minimalDays, 1, 7) || !Array.isArray(t.weekend) || t.weekend.some((e) => !ee(e, 1, 7)))
    throw new H("Invalid week settings");
  return {
    firstDay: t.firstDay,
    minimalDays: t.minimalDays,
    weekend: Array.from(t.weekend)
  };
}
function ee(t, e, A) {
  return EA(t) && t >= e && t <= A;
}
function yn(t, e) {
  return t - e * Math.floor(t / e);
}
function D(t, e = 2) {
  const A = t < 0;
  let i;
  return A ? i = "-" + ("" + -t).padStart(e, "0") : i = ("" + t).padStart(e, "0"), i;
}
function Me(t) {
  if (!(m(t) || t === null || t === ""))
    return parseInt(t, 10);
}
function Re(t) {
  if (!(m(t) || t === null || t === ""))
    return parseFloat(t);
}
function u1(t) {
  if (!(m(t) || t === null || t === "")) {
    const e = parseFloat("0." + t) * 1e3;
    return Math.floor(e);
  }
}
function h1(t, e, A = "round") {
  const i = 10 ** e;
  switch (A) {
    case "expand":
      return t > 0 ? Math.ceil(t * i) / i : Math.floor(t * i) / i;
    case "trunc":
      return Math.trunc(t * i) / i;
    case "round":
      return Math.round(t * i) / i;
    case "floor":
      return Math.floor(t * i) / i;
    case "ceil":
      return Math.ceil(t * i) / i;
    default:
      throw new RangeError(`Value rounding ${A} is out of range`);
  }
}
function Kt(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function gt(t) {
  return Kt(t) ? 366 : 365;
}
function cA(t, e) {
  const A = yn(e - 1, 12) + 1, i = t + (e - A) / 12;
  return A === 2 ? Kt(i) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][A - 1];
}
function QA(t) {
  let e = Date.UTC(
    t.year,
    t.month - 1,
    t.day,
    t.hour,
    t.minute,
    t.second,
    t.millisecond
  );
  return t.year < 100 && t.year >= 0 && (e = new Date(e), e.setUTCFullYear(t.year, t.month - 1, t.day)), +e;
}
function W1(t, e, A) {
  return -p1(c1(t, 1, e), A) + e - 1;
}
function Ft(t, e = 4, A = 1) {
  const i = W1(t, e, A), a = W1(t + 1, e, A);
  return (gt(t) - i + a) / 7;
}
function WA(t) {
  return t > 99 ? t : t > J.twoDigitCutoffYear ? 1900 + t : 2e3 + t;
}
function _i(t, e, A, i = null) {
  const a = new Date(t), r = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  i && (r.timeZone = i);
  const n = { timeZoneName: e, ...r }, s = new Intl.DateTimeFormat(A, n).formatToParts(a).find((o) => o.type.toLowerCase() === "timezonename");
  return s ? s.value : null;
}
function fA(t, e) {
  let A = parseInt(t, 10);
  Number.isNaN(A) && (A = 0);
  const i = parseInt(e, 10) || 0, a = A < 0 || Object.is(A, -0) ? -i : i;
  return A * 60 + a;
}
function $i(t) {
  const e = Number(t);
  if (typeof t == "boolean" || t === "" || !Number.isFinite(e))
    throw new H(`Invalid unit value ${t}`);
  return e;
}
function pA(t, e) {
  const A = {};
  for (const i in t)
    if (ut(t, i)) {
      const a = t[i];
      if (a == null) continue;
      A[e(i)] = $i(a);
    }
  return A;
}
function Ot(t, e) {
  const A = Math.trunc(Math.abs(t / 60)), i = Math.trunc(Math.abs(t % 60)), a = t >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return `${a}${D(A, 2)}:${D(i, 2)}`;
    case "narrow":
      return `${a}${A}${i > 0 ? `:${i}` : ""}`;
    case "techie":
      return `${a}${D(A, 2)}${D(i, 2)}`;
    default:
      throw new RangeError(`Value format ${e} is out of range for property format`);
  }
}
function vA(t) {
  return kn(t, ["hour", "minute", "second", "millisecond"]);
}
const wn = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], ea = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
], Sn = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function ta(t) {
  switch (t) {
    case "narrow":
      return [...Sn];
    case "short":
      return [...ea];
    case "long":
      return [...wn];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const Aa = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], ia = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], Mn = ["M", "T", "W", "T", "F", "S", "S"];
function aa(t) {
  switch (t) {
    case "narrow":
      return [...Mn];
    case "short":
      return [...ia];
    case "long":
      return [...Aa];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const ra = ["AM", "PM"], Jn = ["Before Christ", "Anno Domini"], Ln = ["BC", "AD"], Dn = ["B", "A"];
function na(t) {
  switch (t) {
    case "narrow":
      return [...Dn];
    case "short":
      return [...Ln];
    case "long":
      return [...Jn];
    default:
      return null;
  }
}
function xn(t) {
  return ra[t.hour < 12 ? 0 : 1];
}
function Tn(t, e) {
  return aa(e)[t.weekday - 1];
}
function On(t, e) {
  return ta(e)[t.month - 1];
}
function Hn(t, e) {
  return na(e)[t.year < 0 ? 0 : 1];
}
function Zn(t, e, A = "always", i = !1) {
  const a = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  }, r = ["hours", "minutes", "seconds"].indexOf(t) === -1;
  if (A === "auto" && r) {
    const p = t === "days";
    switch (e) {
      case 1:
        return p ? "tomorrow" : `next ${a[t][0]}`;
      case -1:
        return p ? "yesterday" : `last ${a[t][0]}`;
      case 0:
        return p ? "today" : `this ${a[t][0]}`;
    }
  }
  const n = Object.is(e, -0) || e < 0, s = Math.abs(e), o = s === 1, d = a[t], c = i ? o ? d[1] : d[2] || d[1] : o ? a[t][0] : t;
  return n ? `${s} ${c} ago` : `in ${s} ${c}`;
}
function q1(t, e) {
  let A = "";
  for (const i of t)
    i.literal ? A += i.val : A += e(i.val);
  return A;
}
const Yn = {
  D: dA,
  DD: fi,
  DDD: vi,
  DDDD: ki,
  t: yi,
  tt: wi,
  ttt: Si,
  tttt: Mi,
  T: Ji,
  TT: Li,
  TTT: Di,
  TTTT: xi,
  f: Ti,
  ff: Hi,
  fff: Yi,
  ffff: Ni,
  F: Oi,
  FF: Zi,
  FFF: zi,
  FFFF: Fi
};
class Y {
  static create(e, A = {}) {
    return new Y(e, A);
  }
  static parseFormat(e) {
    let A = null, i = "", a = !1;
    const r = [];
    for (let n = 0; n < e.length; n++) {
      const s = e.charAt(n);
      s === "'" ? ((i.length > 0 || a) && r.push({
        literal: a || /^\s+$/.test(i),
        val: i === "" ? "'" : i
      }), A = null, i = "", a = !a) : a || s === A ? i += s : (i.length > 0 && r.push({ literal: /^\s+$/.test(i), val: i }), i = s, A = s);
    }
    return i.length > 0 && r.push({ literal: a || /^\s+$/.test(i), val: i }), r;
  }
  static macroTokenToFormatOpts(e) {
    return Yn[e];
  }
  constructor(e, A) {
    this.opts = A, this.loc = e, this.systemLoc = null;
  }
  formatWithSystemDefault(e, A) {
    return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e, { ...this.opts, ...A }).format();
  }
  dtFormatter(e, A = {}) {
    return this.loc.dtFormatter(e, { ...this.opts, ...A });
  }
  formatDateTime(e, A) {
    return this.dtFormatter(e, A).format();
  }
  formatDateTimeParts(e, A) {
    return this.dtFormatter(e, A).formatToParts();
  }
  formatInterval(e, A) {
    return this.dtFormatter(e.start, A).dtf.formatRange(e.start.toJSDate(), e.end.toJSDate());
  }
  resolvedOptions(e, A) {
    return this.dtFormatter(e, A).resolvedOptions();
  }
  num(e, A = 0, i = void 0) {
    if (this.opts.forceSimple)
      return D(e, A);
    const a = { ...this.opts };
    return A > 0 && (a.padTo = A), i && (a.signDisplay = i), this.loc.numberFormatter(a).format(e);
  }
  formatDateTimeFromString(e, A) {
    const i = this.loc.listingMode() === "en", a = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", r = (h, S) => this.loc.extract(e, h, S), n = (h) => e.isOffsetFixed && e.offset === 0 && h.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, h.format) : "", s = () => i ? xn(e) : r({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), o = (h, S) => i ? On(e, h) : r(S ? { month: h } : { month: h, day: "numeric" }, "month"), d = (h, S) => i ? Tn(e, h) : r(
      S ? { weekday: h } : { weekday: h, month: "long", day: "numeric" },
      "weekday"
    ), c = (h) => {
      const S = Y.macroTokenToFormatOpts(h);
      return S ? this.formatWithSystemDefault(e, S) : h;
    }, p = (h) => i ? Hn(e, h) : r({ era: h }, "era"), B = (h) => {
      switch (h) {
        // ms
        case "S":
          return this.num(e.millisecond);
        case "u":
        // falls through
        case "SSS":
          return this.num(e.millisecond, 3);
        // seconds
        case "s":
          return this.num(e.second);
        case "ss":
          return this.num(e.second, 2);
        // fractional seconds
        case "uu":
          return this.num(Math.floor(e.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(e.millisecond / 100));
        // minutes
        case "m":
          return this.num(e.minute);
        case "mm":
          return this.num(e.minute, 2);
        // hours
        case "h":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12);
        case "hh":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12, 2);
        case "H":
          return this.num(e.hour);
        case "HH":
          return this.num(e.hour, 2);
        // offset
        case "Z":
          return n({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return n({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return n({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return e.zone.offsetName(e.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return e.zone.offsetName(e.ts, { format: "long", locale: this.loc.locale });
        // zone
        case "z":
          return e.zoneName;
        // meridiems
        case "a":
          return s();
        // dates
        case "d":
          return a ? r({ day: "numeric" }, "day") : this.num(e.day);
        case "dd":
          return a ? r({ day: "2-digit" }, "day") : this.num(e.day, 2);
        // weekdays - standalone
        case "c":
          return this.num(e.weekday);
        case "ccc":
          return d("short", !0);
        case "cccc":
          return d("long", !0);
        case "ccccc":
          return d("narrow", !0);
        // weekdays - format
        case "E":
          return this.num(e.weekday);
        case "EEE":
          return d("short", !1);
        case "EEEE":
          return d("long", !1);
        case "EEEEE":
          return d("narrow", !1);
        // months - standalone
        case "L":
          return a ? r({ month: "numeric", day: "numeric" }, "month") : this.num(e.month);
        case "LL":
          return a ? r({ month: "2-digit", day: "numeric" }, "month") : this.num(e.month, 2);
        case "LLL":
          return o("short", !0);
        case "LLLL":
          return o("long", !0);
        case "LLLLL":
          return o("narrow", !0);
        // months - format
        case "M":
          return a ? r({ month: "numeric" }, "month") : this.num(e.month);
        case "MM":
          return a ? r({ month: "2-digit" }, "month") : this.num(e.month, 2);
        case "MMM":
          return o("short", !1);
        case "MMMM":
          return o("long", !1);
        case "MMMMM":
          return o("narrow", !1);
        // years
        case "y":
          return a ? r({ year: "numeric" }, "year") : this.num(e.year);
        case "yy":
          return a ? r({ year: "2-digit" }, "year") : this.num(e.year.toString().slice(-2), 2);
        case "yyyy":
          return a ? r({ year: "numeric" }, "year") : this.num(e.year, 4);
        case "yyyyyy":
          return a ? r({ year: "numeric" }, "year") : this.num(e.year, 6);
        // eras
        case "G":
          return p("short");
        case "GG":
          return p("long");
        case "GGGGG":
          return p("narrow");
        case "kk":
          return this.num(e.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(e.weekYear, 4);
        case "W":
          return this.num(e.weekNumber);
        case "WW":
          return this.num(e.weekNumber, 2);
        case "n":
          return this.num(e.localWeekNumber);
        case "nn":
          return this.num(e.localWeekNumber, 2);
        case "ii":
          return this.num(e.localWeekYear.toString().slice(-2), 2);
        case "iiii":
          return this.num(e.localWeekYear, 4);
        case "o":
          return this.num(e.ordinal);
        case "ooo":
          return this.num(e.ordinal, 3);
        case "q":
          return this.num(e.quarter);
        case "qq":
          return this.num(e.quarter, 2);
        case "X":
          return this.num(Math.floor(e.ts / 1e3));
        case "x":
          return this.num(e.ts);
        default:
          return c(h);
      }
    };
    return q1(Y.parseFormat(A), B);
  }
  formatDurationFromString(e, A) {
    const i = this.opts.signMode === "negativeLargestOnly" ? -1 : 1, a = (c) => {
      switch (c[0]) {
        case "S":
          return "milliseconds";
        case "s":
          return "seconds";
        case "m":
          return "minutes";
        case "h":
          return "hours";
        case "d":
          return "days";
        case "w":
          return "weeks";
        case "M":
          return "months";
        case "y":
          return "years";
        default:
          return null;
      }
    }, r = (c, p) => (B) => {
      const h = a(B);
      if (h) {
        const S = p.isNegativeDuration && h !== p.largestUnit ? i : 1;
        let ne;
        return this.opts.signMode === "negativeLargestOnly" && h !== p.largestUnit ? ne = "never" : this.opts.signMode === "all" ? ne = "always" : ne = "auto", this.num(c.get(h) * S, B.length, ne);
      } else
        return B;
    }, n = Y.parseFormat(A), s = n.reduce(
      (c, { literal: p, val: B }) => p ? c : c.concat(B),
      []
    ), o = e.shiftTo(...s.map(a).filter((c) => c)), d = {
      isNegativeDuration: o < 0,
      // this relies on "collapsed" being based on "shiftTo", which builds up the object
      // in order
      largestUnit: Object.keys(o.values)[0]
    };
    return q1(n, r(o, d));
  }
}
const sa = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function Bt(...t) {
  const e = t.reduce((A, i) => A + i.source, "");
  return RegExp(`^${e}$`);
}
function bt(...t) {
  return (e) => t.reduce(
    ([A, i, a], r) => {
      const [n, s, o] = r(e, a);
      return [{ ...A, ...n }, s || i, o];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function Et(t, ...e) {
  if (t == null)
    return [null, null];
  for (const [A, i] of e) {
    const a = A.exec(t);
    if (a)
      return i(a);
  }
  return [null, null];
}
function oa(...t) {
  return (e, A) => {
    const i = {};
    let a;
    for (a = 0; a < t.length; a++)
      i[t[a]] = Me(e[A + a]);
    return [i, null, A + a];
  };
}
const la = /(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/, zn = `(?:${la.source}?(?:\\[(${sa.source})\\])?)?`, I1 = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, ga = RegExp(`${I1.source}${zn}`), m1 = RegExp(`(?:[Tt]${ga.source})?`), Nn = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, Fn = /(\d{4})-?W(\d\d)(?:-?(\d))?/, Rn = /(\d{4})-?(\d{3})/, Vn = oa("weekYear", "weekNumber", "weekDay"), Pn = oa("year", "ordinal"), Un = /(\d{4})-(\d\d)-(\d\d)/, da = RegExp(
  `${I1.source} ?(?:${la.source}|(${sa.source}))?`
), Kn = RegExp(`(?: ${da.source})?`);
function dt(t, e, A) {
  const i = t[e];
  return m(i) ? A : Me(i);
}
function Gn(t, e) {
  return [{
    year: dt(t, e),
    month: dt(t, e + 1, 1),
    day: dt(t, e + 2, 1)
  }, null, e + 3];
}
function Qt(t, e) {
  return [{
    hours: dt(t, e, 0),
    minutes: dt(t, e + 1, 0),
    seconds: dt(t, e + 2, 0),
    milliseconds: u1(t[e + 3])
  }, null, e + 4];
}
function Gt(t, e) {
  const A = !t[e] && !t[e + 1], i = fA(t[e + 1], t[e + 2]), a = A ? null : N.instance(i);
  return [{}, a, e + 3];
}
function jt(t, e) {
  const A = t[e] ? ke.create(t[e]) : null;
  return [{}, A, e + 1];
}
const jn = RegExp(`^T?${I1.source}$`), Xn = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function Wn(t) {
  const [e, A, i, a, r, n, s, o, d] = t, c = e[0] === "-", p = o && o[0] === "-", B = (h, S = !1) => h !== void 0 && (S || h && c) ? -h : h;
  return [
    {
      years: B(Re(A)),
      months: B(Re(i)),
      weeks: B(Re(a)),
      days: B(Re(r)),
      hours: B(Re(n)),
      minutes: B(Re(s)),
      seconds: B(Re(o), o === "-0"),
      milliseconds: B(u1(d), p)
    }
  ];
}
const qn = {
  GMT: 0,
  EDT: -240,
  EST: -300,
  CDT: -300,
  CST: -360,
  MDT: -360,
  MST: -420,
  PDT: -420,
  PST: -480
};
function B1(t, e, A, i, a, r, n) {
  const s = {
    year: e.length === 2 ? WA(Me(e)) : Me(e),
    month: ea.indexOf(A) + 1,
    day: Me(i),
    hour: Me(a),
    minute: Me(r)
  };
  return n && (s.second = Me(n)), t && (s.weekday = t.length > 3 ? Aa.indexOf(t) + 1 : ia.indexOf(t) + 1), s;
}
const _n = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function $n(t) {
  const [
    ,
    e,
    A,
    i,
    a,
    r,
    n,
    s,
    o,
    d,
    c,
    p
  ] = t, B = B1(e, a, i, A, r, n, s);
  let h;
  return o ? h = qn[o] : d ? h = 0 : h = fA(c, p), [B, new N(h)];
}
function es(t) {
  return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const ts = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, As = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, is = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function _1(t) {
  const [, e, A, i, a, r, n, s] = t;
  return [B1(e, a, i, A, r, n, s), N.utcInstance];
}
function as(t) {
  const [, e, A, i, a, r, n, s] = t;
  return [B1(e, s, A, i, a, r, n), N.utcInstance];
}
const rs = Bt(Nn, m1), ns = Bt(Fn, m1), ss = Bt(Rn, m1), os = Bt(ga), Ca = bt(
  Gn,
  Qt,
  Gt,
  jt
), ls = bt(
  Vn,
  Qt,
  Gt,
  jt
), gs = bt(
  Pn,
  Qt,
  Gt,
  jt
), ds = bt(
  Qt,
  Gt,
  jt
);
function Cs(t) {
  return Et(
    t,
    [rs, Ca],
    [ns, ls],
    [ss, gs],
    [os, ds]
  );
}
function cs(t) {
  return Et(es(t), [_n, $n]);
}
function ps(t) {
  return Et(
    t,
    [ts, _1],
    [As, _1],
    [is, as]
  );
}
function us(t) {
  return Et(t, [Xn, Wn]);
}
const hs = bt(Qt);
function Is(t) {
  return Et(t, [jn, hs]);
}
const ms = Bt(Un, Kn), Bs = Bt(da), bs = bt(
  Qt,
  Gt,
  jt
);
function Es(t) {
  return Et(
    t,
    [ms, Ca],
    [Bs, bs]
  );
}
const $1 = "Invalid Duration", ca = {
  weeks: {
    days: 7,
    hours: 168,
    minutes: 10080,
    seconds: 10080 * 60,
    milliseconds: 10080 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 1440,
    seconds: 1440 * 60,
    milliseconds: 1440 * 60 * 1e3
  },
  hours: { minutes: 60, seconds: 3600, milliseconds: 3600 * 1e3 },
  minutes: { seconds: 60, milliseconds: 60 * 1e3 },
  seconds: { milliseconds: 1e3 }
}, Qs = {
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 2184,
    minutes: 2184 * 60,
    seconds: 2184 * 60 * 60,
    milliseconds: 2184 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 720,
    minutes: 720 * 60,
    seconds: 720 * 60 * 60,
    milliseconds: 720 * 60 * 60 * 1e3
  },
  ...ca
}, _ = 146097 / 400, it = 146097 / 4800, fs = {
  years: {
    quarters: 4,
    months: 12,
    weeks: _ / 7,
    days: _,
    hours: _ * 24,
    minutes: _ * 24 * 60,
    seconds: _ * 24 * 60 * 60,
    milliseconds: _ * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: _ / 28,
    days: _ / 4,
    hours: _ * 24 / 4,
    minutes: _ * 24 * 60 / 4,
    seconds: _ * 24 * 60 * 60 / 4,
    milliseconds: _ * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: it / 7,
    days: it,
    hours: it * 24,
    minutes: it * 24 * 60,
    seconds: it * 24 * 60 * 60,
    milliseconds: it * 24 * 60 * 60 * 1e3
  },
  ...ca
}, Ge = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], vs = Ge.slice(0).reverse();
function Ee(t, e, A = !1) {
  const i = {
    values: A ? e.values : { ...t.values, ...e.values || {} },
    loc: t.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || t.conversionAccuracy,
    matrix: e.matrix || t.matrix
  };
  return new f(i);
}
function pa(t, e) {
  let A = e.milliseconds ?? 0;
  for (const i of vs.slice(1))
    e[i] && (A += e[i] * t[i].milliseconds);
  return A;
}
function ei(t, e) {
  const A = pa(t, e) < 0 ? -1 : 1;
  Ge.reduceRight((i, a) => {
    if (m(e[a]))
      return i;
    if (i) {
      const r = e[i] * A, n = t[a][i], s = Math.floor(r / n);
      e[a] += s * A, e[i] -= s * n * A;
    }
    return a;
  }, null), Ge.reduce((i, a) => {
    if (m(e[a]))
      return i;
    if (i) {
      const r = e[i] % 1;
      e[i] -= r, e[a] += r * t[i][a];
    }
    return a;
  }, null);
}
function ti(t) {
  const e = {};
  for (const [A, i] of Object.entries(t))
    i !== 0 && (e[A] = i);
  return e;
}
class f {
  /**
   * @private
   */
  constructor(e) {
    const A = e.conversionAccuracy === "longterm" || !1;
    let i = A ? fs : Qs;
    e.matrix && (i = e.matrix), this.values = e.values, this.loc = e.loc || w.create(), this.conversionAccuracy = A ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = i, this.isLuxonDuration = !0;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromMillis(e, A) {
    return f.fromObject({ milliseconds: e }, A);
  }
  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the custom conversion system to use
   * @return {Duration}
   */
  static fromObject(e, A = {}) {
    if (e == null || typeof e != "object")
      throw new H(
        `Duration.fromObject: argument expected to be an object, got ${e === null ? "null" : typeof e}`
      );
    return new f({
      values: pA(e, f.normalizeUnit),
      loc: w.fromObject(A),
      conversionAccuracy: A.conversionAccuracy,
      matrix: A.matrix
    });
  }
  /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */
  static fromDurationLike(e) {
    if (De(e))
      return f.fromMillis(e);
    if (f.isDuration(e))
      return e;
    if (typeof e == "object")
      return f.fromObject(e);
    throw new H(
      `Unknown duration argument ${e} of type ${typeof e}`
    );
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the preset conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  static fromISO(e, A) {
    const [i] = us(e);
    return i ? f.fromObject(i, A) : f.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  static fromISOTime(e, A) {
    const [i] = Is(e);
    return i ? f.fromObject(i, A) : f.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(e, A = null) {
    if (!e)
      throw new H("need to specify a reason the Duration is invalid");
    const i = e instanceof le ? e : new le(e, A);
    if (J.throwOnInvalid)
      throw new Xr(i);
    return new f({ invalid: i });
  }
  /**
   * @private
   */
  static normalizeUnit(e) {
    const A = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[e && e.toLowerCase()];
    if (!A) throw new Qi(e);
    return A;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDuration(e) {
    return e && e.isLuxonDuration || !1;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * Tokens can be escaped by wrapping with single quotes.
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @param {'negative'|'all'|'negativeLargestOnly'} [opts.signMode=negative] - How to handle signs
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @example Duration.fromObject({ days: 6, seconds: 2 }).toFormat("d s", { signMode: "all" }) //=> "+6 +2"
   * @example Duration.fromObject({ days: -6, seconds: -2 }).toFormat("d s", { signMode: "all" }) //=> "-6 -2"
   * @example Duration.fromObject({ days: -6, seconds: -2 }).toFormat("d s", { signMode: "negativeLargestOnly" }) //=> "-6 2"
   * @return {string}
   */
  toFormat(e, A = {}) {
    const i = {
      ...A,
      floor: A.round !== !1 && A.floor !== !1
    };
    return this.isValid ? Y.create(this.loc, i).formatDurationFromString(this, e) : $1;
  }
  /**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior, use `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
   * @param {Object} opts - Formatting options. Accepts the same keys as the options parameter of the native `Intl.NumberFormat` constructor, as well as `listStyle`.
   * @param {string} [opts.listStyle='narrow'] - How to format the merged list. Corresponds to the `style` property of the options parameter of the native `Intl.ListFormat` constructor.
   * @param {boolean} [opts.showZeros=true] - Show all units previously used by the duration even if they are zero
   * @example
   * ```js
   * var dur = Duration.fromObject({ months: 1, weeks: 0, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 month, 0 weeks, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 month, 0 weeks, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 mth, 0 wks, 5 hr, 6 min'
   * dur.toHuman({ showZeros: false }) //=> '1 month, 5 hours, 6 minutes'
   * ```
   */
  toHuman(e = {}) {
    if (!this.isValid) return $1;
    const A = e.showZeros !== !1, i = Ge.map((a) => {
      const r = this.values[a];
      return m(r) || r === 0 && !A ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...e, unit: a.slice(0, -1) }).format(r);
    }).filter((a) => a);
    return this.loc.listFormatter({ type: "conjunction", style: e.listStyle || "narrow", ...e }).format(i);
  }
  /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  toObject() {
    return this.isValid ? { ...this.values } : {};
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  toISO() {
    if (!this.isValid) return null;
    let e = "P";
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += h1(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  toISOTime(e = {}) {
    if (!this.isValid) return null;
    const A = this.toMillis();
    return A < 0 || A >= 864e5 ? null : (e = {
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended",
      ...e,
      includeOffset: !1
    }, I.fromMillis(A, { zone: "UTC" }).toISOTime(e));
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  toString() {
    return this.toISO();
  }
  /**
   * Returns a string representation of this Duration appropriate for the REPL.
   * @return {string}
   */
  [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Duration { values: ${JSON.stringify(this.values)} }` : `Duration { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? pa(this.matrix, this.values) : NaN;
  }
  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  plus(e) {
    if (!this.isValid) return this;
    const A = f.fromDurationLike(e), i = {};
    for (const a of Ge)
      (ut(A.values, a) || ut(this.values, a)) && (i[a] = A.get(a) + this.get(a));
    return Ee(this, { values: i }, !0);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(e) {
    if (!this.isValid) return this;
    const A = f.fromDurationLike(e);
    return this.plus(A.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  mapUnits(e) {
    if (!this.isValid) return this;
    const A = {};
    for (const i of Object.keys(this.values))
      A[i] = $i(e(this.values[i], i));
    return Ee(this, { values: A }, !0);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  get(e) {
    return this[f.normalizeUnit(e)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  set(e) {
    if (!this.isValid) return this;
    const A = { ...this.values, ...pA(e, f.normalizeUnit) };
    return Ee(this, { values: A });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale: e, numberingSystem: A, conversionAccuracy: i, matrix: a } = {}) {
    const n = { loc: this.loc.clone({ locale: e, numberingSystem: A }), matrix: a, conversionAccuracy: i };
    return Ee(this, n);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  as(e) {
    return this.isValid ? this.shiftTo(e).get(e) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * Assuming the overall value of the Duration is positive, this means:
   * - excessive values for lower-order units are converted to higher-order units (if possible, see first and second example)
   * - negative lower-order units are converted to higher order units (there must be such a higher order unit, otherwise
   *   the overall value would be negative, see third example)
   * - fractional values for higher-order units are converted to lower-order units (if possible, see fourth example)
   *
   * If the overall value is negative, the result of this method is equivalent to `this.negate().normalize().negate()`.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ days: 5000 }).normalize().toObject() //=> { days: 5000 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @example Duration.fromObject({ years: 2.5, days: 0, hours: 0 }).normalize().toObject() //=> { years: 2, days: 182, hours: 12 }
   * @return {Duration}
   */
  normalize() {
    if (!this.isValid) return this;
    const e = this.toObject();
    return ei(this.matrix, e), Ee(this, { values: e }, !0);
  }
  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid) return this;
    const e = ti(this.normalize().shiftToAll().toObject());
    return Ee(this, { values: e }, !0);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  shiftTo(...e) {
    if (!this.isValid) return this;
    if (e.length === 0)
      return this;
    e = e.map((n) => f.normalizeUnit(n));
    const A = {}, i = {}, a = this.toObject();
    let r;
    for (const n of Ge)
      if (e.indexOf(n) >= 0) {
        r = n;
        let s = 0;
        for (const d in i)
          s += this.matrix[d][n] * i[d], i[d] = 0;
        De(a[n]) && (s += a[n]);
        const o = Math.trunc(s);
        A[n] = o, i[n] = (s * 1e3 - o * 1e3) / 1e3;
      } else De(a[n]) && (i[n] = a[n]);
    for (const n in i)
      i[n] !== 0 && (A[r] += n === r ? i[n] : i[n] / this.matrix[r][n]);
    return ei(this.matrix, A), Ee(this, { values: A }, !0);
  }
  /**
   * Shift this Duration to all available units.
   * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
   * @return {Duration}
   */
  shiftToAll() {
    return this.isValid ? this.shiftTo(
      "years",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
      "milliseconds"
    ) : this;
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  negate() {
    if (!this.isValid) return this;
    const e = {};
    for (const A of Object.keys(this.values))
      e[A] = this.values[A] === 0 ? 0 : -this.values[A];
    return Ee(this, { values: e }, !0);
  }
  /**
   * Removes all units with values equal to 0 from this Duration.
   * @example Duration.fromObject({ years: 2, days: 0, hours: 0, minutes: 0 }).removeZeros().toObject() //=> { years: 2 }
   * @return {Duration}
   */
  removeZeros() {
    if (!this.isValid) return this;
    const e = ti(this.values);
    return Ee(this, { values: e }, !0);
  }
  /**
   * Get the years.
   * @type {number}
   */
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  /**
   * Get the quarters.
   * @type {number}
   */
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  /**
   * Get the months.
   * @type {number}
   */
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  /**
   * Get the weeks
   * @type {number}
   */
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  /**
   * Get the days.
   * @type {number}
   */
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  /**
   * Get the hours.
   * @type {number}
   */
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  /**
   * Get the minutes.
   * @type {number}
   */
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  /**
   * Get the seconds.
   * @return {number}
   */
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  /**
   * Get the milliseconds.
   * @return {number}
   */
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  /**
   * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
   * on invalid DateTimes or Intervals.
   * @return {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this Duration became invalid, or null if the Duration is valid
   * @return {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  equals(e) {
    if (!this.isValid || !e.isValid || !this.loc.equals(e.loc))
      return !1;
    function A(i, a) {
      return i === void 0 || i === 0 ? a === void 0 || a === 0 : i === a;
    }
    for (const i of Ge)
      if (!A(this.values[i], e.values[i]))
        return !1;
    return !0;
  }
}
const at = "Invalid Interval";
function ks(t, e) {
  return !t || !t.isValid ? M.invalid("missing or invalid start") : !e || !e.isValid ? M.invalid("missing or invalid end") : e < t ? M.invalid(
    "end before start",
    `The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`
  ) : null;
}
class M {
  /**
   * @private
   */
  constructor(e) {
    this.s = e.start, this.e = e.end, this.invalid = e.invalid || null, this.isLuxonInterval = !0;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */
  static invalid(e, A = null) {
    if (!e)
      throw new H("need to specify a reason the Interval is invalid");
    const i = e instanceof le ? e : new le(e, A);
    if (J.throwOnInvalid)
      throw new jr(i);
    return new M({ invalid: i });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(e, A) {
    const i = Mt(e), a = Mt(A), r = ks(i, a);
    return r ?? new M({
      start: i,
      end: a
    });
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static after(e, A) {
    const i = f.fromDurationLike(A), a = Mt(e);
    return M.fromDateTimes(a, a.plus(i));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(e, A) {
    const i = f.fromDurationLike(A), a = Mt(e);
    return M.fromDateTimes(a.minus(i), a);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  static fromISO(e, A) {
    const [i, a] = (e || "").split("/", 2);
    if (i && a) {
      let r, n;
      try {
        r = I.fromISO(i, A), n = r.isValid;
      } catch {
        n = !1;
      }
      let s, o;
      try {
        s = I.fromISO(a, A), o = s.isValid;
      } catch {
        o = !1;
      }
      if (n && o)
        return M.fromDateTimes(r, s);
      if (n) {
        const d = f.fromISO(a, A);
        if (d.isValid)
          return M.after(r, d);
      } else if (o) {
        const d = f.fromISO(i, A);
        if (d.isValid)
          return M.before(s, d);
      }
    }
    return M.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isInterval(e) {
    return e && e.isLuxonInterval || !1;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  get start() {
    return this.isValid ? this.s : null;
  }
  /**
   * Returns the end of the Interval. This is the first instant which is not part of the interval
   * (Interval is half-open).
   * @type {DateTime}
   */
  get end() {
    return this.isValid ? this.e : null;
  }
  /**
   * Returns the last DateTime included in the interval (since end is not part of the interval)
   * @type {DateTime}
   */
  get lastDateTime() {
    return this.isValid && this.e ? this.e.minus(1) : null;
  }
  /**
   * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
   * @type {boolean}
   */
  get isValid() {
    return this.invalidReason === null;
  }
  /**
   * Returns an error code if this Interval is invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  length(e = "milliseconds") {
    return this.isValid ? this.toDuration(e).get(e) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; this operation will always use the locale of the start DateTime
   * @return {number}
   */
  count(e = "milliseconds", A) {
    if (!this.isValid) return NaN;
    const i = this.start.startOf(e, A);
    let a;
    return A?.useLocaleWeeks ? a = this.end.reconfigure({ locale: i.locale }) : a = this.end, a = a.startOf(e, A), Math.floor(a.diff(i, e).get(e)) + (a.valueOf() !== this.end.valueOf());
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  hasSame(e) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, e) : !1;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isAfter(e) {
    return this.isValid ? this.s > e : !1;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isBefore(e) {
    return this.isValid ? this.e <= e : !1;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  contains(e) {
    return this.isValid ? this.s <= e && this.e > e : !1;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  set({ start: e, end: A } = {}) {
    return this.isValid ? M.fromDateTimes(e || this.s, A || this.e) : this;
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...e) {
    if (!this.isValid) return [];
    const A = e.map(Mt).filter((n) => this.contains(n)).sort((n, s) => n.toMillis() - s.toMillis()), i = [];
    let { s: a } = this, r = 0;
    for (; a < this.e; ) {
      const n = A[r] || this.e, s = +n > +this.e ? this.e : n;
      i.push(M.fromDateTimes(a, s)), a = s, r += 1;
    }
    return i;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */
  splitBy(e) {
    const A = f.fromDurationLike(e);
    if (!this.isValid || !A.isValid || A.as("milliseconds") === 0)
      return [];
    let { s: i } = this, a = 1, r;
    const n = [];
    for (; i < this.e; ) {
      const s = this.start.plus(A.mapUnits((o) => o * a));
      r = +s > +this.e ? this.e : s, n.push(M.fromDateTimes(i, r)), i = r, a += 1;
    }
    return n;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */
  divideEqually(e) {
    return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : [];
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  overlaps(e) {
    return this.e > e.s && this.s < e.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsStart(e) {
    return this.isValid ? +this.e == +e.s : !1;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsEnd(e) {
    return this.isValid ? +e.e == +this.s : !1;
  }
  /**
   * Returns true if this Interval fully contains the specified Interval, specifically if the intersect (of this Interval and the other Interval) is equal to the other Interval; false otherwise.
   * @param {Interval} other
   * @return {boolean}
   */
  engulfs(e) {
    return this.isValid ? this.s <= e.s && this.e >= e.e : !1;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  equals(e) {
    return !this.isValid || !e.isValid ? !1 : this.s.equals(e.s) && this.e.equals(e.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  intersection(e) {
    if (!this.isValid) return this;
    const A = this.s > e.s ? this.s : e.s, i = this.e < e.e ? this.e : e.e;
    return A >= i ? null : M.fromDateTimes(A, i);
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  union(e) {
    if (!this.isValid) return this;
    const A = this.s < e.s ? this.s : e.s, i = this.e > e.e ? this.e : e.e;
    return M.fromDateTimes(A, i);
  }
  /**
   * Merge an array of Intervals into an equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * The resulting array will contain the Intervals in ascending order, that is, starting with the earliest Interval
   * and ending with the latest.
   *
   * @param {Array} intervals
   * @return {Array}
   */
  static merge(e) {
    const [A, i] = e.sort((a, r) => a.s - r.s).reduce(
      ([a, r], n) => r ? r.overlaps(n) || r.abutsStart(n) ? [a, r.union(n)] : [a.concat([r]), n] : [a, n],
      [[], null]
    );
    return i && A.push(i), A;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static xor(e) {
    let A = null, i = 0;
    const a = [], r = e.map((o) => [
      { time: o.s, type: "s" },
      { time: o.e, type: "e" }
    ]), n = Array.prototype.concat(...r), s = n.sort((o, d) => o.time - d.time);
    for (const o of s)
      i += o.type === "s" ? 1 : -1, i === 1 ? A = o.time : (A && +A != +o.time && a.push(M.fromDateTimes(A, o.time)), A = null);
    return M.merge(a);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...e) {
    return M.xor([this].concat(e)).map((A) => this.intersection(A)).filter((A) => A && !A.isEmpty());
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : at;
  }
  /**
   * Returns a string representation of this Interval appropriate for the REPL.
   * @return {string}
   */
  [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }` : `Interval { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns a localized string representing this Interval. Accepts the same options as the
   * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
   * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
   * is browser-specific, but in general it will return an appropriate representation of the
   * Interval in the assigned locale. Defaults to the system's locale if no locale has been
   * specified.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
   * Intl.DateTimeFormat constructor options.
   * @param {Object} opts - Options to override the configuration of the start DateTime.
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
   * @return {string}
   */
  toLocaleString(e = dA, A = {}) {
    return this.isValid ? Y.create(this.s.loc.clone(A), e).formatInterval(this) : at;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(e) {
    return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : at;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : at;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(e) {
    return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : at;
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format
   * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
   * formatting tool.
   * @param {string} dateFormat - The format string. This string formats the start and end time.
   * See {@link DateTime#toFormat} for details.
   * @param {Object} opts - Options.
   * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
   * representations.
   * @return {string}
   */
  toFormat(e, { separator: A = " – " } = {}) {
    return this.isValid ? `${this.s.toFormat(e)}${A}${this.e.toFormat(e)}` : at;
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  toDuration(e, A) {
    return this.isValid ? this.e.diff(this.s, e, A) : f.invalid(this.invalidReason);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(e) {
    return M.fromDateTimes(e(this.s), e(this.e));
  }
}
class qt {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(e = J.defaultZone) {
    const A = I.now().setZone(e).set({ month: 12 });
    return !e.isUniversal && A.offset !== A.set({ month: 6 }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(e) {
    return ke.isValidZone(e);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  static normalizeZone(e) {
    return Le(e, J.defaultZone);
  }
  /**
   * Get the weekday on which the week starts according to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number} the start of the week, 1 for Monday through 7 for Sunday
   */
  static getStartOfWeek({ locale: e = null, locObj: A = null } = {}) {
    return (A || w.create(e)).getStartOfWeek();
  }
  /**
   * Get the minimum number of days necessary in a week before it is considered part of the next year according
   * to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number}
   */
  static getMinimumDaysInFirstWeek({ locale: e = null, locObj: A = null } = {}) {
    return (A || w.create(e)).getMinDaysInFirstWeek();
  }
  /**
   * Get the weekdays, which are considered the weekend according to the given locale
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number[]} an array of weekdays, 1 for Monday through 7 for Sunday
   */
  static getWeekendWeekdays({ locale: e = null, locObj: A = null } = {}) {
    return (A || w.create(e)).getWeekendDays().slice();
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */
  static months(e = "long", { locale: A = null, numberingSystem: i = null, locObj: a = null, outputCalendar: r = "gregory" } = {}) {
    return (a || w.create(A, i, r)).months(e);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */
  static monthsFormat(e = "long", { locale: A = null, numberingSystem: i = null, locObj: a = null, outputCalendar: r = "gregory" } = {}) {
    return (a || w.create(A, i, r)).months(e, !0);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */
  static weekdays(e = "long", { locale: A = null, numberingSystem: i = null, locObj: a = null } = {}) {
    return (a || w.create(A, i, null)).weekdays(e);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */
  static weekdaysFormat(e = "long", { locale: A = null, numberingSystem: i = null, locObj: a = null } = {}) {
    return (a || w.create(A, i, null)).weekdays(e, !0);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */
  static meridiems({ locale: e = null } = {}) {
    return w.create(e).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */
  static eras(e = "short", { locale: A = null } = {}) {
    return w.create(A, null, "gregory").eras(e);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * * `localeWeek`: whether this environment supports different weekdays for the start of the week based on the locale
   * @example Info.features() //=> { relative: false, localeWeek: true }
   * @return {Object}
   */
  static features() {
    return { relative: Wi(), localeWeek: qi() };
  }
}
function Ai(t, e) {
  const A = (a) => a.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), i = A(e) - A(t);
  return Math.floor(f.fromMillis(i).as("days"));
}
function ys(t, e, A) {
  const i = [
    ["years", (o, d) => d.year - o.year],
    ["quarters", (o, d) => d.quarter - o.quarter + (d.year - o.year) * 4],
    ["months", (o, d) => d.month - o.month + (d.year - o.year) * 12],
    [
      "weeks",
      (o, d) => {
        const c = Ai(o, d);
        return (c - c % 7) / 7;
      }
    ],
    ["days", Ai]
  ], a = {}, r = t;
  let n, s;
  for (const [o, d] of i)
    A.indexOf(o) >= 0 && (n = o, a[o] = d(t, e), s = r.plus(a), s > e ? (a[o]--, t = r.plus(a), t > e && (s = t, a[o]--, t = r.plus(a))) : t = s);
  return [t, a, s, n];
}
function ws(t, e, A, i) {
  let [a, r, n, s] = ys(t, e, A);
  const o = e - a, d = A.filter(
    (p) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(p) >= 0
  );
  d.length === 0 && (n < e && (n = a.plus({ [s]: 1 })), n !== a && (r[s] = (r[s] || 0) + o / (n - a)));
  const c = f.fromObject(r, i);
  return d.length > 0 ? f.fromMillis(o, i).shiftTo(...d).plus(c) : c;
}
const Ss = "missing Intl.DateTimeFormat.formatToParts support";
function v(t, e = (A) => A) {
  return { regex: t, deser: ([A]) => e(mn(A)) };
}
const Ms = " ", ua = `[ ${Ms}]`, ha = new RegExp(ua, "g");
function Js(t) {
  return t.replace(/\./g, "\\.?").replace(ha, ua);
}
function ii(t) {
  return t.replace(/\./g, "").replace(ha, " ").toLowerCase();
}
function oe(t, e) {
  return t === null ? null : {
    regex: RegExp(t.map(Js).join("|")),
    deser: ([A]) => t.findIndex((i) => ii(A) === ii(i)) + e
  };
}
function ai(t, e) {
  return { regex: t, deser: ([, A, i]) => fA(A, i), groups: e };
}
function _t(t) {
  return { regex: t, deser: ([e]) => e };
}
function Ls(t) {
  return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function Ds(t, e) {
  const A = se(e), i = se(e, "{2}"), a = se(e, "{3}"), r = se(e, "{4}"), n = se(e, "{6}"), s = se(e, "{1,2}"), o = se(e, "{1,3}"), d = se(e, "{1,6}"), c = se(e, "{1,9}"), p = se(e, "{2,4}"), B = se(e, "{4,6}"), h = (ce) => ({ regex: RegExp(Ls(ce.val)), deser: ([At]) => At, literal: !0 }), ne = ((ce) => {
    if (t.literal)
      return h(ce);
    switch (ce.val) {
      // era
      case "G":
        return oe(e.eras("short"), 0);
      case "GG":
        return oe(e.eras("long"), 0);
      // years
      case "y":
        return v(d);
      case "yy":
        return v(p, WA);
      case "yyyy":
        return v(r);
      case "yyyyy":
        return v(B);
      case "yyyyyy":
        return v(n);
      // months
      case "M":
        return v(s);
      case "MM":
        return v(i);
      case "MMM":
        return oe(e.months("short", !0), 1);
      case "MMMM":
        return oe(e.months("long", !0), 1);
      case "L":
        return v(s);
      case "LL":
        return v(i);
      case "LLL":
        return oe(e.months("short", !1), 1);
      case "LLLL":
        return oe(e.months("long", !1), 1);
      // dates
      case "d":
        return v(s);
      case "dd":
        return v(i);
      // ordinals
      case "o":
        return v(o);
      case "ooo":
        return v(a);
      // time
      case "HH":
        return v(i);
      case "H":
        return v(s);
      case "hh":
        return v(i);
      case "h":
        return v(s);
      case "mm":
        return v(i);
      case "m":
        return v(s);
      case "q":
        return v(s);
      case "qq":
        return v(i);
      case "s":
        return v(s);
      case "ss":
        return v(i);
      case "S":
        return v(o);
      case "SSS":
        return v(a);
      case "u":
        return _t(c);
      case "uu":
        return _t(s);
      case "uuu":
        return v(A);
      // meridiem
      case "a":
        return oe(e.meridiems(), 0);
      // weekYear (k)
      case "kkkk":
        return v(r);
      case "kk":
        return v(p, WA);
      // weekNumber (W)
      case "W":
        return v(s);
      case "WW":
        return v(i);
      // weekdays
      case "E":
      case "c":
        return v(A);
      case "EEE":
        return oe(e.weekdays("short", !1), 1);
      case "EEEE":
        return oe(e.weekdays("long", !1), 1);
      case "ccc":
        return oe(e.weekdays("short", !0), 1);
      case "cccc":
        return oe(e.weekdays("long", !0), 1);
      // offset/zone
      case "Z":
      case "ZZ":
        return ai(new RegExp(`([+-]${s.source})(?::(${i.source}))?`), 2);
      case "ZZZ":
        return ai(new RegExp(`([+-]${s.source})(${i.source})?`), 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are
      case "z":
        return _t(/[a-z_+-/]{1,256}?/i);
      // this special-case "token" represents a place where a macro-token expanded into a white-space literal
      // in this case we accept any non-newline white-space
      case " ":
        return _t(/[^\S\n\r]/);
      default:
        return h(ce);
    }
  })(t) || {
    invalidReason: Ss
  };
  return ne.token = t, ne;
}
const xs = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour12: {
    numeric: "h",
    "2-digit": "hh"
  },
  hour24: {
    numeric: "H",
    "2-digit": "HH"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  },
  timeZoneName: {
    long: "ZZZZZ",
    short: "ZZZ"
  }
};
function Ts(t, e, A) {
  const { type: i, value: a } = t;
  if (i === "literal") {
    const o = /^\s+$/.test(a);
    return {
      literal: !o,
      val: o ? " " : a
    };
  }
  const r = e[i];
  let n = i;
  i === "hour" && (e.hour12 != null ? n = e.hour12 ? "hour12" : "hour24" : e.hourCycle != null ? e.hourCycle === "h11" || e.hourCycle === "h12" ? n = "hour12" : n = "hour24" : n = A.hour12 ? "hour12" : "hour24");
  let s = xs[n];
  if (typeof s == "object" && (s = s[r]), s)
    return {
      literal: !1,
      val: s
    };
}
function Os(t) {
  return [`^${t.map((A) => A.regex).reduce((A, i) => `${A}(${i.source})`, "")}$`, t];
}
function Hs(t, e, A) {
  const i = t.match(e);
  if (i) {
    const a = {};
    let r = 1;
    for (const n in A)
      if (ut(A, n)) {
        const s = A[n], o = s.groups ? s.groups + 1 : 1;
        !s.literal && s.token && (a[s.token.val[0]] = s.deser(i.slice(r, r + o))), r += o;
      }
    return [i, a];
  } else
    return [i, {}];
}
function Zs(t) {
  const e = (r) => {
    switch (r) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let A = null, i;
  return m(t.z) || (A = ke.create(t.z)), m(t.Z) || (A || (A = new N(t.Z)), i = t.Z), m(t.q) || (t.M = (t.q - 1) * 3 + 1), m(t.h) || (t.h < 12 && t.a === 1 ? t.h += 12 : t.h === 12 && t.a === 0 && (t.h = 0)), t.G === 0 && t.y && (t.y = -t.y), m(t.u) || (t.S = u1(t.u)), [Object.keys(t).reduce((r, n) => {
    const s = e(n);
    return s && (r[s] = t[n]), r;
  }, {}), A, i];
}
let TA = null;
function Ys() {
  return TA || (TA = I.fromMillis(1555555555555)), TA;
}
function zs(t, e) {
  if (t.literal)
    return t;
  const A = Y.macroTokenToFormatOpts(t.val), i = ba(A, e);
  return i == null || i.includes(void 0) ? t : i;
}
function Ia(t, e) {
  return Array.prototype.concat(...t.map((A) => zs(A, e)));
}
class ma {
  constructor(e, A) {
    if (this.locale = e, this.format = A, this.tokens = Ia(Y.parseFormat(A), e), this.units = this.tokens.map((i) => Ds(i, e)), this.disqualifyingUnit = this.units.find((i) => i.invalidReason), !this.disqualifyingUnit) {
      const [i, a] = Os(this.units);
      this.regex = RegExp(i, "i"), this.handlers = a;
    }
  }
  explainFromTokens(e) {
    if (this.isValid) {
      const [A, i] = Hs(e, this.regex, this.handlers), [a, r, n] = i ? Zs(i) : [null, null, void 0];
      if (ut(i, "a") && ut(i, "H"))
        throw new st(
          "Can't include meridiem when specifying 24-hour format"
        );
      return {
        input: e,
        tokens: this.tokens,
        regex: this.regex,
        rawMatches: A,
        matches: i,
        result: a,
        zone: r,
        specificOffset: n
      };
    } else
      return { input: e, tokens: this.tokens, invalidReason: this.invalidReason };
  }
  get isValid() {
    return !this.disqualifyingUnit;
  }
  get invalidReason() {
    return this.disqualifyingUnit ? this.disqualifyingUnit.invalidReason : null;
  }
}
function Ba(t, e, A) {
  return new ma(t, A).explainFromTokens(e);
}
function Ns(t, e, A) {
  const { result: i, zone: a, specificOffset: r, invalidReason: n } = Ba(t, e, A);
  return [i, a, r, n];
}
function ba(t, e) {
  if (!t)
    return null;
  const i = Y.create(e, t).dtFormatter(Ys()), a = i.formatToParts(), r = i.resolvedOptions();
  return a.map((n) => Ts(n, t, r));
}
const OA = "Invalid DateTime", ri = 864e13;
function Lt(t) {
  return new le("unsupported zone", `the zone "${t.name}" is not supported`);
}
function HA(t) {
  return t.weekData === null && (t.weekData = CA(t.c)), t.weekData;
}
function ZA(t) {
  return t.localWeekData === null && (t.localWeekData = CA(
    t.c,
    t.loc.getMinDaysInFirstWeek(),
    t.loc.getStartOfWeek()
  )), t.localWeekData;
}
function Ve(t, e) {
  const A = {
    ts: t.ts,
    zone: t.zone,
    c: t.c,
    o: t.o,
    loc: t.loc,
    invalid: t.invalid
  };
  return new I({ ...A, ...e, old: A });
}
function Ea(t, e, A) {
  let i = t - e * 60 * 1e3;
  const a = A.offset(i);
  if (e === a)
    return [i, e];
  i -= (a - e) * 60 * 1e3;
  const r = A.offset(i);
  return a === r ? [i, a] : [t - Math.min(a, r) * 60 * 1e3, Math.max(a, r)];
}
function $t(t, e) {
  t += e * 60 * 1e3;
  const A = new Date(t);
  return {
    year: A.getUTCFullYear(),
    month: A.getUTCMonth() + 1,
    day: A.getUTCDate(),
    hour: A.getUTCHours(),
    minute: A.getUTCMinutes(),
    second: A.getUTCSeconds(),
    millisecond: A.getUTCMilliseconds()
  };
}
function AA(t, e, A) {
  return Ea(QA(t), e, A);
}
function ni(t, e) {
  const A = t.o, i = t.c.year + Math.trunc(e.years), a = t.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, r = {
    ...t.c,
    year: i,
    month: a,
    day: Math.min(t.c.day, cA(i, a)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
  }, n = f.fromObject({
    years: e.years - Math.trunc(e.years),
    quarters: e.quarters - Math.trunc(e.quarters),
    months: e.months - Math.trunc(e.months),
    weeks: e.weeks - Math.trunc(e.weeks),
    days: e.days - Math.trunc(e.days),
    hours: e.hours,
    minutes: e.minutes,
    seconds: e.seconds,
    milliseconds: e.milliseconds
  }).as("milliseconds"), s = QA(r);
  let [o, d] = Ea(s, A, t.zone);
  return n !== 0 && (o += n, d = t.zone.offset(o)), { ts: o, o: d };
}
function rt(t, e, A, i, a, r) {
  const { setZone: n, zone: s } = A;
  if (t && Object.keys(t).length !== 0 || e) {
    const o = e || s, d = I.fromObject(t, {
      ...A,
      zone: o,
      specificOffset: r
    });
    return n ? d : d.setZone(s);
  } else
    return I.invalid(
      new le("unparsable", `the input "${a}" can't be parsed as ${i}`)
    );
}
function eA(t, e, A = !0) {
  return t.isValid ? Y.create(w.create("en-US"), {
    allowZ: A,
    forceSimple: !0
  }).formatDateTimeFromString(t, e) : null;
}
function YA(t, e, A) {
  const i = t.c.year > 9999 || t.c.year < 0;
  let a = "";
  if (i && t.c.year >= 0 && (a += "+"), a += D(t.c.year, i ? 6 : 4), A === "year") return a;
  if (e) {
    if (a += "-", a += D(t.c.month), A === "month") return a;
    a += "-";
  } else if (a += D(t.c.month), A === "month") return a;
  return a += D(t.c.day), a;
}
function si(t, e, A, i, a, r, n) {
  let s = !A || t.c.millisecond !== 0 || t.c.second !== 0, o = "";
  switch (n) {
    case "day":
    case "month":
    case "year":
      break;
    default:
      if (o += D(t.c.hour), n === "hour") break;
      if (e) {
        if (o += ":", o += D(t.c.minute), n === "minute") break;
        s && (o += ":", o += D(t.c.second));
      } else {
        if (o += D(t.c.minute), n === "minute") break;
        s && (o += D(t.c.second));
      }
      if (n === "second") break;
      s && (!i || t.c.millisecond !== 0) && (o += ".", o += D(t.c.millisecond, 3));
  }
  return a && (t.isOffsetFixed && t.offset === 0 && !r ? o += "Z" : t.o < 0 ? (o += "-", o += D(Math.trunc(-t.o / 60)), o += ":", o += D(Math.trunc(-t.o % 60))) : (o += "+", o += D(Math.trunc(t.o / 60)), o += ":", o += D(Math.trunc(t.o % 60)))), r && (o += "[" + t.zone.ianaName + "]"), o;
}
const Qa = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Fs = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Rs = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, iA = ["year", "month", "day", "hour", "minute", "second", "millisecond"], Vs = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], Ps = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function aA(t) {
  const e = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[t.toLowerCase()];
  if (!e) throw new Qi(t);
  return e;
}
function oi(t) {
  switch (t.toLowerCase()) {
    case "localweekday":
    case "localweekdays":
      return "localWeekday";
    case "localweeknumber":
    case "localweeknumbers":
      return "localWeekNumber";
    case "localweekyear":
    case "localweekyears":
      return "localWeekYear";
    default:
      return aA(t);
  }
}
function Us(t) {
  if (Dt === void 0 && (Dt = J.now()), t.type !== "iana")
    return t.offset(Dt);
  const e = t.name;
  let A = qA.get(e);
  return A === void 0 && (A = t.offset(Dt), qA.set(e, A)), A;
}
function li(t, e) {
  const A = Le(e.zone, J.defaultZone);
  if (!A.isValid)
    return I.invalid(Lt(A));
  const i = w.fromObject(e);
  let a, r;
  if (m(t.year))
    a = J.now();
  else {
    for (const o of iA)
      m(t[o]) && (t[o] = Qa[o]);
    const n = ji(t) || Xi(t);
    if (n)
      return I.invalid(n);
    const s = Us(A);
    [a, r] = AA(t, s, A);
  }
  return new I({ ts: a, zone: A, loc: i, o: r });
}
function gi(t, e, A) {
  const i = m(A.round) ? !0 : A.round, a = m(A.rounding) ? "trunc" : A.rounding, r = (s, o) => (s = h1(s, i || A.calendary ? 0 : 2, A.calendary ? "round" : a), e.loc.clone(A).relFormatter(A).format(s, o)), n = (s) => A.calendary ? e.hasSame(t, s) ? 0 : e.startOf(s).diff(t.startOf(s), s).get(s) : e.diff(t, s).get(s);
  if (A.unit)
    return r(n(A.unit), A.unit);
  for (const s of A.units) {
    const o = n(s);
    if (Math.abs(o) >= 1)
      return r(o, s);
  }
  return r(t > e ? -0 : 0, A.units[A.units.length - 1]);
}
function di(t) {
  let e = {}, A;
  return t.length > 0 && typeof t[t.length - 1] == "object" ? (e = t[t.length - 1], A = Array.from(t).slice(0, t.length - 1)) : A = Array.from(t), [e, A];
}
let Dt;
const qA = /* @__PURE__ */ new Map();
class I {
  /**
   * @access private
   */
  constructor(e) {
    const A = e.zone || J.defaultZone;
    let i = e.invalid || (Number.isNaN(e.ts) ? new le("invalid input") : null) || (A.isValid ? null : Lt(A));
    this.ts = m(e.ts) ? J.now() : e.ts;
    let a = null, r = null;
    if (!i)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(A))
        [a, r] = [e.old.c, e.old.o];
      else {
        const s = De(e.o) && !e.old ? e.o : A.offset(this.ts);
        a = $t(this.ts, s), i = Number.isNaN(a.year) ? new le("invalid input") : null, a = i ? null : a, r = i ? null : s;
      }
    this._zone = A, this.loc = e.loc || w.create(), this.invalid = i, this.weekData = null, this.localWeekData = null, this.c = a, this.o = r, this.isLuxonDateTime = !0;
  }
  // CONSTRUCT
  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */
  static now() {
    return new I({});
  }
  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  static local() {
    const [e, A] = di(arguments), [i, a, r, n, s, o, d] = A;
    return li({ year: i, month: a, day: r, hour: n, minute: s, second: o, millisecond: d }, e);
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @param {string} [options.weekSettings] - the week settings to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */
  static utc() {
    const [e, A] = di(arguments), [i, a, r, n, s, o, d] = A;
    return e.zone = N.utcInstance, li({ year: i, month: a, day: r, hour: n, minute: s, second: o, millisecond: d }, e);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(e, A = {}) {
    const i = fn(e) ? e.valueOf() : NaN;
    if (Number.isNaN(i))
      return I.invalid("invalid input");
    const a = Le(A.zone, J.defaultZone);
    return a.isValid ? new I({
      ts: i,
      zone: a,
      loc: w.fromObject(A)
    }) : I.invalid(Lt(a));
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} options.weekSettings - the week settings to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromMillis(e, A = {}) {
    if (De(e))
      return e < -ri || e > ri ? I.invalid("Timestamp out of range") : new I({
        ts: e,
        zone: Le(A.zone, J.defaultZone),
        loc: w.fromObject(A)
      });
    throw new H(
      `fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`
    );
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} options.weekSettings - the week settings to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromSeconds(e, A = {}) {
    if (De(e))
      return new I({
        ts: e * 1e3,
        zone: Le(A.zone, J.defaultZone),
        loc: w.fromObject(A)
      });
    throw new H("fromSeconds requires a numerical input");
  }
  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.localWeekYear - a week year, according to the locale
   * @param {number} obj.localWeekNumber - a week number, between 1 and 52 or 53, depending on the year, according to the locale
   * @param {number} obj.localWeekday - a weekday, 1-7, where 1 is the first and 7 is the last day of the week, according to the locale
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system\'s locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @example DateTime.fromObject({ localWeekYear: 2022, localWeekNumber: 1, localWeekday: 1 }, { locale: "en-US" }).toISODate() //=> '2021-12-26'
   * @return {DateTime}
   */
  static fromObject(e, A = {}) {
    e = e || {};
    const i = Le(A.zone, J.defaultZone);
    if (!i.isValid)
      return I.invalid(Lt(i));
    const a = w.fromObject(A), r = pA(e, oi), { minDaysInFirstWeek: n, startOfWeek: s } = j1(r, a), o = J.now(), d = m(A.specificOffset) ? i.offset(o) : A.specificOffset, c = !m(r.ordinal), p = !m(r.year), B = !m(r.month) || !m(r.day), h = p || B, S = r.weekYear || r.weekNumber;
    if ((h || c) && S)
      throw new st(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (B && c)
      throw new st("Can't mix ordinal dates with month/day");
    const ne = S || r.weekday && !h;
    let ce, At, kt = $t(o, d);
    ne ? (ce = Vs, At = Fs, kt = CA(kt, n, s)) : c ? (ce = Ps, At = Rs, kt = xA(kt)) : (ce = iA, At = Qa);
    let E1 = !1;
    for (const wt of ce) {
      const Da = r[wt];
      m(Da) ? E1 ? r[wt] = At[wt] : r[wt] = kt[wt] : E1 = !0;
    }
    const Sa = ne ? bn(r, n, s) : c ? En(r) : ji(r), Q1 = Sa || Xi(r);
    if (Q1)
      return I.invalid(Q1);
    const Ma = ne ? K1(r, n, s) : c ? G1(r) : r, [Ja, La] = AA(Ma, d, i), yt = new I({
      ts: Ja,
      zone: i,
      o: La,
      loc: a
    });
    return r.weekday && h && e.weekday !== yt.weekday ? I.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${r.weekday} and a date of ${yt.toISO()}`
    ) : yt.isValid ? yt : I.invalid(yt.invalid);
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @param {string} [opts.weekSettings] - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  static fromISO(e, A = {}) {
    const [i, a] = Cs(e);
    return rt(i, a, A, "ISO 8601", e);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  static fromRFC2822(e, A = {}) {
    const [i, a] = cs(e);
    return rt(i, a, A, "RFC 2822", e);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  static fromHTTP(e, A = {}) {
    const [i, a] = ps(e);
    return rt(i, a, A, "HTTP", A);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromFormat(e, A, i = {}) {
    if (m(e) || m(A))
      throw new H("fromFormat requires an input string and a format");
    const { locale: a = null, numberingSystem: r = null } = i, n = w.fromOpts({
      locale: a,
      numberingSystem: r,
      defaultToEN: !0
    }), [s, o, d, c] = Ns(n, e, A);
    return c ? I.invalid(c) : rt(s, o, i, `format ${A}`, e, d);
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(e, A, i = {}) {
    return I.fromFormat(e, A, i);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  static fromSQL(e, A = {}) {
    const [i, a] = Es(e);
    return rt(i, a, A, "SQL", e);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(e, A = null) {
    if (!e)
      throw new H("need to specify a reason the DateTime is invalid");
    const i = e instanceof le ? e : new le(e, A);
    if (J.throwOnInvalid)
      throw new Gr(i);
    return new I({ invalid: i });
  }
  /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDateTime(e) {
    return e && e.isLuxonDateTime || !1;
  }
  /**
   * Produce the format string for a set of options
   * @param formatOpts
   * @param localeOpts
   * @returns {string}
   */
  static parseFormatForOpts(e, A = {}) {
    const i = ba(e, w.fromObject(A));
    return i ? i.map((a) => a ? a.val : null).join("") : null;
  }
  /**
   * Produce the the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   * @returns {string}
   */
  static expandFormat(e, A = {}) {
    return Ia(Y.parseFormat(e), w.fromObject(A)).map((a) => a.val).join("");
  }
  static resetCache() {
    Dt = void 0, qA.clear();
  }
  // INFO
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  get(e) {
    return this[e];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
   *
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
   *
   * @type {string}
   */
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  /**
   * Get the time zone associated with this DateTime.
   * @type {Zone}
   */
  get zone() {
    return this._zone;
  }
  /**
   * Get the name of the time zone.
   * @type {string}
   */
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  /**
   * Get the year
   * @example DateTime.local(2017, 5, 25).year //=> 2017
   * @type {number}
   */
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  /**
   * Get the quarter
   * @example DateTime.local(2017, 5, 25).quarter //=> 2
   * @type {number}
   */
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  /**
   * Get the month (1-12).
   * @example DateTime.local(2017, 5, 25).month //=> 5
   * @type {number}
   */
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  /**
   * Get the day of the month (1-30ish).
   * @example DateTime.local(2017, 5, 25).day //=> 25
   * @type {number}
   */
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  /**
   * Get the hour of the day (0-23).
   * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
   * @type {number}
   */
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  /**
   * Get the minute of the hour (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
   * @type {number}
   */
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  /**
   * Get the second of the minute (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
   * @type {number}
   */
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  /**
   * Get the millisecond of the second (0-999).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
   * @type {number}
   */
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  /**
   * Get the week year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
   * @type {number}
   */
  get weekYear() {
    return this.isValid ? HA(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? HA(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? HA(this).weekday : NaN;
  }
  /**
   * Returns true if this date is on a weekend according to the locale, false otherwise
   * @returns {boolean}
   */
  get isWeekend() {
    return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
  }
  /**
   * Get the day of the week according to the locale.
   * 1 is the first day of the week and 7 is the last day of the week.
   * If the locale assigns Sunday as the first day of the week, then a date which is a Sunday will return 1,
   * @returns {number}
   */
  get localWeekday() {
    return this.isValid ? ZA(this).weekday : NaN;
  }
  /**
   * Get the week number of the week year according to the locale. Different locales assign week numbers differently,
   * because the week can start on different days of the week (see localWeekday) and because a different number of days
   * is required for a week to count as the first week of a year.
   * @returns {number}
   */
  get localWeekNumber() {
    return this.isValid ? ZA(this).weekNumber : NaN;
  }
  /**
   * Get the week year according to the locale. Different locales assign week numbers (and therefor week years)
   * differently, see localWeekNumber.
   * @returns {number}
   */
  get localWeekYear() {
    return this.isValid ? ZA(this).weekYear : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? xA(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? qt.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? qt.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? qt.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? qt.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the UTC offset of this DateTime in minutes
   * @example DateTime.now().offset //=> -240
   * @example DateTime.utc().offset //=> 0
   * @type {number}
   */
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  /**
   * Get the short human name for the zone's current offset, for example "EST" or "EDT".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameShort() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "short",
      locale: this.locale
    }) : null;
  }
  /**
   * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameLong() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "long",
      locale: this.locale
    }) : null;
  }
  /**
   * Get whether this zone's offset ever changes, as in a DST.
   * @type {boolean}
   */
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  /**
   * Get whether the DateTime is in a DST.
   * @type {boolean}
   */
  get isInDST() {
    return this.isOffsetFixed ? !1 : this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
  }
  /**
   * Get those DateTimes which have the same local time as this DateTime, but a different offset from UTC
   * in this DateTime's zone. During DST changes local time can be ambiguous, for example
   * `2023-10-29T02:30:00` in `Europe/Berlin` can have offset `+01:00` or `+02:00`.
   * This method will return both possible DateTimes if this DateTime's local time is ambiguous.
   * @returns {DateTime[]}
   */
  getPossibleOffsets() {
    if (!this.isValid || this.isOffsetFixed)
      return [this];
    const e = 864e5, A = 6e4, i = QA(this.c), a = this.zone.offset(i - e), r = this.zone.offset(i + e), n = this.zone.offset(i - a * A), s = this.zone.offset(i - r * A);
    if (n === s)
      return [this];
    const o = i - n * A, d = i - s * A, c = $t(o, n), p = $t(d, s);
    return c.hour === p.hour && c.minute === p.minute && c.second === p.second && c.millisecond === p.millisecond ? [Ve(this, { ts: o }), Ve(this, { ts: d })] : [this];
  }
  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return Kt(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return cA(this.year, this.month);
  }
  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? gt(this.year) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? Ft(this.weekYear) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's local week year
   * @example DateTime.local(2020, 6, {locale: 'en-US'}).weeksInLocalWeekYear //=> 52
   * @example DateTime.local(2020, 6, {locale: 'de-DE'}).weeksInLocalWeekYear //=> 53
   * @type {number}
   */
  get weeksInLocalWeekYear() {
    return this.isValid ? Ft(
      this.localWeekYear,
      this.loc.getMinDaysInFirstWeek(),
      this.loc.getStartOfWeek()
    ) : NaN;
  }
  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOptions(e = {}) {
    const { locale: A, numberingSystem: i, calendar: a } = Y.create(
      this.loc.clone(e),
      e
    ).resolvedOptions(this);
    return { locale: A, numberingSystem: i, outputCalendar: a };
  }
  // TRANSFORM
  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  toUTC(e = 0, A = {}) {
    return this.setZone(N.instance(e), A);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(J.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  setZone(e, { keepLocalTime: A = !1, keepCalendarTime: i = !1 } = {}) {
    if (e = Le(e, J.defaultZone), e.equals(this.zone))
      return this;
    if (e.isValid) {
      let a = this.ts;
      if (A || i) {
        const r = e.offset(this.ts), n = this.toObject();
        [a] = AA(n, r, e);
      }
      return Ve(this, { ts: a, zone: e });
    } else
      return I.invalid(Lt(e));
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale: e, numberingSystem: A, outputCalendar: i } = {}) {
    const a = this.loc.clone({ locale: e, numberingSystem: A, outputCalendar: i });
    return Ve(this, { loc: a });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  setLocale(e) {
    return this.reconfigure({ locale: e });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   *
   * This method also supports setting locale-based week units, i.e. `localWeekday`, `localWeekNumber` and `localWeekYear`.
   * They cannot be mixed with ISO-week units like `weekday`.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  set(e) {
    if (!this.isValid) return this;
    const A = pA(e, oi), { minDaysInFirstWeek: i, startOfWeek: a } = j1(A, this.loc), r = !m(A.weekYear) || !m(A.weekNumber) || !m(A.weekday), n = !m(A.ordinal), s = !m(A.year), o = !m(A.month) || !m(A.day), d = s || o, c = A.weekYear || A.weekNumber;
    if ((d || n) && c)
      throw new st(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (o && n)
      throw new st("Can't mix ordinal dates with month/day");
    let p;
    r ? p = K1(
      { ...CA(this.c, i, a), ...A },
      i,
      a
    ) : m(A.ordinal) ? (p = { ...this.toObject(), ...A }, m(A.day) && (p.day = Math.min(cA(p.year, p.month), p.day))) : p = G1({ ...xA(this.c), ...A });
    const [B, h] = AA(p, this.o, this.zone);
    return Ve(this, { ts: B, o: h });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  plus(e) {
    if (!this.isValid) return this;
    const A = f.fromDurationLike(e);
    return Ve(this, ni(this, A));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(e) {
    if (!this.isValid) return this;
    const A = f.fromDurationLike(e).negate();
    return Ve(this, ni(this, A));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  startOf(e, { useLocaleWeeks: A = !1 } = {}) {
    if (!this.isValid) return this;
    const i = {}, a = f.normalizeUnit(e);
    switch (a) {
      case "years":
        i.month = 1;
      // falls through
      case "quarters":
      case "months":
        i.day = 1;
      // falls through
      case "weeks":
      case "days":
        i.hour = 0;
      // falls through
      case "hours":
        i.minute = 0;
      // falls through
      case "minutes":
        i.second = 0;
      // falls through
      case "seconds":
        i.millisecond = 0;
        break;
    }
    if (a === "weeks")
      if (A) {
        const r = this.loc.getStartOfWeek(), { weekday: n } = this;
        n < r && (i.weekNumber = this.weekNumber - 1), i.weekday = r;
      } else
        i.weekday = 1;
    if (a === "quarters") {
      const r = Math.ceil(this.month / 3);
      i.month = (r - 1) * 3 + 1;
    }
    return this.set(i);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  endOf(e, A) {
    return this.isValid ? this.plus({ [e]: 1 }).startOf(e, A).minus(1) : this;
  }
  // OUTPUT
  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  toFormat(e, A = {}) {
    return this.isValid ? Y.create(this.loc.redefaultToEN(A)).formatDateTimeFromString(this, e) : OA;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */
  toLocaleString(e = dA, A = {}) {
    return this.isValid ? Y.create(this.loc.clone(A), e).formatDateTime(this) : OA;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  toLocaleParts(e = {}) {
    return this.isValid ? Y.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @param {string} [opts.precision='milliseconds'] - truncate output to desired presicion: 'years', 'months', 'days', 'hours', 'minutes', 'seconds' or 'milliseconds'. When precision and suppressSeconds or suppressMilliseconds are used together, precision sets the maximum unit shown in the output, however seconds or milliseconds will still be suppressed if they are 0.
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @example DateTime.now().toISO({ precision: 'day' }) //=> '2017-04-22Z'
   * @example DateTime.now().toISO({ precision: 'minute' }) //=> '2017-04-22T20:47Z'
   * @return {string|null}
   */
  toISO({
    format: e = "extended",
    suppressSeconds: A = !1,
    suppressMilliseconds: i = !1,
    includeOffset: a = !0,
    extendedZone: r = !1,
    precision: n = "milliseconds"
  } = {}) {
    if (!this.isValid)
      return null;
    n = aA(n);
    const s = e === "extended";
    let o = YA(this, s, n);
    return iA.indexOf(n) >= 3 && (o += "T"), o += si(
      this,
      s,
      A,
      i,
      a,
      r,
      n
    ), o;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @param {string} [opts.precision='day'] - truncate output to desired precision: 'years', 'months', or 'days'.
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @example DateTime.utc(1982, 5, 25).toISODate({ precision: 'month' }) //=> '1982-05'
   * @return {string|null}
   */
  toISODate({ format: e = "extended", precision: A = "day" } = {}) {
    return this.isValid ? YA(this, e === "extended", aA(A)) : null;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return eA(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @param {string} [opts.precision='milliseconds'] - truncate output to desired presicion: 'hours', 'minutes', 'seconds' or 'milliseconds'. When precision and suppressSeconds or suppressMilliseconds are used together, precision sets the maximum unit shown in the output, however seconds or milliseconds will still be suppressed if they are 0.
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, second: 56 }).toISOTime({ precision: 'minute' }) //=> '07:34Z'
   * @return {string}
   */
  toISOTime({
    suppressMilliseconds: e = !1,
    suppressSeconds: A = !1,
    includeOffset: i = !0,
    includePrefix: a = !1,
    extendedZone: r = !1,
    format: n = "extended",
    precision: s = "milliseconds"
  } = {}) {
    return this.isValid ? (s = aA(s), (a && iA.indexOf(s) >= 3 ? "T" : "") + si(
      this,
      n === "extended",
      A,
      e,
      i,
      r,
      s
    )) : null;
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  toRFC2822() {
    return eA(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  toHTTP() {
    return eA(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string|null}
   */
  toSQLDate() {
    return this.isValid ? YA(this, !0) : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  toSQLTime({ includeOffset: e = !0, includeZone: A = !1, includeOffsetSpace: i = !0 } = {}) {
    let a = "HH:mm:ss.SSS";
    return (A || e) && (i && (a += " "), A ? a += "z" : e && (a += "ZZ")), eA(this, a, !0);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  toSQL(e = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  toString() {
    return this.isValid ? this.toISO() : OA;
  }
  /**
   * Returns a string representation of this DateTime appropriate for the REPL.
   * @return {string}
   */
  [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }` : `DateTime { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds (including milliseconds in the fractional part) of this DateTime.
   * @return {number}
   */
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  /**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  toObject(e = {}) {
    if (!this.isValid) return {};
    const A = { ...this.c };
    return e.includeConfig && (A.outputCalendar = this.outputCalendar, A.numberingSystem = this.loc.numberingSystem, A.locale = this.loc.locale), A;
  }
  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  // COMPARE
  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  diff(e, A = "milliseconds", i = {}) {
    if (!this.isValid || !e.isValid)
      return f.invalid("created by diffing an invalid DateTime");
    const a = { locale: this.locale, numberingSystem: this.numberingSystem, ...i }, r = vn(A).map(f.normalizeUnit), n = e.valueOf() > this.valueOf(), s = n ? this : e, o = n ? e : this, d = ws(s, o, r, a);
    return n ? d.negate() : d;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  diffNow(e = "milliseconds", A = {}) {
    return this.diff(I.now(), e, A);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval|DateTime}
   */
  until(e) {
    return this.isValid ? M.fromDateTimes(this, e) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; only the locale of this DateTime is used
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  hasSame(e, A, i) {
    if (!this.isValid) return !1;
    const a = e.valueOf(), r = this.setZone(e.zone, { keepLocalTime: !0 });
    return r.startOf(A, i) <= a && a <= r.endOf(A, i);
  }
  /**
   * Equality check
   * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  equals(e) {
    return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds towards zero by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {string} [options.rounding="trunc"] - rounding method to use when rounding the numbers in the output. Can be "trunc" (toward zero), "expand" (away from zero), "round", "floor", or "ceil".
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  toRelative(e = {}) {
    if (!this.isValid) return null;
    const A = e.base || I.fromObject({}, { zone: this.zone }), i = e.padding ? this < A ? -e.padding : e.padding : 0;
    let a = ["years", "months", "days", "hours", "minutes", "seconds"], r = e.unit;
    return Array.isArray(e.unit) && (a = e.unit, r = void 0), gi(A, this.plus(i), {
      ...e,
      numeric: "always",
      units: a,
      unit: r
    });
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  toRelativeCalendar(e = {}) {
    return this.isValid ? gi(e.base || I.fromObject({}, { zone: this.zone }), this, {
      ...e,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    }) : null;
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  static min(...e) {
    if (!e.every(I.isDateTime))
      throw new H("min requires all arguments be DateTimes");
    return X1(e, (A) => A.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...e) {
    if (!e.every(I.isDateTime))
      throw new H("max requires all arguments be DateTimes");
    return X1(e, (A) => A.valueOf(), Math.max);
  }
  // MISC
  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  static fromFormatExplain(e, A, i = {}) {
    const { locale: a = null, numberingSystem: r = null } = i, n = w.fromOpts({
      locale: a,
      numberingSystem: r,
      defaultToEN: !0
    });
    return Ba(n, e, A);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(e, A, i = {}) {
    return I.fromFormatExplain(e, A, i);
  }
  /**
   * Build a parser for `fmt` using the given locale. This parser can be passed
   * to {@link DateTime.fromFormatParser} to a parse a date in this format. This
   * can be used to optimize cases where many dates need to be parsed in a
   * specific format.
   *
   * @param {String} fmt - the format the string is expected to be in (see
   * description)
   * @param {Object} options - options used to set locale and numberingSystem
   * for parser
   * @returns {TokenParser} - opaque object to be used
   */
  static buildFormatParser(e, A = {}) {
    const { locale: i = null, numberingSystem: a = null } = A, r = w.fromOpts({
      locale: i,
      numberingSystem: a,
      defaultToEN: !0
    });
    return new ma(r, e);
  }
  /**
   * Create a DateTime from an input string and format parser.
   *
   * The format parser must have been created with the same locale as this call.
   *
   * @param {String} text - the string to parse
   * @param {TokenParser} formatParser - parser from {@link DateTime.buildFormatParser}
   * @param {Object} opts - options taken by fromFormat()
   * @returns {DateTime}
   */
  static fromFormatParser(e, A, i = {}) {
    if (m(e) || m(A))
      throw new H(
        "fromFormatParser requires an input string and a format parser"
      );
    const { locale: a = null, numberingSystem: r = null } = i, n = w.fromOpts({
      locale: a,
      numberingSystem: r,
      defaultToEN: !0
    });
    if (!n.equals(A.locale))
      throw new H(
        `fromFormatParser called with a locale of ${n}, but the format parser was created for ${A.locale}`
      );
    const { result: s, zone: o, specificOffset: d, invalidReason: c } = A.explainFromTokens(e);
    return c ? I.invalid(c) : rt(
      s,
      o,
      i,
      `format ${A.format}`,
      e,
      d
    );
  }
  // FORMAT PRESETS
  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return dA;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return fi;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return Wr;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return vi;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return ki;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return yi;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return wi;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return Si;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return Mi;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return Ji;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return Li;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return Di;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return xi;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return Ti;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return Oi;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return Hi;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return Zi;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return qr;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return Yi;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return zi;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return Ni;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return Fi;
  }
}
function Mt(t) {
  if (I.isDateTime(t))
    return t;
  if (t && t.valueOf && De(t.valueOf()))
    return I.fromJSDate(t);
  if (t && typeof t == "object")
    return I.fromObject(t);
  throw new H(
    `Unknown datetime argument: ${t}, of type ${typeof t}`
  );
}
const Ks = k`
  :host {
    --atp-datepicker-min-width: 291px;
    --atp-datepicker-max-calendar-height: 294px;

    inline-size: fit-content;
    display: block;
  }

  :host([has-input]) {
    --atp-input-height-label: 62px;
    --atp-input-height: 42px;
  }

  .range-section {
    max-block-size: var(--atp-datepicker-max-calendar-height);
    padding-block-end: var(--atp-space-xs);
    overflow-y: auto;
    background: var(--atp-element-fill-inverse-weak-enabled);
    border-inline-end: 1px solid var(--atp-element-border-primary-medium-enabled);
  }

  .range-section ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-block-start: calc(var(--atp-space-xs) + var(--atp-space-xxs));
  }

  .range-title {
    display: flex;
    align-items: center;
    margin: 0;
    block-size: var(--atp-space-l);
    padding-block: calc(var(--atp-space-xxxs) + var(--atp-space-xxs)) var(--atp-space-xxxs);
    padding-inline: 0 var(--atp-space-s);
    color: var(--atp-content-primary-weak-enabled);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-xs);
    font-weight: var(--atp-font-weight-regular);
    line-height: var(--atp-line-height-body-xs);
    margin-inline-start: var(--atp-space-s);
    border-block-end: 1px solid var(--atp-element-border-primary-medium-enabled);
  }

  .range-item {
    all: unset;
    cursor: pointer;
    box-sizing: border-box;
    white-space: nowrap;
    inline-size: 100%;
    color: var(--atp-content-primary-medium-enabled);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-s);
    font-weight: var(--atp-font-weight-regular);
    line-height: var(--atp-line-height-body-s);
    padding-block: var(--atp-space-xs);
    padding-inline: var(--atp-space-s);
    border: 2px solid var(--atp-element-fill-inverse-weak-enabled);
    transition: all var(--atp-transition-standard);
  }

  .range-item:focus-visible {
    border: var(--atp-focus-width) solid var(--atp-focus-color);
  }

  .range-item:focus-visible,
  .range-item:hover {
    background: var(--atp-element-fill-inverse-weak-hover);
  }

  .range-item:active {
    background: var(--atp-element-fill-inverse-weak-pressed);
  }

  .divider {
    block-size: var(--atp-space-m);
    border-inline-end: 1px solid var(--atp-element-border-primary-medium-enabled);
    inline-size: 1px;
    margin-block: 0;
    margin-inline: calc(var(--atp-space-xs) + var(--atp-space-xxs));
  }

  .switch-container {
    display: flex;
    align-items: center;
    gap: var(--atp-space-xxs);
    position: relative;
  }

  .dropdown {
    position: absolute;
    inset-block-start: calc(100% + var(--atp-space-xxs));
    inset-inline-end: 50%;
    transform: translateX(50%);
    z-index: var(--atp-z-index-base);
  }

  .dropdown.month {
    inline-size: 120px;
  }

  .dropdown.year {
    inline-size: 70px;
  }

  .date-dropdown {
    all: unset;
    display: flex;
    block-size: var(--atp-space-m);
    border-radius: var(--atp-border-radius-m);
    gap: var(--atp-space-xxs);
    background-color: transparent;
    transition: background-color var(--atp-transition-standard);
    padding-block: 0;
    padding-inline: var(--atp-space-xxs);
    align-items: center;
    cursor: pointer;
  }

  .date-dropdown:focus-visible {
    outline: var(--atp-focus-width) solid var(--atp-focus-color);
  }

  .date-dropdown:focus-visible,
  .date-dropdown:hover {
    background-color: var(--atp-button-secondary-medium-hover);
  }

  .date-dropdown:active {
    background-color: var(--atp-button-secondary-medium-pressed);
  }

  .date-dropdown:disabled:is(:focus-visible, :hover, :active) {
    background-color: transparent;
    cursor: default;
  }

  .date-dropdown:disabled atp-icon {
    display: none;
  }

  .datepicker-wrapper {
    position: relative;
    display: flex;
    gap: var(--atp-space-xs);
    inline-size: fit-content;
    align-items: center;
    justify-content: center;
  }

  .calendar {
    block-size: fit-content;
    min-inline-size: var(--atp-datepicker-min-width);
    padding-block: var(--atp-space-s);
    padding-inline: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--atp-element-fill-inverse-weak-enabled);
    color: var(--atp-content-primary-medium-enabled);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-s);
    font-weight: var(--atp-font-weight-regular);
    line-height: var(--atp-line-height-body-s);
    letter-spacing: var(--atp-letter-spacing-s);
  }

  .calendar-wrapper {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    box-shadow: var(--atp-box-shadow-medium);
    border-radius: var(--atp-border-radius-m);
    overflow: hidden;
    display: flex;
  }

  :host([has-input]) .calendar-wrapper {
    inset-block-start: calc(var(--atp-input-height) + var(--atp-space-xxs));
    inset-inline-start: 0;
    inset-inline-end: unset;
  }

  :host([has-input]) .calendar-wrapper.label {
    inset-block-start: calc(var(--atp-input-height-label) + var(--atp-space-xxs));
  }

  :host([has-input]) .calendar-wrapper.second {
    inset-inline-start: unset;
    inset-inline-end: 0;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 0 var(--atp-space-xs);
    padding-inline: var(--atp-space-xxs);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 1px 0;
  }

  .day-name {
    block-size: var(--atp-space-l);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: var(--atp-font-weight-semibold);
  }

  .day-cell {
    all: unset;
    overflow: visible;
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    block-size: var(--atp-space-l);
    inline-size: var(--atp-space-l);
    color: var(--atp-content-primary-medium-enabled);
    background-color: var(--atp-content-inverse-medium-enabled);
    cursor: pointer;
    transition: all var(--atp-transition-standard);
  }

  .day-cell:focus {
    border: var(--atp-focus-width) solid var(--atp-focus-color);
  }

  .day-cell:not(.disabled):hover {
    background: var(--atp-element-fill-blue-weak-hover);
  }

  .day-cell:not(.disabled):active {
    border: 1px solid var(--atp-element-fill-blue-strong-pressed);
    background: var(--atp-element-fill-blue-weak-pressed);
  }

  .day-cell.range {
    background: var(--atp-element-fill-blue-weak-hover);
  }

  .day-cell.range:not(.disabled):hover {
    background: var(--atp-element-fill-blue-medium-hover);
  }

  .day-cell.range:not(.disabled):active {
    border: 1px solid var(--atp-element-fill-blue-strong-pressed);
    background: var(--atp-element-fill-blue-medium-pressed);
  }

  .day-cell.range.range-start {
    color: var(--atp-content-inverse-medium-enabled);
    border-start-start-radius: var(--atp-space-xxs);
    border-end-start-radius: var(--atp-space-xxs);
    background: var(--atp-element-fill-blue-strong-enabled);
  }

  .day-cell.range.range-start:not(.disabled):hover {
    background: var(--atp-element-fill-blue-strong-hover);
  }

  .day-cell.range.range-start:not(.disabled):active {
    background: var(--atp-element-fill-blue-strong-pressed);
  }

  .day-cell.range.range-end {
    color: var(--atp-content-inverse-medium-enabled);
    border-start-end-radius: var(--atp-space-xxs);
    border-end-end-radius: var(--atp-space-xxs);
    background: var(--atp-element-fill-blue-strong-enabled);
  }

  .day-cell.range.range-end:not(.disabled):hover {
    background: var(--atp-element-fill-blue-strong-hover);
  }

  .day-cell.range.range-end:not(.disabled):active {
    background: var(--atp-element-fill-blue-strong-pressed);
  }

  .day-cell.disabled,
  .day-cell.disabled:is(:hover, :focus-visible, :active):not(.range-end, .range-start),
  .day-cell.disabled:is(.range):not(.range-end, .range-start),
  .day-cell.disabled:is(.range):not(.range-end, .range-start):is(:hover, :focus-visible, :active) {
    cursor: default;
    color: var(--atp-content-primary-medium-disabled);
    border: 1px solid transparent;
  }

  .today::after {
    content: '';
    position: absolute;
    inset-block-start: 50%;
    inset-inline-start: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    block-size: var(--atp-space-m);
    inline-size: var(--atp-space-m);
    border-radius: var(--atp-datepicker-date-circle);
    border: 1px solid var(--atp-purple-700);
  }

  .today.range-end::after,
  .today.range-start::after {
    border: 1px solid var(--atp-content-inverse-medium-enabled);
  }
`, Gs = k`
  .field-wrapper {
    --atp-input-line-height: var(--atp-line-height-body-s);
    --atp-input-padding-block: calc(var(--atp-space-xs) + var(--atp-space-xxxs));

    display: flex;
    box-sizing: border-box;
    flex-direction: column;
  }

  .field-wrapper.size-medium {
    --atp-input-padding-block: 5px;
  }

  .field-wrapper.size-small {
    --atp-input-line-height: var(--atp-line-height-body-xs);
    --atp-input-padding-block: calc(var(--atp-space-xxs) - 1px);
  }

  .field-wrapper .field-label {
    position: relative;
    inline-size: fit-content;
    margin-block-end: var(--atp-space-xxs);
    color: var(--atp-content-primary-medium-enabled);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-s);
    font-weight: var(--atp-font-weight-regular);
    line-height: var(--atp-line-height-body-s);
  }

  .field-wrapper .field-label.none {
    display: none;
  }

  .field-wrapper .required-indicator {
    position: absolute;
    inset-inline-start: calc(100% + var(--atp-space-xxxs));
    inset-block-start: 0;
    color: var(--atp-red-600);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-s);
    font-weight: var(--atp-font-weight-regular);
    line-height: var(--atp-line-height-body-s);
  }

  .field-wrapper .input-wrapper {
    position: relative;
    padding-block: var(--atp-input-padding-block);
    padding-inline: var(--atp-space-xs);
    display: flex;
    gap: var(--atp-space-xs);
    align-items: center;
    border-radius: var(--atp-border-radius-s);
    border: 1px solid var(--atp-element-border-primary-strong-enabled);
    background: var(--atp-element-fill-inverse-weak-enabled);
    outline: 1px solid transparent; /* to create a smooth transition to the visible outline */
    transition: all var(--atp-transition-standard);
  }

  .field-wrapper.disabled .input-wrapper,
  .field-wrapper.readonly .input-wrapper {
    background: var(--atp-background-primary-medium);
  }

  .field-wrapper.textarea .input-wrapper {
    padding: 0;
  }

  .field-wrapper.select:not(.disabled) .input-wrapper {
    cursor: pointer;
  }

  .field-wrapper.error:not(.disabled) .input-wrapper {
    border: 1px solid var(--atp-red-600);
    outline: 1px solid var(--atp-red-600);
  }

  .field-wrapper:not(.disabled, .select, .error) .input-wrapper:focus-within {
    border: 1px solid var(--atp-utility-primary-medium-enabled);
    outline: 1px solid var(--atp-utility-primary-medium-enabled);
  }

  .field-wrapper .input-wrapper .inner-input {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--atp-space-xs);
  }

  .field-wrapper .input-wrapper .inner-input .tag-list {
    display: flex;
    gap: var(--atp-space-xxs);
    flex-wrap: wrap;
  }

  .field-wrapper .input-wrapper .dropdown {
    position: absolute;
    inset-block-start: calc(100% + var(--atp-dropdown-menu-offset));
    inset-inline: calc(-1 * var(--atp-space-xxxs)) 0;
    inline-size: calc(100% + var(--atp-space-xxs));
    z-index: var(--atp-z-index-menu);
  }

  .field-wrapper .input-wrapper .dropdown.right {
    inset-inline-start: unset;
    inline-size: unset;
  }

  .field-wrapper .input-wrapper .dropdown.left {
    inset-inline-end: unset;
    inline-size: unset;
  }

  .field-wrapper .help-text {
    margin: 0;
    color: var(--atp-content-primary-weak-enabled);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-s);
    font-weight: var(--atp-font-weight-regular);
    line-height: var(--atp-line-height-body-s);
  }

  .field-wrapper.error:not(.disabled) .help-text {
    color: var(--atp-red-600);
  }

  /* target only default slot */

  ::slotted(:not([slot])) {
    all: unset;
    block-size: var(--atp-input-line-height);
    inline-size: 100%;
    font: inherit;
    line-height: var(--atp-input-line-height);
    color: inherit;
    background: transparent;
  }
`, js = k`
  .tag {
    --atp-tag-background-color: var(--atp-element-fill-blue-medium-enabled);
    --atp-icon-fill: currentColor;
    --atp-icon-padding-block: var(--atp-space-xxxs);

    inline-size: fit-content;
    outline: none;
    margin: 0;
    padding-block: var(--atp-icon-padding-block);
    padding-inline: var(--atp-space-xs);
    display: flex;
    align-items: center;
    gap: var(--atp-space-xxs);
    background: var(--atp-tag-background-color);
    border: 1px solid var(--atp-tag-background-color);
    border-radius: var(--atp-border-radius-s);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-xs);
    font-weight: var(--atp-font-weight-medium);
    line-height: var(--atp-line-height-body-xs);
    white-space: nowrap;
    color: var(--atp-content-primary-medium-enabled);
  }

  .tag:has(atp-icon) {
    padding-block: var(--atp-icon-padding-block);
    padding-inline: var(--atp-space-xs) calc(var(--atp-space-xxs) + var(--atp-space-xxxs));
  }

  .tag:focus-visible {
    outline: var(--atp-focus-width) solid var(--atp-focus-color);
    outline-offset: var(--atp-focus-outline-offset);
  }

  .tag.tag-action {
    cursor: pointer;
  }

  /* icon */
  .icon {
    border-radius: var(--atp-border-radius-s);
    transition: all var(--atp-transition-standard);
  }

  .tag-action:not(.disabled):hover .icon,
  .tag-action:not(.disabled):focus-visible .icon {
    background: hsl(0 0% 0% / 0.24);
  }

  .tag-action:not(.disabled):active .icon {
    background: hsl(0 0% 0% / 0.38);
  }

  .darkslate.tag-action:not(.disabled):hover .icon,
  .darkslate.tag-action:not(.disabled):focus-visible .icon {
    background: hsl(0 100% 100% / 0.66);
  }

  .darkslate.tag-action:not(.disabled):active .icon {
    background: hsl(0 100% 100% / 0.59);
  }

  /** fill */
  .tag.blue.fill {
    --atp-tag-background-color: var(--atp-element-fill-blue-medium-enabled);
  }

  .tag.purple.fill {
    --atp-tag-background-color: var(--atp-element-fill-purple-medium-enabled);
  }

  .tag.green.fill {
    --atp-tag-background-color: var(--atp-element-fill-green-medium-enabled);
  }

  .tag.pink.fill {
    --atp-tag-background-color: var(--atp-element-fill-red-medium-enabled);
  }

  .tag.orange.fill {
    --atp-tag-background-color: var(--atp-element-fill-orange-medium-enabled);
  }

  .tag.utility-blue.fill {
    --atp-tag-background-color: var(--atp-utility-primary-medium-enabled);

    color: var(--atp-content-inverse-medium-enabled);
  }

  .tag.dark-slate.fill {
    --atp-tag-background-color: var(--atp-element-fill-primary-strong-enabled);

    color: var(--atp-content-inverse-medium-enabled);
  }

  .tag.light-slate.fill {
    --atp-tag-background-color: var(--atp-element-fill-primary-weak-enabled);
  }

  /** fill-dark */
  .tag.blue.fill-dark {
    --atp-tag-background-color: var(--atp-element-fill-blue-medium-pressed);
  }

  .tag.purple.fill-dark {
    --atp-tag-background-color: var(--atp-element-fill-purple-medium-pressed);

    color: var(--atp-content-inverse-medium-enabled);
  }

  .tag.green.fill-dark {
    --atp-tag-background-color: var(--atp-element-fill-green-medium-pressed);

    color: var(--atp-content-inverse-medium-enabled);
  }

  .tag.pink.fill-dark {
    --atp-tag-background-color: var(--atp-element-fill-red-medium-pressed);
  }

  .tag.orange.fill-dark {
    --atp-tag-background-color: var(--atp-element-fill-orange-medium-pressed);
  }

  .tag.utility-blue.fill-dark {
    --atp-tag-background-color: var(--atp-utility-primary-medium-pressed);

    color: var(--atp-content-inverse-medium-enabled);
  }

  .tag.dark-slate.fill-dark {
    --atp-tag-background-color: var(--atp-element-fill-primary-strong-pressed);

    color: var(--atp-content-inverse-medium-enabled);
  }

  .tag.light-slate.fill-dark {
    --atp-tag-background-color: var(--atp-element-fill-primary-medium-pressed);

    color: var(--atp-content-inverse-medium-enabled);
  }

  /** outline */
  .tag.blue.outline {
    --atp-tag-background-color: var(--atp-element-fill-blue-weak-enabled);

    border-color: var(--atp-element-fill-blue-medium-enabled);
  }

  .tag.purple.outline {
    --atp-tag-background-color: var(--atp-element-fill-purple-weak-enabled);

    border-color: var(--atp-element-fill-purple-medium-enabled);
  }

  .tag.green.outline {
    --atp-tag-background-color: var(--atp-element-fill-green-weak-enabled);

    border-color: var(--atp-element-fill-green-medium-enabled);
  }

  .tag.pink.outline {
    --atp-tag-background-color: var(--atp-element-fill-red-weak-enabled);

    border-color: var(--atp-element-fill-red-medium-enabled);
  }

  .tag.orange.outline {
    --atp-tag-background-color: var(--atp-element-fill-orange-weak-enabled);

    border-color: var(--atp-element-fill-orange-medium-enabled);
  }

  .tag.utility-blue.outline {
    --atp-tag-background-color: transparent;

    color: var(--atp-utility-primary-medium-enabled);
    border-color: var(--atp-utility-primary-medium-enabled);
  }

  .tag.dark-slate.outline {
    --atp-tag-background-color: transparent;

    color: var(--atp-utility-primary-strong-enabled);
    border-color: var(--atp-element-fill-primary-strong-enabled);
  }

  .tag.light-slate.outline {
    --atp-tag-background-color: transparent;

    color: var(--atp-utility-primary-strong-enabled);
    border-color: var(--atp-slate-200);
  }

  /* disabled */
  .tag.tag.disabled {
    color: var(--atp-content-primary-strong-disabled);
    background: var(--atp-element-fill-primary-strong-disabled);
    border-color: var(--atp-element-fill-primary-strong-disabled);
    cursor: default;
  }
`;
var Xs = Object.defineProperty, Ws = Object.getOwnPropertyDescriptor, tt = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? Ws(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && Xs(e, A, a), a;
}, qs = /* @__PURE__ */ ((t) => (t.FILL = "fill", t.FILL_DARK = "fill-dark", t.OUTLINE = "outline", t))(qs || {}), _s = /* @__PURE__ */ ((t) => (t.BLUE = "blue", t.PURPLE = "purple", t.GREEN = "green", t.PINK = "pink", t.ORANGE = "orange", t.UTILITY_BLUE = "utility-blue", t.DARK_SLATE = "dark-slate", t.LIGHT_SLATE = "light-slate", t))(_s || {});
let ye = class extends b {
  constructor() {
    super(...arguments), this.label = "", this.isAction = !1, this.disabled = !1, this.color = "blue", this.appearance = "fill";
  }
  render() {
    return g`${this.isAction ? g`<button
          @click=${this._handleClick}
          ?disabled="${this.disabled}"
          class="${this._getClasses()}"
        >
          ${this.label}
          ${this.icon ? g`<atp-icon
                class="icon"
                .icon="${this.icon.icon}"
                .height="${this.icon.height}"
              ></atp-icon>` : ""}
        </button>` : g`<div class="${this._getClasses()}">
          ${this.label}
          ${this.icon ? g`<atp-icon
                class="icon"
                .icon="${this.icon.icon}"
                .height="${this.icon.height}"
              ></atp-icon>` : ""}
        </div>`}`;
  }
  _getClasses() {
    return E({
      tag: !0,
      "tag-action": this.isAction,
      [this.color]: !0,
      [this.appearance]: !0,
      disabled: this.disabled
    });
  }
  _handleClick() {
    this.isAction && !this.disabled && this.dispatchEvent(new CustomEvent("clickEventOutput", { bubbles: !0, composed: !0 }));
  }
};
ye.styles = [y, js];
tt([
  l()
], ye.prototype, "label", 2);
tt([
  l({ type: Object })
], ye.prototype, "icon", 2);
tt([
  l({ type: Boolean })
], ye.prototype, "isAction", 2);
tt([
  l({ type: Boolean })
], ye.prototype, "disabled", 2);
tt([
  l()
], ye.prototype, "color", 2);
tt([
  l()
], ye.prototype, "appearance", 2);
ye = tt([
  Q("atp-tag")
], ye);
const $s = /* @__PURE__ */ Symbol.for(""), eo = (t) => {
  if (t?.r === $s) return t?._$litStatic$;
}, Ci = /* @__PURE__ */ new Map(), to = (t) => (e, ...A) => {
  const i = A.length;
  let a, r;
  const n = [], s = [];
  let o, d = 0, c = !1;
  for (; d < i; ) {
    for (o = e[d]; d < i && (r = A[d], (a = eo(r)) !== void 0); ) o += a + e[++d], c = !0;
    d !== i && s.push(r), n.push(o), d++;
  }
  if (d === i && n.push(e[i]), c) {
    const p = n.join("$$lit$$");
    (e = Ci.get(p)) === void 0 && (n.raw = n, Ci.set(p, e = n)), A = s;
  }
  return t(e, ...A);
}, Pe = to(g), Ao = k`
  :host {
    display: block;
    block-size: 100%;
    inline-size: 100%;
    position: relative;
  }

  .child-dropdown {
    inset-block-start: var(--nested-menu-position);
    position: absolute;
    inset-inline-start: 100%;
  }

  .menu-item:focus-within .child-dropdown {
    display: block;
  }

  .menu-wrapper {
    background: var(--atp-element-fill-inverse-weak-enabled, #fff);
    overflow: hidden;
    padding-block: var(--atp-space-xxs) var(--atp-space-xs);
    padding-inline: 0;
    display: flex;
    flex-direction: column;
    max-block-size: var(--atp-dropdown-max-height, 300px);
    border-radius: var(--atp-border-radius-s);
    box-shadow: var(--atp-box-shadow-medium);
  }

  .menu-container {
    overflow: hidden auto;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--atp-space-xxs);
  }

  .menu-button {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: var(--atp-space-xs);
    box-sizing: border-box;
    inline-size: 100%;
    padding-block: var(--atp-space-xs);
    padding-inline: var(--atp-space-s);
    color: var(--atp-content-primary-strong-enabled);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-s);
    font-weight: var(--atp-font-weight-regular);
    line-height: var(--atp-line-height-body-s);
    transition: all var(--atp-transition-standard);
  }

  /* TODO: Further refine how main label/ description are given spacing priority */

  .menu-button .label {
    display: flex;
    align-items: center;
    gap: var(--atp-space-xs);
    min-inline-size: 0;
    max-inline-size: calc(
      100% - var(--atp-dropdown-icon-space-inline-start) - var(--atp-dropdown-icon-space-inline-end)
    );
    overflow: hidden;
  }

  .menu-button .label .main-text {
    white-space: nowrap;
    overflow: hidden;
    flex: 0 1 auto;
    text-overflow: ellipsis;
    min-inline-size: 0;
    max-inline-size: 100%;
  }

  .menu-button .label .description-text {
    flex: 0 9999 auto;
    min-inline-size: 0;
    color: var(--atp-text-primary-weak-enabled);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-xs);
    font-weight: var(--atp-font-weight-semibold);
    line-height: var(--atp-line-height-body-xs);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-inline-size: 100%;
  }

  .menu-button .label.top,
  .menu-button .label.bottom {
    align-items: flex-start;
    gap: var(--atp-space-xxxs);
  }

  .menu-button .label.left {
    flex-direction: row-reverse;
  }

  .menu-button .label.top {
    flex-direction: column-reverse;
  }

  .menu-button .label.bottom {
    flex-direction: column;
  }

  .menu-button:not(:has(.description-text)) .label {
    flex-grow: 1;
  }

  .menu-button:is(.active) {
    background: var(--atp-element-fill-blue-medium-enabled);
  }

  .menu-button:focus-visible,
  .menu-button:hover {
    background: var(--atp-element-fill-inverse-weak-hover);
  }

  .menu-button.is-keyboard:focus-visible {
    box-shadow: inset 0 0 0 2px var(--atp-focus-color);
  }

  .menu-button:active {
    background: var(--atp-element-fill-inverse-weak-pressed);
  }

  .search-bar {
    display: flex;
    align-items: center;
    margin-block: var(--atp-space-xxs);
    margin-inline: var(--atp-space-xs);
    padding: var(--atp-space-xs);
    gap: var(--atp-space-xs);
    border-radius: var(--atp-border-radius-s);
    border: 1px solid var(--atp-element-border-primary-strong-enabled);
    background: var(--atp-element-fill-inverse-weak-enabled);
  }

  .search-bar .search-input {
    border: none;
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-s);
    font-weight: var(--atp-font-weight-regular);
    line-height: var(--atp-line-height-body-s);
    flex-grow: 1;
  }

  .search-bar .search-input:focus {
    outline: none;
    box-shadow: none;
  }

  .title-item {
    block-size: var(--atp-space-l);
    margin-inline-start: var(--atp-space-s);
    padding-block: calc(var(--atp-space-xxxs) + var(--atp-space-xxs)) var(--atp-space-xxxs);
    padding-inline: 0 var(--atp-space-s);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--atp-space-xxs);
    border-block-end: 1px solid var(--atp-element-border-primary-medium-enabled);
  }

  .title-item .title-label {
    color: var(--atp-content-primary-medium-enabled);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-xs);
    font-weight: var(--atp-font-weight-regular);
    line-height: var(--atp-line-height-body-xs);
    margin: 0;
  }

  .title-item .title-button {
    all: unset;
    cursor: pointer;
    color: var(--atp-button-primary-medium-enabled);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-s);
    font-weight: var(--atp-font-weight-semibold);
    line-height: var(--atp-line-height-body-s);
  }

  .title-item .title-button:active,
  .title-item .title-button:hover,
  .title-item .title-button:focus-visible {
    text-decoration: underline;
  }

  .title-item .title-button.is-keyboard:focus-visible {
    outline: var(--atp-focus-width) solid var(--atp-focus-color);
    outline-offset: var(--atp-focus-outline-offset);
  }
`;
const zA = n1(class extends s1 {
  constructor(t) {
    if (super(t), t.type !== r1.ATTRIBUTE || t.name !== "class" || t.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t) {
    return " " + Object.keys(t).filter((e) => t[e]).join(" ") + " ";
  }
  update(t, [e]) {
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), t.strings !== void 0 && (this.nt = new Set(t.strings.join(" ").split(/\s/).filter((i) => i !== "")));
      for (const i in e) e[i] && !this.nt?.has(i) && this.st.add(i);
      return this.render(e);
    }
    const A = t.element.classList;
    for (const i of this.st) i in e || (A.remove(i), this.st.delete(i));
    for (const i in e) {
      const a = !!e[i];
      a === this.st.has(i) || this.nt?.has(i) || (a ? (A.add(i), this.st.add(i)) : (A.remove(i), this.st.delete(i)));
    }
    return xe;
  }
});
var io = Object.defineProperty, ao = Object.getOwnPropertyDescriptor, R = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? ao(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && io(e, A, a), a;
}, fa = /* @__PURE__ */ ((t) => (t.STARTS_WITH = "starts_with", t.INCLUDES = "includes", t))(fa || {}), va = /* @__PURE__ */ ((t) => (t.BOTH = "both", t.NAME = "name", t.DESCRIPTION = "description", t))(va || {}), ka = /* @__PURE__ */ ((t) => (t.SINGLE = "single", t.MULTIPLE = "multiple", t))(ka || {});
let O = class extends b {
  constructor() {
    super(), this.itemsList = [], this.isMenuVisible = !1, this.isSearchVisible = !1, this.searchValue = "", this.activeIds = [], this.placeholder = "Search", this.openAtActiveIndex = !1, this.maxHeight = "300px", this.showCheckmarks = !1, this.visualPosition = Qe.RIGHT, this.filterMatching = "includes", this.filterPriority = "both", this.selectionMode = "multiple", this._hasClickedOnce = !1, this._focusIndex = -1, this._titleList = [], this._activeItem = { position: 0, id: "", children: [], index: 0 }, this._isKeyboard = !1, this._clickOutsideHandler = (t) => {
      l1(t, this) && this._hasClickedOnce && this._closeDropdown(), this._hasClickedOnce = !0;
    };
  }
  render() {
    return g`
      ${this.isMenuVisible ? g`
            <div style="--atp-dropdown-max-height: ${this.maxHeight}" class="menu-wrapper">
              <slot name="above-menu-content"></slot>
              ${this.isSearchVisible ? g`
                    <div class="search-bar">
                      <atp-icon height="14" icon="search"></atp-icon>
                      <input
                        .value=${this.searchValue}
                        class="search-input"
                        type="search"
                        aria-label="Search"
                        placeholder="${this.placeholder}"
                        @input=${(t) => this.searchValue = t.target.value}
                        @keydown=${(t) => this._onItemKeydown(t, 0)}
                      />
                    </div>
                  ` : ""}
              <ul class="menu-container">
                ${this.filteredItemList.map(
      (t, e) => g`<li class="menu-item">
                      ${t.isTitle ? g`<div class="title-item">
                            <p class="title-label">${t.name}</p>
                            ${this.filteredItemList.length !== this.itemsList.length || !t.titleAction ? g`<span class="title-button"></span>` : g`<button
                                  @click=${() => this._selectAll(e + 1, this._titleList[e])}
                                  @mousemove=${() => this._focusItem(e + (this.isSearchVisible ? 1 : 0), !0)}
                                  @keydown=${(A) => this._onItemKeydown(A, e + (this.isSearchVisible ? 1 : 0))}
                                  class="title-button ${zA({
        "is-keyboard": this._isKeyboard
      })}"
                                >
                                  ${this._titleList[e] ? "Deselect All" : "Select All"}
                                </button>`}
                          </div>` : g`<button
                            @click=${(A) => this._onClick(t, A)}
                            @focus=${() => this._focusHandler(t, e)}
                            @mousemove=${() => this._focusItem(e + (this.isSearchVisible ? 1 : 0), !0)}
                            @keydown=${(A) => this._onItemKeydown(
        A,
        e + (this.isSearchVisible ? 1 : 0),
        t.children?.length > 0
      )}
                            ?disabled=${t.isDisabled}
                            class="menu-button ${zA({
        active: this.activeIds.includes(t.id),
        "is-keyboard": this._isKeyboard
      })}"
                          >
                            ${this.showCheckmarks ? g`<atp-icon
                                  color="${this.activeIds.includes(t.id) ? "var(--atp-content-primary-medium-enabled)" : "transparent"}"
                                  height="16"
                                  icon="check"
                                ></atp-icon>` : ""}
                            ${t.icon ? g`<atp-icon
                                  .color="${t.icon.color}"
                                  .height="${t.icon.height}"
                                  .icon="${t.icon.icon}"
                                ></atp-icon>` : ""}
                            <span
                              style="--atp-dropdown-icon-space-inline-start: ${!this.showCheckmarks && !t.icon ? "0" : "var(--atp-space-m)"};--atp-dropdown-icon-space-inline-end: ${t.children?.length > 0 ? "var(--atp-space-m)" : "0"};"
                              class="label ${zA({
        right: this.visualPosition === Qe.RIGHT,
        left: this.visualPosition === Qe.LEFT,
        top: this.visualPosition === Qe.TOP,
        bottom: this.visualPosition === Qe.BOTTOM
      })}"
                            >
                              <span
                                style=${t.color ? `color: ${t.color};` : ""}
                                class="main-text"
                                >${t.name}</span
                              >
                              ${t.description ? g`<span class="description-text">${t.description}</span>` : ""}
                            </span>
                            ${t.children?.length > 0 ? g`<atp-icon height="16" icon="chevron-right"></atp-icon>` : ""}
                          </button>`}
                    </li>`
    )}
              </ul>
            </div>
            ${this._activeItem.children.length > 0 ? g`<atp-dropdown
                  @keydown="${(t) => this._handleChildKeydown(t)}"
                  id="child-dropdown"
                  @childSelectedOutput="${(t) => this._handleChildClick(t)}"
                  class="child-dropdown"
                  style="--nested-menu-position: ${this._activeItem.position}px;"
                  .isMenuVisible=${!0}
                  .itemsList="${this._activeItem.children}"
                  .activeIds="${this.activeIds}"
                  .selectionMode=${this.selectionMode}
                  .showCheckmarks=${!0}
                ></atp-dropdown>` : ""}
          ` : ""}
    `;
  }
  get filteredItemList() {
    if (this.filterPriority !== "both" && this.isSearchVisible) {
      const e = this.itemsList.filter((n) => !n.isTitle), A = /* @__PURE__ */ new Set(), i = this.filterPriority === "name", a = e.filter((n) => {
        const s = i ? n.name || "" : n.description || "";
        return this._matchesSearchValue(s) ? (A.add(n.id), !0) : !1;
      }), r = e.filter((n) => {
        if (A.has(n.id))
          return !1;
        const s = i ? n.description || "" : n.name || "";
        return this._matchesSearchValue(s);
      });
      return [...a, ...r];
    }
    const t = this.itemsList.filter((e) => this._filterMenuItem(e));
    return t.filter((e, A) => !(e.isTitle && (A === t.length - 1 || t[A + 1].isTitle)));
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("click", this._clickOutsideHandler);
  }
  disconnectedCallback() {
    window.removeEventListener("click", this._clickOutsideHandler), super.disconnectedCallback();
  }
  async updated(t) {
    super.updated(t), await this.updateComplete, t.has("isMenuVisible") && this.isMenuVisible && this.openAtActiveIndex && this._handleOpenAtActive(), t.has("itemList") && (this._titleList = Array(this.itemsList.length).fill(!1)), t.has("activeIds") && this._setTitleButtons(), t.has("isMenuVisible") && this.requestUpdate();
  }
  _handleChildClick({ detail: t }) {
    this._onClick(t);
  }
  startKeyScrolling() {
    this._hasClickedOnce = !1, this._focusIndex = -1, this.isMenuVisible = !0, this.updateComplete.then(() => this._focusItem(0, !1));
  }
  disableKeyScrolling() {
    this.isMenuVisible = !1, this._focusIndex = -1;
  }
  _closeDropdown({ keyboard: t = !1 } = {}) {
    this.isMenuVisible && this.dispatchEvent(
      new CustomEvent("dropdownClosedOutput", {
        detail: { keyboard: t },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _onClick(t, e) {
    let A;
    this.selectionMode === "single" ? A = [t.id] : A = this.activeIds.includes(t.id) ? this.activeIds.filter((a) => a !== t.id) : [t.id, ...this.activeIds], e?.detail === 0 && this.selectionMode === "single" && this._closeDropdown({ keyboard: !0 }), this.dispatchEvent(
      new CustomEvent("itemSelectedOutput", {
        detail: A,
        bubbles: !0,
        composed: !0
      })
    );
  }
  _matchesSearchValue(t) {
    const e = t.toLocaleLowerCase(), A = this.searchValue.toLocaleLowerCase();
    return this.filterMatching == "starts_with" ? e.startsWith(A) : e.includes(A);
  }
  _filterMenuItem(t) {
    const e = this._matchesSearchValue(t.name), A = t.description ? this._matchesSearchValue(t.description) : !1;
    return !this.isSearchVisible || e || A || t.isTitle;
  }
  _focusHandler(t, e) {
    let A = 0;
    if (t.children?.length > 0 && this.isMenuVisible)
      for (let i = 0; i < e; i++)
        this.visualPosition === Qe.TOP || this.visualPosition === Qe.BOTTOM ? A += 48 : A += 32;
    this._activeItem = {
      id: t.id,
      position: A,
      children: t.children ?? [],
      index: e
    }, this.requestUpdate();
  }
  _selectAll(t, e) {
    let A = [...this.activeIds];
    for (; t < this.filteredItemList.length && !this.filteredItemList[t].isTitle; )
      e ? A = A.filter((i) => i !== this.filteredItemList[t].id) : A.includes(this.filteredItemList[t].id) || A.push(this.filteredItemList[t].id), t++;
    this.dispatchEvent(
      new CustomEvent("itemSelectedOutput", {
        detail: A,
        bubbles: !0,
        composed: !0
      })
    );
  }
  _setTitleButtons() {
    let t = 0, e = !0;
    for (let A = 1; A < this.itemsList.length; A++)
      this.itemsList[A].isTitle ? (this._titleList[t] = e, t = A, e = !0) : this.activeIds?.includes(this.itemsList[A].id) || (e = !1);
    this._titleList[t] = e, this.requestUpdate();
  }
  _handleChildKeydown(t) {
    t.key === "ArrowLeft" && this._focusItem(this._activeItem.index, !1, 1, !0);
  }
  _onItemKeydown(t, e, A = !1) {
    if (this.isMenuVisible) {
      t.key === "ArrowRight" && A ? this.updateComplete.then(() => this._childDropdown?.startKeyScrolling()) : this._childDropdown?.disableKeyScrolling();
      const i = this.filteredItemList.length + (this.isSearchVisible ? 1 : 0);
      t.key === "ArrowDown" ? (t.preventDefault(), this.updateComplete.then(() => this._focusItem((e + 1) % i, !1))) : t.key === "ArrowUp" ? (t.preventDefault(), this.updateComplete.then(
        () => this._focusItem((e - 1 + i) % i, !1, -1)
      )) : t.key === "Escape" ? this._closeDropdown({ keyboard: !0 }) : t.key === "Tab" && this._closeDropdown();
    }
  }
  _focusItem(t, e, A = 1, i = !1) {
    if (t !== this._focusIndex || i) {
      const a = Array.from(
        this.shadowRoot?.querySelectorAll(
          ".search-input, .menu-item .menu-button, .menu-item .title-button"
        ) || []
      ), r = this.filteredItemList[t - (this.isSearchVisible ? 1 : 0)]?.isTitle && (!this.filteredItemList[t - (this.isSearchVisible ? 1 : 0)]?.titleAction || this.filteredItemList.length !== this.itemsList.length) ? t + 1 * A : t;
      this._focusIndex = r, a?.[r]?.focus({ preventScroll: !0 }), e || a?.[r]?.scrollIntoView({ behavior: "auto", block: "nearest" }), this._isKeyboard = !e, this.requestUpdate();
    }
  }
  async _handleOpenAtActive() {
    await this.updateComplete, this.filteredItemList.forEach((e, A) => {
      this.activeIds.includes(e.id) && this._focusItem(A, !1);
    });
    let t = !1;
    for (const [e, A] of this.filteredItemList.entries())
      if (A.children?.some((i) => this.activeIds.includes(i.id))) {
        this._focusHandler(A, e), t = !0, this._focusIndex = -1;
        for (const [i, a] of A.children.entries())
          this.activeIds.includes(a.id) && (await this.updateComplete, this._childDropdown._focusItem(i, !1));
      }
    t || (this._activeItem = { position: 0, id: "", children: [], index: 0 });
  }
};
O.styles = [y, Ao];
R([
  l({ type: Array })
], O.prototype, "itemsList", 2);
R([
  l({ type: Boolean })
], O.prototype, "isMenuVisible", 2);
R([
  l({ type: Boolean })
], O.prototype, "isSearchVisible", 2);
R([
  l()
], O.prototype, "searchValue", 2);
R([
  l({ type: Array })
], O.prototype, "activeIds", 2);
R([
  l()
], O.prototype, "placeholder", 2);
R([
  l({ type: Boolean })
], O.prototype, "openAtActiveIndex", 2);
R([
  l()
], O.prototype, "maxHeight", 2);
R([
  l({ type: Boolean })
], O.prototype, "showCheckmarks", 2);
R([
  l({ type: Qe })
], O.prototype, "visualPosition", 2);
R([
  l({ type: fa })
], O.prototype, "filterMatching", 2);
R([
  l({ type: va })
], O.prototype, "filterPriority", 2);
R([
  l()
], O.prototype, "selectionMode", 2);
R([
  Vt("#child-dropdown")
], O.prototype, "_childDropdown", 2);
O = R([
  Q("atp-dropdown")
], O);
var ro = Object.defineProperty, no = Object.getOwnPropertyDescriptor, V = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? no(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && ro(e, A, a), a;
}, so = /* @__PURE__ */ ((t) => (t.LEFT = "left", t.RIGHT = "right", t))(so || {}), oo = /* @__PURE__ */ ((t) => (t.LARGE = "large", t.MEDIUM = "medium", t.SMALL = "small", t))(oo || {});
let T = class extends b {
  constructor() {
    super(...arguments), this.required = !1, this.isError = !1, this.disabled = !1, this.readonly = !1, this.textarea = !1, this.size = "large", this._dropdownVisible = !1, this._isSelect = !1, this._isMultiSelect = !1, this._clickOutsideHandler = (t) => {
      l1(t, this) && this._isSelect && this.dispatchEvent(new CustomEvent("dropdownClosedOutput", { bubbles: !0, composed: !0 }));
    }, this._handleClick = (t) => {
      !this._isSelect && t.target.classList.contains("input-wrapper") && t.target.tagName !== "ATP-BUTTON" && t.target.tagName !== "INPUT" && (t.preventDefault(), this.inputElementRef?.focus()), this._isSelect && t.target.tagName !== "ATP-TAG" && t.target.tagName !== "ATP-DROPDOWN" && t.target.tagName !== "ATP-BUTTON" && (t.preventDefault(), this._toggleDropdown(!this._dropdownVisible));
    }, this._singleItemSelect = () => {
      this._dropdownVisible && this._toggleDropdown(!1);
    }, this._onInputKeydown = (t) => {
      t.code === "Space" && this._toggleDropdown(!this._dropdownVisible);
    };
  }
  render() {
    return Pe`
      <div class="${this._getClasses()}">
        <div class="field-label ${this._slottedLabelElements.length === 0 ? "none" : ""}">
          <slot name="label"></slot>
          ${this.required ? Pe`<span class="required-indicator">*</span>` : ""}
        </div>
        <div @mousedown="${(t) => this._handleClick(t)}" class="input-wrapper">
          ${this.iconLeft ? Pe`<atp-icon
                .icon=${this.iconLeft.icon}
                .height=${this.iconLeft.height}
                .color=${"black"}
              ></atp-icon>` : ""}
          <div class="inner-input">
            <slot></slot>
            <div class="dropdown ${this.dropdownPosition}">
              <slot name="dropdown"></slot>
            </div>
            ${this.tags?.length > 0 ? Pe`<div class="tag-list">
                  ${this.tags.map(
      (t, e) => Pe`<atp-tag
                      .label="${t.label}"
                      .icon="${t.icon}"
                      .isAction="${t.isAction}"
                      .disabled="${this.disabled || t.disabled}"
                      @clickEventOutput=${() => this._tagRemoveHandler(t.label, e)}
                    ></atp-tag>`
    )}
                </div>` : ""}
          </div>
          ${this.iconRight || this._isSelect ? this.iconRightClickable ? Pe`<atp-button
                  id="icon-clickable"
                  .iconConfig=${this._iconRightWithDefaults}
                  .appearance=${ue.TEXT}
                  @clickEventOutput=${this._iconClicked}
                ></atp-button>` : Pe`<atp-icon
                  .icon=${this._iconRightWithDefaults.icon}
                  .height=${this._iconRightWithDefaults.height}
                  .color=${"black"}
                ></atp-icon>` : u}
        </div>
        <slot class="help-text" name="help-text"></slot>
      </div>
    `;
  }
  async firstUpdated() {
    await this.updateComplete;
    const t = this._slottedInputElements[0], e = this._slottedDropdownElements[0];
    this._isSelect = !!this._slottedDropdownElements[0], this._isMultiSelect = e?.selectionMode === ka.MULTIPLE, this._slottedLabelElements.length > 0 && (this._isSelect && this._slottedLabelElements[0]?.addEventListener("click", () => {
      setTimeout(() => {
        this._toggleDropdown(!0);
      }, 0);
    }), this.requestUpdate()), t && (this.inputElementRef = t, this._isSelect && (this.iconRightClickable = !0, this.inputElementRef.readOnly = !0, this.inputElementRef.tabIndex = -1), this.readonly && (this.inputElementRef.readOnly = !0), this.disabled && (this.inputElementRef.disabled = !0), this._applyInputSizeStyles()), e && (this.dropdownElementRef = e, this.addEventListener("dropdownClosedOutput", (A) => {
      this._toggleDropdown(!1), A.detail?.keyboard && this.shadowRoot?.querySelector("#icon-clickable")?.focusButton();
    }), this._isMultiSelect || this.addEventListener("itemSelectedOutput", this._singleItemSelect));
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("click", this._clickOutsideHandler);
  }
  disconnectedCallback() {
    this.removeEventListener("dropdownClosedOutput", () => this._toggleDropdown(!1)), this.removeEventListener("itemSelectedOutput", this._singleItemSelect), window.removeEventListener("click", this._clickOutsideHandler), this._slottedLabelElements[0]?.removeEventListener("click", () => {
      setTimeout(() => {
        this._toggleDropdown(!0);
      }, 0);
    }), super.disconnectedCallback();
  }
  update(t) {
    t.has("disabled") && this.inputElementRef && (this.inputElementRef.disabled = this.disabled), t.has("readonly") && this.inputElementRef && !this._isSelect && (this.inputElementRef.readOnly = this.readonly), t.has("size") && this._applyInputSizeStyles(), super.update(t);
  }
  _iconClicked() {
    this.dispatchEvent(new CustomEvent("iconClickedOutput", { bubbles: !0, composed: !0 })), this._isSelect && this._toggleDropdown(!this._dropdownVisible);
  }
  _tagRemoveHandler(t, e) {
    const A = e === this.tags.length - 1, i = this.tags.length > 1;
    this.dispatchEvent(
      new CustomEvent("tagRemoveOutput", {
        detail: t,
        bubbles: !0,
        composed: !0
      })
    ), A && this.updateComplete.then(() => {
      if (i) {
        const a = this.shadowRoot?.querySelectorAll("atp-tag");
        a?.[a.length - 1]?.shadowRoot?.querySelector("button")?.focus();
      } else this.tags?.length || this.shadowRoot?.querySelector("#icon-clickable")?.focusButton();
    });
  }
  _toggleDropdown(t) {
    this._dropdownVisible = t, this.dropdownElementRef && (t ? this.dropdownElementRef.startKeyScrolling() : this.dropdownElementRef.disableKeyScrolling());
  }
  get _iconRightWithDefaults() {
    return {
      ...this.iconRight,
      icon: this.iconRight?.icon ?? "chevron-down",
      height: this.iconRight?.height ?? 16,
      label: this.iconRight?.label ?? "Toggle dropdown menu"
    };
  }
  _applyInputSizeStyles() {
    if (this.inputElementRef && !(this.inputElementRef instanceof HTMLTextAreaElement)) {
      const t = this.size === "small" ? "xs" : "s", e = `var(--atp-line-height-body-${t})`;
      this.inputElementRef.style.blockSize = e, this.inputElementRef.style.fontSize = `var(--atp-font-size-body-${t})`, this.inputElementRef.style.lineHeight = e;
    }
  }
  _getClasses() {
    return E({
      "field-wrapper": !0,
      error: this.isError,
      disabled: this.disabled,
      readonly: this.readonly,
      select: this._isSelect,
      textarea: this.textarea,
      [`size-${this.size}`]: !0
    });
  }
};
T.styles = [y, Gs];
V([
  l({ type: Boolean })
], T.prototype, "required", 2);
V([
  l({ type: Object })
], T.prototype, "iconLeft", 2);
V([
  l({ type: Object })
], T.prototype, "iconRight", 2);
V([
  l({ type: Boolean })
], T.prototype, "iconRightClickable", 2);
V([
  l({ type: Boolean })
], T.prototype, "isError", 2);
V([
  l()
], T.prototype, "dropdownPosition", 2);
V([
  l({ type: Array })
], T.prototype, "tags", 2);
V([
  l({ type: Boolean })
], T.prototype, "disabled", 2);
V([
  l({ type: Boolean })
], T.prototype, "readonly", 2);
V([
  l({ type: Boolean })
], T.prototype, "textarea", 2);
V([
  l()
], T.prototype, "size", 2);
V([
  qe()
], T.prototype, "_slottedInputElements", 2);
V([
  qe({ slot: "label" })
], T.prototype, "_slottedLabelElements", 2);
V([
  qe({ slot: "dropdown" })
], T.prototype, "_slottedDropdownElements", 2);
T = V([
  Q("atp-input-field")
], T);
var lo = Object.defineProperty, go = Object.getOwnPropertyDescriptor, ie = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? go(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && lo(e, A, a), a;
};
let P = class extends b {
  constructor() {
    super(...arguments), this.isVisible = !1, this.minDate = I.now().minus({ years: 10 }), this.maxDate = I.now().plus({ years: 10 }), this.notAllowedDates = [], this.isSoloPicker = !1, this.isMultiPicker = !1, this.preselectedRanges = [], this._calendarIcon = {
      label: "Toggle datepicker",
      icon: "calendar"
    }, this._hasClickedOnce = !1, this._calendarDays = [], this._keyboardActive = !1, this._isSelectingSecond = !1, this._inputLabel = !1, this._yearDropdownVisible = !1, this._monthDropdownVisible = !1, this._secondInput = !1, this._clickOutsideHandler = (t) => {
      l1(t, this) && this._hasClickedOnce && this._emitClosedEvent(), this._hasClickedOnce = !0;
    }, this._firstListenerWrapper = () => {
      this._handleFirstToggle(!this.isVisible || this.isVisible && this._isSelectingSecond);
    }, this._secondListenerWrapper = () => {
      this._secondInput = !0, this._handleSecondToggle(!this.isVisible || this.isVisible && !this._isSelectingSecond), this.requestUpdate();
    }, this._dateOutput = (t) => {
      const e = this._normalizeOptionalDate(
        I.fromFormat(t.target.value, "MM/dd/yyyy")
      );
      this.dispatchEvent(
        new CustomEvent("dateSelectedOutput", {
          bubbles: !0,
          composed: !0,
          detail: e
        })
      );
    }, this._date2Output = (t) => {
      const e = this._normalizeOptionalDate(
        I.fromFormat(t.target.value, "MM/dd/yyyy")
      );
      this.dispatchEvent(
        new CustomEvent("date2SelectedOutput", {
          bubbles: !0,
          composed: !0,
          detail: e
        })
      );
    }, this._handleMonthSelect = ({ detail: t }) => {
      const e = Number(t[0]) - this._activeDate.month;
      this._activeDate = this._activeDate.plus({ months: e }).startOf("month"), this._updateCalendarGrid(), this._toggleMonthDropdown(!1);
    }, this._handleYearSelect = ({ detail: t }) => {
      const e = Number(t[0]) - this._activeDate.year;
      this._activeDate = this._activeDate.plus({ years: e }).startOf("month"), this._updateCalendarGrid(), this._toggleYearDropdown(!1);
    };
  }
  willUpdate(t) {
    this._normalizeChangedDates(t), t.has("date") && !this.isMultiPicker && (this.date2 = this.date);
  }
  updated(t) {
    (t.has("date") || t.has("date2")) && this._syncInputValues();
  }
  async connectedCallback() {
    super.connectedCallback();
    const t = I.now();
    this.minDate = this._normalizeRequiredDate(this.minDate, t.minus({ years: 10 })), this.maxDate = this._normalizeRequiredDate(this.maxDate, t.plus({ years: 10 })), this.date = this._normalizeOptionalDate(this.date), this.date2 = this._normalizeOptionalDate(this.date2), this.isMultiPicker || (this.date2 = this.date), window.addEventListener("click", this._clickOutsideHandler), this._activeDate = this._getCalendarAnchorDate(this.date ?? this.date2), this._updateCalendarGrid();
  }
  _normalizeChangedDates(t) {
    const e = I.now();
    t.has("minDate") && (this.minDate = this._normalizeRequiredDate(this.minDate, e.minus({ years: 10 }))), t.has("maxDate") && (this.maxDate = this._normalizeRequiredDate(this.maxDate, e.plus({ years: 10 }))), t.has("date") && (this.date = this._normalizeOptionalDate(this.date)), t.has("date2") && (this.date2 = this._normalizeOptionalDate(this.date2));
  }
  _normalizeRequiredDate(t, e) {
    return !I.isDateTime(t) || !t.isValid ? e.startOf("day") : t.startOf("day");
  }
  _normalizeOptionalDate(t) {
    return !I.isDateTime(t) || !t.isValid ? null : t.startOf("day");
  }
  _getClampedDefaultDate() {
    const t = I.now().startOf("day");
    return t < this.minDate ? this.minDate : t > this.maxDate ? this.maxDate : t;
  }
  _getCalendarAnchorDate(t) {
    return t ?? this._getClampedDefaultDate();
  }
  _formatDate(t) {
    return t?.toFormat("MM/dd/yyyy") ?? "";
  }
  _syncInputValues() {
    this._input1 && (this._input1.inputElementRef.value = this._formatDate(this.date)), this._input2 && (this._input2.inputElementRef.value = this._formatDate(this.date2));
  }
  _emitClosedEvent() {
    this._keyboardActive = !1, this.dispatchEvent(new CustomEvent("dropdownClosedOutput", { bubbles: !0, composed: !0 })), (this.isSoloPicker || this.isMultiPicker) && (this.isVisible = !1, this.requestUpdate());
  }
  async _moveFocus(t) {
    let e = this._activeDate.plus({ days: t });
    for (let A = 0; A < 31; A++) {
      if (!this._dayDisabled(e)) {
        this._activeDate = e, await this.updateComplete;
        const i = this._activeDate.toISODate();
        this.renderRoot.querySelector(`[data-date="${i}"]`)?.focus(), this.requestUpdate();
        return;
      }
      e = e.plus({ days: t >= 0 ? 1 : -1 });
    }
  }
  _onKeyDown(t) {
    switch (t.key) {
      case "ArrowLeft":
        this._moveFocus(-1);
        break;
      case "ArrowRight":
        this._moveFocus(1);
        break;
      case "ArrowUp":
        this._moveFocus(-7);
        break;
      case "ArrowDown":
        this._moveFocus(7);
        break;
      case "Tab":
        t.shiftKey ? (this._keyboardActive = !1, this.requestUpdate()) : this._emitClosedEvent();
        break;
      case "Enter":
        this._onDateClick(this._activeDate);
        break;
      case "Escape":
        this._emitClosedEvent();
        break;
    }
  }
  async _updateCalendarGrid() {
    this._keyboardActive = !1;
    const t = this._activeDate.startOf("month"), e = t.weekday % 7, A = e + this._activeDate.daysInMonth + ((e + this._activeDate.daysInMonth) % 7 === 0 ? 0 : 7 - (e + this._activeDate.daysInMonth) % 7), i = t.minus({ days: e }).startOf("day");
    this._calendarDays = Array.from({ length: A }, (r, n) => i.plus({ days: n }));
    const a = [this.date, this.date2].filter((r) => !!r);
    this._activeDate = this._calendarDays.find(
      (r) => a.some((n) => r.equals(n)) && !this._dayDisabled(r)
    ) || this._calendarDays.find((r) => !this._dayDisabled(r)) || this._activeDate, await this.updateComplete, this.requestUpdate();
  }
  _goToNextMonth() {
    this._activeDate = this._activeDate.plus({ months: 1 }).startOf("month"), this._updateCalendarGrid();
  }
  _goToPreviousMonth() {
    this._activeDate = this._activeDate.minus({ months: 1 }).startOf("month"), this._updateCalendarGrid();
  }
  _goToNextYear() {
    this._activeDate = this._activeDate.plus({ years: 1 }).startOf("month"), this._updateCalendarGrid();
  }
  _goToPreviousYear() {
    this._activeDate = this._activeDate.minus({ years: 1 }).startOf("month"), this._updateCalendarGrid();
  }
  _onDateClick(t) {
    this._activeDate = t, this.dispatchEvent(
      new CustomEvent(this._isSelectingSecond ? "date2SelectedOutput" : "dateSelectedOutput", {
        bubbles: !0,
        composed: !0,
        detail: t
      })
    ), this._input1 && !this._isSelectingSecond ? (this._input1.inputElementRef.value = t.toFormat("MM/dd/yyyy"), this.isMultiPicker ? (this.date2 && t > this.date2 && this._input2 && (this.dispatchEvent(
      new CustomEvent("date2SelectedOutput", {
        bubbles: !0,
        composed: !0,
        detail: t
      })
    ), this._input2.inputElementRef.value = t.toFormat("MM/dd/yyyy")), this._handleSecondToggle(!0)) : this._handleFirstToggle(!1)) : this._input2 && this._isSelectingSecond && (this._input2.inputElementRef.value = t.toFormat("MM/dd/yyyy"), this._handleSecondToggle(!1), this.date && t < this.date && this._input1 && (this.dispatchEvent(
      new CustomEvent("dateSelectedOutput", {
        bubbles: !0,
        composed: !0,
        detail: t
      })
    ), this._input1.inputElementRef.value = t.toFormat("MM/dd/yyyy")));
  }
  _dayDisabled(t) {
    let e = !1;
    return this.notAllowedDates.forEach((A) => {
      t.hasSame(A, "day") && (e = !0);
    }), (t < this.minDate || t > this.maxDate) && (e = !0), t.hasSame(this._activeDate, "month") || (e = !0), e;
  }
  _getDayCellClass(t) {
    const e = this._getSelectedDateRange();
    return E({
      "day-cell": !0,
      today: t.hasSame(I.now(), "day"),
      range: e !== null && e.start <= t && t <= e.end,
      "range-start": e !== null && t.hasSame(e.start, "day"),
      "range-end": e !== null && t.hasSame(e.end, "day"),
      disabled: this._dayDisabled(t)
    });
  }
  _getSelectedDateRange() {
    const t = [this.date, this.date2].filter((e) => !!e);
    return t.length === 0 ? null : {
      start: I.min(...t).startOf("day"),
      end: I.max(...t).startOf("day")
    };
  }
  _handleFirstToggle(t) {
    this._activeDate = this._getCalendarAnchorDate(this.date ?? this.date2), this._isSelectingSecond = !1, this._secondInput = !1, this.isVisible = t, t && this._updateCalendarGrid();
  }
  _handleSecondToggle(t) {
    this._activeDate = this._getCalendarAnchorDate(this.date2 ?? this.date), this._isSelectingSecond = !0, this.isVisible = t, t ? this._updateCalendarGrid() : this._secondInput = !1;
  }
  async firstUpdated() {
    await this.updateComplete, this._input1 = this._slottedInputElements[0], this._input2 = this._slottedInputElements2[0], this._input1 && (this.toggleAttribute("has-input", !0), this._input1.addEventListener("iconClickedOutput", this._firstListenerWrapper), this._input1.iconRight = this._calendarIcon, this._input1.iconRightClickable = !0, this._inputLabel = this._input1._slottedLabelElements?.length > 0 || this._inputLabel, await this.updateComplete, this._input1.inputElementRef.addEventListener("change", this._dateOutput), this._input1.inputElementRef.value = this._formatDate(this.date)), this._input2 && (this._input2.addEventListener("iconClickedOutput", this._secondListenerWrapper), this._input2.iconRight = this._calendarIcon, this._input2.iconRightClickable = !0, this._inputLabel = this._input2._slottedLabelElements?.length > 0 || this._inputLabel, await this.updateComplete, this._input2.inputElementRef.addEventListener("change", this._date2Output), this._input2.inputElementRef.value = this._formatDate(this.date2));
  }
  _getYearOptions() {
    const t = [];
    for (let e = this.minDate.year; e <= this.maxDate.year; e++)
      t.push({ name: `${e}`, id: `${e}` });
    return t;
  }
  _getMonthOptions() {
    const t = this._activeDate.year > this.minDate.year ? 1 : this.minDate.month, e = this._activeDate.year < this.maxDate.year ? 12 : this.maxDate.month;
    return Array.from({ length: e - t + 1 }, (A, i) => {
      const a = t + i, r = I.local(this._activeDate.year, a).toFormat("LLLL");
      return { id: `${a}`, name: r };
    });
  }
  _toggleMonthDropdown(t) {
    const e = this.renderRoot.querySelector("#month-dropdown");
    e && (t ? e.startKeyScrolling() : e.disableKeyScrolling(), this._monthDropdownVisible = t);
  }
  _toggleYearDropdown(t) {
    const e = this.renderRoot.querySelector("#year-dropdown");
    e && (t ? e.startKeyScrolling() : e.disableKeyScrolling(), this._yearDropdownVisible = t);
  }
  _setRange(t) {
    this._activeDate = t.start, this.date = t.start, this.date2 = t.end, this._updateCalendarGrid(), this._input1 && this._input2 && (this._input1.inputElementRef.value = t.start.toFormat("MM/dd/yyyy"), this._input2.inputElementRef.value = t.end.toFormat("MM/dd/yyyy"), this._handleSecondToggle(!1)), this.dispatchEvent(
      new CustomEvent("dateSelectedOutput", {
        bubbles: !0,
        composed: !0,
        detail: t.start
      })
    ), this.dispatchEvent(
      new CustomEvent("date2SelectedOutput", {
        bubbles: !0,
        composed: !0,
        detail: t.end
      })
    );
  }
  disconnectedCallback() {
    this._input2?.removeEventListener("iconClickedOutput", this._secondListenerWrapper), this._input1?.removeEventListener("iconClickedOutput", this._firstListenerWrapper), this._input2?.inputElementRef.removeEventListener("change", this._date2Output), this._input1?.inputElementRef.removeEventListener("change", this._dateOutput), super.disconnectedCallback();
  }
  render() {
    return g`
      <div class="datepicker-wrapper">
        <slot name="date"></slot>
        ${this._secondInput ? u : this._getCalendar()}
        <slot name="date2"></slot>
        ${this._secondInput ? this._getCalendar() : u}
      </div>
    `;
  }
  _getCalendar() {
    const t = "200px";
    return g` ${this.isVisible ? g` <div
          class="calendar-wrapper ${this.preselectedRanges?.length > 0 ? "ranges" : ""} ${this._isSelectingSecond ? "second" : ""} ${this._inputLabel ? "label" : ""}"
        >
          ${this.preselectedRanges?.length > 0 ? g`<div class="range-section">
                <ul>
                  ${this.preselectedRanges.map(
      (e) => e.isTitle ? g`<li><p class="range-title">${e.name}</p></li>` : g`<li>
                          <button @click=${() => this._setRange(e)} class="range-item">
                            ${e.name}
                          </button>
                        </li>`
    )}
                </ul>
              </div>` : u}
          <div class="calendar">
            <div class="header">
              <div class="month switch-container">
                <atp-button
                  appearance="text"
                  .disabled="${this._activeDate.startOf("month") <= this.minDate}"
                  .iconConfig=${{
      icon: "chevron-left",
      height: 12,
      label: "Go to previous month"
    }}
                  @clickEventOutput="${this._goToPreviousMonth}"
                ></atp-button>
                <div class="dropdown-wrapper">
                  <button
                    ?disabled=${this._activeDate.startOf("month") <= this.minDate && this._activeDate.endOf("month") >= this.maxDate}
                    class="date-dropdown"
                    @click=${() => this._toggleMonthDropdown(!this._monthDropdownVisible)}
                  >
                    ${this._activeDate.toFormat("MMMM")}
                    <atp-icon .height=${12} icon="caret-down"></atp-icon>
                  </button>
                  <atp-dropdown
                    class="dropdown month"
                    .maxHeight=${t}
                    @itemSelectedOutput=${this._handleMonthSelect}
                    @dropdownClosedOutput=${() => this._toggleMonthDropdown(!1)}
                    .showCheckmarks=${!1}
                    id="month-dropdown"
                    .itemsList=${this._getMonthOptions()}
                  ></atp-dropdown>
                </div>
                <atp-button
                  .disabled="${this._activeDate.endOf("month") >= this.maxDate}"
                  appearance="text"
                  .iconConfig=${{
      icon: "chevron-right",
      height: 12,
      label: "Go to next month"
    }}
                  @clickEventOutput="${this._goToNextMonth}"
                ></atp-button>
              </div>
              <div class="divider"></div>
              <div class="year switch-container">
                <atp-button
                  appearance="text"
                  .disabled="${this._activeDate.startOf("year") <= this.minDate}"
                  .iconConfig=${{
      icon: "chevron-left",
      height: 12,
      label: "Go to previous year"
    }}
                  @clickEventOutput="${this._goToPreviousYear}"
                ></atp-button>
                <div class="dropdown-wrapper">
                  <button
                    ?disabled=${this._activeDate.startOf("year") <= this.minDate && this._activeDate.endOf("year") >= this.maxDate}
                    class="date-dropdown"
                    @click=${() => this._toggleYearDropdown(!this._yearDropdownVisible)}
                  >
                    ${this._activeDate.toFormat("yyyy")}
                    <atp-icon .height=${12} icon="caret-down"></atp-icon>
                  </button>
                  <atp-dropdown
                    class="dropdown year"
                    .maxHeight=${t}
                    .showCheckmarks=${!1}
                    @itemSelectedOutput=${this._handleYearSelect}
                    @dropdownClosedOutput=${() => this._toggleYearDropdown(!1)}
                    id="year-dropdown"
                    .itemsList=${this._getYearOptions()}
                  ></atp-dropdown>
                </div>
                <atp-button
                  .disabled="${this._activeDate.endOf("year") >= this.maxDate}"
                  appearance="text"
                  .iconConfig=${{
      icon: "chevron-right",
      height: 12,
      label: "Go to next year"
    }}
                  @clickEventOutput="${this._goToNextYear}"
                ></atp-button>
              </div>
            </div>
            <div tabindex="-1" @keydown=${this._onKeyDown} class="grid">
              ${["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
      (e) => g`<div class="day-name">${e}</div>`
    )}
              ${this._calendarDays.map((e) => {
      const A = e.toISODate(), i = this._dayDisabled(e);
      return g`
                  <button
                    data-date=${A}
                    @focus="${() => this._keyboardActive = !0}"
                    tabindex="${this._keyboardActive || A === `${this._activeDate.toISODate()}` ? 0 : -1}"
                    ?disabled="${i}"
                    class="${this._getDayCellClass(e)}"
                    @click=${() => this._onDateClick(e)}
                  >
                    ${e.day}
                  </button>
                `;
    })}
            </div>
          </div>
        </div>` : u}`;
  }
};
P.styles = [y, Ks];
ie([
  l({ type: Boolean })
], P.prototype, "isVisible", 2);
ie([
  l({ attribute: !1 })
], P.prototype, "date", 2);
ie([
  l({ attribute: !1 })
], P.prototype, "date2", 2);
ie([
  l({ attribute: !1 })
], P.prototype, "minDate", 2);
ie([
  l({ attribute: !1 })
], P.prototype, "maxDate", 2);
ie([
  l({ attribute: !1 })
], P.prototype, "notAllowedDates", 2);
ie([
  l({ type: Boolean })
], P.prototype, "isSoloPicker", 2);
ie([
  l({ type: Boolean })
], P.prototype, "isMultiPicker", 2);
ie([
  l({ type: Array })
], P.prototype, "preselectedRanges", 2);
ie([
  qe({ slot: "date" })
], P.prototype, "_slottedInputElements", 2);
ie([
  qe({ slot: "date2" })
], P.prototype, "_slottedInputElements2", 2);
P = ie([
  Q("atp-datepicker")
], P);
const Co = k`
  :host {
    --atp-dialog-padding: var(--atp-space-m);
    --atp-dialog-sticky-background-color: hsl(0 100% 100% / 0.9);
    --atp-dialog-transition-time: 0.3s;
    --atp-dialog-vertical-offset: 10vh;
  }

  /* the actual dialog tag spans the full display, so that any content that expands beyond the visible box (e.g. dropdown menus) won't get clipped */
  .dialog {
    position: fixed;
    inset: 0;
    display: none;
    block-size: 100%;
    max-block-size: 100%;
    inline-size: 100%;
    max-inline-size: 100%;
    background: transparent;
    border: none;
    opacity: 0;
    transition: display var(--atp-dialog-transition-time) ease-in-out,
      opacity var(--atp-dialog-transition-time) ease-in-out,
      transform var(--atp-dialog-transition-time) ease-in-out,
      overlay var(--atp-dialog-transition-time) ease-in-out;
    transition-behavior: allow-discrete;
  }

  .dialog:modal {
    display: block;
    opacity: 1;
    transition: display var(--atp-dialog-transition-time) ease-in-out,
      opacity var(--atp-dialog-transition-time) ease-in-out,
      transform var(--atp-dialog-transition-time) ease-in-out,
      overlay var(--atp-dialog-transition-time) ease-in-out;
    transition-behavior: allow-discrete;
  }

  @starting-style {
    .dialog {
      opacity: 0;
    }

    .dialog:modal {
      opacity: 0;
    }
  }

  .dialog::backdrop {
    background-color: hsl(0 0% 0% / 0);
    transition: display var(--atp-dialog-transition-time) ease-in-out,
      background-color var(--atp-dialog-transition-time) ease-in-out,
      overlay var(--atp-dialog-transition-time) ease-in-out;
  }

  .dialog:modal::backdrop {
    background-color: var(--atp-dialog-backdrop-color, hsl(0 0% 0% / 0.25));
  }

  @starting-style {
    .dialog:modal::backdrop {
      background-color: hsl(0 0% 0% / 0);
    }
  }

  /* the visible dialog box */
  .dialog-box {
    position: fixed;
    inset-block-start: var(--atp-dialog-vertical-offset);
    inset-inline-start: 50vw;
    display: block;
    block-size: fit-content;
    max-block-size: calc(100vh - (var(--atp-dialog-vertical-offset) * 2));
    min-inline-size: var(--atp-dialog-min-width, 250px);
    max-inline-size: var(--atp-dialog-max-width, 80vw);
    background: var(--atp-background-primary-weak);
    border: none;
    border-radius: var(--atp-border-radius-m);
    box-shadow: var(--atp-box-shadow-strong);
    overflow: auto;
    transform: translateX(-50%);
    transition: opacity var(--atp-dialog-transition-time) ease-in-out;
  }

  .dialog-header {
    position: sticky;
    inset-block-start: 0;
    z-index: var(--atp-z-index-over-menu);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: var(--atp-space-xs);
    padding: var(--atp-dialog-padding);
    padding-block-end: var(--atp-space-s);
    background: var(--atp-dialog-sticky-background-color);
  }

  .dialog-title {
    font-size: var(--atp-font-size-body-l);
    font-weight: var(--atp-font-weight-semibold);
    line-height: var(--atp-line-height-body-l);
    letter-spacing: var(--atp-letter-spacing-body);
    padding-inline-end: var(--atp-space-s); /* to leave room for the close button */
  }

  .dialog-close-button {
    position: absolute;
    inset-block-start: var(--atp-dialog-padding);
    inset-inline-end: var(--atp-dialog-padding);
    flex-grow: 9999;
    display: inline-flex;
    justify-content: flex-end;
    border: none;
    background: none;
    cursor: pointer;
  }

  .dialog-contents {
    flex-grow: 9999;
    padding: var(--atp-dialog-padding);
    padding-block-start: 0;
  }

  .dialog-box:has(.dialog-footer) .dialog-contents {
    padding-block-end: 0;
  }

  .dialog-footer {
    position: sticky;
    inset-block-end: 0;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-end;
    gap: var(--atp-space-xs);
    inline-size: 100%;
    padding: var(--atp-dialog-padding);
    background: var(--atp-dialog-sticky-background-color);
  }

  .dialog-footer ::slotted(div) {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-end;
    gap: var(--atp-space-xs);
    inline-size: 100%;
  }

  .dialog.position-center .dialog-box {
    inset-block-start: 50vh;
    transform: translateX(-50%) translateY(-50%);
  }

  .dialog.drawer .dialog-box {
    inset: 0;
    transition: transform var(--atp-dialog-transition-time) ease-in-out;
    transition-behavior: allow-discrete;
  }

  /* drawer "inline-end", which for LTR languages means "right" */
  .dialog.drawer-inline-end .dialog-box {
    /*
      * CSS translate() uses X and Y rather than logical properties.
      * If we need to add RTL support for Dialog, we'll need to add additional
      * selectors using [dir="rtl"] that will change these translate() values.
    */
    inset-inline-start: unset;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    block-size: 100%;
    min-block-size: 100%;
    max-block-size: 100%;
    border-start-end-radius: 0;
    border-end-end-radius: 0;
    transform: translateX(100%);
  }

  .dialog.drawer-inline-end:modal .dialog-box {
    transform: translateX(0%);
  }

  @starting-style {
    .dialog.drawer-inline-end:modal .dialog-box {
      transform: translateX(100%);
    }
  }

  /* drawer "block-start", which for LTR languages means "top" */
  /* stylelint-disable no-descending-specificity */
  .dialog.drawer-block-start .dialog-box {
    inset-block-end: unset;
    inline-size: 100%;
    min-inline-size: 100%;
    max-inline-size: 100%;
    border-start-start-radius: 0;
    border-start-end-radius: 0;
    transform: translateY(-100%);
  }
  /* stylelint-enable no-descending-specificity */

  .dialog.drawer-block-start:modal .dialog-box {
    transform: translateY(0%);
  }

  @starting-style {
    .dialog.drawer-block-start:modal .dialog-box {
      transform: translateY(-100%);
    }
  }

  /* drawer "block-end", which for LTR languages means "bottom" */
  /* stylelint-disable no-descending-specificity */
  .dialog.drawer-block-end .dialog-box {
    inset-block-start: unset;
    inline-size: 100%;
    min-inline-size: 100%;
    max-inline-size: 100%;
    border-end-start-radius: 0;
    border-end-end-radius: 0;
    transform: translateY(100%);
    transition-behavior: allow-discrete;
  }
  /* stylelint-enable no-descending-specificity */

  .dialog.drawer-block-end:modal .dialog-box {
    transform: translateY(0%);
  }

  @starting-style {
    .dialog.drawer-block-end:modal .dialog-box {
      transform: translateY(100%);
    }
  }
`;
var co = Object.defineProperty, po = Object.getOwnPropertyDescriptor, Ze = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? po(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && co(e, A, a), a;
}, uo = /* @__PURE__ */ ((t) => (t.BLOCK_START = "block-start", t.CENTER = "center", t))(uo || {}), ho = /* @__PURE__ */ ((t) => (t.BLOCK_END = "block-end", t.BLOCK_START = "block-start", t.INLINE_END = "inline-end", t))(ho || {});
let he = class extends b {
  constructor() {
    super(...arguments), this.open = !1, this.label = "", this.position = "block-start", this.drawer = null, this.preventClickOnBackdrop = !1, this._hasFooterContent = !1, this._titleId = Te(), this._onEscape = (t) => {
      t.key === "Escape" && this.open && (this.open = !1);
    }, this._onFooterSlotChange = () => this._reflectFooterPresence();
  }
  _onClickCloseButton() {
    this.open = !1;
  }
  render() {
    return g`
      <dialog aria-modal="true" class=${this._getClasses()} aria-labelledby=${this._titleId}>
        <div class="dialog-box">
          <div class="dialog-header">
            ${this.iconConfig ? g`<atp-icon
                  .color="${this.iconConfig.color}"
                  .icon="${this.iconConfig.icon}"
                  .height="${this.iconConfig.height}"
                ></atp-icon>` : g``}
            <h2 class="dialog-title" id=${this._titleId}>${this.label}</h2>

            <atp-button
              class="dialog-close-button"
              .appearance=${"text"}
              .iconConfig=${{
      icon: "x",
      height: 16,
      color: "black",
      label: "Close dialog"
    }}
              @click=${this._onClickCloseButton}
            ></atp-button>
          </div>
          <div class="dialog-contents">
            <slot></slot>
          </div>
          <div class="${E({ "dialog-footer": this._hasFooterContent })}">
            <slot @slotchange=${this._onFooterSlotChange} name="footer"></slot>
          </div>
        </div>
      </dialog>
    `;
  }
  _checkExternalClick(t, e) {
    t.target === e && !this.preventClickOnBackdrop && (this.open = !1);
  }
  firstUpdated() {
    const t = this.shadowRoot?.querySelector("dialog");
    t && t.addEventListener(
      "click",
      (e) => this._checkExternalClick(e, t)
    ), window.addEventListener("keyup", this._onEscape), this._reflectFooterPresence();
  }
  disconnectedCallback() {
    window.removeEventListener("keyup", this._onEscape), window.removeEventListener("click", () => this._checkExternalClick), super.disconnectedCallback();
  }
  /*
   * We can't use the HTML `open` attribute to show/hide the dialog,
   * because some functionality (like the backdrop and the Escape key)
   * only works when using the showModal() method to open it
   */
  updated() {
    this.open ? (this.shadowRoot.querySelector("dialog")?.showModal(), this.dispatchEvent(new CustomEvent("open", { bubbles: !0, composed: !0 }))) : (this.shadowRoot.querySelector("dialog")?.close(), this.dispatchEvent(new CustomEvent("close", { bubbles: !0, composed: !0 })));
  }
  _reflectFooterPresence() {
    this._hasFooterContent = this._footerSlot?.assignedNodes({ flatten: !0 }).length > 0;
  }
  _getClasses() {
    return E({
      dialog: !0,
      "position-block-start": !this.drawer && this.position === "block-start",
      "position-center": !this.drawer && this.position === "center",
      drawer: this.drawer !== null,
      "drawer-block-end": this.drawer === "block-end",
      "drawer-block-start": this.drawer === "block-start",
      "drawer-inline-end": this.drawer === "inline-end"
      /* INLINE_END */
    });
  }
};
he.styles = [y, Co];
Ze([
  l({ type: Boolean })
], he.prototype, "open", 2);
Ze([
  l()
], he.prototype, "label", 2);
Ze([
  l({ type: Object })
], he.prototype, "iconConfig", 2);
Ze([
  l()
], he.prototype, "position", 2);
Ze([
  l()
], he.prototype, "drawer", 2);
Ze([
  l({ type: Boolean })
], he.prototype, "preventClickOnBackdrop", 2);
Ze([
  Vt('slot[name="footer"]')
], he.prototype, "_footerSlot", 2);
he = Ze([
  Q("atp-dialog")
], he);
const Io = k`
  .atp-divider {
    color: var(--atp-element-border-primary-medium-enabled);
    background-color: currentColor;
    block-size: 1px;
    margin: 0;
    padding: 0;
    border: none;
  }

  .atp-divider-vertical {
    block-size: 100%;
    inline-size: 1px;
  }
`;
var mo = Object.defineProperty, Bo = Object.getOwnPropertyDescriptor, ya = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? Bo(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && mo(e, A, a), a;
}, bo = /* @__PURE__ */ ((t) => (t.HORIZONTAL = "horizontal", t.VERTICAL = "vertical", t))(bo || {});
let uA = class extends b {
  constructor() {
    super(...arguments), this.orientation = "horizontal";
  }
  render() {
    return g`
      <div
        role="presentation"
        class="atp-divider ${this.orientation === "vertical" ? "atp-divider-vertical" : ""}"
      ></div>
    `;
  }
};
uA.styles = [y, Io];
ya([
  l()
], uA.prototype, "orientation", 2);
uA = ya([
  Q("atp-divider")
], uA);
const Eo = k`
  .outer-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--atp-space-s);
  }

  .upload-wrapper {
    display: flex;
    justify-content: center;
    padding-block: var(--atp-space-s) var(--atp-space-m);
    padding-inline: var(--atp-space-l);
    align-items: center;
    gap: var(--atp-space-m);
    border-radius: var(--atp-space-xxxs);
    border: 1px dashed var(--atp-element-border-primary-strong-enabled);
    background: var(--atp-element-fill-primary-weak-enabled);
    transition: all var(--atp-transition-standard);
  }

  .list-section {
    display: flex;
    flex-direction: column;
    gap: var(--atp-space-xs);
  }

  .upload-wrapper.centered {
    flex-direction: column;
    align-items: center;
    gap: var(--atp-space-xs);
  }

  .upload-wrapper:hover {
    border: 1px dashed var(--atp-content-primary-medium-enabled);
    background: var(--atp-element-fill-primary-weak-hover);
  }

  .upload-wrapper.drag-active,
  .upload-wrapper.drag-active:hover {
    border: 1px dashed var(--atp-content-primary-medium-enabled);
    background: var(--atp-element-fill-primary-weak-pressed);
  }

  .right-container {
    display: flex;
    flex-direction: column;
    color: var(--atp-content-primary-medium-enabled);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-s);
    font-weight: var(--atp-font-weight-regular);
    line-height: var(--atp-line-height-body-s);
    letter-spacing: var(--atp-letter-spacing-s);
    flex-shrink: 0;
  }

  .upload-wrapper.centered .right-container {
    align-items: center;
  }

  .top-container {
    display: flex;
    block-size: var(--atp-space-l);
    align-items: center;
    gap: var(--atp-space-xxs);
  }

  .type-label {
    inline-size: fit-content;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--atp-content-primary-weak-enabled);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-xs);
    font-weight: var(--atp-font-weight-regular);
    line-height: var(--atp-line-height-body-xs);
    letter-spacing: var(--atp-letter-spacing-s);
  }

  .file-name {
    color: var(--atp-content-primary-medium-enabled);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-s);
    font-weight: var(--atp-font-weight-regular);
    line-height: var(--atp-line-height-body-s);
    letter-spacing: var(--atp-letter-spacing-s);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-shrink: 1;
    min-inline-size: 0;
  }

  .file-type {
    display: flex;
    border-radius: var(--atp-space-xxs);
    padding-block: var(--atp-space-xxs);
    padding-inline: var(--atp-space-xs);
    align-items: center;
    color: var(--atp-content-primary-medium-enabled);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-xs);
    font-weight: var(--atp-font-weight-medium);
    line-height: var(--atp-line-height-body-xs);
    letter-spacing: var(--atp-letter-spacing-s);
    background: var(--atp-element-fill-blue-medium-enabled);
  }

  .file-type.invalid {
    background: var(--atp-element-fill-red-medium-enabled);
  }

  .list-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--atp-space-xs);
  }

  .file-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .file-item {
    display: flex;
    align-items: center;
    block-size: var(--atp-space-xl);
    padding-block: 0;
    padding-inline: var(--atp-space-s);
    gap: var(--atp-space-xs);
    border: 1px solid var(--atp-element-border-primary-medium-enabled);
  }

  .file-item:not(:last-child) {
    border-block-end: 0;
  }

  .dropdown-wrapper {
    margin-inline-start: var(--atp-space-xs);
    position: relative;
  }

  .dropdown {
    position: absolute;
    inset-block-start: calc(100% + var(--atp-space-xxs));
    inset-inline-end: 0;
    inline-size: fit-content;
    z-index: var(--atp-z-index-over-base);
  }

  .file-warnings,
  .file-size {
    flex-grow: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-s);
    font-weight: var(--atp-font-weight-regular);
    line-height: var(--atp-line-height-body-s);
    letter-spacing: var(--atp-letter-spacing-s);
  }

  .file-warnings {
    color: var(--atp-button-danger-medium-enabled);
  }

  .file-size {
    color: var(--atp-content-primary-medium-enabled);
  }

  .progress-header {
    display: flex;
    align-items: center;
    gap: var(--atp-space-xs);
  }

  .progress-bar-wrapper {
    --progress-bar-height: 28px;

    block-size: var(--progress-bar-height);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .progress-title {
    color: var(--atp-content-primary-medium-enabled);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-s);
    font-weight: var(--atp-font-weight-semibold);
    line-height: var(--atp-line-height-body-s);
    letter-spacing: var(--atp-letter-spacing-s);
  }

  progress {
    appearance: none;
    block-size: var(--atp-space-xxs);
    inline-size: 100%;
    border-radius: var(--atp-space-xxxs);
    transition: all var(--atp-transition-standard);
    overflow: hidden;
  }

  progress::-webkit-progress-bar {
    background-color: var(--atp-element-fill-inverse-medium-enabled);
  }

  progress::-webkit-progress-value {
    background-color: var(--atp-utility-primary-medium-enabled);
  }

  progress.complete::-webkit-progress-value {
    background-color: var(--atp-button-success-medium-enabled);
  }

  progress.complete.invalid::-webkit-progress-value {
    background-color: var(--atp-button-danger-medium-enabled);
  }

  .progress-percent {
    flex-grow: 1;
    color: var(--atp-content-primary-medium-enabled);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-s);
    font-weight: var(--atp-font-weight-regular);
    line-height: var(--atp-line-height-body-s);
    letter-spacing: var(--atp-letter-spacing-s);
    text-align: end;
  }

  .visually-hidden {
    border: 0;
    padding: 0;
    margin: 0;
    position: absolute !important;
    block-size: 1px;
    inline-size: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
`;
var Qo = Object.defineProperty, fo = Object.getOwnPropertyDescriptor, Ye = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? fo(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && Qo(e, A, a), a;
};
let Ie = class extends b {
  constructor() {
    super(...arguments), this.subLabel = "", this.maxFileSize = -1, this.allowedFileTypes = [], this.maxNumberOfFiles = -1, this.fileItemList = [], this.isCentered = !1, this.hideFileList = !1, this._isDragOver = !1, this._activeDropdown = "", this._dropdownItems = [
      { name: "Remove", id: "remove" },
      { name: "Replace", id: "replace" }
    ], this._dropdownItemSelected = ({ detail: t }, e) => {
      t[0] === "replace" && this._initiateReplace(e.id), t[0] === "remove" && this._cancelFile(e), this._toggleDropdown(e.id, !1);
    }, this._cancelFile = (t) => {
      const e = this.fileItemList.filter((A) => t.id !== A.id);
      this._emitFiles(e);
    }, this._initiateReplace = (t) => {
      const e = `#replace-input-${t}`;
      this.renderRoot.querySelector(e).click();
    };
  }
  render() {
    return g`<div class="outer-wrapper">
      <div
        class="${this._getClasses()}"
        @dragover=${(t) => this._setDragOver(t, !0)}
        @dragleave=${(t) => this._setDragOver(t, !1)}
        @drop=${this._handleDrop}
      >
        <atp-icon color="var(--atp-content-primary-weak-enabled)" height="24" icon="upload-cloud">
        </atp-icon>
        <div class="right-container">
          <div class="top-container">
            Drag file here to upload or
            <atp-button
              label="Choose a file"
              .appearance=${ue.TEXT}
              @clickEventOutput=${this._manualFileInput}
            ></atp-button>
          </div>
          <span class="type-label">${this.subLabel}</span>
          <input
            id="input"
            hidden
            accept=${this.allowedFileTypes.length > 0 ? this.allowedFileTypes.join(",") : u}
            type="file"
            ?multiple=${this.maxNumberOfFiles !== 1}
            @change=${this._handleInput}
          />
        </div>
      </div>
      ${!this.hideFileList && this.fileItemList?.length > 0 ? g`<div class="list-section">
            <div class="progress-bar-wrapper">
              <label for="upload-progress" class="progress-header">${this._getHeaderTitle()}</label>
              <progress
                id="upload-progress"
                .value="${this._getCompletion()}"
                max="100"
                class="${this._getValidity() ? "" : "invalid"} ${this._getCompletion() === 100 ? "complete" : ""}"
              ></progress>
            </div>
            <div role="region" aria-labelledby="file-list-label">
              <span id="file-list-label" class="visually-hidden">Uploaded files list</span>
              <ul class="file-list">
                ${this.fileItemList.map(
      (t) => g`
                    <input
                      id="replace-input-${t.id}"
                      hidden
                      accept=${this.allowedFileTypes.length > 0 ? this.allowedFileTypes.join(",") : u}
                      type="file"
                      @change=${(e) => this._handleReplaceInput(e, t.id)}
                    />
                    <li class="file-item">
                      ${this._getFileItemStatus(t)}<span class="file-name"
                        >${t.file.name.split(".")[0]}</span
                      ><span
                        class="file-type ${t.isFailure || t.warnings.length > 0 ? "invalid" : ""}"
                        >${t.file.type.split("/").at(-1)}</span
                      >${t.warnings && t.warnings.length > 0 ? g`<span class="file-warnings">${t.warnings.join(", ")}</span>` : g`<span class="file-size">${this._getSize(t.file.size)}</span>`}
                      ${this._getFileItemAction(t)}
                      <div class="dropdown-wrapper">
                        <atp-button
                          .iconConfig=${{
        icon: "more-vertical",
        height: 16,
        label: `${this._activeDropdown === t.id ? "Hide" : "Show"} file options for ${t.file.name.split(".")[0]}`
      }}
                          .appearance=${ue.TEXT}
                          @clickEventOutput=${() => this._toggleDropdown(t.id, this._activeDropdown !== t.id)}
                        ></atp-button>
                        <atp-dropdown
                          class="dropdown"
                          @dropdownClosedOutput=${() => this._toggleDropdown(t.id, !1)}
                          @itemSelectedOutput=${(e) => this._dropdownItemSelected(e, t)}
                          .itemsList=${this._dropdownItems}
                          id="dropdown-${t.id}"
                        ></atp-dropdown>
                      </div>
                    </li>
                  `
    )}
              </ul>
            </div>
            </div>
          </div>` : u}
    </div>`;
  }
  _toggleDropdown(t, e) {
    const A = this.renderRoot.querySelector(`#dropdown-${t}`);
    e ? (this._activeDropdown = t, A.startKeyScrolling()) : (this._activeDropdown = "", A.disableKeyScrolling());
  }
  _getSize(t) {
    return t / 1e9 > 1 ? `${(t / 1e9).toFixed(0)} GB` : t / 1e6 > 1 ? `${(t / 1e6).toFixed(0)} MB` : `${(t / 1e3).toFixed(0)} KB`;
  }
  _getCompletion() {
    let t = 0;
    return this.fileItemList.forEach((e) => {
      (e.isSuccess || e.isFailure) && (t += 1);
    }), Math.floor(t / this.fileItemList.length * 100);
  }
  _getValidity() {
    return !this.fileItemList.some((t) => t.isFailure);
  }
  _getHeaderTitle() {
    const t = this._getValidity(), e = this._getCompletion();
    return e === 100 && t ? g`<atp-icon
          size="16"
          color="var(--atp-element-fill-green-strong-enabled)"
          icon="circle-check"
          aria-hidden=${!0}
        ></atp-icon
        ><span class="progress-title">Upload successful</span
        ><span class="progress-percent">100%</span>` : e === 100 && !t ? g`<atp-icon
          size="16"
          color="var(--atp-button-danger-medium-enabled)"
          icon="triangle-exclamation"
          aria-hidden=${!0}
        ></atp-icon
        ><span class="progress-title">Upload error</span><span class="progress-percent"></span>` : g`<span class="progress-title"
        >Uploading ${this.fileItemList.length}
        item${this.fileItemList.length === 1 ? "" : "s"}</span
      ><span class="progress-percent">${e}%</span>`;
  }
  _setDragOver(t, e) {
    t.preventDefault(), this._isDragOver = e, this.requestUpdate();
  }
  _handleDrop(t) {
    t.preventDefault(), this._isDragOver = !1;
    const e = t.dataTransfer?.files;
    e && this._emitFiles(this._verifyFiles(e));
  }
  _getFileItemAction(t) {
    return t.isFailure ? g`<atp-button
        .appearance=${ue.OUTLINE}
        label="Replace"
        @clickEventOutput=${() => this._initiateReplace(t.id)}
        .isDestructive="${!0}"
      ></atp-button>` : t.isSuccess ? g`` : g`<atp-button
      @clickEventOutput=${() => this._cancelFile(t)}
      .appearance=${ue.OUTLINE}
      label="Cancel"
    ></atp-button>`;
  }
  _getFileItemStatus(t) {
    return t.isFailure ? g`<atp-icon
        size="16"
        color="var(--atp-button-danger-medium-enabled)"
        icon="triangle-exclamation"
      ></atp-icon>` : t.isSuccess ? g`<atp-icon
        size="16"
        color="var(--atp-element-fill-green-strong-enabled)"
        icon="circle-check"
      ></atp-icon>` : g`<atp-spinner .size=${ct.S}></atp-spinner>`;
  }
  _handleReplaceInput(t, e) {
    const A = t.target.files;
    if (A && A.length > 0) {
      const i = this._verifyFiles(A)[0], a = this.fileItemList.map((r) => r.id === e ? i : r);
      this._emitFiles(a);
    }
  }
  _handleInput(t) {
    const e = t.target.files;
    if (e && e.length > 0) {
      const A = this._verifyFiles(e), i = Array.from(
        new Map([...this.fileItemList, ...A].map((a) => [a.id, a])).values()
      );
      this._emitFiles(i);
    }
  }
  _isFileTypeAllowed(t) {
    return this.allowedFileTypes.some((e) => {
      if (e.endsWith("/*")) {
        const A = e.split("/")[0];
        return t.type.startsWith(A + "/");
      }
      return t.type === e;
    });
  }
  _verifyFiles(t) {
    return Array.from(t).map((e, A) => {
      const i = [];
      return this.maxNumberOfFiles !== -1 && A >= this.maxNumberOfFiles && i.push("File exceeds number of allowed files"), this.maxFileSize !== -1 && e.size > this.maxFileSize && i.push("File size exceeds maxiumum allowed file size"), this._isFileTypeAllowed(e) || i.push("File type not allowed"), {
        file: e,
        warnings: i,
        isSuccess: !1,
        isFailure: !1,
        id: `${Te()}${A}`
      };
    });
  }
  _emitFiles(t) {
    this.dispatchEvent(
      new CustomEvent("fileUploadOutput", {
        detail: t,
        bubbles: !0,
        composed: !0
      })
    );
  }
  _manualFileInput() {
    this.renderRoot.querySelector("#input").click();
  }
  _getClasses() {
    return E({
      "upload-wrapper": !0,
      "drag-active": this._isDragOver,
      centered: this.isCentered
    });
  }
};
Ie.styles = [y, Eo];
Ye([
  l()
], Ie.prototype, "subLabel", 2);
Ye([
  l({ type: Number })
], Ie.prototype, "maxFileSize", 2);
Ye([
  l({ type: Array })
], Ie.prototype, "allowedFileTypes", 2);
Ye([
  l({ type: Number })
], Ie.prototype, "maxNumberOfFiles", 2);
Ye([
  l({ type: Array })
], Ie.prototype, "fileItemList", 2);
Ye([
  l({ type: Boolean })
], Ie.prototype, "isCentered", 2);
Ye([
  l({ type: Boolean })
], Ie.prototype, "hideFileList", 2);
Ie = Ye([
  Q("atp-file-upload")
], Ie);
const vo = k`
  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--atp-header-global-header-medium-enabled);
    block-size: var(--atp-space-xl);
  }

  .header-inline-start {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  .menu-wrapper {
    position: relative;
  }

  .org-menu-wrapper {
    position: relative;
    margin-inline-start: var(--atp-space-m);
  }

  .menu {
    position: absolute;
    inset-block-start: calc(100% + var(--atp-space-xxs));
    inline-size: fit-content;
  }

  .header-inline-end {
    display: flex;
    align-items: center;
    padding-block: 0;
    padding-inline: var(--atp-space-m);
    gap: var(--atp-space-s);
    flex-shrink: 0;
    flex-grow: 1;
    justify-content: flex-end;
    min-inline-size: fit-content;
  }

  button:focus-visible {
    border-radius: var(--atp-border-radius-m);
    outline: var(--atp-focus-width) solid var(--atp-button-inverse-medium-enabled);
    outline-offset: var(--atp-focus-outline-offset);
  }

  .logo-button {
    all: unset;
    cursor: pointer;
    margin-inline-start: calc(var(--atp-space-m) + var(--atp-space-xxs));
  }

  .logo-button--priceeye {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .page-title {
    margin: 0;
    margin-inline-start: var(--atp-space-xs);
    color: var(--atp-button-inverse-medium-enabled);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-heading-xs);
    font-weight: var(--atp-font-weight-bold);
    line-height: var(--atp-line-height-heading-xs);
  }

  .org-button {
    --atp-icon-fill: currentColor;

    all: unset;
    box-sizing: border-box;
    block-size: var(--atp-space-m);
    padding-block: var(--atp-space-xxs);
    padding-inline: var(--atp-space-xs);
    display: flex;
    align-items: center;
    gap: var(--atp-space-xxs);
    color: var(--atp-button-inverse-medium-enabled);
    text-align: center;
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-xs);
    font-weight: var(--atp-font-weight-regular);
    line-height: var(--atp-line-height-body-xs);
    border: 1px solid var(--atp-button-inverse-medium-enabled);
    border-radius: var(--atp-space-xs);
    transition: all var(--atp-transition-standard);
  }

  button.org-button:hover,
  button.org-button:focus-visible {
    cursor: pointer;
    background: var(--atp-header-global-icon-not-selected-hover);
    border: 1px solid var(--atp-button-inverse-medium-enabled);
    box-shadow: 0 0 0 1px var(--atp-button-inverse-medium-enabled);
  }

  button.org-button:active {
    background: var(--atp-header-global-icon-not-selected-pressed);
    border: 1px solid var(--atp-button-inverse-medium-enabled);
    box-shadow: 0 0 0 1px var(--atp-button-inverse-medium-enabled);
  }

  button.org-button.active {
    background: var(--atp-header-global-icon-selected-enabled);
    border: 1px solid var(--atp-header-global-icon-selected-enabled);
    color: var(--atp-content-primary-strong-enabled);
    box-shadow: 0 0 0 1px var(--atp-header-global-icon-selected-enabled);
  }

  button.org-button.active:hover,
  button.org-button.active:focus-visible {
    background: var(--atp-header-global-icon-selected-hover);
    border: 1px solid var(--atp-header-global-icon-selected-hover);
    color: var(--atp-content-primary-strong-enabled);
    box-shadow: 0 0 0 1px var(--atp-header-global-icon-selected-hover);
  }

  button.org-button.active:active {
    border: 1px solid var(--atp-element-fill-primary-strong-pressed);
    background: var(--atp-header-global-icon-selected-pressed);
    color: var(--atp-button-inverse-medium-enabled);
    box-shadow: 0 0 0 1px var(--atp-element-fill-primary-strong-pressed);
  }

  .divider {
    all: unset;
    cursor: pointer;
    inline-size: 1px;
    block-size: var(--atp-space-m);
    display: block;
    border-radius: var(--atp-border-radius-xs);
    background-color: var(--atp-element-border-primary-strong-enabled);
  }

  .icon-button {
    --atp-icon-fill: var(--atp-button-inverse-medium-enabled);

    all: unset;
    box-sizing: border-box;
    cursor: pointer;
    block-size: var(--atp-space-l);
    inline-size: var(--atp-space-l);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--atp-border-radius-s);
    background: var(--atp-header-global-header-medium-enabled);
    border: var(--atp-space-xxxs) solid var(--atp-header-global-header-medium-enabled);
  }

  .icon-button:hover,
  .icon-button:focus-visible {
    background: var(--atp-header-global-icon-not-selected-hover);
    border: var(--atp-space-xxxs) solid var(--atp-header-global-icon-not-selected-hover);
  }

  .icon-button:active {
    background: var(--atp-header-global-icon-not-selected-pressed);

    /* TODO: this border color is listed only as a primitive in figma, borrowing var that maps to same primitive */

    border: var(--atp-space-xxxs) solid var(--atp-header-global-icon-selected-hover);
  }

  .icon-button.active {
    --atp-icon-fill: var(--atp-content-primary-medium-enabled);

    background: var(--atp-header-global-icon-selected-enabled);
    border: 2px solid var(--atp-header-global-icon-selected-enabled);
  }

  .icon-button.active:hover,
  .icon-button.active:focus-visible {
    background: var(--atp-header-global-icon-selected-hover);
    border: 2px solid var(--atp-header-global-icon-selected-hover);
  }

  .icon-button.active:active {
    border: 2px solid var(--atp-element-fill-primary-strong-pressed);
    background: var(--atp-header-global-icon-selected-pressed);
  }

  .search-wrapper {
    display: flex;
    inline-size: var(--atp-space-l);
    justify-content: flex-end;
    transition: inline-size var(--atp-transition-standard);
    max-inline-size: 32px;
  }

  .pill-slot {
    margin-inline-start: var(--atp-space-m);
    display: block;
  }

  .search-wrapper .icon-button {
    flex-shrink: 0;
  }

  .search-wrapper .search-input {
    max-inline-size: 0;
    padding: 0;
    border: 0;
  }

  .search-wrapper.search-wrapper--active {
    max-inline-size: 243px;
    inline-size: unset;
    flex-grow: 1;
  }

  .search-wrapper.search-wrapper--active .search-input {
    /** TODO: --Element-Fill-Header-Global-Icon-Selected-Enabled (#B9C1C9) used in figma, it is not in color variable file */
    border: 1px solid var(--atp-slate-400);
    border-inline-start: none;
    outline: none;
    padding: calc(var(--atp-space-xxs) + 1px);
    max-inline-size: 211px;
    flex-grow: 1;
    border-start-start-radius: 0;
    border-start-end-radius: var(--atp-border-radius-s);
    border-end-start-radius: 0;
    border-end-end-radius: var(--atp-border-radius-s);
    background-color: var(--atp-element-fill-inverse-weak-enabled);
    color: var(--atp-content-primary-medium-enabled);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-s);
    font-weight: var(--atp-font-weight-regular);
    line-height: var(--atp-line-height-body-s);
  }

  .search-wrapper.search-wrapper--active .icon-button {
    --atp-icon-fill: var(--atp-button-primary-medium-enabled);

    background: var(--atp-slate-400);
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  .icon-dropdown {
    position: relative;
  }

  .dropdown-wrapper {
    position: absolute;
    inset-block-start: calc(100% + var(--atp-space-xxxs));
  }

  .dropdown-wrapper.right {
    inset-inline-end: 0;
  }

  .nav-link-list {
    padding-block: 0;
    padding-inline: var(--atp-space-s);
    display: flex;
    gap: var(--atp-space-s);
  }

  .nav-link {
    padding: calc(var(--atp-space-xs) - var(--atp-space-xxxs));
    border: 2px solid var(--atp-header-global-header-medium-enabled);
    background-color: var(--atp-header-global-header-medium-enabled);
    color: var(--atp-header-global-link-text-not-selected-enabled);
    text-decoration: none;
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-s);
    font-weight: var(--atp-font-weight-regular);
    line-height: var(--atp-line-height-body-s);
    border-radius: var(--atp-border-radius-s);
    transition: all var(--atp-transition-standard);
  }

  .nav-link:hover:not(.nav-link-active) {
    background-color: var(--atp-header-global-icon-not-selected-hover);
    border-color: var(--atp-header-global-icon-not-selected-hover);
  }

  .nav-link:active:not(.nav-link-active) {
    border-color: var(--atp-header-global-icon-selected-enabled);
    background-color: var(--atp-header-global-icon-not-selected-pressed);
  }

  .nav-link.nav-link-active {
    border-color: var(--atp-header-global-icon-selected-enabled);
    background-color: var(--atp-header-global-icon-selected-enabled);
    color: var(--atp-header-global-link-text-not-selected-hover);
  }
`, ko = {
  atpco: `<svg width="65" height="27" viewBox="0 0 65 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M64.4 14.4207C64.4 11.4941 61.8702 9.14453 58.7518 9.14453C55.6335 9.14453 53.13 11.4941 53.13 14.4207V17.5781C53.13 20.5047 55.6335 22.8542 58.7518 22.8542C60.5614 22.8542 61.7209 22.0216 61.7209 22.0216V21.766C61.5188 21.8155 60.781 22.0216 60.087 22.0216C56.1781 22.0216 54.3686 19.7875 54.3686 17.5863V14.4289C54.3686 12.1536 56.3274 10.3152 58.7518 10.3152C61.1762 10.3152 63.1614 12.1536 63.1614 14.4289V16.9598C63.1614 18.1716 62.1688 19.5154 60.087 19.5154C58.0052 19.5154 57.0389 18.5426 57.0389 17.5863V14.4289C57.0389 13.5221 57.7856 12.8213 58.7518 12.8213C59.7181 12.8213 60.4823 13.5221 60.4823 14.4289V18.3365C60.9742 18.3118 61.7209 17.9903 61.7209 17.3637V14.4371C61.7209 12.9038 60.3857 11.6754 58.7518 11.6754C57.118 11.6754 55.8092 12.9038 55.8092 14.4371V17.5946C55.8092 19.1279 57.1443 20.6861 60.0958 20.6861C63.0473 20.6861 64.4 18.7322 64.4 16.968V14.4371V14.4207Z"
        fill="#EBF2FE"
      />
      <path
        d="M50.7068 14.0744C50.5029 11.288 48.2435 9.14453 45.4866 9.14453C43.8063 9.14453 42.7296 9.98541 42.7296 9.98541V10.241C42.9172 10.1915 43.6024 9.98541 44.2468 9.98541C47.0037 9.98541 48.6351 11.3127 49.2794 12.912H47.7868C47.1913 12.0052 46.0168 11.3292 44.2468 11.3292C41.5143 11.3292 40.25 13.283 40.25 15.0472V17.5781C40.25 20.5047 42.5991 22.8542 45.4947 22.8542C48.3904 22.8542 50.5111 20.6448 50.715 17.9243H47.0608C46.8732 18.6003 46.2288 19.1774 45.4947 19.1774C44.5975 19.1774 43.8879 18.4767 43.8879 17.5698V13.6622C43.4311 13.6869 42.7378 14.0085 42.7378 14.635V17.5616C42.7378 19.095 43.9776 20.3233 45.4947 20.3233C46.4409 20.3233 47.2892 19.8369 47.7949 19.0702H49.2631C48.6432 20.6036 47.1913 21.6753 45.4947 21.6753C43.2435 21.6753 41.4001 19.8369 41.4001 17.5616V15.0307C41.4001 13.8188 42.3218 12.4751 44.2549 12.4751C45.9597 12.4751 46.8569 13.217 47.0608 14.0579H50.715L50.7068 14.0744Z"
        fill="#EBF2FE"
      />
      <path
        d="M30.1893 22.5996C30.5077 22.8089 31.2913 23.0685 31.7811 23.0685C34.679 23.0685 37.0299 20.6822 37.0299 17.7099V14.5031C37.0299 11.5308 34.7035 9.14453 31.8056 9.14453C30.124 9.14453 29.0465 9.99856 29.0465 9.99856V10.2581C29.2342 10.2079 29.9199 9.99856 30.5648 9.99856C34.1974 9.99856 35.879 12.2676 35.879 14.5031V17.7099C35.879 20.0208 34.0341 21.8879 31.7811 21.8879C30.7444 21.8879 29.7812 21.486 29.0465 20.7994V25.7059H27.7159V15.1311C27.7159 13.9003 28.6139 12.5355 30.5485 12.5355C32.4831 12.5355 33.4056 13.5235 33.4056 14.4947V17.7015C33.4056 18.6225 32.6954 19.3342 31.7974 19.3342C30.8995 19.3342 30.2057 18.6058 30.2057 17.6848V13.7412C29.7485 13.7663 29.0547 14.0928 29.0547 14.7292V17.6764C29.0547 19.2337 30.271 20.5064 31.7893 20.5064C33.3076 20.5064 34.5484 19.2589 34.5484 17.7015V14.4947C34.5484 12.9374 33.2831 11.3549 30.5485 11.3549C27.8139 11.3549 26.5649 13.3393 26.5649 15.1311V26.8865H30.1975V22.5912L30.1893 22.5996Z"
        fill="#EBF2FE"
      />
      <path
        d="M24.1501 19.2576C23.7339 19.3736 23.1703 19.4896 22.5374 19.4896C20.4825 19.4896 19.5288 18.5119 19.5288 17.5508V13.3915H22.8322V9.70442H19.5288V5.91797H17.8901L13.6851 10.7981V13.3915H15.6619V17.5508C15.6619 20.4921 18.1329 22.8535 21.2108 22.8535C22.9969 22.8535 24.1414 22.0166 24.1414 22.0166V21.7598C23.942 21.8095 23.2137 22.0166 22.5287 22.0166C18.6705 22.0166 16.8844 19.7713 16.8844 17.559V12.2315H14.9076V11.2289L18.3063 7.28507V10.881H21.6097V12.2315H18.3063V17.559C18.3063 19.1001 19.6242 20.6661 22.5374 20.6661C23.2223 20.6661 23.6819 20.6164 24.1501 20.5004V19.2658V19.2576Z"
        fill="#EBF2FE"
      />
      <path
        d="M12.075 18.6555C11.47 18.5153 11.0983 18.1441 11.0983 17.5832V14.4238C11.0983 11.0748 8.51387 9.14453 4.97867 9.14453C3.82908 9.14453 2.71407 9.51573 1.97937 9.77145V13.1865C2.63627 12.9803 3.38826 12.8153 4.48599 12.8153C6.18876 12.8153 7.58037 13.302 8.46201 14.2094C8.19406 12.8153 7.00125 11.6522 4.73665 11.6522C4.00195 11.6522 3.1981 11.8584 3.1981 11.8584V10.5798C3.1981 10.5798 3.90687 10.2994 4.97867 10.2994C7.8051 10.2994 9.87955 11.8089 9.87955 14.4156V17.8141C9.87955 18.5318 10.2685 18.9525 10.8563 19.3484V20.8332C10.2253 20.7177 9.63753 20.4125 9.22264 19.7609C8.48794 20.924 7.13091 21.6911 5.56643 21.6911C3.18082 21.6911 1.22738 19.8764 1.22738 18.0204C1.22738 16.3211 2.59306 15.323 4.25261 15.323C5.79116 15.323 7.25191 15.7849 7.25191 17.5584C7.25191 18.4658 6.51722 19.1834 5.56643 19.1834C4.61564 19.1834 3.86365 18.4658 3.86365 17.5584V16.5108C3.35369 16.5355 2.64492 16.9562 2.64492 18.0204C2.64492 19.2082 3.95873 20.3465 5.56643 20.3465C7.17412 20.3465 8.46201 19.0927 8.46201 17.5584C8.46201 14.9105 6.41349 14.1599 4.24397 14.1599C1.90157 14.1599 0 15.5787 0 18.0204C0 20.462 2.48933 22.8542 5.55778 22.8542C7.01854 22.8542 8.35829 22.318 9.36093 21.4354C10.1389 21.9468 11.0637 22.2273 12.0664 22.2273V18.6473L12.075 18.6555Z"
        fill="#EBF2FE"
      />
    </svg>`,
  three_victors: `<svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="19" height="22" fill="url(#pattern0_3068_25836)"/>
<defs>
<pattern id="pattern0_3068_25836" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_3068_25836" transform="matrix(0.00209019 0 0 0.00180516 0 -0.0473337)"/>
</pattern>
<image id="image0_3068_25836" width="4096" height="875" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAEAAAAANrCAYAAADGpl3dAAAAAXNSR0IArs4c6QAAIABJREFUeF7s3Qe4JkWV//HfIecMAoIgIFGUBUTABIJgQAUFVhCMuKIiQV2VXfmjiAlEBTO6oAiIkaCrCMiimECCZFEyknPOnH8frNkdYGbuG7rfrq7+9vPMc4ehu+qcT70z93Z31SkTBwIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIItC5grUdAAAgggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAgggIAoA8CFAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAIAMBCgBkMAiEgAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAAFAPgMIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIJCBAAUAMhgEQkAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEECAAgB8BhBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBDIQIACABkMAiEggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAgggQAEAPgMIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIZCBAAYAMBoEQEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEKAAAJ8BBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBDIQoABABoNACAgggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAghQAIDPAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIZCFAAIINBIAQEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEKADAZwABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQACBDAQoAJDBIBACAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAhQA4DOAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAQAYCFADIYBAIAQEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEKAPAZQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQCADAQoAZDAIhIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAABQD4DCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCQgQAFADIYBEJAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAgAIAfAYQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQyECAAgAZDAIhIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIEABAD4DCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCGQgQAGADAaBEBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBCgAACfAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQyEKAAQAaDQAgIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIUACAzwACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACGQhQACCDQSAEBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBCgAwGcAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEE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QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECMxSQAGAWQ6LoAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgbQIKAKxtxOVLgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABArMUUABglsMiKAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBBYm4ACAGsbcfkSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwCwFFACY5bAIigABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTWJqAAwNpGXL4ECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgMEsBBQBmOSyCIkCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIG1CSgAsLYRly8BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIzFJAAYBZDougCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQGBtAgoArG3E5UuAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECsxRQAGCWwyIoAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEFibgAIAaxtx+RIgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIDALAUUAJjlsAiKAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBNYmoADA2kZcvgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAwSwEFAGY5LIIiQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgbUJKACwthGXLwECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAjMUkABgFkOi6AIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAYG0CCgCsbcTlS4AAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKzFFAAYJbDIigCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQWJuAAgBrG3H5EiBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgMAsBRQAmOWwCIoAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIE1iagAMDaRly+BAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDBLAQUAZjksgiJAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBtQkoALC2EZcvAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECMxSQAGAWQ6LoAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgbQIKAKxtxOVLgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgADNWbrwAAAgAElEQVQBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABArMUUABglsMiKAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBBYm4ACAGsbcfkSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwCwFFACY5bAIigABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTWJqAAwNpGXL4ECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgMEsBBQBmOSyCIkCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIG1CSgAsLYRly8BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIzFJAAYBZDougCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQGBtAgoArG3E5UuAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECsxRQAGCWwyIoAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEFibgAIAaxtx+RIgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIDALAUUAJjlsAiKAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBNYmoADA2kZcvgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAwSwEFAGY5LIIiQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgbUJKACwthGXLwECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAjMUkABgFkOi6AIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAYG0CCgCsbcTlS4AAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKzFFAAYJbDIigCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQWJuAAgBrG3H5EiBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgMAsBRQAmOWwCIoAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIE1iagAMDaRly+BAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwP/H3n2A21JUaR9/Fyo5qGAiiYEgIyqKIigGwIjhM2DCHDBndMw5jRkzZgyj4IhhFBPOiApGlKAiwawgiI6ISpT36wV99HI59+x9uqr37n32v56H597xdq2u+tVO3dNrFQIIIIAAAggggAACCCCAAAIIDFKAAgCDXBYGhQACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAgggMG8CFACYtxVnvggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAoMUoADAIJeFQSGAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCMybAAUA5m3FmS8CCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggMAgBSgAMMhlYVAIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAALzJkABgHlbceaLAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCAwSAEKAAxyWRgUAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIDAvAlQAGDeVpz5IoAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIDFKAAgCDXBYGhQACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAgggMG8CFACYtxVnvggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAoMUoADAIJeFQSGAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCMybAAUA5m3FmS8CCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggMAgBSgAMMhlYVAIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAALzJkABgHlbceaLAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCAwSAEKAAxyWRgUAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIDAvAlQAGDeVpz5IoAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIDFKAAgCDXBYGhQACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAgggMG8CFACYtxVnvggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAoMUoADAIJeFQSGAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCMybAAUA5m3FmS8CCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggMAgBSgAMMhlYVAIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAALzJkABgHlbceaLAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCAwSAEKAAxyWRgUAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIDAvAlQAGDeVpz5IoAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIDFKAAgCDXBYGhQACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAgggMG8CFACYtxVnvggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAoMUoADAIJeFQSGAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCMybAAUA5m3FmS8CCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggMAgBSgAMMhlYVAIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAALzJkABgHlbceaLAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCAwSAEKAAxyWRgUAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIDAvAlQAGDeVpz5IoAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIDFKAAgCDXBYGhQACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAgggMG8CFACYtxVnvggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAoMUoADAIJeFQSGAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCMybAAUA5m3FmS8CCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggMAgBSgAMMhlYVAIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAALzJkABgHlbceaLAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCAwSAEKAAxyWRgUAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIDAvAlQAGDeVpz5IoAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIDFKAAgCDXBYGhQACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAgggMG8CFACYtxVnvggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAoMUoADAIJeFQSGAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCMybAAUA5m3FmS8CCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggMAgBSgAMMhlYVAIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAALzJkABgHlbceaLAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCAwSAEKAAxyWRgUAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAwEoVsH0lSVeUtE47x/x7/m+rtgsk/aP9H87Lv0fEhSvVZB7mZfsK7Tqv2843czoW/r5AcJGkhXW+5DUQEefPgw9zRAABBBBAAAEEEEAAAQQQuFSAAgC8EhBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQqCxge602uTsTvHeUtLekO0javeBUf5H0A0lfk/R1ScdLOlfSeRFxcUFculYSaJP8s7BDrvv1Je3Trnmu+/oFpzlG0tHtf0dIyuIA51IUokCUrggggAACCCCAAAIIIIDAQAUoADDQhWFYCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAwEoSWGW365JpZYKrSwL00dd2JnnyXG4fuMuP6YjIndI7tTZhe2FH9k4xpthpIfl7Ycf4i0kIn+xq2M7PgStJurmkx0vab4IjyHX/tKS3tQniFw7x83KCHhM7Vfu5keu+m6SnSbrnxE5+6Yl+Lemdkg6UlOt+0YTPz+kQQAABBBBAAAEEEEAAAQQqC3CjsTIo4RBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAAB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Mb49e37xsD9zHuXbQkjPjYjvH+Hbmr59GeTU3k//ZpO+VdW+//3xFhYTEddfcRwt8Oc5EfFq7zkryjl9X4GqumVEfGDfE499wtMz83Ej2nfRVABAF9OgCAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECPQlUFVtx9r213YpbH/tR6C3vZoqf7/9+Peov/ZD1bYj2NaPqrrOckeuVn9b6HLyUUW1hVMfW+yQe8XeXy91bx1OAQQIECBAgMBaBKqqLfZsz1ftf/eesdq1vusaLth2b247vLfnrfaM1f6uyMz2/x0zEVg+W+/NeVvH0f65vRa+4xhD+FBEfLQtpjpq7o88c3tmncmkz6DMo+5Je6/Ndm86MSLazsZXPdprse0U3I72GWrv9dj+2TGBwFGfwffeK471/nBZRLTQvb37Q5sL7wsTzIEuCIwV6CUA4G/dwL/8DLr3PV97FrlNRLRd4I8+WqjLHy+fN4/cW5b3l40Fe46dg220XwYC7H2Puvecf5OIuNVV6mlBLS0s5/8/0296wf+xfJZjaN+j7r1Grvr5pIUU7H0maa+LjQYVbGNeXXO7AlX1zIg4b0QVN8/MPx/RvoumAgC6mAZFECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAnMU6DUAYI6WaiZA4HALVFULQ7vZQIVLI+LUzJx9eIkAgIGvAM0IECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgIAvAYIECAwXqCq7hMRLx3R05mZ+dYR7btpKgCgm6lQCAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDA3AQEAc5sx9RIg0KNAVb0+Is4eUdsNM/PyEe27aSoAoJupUAgBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAwNwEBAHObMfUSINCbQFX9nYj4SERce2Btv5yZjxzYtrtmAgC6mxIFESBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAnMREAAwl5lSJwECvQpU1TMj4rwR9d04Mz8+on1XTQUAdDUdiiFAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTmJCAAYE6zpVYCBHoUqKqLI+L0gbW1hf83zcwvDWzfXTMBAN1NiYIIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBuQgIAJjLTKmTAIEeBarqLhHxuhG1fXdmvmVE++6aCgDobkoURIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECMxFQADAXGZKnQQI9ChQVW+OiDsOrK0i4jqZecXA9l02EwDQ5bQoigABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEJiDgACAOcySGgkQ6FGgqk6IiP8TEdcbWN9LMvP+A9t220wAQLdTozACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgdwEBAL3PkPoIEOhVoKp+OiJ+cmB9X4qIG2Tm5we277aZAIBup0ZhBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQO8CAgB6nyH1ESDQq0BVXRwRpw+s72OZeerAtl03EwDQ9fQojgABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEOhZQABAz7OjNgIEehWoqjMi4u0j6rtLZl44on23TQUAdDs1CiNAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgR6FxAA0PsMqY8AgR4Fqur3IuLMgbV9JjNPHNi2+2YCALqfIgUSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECvQoIAOh1ZtRFgECvAlV17Yj4ZEScMLDGV2bmOQPbdt9MAED3U6RAAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoFcBAQC9zoy6CBDoVaCqHhcRPzewvi9GxEmZefnA9t03EwDQ/RQpkAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEOhVQABArzOjLgIEehWoqv8dEacOrO+DmXnLgW1n0UwAwCymSZEECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIBAjwICAHqcFTURINCrQFWdFhGXjKjvnMx85Yj23TcVAND9FCmQAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ6FVAAECvM6MuAgR6FKiqd0bEbQfW9heZeZOBbWfTTADAbKZKoQQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgEBvAgIAepsR9RAg0KtAVbW17ZdHxPUG1vjqzLzHwLazaSYAYDZTpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgNwEBAL3NiHoIEOhVoKruHxEvHlHfiZn5mRHtZ9FUAMAspkmRBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQI8CAgB6nBU1ESDQo0BVfToiThhY23sz81sGtp1VMwEAs5ouxRIgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQI9CQgA6Gk21EKAQK8CVXVSRFwWEUPXt5+bmb/W6/imrGso0JQ16IsAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgMEsBAQCznDZFEyCwYYGqenNE3HHgZS+NiNMy80sD28+qmQCAWU2XYgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIGeBAQA9DQbaiFAoEeBqjo+Ir4QEUPXtr80M+/X49jWUdNQpHXUok8CBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwKwEBADMaroUS4DAFgSq6h4R8aoRl771IgDgf45oP6umAgBmNV2KJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBHoSEADQ02yohQCB3gSq6loR8fGIOGVgbX+Umf9wYNtZNhMAMMtpUzQBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECDQg4AAgB5mQQ0ECPQqUFU3iohPjKjvEZn5n0a0n11TAQCzmzIFEyBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAr0ICADoZSbUQYBAjwJV9byIeMjA2lpwwNdm5ucHtp9lMwEAs5w2RRMgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQI9CAgA6GEW1ECAQI8CVXXDiPjMiNpekJkPHtF+lk0FAMxy2hRNgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQI9CAgAKCHWVADAQI9ClTV2RHx+hG1fVtmvntE+1k2FQAwy2lTNAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQINCDgACAHmZBDQQI9CZQVcdFxPsj4hYDa7soM88Y2HbWzQQAzHr6FE+AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsU0AAwDb1XZsAgV4FqurmEfHhEfU9PDPPH9F+tk0FAMx26hROgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIbFtAAMC2Z8D1CRDoUaCq/kNE/PjA2j4VEadl5uUD28+6mQCAWU+f4gkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIFtCggA2Ka+axMg0KNAVd0gIj47orbzM/PhI9rPuqkAgFlPn+IJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBbQoIANimvmsTINCjQFWdFRG/M6K222XmO0a0n3VTAQCznj7FEyBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAtsUEACwTX3XJkCgN4GqauvX/yAizhhY20WZObTtwEv21UwAQF/zoRoCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgRgJVdfuIOHdEyT+TmZeMaK8pAQIEuhGoqlMi4qkjCnp5Zr5pRPvZNxUAMPspNAACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ2AUBAQC7MIvGQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKzFxAAMPspNAACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ2AUBAQC7MIvGQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKzFxAAMPspNAACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ2AUBAQC7MIvGQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKzFxAAMPspNAACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ2AUBAQC7MIvGQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKzFxAAMPspNAACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ2AUBAQC7MIvGQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKzFxAAMPspNAACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ2AUBAQC7MIvGQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKzFxAAMPspNAACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ2AUBAQC7MIvGQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKzFxAAMPspNAACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ2AUBAQC7MIvGQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKzFxAAMPspNAACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ2AUBAQC7MIvGQIAAAQIECBAgQIAAAQIECBAgQIAAAR563aUAAAWXSURBVAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKzFxAAMPspNAACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ2AUBAQC7MIvGQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKzFxAAMPspNAACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ2AUBAQC7MIvGQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKzFxAAMPspNAACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ2AUBAQC7MIvGQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKzFxAAMPspNAACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ2AUBAQC7MIvGQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKzFxAAMPspNAACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ2AUBAQC7MIvGQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKzFxAAMPspNAACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ2AUBAQC7MIvGQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKzFxAAMPspNAACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ2AUBAQC7MIvGQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKzFxAAMPspNAACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ2AUBAQC7MIvGQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKzFxAAMPspNAACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ2AUBAQC7MIvGQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKzF/h/4S0R2EA1s9oAAAAASUVORK5CYII="/>
</defs>
</svg>`
};
var yo = Object.defineProperty, wo = Object.getOwnPropertyDescriptor, ae = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? wo(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && yo(e, A, a), a;
}, So = /* @__PURE__ */ ((t) => (t.ATPCO = "atpco", t.THREE_VICTORS = "three_victors", t))(So || {});
let U = class extends b {
  constructor() {
    super(...arguments), this.label = "", this.org = "", this.isSwitchable = !1, this.hasSearch = !1, this.navItems = [], this.activeNavItem = "", this.logoType = "atpco", this._searchOpen = !1, this._menuMap = {}, this._activeIconId = "";
  }
  render() {
    return g`
      <header role="banner" class="header-wrapper">
        <div class="header-inline-start">
          <a
            aria-label="Go to home page"
            href="${this.homeHref}"
            @click=${(t) => this._goHome(t)}
            class="${E({
      "logo-button": !0,
      "logo-button--priceeye": this.logoType === "three_victors"
      /* THREE_VICTORS */
    })}"
          >
            <atp-icon aria-hidden="true" height="26" .icon=${ko[this.logoType]}></atp-icon>
          </a>
          <div class="page-title">${this.label}</div>
          <div class="org-menu-wrapper">
            ${this.isSwitchable ? g`<button
                  @click="${() => this._toggleMenu(
      "org-switcher",
      !this._menuMap["org-switcher"].visible,
      this._menuMap["org-switcher"]
    )}"
                  aria-haspopup="listbox"
                  class="org-button ${this._activeIconId === "org-switcher" ? "active" : ""}"
                >
                  ${this.org}
                  <atp-icon aria-hidden="true" height="12" icon="chevron-down"></atp-icon>
                </button>` : g`<div class="org-button">${this.org}</div>`}
            <div class="menu">
              <slot name="org-list"></slot>
            </div>
          </div>
          <slot class="pill-slot" name="pill"></slot>
        </div>
        <div class="header-inline-end">
          ${this.navItems && this.navItems.length > 0 ? g`
                <div class="nav-link-list">
                  ${this.navItems.map(
      (t) => g`
                      <a
                        class="${this._getNavClasses(t)}"
                        href="${t.href}"
                        @click=${(e) => this._navigationHandler(e, t)}
                      >
                        ${t.name}
                      </a>
                    `
    )}
                </div>
              ` : u}
          ${this.hasSearch ? g`
                <div class="${this._getSearchClasses()}">
                  <button
                    aria-expanded="${this._searchOpen}"
                    aria-label="${this._searchOpen ? "Search for a term" : "Expand the search bar"}"
                    @click=${this._searchHandler}
                    class="icon-button ${this._searchOpen ? "active" : ""}"
                  >
                    <atp-icon icon="search"></atp-icon>
                  </button>
                  <input
                    ?hidden=${!this._searchOpen}
                    id="search-input"
                    class="search-input"
                    type="text"
                  />
                </div>
              ` : u}
          ${this.hasSearch && this.iconActions?.length > 0 ? g`<div class="divider"></div>` : u}
          ${this.iconActions?.length > 0 ? this.iconActions.map(
      (t) => g`
                  <div class="icon-dropdown">
                    <button
                      aria-label="${t.label}"
                      aria-haspopup="listbox"
                      @click=${() => this._toggleMenu(
        t.id,
        !this._menuMap[t.id]?.visible,
        this._menuMap[t.id]
      )}
                      class="icon-button ${this._activeIconId === t.id ? "active" : ""}"
                    >
                      <atp-icon
                        aria-hidden="true"
                        .icon=${t.icon}
                        .badge=${t.badge}
                      ></atp-icon>
                    </button>
                    <div class="dropdown-wrapper ${t.rightAligned ? "right" : ""}">
                      <slot
                        @slotchange=${() => this._setUpSlotMap()}
                        class="dropdown-wrapper ${t.rightAligned ? "right" : ""}"
                        .name=${t.id}
                      ></slot>
                    </div>
                  </div>
                `
    ) : u}
        </div>
      </header>
    `;
  }
  async firstUpdated() {
    await this._setUpSlotMap();
  }
  _getNavClasses(t) {
    return E({
      "nav-link": !0,
      "nav-link-active": t.id === this.activeNavItem
    });
  }
  async _setUpSlotMap() {
    await this.updateComplete, this.addEventListener("dropdownClosedOutput", this._toggleAllWrapper), this.addEventListener("itemSelectedOutput", this._toggleAllWrapper), this.renderRoot.querySelectorAll(
      'slot[name="user-menu"], slot[name="org-list"]'
    ).forEach((e) => {
      const A = e.assignedElements({ flatten: !0 })[0];
      A && (this._menuMap[A.id] = { ref: A, visible: !1 });
    });
  }
  _navigationHandler(t, e) {
    e.href || (t.preventDefault(), this.dispatchEvent(
      new CustomEvent("navigationEventOutput", { bubbles: !0, composed: !0, detail: e })
    ));
  }
  disconnectedCallback() {
    this.removeEventListener("dropdownClosedOutput", this._toggleAllWrapper), this.removeEventListener("itemSelectedOutput", this._toggleAllWrapper), super.disconnectedCallback();
  }
  _toggleAllWrapper() {
    this._toggleMenu("all", !1, !0);
  }
  /** TODO: eventually remove hasDropdown arguement as all these toggles should have dropdown */
  _toggleMenu(t, e, A = !1) {
    A && (t === "all" ? (Object.values(this._menuMap).forEach((i) => {
      i?.ref?.disableKeyScrolling(), i.visible = e;
    }), this._activeIconId = "") : (e ? (this._menuMap[t]?.ref.startKeyScrolling(), this._activeIconId = t) : (this._activeIconId = "", this._menuMap[t]?.ref.disableKeyScrolling()), this._menuMap[t].visible = e), this.requestUpdate());
  }
  _getSearchClasses() {
    return E({ "search-wrapper": !0, "search-wrapper--active": this._searchOpen });
  }
  _goHome(t) {
    this.homeHref || (t.preventDefault(), this.dispatchEvent(new CustomEvent("homeEventOutput", { bubbles: !0, composed: !0 })));
  }
  _searchHandler() {
    const t = this.renderRoot.querySelector("#search-input");
    this._searchOpen ? this.dispatchEvent(
      new CustomEvent("searchEventOutput", { bubbles: !0, composed: !0, detail: t.value })
    ) : (this._searchOpen = !0, t?.focus(), this._searchOpen = !0, this.requestUpdate());
  }
};
U.styles = [y, vo];
ae([
  l()
], U.prototype, "label", 2);
ae([
  l()
], U.prototype, "org", 2);
ae([
  l({ type: Boolean })
], U.prototype, "isSwitchable", 2);
ae([
  l({ type: Boolean })
], U.prototype, "hasSearch", 2);
ae([
  l({ type: Array })
], U.prototype, "iconActions", 2);
ae([
  l()
], U.prototype, "homeHref", 2);
ae([
  l({ type: Array })
], U.prototype, "navItems", 2);
ae([
  l()
], U.prototype, "activeNavItem", 2);
ae([
  l()
], U.prototype, "logoType", 2);
ae([
  qe({ slot: "org-list" })
], U.prototype, "_slottedOrgElements", 2);
ae([
  qe({ slot: "dropdowns" })
], U.prototype, "_slottedDropdownElements", 2);
U = ae([
  Q("atp-header")
], U);
var Mo = Object.getOwnPropertyDescriptor, Jo = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? Mo(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = n(a) || a);
  return a;
};
let ci = class extends T {
};
ci = Jo([
  Q("atp-input")
], ci);
const wa = k`
  :host {
    display: block;
  }

  .atp-list-bounded {
    margin: 0;
    padding: 0;
    border: 1px solid var(--atp-element-border-primary-medium-enabled);
    border-block-end-width: 0;
  }

  .atp-list-bounded-item {
    list-style-type: none;
    border-block-end: 1px solid var(--atp-element-border-primary-medium-enabled);
    margin: 0;
    padding-block: var(--atp-space-xs);
    padding-inline: var(--atp-space-s);
  }
`;
var Lo = Object.defineProperty, Do = Object.getOwnPropertyDescriptor, b1 = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? Do(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && Lo(e, A, a), a;
};
let hA = class extends b {
  constructor() {
    super(...arguments), this.ordered = !1;
  }
  render() {
    return g` ${this.ordered ? g`<ol class="atp-list-bounded">
          <slot></slot>
        </ol>` : g`<ul class="atp-list-bounded">
          <slot></slot>
        </ul>`}`;
  }
};
hA.styles = [y, wa];
b1([
  l({ type: Boolean })
], hA.prototype, "ordered", 2);
hA = b1([
  Q("atp-list-bounded")
], hA);
let _A = class extends b {
  render() {
    return g`
      <li class="atp-list-bounded-item">
        <slot></slot>
      </li>
    `;
  }
};
_A.styles = [wa, y];
_A = b1([
  Q("atp-list-bounded-item")
], _A);
const xo = k`
  .media-object {
    display: flex;
    align-items: center;
    gap: var(--atp-space-xs);
  }

  .icon-wrapper {
    block-size: var(--atp-space-l);
    inline-size: var(--atp-space-l);
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  .icon-wrapper.blue {
    background: var(--atp-element-fill-blue-strong-enabled);
  }

  .icon-wrapper.green {
    background: var(--atp-element-fill-green-strong-enabled);
  }

  .icon-wrapper.purple {
    background: var(--atp-element-fill-purple-strong-enabled);
  }

  .icon-wrapper.red {
    background: var(--atp-danger-primary-strong-enabled);
  }

  .icon-wrapper.slate {
    background: var(--atp-element-fill-primary-strong-enabled);
  }

  .label-text {
    margin: 0;
    color: var(--atp-content-inverse-medium-enabled);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-s);
    font-weight: var(--atp-font-weight-semibold);
    line-height: var(--atp-line-height-body-s);
  }

  .text-container {
    display: flex;
    flex-direction: column;
    gap: var(--atp-space-xxxs);
  }

  .text-container .label {
    margin: 0;
    color: var(--atp-content-primary-medium-enabled);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-s);
    font-weight: var(--atp-font-weight-semibold);
    line-height: var(--atp-line-height-body-s);
  }

  .text-container .sub-title {
    margin: 0;
    overflow: hidden;
    color: var(--atp-content-primary-weak-enabled);
    text-overflow: ellipsis;
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-xs);
    font-weight: var(--atp-font-weight-regular);
    line-height: var(--atp-line-height-body-xs);
  }
`;
var To = Object.defineProperty, Oo = Object.getOwnPropertyDescriptor, ft = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? Oo(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && To(e, A, a), a;
}, Ho = /* @__PURE__ */ ((t) => (t.BLUE = "blue", t.GREEN = "green", t.PURPLE = "purple", t.RED = "red", t.SLATE = "slate", t))(Ho || {});
let Oe = class extends b {
  constructor() {
    super(...arguments), this.iconText = "", this.label = "", this.subtitle = "", this.color = "slate";
  }
  render() {
    return g`
      <div class="media-object">
        <div class="${this._getIconClasses()}">
          ${this.iconText ? g`<p class="label-text">${this.iconText}</p>` : g`<atp-icon
                .icon="${this.icon?.icon}"
                .color="${this.icon?.color}"
                .height="${this.icon?.height}"
              ></atp-icon>`}
        </div>
        <div class="text-container">
          <p class="label">${this.label}</p>
          <p class="sub-title">${this.subtitle}</p>
        </div>
      </div>
    `;
  }
  _getIconClasses() {
    return E({ "icon-wrapper": !0, [this.color]: !0 });
  }
};
Oe.styles = [y, xo];
ft([
  l()
], Oe.prototype, "iconText", 2);
ft([
  l({ type: Object })
], Oe.prototype, "icon", 2);
ft([
  l()
], Oe.prototype, "label", 2);
ft([
  l()
], Oe.prototype, "subtitle", 2);
ft([
  l()
], Oe.prototype, "color", 2);
Oe = ft([
  Q("atp-media-object")
], Oe);
const Zo = k`
  .meter {
    appearance: none;
    inline-size: var(--atp-meter-width);
  }

  .meter::-webkit-meter-bar {
    background: var(--atp-meter-track-color);
    block-size: var(--atp-meter-height);
    border-radius: var(--atp-meter-border-radius);
  }

  .meter::-webkit-meter-optimum-value {
    background: var(--atp-meter-fill-color);
    border-radius: var(--atp-meter-border-radius);
  }

  .meter::-moz-meter-bar {
    background: var(--atp-meter-fill-color);
    border-radius: var(--atp-meter-border-radius);
  }

  .meter:-moz-meter-optimum {
    background: var(--atp-meter-track-color);
    block-size: var(--atp-meter-height);
    border-radius: var(--atp-border-radius-s);
  }

  /* circular meters */
  .circle {
    block-size: var(--atp-meter-circle-size);
    inline-size: var(--atp-meter-circle-size);
    border-radius: 50%;
    appearance: none;
    border: none;
    background: transparent;

    /* 
      Transition the gradient by a few percentage points to smooth the rendering of the subpixel rounding.
      Without this, the inside of the circle can look a little chunky.
    */

    /* stylelint-disable -- mask-image doesn't have baseline support yet, but the vendor prefix covers us */
    -webkit-mask-image: radial-gradient(
      transparent var(--atp-meter-circle-mask-size),
      black calc(var(--atp-meter-circle-mask-size) + 2%)
    );

    mask-image: radial-gradient(
      transparent var(--atp-meter-circle-mask-size),
      black calc(var(--atp-meter-circle-mask-size) + 2%)
    );
    /* stylelint-enable  */
  }

  .circle::-webkit-meter-bar {
    block-size: var(--atp-meter-circle-size);
    border-radius: 50%;

    /* 
      Transition the gradient by 1 degree to smooth the rendering of the subpixel rounding.
      Without this, the edge of the filled section can look a little chunky.
    */
    background: conic-gradient(
      var(--atp-meter-fill-color) calc(360deg / var(--atp-meter-max) * var(--atp-meter-value)),
      var(--atp-meter-track-color)
        calc(360deg / var(--atp-meter-max) * var(--atp-meter-value) + 1deg),
      var(--atp-meter-track-color) 360deg
    );
  }

  .circle::-webkit-meter-optimum-value {
    background: none;
  }

  .circle::-moz-meter-bar {
    block-size: var(--atp-meter-circle-size);
    inline-size: var(--atp-meter-circle-size);
    border-radius: 50%;
  }

  .circle:-moz-meter-optimum {
    block-size: var(--atp-meter-circle-size);
    inline-size: var(--atp-meter-circle-size);
    border-radius: 50%;
    background: conic-gradient(
      var(--atp-meter-fill-color) calc(360deg / var(--atp-meter-max) * var(--atp-meter-value)),
      var(--atp-meter-track-color)
        calc(360deg / var(--atp-meter-max) * var(--atp-meter-value) + 1deg),
      var(--atp-meter-track-color) 360deg
    );
  }

  .circle:-moz-meter-optimum::-moz-meter-bar {
    background: none;
  }
`;
var Yo = Object.defineProperty, zo = Object.getOwnPropertyDescriptor, Xt = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? zo(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && Yo(e, A, a), a;
}, No = /* @__PURE__ */ ((t) => (t.DEFAULT = "default", t.CIRCLE = "circle", t))(No || {});
let We = class extends b {
  constructor() {
    super(...arguments), this.appearance = "default";
  }
  render() {
    return g`<meter
      class=${this._getClasses()}
      value=${this.value}
      max=${this.max}
      min=${Z(this.min)}
      style="--atp-meter-value: ${this.value}; --atp-meter-max: ${this.max};"
    >
      at ${this.value} of ${this.max}
    </meter>`;
  }
  _getClasses() {
    return E({
      meter: !0,
      circle: this.appearance === "circle"
      /* CIRCLE */
    });
  }
};
We.styles = [y, Zo];
Xt([
  l()
], We.prototype, "appearance", 2);
Xt([
  l({ type: Number })
], We.prototype, "min", 2);
Xt([
  l({ type: Number })
], We.prototype, "max", 2);
Xt([
  l({ type: Number })
], We.prototype, "value", 2);
We = Xt([
  Q("atp-meter")
], We);
const Fo = k`
  .pill {
    display: flex;
    padding-block: var(--atp-space-xxxs);
    padding-inline: var(--atp-space-xs);
    align-items: center;
    gap: var(--atp-space-xxs);
    color: var(--atp-content-primary-strong-enabled);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-s);
    font-weight: var(--atp-font-weight-regular);
    line-height: var(--atp-line-height-body-s);
    border-radius: var(--atp-border-radius-xl);
    inline-size: fit-content;
    outline: none;
    border: 1px solid transparent;
    transition: all var(--atp-transition-standard);
  }

  .pill.active:not(.disabled) {
    cursor: pointer;
  }

  .pill.disabled:is(.fill, .outline):is(.green, .blue, .pink, .purple, .orange) {
    --atp-icon-fill: var(--atp-content-primary-strong-disabled);

    color: var(--atp-content-primary-strong-disabled);
  }

  .pill:not(.disabled):is(.fill, .outline):is(.green, .blue, .pink, .purple, .orange) {
    --atp-icon-fill: var(--atp-content-primary-strong-enabled);

    color: var(--atp-content-primary-strong-enabled);
  }

  /** blue */
  .pill.blue.fill {
    background: var(--atp-element-fill-blue-medium-enabled);
  }

  .pill.blue.fill.active:not(.disabled):hover,
  .pill.blue.fill.active:not(.disabled):focus-visible {
    background: var(--atp-element-fill-blue-medium-hover);
  }

  .pill.blue.fill.active:not(.disabled):active {
    background: var(--atp-element-fill-blue-medium-pressed);
  }

  .pill.blue.fill.disabled {
    background: var(--atp-element-fill-blue-medium-disabled);
  }

  .pill.blue.outline {
    border: 1px solid var(--atp-element-fill-blue-medium-enabled);
    background: var(--atp-element-fill-blue-weak-enabled);
  }

  .pill.blue.outline.active:not(.disabled):hover,
  .pill.blue.outline.active:not(.disabled):focus-visible {
    border: 1px solid var(--atp-element-fill-blue-medium-hover);
    background: var(--atp-element-fill-blue-weak-hover);
  }

  .pill.blue.outline.active:not(.disabled):active {
    border: 1px solid var(--atp-element-fill-blue-medium-pressed);
    background: var(--atp-element-fill-blue-weak-pressed);
  }

  .pill.blue.outline.disabled {
    border: 1px solid var(--atp-element-fill-blue-medium-enabled);
    background: var(--atp-element-fill-blue-weak-disabled);
  }

  /** green */
  .pill.green.fill {
    background: var(--atp-element-fill-green-medium-enabled);
  }

  .pill.green.fill.active:not(.disabled):hover,
  .pill.green.fill.active:not(.disabled):focus-visible {
    background: var(--atp-element-fill-green-medium-hover);
  }

  .pill.green.fill.active:not(.disabled):active {
    background: var(--atp-element-fill-green-medium-pressed);
  }

  .pill.green.fill.disabled {
    background: var(--atp-element-fill-green-medium-disabled);
  }

  .pill.green.outline {
    border: 1px solid var(--atp-element-fill-green-medium-enabled);
    background: var(--atp-element-fill-green-weak-enabled);
  }

  .pill.green.outline.active:not(.disabled):hover,
  .pill.green.outline.active:not(.disabled):focus-visible {
    border: 1px solid var(--atp-element-fill-green-medium-hover);
    background: var(--atp-element-fill-green-weak-hover);
  }

  .pill.green.outline.active:not(.disabled):active {
    border: 1px solid var(--atp-element-fill-green-medium-pressed);
    background: var(--atp-element-fill-green-weak-pressed);
  }

  .pill.green.outline.disabled {
    border: 1px solid var(--atp-element-fill-green-medium-disabled);
    background: var(--atp-element-fill-green-weak-disabled);
  }

  .pill.pink.fill {
    background: var(--atp-element-fill-red-medium-enabled);
  }

  .pill.pink.fill.active:not(.disabled):hover,
  .pill.pink.fill.active:not(.disabled):focus-visible {
    background: var(--atp-element-fill-red-medium-hover);
  }

  .pill.pink.fill.active:not(.disabled):active {
    background: var(--atp-element-fill-red-medium-pressed);
  }

  .pill.pink.fill.disabled {
    background: var(--atp-element-fill-red-medium-disabled);
  }

  .pill.pink.outline {
    border: 1px solid var(--atp-element-fill-red-medium-enabled);
    background: var(--atp-element-fill-red-weak-enabled);
  }

  .pill.pink.outline.active:not(.disabled):hover,
  .pill.pink.outline.active:not(.disabled):focus-visible {
    border: 1px solid var(--atp-element-fill-red-medium-hover);
    background: var(--atp-element-fill-red-weak-hover);
  }

  .pill.pink.outline.active:not(.disabled):active {
    border: 1px solid var(--atp-element-fill-red-medium-pressed);
    background: var(--atp-element-fill-red-medium-enabled);
  }

  .pill.pink.outline.disabled {
    border: 1px solid var(--atp-element-fill-red-medium-enabled);
    background: var(--atp-element-fill-red-weak-disabled);
  }

  /** purple */
  .pill.purple.fill {
    background: var(--atp-element-fill-purple-medium-enabled);
  }

  .pill.purple.fill.active:not(.disabled):hover,
  .pill.purple.fill.active:not(.disabled):focus-visible {
    background: var(--atp-element-fill-purple-medium-hover);
  }

  .pill.purple.fill.active:not(.disabled):active {
    background: var(--atp-element-fill-purple-medium-pressed);
  }

  .pill.purple.fill.disabled {
    background: var(--atp-element-fill-purple-medium-disabled);
  }

  .pill.purple.outline {
    border: 1px solid var(--atp-element-fill-purple-medium-enabled);
    background: var(--atp-element-fill-purple-weak-enabled);
  }

  .pill.purple.outline.active:not(.disabled):hover,
  .pill.purple.outline.active:not(.disabled):focus-visible {
    border: 1px solid var(--atp-element-fill-purple-medium-hover);
    background: var(--atp-element-fill-purple-weak-hover);
  }

  .pill.purple.outline.active:not(.disabled):active {
    border: 1px solid var(--atp-element-fill-purple-medium-pressed);
    background: var(--atp-element-fill-purple-weak-pressed);
  }

  .pill.purple.outline.disabled {
    border: 1px solid var(--atp-element-fill-purple-medium-disabled);
    background: var(--atp-element-fill-purple-weak-disabled);
  }

  /** orange */
  .pill.orange.fill {
    background: var(--atp-element-fill-orange-medium-enabled);
  }

  .pill.orange.fill.active:not(.disabled):hover,
  .pill.orange.fill.active:not(.disabled):focus-visible {
    background: var(--atp-element-fill-orange-medium-hover);
  }

  .pill.orange.fill.active:not(.disabled):active {
    background: var(--atp-element-fill-orange-medium-pressed);
  }

  .pill.orange.fill.disabled {
    background: var(--atp-element-fill-orange-medium-disabled);
  }

  .pill.orange.outline {
    border: 1px solid var(--atp-element-fill-orange-medium-enabled);
    background: var(--atp-element-fill-orange-weak-enabled);
  }

  .pill.orange.outline.active:not(.disabled):hover,
  .pill.orange.outline.active:not(.disabled):focus-visible {
    border: 1px solid var(--atp-element-fill-orange-medium-hover);
    background: var(--atp-element-fill-orange-weak-hover);
  }

  .pill.orange.outline.active:not(.disabled):active {
    border: 1px solid var(--atp-element-fill-orange-medium-pressed);
    background: var(--atp-element-fill-orange-weak-pressed);
  }

  .pill.orange.outline.disabled {
    border: 1px solid var(--atp-element-fill-orange-strong-disabled);
    background: var(--atp-element-fill-orange-weak-disabled);
  }

  /* light-slate */
  .pill.light-slate.fill {
    --atp-icon-fill: var(--atp-content-primary-strong-enabled);

    background: var(--atp-element-fill-primary-medium-enabled);
    color: var(--atp-content-primary-strong-enabled);
  }

  .pill.light-slate.fill.active:not(.disabled):hover,
  .pill.light-slate.fill.active:not(.disabled):focus-visible {
    background: var(--atp-element-fill-primary-medium-hover);
  }

  .pill.light-slate.fill.active:not(.disabled):active {
    background: var(--atp-element-fill-primary-medium-pressed);
  }

  .pill.light-slate.fill.disabled {
    --atp-icon-fill: var(--atp-content-primary-strong-disabled);

    background: var(--atp-element-fill-primary-medium-disabled);
    color: var(--atp-content-primary-strong-disabled);
  }

  .pill.light-slate.outline {
    --atp-icon-fill: var(--atp-element-fill-primary-strong-enabled);

    border: 1px solid var(--atp-element-fill-primary-strong-enabled);
    background: var(--atp-element-fill-primary-weak-enabled);
    color: var(--atp-element-fill-primary-strong-enabled);
  }

  .pill.light-slate.outline.active:not(.disabled):hover,
  .pill.light-slate.outline.active:not(.disabled):focus-visible {
    --atp-icon-fill: var(--atp-element-fill-primary-strong-hover);

    border: 1px solid var(--atp-element-fill-primary-strong-hover);
    background: var(--atp-element-fill-primary-weak-hover);
    color: var(--atp-element-fill-primary-strong-hover);
  }

  .pill.light-slate.outline.active:not(.disabled):active {
    --atp-icon-fill: var(--atp-element-fill-primary-strong-pressed);

    border: 1px solid var(--atp-element-fill-primary-strong-pressed);
    background: var(--atp-element-fill-primary-weak-pressed);
    color: var(--atp-element-fill-primary-strong-pressed);
  }

  .pill.light-slate.outline.disabled {
    --atp-icon-fill: var(--atp-content-primary-strong-disabled);

    border: 1px solid var(--atp-element-fill-primary-medium-disabled);
    background: var(--atp-element-fill-primary-weak-disabled);
    color: var(--atp-content-primary-strong-disabled);
  }

  /* dark-slate */
  .pill.dark-slate.fill {
    --atp-icon-fill: var(--atp-content-inverse-medium-enabled);

    background: var(--atp-element-fill-primary-strong-enabled);
    color: var(--atp-content-inverse-medium-enabled);
  }

  .pill.dark-slate.fill.active:not(.disabled):hover,
  .pill.dark-slate.fill.active:not(.disabled):focus-visible {
    background: var(--atp-element-fill-primary-strong-hover);
  }

  .pill.dark-slate.fill.active:not(.disabled):active {
    background: var(--atp-element-fill-primary-strong-pressed);
  }

  .pill.dark-slate.fill.disabled {
    background: var(--atp-element-fill-primary-strong-disabled);
  }

  .pill.dark-slate.outline {
    --atp-icon-fill: var(--atp-element-fill-primary-strong-enabled);

    border: 1px solid var(--atp-element-fill-primary-strong-enabled);
    background: var(--atp-element-fill-inverse-weak-enabled);
    color: var(--atp-element-fill-primary-strong-enabled);
  }

  .pill.dark-slate.outline.active:not(.disabled):hover,
  .pill.dark-slate.outline.active:not(.disabled):focus-visible {
    --atp-icon-fill: var(--atp-element-fill-primary-strong-hover);

    border: 1px solid var(--atp-element-fill-primary-strong-hover);
    color: var(--atp-element-fill-primary-strong-hover);
  }

  .pill.dark-slate.outline.active:not(.disabled):active {
    --atp-icon-fill: var(--atp-element-fill-primary-strong-pressed);

    border: 1px solid var(--atp-element-fill-primary-strong-pressed);
    color: var(--atp-element-fill-primary-strong-pressed);
  }

  .pill.dark-slate.outline.disabled {
    --atp-icon-fill: var(--atp-element-fill-primary-strong-disabled);

    border: 1px solid var(--atp-element-fill-primary-strong-disabled);
    color: var(--atp-element-fill-primary-strong-disabled);
  }

  /* dark-blue */
  .pill.dark-blue.fill {
    --atp-icon-fill: var(--atp-button-inverse-medium-enabled);

    background: var(--atp-element-fill-blue-strong-enabled);
    color: var(--atp-button-inverse-medium-enabled);
  }

  .pill.dark-blue.fill.active:not(.disabled):hover,
  .pill.dark-blue.fill.active:not(.disabled):focus-visible {
    background: var(--atp-element-fill-blue-strong-hover);
  }

  .pill.dark-blue.fill.active:not(.disabled):active {
    background: var(--atp-element-fill-blue-strong-pressed);
  }

  .pill.dark-blue.fill.disabled {
    background: var(--atp-element-fill-blue-strong-disabled);
  }

  .pill.dark-blue.outline {
    --atp-icon-fill: var(--atp-utility-primary-medium-enabled);

    color: var(--atp-utility-primary-medium-enabled);
    border: 1px solid var(--atp-utility-primary-medium-enabled);
    background: var(--atp-element-fill-inverse-weak-enabled);
  }

  .pill.dark-blue.outline.active:not(.disabled):hover,
  .pill.dark-blue.outline.active:not(.disabled):focus-visible {
    --atp-icon-fill: var(--atp-utility-primary-medium-hover);

    border: 1px solid var(--atp-utility-primary-medium-hover);
    color: var(--atp-utility-primary-medium-hover);
  }

  .pill.dark-blue.outline.active:not(.disabled):active {
    --atp-icon-fill: var(--atp-utility-primary-medium-pressed);

    border: 1px solid var(--atp-utility-primary-medium-pressed);
    color: var(--atp-utility-primary-medium-pressed);
  }

  .pill.dark-blue.outline.disabled {
    --atp-icon-fill: var(--atp-utility-primary-medium-disabled);

    border: 1px solid var(--atp-utility-primary-medium-disabled);
    color: var(--atp-utility-primary-medium-disabled);
  }

  /** red */
  .pill.red.fill {
    --atp-icon-fill: var(--atp-button-inverse-medium-enabled);

    background: var(--atp-danger-primary-strong-enabled);
    color: var(--atp-button-inverse-medium-enabled);
  }

  .pill.red.fill.active:not(.disabled):hover,
  .pill.red.fill.active:not(.disabled):focus-visible {
    background: var(--atp-danger-primary-strong-hover);
  }

  .pill.red.fill.active:not(.disabled):active {
    background: var(--atp-danger-primary-strong-pressed);
  }

  .pill.red.fill.disabled {
    background: var(--atp-danger-primary-strong-disabled);
  }

  .pill.red.outline {
    --atp-icon-fill: var(--atp-danger-primary-strong-enabled);

    border: 1px solid var(--atp-danger-primary-strong-enabled);
    background: var(--atp-element-fill-inverse-weak-enabled);
    color: var(--atp-danger-primary-strong-enabled);
  }

  .pill.red.outline.active:not(.disabled):hover,
  .pill.red.outline.active:not(.disabled):focus-visible {
    --atp-icon-fill: var(--atp-danger-primary-strong-hover);

    border: 1px solid var(--atp-danger-primary-strong-hover);
    color: var(--atp-danger-primary-strong-hover);
  }

  .pill.red.outline.active:not(.disabled):active {
    --atp-icon-fill: var(--atp-danger-primary-strong-pressed);

    border: 1px solid var(--atp-danger-primary-strong-pressed);
    color: var(--atp-danger-primary-strong-pressed);
  }

  .pill.red.outline.disabled {
    --atp-icon-fill: var(--atp-danger-primary-strong-disabled);

    border: 1px solid var(--atp-danger-primary-strong-disabled);
    color: var(--atp-danger-primary-strong-disabled);
  }
`;
var Ro = Object.defineProperty, Vo = Object.getOwnPropertyDescriptor, ze = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? Vo(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && Ro(e, A, a), a;
}, Po = /* @__PURE__ */ ((t) => (t.BLUE = "blue", t.GREEN = "green", t.PINK = "pink", t.PURPLE = "purple", t.ORANGE = "orange", t.DARK_BLUE = "dark-blue", t.LIGHT_SLATE = "light-slate", t.DARK_SLATE = "dark-slate", t.RED = "red", t))(Po || {}), Uo = /* @__PURE__ */ ((t) => (t.FILL = "fill", t.OUTLINE = "outline", t))(Uo || {});
let me = class extends b {
  constructor() {
    super(...arguments), this.label = "", this.appearance = "fill", this.color = "blue", this.isAction = !1, this.disabled = !1;
  }
  render() {
    return g`${this.isAction ? g`<button
          @click="${this._handleClick}"
          class="${this._getClasses()}"
          ?disabled="${this.disabled}"
        >
          ${this.iconLeft ? g`<atp-icon
                .icon=${this.iconLeft.icon}
                .height=${this.iconLeft.height}
                .color=${this.iconLeft.color}
              ></atp-icon>` : u}
          ${this.label}
          ${this.iconRight ? g`<atp-icon
                .icon=${this.iconRight.icon}
                .height=${this.iconRight.height}
                .color=${this.iconRight.color}
              ></atp-icon>` : u}
        </button>` : g`<div class="${this._getClasses()}">
          ${this.iconLeft ? g`<atp-icon
                .icon=${this.iconLeft.icon}
                .height=${this.iconLeft.height}
                .color=${this.iconLeft.color}
              ></atp-icon>` : u}
          ${this.label}
          ${this.iconRight ? g`<atp-icon
                .icon=${this.iconRight.icon}
                .height=${this.iconRight.height}
                .color=${this.iconRight.color}
              ></atp-icon>` : u}
        </div>`}`;
  }
  _getClasses() {
    return E({
      pill: !0,
      [this.color]: !0,
      disabled: this.disabled,
      [this.appearance]: !0,
      active: this.isAction
    });
  }
  _handleClick() {
    this.isAction && !this.disabled && this.dispatchEvent(new CustomEvent("pillClickEventOutput", { bubbles: !0, composed: !0 }));
  }
};
me.styles = [y, Fo];
ze([
  l()
], me.prototype, "label", 2);
ze([
  l({ type: Object })
], me.prototype, "iconLeft", 2);
ze([
  l({ type: Object })
], me.prototype, "iconRight", 2);
ze([
  l()
], me.prototype, "appearance", 2);
ze([
  l()
], me.prototype, "color", 2);
ze([
  l({ type: Boolean })
], me.prototype, "isAction", 2);
ze([
  l({ type: Boolean })
], me.prototype, "disabled", 2);
me = ze([
  Q("atp-pill")
], me);
const Ko = k`
  .progress {
    appearance: none;
    block-size: var(--atp-meter-height);
    inline-size: var(--atp-meter-width);
    background: var(--atp-meter-track-color);
    border: none;
    border-radius: var(--atp-meter-border-radius);
  }

  .progress::-webkit-progress-bar {
    block-size: var(--atp-meter-height);
    background: transparent;
  }

  .progress::-webkit-progress-value {
    background: var(--atp-meter-fill-color);
    border-radius: var(--atp-meter-border-radius);
  }

  /* 
   * For Firefox, "-bar" is the filled portion, instead of "-value". 
   * To style the underlying track, style the <progress> component itself.
   */
  .progress::-moz-progress-bar {
    background: var(--atp-meter-fill-color);
    border-radius: var(--atp-meter-border-radius);
  }

  /* circular progress */
  .circle {
    block-size: var(--atp-meter-circle-size);
    inline-size: var(--atp-meter-circle-size);
    border-radius: 50%;
    appearance: none;
    border: none;

    /* 
      Transition the gradient by 1 degree to smooth the rendering of the subpixel rounding.
      Without this, the edge of the filled section can look a little chunky.
    */
    background: conic-gradient(
      var(--atp-meter-fill-color) calc(360deg / var(--atp-meter-max) * var(--atp-meter-value)),
      var(--atp-meter-track-color)
        calc(360deg / var(--atp-meter-max) * var(--atp-meter-value) + 1deg),
      var(--atp-meter-track-color) 360deg
    );

    /* 
      Transition the gradient by a few percentage points to smooth the rendering of the subpixel rounding.
      Without this, the inside of the circle can look a little chunky.
    */

    /* stylelint-disable -- mask-image doesn't have baseline support yet, but the vendor prefix covers us */
    -webkit-mask-image: radial-gradient(
      transparent var(--atp-meter-circle-mask-size),
      black calc(var(--atp-meter-circle-mask-size) + 2%)
    );
    mask-image: radial-gradient(
      transparent var(--atp-meter-circle-mask-size),
      black calc(var(--atp-meter-circle-mask-size) + 2%)
    );
    /* stylelint-enable */
  }

  .circle::-webkit-progress-bar {
    background: transparent;
  }

  .circle::-webkit-progress-value {
    background: transparent;
  }

  .circle::-moz-progress-bar {
    background: transparent;
  }
`;
var Go = Object.defineProperty, jo = Object.getOwnPropertyDescriptor, kA = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? jo(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && Go(e, A, a), a;
}, Xo = /* @__PURE__ */ ((t) => (t.DEFAULT = "default", t.CIRCLE = "circle", t))(Xo || {});
let ht = class extends b {
  constructor() {
    super(...arguments), this.appearance = "default";
  }
  render() {
    return g`<progress
      class=${this._getClasses()}
      value=${this.value}
      max=${this.max}
      style="--atp-meter-value: ${this.value}; --atp-meter-max: ${this.max};"
    >
      at ${this.value} of ${this.max}
    </meter>`;
  }
  _getClasses() {
    return E({
      progress: !0,
      circle: this.appearance === "circle"
      /* CIRCLE */
    });
  }
};
ht.styles = [y, Ko];
kA([
  l()
], ht.prototype, "appearance", 2);
kA([
  l({ type: Number })
], ht.prototype, "max", 2);
kA([
  l({ type: Number })
], ht.prototype, "value", 2);
ht = kA([
  Q("atp-progress")
], ht);
const Wo = k`
  :host {
    --atp-radio-button-input-width: 16px;
    --atp-radio-button-input-border-width: 2px;
    --atp-radio-button-between-input-and-label: var(--atp-space-xs);
    --atp-radio-button-label-padding-inline-start: calc(
      var(--atp-radio-button-input-width) + var(--atp-radio-button-between-input-and-label)
    );
    --atp-radio-button-icon-width: 6px;
    --atp-radio-button-icon-inset: calc(
      (var(--atp-radio-button-input-width) - var(--atp-radio-button-icon-width)) / 2
    );
    --atp-radio-button-bordered-padding-block-start: var(--atp-space-xs);
    --atp-radio-button-bordered-padding-inline-start: var(--atp-space-s);
  }

  .radio-button-group {
    display: flex;
    flex-direction: column;
    gap: var(--atp-space-xs);
    margin: 0;
    min-inline-size: 0;
    padding: 0;
    border: none;
  }

  .radio-button-container {
    position: relative;
    display: inline-flex;
    align-items: center;
  }

  .input {
    position: absolute;
    block-size: 1px;
    inline-size: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  .label {
    position: relative;
    color: var(--atp-content-primary-medium-enabled);
    cursor: pointer;
    display: inline-block;
    min-block-size: var(--atp-space-s);
    margin-block: 0;
    padding-inline-start: var(--atp-radio-button-label-padding-inline-start);
    font-size: var(--atp-font-size-body-s);
    font-weight: normal;
    line-height: var(--atp-line-height-body-s);
    vertical-align: middle;
    white-space: nowrap;
    transition: all var(--atp-transition-standard);
  }

  .label:focus-visible,
  .input:focus-visible + .label {
    border-radius: 1px;
    outline: var(--atp-focus-width) solid var(--atp-focus-color);
    outline-offset: var(--atp-focus-outline-offset);
  }

  /* the visible "radio button" */
  .label::before {
    background: var(--atp-neutral-0);
    border: var(--atp-radio-button-input-border-width) solid currentColor;
    border-radius: 100%;
    color: var(--atp-content-primary-medium-enabled); /* used for border and dot color */
    content: '';
    padding-block: 0;
    padding-inline: 1px;
    position: absolute;
    display: block;
    inset-block-start: 50%;
    inset-inline-start: 0;
    transform: translateY(-50%);
    block-size: var(--atp-radio-button-input-width);
    inline-size: var(--atp-radio-button-input-width);
    z-index: var(--atp-z-index-base);
  }

  .label:hover::before {
    color: var(--atp-utility-primary-medium-hover);
  }

  .label:active::before {
    color: var(--atp-utility-primary-medium-pressed);
  }

  /* the radio button dot "icon" */
  .label::after {
    content: '';
    background: currentcolor;
    border-radius: 100%;
    padding: 0;
    position: absolute;
    display: none;
    inset-block-start: 50%;
    inset-inline-start: var(--atp-radio-button-icon-inset);
    transform: translateY(-50%);
    block-size: var(--atp-radio-button-icon-width);
    inline-size: var(--atp-radio-button-icon-width);
    z-index: var(--atp-z-index-over-base);
  }

  /* the radio button dot "icon" */
  .input:checked + .label::after {
    display: block;
  }

  /* stylelint-disable no-descending-specificity -- so we can keep states grouped together */

  /* checked state */
  .input:checked + .label::before,
  .input:checked + .label::after {
    color: var(--atp-utility-primary-medium-enabled);
  }

  .input:checked + .label:hover::before,
  .input:checked + .label:hover::after {
    color: var(--atp-utility-primary-medium-hover);
  }

  .input:checked + .label:active::before,
  .input:checked + .label:active::after {
    color: var(--atp-utility-primary-medium-pressed);
  }

  /* disabled state */
  .input:disabled + .label {
    color: var(--atp-button-primary-medium-disabled);
    cursor: not-allowed;
  }

  .input:disabled + .label::before,
  .input:disabled + .label::after {
    color: var(--atp-content-primary-weak-disabled);
  }

  .input:checked:disabled + .label::before,
  .input:checked:disabled + .label::after {
    color: var(--atp-utility-primary-medium-disabled);
  }

  /* error/invalid */
  .error .label::before {
    color: var(--atp-danger-primary-strong-enabled);
  }

  .error .label:hover::before {
    color: var(--atp-danger-primary-strong-hover);
  }

  .error .label:active::before {
    color: var(--atp-danger-primary-strong-pressed);
  }

  .error .input:checked + .label::before,
  .error .input:checked + .label::after {
    color: var(--atp-danger-primary-strong-enabled);
  }

  .error .input:disabled + .label::before,
  .error .input:disabled + .label:hover::before,
  .error .input:disabled + .label:active::before {
    color: var(--atp-danger-primary-strong-disabled);
  }

  /* bordered */
  .bordered .label {
    display: inline-block;
    padding-block: var(--atp-radio-button-bordered-padding-block-start) var(--atp-space-xs);
    padding-inline: calc(
        var(--atp-radio-button-label-padding-inline-start) +
          var(--atp-radio-button-bordered-padding-inline-start)
      )
      var(--atp-space-s);
    border-radius: var(--atp-border-radius-s);
    border: 1px solid var(--atp-element-border-primary-medium-enabled);
  }

  .bordered .label::before {
    inset-inline-start: var(--atp-radio-button-bordered-padding-inline-start);
  }

  .bordered .label::after {
    inset-block-start: 50%;
    inset-inline-start: calc(
      var(--atp-radio-button-icon-inset) + var(--atp-radio-button-bordered-padding-inline-start)
    );
    transform: translateY(-50%);
  }

  .bordered .input:checked + .label {
    background: var(--atp-element-fill-blue-medium-enabled);
    border-color: var(--atp-utility-primary-medium-enabled);
  }

  .bordered .label:hover,
  .bordered .input:checked + label:hover {
    border-color: var(--atp-utility-primary-medium-enabled);
  }

  .bordered .label:active,
  .bordered .input:checked + label:active {
    border-color: var(--atp-utility-primary-medium-pressed);
  }

  .bordered .input:disabled + .label,
  .bordered .input:checked:disabled + .label {
    background: var(--atp-element-fill-inverse-medium-disabled);
    border-color: var(--atp-element-border-primary-medium-enabled);
  }

  .bordered.error + .label {
    border-color: var(--atp-danger-primary-strong-enabled);
  }

  .bordered.error .input:checked + .label {
    background-color: var(--atp-element-fill-red-weak-enabled);
    border-color: var(--atp-danger-primary-strong-enabled);
  }

  .bordered.error + .label:hover {
    background-color: var(--atp-element-fill-red-weak-hover);
    border-color: var(--atp-danger-primary-strong-hover);
  }

  .bordered.error + .label:active {
    background-color: var(--atp-element-fill-red-weak-pressed);
    border-color: var(--atp-danger-primary-strong-pressed);
  }

  .bordered.error .input:disabled + .label {
    background: var(--atp-element-fill-inverse-medium-disabled);
    border-color: var(--atp-element-border-primary-medium-enabled);
  }

  .bordered .icon {
    inset-inline-start: calc(
      var(--atp-radio-button-bordered-padding-inline-start) +
        ((var(--atp-radio-button-input-width) - var(--atp-radio-button-icon-width)) / 2)
    );
  }

  /* horizontal */
  .horizontal {
    justify-content: flex-start;
    flex-direction: row;
  }

  .horizontal .radio-button-container {
    flex: 1 1 0;
    inline-size: 100%;
  }

  .horizontal .label {
    display: block;
    inline-size: 100%;
  }

  /* segmented */
  .segmented {
    display: inline-flex;
    gap: var(--atp-segmented-gap);
    min-block-size: var(--atp-segmented-segment-height);
    padding-block: 0;
    padding-inline: var(--atp-segmented-wrapper-padding-inline);
    background: var(--atp-segmented-fill-weak-enabled);
    border-radius: var(--atp-segmented-wrapper-border-radius);
  }

  .segmented.size-medium {
    --atp-segmented-segment-height: var(--atp-segmented-segment-height-medium);
    --atp-segmented-gap: var(--atp-segmented-gap-medium);
    --atp-segmented-wrapper-padding-inline: var(--atp-segmented-wrapper-padding-inline-medium);
    --atp-segmented-segment-margin-block: var(--atp-space-xxxs);
    --atp-segmented-segment-margin-inline: 0;
    --atp-segmented-label-font-size: var(--atp-segmented-label-font-size-medium);
    --atp-segmented-label-line-height: var(--atp-segmented-label-line-height-medium);
  }

  .segmented.size-small {
    --atp-segmented-segment-height: var(--atp-segmented-segment-height-small);
    --atp-segmented-gap: var(--atp-segmented-gap-small);
    --atp-segmented-wrapper-padding-inline: var(--atp-segmented-wrapper-padding-inline-small);
    --atp-segmented-segment-margin-block: var(--atp-space-xxxs);
    --atp-segmented-segment-margin-inline: 0;
    --atp-segmented-label-font-size: var(--atp-segmented-label-font-size-small);
    --atp-segmented-label-line-height: var(--atp-segmented-label-line-height-small);
  }

  .segmented label::before,
  .segmented .input:checked + label::after {
    display: none;
  }

  .segmented .input + .label {
    --atp-segmented-icon-color: var(--atp-content-primary-medium-enabled);

    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    block-size: var(--atp-segmented-segment-height);
    min-block-size: var(--atp-segmented-segment-height);
    min-inline-size: var(--atp-segmented-segment-width);
    margin-block: var(--atp-segmented-segment-margin-block);
    margin-inline: var(--atp-segmented-segment-margin-inline);
    padding-block: var(--atp-segmented-segment-padding-block);
    padding-inline: var(--atp-segmented-segment-padding-inline);
    text-align: center;
    font-size: var(--atp-segmented-label-font-size);
    font-weight: var(--atp-segmented-label-font-weight);
    line-height: var(--atp-segmented-label-line-height);
    border-radius: var(--atp-segmented-border-radius);
  }

  .segmented .input + .label.icon-only {
    inline-size: var(--atp-segmented-segment-height);
    min-inline-size: var(--atp-segmented-segment-height);
    padding: 0;
  }

  .segmented .visually-hidden {
    position: absolute;
    block-size: 1px;
    inline-size: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  .segmented.color-default {
    --atp-segmented-segment-background-checked: var(
      --atp-segmented-segment-background-checked-default
    );
  }

  .segmented.color-utility-blue {
    --atp-segmented-segment-background-checked: var(
      --atp-segmented-segment-background-checked-utility-blue
    );
  }

  .segmented.color-slate {
    --atp-segmented-segment-background-checked: var(
      --atp-segmented-segment-background-checked-slate
    );
  }

  .segmented .input:not(:disabled, :checked) + .label:hover {
    background: var(--atp-segmented-fill-weak-hover);
  }

  .segmented .input:not(:disabled, :checked) + .label:active {
    background: var(--atp-segmented-fill-weak-pressed);
  }

  .segmented .input:disabled + .label {
    --atp-segmented-icon-color: var(--atp-button-primary-medium-disabled);
  }

  .segmented .input:checked + .label {
    --atp-segmented-icon-color: var(--atp-content-inverse-medium-enabled);

    color: var(--atp-segmented-segment-color-checked);
    background: var(--atp-segmented-segment-background-checked);
  }

  /* stylelint-enable no-descending-specificity */
`;
var qo = Object.defineProperty, _o = Object.getOwnPropertyDescriptor, Ce = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? _o(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && qo(e, A, a), a;
}, $o = /* @__PURE__ */ ((t) => (t.HORIZONTAL = "horizontal", t.VERTICAL = "vertical", t))($o || {}), e5 = /* @__PURE__ */ ((t) => (t.DEFAULT = "default", t.SEGMENTED = "segmented", t))(e5 || {});
let W = class extends b {
  constructor() {
    super(), this.bordered = !1, this.isError = !1, this.required = !1, this.direction = "vertical", this.itemsList = [], this.appearance = "default", this.segmentSize = pe.LARGE, this.segmentColor = o1.DEFAULT, this.fieldsetRef = ot(), this._invalidMessage = "Please make a selection.", this._internals = this.attachInternals();
  }
  // read-only property that returns the value of the selected radio button
  get value() {
    return this.getGroupValue();
  }
  getGroupValue() {
    const t = this.fieldsetRef.value?.querySelectorAll("input");
    if (!t) return null;
    for (const e of Array.from(t))
      if (e.checked)
        return e.value;
    return null;
  }
  static get formAssociated() {
    return !0;
  }
  render() {
    return g`
      <fieldset
        class="${this._getClasses()}"
        role="radiogroup"
        aria-errormessage=${Z(this.ariaErrorMessage)}
        ${lt(this.fieldsetRef)}
      >
        ${this.itemsList.map(
      (t) => g`
            <div class="radio-button-container">
              <input
                type="radio"
                class="input"
                name=${this.name}
                value=${t.value}
                id=${t.id}
                ?checked=${t.checked}
                ?disabled=${t.disabled}
                ?required=${this.required}
                ?aria-required="${this.required}"
                ?aria-invalid="${this.isError}"
                @click=${this._onClick}
                @change=${this._onChange}
                @blur=${this._onBlur}
                @focus=${this._onFocus}
              />
              <label class="${this._getLabelClasses(t)}" for=${t.id}>
                ${this._getLabelContent(t)}
              </label>
            </div>
          `
    )}
      </fieldset>
    `;
  }
  _getClasses() {
    return E({
      "radio-button-group": !0,
      bordered: this.bordered,
      [`${this.appearance}`]: !0,
      [`size-${this.segmentSize}`]: this.appearance === "segmented",
      [`color-${this.segmentColor}`]: this.appearance === "segmented",
      error: this.isError,
      horizontal: this.direction === "horizontal" || this.appearance === "segmented"
      /* SEGMENTED */
    });
  }
  _showSegmentIcon(t) {
    return this.appearance === "segmented" && !!t.iconConfig;
  }
  _getLabelClasses(t) {
    return E({
      label: !0,
      "icon-only": this._showSegmentIcon(t)
    });
  }
  _getLabelContent(t) {
    const e = t.iconConfig;
    return !this._showSegmentIcon(t) || !e ? t.label : g`
      <atp-icon
        .icon=${e.icon}
        .color=${"var(--atp-segmented-icon-color)"}
        .height=${bi(this.segmentSize)}
        aria-hidden="true"
      ></atp-icon>
      <span class="visually-hidden">${t.label}</span>
    `;
  }
  setValidity() {
    const t = this.getGroupValue(), e = !(this.required && !t);
    return this._internals.setValidity({ valueMissing: !e }, e ? "" : this._invalidMessage), this._internals.setFormValue(t), e;
  }
  checkValidity() {
    return this._internals.checkValidity();
  }
  reportValidity() {
    this._internals.reportValidity();
  }
  get validity() {
    return this._internals.validity;
  }
  get validationMessage() {
    return this._internals.validationMessage;
  }
  updated(t) {
    t.has("required") && this.setValidity(), this._internals.setFormValue(this.getGroupValue());
  }
  connectedCallback() {
    super.connectedCallback(), this.setValidity(), this._internals.setFormValue(this.getGroupValue());
  }
  /* event dispatches */
  _onChange(t) {
    const e = t.target;
    this.itemsList = this.itemsList.map((A) => ({
      ...A,
      checked: A.id === e.id
    })), this._internals.setFormValue(e.value), this.setValidity(), this.dispatchEvent(new CustomEvent("changeEventOutput", { bubbles: !0, composed: !0 }));
  }
  _onClick(t) {
    t.target.dispatchEvent(
      new CustomEvent("clickEventOutput", {
        bubbles: !0,
        composed: !0,
        detail: t.target.id
      })
    );
  }
  _onFocus(t) {
    t.target.dispatchEvent(
      new CustomEvent("focusEventOutput", {
        bubbles: !0,
        composed: !0,
        detail: t.target.id
      })
    );
  }
  _onBlur(t) {
    t.target.dispatchEvent(
      new CustomEvent("blurEventOutput", {
        bubbles: !0,
        composed: !0,
        detail: t.target.id
      })
    );
  }
};
W.styles = [y, Wo];
Ce([
  l()
], W.prototype, "name", 2);
Ce([
  l({ type: Boolean })
], W.prototype, "bordered", 2);
Ce([
  l({ type: Boolean, reflect: !0 })
], W.prototype, "isError", 2);
Ce([
  l({ type: String })
], W.prototype, "ariaErrorMessage", 2);
Ce([
  l({ type: Boolean, reflect: !0 })
], W.prototype, "required", 2);
Ce([
  l()
], W.prototype, "direction", 2);
Ce([
  l({ type: Array })
], W.prototype, "itemsList", 2);
Ce([
  l()
], W.prototype, "appearance", 2);
Ce([
  l()
], W.prototype, "segmentSize", 2);
Ce([
  l()
], W.prototype, "segmentColor", 2);
W = Ce([
  Q("atp-radio-button-group")
], W);
const t5 = k`
  .secondary-nav ul {
    display: flex;
    flex-direction: column;
    gap: var(--atp-space-xs);
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .secondary-nav-item {
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: var(--atp-space-xs);
    inline-size: 100%;
    border-radius: var(--atp-border-radius-s);
    transition: all var(--atp-transition-standard);
  }

  .secondary-nav-item:hover {
    background: var(--atp-element-fill-inverse-weak-hover);
  }

  .secondary-nav-item:active {
    background: var(--atp-element-fill-inverse-weak-pressed);
  }

  .secondary-nav-item:has(a[aria-current]) {
    background: var(--atp-element-fill-blue-medium-enabled);
  }

  .secondary-nav-item a {
    position: relative;
    display: flex;
    justify-content: space-between;
    inline-size: 100%;
    padding-block: var(--atp-space-xs);
    padding-inline: var(--atp-space-s);
    color: var(--atp-content-primary-strong-enabled);
    text-decoration: none;
  }

  .secondary-nav-item a.has-menu {
    padding-inline-end: calc(var(--atp-space-l) + var(--atp-space-xs));
  }

  .name {
    flex-grow: 9999;
  }

  .badge {
    flex-grow: 1;
    padding-block: var(--atp-space-xxxs);
    padding-inline: var(--atp-space-xxs);
    font-size: var(--atp-font-size-body-xs);
    background: var(--atp-element-fill-blue-medium-enabled);
    border-radius: var(--atp-border-radius-s);
  }

  .secondary-nav-item a[aria-current] .badge {
    color: var(--atp-content-inverse-medium-enabled);
    background: var(--atp-utility-primary-medium-enabled);
  }

  .menu {
    position: absolute;
    inset-block-start: calc(var(--atp-space-xs) + var(--atp-space-xxxs));
    inset-inline-end: var(--atp-space-s);
  }

  atp-button {
    position: relative;
  }

  atp-dropdown {
    position: absolute;
    z-index: var(--atp-z-index-menu);
    inset-block-start: var(--atp-space-l);
    inset-inline-end: 0;
    block-size: auto;
    inline-size: auto;
  }

  .secondary-nav-divider {
    background-color: var(--atp-element-border-primary-medium-enabled);
    block-size: 1px;
    margin: 0;
    padding: 0;
    border: none;
  }
`;
var A5 = Object.defineProperty, i5 = Object.getOwnPropertyDescriptor, vt = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? i5(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && A5(e, A, a), a;
};
let He = class extends b {
  constructor() {
    super(...arguments), this.outputNavigationEvents = !1, this.openDropdownId = null;
  }
  render() {
    return g`<nav class="secondary-nav" aria-label="${this.ariaLabel}">
      <ul>
        ${this.itemsList?.map(
      (t) => t.isDivider ? g`<li class="secondary-nav-divider"></div>` : g`<li class="secondary-nav-item">
            <a
              href="${t.route}"
              aria-current=${t.id === this.activeId || u}
              @click=${(e) => this._navigationHandler(e, t)}
              class=${t.menuItems ? "has-menu" : u}
            >
              <span class="name">${t.name}</span>
               ${t.badge ? g`<span class="badge">${t.badge}</span>` : u}
            </a>
            ${t.menuItems ? g` <div class="menu">
                    <atp-button
                      .iconConfig=${{ icon: "more-vertical", height: 16, label: "Open menu" }}
                      appearance=${ue.TEXT}
                      id="button-${t.id}"
                      @clickEventOutput=${() => this._toggleDropdown(t.id)}
                    ></atp-button>

                    <atp-dropdown
                      id="dropdown-${t.id}"
                      .itemsList=${t.menuItems ?? []}
                      @itemSelectedOutput=${(e) => this._dropdownHandler(e, t)}
                      @dropdownClosedOutput=${() => this._closeDropdown(t.id)}
                    ></atp-dropdown>
                  </div>` : u}
            </div>
          </li>`
    )}
      </ul>
    </nav>`;
  }
  _navigationHandler(t, e) {
    this.outputNavigationEvents && (t.preventDefault(), this.dispatchEvent(
      new CustomEvent("navigationEventOutput", { bubbles: !0, composed: !0, detail: e })
    ));
  }
  _dropdownHandler(t, e) {
    t.preventDefault(), this.dispatchEvent(
      new CustomEvent("menuItemSelectedOutput", {
        bubbles: !0,
        composed: !0,
        detail: {
          navItem: e,
          selectedIds: t.detail
        }
      })
    ), this._closeDropdown(e.id);
  }
  _toggleDropdown(t) {
    const e = this._getDropdownElement(t);
    if (!e) return;
    const A = this.openDropdownId !== t;
    this.openDropdownId = A ? t : null, A ? e.startKeyScrolling() : e.disableKeyScrolling();
  }
  _closeDropdown(t) {
    const e = this._getDropdownElement(t);
    e && e.disableKeyScrolling(), this.openDropdownId === t && (this.openDropdownId = null);
  }
  _getDropdownElement(t) {
    return this.renderRoot.querySelector(`#dropdown-${t}`);
  }
};
He.styles = [y, t5];
vt([
  l({ type: Array })
], He.prototype, "itemsList", 2);
vt([
  l()
], He.prototype, "activeId", 2);
vt([
  l({ type: String })
], He.prototype, "ariaLabel", 2);
vt([
  l({ type: Boolean })
], He.prototype, "outputNavigationEvents", 2);
vt([
  l({ type: String })
], He.prototype, "openDropdownId", 2);
He = vt([
  Q("atp-secondary-nav")
], He);
const a5 = k`
  :host:has(.no-top-content) {
    --atp-app-sidebar-width: 224px;
    --atp-toggle-button-distance: calc(var(--atp-app-sidebar-width) + var(--atp-space-s));
  }

  /** TODO: There is going to be an animation but it is still being designed */

  .top-button {
    padding-block-end: var(--atp-space-s);
    display: block;
  }

  :host:has(.no-top-content) .top-button {
    margin-block-end: 0;
  }

  .hidden {
    display: none;
    transition: display 0.2s;
    transition-behavior: allow-discrete;
  }

  /* stylelint-disable-next-line -- we are allowing this as a progressive enhancement */
  .hidden::starting-style {
    display: block;
  }

  .toggle-button {
    position: absolute;
    inset-inline-start: var(--atp-toggle-button-distance);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    block-size: var(--atp-space-l);
    inline-size: var(--atp-space-l);
    border-radius: 50%;
    border: 1px solid var(--atp-neutral-200);
    background: var(--atp-neutral-0);
    inset-block-start: var(--atp-toggle-button-position-block-start);
    transition: all var(--atp-transition-standard);
  }

  .toggle-button:hover,
  .toggle-button:focus-visible {
    border: 1px solid var(--atp-element-border-primary-medium-enabled);
    background: var(--atp-element-fill-inverse-weak-hover);
    box-shadow: var(--atp-box-shadow-sidebar-toggle);
  }

  .toggle-button:active {
    border: 1px solid var(--atp-element-border-primary-medium-enabled);
    background: var(--atp-element-fill-inverse-weak-pressed);
    box-shadow: var(--atp-box-shadow-sidebar-toggle);
  }

  .toggle-button atp-icon {
    transition: all var(--atp-transition-standard);
  }

  .icon-rotate {
    transform: rotateY(180deg);
    transition: all var(--atp-transition-standard);
  }

  .sidebar-wrapper {
    /** TODO: customize behavior when sidebar needs to scroll, left Figma comment here https://www.figma.com/design/HA7RCY6fiLpetLwLPGQdHI?node-id=1935-9768&m=dev#1343352851 */
    box-sizing: border-box;
    inline-size: var(--atp-app-sidebar-width);
    position: relative;
    max-block-size: 100%;
    display: flex;
    flex-direction: column;
  }

  .sidebar-wrapper .nav-links {
    max-block-size: 100%;
    overflow-y: auto;
  }

  .sidebar-wrapper ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  .sidebar-wrapper li {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  .sidebar-wrapper .list-parent {
    gap: var(--atp-space-xs);
  }

  .sidebar-wrapper .list-parent-alt {
    gap: var(--atp-space-xxs);
  }

  .sidebar-wrapper .list-child {
    gap: var(--atp-space-xxxs);
    padding-block: 0 var(--atp-space-xxs);
    padding-inline: var(--atp-space-xs);
    background: var(--atp-sidebar-list-selected);
    border-end-start-radius: var(--atp-border-radius-s);
    border-end-end-radius: var(--atp-border-radius-s);
    overflow: hidden;
  }

  .sidebar-wrapper .list-grandchild {
    gap: var(--atp-space-xxxs);
    margin-block-start: var(--atp-space-xxxs);
    padding: 0;
    padding-inline-start: calc(var(--atp-space-s) + var(--atp-space-xxxs));
  }

  .button-parent {
    all: unset;
    background: transparent;
    padding-block: var(--atp-space-xxs);
    padding-inline: 0 calc(var(--atp-space-xs) + var(--atp-space-xxs));
    border-radius: var(--atp-border-radius-s);
    cursor: pointer;
    transition: all var(--atp-transition-standard);
  }

  .button-parent-alt {
    all: unset;
    background: transparent;
    padding-block: var(--atp-space-xxs);
    padding-inline: calc(var(--atp-space-xs) + var(--atp-space-xxs)) 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: var(--atp-space-xxs);
    border-radius: var(--atp-border-radius-s);
    transition: all var(--atp-transition-standard);
  }

  .sidebar-wrapper .button-parent {
    all: unset;
    background: transparent;
    padding-block: var(--atp-space-xxs);
    padding-inline: calc(var(--atp-space-xs) + var(--atp-space-xxs)) 0;
    cursor: pointer;
  }

  .sidebar-wrapper .button-parent-alt {
    all: unset;
    background: transparent;
    padding-block: var(--atp-space-xxs);
    padding-inline: calc(var(--atp-space-xs) + var(--atp-space-xxs)) 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: var(--atp-space-xxs);
  }

  .sidebar-wrapper .list-item-parent {
    border-radius: var(--atp-space-xxs);
    color: var(--atp-content-primary-medium-enabled);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-m);
    font-weight: var(--atp-font-weight-semibold);
    line-height: var(--atp-line-height-body-m);
  }

  .sidebar-wrapper .list-item-parent-alt {
    border-radius: var(--atp-border-radius-s);
    color: var(--atp-content-primary-medium-enabled);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-s);
    font-weight: var(--atp-font-weight-regular);
    line-height: var(--atp-line-height-body-s);
  }

  .sidebar-wrapper .list-item-parent,
  .sidebar-wrapper .list-item-child,
  .sidebar-wrapper .list-item-grandchild,
  .sidebar-wrapper .list-item-parent-alt,
  .sidebar-wrapper .button-child,
  .sidebar-wrapper .button-child-icon,
  .sidebar-wrapper .button-parent {
    transition: all var(--atp-transition-standard);
  }

  .sidebar-wrapper .list-item-parent:has(:hover),
  .sidebar-wrapper .list-item-parent:has(:focus-visible),
  .sidebar-wrapper .list-item-parent-alt:has(:hover),
  .sidebar-wrapper .list-item-parent-alt:has(:focus-visible) {
    background: var(--atp-sidebar-parent-item-hover);
    color: var(--atp-content-primary-strong-enabled);
  }

  .sidebar-wrapper .list-item-parent:has(:active),
  .sidebar-wrapper .list-item-parent-alt:has(:active) {
    background: var(--atp-sidebar-parent-item-active);
    color: var(--atp-content-primary-strong-enabled);
  }

  .sidebar-wrapper .list-item-parent.active,
  .sidebar-wrapper .list-item-parent-alt.active {
    background: var(--atp-sidebar-item-selected);
    color: var(--atp-content-primary-strong-enabled);
    font-weight: var(--atp-font-weight-semibold);
  }

  .sidebar-wrapper .list-item-parent.active:has(:hover),
  .sidebar-wrapper .list-item-parent.active:has(:focus-visible),
  .sidebar-wrapper .list-item-parent-alt.active:has(:hover),
  .sidebar-wrapper .list-item-parent-alt.active:has(:focus-visible) {
    background: var(--atp-sidebar-item-hover);
    color: var(--atp-content-primary-strong-enabled);
  }

  .sidebar-wrapper .list-item-parent.active:has(:active),
  .sidebar-wrapper .list-item-parent-alt.active:has(:active) {
    background: var(--atp-sidebar-item-active);
    color: var(--atp-content-primary-strong-enabled);
  }

  .sidebar-wrapper .list-item-parent.is-open {
    background: var(--atp-sidebar-list-selected);
    border-radius: var(--atp-border-radius-s);
    color: var(--atp-content-primary-medium-enabled);
    font-weight: var(--atp-font-weight-semibold);
  }

  .sidebar-wrapper .list-item-child {
    position: relative;
    color: var(--atp-content-primary-strong-enabled);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-s);
    font-weight: var(--atp-font-weight-regular);
    line-height: var(--atp-line-height-body-s);
  }

  .sidebar-wrapper .list-item-grandchild {
    border-radius: var(--atp-border-radius-s);
    color: var(--atp-content-primary-medium-enabled);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-s);
    font-weight: var(--atp-font-weight-regular);
    line-height: var(--atp-line-height-body-s);
  }

  .sidebar-wrapper .button-child-icon {
    all: unset;
    cursor: pointer;
    position: absolute;
    inset-block-start: calc(var(--atp-space-xxs) + var(--atp-space-xxxs));
    inset-inline-start: var(--atp-space-xxs);
    block-size: var(--atp-space-s);
    inline-size: var(--atp-space-s);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--atp-border-radius-s);
  }

  .button-grandchild {
    all: unset;
    padding-block: var(--atp-space-xxs);
    padding-inline: var(--atp-space-xs) 0;
    border-radius: var(--atp-border-radius-s);
    cursor: pointer;
    transition: all var(--atp-transition-standard);
  }

  .sidebar-wrapper .button-child {
    all: unset;
    border-radius: var(--atp-border-radius-s);
    padding: var(--atp-space-xxs);
    padding-inline-end: 0;
    display: flex;
    gap: var(--atp-space-xs);
    align-items: center;
    cursor: pointer;
    transition: all var(--atp-transition-standard);
  }

  .sidebar-wrapper .button-grandchild {
    all: unset;
    padding: var(--atp-space-xxs);
    padding-inline: var(--atp-space-xs) 0;
    cursor: pointer;
  }

  .sidebar-wrapper .button-parent:focus-visible,
  .sidebar-wrapper .button-parent-alt:focus-visible,
  .sidebar-wrapper .button-child:focus-visible,
  .sidebar-wrapper .button-child-icon:focus-visible,
  .sidebar-wrapper .button-grandchild:focus-visible {
    border-radius: var(--atp-border-radius-s);
    outline: 0;
    box-shadow: inset 0 0 0 var(--atp-focus-width) var(--atp-focus-color);
  }

  .sidebar-wrapper .button-child-icon:hover,
  .sidebar-wrapper .button-child-icon:focus-visible {
    background: var(--atp-sidebar-item-hover);
  }

  .sidebar-wrapper .button-child-icon:active {
    background: var(--atp-sidebar-item-active);
  }

  .sidebar-wrapper .button-child:hover,
  .sidebar-wrapper .button-child:focus-visible,
  .sidebar-wrapper .list-item-grandchild:has(:hover),
  .sidebar-wrapper .list-item-grandchild:has(:focus-visible) {
    background: var(--atp-sidebar-item-hover);
    color: var(--atp-content-primary-strong-enabled);
  }

  .sidebar-wrapper .button-child:active,
  .sidebar-wrapper .list-item-grandchild:has(:active) {
    background: var(--atp-sidebar-item-active);
  }

  .sidebar-wrapper .list-item-child:has(.button-child-icon) .button-child {
    padding-inline-start: var(--atp-space-m);
  }

  .sidebar-wrapper .list-item-child.active .button-child,
  .sidebar-wrapper .list-item-grandchild.active {
    background: var(--atp-sidebar-item-selected);
    color: var(--atp-content-primary-strong-enabled);
    font-weight: var(--atp-font-weight-semibold);
  }

  .sidebar-wrapper .list-item-child.active .button-child:hover,
  .sidebar-wrapper .list-item-child.active .button-child.active:focus-visible,
  .sidebar-wrapper .list-item-grandchild.active:has(:hover),
  .sidebar-wrapper .list-item-grandchild.active:has(:focus-visible) {
    background: var(--atp-sidebar-item-hover);
    color: var(--atp-content-primary-strong-enabled);
  }

  .sidebar-wrapper .list-item-child.active .button-child:active,
  .sidebar-wrapper .list-item-grandchild.active:has(:active) {
    background: var(--atp-sidebar-item-active);
    color: var(--atp-content-primary-strong-enabled);
  }

  .sidebar-wrapper .divider {
    background: var(--atp-element-border-primary-medium-enabled);
    block-size: 1px;
    inline-size: 100%;
    margin-block: var(--atp-space-s);
    margin-inline: 0;
  }

  a:focus-visible,
  button:focus-visible {
    outline: var(--atp-focus-width) solid var(--atp-focus-color);
    outline-offset: var(--atp-focus-outline-offset);
  }
`;
var r5 = Object.defineProperty, n5 = Object.getOwnPropertyDescriptor, we = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? n5(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && r5(e, A, a), a;
};
let de = class extends b {
  constructor() {
    super(...arguments), this.openIds = [], this.sidebarHidden = !1, this.outputNavigationEvents = !1, this._buttonContent = !1, this._sidebarOpenIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 12" fill="none">
<path d="M5.96304 9.53973C6.17899 9.57359 6.29677 9.78518 6.31641 10.1745C6.29677 10.53 6.17899 10.7246 5.96304 10.7585L0.655048 10.7585C0.448918 10.7246 0.336038 10.513 0.316406 10.1237C0.316406 9.97137 0.350761 9.83596 0.419471 9.71747C0.488181 9.59898 0.566707 9.53973 0.655048 9.53973L5.96304 9.53973ZM5.96304 1.41475C6.0612 1.41475 6.14463 1.48245 6.21334 1.61787C6.28205 1.73636 6.31641 1.88024 6.31641 2.04951C6.29677 2.40498 6.17899 2.59964 5.96304 2.6335H0.655048C0.566707 2.6335 0.488181 2.56579 0.419471 2.43037C0.350761 2.31188 0.316406 2.168 0.316406 1.99873C0.316406 1.84639 0.350761 1.71097 0.419471 1.59248C0.488181 1.47399 0.566707 1.41475 0.655048 1.41475L5.96304 1.41475ZM5.96304 5.47725C6.17899 5.5111 6.29677 5.71423 6.31641 6.08662C6.29677 6.45902 6.17899 6.66214 5.96304 6.696H0.655048C0.448918 6.66214 0.336038 6.45902 0.316406 6.08662C0.336038 5.71423 0.448918 5.5111 0.655048 5.47725H3.30904H5.96304Z" fill="var(--atp-content-primary-strong-enabled)"/>
<path d="M9.73828 11.0795L14.0273 6.42633C14.1523 6.26392 14.2148 6.11775 14.2148 5.98782C14.2148 5.84165 14.1602 5.7036 14.0508 5.57367L9.76172 0.920534C9.51172 0.693155 9.24609 0.693155 8.96484 0.920534C8.74609 1.18039 8.74609 1.4565 8.96484 1.74884L12.8789 5.98782L8.94141 10.2512C8.72266 10.5435 8.72266 10.8196 8.94141 11.0795C9.22266 11.3068 9.48828 11.3068 9.73828 11.0795Z" fill="var(--atp-content-primary-strong-enabled)"/>
</svg>`;
  }
  render() {
    return g`
      <aside
        @keydown=${this._handleKeydown}
        class="${this._getSidebarClass()}"
        aria-label="Main sidebar"
      >
        <button
          aria-label="Toggle sidebar"
          aria-expanded="${!this.sidebarHidden}"
          aria-controls="sidebar"
          @click=${() => this._toggleSidebar(!this.sidebarHidden)}
          class="toggle-button"
        >
          <atp-icon class="${this._getToggleClass()}" .height=${12} .icon=${this._sidebarOpenIcon}>
          </atp-icon>
        </button>
        <div class="top-button ${this.sidebarHidden ? "hidden" : ""}">
          <slot @slotchange=${this._onSlotChange} name="top-button"></slot>
        </div>
        <nav
          class="nav-links ${this.sidebarHidden ? "hidden" : ""}"
          aria-label="Sidebar navigation"
          style="${this._setCustomColors()}"
        >
          <ul class="list list-parent">
            ${this.items?.map(
      (t) => g`<li
                  class="${this._getButtonClasses(
        ["list-item-parent"],
        t.id === this.activeId && t.children?.length === 0,
        this._containsActive(t) && t.children?.length > 0
      )}"
                >
                  <a
                    class="button-parent"
                    href="${t.route}"
                    aria-expanded=${t.children?.length > 0 ? this._containsActive(t) : u}
                    aria-current=${t.id === this.activeId || u}
                    @click=${(e) => this._navigationHandler(e, t)}
                  >
                    ${t.name}
                  </a>
                  ${t.children?.length > 0 && this._containsActive(t) ? g`<ul class="list list-child">
                        ${t.children.map(
        (e) => g`<li
                              class="${this._getButtonClasses(
          ["list-item-child"],
          e.id === this.activeId,
          this.openIds.includes(e.id)
        )}"
                            >
                              ${e.children?.length > 0 ? g`<button
                                    class="${this._getButtonClasses(
          ["button-child-icon"],
          !1,
          this.openIds.includes(e.id)
        )}"
                                    aria-label="${e.name} menu toggle"
                                    aria-expanded="${this.openIds.includes(e.id)}"
                                    @click=${() => this._toggleOpenId(e.id)}
                                  >
                                    <atp-icon
                                      .height="${12}"
                                      .icon=${this.openIds.includes(e.id) ? "chevron-down" : "chevron-right"}
                                    ></atp-icon>
                                  </button>` : u}
                              ${e.route ? g`<a
                                    aria-current=${e.id === this.activeId || u}
                                    aria-expanded=${e.children?.length > 0 ? this.openIds.includes(e.id) : u}
                                    href="${e.route}"
                                    @click=${(A) => this._navigationHandler(A, e)}
                                    class="button-child"
                                  >
                                    ${e.name}
                                  </a>` : g`<button
                                    @click=${() => this._toggleOpenId(e.id)}
                                    class="button-child"
                                    aria-expanded="${this.openIds.includes(e.id)}"
                                  >
                                    ${e.name}
                                  </button>`}
                              ${e.children?.length > 0 && this.openIds.includes(e.id) ? g`<ul class="list list-grandchild">
                                    ${e.children.map(
          (A) => g`<li
                                          class="${this._getButtonClasses(
            ["list-item-grandchild"],
            A.id === this.activeId,
            this.openIds.includes(A.id)
          )}"
                                        >
                                          <a
                                            aria-current=${A.id === this.activeId || u}
                                            href="${A.route}"
                                            @click=${(i) => this._navigationHandler(i, A)}
                                            class="button-grandchild"
                                          >
                                            ${A.name}
                                          </a>
                                        </li>`
        )}
                                  </ul>` : u}
                            </li>`
      )}
                      </ul>` : u}
                </li>`
    )}
          </ul>
          ${this.secondaryItems?.length > 0 ? g`<div class="divider"></div>
                <ul class="list list-parent-alt">
                  ${this.secondaryItems.map(
      (t) => g`<li
                        class="${this._getButtonClasses(
        ["list-item-parent-alt"],
        t.id === this.activeId,
        !1
      )}"
                      >
                        <a
                          aria-current=${t.id === this.activeId || u}
                          class="button-parent-alt"
                          href="${t.route}"
                          @click=${(e) => this._navigationHandler(e, t)}
                        >
                          ${t.icon ? g`<atp-icon
                                .height=${t.icon.height}
                                .icon=${t.icon.icon}
                              ></atp-icon>` : u}
                          ${t.name}
                        </a>
                      </li>`
    )}
                </ul>` : u}
        </nav>
      </aside>
    `;
  }
  _setCustomColors() {
    return this.colorConfig ? `--atp-sidebar-item-hover: ${this.colorConfig.hover};
  --atp-sidebar-item-active: ${this.colorConfig.active};
  --atp-sidebar-item-selected: ${this.colorConfig.selected};
  --atp-sidebar-list-selected: ${this.colorConfig.selectedSection};` : "";
  }
  _onSlotChange() {
    const e = (this._buttonSlot?.assignedNodes({ flatten: !0 }) ?? []).some((A) => A.nodeType === Node.ELEMENT_NODE);
    this._buttonContent = e;
  }
  _toggleSidebar(t) {
    this.sidebarHidden = t, this.toggleAttribute("toggled", this.sidebarHidden);
  }
  _navigationHandler(t, e) {
    this.outputNavigationEvents && (t.preventDefault(), this.dispatchEvent(
      new CustomEvent("navigationEventOutput", { bubbles: !0, composed: !0, detail: e })
    ));
  }
  _toggleOpenId(t) {
    this.openIds.includes(t) ? this.openIds = this.openIds.filter((e) => e !== t) : this.openIds = [...this.openIds, t];
  }
  firstUpdated() {
    this.toggleAttribute("toggled", this.sidebarHidden);
  }
  updated(t) {
    super.updated(t), t.has("activeId") && this.updateComplete.then(() => {
      this.items.forEach((e) => {
        e.children?.forEach((A) => {
          (A.id === this.activeId || A.children?.some((i) => i.id === this.activeId)) && (this.openIds = [...this.openIds, A.id]);
        });
      });
    });
  }
  _containsActive(t) {
    return t.id === this.activeId || t.children?.some(
      (e) => e.id === this.activeId || e.children?.some((A) => A.id === this.activeId)
    );
  }
  _handleKeydown(t) {
    t.key === "Escape" && this._toggleSidebar(!0);
  }
  _getSidebarClass() {
    return E({
      "sidebar-wrapper": !0,
      "no-top-content": !this._buttonContent
    });
  }
  _getToggleClass() {
    return E({
      "icon-rotate": !this.sidebarHidden
    });
  }
  _getButtonClasses(t, e, A) {
    return E({
      "list-item-parent": t.includes("list-item-parent"),
      "list-item-parent-alt": t.includes("list-item-parent-alt"),
      "list-item-child": t.includes("list-item-child"),
      "list-item-grandchild": t.includes("list-item-grandchild"),
      "button-child-icon": t.includes("button-child-icon"),
      active: e,
      "is-open": A
    });
  }
};
de.styles = [y, a5];
we([
  l({ type: Array })
], de.prototype, "items", 2);
we([
  l()
], de.prototype, "activeId", 2);
we([
  l({ type: Array })
], de.prototype, "openIds", 2);
we([
  l({ type: Array })
], de.prototype, "secondaryItems", 2);
we([
  l({ type: Boolean })
], de.prototype, "sidebarHidden", 2);
we([
  l({ type: Object })
], de.prototype, "colorConfig", 2);
we([
  l({ type: Boolean })
], de.prototype, "outputNavigationEvents", 2);
we([
  Vt('slot[name="top-button"]')
], de.prototype, "_buttonSlot", 2);
de = we([
  Q("atp-sidebar")
], de);
const s5 = k`
  .status {
    display: flex;
    align-items: center;
    inline-size: fit-content;
    gap: var(--atp-space-xxs);
    color: var(--atp-content-primary-medium-enabled);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-s);
    font-weight: var(--atp-font-weight-regular);
    line-height: var(--atp-line-height-body-s);
  }

  .status.large {
    font-size: var(--atp-font-size-body-m);
    line-height: var(--atp-line-height-body-m);
    gap: var(--atp-space-xs);
  }

  .bullet {
    block-size: 0.6em;
    inline-size: 0.6em;
    border-radius: 50%;
    background-color: var(--atp-element-fill-green-strong-enabled);
  }

  .info .bullet {
    background-color: var(--atp-utility-primary-medium-enabled);
  }

  .warning .bullet {
    background-color: var(--atp-button-warning-medium-enabled);
  }

  .danger .bullet {
    background-color: var(--atp-button-danger-medium-enabled);
  }

  .status.large .bullet {
    block-size: 0.75em;
    inline-size: 0.75em;
  }

  .label-container {
    display: flex;
    flex-direction: column;
  }
`;
var o5 = Object.defineProperty, l5 = Object.getOwnPropertyDescriptor, yA = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? l5(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && o5(e, A, a), a;
}, g5 = /* @__PURE__ */ ((t) => (t.DANGER = "danger", t.SUCCESS = "success", t.INFO = "info", t.WARNING = "warning", t))(g5 || {}), d5 = /* @__PURE__ */ ((t) => (t.L = "large", t.M = "medium", t))(d5 || {});
let It = class extends b {
  constructor() {
    super(...arguments), this.label = "", this.color = "success", this.size = "medium";
  }
  render() {
    return g`
      <div class="${this._getClasses()}">
        <span class="bullet"></span>
        <div class="label-container">
          <span>${this.label}</span>
          <slot></slot>
        </div>
      </div>
    `;
  }
  _getClasses() {
    return E({ status: !0, [this.color]: !0, [this.size]: !0 });
  }
};
It.styles = [y, s5];
yA([
  l()
], It.prototype, "label", 2);
yA([
  l()
], It.prototype, "color", 2);
yA([
  l()
], It.prototype, "size", 2);
It = yA([
  Q("atp-status")
], It);
const C5 = k`
  .tab-set.fit-content {
    inline-size: fit-content;
  }

  .tab-bar,
  .tab-menus {
    display: flex;
    gap: var(--atp-space-xs);
  }

  .tab-bar {
    border-block-end: 1px solid var(--atp-element-border-primary-medium-enabled);
  }

  .tab-bar.fit-content {
    inline-size: fit-content;
  }

  .tab {
    all: unset;
    display: flex;
    flex-wrap: nowrap;
    gap: var(--atp-space-xs);
    align-items: center;
    block-size: var(--atp-tab-height);
    padding-block: 0;
    padding-inline: var(--atp-space-xs);
    color: var(--atp-button-primary-medium-enabled);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-m);
    font-weight: var(--atp-font-weight-regular);
    line-height: var(--atp-line-height-body-m);
    letter-spacing: var(--atp-letter-spacing-s);
    cursor: pointer;
    background: transparent;
    border-start-start-radius: var(--atp-border-radius-m);
    border-start-end-radius: var(--atp-border-radius-m);
    border-end-start-radius: 0;
    border-end-end-radius: 0;
    border-block-end: 2px solid transparent;
    transition: background-color var(--atp-transition-standard),
      color var(--atp-transition-standard), padding var(--atp-transition-standard);
  }

  .tab:hover,
  .tab:focus-visible {
    color: var(--atp-utility-primary-medium-hover);
  }

  .tab:focus-visible {
    outline: var(--atp-focus-width) solid var(--atp-focus-color);
    outline-offset: var(--atp-focus-outline-offset);
  }

  .tab:active {
    color: var(--atp-utility-primary-medium-pressed);
  }

  .tab-badge {
    display: flex;
    justify-content: center;
    align-items: center;
    block-size: var(--atp-space-s);
    min-inline-size: var(--atp-space-s);
    padding-block: 0;
    padding-inline: var(--atp-space-xxs);
    color: var(--atp-button-primary-medium-enabled);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-xs);
    font-weight: var(--atp-font-weight-medium);
    line-height: var(--atp-line-height-body-xs);
    background: var(--atp-element-fill-blue-medium-enabled);
    border-radius: var(--atp-border-radius-s);
    transition: background-color var(--atp-transition-standard),
      color var(--atp-transition-standard);
  }

  .tab.active {
    border-block-end: 2px solid var(--atp-element-fill-blue-strong-enabled);
    background-color: var(--atp-element-fill-blue-medium-enabled);
  }

  .tab.active .tab-badge {
    color: var(--atp-content-inverse-medium-enabled);
    background-color: var(--atp-element-fill-blue-strong-enabled);
  }

  .tab.disabled,
  .tab.disabled:is(:hover, :focus-visible, :active) {
    background: transparent;
    color: var(--atp-button-primary-medium-disabled);
    cursor: not-allowed;
  }

  .tab.disabled .tab-badge {
    color: var(--atp-button-primary-medium-disabled);
    background: var(--atp-element-fill-primary-strong-disabled);
  }

  .tab-panel {
    display: none;
  }

  .tab-panel.active {
    display: block;
    margin-block-start: var(--atp-tab-set-panel-margin-block-start, var(--atp-space-s));
  }

  /* segmented */
  .segmented {
    position: relative;
  }

  .segmented.size-medium {
    --atp-segmented-segment-height: var(--atp-segmented-segment-height-medium);
    --atp-segmented-gap: var(--atp-segmented-gap-medium);
    --atp-segmented-wrapper-padding-inline: var(--atp-segmented-wrapper-padding-inline-medium);
    --atp-segmented-segment-margin-block: var(--atp-space-xxxs);
    --atp-segmented-segment-margin-inline: 0;
    --atp-segmented-label-font-size: var(--atp-segmented-label-font-size-medium);
    --atp-segmented-label-line-height: var(--atp-segmented-label-line-height-medium);
  }

  .segmented.size-small {
    --atp-segmented-segment-height: var(--atp-segmented-segment-height-small);
    --atp-segmented-gap: var(--atp-segmented-gap-small);
    --atp-segmented-wrapper-padding-inline: var(--atp-segmented-wrapper-padding-inline-small);
    --atp-segmented-segment-margin-block: var(--atp-space-xxxs);
    --atp-segmented-segment-margin-inline: 0;
    --atp-segmented-label-font-size: var(--atp-segmented-label-font-size-small);
    --atp-segmented-label-line-height: var(--atp-segmented-label-line-height-small);
  }

  .segmented.color-default {
    --atp-segmented-segment-background-checked: var(
      --atp-segmented-segment-background-checked-default
    );
  }

  .segmented.color-utility-blue {
    --atp-segmented-segment-background-checked: var(
      --atp-segmented-segment-background-checked-utility-blue
    );
  }

  .segmented.color-slate {
    --atp-segmented-segment-background-checked: var(
      --atp-segmented-segment-background-checked-slate
    );
  }

  .segmented .tab-bar {
    display: inline-flex;
    gap: var(--atp-segmented-gap);
    z-index: var(--atp-z-index-base);
    padding-block: 0;
    padding-inline: var(--atp-segmented-wrapper-padding-inline);
    background: var(--atp-segmented-fill-weak-enabled);
    border: none;
    border-radius: var(--atp-segmented-wrapper-border-radius);
  }

  .segmented .tab-menus {
    position: absolute;
    inset-block: 0 var(--atp-segmented-segment-height);
    inset-inline: 0;
    max-block-size: var(--atp-segmented-segment-height);
    z-index: var(--atp-z-index-over-base);
    display: flex;
    gap: var(--atp-segmented-gap);
    pointer-events: none;
  }

  .segmented .tab,
  .segmented .menu-button-wrapper {
    --atp-segmented-icon-color: var(--atp-content-primary-medium-enabled);

    box-sizing: border-box;
    position: relative;
    block-size: var(--atp-segmented-segment-height);
    min-inline-size: var(--atp-segmented-segment-width);
    margin-block: var(--atp-segmented-segment-margin-block);
    margin-inline: var(--atp-segmented-segment-margin-inline);
    padding-block: var(--atp-segmented-segment-padding-block);
    padding-inline: var(--atp-segmented-segment-padding-inline);
    justify-content: center;
    border: none;
    border-radius: var(--atp-segmented-border-radius);
    font-size: var(--atp-segmented-label-font-size);
    font-weight: var(--atp-segmented-label-font-weight);
    line-height: var(--atp-segmented-label-line-height);
  }

  .segmented .tab.disabled,
  .segmented .tab.disabled:is(:hover, :focus-visible, :active) {
    --atp-segmented-icon-color: var(--atp-button-primary-medium-disabled);

    background: transparent;
    color: var(--atp-button-primary-medium-disabled);
    cursor: not-allowed;
  }

  .segmented .tab.icon-only {
    inline-size: var(--atp-segmented-segment-height);
    min-inline-size: var(--atp-segmented-segment-height);
    padding: 0;
  }

  .segmented .menu-button-wrapper {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    pointer-events: none;
  }

  .segmented .menu-button-wrapper .menu-button {
    visibility: hidden;
    position: relative;
    pointer-events: none;
    opacity: 0;
    transition: all var(--atp-transition-standard);
  }

  .segmented .menu-button.active {
    visibility: visible;
    pointer-events: auto;
    opacity: 1;
    transition: all var(--atp-transition-standard);
  }

  .segmented .menu-button-wrapper atp-dropdown {
    position: absolute;
    z-index: var(--atp-z-index-menu);
    inset-block-start: var(--atp-space-l);
    inset-inline-end: calc(-1 * var(--atp-space-s));
    block-size: auto;
    inline-size: auto;
  }

  /* shift the badge over so it doesn't overlap the menu button  */
  .segmented .tab.has-menu.has-badge.active {
    padding-inline-end: calc(2 * var(--atp-space-s) + var(--atp-space-xxs));
  }

  .segmented .tab:hover {
    background: var(--atp-segmented-fill-weak-hover);
    color: unset;
  }

  .segmented .tab:active {
    background: var(--atp-segmented-fill-weak-pressed);
  }

  .segmented .tab.active {
    --atp-segmented-icon-color: var(--atp-content-inverse-medium-enabled);

    color: var(--atp-segmented-segment-color-checked);
    background: var(--atp-segmented-segment-background-checked);
  }

  /* stylelint-disable no-descending-specificity  */
  .segmented .visually-hidden {
    position: absolute;
    block-size: 1px;
    inline-size: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  .segmented .tab-name {
    flex-grow: 9999;
    text-align: center;
  }

  .segmented .tab-badge {
    flex-grow: 1;
    color: var(--atp-segmented-badge-color);
    background: var(--atp-segmented-badge-background);
  }

  .segmented .active .tab-badge {
    color: var(--atp-segmented-badge-color-checked);
    background: var(--atp-segmented-badge-background-checked);
  }
`;
var c5 = Object.defineProperty, p5 = Object.getOwnPropertyDescriptor, Ne = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? p5(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && c5(e, A, a), a;
}, u5 = /* @__PURE__ */ ((t) => (t.DEFAULT = "default", t.SEGMENTED = "segmented", t))(u5 || {});
let Be = class extends b {
  constructor() {
    super(...arguments), this.tabs = [], this.isFullWidth = !1, this.activeIndex = 0, this.ariaLabel = null, this.appearance = "default", this.segmentSize = pe.LARGE, this.segmentColor = o1.DEFAULT, this._lastKeyPressed = "", this._activeDropdown = "", this._tabHandler = () => {
      this._lastKeyPressed === "Tab" && Array.from(this.renderRoot.querySelectorAll('[role="tab"]')).forEach((e, A) => {
        e.setAttribute("tabindex", A === this.activeIndex ? "0" : "-1");
      });
    };
  }
  render() {
    const t = [], e = [];
    return this.tabs.map(() => {
      t.push(Te()), e.push(Te());
    }), ((i) => {
      this.activeIndex = i;
    })(this.activeIndex), g`<div class="${this._getTabSetClasses()}">
      <div
        role="tablist"
        class="tab-bar ${this.isFullWidth ? "" : "fit-content"}"
        aria-label=${Z(this.ariaLabel)}
      >
        ${this.tabs?.map(
      (i, a) => g`
            <button
              @keydown=${this._onKeyDown}
              @click=${() => this._clickHandler(a)}
              class="${this._getTabClasses(i, a)}"
              ?disabled=${i.disabled}
              tabindex=${a === this.activeIndex ? 0 : -1}
              id="${e[a]}"
              aria-selected="${a === this.activeIndex}"
              aria-controls="${t[a]}"
              role="tab"
            >
              ${this._getTabContent(i)}
              ${i.badge && this.segmentSize !== pe.SMALL ? g`<span class="tab-badge">${i.badge}</span>` : ""}
            </button>
          `
    )}
      </div>

      ${Array(this.tabs.length).fill(0).map(
      (i, a) => g`<div
              class="${this._getTabPanelClasses(a)}"
              role="tabpanel"
              id="${t[a]}"
              aria-labelledby="${e[a]}"
            >
              <slot name="tabpanel${a}"></slot>
            </div>`
    )}

      ${this.appearance === "segmented" && this.segmentSize !== pe.SMALL ? g`
              <div class="tab-menus">
                ${this.tabs?.map((i, a) => i.menuItemsList ? g`
                        <div class="menu-button-wrapper">
                          <atp-button
                            .iconConfig=${{
      icon: "more-vertical",
      color: "var(--atp-neutral-0)",
      height: 16,
      label: "Button label"
    }}
                            appearance=${ue.TEXT}
                            class="${this._getTabMenuButtonClasses(a)}"
                            @clickEventOutput=${() => this._toggleDropdown(i.id, this._activeDropdown !== i.id)}
                          ></atp-button>
                          <atp-dropdown
                            id="dropdown-${i.id}"
                            .itemsList=${i.menuItemsList}
                            @dropdownClosedOutput=${() => this._toggleDropdown(i.id, !1)}
                          ></atp-dropdown>
                        </div>
                      ` : g`<div class="menu-button-wrapper"></div>`)}
              </div>
            ` : ""}
      </div>
    </div>`;
  }
  _getTabSetClasses() {
    return E({
      "tab-set": !0,
      [`${this.appearance}`]: !0,
      [`size-${this.segmentSize}`]: this.appearance === "segmented",
      [`color-${this.segmentColor}`]: this.appearance === "segmented",
      "fit-content": !this.isFullWidth
    });
  }
  _getTabClasses(t, e) {
    return E({
      tab: !0,
      active: e === this.activeIndex,
      disabled: t.disabled,
      "icon-only": this._showSegmentIcon(t),
      // segmented size small does not support badges or dropdown menus
      "has-menu": (t.menuItemsList?.length ?? 0) > 0 && this.segmentSize !== pe.SMALL,
      "has-badge": t.badge != null && this.segmentSize !== pe.SMALL
    });
  }
  _showSegmentIcon(t) {
    return this.appearance === "segmented" && !!t.iconConfig;
  }
  _getTabContent(t) {
    const e = t.iconConfig;
    return !this._showSegmentIcon(t) || !e ? g`<span class="tab-name">${t.name}</span>` : g`
      <atp-icon
        .icon=${e.icon}
        .color=${"var(--atp-segmented-icon-color)"}
        .height=${bi(this.segmentSize)}
        aria-hidden="true"
      ></atp-icon>
      <span class="tab-name visually-hidden">${t.name}</span>
    `;
  }
  _getTabPanelClasses(t) {
    return E({
      "tab-panel": !0,
      active: t === this.activeIndex
    });
  }
  _getTabMenuButtonClasses(t) {
    return E({
      "menu-button": !0,
      active: t === this.activeIndex
      // TODO: support disabled
    });
  }
  async _onKeyDown(t) {
    if (this._lastKeyPressed = t.key, t.key === "ArrowRight" || t.key === "ArrowLeft") {
      t.preventDefault();
      const e = t.target, A = Array.from(this.renderRoot.querySelectorAll('[role="tab"]'));
      let i = A.indexOf(e);
      const a = t.key === "ArrowRight" ? 1 : -1;
      i = (i + a + A.length) % A.length;
      let r = A[i];
      for (let n = 0; n < this.tabs.length && r.hasAttribute("disabled"); n++)
        i = (i + a + A.length) % A.length, r = A[i];
      A.forEach((n, s) => {
        n.setAttribute("tabindex", s === i ? "0" : "-1");
      }), r.focus();
    }
  }
  async connectedCallback() {
    super.connectedCallback(), await this.updateComplete, this._tabBarRef = this.renderRoot.querySelector('[role="tablist"]'), this._tabBarRef?.addEventListener("focusout", this._tabHandler);
  }
  disconnectedCallback() {
    this._tabBarRef?.removeEventListener("focusout", this._tabHandler), super.disconnectedCallback();
  }
  _clickHandler(t) {
    this.activeIndex = t, this.dispatchEvent(
      new CustomEvent("clickEventOutput", { bubbles: !0, composed: !0, detail: t })
    );
  }
  _toggleDropdown(t, e) {
    const A = this.renderRoot.querySelector(`#dropdown-${t}`);
    A && (e ? (this._activeDropdown = t, A.startKeyScrolling()) : (this._activeDropdown = "", A.disableKeyScrolling()));
  }
};
Be.styles = [y, C5];
Ne([
  l({ type: Array })
], Be.prototype, "tabs", 2);
Ne([
  l({ type: Boolean })
], Be.prototype, "isFullWidth", 2);
Ne([
  l({ type: Number })
], Be.prototype, "activeIndex", 2);
Ne([
  l({ type: String })
], Be.prototype, "ariaLabel", 2);
Ne([
  l()
], Be.prototype, "appearance", 2);
Ne([
  l()
], Be.prototype, "segmentSize", 2);
Ne([
  l()
], Be.prototype, "segmentColor", 2);
Be = Ne([
  Q("atp-tab-set")
], Be);
const h5 = k`
  :host {
    --atp-toggle-input-width: 34px;
    --atp-toggle-input-height: 20px;
    --atp-toggle-input-border-width: 2px;
    --atp-toggle-between-input-and-label: var(--atp-space-xs);
    --atp-toggle-label-line-height: var(--atp-line-height-body-s);
    --atp-toggle-label-padding-under-switch: calc(
      var(--atp-toggle-input-width) + var(--atp-toggle-between-input-and-label)
    );
    --atp-toggle-icon-width: 10px;

    --atp-toggle-bordered-label-padding-under-switch: calc(
      var(--atp-toggle-label-padding-under-switch) + var(--atp-toggle-bordered-padding-inline-start)
    );
    --atp-toggle-bordered-label-padding-opposite-switch: var(--atp-space-s);
    --atp-toggle-bordered-padding-inline-start: var(--atp-space-s);
  }

  .container {
    position: relative;
    display: inline-flex;
    align-items: center;
    min-block-size: var(--atp-toggle-input-height);
  }

  .input {
    position: absolute;
    block-size: 1px;
    inline-size: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  .label {
    color: var(--atp-content-primary-enabled-medium);
    cursor: pointer;
    display: inline-flex;
    flex-direction: column;
    min-block-size: var(--atp-toggle-input-height);
    margin-block: 0;
    padding-inline-start: var(--atp-toggle-label-padding-under-switch);
    font-size: var(--atp-font-size-body-s);
    font-weight: normal;
    line-height: var(--atp-toggle-label-line-height);
    vertical-align: middle;
    white-space: nowrap;
    border-radius: var(--atp-border-radius-m);
  }

  .label:focus-visible,
  .input:focus-visible + .label {
    border-radius: 1px;
    outline: var(--atp-focus-width) solid var(--atp-focus-color);
    outline-offset: var(--atp-focus-outline-offset);
  }

  /* the visible switch */
  .label::before {
    position: absolute;
    display: block;
    inset-block-start: 0;
    inset-inline-start: 0;
    background: currentcolor;
    border: var(--atp-toggle-input-border-width) solid currentcolor;
    border-radius: calc(var(--atp-toggle-input-height) / 2);

    /* color is used for border and background color via currentColor */
    color: var(--atp-element-fill-inverse-strong-enabled);
    content: '';
    padding-block: 0;
    padding-inline: 1px;
    inline-size: var(--atp-toggle-input-width);
    block-size: var(--atp-toggle-input-height);
    z-index: var(--atp-z-index-base);
    transition: color var(--atp-transition-standard);
  }

  .label:hover::before {
    color: var(--atp-element-fill-inverse-strong-hover);
  }

  .label:active::before {
    color: var(--atp-element-fill-inverse-strong-pressed);
  }

  /* the switch handle */
  .label::after {
    content: '';
    position: absolute;
    inset-block-start: var(--atp-toggle-input-border-width);
    inset-inline-start: var(--atp-toggle-input-border-width);
    display: block;
    background: var(--atp-element-fill-inverse-weak-enabled);
    block-size: calc(var(--atp-toggle-input-height) - (2 * var(--atp-toggle-input-border-width)));
    inline-size: calc(var(--atp-toggle-input-height) - (2 * var(--atp-toggle-input-border-width)));
    border-radius: 100%;
    z-index: calc(var(--atp-z-index-base) + 1);
    transition: all var(--atp-transition-standard);
  }

  /* description */
  .label-description {
    display: block;
    margin-block-start: var(--atp-space-xxs);
    font-size: var(--atp-font-size-body-xs);
    font-style: normal;
    font-weight: var(--atp-font-weight-light);
    line-height: var(--atp-line-height-body-xs);
    letter-spacing: -0.1px; /* TODO: replace with letter-spacing token */
  }

  /* on/checked state */
  .input:checked + .label::before {
    color: var(--atp-utility-primary-medium-enabled);
    background-color: currentcolor;
  }

  .input:checked + .label::after {
    inset-inline-start: calc(
      var(--atp-toggle-input-width) - var(--atp-toggle-input-height) +
        var(--atp-toggle-input-border-width)
    );
  }

  .input:checked + .label:hover::before {
    color: var(--atp-utility-primary-medium-hover);
  }

  .input:checked + .label:active::before {
    color: var(--atp-utility-primary-medium-pressed);
  }

  /* stylelint-disable no-descending-specificity -- so we can keep features grouped together */

  /* position */
  .container.label-position-inline-start .label {
    padding-inline: 0 var(--atp-toggle-label-padding-under-switch);
  }

  .container.label-position-inline-start .label::before {
    inset-inline: auto 0;
  }

  .container.label-position-inline-start .label::after {
    inset-inline: auto
      calc(
        var(--atp-toggle-input-width) - var(--atp-toggle-input-height) +
          var(--atp-toggle-input-border-width)
      );
  }

  .container.label-position-inline-start .input:checked + .label::after {
    inset-inline-end: var(--atp-toggle-input-border-width);
  }

  /* disabled state */
  .input:disabled + .label {
    cursor: not-allowed;
  }

  .input:disabled + .label::before {
    color: var(--atp-element-fill-inverse-strong-disabled);
  }

  .input:checked:disabled + .label::before {
    color: var(--atp-utility-primary-medium-disabled);
  }

  /* error/invalid */
  .input[aria-invalid] + .label::before {
    border-color: var(--atp-danger-primary-medium-enabled);
  }

  .input[aria-invalid] + .label:hover::before {
    border-color: var(--atp-danger-primary-medium-hover);
  }

  .input[aria-invalid] + .label:active::before {
    border-color: var(--atp-danger-primary-medium-pressed);
  }

  .input[aria-invalid]:checked + .label::before {
    color: var(--atp-danger-primary-strong-enabled);
    background-color: currentcolor;
    border-color: currentcolor;
  }

  .input[aria-invalid]:checked + .label:hover::before {
    color: var(--atp-danger-primary-strong-hover);
  }

  .input[aria-invalid]:checked + .label:active::before {
    color: var(--atp-danger-primary-strong-pressed);
  }

  .input[aria-invalid]:disabled + .label::before,
  .input[aria-invalid]:disabled + .label:hover::before,
  .input[aria-invalid]:disabled + .label:active::before {
    background-color: var(--atp-element-fill-inverse-strong-disabled);
    border-color: var(--atp-danger-primary-medium-disabled);
  }

  .input[aria-invalid]:checked:disabled + .label::before,
  .input[aria-invalid]:checked:disabled + .label:hover::before,
  .input[aria-invalid]:checked:disabled + .label:active::before {
    background-color: var(--atp-danger-primary-strong-disabled);
    border-color: var(--atp-danger-primary-strong-disabled);
  }

  /* bordered */
  .bordered .label {
    display: inline-block;
    min-block-size: calc(var(--atp-toggle-label-line-height) + var(--atp-toggle-input-height));
    padding-block: var(--atp-space-xs);
    padding-inline: var(--atp-toggle-bordered-label-padding-under-switch)
      var(--atp-toggle-bordered-label-padding-opposite-switch);
    border-radius: var(--atp-border-radius-s);
    border: 1px solid var(--atp-element-border-primary-medium-enabled);
    transition: all var(--atp-transition-standard);
  }

  .bordered .label::before {
    inset-block-start: var(--atp-space-xs);
    inset-inline-start: var(--atp-toggle-bordered-padding-inline-start);
  }

  .bordered .label::after {
    inset-block-start: calc(var(--atp-space-xs) + var(--atp-toggle-input-border-width));
    inset-inline-start: calc(
      var(--atp-toggle-bordered-padding-inline-start) + var(--atp-toggle-input-border-width)
    );
  }

  .bordered .input:checked + .label::after {
    inset-inline-start: calc(
      var(--atp-toggle-bordered-padding-inline-start) + var(--atp-toggle-input-height) -
        (2 * var(--atp-toggle-input-border-width))
    );
  }

  .bordered.label-position-inline-start.bordered .label {
    padding-inline: var(--atp-toggle-bordered-label-padding-opposite-switch)
      var(--atp-toggle-bordered-label-padding-under-switch);
  }

  .bordered.label-position-inline-start.bordered .label::before {
    inset-inline-end: var(--atp-toggle-bordered-label-padding-opposite-switch);
  }

  .bordered.label-position-inline-start.bordered .label::after {
    inset-inline: auto
      calc(
        var(--atp-toggle-bordered-label-padding-opposite-switch) + var(--atp-toggle-input-width) -
          var(--atp-toggle-input-height) + var(--atp-toggle-input-border-width)
      );
  }

  .bordered.label-position-inline-start.bordered .input:checked + .label::after {
    inset-inline: auto
      calc(
        var(--atp-toggle-bordered-label-padding-opposite-switch) +
          var(--atp-toggle-input-border-width)
      );
  }

  .bordered .input:checked + .label {
    background: var(--atp-element-fill-blue-medium-enabled);
    border-color: var(--atp-utility-primary-medium-enabled);
  }

  .bordered .input[aria-invalid]:checked + .label {
    background: var(--atp-element-fill-red-weak-enabled);
  }

  .bordered .label:hover,
  .bordered .input:checked + label:hover {
    border-color: var(--atp-utility-primary-medium-enabled);
  }

  .bordered .label:active,
  .bordered .input:checked + label:active {
    border-color: var(--atp-utility-primary-medium-pressed);
  }

  .bordered .input:disabled + .label,
  .bordered .input:checked:disabled + .label {
    background: var(--atp-element-fill-inverse-medium-disabled);
    border-color: var(--atp-element-border-primary-medium-enabled);
  }

  .bordered .input[aria-invalid] + .label {
    border-color: var(--atp-danger-primary-strong-enabled);
  }

  .bordered .input[aria-invalid] + .label:hover {
    background-color: var(--atp-element-fill-red-weak-hover);
    border-color: var(--atp-danger-primary-strong-hover);
  }

  .bordered .input[aria-invalid] + .label:active {
    background-color: var(--atp-element-fill-red-weak-pressed);
    border-color: var(--atp-danger-primary-strong-pressed);
  }

  .bordered .input[aria-invalid]:disabled + .label {
    background: var(--atp-element-fill-inverse-medium-disabled);
    border-color: var(--atp-element-border-primary-medium-enabled);
  }

  /* no label */
  .no-label {
    --atp-toggle-between-input-and-label: 0;

    /* stylelint-disable-next-line -- logical property value "inline-start" doesn't have baseline support yet */
    float: left;
    margin-inline-end: var(--atp-toggle-between-input-and-label);
  }

  .no-label .label {
    padding-inline-start: var(--atp-toggle-input-width);
  }

  .bordered.no-label .label {
    min-block-size: calc(1em + (2 * var(--atp-space-xs)));
    margin-inline-end: 0;
    padding: var(--atp-space-xs);
    padding-inline-end: calc(
      var(--atp-toggle-label-padding-under-switch) + var(--atp-toggle-bordered-padding-inline-start)
    );
  }

  /* stylelint-enable no-descending-specificity */
`;
var I5 = Object.defineProperty, m5 = Object.getOwnPropertyDescriptor, j = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? m5(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && I5(e, A, a), a;
}, B5 = /* @__PURE__ */ ((t) => (t.INLINE_START = "inline-start", t.INLINE_END = "inline-end", t.LEFT = "left", t.RIGHT = "right", t))(B5 || {});
let z = class extends b {
  constructor() {
    super(), this.labelPosition = "inline-end", this.checked = !1, this.disabled = !1, this.isError = !1, this.required = !1, this.bordered = !1, this.tabindex = 0, this._inputId = Te(this.id), this.inputRef = ot(), this._invalidMessage = "This toggle is required.", this._internals = this.attachInternals();
  }
  static get formAssociated() {
    return !0;
  }
  render() {
    const t = this.description ? g`<span class="label-description">${this.description}</span>` : "";
    return g`
      <div class=${this._getContainerStyleClasses()}>
        <input
          ${lt(this.inputRef)}
          class="input"
          type="checkbox"
          name=${Z(this.name)}
          value=${Z(this.value)}
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          ?required=${this.required}
          ?aria-required=${this.required}
          tabindex=${this.tabindex}
          id=${this._inputId}
          ?aria-invalid=${this.isError}
          aria-errormessage=${Z(this.ariaErrorMessage)}
          aria-label=${Z(this.ariaLabel)}
          @click=${this._onClick}
          @change=${this._onChange}
          @keydown=${this._onKeyDown}
          @blur=${this._onBlur}
          @focus=${this._onFocus}
        />
        <label
          class="label"
          for=${this._inputId}
          title=${this.label}
          @keydown=${this._onKeyDown}
          @blur=${this._onBlur}
          @focus=${this._onFocus}
        >
          ${this.label} ${t}
        </label>
      </div>
    `;
  }
  setValidity() {
    this._internals.setValidity(
      { valueMissing: this.required && !this.checked },
      this.required && !this.checked ? this._invalidMessage : ""
    ), this._internals.setFormValue(this.checked ? this.value ? this.value : "on" : null);
  }
  checkValidity() {
    return this._internals.checkValidity();
  }
  reportValidity() {
    this._internals.reportValidity();
  }
  get validity() {
    return this._internals.validity;
  }
  get validationMessage() {
    return this._internals.validationMessage;
  }
  updated(t) {
    (t.has("checked") || t.has("required")) && (this.setValidity(), this._internals.setFormValue(this.checked ? this.value ? this.value : "on" : null));
  }
  _onKeyDown(t) {
    if (t.code === "Space" && this.disabled == !1) {
      this._onChange();
      const e = this.inputRef.value;
      e.checked = !e.checked;
    }
    t.code === "Space" && t.preventDefault();
  }
  _onChange() {
    this.checked = !this.checked, this._internals.setFormValue(this.checked ? this.value ? this.value : "on" : null), this.dispatchEvent(new CustomEvent("changeEventOutput", { bubbles: !0, composed: !0 }));
  }
  _onClick() {
    this.dispatchEvent(new CustomEvent("clickEventOutput", { bubbles: !0, composed: !0 }));
  }
  _onFocus() {
    this.dispatchEvent(new CustomEvent("focusEventOutput", { bubbles: !0, composed: !0 }));
  }
  _onBlur() {
    this.dispatchEvent(new CustomEvent("blurEventOutput", { bubbles: !0, composed: !0 }));
  }
  /* TODO: update this to use the utility class that sets style classes */
  _getContainerStyleClasses() {
    return `container ${this.labelPosition === "inline-start" || this.labelPosition === "left" ? "label-position-inline-start" : ""} ${this.label ? "" : "no-label"} ${this.bordered ? "bordered" : ""}`.trim();
  }
  connectedCallback() {
    super.connectedCallback(), this.setValidity(), this._internals.setFormValue(this.checked ? this.value ? this.value : "on" : null);
  }
  formDisabledCallback(t) {
    this.disabled = t;
  }
};
z.styles = [y, h5];
j([
  l({ type: String || void 0 })
], z.prototype, "label", 2);
j([
  l({ type: String || void 0 })
], z.prototype, "labelPosition", 2);
j([
  l({ type: String || void 0 })
], z.prototype, "description", 2);
j([
  l({ type: String })
], z.prototype, "name", 2);
j([
  l({ type: String })
], z.prototype, "value", 2);
j([
  l({ type: String })
], z.prototype, "ariaLabel", 2);
j([
  l({ type: String })
], z.prototype, "ariaErrorMessage", 2);
j([
  l({ type: Boolean, reflect: !0 })
], z.prototype, "checked", 2);
j([
  l({ type: Boolean })
], z.prototype, "disabled", 2);
j([
  l({ type: Boolean, reflect: !0 })
], z.prototype, "isError", 2);
j([
  l({ type: Boolean, reflect: !0 })
], z.prototype, "required", 2);
j([
  l({ type: Boolean })
], z.prototype, "bordered", 2);
j([
  l({ type: Number })
], z.prototype, "tabindex", 2);
z = j([
  Q("atp-toggle")
], z);
const b5 = k`
  :host {
    --atp-tooltip-arrow-size: 6px;
  }

  .tooltip-container {
    position: relative;
    display: inline-block;
    border-radius: var(--atp-border-radius-s);
  }

  .tooltip-container:focus-visible {
    outline: var(--atp-focus-width) solid var(--atp-focus-color);
    outline-offset: var(--atp-focus-outline-offset);
  }

  .trigger-container {
    display: inline-block;
    cursor: help;
  }

  .trigger-container.cursor-pointer {
    cursor: pointer;
  }

  .display-block.tooltip-container,
  .display-block .trigger-container {
    display: block;
  }

  .tooltip {
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    overflow: hidden;
    block-size: fit-content;
    inline-size: fit-content;
    opacity: 0;
    transition: opacity var(--atp-transition-standard);
    cursor: help;
  }

  .tooltip.tooltip-shown {
    opacity: 1;
    transition: opacity var(--atp-transition-standard);
  }

  .tooltip-content {
    position: relative;
    display: inline-block;
    max-inline-size: 250px;
    padding-block: var(--atp-space-xxs);
    padding-inline: var(--atp-space-xs);
    color: var(--atp-content-inverse-medium-enabled);
    text-align: start;
    font-size: var(--atp-font-size-body-xs);
    line-height: var(--atp-line-height-body-xs);
    font-weight: var(--atp-font-weight-regular);
    background: var(--atp-element-fill-primary-strong-enabled);
    border-radius: var(--atp-border-radius-s);
    margin: var(--atp-tooltip-arrow-size);
  }

  .cursor-pointer .tooltip-content {
    cursor: pointer;
  }

  /* default position is above the trigger, so draw a downward arrow */
  .tooltip-content::after {
    box-sizing: border-box;
    content: '';
    display: block;
    position: absolute;
    inset-block-start: 100%;
    inset-inline-start: calc(50% - (var(--atp-tooltip-arrow-size) / 2));
    border-width: var(--atp-tooltip-arrow-size);
    border-style: solid;
    border-color: var(--atp-element-fill-primary-strong-enabled) transparent transparent transparent;
  }

  .arrow-right .tooltip-content::after {
    border-color: transparent transparent transparent var(--atp-element-fill-primary-strong-enabled);
    inset-block-start: calc(50% - var(--atp-tooltip-arrow-size));
    inset-inline-start: 100%;
  }

  .arrow-top .tooltip-content::after {
    border-color: transparent transparent var(--atp-element-fill-primary-strong-enabled) transparent;
    inset-block: auto 100%;
  }

  .arrow-left .tooltip-content::after {
    border-color: transparent var(--atp-element-fill-primary-strong-enabled) transparent transparent;
    inset-block-start: calc(50% - var(--atp-tooltip-arrow-size));
    inset-inline: auto 100%;
  }

  /* inline alignment */
  .inline-align-start .tooltip-content::after {
    inset-inline-start: var(--atp-space-xs);
  }

  .inline-align-end .tooltip-content::after {
    inset-inline: auto var(--atp-space-xs);
  }

  /* when tooltip content is empty */
  .tooltip-empty .trigger-container {
    cursor: initial;
  }

  .tooltip-empty .tooltip {
    display: none;
  }
`;
var E5 = Object.defineProperty, Q5 = Object.getOwnPropertyDescriptor, wA = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? Q5(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && E5(e, A, a), a;
}, f5 = /* @__PURE__ */ ((t) => (t.INLINE_BLOCK = "inline-block", t.BLOCK = "block", t))(f5 || {}), v5 = /* @__PURE__ */ ((t) => (t.CENTER = "center", t.START = "start", t.END = "end", t))(v5 || {}), k5 = /* @__PURE__ */ ((t) => (t.HELP = "help", t.POINTER = "pointer", t))(k5 || {});
let mt = class extends b {
  constructor() {
    super(...arguments), this.blockStartOffset = 0, this.inlineStartOffset = 0, this.inlineAlign = "center", this.cursor = "help", this.display = "inline-block", this._containerRef = ot(), this._triggerRef = ot(), this._tooltipRef = ot(), this._isTriggerActive = !1, this._isTooltipActive = !1, this._suppressShowAfterScrolling = !1, this._onEscape = (t) => {
      t.key === "Escape" && (t.preventDefault(), this._tooltipRef.value?.hidePopover());
    }, this._onScroll = () => {
      this._hideTooltip(), (this._isTooltipActive || this._isTriggerActive) && (this._suppressShowAfterScrolling = !0);
    };
  }
  render() {
    return g`<span
      ${lt(this._containerRef)}
      class="${this._getClassesContainer()}"
      @mouseover=${this._onTriggerMouseover}
      @mouseout=${this._onTriggerMouseout}
      @focus=${this._onTriggerFocus}
      @blur=${this._onTriggerBlur}
      tabindex="0"
    >
      <span
        ${lt(this._triggerRef)}
        class="${this._getClassesTrigger()}"
        popovertarget="tooltip"
        aria-describedby="tooltip"
        @mouseover=${this._onTooltipMouseover}
        @mouseout=${this._onTooltipMouseout}
      >
        <slot name="trigger"></slot>
      </span>

      <span ${lt(this._tooltipRef)} class="tooltip" id="tooltip" role="tooltip" popover="hint">
        <span class="tooltip-content">
          <slot name="tooltip" id="tooltipSlot"></slot>
        </span>
      </span>
    </span>`;
  }
  _showTooltip() {
    if (!this._suppressShowAfterScrolling) {
      this._tooltipRef.value?.showPopover();
      const t = this._triggerRef.value?.getBoundingClientRect(), e = this._triggerRef.value?.offsetHeight, A = this._triggerRef.value?.offsetWidth, i = this._tooltipRef.value?.offsetHeight, a = this._tooltipRef.value?.offsetWidth;
      if (this._tooltipRef.value && t) {
        this._tooltipRef.value.style.top = `${t.top - i}px`, this._tooltipRef.value.style.left = `${t.left + A / 2 - a / 2}px`;
        const r = this._tooltipRef.value?.getBoundingClientRect();
        r.top - this.blockStartOffset < 0 && (this._tooltipRef.value?.classList.add("arrow-top"), this._tooltipRef.value.style.top = `${t.bottom}px`), r.left - this.inlineStartOffset < 0 && (this._tooltipRef.value?.classList.add("arrow-left"), this._tooltipRef.value.style.left = `${t.right}px`, this._tooltipRef.value.style.top = `${t.top + (e - i) / 2}px`), r.right > window.innerWidth && (this._tooltipRef.value?.classList.add("arrow-right"), this._tooltipRef.value.style.left = `${t.left - a}px`, this._tooltipRef.value.style.top = `${t.top + (e - i) / 2}px`), !this._tooltipRef.value.classList.contains("arrow-left") && !this._tooltipRef.value.classList.contains("arrow-right") && (this.inlineAlign === "start" && (this._tooltipRef.value?.classList.add("inline-align-start"), this._tooltipRef.value.style.left = `${t.left}px`), this.inlineAlign === "end" && (this._tooltipRef.value?.classList.add("inline-align-end"), this._tooltipRef.value.style.left = `${t.left + A - a}px`));
      }
      this._tooltipRef.value?.classList.add("tooltip-shown");
    }
  }
  _checkWhetherToHideTooltip() {
    !this._isTriggerActive && !this._isTooltipActive && (this._hideTooltip(), this._suppressShowAfterScrolling = !1);
  }
  _hideTooltip() {
    this._tooltipRef.value?.hidePopover(), this._tooltipRef.value?.classList.remove(
      "tooltip-shown",
      "arrow-top",
      "arrow-right",
      "arrow-left"
    );
  }
  _onTriggerMouseover() {
    this._isTriggerActive = !0, this._showTooltip();
  }
  _onTriggerMouseout() {
    this._isTriggerActive = !1, this._checkWhetherToHideTooltip();
  }
  _onTriggerFocus() {
    this._isTriggerActive = !0, this._showTooltip();
  }
  _onTriggerBlur() {
    this._isTriggerActive = !1, this._checkWhetherToHideTooltip();
  }
  _onTooltipMouseover() {
    this._isTooltipActive = !0;
  }
  _onTooltipMouseout() {
    this._isTooltipActive = !1, this._checkWhetherToHideTooltip();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("keyup", this._onEscape), document.addEventListener("scroll", this._onScroll, !0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), window.removeEventListener("keyup", this._onEscape), document.removeEventListener("scroll", this._onScroll, !0);
  }
  firstUpdated() {
    const e = this.shadowRoot.querySelector("#tooltipSlot").assignedNodes();
    let A = 0;
    e.forEach((i) => {
      A += i.childNodes.length;
    }), A === 0 && this._containerRef.value.classList.add("tooltip-empty");
  }
  _getClassesContainer() {
    return E({
      "tooltip-container": !0,
      "cursor-pointer": this.cursor === "pointer",
      "display-block": this.display === "block"
      /* BLOCK */
    });
  }
  _getClassesTrigger() {
    return E({
      "trigger-container": !0,
      "cursor-pointer": this.cursor === "pointer",
      "display-block": this.display === "block"
      /* BLOCK */
    });
  }
};
mt.styles = [y, b5];
wA([
  l({ type: Number })
], mt.prototype, "blockStartOffset", 2);
wA([
  l({ type: Number })
], mt.prototype, "inlineStartOffset", 2);
wA([
  l()
], mt.prototype, "display", 2);
mt = wA([
  Q("atp-tooltip")
], mt);
const y5 = k`
  .button-split {
    box-sizing: border-box;
    display: inline-flex;
    color: var(--atp-content-primary-strong-enabled);
    white-space: nowrap;
    background: transparent;
    border: 1px solid transparent;
    border-radius: var(--atp-border-radius-m);
    transition: all var(--atp-transition-standard);
  }

  .button-split.disabled {
    cursor: default;
    opacity: 0.5;
    text-decoration: none;
  }

  .button {
    --atp-icon-fill: currentColor;

    gap: var(--atp-space-xxs);
  }

  .reversed .button {
    flex-direction: row-reverse;
  }

  .menu {
    --atp-icon-fill: currentColor;
  }

  .half {
    box-sizing: border-box;
    appearance: none;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: inherit;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all var(--atp-transition-standard);
  }

  .half:first-child {
    border-start-start-radius: var(--atp-border-radius-m);
    border-end-start-radius: var(--atp-border-radius-m);
  }

  .half:last-child {
    border-start-end-radius: var(--atp-border-radius-m);
    border-end-end-radius: var(--atp-border-radius-m);
  }

  .half:focus-visible,
  .half:has(.check:focus-visible) {
    outline: none;
    box-shadow: inset 0 0 0 2px var(--atp-focus-color);
  }

  .button-split.disabled .half {
    cursor: default;
  }

  .button-split.disabled:hover {
    border: 1px solid var(--atp-button-secondary-medium-enabled);
  }

  /* stylelint-disable no-descending-specificity -- keep appearance and size styling grouped together */

  /* appearance */
  .fill {
    border-color: white;
  }

  .fill .half {
    color: var(--atp-button-inverse-medium-enabled);
    background-color: var(--atp-button-primary-medium-enabled);
  }

  .fill .half:hover,
  .fill .half:focus-visible {
    background-color: var(--atp-button-primary-medium-hover);
  }

  .fill .half:active {
    background-color: var(--atp-button-primary-medium-pressed);
  }

  .fill.disabled .half,
  .fill.disabled .half:is(:hover, :focus-visible, :active) {
    background-color: var(--atp-button-primary-medium-disabled);
  }

  .fill .menu {
    border-inline-start-color: var(--atp-button-inverse-enabled);
  }

  .outline {
    border-color: var(--atp-button-secondary-medium-enabled);
  }

  .outline:hover,
  .outline:has(:focus-visible) {
    border-color: var(--atp-button-primary-medium-enabled);
  }

  .outline .half {
    color: var(--atp-button-primary-medium-enabled);
    background-color: var(--atp-button-secondary-medium-enabled);
  }

  .outline .half:hover,
  .outline .half:focus-visible {
    background: var(--atp-button-secondary-medium-hover);
  }

  .outline .half:active {
    background: var(--atp-button-secondary-medium-pressed);
  }

  .outline.disabled .half,
  .outline.disabled .half:is(:hover, :focus-visible, :active) {
    border-color: transparent;
    background: var(--atp-button-secondary-medium-disabled);
    color: var(--atp-button-primary-medium-disabled);
  }

  .outline .menu {
    border-inline-start-color: var(--atp-button-primary-medium-enabled);
  }

  .text .half {
    color: var(--atp-button-primary-medium-enabled);
    background-color: transparent;
    overflow: visible;
  }

  .text .half:is(:hover, :focus-visible, :active) {
    text-decoration: underline;
  }

  .text.disabled .half:is(:hover, :focus-visible, :active) {
    text-decoration: none;
  }

  .text .half.light {
    color: var(--atp-content-inverse-medium-enabled);
  }

  /* sizes */
  .large .half {
    padding-block: var(--atp-button-padding-block-large);
    padding-inline: var(--atp-button-padding-block-large);
    block-size: var(--atp-button-block-size-large);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-l);
    font-weight: var(--atp-font-weight-semibold);
    line-height: var(--atp-line-height-body-l);
  }

  .medium .half {
    padding: var(--atp-space-xs);
    block-size: var(--atp-space-l);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-s);
    font-weight: var(--atp-font-weight-semibold);
    line-height: var(--atp-line-height-body-s);
  }

  .small .half {
    padding-block: 0;
    padding-inline: var(--atp-space-xs);
    block-size: var(--atp-space-m);
    font-family: var(--atpco-font-family);
    font-size: var(--atp-font-size-body-s);
    font-weight: var(--atp-font-weight-semibold);
    line-height: var(--atp-line-height-body-s);
  }
  /* stylelint-enable no-descending-specificity -- keep appearance and size styling grouped together */

  /* favorite */
  .check,
  .label-text {
    border: 0;
    padding: 0;
    margin: 0;
    position: absolute !important;
    block-size: 1px;
    inline-size: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  .favorite-wrapper {
    position: relative;
    display: inline-flex;
  }

  /* stylelint-disable no-descending-specificity -- keep favorite icon styling grouped together */
  .favorite-icon-empty {
    --atp-icon-fill: transparent;

    position: absolute;
    z-index: var(--atp-z-index-over-base);
  }

  .button-split:not(.disabled) .button:hover .favorite-icon-empty {
    --atp-icon-fill: var(--atp-slate-500);
  }

  .button-split:not(.disabled) .button:active .favorite-icon-empty {
    --atp-icon-fill: var(--atp-slate-600);
  }

  .favorite-icon-filled {
    --atp-icon-fill: var(--atp-slate-400);

    position: relative;
    z-index: var(--atp-z-index-base);
  }

  .button-split:not(.disabled) .button:active .favorite-icon-filled {
    --atp-icon-fill: var(--atp-slate-500);
  }

  .button:has(.check:checked) .favorite-icon-empty {
    --atp-icon-fill: var(--atp-slate-600);
  }

  .button-split:not(.disabled) .button:has(.check:checked):hover .favorite-icon-empty {
    --atp-icon-fill: var(--atp-slate-700);
  }

  .button-split:not(.disabled) .button:has(.check:checked):active .favorite-icon-empty {
    --atp-icon-fill: var(--atp-slate-700);
  }

  .button:has(.check:checked) .favorite-icon-filled {
    --atp-icon-fill: var(--atp-orange-400);
  }

  .button-split:not(.disabled) .button:has(.check:checked):hover .favorite-icon-filled {
    --atp-icon-fill: var(--atp-orange-500);
  }

  .button-split:not(.disabled) .button:has(.check:checked):active .favorite-icon-filled {
    --atp-icon-fill: var(--atp-orange-600);
  }
  /* stylelint-enable no-descending-specificity -- keep favorite icon styling grouped together */
`;
var w5 = Object.defineProperty, S5 = Object.getOwnPropertyDescriptor, re = (t, e, A, i) => {
  for (var a = i > 1 ? void 0 : i ? S5(e, A) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (a = (i ? n(e, A, a) : n(a)) || a);
  return i && a && w5(e, A, a), a;
};
let K = class extends b {
  constructor() {
    super(...arguments), this.label = "", this.menuLabel = "", this.disabled = !1, this.appearance = ue.FILL, this.size = sA.MEDIUM, this.iconPosition = zt.RIGHT, this.favorite = !1, this.checked = !1, this.dataTrackingId = null;
  }
  render() {
    return g`
      <div class=${this._getClasses()}>
        ${this.favorite ? g`
              <label class="button half" for="check">
                <input
                  type="checkbox"
                  id="check"
                  class="check"
                  .checked=${this.checked}
                  ?disabled=${this.disabled}
                  @click=${this._onButtonClick}
                  @blur=${this._onButtonBlur}
                  @focus=${this._onButtonFocus}
                  @change=${this._onButtonChange}
                  aria-label="${this.iconConfig?.label ?? ""}"
                  data-tracking-id=${Z(this.dataTrackingId)}
                />

                ${this.favorite ? g`
                      <span class="favorite-wrapper" aria-hidden="true">
                        <atp-icon
                          class="favorite-icon-empty"
                          color="inherit"
                          icon="star"
                          height="16"
                        ></atp-icon>
                        <atp-icon
                          class="favorite-icon-filled"
                          color="inherit"
                          icon="star-filled"
                          height="16"
                        ></atp-icon>
                      </span>
                    ` : ""}
                <span class="label-text"> ${this.label} </span>
              </label>
            ` : g` <button
              class="button half"
              ?disabled=${this.disabled}
              @click=${this._onButtonClick}
              @blur=${this._onButtonBlur}
              @focus=${this._onButtonFocus}
              data-tracking-id=${Z(this.dataTrackingId)}
            >
              ${this.iconConfig ? g`<atp-icon
                    aria-hidden=${!0}
                    .color="${this.iconConfig.color}"
                    .icon="${this.iconConfig.icon}"
                    .height="${this.iconConfig.height}"
                  ></atp-icon>` : ""}
              ${this.label}
            </button>`}
        <button
          id="menu"
          class="menu half"
          ?disabled=${this.disabled}
          @click=${this._onMenuClick}
          @blur=${this._onMenuBlur}
          @focus=${this._onMenuFocus}
        >
          <span class="label-text"> ${this.menuLabel} </span>
          <atp-icon icon="chevron-down" height="16"></atp-icon>
        </button>
      </div>
    `;
  }
  _onButtonClick() {
    this.dispatchEvent(new CustomEvent("buttonClickEventOutput", { bubbles: !0, composed: !0 }));
  }
  _onButtonFocus() {
    this.dispatchEvent(new CustomEvent("buttonFocusEventOutput", { bubbles: !0, composed: !0 }));
  }
  _onButtonBlur() {
    this.dispatchEvent(new CustomEvent("buttonBlurEventOutput", { bubbles: !0, composed: !0 }));
  }
  _onButtonChange(t) {
    this.checked = t.target.checked, this.dispatchEvent(new CustomEvent("buttonChangeEventOutput", { bubbles: !0, composed: !0 }));
  }
  _onMenuClick() {
    this.dispatchEvent(new CustomEvent("menuClickEventOutput", { bubbles: !0, composed: !0 }));
  }
  _onMenuFocus() {
    this.dispatchEvent(new CustomEvent("menuFocusEventOutput", { bubbles: !0, composed: !0 }));
  }
  _onMenuBlur() {
    this.dispatchEvent(new CustomEvent("menuBlurEventOutput", { bubbles: !0, composed: !0 }));
  }
  focusButton() {
    this._buttonElement?.focus();
  }
  blurButton() {
    this._buttonElement?.blur();
  }
  _getClasses() {
    return E({
      "button-split": !0,
      [`${this.size}`]: !0,
      [`${this.appearance}`]: !0,
      reversed: this.iconConfig && this.iconPosition === zt.RIGHT,
      icon: this.iconConfig && !this.label,
      disabled: this.disabled,
      favorite: this.favorite
    });
  }
};
K.styles = [y, y5];
re([
  l()
], K.prototype, "label", 2);
re([
  l()
], K.prototype, "menuLabel", 2);
re([
  l({ type: Boolean })
], K.prototype, "disabled", 2);
re([
  l()
], K.prototype, "appearance", 2);
re([
  l()
], K.prototype, "size", 2);
re([
  l()
], K.prototype, "iconPosition", 2);
re([
  l({ type: Object })
], K.prototype, "iconConfig", 2);
re([
  l({ type: Boolean })
], K.prototype, "favorite", 2);
re([
  l({ type: Boolean, reflect: !0 })
], K.prototype, "checked", 2);
re([
  l({ type: String })
], K.prototype, "dataTrackingId", 2);
re([
  Vt("button")
], K.prototype, "_buttonElement", 2);
K = re([
  Q("atp-button-split")
], K);
export {
  ve as Alert,
  Qr as AlertAppearance,
  Er as AlertColor,
  fr as AlertRole,
  pt as AnchorBar,
  Nt as Breadcrumbs,
  Jr as BreadcrumbsSize,
  L as Button,
  ue as ButtonAppearance,
  sA as ButtonSize,
  K as ButtonSplit,
  Ae as Card,
  Hr as CardBorderDecoration,
  xr as CardColor,
  Or as CardDensity,
  Zr as CardDivider,
  lA as CardFooter,
  oA as CardHeader,
  Tr as CardHeaderFill,
  F as Checkbox,
  P as Datepicker,
  he as Dialog,
  ho as DialogDrawer,
  uo as DialogPosition,
  uA as Divider,
  bo as DividerOrientation,
  O as Dropdown,
  fa as DropdownFilterMatching,
  va as DropdownFilterPriority,
  so as DropdownPosition,
  ka as DropdownSelectionMode,
  Ie as FileUpload,
  U as Header,
  So as HeaderLogoType,
  fe as Icon,
  zt as IconPosition,
  ci as Input,
  T as InputField,
  oo as InputSize,
  B5 as LabelPosition,
  hA as ListBounded,
  _A as ListBoundedItem,
  Oe as MediaObject,
  Ho as MediaObjectColor,
  We as Meter,
  No as MeterAppearance,
  me as Pill,
  Uo as PillAppearance,
  Po as PillColor,
  ht as Progress,
  Xo as ProgressAppearance,
  W as RadioButtonGroup,
  e5 as RadioButtonGroupAppearance,
  $o as RadioButtonGroupDirection,
  He as SecondaryNav,
  o1 as SegmentColor,
  pe as SegmentSize,
  de as Sidebar,
  Xe as Spinner,
  Ke as SpinnerColor,
  ct as SpinnerSize,
  It as Status,
  g5 as StatusColor,
  d5 as StatusSize,
  u5 as TabAppearance,
  Be as TabSet,
  ye as Tag,
  qs as TagAppearance,
  _s as TagColor,
  z as Toggle,
  mt as Tooltip,
  k5 as TooltipCursor,
  f5 as TooltipDisplay,
  v5 as TooltipInlineAlign,
  lr as VisualColor,
  Qe as VisualPosition,
  gr as VisualSize
};
