import React, {useState} from 'react'

const Carousel = (props) => {
    
    const {imgs} = props
    const [index, setIndex] = useState(0)
    return(
        <>
        <button onClick={()=> index <= 0 ? setIndex(3) : setIndex(index-1)}>-</button>
        <img src={imgs[index]} alt="img" />
        <button onClick={()=> index >= 3 ? setIndex(0) : setIndex(index+1) }>+</button>
        </>
    )
}

export default Carousel