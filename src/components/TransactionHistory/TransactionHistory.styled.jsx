import styled from "styled-components";

export const Table = styled.table`
    
    border: 2px solid silver;
    box-shadow: 1px 2px 1px 0px rgba(112, 80, 80, 0.5);
    width: 600px;
    background-color: #cdd7b3;  
`;

export const TableHead = styled.thead`
   height: 60px;
   font-size: 24px;
   color: #ffffff;
    text-align: center;
    border-bottom: 1px solid #ddd;
    background-color: #9fe7f2;  
`;

export const TableBody = styled.tbody`
    font-size: 16px;
    color: #000000;
    & tr:nth-child(2n + 1) {
        background-color: #c3c2c2;
    }

`;
export const TableData = styled.td`
    vertical-align: middle;
  text-align: center;
  padding-left: 10px;
  border-bottom: 1px solid #111111;
`;