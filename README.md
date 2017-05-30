# nodejs-infinispan
NodeJS microservice with persistence on Infinispan 

## Running locally 
* npm install

* node app.js

### Swagger docs
http://127.0.0.1:8080/docs/

## Deploy project on Openshift via oc CLI

### Install Openshift

Install Openshift "all-in-one" cluster either by:

* Downloading it directly from https://github.com/openshift/origin/releases. 
  Look for openshift-origin-client-tools-your-platform.tar.gz
* Building from the sources
  
  ```
  git clone https://github.com/openshift/origin.git
  make clean build
  sudo cp _output/local/bin/linux/amd64/oc /usr/local/bin
  ```
  
### Start Openshift 
 
 ```
 oc cluster up
 ```
  
### Deploying the service

  ```
   git clone https://github.com/infinispan-demos/nodejs-infinispan-openshift/
   oc policy add-role-to-user view system:serviceaccount:$(oc project -q):default -n $(oc project -q)   
   oc create -f openshift/nodejs-infinispan.json 
   ```

### Test the service

Acess the endpoint using the public IP, example:

http://nodejs-infinispan-myproject.192.168.1.85.xip.io/greet?name=Hodor

Use ```oc get route``` to find out the exact host.

### Rolling upgrades

First verify that everything is up and running in the web console. Next use:

* `oc deploy datagrid --latest` to rollout a new Infinispan cluster
* `oc deploy nodejs-infinispan --latest` to rollout a new nodejs cluster

Note that no data has been lost.

