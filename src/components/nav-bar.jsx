import React, {useState} from "react";

export const AppNavBar = ({onOpenClick}) => {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Company name</a>
            <button className={`navbar-toggler position-absolute d-md-none ${isOpen ? '' : 'collapsed'}`}
                    onClick={() => {
                        onOpenClick(!isOpen);
                        setIsOpen(!isOpen);
                    }}
                    type="button">
                <span className="navbar-toggler-icon"></span>
            </button>
            <input className="form-control form-control-dark w-100" type="text" placeholder="Search"/>
            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                    <a className="nav-link" href="#">Sign out</a>
                </li>
            </ul>
        </nav>
    )
}