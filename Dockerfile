# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the entire project
COPY . .

# Build the Nuxt.js application
RUN npm run build

# Expose the port your Nuxt.js application is running on
EXPOSE 3000

# Start the Nuxt.js application
CMD ["node", ".output/server/index.mjs"]
