import React from 'react'
import styled from 'styled-components'
import {SiAdobe} from "react-icons/si"

const First = () => {
  return (
    <div>
      <Container>
        <Wrapper>
            <Text>
                we've helped some of the world's best
               design-forward companies hire expert creative.
            </Text>
         <Box>
         <Second>
              <Adobe>
              <SiAdobe size={30} />
                <Nam>Adobe</Nam>
              </Adobe>
              <Adobe>
              <SiAdobe size={30} />
              <Nam>Adobe</Nam>
              </Adobe>
              <Adobe>
              <SiAdobe size={30} />
                <Nam>Adobe</Nam>
              </Adobe>
              <Adobe>
              <SiAdobe size={30} />
                <Nam>Adobe</Nam>
              </Adobe>
            </Second>
            <Third>
              <Adobe>
            <SiAdobe size={30} />
                <Nam>Adobe</Nam>
              </Adobe>
              <Adobe>
              <SiAdobe size={30} />
              <Nam>Adobe</Nam>
              </Adobe>
              <Adobe>
              <SiAdobe size={30} />
                <Nam>Adobe</Nam>
              </Adobe>
              <Adobe>
              <SiAdobe size={30} />
                <Nam>Adobe</Nam>
                </Adobe>
            </Third>
            <Fourth>
            <Adobe>
            <SiAdobe size={30} />
                <Nam>Adobe</Nam>
              </Adobe>
              <Adobe>
              <SiAdobe size={30} />
              <Nam>Adobe</Nam>
              </Adobe>
              <Adobe>
              <SiAdobe size={30} />
                <Nam>Adobe</Nam>
              </Adobe>
              <Adobe>
              <SiAdobe size={30} />
                <Nam>Adobe</Nam>
                </Adobe>
            </Fourth>
         </Box>
        </Wrapper>
      </Container>
    </div>
  )
}

export default First

const Box =styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Fourth =styled.div`
height: 70px;
width: 70%;
display: flex;
justify-content: center;
`

const Third =styled.div`
height: 70px;
width: 70%;
display: flex;
justify-content: center;
margin-bottom: 20px;
`

const Second =styled.div`
height: 70px;
width: 70%;
margin-bottom: 20px;
display: flex;
justify-content: center;

`

const Nam=styled.div`
margin-right: 20px;
font-size: 30px;
font-weight: 600;
`

const Adobe =styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-left: 70px;
`

const Text =styled.div`
font-size: 20px;
font-weight: 500;
margin-bottom: 20px;
`

const Wrapper =styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 90%;
height:100% ;
`

const Container =styled.div`
width: 100%;
height: 400px;
display: flex;
justify-content: center;
align-items: center;
`