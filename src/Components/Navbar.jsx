import React from 'react'
import {Link} from "react-router-dom"
import "../assets/style/style.css"

export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg background">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="#">Anserd</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/categories">Categories</Link>
                            </li>
                            
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

