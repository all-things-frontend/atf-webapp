import { type Models } from 'appwrite';

export interface Question extends Models.Document {
  title: string;
}
