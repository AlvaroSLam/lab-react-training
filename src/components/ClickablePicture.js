import React from 'react'

class ClickablePicture extends React.Component {
    
    state={
        photo: this.props.img
    }

    handleChange = () => {
        const {photo} = this.state
        const {img, imgClicked} = this.props

        photo === img ? this.setState({ photo: imgClicked }) : this.setState({ photo: img })
    }

    render(){
        const {photo} = this.state
        return <img onClick={this.handleChange} src={photo} alt='person' style={{cursor: 'pointer'}} />
    }
}

export default ClickablePicture