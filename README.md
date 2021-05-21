# Tracks-app

ReactNative Track App

# Create project

npx expo-cli tracks --npm

# react-native-elements

npm install react-native-elements
documentation: https://reactnativeelements.com

# install axios

npm install axios

# Async Storage Update

# In the upcoming lecture, we will be adding an import to Authcontext to use the AsyncStorage module from # React Native. This has been officially deprecated and will soon be removed entirely from React Native.

# To resolve this, we need to install the following library:

npm install @react-native-community/async-storage

# Then, update the import in AuthContext to this:

import AsyncStorage from "@react-native-community/async-storage";

Build for IOS/Android
npm run eject
