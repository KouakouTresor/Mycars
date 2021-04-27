import React, { Component, Fragment } from 'react';
import Car from './Car'

class MyCars extends Component {
    state = {
        voitures: [
            { name: 'Ford', year: 2000, color: 'red' },
            { name: 'Mercedes', year: 2019, color: 'black' },
            { name: 'Ford', year: 2005, color: 'white' },
            { name: 'Fiat', year: 2002, color: 'green' }

        ],
        titre: "Mon catalogue voiture"
    }


    changeTitre = (e) => {
        e.preventDefault()
        this.setState({
            titre: "Mon nouveau catalogue"
        })

    }

    changeTitreParam = (titre) => {
        this.setState({
            titre: titre
        })
    }


    changeTitreBind = (params) => {
        this.setState({
            titre: params
        })
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            titre: e.target.value
        })

    }

    noCopy = (e) => {
        e.preventDefault()
        alert('Merci de ne pas copier le text')
    }

    styleChange = (e) => {
        console.log(e.target)
        if (e.target.classList.contains('styled')) {
            e.target.classList.remove('styled')
        } else {
            e.target.classList.add('styled')
        }

    }

    addYear = () => {
        const yearCars = this.state.voitures.map((param) => {
            return param.year -= 3
        })

        return this.setState(yearCars)
    }

    const

    render() {
        const yearDate = new Date().getFullYear()
        return (
            <Fragment className="myCars">
                <h1 onMouseOver={this.styleChange}>{this.state.titre}</h1>
                <p onCopy={this.noCopy} >Blala ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <button onClick={this.addYear}> - 5 ans </button>

                <table className="table">
                    
                        <tr>
                            <th>Marque</th>
                            <th>Année</th>
                            <th>Age</th>
                            <th>Couleur</th>
                 </tr>
                    {
                        this.state.voitures.map((voiture, index) => {
                            return (
                                <Fragment key={index}>
                                    <Car name={voiture.name} color={voiture.color} year={voiture.year + ' ans'} ageCar={yearDate - voiture.year + " ans"}></Car>
                                </Fragment>
                            )

                        })
                    }
                    </table>
                    <button onClick={this.changeTitre}>Changer le nom</button>
                    <button onClick={() => this.changeTitreParam('Titre via param')}>Titre via param</button>
                    <button onClick={this.changeTitreBind.bind(this, 'Titre via Bind')}>Titre via bind</button>
                    <input type="text" onChange={this.handleChange} />
                
            </Fragment>
        )
    }
}

export default MyCars

