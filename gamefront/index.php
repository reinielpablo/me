<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Background Animation Effect Test - Dan</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <section></section>
    <script>
      function createSquare() {
        const section = document.querySelector('section');
        const square = document.createElement('span');

        var size = Math.random() * 50;
        square.style.width = 20 + size + 'px';
        square.style.height = 20 + size + 'px';

        square.style.top = Math.random() + innerHeight + 'px';
        square.style.right = Math.random() + innerWidth + 'px';

        section.appendChild(square);

        setTimeout(() => {
          square.remove();
        }, 5000);
      }
      setInterval(createSquare, 150);
    </script>
  </body>
</html>
