const User = require('../models/employee_sign_up');


exports.getAllTeacher  = async (req,res) =>{
    try {
        const teachers = await User.find();
        res.status(200).json(teachers);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching teachers' });
      }
}


exports.getTeacherById = async (req, res) => {
    const teacherId = req.params.id; 
    try {
      const teacher = await User.findById(teacherId);
      
      if (!teacher) {
        return res.status(404).json({ error: 'Teacher not found' });
      }
      
      res.status(200).json(teacher);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching teacher details' });
    }
  };  


  // Controller function to update details of a specific teacher
exports.updateTeacher = async (req, res) => {
    const teacherId = req.params.id;
    const { email, phone , subject, experience, employeeCheck} = req.body;
    try {
      const updatedTeacher = await User.findByIdAndUpdate(
        teacherId,
        { email, phone , subject, experience, employeeCheck},
        { new: true } 
      );
  
      if (!updatedTeacher) {
        return res.status(404).json({ error: 'Teacher not found' });
      }
  
      res.status(200).json(updatedTeacher);
    } catch (error) {
      res.status(500).json({ error: 'Error updating teacher details' });
    }
  };


// Controller function to delete a specific teacher
exports.deleteTeacher = async (req, res) => {
  const teacherId = req.params.id;
  try {
    const deletedTeacher = await User.findByIdAndDelete(teacherId);

    if (!deletedTeacher) {
      return res.status(404).json({ error: 'Teacher not found' });
    }

    res.status(200).json({ message: 'Teacher deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting teacher' });
  }
};