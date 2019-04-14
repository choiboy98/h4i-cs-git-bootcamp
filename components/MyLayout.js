import Header from './Header'
import Terminal from './terminal'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = props => (
  <div id="container">
    <Header />
    <div id="left">
      {props.children}
    </div>
    <div id="right">
      <Terminal />
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
