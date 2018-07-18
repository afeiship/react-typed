# react-default-node-name
> Get default react tag for react web &amp; react native

## usage:
```js
import nodeName from 'react-default-node-name';
import { View } from 'react-native';
// Web:
console.log( nodeName() );        // section
console.log( nodeName('div') );   // div
console.log( nodeName('span') );  // span

// React Native:
console.log( nodeName() );        // React.Fragement
console.log( nodeName(View) );    // View
```
