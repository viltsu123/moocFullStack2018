import React from 'react'
import Button from './Button.js'
import Statistics from './Statistics.js'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  arvostelija = (arvo) => {
    return () => {
      if(arvo.a === "hyva"){
        this.setState({hyva: arvo.b})
      }else if(arvo.a === "neut"){
        this.setState({neutraali: arvo.b})
      }else if(arvo.a === "huono"){
        this.setState({huono: arvo.b})
      }

    }
  }


  render(){
    if(this.state.hyva === 0 && this.state.huono === 0 && this.state.neutraali === 0){
      return(
        <div>
          <h1>Anna palautetta</h1>
          <br/>
          <Button text="hyvä" func={this.arvostelija({a: "hyva", b: this.state.hyva + 1})}/>
          <Button text="neutraali" func={this.arvostelija({a: "neut", b: this.state.neutraali + 1})}/>
          <Button text="huono" func={this.arvostelija({a: "huono", b: this.state.huono + 1})}/>
          <br/>
          <p>Nappeja ei ole vielä painettu! ei statistiikkaa.</p>
        </div>
      )
    }
    return(
      <div>
        <h1>Anna palautetta</h1>
        <br/>
        <Button text="hyvä" func={this.arvostelija({a: "hyva", b: this.state.hyva + 1})}/>
        <Button text="neutraali" func={this.arvostelija({a: "neut", b: this.state.neutraali + 1})}/>
        <Button text="huono" func={this.arvostelija({a: "huono", b: this.state.huono + 1})}/>
        <br/>
        <Statistics numbersavg={[this.state.hyva, this.state.huono, this.state.neutraali]} sumavg={this.state.hyva + this.state.neutraali + this.state.huono}/>
      </div>
    )
  }
}

export default App
