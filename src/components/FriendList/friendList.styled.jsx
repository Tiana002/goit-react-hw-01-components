import styled from "styled-components";


export const FriendListItems = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 450px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    list-style: none;
`;

export const Item = styled.li`
    display: flex;
  align-items: center;
  gap: 40px;
  background-color: hsla(0,0%,100%,1);
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Photo = styled.img`
    width: 80px;
    border: 1px solid #d0a8a8;
    background-color: #f0efcf;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`
  export const FriendName = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  color: rgb(7 28 30 / 76%);
  `;

export const Status = styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => (props.statusType ? 'green' : 'red')};
`;