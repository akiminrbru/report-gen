import styles from './AuthPage.module.scss';
import logo from '../../assets/logo.svg';
import { useGetAuthQuery } from '../../redux/usersApi';
import { useState } from 'react';

const AuthPage = () => {
  


  // const {data, isLoading, error} = useGetAuthQuery();

  let [login, setLogin] = useState('');
  let [password, setPassword] = useState('');
  
  let getAuth = async (login, password) => {
    let user = {
      login,
      password
    }

    let response = await fetch('https://report.rbru-test.ru/api/login', {
      method: "POST",
      body: JSON.stringify(user)
    }).then(data => {
      if (data.ok) {
        return data.json();
      } else {
        console.log(data);
      }
    })

    console.log(response)

    localStorage.setItem('token', response.jwt);
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