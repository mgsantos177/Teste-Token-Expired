import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import {
  MdInsertChart,
  MdKeyboardArrowRight,
  MdSettings,
  MdNoteAdd,
  MdShowChart,
} from 'react-icons/md';
import logo from '../../assets/img/logo.ico';
import profile from '../../assets/img/M.png';
import './styles.css';

export default class Sidenav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleDashboard: false,
    };

    this.handleToggleDashboard = this.handleToggleDashboard.bind(this);
  }

  handleToggleDashboard() {
    const { toggleDashboard } = this.state;
    this.setState({
      toggleDashboard: !toggleDashboard,
    });
  }

  render() {
    const { toggleDashboard } = this.state;
    return (
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <a href="#" className="nav-logo">
              <img className="logo-maior" src={logoMaior} alt="logo" />
              <img className="logo-peq" src={logo} alt="logo" />
            </a>
          </li>
          <li className="nav-item-profile">
            <a href="#" className="profile-link">
              <img className="profile-img" src={profile} alt="logo" />
              <span className="profile-info">Matheus</span>
              <span className="profile-info">mgsantos177@gmail.com</span>
            </a>
          </li>
          <li className="list-divider" />
          <li className="nav-item">
            <a
              href="#"
              className="nav-link"
              onClick={this.handleToggleDashboard}
            >
              <IconContext.Provider
                value={{
                  className: 'react-icons',
                  size: '3em',
                  style: { verticalAlign: 'middle' },
                }}
              >
                <div>
                  <MdInsertChart />
                </div>
              </IconContext.Provider>
              <span className="link-text">Dashboard</span>
              <IconContext.Provider
                value={{
                  className: `arrow-icon${toggleDashboard ? '-open' : ''}`,
                  size: '1em',
                  style: { verticalAlign: 'middle' },
                }}
              >
                <div>
                  <MdKeyboardArrowRight />
                </div>
              </IconContext.Provider>
            </a>
          </li>
          {toggleDashboard && (
            <>
              <li className="nav-subitem">
                <a href="#" className="nav-sublink">
                  <IconContext.Provider
                    value={{
                      className: 'react-icons',
                      size: '1.5em',
                      style: { verticalAlign: 'middle' },
                    }}
                  >
                    <div>
                      <MdShowChart />
                    </div>
                  </IconContext.Provider>
                  <span className="link-text">Org Principal</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-sublink">
                  <IconContext.Provider
                    value={{
                      className: 'react-icons',
                      size: '1.5em',
                      style: { verticalAlign: 'middle' },
                    }}
                  >
                    <div>
                      <MdShowChart />
                    </div>
                  </IconContext.Provider>
                  <span className="link-text">Health Cloud</span>
                </a>
              </li>
            </>
          )}
          <li className="nav-item">
            <a href="#" className="nav-link">
              <IconContext.Provider
                value={{
                  className: 'react-icons',
                  size: '3em',
                  style: { verticalAlign: 'middle' },
                }}
              >
                <div>
                  <MdSettings />
                </div>
              </IconContext.Provider>
              <span className="link-text">Administração</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <IconContext.Provider
                value={{
                  className: 'react-icons',
                  size: '3em',
                  style: { verticalAlign: 'middle' },
                }}
              >
                <div>
                  <MdNoteAdd />
                </div>
              </IconContext.Provider>
              <span className="link-text">Debug</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
