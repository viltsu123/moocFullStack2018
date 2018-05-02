import React from 'react'

const Yhteensa = (props) => (
  <div>
    <p>yhteensä {props.all.osat[0].tehtavia + props.all.osat[1].tehtavia + props.all.osat[2].tehtavia} tehtävää!</p>
  </div>
)

export default Yhteensa
