const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes');
require('dotenv').config();

const api = express();

mongoose.connect(process.env.DB_KEY, { useNewUrlParser: true });

api.use(morgan('dev'));
api.use(cors());
api.use(express.json());
api.use(router);

api.listen(3000);