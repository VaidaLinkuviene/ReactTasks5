import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Profile() {
    const[items, setItems] = useState({});
    const navigate = useNavigate()
    let{username}=useParams();

    const getByName = async () => {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setItems(data);
    };
    useEffect(() => {
        getByName();
    }, []);
    
    let {avatar_url, login, location, blog, created_at, updated_at}=items

  return (
    <div className='container'>
       <img src={avatar_url} alt={username} />
       <h3>{login}</h3>
       <p className='card-text'>Location: {location ? location : "private"}</p>
       <p className='card-text'>Blog: <a href = {blog ? blog : "#"}>{blog}</a></p>
       <p className='card-text'>Created: {created_at}</p>
       <p className='card-text'>Updated: {updated_at}</p>
       <p><a onClick={()=>navigate('/')} className='btn btn-secondary'>Back to Main</a></p>
    </div>
  )
  }
