// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import {enableProdMode} from '@angular/core';
import {ngExpressEngine} from '@nguniversal/express-engine'; // Express Engine
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader'; // Import module map for lazy loading

const express = require('express');
// const session = require('express-session');
import {join} from 'path';

const mongoose = require('mongoose');
// const passport = require('passport');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
// const MongoStore = require('connect-mongo')(session);

const DIST_FOLDER = join(process.cwd(), 'dist');
// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/server/main');

const PORT = process.env.PORT || 4000;

// mongoose models
require('./models/User');
require('./models/Post');

// services
// require('./services/passport');

// connect mongoDB
const config = require('./config/database');
mongoose.connect(config.database);

import {postRoutes} from './routes';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// middlewares
// app.use(passport.initialize());
// app.use(passport.session());
app.use(cors());

/**
app.use((req, res, next) => {
  res.locals.login = req.isAuthenticated();
  res.locals.session = req.session;
  next();
});
 */

// app.use('/auth', authRoutes);
app.use('/post', postRoutes);

app.get('/', (req, res) => {
  res.send('Invalid page');
});

/* TODO: implement data requests securely
// app.get('/api/*', (req, res) => {
// res.status(404).send('data requests are not supported');
// });
*/

// Server static files from browser
app.get('*.*', express.static(DIST_FOLDER));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render(join(DIST_FOLDER, 'index.html'), {req});
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
