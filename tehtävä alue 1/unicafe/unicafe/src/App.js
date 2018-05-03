import React from 'react'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
    this.hyvaHandler = this.hyvaHandler.bind(this)
    this.neutHandler = this.neutHandler.bind(this)
    this.huonoHandler = this.huonoHandler.bind(this)

  }

  hyvaHandler(){
      this.setState((prevState) => ({
        hyva: prevState.hyva + 1
      })
    )
  }
  neutHandler(){
      this.setState((prevState) => ({
          neutraali: prevState.neutraali + 1
      })
    )
  }
  huonoHandler(){
      this.setState((prevState) => ({
        huono: prevState.huono + 1
      }))
  }

  render(){
    return(
      <div>
        <h1>Anna palautetta</h1>
        <br/>
        <button onClick={this.hyvaHandler}>hyvä</button>
        <button onClick={this.neutHandler}>neutraali</button>
        <button onClick={this.huonoHandler}>huono</button>
        <br/>
        <h2>statistiikka</h2>
        <p>hyvä {this.state.hyva}</p>
        <p>neutraali {this.state.neutraali}</p>
        <p>huono {this.state.huono}</p>
      </div>
    )
  }
}

export default App
