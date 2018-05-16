import React from 'react'
import Keskiarvo from './Keskiarvo.js'
import Prosentti from './Prosentti.js'

const Statistic = (props) => (
    <tbody>
      <tr>
        <td>hyvä</td><td></td><td>{props.number[0]}</td>
      </tr>
      <tr>
        <td>neutraali</td><td></td><td>{props.number[2]}</td>
      </tr>
      <tr>
        <td>huono</td><td></td><td>{props.number[1]}</td>
      </tr>
      <Keskiarvo numbers={props.number} sum={props.sum}/>
      <Prosentti list={props.number} sum={props.sum}/>
    </tbody>
)

export default Statistic
