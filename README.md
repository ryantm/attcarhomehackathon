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
  [AT&T's M2X](https://m2x.att.com/). If the sensor readings fall back
  down, it clears the danger report in M2X.

* **Home Module** queries M2X for signs of danger reported by the **Car
  Module** and opens the garage door to vent the CO.

* **Phone App** a cross-platform, native phone
  app using [Phone Gap](http://phonegap.com/) queries M2X for signs of
  danger reported by the **Car Module** and alerts the app user with
  visual and popup notification. The app works on Windows, iOS, and Android.

Building the hack
============

The Car Module uses the
[u-blox C027 mbed enabled Internet of Things kit](http://www.u-blox.com/en/evaluation-tools-a-software/reference-designs/for-gps-chips/c027-internet-of-things-kit.html)
, an ARM mbed development kit, to read the
[Carbon Monoxide Sensor MQ-7](https://www.sparkfun.com/products/9403)
from SparkFun via a one of the ADC pins. A separate pin controls a
transistor for controlling the MQ-7 heating element. The firmware on
the CO27 mbed is programmed to detect spikes in sensor readings and
uses the cellular antenna built into the CO27 mbed, and AT&T's
cellular network to interface with Ericsson's connected car API
endpoint. It also uses the cellular connectivity to update an M2X
stream. It also uses
[AT&T's m2x-arm-mbed library](https://github.com/attm2x/m2x-arm-mbed). The
[Car Module mbed code](http://mbed.org/users/kwchang2/code/Car_Bon_car_module/)
is available on the mbed website.

The Home Module uses the
[Freescale FRDM-K64F](http://mbed.org/platforms/FRDM-K64F/), an ARM
mbed development platform, to read a button and control a servo to
demonstrate opening a garage door. The
[Home Module mbed code](http://mbed.org/users/buf006/code/carbon_home_module/)
is available on the mbed website.

The Phone App is built using Adobe Phone Gap. We used the PhoneGap
Developer App to quickly prototype our app that can be built as a
cross-platform, native app on Windows, iOS, and Android. The Phone App
uses
[AT&T's m2x-javascript library](https://github.com/attm2x/m2x-javascript)
for interfacing with m2x.
