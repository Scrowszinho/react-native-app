import React from 'react';
import { Modal, Text, TouchableOpacity } from 'react-native';
import {
  ModalCentered,
  ModalContainer,
  ModalTitle,
  ModalDescription,
  ModalButton,
  ModalButtonText,
  ModalButtonCancel,
  ModalButtonCancelText,
} from './styles';

type ModalConfirmProps = {
  isOpen: boolean;
  onClose: (confirm: boolean) => void;
  title: string;
  description: string;
};

export const ModalConfirm: React.FC<ModalConfirmProps> = ({
  description,
  isOpen,
  onClose,
  title,
}) => {
  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={isOpen}
      onRequestClose={() => onClose(false)}
    >
      <ModalCentered>
        <ModalContainer>
          <ModalTitle>{title}</ModalTitle>
          <ModalDescription>{description}</ModalDescription>
          <ModalButton onPress={() => onClose(true)}>
            <ModalButtonText>Excluir cliente</ModalButtonText>
          </ModalButton>
          <ModalButtonCancel onPress={() => onClose(false)}>
            <ModalButtonCancelText>Cancelar</ModalButtonCancelText>
          </ModalButtonCancel>
        </ModalContainer>
      </ModalCentered>
    </Modal>
  );
};
