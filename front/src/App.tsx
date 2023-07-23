import styles from './App.module.css';
import { useDeleteUserMutation, useGetUsersQuery } from './store/controllers/userApi';

const App = () => {
  const {data = [], isError, error} = useGetUsersQuery();
  const [deleteHandler, {isError: IsDeleteError, error: deleteError}] = useDeleteUserMutation();
  
  isError && console.log(error);
  IsDeleteError && console.log(deleteError);
   
  return (
   <div className={styles.container}>
        {data && data.map((user) => {
          return (
            <div key={user.id} className={styles.userItems}>
               <p className={styles.userText}>name: {user.email}</p> 
               <p className={styles.userText}>email: {user.email}</p>
               <button onClick={() => deleteHandler(user.id)}>delete</button>
            </div>
          )
        })}
   </div>
  )
}

export default App;
