FROM node:14.21.3-alpine3.16
RUN mkdir /app
WORKDIR /app

COPY . .
RUN apk add yarn
RUN yarn build

CMD ["yarn", "start"]
# RUN chmod +x docker-entrypoint.sh
# ENTRYPOINT ["./docker-entrypoint.sh"]