# nodejs-infinispan
NodeJS microservice with persistence on Infinispan 

### Running locally 
* npm install

* node app.js

## Swagger docs
http://127.0.0.1:8080/docs/

### Deploy project on Openshift via oc CLI

----
$ git clone https://github.com/gustavonalle/nodejs-infinispan  
$ oc policy add-role-to-user view system:serviceaccount:$(oc project -q):default -n $(oc project -q)   
$ oc create -f openshift/nodejs-infinispan.json  

----

### Test the service

Acess the endpoint using the public IP, example:

http://1.2.3.4.xip.io/greet?name=Hodor

### Swagger docs

http://1.2.3.4.xip.io/docs/#/default
