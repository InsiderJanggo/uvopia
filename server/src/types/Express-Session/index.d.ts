import session from 'express-session';

declare module 'express-session' {
  export interface SessionData {
    user: { [key: string]: any };
    room:  { [key: string]: any };
    message: { [key: string]: any };
  }
}