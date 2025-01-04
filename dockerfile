# Step 1: Build the Angular app
FROM node:22.12 AS build

WORKDIR /app

COPY package.json package-lock.json ./ 

RUN npm install

COPY . .

RUN npm run build --prod

# Step 2: Serve the app using Nginx
FROM nginx:alpine

COPY --from=build /app/dist/weather-tracker-app /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
