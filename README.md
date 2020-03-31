# Hub3d
![logogit](https://user-images.githubusercontent.com/59829399/77955181-0c19c180-72d0-11ea-83b1-8d1879dd7995.png)

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

# Contents

- [components](#components)
- [services](#services)
- [moduls](#moduls)


## components
- landing-Page:
  > initial view of the web app. includes explanation of the function of the eb with images
- grid:
  > It contains an explanation of the web app with screenshots and images of how to create a project or collaborate on a project.
- navbar:
  > Navigation bar included in all components except with login.
  It includes sig in user, once registered or logged in you have access to your user and your modification options.
  logged in or not in navbar hat access all created projects.
  And of course no home link button
- login-register:
  > contains registered user access and the option to register and access to Home
- register:
  > Contains formula to create user and access to Home
- user:
  > Includes all the information of a user and access to user modifications,
    creation of projects and view of projects and collaborate on it.
    also navbar
- proyectcreate:
  > Contains project creation form
- proyectdetail:
  > It contains all the information of the project, its collaborations and access to the user who created it.
- proyects:
  > It contains the entire list of projects created by all users, plus filter search by type or category.

## services

- data.service: 
> contains all the of projects and collaborations backEnd information to interact and transfer with the FrontEnd
- user.service: 
> contains all the of projects and collaborationsUser information to interact and transfer with the FrontEnd

## moduls
- RouterModule : used to specify application states, manage state transitions while taking care of the URL, and load bundles on demand.
- HttpClientModule : allows to perform HTTP requests and easily manipulate those requests and their responses.
- FormsModule : Exports the required providers and directives for template-driven forms.
