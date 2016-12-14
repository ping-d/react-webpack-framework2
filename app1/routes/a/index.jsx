module.exports = {
    path: 'a',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/a.jsx'))
        })
    },
    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./aa/index.jsx'),

            ])
        })
    },
}
