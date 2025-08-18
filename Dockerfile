FROM node:23
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build
RUN npx prisma generate
# RUN node dist/seed.js ./src/data/Hospital_General_Information.csv
EXPOSE 3001
CMD ["npm","start"]   