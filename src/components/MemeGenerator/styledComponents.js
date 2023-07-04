// Style your components here
import styled from 'styled-components'

export const OuterDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: cyan;
  padding: 30px;
`
export const ChildDiv = styled.div`
  height: auto;
  width: 48%;
  background-color: red;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Form = styled.form`
  display: flex;
  width: 50%;
  flex-direction: column;
`
export const SpecialDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${props => props.url});
  background-size: cover;
  color: white;
  font-size: ${props => props.fontSize};
`
export const SpecialPara = styled.p`
  font-size: ${props => props.fontSize};
`
