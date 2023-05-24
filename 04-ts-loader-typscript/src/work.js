self.onmessage = (message) => {
  console.log('worker收到主线程的消息', message)
  setTimeout(() => {
    self.postMessage('worker发送出的消息')
  }, 1000)
}