import Header from './Header'
import Terminal from './terminal'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <Terminal />
  </div>
)

export default Layout
