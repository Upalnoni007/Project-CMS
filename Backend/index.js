const express = require("express");
const cors = require("cors")
const { Cms, Contact, Teacher, Student } = require('./mongo/mongo');
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
const TokenGenerator=require("uuid-token-generator");
const bodyParser = require('body-parser');

app.use(bodyParser.json());
const stripe = require("stripe")("sk_test_51P5i6qSG5jL02vtyrI65VvMyzyl9FZUvM0e6VhLOcIokA1QXkvL1wwj02tR69ukEVwrQ0251lKyzWFA1lvU6m7Ml00tTTT3DMu");

require("dotenv").config();

const port = 8001 || process.env.PORT;

// for create an account
app.post('/reg',async(req,res)=>{
    const { email } = req.body.data;

    try {
        const existingUser = await Cms.findOne({ email: email });
        console.log(existingUser);
        if (existingUser) {
          // Email already exists in the database
          console.log("Alredy exits");
          res.json({ exists: true });
        }
        else {
          // if Email does not exist in the database then register
          const { firstName, lastName, email, password, cpassword } = req.body;
          console.log(req.body.data)
          const data = req.body.data
          await Cms.insertMany([data])
    
          console.log("register succesfully");
          res.json({ exists: false });
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      }
});

//for student login

app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body.data;
  
      console.log(email, password)
      if (!email || !password) {
        return res.status(400).json({ error: "plz filled the data" });
      }
     const filter={ email: email, password: password }
     const userSigin = await Cms.findOne(filter);
      console.log(userSigin);
      const tokgen =new TokenGenerator();
      const tk=tokgen.generate();
      console.log(tk)

      await Cms.updateOne(filter,
        {
         $set:{
          token:tk
         }  
        })
      console.log("thank you");
      console.log(tk)
      
      if (!userSigin) {
        console.log("1")
        res.status(200).json({ msg: 'user error', valid: '0',token:null })
      } else {
        console.log("2")
        // res.json({message:"user sigin succesfully"});
        res.status(200).json({ msg: 'sucess', valid: '1',role:'student',status:'true', token:tk })
      }
    } catch (err) {
      console.log(err);
    }
  }
  );

  

 // Teacher Login
 
app.post('/teacherlogin', async (req, res) => {
  try {
    const { email, password } = req.body.data;

    console.log(email, password)
    if (!email || !password) {
      return res.status(400).json({ error: "plz filled the data" });
    }
   const filter={ email: email, password: password }
   const userSigin = await Teacher.findOne(filter);
    console.log(userSigin);
    
    if (!userSigin) {
      console.log("Teacher error")
      res.status(200).json({ msg: 'user error', valid: '0' })
    } else {
      console.log("2")
      // res.json({message:"user sigin succesfully"});
      res.status(200).json({ msg: 'sucess', valid: '1',role:'teacher',status:'true' })
    }
  } catch (err) {
    console.log(err);
  }
}
);



app.post('/enter', async (req, res) => {
  try {
    const { rollNumber } = req.body.data;

    console.log(rollNumber)
    if (!rollNumber) {
      return res.status(400).json({ error: "plz filled the data" });
    }
   const filter={ rollNumber: rollNumber }
   const userSigin = await Student.findOne(filter);
    console.log(userSigin);
    const tokgen =new TokenGenerator();
    const tk=tokgen.generate();
    console.log(tk)

    await Student.updateOne(filter,
      {
       $set:{
        token:tk
       }  
      })
    console.log("thank you");
    console.log(tk)
    
    if (!userSigin) {
      console.log("1")
      res.status(200).json({ msg: 'user error', valid: '0',token:null })
    } else {
      console.log("2")
      // res.json({message:"user sigin succesfully"});
      res.status(200).json({ msg: 'sucess', valid: '1',role:'student',status:'true', token:tk })
    }
  } catch (err) {
    console.log(err);
  }
}
);



app.post('/papers', async (req, res) => {
  console.log("Inside paper endpoint")

  const { name,paperCode, paperName, rollNumber, CA1, CA2, CA3, CA4 } = req.body;

  try {
    // Find if the roll number exists
    let student = await Student.findOne({ rollNumber });

    if (student) {
      // If roll number exists, add a new item to the items list
      student.items.push({ name,paperCode, paperName, CA1, CA2, CA3, CA4 ,});
      await student.save();
      res.status(200).json({ message: 'Item added to existing student', student });
    } else {
      // If roll number does not exist, create a new student record
      student = new Student({
        rollNumber,
        items: [{ name,paperCode, paperName, CA1, CA2, CA3, CA4 }]
      });
      await student.save();
      res.status(201).json({ message: 'New student created', student });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

});




app.post('/camarks', async (req, res) => {
  
  try {
    // const temp = await Paper.findOne({ rollNumber: rollNumber });
    console.log("hello from /camarks endpoint");
   // const { rollNumber } = req.body;
//console.log("Received rollNumber:", rollNumber);
   // const filter={ rollNumber: rollNumber, }
    const token=req.body.token
    // const studentData = await Student.findOne({rollNumber:11600420013});
    const studentData = await Student.findOne({token:token});
    // res.send(studentData);
    
    // function ObjectId(id) {
    //   this.id = id;
    // }
    
    // Function to create new objects without _id
  //   function createNewObjectWithoutId(obj) {
  //     let newObj = {};
  //     for (let key in obj) {
  //       if (key !== '_id') {
  //         newObj[key] = obj[key];
  //       }
  //     }
  //     return newObj;
  //   }
    
    
  //   function removeIdKey(item) {
      
  //         delete item["_id"];
  //         return item;
      
  // }
    console.log("AAAAAAA",studentData.items[0].CA1)
    let newData = []
    for (let i = 0; i < studentData.items.length; i++){
      t={
        "paperCode": studentData.items[i].paperCode,
        "name": studentData.items[i].name,
        "paperName":  studentData.items[i].paperName,
        "CA1":  studentData.items[i].CA1,
        "CA2":  studentData.items[i].CA2,
        "CA3":  studentData.items[i].CA3,
        "CA4":  studentData.items[i].CA4,
      }
       newData.push(t)
    } 
    
  
    data2send={
      "rollNumber":studentData.rollNumber,
      "name":studentData.name,
      "items":newData
    }
    console.log(data2send)
    res.json(data2send);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }

});



  app.post('/result',async (req, res) => {
    console.log("hello from about");
    console.log(req.body.token)
    const token=req.body.token 
    // }
    const temp = await Cms.findOne({token: token});
    res.send(temp);
  });

  

  app.post('/checkout',async (req, res) => {
   
    
    const token=req.body.token 
    const temp = await Cms.findOne({token: token});
    res.send(temp);
  });





  app.post('/contact', async (req, res) => {
    try {
      const { username, email, message } = req.body.data;
     // console.log(username,"==========")
      await Contact.create({ username, email, message });
      
      console.log("Message sent successfully");
      res.status(200).send("Message sent successfully");
    } catch (e) {
      console.error("Contact form error:", e);
      res.status(500).send("Internal Server Error");
    }
  });
  
// This is for the Semester Fees Payment....
  
app.post('/checkout1',async (req,res)=>{

  const product= await stripe.products.create({
   name:"Semester-Fees"
  });


  if(product){
   var price = await stripe.prices.create({
     product:`${product.id}`,
     unit_amount:43000 * 100,
     currency:'INR',
   });
  }
  if(price.id){
   const billingAddressCollection = price.currency === 'INR' ? "required" : "auto";
   var session = await stripe.checkout.sessions.create({
     line_items:[
       {
         price:`${price.id}`,
         quantity:1,
       }
     ],
     mode:'payment',
     success_url:"http://localhost:3000/sucess",
      cancel_url:"http://localhost:3000/cancel",
      customer_email:'demo@gmail.com',
      billing_address_collection: billingAddressCollection,

   })
  }
  res.json(session)
})
// Card Number Should Be -4000003560000008

app.post('/checkout2',async (req,res)=>{

  const product= await stripe.products.create({
   name:"Hostel-Fees"
  });


  if(product){
   var price = await stripe.prices.create({
     product:`${product.id}`,
     unit_amount:5000 * 100,
     currency:'INR',
   });
  }
  if(price.id){
   const billingAddressCollection = price.currency === 'INR' ? "required" : "auto";
   var session = await stripe.checkout.sessions.create({
     line_items:[
       {
         price:`${price.id}`,
         quantity:1,
       }
     ],
     mode:'payment',
     success_url:"http://localhost:3000/sucess",
      cancel_url:"http://localhost:3000/cancel",
      customer_email:'demo@gmail.com',
      billing_address_collection: billingAddressCollection,

   })
  }
  res.json(session)
})



app.listen(port, () => {
    console.log("Port connected succesfully");
  });