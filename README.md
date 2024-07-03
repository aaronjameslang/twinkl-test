# Twinklr

A simple application to demostrate how to build an API with `express`.

## Features

1. A `POST` endpoint, that accepts JSON, containing the user full name,
password, email address, created date, and the user type (one of a
student, teacher, parent or private tutor).
1. Validation. The app checks that the fields submitted are not
empty. The app also checks that the password matches the following
rules:
    1. Between 8 and 64 characters
    1. Must contain at least one digit (0-9)
    1. Must contain at least one lowercase letter (a-z)
    1. Must contain at least one uppercase letter (A-Z)
1. When validation fails the app returns an appropriate status
code with error(s) that can be used by the client
1. Signup information is saved to a data store
1. A `GET` endpoint that takes a user ID and returns the user details as JSON.
1. Approproate testing and documentation
1. Is able to run locally

## Usage

Install dependencies with `npm install`

In development the following command will start the server and use
`nodemon` to auto-reload the server based on file changes

```
npm run dev
```

The server will start at `http://localhost:3000` by default.

There are also commands to build and start a server without nodemon:

```
npm run build
npm start
```

### Testing

Run the unit tests with `npm test`.

There is also a `npm run test:build` command which will:
- build the app,
- run it in "production mode", and
- test it responds to http requests

## TODOs

Functional and non-functional considerations before this goes to production

- Hash passwords
- Don't return passwords from GET
- Store passwords in a seperate data store so we can restrict access
- Don't roll your own auth, use a service like Auth0
- Don't trust created date from user, do this on the backend
- Set up dynamo db storage layer
- Write lambda handler, probably cheaper/simpler than running a server/container
- Get a security expert to reivew
- General peer review
- Manual QA, by QA tester or stakeholders
- Maybe speed up unit tests
- Maybe remove 'sync' functions
- Use API documenation system, such as swagger
- Create postman collection
- Set up HTTPS
- Load/stress test, what is our expected scale?
- Add monitoring, such as sentry or new relic
- Ensure the application is secure, review OWASP top ten, run static analysis, potentially hire pen testers
- Measure application performance and bottlenecks, plan for scale, but do not prematurely optimise
- Branch/merge protections, rquire PR approval and CI pass
- Internationalise? Are we unicode safe?
- Ensure all technologies and libraries are up to date, on a regular basis, npm audit
- Check for errors and warning on the terminal and web console during build/run
- Add static anlysis and duplicate code detection
- Add a database migration system
- Formatting e.g. prettier
- Infrastructure as code, e.g. terraform
- Submitting an invalid datatime sting for "created" will give a poor
error, this could fixed, but better to not include this field in input
