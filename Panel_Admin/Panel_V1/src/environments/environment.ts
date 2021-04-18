// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCfoH3UQl_XziM-4zuAGhcVmO4lSlsQJjk",
    authDomain: "abyssiniaapp-90799.firebaseapp.com",
    projectId: "abyssiniaapp-90799",
    storageBucket: "abyssiniaapp-90799.appspot.com",
    messagingSenderId: "89329886312",
    appId: "1:89329886312:web:342f16431a00c4bdde47dd",
    measurementId: "G-EYNXQFRNXV"
    },
    onesignal: {
      appId: '122e8583-33fd-4865-a2c6-bf521fc5c861',
      googleProjectNumber: '89329886312',
      restKey: 'NDY3NjY0YTktNWUwZi00ZjJjLThjMmItNzRlNTdhMjgyM2Fm'
    },
  stripe: {
    sk: 'pk_test_51Ih0qAILCb0ADwOGDEfLd2doDdHG5zgllUQXIjjs1EoHTAkmQbyqCcT7GgC8j47n29XKNkpMbBeq3cVBro8Z5kTb00IhcwFPbq'
  },
  paypal: {
    sandbox: 'AZZSbQtqOJkKpMKlW5mUniTINsp3XqhdRw1cLeSOenXwuQ-3UeywxprITP_OkbCgDq4TGYZjlcnw1j2S',
    production: 'EPu8FN_5A8j7wMDywEgtgQnfJE_O_Wg1xqhkleNX84ylXkvaAxuYJXKsxLnQHdnM3dDWkcUgKok9SJ-5'
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
