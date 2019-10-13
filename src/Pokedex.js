import React, { Component } from 'react';
import './Pokedex.css'
import Pokecard from './Pokecard';

class Pokedex extends Component {
    render() {
        let title;
        if (this.props.isWinner) {
            title = <h2 className="Pokedex-win">Winner! 💪</h2>
        } else {
            title = <h2 className="Pokedex-lose">Loser! 💔</h2>
        }
        return (
            <div>
                {title}
                <h4>Total Experience: {this.props.exp}</h4>
                <div className="Pokedex">
                    {this.props.pokemon.map((p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex;