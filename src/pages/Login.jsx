import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as EmailValidator from 'email-validator';
import { addUserInfo } from '../redux/reducers/userInfo';

export default function Login() {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setUserInfo((prev) => ({ ...prev, [name]: value }));
    const isValidEmail = EmailValidator.validate(userInfo.email);
    setDisabled(!isValidEmail);
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addUserInfo(userInfo));
    setUserInfo({ email: '', password: '' });
  };

  return (
    <div>
      <label htmlFor="email">
        Email:
        <input
          id="email"
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="password">
        Senha:
        <input
          id="password"
          type="password"
          name="password"
          value={userInfo.password}
          onChange={handleChange}
        />
      </label>
      <button
        type="submit"
        onClick={handleClick}
        disabled={disabled}
      >
        LongIn
      </button>
    </div>
  );
}
