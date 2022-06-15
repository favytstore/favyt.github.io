import React, {useState} from "react";
import axios from 'axios';
import { setUserSession } from '../../utilities/Common.js';
//import { setUserSession } from '/media/amrendra/1ED85615D855EC11/Amrendra_Prep_Full_Stack/Favyt_Store/favytstore.github.io/src/utilities/Common.js';


function Login(props){
    const [loading, setLoading] = useState(false)
    const username = useFormInput('')
    const password = useFormInput('')
    const [error, setError] = useState(null)
    //Login button click
    const handleLogin=()=>{
        setError(null)
        setLoading(true)
        axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
            setLoading(false);
            setUserSession(response.data.token, response.data.user);
            props.history.push('/dashboard');
          }).catch(error => {
            setLoading(false);
            if (error.response.status === 401) setError(error.response.data.message);
            else setError("Something went wrong. Please try again later.");
          });
        }
    return(
        <div>
            Login<br /><br />
            <div>
                username<br />
                <input type="text" {...username} autoComplete="new-password" />
            </div>
            <div style={{margin:10}}>
                password<br />
                <input type="password" {...password} autoComplete="new-password" />
            </div>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />     
        </div>
    );
}
const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
  }
  export default Login;