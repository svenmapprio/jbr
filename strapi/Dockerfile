# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the entire project
COPY . .

RUN npm build

# Expose the port your Strapi application is running on
EXPOSE 1337

# Start the Strapi application
CMD ["npm", "start"]