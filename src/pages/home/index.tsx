import { FC } from 'react'
import Home from 'components/home'
import { useSessionState } from '../../contexts/sessionContext'
import styled from 'styled-components';

const HomePage : FC = () =>{
  const state = useSessionState()

  console.log('{state} :',state)


  return(
    <StyledSection>
      <Home/>
    </StyledSection>
  )
} 

const StyledSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`
export default HomePage