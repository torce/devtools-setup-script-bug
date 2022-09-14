(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.MyLib = {}, global.Vue));
})(this, function(exports2, vue) {
  "use strict";
  const _withScopeId$2 = (n) => (vue.pushScopeId("data-v-5c34d35e"), n = n(), vue.popScopeId(), n);
  const _hoisted_1$2 = { class: "card" };
  const _hoisted_2$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ vue.createElementVNode("p", null, [
    /* @__PURE__ */ vue.createTextVNode(" Edit "),
    /* @__PURE__ */ vue.createElementVNode("code", null, "components/HelloWorld.vue"),
    /* @__PURE__ */ vue.createTextVNode(" to test HMR ")
  ], -1));
  const _hoisted_3$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ vue.createElementVNode("p", null, [
    /* @__PURE__ */ vue.createTextVNode(" Check out "),
    /* @__PURE__ */ vue.createElementVNode("a", {
      href: "https://vuejs.org/guide/quick-start.html#local",
      target: "_blank"
    }, "create-vue"),
    /* @__PURE__ */ vue.createTextVNode(", the official Vue + Vite starter ")
  ], -1));
  const _hoisted_4$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ vue.createElementVNode("p", null, [
    /* @__PURE__ */ vue.createTextVNode(" Install "),
    /* @__PURE__ */ vue.createElementVNode("a", {
      href: "https://github.com/johnsoncodehk/volar",
      target: "_blank"
    }, "Volar"),
    /* @__PURE__ */ vue.createTextVNode(" in your IDE for a better DX ")
  ], -1));
  const _hoisted_5$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ vue.createElementVNode("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1));
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    __name: "HelloWorldSetup",
    props: {
      msg: null
    },
    setup(__props) {
      const count = vue.ref(0);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("h1", null, vue.toDisplayString(__props.msg), 1),
          vue.createElementVNode("div", _hoisted_1$2, [
            vue.createElementVNode("button", {
              type: "button",
              onClick: _cache[0] || (_cache[0] = ($event) => count.value++)
            }, "count is " + vue.toDisplayString(count.value), 1),
            _hoisted_2$2
          ]),
          _hoisted_3$2,
          _hoisted_4$2,
          _hoisted_5$2
        ], 64);
      };
    }
  });
  const HelloWorldSetup_vue_vue_type_style_index_0_scoped_5c34d35e_lang = "";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const HelloWorldSetup = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5c34d35e"]]);
  const _withScopeId$1 = (n) => (vue.pushScopeId("data-v-6bd067a4"), n = n(), vue.popScopeId(), n);
  const _hoisted_1$1 = { class: "card" };
  const _hoisted_2$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ vue.createElementVNode("p", null, [
    /* @__PURE__ */ vue.createTextVNode(" Edit "),
    /* @__PURE__ */ vue.createElementVNode("code", null, "components/HelloWorld.vue"),
    /* @__PURE__ */ vue.createTextVNode(" to test HMR ")
  ], -1));
  const _hoisted_3$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ vue.createElementVNode("p", null, [
    /* @__PURE__ */ vue.createTextVNode(" Check out "),
    /* @__PURE__ */ vue.createElementVNode("a", {
      href: "https://vuejs.org/guide/quick-start.html#local",
      target: "_blank"
    }, "create-vue"),
    /* @__PURE__ */ vue.createTextVNode(", the official Vue + Vite starter ")
  ], -1));
  const _hoisted_4$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ vue.createElementVNode("p", null, [
    /* @__PURE__ */ vue.createTextVNode(" Install "),
    /* @__PURE__ */ vue.createElementVNode("a", {
      href: "https://github.com/johnsoncodehk/volar",
      target: "_blank"
    }, "Volar"),
    /* @__PURE__ */ vue.createTextVNode(" in your IDE for a better DX ")
  ], -1));
  const _hoisted_5$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ vue.createElementVNode("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1));
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "HelloWorldSetupExpose",
    props: {
      msg: null
    },
    setup(__props, { expose }) {
      const count = vue.ref(0);
      expose({
        count
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("h1", null, vue.toDisplayString(__props.msg), 1),
          vue.createElementVNode("div", _hoisted_1$1, [
            vue.createElementVNode("button", {
              type: "button",
              onClick: _cache[0] || (_cache[0] = ($event) => count.value++)
            }, "count is " + vue.toDisplayString(count.value), 1),
            _hoisted_2$1
          ]),
          _hoisted_3$1,
          _hoisted_4$1,
          _hoisted_5$1
        ], 64);
      };
    }
  });
  const HelloWorldSetupExpose_vue_vue_type_style_index_0_scoped_6bd067a4_lang = "";
  const HelloWorldSetupExpose = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6bd067a4"]]);
  const _sfc_main = vue.defineComponent({
    props: {
      msg: { type: String, required: true }
    },
    setup({ msg }) {
      const count = vue.ref(0);
      return {
        msg,
        count
      };
    }
  });
  const HelloWorldDefine_vue_vue_type_style_index_0_scoped_0140d2c5_lang = "";
  const _withScopeId = (n) => (vue.pushScopeId("data-v-0140d2c5"), n = n(), vue.popScopeId(), n);
  const _hoisted_1 = { class: "card" };
  const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("p", null, [
    /* @__PURE__ */ vue.createTextVNode(" Edit "),
    /* @__PURE__ */ vue.createElementVNode("code", null, "components/HelloWorld.vue"),
    /* @__PURE__ */ vue.createTextVNode(" to test HMR ")
  ], -1));
  const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("p", null, [
    /* @__PURE__ */ vue.createTextVNode(" Check out "),
    /* @__PURE__ */ vue.createElementVNode("a", {
      href: "https://vuejs.org/guide/quick-start.html#local",
      target: "_blank"
    }, "create-vue"),
    /* @__PURE__ */ vue.createTextVNode(", the official Vue + Vite starter ")
  ], -1));
  const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("p", null, [
    /* @__PURE__ */ vue.createTextVNode(" Install "),
    /* @__PURE__ */ vue.createElementVNode("a", {
      href: "https://github.com/johnsoncodehk/volar",
      target: "_blank"
    }, "Volar"),
    /* @__PURE__ */ vue.createTextVNode(" in your IDE for a better DX ")
  ], -1));
  const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1));
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("h1", null, vue.toDisplayString(_ctx.msg), 1),
      vue.createElementVNode("div", _hoisted_1, [
        vue.createElementVNode("button", {
          type: "button",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.count++)
        }, "count is " + vue.toDisplayString(_ctx.count), 1),
        _hoisted_2
      ]),
      _hoisted_3,
      _hoisted_4,
      _hoisted_5
    ], 64);
  }
  const HelloWorldDefine = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0140d2c5"]]);
  exports2.HelloWorldDefine = HelloWorldDefine;
  exports2.HelloWorldSetup = HelloWorldSetup;
  exports2.HelloWorldSetupExpose = HelloWorldSetupExpose;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
