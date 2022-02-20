const mymodule = require('./mymodule.js')

mymodule(process.argv[2], process.argv[3], (err, filteredList) => {
    if(err) {
        return console.error(err) 
    }
    filteredList.forEach(file => {
        console.log(file)
    });
})