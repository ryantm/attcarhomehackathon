/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var alertMessageDisplayed = false;

function displayMonoxideDanger() {
  if (!alertMessageDisplayed) {
    var m2x = new M2X("b508161c43e6b6dae291d655145999a4");
    m2x.feeds.streamValues(
      //"314b8fd2a5639cd6ed9597b6eb37ad78",
      "c6eabf437b8c69efbb4e4a8d5c60c04d",
      "danger_bit",
      {},
      function(a) {
        console.log(a);
        var co_danger = parseInt(a['values'][0]['value']);
        if (co_danger == 1) {
          alertMsg();
        }
        if (co_danger == 0) {
          clearDanger();
        }
      });
  }
}

function alertDismissed() {
  alertMessageDisplayed = false;
}

function clearDanger() {
  var el = document.getElementById("monoxide");
  el.className = "safe";
  el.innerHTML = "Carbon monoxide levels safe."
}

function alertMsg(){
    alertMessageDisplayed = true;
    var el = document.getElementById("monoxide");
    el.className = "danger";
    el.innerHTML = "Carbon monoxide levels are unsafe."

    navigator.notification.alert(
        'Carbon monoxide levels are unsafe!',  // message
        alertDismissed,         // callback
        'Warning',            // title
        'Done'                  // buttonName
    );
}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
      app.receivedEvent('deviceready');
      displayMonoxideDanger();
      setInterval(displayMonoxideDanger, 5000);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
