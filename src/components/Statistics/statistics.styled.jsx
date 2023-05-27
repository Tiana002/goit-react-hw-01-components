import styled from "styled-components";

export const Title = styled.h2`
    font-size: 28px;
    font-weight: 700;
    display: flex;
    justify-content: center;
`;

export const StatList = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
`;

export const Item = styled.li`
  align-items: center;
    display: flex;
    flex-direction: column;
    padding: 0px 20px;
    margin-top: 20px;
    font-size: 20px;
    font-weight: 700;
    border: 1px solid black;
`;

export const StatsLabel = styled.span`
    color: rgb(7 28 30 / 76%);
    margin-bottom: 4px;
`
export const StatsPercentage = styled.span`
    color: rgb(7 28 30 / 76%);
    display: flex;
    justify-content: center;
    font-size: 24px;
`