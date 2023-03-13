## Study Frontend application

## This application is React js project.

## Hierarchy

- .eslintrc.json - file with codestyles configuration
- .gitignore - list of files ignored by git
- package.json - the main project configuration with all dependencies, scripts and pathes
- README.md - project description
- tailwind.config.js - file with tailwind configuration (for comfortable use SASS)
- tsconfig.json - file with typescript configuration

- src - directory with all project files
  - src/assets - directory with all images, icons, lottie-files and etc...
  - src/hooks - directory with custom hooks for easy work
  - src/navigation - directory with main navigation file and routes
  - src/pages - directory with pages
  - src/UI - directory with all custom UI components
  - src/widgets - directory with separated modules
  - src/shared - directory with shared modules

## What does the `widgets` folder contain?

- for example i'll use `Course` folder
  - `components` — folder with all components, which are needed for `Course page`;
  - `service.ts` — all CRUD requests to backend for `Course`;
  - `state.ts` — reducer and actions for `Course`;
  - `types.ts` — types for describe `Course` data

## How do I get set up it locally mode?

- Install all dependencies via `npm i`
- Run the project via `npm start`

## Development flow

- as a global state manager i decide to use `Redux/toolkit`
- as a request library i use `axios`

## How do i interact with the server?

- firstly i create class with static methods, where i write all functions that i need.
- then i create redux state (slice), where i will store and edit the data that comes from the server.
- then i create custom hook to connect redux and requests to the server.
  - Here i'll call all methods from the class (1 point) and write the data into redux.
- finally i return all CRUD functions and redux state from custom hook for comfortable development.
