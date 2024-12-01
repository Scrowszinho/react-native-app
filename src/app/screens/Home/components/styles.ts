import styled from 'styled-components/native';

export const Card = styled.View`
  min-width: 350px;
  height: 180px;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  padding: 12px;
  background-color: #ffffff;

  /* Sombra */
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 2;

  /* Espaçamento interno */
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TitleName = styled.Text`
  font-family: Inter;
  font-size: 16px;
  color: black;
  font-weight: bold;
  text-align: center;
`;

export const TextCard = styled.Text`
  font-family: Inter;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
`;

export const CardFooter = styled.View`
  display: flex;
  flex-direction: row;
  padding-top: 12px;
  align-items: center;
  justify-content: space-between;
`;

export const ModalCentered = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo transparente */
`;

export const ModalContainer = styled.View`
  width: 90%;
  max-width: 320px;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const ModalTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 8px;
`;

export const ModalDescription = styled.Text`
  font-size: 16px;
  color: #444;
  text-align: center;
  margin-bottom: 20px;
`;

export const ModalButton = styled.TouchableOpacity`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border-color: #545458;
  border-width: 0.33px;
  border-left-width: 0px;
  border-right-width: 0px;
  align-items: center;
  margin-bottom: 8px;
`;

export const ModalButtonText = styled.Text`
  color: #007aff;
  font-size: 16px;
  font-weight: bold;
`;

export const ModalButtonCancel = styled.TouchableOpacity`
  width: 100%;
  padding: 12px;
  background-color: transparent;
  align-items: center;
`;

export const ModalButtonCancelText = styled.Text`
  color: #007aff;
  font-size: 16px;
  font-weight: bold;
`;
