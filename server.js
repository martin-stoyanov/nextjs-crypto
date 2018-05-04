const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();
    // list of currencues
    const currencies = ['usd', 'eur', 'gbp'];
    server.get('/prices/:currency?', (req, res) => {
      // check if not in list
      if (req.params.currency === undefined ||
         !currencies.includes(req.params.currency.toLowerCase())) {
        res.redirect('/prices/USD');
      } else {
        app.render(req, res, '/prices', { currency: req.params.currency.toUpperCase() });
      }
    });
    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
