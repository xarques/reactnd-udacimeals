import React, { Component } from 'react'
import { connect} from 'react-redux';
class App extends Component {
  render() {
    console.log("Props : " , this.props)
    return (
      <div>
        Hello World
      </div>
    )
  }
}

const mapStateToProps = calendar => {
  const dayOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  return {
    calendar: dayOrder.map(day => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal] 
          ? calendar[day][meal]
          : null;
        return meals;
      }, {})
    }))
  }
}
export default connect(mapStateToProps)(App)