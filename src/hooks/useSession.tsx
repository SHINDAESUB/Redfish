import * as api from '../api/index'

export interface Session {
    user : string,
    id : string,
    name : string,
}

export function useSession( session : Session | null)  {
    console.log(session)
}

export async function logout( session : string) {
    await api.logout({num : session})
    useSession(null)
}


