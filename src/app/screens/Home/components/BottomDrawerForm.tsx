import { BottomDrawer } from '@components/BottomDrawer';
import { TUser } from '@types/users';
import { DrawerButton, DrawerButtonText, FormContainer } from './styles';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { newUserForm, NewUserFormType } from '../schema';
import { RhfInput } from '@components/RhfInput';
import { RhfMonetaryInput } from '@components/RhfMonetaryInput';
import { usePatchUser, usePostNewUser } from '@api/users';
import useSnackbar from '@hooks/useSnackbar';
import { Loading } from '@components/Loading';
import { useEffect } from 'react';

type BottomDrawerFormProps = {
  isOpen: boolean;
  onClose: (confirm: boolean) => void;
  data?: TUser;
};

export const BottomDrawerForm: React.FC<BottomDrawerFormProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  const {
    control,
    formState: { errors, isDirty },
    getValues,
    trigger,
    reset,
  } = useForm<NewUserFormType>({
    resolver: zodResolver(newUserForm),
    mode: 'onChange',
    defaultValues: {
      companyValuation: '',
      name: '',
      salary: '',
    },
  });

  const patchUser = usePatchUser();
  const postUser = usePostNewUser();
  const Snackbar = useSnackbar();

  function cleanMonetary(value: string): number {
    return +value.replace('R$ ', '').replaceAll('.', '').replace(',', '.');
  }

  const sendToSave = async () => {
    const shouldSave = await trigger();
    if (!shouldSave) return;
    if (data) {
      sendToUpdate();
    } else {
      sendToCreate();
    }
  };

  const sendToUpdate = () => {
    const formData = getValues();
    patchUser.mutate(
      {
        id: data?.id ?? 0,
        data: {
          companyValuation: cleanMonetary(formData.companyValuation),
          name: formData.name,
          salary: cleanMonetary(formData.salary),
        },
      },
      {
        onError: (err) => Snackbar.showSnackbar(err.message, 30000, 'error'),
        onSuccess: () => {
          Snackbar.showSnackbar(
            'Usuário deletado com sucesso',
            30000,
            'success',
          );
          onClose(true);
        },
      },
    );
  };

  const sendToCreate = () => {
    const formData = getValues();
    postUser.mutate(
      {
        companyValuation: cleanMonetary(formData.companyValuation),
        name: formData.name,
        salary: cleanMonetary(formData.salary),
      },
      {
        onError: (err) => Snackbar.showSnackbar(err.message, 30000, 'error'),
        onSuccess: () => {
          Snackbar.showSnackbar(
            'Usuário deletado com sucesso',
            30000,
            'success',
          );
          onClose(true);
        },
      },
    );
  };

  useEffect(() => {
    if (data) {
      reset({
        companyValuation: data.companyValuation.toString(),
        name: data.name,
        salary: data.salary.toString(),
      });
    }
  }, [data]);

  return (
    <BottomDrawer
      isOpen={isOpen}
      onClose={(confirm) => onClose(confirm)}
      title={data ? 'Editar cliente' : 'Criar cliente'}
      children={
        <FormContainer>
          {patchUser.isPending || postUser.isPending ? (
            <Loading />
          ) : (
            <>
              <RhfInput
                control={control}
                name='name'
                label='Nome'
                variant='white'
              />
              <RhfMonetaryInput
                control={control}
                name='salary'
                label='Salário'
                variant='white'
              />
              <RhfMonetaryInput
                control={control}
                name='companyValuation'
                label='Valor da empresa'
                variant='white'
              />
              <DrawerButton onPress={sendToSave}>
                <DrawerButtonText>
                  {data ? 'Editar' : 'Criar'} cliente
                </DrawerButtonText>
              </DrawerButton>
            </>
          )}
        </FormContainer>
      }
    />
  );
};
