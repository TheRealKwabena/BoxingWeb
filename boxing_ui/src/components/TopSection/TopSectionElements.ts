import styled from 'styled-components'

export const Section = styled.div `
    
    min-height: 500px;
    display:flex;
    justify-content: space-around;
    position: relative;
    -webkit-clip-path: polygon(0 0, 100% 0%, 100% 23%, 0 83%);
  clip-path: polygon(0 0, 100% 0%, 100% 70%, 0 85%);


`
export const TextSection = styled.div `
    position:absolute;
    display:flex;
    flex-flow: row wrap;
    text-transform: uppercase;
    color: #FFFFFF;
    justify-content: flex-start;
    align-items: center;
    top: 100px;
    left: 180px;
    width: 750px;
    height: 250px;
    line-height: 90%

`