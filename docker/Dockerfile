FROM node:12-slim
RUN mkdir -p /src/front
COPY . /src/front
WORKDIR /src/front
RUN npm install -g serve
RUN npm install
RUN npm run build
EXPOSE 8080
# CMD ["npm", "start", "--", "--port", "7080"]