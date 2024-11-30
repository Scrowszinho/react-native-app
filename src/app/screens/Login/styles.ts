import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: 32px;
  text-align: center;
  font-weight: 400;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginForm = styled.View`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  border-radius: 4px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #ec6724;
  margin-top: 0px;
  padding-top: 0px;
  height: 60px;
  font-wheigt: 700;
`;
