import { FC ,useState } from 'react'
import { Link } from 'react-router-dom';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSessionState } from '../../contexts/sessionContext'

const Header : FC = () =>{
    
    const [ navbarOpen , setNavbarOpen ] = useState(false)
    const session = useSessionState()
    
    return(
        <header>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-red-700 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                            to="/"
                        >
                            Redfish
                        </Link>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>

                    { session.id === '' ? (
                            <div></div> 
                        ) :(
                            <div
                                className={
                                    "lg:flex flex-grow items-center" +
                                    (navbarOpen ? " flex" : " hidden")
                                }
                                id="example-navbar-danger"
                            >
                                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                    <li className="nav-item">
                                        <a
                                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                        >
                                            <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Sessions</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                        >
                                            <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Chassis</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                        >
                                            <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">System</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header