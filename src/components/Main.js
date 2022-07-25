import React from 'react';
import axios from 'axios';
import Navigationbar from './Navigationbar';
import Home from './Home';
import Browse from './Browse';
import AddDog from './AddDog';
import AdoptionProcess from './AdoptionProcess';
import UpdateDog from './UpdateDog';
import Loading from './Loading';
import Swal from 'sweetalert2';

const initialState = {
    active: 'home',
    loaded: false,
    modal: null,
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

    // dogBeingDeleted: false,
    dogBeingEdited: false,
    editDogName: "",
    editBreed: "",
    editGender: "",
    editDateOfBirth: "",
    editTemperament: [],
    editHealthStatus: [],
    editFamilyStatus: [],
    editHypoallergenic: "",
    editToiletTrained: "",
    editDescription: "",
    editPictureUrl: "",
    editOwnerName: "",
    editEmail: "",

    dataFiltered: [],
    keywordSearch: "",
    gteYearSearch: "",
    lteYearSearch: "",
    genderSearch: 'all',
    hypoallergenicSearch: false,
    healthSearch: [],
    familySearch: [],
    temperamentSearch: [],

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
            // data: response.data,
            dataFiltered: response.data,
            loaded: true
        })
    }

    updateDog = async () => {

        let response = await axios.get(`${this.url}dog_adoption/${this.state.modal}`);
        this.setState({
            editDogName: response.data.dogName,
            editBreed: response.data.breed,
            editGender: response.data.gender,
            editDateOfBirth: response.data.dateOfBirth,
            editTemperament: response.data.temperament,
            editHealthStatus: response.data.healthStatus,
            editFamilyStatus: response.data.familyStatus,
            editHypoallergenic: response.data.hypoallergenic,
            editToiletTrained: response.data.toiletTrained,
            editDescription: response.data.description,
            editPictureUrl: response.data.pictureUrl,
            editOwnerName: response.data.owner.ownerName,
            editEmail: response.data.owner.email,
            dogBeingEdited: true,
            loaded: true
        })

    }

    deleteAlert = () => {
        Swal.fire({
            title: 'Warning: This action is irrevisible!',
            text: "If you click 'Confirm Delete', this dog will be permanently removed from the database.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#dc3545',
            cancelButtonColor: '#0dcaf0',
            confirmButtonText: 'Confirm Delete'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your data has been removed.',
                'success',
                this.deleteDog()
              )
            }
          })
    }

    // cancelDeleteAlert = () => {
    //     this.setState({
    //         dogBeingDeleted: false
    //     })
    // }

    deleteDog = async () => {
        Swal.fire({
            template: '#my-template'
        })
        await axios.delete(`${this.url}dog_adoption/${this.state.modal}`);
        let response = await axios.get(this.url + 'dog_adoption');
        this.setState({
            'dataFiltered': response.data,
            'active': 'browse',
            'modal': null
        })
    }

    handleModal = (dogId) => {
        this.setState({
            modal: dogId
        })
    }

    closeModal = () => {
        this.setState({
            modal: null
        })
    }

    updateHypoallergenic = async (e) => {
        let newData
        this.state.hypoallergenicSearch === false ? newData = true : newData = false;

        this.setState({
            hypoallergenicSearch: newData
        });

        await setTimeout(() => {
            this.getSearchResults()
        }, 100);
    }

    updateGender = async (e) => {
        await this.setState({
            [e.target.name]: e.target.value
        });

        await setTimeout(() => {
            this.getSearchResults()
        }, 100);
    }

    updateSearchFormField = async (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

        await setTimeout(() => {
            this.getSearchResults()
        }, 100);
    }

    updateSearchCheckbox = async (e) => {

        if (this.state[e.target.name].includes(e.target.value)) {
            let index = this.state[e.target.name].indexOf(e.target.value);
            let cloned = this.state[e.target.name].slice(0);
            cloned.splice(index, 1)
            this.setState({
                [e.target.name]: cloned,

            });
        } else {
            let cloned = this.state[e.target.name].slice(0);
            cloned.push(e.target.value)

            this.setState({
                [e.target.name]: cloned
            });
        }
        await setTimeout(() => {
            this.getSearchResults()
        }, 100);
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

    hypoallergenicSearch = (e) => {
        this.setState({
            [e.target.name]: true
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

    // Search for dog
    getSearchResults = async () => {
        let response = await axios.get(this.url + 'dog_adoption', {
            params: {
                gender: this.state.genderSearch,
                search: this.state.keywordSearch,
                gteyear: this.state.gteYearSearch,
                lteyear: this.state.lteYearSearch,
                hypoallergenic: this.state.hypoallergenicSearch,
                healthStatus: this.state.healthSearch,
                familyStatus: this.state.familySearch,
                temperament: this.state.temperamentSearch
            }
        })
        this.setState({
            dataFiltered: response.data
        })
    }

    editNew = async () => {

        let updateDog = {
            dogName: this.state.editDogName,
            breed: this.state.editBreed,
            gender: this.state.editGender,
            dateOfBirth: this.state.editDateOfBirth,
            temperament: this.state.editTemperament,
            healthStatus: this.state.editHealthStatus,
            familyStatus: this.state.editFamilyStatus,
            hypoallergenic: this.state.editHypoallergenic,
            toiletTrained: this.state.editToiletTrained,
            description: this.state.editDescription,
            pictureUrl: this.state.editPictureUrl,
            owner: {
                ownerName: this.state.editOwnerName,
                email: this.state.editEmail
            }
        }
        let editId = this.state.modal
        await axios.put(`${this.url}dog_adoption/${this.state.modal}`, updateDog)

        let response = await axios.get(this.url + 'dog_adoption');

        // let index = this.state.data.findIndex(d => d._id === editId);

        this.setState({
            'dataFiltered': response.data,
            'active': 'browse',
            editDogName: "",
            editBreed: "",
            editGender: "",
            editDateOfBirth: "",
            editTemperament: [],
            editHealthStatus: [],
            editFamilyStatus: [],
            editHypoallergenic: "",
            editToiletTrained: "",
            editDescription: "",
            editPictureUrl: "",
            editOwnerName: "",
            editEmail: "",
            errors: {}
        })
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
                'dataFiltered': [...this.state.dataFiltered, newDog],
                'active': 'browse',
                modal: null,
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
                errors: {},
                dogBeingEdited: true
            })
        } catch (e) {
            alert('Error listing new dog. Please contact administrator. (Create Error)')
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
        let hypoallergenicErrorMsg = "";
        let toiletTrainedErrorMsg = "";
        let descriptionErrorMsg = "";
        let pictureUrlErrorMsg = "";
        let ownerNameErrorMsg = "";
        let emailErrorMsg = "";

        const { dogName, breed, gender, dateOfBirth, temperament, hypoallergenic,
            toiletTrained, description, pictureUrl, ownerName, email } = this.state

        const { dogNameError, breedError, genderError, dateOfBirthError, temperamentError, hypoallergenicError,
            toiletTrainedError, descriptionError, pictureUrlError, ownerNameError, emailError } = this.state.errors

        if (!dogName.match(/^[A-Za-z]+( [A-Za-z]+)*$/) && !this.state.editDogName.match(/^[A-Za-z]+( [A-Za-z]+)*$/)) {
            dogNameErrorMsg = "Please enter the dog's name";
        } else {
            if (dogNameError) {
                this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, dogNameError: dogNameErrorMsg } }));
            }
        }

        if (!gender && !this.state.editGender) {
            genderErrorMsg = "Please select a gender";
        } else {
            if (genderError) {
                this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, genderError: genderErrorMsg } }))
            }
        }

        if (!breed.match(/^[A-Za-z]+( [A-Za-z]+)*$/) && !this.state.editBreed.match(/^[A-Za-z]+( [A-Za-z]+)*$/)) {
            breedErrorMsg = "Please enter the dog breed";
        } else {
            if (breedError) {
                this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, breedError: breedErrorMsg } }))
            }
        }

        if (!dateOfBirth.match(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/) && !this.state.editDateOfBirth.match(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/)) {
            dateOfBirthErrorMsg = "Please select the dog's date of birth";
        } else {
            if (dateOfBirthError) {
                this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, dateOfBirthError: dateOfBirthErrorMsg } }))
            }
        }

        if ((temperament.length < 1 || temperament.length > 3) && (this.state.editTemperament.length < 1 || this.state.editTemperament.length > 3)) {
            temperamentErrorMsg = "Please select between 1 to 3 temperaments only";
        } else {
            if (temperamentError) {
                this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, temperamentError: temperamentErrorMsg } }))
            }
        }

        if (description.length < 50 && this.state.editDescription.length < 50) {
            descriptionErrorMsg = "Please enter a description with at least 50 characters";
        } else {
            if (descriptionError) {
                this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, descriptionError: descriptionErrorMsg } }))
            }
        }

        if ((!hypoallergenic && hypoallergenic !== false) && (!this.state.editHypoallergenic && this.state.editHypoallergenic !== false)) {
            hypoallergenicErrorMsg = "Please select an option";
        } else {
            if (hypoallergenicError) {
                this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, hypoallergenicError: hypoallergenicErrorMsg } }))
            }
        }

        if ((!toiletTrained && toiletTrained !== false) && (!this.state.editToiletTrained && this.state.editToiletTrained !== false)) {
            toiletTrainedErrorMsg = "Please select an option";
        } else {
            if (toiletTrainedError) {
                this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, toiletTrainedError: toiletTrainedErrorMsg } }))
            }
        }

        if (!pictureUrl.match(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/)
            && !this.state.editPictureUrl.match(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/)) {
            pictureUrlErrorMsg = "Please upload the image in the correct format";
        } else {
            if (pictureUrlError) {
                this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, pictureUrlError: pictureUrlErrorMsg } }))
            }
        }

        if (!ownerName.match(/^[A-Za-z]+( [A-Za-z]+)*$/) && !this.state.editOwnerName.match(/^[A-Za-z]+( [A-Za-z]+)*$/)) {
            ownerNameErrorMsg = "Please enter your name";
        } else {
            if (ownerNameError) {
                this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, ownerNameError: ownerNameErrorMsg } }))
            }
        }

        if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && !this.state.editEmail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            emailErrorMsg = "Please enter an appropriate email";
        } else {
            if (emailError) {
                this.setState(prevState => ({ ...prevState, errors: { ...prevState.errors, emailError: emailErrorMsg } }))
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

    handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = await this.validate();
        if (isValid) {
            this.addNew();
        }
    }

    handleEdit = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.editNew();
        }
    }

    renderContent() {
        if (this.state.loaded === false) {
            return (
                <Loading />
            )
        }
        else if (this.state.active === 'home') {
            return (
                <React.Fragment>
                    <Navigationbar
                        setActive={this.setActive}
                    />
                    <Home
                        setActive={this.setActive}
                    />
                </React.Fragment>
            );
        } else if (this.state.active === 'browse') {
            return (
                <React.Fragment>
                    <Navigationbar
                        setActive={this.setActive}
                    />
                    <Browse
                        data={this.state.dataFiltered}
                        setActive={this.setActive}
                        keywordSearch={this.state.keywordSearch}
                        genderSearch={this.state.genderSearch}
                        healthSearch={this.state.healthSearch}
                        familySearch={this.state.familySearch}
                        gteYearSearch={this.state.gteYearSearch}
                        lteYearSearch={this.state.lteYearSearch}
                        hypoallergenicSearch={this.state.hypoallergenicSearch}
                        temperamentSearch={this.state.temperamentSearch}
                        updateSearchCheckbox={this.updateSearchCheckbox}
                        updateSearchFormField={this.updateSearchFormField}
                        updateFormField={this.updateFormField}
                        updateGender={this.updateGender}
                        handleModal={this.handleModal}
                        closeModal={this.closeModal}
                        modal={this.state.modal}
                        updateHypoallergenic={this.updateHypoallergenic}
                        updateDog={this.updateDog}
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
                        setActive={this.setActive}
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
                        errors={this.state.errors}
                        handleSubmit={this.handleSubmit}
                        active={this.state.active}
                        data={this.state.dataFiltered}
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
        } else if (
            this.state.active === 'updateDog') {
            return (
                <React.Fragment>
                    <Navigationbar
                        setActive={this.setActive}
                    />
                    <UpdateDog
                        data={this.state.dataFiltered}
                        dogBeingEdited={this.state.dogBeingEdited}
                        editDogName={this.state.editDogName}
                        editBreed={this.state.editBreed}
                        editGender={this.state.editGender}
                        editDateOfBirth={this.state.editDateOfBirth}
                        editTemperament={this.state.editTemperament}
                        editHealthStatus={this.state.editHealthStatus}
                        editFamilyStatus={this.state.editFamilyStatus}
                        editHypoallergenic={this.state.editHypoallergenic}
                        editToiletTrained={this.state.editToiletTrained}
                        editDescription={this.state.editDescription}
                        editPictureUrl={this.state.editPictureUrl}
                        editOwnerName={this.state.editOwnerName}
                        editEmail={this.state.editEmail}
                        updateDog={this.updateDog}
                        errors={this.state.errors}
                        updateCheckbox={this.updateCheckbox}
                        updateFormField={this.updateFormField}
                        updateBooleanFormField={this.updateBooleanFormField}
                        handleEdit={this.handleEdit}
                        editNew={this.editNew}
                        modal={this.state.modal}
                        setActive={this.setActive}
                        // dogBeingDeleted={this.state.dogBeingDeleted}
                        deleteAlert={this.deleteAlert}
                        // cancelDeleteAlert={this.cancelDeleteAlert}
                        deleteDog={this.deleteDog}
                        active={this.state.active}
                    />
                </React.Fragment>
            )
        }
    }

    setActive = async (page) => {
        if (page === 'browse') {
            let response = await axios.get(this.url + 'dog_adoption');
            this.setState({
                active: page,
                dataFiltered: response.data,
                // dogBeingDeleted: false,
                genderSearch: 'all',
                keywordSearch: "",
                gteYearSearch: "",
                lteYearSearch: "",
                hypoallergenicSearch: false,
                temperamentSearch: [],
                healthSearch: [],
                familySearch: [],
                errors: {},
                editDogName: "",
                editBreed: "",
                editGender: "",
                editDateOfBirth: "",
                editTemperament: [],
                editHealthStatus: [],
                editFamilyStatus: [],
                editHypoallergenic: "",
                editToiletTrained: "",
                editDescription: "",
                editPictureUrl: "",
                editOwnerName: "",
                editEmail: "",
            })
        } else {
            this.setState({
                active: page,
                // dogBeingDeleted: false,
                genderSearch: 'all',
                keywordSearch: "",
                gteYearSearch: "",
                lteYearSearch: "",
                hypoallergenicSearch: false,
                temperamentSearch: [],
                healthSearch: [],
                familySearch: [],
                errors: {},
                editDogName: "",
                editBreed: "",
                editGender: "",
                editDateOfBirth: "",
                editTemperament: [],
                editHealthStatus: [],
                editFamilyStatus: [],
                editHypoallergenic: "",
                editToiletTrained: "",
                editDescription: "",
                editPictureUrl: "",
                editOwnerName: "",
                editEmail: "",
            })
        }

    }

    render() {
        return (
            <React.Fragment>
                {this.renderContent()}
            </React.Fragment>
        )
    }
}