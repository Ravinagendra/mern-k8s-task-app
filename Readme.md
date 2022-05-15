# Task App project with Kubernetes

## RUN

### development

-   run db `docker-compose -f docker-compose.local.yml up -d` in `/orchestration/docker`
-   run api `npm run dev` in `/task-app-api`
-   run ui `npm start` in `/task-app-ui`

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

### Orchestration

-   For deployment using `docker-compode` read `Readme.md` in `orchestration/docker`
-   For deployment using `kubernetes` read `Readme.md` in `orchestration/k8s`
