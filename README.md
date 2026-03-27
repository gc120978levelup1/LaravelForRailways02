# LaravelVueTemplate For Railway.com Deployment
Laravel + Vue3 + railway.com

Clone this Project
```sh
git clone --recursive https://github.com/gc120978levelup1/LaravelVueTemplate.git
```
______________________________________________

### Railway.com (Sign-in Using Github)

(Dashboard)[https://railway.com/project/b190df8f-22c6-4a45-b2cb-c5621c2c6d8a?]

(Webapp)[https://cebeco2.up.railway.app]

______________________________________________

### Socialite OAuth 2.0 Login Dashboard

(linkedin-openid)[https://www.linkedin.com/developers/apps/231546114/settings]

(google)[https://console.cloud.google.com/apis/credentials?project=cebeco2]

(facebook)[https://developers.facebook.com/apps/4192158944448283]

______________________________________________

### Install WSL2 and an Ubuntu Image Distro
### Install, Setup and Enable Integration WSL2 with Docker Desktop

Cleanup Docker, Install laravel and node dependencies
```sh
docker ps -aq | xargs docker stop | xargs docker rm
docker system prune -f
composer install
npm install
npm run build
```

Setup Linux, Apache, MySQL, PhpMyAdmin and Redis Server
```sh
git clone --recursive https://github.com/gc120978levelup1/ss_LAMP_Docker.git
cd ss_LAMP_DOCKER
./ss merge
cd ..
./ss up
```

Wait for Docker to finish installing containers
Notr: This command readies the built images to be uploaded to Dockerhub
```sh
docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]
```

Migrate Laravel to MySQL database
```sh
./ss migrate
```

Initialize your Laravel project
```sh
composer require league/flysystem-aws-s3-v3 "^3.0" --with-all-dependencies
composer require laravel/wayfinder
php artisan key:generate
php artisan storage:link
./ss migrate
```

Install Leaflet for mapping and others
```sh
npm install radix-ui
npm install @radix-ui/colors
npm add radix-vue
npm add reka-ui
npm install leaflet
npm install bootstrap
npm install bootstrap-icons
npm install uid
npm install @iconify/vue
npm install @popperjs/core
npm install -D sass-embedded
npm install -D @laravel/vite-plugin-wayfinder
npm run build
```

Run Front End Build
```sh
npm run build
```

Run Development Server
```sh
./ss dev
```

### For Further guide please refer the topics below
=================================================================================

# [Guide For BackEnd Coding](https://github.com/gc120978levelup1/ss_LAMP_Docker/blob/master/README%20file%20Backend%20Guide.md)

# [Guide For FrontEnd Coding](https://github.com/gc120978levelup1/ss_LAMP_Docker/blob/master/README%20file%20Frontend%20Guide.md)

### Pre Deployment Requirement
=================================================================================

example .env File to Submit to the Host
```sh
APP_NAME=www-garry-com
APP_ENV=production
APP_KEY=base64:1+tgtCoZkT5qX3wQgIxpeOahUycM0rHM87wbuUWwMqk=
APP_DEBUG=false
APP_URL=http://localhost

APP_LOCALE=en
APP_FALLBACK_LOCALE=en
APP_FAKER_LOCALE=en_US

APP_MAINTENANCE_DRIVER=file
# APP_MAINTENANCE_STORE=database

PHP_CLI_SERVER_WORKERS=4

BCRYPT_ROUNDS=12

LOG_CHANNEL=stack
LOG_STACK=single
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=pgsql
# DB_CONNECTION=mysql

# development settings starts
# DB_HOST=localhost
# DB_PORT=54321
# development settings ended

# docker production settings starts for PostGres
# obtain this data from the Database Host
DB_HOST=pghost
DB_USERNAME=xuser5345345
DB_PASSWORD=234we3243345353
DB_DATABASE=my-app-database
DB_PORT=5432
# docker production settings ended

# docker production settings starts for MySQL
# DB_HOST=dbhost
# DB_PORT=3306
# docker production settings ended

SESSION_DRIVER=database
SESSION_LIFETIME=120
SESSION_ENCRYPT=false
SESSION_PATH=/
SESSION_DOMAIN=null

BROADCAST_CONNECTION=log
FILESYSTEM_DISK=local
QUEUE_CONNECTION=database

CACHE_STORE=database
# CACHE_PREFIX=

MEMCACHED_HOST=127.0.0.1

REDIS_CLIENT=phpredis
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=log
MAIL_SCHEME=null
MAIL_HOST=127.0.0.1
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

VITE_APP_NAME="${APP_NAME}"


```

./Dockerfile
```sh
# Select Docker Apache/PhP Image
FROM php:8.4-apache

# Updating of application list
RUN apt update
RUN apt-get update -y

# Instal npm and nodejs javascript frameworks
RUN apt-get install -y nodejs npm

# Install Additional System Dependencies
RUN apt install git zip libzip-dev zlib1g-dev libpq-dev -y

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions for Database Access
RUN docker-php-ext-install pdo_mysql pdo_pgsql zip

# Install composer for Laravel (back end)
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install and enable database communication
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

# -----------------------------------------------------------------------------------------------------------
# Copy the application code
# Copy all the web app code to the linux Apache html folder
COPY . /var/www/html

# Set the working directory of Apache Webserver
WORKDIR /var/www/html

# Install project dependencies
RUN composer install
RUN npm install
RUN npm run build

# RUN php database and file migration
RUN php artisan storage:link

# copy apache settings for Laravel Hosting
COPY 000-default.conf /etc/apache2/sites-enabled/

# UNCOMMENT CODE BELOW DURING PRODUCTION DEPLOYMENT
RUN php artisan migrate --force
RUN echo "Listen 0.0.0.0:80" >> /etc/apache2/apache2.conf

# Enable Apache Web Service
RUN a2enmod rewrite
RUN apachectl restart
RUN chown -R root:root storage bootstrap/cache
RUN chmod -R 777 storage bootstrap/cache

EXPOSE 80 443
```
