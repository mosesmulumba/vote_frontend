import React , {useState} from "react";
import axios from "axios";
import  {useNavigate} from 'react-router-dom';
import styles from './login.module.css';


function Login(){
    const [username , setUsername] = useState('');
    const [email , setEmail] = useState('');
    const [error , setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{

            const response = await axios.post('http://localhost:5000/auth/login' , {username , email});
            localStorage.setItem('token', response.data.access_token[0]);
            navigate('/dashboard');
        }catch(error){
            setError('Invalid username or password');
        }
    };

    return(
        <>
            <div className={`${styles.mainContent}`}>
                <div className={`${styles.loginContainer}`}>
                    <h2>Login to Your Account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={`${styles.inputGroup}`}>
                            <label>Username :</label>
                            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} required />
                        </div>
                        <div className={`${styles.inputGroup}`}>
                            <label>Email :</label>
                            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                        </div>
                        <button type="submit">Login</button>
                        {error &&<p style={{color:'red'}}>{error}</p>}
                        <div class={`${styles.extraLinks}`}>
                            <a href="#">Forgot Password?</a>
                            <span> | </span>
                            <a href="/register">Create Account</a>
                            <span> | </span>
                            <a href="/">Back</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
        
    );
};

export default Login;