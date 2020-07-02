module.exports = function init(appName, config, cb) {
  var conf = config && config.notifier || {}
  switch (require('os').type()) {

    case 'Linux':
      var proc = require('child_process')
      var notifications = require('freedesktop-notifications')
      var browser = conf.browser || 'x-www-browser'
      try {
        return notifications.init(inited)
      } catch(e) {
        // fallthrough
      }
      function inited(err) {
        if (err) {
          if (/was not provided/.test(err))
            return cb(new Error('Notification daemon not available'))
          else
            return cb(err)
        }
        notifications.setAppName(appName)
        cb(null, function (notif) {
          var notification = notifications.createNotification({
            summary: notif.title,
            body: notif.message,
            actions: {
              default: 'Open'
            },
            icon: notif.icon,
            // https://developer.gnome.org/notification-spec/#hints
            'desktop-entry': 'ssb-patchwork-electron'
          })
          notification.on('action', function (action) {
            proc.spawn(browser, [notif.open], {stdio: 'inherit'}).unref()
          });
          notification.push()
        })
      }

    default:
      var notifier = require('node-notifier')
      cb(null, function (notif) {
        notif.name = appName
        notifier.notify(notif)
      })
  }
}
