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
- [x] Optain your API key from the [Flic Developer Console](https://partners.flic.io/partners/developers/credentials)
- [x] Add the following background-modes to the plist-section of your `tiapp.xml`:

```xml
<key>UIBackgroundModes</key>
<array>
    <string>bluetooth-central</string>
</array>
```

- [x] Add the url-scheme of your app to the plist-section of your `tiapp.xml`:
```xml
<key>CFBundleURLTypes</key>
<array>
<dict>
    <key>CFBundleURLName</key>
    <string>com.company.yourappid</string>
    <key>CFBundleURLSchemes</key>
    <array>
        <!-- Please ensure that this identifier does not contain any special characters -->
        <string>yourAppURL</string>
    </array>
</dict>
</array>
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>flic20</string>
</array>
```
- [x] That's it! Everything else mentioned in the [official iOS tutorial](https://partners.flic.io/partners/developers/ios-tutorial) is done by the module already!

## Features
### Methods

| Name | Arguments | Return Type |
|------|-----------|-------------|
| configure | args (Object: appID (String), appSecret (String), backgroundExecution (Boolean) |  |
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

### Constants

| Constant | Property |
|----------|----------|
| BLUETOOTH_STATE_POWERED_ON | bluetoothState |
| BLUETOOTH_STATE_POWERED_OFF | bluetoothState |
| BLUETOOTH_STATE_RESETTING | bluetoothState |
| BLUETOOTH_STATE_UNSUPPORTED | bluetoothState |
| BLUETOOTH_STATE_UNAUTHORIZED | bluetoothState |
| BLUETOOTH_STATE_UNKNOWN | bluetoothState |

The following constants are available in the `knownButtons` property and the 
events `didDisconnectWithError`, `didFailToConnectWithError` and `didUpdateRSSI`:

| Constant | Property |
|----------|----------|
| CONNECTION_STATE_CONNECTED | connectionState |
| CONNECTION_STATE_CONNECTING | connectionState |
| CONNECTION_STATE_DISCONNECTED | connectionState |
| CONNECTION_STATE_DISCONNECTING | connectionState |
| TRIGGER_BEHAVIOR_CLICK_AND_HOLD | triggerBehavior |
| TRIGGER_BEHAVIOR_CLICK_AND_DOUBLE_CLICK | triggerBehavior |
| TRIGGER_BEHAVIOR_CLICK_AND_DOUBLE_CLICK_AND_HOLD | triggerBehavior |

## Example
Please check the `/example/app.js` for an example featuring all API's.

## Author
Hans Knoechel ([@hansemannnn](https://twitter.com/hansemannnn) / [Web](http://hans-knoechel.de))

## License
Apache 2.0

## Contributing
Code contributions are greatly appreciated, please submit a new [pull request](https://github.com/hansemannn/ti.flic/pull/new/master)!
