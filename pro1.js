console.log(process.execPath) // node path
console.log(process.pid) // process id 
console.log(process.cwd()) // current working directory 
console.log(process.argv)
console.log("Parsing the logs ")
process.argv.forEach((x,y,z)=>{
 console.log(x, y, z)
})

/*

D:\james\node\node\node.exe
10380
D:\james\node\w
[
  'D:\\james\\node\\node\\node.exe',
  'D:\\james\\node\\w\\pro1.js',
  'testit'
]
Parsing the logs
D:\james\node\node\node.exe 0 [
  'D:\\james\\node\\node\\node.exe',
  'D:\\james\\node\\w\\pro1.js',
  'testit'
]
D:\james\node\w\pro1.js 1 [
  'D:\\james\\node\\node\\node.exe',
  'D:\\james\\node\\w\\pro1.js',
  'testit'
]
testit 2 [
  'D:\\james\\node\\node\\node.exe',
  'D:\\james\\node\\w\\pro1.js',
  'testit'
]

*/