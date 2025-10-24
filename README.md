# manulife-test-be

# Steps to follow to configure backend

1) Get a clone of the repository

``` git clone git@github.com:mikey94/manulife-test-be.git ```

2) Run Docker compose

``` docker compose up --build ```

After the above steps, the backend will run on http://localhost:8000.

<h1>API list</h1>

<h2>Authentication</h2>

Register - POST - http://localhost:8000/api/auth/register

```
curl --location 'http://localhost:8000/api/auth/register' \
--header 'Content-Type: application/json' \
--data-raw '{
  "email": "test@example.com",
  "password": "password123"
}'
```
Login - POST - http://localhost:8000/api/auth/login

```
curl --location 'http://localhost:8000/api/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
  "email": "test2@example.com",
  "password": "password@123"
}'
```
<h2>Investments</h2>

Get list of investments - GET - http://localhost:8000/api/portfolio

```
curl --location 'http://localhost:8000/api/portfolio' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZmE1MjljNDA0OGI2MzY2M2M5NzJjMSIsImlhdCI6MTc2MTIzNTkwMywiZXhwIjoxNzYxODQwNzAzfQ.tVXilwzGqMm9mZFDpv6UuvAOI1414LQ7PmVJ1MPJo9A'
```

Add investment - POST - http://localhost:8000/api/portfolio

```
curl --location 'http://localhost:8000/api/portfolio' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZmE1MjljNDA0OGI2MzY2M2M5NzJjMSIsImlhdCI6MTc2MTIzNTcwNiwiZXhwIjoxNzYxODQwNTA2fQ.VImkoli9ZY40yLsNngGmRU9THXf4cCBxvSwsCjzbXTM' \
--data '{
  "name": "Space X",
  "type": "stock",
  "quantity": 25,
  "purchasePrice": 324.80
}'
```
Update investment - PUT - http://localhost:8000/api/portfolio/:id

```
curl --location --request PUT 'http://localhost:8000/api/portfolio/68f9ec12bced1d625a17e132' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZjlkYWUzYmNlZDFkNjI1YTE3ZTEyMyIsImlhdCI6MTc2MTIwNDk2MywiZXhwIjoxNzYxODA5NzYzfQ.Pso_3g_Rr4dqasV-9GLNBaFZuoH5HdxnADQRBrDHZng' \
--data '{
  "name": "ABC",
  "type": "bond",
  "quantity": 5,
  "purchasePrice": 26.80
}'
```

<h2>Transactions</h2>

Get transactions - GET - http://localhost:8000/api/transaction

```
curl --location 'http://localhost:8000/api/transaction' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZmE1MjljNDA0OGI2MzY2M2M5NzJjMSIsImlhdCI6MTc2MTI5MDk2OCwiZXhwIjoxNzYxODk1NzY4fQ.QzkAUVKz7wr7y3FgqBWB9DcSvYsPQ4RWeELSYmuUDvI'
```


Post transactions - POST - http://localhost:8000/api/transaction

```
curl --location 'http://localhost:8000/api/transaction' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZmE1MjljNDA0OGI2MzY2M2M5NzJjMSIsImlhdCI6MTc2MTI5MzYwOSwiZXhwIjoxNzYxODk4NDA5fQ.FiTxdASDnRlVAWhHfN_TvNF7JvTVcbCfWm80bksA_bc' \
--data '{
  "name": "Tesla Inc.",
  "symbol": "TSLA",
  "type": "buy",
  "quantity": 25,
  "price": 112.50,
  "date": "2025-10-23T12:30:00.000Z"
}'
```























