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
$ oc create -f openshift/templates/infinispan-template.json  
$ oc process infinispan-nodejs | oc create -f -   

----

### Test the service

Acess the endpoint using the public IP, example:

http://1.2.3.4.xip.io/greet?name=Hodor

### Swagger docs

http://1.2.3.4.10.1.2.2.xip.io/docs/#/default

### Test Rolling upgrades

First verify that everything is up and running in the web console. Next use:

* `oc deploy datagrid --latest -n helloworld-msa` to rollout a new JDG cluster
* `oc deploy nodejs-infinispan --latest -n helloworld-msa` needs to be done before fixing https://issues.jboss.org/browse/HRJS-17
* Note that no data has been lost
