const express = require('express');
const path = require('path');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../src/public');
const staticDirectory =  express.static(publicDirectoryPath);

app.use(staticDirectory);



/*app.get('/help', (req, res)=>{

    res.send('<h1>help</h1>')

});

app.get('/about', (req, res)=>{

    res.send('<h1>about</h1>')
});

app.get('/', (req, res)=>{

    res.send('<h1>home</h1>')

})*/


app.listen(3001, ()=>{
    console.log('listening on port 3001')
})