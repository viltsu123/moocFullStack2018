import React from 'react'
import ReactDOM from 'react-dom'
import Otsikko from './Otsikko.js'
import Sisalto from './Sisalto.js'
import Yhteensa from './Yhteensa.js'

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat:[
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

  return (
    <div>
      <Otsikko title={kurssi} />
      <Sisalto part={kurssi} />
      <Yhteensa all={kurssi} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
