exports.index = function (req, res) {
  res.render('index', { env: req.app.get('env') })
}
