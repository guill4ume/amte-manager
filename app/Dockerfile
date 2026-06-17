FROM node:24-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --no-cache
COPY . .
RUN npm run build

FROM scratch AS export-stage
COPY --from=builder /app/dist /app
