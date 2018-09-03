const foreach = require('../index')

const voidFunc = () => {}

test('finish all promises though error', () => {
  expect(foreach([
    Promise.resolve(),
    Promise.reject(), // eslint-disable-line
    Promise.resolve()
  ], voidFunc, voidFunc)).resolves.not.toThrowError(/.+/)
})

test('finish tasks without sequence', () => {
  const result = []
  const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve(1), 300)
  })
  const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve(2), 100)
  })
  const promise3 = new Promise((resolve) => {
    setTimeout(() => resolve(3), 500)
  })
  expect(foreach([promise1, promise2, promise3], (data) => result.push(data), voidFunc)).resolves.toEqual([2, 1, 3])
})
