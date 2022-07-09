import React from 'react';
import axios from 'axios';
import Navigationbar from './Navigationbar';
import Home from './Home';
import Browse from './Browse';

export default class Main extends React.Component {

    url = "https://8888-jarednjk-dogadoptiontgc-e2h0d227p1k.ws-us53.gitpod.io/"

    state = {
        active: 'home',
        data: [
            {
                name: "Luffy",
                description: "iewfnoinuwefinuefwinewfinufewinuwef"
            },
            {
                name: "Duffy",
                description: "svfsdifndsiufsd dsiofjdsifjidsffdsf"
            }
        ],
    }

    async componentDidMount() {
        let response = await axios.get( this.url + 'dog_adoption');
        this.setState({
            data: response.data
        })
    }

    renderContent() {

        if (this.state.active === 'home') {
            return (
                <React.Fragment>
                    <Navigationbar
                        setActive={this.setActive}
                    />
                    <Home />
                </React.Fragment>
            );
        } else if (this.state.active === 'browse') {
            return (
                <React.Fragment>
                    <Navigationbar
                        setActive={this.setActive}
                    />
                    <Browse data={this.state.data}/>
                </React.Fragment>
            )
        }
    }

    setActive = (page) => {
        this.setState({
            'active': page
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.renderContent()}
            </React.Fragment>
        )
    }
}