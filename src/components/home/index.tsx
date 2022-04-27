import * as api from 'api'
import { FC ,useState } from 'react'
import styled from 'styled-components';
import { Chart, registerables } from 'chart.js'
import { Bar } from 'react-chartjs-2';
import { useSessionState } from '../../contexts/sessionContext'

const data = {
  labels: ['1 月', '2 月', '3 月', '4 月', '5 月', '6 月', '7 月'],
  datasets: [
    {
      label: '',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
    responsive:true
  };


Chart.register(...registerables);

const Home : FC = () =>{

    const state = useSessionState()

    const system = async () => {       
        try{
            console.log(state)

            const response = await api.system('Self')
           
            console.log("response :",response.data)


        }catch(error:any){
            
            alert(error.message)
        }
    }

    const chassis = async () => {       
        try{
            const response = await api.chassis('Self')
           
            console.log("response :",response.data)

        }catch(error:any){
            
            alert(error.message)
        }
    }

    const sessions = async () => {       
        try{
            const response = await api.sessions(state.id)
           
            console.log("response :",response.data)

        }catch(error:any){
            
            alert(error.message)
        }
    }
    
    return(
        <StyleArtcle>

            <Bar data={data} options={options} />
            <button
                className="mx-2 " 
                type="button"
                onClick={() => system()}
            >
                System
            </button>
            <button 
                className="mx-2 " 
                type="button"
                onClick={() => chassis()}
            >
                Chassis
            </button>

            <button 
                className="mx-2 " 
                type="button"
                onClick={() => sessions()}
            >
                Sessions
            </button>
        </StyleArtcle>
    );
}

export default Home

const StyleArtcle = styled.article`
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    background-color:aqua;
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;

    button{
        background-color:red
    }
`