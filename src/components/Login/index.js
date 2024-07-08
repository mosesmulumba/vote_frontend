import React , {useState} from "react";
import axios from "axios";
import  {useNavigate} from 'react-router-dom';

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
            navigate('/members');
        }catch(error){
            setError('Invalid username or password');
        }
    };

    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username :</label>
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Email :</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                </div>
                <button type="submit">Login</button>
            </form>
            {error &&<p>{error}</p>}
        </div>
    );
};

export default Login;