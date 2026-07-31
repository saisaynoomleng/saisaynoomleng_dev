import { createClient } from 'next-sanity';
import { client } from './client';
import { env } from '@/lib/env/server';

const token = env.SANITY_WRITE_TOKEN;

export const writeClient = client.withConfig({
  token,
  useCdn: false,
});
