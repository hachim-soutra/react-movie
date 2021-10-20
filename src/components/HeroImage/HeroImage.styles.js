import styled from "styled-components";

export const Wrapper = styled.div`
    background: linear-gradient(
        to bottom, 
        rgba(0,0,0,0) 41%,
        rgba(0,0,0,0.65) 100%
    ),
    url(${({image}) => image }), var(--darkGrey);
    background-size: 100%, cover;
    background-position: center;
    height: 600px;
    position: relative;
    animation: HeroAnimation 1s;

    @keyframes HeroAnimation {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }

    }
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    padding: 20px;
    margin: 0 auto;
`;

export const Text = styled.div`
    max-width: 700px;
    color: white;
    z-index: 99;
    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    h1 {
        font-size: var(--fontSuperBig);
    }
`;
