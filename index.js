const express = require("express");

const format = require("date-format");

const app = express();

const PORT = process.env.PORT || 4000 

app.get("/",(req,res) => {
    res.status(200).send("<h1> Hello from Home </h1>")
});

app.get("/api/v1/instagram", (req, res) => {
    const instaSocial = {
        username : "ItsAllAboutChaos",
        followers : 150,
        follows : 149,
        date : format('MM:dd:yy hh:mm:ss', new Date() )
    }

    res.status(200).json(instaSocial)
});

app.get("/api/v1/facebook", (req, res) => {
    const faceSocial = {
        username : "Manthan's World",
        followers : 200,
        follows: 1120,
        date: format('MM:dd:yy hh:mm:ss', new Date())
    }

    res.status(200).json(faceSocial)
});

app.get("/api/v1/linkdin", (req, res) => {
    const linkSocial = {
        username : "Manthan Gupta",
        followers : 500,
        follows: 1000,
        date: format('MM:dd:yy hh:mm:ss', new Date())
    }

    res.status(200).json(linkSocial)
});

app.get("/api/v1/:token", (req, res) => {
    console.log(req.params.token)
      res.status(200).json({param : req.params.token})
  })

app.listen( PORT , () => {
    console.log(`Server is running on ${PORT}`);
});