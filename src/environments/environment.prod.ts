// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  name: 'ounass',
  cdnUrl: 'https://ounass-prod3.atgcdn.ae/small_light(p=listing1x,of=webp,q=90)/pub/media/catalog/product',
/*  name: 'mnp',
  cdnUrl: 'https://prod3.atgcdn.ae/small_light(p=listing1x,of=webp,q=90)/pub/media/catalog/product',*/
  api: {
    url: 'http://localhost:3000/',
    colors: 'colors/',
    products: 'products/'
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
