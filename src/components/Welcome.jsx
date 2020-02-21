import React from 'react'

const Welcome = (props) => {
    const name = props.match.params.name || props.name

    return (
    <h2>Welcome {name}!</h2>
    )
}

export default Welcome