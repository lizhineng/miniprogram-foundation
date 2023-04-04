export default function (query: Record<string, unknown>) {
  const queryString: string[] = []

  for (const [key, value] of Object.entries(query)) {
    const pair =
      encodeURIComponent(key) + '=' + encodeURIComponent(String(value))

    queryString.push(pair)
  }

  return queryString.join('&')
}
