// @ts-nocheck
import { LocalStorageEnum } from '@crm/enums/index';

import axios from 'axios';
export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
