# QuickEmoji

A webextension emoji picker. Built using Svelte and Twemoji. 

<p align="center">
  <img src="./docs/img/preview.jpg" alt="Preview of QuickEmoji Panel">
</p>

## Building

To build the extension (requires node.js, npm):

`npm install`

`npm run build`

Output will be in `/extension` folder

## Installation 

### From Store:

- [Mozilla Add-ons](https://addons.mozilla.org/es/firefox/addon/quickemoji/)

- [Chrome Store](https://chrome.google.com/webstore/detail/quickemoji/fedhapifjflfeagckppmblohbnidlmmn)

### Firefox (debug mode):

This enables the addon temporarily (removes it when browser is closed):

* Navigate to `about:debugging#/runtime/this-firefox`
* Click **Load Temporary Add-on**
* Select `manifest.json` file from extension
