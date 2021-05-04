import React from 'react'

const Rating = (props) => {
    const rate = Math.round(props.children)
    let string = "★".repeat(rate) + '☆'.repeat(5-rate)
    return <h1>{string}</h1>
}

export default Rating

/*
//----ANOTHER SOLUTION WITH SWITCH


import React from 'react';

class Rating extends React.Component {
    render(){
        const {children} = this.props
        const countStars =((rate)=>{
            switch(Math.round(rate)){
                case 0: 
                return (`☆☆☆☆☆`)
                case 1:
                return (`★☆☆☆☆`)
                case 2:
                return (`★★☆☆☆`)
                case 3:
                return (`★★★☆☆`)
                case 4:
                return (`★★★★☆`)
                case 5:
                return (`★★★★★`)
                default:
                return('error')
            }
        })
        return (
            <div className="rating">{countStars(children)}</div>
      );
    }
  }
  
  export default Rating;

*/