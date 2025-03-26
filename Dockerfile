FROM python:3.12-slim

# Instalace potřebných systémových knihoven (včetně zlib)
RUN apt-get update && apt-get install -y \
    zlib1g-dev \
    libjpeg-dev \
    libfreetype6-dev \
    && rm -rf /var/lib/apt/lists/*

# Nastavení pracovního adresáře
WORKDIR /app

# Kopírování requirements.txt
COPY requirements.txt .

# Instalace Python závislostí
RUN pip install --no-cache-dir -r requirements.txt

# Kopírování aplikace
COPY . .

# Exponování portu
EXPOSE 8000

# Start aplikace
CMD ["gunicorn", "jp2.wsgi", "--log-file", "-"]
