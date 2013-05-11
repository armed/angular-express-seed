
var express = require('express')
  , routes = require('./routes')
var app = module.exports = express()

// settings
app.configure(function () {
  app.set('view options', { layout: false })
    .set('views', __dirname + '/views')
    .set('view engine', 'jade')
    .use(express.cookieParser())
    // don't forget to change secret and key
    .use(express.cookieSession({ secret: 'EadJBxXjaLQj8A6ELkFNZPA7',
      key: 'myapp.sid' }))
    .use(express.bodyParser())
    .use(express.methodOverride())
    .use(express.compress())
    .use('/public', express.static(__dirname + '/public'))
    .use(app.router)
})

app.configure('development', function () {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }))
})

app.configure('production', function () {
  app.use(express.errorHandler())
})

// routes
app.get('*', routes.index)

// startup
app.listen(process.env.PORT || 3000, function () {
  console.log("Express server listening on port %d in %s mode",
    this.address().port, app.settings.env)
})
