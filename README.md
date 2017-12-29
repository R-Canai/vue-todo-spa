# vue-todo-spa

> A Vue.js project

## CSS Framework

 - vuetify
 - material icons

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

## Django API

### start

$ python django_api/manage.py runserver 0.0.0.0:8000 > /dev/null 2>&1 < /dev/null &

### stop

$ ps -ef|awk 'BEGIN{}{if(match($8, /python/))system("kill -9 " $2)}END{}'

--

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
