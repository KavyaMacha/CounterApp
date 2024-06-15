//const Welcome = () => <h1>Hello, User</h1>
import {Component} from 'react'
class Welcome extends Component {
  render() {
    const {name} = this.props
    return <h1>hello {name}!</h1> //class Component
  }
}
export default Welcome
