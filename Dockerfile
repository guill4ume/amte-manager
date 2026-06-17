# --- Stage 1: Build the Vue frontend ---
FROM node:20-alpine AS builder

WORKDIR /app
COPY app/package*.json ./
RUN npm ci --no-cache
COPY app/ ./
RUN npm run build

# --- Stage 2: Serve the app with Python Flask ---
FROM python:3.11-alpine

WORKDIR /amtemanager
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY server.py ./
COPY --from=builder /app/dist ./app/dist

EXPOSE 80
CMD ["python", "server.py"]
