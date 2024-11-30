import { Button, Container, LoginForm, Title } from './styles';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { newLoginForm, NewLoginFormType } from './schema';
import { RhfInput } from '@components/RhfInput';
import { Text } from 'react-native';
import { useAuth } from '@providers/AuthProvider';

export const Login: React.FC = () => {
  const {
    control,
    formState: { errors },
    getValues,
    trigger,
  } = useForm<NewLoginFormType>({
    resolver: zodResolver(newLoginForm),
    mode: 'onChange',
  });

  const { login } = useAuth();

  const sendLogin = async () => {
    const shouldGo = await trigger();
    if (!shouldGo) return;
    login(getValues('userName'));
  };

  return (
    <Container>
      <LoginForm>
        <Title>Olá, seja bem-vindo!</Title>
        <RhfInput
          control={control}
          name='userName'
          placeholder='Digite o seu nome:'
          errorMessage={errors.userName?.message}
        />
        <Button onPress={sendLogin}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontWeight: 700,
              fontSize: 24,
            }}
          >
            Entrar
          </Text>
        </Button>
      </LoginForm>
    </Container>
  );
};
