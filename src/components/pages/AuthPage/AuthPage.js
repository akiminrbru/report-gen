import styles from './AuthPage.module.scss';
import logo from '../../../assets/logo.svg';
import { useGetAuthMutation, useGetAuthQuery } from '../../../redux/usersApi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsAuth } from '../../../redux/authSlice';
import { useForm } from "react-hook-form"; 
import { useState } from 'react';

const AuthPage = () => {
  const [getAuth, result]  = useGetAuthMutation();
  const dispatch = useDispatch();

  const [isInvalid, setIsInvalid] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  let onSubmit = async (data) => {

    getAuth(data)
    .unwrap()
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.jwt);
      dispatch(setIsAuth(true));
      setIsInvalid(false);
    })
    .catch(err => {
      console.log(err)
      setIsInvalid(true);
    });
  }

  return (
    <div className={styles.auth}>
      <div className={styles.auth__inner}>
        <img src={logo}></img>
        <form onSubmit={handleSubmit(onSubmit)}> 
          <div>
            <input type='text' {...register("login", { required: true, maxLength: 30 })} placeholder='Логин'></input>
            {errors?.login?.type === "required" && <p className={styles.auth__formWarning}>Введите логин!</p>}
          </div>
          <div>
            <input type='password' {...register("password", { required: true, maxLength: 30 })} placeholder='Пароль'></input>
            {errors?.password?.type === "required" && <p className={styles.auth__formWarning}>Введите пароль!</p>}
          </div>
          {isInvalid && <p className={styles.auth__formWarning}>Неверный логин или пароль!</p>}
          <button type='submit'>Войти</button>
        </form>
      </div>
    </div>
  )
}

export default AuthPage;