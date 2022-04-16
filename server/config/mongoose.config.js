const mongoose = require('mongoose');

const dbName = "product_manager_db";

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to ${dbName} database.`))
    .catch((err) => console.log(err));
