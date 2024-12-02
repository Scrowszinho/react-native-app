import { Card, CardFooter, TextCard, TitleName } from './styles';
import { TouchableOpacity } from 'react-native';
import { AntDesign, Octicons } from '@expo/vector-icons';
import { TUser } from '@types/users';
import { useState } from 'react';
import { ModalConfirm } from './ModalConfirm';
import { useDeleteNewUser } from '@api/users';
import useSnackbar from '@hooks/useSnackbar';
import { BottomDrawerForm } from './BottomDrawerForm';

type HomeCardProps = {
  data: TUser;
  refetch: () => void;
};

export const HomeCard: React.FC<HomeCardProps> = ({ data, refetch }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const { mutate } = useDeleteNewUser();
  const Snackbar = useSnackbar();
  const sendToDelete = () => {
    mutate(data.id, {
      onError: (err) => Snackbar.showSnackbar(err.message, 30000, 'error'),
      onSuccess: () => {
        Snackbar.showSnackbar('Usuário deletado com sucesso', 30000, 'success');
        refetch();
        setOpenModal(false);
      },
    });
  };
  return (
    <Card>
      <TitleName>{data.name}</TitleName>
      <TextCard>Salário: R${data.salary.toLocaleString()}</TextCard>
      <TextCard>Empresa: R${data.companyValuation.toLocaleString()}</TextCard>
      <CardFooter>
        <TouchableOpacity>
          <AntDesign name='plus' size={24} color='black' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setOpenDrawer(true)}>
          <Octicons name='pencil' size={24} color='black' />
        </TouchableOpacity>
        <TouchableOpacity>
          <Octicons
            name='trash'
            size={24}
            color='red'
            onPress={() => setOpenModal(true)}
          />
        </TouchableOpacity>
      </CardFooter>
      <ModalConfirm
        description={`Tem certeza que deseja excluir o cliente ${data.name}?`}
        title='Excluir cliente:'
        isOpen={openModal}
        onClose={(confirm) => {
          if (confirm) sendToDelete();
          setOpenModal(false);
        }}
      />
      <BottomDrawerForm
        isOpen={openDrawer}
        data={data}
        onClose={(confirm) => setOpenDrawer(false)}
      />
    </Card>
  );
};
