# rewards-challenge

The online assessment for contractor role at Charter Communications

## Usage

### Install dependencies

```
# Backend deps
npm install

# Frontend deps
cd frontend
npm install
```

### Run both frontend and backend

```
npm run dev
```

### Run frontend only

```
npm run client
```

### Run server only

```
npm run server
```

### Run frontend unit test

```
npm run test:client
```

### Run backend unit test

```
npm run test:server
```

## Frontend Usage

To visit the home page, the URL is
```
http://localhost:3000
```

To visit a user's detail page, with his all transactions in most recent 3 months and earned points, a customer id is needed, the URL is
```
http://localhost:3000/{customerId}
```

Notice: right now only userid with 1 and 2 contain mock data, other userid will render a blank form and the earn points is 0


## Backend Usage

There are two APIs, to respond request of all transactions with a userId, and calculated earned points with a userId.

### GET/Transactions (customer ID)
This is for retrieving all transactions from given customer id, use get method, the access is public.
```
http://localhost:3001/api/transactions/{customerId}
```

### GET/Rewards (customer ID)
This is for retrieving amount of earned points from given customer id, use get method, the access is public.
```
http://localhost:3001/api/rewards/{customerId}
```
