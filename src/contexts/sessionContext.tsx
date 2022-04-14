import React, { createContext, Dispatch, useReducer, useContext } from "react";

export type State = {
    user: string,
    id: string,
    name: string
}

type Action = 
| { type: 'SETTING'; id:string , user:string, name:string }
| { type: 'REMOVE'; }

type SessionDispatch = Dispatch<Action>

const SessionStateContext = createContext<State | null>(null);
const SessionDispatchContext = createContext<SessionDispatch | null>(null);

function reducer(state: State ,action: Action ): State{
    switch(action.type){
        case 'SETTING':
            return {
                ...state,
                id:action.id,
                name:action.name,
                user:action.user,
            };
            case 'REMOVE':
                return {
                    ...state,
                    id:'',
                    name:'',
                    user:'',
                };
    
        default:
            throw new Error('Unhandled action');
    }
}

export function SessionProvider({ children } : { children: React.ReactNode }){
    const [state , dispatch ] = useReducer(reducer ,{
        user: '',
        id: '',
        name: ''
    });

    return(
        <SessionStateContext.Provider value={state}>
            <SessionDispatchContext.Provider value={dispatch}>
                { children }
            </SessionDispatchContext.Provider>
        </SessionStateContext.Provider>
    )
}

export function useSessionState(){
    const state = useContext(SessionStateContext);
    if(!state) throw new Error('Cannot find SessionProvider')
    return state;
}

export function useSessionDispatch() {
    const dispatch = useContext(SessionDispatchContext);
    if (!dispatch) throw new Error('Cannot find SessionProvider'); 
    return dispatch;
}