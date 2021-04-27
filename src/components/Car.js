import React from 'react';
const Car = ({ year, name, color, ageCar }) => {

    const colorInfo = color ? (<p>Couleur: {color}</p>) : (<p>Couleur: Néant</p>);

    if (name) {

        return (
            <tr>
                <td>{name}</td>
                <td>{year}</td>
                <td>{ageCar}</td>
                <td>{colorInfo}</td>
            </tr>
        )
    } else {
        return null
    }

}
export default Car