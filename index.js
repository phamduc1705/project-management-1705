const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const database = require('./config/database');
const systemConfig = require('./config/system');
const port = process.env.PORT;
mongoose.connect(process.env.link);
const route = require('./routes/clients/index.route');
const admin = require('./routes/admin/index.route');
const { connect } = require('./routes/clients/product.route');

database.connect();
app.set("views","./views"); 

app.set("view engine","pug");

app.use(express.static('public'));
app.locals.prefixAdmin = systemConfig.prefixAdmin;
route(app);
admin(app);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
