const defaultLock = '__main'

export default Behavior({
  data: {
    lock: {
      [defaultLock]: false,
    },
  },

  methods: {
    isLocking(lock = defaultLock) {
      return this.getLock(lock) ?? false
    },

    getLock(lock: string) {
      return this.data.lock[lock]
    },

    lock(lock = defaultLock) {
      this.setData({
        ['lock.' + lock]: true,
      })
    },

    releaseLock(lock = defaultLock) {
      this.setData({
        ['lock.' + lock]: false,
      })
    },

    async lockThrough(callback: () => Promise<void>, lock = defaultLock) {
      this.enableLock(lock)

      await callback()

      this.disableLock(lock)
    },
  },
})
