// index.js
/* 
  This file serves as the main router for your app, 
  aggregating routes from other files.
*/
const express = require('express');
const commentsRouter = require('./comments');
const usersRouter = require('./users');
const rootRouter = require('./root');

const router = express.Router();

/*
  We use router.use() to mount routers under their respective paths
   ("/comments", "/users", and "/") to create a hierarchical route structure.
*/
router.use('/comments', commentsRouter);
router.use('/users', usersRouter);
router.use('/', rootRouter);

module.exports = router;
