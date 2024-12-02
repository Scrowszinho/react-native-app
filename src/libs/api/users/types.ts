import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { TDefaultQueryProps } from '@types/index';
import { TUserReturn, TNewUser } from '@types/users';

export type TGetUsers = (
  params: TDefaultQueryProps,
) => Promise<TUserReturn>;

export type TUseGetUsers = (
  params: TDefaultQueryProps;
) => UseQueryResult<TUserReturn>;

export type TPostNewUser = (
  data: TNewUser
) => Promise<void>;

export type TUsePostNewUser = () => UseMutationResult<
  void,
  Error,
  TNewUser,
  unknown
>;

export type TDeleteUser = (
  id: number
) => Promise<void>;

export type TUseDeleteUser = () => UseMutationResult<
  void,
  Error,
  number,
  unknown
>;

export type TPatchUser = (params: 
  {id: number, data: TNewUser}
) => Promise<void>;

export type TUsePatchUser = () => UseMutationResult<
  void,
  Error,
  {id: number, data: TNewUser},
  unknown
>;
