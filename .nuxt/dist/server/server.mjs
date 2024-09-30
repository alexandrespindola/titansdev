import { effectScope, reactive, hasInjectionContext, getCurrentInstance, inject, toRef, version, unref, h, nextTick, shallowRef, shallowReactive, isReadonly, isRef, isShallow, isReactive, toRaw, defineComponent, provide, ref, watch, Suspense, Transition, useSSRContext, defineAsyncComponent, mergeProps, onErrorCaptured, onServerPrefetch, createVNode, resolveDynamicComponent, createApp } from "vue";
import { useRuntimeConfig as useRuntimeConfig$1 } from "#internal/nitro";
import { $fetch } from "ofetch";
import { createHooks } from "hookable";
import { getContext } from "unctx";
import { sanitizeStatusCode, createError as createError$1 } from "h3";
import { getActiveHead } from "unhead";
import { defineHeadPlugin } from "@unhead/shared";
import { START_LOCATION, createMemoryHistory, createRouter, RouterView } from "vue-router";
import { withQuery, hasProtocol, parseURL, isScriptProtocol, joinURL } from "ufo";
import { defu } from "defu";
import "klona";
import "devalue";
import { ssrRenderComponent, ssrRenderSuspense, ssrRenderVNode } from "vue/server-renderer";
const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app", {
  asyncContext: false
});
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.10.1";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      once: /* @__PURE__ */ new Set(),
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    runWithContext: (fn) => nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn)),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
      nuxtApp.ssrContext._payloadReducers = {};
      nuxtApp.payload.path = nuxtApp.ssrContext.url;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin2.dependsOn) == null ? void 0 : _a2.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.push(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
// @__NO_SIDE_EFFECTS__
function tryUseNuxtApp() {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || nuxtAppCtx.tryUse();
  return nuxtAppInstance || null;
}
// @__NO_SIDE_EFFECTS__
function useNuxtApp() {
  const nuxtAppInstance = /* @__PURE__ */ tryUseNuxtApp();
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return (/* @__PURE__ */ useNuxtApp()).$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = /* @__PURE__ */ useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, (/* @__PURE__ */ useNuxtApp())._route);
  }
  return (/* @__PURE__ */ useNuxtApp())._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if ((/* @__PURE__ */ useNuxtApp())._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : withQuery(to.path || "/", to.query || {}) + (to.hash || "");
  if (options == null ? void 0 : options.open) {
    return Promise.resolve();
  }
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const protocol = parseURL(toPath).protocol;
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef((/* @__PURE__ */ useNuxtApp()).payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const error2 = useError();
    if (false)
      ;
    error2.value = error2.value || nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
version.startsWith("3");
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = "") {
  if (ref2 instanceof Promise)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    }
  }
});
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey$1] = handler;
}
function injectHead() {
  if (globalKey$1 in _global) {
    return _global[globalKey$1]();
  }
  const head = inject(headSymbol);
  if (!head && process.env.NODE_ENV !== "production")
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => (/* @__PURE__ */ useNuxtApp()).vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey$1 = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
const __nuxt_page_meta$1u = null;
const __nuxt_page_meta$1t = null;
const __nuxt_page_meta$1s = null;
const __nuxt_page_meta$1r = null;
const __nuxt_page_meta$1q = null;
const __nuxt_page_meta$1p = null;
const __nuxt_page_meta$1o = null;
const __nuxt_page_meta$1n = null;
const __nuxt_page_meta$1m = null;
const __nuxt_page_meta$1l = null;
const __nuxt_page_meta$1k = null;
const __nuxt_page_meta$1j = null;
const __nuxt_page_meta$1i = null;
const __nuxt_page_meta$1h = null;
const __nuxt_page_meta$1g = null;
const __nuxt_page_meta$1f = null;
const __nuxt_page_meta$1e = null;
const __nuxt_page_meta$1d = null;
const __nuxt_page_meta$1c = null;
const __nuxt_page_meta$1b = null;
const __nuxt_page_meta$1a = null;
const __nuxt_page_meta$19 = null;
const __nuxt_page_meta$18 = null;
const __nuxt_page_meta$17 = null;
const __nuxt_page_meta$16 = null;
const __nuxt_page_meta$15 = null;
const __nuxt_page_meta$14 = null;
const __nuxt_page_meta$13 = null;
const __nuxt_page_meta$12 = null;
const __nuxt_page_meta$11 = null;
const __nuxt_page_meta$10 = null;
const __nuxt_page_meta$$ = null;
const __nuxt_page_meta$_ = null;
const __nuxt_page_meta$Z = null;
const __nuxt_page_meta$Y = null;
const __nuxt_page_meta$X = null;
const __nuxt_page_meta$W = null;
const __nuxt_page_meta$V = null;
const __nuxt_page_meta$U = null;
const __nuxt_page_meta$T = null;
const __nuxt_page_meta$S = null;
const __nuxt_page_meta$R = null;
const __nuxt_page_meta$Q = null;
const __nuxt_page_meta$P = null;
const __nuxt_page_meta$O = null;
const __nuxt_page_meta$N = null;
const __nuxt_page_meta$M = null;
const __nuxt_page_meta$L = null;
const __nuxt_page_meta$K = null;
const __nuxt_page_meta$J = null;
const __nuxt_page_meta$I = null;
const __nuxt_page_meta$H = null;
const __nuxt_page_meta$G = null;
const __nuxt_page_meta$F = null;
const __nuxt_page_meta$E = null;
const __nuxt_page_meta$D = null;
const __nuxt_page_meta$C = null;
const __nuxt_page_meta$B = null;
const __nuxt_page_meta$A = null;
const __nuxt_page_meta$z = null;
const __nuxt_page_meta$y = null;
const __nuxt_page_meta$x = null;
const __nuxt_page_meta$w = null;
const __nuxt_page_meta$v = null;
const __nuxt_page_meta$u = null;
const __nuxt_page_meta$t = null;
const __nuxt_page_meta$s = null;
const __nuxt_page_meta$r = null;
const __nuxt_page_meta$q = null;
const __nuxt_page_meta$p = null;
const __nuxt_page_meta$o = null;
const __nuxt_page_meta$n = null;
const __nuxt_page_meta$m = null;
const __nuxt_page_meta$l = null;
const __nuxt_page_meta$k = null;
const __nuxt_page_meta$j = null;
const __nuxt_page_meta$i = null;
const __nuxt_page_meta$h = null;
const __nuxt_page_meta$g = null;
const __nuxt_page_meta$f = null;
const __nuxt_page_meta$e = null;
const __nuxt_page_meta$d = null;
const __nuxt_page_meta$c = null;
const __nuxt_page_meta$b = null;
const __nuxt_page_meta$a = null;
const __nuxt_page_meta$9 = null;
const __nuxt_page_meta$8 = null;
const __nuxt_page_meta$7 = null;
const __nuxt_page_meta$6 = null;
const __nuxt_page_meta$5 = null;
const __nuxt_page_meta$4 = null;
const __nuxt_page_meta$3 = null;
const __nuxt_page_meta$2 = null;
const __nuxt_page_meta$1 = null;
const __nuxt_page_meta = null;
const _routes = [
  {
    name: "dark-blog-classic",
    path: "/dark/blog-classic",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$1u == null ? void 0 : __nuxt_page_meta$1u.redirect,
    component: () => import("./_nuxt/blog-classic-Dbky529c.js").then((m) => m.default || m)
  },
  {
    name: "dark-blog-details",
    path: "/dark/blog-details",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$1t == null ? void 0 : __nuxt_page_meta$1t.redirect,
    component: () => import("./_nuxt/blog-details-iuQkVvIS.js").then((m) => m.default || m)
  },
  {
    name: "dark-blog-list",
    path: "/dark/blog-list",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$1s == null ? void 0 : __nuxt_page_meta$1s.redirect,
    component: () => import("./_nuxt/blog-list-DwrDkbg2.js").then((m) => m.default || m)
  },
  {
    name: "dark-blog-list2",
    path: "/dark/blog-list2",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$1r == null ? void 0 : __nuxt_page_meta$1r.redirect,
    component: () => import("./_nuxt/blog-list2-DYrFy3YH.js").then((m) => m.default || m)
  },
  {
    name: "dark-home-asymmetric-portfolio",
    path: "/dark/home-asymmetric-portfolio",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$1q == null ? void 0 : __nuxt_page_meta$1q.redirect,
    component: () => import("./_nuxt/home-asymmetric-portfolio-BnSCm5gU.js").then((m) => m.default || m)
  },
  {
    name: "dark-home-creative-agency",
    path: "/dark/home-creative-agency",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$1p == null ? void 0 : __nuxt_page_meta$1p.redirect,
    component: () => import("./_nuxt/home-creative-agency-C9UFbKXP.js").then((m) => m.default || m)
  },
  {
    name: "dark-home-creative-portfolio",
    path: "/dark/home-creative-portfolio",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$1o == null ? void 0 : __nuxt_page_meta$1o.redirect,
    component: () => import("./_nuxt/home-creative-portfolio-DuSe4eDv.js").then((m) => m.default || m)
  },
  {
    name: "dark-home-digital-agency",
    path: "/dark/home-digital-agency",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$1n == null ? void 0 : __nuxt_page_meta$1n.redirect,
    component: () => import("./_nuxt/home-digital-agency-CK7c0dWa.js").then((m) => m.default || m)
  },
  {
    name: "dark-home-freelancer",
    path: "/dark/home-freelancer",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$1m == null ? void 0 : __nuxt_page_meta$1m.redirect,
    component: () => import("./_nuxt/home-freelancer-NqLMsNOS.js").then((m) => m.default || m)
  },
  {
    name: "dark-home-main",
    path: "/dark/home-main",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$1l == null ? void 0 : __nuxt_page_meta$1l.redirect,
    component: () => import("./_nuxt/home-main-BZAd0g3D.js").then((m) => m.default || m)
  },
  {
    name: "dark-home-minimal-portfolio",
    path: "/dark/home-minimal-portfolio",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$1k == null ? void 0 : __nuxt_page_meta$1k.redirect,
    component: () => import("./_nuxt/home-minimal-portfolio-1uTEtVU8.js").then((m) => m.default || m)
  },
  {
    name: "dark-home-modern-agency",
    path: "/dark/home-modern-agency",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$1j == null ? void 0 : __nuxt_page_meta$1j.redirect,
    component: () => import("./_nuxt/home-modern-agency-DnyRcf1T.js").then((m) => m.default || m)
  },
  {
    name: "dark-home-personal-vcard",
    path: "/dark/home-personal-vcard",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$1i == null ? void 0 : __nuxt_page_meta$1i.redirect,
    component: () => import("./_nuxt/home-personal-vcard-DnAKVwiL.js").then((m) => m.default || m)
  },
  {
    name: "dark-home-startup-onepage",
    path: "/dark/home-startup-onepage",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$1h == null ? void 0 : __nuxt_page_meta$1h.redirect,
    component: () => import("./_nuxt/home-startup-onepage-CMbAaDJs.js").then((m) => m.default || m)
  },
  {
    name: "dark-page-about",
    path: "/dark/page-about",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$1g == null ? void 0 : __nuxt_page_meta$1g.redirect,
    component: () => import("./_nuxt/page-about-DAZWv1iE.js").then((m) => m.default || m)
  },
  {
    name: "dark-page-about2",
    path: "/dark/page-about2",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$1f == null ? void 0 : __nuxt_page_meta$1f.redirect,
    component: () => import("./_nuxt/page-about2-C1NzdHNK.js").then((m) => m.default || m)
  },
  {
    name: "dark-page-about3",
    path: "/dark/page-about3",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$1e == null ? void 0 : __nuxt_page_meta$1e.redirect,
    component: () => import("./_nuxt/page-about3-COqC6xg4.js").then((m) => m.default || m)
  },
  {
    name: "dark-page-contact",
    path: "/dark/page-contact",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$1d == null ? void 0 : __nuxt_page_meta$1d.redirect,
    component: () => import("./_nuxt/page-contact-CTtnSoDg.js").then((m) => m.default || m)
  },
  {
    name: "dark-page-contact2",
    path: "/dark/page-contact2",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$1c == null ? void 0 : __nuxt_page_meta$1c.redirect,
    component: () => import("./_nuxt/page-contact2-ChT1sGxs.js").then((m) => m.default || m)
  },
  {
    name: "dark-page-contact3",
    path: "/dark/page-contact3",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$1b == null ? void 0 : __nuxt_page_meta$1b.redirect,
    component: () => import("./_nuxt/page-contact3-DyTBFnQY.js").then((m) => m.default || m)
  },
  {
    name: "dark-page-error404",
    path: "/dark/page-error404",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$1a == null ? void 0 : __nuxt_page_meta$1a.redirect,
    component: () => import("./_nuxt/page-error404-Bqup6xZL.js").then((m) => m.default || m)
  },
  {
    name: "dark-page-FAQS",
    path: "/dark/page-FAQS",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$19 == null ? void 0 : __nuxt_page_meta$19.redirect,
    component: () => import("./_nuxt/page-FAQS-B75CLPp8.js").then((m) => m.default || m)
  },
  {
    name: "dark-page-services-details",
    path: "/dark/page-services-details",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$18 == null ? void 0 : __nuxt_page_meta$18.redirect,
    component: () => import("./_nuxt/page-services-details-C73ThnXr.js").then((m) => m.default || m)
  },
  {
    name: "dark-page-services",
    path: "/dark/page-services",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$17 == null ? void 0 : __nuxt_page_meta$17.redirect,
    component: () => import("./_nuxt/page-services-Cg2JphmF.js").then((m) => m.default || m)
  },
  {
    name: "dark-page-services2",
    path: "/dark/page-services2",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$16 == null ? void 0 : __nuxt_page_meta$16.redirect,
    component: () => import("./_nuxt/page-services2-pztd5pcL.js").then((m) => m.default || m)
  },
  {
    name: "dark-page-team-single",
    path: "/dark/page-team-single",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$15 == null ? void 0 : __nuxt_page_meta$15.redirect,
    component: () => import("./_nuxt/page-team-single-BiYfk5bX.js").then((m) => m.default || m)
  },
  {
    name: "dark-page-team",
    path: "/dark/page-team",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$14 == null ? void 0 : __nuxt_page_meta$14.redirect,
    component: () => import("./_nuxt/page-team-_rjSQw1m.js").then((m) => m.default || m)
  },
  {
    name: "dark-portfolio-caption-cursor",
    path: "/dark/portfolio-caption-cursor",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$13 == null ? void 0 : __nuxt_page_meta$13.redirect,
    component: () => import("./_nuxt/portfolio-caption-cursor-CvsHmvKq.js").then((m) => m.default || m)
  },
  {
    name: "dark-portfolio-gallery",
    path: "/dark/portfolio-gallery",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$12 == null ? void 0 : __nuxt_page_meta$12.redirect,
    component: () => import("./_nuxt/portfolio-gallery-DjqAyBu-.js").then((m) => m.default || m)
  },
  {
    name: "dark-portfolio-masonry",
    path: "/dark/portfolio-masonry",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$11 == null ? void 0 : __nuxt_page_meta$11.redirect,
    component: () => import("./_nuxt/portfolio-masonry-CU4bM1nv.js").then((m) => m.default || m)
  },
  {
    name: "dark-portfolio-metro",
    path: "/dark/portfolio-metro",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$10 == null ? void 0 : __nuxt_page_meta$10.redirect,
    component: () => import("./_nuxt/portfolio-metro-BEha02er.js").then((m) => m.default || m)
  },
  {
    name: "dark-portfolio-outline",
    path: "/dark/portfolio-outline",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$$ == null ? void 0 : __nuxt_page_meta$$.redirect,
    component: () => import("./_nuxt/portfolio-outline-CYEK7PoI.js").then((m) => m.default || m)
  },
  {
    name: "dark-portfolio-parallax",
    path: "/dark/portfolio-parallax",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$_ == null ? void 0 : __nuxt_page_meta$_.redirect,
    component: () => import("./_nuxt/portfolio-parallax-K0r2XZ1l.js").then((m) => m.default || m)
  },
  {
    name: "dark-portfolio-standard",
    path: "/dark/portfolio-standard",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$Z == null ? void 0 : __nuxt_page_meta$Z.redirect,
    component: () => import("./_nuxt/portfolio-standard-BbhU_wFg.js").then((m) => m.default || m)
  },
  {
    name: "dark-portfolio-sticky",
    path: "/dark/portfolio-sticky",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$Y == null ? void 0 : __nuxt_page_meta$Y.redirect,
    component: () => import("./_nuxt/portfolio-sticky-oeSeK0Lp.js").then((m) => m.default || m)
  },
  {
    name: "dark-project1",
    path: "/dark/project1",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$X == null ? void 0 : __nuxt_page_meta$X.redirect,
    component: () => import("./_nuxt/project1-_DfmQ1n1.js").then((m) => m.default || m)
  },
  {
    name: "dark-project2",
    path: "/dark/project2",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$W == null ? void 0 : __nuxt_page_meta$W.redirect,
    component: () => import("./_nuxt/project2-C60wtWYm.js").then((m) => m.default || m)
  },
  {
    name: "dark-project3",
    path: "/dark/project3",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$V == null ? void 0 : __nuxt_page_meta$V.redirect,
    component: () => import("./_nuxt/project3-DB3BhhzT.js").then((m) => m.default || m)
  },
  {
    name: "dark-project4",
    path: "/dark/project4",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$U == null ? void 0 : __nuxt_page_meta$U.redirect,
    component: () => import("./_nuxt/project4-CIxporMm.js").then((m) => m.default || m)
  },
  {
    name: "dark-project5",
    path: "/dark/project5",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$T == null ? void 0 : __nuxt_page_meta$T.redirect,
    component: () => import("./_nuxt/project5-Bi0zjuR3.js").then((m) => m.default || m)
  },
  {
    name: "dark-project6",
    path: "/dark/project6",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$S == null ? void 0 : __nuxt_page_meta$S.redirect,
    component: () => import("./_nuxt/project6-Ce5y5kw8.js").then((m) => m.default || m)
  },
  {
    name: "dark-showcase-carousel",
    path: "/dark/showcase-carousel",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$R == null ? void 0 : __nuxt_page_meta$R.redirect,
    component: () => import("./_nuxt/showcase-carousel-BRFTYoBP.js").then((m) => m.default || m)
  },
  {
    name: "dark-showcase-fullscreen",
    path: "/dark/showcase-fullscreen",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$Q == null ? void 0 : __nuxt_page_meta$Q.redirect,
    component: () => import("./_nuxt/showcase-fullscreen-Bb6hLxSq.js").then((m) => m.default || m)
  },
  {
    name: "dark-showcase-half-slider",
    path: "/dark/showcase-half-slider",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$P == null ? void 0 : __nuxt_page_meta$P.redirect,
    component: () => import("./_nuxt/showcase-half-slider-Bqn-oXTQ.js").then((m) => m.default || m)
  },
  {
    name: "dark-showcase-interactive-center",
    path: "/dark/showcase-interactive-center",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$O == null ? void 0 : __nuxt_page_meta$O.redirect,
    component: () => import("./_nuxt/showcase-interactive-center-CU6VRSYH.js").then((m) => m.default || m)
  },
  {
    name: "dark-showcase-interactive-full",
    path: "/dark/showcase-interactive-full",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$N == null ? void 0 : __nuxt_page_meta$N.redirect,
    component: () => import("./_nuxt/showcase-interactive-full-CXSGYQz0.js").then((m) => m.default || m)
  },
  {
    name: "dark-showcase-interactive-vertical",
    path: "/dark/showcase-interactive-vertical",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$M == null ? void 0 : __nuxt_page_meta$M.redirect,
    component: () => import("./_nuxt/showcase-interactive-vertical-C74JRbXO.js").then((m) => m.default || m)
  },
  {
    name: "index",
    path: "/",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$L == null ? void 0 : __nuxt_page_meta$L.redirect,
    component: () => import("./_nuxt/index-BV_CvG5q.js").then((m) => m.default || m)
  },
  {
    name: "light-blog-classic",
    path: "/light/blog-classic",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$K == null ? void 0 : __nuxt_page_meta$K.redirect,
    component: () => import("./_nuxt/blog-classic-pdTgz8hz.js").then((m) => m.default || m)
  },
  {
    name: "light-blog-details",
    path: "/light/blog-details",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$J == null ? void 0 : __nuxt_page_meta$J.redirect,
    component: () => import("./_nuxt/blog-details-Cg76Q8gS.js").then((m) => m.default || m)
  },
  {
    name: "light-blog-list",
    path: "/light/blog-list",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$I == null ? void 0 : __nuxt_page_meta$I.redirect,
    component: () => import("./_nuxt/blog-list-B9zeaJlg.js").then((m) => m.default || m)
  },
  {
    name: "light-blog-list2",
    path: "/light/blog-list2",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$H == null ? void 0 : __nuxt_page_meta$H.redirect,
    component: () => import("./_nuxt/blog-list2-CjbICR0B.js").then((m) => m.default || m)
  },
  {
    name: "light-home-asymmetric-portfolio",
    path: "/light/home-asymmetric-portfolio",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$G == null ? void 0 : __nuxt_page_meta$G.redirect,
    component: () => import("./_nuxt/home-asymmetric-portfolio-DxyczBtC.js").then((m) => m.default || m)
  },
  {
    name: "light-home-creative-agency",
    path: "/light/home-creative-agency",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$F == null ? void 0 : __nuxt_page_meta$F.redirect,
    component: () => import("./_nuxt/home-creative-agency-CiURhCEO.js").then((m) => m.default || m)
  },
  {
    name: "light-home-creative-portfolio",
    path: "/light/home-creative-portfolio",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$E == null ? void 0 : __nuxt_page_meta$E.redirect,
    component: () => import("./_nuxt/home-creative-portfolio-CsKhJA9x.js").then((m) => m.default || m)
  },
  {
    name: "light-home-digital-agency",
    path: "/light/home-digital-agency",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$D == null ? void 0 : __nuxt_page_meta$D.redirect,
    component: () => import("./_nuxt/home-digital-agency-6NoFq06p.js").then((m) => m.default || m)
  },
  {
    name: "light-home-freelancer",
    path: "/light/home-freelancer",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$C == null ? void 0 : __nuxt_page_meta$C.redirect,
    component: () => import("./_nuxt/home-freelancer-CC2tmjco.js").then((m) => m.default || m)
  },
  {
    name: "light-home-main",
    path: "/light/home-main",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$B == null ? void 0 : __nuxt_page_meta$B.redirect,
    component: () => import("./_nuxt/home-main-DeWIityL.js").then((m) => m.default || m)
  },
  {
    name: "light-home-minimal-portfolio",
    path: "/light/home-minimal-portfolio",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$A == null ? void 0 : __nuxt_page_meta$A.redirect,
    component: () => import("./_nuxt/home-minimal-portfolio-Buq6lLO-.js").then((m) => m.default || m)
  },
  {
    name: "light-home-modern-agency",
    path: "/light/home-modern-agency",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$z == null ? void 0 : __nuxt_page_meta$z.redirect,
    component: () => import("./_nuxt/home-modern-agency-DTYk7M0e.js").then((m) => m.default || m)
  },
  {
    name: "light-home-personal-vcard",
    path: "/light/home-personal-vcard",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$y == null ? void 0 : __nuxt_page_meta$y.redirect,
    component: () => import("./_nuxt/home-personal-vcard-B1pvJRiB.js").then((m) => m.default || m)
  },
  {
    name: "light-home-startup-onepage",
    path: "/light/home-startup-onepage",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$x == null ? void 0 : __nuxt_page_meta$x.redirect,
    component: () => import("./_nuxt/home-startup-onepage-DVxbUn9R.js").then((m) => m.default || m)
  },
  {
    name: "light-page-about",
    path: "/light/page-about",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$w == null ? void 0 : __nuxt_page_meta$w.redirect,
    component: () => import("./_nuxt/page-about-DuOK4psw.js").then((m) => m.default || m)
  },
  {
    name: "light-page-about2",
    path: "/light/page-about2",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$v == null ? void 0 : __nuxt_page_meta$v.redirect,
    component: () => import("./_nuxt/page-about2-DOji8m8Q.js").then((m) => m.default || m)
  },
  {
    name: "light-page-about3",
    path: "/light/page-about3",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$u == null ? void 0 : __nuxt_page_meta$u.redirect,
    component: () => import("./_nuxt/page-about3-D_hwp526.js").then((m) => m.default || m)
  },
  {
    name: "light-page-contact",
    path: "/light/page-contact",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$t == null ? void 0 : __nuxt_page_meta$t.redirect,
    component: () => import("./_nuxt/page-contact-Df90v3ph.js").then((m) => m.default || m)
  },
  {
    name: "light-page-contact2",
    path: "/light/page-contact2",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$s == null ? void 0 : __nuxt_page_meta$s.redirect,
    component: () => import("./_nuxt/page-contact2-DKpuACF8.js").then((m) => m.default || m)
  },
  {
    name: "light-page-contact3",
    path: "/light/page-contact3",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$r == null ? void 0 : __nuxt_page_meta$r.redirect,
    component: () => import("./_nuxt/page-contact3-RRfdsAQL.js").then((m) => m.default || m)
  },
  {
    name: "light-page-error404",
    path: "/light/page-error404",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$q == null ? void 0 : __nuxt_page_meta$q.redirect,
    component: () => import("./_nuxt/page-error404-BOZQftTc.js").then((m) => m.default || m)
  },
  {
    name: "light-page-FAQS",
    path: "/light/page-FAQS",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$p == null ? void 0 : __nuxt_page_meta$p.redirect,
    component: () => import("./_nuxt/page-FAQS-BqSgmtKI.js").then((m) => m.default || m)
  },
  {
    name: "light-page-services-details",
    path: "/light/page-services-details",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$o == null ? void 0 : __nuxt_page_meta$o.redirect,
    component: () => import("./_nuxt/page-services-details-s8_Mnop0.js").then((m) => m.default || m)
  },
  {
    name: "light-page-services",
    path: "/light/page-services",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$n == null ? void 0 : __nuxt_page_meta$n.redirect,
    component: () => import("./_nuxt/page-services-C4mbqdVz.js").then((m) => m.default || m)
  },
  {
    name: "light-page-services2",
    path: "/light/page-services2",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$m == null ? void 0 : __nuxt_page_meta$m.redirect,
    component: () => import("./_nuxt/page-services2-BvSjgZ0W.js").then((m) => m.default || m)
  },
  {
    name: "light-page-team-single",
    path: "/light/page-team-single",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$l == null ? void 0 : __nuxt_page_meta$l.redirect,
    component: () => import("./_nuxt/page-team-single-DNo7H5Nd.js").then((m) => m.default || m)
  },
  {
    name: "light-page-team",
    path: "/light/page-team",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$k == null ? void 0 : __nuxt_page_meta$k.redirect,
    component: () => import("./_nuxt/page-team-K9Z035gf.js").then((m) => m.default || m)
  },
  {
    name: "light-portfolio-caption-cursor",
    path: "/light/portfolio-caption-cursor",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$j == null ? void 0 : __nuxt_page_meta$j.redirect,
    component: () => import("./_nuxt/portfolio-caption-cursor-DMtH_-Vf.js").then((m) => m.default || m)
  },
  {
    name: "light-portfolio-gallery",
    path: "/light/portfolio-gallery",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$i == null ? void 0 : __nuxt_page_meta$i.redirect,
    component: () => import("./_nuxt/portfolio-gallery-DSR3onlR.js").then((m) => m.default || m)
  },
  {
    name: "light-portfolio-masonry",
    path: "/light/portfolio-masonry",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$h == null ? void 0 : __nuxt_page_meta$h.redirect,
    component: () => import("./_nuxt/portfolio-masonry-Br9-TqDs.js").then((m) => m.default || m)
  },
  {
    name: "light-portfolio-metro",
    path: "/light/portfolio-metro",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$g == null ? void 0 : __nuxt_page_meta$g.redirect,
    component: () => import("./_nuxt/portfolio-metro-DG_nXJsq.js").then((m) => m.default || m)
  },
  {
    name: "light-portfolio-outline",
    path: "/light/portfolio-outline",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$f == null ? void 0 : __nuxt_page_meta$f.redirect,
    component: () => import("./_nuxt/portfolio-outline-Ck6oNeIL.js").then((m) => m.default || m)
  },
  {
    name: "light-portfolio-parallax",
    path: "/light/portfolio-parallax",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.redirect,
    component: () => import("./_nuxt/portfolio-parallax-DgXCHChD.js").then((m) => m.default || m)
  },
  {
    name: "light-portfolio-standard",
    path: "/light/portfolio-standard",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.redirect,
    component: () => import("./_nuxt/portfolio-standard-Dha1RYri.js").then((m) => m.default || m)
  },
  {
    name: "light-portfolio-sticky",
    path: "/light/portfolio-sticky",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.redirect,
    component: () => import("./_nuxt/portfolio-sticky-C_NNtWRG.js").then((m) => m.default || m)
  },
  {
    name: "light-project1",
    path: "/light/project1",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.redirect,
    component: () => import("./_nuxt/project1-BmlKJsND.js").then((m) => m.default || m)
  },
  {
    name: "light-project2",
    path: "/light/project2",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.redirect,
    component: () => import("./_nuxt/project2-DDlJNNEs.js").then((m) => m.default || m)
  },
  {
    name: "light-project3",
    path: "/light/project3",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.redirect,
    component: () => import("./_nuxt/project3-B5rZvm2y.js").then((m) => m.default || m)
  },
  {
    name: "light-project4",
    path: "/light/project4",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.redirect,
    component: () => import("./_nuxt/project4-Dq8wNlGO.js").then((m) => m.default || m)
  },
  {
    name: "light-project5",
    path: "/light/project5",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.redirect,
    component: () => import("./_nuxt/project5-BAdV8hCq.js").then((m) => m.default || m)
  },
  {
    name: "light-project6",
    path: "/light/project6",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.redirect,
    component: () => import("./_nuxt/project6-ej22Q2Id.js").then((m) => m.default || m)
  },
  {
    name: "light-showcase-carousel",
    path: "/light/showcase-carousel",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.redirect,
    component: () => import("./_nuxt/showcase-carousel-CNyh4sQI.js").then((m) => m.default || m)
  },
  {
    name: "light-showcase-fullscreen",
    path: "/light/showcase-fullscreen",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.redirect,
    component: () => import("./_nuxt/showcase-fullscreen-CbJ46AlU.js").then((m) => m.default || m)
  },
  {
    name: "light-showcase-half-slider",
    path: "/light/showcase-half-slider",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.redirect,
    component: () => import("./_nuxt/showcase-half-slider-DGWGYAFP.js").then((m) => m.default || m)
  },
  {
    name: "light-showcase-interactive-center",
    path: "/light/showcase-interactive-center",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.redirect,
    component: () => import("./_nuxt/showcase-interactive-center-BhVEI5b4.js").then((m) => m.default || m)
  },
  {
    name: "light-showcase-interactive-full",
    path: "/light/showcase-interactive-full",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.redirect,
    component: () => import("./_nuxt/showcase-interactive-full-B9qukZm2.js").then((m) => m.default || m)
  },
  {
    name: "light-showcase-interactive-vertical",
    path: "/light/showcase-interactive-vertical",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta == null ? void 0 : __nuxt_page_meta.redirect,
    component: () => import("./_nuxt/showcase-interactive-vertical-C0YJMGqP.js").then((m) => m.default || m)
  }
];
const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => {
    var _a;
    return props ? h(component, props, slots) : (_a = slots.default) == null ? void 0 : _a.call(slots);
  } };
};
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => {
      var _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index]) == null ? void 0 : _a.components) == null ? void 0 : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const appPageTransition = false;
const appKeepalive = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b, _c;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
    let startPosition;
    const initialURL = nuxtApp.ssrContext.url;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const _route = shallowRef(router.resolve(initialURL));
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c2, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key]
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    if ((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach(async (to, _from, failure) => {
      delete nuxtApp._processingMiddleware;
      if (failure) {
        await nuxtApp.callHook("page:loading:end");
      }
      if ((failure == null ? void 0 : failure.type) === 4) {
        return;
      }
      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      } else if (to.redirectedFrom && to.fullPath !== initialURL) {
        await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        await router.replace({
          ...router.resolve(initialURL),
          name: void 0,
          // #4920, #4982
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function definePayloadReducer(name, reduce) {
  {
    (/* @__PURE__ */ useNuxtApp()).ssrContext._payloadReducers[name] = reduce;
  }
}
const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const plugins = [
  unhead_KgADcZ0jPj,
  plugin,
  revive_payload_server_eJ33V7gbc6,
  components_plugin_KR1HBZs4kY
];
const RouteProvider = defineComponent({
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key]
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_0 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, expose }) {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const pageRef = ref();
    const forkRoute = inject(PageRouteSymbol, null);
    let previousPageKey;
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      watch(() => props.pageKey, (next, prev) => {
        if (next !== prev) {
          nuxtApp.callHook("page:loading:start");
        }
      });
    }
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey$1(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key) {
            nuxtApp.callHook("page:loading:end");
          }
          previousPageKey = key;
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          const keepaliveConfig = props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive;
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              keepaliveConfig,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).then(() => nuxtApp.callHook("page:loading:end")).finally(done));
                }
              }, {
                default: () => {
                  const providerVNode = h(RouteProvider, {
                    key: key || void 0,
                    vnode: routeProps.Component,
                    route: routeProps.route,
                    renderKey: key || void 0,
                    trackRootNodes: hasTransition,
                    vnodeRef: pageRef
                  });
                  return providerVNode;
                }
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: prop.onAfterLeave ? toArray(prop.onAfterLeave) : void 0
  }));
  return defu(..._props);
}
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork) {
    return false;
  }
  const index = newRoute.matched.findIndex((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === (Component == null ? void 0 : Component.type);
  });
  return index < newRoute.matched.length - 1;
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtPage = __nuxt_component_0;
  _push(ssrRenderComponent(_component_NuxtPage, _attrs, null, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    (_error.stack || "").split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n");
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import("./_nuxt/error-404-BDj6ZOL5.js").then((r) => r.default || r));
    const _Error = defineAsyncComponent(() => import("./_nuxt/error-500-5cNttxtn.js").then((r) => r.default || r));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ErrorComponent = _sfc_main$1;
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = defineAsyncComponent(() => import("./_nuxt/island-renderer-eQdyCZUE.js").then((r) => r.default || r));
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RootComponent = _sfc_main;
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error = nuxt.payload.error || createError(error);
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);
export {
  _export_sfc as _,
  useRuntimeConfig as a,
  navigateTo as b,
  createError as c,
  entry$1 as default,
  injectHead as i,
  nuxtLinkDefaults as n,
  resolveUnrefHeadInput as r,
  useRouter as u
};
//# sourceMappingURL=server.mjs.map
