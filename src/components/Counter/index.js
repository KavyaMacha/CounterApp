import {Component} from 'react'
import './index.css'
class Counter extends Component {
  state = {count: 0} //it is js object in which, if the object wants to change over a time we use the state component
  onIncrement = () => {
    //count += 1
    //console.log('Increment Clicked')
    this.setState(prevState => {
      console.log(`previous state count :${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }
  onDecrement = () => {
    // count -= 1
    this.setState(prevState => {
      console.log(`previous state count :${prevState.count}`)
      return {count: prevState.count - 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button onClick={this.onIncrement} className="button">
            Increase
          </button>
          <button onClick={this.onDecrement} className="button">
            Decrease
          </button>
        </div>
      </div>
    )
  }
}
export default Counter
