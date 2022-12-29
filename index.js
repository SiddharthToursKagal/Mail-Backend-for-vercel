const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 3030
const form = require("./api/form")
const corsOpts = {
    origin: '*',

    methods: [
        'GET',
        'POST',
    ],

    allowedHeaders: [
        'Content-Type',
    ],
};
app.use(cors(corsOpts));
app.use(express.json())

//establishing connection to mongodb
//********** */



//ruter for email sennd and mongodb database
app.get("/", (req, res) => {
    res.json({ status: "ok", message: "Welcome to Siddharth Tours" })
})




app.use('/api/form', form);


app.listen(port, () => { console.log(`app is listening at port`) })