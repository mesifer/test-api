# Peepay-API
E-wallet RestAPI using NodeJS, Express, MySQL

<p align="center">
    <img src="https://img.icons8.com/color/100/00000/mysql-logo.png"/>
    <img src="https://img.icons8.com/color/100/00000/javascript--v2.png"/>
    <img src="https://img.icons8.com/color/100/00000/nodejs.png"/>
</p>

https://peepay-beta.herokuapp.com/

## Documentation

### GET Method

#### GET `/api/users`

Get user database

### POST Method

#### POST `api/register`

Allows to register account to database. Require body parser :

```
{
  "uname" : "name",
  "email" : "mail@mail.com",
  "pass"  : "pw"
}
```

