const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/employee_sign_up');



exports.signup = async (req, res) => {
    try {
      const { username, password,email,phone,subject,experience,employeeCheck} = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ username, password: hashedPassword,email,phone,subject,experience,employeeCheck });
      await user.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.log(error)
      res.status(500).json({ message: 'An error occurred', error });
    }
  };
  
  exports.login = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      const token = jwt.sign({ userId: user._id }, 'secret_key');
      res.json({ token });
    } catch (error) {
      res.status(500).json({ message: 'An error occurred' });
    }
  };