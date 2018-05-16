import React from 'react'

class Prosentti extends React.Component{
  constructor(props){
    super(props)
    this.prosentCalc = this.prosentCalc.bind(this)
  }

  prosentCalc(){
      let hyva = this.props.list[0]
      let answer = Math.round((hyva / this.props.sum)*1000)/10
      return answer
  }

  render(){
    let answer = this.prosentCalc()
    return(
        <tr>
          <td>prosentti</td><td></td><td>{answer} %</td>
        </tr>
    )
  }
}
export default Prosentti
