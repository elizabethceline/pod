import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/trackabout/pod/:tripNumber', async (req, res) => {
    try {
        const { tripNumber } = req.params;

        if (!tripNumber) {
            return res.status(400).json({
                error: { message: 'Trip number is required' }
            });
        }

        const apiUrl = process.env.BASE_API_URL;

        if (!apiUrl) {
            console.error('BASE_API_URL is not defined in .env file');
            return res.status(500).json({
                error: { message: 'Server configuration error' }
            });
        }

        console.log(`Fetching: ${apiUrl}/trackabout/pod?NoSuratJalan=${tripNumber}`);

        const response = await fetch(
            `${apiUrl}/trackabout/pod?NoSuratJalan=${tripNumber}`
        );

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        res.json(data);
    } catch (error) {
        console.error('Proxy error:', error);
        res.status(500).json({
            error: { message: 'Internal server error' }
        });
    }
});

// check server health
app.get('/health', (req, res) => {
    res.json({ status: 'ok', port: PORT });
});

app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});