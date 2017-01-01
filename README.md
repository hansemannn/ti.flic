# 🔘 Ti.Flic

**This module is highly work in progress and should not be used in any productional environment!**

 Summary
---------------
Ti.Flic is an open-source project to support the Flic iOS-SDK in Appcelerator's Titanium Mobile. 

## Requirements
- Titanium Mobile SDK 5.0.0.GA or later
- iOS 7.0 or later
- Xcode 7 or later

## Setup
1. Optain your API key from the [Flic Developer Console](https://partners.flic.io/partners/developers/credentials)
2. Add the following background-modes to the plist-section of your `tiapp.xml`:
```xml
<key>UIBackgroundModes</key>
<array>
    <string>bluetooth-central</string>
</array>
```
3. That's it! Everything else mentioned in the [official iOS tutorial](https://partners.flic.io/partners/developers/ios-tutorial) is done by the module already!

## Features
### Methods
| Name | Arguments | Return Type |
|------|-----------|-------------|
| configure | args (Object: appID (String), appSecret (String) |  |
| grabFlicFromFlicAppWithCallbackUrlScheme | url (String) |  |
| enable |  |  |
| disable |  |  |
| onLocationChange |  |  |
| isEnabled |  | Boolean |
| forgetButton | UUID (String) |  |

### Properties
| Name | Type |
|------|------|
| bluetoothState | Number |
| knownButtons | Array |

### Events
| Name |
|------|
| didReceiveButtonDown |
| didReceiveButtonUp |
| didReceiveButtonClick |
| didReceiveButtonDoubleClick |
| didReceiveButtonHold |
| flicButtonDidConnect |
| flicButtonIsReady |
| didDisconnectWithError |
| didFailToConnectWithError |
| didUpdateRSSI |
| didGrabFlicButton |
| didChangeBluetoothState |
| didRestoreState |
| didForgetButton |

## Example
Please check the `/example/app.js` for an example featuring all API's.

## Author
Hans Knoechel ([@hansemannnn](https://twitter.com/hansemannnn) / [Web](http://hans-knoechel.de))

## License
Apache 2.0

## Contributing
Code contributions are greatly appreciated, please submit a new [pull request](https://github.com/hansemannn/ti.flic/pull/new/master)!
