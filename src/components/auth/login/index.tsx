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
        <div>
            <div>
                <div>ID</div>
                <input 
                    type="id" 
                    value={UserName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div>
                <div>Password</div>
                <input
                    type="passward"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <button 
                    type="button"
                    onClick={() => login()}
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;