const express = require("express");
const cors = require("cors")
const Cms = require("./mongo")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
const TokenGenerator=require("uuid-token-generator");



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
     // const userSigin = await Cms.findOne({ email: email, password: password });
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
        res.status(200).json({ msg: 'sucess', valid: '1',token:tk })
      }
    } catch (err) {
      console.log(err);
    }
  }

  );


  app.post('/result',async (req, res) => {
    console.log("hello from about");
    console.log(req.body.token)
    const token=req.body.token 
    // }
    const temp = await Cms.findOne({token: token});
    console.log('+++++++++')
    console.log(temp)
    res.send(temp);
  });


app.listen(8000, () => {
    console.log("Port connected succesfully");
  });