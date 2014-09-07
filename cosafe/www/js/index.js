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
var co_level;
var alertMessageDisplayed = false;

function displayMonoxideLevel() {
  if (!alertMessageDisplayed) {
    var m2x = new M2X("b508161c43e6b6dae291d655145999a4");
    m2x.feeds.streamValues(
      "314b8fd2a5639cd6ed9597b6eb37ad78",
      "ledon",
      {},
      function(a) {
        console.log(a);
        var el = document.getElementById("monoxide");
        co_level = parseInt(a['values'][0]['value']);
        el.innerHTML = a['values'][0]['value'];
      });
    if (co_level > 35 && !alertMessageDisplayed) {
      alertMsg();
    }
  }
}

function alertDismissed() {
  alertMessageDisplayed = false;
// do something
}

    // navigator.notification.beep(10);
function alertMsg(){
    alertMessageDisplayed = true;
    navigator.notification.alert(
        'Danger!',  // message
        alertDismissed,         // callback
        'Game Over',            // title
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
      displayMonoxideLevel();
      setInterval(displayMonoxideLevel, 3000);
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
