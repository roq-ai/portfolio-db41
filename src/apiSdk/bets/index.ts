import axios from 'axios';
import queryString from 'query-string';
import { BetInterface, BetGetQueryInterface } from 'interfaces/bet';
import { GetQueryInterface } from '../../interfaces';

export const getBets = async (query?: BetGetQueryInterface) => {
  const response = await axios.get(`/api/bets${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createBet = async (bet: BetInterface) => {
  const response = await axios.post('/api/bets', bet);
  return response.data;
};

export const updateBetById = async (id: string, bet: BetInterface) => {
  const response = await axios.put(`/api/bets/${id}`, bet);
  return response.data;
};

export const getBetById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/bets/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteBetById = async (id: string) => {
  const response = await axios.delete(`/api/bets/${id}`);
  return response.data;
};
