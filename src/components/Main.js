import React from 'react';
import axios from 'axios';
import Navigationbar from './Navigationbar';
import Home from './Home';
import Browse from './Browse';
import AddDog from './AddDog';

export default class Main extends React.Component {

    url = "https://8888-jarednjk-dogadoptiontgc-e2h0d227p1k.ws-us54.gitpod.io/";

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
        breed: "",
        gender: "",
        dateOfBirth: "",
        temperament: [],
        healthStatus: [],
        familyStatus: [],
        hypoallergenic: "",
        toiletTrained: "",
        description: "",
        pictureUrl: "",
        ownerName: "",
        email: ""
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
            [e.target.name]: e.target.value === 'true' ? true : false
        })
    }

    updateCheckbox = (e) => {
        // user unchecking checkbox
        // let currentValue = thisState[e.target.name]
        if (this.state[e.target.name].includes(e.target.value)) {
            let index = this.state[e.target.name].indexOf(e.target.value);
            // cloned the array
            let cloned = this.state[e.target.name].slice(0);
            // modify the array
            cloned.splice(index, 1)
            // cloned = [...cloned.slice(0, index), ...cloned.slice(index+1)];
            // replace original array in state with cloned
            this.setState({
                [e.target.name]: cloned
            });
        } else {
            let cloned = this.state[e.target.name].slice(0);
            // cloned = [...cloned, e.target.value];
            cloned.push(e.target.value)

            this.setState({
                [e.target.name]: cloned
            });
        }
    }

    // Add new dog listing
    addNew = async () => {
        try {
            let response = await axios.post(this.url + 'dog_adoption', {
                dogName: this.state.dogName,
                breed: this.state.breed,
                gender: this.state.gender,
                dateOfBirth: this.state.dateOfBirth,
                temperament: this.state.temperament,
                healthStatus: this.state.healthStatus,
                familyStatus: this.state.familyStatus,
                hypoallergenic: this.state.hypoallergenic,
                toiletTrained: this.state.toiletTrained,
                description: this.state.description,
                pictureUrl: this.state.pictureUrl,
                owner: {
                    ownerName: this.state.ownerName,
                    email: this.state.email
                }
    
            })

            let newDog = {
                _id: response.data.insertedId,
                dogName: this.state.dogName,
                breed: this.state.breed,
                gender: this.state.gender,
                dateOfBirth: this.state.dateOfBirth,
                temperament: this.state.temperament,
                healthStatus: this.state.healthStatus,
                familyStatus: this.state.familyStatus,
                hypoallergenic: this.state.hypoallergenic,
                toiletTrained: this.state.toiletTrained,
                description: this.state.description,
                pictureUrl: this.state.pictureUrl,
                owner: {
                    ownerName: this.state.ownerName,
                    email: this.state.email
                }
            }

            this.setState({
                'data': [...this.state.data, newDog],
                'active': 'browse'
            })
        } catch (e) {
            alert('Error listing new dog. Please contact administrator.')
        }
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
                        breed={this.state.breed}
                        gender={this.state.gender}
                        dateOfBirth={this.state.dateOfBirth}
                        temperament={this.state.temperament}
                        healthStatus={this.state.healthStatus}
                        familyStatus={this.state.familyStatus}
                        hypoallergenic={this.state.hypoallergenic}
                        toiletTrained={this.state.toiletTrained}
                        description={this.state.description}
                        pictureUrl={this.state.pictureUrl}
                        ownerName={this.state.ownerName}
                        email={this.state.email}
                        updateFormField={this.updateFormField}
                        updateBooleanFormField={this.updateBooleanFormField}
                        updateCheckbox={this.updateCheckbox}
                        addNew={this.addNew}
                        setActive={this.setActive}
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