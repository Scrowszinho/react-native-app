import { useGetUsers } from '@api/users';
import { HomeCard } from './components/HomeCard';
import {
  Container,
  ContainerTitle,
  FooterAddButton,
  FooterAddButtonText,
  ItemSeparators,
  ListFooter,
  RowTitle,
  Text,
} from './styles';
import { FlatList } from 'react-native-gesture-handler';
import { RhfSelect } from '@components/RhfSelect';
import { useForm } from 'react-hook-form';
import { NewOptionFormType } from './schema';
import { useEffect, useState } from 'react';
import { Pagination } from '@components/Pagination';
import { View } from 'react-native';
import { BottomDrawerForm } from './components/BottomDrawerForm';
import { Loading } from '@components/Loading';

export const Home: React.FC = () => {
  const { control, watch, setValue } = useForm<NewOptionFormType>({
    defaultValues: {
      option: 2,
    },
  });
  const [page, setPage] = useState(1);
  const [openDrawer, setOpenDrawer] = useState(false);
  const limit = watch('option');

  const { data, isLoading, refetch } = useGetUsers({
    limit: limit ?? 2,
    page,
  });

  useEffect(() => {
    if (limit) {
      setPage(1);
    }
  }, [limit]);

  return (
    <Container>
      <ContainerTitle>
        <RowTitle>
          <Text style={{ fontWeight: 700 }}>
            {(data?.totalPages ?? 0) * limit}
          </Text>
          <Text>clientes encontrados:</Text>
        </RowTitle>
        <RowTitle>
          <Text>Clientes por página:</Text>
          <View style={{ width: 100 }}>
            <RhfSelect
              onValueChange={(value) => setValue('option', value)}
              items={[
                {
                  label: '2',
                  value: 2,
                },
                {
                  label: '4',
                  value: 4,
                },
                {
                  label: '6',
                  value: 6,
                },
                {
                  label: '10',
                  value: 10,
                },
              ]}
            />
          </View>
        </RowTitle>
      </ContainerTitle>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={data?.clients ?? []}
          ItemSeparatorComponent={ItemSeparators}
          style={{ paddingTop: 12 }}
          ListFooterComponent={
            <ListFooter>
              <FooterAddButton onPress={() => setOpenDrawer(true)}>
                <FooterAddButtonText>Criar cliente</FooterAddButtonText>
              </FooterAddButton>
              <Pagination
                page={page}
                count={data?.totalPages ? data.totalPages * limit : 0}
                limit={limit}
                onPageChange={(page) => setPage(page)}
              />
            </ListFooter>
          }
          renderItem={(item) => (
            <HomeCard refetch={refetch} data={item.item} key={item.item.id} />
          )}
        />
      )}
      <BottomDrawerForm
        isOpen={openDrawer}
        onClose={(confirm) => setOpenDrawer(false)}
      />
    </Container>
  );
};
