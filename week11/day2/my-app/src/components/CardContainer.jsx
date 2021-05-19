import React, { Component } from 'react'
import Card from "./Card"

export default class CardContainer extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { pokemonName: '' };
    //     this.state = { pokemonHP: '' };
    //     this.state = { pokemonFront: '' };
    //     this.state = { pokemonBack: '' };
    //   }
    //   myChangeHandler1 = (event) => {
    //     this.setState({pokemonName: event.target.value});
    //   }
    //   myChangeHandler2 = (event) => {
    //     this.setState({pokemonHP: event.target.value});
    //   }
    //   myChangeHandler3 = (event) => {
    //     this.setState({pokemonFront: event.target.value});
    //   }
    //   myChangeHandler4 = (event) => {
    //     this.setState({pokemonBack: event.target.value});
    //   }

      state = {
        searchCriteria: "",
        pokemonBerries: [],
        pokemon: {}
    }

    async componentDidMount() {
      const berryUrl = "https://pokeapi.co/api/v2/berry/"
       const fetchData = await fetch(berryUrl,{ headers: {
      'Content-Type': 'application/json'
      
    },})
    const json = await fetchData.json()
    this.setState({
        pokemonBerries:json.results
    })
   }

    searchCriteria= (event) => {
        this.setState({
            searchCriteria: event.target.value
        })
    }
    render() {
        const {pokemonData} = this.props
        const filteredData = pokemonData[0].pokemon.filter(pokemon => pokemon.name.includes(this.state.searchCriteria))
        const newPokemon = {
            id: 448,
            name: "lucario",
            hp: 70,
            sprites: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
              back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/448.png",
            },
          }
        return (
            <div>
                <h1>Card Container</h1>
                <input onChange={(e)=>this.searchCriteria(e)}type="text" placeholder="Search for a pokemon"></input>

                <div>
                <form>
                 <input className="create-field"type="text" placeholder="Enter a Name" onChange={this.myChangeHandler1}/>
                 <input className="create-field" type="text" placeholder="Enter a HP" onChange={this.myChangeHandler2}/>
                 <input className="create-field" type="text" placeholder="Enter front URL" onChange={this.myChangeHandler3}/>
                 <input className="create-field" type="text" placeholder="Enter back URL" onChange={this.myChangeHandler4}/>
                <button onClick={(e)=>{
                    e.preventDefault()
                    this.setState({pokemon: filteredData.push(newPokemon)})
                    console.log(filteredData)
                    }}className="create-button">Create</button>
                </form>
                </div>

                <div className="card-container">
                <p>{this.state.pokemonName}</p>
                <p>{this.state.pokemonHP}</p>
                <img src={this.state.pokemonFront}></img>
                <img src={this.state.pokemonBack}></img>
                {filteredData.map((singlePokemon,index) => <Card key={singlePokemon.name}  pokemon={singlePokemon}  />)}
                </div>
            </div>
        )
    }
}
