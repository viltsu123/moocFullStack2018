import React from 'react'
import Statistic from './Statistic.js'
import Prosentti from './Prosentti.js'

class Statistics extends React.Component{

  render(){

    return(
      <div>
      <h2>statistiikka</h2>
      <table>
      <Statistic text = "hyvä" number = {this.props.numbersavg} sum={this.props.sumavg}/>
      </table>
      </div>
    )
  }
}
export default Statistics
