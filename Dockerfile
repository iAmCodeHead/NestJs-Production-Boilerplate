ARG IMAGE=node:16.13-alpine

#COMMON
FROM $IMAGE as builder
WORKDIR /app
COPY . .
RUN npm install


#DEVELOPMENT
FROM builder as dev
CMD [""]