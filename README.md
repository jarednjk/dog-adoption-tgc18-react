# Adogpt

The live demo of the React frontend web application can be accessed [here](https://adogpt.netlify.app/).

The backend API implementation can be accessed [here](https://github.com/jarednjk/dog-adoption-tgc18-express).

## Project Summary

### Project Context

Adogpt is a mobile responsive web application that allows users to rehome or adopt a dog by implementing CRUD (Create, Read, Update, Delete).

For dog owners who wish to rehome their dogs, they can create, update and delete a dog listing. For new dog owners, they can read and get information of the dog adoption listings.

It is developed using the MERN (MongoDB, ExpressJS, React, NodeJS) stack.

### Target Audience

It is targeted mainly at individual dog owners who wish to rehome their dogs or potential dog owners who are looking at adoption over buying.

Organisations usually already have their own dog adoption websites, but they are more than welcome to list with Adogpt to get more outreach.

### Justification for the App

Unlike an organisational adoption website, this web application helps to connect current and potential dog owners.

Current dog owners might put their pet up for adoption for certain reasons such as anxiety issues, aggression issues, and housebreaking issues. However, they still deeply love their dogs and want to entrust it to someone whom they can trust.

Future dog owners may prefer adopting from a dog owner over an organisation. Firstly, there is no adoption fee involved. Secondly, it is easier to find a well-trained pedigree breed from a dog owner than an organisation like SPCA where most of the dogs are stray or abused.

Also, certain pet adoption websites are too complicated and make it difficult for users to navigate. Thus, I have made this web application easy for users to gather important information on the dog listings available for adoption. They can filter criterias like HDB-approved and hypoallergenic depending on their needs.

## UX / UI

### Strategy

#### Organisation Goal

This web application serves as a platform to connect current and potential dog owners. It provides awareness on the benefits of adoption which may potentially prevent a dog from being euthanised due to space constraints in dog shelters.

#### User Goals

| User Story | Acceptance Criteria |
| ----------- | ----------- |
| A current dog owner who wants to rehome his dog | He wants to be able to create a dog listing in the web application |
| A current dog owner who accidentally enters the wrong details | He wants to be able to edit the dog listing so that the information is up-to-date and accurate |
| A potential dog owner who wants to find a certain dog or attribute | Search bar to filter the dog listings based on the criteria user requires |
| A potential dog owner who wants to know the benefits of adopting | An information area to point out the benefits of adopting over buying |
| A potential dog owner who wants to know how the adoption process works | An information area that goes in detail the step-by-step process |

### Scope

#### Functional Requirements

- Browse all the dog listings available for adoption
- Search and filter dog listings based on certain criterias
- View details of dog listing
- Create dog listing on web application
- Edit dog listing
- Delete dog listing

#### Non-functional Requirements

- Performance criteria
- Mobile responsiveness

### Structure

All pages of the web application can be accessed via the navigation bar. The flowchart below shows how different features can be accessed:

![Web app structure](https://github.com/jarednjk/dog-adoption-tgc18-react/blob/main/src/img_readme/app_structure.png)

### Surface

**Colours**: A vibrant colour combination of light blue and yellow is used to bring life to the dogs.

**Fonts**: Roboto and sans serif are selected for a clean and cutting edge look to make it easy on the user's eyes.

## Features

| Feature | Description |
| ----------- | ----------- |
| Dynamic search and filter | The results are displayed instantaneously as the users search and filter dog listings by different criterias. |
| View full details of dog listings | User can click on each card and it will expand out to a modal that displays all the details of the dog. |
| Create new dog listing | A form with validation to enter required information to create a dog listing in the database |
| Edit dog listing | A form with validation to edit changes so that the information is up-to-date and accurate   |
| Delete dog listing | Allows current dog owners to delete their dog listings from the database after their dogs are adopted. |

## Limitations & Future Implementations

| Limitation | Future Implementation |
| ----------- | ----------- |
| Users are unable to filter the dog listings from the youngest to oldest or vice versa | Create a radio button which allows users to select from the youngest to oldest and vice versa |
| Other users can edit or delete the dog listings of the original creator | Create a user authentication where users can only edit or delete dog listings belonging to them |
| Browse page will become longer as more listings are created | Implement pagination to limit the number of dog listings per page |

## Technologies Used

1. HTML5
2. CSS3
3. Javascript
4. [React](https://reactjs.org/)
5. [React Bootstrap](https://react-bootstrap.github.io/) for styling website
6. [Boostrap 5](https://getbootstrap.com/) for icons
7. [Axios](https://github.com/axios/axios) to communicate with ExpressJS server for CRUD (Create, Read, Update, Delete) in database
8. [sweetalert2](https://sweetalert2.github.io/)

## Deployment

The web application is hosted using [Netlify](https://www.netlify.com/), deployed directly from the main branch of this GitHub repository. For the detailed deployment steps, you may refer [here](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/).

## Credits & Acknowledgement

- [Canva]https://www.canva.com/ for the brand logo
- [Google Fonts](https://fonts.google.com/) for the font
- [Unsplash](https://unsplash.com/) for the dog images
- [StackOverflow](https://stackoverflow.com/) for RegEx in form validation
- [WebDevSimplified](https://www.youtube.com/watch?v=Gx35fMhDPWs) for loading spinner
- [nanometre](https://github.com/nanometre) for his minimalistic design