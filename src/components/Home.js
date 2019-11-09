import React from 'react'
import styled, { keyframes }from 'styled-components'

const Home = () => {
  return (
    <Container>
      <CoverContainer img={`${process.env.PUBLIC_URL}/cover.png`}>
        <H1>Mangosafe</H1>
        <Subtitle1>FRESH HOMEGROWN IT SOLUTIONS</Subtitle1>
        <ScrollDown />
      </CoverContainer>
      <ContentContainer>
        <Content>
          <AboutUs>
            <H21>About Us</H21>
            <Body11>
              Mangosafe offers in-house developed and third-party software. We want to offer these products as a Software-as-a-Service (SaaS) solution to our clients, either via sale or lease.
            </Body11>
            <Body12>
              Some of the software we offer relates to automated trading strategies, online security monitoring solutions, order matching engine software, solutions for secure storing of cryptocurrency wallets, productivity tools for business software development and other.
            </Body12>
            <Body12>
               Additionally, Mangosafe is an Estonia-licensed virtual currency wallet service provider (License number FRK001070) which additionally broadens our services and abilities.
            </Body12>
            <H22>Contact Us</H22>
            <TwoColumnContainer>
              <Column>
                <InputRow1>
                  <InputLabel>Name</InputLabel>
                  <Input />
                </InputRow1>
                <InputRow2>
                  <InputLabel>Email</InputLabel>
                  <Input />
                </InputRow2>
                <InputRow2>
                  <InputLabel>Message</InputLabel>
                  <TextArea />
                </InputRow2>
              </Column>
              <Column>
                <Body11>
                  marin@tornomy.com
                </Body11>
                <Body12>
                  Tornomy Wallet Co. OÜ
                </Body12>
                <Body12>
                  Registry code: 14772723
                </Body12>
                <Body12>
                  Tartu County Court Registration Department
                </Body12>
                <Body12>
                  Estonia
                </Body12>
              </Column>
            </TwoColumnContainer>
            <TwoColumnContainer>
              <Column>
                <InputRow3>
                  <SubmitButton>Send</SubmitButton>
                </InputRow3>
              </Column>
            </TwoColumnContainer>

          </AboutUs>
        </Content>
      </ContentContainer>
      <Footer>Copyrights © 2019. All Rights Reserved by Tornomy Wallet Co. OÜ</Footer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const CoverContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: right;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const H1 = styled.p`
  font-size: 9rem;
  font-weight: 100;
  letter-spacing: -0.15rem;
  line-height: 1.6;
  font-family: 'Montserrat';
  user-select: none;
  color: #404040;
`

const Subtitle1 = styled.p`
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.0125rem;
  line-height: 1.6;
  font-family: 'Montserrat';
  color: #515151;
  user-select: none;
`

const sdb04 = keyframes`
  0% {
    transform: rotate(-45deg) translate(0, 0);
  }
  20% {
    transform: rotate(-45deg) translate(-20px, 20px);
  }
  40% {
    transform: rotate(-45deg) translate(0, 0);
  }
`

const ScrollDown = styled.span`
  position: absolute;
  bottom: 50px;
  left: 50%;
  width: 35px;
  height: 35px;
  margin-left: -12px;
  border-left: 2px solid #404040;
  border-bottom: 2px solid #404040;
  transform: rotate(-45deg);
  animation: ${sdb04} 2s infinite;
  box-sizing: border-box;
`

const ContentContainer = styled.div`
  background-color: #404040;
  width: 100%;
  height: min-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  width: 100rem;
`

const AboutUs = styled.div`
  width: 100%;
  height: min-content;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 3rem;
`

  // box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20);

const H2 = styled.p`
  font-size: 6rem;
  font-weight: 100;
  letter-spacing: -0.5rem;
  line-height: 1.6;
  font-family: 'Montserrat';
  user-select: none;
  color: #E98246;
`

const H21 = styled(H2)`

`

const H22 = styled(H2)`
  margin-top: 3rem;
`

const Body1 = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 0.02rem;
  line-height: 1.4;
  font-family: 'Roboto';
  text-align: justify;
  color: #e0b196;
`

const Body11 = styled(Body1)`
  margin-top: 3rem;
`

const Body12 = styled(Body1)`
  margin-top: 1rem;
`

const TwoColumnContainer = styled.div`
  display: flex;
  width: 100%;
  height: min-content;
`

const Column = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const InputRow = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const InputRow1 = styled(InputRow)`
  margin-top: 3rem;
`

const InputRow2 = styled(InputRow)`
  margin-top: 2rem;
`

const InputRow3 = styled(InputRow)`
  margin-top: 2rem;
  justify-content: end;
`

const InputLabel = styled.p`
  color: #E98246;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.0125rem;
  line-height: 1.6;
  font-family: Roboto;
  width: 40%;
  padding-left: 1rem;
`

const Input = styled.input`
  outline: none;
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: .009375em;
  border-radius: 4px;
  border: none;
  width: 60%;
  height: 4rem;
  background-color: #E98246;
  border: 1px solid #2f2f2f;
  color: #2f2f2f;
  padding-left: 1rem;
  paddin-top: 0.5rem;
  &:hover {
    border: 1px solid #e0b196;
  }
  &:focus {
    background-color: #2f2f2f;
    border: 1px solid #E98246;
    color: #E98246;
  }
  font-family: Roboto;
  transition: all 0.3s ease-in-out;
`

const TextArea = styled.textarea`
  padding: 1rem;
  outline: none;
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: .009375em;
  border-radius: 4px;
  border: none;
  width: 60%;
  height: 12rem;
  background-color: #E98246;
  border: 1px solid #2f2f2f;
  color: #2f2f2f;
  padding-left: 1rem;
  paddin-top: 0.5rem;
  &:hover {
    border: 1px solid #e0b196;
  }
  &:focus {
    background-color: #2f2f2f;
    border: 1px solid #E98246;
    color: #E98246;
  }
  font-family: Roboto;
  transition: all 0.3s ease-in-out;
`

const SubmitButton = styled.button`
  outline: none;
  border: none;
  width: 10rem;
  height: 5rem;
  border-radius: 4px;
  background-color: #E98246;
  border: 1px solid #2f2f2f;
  color: #2f2f2f;
  &:hover {
    background-color: #2f2f2f;
    border: 1px solid #E98246;
    color: #E98246;
    cursor: pointer;
  }
  &:active {
    transform: translateY(2px);
  }
  font-family: Roboto;
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: .009375em;
  transition: background-color 0.3s ease-in-out;
  transition: border 0.3s ease-in-out;
  transition: color 0.3s ease-in-out;
`

const Footer = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #1D1E1F;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 0.025rem;
  line-height: 1.4;
  color: #FAFAFA;
  font-family: Roboto;
`

export default Home
