import React from 'react';
import {FaGithub} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavBar({title}) {
   return <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
      <div className="container mx-auto px-4">NavBar</div>
  </nav>
}

  NavBar.defaultProps = {
     title: 'Gitub Finder'
  }
  NavBar.propTypes={
     title:PropTypes.string,
  }

export default NavBar