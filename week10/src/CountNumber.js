import React from 'react'


function CountNumber(properties) {
    function coloredNumber() {
        if (properties.count >= 0) {
            return `rgb(${properties.count*5}, 0, 0)`
       
        }

        if (properties.count <= 0) {
            return `rgb(0, 0, ${properties.count*(-5)})`
        }
       
    }
    const h2Style = {
        fontSize: '30px',
        color: `${coloredNumber()}`
    }


 return (

 <h2 style={h2Style}>{properties.count}</h2>

 )

}


export default CountNumber