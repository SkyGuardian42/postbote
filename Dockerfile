FROM node:alpine

# Set the default working directory
WORKDIR /usr/src

# Install dependencies
COPY package.json ./
RUN npm install
COPY . .

RUN npm run build