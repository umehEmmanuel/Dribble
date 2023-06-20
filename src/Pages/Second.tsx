import React from 'react'
import styled from 'styled-components'
import img from "../Assets/crd-img4.jpeg"
import Button from '../Components/reUse/Button'

const Second = () => {
  return (
    <div>
      <Container>
        <Wrapper>
            <Left>
                <Wrap>Job board</Wrap>
                <Big>The #1 job board for top design talent</Big>
                <Small>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure mollitia quos
                     asperiores incidunt! Enim mollitia laborum saepe commodi velit voluptatibus
                      eveniet aliquam accusamus rem necessitatibus delectus,
                       cumque dignissimos beatae dolorum fugit sint maxime
                      animi modi fugiat illum! Quas, minima dolor?</Small>
                      <Button width="150px" title ="Visit the job board"/>
            </Left>
            <Right src={img}/>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Second

const Small =styled.div`
margin-top: 20px;
font-size: 20px;
font-weight: 500;
margin-bottom: 20px;
`

const Big =styled.div`
margin-top: 20px;
font-size: 50px;
font-weight: 700;
`

const Right =styled.img`
width: 50%;
height: 500px;
display: flex;
justify-content: center;
object-fit: cover;
`

const Left =styled.div`
width: 50%;
display: flex;
flex-direction: column;
`

const Wrap =styled.div`
width: 100px;
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
