import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "dotenv/config";
import { routes } from './index.routes';

const app = express();
app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return response.status(400).json({
            message: err.message
        });
    }
    next();
    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    });
    
})
app.listen(2022, () => console.log("Server is running"));