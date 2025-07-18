import styled from "styled-components";

export const StyledNav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.black};
    padding: 23px 32px;
    margin: 0 auto;
`;

export const NavWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 1368px ;
    width: 100%;
    gap: 100px;

     @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        flex-direction: column;
        gap: 24px;
        }

`;




