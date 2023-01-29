import store from 'connect-redis';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import Redis from 'ioredis';
import passport from 'passport';
import { v4 as uuidv4 } from 'uuid';

import config from './index.js';

const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true }
const optionsRedis={
    host: config.REDIS_CONFIG.host ,
    port: config.REDIS_CONFIG.port,
    ttl: 86400, // tiempo de vida de la sesión en segundos (1 día)
    prefix: 'session:',//nombre de la base
    password:config.REDIS_CONFIG.password,
    logErrors: true,
  }
  const redis = new Redis(optionsRedis);
  const RedisStore = store(session);
 

const option = {
  genid: (req) => uuidv4(), // generar un ID de sesión único
  store: new RedisStore({ client: redis }),
  secret: 'secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true, // solo accesible por el servidor
    secure: true, // solo enviar la cookie a través de HTTPS
    maxAge: 1 * 60 * 1000 // 1 hora
  }
}
// config.SECRET
function managerSessionRedis (app) {
  app.use(cookieParser())
  app.use(session(option))
  app.use(passport.initialize())
  app.use(passport.session())
}

export default managerSessionRedis 
