import React from 'react'

const Random = (props) => {
    const {min, max} = props
    const randomNum = Math.floor(Math.random() * (max - min) + min)
    
    return <div className='random-box'>
        <p>Random value between {min} and {max} = &gt; {randomNum}</p>
    </div>
    
}

export default Random