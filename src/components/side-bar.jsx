import React from "react";

export const AppSideBar = ({isOpen}) => {

    const monthsList = [
        {title: 'January', id: '0'},
        {title: 'February', id: '1'},
        {title: 'March', id: '2'},
        {title: 'April', id: '3'},
        {title: 'May', id: '4'},
        {title: 'June', id: '5'},
        {title: 'July', id: '6'},
        {title: 'August', id: '7'},
        {title: 'September', id: '8'},
        {title: 'October', id: '9'},
        {title: 'November', id: '10'},
        {title: 'December', id: '11'},

    ];


    return (
        <nav id="sidebarMenu" className={`col-md-3 col-lg-2 d-md-block bg-light sidebar ${isOpen ? '' : 'collapse'}`}>
            <div className="sidebar-sticky pt-3">
                <ul className="nav flex-column">
                    {
                        monthsList.map(month=>(
                            <li className="nav-item" key={'month_'+month.id}>
                                <a className="nav-link active" href="#">{month.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}