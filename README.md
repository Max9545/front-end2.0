
# Selector (Front-End)

1. [Overview](#overview)
2. [Team](#create-by)
3. [Planning Resources](#planning-resources)
4. [Set Up](#setup-instructions)
5. [Learning Goals](#learning-goals)
6. [Technologies](#technologies)
7. [Features](#features)
8. [Challenges](#challenges)
9. [Wins](#wins)
10. [Future Additions](#future-iterations)

## Site Link
https://turing-selector.herokuapp.com/

## Overview:

_Selector_ is a web application that seamlessly connects your Discogs vinyl purchasing experience with the convenient streaming capabilities of Spotify. Users can discover, browse, save, and sample their (soon-to-be) favorite music. This __Cypress-tested__, multi-page user-interface was built using __React__, __React Router__, __JavaScript__, __HTML__, __CSS__, and __ApolloClient__; integrated using __Travis CI__ and depolyed on __Heroku__.

## Created by:
FE Team:
- [Marika Shanahan](https://github.com/monshan) | [LinkedIn](https://www.linkedin.com/in/marika-shanahan/)
- [Max Bregman](https://github.com/Max9545) | [LinkedIn](https://www.linkedin.com/in/max-bregman-216063203/)
- [Reggie Thompson](https://github.com/rdtho2525) | [LinkedIn](https://www.linkedin.com/in/reggie-thompson-136979137/)

BE Team:
_View the BE repo [here](https://github.com/selector-turing/back_end)_

- [Megan Gonzales](https://github.com/MGonzales26) | [LinkedIn](https://www.linkedin.com/in/megan-e-gonzales/)
- [Adam J. Bowers](https://github.com/Pragmaticpraxis37) | [LinkedIn](https://www.linkedin.com/in/adam-bowers-06a871209/)
- [Jordan Beck](https://github.com/jordanfbeck0528) | [LinkedIn](https://www.linkedin.com/in/jordan-f-beck/)


## Planning Resources

* [GitHub Project Board](https://github.com/orgs/selector-turing/projects/1)
* [wireframe](https://user-images.githubusercontent.com/70557704/119737153-0e2bd180-be3c-11eb-96a4-a3689cf88368.png)


## Setup Instructions


Clone down this repository to your local machine:

```
git clone git@github.com:selector-turing/front_end.git
```

Then `npm install` the following dependencies:

```
@material-ui/core
```

```
@material-ui/icons
```

```
@material-ui/lab
```

To start application, run:

```
npm start
```

After a successful compilation, the application is running and the app can be veiwed at `http://localhost:3000/` in your browser.



## Learning Goals
+ Demonstrate knowledge you’ve gained throughout Turing
+ Use an agile process to turn well defined requirements into deployed and production ready software
+ Gain experience dividing applications into components and domains of responsibilities to facilitate multi-developer teams. Service oriented architecture concepts and patterns are highly encouraged.
+ Explore and implement new concepts, patterns, or libraries that have not been explicitly taught while at Turing
+ Practice an advanced, professional git workflow using Git Rebase
+ Gain experience using continuous integration tools to build and automate the deployment of features
+ Build applications that execute in development, test, CI, and production environments
+ Focus on communication between front-end and back-end teams in order to complete and deploy features that have been outlined by the project spec


## Technologies

<img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
<img alt="Git" src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/>
<img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
<img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
<img alt="Cypress" src='https://img.shields.io/badge/cypress%20-%23404d59.svg?&style=for-the-badge&logo=Cypress&logoColor=white'/>
<img alt="React Router" src='https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white'/>
<img alt="Material UI" src='https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white'/>
<img alt="Travis CI" src='https://img.shields.io/travis/jupyterhub/jupyterhub/master?logo=travis'/>

_With_
__GraphQL__ & __ApolloClient__


---
## Features


#### Application Demo

![demo-vid](public/AlluresDemoSelector.gif)



---
## Challenges
+ Familiarizing ourselves with the relationship between GraphQL and ApolloClient
+ Continous-Integration with Travis CI
+ Adapting to the Git Rebase workflow
+ State and UI synchronization with regards to the application's favoriting feature
+ Disrupted flow of work caused by network request limitations from the source Discogs API
+ Album objects without unique title matches yields unexpected results

---
## Wins
+ Successfully submitting requests to ApolloClient
+ Overcoming failing Travis CI builds


---
## Future Iterations
+ A user can add favorite albums to a non-local database. 
+ A user can display all of their favorite albums in alignment with the non-local database.  
+ Utilizing the non-local database to keep GSM throughout the cache
+ Additional media types to consume music (YouTube, Shazam, SoundCloud, a ticket selling API for live concerts)


### How to Contribute

In the spirit of collaboration, things done together are better than done on our own. If you have any amazing ideas or contributions on how we can improve this API they are **greatly appreciated**. To contribute:

  1. Fork the Project
  2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
  3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
  4. Push to the Branch (`git push origin feature/AmazingFeature`)
  5. Open a Pull Request

### Roadmap

See the [open issues](https://github.com/selector-turing/front_end/issues) for a list of proposed features (and known issues). Please open an issue ticket if you see an existing error or bug.
