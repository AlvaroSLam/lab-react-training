import React from 'react'

class Carousel extends React.Component {
    state={
        index: 0,
    }

    handlePlus = () => {        
        this.state.index >= 3 ? this.setState({ index: 0}) : this.setState({ index: this.state.index + 1 }) 
    }

    handleMinus = () =>{
        this.state.index <= 0 ? this.setState({ index: 3}) : this.setState({ index: this.state.index - 1 })
    }
    render(){
        const {imgCarrousel, index} = this.state
        
        return (
        <div>
            <button onClick={this.handleMinus}>-</button>
            <img src={this.props.imgs[index]} alt='img'/>
            <button onClick={this.handlePlus}>+</button>
        </div>
        )
    }
}



export default Carousel