/**
 * Promise List 全部跑完，对整个列表实现同一 resolve 和 reject 处理，仅当所有 Promise 运行结束才停止
 * 该函数除非有内部异常，否则不会出现 reject(error)
 * @param promises 需要处理的 Promise 列表
 * @param callback 需要对 resolve 进行的操作
 * @param errorHandler 需要对 error 进行的操作
 */
module.exports = (promises, callback, errorHandler) => {
  return Promise.all(promises.map(promise => {
    return promise
      .then(result => {
        callback(result)
      })
      .catch(err => {
        errorHandler(err)
      })
  }))
}
