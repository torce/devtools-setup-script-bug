import { defineComponent, ref, openBlock, createElementBlock, Fragment, createElementVNode, toDisplayString, pushScopeId, popScopeId, createTextVNode } from "vue";
const _withScopeId$2 = (n) => (pushScopeId("data-v-5c34d35e"), n = n(), popScopeId(), n);
const _hoisted_1$2 = { class: "card" };
const _hoisted_2$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" Edit "),
  /* @__PURE__ */ createElementVNode("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ createTextVNode(" to test HMR ")
], -1));
const _hoisted_3$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" Check out "),
  /* @__PURE__ */ createElementVNode("a", {
    href: "https://vuejs.org/guide/quick-start.html#local",
    target: "_blank"
  }, "create-vue"),
  /* @__PURE__ */ createTextVNode(", the official Vue + Vite starter ")
], -1));
const _hoisted_4$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" Install "),
  /* @__PURE__ */ createElementVNode("a", {
    href: "https://github.com/johnsoncodehk/volar",
    target: "_blank"
  }, "Volar"),
  /* @__PURE__ */ createTextVNode(" in your IDE for a better DX ")
], -1));
const _hoisted_5$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1));
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HelloWorldSetup",
  props: {
    msg: null
  },
  setup(__props) {
    const count = ref(0);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("h1", null, toDisplayString(__props.msg), 1),
        createElementVNode("div", _hoisted_1$2, [
          createElementVNode("button", {
            type: "button",
            onClick: _cache[0] || (_cache[0] = ($event) => count.value++)
          }, "count is " + toDisplayString(count.value), 1),
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
const _withScopeId$1 = (n) => (pushScopeId("data-v-6bd067a4"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "card" };
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" Edit "),
  /* @__PURE__ */ createElementVNode("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ createTextVNode(" to test HMR ")
], -1));
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" Check out "),
  /* @__PURE__ */ createElementVNode("a", {
    href: "https://vuejs.org/guide/quick-start.html#local",
    target: "_blank"
  }, "create-vue"),
  /* @__PURE__ */ createTextVNode(", the official Vue + Vite starter ")
], -1));
const _hoisted_4$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" Install "),
  /* @__PURE__ */ createElementVNode("a", {
    href: "https://github.com/johnsoncodehk/volar",
    target: "_blank"
  }, "Volar"),
  /* @__PURE__ */ createTextVNode(" in your IDE for a better DX ")
], -1));
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1));
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HelloWorldSetupExpose",
  props: {
    msg: null
  },
  setup(__props, { expose }) {
    const count = ref(0);
    expose({
      count
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("h1", null, toDisplayString(__props.msg), 1),
        createElementVNode("div", _hoisted_1$1, [
          createElementVNode("button", {
            type: "button",
            onClick: _cache[0] || (_cache[0] = ($event) => count.value++)
          }, "count is " + toDisplayString(count.value), 1),
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
const _sfc_main = defineComponent({
  props: {
    msg: { type: String, required: true }
  },
  setup({ msg }) {
    const count = ref(0);
    return {
      msg,
      count
    };
  }
});
const HelloWorldDefine_vue_vue_type_style_index_0_scoped_0140d2c5_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-0140d2c5"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "card" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" Edit "),
  /* @__PURE__ */ createElementVNode("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ createTextVNode(" to test HMR ")
], -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" Check out "),
  /* @__PURE__ */ createElementVNode("a", {
    href: "https://vuejs.org/guide/quick-start.html#local",
    target: "_blank"
  }, "create-vue"),
  /* @__PURE__ */ createTextVNode(", the official Vue + Vite starter ")
], -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" Install "),
  /* @__PURE__ */ createElementVNode("a", {
    href: "https://github.com/johnsoncodehk/volar",
    target: "_blank"
  }, "Volar"),
  /* @__PURE__ */ createTextVNode(" in your IDE for a better DX ")
], -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("h1", null, toDisplayString(_ctx.msg), 1),
    createElementVNode("div", _hoisted_1, [
      createElementVNode("button", {
        type: "button",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.count++)
      }, "count is " + toDisplayString(_ctx.count), 1),
      _hoisted_2
    ]),
    _hoisted_3,
    _hoisted_4,
    _hoisted_5
  ], 64);
}
const HelloWorldDefine = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0140d2c5"]]);
export {
  HelloWorldDefine,
  HelloWorldSetup,
  HelloWorldSetupExpose
};
