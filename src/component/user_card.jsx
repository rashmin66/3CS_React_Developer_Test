import styles from '../assets/user_card.module.css'

function UserCard(prop) {
  

  return (
    <>
        <div className={styles.card_container}>
          <div className={styles.image_container}>
            <img className={styles.image01} src={prop.data.avatar}   
            alt="user image" />
          </div>
          <div className={styles.user_name}>{prop.data.first_name}</div>
          <div className={styles.user_email}>{prop.data.email}</div>
        </div>

    </>
  )
}

export default UserCard
