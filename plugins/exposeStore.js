let exposeStore

const updateStore = () => {
    requestAnimationFrame(() => exposeStore.commit('UPDATE_STORE'))
}

export default ({ app: { store } }) => {
    exposeStore = store
}

export { exposeStore as store, updateStore }
