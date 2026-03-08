let _pStore: any = null;

export const getPStore = async () => {
  if (!_pStore) {
    const { PostgresStore } = await import('@mastra/pg');
    _pStore = new PostgresStore({
      connectionString: process.env.DATABASE_URL,
    });
  }
  return _pStore;
};
