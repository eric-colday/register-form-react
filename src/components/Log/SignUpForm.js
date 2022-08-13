import React from 'react'

const SignUpForm = () => {

    const handleRegister = async (e) => {

    }

  return (
    <form action="" onSubmit={handleRegister} id="sign-up-form">
        <label htmlFor="pseudo">Pseudo</label>
        <br />
        <input
            type="text"
            name="pseudo"
            id="pseudo"

            value="pseudo"
        />
        <div className="pseudo error"></div>
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
            type="text"
            name="email"
            id="email"
            
            value="email"
        />
        <div className="email error"></div>
        <br />
        <label htmlFor="password">Mot de passe</label>
        <br />
        <input
            type="password"
            name="password"
            id="password"
            
            value="password"
            />
            <div className="password error"></div>
            <br />
            <label htmlFor="password-conf">Confirmer mot de passe</label>
            <br/>
            <input
                type="password"
                name="password"
                id="password-conf"
                
                value="controlPassword"
            />
            <div className="password-confirm error"></div>
            <br />
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
                J'accepte les{" "}
                <a href="/" target="_blank" rel="noopener noreferrer">
                conditions générales
                </a>
            </label>
            <div className="terms error"></div>
            <br />
            <input type="submit" value="Valider inscription" />
        </form>
    )
}

export default SignUpForm
