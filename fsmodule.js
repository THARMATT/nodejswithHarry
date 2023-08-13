const fs =require('fs');
// fs.readFile('file.txt','utf8',(err,data)=>{
//     console.log(err,data)
// })

// const a =fs.readFileSync('file.txt')
// console.log(a.toString())

// console.log("Finished Reading File")

fs.writeFile('file2.txt',"here bigg bigg data",()=>{
    console.log("written the file ")
});
b=fs.writeFileSync('file3.txt',"this is a data2")
console.log(b)
console.log("finished raeadig line")