import * as api from 'api'
import { FC  } from 'react'
import { Link } from 'react-router-dom';

import { useSessionState } from '../../contexts/sessionContext'

const Home : FC = () =>{

    const state = useSessionState()

    const system = async () => {       
        try{
            console.log(state)

            const response = await api.system('Self')
           
            console.log("response :",response)

        }catch(error:any){
            
            alert(error.message)
        }
    }

    const chassis = async () => {       
        try{
            const response = await api.chassis('Self')
           
            console.log("response :",response)

        }catch(error:any){
            
            alert(error.message)
        }
    }

    const sessions = async () => {       
        try{
            const response = await api.sessions(state.id)
           
            console.log("response :",response)

        }catch(error:any){
            
            alert(error.message)
        }
    }
    


    return(
        <div>
            <div>
                헤더 정보
                <button><Link to='/login'>로그인</Link></button> /

                <button>로그아웃</button>
                
            </div>



            <div>
                <button 
                    type="button"
                    onClick={() => system()}
                >
                    System
                </button>
            </div>
            <div>
                <button 
                    type="button"
                    onClick={() => chassis()}
                >
                    Chassis
                </button>
            </div>
            <div>
                <button 
                    type="button"
                    onClick={() => sessions()}
                >
                    Sessions
                </button>
            </div>
        </div>
    );
}

export default Home