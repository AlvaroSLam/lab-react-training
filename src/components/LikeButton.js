import React, {useState} from 'react'

const LikeButton = () => {

    const [counter, setCounter] = useState(0)
    const [color, setColor] = useState('purple')
    const colors = ['purple','blue','green','yellow','orange','red']
    
    const handleClick = ()  => {
        
        let random = Math.floor(Math.random() * colors.length)        
        setCounter(counter+1)
        setColor(colors[random])        
    }

    return(
        <div>
            <button style={{backgroundColor: color}} onClick={handleClick}>{counter} likes</button>
        </div>
    )
}

export default LikeButton


