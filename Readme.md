# Task App project with Kubernetes

## RUN

### development

-   run db `docker-compose -f docker-compose.local.yml up -d` in `/orchestration/docker`
-   run api `npm run dev` in `/task-app-api`
-   run ui `npm start` in `/task-app-ui`

### Prod

-   run `docker-compose up -d --build`

## URLS

-   UI: localhost
-   API: locahost/api
-   MongoExpress: localhost/mongo-express

## Api Endpoints

```
# Tasks
POST /api/tasks
GET /api/tasks
```

### Misc

-   Use `"proxy": "http://host.docker.internal:5000"` in ui package.json if you dont use nginx
