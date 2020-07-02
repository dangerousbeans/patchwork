// Work around broken plugins.enable RPC method

var fs = require('fs')
var path = require('path')

var pluginName = require('./package').name

var ssbAppname = process.env.ssb_appname || 'ssb'
var ssbPath = process.env.ssb_path ||
  path.join(require('os').homedir(), '.' + ssbAppname)
var confPath = path.join(ssbPath, 'config')
var confPathTmp = confPath + '~'
var confData = fs.existsSync(confPath)
  ? fs.readFileSync(confPath, 'utf8')
  : 'null'
var conf = JSON.parse(confData) || {}

var plugins = conf.plugins || (conf.plugins = {})
if (plugins[pluginName]) {
  console.log(pluginName + ' already enabled')
  process.exit(0)
}
plugins[pluginName] = true

fs.writeFileSync(confPathTmp, JSON.stringify(conf, 0, 2))
fs.renameSync(confPathTmp, confPath)
console.log(pluginName + ' enabled. Restart ssb-server.')
