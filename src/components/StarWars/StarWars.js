import React, { Component } from 'react';

const API = 'https://swapi.dev/api/people/'

class StarWars extends Component {
    state = { 
        people: []
     }
    componentDidMount(){
        this.fetchStarWars()
    }
    fetchStarWars=()=> {
        fetch(API)
        .then(resp=>resp.json())
        .then(data=>this.setState({people:data.results}))
        .catch(err=>console.log(err))
    }
    render() { 
        return ( 
        <>
            <h3>
                BTW, are you a STAR WARS fan?
            </h3>
            <ul>
                {this.state.people && this.state.people.map(character=><li key={character.name}>
                    {character.name}
                </li>)}
            </ul>
        </>
        );
    }
}
 
export default StarWars;