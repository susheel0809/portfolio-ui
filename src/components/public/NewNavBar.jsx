import React,{ useState} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function NavBar(){
    const[open,SetOpen] = useState(false);

    return (
        <header className="w-full bg-white">       
            <nav className="max-w-[1100px] mx-auto px-4 py-3 flex items-center justify-between">
                <div className="hidden md:flex items-center gap-6">
                <Link to="/" className="text-gray-700 hover:text-gray-900">My Portfolio</Link>
                <Link to="/projects">My Projects</Link>
                </div>
             </nav>
        </header>
 
    );
}