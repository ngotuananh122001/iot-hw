## Description

Marketplace server repository.

## Installation

```bash
$ npm install
```

## Setup
1. Create .env file using env.example

```bash
PORT=3003 # API port

NODE_ENV=dev-api # dev-api, dev-worker, prod-api, prod-worker

# TYPEORM
TYPEORM_CONNECTION=mysql
TYPEORM_HOST=     # MySQL host
TYPEORM_PORT=     # MySQL port
TYPEORM_USERNAME= # MySQL username
TYPEORM_PASSWORD= # MySQL password
TYPEORM_DATABASE= # schema name
TYPEORM_MIGRATIONS_DIR=src/database/migrations
TYPEORM_MIGRATIONS=dist/database/migrations/*.js
TYPEORM_ENTITIES_DIR=dist/**/*.entity.js
```

Run the app for the first time to create the database structure.
```bash
$ npm run start:dev

```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## License

This project is under [MIT licensed](LICENSE).
