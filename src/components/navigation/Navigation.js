import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Logo } from 'components';

const Navbar = () => {
  const [Navbar, setVisible] = useState(false);
  const [Top, isTop] = useState(false);
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);

  const [scrollDir, setScrollDir] = useState(false);

  const handleClick = () => {
    setClick(!click);

    if (!click) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }

      setScrollDir(scrollY > lastScrollY ? setVisible(true) : setVisible(false));
      setScrollDir(scrollY <= 0 ? isTop(true) : isTop(false));
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);


  return (
    <>
        <Nav>
           <div className={`navbar${Navbar ? ' navbar-scrolling' : ''}${Top ? ' navbar-top' : ''}`}>
            <div className="navbar-container">
              <Link to='/' className='navbar-logo' aria-label='Logo' onClick={closeMobileMenu}>
                <Logo href="/" aria-label="home" />
              </Link>
          
              <ul className="navbar-menu">
                <li className="navbar-menu-item">
                  <Link to='/about' className='navbar-links' activeClassName='navbar-link-active'>About</Link>
                </li>
                <li className="navbar-menu-item">
                  <Link to='/portfolio' className='navbar-links' activeClassName='navbar-link-active'>Portfolio</Link>
                </li>
                <li className="navbar-menu-item">
                  <Link to='/contact' className='navbar-links' activeClassName='navbar-link-active'>Contact</Link>
                </li>
              </ul>

              <div className={click ? 'navbar-menu-btn active' : 'navbar-menu-btn'} onClick={handleClick} onKeyDown={handleClick} aria-label='Burger menu button' role="button" tabIndex={0}>
                <span /><span /><span /><span />
              </div>

              <aside className={click ? 'navbar-sidebar active' : 'navbar-sidebar'}>
                <div className="navbar-sidebar-container">
                  <ul>
                    <li className='navbar-sidebar-item'>
                      <Link to='/' className='navbar-sidebar-links' onClick={closeMobileMenu} activeClassName='sidebar-link-active'> 
                        Home
                      </Link>
                    </li>
                    <li className='navbar-sidebar-item'>
                      <Link to='/about' className='navbar-sidebar-links' onClick={closeMobileMenu} activeClassName='sidebar-link-active'>
                        About
                      </Link>
                    </li>
                    <li className='navbar-sidebar-item'>
                      <Link to='/portfolio' className='navbar-sidebar-links' onClick={closeMobileMenu} activeClassName='sidebar-link-active'>
                        Portfolio
                      </Link>
                    </li>
                    <li className='navbar-sidebar-item'>
                      <Link to='/contact' className='navbar-sidebar-links' onClick={closeMobileMenu} activeClassName='sidebar-link-active'>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
      </Nav>
    </>
  );
}

const Nav = styled.nav`

  .navbar {
    display: flex;
    position: fixed;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    margin: 0 auto;
    transition: all 0.35s cubic-bezier(0.645, 0.045, 0.355, 1), color 350ms ease 0s, background 350ms ease 0s;
    transform: translateY(0) !important;
    z-index: 999;
    background: var(--navbar);

    @media (min-width: 767px) {
      height: 100px;
    }

    &-top {
      box-shadow: unset;
      background: transparent;
    }

    &-scrolling {
      transform: translateY(calc(100px * -1)) !important;
      height: 0;
    }

    &-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      padding: 0 20px;

      @media (min-width: 767px) {
        max-width: 800px;
      }

      @media (min-width: 1440px) {
        max-width: 1000px;
      }

      @media (min-width: 1600px) {
        max-width: 1200px;
      }
    }

    &-logo {
      cursor: pointer;
      display: flex;
      z-index: 99;

      svg {
        width: 130px;
      }
    }

    &-menu {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      text-align: center;
      justify-content: end;
      overflow: auto;

      @media screen and (max-width: 767px) {
        display: none;
      }

      &-item {
        &:last-child {
          .navbar-links {
            padding-right: 0;
          }
        }
      }
  }

  &-sidebar {
      position: fixed;
      content: '';
      visibility: hidden;
      display: block;
      width: 100%;
      min-height: 100vh;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 992;
      background: rgba(0,0,0,0.85);
      opacity: 0;
      transition: all 0.3s linear;
      
      &.active {
        visibility: visible;
        opacity: 1;

        ul > li {
          animation: burger-menu-effect 0.35s ease-in-out forwards;

          &:nth-child(1) {
            animation-delay: 0s;
          }

          &:nth-child(2) {
            animation-delay: .15s;
          }

          &:nth-child(3) {
            animation-delay: .3s;
          }

          &:nth-child(4) {
            animation-delay: .45s;
          }
        }
      }

      &-links {
        text-align: center;
        padding: 1rem;
        width: 100%;
        display: table;

        &:hover {
          color: #f00946;
          transform: scale(1.2);
          transition: all 0.3s ease;
        }
      }

      &-item {
        width: 100%;

        &:hover {
          border: none;
        }
      }

      &-container {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        max-height: 100%;
        overflow-y: auto;
        text-align: center;
        transform: translateY(-50%);

        ul {
          position: relative;
          margin: 0;
          padding: 0;
          list-style-type: none;
          height: 100%;

          li {
              position: relative;
              opacity: 1;
              visibility: hidden;
              list-style: none;

              a {
                display: inline-block;
                padding: 15px 0;
                font-size: 17px;
                color: #fff;
                font-weight: bold;
                text-transform: uppercase;
              }
          }
        }
      }

      @-moz-keyframes burger-menu-effect {
        from {
            opacity: 0;
            visibility: hidden;
            -webkit-transform: translateY(-20px);
            -moz-transform: translateY(-20px);
            -ms-transform: translateY(-20px);
            -o-transform: translateY(-20px);
            transform: translateY(-20px)
        }

        to {
            opacity: 1;
            visibility: visible;
            -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -ms-transform: translateY(0);
            -o-transform: translateY(0);
            transform: translateY(0)
        }
      }

      @-webkit-keyframes burger-menu-effect {
        from {
            opacity: 0;
            visibility: hidden;
            -webkit-transform: translateY(-20px);
            -moz-transform: translateY(-20px);
            -ms-transform: translateY(-20px);
            -o-transform: translateY(-20px);
            transform: translateY(-20px)
        }

        to {
            opacity: 1;
            visibility: visible;
            -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -ms-transform: translateY(0);
            -o-transform: translateY(0);
            transform: translateY(0)
        }
      }

      @-o-keyframes burger-menu-effect {
          from {
              opacity: 0;
              visibility: hidden;
              -webkit-transform: translateY(-20px);
              -moz-transform: translateY(-20px);
              -ms-transform: translateY(-20px);
              -o-transform: translateY(-20px);
              transform: translateY(-20px)
          }

          to {
              opacity: 1;
              visibility: visible;
              -webkit-transform: translateY(0);
              -moz-transform: translateY(0);
              -ms-transform: translateY(0);
              -o-transform: translateY(0);
              transform: translateY(0)
          }
      }

      @keyframes burger-menu-effect {
        from {
            opacity: 0;
            visibility: hidden;
            -webkit-transform: translateY(-20px);
            -moz-transform: translateY(-20px);
            -ms-transform: translateY(-20px);
            -o-transform: translateY(-20px);
            transform: translateY(-20px)
        }

        to {
            opacity: 1;
            visibility: visible;
            -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -ms-transform: translateY(0);
            -o-transform: translateY(0);
            transform: translateY(0)
        }
      }
    }

    .navbar-link-active,
    .sidebar-link-active {
      color: var(--primary);
    }

    &-links,
    &-sidebar-links {
      color: var(--text);
      display: flex;
      align-items: center;
      text-decoration: none;
      padding-right: 1.5rem;
      height: 100%;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: .2s;

      &:hover,
      &:focus {
        color: var(--primary);
      }
    }

    &-menu-btn {
      position: absolute;
      width: 65px;
      height: 55px;
      display: flex;
      position: relative;
      border: 0;
      z-index: 999;
      display: block;

      @media screen and (min-width: 767px) {
        display: none;
      }

      span {
        cursor: pointer;
        border-radius: 1px;
        height: 2px;
        width: 25px;
        background: var(--text);
        position: absolute;
        display: block;
        transform: rotate(0deg);
        transition: all 150ms ease-in-out;
        content: "";

        &:nth-child(1) {
          top: 15px;
          width: 50%;
          right: 0;
        }

        &:nth-child(2),
        &:nth-child(3) {
          top: 24px;
          right: 0;
        }

        &:nth-child(4) {
          top: 33px;
          width: 50%;
          right: 0;
        }
      }

      &.active {
        span {
          background: #fff;
          
          &:nth-child(1) {
            top: 18px;
            width: 0%;
            right: 0;
          }

          &:nth-child(2) {
            transform: rotate(45deg);
            right: 0;
          }

          &:nth-child(3) {
            transform: rotate(-45deg);
            right: 0;
          }

          &:nth-child(4) {
            top: 18px;
            width: 0%;
            right: 0;
          }
        }
      }
    }
  }

`;

export default Navbar;