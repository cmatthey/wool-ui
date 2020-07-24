FROM alpine:latest

RUN apk add --no-cache --update yarn
RUN apk add --no-cache --update python-apt

#RUN yarn install
ADD . /opt/ui/
WORKDIR /opt/ui

RUN adduser -D myuser
USER myuser

ENV PORT 3000
CMD yarn start
