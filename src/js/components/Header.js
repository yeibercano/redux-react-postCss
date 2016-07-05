import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
     <header>
       <div className='header-wrapper container'>
	       <div className="brand">BRAND</div>
	       <nav >
	        <ul>
	          <li><a href="#" title="home">home</a></li>
	          <li><a href="#" title="blog">blog</a></li>
	          <li><a href="#" title="categories">categories</a></li>
	        </ul>
	       </nav>
       </div>
     </header>
    )
  }
}
