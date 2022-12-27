import React, { Component } from 'react';

class CharCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return(
            <div>
                <p>Char Name: {this.props.charInfo[0].avatarId}</p>
            </div>
        );
    }
}

export default CharCard;