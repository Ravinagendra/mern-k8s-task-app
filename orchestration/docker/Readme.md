# Task with Docker

### Set up

```sh
# Create ssl
openssl req -x509 -days 10 -nodes -newkey rsa:2048 -keyout ./ssl/self.key -out ./ssl/self.crt

# Need dhparam for nginx ssl configuration
# Create dhparam
openssl dhparam -out dhparam.pem 4096
```

### Deploy

```sh
docker-compose up -d --build

# Verify
docker-compose logs
docker ps

# mongo express
docker exec -it k8s_task_app_db_ui bash
env | grep ME_CONFIG_MONGODB
exit

# api
docker exec -it k8s_task_app_api sh
env | grep MONGO_DB_URL
env | grep App_DB
exit

# nginx
docker exec -it k8s_task_app_nginx sh
ls /etc/nginx/ssl
exit

# Clean up
docker-compose down
docker ps
```

### URLS

-   UI: https://localhost
-   API: https://localhost/api/tasks
-   MongoExpress: https://localhost/express

### Bugs and fixes

-   Use `"proxy": "http://host.docker.internal:5000"` in ui package.json if you dont use nginx
-   Make sure you are not running any other nginx in your machine
-   If Kubernetes nginx is running stop it and run docker-compose again
