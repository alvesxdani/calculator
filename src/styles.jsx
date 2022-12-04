import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  background: #fff;
  width: 500px;
  min-height: 350px;
  border-radius: 7px;
  border: 1px solid #eee;
  padding: 2rem;
`

export const NumKeyboardContent = styled.div`
width: 100%;
min-height: 350px;
display: flex;
justify-content: center;
margin-top: 2rem;
`

export const Row = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  width: 85%;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  margin-left: 0.9rem;

  Button {
    width: 100%;
    height: calc(100% - 85%);
  }
`