# Stage 1: Build the app

FROM node:22 AS builder

# Set the workking directory inside the container
WORKDIR /media-upload-microservice

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the source code
COPY . .

# Build the TypeScript code into JavaScript
RUN npm run build


# Stage 2: Run the app
FROM node:22-alpine

# Set the workding directory inside the container
WORKDIR /media-upload-microservice

# Copy only the necessary files from the builder stage
COPY --from=builder  /media-upload-microservice/dist ./dist
COPY --from=builder  /media-upload-microservice/package*.json ./

# Install the production dependencies
RUN npm install --production

# Expose the port the app runs on
EXPOSE 8000

# Start the app
CMD ["node", "dist/index.js"]
