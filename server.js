const express = require('express');
const TweetsRouter = require('./routes/TweetsRouter')

const app = express();
const PORT = 4000; 

// Config
app.use(express.urlencoded({extended: false}))

//
app.use('/api', TweetsRouter);





app.listen(PORT, (req,res) => {
    console.log(`Server in running on port: ${PORT}`);
})

