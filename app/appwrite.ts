import { Client, Databases, Account } from 'appwrite';

const client: Client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('66620f84000d59237f35'); // Replace with your project ID

export const account: Account = new Account(client);
export const databases: Databases = new Databases(client);
export { ID } from 'appwrite';
