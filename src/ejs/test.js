const fs = require("fs")
const ejs = require('ejs')

var args = process.argv.splice(2)
console.log(args);

let lib=''//"./templates/template1.js";
lib=`./templates/${args}`;

let otherLib=require(lib);
let text= fs.readFileSync("./src/ejs/templates/template1.ejs","utf8");

let who="bbbejs";

let data={
    ...otherLib,
    getText:()=>{
        return `hello ${who}`;
    }
};

let result= ejs.render(text,data,{});
console.log(result);

who="other ejs";

result= ejs.render(text,data,{});
console.log(result);