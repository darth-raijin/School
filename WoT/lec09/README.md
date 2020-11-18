Exercise: Install JMeter
------------------------

 - Install Java 8 or newer (if you haven't) and

 - JMeter https://jmeter.apache.org/


You can see the installed Java version with:
```
 $ java -version
```

The JMeter executables reside in `/bin`

 - On Mac/Linux/WSL(?): run JMeter with `./jmeter`

 - On Windows: run `jmeter.bat`



Exercise: Query the Pi server with JMeter
-----------------------------------------

 - Start the [pi-server.js](pi-server.js) with Node.js
 - Confirm you can access it from a browser
 - Setup a thread group in JMeter (with a HTTP request sampler and listeners) and performance test the Pi
   server, e.g., with 150 threads over 100 secs


What is your average response time and throughput?



Exercise: Test a webpage
------------------------

Performance test a webpage of your own choice with Chrome's developer
tools (https://www.sdu.dk, http://www.mmmi.sdu.dk, https://www.dr.dk, http://www.dust2.dk, ...)

 - with caching disabled
 - over a slow network

Can you discover anything interesting?



Exercise: Load balancing Pi
---------------------------

Load balance the Pi server:

- Start 3 pi-server processes on ports 8081, 8082, 8083
- Start [load-balancer.js](load-balancer.js)
  You'll need: `npm install http-proxy`
- Check that the page works from a browser
- Rerun the JMeter performance test and see if you get a speed-up
  (First: 'Save Graph' or take screenshot, then click 'Clear All')


Exercise: Performance of clicker games
--------------------------------------

Performance test the two clicker games in [clicker-fullpage](clicker-fullpage) and [clicker-spa](clicker-spa).

- Start each server with `node clicker-server.js`
- Setup a thread group in JMeter with a HTTP POST request sampler and performance test both servers
- Can you measure a performance difference between the two? Why?
- What happens if you add more elements to the served pages?