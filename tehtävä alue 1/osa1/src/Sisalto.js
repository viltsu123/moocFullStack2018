import React from 'react'
import Osa from './Osa.js'

const Sisalto = (props) => (
  <div>
    <Osa name={props.part.osat[0].nimi} desc={props.part.osat[0].tehtavia}/>
    <Osa name={props.part.osat[1].nimi} desc={props.part.osat[1].tehtavia}/>
    <Osa name={props.part.osat[2].nimi} desc={props.part.osat[2].tehtavia}/>
  </div>
)
export default Sisalto
