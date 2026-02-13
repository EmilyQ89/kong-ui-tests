export const env = {
  timeout: 30_000,
  headless: !process.env.CI,
  baseUrl: process.env.BASE_URL || 'http://localhost:8002',
};