import React, {Component} from "react";
import './style.css'
import grouping from "./Affiliations";
import Affiliations from "./Affiliations";





class StarWars extends Component    {
    constructor(props) {
        super(props);

        this.state = {
            name: null,
            height: null,
            gender: null,
            homeworld: null,
            loadCharacter: false,
            affiliations: []


        }

    }
    getNewCharacter()   {
        const randomNumber = Math.round(Math.random() * 88)
        console.log("I have been clicked")
        const url = 'https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/' + randomNumber + '.json'
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loadCharacter: true,
                    name:data.name,
                    height:data.height,
                    gender:data.gender,
                    homeworld:data.homeworld,
                    image:data.image,
                    affiliations:data.affiliations
            })


        })
    }

    render() {
        const groups = this.state.affiliations.map((group, i) => {
            return <Affiliations affiliations={group} key={i}/>
        })
        return (


            <div className={'starwars'}>
                {
                    this.state.loadCharacter &&
                    <div className={'maincontent'}>
                    <div className={'maininfo'}>

                        <img src={this.state.image} alt={this.state.name} className={'image'}/>
                        <h1>Name: {this.state.name}</h1>
                        <p>Height: {this.state.height}m</p>
                        <p>Gender: {this.state.gender}</p>
                        <p>Homeworld: {this.state.homeworld}</p>
                    </div>
                        <ul>
                            {groups}
                        </ul>

                    </div>

                }
                        <button className={'btn'} type={'button'} onClick={() => this.getNewCharacter()}>Randomize</button>

            </div>
        );
    }
}

export default StarWars