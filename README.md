# DeviceConnect: React Native Sample

This is sample implementation of the **DeviceConnect React Native SDK**.  
Supports both Android & iOS.  

## DeviceConnect SDK
FinBox DeviceConnect is an SDK that seamlessly integrates into lenders' frontend apps/websites, facilitating secure data sharing and providing valuable predictive insights to support informed decision-making.

React Native SDK is available on [NPM](https://www.npmjs.com/package/react-native-risk-sdk)

## Setup

### Download the SDK

Add the following values to `local.properties`

```properties
ACCESS_KEY=<ACCESS_KEY>
SECRET_KEY=<SECRET_KEY>
DC_SDK_VERSION=<DC_SDK_VERSION>
DC_FLAVOR=<DC_FLAVOR>
COMMON_SDK_VERSION=<COMMON_SDK_VERSION>
COMMON_FLAVOR=<COMMON_FLAVOR>
LOGGER_SDK_VERSION=<LOGGER_SDK_VERSION>
```

Add the following values to `.xcode.env`

```environment
DC_SDK_VERSION=<DC_SDK_VERSION>
```

### Update API Key

Set the `API_KEY` with the shared value inside `App.tsx`

## Integration

For more details on integration, refer to <https://docs.finbox.in/device-connect/react-native.html>
