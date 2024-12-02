import styled from 'styled-components/native';

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: flex-end;
`;

export const DrawerContainer = styled.View`
  width: 100%;
  background-color: #7a7a7a;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 16px;
  padding-bottom: 24px;
  align-items: center;
`;

export const DrawerHeader = styled.View`
  width: 100%;
  margin-bottom: 16px;
`;

export const DrawerIndicator = styled.View`
  width: 40px;
  height: 4px;
  border-radius: 2px;
  margin-bottom: 8px;
`;

export const DrawerTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

export const DrawerContent = styled.View`
  width: 100%;
  align-items: flex-start; /* Posiciona o conteúdo */
  justify-content: flex-start;
`;

export const CloseText = styled.Text`
  color: #007aff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
