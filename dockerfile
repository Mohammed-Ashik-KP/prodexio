
FROM node:20


WORKDIR /app


COPY package.json package-lock.json ./
RUN npm ci

COPY . .

COPY next.config.js ./next.config.js



EXPOSE 3000

CMD ["npm", "run", "dev"]
