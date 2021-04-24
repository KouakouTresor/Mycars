import React from 'react';
const Car = ({year, name, color,ageCar }) => {

    const colorInfo = color ? (<p>Couleur: {color}</p>) : (<p>Couleur: Néant</p>);

    if (name) {
    
        return (
            <div className="car">
                <p>Marque: {name} </p>
                <p>Année: {year} </p>
                <p>Age: {ageCar} </p>
                { colorInfo}
            
            </div>
        )
    } else {
        return null /* (
            <div className="car">
               Pas de data
            </div>
        ) */

    }

}
export default Car