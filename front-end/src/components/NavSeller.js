import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavCustomer() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user')) || [];
    setUser(data);
  }, []);

  const logOut = () => localStorage.removeItem('user');

  return (
    <nav className="navBar">
      <Link
        className="navProduct"
        to="/seller/orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Produtos
      </Link>
      <p
        className="navPedidos2"
        data-testid="customer_products__element-navbar-link-orders"
      />
      <p
        data-testid="customer_products__element-navbar-user-full-name"
        className="navUser text-center text-black-950"
      >
        { user.name }
      </p>
      <Link to="/login" className="navLogout">
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ logOut }
        >
          Sair
        </button>
      </Link>
    </nav>
  );
}
