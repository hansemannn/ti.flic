# 🔘 Ti.Flic

**This module is highly work in progress and should not be used in any productional environment!**

 Summary
---------------
Ti.Flic is an open-source project to support the Flic iOS-SDK in Appcelerator's Titanium Mobile. 

## Requirements
- Titanium Mobile SDK 5.0.0.GA or later
- iOS 7.0 or later
- Xcode 7 or later

## Features
### Methods
- [x] configure(args)
- [x] grabFlicFromFlicAppWithCallbackUrlScheme(url)
- [x] enable()
- [x] disable()
- [x] onLocationChange()
- [x] isEnabled()
- [x] forgetButton(uuid)

### Properties
- [x] bluetoothState
- [x] knownButtons

### Events
- [x] didReceiveButtonDown
- [x] didReceiveButtonUp
- [x] didReceiveButtonClick
- [x] didReceiveButtonDoubleClick
- [x] didReceiveButtonHold
- [x] flicButtonDidConnect
- [x] flicButtonIsReady
- [x] didDisconnectWithError
- [x] didFailToConnectWithError
- [x] didUpdateRSSI
- [x] didGrabFlicButton
- [x] didChangeBluetoothState
- [x] didRestoreState
- [x] didForgetButton

## Example
Please check the `/example/app.js` for an example featuring all API's.

## Author
Hans Knoechel ([@hansemannnn](https://twitter.com/hansemannnn) / [Web](http://hans-knoechel.de))

## License
Apache 2.0

## Contributing
Code contributions are greatly appreciated, please submit a new [pull request](https://github.com/hansemannn/ti.flic/pull/new/master)!
