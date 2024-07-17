import React from 'react'
import './sideBar.css'
import navList from '../data/navItem'
import NavItem from './NavItem'

function SideBar() {
  return (
    <aside id='sidebar' className='sidebar'>
        <ul className="sidebar-nav" id='sidebar-nav'>
            <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="bi bi-grid"></i>
                    <span>Dashboard</span>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed"
                    href="#"
                    data-bs-target='#component-nav'
                    data-bs-toggle="collapse"
                 >
                    <i className="bi bi-menu-button-wide"></i>
                    <span>Documents</span>
                    <i className='bi bi-chevron-down ms-auto' ></i>
                </a>

                <ul id='component-nav'
                    className='nav-content collapse'
                    data-bs-parent='#sidebar-nav'
                >
                    <li>
                        <a href="#">
                            <i className='bi bi-circle'></i>
                            <span>Customers</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bi bi-circle' ></i>
                            <span>Suppliers</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bi bi-circle' ></i>
                            <span>Logistics</span>
                        </a>
                    </li>

                </ul>
            </li>


            <li className="nav-item">
                <a className="nav-link collapsed"
                    href="#"
                    data-bs-target='#forms-nav'
                    data-bs-toggle="collapse"
                 >
                    <i className="bi bi-journal-text"></i>
                    <span>Forms</span>
                    <i className='bi bi-chevron-down ms-auto' ></i>
                </a>

                <ul id='forms-nav'
                    className='nav-content collapse'
                    data-bs-parent='#sidebar-nav'
                >
                    <li>
                        <a href="#">
                            <i className='bi bi-circle'></i>
                            <span>Aplication Forms</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bi bi-circle' ></i>
                            <span>Release Forms</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bi bi-circle' ></i>
                            <span>Cancellation Forms</span>
                        </a>
                    </li>
                </ul>
            </li>
            
            <li className="nav-item">
                <a className="nav-link collapsed"
                    href="#"
                    data-bs-target='#tables-nav'
                    data-bs-toggle="collapse"
                 >
                    <i className="bi bi-layout-text-window-reverse"></i>
                    <span>Tables</span>
                    <i className='bi bi-chevron-down ms-auto' ></i>
                </a>

                <ul id='tables-nav'
                    className='nav-content collapse'
                    data-bs-parent='#sidebar-nav'
                >
                    <li>
                        <a href="#">
                            <i className='bi bi-circle'></i>
                            <span>General Tables</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bi bi-circle' ></i>
                            <span>Data Tables</span>
                        </a>
                    </li>
                </ul>
            </li>

            
            <li className="nav-item">
                <a className="nav-link collapsed"
                    href="#"
                    data-bs-target='#charts-nav'
                    data-bs-toggle="collapse"
                 >
                    <i className="bi bi-clipboard-data-fill"></i>
                    <span>Charts</span>
                    <i className='bi bi-chevron-down ms-auto' ></i>
                </a>
                <ul id='charts-nav'
                    className='nav-content collapse'
                    data-bs-parent='#sidebar-nav'
                >
                    <li>
                        <a href="#">
                            <i className='bi bi-circle'></i>
                            <span>Bar Charts</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bi bi-circle' ></i>
                            <span>Scatter Plot</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bi bi-circle' ></i>
                            <span>Graph Charts</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li className='nav-heading'> Pages </li>
            { navList.map(nav=> (
               <NavItem key={nav._id} nav={nav} />
            ))}
           
        </ul>
    </aside>
  )
}

export default SideBar
