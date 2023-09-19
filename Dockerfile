# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the app
RUN npm run build

# Use a lightweight Node.js image to serve the app
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Install the `serve` package to serve the app
RUN npm install -g serve

# Copy the build folder from the build image
COPY --from=0 /usr/src/app/dist ./dist

# Expose the port the app runs on
EXPOSE 5000

# Command to run the app
CMD ["serve", "-s", "dist", "-l", "5000"]
