import React from 'react'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      eka: 0,
      toka: 0,
      kolmas: 0,
      neljas: 0,
      viides: 0,
      kuudes: 0
    }
  }
  //satunnainen numero
  randomFunc = () => {
    let random = Math.floor(Math.random() * this.props.anecdotes.length)
    this.setState({selected: random})
  }
  //äänestys toiminto
  voteFunc = (arvo) => {
    return () => {
      if(arvo.a === 0){
        this.setState((prevState)=>({eka: prevState.eka + 1}))
      }else if(arvo.a === 1){
        this.setState((prevState)=>({toka: prevState.toka + 1}))
      }else if(arvo.a === 2){
        this.setState((prevState)=>({kolmas: prevState.kolmas + 1}))
      }else if(arvo.a === 3){
        this.setState((prevState)=>({neljas: prevState.neljas + 1}))
      }else if(arvo.a === 4){
        this.setState((prevState)=>({viides: prevState.viides + 1}))
      }else if(arvo.a === 5){
        this.setState((prevState)=>({kuudes: prevState.kuudes + 1}))
      }
    }
  }
  //pisteen tulostus näytölle
  voteShow = () => {
    if(this.state.selected === 0){
      return this.state.eka
    }else if(this.state.selected === 1){
      return this.state.toka
    }else if(this.state.selected === 2){
      return this.state.kolmas
    }else if(this.state.selected === 3){
      return this.state.neljas
    }else if(this.state.selected === 4){
      return this.state.viides
    }else if(this.state.selected === 5){
      return this.state.kuudes
    }
  }

  render() {
    let r = this.voteShow()
    return (
      <div>
        <p>{this.props.anecdotes[this.state.selected]}</p>
        <p>has {r} votes</p>
        <button onClick={this.voteFunc({a: this.state.selected})}>vote</button>
        <button onClick={this.randomFunc}>next anecdotee</button>
      </div>
    )
  }
}


export default App
