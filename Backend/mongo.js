const mongoose = require("mongoose");


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
   token:{
    type:String,
   },
  })
  const Cms = new mongoose.model("Cms", cmsSchema);
  module.exports = Cms;
