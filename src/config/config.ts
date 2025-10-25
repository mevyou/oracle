import dotenv from 'dotenv';
import { createServer } from 'net';

dotenv.config();

interface Config {
   port: number;
   nodeEnv: string;
   // Database
   databaseUrl: string;
   // Football API
   footballApiKey: string;
   footballApiUrl: string;
   footballApiHost: string;
   // Basketball API
   basketballApiKey: string;
   basketballApiUrl: string;
   basketballApiHost: string;
   // X API
   xApiKey: string;
   xApiUrl: string;
   // xAI API
   xaiApiKey: string;
   xaiApiUrl: string;
}

const isPortAvailable = (port: number): Promise<boolean> => {
  return new Promise((resolve) => {
    const server = createServer();
    
    server.listen(port, () => {
      server.once('close', () => {
        resolve(true);
      });
      server.close();
    });
    
    server.on('error', () => {
      resolve(false);
    });
  });
};

const findAvailablePort = async (startPort: number = 3000, maxAttempts: number = 10): Promise<number> => {
  for (let i = 0; i < maxAttempts; i++) {
    const port = startPort + i;
    const available = await isPortAvailable(port);
    
    if (available) {
      return port;
    }
  }
  
  throw new Error(`No available port found starting from ${startPort}`);
};

const config: Config = {
   port: Number(process.env.PORT) || 3000,
   nodeEnv: process.env.NODE_ENV || 'development',
   // Database
   databaseUrl: process.env.DATABASE_URL || '',
   // Football API
   footballApiKey: process.env.FOOTBALL_API_KEY || '',
   footballApiUrl: process.env.FOOTBALL_API_URL || 'https://v3.football.api-sports.io',
   footballApiHost: process.env.FOOTBALL_API_HOST || 'v3.football.api-sports.io',
   // Basketball API
   basketballApiKey: process.env.BASKETBALL_API_KEY || '',
   basketballApiUrl: process.env.BASKETBALL_API_URL || 'https://v1.basketball.api-sports.io',
   basketballApiHost: process.env.BASKETBALL_API_HOST || 'v1.basketball.api-sports.io',
   // X API
   xApiKey: process.env.X_API_KEY || '',
   xApiUrl: process.env.X_API_URL || 'https://api.twitter.com',
   // xAI API
   xaiApiKey: process.env.XAI_API_KEY || '',
   xaiApiUrl: process.env.XAI_API_URL || 'https://api.x.ai',
};

export { findAvailablePort };
export default config;