# promise-foreach

## Introduce

- Promise.all: one failed, all failed
- Promise.race: one success, all success
- Promise.each: handle one by one

Well, if I want to run the promises at the same time... and, statistics the percent of success?

Promise foreach can! It will never throw a reject, you can handle the result with one success handler and one error handler.

## Install

```sh
npm install sky-promise-foreach
```

## Usage

```javascript
const foreach = require('sky-promise-foreach')

foreach([...promises], (result) => {
  // success handler for each promise
}, (err) => {
  // error handler for each promise
})
```
