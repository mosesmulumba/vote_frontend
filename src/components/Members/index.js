import React ,{useEffect , useState} from "react";
import axios from "axios";

function Members(){

    const [members , setMembers] = useState([]);
    const [error , setError] = useState('');

    useEffect(()=>{
        const fetchMembers = async()=>{
            try{
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/member', {
                    headers:{
                        Authorization: `Bearer ${token}`,
                    },
                });
                setMembers(response.data);

            }catch(error){
                setError('Failed to fetch the members');
            }
        };
        fetchMembers();
    },[]);

    return(
        <div>
            <h2>Members</h2>
            {error && <p>{error}</p>}
            <ul>
                {members.map((member)=>{
                    <li key={member.id}>{member.username} - {member.email}`</li>
                console.log(members)
                })}
            </ul>
        </div>
    );
}

export default Members;