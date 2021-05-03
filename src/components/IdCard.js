import React from 'react'

class IdCard extends React.Component {
    render(){
        const {lastName, firstName, gender, height, birth, picture} = this.props
        return (
            <div className='id-card'>
                <div>
                    <img src={picture} alt={firstName}/>
                </div>
                
                <div>
                    <p><b>First Name:</b>{firstName}</p>
                    <p><b>Last Name:</b>{lastName}</p>
                    <p><b>Gender:</b>{gender}</p>
                    <p><b>Heigth:</b>{height}</p>
                    <p><b>Birth:</b>{birth.toDateString()}</p>
                </div>
            
          
            </div>
        )
    }
}

export default IdCard