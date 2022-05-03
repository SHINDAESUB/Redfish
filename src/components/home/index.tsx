import * as api from 'api'
import { FC ,useState } from 'react'
import styled from 'styled-components';
import { Chart, registerables } from 'chart.js'
import { Bar ,Line } from 'react-chartjs-2';
import { useSessionState } from '../../contexts/sessionContext'

const barData = {
  labels: ['17:35:13', '17:35:14' ,'17:35:15', '17:35:16' ,'17:35:17' ,'17:35:18' ,'17:35:19'],
  datasets: [
    {
      label: 'SNOW',
      borderRadius:20,
      data: [0.1 , 0.4, 0.2 ,0.3 ,0.7 ,0.4 ,0.6],
      backgroundColor: "rgba(32, 214 , 155 ,1)",
      borderColor: 'rgb(32, 214 , 155)',
    
    },
    {
        label: 'Thunder',
        borderRadius:20,
        data: [0.7 , 0.3, 0.1 ,0.2 ,0.3 ,0.2 ,0.8],
        backgroundColor: "rgba(1, 98 , 255 ,1)",
        borderColor: 'rgb(1, 98 , 255)',
    },
  ],
};

const barOptions = {
    plugins:{
        // legend:{
        //     position:"top",
        //     align: "start",
        //     labels: {
        //         boxWidth:7,
        //         usePointStyle: true,
        //         ponintStyle: "circle"
        //     },
        //     title:{
        //         text: "노드",
        //         display: true,
        //         color:"red",
        //         font:{
        //             size:18,
        //         }
        //     }
        // },
    },

    scales:{
        xAxis:{
            title:{
                display: true,
                text: "Time"
            },

            label: 'Thunder',
            display: true,
        },
        yAxis:{
            title:{
                display: true,
                text: "Load / Process (sec)"
            },
            display: true,

        }
    },


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
    },

    responsive:false

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
            <DetailRow>
                <div className="col common">
                    <div className='content'>
                        <div className='title'>가동 시간</div>
                        <div className='value'>204 일 5 시간</div>
                    </div>
                    <div className="chart">
                        <Line data={lineData} options={lineOptions} />
                    </div>
                </div>
                <div className="col common">
                    <div className='content'>
                        <div className='title'>가용 노드</div>
                        <div className='value'>4 개</div>
                        <div className='detail'>1 ▲<span className='size'> 지난달 대비</span></div>
                    </div>
                    <div className="chart">
                        <Line data={lineData} options={lineOptions} />
                    </div>
                </div>
                <div className="col common">
                    <div className='content'>
                        <div className='title'>접근 로그</div>
                        <div className='value'>87</div>
                        <div className='detail'>14.3 ▲<span className='size'> 지난달 대비</span></div>
                    </div>
                    <div className="chart">
                        <Line data={lineData} options={lineOptions} />
                    </div>
                </div>
            </DetailRow>
            <DetailRow1>
                <div className="col1 common">
                    <div className='title'>부하 평균</div>
                    <Line data={barData} options={barOptions} />
                
                </div> 
                <div className="col2 common">
                    <div className='title'>CPU 사용량</div>
                </div> 

            </DetailRow1>


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

const DetailRow = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 100%;

    .col{
        display: flex;
        
        @media (min-width: 480px){
            flex:1 1 100% ;
            /* max-width: 100%; */
        }

        @media (min-width: 1200px){
            flex:0 0 32.3% ;
            /* flex-basis: 32.3%; */
            /* max-width: 32.3%; */
        }

        .content{
            position: absolute;

        }
        .chart{
            margin-left: auto;
        }
    }
`

const DetailRow1 = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    padding: 20px 0px;

    .col1{
        @media (min-width: 480px){
            flex:1 1 100% ;
        }

        @media (min-width: 1200px){
            flex:0 0 66.2% ;
        }
    }

    .col2{
        @media (min-width: 480px){
            flex:1 1 100% ;
            max-width: 100%;
        }

        @media (min-width: 1200px){
            flex:0 0 32.3% ;
        }
    }
`

const StyleArtcle = styled.article`
    position: relative;
    width: 100%;
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;
    padding:0px;
    button{
        background-color:red
    }

    .common{
        width: 100%; //차트의 반응형 사이즈를 위해
        padding: 1.25rem;
        border: 0.5px solid #e5e7eb;
        border-radius: 0.125rem;
        box-shadow: 1px 1px 1px 1px whitesmoke;
    }   

    .title{
                font-size: 1.125rem;
                color: gray;
            }
            .detail{
                color: red;
                font-size: 0.875rem;
                line-height: 1.5715;
                font-weight: 600;
                .size{
                    font-size: 0.75rem;
                    line-height: 1.5;
                    color: lightgray;
                    font-weight: 500;
                }
            }
            .value{
                color: black;
                font-size: 1.88rem;
                line-height: 1.33;
                font-weight: 700;
            }

`