import styles from '../assets/clicked_user.module.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function ClickedCard(props) {
    let { id } = useParams()
  const [details, setCount] = useState(null)
  const navigate = useNavigate();

  function getData() {
  fetch(`https://reqres.in/api/users/${id}`, {
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
        <div className={styles.clicked_container}>
         <div onClick={()=>{navigate(`/` )}} className={styles.backed_title}>Back</div>
          {details == null ?(null):(  <div className={styles.cliked_grid_container}>
           
          <div className={styles.grid_item_01}>
            <div className={styles.image_container}>
            <img className={styles.image01} src={details.avatar}  
            alt="user image" />
            </div>
           </div>
          <div className={styles.grid_item_02}>
          <div className={styles.user_name}>{details.first_name}</div>
           <div className={styles.user_name}>{details.last_name}</div>
           <div className={styles.email}>{details.email}</div>
        </div>
        </div>
        )}

         
       
        </div>
    </>
  )
  }
export default ClickedCard
