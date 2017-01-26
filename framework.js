window.$ = R.curry(React.createElement)

const root = document.querySelector('#root')

window.render = R.curry(
  (app, state) => ReactDOM.render(app(state), root)
)

