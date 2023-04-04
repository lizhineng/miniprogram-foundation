import route from './route'

describe('routing: route', () => {
  const mockHandler = new (class implements Foundation.RoutingHandler {
    to(options) {
      return options.url
    }
  })()

  test('build url', () => {
    expect(route(mockHandler).to('/pages/home')).toBe('/pages/home')
  })

  test('build url with query string', () => {
    expect(route(mockHandler).to('/pages/home', { foo: 'bar' })).toBe(
      '/pages/home?foo=bar'
    )
  })
})
