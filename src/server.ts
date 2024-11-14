import Fastify from 'fastify';
import cors from '@fastify/cors';
import dotenv from 'dotenv';

const app = Fastify({ logger: true })