module.exports = {
    path: 'aa',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/aa.jsx'))
        })
    },

}
