import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const UsersForm = ({ usersSelected, getUsers, deselectUsers, usersSelect }) => {

    const initialValues = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        birthday: ""
    }

    const { handleSubmit, register, reset } = useForm();

    useEffect(() => {
        if(usersSelected){
            reset(usersSelected)
        } else {
            reset(initialValues)
        }
    }, [usersSelected])

    const submit = (data) => {
        console.log(data)
        if(usersSelected){
            axios
                .put(`https://users-crud1.herokuapp.com/users/${usersSelected.id}/`, data)
                    .then(() => {
                        getUsers()
                        deselectUsers()
                    })
                    .catch( (error) => console.log(error.response?.data))
        } else {
            axios
                .post('https://users-crud1.herokuapp.com/users/', data)
                    .then(() => getUsers())
                    .catch( (error) => console.log(error.response?.data))
                    reset(initialValues)
        }
    }

  return (
    <form className="users-form" onSubmit={handleSubmit(submit)}>
      <div className="input-form">
        <label htmlFor="first_name"><i class='bx bxs-user'></i> </label>
        <input {...register("first_name")} type="text" id="first_name" placeholder="first name" className="input-name" />
        {" "}
        <label htmlFor="last_name"></label>
        <input {...register("last_name")} type="text" id="last_name" placeholder="last name" className="input-name" />
      </div>
      <div className="input-form">
        <label htmlFor="email"><i class='bx bxs-envelope'></i> </label>
        <input {...register("email")} type="email" id="email" placeholder="email" />
      </div>
      <div className="input-form">
        <label htmlFor="password"><i class='bx bxs-lock-alt'></i> </label>
        <input {...register("password")} 
        
        type="password" id="password" placeholder="password" />
      </div>
      <div className="input-form">
        <label htmlFor="birthday"><i class='bx bxs-calendar'></i>  </label>
        <input {...register("birthday")} type="date" id="birthday" placeholder="birthday" />
      </div>
      <div className="input-button">
        <button>Upload</button>
        {
          usersSelected && (
            <button type="button" onClick={() => usersSelect(null)} >Cancel</button>
          )
        }
      </div>
    </form>
  );
};

export default UsersForm;
