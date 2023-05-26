import styled from 'styled-components'

export const Section = styled.div `
    
    min-height: 400px;
    width: 100vw;
    display:flex;
    justify-content: space-around;
    position: relative;
    -webkit-clip-path: polygon(0 0, 100% 0%, 100% 23%, 0 83%);
    clip-path: polygon(0 0, 100% 0%, 100% 70%, 0 85%);
    border: 1px solid red;
    border-bottom: 1px solid red;
    box-sizing: border-box;
    top: 0px;
    left: 0px;


`
export const TextSection = styled.div `
    position:absolute;
    display:flex;
    flex-flow: row wrap;
    text-transform: uppercase;
    color: #FFFFFF;
    justify-content: flex-start;
    align-items: center;
    top: 90px;
    left: 150px;
    width: 750px;
    height: 250px;
    line-height: 90%

`

