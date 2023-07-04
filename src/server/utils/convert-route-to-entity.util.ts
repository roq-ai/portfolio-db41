const mapping: Record<string, string> = {
  bets: 'bet',
  organizations: 'organization',
  portfolios: 'portfolio',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
