import styles from './App.module.css';
import EditUserForm from './container/CreateUserForm copy/EditUserForm';
import CreateUserForm from './container/CreateUserForm/CreateUserForm';
import { useDeleteUserMutation, useGetUsersQuery } from './store/controllers/userApi';

const App = () => {
  const {data = [], isError, error} = useGetUsersQuery();
  const [deleteHandler, {isError: IsDeleteError, error: deleteError}] = useDeleteUserMutation();
  
  isError && console.log(error);
  IsDeleteError && console.log(deleteError);
   
  return (
   <div className={styles.container}>
        <CreateUserForm />
        {data && data.map((user) => {
          return (
            <div key={user.id} className={styles.userItems}>
               <p className={styles.userText}>name: {user.name}</p> 
               <p className={styles.userText}>email: {user.email}</p>
               <button onClick={() => deleteHandler(user.id)}>Удалить</button>
               <EditUserForm data={user}/>
            </div>
          )
        })}
   </div>
  )
}

export default App;
