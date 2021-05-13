import React, {useState} from 'react'

const ClickablePicture = (props) =>{
    const {img, imgClicked} = props

    const [image, setImage] = useState(img)
    return <img src={image} alt='logo' width='200px' onClick={() => image === img ? setImage(imgClicked) : setImage(img)}/>
}

export default ClickablePicture
