// import {ChangeEvent, FormEvent, useState} from 'react';

// const CreateUserForm = () => {
//     const initialState:TPreUser = {
//         name: "",
//         email: ""
//       }
//       const [userData, setUserData] = useState<TPreUser>(initialState);
    
//       const changeUserDataHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         setUserData(prevState => ({...prevState, [e.target.name]: e.target.value}))
//       }
    
//       const sendUserHandler = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//           if (userData.name.trim() && userData.email.trim()) {
//             const response: AxiosResponse<TPreUser> = await  axios.post("http://localhost:8000/api/users", userData);
//             response.status < 400 && setUserData(response.data);
//             console.log(response.data);
//           } else {
//             alert("заполните все поля");
//           }
//         } catch (err: unknown) {
//           alert(err.message);
//         }
//       }
//       return (
//         <div className={styles.container}>
//         <h1>Users</h1>
//         <div className={styles.user__add_block}>
//           <form className={styles.user__form} onSubmit={sendUserHandler}>
//             <label htmlFor={"name"}>Name:</label>
//             <input
//                   id="name"
//                   className={styles.user__input}
//                   type={"text"}
//                   name="name"
//                   value={userData.name}
//                   onChange={changeUserDataHandler}
//             />
//             <label htmlFor={"email"}>Email:</label>
//             <input
//                 id="email"
//                 className={styles.user__input}
//                 type={"text"}
//                 name="email"
//                 value={userData.email}
//                 onChange={changeUserDataHandler}
//             />
//             <button className={styles.user__form_button}>Send</button>
//           </form>
//         </div>
//     </div>
//       )
// }

// export default CreateUserForm;