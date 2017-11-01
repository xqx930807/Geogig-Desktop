class STORE {

  static dispatch (data) {
    this.context.store.dispatch(data)
  }

  static subscribe () {
    this.context.store.subscribe( () => {
      this.setState(this.context.store.getState())
    })
  }
}

export default STORE
