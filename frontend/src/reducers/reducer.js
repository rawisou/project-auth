const reducer = (state, action) => {
    if (action.type === 'login') {
        return { username: username }
    }
    if (action.type === 'logout') {
        return null
    }
    return state
}

export default reducer