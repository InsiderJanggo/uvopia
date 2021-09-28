import express from 'express'
import morgan from 'morgan';
import cors from 'cors'
import apiRoute from './routes/index'
import session from 'express-session';
import { errorHandler, notFound } from './middewares';

class Server {
    private app: express.Application;
    public port = process.env.PORT || 4000;

    constructor() {
        this.app = express()
        this.middlewares();
        this.rootPath()
        this.routePaths()
        this.app.use(notFound);
        this.app.use(errorHandler)
    }

    private middlewares(): void {
        this.app.use(cors({
            origin: 'http://localhost:3000',
            credentials: true
        }))
        this.app.use(morgan('tiny'))
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(session({
            secret: process.env.SESSION_SECRET || 'keyboard cat',
            resave: false,
            saveUninitialized: true,
        }))
    }

    protected rootPath(): void {
        this.app.get('/', (req, res) => {
            res.json({
                message: 'Hello World'
            })
        })
    }

    protected routePaths(): void {
        this.app.use('/api/v1', apiRoute)
    }

    public start(): void {
        this.app.listen(this.port, () => {
            console.log(`App is listening at http://localhost:${this.port}`);
        })
    }
}

export default Server