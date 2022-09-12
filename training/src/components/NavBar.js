
import { Link } from 'react-router-dom'


function NavBar() {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <a className="navbar-brand" href="Home">
                    <img src="img/logo.png" alt="Logo MC Donald" height="50px" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-2 bg-secondary rounded text-center">
                            <Link className='link-dark p-2 ' to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-2 bg-secondary rounded text-center">
                            <Link className='link-dark p-2 ' to="cripto">Cripto</Link>
                        </li>
                        <li className="nav-item mx-2 bg-secondary rounded text-center">
                            <Link className='link-dark p-2 ' to="fotos">Fotos</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default NavBar

