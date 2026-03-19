import React from 'react'
// import PropTypes from 'prop-types'

const Props = (props) => {
  return (
    <div>
        <h1>Hello {props.firstname}</h1>
        <h1>You are {props.age} years old</h1>
        <h1>Students : {props.isStudent ? "Yes" : "No"}</h1>

    </div>
  )
}

// Props.propTypes = {
//   firstname : PropTypes.string,
//   age: PropTypes.number,
//   isStudent: PropTypes.bool,
// }


export default Props