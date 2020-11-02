# Tandem Trivia Coding Challenge 2020

This app displays trivia questions with multiple choices so YOU can have some fun and level up your trivia skills!

NOTE: App built with [Create React App](https://github.com/facebook/create-react-app), styled with [TailWindCSS](https://github.com/tailwindlabs/tailwindcss) and created for [Tandem's SE Apprenticeship Code Challenge](https://madeintandem.com/about/apprenticeship-program/).

The code is available through [GitHub](https://github.com/vinchinzo123/Tandem_Apprentice_Challenge_2020/blob/master/src/function.js), deployed using [Heroku](https://www.heroku.com/) and can be found [here](https://radiant-brushlands-01040.herokuapp.com/)!

**Check it out on your mobile device as well!**

## Getting Started

After cloning the project from its [repository](git@github.com:vinchinzo123/Tandem_Apprentice_Challenge_2020.git) open a terminal `cd` into the cloned directory and enter a command to install all dependencies if using [node package manager](https://github.com/npm) run the command `npm i`, this will install all needed dependencies.

Then run `npm start` and to open the app via [http://localhost:3000](http://localhost:3000).

#### Dependencies beyond a create-react-app

- autoprefixer@9.0.0 [not beyond 9.0.0](https://stackoverflow.com/questions/64057023/error-postcss-plugin-autoprefixer-requires-postcss-8-update-postcss-or-downgra) or the code [won't work](https://github.com/postcss/postcss/releases/tag/8.0.0)
- postcss-cli
- tailwindcss

Once you have done this you should be good to run needed scripts.

## Challenge Requirements

- A user can view questions.
- Questions with their multiple choice options must be displayed one at a time.
- Questions should not repeat in a round.
- A user can select only 1 answer out of the 4 possible answers.
- The correct answer must be revealed after a user has submitted their answer
- A user can see the score they received at the end of the round

## Challenge Assumptions

- A round of trivia has 10 Questions
- All questions are multiple-choice questions
- Your score does not need to update in real time
- Results can update on form submit, button click, or any interaction you choose
- Tandem will provide you with the trivia data such as the questions, correct and incorrect answers via a
  JSON file.

## Known Issues

- Multiple user refreshes thrown the timer component and the question component out of sync.

- ~~User can refresh after a question was answered to answer the question again correctly.~~

- ~~User can go back to the previous question to change their answer.~~

## Additional Features

- Track users total scores throughout rounds (ie. high-score board)
- Users able to add their own questions

## What I learned

I was immediately excited to start this coding project when I first heard about Tandem's apprenticeship on Kenzie Academy's slack channel #job-leads just a few days before the prompt was available. I read over the details on Tandem's website, dowloaded the 2019 plant watering challenge and started to think how I would write that code.

Realizing the emphasis on testing and my lack of testing with React, I knew I had to learn how to write and implement tests. I spent days leading up to when the 2020 prompt would be released to look up how to write good tests for React, which technologies I needed to use and how to use them. The tests in this project are ran with [Jest](https://jestjs.io/en/) and [react-testing-library](https://testing-library.com/).

I decided Context API, also new to me, would be used for state management.

Proudly I can say this app went through create-react-app, tests, review, and finished with final deployment and production.

## Available Scripts

In the project directory, you can run:

### `npm start`

Builds the needed `main.css` file with `npm run build:css`.\
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
Builds the needed `main.css` file with `npm run build:css`.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run build:css`

Builds the `src/styles/main.css` file needed for development and production.\
When `NODE_ENV=production` the `main.css` file created is [reduced greatly in size](https://tailwindcss.com/docs/controlling-file-size) and uses only the styling needed for the project.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
