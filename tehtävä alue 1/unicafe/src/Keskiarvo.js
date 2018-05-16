import React from 'react'

class Keskiarvo extends React.Component{
  constructor(props){
    super(props)
    this.counterAvg = this.counterAvg.bind(this)
  }

  counterAvg(){
      let hyva = this.props.numbers[0] * 1
      let huono = this.props.numbers[1] * -1

      let answer = Math.round(((hyva + huono) / this.props.sum)*100)/100
      return answer
  }
  render(){
    let answer = this.counterAvg()

    return(
        <tr>
          <td>keskiarvo</td><td></td><td>{answer}</td>
        </tr>
    )
  }
}
export default Keskiarvo
