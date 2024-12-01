export type TNewUser = {
  name: string;
  salary: number;
  companyValuation: number;
};

export type TUser = {
  id: number;
  name: string;
  salary: number;
  companyValuation: number;
  createdAt: string;
  updatedAt: string;
};

export type TUserReturn = {
  clients: Array<TUser>;
  totalPages: number;
  currentPage: number;
};
