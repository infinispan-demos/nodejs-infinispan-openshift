'use strict';

var infinispan = require('infinispan');

var jdgHost = process.env.DATAGRID_HOTROD_SERVICE_HOST || "127.0.0.1";
var jdgPort = process.env.DATAGRID_HOTROD_SERVICE_PORT || 11222;

var connected = infinispan.client({port: jdgPort, host: jdgHost}, {version: '2.2'});

var util = require('util');
module.exports = {
  greet : greet 
};

function greet(req, res) {

  var name = req.swagger.params.name.value;

  connected.then(function (client) {
    client.get(name).then(
          function(value) { 
             if(value == undefined)  {
                  res.json(util.format('Nice to meet you %s!', name))
                  client.put(name, new Date().toLocaleString())
             } else {
                  res.json(util.format('Welcome back %s! Your first visit here was on %s', name, value))
             }
          })
   })
}

