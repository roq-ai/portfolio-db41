import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface BetInterface {
  id?: string;
  cryptocurrency: string;
  amount: number;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface BetGetQueryInterface extends GetQueryInterface {
  id?: string;
  cryptocurrency?: string;
  organization_id?: string;
}
