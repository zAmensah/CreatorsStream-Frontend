// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // basedUrl: 'https://creators-stream.herokuapp.com/api',
  basedUrl: 'http://localhost:6500/api',
  firebaseConfig: {
    apiKey: 'AIzaSyBJFAVvWxgc8gjx1qWyVmLji-esqpWvzrg',
    authDomain: 'creators-stream.firebaseapp.com',
    projectId: 'creators-stream',
    storageBucket: 'creators-stream.appspot.com',
    messagingSenderId: '402363483677',
    appId: '1:402363483677:web:698b2a5e68d933e5d368f4',
    measurementId: 'G-Z1VQTEPQW6',
  },
  paystackConfig: 'pk_test_bd1aa64a47c63396bb9f5cc40b1ac6d5377651ea',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
