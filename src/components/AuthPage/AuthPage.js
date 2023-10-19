import styles from './AuthPage.module.scss';
import logo from '../../assets/logo.svg';
import { useGetAuthQuery } from '../../redux/usersApi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsAuth } from '../../redux/authSlice';


const AuthPage = () => {
  // const {data, isLoading, error} = useGetAuthQuery();
  let [login, setLogin] = useState('');
  let [password, setPassword] = useState('');
  const dispatch = useDispatch();


  let getAuth = async (login, password) => {
    let user = {
      login,
      password
    }

    let response = await fetch('https://report.rbru-test.ru/api/login', {
      method: "POST",
      body: JSON.stringify(user)
    }).then(data => data.json()).then(data => {
        // console.log(data.jwt);
        localStorage.setItem('token', data.jwt);
        dispatch(setIsAuth(true));
    }).catch(err => {
      console.log(err);
    })
  }
  
  return (
    <div className={styles.auth}>
      <div className={styles.auth__inner}>
        <img src={logo}></img>
        <form>
          <input type='text' value={login} onChange={event => setLogin(event.target.value)} placeholder='Логин'></input>
          <input type='password' value={password} onChange={event => setPassword(event.target.value)} placeholder='Пароль'></input>
          <button onClick={(e) => {
            e.preventDefault();
            getAuth(login, password);
          }}>Войти</button>
        </form>
      </div>
    </div>
  )
}

export default AuthPage;