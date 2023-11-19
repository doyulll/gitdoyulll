import styled from "styled-components";

export const Contain = styled.div`
  width: 170px;
  margin: 0 7px;
  background-color: #373b69;
  border-radius: 5px;
  margin-bottom: 15px;
  position: relative;
`;

export const Imgg = styled.img`
  width: 100%;
`;
export const Textt = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 13px;
  color: white;

  & span {
    margin-left: 20px;
  }

  & h4 {
    margin: 0px;
  }
`;

export const Info = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};

  position: absolute;
  top: 0px;
  left: 0px;
  color: #c7c7c7;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 13px;
  height: 100%;
  border-radius: 0 0 5px 5px;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  text-overflow: ellipsis;

  & h4 {
    margin: 0px;
    margin-top: 15px;
    margin-bottom: 10px;
  }

  & span {
    text-overflow: ellipsis;
  }
`;