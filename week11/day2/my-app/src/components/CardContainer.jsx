import React, { Component } from 'react'
import Card from "./Card"

export default class CardContainer extends Component {
    state = {
        searchCriteria: "",
        name: "",
        id: "",
        hp: "",
        frontURL: "",
        backURL: "",
        newPokemon: []
    }

    componentDidMount() {
      this.setState({
        newPokemon: this.props.pokemonData[0].pokemon
      })
    }

    searchCriteria= (event) => {
        this.setState({
            searchCriteria: event.target.value
        })
    }

    handleInputFormValues = (event) => {
      this.setState({
          [event.target.name]: event.target.value,
      })
  }

    handleSubmit = (e) => {
      const {name, id, hp, frontURL, backURL} = this.state
      e.preventDefault();
      const newPokemonData = {
        name: name,
        id: id,
        hp: hp,
        sprites: {
          front: frontURL,
          back: backURL,
        }
      }
      this.setState({
        newPokemon: [newPokemonData,...this.state.newPokemon]
      })
    }

    deletePokemon = (index) => {
      const pokeData = this.state.newPokemon
      console.log(pokeData)
      pokeData.filter((pokemon) => {
        this.setState(pokemon != index)
      })
    }
    render() {
        const filteredData = this.state.newPokeon.filter(pokemon => pokemon.name.includes(this.state.searchCriteria))
        return (
            <div>
                <h1>Card Container</h1>
                <input onChange={(e)=>this.searchCriteria(e)}type="text" placeholder="Search for a pokemon"></input>

                <div>
                <form
                  onSubmit={this.handleSubmit}>
                  <input 
                    className="create-field"
                    type="text" 
                    placeholder="Enter a Name" 
                    name="name" 
                    value={this.state.name} 
                    onChange={this.handleInputFormValues}
                  />
                  <input 
                    className="create-field"
                    type="text" 
                    placeholder="Enter in ID" 
                    name="id" 
                    value={this.state.id} 
                    onChange={this.handleInputFormValues}
                  />
                  <input 
                    className="create-field" 
                    type="text" 
                    placeholder="Enter a HP" 
                    name="hp" 
                    value={this.state.hp} 
                    onChange={this.handleInputFormValues}
                  />
                  <input 
                    className="create-field" 
                    type="text" 
                    placeholder="Enter front URL" 
                    name="frontURL" 
                    value={this.state.frontURL} 
                    onChange={this.handleInputFormValues}
                  />
                  <input 
                    className="create-field" 
                    type="text" 
                    placeholder="Enter back URL" 
                    name="backURL" 
                    value={this.state.backURL}  
                    onChange={this.handleInputFormValues}
                  />
                  <button className="create-button">Create</button>
                </form>
                </div>

                <div className="card-container">
                {filteredData.map((singlePokemon, index) => <Card key={singlePokemon.name}  pokemon={singlePokemon}  index={index}
                delPokemon={this.deletePokemon}/>)}
                </div>
            </div>
        )
        }
}
