var Flic = require('ti.flic');

var win = Ti.UI.createWindow({
    backgroundColor: '#fff'
});

var btn = Ti.UI.createButton({
    title: 'Configure Flic'
});

btn.addEventListener('click', function() {	
       /**
   	@discussion Configures the Flic API. Do not call this method twice or you
        will receive multiple handled URL's. 
	 
   	@param appId The app-id of your Flic-App (required).
   	@param appId The app-secret of your Flic-App (required).
   	@param appId Determine wether or not the background execution should be  used (optional).
    	*/
	Flic.configure({
        	appID: '<MY_App_ID>',
		appSecret: '<MY_APP_SECRET>',
		backgroundExecution: true // Default: false, must have BLE comfigured
	});
});

/**
 @discussion Button events
 */
Flic.addEventListener('didReceiveButtonDown', didReceiveButtonDown);
Flic.addEventListener('didReceiveButtonUp', didReceiveButtonUp);
Flic.addEventListener('didReceiveButtonClick', didReceiveButtonClick);
Flic.addEventListener('didReceiveButtonDoubleClick', didReceiveButtonDoubleClick);
Flic.addEventListener('didReceiveButtonHold', didReceiveButtonHold);
Flic.addEventListener('flicButtonDidConnect', flicButtonDidConnect);
Flic.addEventListener('flicButtonIsReady', flicButtonIsReady);
Flic.addEventListener('didDisconnectWithError', didDisconnectWithError);
Flic.addEventListener('didFailToConnectWithError', didFailToConnectWithError);
Flic.addEventListener('didUpdateRSSI', didUpdateRSSI);

/**
 @discussion Manager events
 */
Flic.addEventListener('didGrabFlicButton', didGrabFlicButton);
Flic.addEventListener('didChangeBluetoothState', didChangeBluetoothState);
Flic.addEventListener('didRestoreState', didRestoreState);
Flic.addEventListener('didForgetButton', didForgetButton);

win.add(btn);
win.open();

/**
 @discussion More API's (unused)
 */
function grabFlicFromFlicAppWithCallbackUrlScheme() {
	Flic.grabFlicFromFlicAppWithCallbackUrlScheme('<YOUR-URL-SCHEME>');
}

function enableManager() {
	Flic.enable();
}

function disableManager() {
	Flic.disable();
}

function onLocationChange() {
	Flic.onLocationChange();
}

function getBluetoothState() {
	Ti.API.info('Current BLE-state: ' + Flic.getBluetoothState());
}

function isEnabled() {
	Ti.API.info('Manager enabled for BLE-communication: ' + Flic.isEnabled());
}

function getKnownButtons() {
	var knownButtons = Flic.getKnownButtons();
	
	Ti.API.info('Known buttons:');
	for (var i = 0; i < knownButtons.length; i++) {
		Ti.API.info(knownButtons[i]);
	}
}

function forgetButton() {
	Flic.forgetButton('<BUTTON-UUID>');
}

/**
 @discussion Event Callbacks
 */
function didReceiveButtonDown(e) {
	Ti.API.info('didReceiveButtonDown');
	Ti.API.info(e);
}

function didReceiveButtonUp(e) {
	Ti.API.info('didReceiveButtonUp');
	Ti.API.info(e);
}

function didReceiveButtonClick(e) {
	Ti.API.info('didReceiveButtonClick');
	Ti.API.info(e);
}

function didReceiveButtonDoubleClick(e) {
	Ti.API.info('didReceiveButtonDoubleClick');
	Ti.API.info(e);
}

function didReceiveButtonHold(e) {
	Ti.API.info('didReceiveButtonHold');
	Ti.API.info(e);
}

function flicButtonDidConnect() {
	Ti.API.info('flicButtonDidConnect');
}

function flicButtonIsReady() {
	Ti.API.info('flicButtonIsReady');
}

function didDisconnectWithError(e) {
	Ti.API.info('didDisconnectWithError');
	Ti.API.info(e);
}

function didFailToConnectWithError(e) {
	Ti.API.info('didFailToConnectWithError');
	Ti.API.info(e);
	
	// NOTE: All properties in the event are available in the following events:
	//   * didDisconnectWithError
	//   * didFailToConnectWithError
	//   * didUpdateRSSI
	//   * didGrabFlicButton
		
	// Example of checking the connection state
	Ti.API.info('Connection state:');
	switch (e.connectionState) {
		case Flic.CONNECTION_STATE_CONNECTED:
			Ti.API.info('-> Connected');
			break;
		case Flic.CONNECTION_STATE_CONNECTING:
			Ti.API.info('-> Connecting');
			break;
			
		case Flic.CONNECTION_STATE_DISCONNECTED:
			Ti.API.info('-> Disconnected');
			break;
			
		case Flic.CONNECTION_STATE_DISCONNECTING:
			Ti.API.info('-> Disconnecting');
			break;
	}
	
	// Example of checking the trigger behavior
	Ti.API.info('Trigger behavior:');
	switch (e.triggerBehavior) {
		case Flic.TRIGGER_BEHAVIOR_CLICK_AND_HOLD:
			Ti.API.info('-> Click and Hold');
			break;
		case Flic.TRIGGER_BEHAVIOR_CLICK_AND_DOUBLE_CLICK:
			Ti.API.info('-> Click and Double Click');
			break;
		case Flic.TRIGGER_BEHAVIOR_CLICK_AND_DOUBLE_CLICK_AND_HOLD:
			Ti.API.info('-> Click and Double Click and Hold');
			break;
	}
}

function didUpdateRSSI(e) {
	Ti.API.info('didUpdateRSSI');
	Ti.API.info(e);
}

function didGrabFlicButton(e) {
	Ti.API.info('didGrabFlicButton');
	Ti.API.info(e);
}

function didChangeBluetoothState(e) {
	Ti.API.info('didChangeBluetoothState');
	Ti.API.info(e);
		
	// Example of checking the bluetooth state
	Ti.API.info('Blueooth state:');
	switch (e.state) {
		case Flic.BLUETOOTH_STATE_POWERED_ON:
			Ti.API.info("-> Powered On");
			break;
		case Flic.BLUETOOTH_STATE_POWERED_OFF:
			Ti.API.info("-> Powered off");
			break;
		case Flic.BLUETOOTH_STATE_RESETTING:
			Ti.API.info("-> Resetting");
			break;
		case Flic.BLUETOOTH_STATE_UNSUPPORTED:
			Ti.API.info("-> Unsupported");
			break;
		case Flic.BLUETOOTH_STATE_UNAUTHORIZED:
			Ti.API.info("-> Unauthorized");
			break;
		case Flic.BLUETOOTH_STATE_UNKNOWN:
			Ti.API.info("-> Unknown");
			break;
	}
}

function didRestoreState() {
	Ti.API.info('didRestoreState');
}

function didForgetButton(e) {
	Ti.API.info('didForgetButton');
	Ti.API.info(e);
}
