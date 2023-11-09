const express = require("express");
const app = express();
const port = 3000;
const homeRoutes = require('./routes/home.routes');
const contactRoutes = require('./routes/contact.routes');
const locationRoutes = require('./routes/location.routes');
const missionRoutes = require('./routes/mission.routes');
const aboutRoutes = require('./routes/about.routes');

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static('public'));

app.use('/', homeRoutes)

app.use("/about", aboutRoutes);

app.use("/location", locationRoutes);

app.use("/mission", missionRoutes);

app.use("/contact", contactRoutes);

app.get("*",(req,res)=>{
    res.status(404).send("404 not found");
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
  })