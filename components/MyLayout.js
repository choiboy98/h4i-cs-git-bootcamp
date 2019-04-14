import Header from './Header'
import Terminal from './terminal'
import { push as Menu } from 'react-burger-menu'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = props => (
  <div id="container">
    <Header />
    <div id="container">
      <Menu pageWrapId={ "page-wrap" } />
      <main id="page-wrap" outerContainerId={ "container" }>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </main>
      <div id="left">
        {props.children}
      </div>
      <div id="right">
        <Terminal />
      </div>
    </div>
    <style jsx> {`
      #container {
        height: 100%;
        width: 100%;
      }
      #left, #right {
        display: inline-block; 
        *display: inline; 
        zoom: 1; 
        vertical-align: top;
        width: 50%;
      }
    `}
    </style>
  </div>
)

export default Layout
