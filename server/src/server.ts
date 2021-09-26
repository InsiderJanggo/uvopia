import express from 'express'

class Server {
    private app: express.Application;
    public port = process.env.PORT || 4000;

    constructor() {
        this.app = express()
        this.rootPath()
    }

    protected rootPath(): void {
        this.app.get('/', (req, res) => {
            res.json({
                message: 'Hello World'
            })
        })
    }

    public start(): void {
        this.app.listen(this.port, () => {
            console.log(`App is listening at http://localhost:${this.port}`);
        })
    }
}

export default Server