import React from 'react'

const Rating = (props) => {
    const rate = Math.round(props.children)
    let string = "★".repeat(rate) + '☆'.repeat(5-rate)
    return <h1>{string}</h1>
}

export default Rating