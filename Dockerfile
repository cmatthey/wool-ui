FROM node:12.18.2
RUN mkdir -p /app/api
WORKDIR /app/ui
ADD . /app/ui/
RUN yarn install
ENV UI_PORT 3000
