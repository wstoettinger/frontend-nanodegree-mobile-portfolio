<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content=" FILL ME IN ">
    <meta name="author" content=" FILL ME IN ">
    <title>Cameron Pittman: Portfolio</title>

    <!-- Hmm, what is the impact of web fonts on speed? Measure it... -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">

    <link href="css/style.css" rel="stylesheet">
    <link href="css/print.css" rel="stylesheet">

    <script>
      (function(w,g){w['GoogleAnalyticsObject']=g;
      w[g]=w[g]||function(){(w[g].q=w[g].q||[]).push(arguments)};w[g].l=1*new Date();})(window,'ga');

      // TODO: replace with your Google Analytics profile ID.
      ga('create', 'UA-XXXX-Y');
      ga('send', 'pageview');
    </script>
    <script src="http://www.google-analytics.com/analytics.js"></script>
    <script async src="js/perfmatters.js"></script>
  </head>

  <body>
    <header>
      <a href="index.html"><img src="img/profilepic.jpg" srcset="img/profilepic.webp" alt="Profile Picture" /></a>
      <p>Cameron Pittman<br><span>Course Developer</span></p>
    </header>

    <div class="container">
      <div class="hero">
        <strong>I love web development!</strong> This is a template for a simple portfolio. I decided to use it to showcase a few Udacity courses I've taken and some teaching work, but you can use it to showcase any kind of project that you want the world to see :) <br> Contact me: me@email.com
      </div>

      <div class="content">
        <ul>
          <li>
            <img src="img/build_2048-100px.jpg" srcset="img/build_2048-100px.webp">
            <a href="project-2048.html">Build Your Own 2048!</a>
            <p>I made my own version of 2048. How cool is that!?</p>
          </li>

          <li>
            <img src="img/performance_optim-100px.jpg" srcset="img/performance_optim-100px.webp">
            <a href="project-webperf.html">Website Performance Optimization</a>
            <p>Hey... this class looks familiar.</p>
          </li>

          <li>
            <img src="img/web_dev-100px.jpg" srcset="img/web_dev-100px.webp">
            <a href="project-mobile.html">Mobile Web Development</a>
            <p>Making mobile apps isn't so hard after all.</p>
          </li>

          <li>
            <img src="views/images/pizzeria-100px.jpg" srcset="views/images/pizzeria-100px.webp">
            <a href="views/pizza.html">Cam's Pizzeria</a>
            <p>Who wants a performant pizza?</p>
          </li>
        </ul>
    </div>

    <footer>
      <p>&copy; Web Performance 2014 <span id="crp-stats"></span></p>
    </footer>
  </body>
</html>
