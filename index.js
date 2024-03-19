import express from "express";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
    console.log(typeof(req));
    console.log(`Request is ${req}`);
    res.json({
        Message: "Hello Frontend",
        Data: req.toString()
    });
});

app.put("/", (req, res) => {
    console.log(`Request is ${req.query.email}`);
    res.json({
        Message: "Hello Frontend",
        Data: req.query.email
    });
})

app.listen(port, () => {
    console.log(`App listening at port ${port}`);
})