import React from "react";
import { getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { getAllCategories } from '../queries/categories';
import logo from '../img/lexus.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        getAllCategories(db)
            .then((item) => {
                setCategories(item)
            })
    }, []);


    const renderCategories = () => (

        <ul className='categorias-text'>
            {categories?.map(item => (
                <Link to={`/category/${item.marca}`}>
                    <li className='category' key={item?.id}>{item?.marca}</li>
                </Link>
            ))}
        </ul>
    )


    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <button className='navbar-toggler' type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id="navbarNav">
                        <div>
                            <Link to='/' >
                                <img className='logo' src={logo} alt="Bootstrap" width="120" height="120" />
                            </Link>

                        </div>
                        <ul className='navbar-nav'>

                            <Link className='nav-link' to='/'  >
                                <li className='nav-item'> Inicio</li>
                            </Link>

                            <li class="nav-item  dropdown ">
                                <Link class="nav-link  dropdown-toggle" data-bs-toggle="dropdown"
                                    aria-expanded="false">Marcas</Link>
                                <ul className="nav-item dropdown-menu">
                                    {renderCategories()}
                                </ul>
                            </li>

                            <li className='nav-item'>
                                <Link className='nav-link' to='cart'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-cart" viewBox="0 0 16 16" >
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 
                                    .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 
                                    2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 
                                    0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2
                                     1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>
                                </Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;