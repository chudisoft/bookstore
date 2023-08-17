import React from 'react';
import './GlobalNav.css';

const GlobalNav = () => (
  <nav className="container">
    <h2>BookStore CMS</h2>
    <ul>
      <li><a href="/Books">BOOKS</a></li>
      <li>|</li>
      <li><a href="/Categories">CATEGORIES</a></li>
    </ul>
  </nav>
);

export default GlobalNav;
