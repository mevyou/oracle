import dotenv from 'dotenv';
import { createServer } from 'net';

dotenv.config();

interface Config {
   port: number;
   nodeEnv: string;
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
};

export { findAvailablePort };
export default config;