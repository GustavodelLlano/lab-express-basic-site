const express = require ("express")
const hbs = require("hbs")
const path = require("path")
const app = express()

app.set("view engine", "hbs")
app.set("views", `${__dirname}/views`)
app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(`${__dirname}/views/partials/`)

app.get("/", (req,res) =>{
    res.render("index")
    
})

app.get("/about", (req, res)=> {
    res.render("about")
})

app.get("/photo-gallery", (req, res)=>{
    res.render("photo-gallery")
})

app.get("/works", (req,res)=>{
    res.render("works")
})

app.listen(5000, ()=> {
    console.log("up in port 5000")
})