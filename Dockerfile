# Používáme Python 3.12 jako základní obraz
FROM python:3.12-slim

# Instalace systémových knihoven pro Pillow (včetně zlib) a PostgreSQL (libpq-dev)
RUN apt-get update && apt-get install -y \
    libpq-dev \
    zlib1g-dev \
    libjpeg-dev \
    libfreetype6-dev \
    postgresql-client \
    && rm -rf /var/lib/apt/lists/*

# Nastavení pracovního adresáře
WORKDIR /app

# Kopírování requirements.txt
COPY requirements.txt .

# Instalace Python závislostí
RUN pip install --no-cache-dir -r requirements.txt

# Kopírování aplikace do kontejneru
COPY . .

# Exponování portu
EXPOSE 8000

# Start aplikace pomocí gunicorn
CMD ["gunicorn", "jp2.wsgi", "--log-file", "-"]
