import { useMutation, useQuery } from '@tanstack/react-query';
import { api } from '..';
import {
  TDeleteUser,
  TGetUsers,
  TPostNewUser,
  TUseDeleteUser,
  TUseGetUsers,
  TUsePostNewUser,
} from './types';

export const getUsers: TGetUsers = async (params) => {
  const { data } = await api.get('/users', {
    params,
  });
  return data;
};

export const useGetUsers: TUseGetUsers = (params) => {
  return useQuery({
    queryKey: ['users', params.page, params.limit],
    queryFn: () => getUsers(params),
  });
};

export const postNewUser: TPostNewUser = async (data) => {
  await api.put(`/users`, data);
};

export const usePostNewUser: TUsePostNewUser = () => {
  return useMutation({
    mutationFn: postNewUser,
  });
};

export const deleteUser: TDeleteUser = async (id) => {
  await api.delete(`/users/${id}`);
};

export const useDeleteNewUser: TUseDeleteUser = () => {
  return useMutation({
    mutationFn: deleteUser,
  });
};
