import React, {useState} from 'react'

const Dice = () => {
    const results = ['/img/dice1.png', '/img/dice2.png', '/img/dice3.png', '/img/dice4.png', '/img/dice5.png', '/img/dice6.png']
    const [dice, setDice] = useState('/img/dice3.png')

    const handleDice = () =>{
        let random = Math.floor(Math.random() * results.length)
        setTimeout(()=>{
            setDice(results[random])
        }, 1000)

        setDice('/img/dice-empty.png')
    }

    return (
     <img src={dice} alt='dice' width='100px' onClick={handleDice}/>   
    )
    

}

export default Dice
