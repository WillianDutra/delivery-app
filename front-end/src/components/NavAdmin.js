import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function NavAdmin() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user')) || [];
    setUser(data);
  }, []);

  return (
    <nav className="w-full bg-darkgreen flex justify-between">
      <p
        className="text-sm px-2 bg-lightgreen h-full py-2 font-semibold"
        data-testid="customer_products__element-navbar-link-orders"
      >
        GERENCIAR USUÁRIOS
      </p>
      <div className="flex items-center justify-center bg-purple ">
        <p
          data-testid="customer_products__element-navbar-user-full-name"
          className="px-4 text-white"
        >
          { user.name }
        </p>
        <Link to="/login" className="h-full">
          <button
            type="button"
            className="h-full bg-blue px-6 text-white h-full font-semibold"
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ () => localStorage.removeItem('user') }
          >
            Sair
          </button>
        </Link>
      </div>
    </nav>
  );
}
