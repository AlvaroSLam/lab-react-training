import React from 'react'

const DriverCard = (props) => {
    const {name, rating, img, car} = props
    
    let divStyle = {
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        backgroundColor: 'rgb(70, 90, 163)',
        margin: '10px',
        borderRadius: '10px'
    }

    let imgStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        padding: '20px'
    }

    let rate = Math.round(rating)
    let str = '★'.repeat(rate) + '☆'.repeat(5-rate)

    return <div style={divStyle}>
            <img src={img} alt='img' style={imgStyle}></img>
            
            <div>
                <h3>{name}</h3>
                <p>{str}</p>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    
}

export default DriverCard