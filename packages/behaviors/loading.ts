const defaultLoading = '__main'

export default Behavior({
  data: {
    loading: {
      [defaultLoading]: true,
    },
  },

  methods: {
    isLoading(loading = defaultLoading) {
      return this.getLoading(loading) ?? false
    },

    getLoading(loading: string) {
      return this.data.loading[loading]
    },

    startLoading(loading = defaultLoading) {
      this.setData({
        ['loading.' + loading]: true,
      })
    },

    finishLoading(loading = defaultLoading) {
      this.setData({
        ['loading.' + loading]: false,
      })
    },

    async loadingThrough(
      callback: () => Promise<void>,
      loading = defaultLoading
    ) {
      this.startLoading(loading)

      await callback()

      this.endLoading(loading)
    },
  },
})
