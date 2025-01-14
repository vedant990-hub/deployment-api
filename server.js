const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get('/', (_req, res) => {
    res.send("API is live!");
});

app.post('/api/data', (req, res) => {
    const {name,age} = req.body;
    res.json({message:'Hello ${name} your age is ${age}'})
});

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
});