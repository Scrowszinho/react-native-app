import { Modal } from 'react-native';
import {
  DrawerContainer,
  DrawerContent,
  DrawerHeader,
  DrawerIndicator,
  DrawerTitle,
  Overlay,
} from './styles';

type BottomDrawerProps = {
  isOpen: boolean;
  onClose: (confirm: boolean) => void;
  children?: React.ReactNode;
  title: string;
};

export const BottomDrawer: React.FC<BottomDrawerProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={isOpen}
      onRequestClose={() => onClose(false)}
    >
      <Overlay>
        <DrawerContainer>
          <DrawerHeader>
            <DrawerIndicator />
            <DrawerTitle>{title}</DrawerTitle>
          </DrawerHeader>

          <DrawerContent>{children}</DrawerContent>
        </DrawerContainer>
      </Overlay>
    </Modal>
  );
};
