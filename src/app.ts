
import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan';
import { db } from './models';
import recipeRoutes from './routes/recipeRoutes';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
const cors = require('cors');
const corsOptions = {
    origin:'http://localhost:3001', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
};
app.use(cors(corsOptions));
//routes
app.use('/api/users', userRoutes);
app.use('/api/recipe', recipeRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).end();
});

// Syncing our database
db.sync().then(() => {
    console.info("connected to the database!")
});

app.listen(3000);