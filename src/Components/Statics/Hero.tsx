import React from 'react'
import styled from 'styled-components'
import Button from '../reUse/Button'

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Title>Dribble Hiring</Title>
          <Big>Hire the world's top designers</Big>
     <Emm>
     <Small>
            whether you prefer to actively seek
            out canidates using Designers Search or 
            let designers come to you through our
            Job Board,Dribble Hiring make it easier
            than ever to source top notch design talent.
          </Small>
     </Emm>
     <Button title="Try for free" width="100px"/>
          <View>No risk. Cancel anytime</View>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Hero

const Emm =styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 73%;
`

const View =styled.div`
font-size: 15px;
color: grey;
margin-top: 30px;
`

const Small =styled.div`
text-align: center;
font-size: 20px;
font-weight: 400;
margin-top: 30px;
margin-bottom: 30px;
`
const Big =styled.div`
font-size: 60px;
font-weight: 800;
margin-top: 10px;
color:#0D0C22;
`

const Title =styled.div`
font-size: 15px;
color: #EC54A7;
`

const Wrapper =styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Container =styled.div`
width: 100%;
height: 400px;
display: flex;
justify-content: center;
align-items: center;
`