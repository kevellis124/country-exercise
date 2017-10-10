This sample app is supposed to do two things:

Show two drop downs, a Country drop down, and a States drop down.

When the app starts, it immediately makes an async call to get a list of countries from an API hosted on heroku.
When the countries come back, the store is notified, and the appropriate components get re-rendered.

Upon selecting a country, it makes an async call to an api to get a list of states for that country.

The view logic isn't perfect, but i don't care that's not what this is for.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
