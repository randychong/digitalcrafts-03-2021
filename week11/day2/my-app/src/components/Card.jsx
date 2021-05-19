import React, { Component } from 'react'

export default class Card extends Component {
    state = {
        flip: false
    }
    render() {
        const {hp, id, name, sprites} = this.props.pokemon
        const uppercased = name.toUpperCase()
        return (
            <div className="pokemon-card">
                <img onMouseLeave={()=> this.setState({flip: !this.state.flip})} onMouseOver={()=> this.setState({flip: !this.state.flip})} src={this.state.flip ?  sprites.back : sprites.front } alt="" />
                <p>{uppercased}</p>
                <p>ID: {id}</p>
                <p>HP: {hp}</p>
            </div>
        )
    }
}
