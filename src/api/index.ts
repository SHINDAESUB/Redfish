import {setupInterceptorsTo} from "./interceptors";
import axios from "axios";
import * as types from "./types" 

setupInterceptorsTo(axios);

export async function login(param: types.LoginInput){
    return await axios.post(`/api/SessionService/Sessions`,param)
}

export async function logout(param: types.LogoutInput){
    return await axios.delete(`/api/SessionService/Sessions/${param}`)
}

export async function system(param: string){
    return await axios.get(`/api/Systems/${param}`)
}

export async function chassis(param: string){
    return await axios.get(`/api/Chassis/${param}`)
}

export async function managers(){
    return await axios.get(`/api/Managers`)
}

export async function sessions(param: string){
    return await axios.get(`/api/SessionService/Sessions/${param}`)
}