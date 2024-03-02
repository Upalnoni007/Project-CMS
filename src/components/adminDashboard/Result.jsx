import { useState , useEffect} from "react";
import "../css/Result.css";
import Tablehoc from "../adminDashboard/Tablehoc";
import axios from "axios";

const columns = [
  {
    Header: "Subject-Code",
    accessor: "subjectcode",
  },
  {
    Header: "Subjects-Offered",
    accessor: "subjectofferds",
  },
  {
    Header: "Letter-Grade",
    accessor: "lattergrade",
  },
  {
    Header: "Points",
    accessor: "points",
  },
  {
    Header: "Credit",
    accessor: "creadit",
  },
  {
    Header: "Credit-Points",
    accessor: "creaditpoints",
  },
 
];

const Result = () => {

    const [userData, setUserData] = useState({
        name: "",
        lastname: "",
        email: "",
//password: "",
        examroll:"",
      });
      const [is_login, setIs_login] = useState(0);
     const callResult = async () => {
    try {
      const res = await axios.post("http://localHost:8000/result", {
        token: localStorage.getItem("token_key"),
      });
      console.log(res.data);
      setUserData({
        name: res.data.firstName,
        lastname: res.data.lastName,
        email: res.data.email,
      //  password: res.data.password,
        examroll:res.data.examroll,
      });
      if (!res.status == 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
   
  useEffect(() => {
    const temp = localStorage.getItem("token_key");
    if (temp && temp != 0) {
      setIs_login(1);
    }

    if (!temp || temp == 0) {
    }
    callResult();
  }, []);




  const [rows] = useState([
    {
      subjectcode: "PE-EC701A",
      subjectofferds: "Microwave Theory and Techniques",
      lattergrade:"A",
      points: 8,
      creadit:3,
      creaditpoints:24,
    },
    {
        subjectcode: "PE-EC702C",
        subjectofferds: "Renewable Energy",
        lattergrade:"A",
        points: 8,
        creadit:3,
        creaditpoints:24,
      },
      {
        subjectcode: "OE-CS701A",
        subjectofferds: "Big Data Analytics",
        lattergrade:"B",
        points: 7,
        creadit:3,
        creaditpoints:21,
      },
      {
        subjectcode: "OE-CS701E",
        subjectofferds: "Cyber Security",
        lattergrade:"O",
        points: 10,
        creadit:3,
        creaditpoints:30,
      },
      {
        subjectcode: "HM-HU702",
        subjectofferds: "Principles of Management",
        lattergrade:"B",
        points: 7,
        creadit:2,
        creaditpoints:14,
      },
      {
        subjectcode: "PW-EC781",
        subjectofferds: "Industrial Training",
        lattergrade:"E",
        points: 9,
        creadit:1,
        creaditpoints:9,
      },
      {
        subjectcode: "PW-EC782",
        subjectofferds: "Project-1",
        lattergrade:"O",
        points: 10,
        creadit:3,
        creaditpoints:30,
      },
      {
        subjectcode: "",
        subjectofferds: "",
        lattergrade:"",
        points:"Total",
        creadit:18,
        creaditpoints:132,
      },
     
   
  ]);

  const Table = Tablehoc(
    columns,
    rows,
    "dashboard-product-box",
    // "Result",
    //rows.length > 8
  )();

  return (
    <div className="container">
     {/* from is here */}

     <form method="GET">
          <div className="box">
            {is_login && (
              <div className="user-info">
               <h3 className="box-container"><strong>For the:</strong><bold> FOURTH YEAR FIRST SEMESTER B.TECH. IN ELECTRONICS AND COMMUNICATION ENGINEERING
EXAMINATION OF 2023-2024</bold></h3>
               <div className="from-box">
                <p>
                  <strong>Name:</strong> {userData.name}
                </p>
                <p>
                  <strong>Last Name:</strong> {userData.lastname}
                </p>
                <p>
                  <strong>Email:</strong> {userData.email}
                </p>
                {/* <p>
                  <strong>Password:</strong> {userData.password}
                </p> */}
                <p>
                  <strong>Exam-Roll:</strong> {userData.examroll}
                </p>
                </div>
              </div>
            )}
          </div>
        </form>
       
     
      <div className="from-box"> <h1>My Result</h1>{Table}</div>
      <div className="box-container">
        <h3><strong>SGPA ODD.(7TH)SEMESTER : 8.44</strong></h3>
        <h3><strong>RESULT ODD.(7TH)SEMESTER : P</strong></h3>
        </div>
        <div className="howrah">
            <p>Howrah<br/>26-02-2024</p>
            
            <div>Controller of Examination</div>
        </div>
    </div>
  );
};

export default Result;
