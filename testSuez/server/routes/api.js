const express = require('express')
const router = express.Router()
const request = require('request');

/* Je n'ai purement et simplement pas réussi à utiliser l'api que vous recommandiez.
Encore une fois le manque de temps a joué, cependant je pense qu'il m'aurait fallut de l'aide,
car je manque d'expérience quant à l'utilisation d'API externes.
J'ai ici laissé le code que j'ai utilisé sur un autre projet, utilisant une api externe plus simple
*/
router.get("/films", async (req, res) => {
  try {
    const { name, area } = req.body;

    if (!name || !area) {
      res.status(400).send("Enter a time zone (EUROPE) and a name (Paris) pleas");
    }

    request({
      uri: 'http://worldtimeapi.org/api/timezone/' + area + "/" + name,
    }).pipe(res);
    res.status(200);
  } catch (err) {
    console.log(err)
  }
})

module.exports = router