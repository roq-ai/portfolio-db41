import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface PortfolioInterface {
  id?: string;
  cryptocurrency: string;
  quantity: number;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface PortfolioGetQueryInterface extends GetQueryInterface {
  id?: string;
  cryptocurrency?: string;
  organization_id?: string;
}
