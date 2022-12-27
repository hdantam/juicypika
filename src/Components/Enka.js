import React, { Component } from 'react';
import CharCard from './CharCard';

class Enka extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            signature: '',
            WL: 0,
            charInfo: ['error'],
        }
    }

    async fetchData() {
        fetch('https://enka.network/u/614778576/__data.json').then(response => response.json()).then(data => this.setState({
            name: data.playerInfo.nickname,
            signature: data.playerInfo.signature,
            WL: data.playerInfo.worldLevel,
            charInfo: data.avatarInfoList,
        }))
    }

    componentDidMount() {
        this.fetchData();

    }

    render() {
        return(
            <div>
                <h2>Nickname: {this.state.name}</h2>
                <h4>World Level: {this.state.WL}</h4>
                <h4>Signature: {this.state.signature}</h4>
                <p>Character details:</p> 
                <CharCard charInfo={this.state.charInfo}/>
            </div>
        );
    }
}

export default Enka;