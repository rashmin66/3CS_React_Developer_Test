import { useEffect, useState } from 'react'
import styles from '../assets/Home.module.css'
import UserCard from './user_card';
import { useNavigate } from "react-router-dom";

function Home() {
   const [details, setCount] = useState(null)
   const navigate = useNavigate();
 
  function getData() {
  fetch('https://reqres.in/api/users/', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    // Add any additional headers if required
  }
})
  .then(response => response.json())
  .then(data => {
    // Process the received data
    console.log(data.data);
    setCount(data.data)
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });
}

useEffect(() => { getData()},[])

  return (
    <>
    <div className={styles.main_container}>
      <div className={styles.title}>
       Title
      </div>
      <div className={styles.sub_title}>Users</div>
      <div className={styles.grid_container}>
        
        {details==null?(null):
        (details.map((item)=>{
          return <div onClick={()=>{navigate(`/profile/${item.id}` )}} key={item.id} className={styles.grid_item}><UserCard data={item} /></div>
        }))
        }
      </div>
     </div>
    </>
  )
}

export default Home
