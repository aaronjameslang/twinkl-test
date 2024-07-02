import { app } from '.';

export const testServer = process.env.TEST_SERVER ?? app;
