'use strict';

const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();

// Khai báo port cho web, dùng port mặc định của môi trường hoặc port 5000
const port = process.env.port || 5000;

// Cấu hình public static folder 
app.use(express.static(__dirname + '/Public'));

// Cấu hình express handlebars
app.engine('hbs', expressHandlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: 'hbs',
    defaultLayout: 'layout',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true
    }
}));
app.set('view engine', 'hbs');

//routes
app.use('/products', require('./routes/producstRouter'));
app.use('/', require('./routes/indexRouter'));


// app.use((req, res, next) => {
//     res.status(400).send('file not found');
// })

// app.use((error, req, res, next) => {
//     console.error(error);
//     res.status(500).send('Internal server error');
// })

// Khởi động web server
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
