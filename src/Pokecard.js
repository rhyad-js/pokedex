import React, { Component } from 'react';
import './Pokecard.css'

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)

class Pokecard extends Component {
    render () {
        const pokeAPI = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`
        const pokeImg = `${pokeAPI}${padToThree(this.props.id)}.png`
        return (
            <div className="Pokecard">
                <h2 className="Pokecard-title">{this.props.name}</h2>
                <div className="Pokecard-img">
                    <img src={pokeImg} alt="Pokemon Card" />
                </div>
                <h3 className="Pokecard-data">Type: {this.props.type.toUpperCase()}</h3>
                <h3 className="Pokecard-data">EXP: {this.props.exp}</h3>
            </div>
        )
    }
}

export default Pokecard;