const state = {
  users: [
    { _id: 0, name: 'athaeryn', admin: true },
    { _id: 1, name: 'cortneypop' },
    { _id: 2, name: 'brandon_mn' }
  ]
}

const _ = null
const $div = $('div')
const $b = $('b')

const user = R.compose(
  (name) =>
    $div(
      { className: 'user' },
      $b(_, name)
    ),
  R.prop('name')
)

const userList = R.compose(
  $div({ className: 'user-list' }),
  R.map(user),
  R.prop('users')
)

const header = R.converge(
  (count, admins) =>
    $div(_, `${count} users. ${admins} admin(s).`),
  [
    R.compose(
      R.length,
      R.prop('users')
    ),
    R.compose(
      R.length,
      R.filter(R.propEq('admin', true)),
      R.prop('users')
    )
  ]
)

const footer = R.always($div(_, 'hey this is the footer'))

const divider = R.always($('hr', _, _))

const App = R.converge(
  $('div', null),
  R.intersperse(
    divider,
    [
      header,
      userList,
      footer
    ]
  )
)

const renderApp = render(App)

renderApp(state)

