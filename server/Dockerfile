FROM python:3.12.4-slim AS base

WORKDIR /app
COPY requirements.txt .

RUN pip install --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

COPY docker-cmd.sh .
RUN chmod a+x docker-cmd.sh
COPY ./beepboop ./beepboop

EXPOSE 3000

CMD ["./docker-cmd.sh"]
