import styled from 'styled-components/native';

export const Text = styled.Text`
  font-size: 18px;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  direction: column;
  padding: 16px 16px 0px 16px;
  align-items: center;
  gap: 16px;
  background-color: #f5f5f5;
  justify-content: center;
`;

export const ItemSeparators = styled.View`
  margin: 12px 0px;
`;

export const ContainerTitle = styled.View`
  display: flex;
  direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const RowTitle = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const ListFooter = styled.View`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 12px;
`;

export const FooterAddButton = styled.TouchableOpacity`
  width: 100%;
  border-radius: 4px;
  border-color: #ec6724;
  border-width: 2px;
  border-style: solid;
  color: #ec6724;
  height: 40px;
  margin-bottom: 8px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const FooterAddButtonText = styled.Text`
  color: #ec6724;
  font-weight: bold;
  font-size: 20px;
`;
