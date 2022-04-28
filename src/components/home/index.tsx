import * as api from 'api'
import { FC ,useState } from 'react'
import styled from 'styled-components';
import { Chart, registerables } from 'chart.js'
import { Bar ,Line } from 'react-chartjs-2';
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

const lineData = {
    labels:[ "a" , "a", "a" , "a" , "a" , "a"],
    datasets: [
        {
            data:[0.1 , 0.4 , 0.2 , 0.3 , 0.7 , 0.4]
        }
    ]
}

const lineOptions = {
    plugins:{
        legend:{
            display:false,
        },
    },

    elements:{
        line:{
            tension:0,
            borderWidth:2,
            borderColor:"rgba(47,97,68,0.2)",
            fill:"start",
            backgroundColor:"rgba(47,97,68,0.1)"
        },
        point:{
            radius:0,
            hitRadius:0,
        },
    },

    scales:{
        xAxis:{
            display:false,
        },
        yAxis:{
            display:false
        }
    }

}



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
            <div className='dashTitle'>
                <StyleTest>
                    <div className='text'>
                        <h2>가동 시간</h2>
                        <p className='title'>204 일 5 시간</p>
                    </div>
                    <div className="chart">
                        <Line data={lineData} options={lineOptions} />
                    </div>
                </StyleTest>
                <StyleTest>
                    <div className='text'>
                        <h2>가용 노드</h2>
                        <p className='title'>4 개</p>
                        <span className='value'>1 ▲</span><span className='size'> 지난달 대비</span>
                    </div>
                    <div className="chart">
                        <Line data={lineData} options={lineOptions} />
                    </div>
                </StyleTest>
                <StyleTest>
                    <div className='text'>
                        <h2>접근 로그</h2>
                        <p className='title'>87</p>
                        <span className='value'>14.3 ▲</span><span className='size'> 지난달 대비</span>
                    </div>
                    <div className="chart">
                        <Line data={lineData} options={lineOptions} />
                    </div>
                </StyleTest>
            </div>
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

        //https://towardsdev.com/chart-js-next-js-beautiful-data-driven-dashboards-how-to-create-them-fast-and-efficiently-a59e313a3153 참고
    );
}

export default Home

const StyleTest = styled.div`
    position: relative;
    display: flex;
    padding: 1.25rem;
    border: 0.5px solid #e5e7eb;
    border-radius: 0.125rem;
    box-shadow: 1px 1px 1px 1px whitesmoke;
    flex-basis: 32.3%;

    .text{
        z-index:2;
        position: absolute;
        width: 100%;
        h2{
            font-size: 1.125rem;
            color: gray;
        }
        .value{
            color: red;
            font-size: 0.875rem;
            line-height: 1.5715;
            font-weight: 600;
        }
        .title{
            color: black;
            font-size: 1.88rem;
            line-height: 1.33;
            font-weight: 700;
        }
        .size{
            font-size: 0.75rem;
            line-height: 1.5;
            color: lightgray;
            font-weight: 500;
        }
    }
    .chart{
        position: relative;
        width: 70%;
        /* position: absolute; */
        margin-left: auto;
        /* top:5px; */
        /* position: relative; */
        /* position: absolute; */


    }
`


const StyleArtcle = styled.article`
    position: relative;
    width: 100%;
    /* display: flex; */
    /* flex-wrap: nowrap; */
    /* align-items: center; */
    /* justify-content: space-between; */
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;
    padding:0px;
    button{
        background-color:red
    }
    .dashTitle{
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }


`