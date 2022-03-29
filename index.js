const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const adminData = require('./routers/admin');
const shopRouter = require('./routers/shop');
const PORT = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use("/views", express.static(path.join(__dirname, "/views")));
app.use("/public", express.static(path.join(__dirname, "/public")));
app.set('view engine', 'ejs');

app.use('/admin', adminData.routes);
app.use(shopRouter);


app.use((req, res, next) => {
  res.render("404", {
    title: "Page Not Found",   
    path:''
});
});
app.listen(PORT, () => {
  console.log("Backend is running.");
});