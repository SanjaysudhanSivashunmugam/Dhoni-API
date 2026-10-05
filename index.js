import express from 'express';
import dhoniGoatReasons from './data.js';
const app = express();
const port = 3000;

app.use(express.urlencoded({extended : true}))

app.get("/random", (req, res) => {
    const reason = dhoniGoatReasons[Math.floor(Math.random() * 100) + 1];
    res.json(reason);
})

app.get("/reason/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const reason = dhoniGoatReasons.find((r) => r.id === id);
    res.json(reason);
})

app.get("/filter", (req, res) => {
    const category = req.query.category;
    const reason = dhoniGoatReasons.filter((t) => t.category === category);
    res.json(reason);
})

app.listen(port, () => {
    console.log("Server is Running");
})

