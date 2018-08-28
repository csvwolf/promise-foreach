# promise-foreach

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

## Todo

- [ ] Test
- [ ] CI
