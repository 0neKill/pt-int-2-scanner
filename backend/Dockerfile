FROM node:20-alpine  as build

WORKDIR /app
COPY --chown=node:node package.json package-lock.json ./
COPY --chown=node:node /.env ./.env
RUN npm ci
COPY --chown=node:node . .
RUN npm run build


FROM node:20-alpine

WORKDIR /app
COPY --chown=node:node --from=build /app/package.json /app/package-lock.json ./
COPY --chown=node:node --from=build /app/node_modules ./node_modules
COPY --chown=node:node --from=build /app/dist ./build
COPY --chown=node:node --from=build /app/.env ./.env

USER node

CMD ["node",  "build/main.js"]