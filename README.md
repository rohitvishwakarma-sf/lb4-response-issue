# test-auth-example

This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

## Install dependencies

By default, dependencies were installed when this application was generated.
Whenever dependencies in `package.json` are changed, run the following command:

```sh
npm install
```

To only install resolved dependencies in `package-lock.json`:

```sh
npm ci
```
## Set environment
create file with name .env in root level of the project
copy and paste below content
```
NODE_ENV=dev
LOG_LEVEL=verbose
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=YOUR_DB_PASSWRD
DB_DATABASE=authdb
DB_SCHEMA=main
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
REDIS_URL=
REDIS_PASSWORD=
REDIS_DATABASE=
JWT_SECRET=rohit
JWT_ISSUER=vishwakarma
```
update YOUR_DB_PASSWORD with your postgress db pasword
also update the password in config in file src/authdb.datasource.ts
```
const config = {
  name: AuthDbSourceName,
  connector: 'postgresql',
  url: '',
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'YOUR_DB_PASSWRD',
  database: 'authdb',
  schema: 'main',
};
```
## Run migration
1. create a database in your postgress server with name 'authdb'

2. run command
```
npm run db:migrate
```
## Run the application

```sh
npm start
```

You can also run `node .` to skip the build step.

Open http://127.0.0.1:3000 in your browser.

