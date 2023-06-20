import React from 'react'
import styled from 'styled-components'
import phone from "../Assets/phone.jpg"
import Button from '../Components/reUse/Button'

const Third = () => {
  return (
    <div>
       <Container>
        <Wrapper>
            <Left src={phone}/> 
            <Right>
            <Wrap>Designer Search</Wrap>
                <Big>Hire faster $ smarter with Designer Search</Big>
                <Small>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure mollitia quos
                     asperiores incidunt! Enim mollitia laborum saepe commodi velit voluptatibus
                      eveniet aliquam accusamus rem necessitatibus delectus,
                       cumque dignissimos beatae dolorum fugit sint maxime
                      animi modi fugiat illum! Quas, minima dolor?</Small>
                      <Button title ="start your search" width ="150px"/>
            </Right>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Third

const Small =styled.div`
margin-top: 20px;
font-size: 20px;
font-weight: 500;
margin-bottom: 30px;
`

const Big =styled.div`
margin-top: 20px;
font-size: 55px;
font-weight: 700;
`

const Right =styled.div`
width: 50%;
margin-left: 50px;
display: flex;
flex-direction: column;
`

const Left =styled.img`
width: 50%;
height: 500px;
display: flex;
justify-content: center;
object-fit: cover;
`

const Wrap =styled.div`
width: 150px;
height: 40px;
background-color: #FCD0BA;
display: flex;
align-items: center;
justify-content: center;
border-radius: 20px;
color: #5D8BAB;
`

const Wrapper =styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;

`

const Container =styled.div`
width: 100%;
height: 600px;
display: flex;
justify-content: center;
align-items: center;
`
