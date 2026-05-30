FROM python:3.12-slim

WORKDIR /app

COPY rozklad_backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY rozklad_backend/ .

COPY src/pkjs/stations.js /src/pkjs/stations.js

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "[::]", "--port", "8000"]
