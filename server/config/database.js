const mongoose = require('mongoose');

async function connect(){
  try {
    await mongoose.connect(process.env.DATABASE_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
  } catch (error) {
    console.log(error)
  }
}

module.exports = connect