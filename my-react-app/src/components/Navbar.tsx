// import React from 'react'
import { Link, useLocation } from "react-router-dom";

function Navbar() {

    const currentPath = useLocation().pathname;
    const appPages = [
        {pageName: "Home", linkUrl: "/"},
        {pageName: "List", linkUrl: "/List"},
        {pageName: "Contact", linkUrl: "/Contact"},
        {pageName: "Form", linkUrl: "/Form"},

    ]
    return (
        // <nav className='space-x-10 text-xl bg-slate-300 flex justify-center py-2'>
        //     <Link to="/">Home</Link>
        //     <Link to="/List">List</Link>
        //     <Link to="/contact">Contact</Link>
        //     <Link to="Form">Form</Link>
        // </nav>

        <nav className="space-x-10 text-xl bg-slate-300 flex justify-center py-2">
            {appPages.map((page)=> (
                <Link to={page.linkUrl} className={`${currentPath === page.linkUrl && "underline"}`}>{page.pageName}</Link>
            ))}


        </nav>
    )
}

export default Navbar