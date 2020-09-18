# Notes

First step, make sure you have a `.gitignore` somewhere in the project that has `node_modules` on it. You _never_ need to commit `node_modules`.

There are comments where applicable. Let me know if you have any questions.

Both the API and front end are in TypeScript. I don't think you'll find it to be too overwhelming. It's entirely just the process of telling your JS what you expect the types of functions, arguments, objects, etc to be. Just like Java, where you have to declare things are types, or interfaces.

## API

Remember to think of the API as decoupled from the UI in this particular instance. The server runs on 5000, the UI on 3000. You're making calls to 5000 fom 3000.

### Setup

In order for the UI to work, follow these steps:

1. In the ui/ folder, run `yarn` or `npm i` to install the dependencies needed
2. Add a semi-colon, or change a single quote to a double quote anywhere in the code. Then run `yarn lint` or `npm run lint` to see what ES-Lint does.
3. Run `yarn start` or `npm run start` to start the API.

## UI

I made the UI for you in TS. It's not that different from vanilla JS, and you may be able to pick up both React and TS at the same time.

Since your challenge might be the book tracker, I did a little bit of it to help the ball get rolling.

### Setup

In order for the UI to work, follow these steps:

1. In the ui/ folder, run `yarn` or `npm i` to install the dependencies needed
2. Find the `env/` folder. Create a new file called `.env.local`, and copy the contents of `env.example` to your newly created file. This will be how to differentiate some values between local development, and when it's deployed on a server. Let me know if you'd like a more in depth explanation
3. Run `yarn start` or `npm run start` to start the UI.
