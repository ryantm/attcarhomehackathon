Car Bon: Safety from CO Poisoning
===================

Premise
=======

Cars on enclosed spaces can generate high levels of Carbon Monoxide
(CO), which is a colorless, odorless, tasteless toxic gas. This can
lead to the death of people and their pets.

Recently, remote start and push-to-start cars are becoming more
prevalent. This means the danger of CO poisoning could be unlocked
from simply accidentally using a smartphone app. We believe that a
solution to this problem integrated into a car would be effective at
reducing the risk of CO poisoning.

Introducing Car Bon
===================

Car Bon is a hack, made at the
[AT&T Car, Home & Hackathon](http://attcarhomehackathon.com/) in
September 2014. The hack consists of a few parts that work together:

* **Car Module** when it detects a spike in CO readings, it uses
  [Ericsson's Connected Vehicle API](http://ericsson-innovate.github.io/hackathon-portal/#/getting-started)
  to turn off the engine of the car. It also reports a danger value to
  [ATT's M2X](https://m2x.att.com/). If the sensor readings fall back
  down, it clears the danger report in M2X.

* **Home Module** queries M2X for signs of danger reported by the **Car
  Module** and opens the garage door to vent the CO.

* **Windows, iOS, Android phone app* a cross-platform, native phone
  app using [Phone Gap](http://phonegap.com/) queries M2X for signs of
  danger reported by the **Car Module** and alerts the app user with
  visual and popup notification.
