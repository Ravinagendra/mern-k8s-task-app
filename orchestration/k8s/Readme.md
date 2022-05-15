# Task app k8s

### Set up

-   Make sure you have installed ingress contoller for ingress-mapping to work
-   Go to link https://kubernetes.github.io/ingress-nginx/deploy/ Run the command to configure ingress controller.

### SSL

```sh
# Generate a ssl certs
openssl req -x509 -days 10 -nodes -newkey rsa:2048 -keyout ./ssl/self.key -out ./ssl/self.crt

# Create a ssl secret
kubectl create secret generic ssl-cert --from-file=./ssl/self.key --from-file=./ssl/self.crt

# Verify
kubectl describe secret ssl-cert
```

### Deploy

```sh
kubectl apply -f templates/ --recursive

# Info
kubectl get events
kubectl get all
kubectl get configmap
kubectl get secrets
kubectl get ingress

# Verify
kubectl describe configmap task-app-api-configmap
kubectl describe configmap task-app-mongo-express-configmap

kubectl describe ingress task-app-ingress-ui
kubectl describe ingress task-app-ingress-api
kubectl describe ingress task-app-ingress-mongo-express

kubectl get pods -o wide

# Verify pods and volumes and environments
kubectl exec -it [api-pod] -- sh
env
exit

kubectl exec -it [mongodb-pod] -- bash
env | grep MONGO_INITDB_ROOT
exit

kubectl exec -it [mongo-express-pod] -- bash
env | grep ME_CONFIG_MONGODB
exit

# Cleanup
kubectl delete -f templates/ --recursive
kubectl delete secret ssl-cert
```

### URLS

-   UI: https://localhost
-   API: https://localhost/api/tasks
-   MongoExpress: https://localhost/express
