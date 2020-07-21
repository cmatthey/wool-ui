FROM node:12.18.2
RUN mkdir -p /app/api
WORKDIR /app/ui
ADD . /app/ui/
# COPY wool-ui/package.json /app/ui/
# COPY wool-ui/yarn.lock /app/ui/
RUN yarn install
COPY wool-ui/ /app/api/
ENV UI_PORT 3000
