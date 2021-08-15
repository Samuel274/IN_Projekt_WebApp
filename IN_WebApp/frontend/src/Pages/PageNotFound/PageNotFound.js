import React from 'react'
import './pagenotfound.css'

function PageNotFound() {
    return (
        <div className="pagenotfound">
            <h1>
                PAGE NOT FOUND 404
            </h1>
            <h2>Sind Sie angemeldet?</h2>
            <a href="/registration">Registrieren</a>
            <h2>Anmelden:</h2>
            <a href="/login">Login</a>
        </div>
    )
}

export default PageNotFound
