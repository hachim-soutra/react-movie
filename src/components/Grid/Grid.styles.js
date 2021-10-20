import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    padding: 20px;
    margin: 0 auto;
    h1 {
        font-size: var(--fontSuperBig);
        color: var(--medGray)
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;
    color: black
`;


