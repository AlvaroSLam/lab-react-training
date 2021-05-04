import React from 'react'

class Dice extends React.Component {
    state = {
        dice: '/img/dice3.png'
    }

    handleChange = () => {
        const results = ['/img/dice1.png', '/img/dice2.png', '/img/dice3.png', '/img/dice4.png', '/img/dice5.png', '/img/dice6.png']
        let random = Math.floor(Math.random() * results.length)
        this.setState({dice: '/img/dice-empty.png'})
        setTimeout(() =>{
            this.setState({dice: results[random]})
        }, 1000)
    }

    render(){
        const {dice} = this.state
        return <img onClick={this.handleChange} src={dice} width='100px' style={{cursor: 'pointer', margin: '10px'}}/>
    }
}

export default Dice