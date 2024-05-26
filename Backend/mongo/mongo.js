

const mongoose = require("mongoose");
// const { type } = require("os");

mongoose.connect('mongodb://127.0.0.1:27017/cms')
  .then(() => console.log('Connected!'));

const cmsSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  cpassword: {
    type: String,
    required: true
  },
  examroll:{
    type: Number,
    required:true
  },
  // fees: {
  //   type: String,
  //   required: true
  // },
  token:{
    type:String,
  },
});

const Cms = mongoose.model("Cms", cmsSchema); // Changed model name to Cms

const contactSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
});

const Contact = mongoose.model("Contact", contactSchema);// Changed model name to Contact

const teacherSchema = new mongoose.Schema({
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },

});

const Teacher = mongoose.model("teacher", teacherSchema);

// const paperSchema = new mongoose.Schema({
//   paperCode: { type: String, required: true },
//   paperName: { type: String, required: true },
//   rollNumber : { type: String, required: true },
//   CA1:{type:String},
//   CA2:{type:String},
//   CA3:{type:String},
//   CA4:{type:String},
//   token:{
//     type:String,
//   },

// });

// const Paper = mongoose.model('Paper', paperSchema);



// Define the sub-schema for items
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  paperCode: {
    type: String,
    required: true
  },
  paperName: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  CA1: {
    type: String,
    
  },
  CA2: {
    type: String,
    
  },
  CA3: {
    type: String,
   
  },
  CA4: {
    type: String,
  
  }
});

// Define the main schema
const studentSchema = new Schema({
  rollNumber: {
    type: String,
    required: true,
    unique: true
  },

  token:{
    type:String,
  },
  items: [itemSchema]
});

// Create the model from the schema and export it
const Student = mongoose.model('Student', studentSchema);

// module.exports = Student;


module.exports = { Cms, Contact, Teacher, Student };
