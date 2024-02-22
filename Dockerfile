# Use official Node.js image as the base image
FROM node:18-alpine

# Create and set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Set the environment variable
ENV NODE_ENV=production

# Expose the port on which the app will run
EXPOSE 3000

# Start the app
CMD ["sh", "-c", "npm run build && npm start"]
