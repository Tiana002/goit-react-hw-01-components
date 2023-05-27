import styled from "styled-components";

export const WrapProfile  = styled.div`
padding: 10px;
`;
export const Photo = styled.img`
    display: flex;
    width: 250px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    margin-bottom: 20px;
    border: 1px solid #d0a8a8;
    background-color: #f0efcf;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    `;

    export const UserName = styled.p`
        font-size: 24px;
        font-weight: 700;
        display: flex;
        justify-content: center;
        color: rgba(7, 28, 30, 0.76);
    `;

export const UserData = styled.p`
font-size: 20px;
font-weight: 700;
display: flex;
justify-content: center;
color: rgba(7, 28, 30, 0.56);
`;

export const ListItems = styled.ul`
    display: flex;
    justify-content: center;
    gap: 70px;
    margin-top: 40px;
    padding: 0;
    `;

export const Item = styled.li`
display: flex;
flex-direction: column;
font-size: 16px;
text-decoration: none;
`;
export const Stats = styled.span`
    font-size: 20px;
    font-weight: 700;
    margin-top: 4px;
    display: flex;
    justify-content: center;
    color: rgba(7, 28, 30, 0.86);
`;