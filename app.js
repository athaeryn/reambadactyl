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

const User = R.compose(
  (name) =>
    $div(
      { className: 'user' },
      $b(_, name)
    ),
  R.prop('name')
)

const UserList = R.compose(
  $div({ className: 'user-list' }),
  R.map(User),
  R.prop('users')
)

const Header = R.converge(
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

const Footer = R.always($div(_, 'hey this is the footer'))

const Divider = R.always($('hr', _, _))

const App = R.converge(
  $('div', null),
  R.intersperse(
    Divider,
    [
      Header,
      UserList,
      Footer
    ]
  )
)

const renderApp = render(App)

renderApp(state)

