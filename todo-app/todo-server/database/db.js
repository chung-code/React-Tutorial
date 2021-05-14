const mongoose = require('mongoose')

const dbUrl = 'mongodb://localhost:27017/NL'

exports.db = mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB...')
    console.log(dbUrl)
  })
  .catch(err => {
    console.log('Could not connect to MongoDB...', err)
    mongoose.connection.close()
  })
