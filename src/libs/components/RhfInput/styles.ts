import styled from 'styled-components/native';

export const FormControl = styled.View`
  directon: column;
  width: 100%;
  gap: ${(props) => props.theme.spacing.small};
`;

export const FormText = styled.Text`
  fontsize: ${(props) => props.theme.fontSizes.medium};
`;

export const Input = styled.TextInput`
  paddingtop: ${(props) => props.theme.spacing.small};
  border: 2px solid;
  border-radius: 4px;
  width: 100%;
  padding-left: 8px;
  height: 60px;
`;
