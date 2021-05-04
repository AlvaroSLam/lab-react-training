import React, { Component } from 'react'

class LikeButton extends Component {
    state={
        counter: 0,
        color: 'purple',
    }

    handleClick = () => {
        let colors = ['purple','blue','green','yellow','orange','red']
        let random = Math.floor(Math.random() * colors.length)
        this.setState({
            counter: this.state.counter +1,
            color: colors[random]
        })
    }

    render() {
        const styleDiv = {
            backgroundColor: this.state.color,
        }

        return (
            <div >
                <button style={styleDiv} onClick={this.handleClick}>{this.state.counter} likes</button>
            </div>
        )
    }
}

export default LikeButton