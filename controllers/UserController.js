var User = require("../models/user");
var AsyncHandler = require("express-async-handler");
var generateToken = require("../Utills/generateToken");
var Teacher = require("../models/teacher");
const student = require("../models/student");
const jwtDecode = require('jwt-decode');
const jwt = require('jsonwebtoken');

// Register User
const registerUser = AsyncHandler(async (req, res, next) => {
  const { fullName, email, password, role,profilePic } = req.body;
  const emailExist = await User.findOne({ email });

  if (emailExist) {
    res.status(400);
    throw new Error("Email must be unique");
  }

  const newUser = await User.create({
    fullName,
    email,
    password,
    role,
   
    profilePic,
    
  });

  if (newUser) {
    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      email: newUser.email,
      role: newUser.role,
    
      profilePic: newUser.profilePic,
      //token generate
      token: generateToken(newUser._id),
    });
  }
});
// SignIn user
const signinUser = AsyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const userExist = await User.findOne({ email });
  if (!userExist) {
    res.status(401).json({
      message:'Invalid Email'
    })
  } else {
    if(userExist.role === 'Teacher')
    {
     if (await userExist.matchPassword(password)) {
   //if (await userExist.password == password) {
      var userid = userExist._id;
      const teacher = await Teacher.findOne({ user: userid }).populate('user')
      console.log(teacher)
      res.status(200).json({
        teacher: teacher,
        //token generate
        token: generateToken(userExist._id),
      });
    } else {
     
      res.status(401).json({
        message:'Invalid Password'
      })
    }
  }
  else{
   if (await userExist.matchPassword(password)) {
      var userid = userExist._id;
      const Student = await student.findOne({ userID: userid }).populate('userID')
      console.log(Student)
      res.status(200).json({
        Student: Student,
        //token generate
        token: generateToken(userExist._id),
      });
    } else {
      res.status(401).json({
        message:'Invalid Password'
      })
    }
  }
  }
});

const signinStudent =  async function (req, res, next) {
  try {

    const { email } = req.body;
    console.log(email)
   
    const userExist = await User.findOne({ email : email });

    if (userExist) {
      var userid = userExist._id;
      console.log(userid)
      const Student = await student.findOne({ userID: userid }).populate('userID')
      console.log(Student)
      res.status(200).json({
        Student: Student,
        //token generate
        token: generateToken(userExist._id),
      });
    }
    else {
        return res.status(404).json({
            success: false,
            message: ' No Stuent with such mail exist.'
          });
      }




    
  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = {
  registerUser,
  signinUser,
  signinStudent
};
