'use strict';

var tasks = {}; // a place to store tasks by person

module.exports = {
  reset: function () {
    tasks = {}; // (this function is completed for you.)
  },
  // ==== COMPLETE THE FOLLOWING (SEE `model.js` TEST SPEC) =====
  listPeople: function () {
    // returns an array of all people for whom tasks exist
    return Object.keys(tasks)
  },
  add: function (name, task) {
    // saves a task for a given person
    let taskToAdd = task
    taskToAdd.complete = (taskToAdd.complete) ? taskToAdd.complete : false
    if (tasks[name]) {
      tasks[name].push(taskToAdd)
      // tasks[name][tasks[name].length - 1].complete = false
    } else {
      tasks[name] = [taskToAdd]
      // tasks[name][tasks[name].length - 1].complete = false
    }
  },
  list: function(name) {
    return tasks[name]
  }
};
