var compression=require('compression');
var createError=require('http-errors');
var a=require('express');
var mongoose=require('mongoose');
var port = process.env.PORT || 5000;
var app = a();
app.use(a.urlencoded({extended: true}));
app.use(a.json());
app.set('view engine', 'ejs');
app.use(a.static('public'));
app.use('/uploads', a.static('uploads'));
app.use(compression());
require('dotenv').config();
var uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
var connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});
var certificateRoutes=require('./routes/certificate');
var participantRoutes=require('./routes/participant');
app.use(certificateRoutes);
app.get('/', (req, res) => {
  res.render('verify');
});
app.use(participantRoutes);
app.listen(port, () => {
    console.log('Server has started.');
  });
  