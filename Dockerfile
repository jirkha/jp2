# Používáme Python 3.12 jako základní obraz
FROM python:3.12-slim

# Copy local code to the container image.
ENV APP_HOME /app
WORKDIR $APP_HOME
COPY . ./

# Install core dependencies.
RUN apt-get update && apt-get install -y libpq-dev build-essential

# Install production dependencies.
RUN pip install --no-cache-dir -r requirements.txt

# Start aplikace pomocí gunicorn
CMD ["gunicorn", "jp2.wsgi", "--log-file", "-"]
