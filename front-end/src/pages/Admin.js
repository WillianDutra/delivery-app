import { useState } from 'react';
import NavAdmin from '../components/NavAdmin';

export default function Admin() {
  const [userName, setUserName] = useState('');
  const [nameError, setNameError] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const minNameLength = 12;
  const minPasswordLength = 6;
  const roles = ['Vendedor', 'Cliente', 'Administrador'];
  const [userRole, setUserRole] = useState(roles[0]);

  const ROUTE = 'admin_manage';

  function validateEmail(email) {
    setUserEmail(email);
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,4}$/i;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  }

  function validateName(name) {
    setUserName(name);
    if (name.length < minNameLength) {
      setNameError('Full name must be at least 12 characters');
    } else {
      setNameError('');
    }
  }

  const validatePassword = (password) => {
    setUserPassword(password);
    if (password.length < minPasswordLength) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }
  };

  return (
    <>
      <NavAdmin />
      <div className="w-4/5 mx-auto flex flex-wrap max-w-full justify-center">
        <p>{nameError || emailError || passwordError}</p>
        <h3 className="font-semibold mt-6 w-full ml-20%">Cadastrar novo usuário</h3>
        <label htmlFor="user-name" className="font-normal text-xs m-2 w-full">
          Nome
          <input
            name="user-name"
            placeholder="Nome e sobrenome"
            data-testid={ `${ROUTE}__input-name` }
            className="border border-black rounded p-2 block w-full"
            onChange={ ({ target: { value } }) => validateName(value) }
            value={ userName }
          />
        </label>
        <label htmlFor="user-email" className="font-normal text-xs m-2 w-full">
          Email
          <input
            name="user-email"
            placeholder="seu-email@site.com.br"
            data-testid={ `${ROUTE}__input-email` }
            className="border border-black rounded p-2 block w-full"
            onChange={ ({ target: { value } }) => validateEmail(value) }
            value={ userEmail }
          />
        </label>
        <label htmlFor="user-password" className="font-normal text-xs m-2 w-full">
          Senha
          <input
            name="user-password"
            placeholder="**********"
            data-testid={ `${ROUTE}__input-password` }
            className="border border-black rounded p-2 block w-full"
            onChange={ ({ target: { value } }) => validatePassword(value) }
            value={ userPassword }
          />
        </label>
        <label htmlFor="user-type" className="font-normal text-xs m-2 w-full">
          Tipo
          <select
            data-testid={ `${ROUTE}__select-seller` }
            className="border border-black rounded p-2 block w-full"
            onChange={ ({ target: { value } }) => setUserRole(value) }
          >
            { roles.map((role, index) => (
              <option value={ role } key={ index }>{role}</option>
            ))}
          </select>
        </label>
        <button
          type="button"
          className="py-2 px-8 bg-darkgreen text-white rounded uppercase font-semibold"
          data-testid={ `${ROUTE}__button-register` }
        >
          CADASTRAR
        </button>
      </div>
    </>
  );
}
