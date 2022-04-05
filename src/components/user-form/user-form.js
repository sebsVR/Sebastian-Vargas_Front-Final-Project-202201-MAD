import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as api from '../../services/apiUsers';
import * as action from '../../redux/control-users/action-creator';
import { Redirect, useNavigate } from 'react-router-dom';

export function UserForm({ setShowForm, mode }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleChange = (ev) => {
    setUser({ ...user, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      let result;
      if (mode === 'login') {
        result = await api.login(user);
      } else {
        result = await api.register(user);
      }
      dispatch(action.login({ ...result.data, isLogged: true }));
      setShowForm(false);
      navigate('/list-products');
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <form>
      <fieldset>
        <legend>{mode === 'login' ? 'Login' : 'Registration'}</legend>
        {mode === 'register' && (
          <input
            className="register-container__name"
            type="text"
            name="firstName"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
          />
        )}
        {mode === 'register' && (
          <input
            className="register-container__lastname"
            type="text"
            name="lastName"
            placeholder="Last name"
            value={user.lastName}
            onChange={handleChange}
          />
        )}
        <input
          className="register-container__username"
          type="text"
          name="userName"
          placeholder="User name"
          value={user.userName}
          onChange={handleChange}
        />
        <input
          className="register-container__password"
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />
      </fieldset>
      <button className="login-button" type="submit" onClick={handleSubmit}>
        {mode === 'login' ? 'Login' : 'Registration'}
      </button>
      <button className="login-button" type="reset" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
}
