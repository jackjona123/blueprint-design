import styled from "styled-components";

const Container = styled.div`
    left: 50%;
    position: absolute;
    top: 96%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;

    @keyframes scrolldown {
    0%{
        transform: translateY(20%) rotate(45deg);
        opacity: 0.7;
   }
    50%{
        transform: translateY(0%) rotate(45deg);
        opacity: 0.2;
   }
    100%{
        transform: translateY(20%) rotate(45deg);
        opacity: 0.7;
   }
}
`;

const Div1 = styled.div`
    width: 2em; 
    height: 2em; 
    background-color: transparent; 
    z-index: 80; 
    bottom: 25px; 
    position: absolute; 
    border-width: 0 0.25em 0.25em 0; 
    border-style: solid; 
    border-color: black; 
    animation: scrolldown 1.2s ease-in-out infinite 0.15s;
`;

const Div2 = styled.div`
    width: 2em; 
    height: 2em; 
    background-color: transparent; 
    z-index: 80; 
    bottom: 40px; 
    position: absolute; 
    border-width: 0 0.25em 0.25em 0; 
    border-style: solid; 
    border-color: black; 
    animation: scrolldown 1.2s ease-in-out infinite;
`;

const Scroll = () => {
    return (
        <Container>
            <Div1>
            </Div1>
            <Div2>
            </Div2>
        </Container>
    )
}

export default Scroll;
