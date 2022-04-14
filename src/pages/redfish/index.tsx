import { FC } from 'react'


const fetchApi =  () =>{
  fetch('/api')
    .then((res) =>{
      console.log('res :',res)
    })
    .catch((error) => {
      console.log('error :',error)
    })
}


const Home : FC = () =>{
  return(
    <div>
        <div>redfish</div>
        <button type="button" onClick={fetchApi}>테스트</button>
        
    </div>
  )
} 

export default Home