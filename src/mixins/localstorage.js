const storage = window.localStorage

export default {
  methods: {
    setLocalStorage: function (key, value) {
      if (!storage) {
        console.error('no support for localstorage')
        return
      }
      storage.setItem(key, value)
    },
    getLocalStorage: function (key) {
      if (!storage) {
        console.error('no support for localstorage')
        return
      }
      return storage.getItem(key)
    },
    removeLocalStorage: function (key) {
      if (!storage) {
        console.error('no support for localstorage')
        return
      }
      storage.removeItem(key)
    }
  }
}
