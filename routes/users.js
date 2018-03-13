var express = require('express');
var router = express.Router();
const db = require('../models/todos')

router.get('/', (req, res, next) => {
  res.json(db.listPeople())
})

router.get('/:name/tasks', (req, res, next) => {
  let userTodos = db.list(req.params.name)
  if (req.query.status === 'complete') {
    userTodos = userTodos.filter((task) => {
      return task.complete
    })
  } else if (req.query.status === 'active') {
    userTodos = userTodos.filter((task) => {
      return !task.complete
    })
  }
  res.json(userTodos)
})

router.post('/:name/tasks', (req, res, next) => {
  let addedTask = db.add(req.params.name, req.body)
  res.status(201).json(addedTask)
})




module.exports = router
