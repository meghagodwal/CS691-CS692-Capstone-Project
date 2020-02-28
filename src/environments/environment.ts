// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: { // KEY name is firebase
    apiKey: 'AIzaSyDqIpTQPeQUnY416aWEUVXKknDvoefQg-s',
    authDomain: 'marketplace-badaa.firebaseapp.com',
    databaseURL: 'https://marketplace-badaa.firebaseio.com',
    projectId: 'marketplace-badaa',
    storageBucket: 'marketplace-badaa.appspot.com',
    messagingSenderId: '812744707468',
    appId: '1:812744707468:web:ac3f3c6870fba33f7f1aa9'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
