const express= require("express")
const app=express()

app.get("/", (req,res) => {
    res.json({
        message: "Hello! You are visiting root"
    }); 
});

app.get("/login", (req,res) => {
    res.json({
        message: "Hello! You are visiting login page"
    }); 
});

app.get("/signup", (req,res) => {
    res.json({
        message: "Hello! You are visiting signup page"
    }); 
});

app.get("/logout", (req,res) => {
    res.json({
        message: "Hello! You are visiting logout page"
    }); 
});


app.listen(8000, () => {
    console.log("Application is running at 8000");
});