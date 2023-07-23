import { Formik, Field, ErrorMessage, Form } from "formik";
import FormContainer from "../../componenst/FormContainer/FormContainer";
import { useState } from "react";
import { IUserPre } from "../../interfaces/IUserPre";
import { userFormSchema } from "../../schema/userFormSchema";
import { useAddUserMutation } from "../../store/controllers/userApi";
import styles from "./CreateUserForm.module.css";

const CreateUserForm = () => {
    const [ addUser ] = useAddUserMutation();
    const [ userData ] = useState<IUserPre>({
        name: "",
        email: "",
    })
    
    return (
    <FormContainer>
        <Formik
            initialValues={userData}
            validateOnBlur
            validationSchema={userFormSchema}
            onSubmit={async (values, {resetForm}) => {
                await addUser(values);
                resetForm();
            }}
        >
        {({ isValid }) => (
            <Form className={styles.addForm}>
                <Field className={styles.addFormInput} name="name" type="text" placeholder="Введите имя"/>
                <ErrorMessage name="name"component="div"/>
                <Field className={styles.addFormInput} name="email" type="text" placeholder="Введите имя"/>
                <ErrorMessage name="email"component="div"/>
                <button disabled={!isValid} type="submit">Добавить</button>
            </Form>
        )}
        </Formik>
    </FormContainer>
    )
}

export default CreateUserForm;