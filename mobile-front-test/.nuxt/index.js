import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_axios_5210816e from 'nuxt_plugin_axios_5210816e' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_axios_2228ef02 from 'nuxt_plugin_axios_2228ef02' // Source: ..\\plugins\\axios (mode: 'all')
import nuxt_plugin_vueapi_e5d21642 from 'nuxt_plugin_vueapi_e5d21642' // Source: ..\\plugins\\vue-api (mode: 'all')
import nuxt_plugin_ctxapi_c1511600 from 'nuxt_plugin_ctxapi_c1511600' // Source: ..\\plugins\\ctx-api (mode: 'all')
import nuxt_plugin_vant_925e8cb6 from 'nuxt_plugin_vant_925e8cb6' // Source: ..\\plugins\\vant (mode: 'all')
import nuxt_plugin_combinedformatMoneyData_46106d7f from 'nuxt_plugin_combinedformatMoneyData_46106d7f' // Source: ..\\plugins\\combined-formatMoneyData (mode: 'all')
import nuxt_plugin_combinedformatDate_2dce2199 from 'nuxt_plugin_combinedformatDate_2dce2199' // Source: ..\\plugins\\combined-formatDate (mode: 'all')
import nuxt_plugin_combinedaddMonth_33c4569a from 'nuxt_plugin_combinedaddMonth_33c4569a' // Source: ..\\plugins\\combined-addMonth (mode: 'all')
import nuxt_plugin_combinedcreateUUID_6c25480b from 'nuxt_plugin_combinedcreateUUID_6c25480b' // Source: ..\\plugins\\combined-createUUID (mode: 'all')
import nuxt_plugin_combinedvalidateIsNumber_9241c2c6 from 'nuxt_plugin_combinedvalidateIsNumber_9241c2c6' // Source: ..\\plugins\\combined-validateIsNumber (mode: 'all')
import nuxt_plugin_postscss_f620d978 from 'nuxt_plugin_postscss_f620d978' // Source: ..\\plugins\\postscss (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp (ssrContext) {
  const router = await createRouter(ssrContext)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        const nuxt = this.nuxt || this.$options.nuxt
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  const inject = function (key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error('inject(key, value) has no value provided')
    }

    key = '$' + key
    // Add into app
    app[key] = value

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Plugin execution

  if (typeof nuxt_plugin_axios_5210816e === 'function') {
    await nuxt_plugin_axios_5210816e(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_2228ef02 === 'function') {
    await nuxt_plugin_axios_2228ef02(app.context, inject)
  }

  if (typeof nuxt_plugin_vueapi_e5d21642 === 'function') {
    await nuxt_plugin_vueapi_e5d21642(app.context, inject)
  }

  if (typeof nuxt_plugin_ctxapi_c1511600 === 'function') {
    await nuxt_plugin_ctxapi_c1511600(app.context, inject)
  }

  if (typeof nuxt_plugin_vant_925e8cb6 === 'function') {
    await nuxt_plugin_vant_925e8cb6(app.context, inject)
  }

  if (typeof nuxt_plugin_combinedformatMoneyData_46106d7f === 'function') {
    await nuxt_plugin_combinedformatMoneyData_46106d7f(app.context, inject)
  }

  if (typeof nuxt_plugin_combinedformatDate_2dce2199 === 'function') {
    await nuxt_plugin_combinedformatDate_2dce2199(app.context, inject)
  }

  if (typeof nuxt_plugin_combinedaddMonth_33c4569a === 'function') {
    await nuxt_plugin_combinedaddMonth_33c4569a(app.context, inject)
  }

  if (typeof nuxt_plugin_combinedcreateUUID_6c25480b === 'function') {
    await nuxt_plugin_combinedcreateUUID_6c25480b(app.context, inject)
  }

  if (typeof nuxt_plugin_combinedvalidateIsNumber_9241c2c6 === 'function') {
    await nuxt_plugin_combinedvalidateIsNumber_9241c2c6(app.context, inject)
  }

  if (typeof nuxt_plugin_postscss_f620d978 === 'function') {
    await nuxt_plugin_postscss_f620d978(app.context, inject)
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
