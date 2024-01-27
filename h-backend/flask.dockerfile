FROM python:3.10

WORKDIR /app

COPY pyproject.toml ./

RUN pip install poetry

RUN poetry install

RUN poetry add pyproject.toml

COPY . .

EXPOSE 5000

CMD ["poetry", "run", "python", "-m", "backend"]