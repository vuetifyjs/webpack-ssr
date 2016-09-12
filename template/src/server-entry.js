import { app, router, store } from './app'

const isDev = process.env.NODE_ENV !== 'production'

export default context => {
  router.push(context.url)

  const s = isDev && Date.now()

  return Promise.all(router.getMatchedComponents().map(component => {
    if (component.preFetch) {
      return component.preFetch(store)
    }
  })).then(() => {
    isDev && console.log(`data pre-fetch: ${Date.now() - s}ms`)
    context.initialState = store.state
    return app
  })
}