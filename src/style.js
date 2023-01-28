import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ToDoList = styled.div`
    background-color: #fff;
    border-radius: 15px;
    padding: 30px 20px;
    ul{
        padding: 0;
    }
`
export const Input = styled.input`
    width: 300px;
    height: 41px;
    padding-left: 20px;
    margin-right: 20px;
    font-weight: 400;   
    font-size: 15px;
    line-height: 18px;
    border-radius: 15px;
    border: solid 1px;
    `
export const Button = styled.button`
    width: 130px;
    height: 40px;
    background: #8052EC;
    border-radius: 15px;
    color: #FFFFFF;
    font-weight: 500;
    font-size: 17px;
    line-height: 2px;
    border: none;
`
export const ListItem = styled.div`
    width: 500px;
    height: 60px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${ props => props.isFinished ? '#E8FF8B' : '#E4E4E4'};
    margin-top: 30px;
    margin-bottom: 20px;
    font-weight: 500;   
    font-size: 18px;
    line-height: 18px;
    border-radius: 15px;
`
export const IconBox = styled.div`

    &:hover{
        transform: scale(1.3);
        transition: 0.3s;
        cursor: pointer;
    }
`
export const Title = styled.h3`
    font-size: 25px;
    font-weight: 500;
    color: #c4c4c4 ;
    text-align: center;
    padding: 30px;
`