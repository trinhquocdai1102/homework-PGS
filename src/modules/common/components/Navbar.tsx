import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../logo-420-x-108.png';
import { FormattedMessage } from 'react-intl';
import { avatarDefault } from '../../../utils/constants';
import { useSelector } from 'react-redux';
import { AppState } from '../../../redux/reducer';
import LogoutForm from '../../auth/components/LogoutForm';

const Navbar = () => {
  const { avatar, name } = useSelector((state: AppState) => {
    return {
      avatar: state.profile.user?.avatar,
      name: state.profile.user?.name,
    };
  });
  const src = avatar ? avatar : avatarDefault;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
          <Link className="navbar-brand navbarLogo" to="/home">
            <img src={logo} alt="" style={{ maxWidth: '100px' }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbarMenu" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">
                  <FormattedMessage id="home" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/listItem">
                  <FormattedMessage id="admin" />
                </Link>
              </li>
              <li className="nav-item dropdown userIcon">
                <a
                  className="nav-link dropdown-toggle active"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src={src} />
                </a>
                <div className="dropdown-menu userDropdownMenu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/userInfo">
                    <FormattedMessage id="userInfo" />
                  </a>
                  <a className="dropdown-item" href="/contact">
                    Liên lạc
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#" style={{ padding: '0' }}>
                    <LogoutForm />
                  </a>
                </div>
              </li>
              <li className="nav-item userName">{name}</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
