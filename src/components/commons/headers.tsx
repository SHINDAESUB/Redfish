import { FC  } from 'react'
import { Routes ,Link } from 'react-router-dom';

const Header : FC = () =>{
    
    const test = true
    
    return(
        <nav>
            <Link to="/">
            <button>HOME</button>
            </Link>

            {test ? (
                <span>
                <Link to="/login">
                    LOGIN
                </Link> 
                </span>
            ) : (
                <span>
                <strong>
                    로그인함  
                </strong> 
                <button >
                    logout
                </button> 
                </span>

            )}
        </nav>
    )
}

export default Header