import React from 'react';
import axios from 'axios';
import Navigationbar from './Navigationbar';
import Home from './Home';
import Browse from './Browse';
import AddDog from './AddDog';
import AdoptionProcess from './AdoptionProcess';

const initialState = {
    active: 'home',
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
    email: "",

    errors: {
        dogNameError: "",
        breedError: "",
        genderError: "",
        dateOfBirthError: "",
        temperamentError: [],
        healthStatusError: "",
        familyStatusError: [],
        hypoallergenicError: "",
        toiletTrainedError: "",
        descriptionError: "",
        pictureUrlError: "",
        ownerNameError: "",
        emailError: ""
    }
}

export default class Main extends React.Component {

    url = "https://8888-jarednjk-dogadoptiontgc-e2h0d227p1k.ws-us54.gitpod.io/";

    state = initialState;

    async componentDidMount() {
        let response = await axios.get(this.url + 'dog_adoption');
        this.setState({
            data: response.data
        })
    }

    updateFormField = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
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
                'active': 'browse',
            })
        } catch (e) {
            alert('Error listing new dog. Please contact administrator.')
        }
    }

    // show form validation errors

    validate = () => {
        let hasErrors = false;
        let dogNameErrorMsg = "";
        let breedErrorMsg = "";
        let genderErrorMsg = "";
        let dateOfBirthErrorMsg = "";
        let temperamentErrorMsg = "";
        let healthStatusErrorMsg = "";
        let familyStatusErrorMsg = "";
        let hypoallergenicErrorMsg = "";
        let toiletTrainedErrorMsg = "";
        let descriptionErrorMsg = "";
        let pictureUrlErrorMsg = "";
        let ownerNameErrorMsg = "";
        let emailErrorMsg = "";

        const { dogName, breed, gender, dateOfBirth, temperament,hypoallergenic, 
            toiletTrained, description, pictureUrl, ownerName, email } = this.state

        const { dogNameError, breedError, genderError, dateOfBirthError, temperamentError, hypoallergenicError, 
            toiletTrainedError, descriptionError, pictureUrlError, ownerNameError, emailError } = this.state.errors

        if (!dogName.match(/^[A-Za-z]+( [A-Za-z]+)*$/)) {
            dogNameErrorMsg = "Please enter the dog's name";
        } else {
            if (dogNameError) {
                this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, dogNameError: dogNameErrorMsg } }));
            }
        }

        if (!gender) {
            genderErrorMsg = "Please select a gender";
        } else {
            if (genderError) {
                this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, genderError: genderErrorMsg } }))
            }
        }

        if (!breed.match(/^[A-Za-z]+( [A-Za-z]+)*$/)) {
            breedErrorMsg = "Please enter the dog breed";
        } else {
            if (breedError) {
                this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, breedError: breedErrorMsg } }))
            }
        }

        if (!dateOfBirth.match(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/)) {
            dateOfBirthErrorMsg = "Please select the dog's date of birth";
        } else {
            if (dateOfBirthError) {
                this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, dateOfBirthError: dateOfBirthErrorMsg } }))
            }
        }

        if (temperament.length < 1 || temperament.length > 3) {
            temperamentErrorMsg = "Please select between 1 to 3 temperaments only";
        } else {
            if (temperamentError) {
                this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, temperamentError: temperamentErrorMsg } }))
            }
        }

        if (description.length < 50) {
            descriptionErrorMsg = "Please enter a description with at least 50 characters";
        } else {
            if (descriptionError) {
                this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, descriptionError: descriptionErrorMsg } }))
            }
        }

        if (!hypoallergenic && hypoallergenic !== false ) {
            console.log(hypoallergenic)
            hypoallergenicErrorMsg = "Please select an option";
        } else {
            if (hypoallergenicError) {
                this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, hypoallergenicError: hypoallergenicErrorMsg}}))
            }
        }

        if (!toiletTrained && toiletTrained !== false) {
            toiletTrainedErrorMsg = "Please select an option";
        } else {
            if (toiletTrainedError) {
                this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, toiletTrainedError: toiletTrainedErrorMsg}}))
            }
        }

        if (!pictureUrl.match(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/)) {
            pictureUrlErrorMsg = "Please upload the image in the correct format";
        } else {
            if (pictureUrlError) {
                this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, pictureUrlError: pictureUrlErrorMsg}}))
            }
        }

        if (!ownerName.match(/^[A-Za-z]+( [A-Za-z]+)*$/)) {
            ownerNameErrorMsg = "Please enter your name";
        } else {
            if (ownerNameError) {
                this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, ownerNameError: ownerNameErrorMsg}}))
            }
        }

        if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            emailErrorMsg = "Please enter an appropriate email";
        } else {
            if (emailError) {
                this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, emailError: emailErrorMsg}}))
            }
        }

        if (dogNameErrorMsg) {
            this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, dogNameError: dogNameErrorMsg } }))
            hasErrors = true;
        }

        if (genderErrorMsg) {
            this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, genderError: genderErrorMsg } }))
            hasErrors = true;
        }

        if (breedErrorMsg) {
            this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, breedError: breedErrorMsg } }))
            hasErrors = true;
        }

        if (dateOfBirthErrorMsg) {
            this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, dateOfBirthError: dateOfBirthErrorMsg } }))
            hasErrors = true;
        }

        if (temperamentErrorMsg) {
            this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, temperamentError: temperamentErrorMsg } }))
            hasErrors = true;
        }

        if (descriptionErrorMsg) {
            this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, descriptionError: descriptionErrorMsg } }))
            hasErrors = true;
        }

        if (hypoallergenicErrorMsg) {
            this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, hypoallergenicError: hypoallergenicErrorMsg } }))
            hasErrors = true;
        }

        if (toiletTrainedErrorMsg) {
            this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, toiletTrainedError: toiletTrainedErrorMsg } }))
            hasErrors = true;
        }

        if (pictureUrlErrorMsg) {
            this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, pictureUrlError: pictureUrlErrorMsg } }))
            hasErrors = true;
        }

        if (ownerNameErrorMsg) {
            this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, ownerNameError: ownerNameErrorMsg } }))
            hasErrors = true;
        }

        if (emailErrorMsg) {
            this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, emailError: emailErrorMsg } }))
            hasErrors = true;
        }


        return !hasErrors;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('handle submit called')
        const isValid = this.validate();
        if (isValid) {
            this.addNew();
            console.log(this.state);
            this.setState(initialState);
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
                    <Browse data={this.state.data}
                        setActive={this.setActive}
                    />
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
                        setActive={this.setActive}
                        errors={this.state.errors}
                        handleSubmit={this.handleSubmit}
                    />
                </React.Fragment>
            )
        } else if (this.state.active === 'adoptionProcess') {
            return (
                <React.Fragment>
                    <Navigationbar
                        setActive={this.setActive}
                    />
                    <AdoptionProcess />
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