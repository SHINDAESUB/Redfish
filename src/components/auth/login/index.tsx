import * as api from 'api'
import { FC , useState } from 'react'
import { useNavigate  } from 'react-router-dom';
import { useSessionDispatch } from '../../../contexts/sessionContext'

const Login : FC = () =>{
    const navigate = useNavigate();

    const dispatch = useSessionDispatch();

    const [UserName , setUserName] = useState('')
    const [Password , setPassword] = useState('')

    const login = async () => {       
        try{
            const response = await api.login({
                UserName,
                Password
            })
            
            dispatch({ 
                type: 'SETTING', 
                id:response.data.Id ,
                name:response.data['@odata.id'],
                user:response.data.UserName 
            });

            navigate('/')
        }catch(error:any){
            alert(error.message)
        }
    }

    return(
        <div className="w-full h-full mt-56 flex justify-center items-center ">
            <form className="p-10 w-100 bg-white rounded flex justify-center items-center flex-col shadow-md ">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-gray-600 mb-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>

                <p className="mb-5 text-3xl uppercase text-gray-600">Login</p>

                <input 
                    className="mb-5 p-3 w-80 focus:border-green-700 rounded border-2 outline-none"
                    autoComplete="off" 
                    placeholder="ID" 
                    required
                    type="text" 
                    value={UserName}
                    onChange={(e) => setUserName(e.target.value)}
                />

                <input
                    className="mb-5 p-3 w-80 focus:border-green-700 rounded border-2 outline-none"
                    autoComplete="off" 
                    placeholder="password" 
                    required
                    type="password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                
                <button 
                    className="bg-green-600 hover:bg-green-900 text-white font-bold p-2 rounded w-80"
                    type="button"
                    onClick={() => login()}
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;