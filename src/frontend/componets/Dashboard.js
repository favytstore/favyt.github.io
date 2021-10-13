import React from "react";
function Dashboard(props){
    //hadle click event of logout button
    const hadleLogout=()=>{
        props.history.push("/login")
    }
    return(
        <div>
            Welcome User!!<br /><br />
            <input type="button" onClick={hadleLogout} value="Logout" />
        </div>
    );
}
export default Dashboard;