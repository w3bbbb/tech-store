# Stage 1: Build React app
FROM node:22 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve app with nginx
FROM nginx:1.27

# Copy built app to nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
