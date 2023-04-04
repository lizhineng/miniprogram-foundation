import Handler from './handler'
import queryString from './queryString'

class PendingRouting {
  protected handler: Foundation.RoutingHandler

  protected url: string

  protected query: Record<string, unknown>

  constructor(handler: Foundation.RoutingHandler) {
    this.handler = handler
  }

  to(url: string, query: Record<string, unknown> = {}) {
    this.url = url
    this.query = query

    return this.applyRouting()
  }

  protected applyRouting() {
    return this.handler.to({
      url: this.buildUrl(),
    })
  }

  protected buildUrl() {
    if (this.hasQuery()) {
      return this.buildUrlWithQuery()
    }

    return this.url
  }

  protected buildUrlWithQuery() {
    return this.url + '?' + queryString(this.query)
  }

  hasQuery() {
    return Object.keys(this.query).length > 0
  }
}

export default (handler: Foundation.RoutingHandler = new Handler(wx)) =>
  new PendingRouting(handler)
