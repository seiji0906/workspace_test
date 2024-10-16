# Use node:16.x as the base image
FROM node:16

# Set up the React environment
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install

# Copy the application code
COPY . /app

# Expose the necessary ports
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]
