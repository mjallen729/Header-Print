import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import routes from './api/routes.js'

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', routes);
app.use('/api', (req, res) => res.status(200).json({ status: 'success' }));  // health check
app.use('*', (req, res) => res.status(404).json({ error: '404' }));  // for undefined routes

dotenv.config({ path: '../.env' });

// Start the app on port
const port = process.env.PORT || 5100;
app.listen(port, () => {
    console.log(`listening on port ${port}`);

});

export default app