import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthHeader from './AuthHeader';
import InputField from './InputField';
import { validateEmail, validatePassword, validateName } from '../utils/validateInputs';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [userExist, setUserExist] = useState('');
  const history = useHistory();

  useEffect(() => {
    setEmailError(validateEmail(email));
    setPasswordError(validatePassword(password));
    setNameError(validateName(name));
  }, [name, email, password]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    validateEmail(email);
    validatePassword(password);
    validateName(name);

    if (!emailError && !passwordError && !nameError) {
      try {
        const response = await fetch('http://localhost:3001/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('user', JSON.stringify(data));
          history.push('/customer/products');
        } else {
          const errorData = await response.json();
          console.log(errorData);
          setUserExist('User already exist');
        }
      } catch (error) {
        console.error('Error submitting the form:', error);
      }
    }
  };

  const isDisabled = emailError
    || passwordError
    || nameError
    || email === ''
    || password === ''
    || name === '';

  return (
    <form
      onSubmit={ handleSubmit }
      className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0"
    >
      <AuthHeader />
      <InputField
        label="Name"
        type="text"
        name="name"
        id="name"
        datatestid="common_register__input-name"
        value={ name }
        onChange={ handleNameChange }
      />
      {nameError && <p className="mx-5 text-sm text-red-500">{nameError}</p>}
      <InputField
        label="Email"
        type="email"
        name="email"
        id="email"
        datatestid="common_register__input-email"
        value={ email }
        onChange={ handleEmailChange }
      />
      {emailError && <p className="mx-5 text-sm text-red-500">{emailError}</p>}
      <InputField
        label="Password"
        type="password"
        name="password"
        id="password"
        datatestid="common_register__input-password"
        value={ password }
        onChange={ handlePasswordChange }
      />
      {passwordError && (
        <p className="mx-5 text-sm text-red-500">{passwordError}</p>
      )}
      <div className="mx-5 my-4">
        <button
          type="submit"
          disabled={ isDisabled }
          data-testid="common_register__button-register"
          className={ `w-full text-white bg-green-700 hover:bg-primary-700
          focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg 
          px-5 py-2.5
          ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}` }
        >
          Register
        </button>
      </div>
      {userExist && (
        <p
          className="mx-5 text-sm text-red-500"
          data-testid="common_register__element-invalid_register"
        >
          {userExist}
        </p>
      )}
    </form>
  );
}

export default RegisterForm;
