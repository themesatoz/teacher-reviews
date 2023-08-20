var express = require('express');
var router = express.Router();
var teacherController = require("../controllers/teacherController");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//teacher routes
router.get('/teachers',teacherController.getAllTeacher);
router.get('/teacher/:id', teacherController.getTeacherById);
router.put('/teacher/:id', teacherController.updateTeacher);
router.delete('/teacher/:id', teacherController.deleteTeacher);


module.exports = router;
