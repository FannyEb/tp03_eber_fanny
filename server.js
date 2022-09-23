const
	express = require('express'),
	bodyParser = require('body-parser');
	cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Enregistrement des routes
require('./routes')(app);

// Enregistrement du middleware de gestion d'erreurs
app.use((err, req, res, next) => {
	if (err.status === undefined) {
		return res.status(500).send(err.message);
	} else {
		return res.status(err.status).send(err.message);
	}
});

const port = process.env.PORT || 3000;
// Lancement du serveur
const server = app.listen(port, () => {
	console.log('Server successfully started on port ' + port);
});