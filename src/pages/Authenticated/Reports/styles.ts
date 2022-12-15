import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Charts = styled.div`
  display: flex;
  flex-direction: row;

  margin: 0 auto;
`;

export const Left = styled.div`
  background: #fafafa;
  border-radius: 3px;

  border: solid 1px rgba(0, 0, 0, 0.2);

  padding: 30px 50px 30px 50px;

  padding: 60px;
  width: 400px;

  margin-right: 20px;
  line-height: 30px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Right = styled.div`
  background: #fafafa;
  border-radius: 3px;

  border: solid 1px rgba(0, 0, 0, 0.2);

  padding: 30px 50px 30px 50px;

  margin-left: 20px;

  padding: 60px;
  width: 400px;

  line-height: 30px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;
