

const express = require('express');
const secretsRouter = express.Router();

secretsRouter.route('/')
.get((req,res) => {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
      <html>
      <body>
        <b>
        Secrets to Living a Happier Life !<br>
        Focus on the positive <br>
        Spend wisely<br>
        Celebrate little victories<br>
        Find your work–life balance<br>
        Practice mindfulness<br>
        Accept imperfection.
        </b>
      </body>
      </html>
  `);  
})

module.exports = secretsRouter;