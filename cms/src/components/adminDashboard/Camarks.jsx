// import React, { useState, useEffect } from "react";
// import "../css/Ca.css";
// import axios from "axios";

// const Camarks = () => {
//   const [rollNumber, setRollNumber] = useState("123");
//   const [userData, setUserData] = useState({});

//   const fetchData = async () => {
//     try {
//       const res = await axios.post("http://localhost:8000/camarks", {
//         rollNumber: rollNumber,
//       });
//       console.log(res.data.rollNumber)
//       console.log(typeof(res.data.items))

//       setUserData(res.data.items);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => { 
//     fetchData();
//     // if (rollNumber) {
//     //   fetchData();
//     // }
//   }, []);

//   return (
//     <div className="ca">
//     {userData}
//       <h4>CA Marks details</h4>
//       <h3>SEVEN SEMESTER</h3>
//       <div className="table-container">
//         <table className="custom-table">
//           <thead>
//             <tr>
//               <th>Paper Code</th>
//               <th>Paper Name</th>
//               <th>CA1</th>
//               <th>CA2</th>
//               <th>CA3</th>
//               <th>CA4</th>
//               <th>Responsible Teacher</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* {userData.items.map((item, index) => (
    
//               <tr  key={index}>
//                 <td>{item.paperCode}</td>
//                 <td>{item.paperName}</td>
//                 <td>{item.CA1}</td>
//                 <td>{item.CA2}</td>
//                 <td>{item.CA3}</td>
//                 <td>{item.CA4}</td>
//                 <td>John Doe</td>  
//               </tr>
//             ))} */}
            
//           </tbody>
//         </table>

//         <h3>EIGHT SEMESTER</h3>
//         <table className="custom-table">
//           <thead>
//             <tr>
//               <th>Paper Code</th>
//               <th>Paper Name</th>
//               <th>CA1</th>
//               <th>CA2</th>
//               <th>CA3</th>
//               <th>CA4</th>
//               <th>Responsible Teacher</th>
//             </tr>
//           </thead>
           
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Camarks;
import React, { useState, useEffect } from "react";
import "../css/Ca.css";
import axios from "axios";

const Camarks = () => {
  const [is_login, setIs_login] = useState(0);
  const [rollNumber, setRollNumber] = useState("123");
  const [userData, setUserData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.post("http://localhost:8000/camarks", {
        //rollNumber: rollNumber,
        token: localStorage.getItem("token_key5"),
      });
      console.log("helloo");
      console.log(res.data.rollNumber);
      console.log(typeof res.data.items);

      setUserData(res.data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const temp = localStorage.getItem("token_key");
    if (temp && temp != 0) {
      setIs_login(1);
    }

    if (!temp || temp == 0) {
    }
    fetchData();
  }, []);

  return (
    <div className="ca">
      <h4>CA Marks details</h4>
      <h3>SEVEN SEMESTER</h3>
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Paper Code</th>
              <th>Paper Name</th>
              <th>CA1</th>
              <th>CA2</th>
              <th>CA3</th>
              <th>CA4</th>
              <th>Responsible Teacher</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((item, index) => (
              <tr key={index}>
                <td>{item.paperCode}</td>
                <td>{item.paperName}</td>
                <td>{item.CA1}</td>
                <td>{item.CA2}</td>
                <td>{item.CA3}</td>
                <td>{item.CA4}</td>
                <td>{item.name}</td>
              </tr>
              
            ))}
          </tbody>
        </table>

        
      </div>
    </div>
  );
};

export default Camarks;

