//const sayHi= require('./utils')
//const names=require('./names') 

//const newwayofmodule=require('./6-alternative')
/* console.log(names.jhon)
console.log(names.peter)
sayHi('susan') */
//require('./7-dummy')
/* console.log(newwayofmodule.lists)
console.log(newwayofmodule.singleperson)
 */
/* const os=require('os')
const user=os.userInfo()
console.log(user) */


/* const {readFileSync,writeFileSync}=require('fs');
const first=readFileSync('./folder/first.txt','utf-8')
const second=readFileSync('./folder/second.txt','utf-8')
console.log(first,second)
writeFileSync("./folder/create.txt','HERE IS THE RESULT: ${first},${second},{ flag:'a'}") */
/* const {readFile,writeFile}=require('fs')
readFile('./folder/asyncfirst.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
}) *//* 
const http=require('http');
const server =http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome')
    }
    if(req.url==='/about'){
        res.end('Here is short')
    }
    
    res.end('<h1>oops </h1>'
    )
    res.write('Welcome to our homepage')
    res.end()
})
server.listen(5000) */
const _=require('lodash')
const items=[1,[2,3,[4]]]
const newItems=_.flattenDeep(items)
console.log(newItems)