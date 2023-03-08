import React from "react";
import Sidebar from "./Sidebar";

const Main =()=>{
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-2 m-0 p-0">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main