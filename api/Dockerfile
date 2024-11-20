FROM python:3.12

WORKDIR /app

COPY requirements.txt ./requirements.txt

RUN pip install --trusted-host pypi.org --trusted-host pypi.python.org --trusted-host files.pythonhosted.org -r requirements.txt

COPY . .

EXPOSE 3000

CMD [ "uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "3000" ]