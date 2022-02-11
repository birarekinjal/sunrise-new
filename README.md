Project Setup
Clone the project repository from Github
Open a terminal and move the project directory
Run this command in terminal  - yarn install
Create a .env file at the root of the project folder and put the necessary variables there like base URL and other stuff.
Run the command in terminal to setup Husky pre-commit - npx husky install
Run this command in the terminal to start a project - yarn start
 
Technology Stack
   We have used React Js as a frontend framework
   For routing, we have used the React router
 
 
Directory Structure
   We have created specific folders for specific purposes. Below is the list of folders and the proper way to use them.
 
Root folder containing the src, public, package.json file.
 
Src        -  All the implementation code in the src folder
Public  - Public folder is containing all the image and index.html files.
Env       - This folder contains the API configuration in env file
 
In this src folder structure is divided into the 3 folders
 1) application
      In the application folder, there are present application config data.
 
       Hook
          This folder contains all the custom hooks used in the Application.
          File name starts with the `use` keyword
 
       Model
          This folder contains all the interfaces and types which use in the application.
 
       Redux
           All the store configurations are in this folder.
        
  
2) infrastructure
      In the infrastructure folder, there are defines the API call methods and common components used in the application.
components
This folder is used for creating component files
 A filename can be based on the component itself(ex. button, input, etc)
 All the common components file are created here.
 All the screen-specific components should go under Feature folders.
 Export default is preferable in each file.
 All the components should be as much configurable as possible through props
 index.js file at the root of this folder exports every component so that importing multiple components in any file is easy
 
Services
This folder contains all the services which used in the system.
 Folder based on module/service (user Management, vendor management) purpose(ex. user API)
 Functions should return the API call itself.
 API URL should be a relative URL to the base URL as we are setting the base URL in the Axios.
 The file should export the necessary API calls
 
 
  3) presentation
      In the presentation folder, there are represents the UI component that we used for the module.
ErrorBoundary
Module 
 
This folder contains all the feature modules in the system.
Folder based on feature/screen (user Management, vender management) purpose(ex. Authorization)
Each folder has one index file for routing purposes.All the route import in one file called ‘Index.js’
An Action filename can be based on a screen(ex. categories), purpose(ex. authorization), or an entity(ex. user).
 The file should export necessary action creators and action types.
 
         
      components
All the feature-specific components should go under module folders.
Export default is preferable in each file.
index.js file at the root of this folder exports every component so that importing multiple components in any file is easy
 
       schema
This folder is used for creating schema files for forms using yup library
 A filename can be based on a screen(ex. categories), form name
 Each schema file has logic to validate form fields using yup validation schema format.
   
         style
This folder is used for creating style files for specific modules.
 Create a separate sass module file (*.module.sass) for each at.
 
 2) routes
    All the routes are contained in this folder.
 
 
ReduxToolKit and Redux Persist Setup
We are using ReduxToolkit for the global store
The store is persisted across app restarts using redux-persist with async storage
 
API Configuration
We are using Axios to make API calls
We have set up base URL, request, and response interceptors in the Axios
We have created common get, put, post, patch, and delete methods to use them across the project
 All the setup is in the setup/client.js file
 
 
Husky Pre-commit Hook Configuration
We are using Husky to run a script before a commit happens to ensure good code quality, best practices, and code formatting.
We are using ESLint to check code quality and best practices using predefined linting rules
 We are using Prettier to format the code before a commit
   Anybody who is cloning the repository for the first time needs to run the following command to setup husky -> npx husky install
 
Material UI configuration
We have used the Material UI library for the UI
We will use module scss style and it will be page specific. So, if the page name home.js the sass file will be home.scss and we will import it home.js file
For Component related style we also do the same as we do in page-specific style (ex. button.module.scss).
 The global-related style will be added to an index.scss file
 For variable-related style will be added in a variable. scss file
We will add all style files to the styles folder.
 
 
 
 
 

