import React, {useState, useEffect} from 'react'
import Card from './Card';

export default function Main() {


    const[items, setItems] = useState([]);

    const getAll = async () => {
        const response = await fetch(`https://api.github.com/users`);
        const data = await response.json();
        setItems(data);
    };
    useEffect(() => {
        getAll();
    }, []);

    const userList = items.map(item => {
        return ( <Card imgSrc={item.avatar_url} login={item.login} /> )
    })

  return (
    <div className='container'>
       <div className='row'> {userList}</div>
    </div>
  )
}
