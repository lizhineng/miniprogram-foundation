import queryString from './queryString'

describe('routing: query string', () => {
  test('build query string', () => {
    expect(queryString({ name: 'Zhineng' })).toBe('name=Zhineng')
  })

  test('multiple parameters are separated by ampersand', () => {
    expect(queryString({ name: 'Zhineng', age: 28 })).toBe(
      'name=Zhineng&age=28'
    )
  })

  test('encode characters', () => {
    expect(queryString({ foo: 'ba+r' })).toBe('foo=ba%2Br')
  })
})
