import React from 'react';
import axios from 'axios';
import Navigationbar from './Navigationbar';
import Home from './Home';
import Browse from './Browse';
import AddDog from './AddDog';

export default class Main extends React.Component {

    url = "https://8888-jarednjk-dogadoptiontgc-e2h0d227p1k.ws-us53.gitpod.io/";

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
        dogName: "",
        gender: "",
        dateOfBirth: "",
        hypoallergenic: "",
        toiletTrained: "",
        ownerName: "",
        email: "",
        description: "",
        pictureUrl: "",
        temperament: [],
        healthStatus: [],
        familyStatus: []
    }

    async componentDidMount() {
        let response = await axios.get(this.url + 'dog_adoption');
        this.setState({
            data: response.data
        })
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    updateBooleanFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value === 'true'? true : false
        })
    }

    addNew = () => {
        
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
                    <Browse data={this.state.data} />
                </React.Fragment>
            )
        } else if (this.state.active === 'add dog') {
            return (
                <React.Fragment>
                    <Navigationbar
                        setActive={this.setActive}
                    />
                    <AddDog
                        dogName={this.state.dogName}
                        gender={this.state.gender}
                        dateOfBirth={this.state.dateOfBirth}
                        updateFormField={this.updateFormField}
                        updateBooleanFormField={this.updateBooleanFormField}
                        hypoallergenic={this.state.hypoallergenic}
                        toiletTrained={this.state.toiletTrained}
                        ownerName={this.state.ownerName}
                        email={this.state.email}
                        description={this.state.description}
                        pictureUrl={this.state.pictureUrl}
                    />
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