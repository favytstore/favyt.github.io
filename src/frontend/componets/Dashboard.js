import React from "react";
import {getUser,removeUserSession} from '../../utilities/Common.js'
function Dashboard(props){
    const user =getUser()
    //hadle click event of logout button
    const hadleLogout=()=>{
        removeUserSession()
        props.history.push("/login")
    }
    return(
        <div>
            Welcome {user.name}!!<br /><br />
            <input type="button" onClick={hadleLogout} value="Logout" />
        </div>
    );
}
export default Dashboard;