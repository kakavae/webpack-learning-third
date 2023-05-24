import style from './a.css'
/* 会将worker的js文件打包为一个独立的文件 */
const worker = new Worker(new URL('./work.js', import.meta.url))

worker.postMessage('主线程发送消息')

/* 监听worker线程传递过来的消息 */
worker.onmessage = (message) => {
  console.log('收到了worker线程的消息', message)
}

console.log(style)
console.log('a.js')