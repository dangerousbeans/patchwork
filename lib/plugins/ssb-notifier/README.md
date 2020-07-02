# ssb-notifier

Desktop notifications for ssb/patchwork. Generates notifications on mentions,
digs, private messages, replies, and follows. Works on linux and OSX, like magic.

## Install

Install as CLI program, via ssb-npm:

```
ssb-npm i -g ssb-notifier
```

Install as ssb-server plugin, via ssb-npm:

```
cd /tmp
ssb-npm i ssb-notifier --global-style --branch %meTv2FOfWlKMAqK3ZTu2hqFsNbWO8uha1DYXQZ40bpc=.sha256
mv node_modules/ssb-notifier ~/.ssb/node_modules/
node ~/.ssb/node_modules/ssb-notifier/enable-plugin.js
```

Install as ssb-server plugin, via git-ssb:

```
cd ~/.ssb/node_modules
git clone ssb://%A2FOQ9DDID+M3qAUnocWXcMakckyvUr+QArf66Y4LT0=.sha256 ssb-notifier
cd ssb-notifier
ssb-npm i --branch %meTv2FOfWlKMAqK3ZTu2hqFsNbWO8uha1DYXQZ40bpc=.sha256
node enable-plugin.js
```

## Config

`~/.ssb/config`:
```
{
  "notifications": {
    "msgBaseUrl": "http://localhost:8989/msg/"
    "browser": "x-www-browser"
  }
}
```
- `msgBaseUrl`: base url to open when activating a notification about a message. Default is the one hosted by ssb-ws.
- `browser`: Browser or command to open the message URL if using freedesktop-notifications. Default is `x-www-browser`.

## License

Copyright 2016, 2017, 2010 Charles Lehner

Usage of the works is permitted provided that this instrument is
retained with the works, so that any entity that uses the works is
notified of this instrument.

DISCLAIMER: THE WORKS ARE WITHOUT WARRANTY.
