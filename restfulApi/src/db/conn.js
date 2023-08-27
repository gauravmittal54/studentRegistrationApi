const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/student-api", {
}).then(() => {
    console.log("Connection is successful");
}).catch((e) => {
    console.log("No connection: ", e);
})
