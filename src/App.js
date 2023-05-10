import React from 'react'
import ReactDOM from 'react-dom'

function Hello(props) { 
  return <h1>hello, {props.name}</h1>
}
const element = <Hello name="youna" />;

ReactDOM.render(element, document.getElementById('root'));

export default Hello