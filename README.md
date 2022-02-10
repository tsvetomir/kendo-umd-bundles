# Kendo UI for Angular - UMD Bundles
The [Kendo UI for Angular](https://github.com/telerik/kendo-angular) do not currently ship with UMD bundles.
This will be fixed as part of the transition to the APF v12 in [kendo-angular#3502](https://github.com/telerik/kendo-angular/issues/3502)

In the meantime you can use this unofficial project to generate UMD bundles from the currently released packages.

### Future of UMD bundles
Angular is removing UMD bundles with the full transition to Ivy in Angular v13.

You should consider [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/) for sharing scripts between applications.
See [Microfrontend with Angular and Webpack Module Federation](https://www.steffendielmann.com/2021/05/07/microfrontend-with-angular-and-webpack-module-federation/) for a functional example.

## Building UMD bundles

1. Run `npm ci` to fetch all dependencies
1. Run `npm run build` to build the UMD bundles
1. Copy the bundles from `dist/bundles` in your application
1. Copy the Webpack `externals` configuration from `dist/webpack-externals.json`

## Sample application

1. Enter the app folder `cd sample-app`
1. Run `npm ci` and `npm run build`
1. Return to the root directory `cd ..`
1. Run `npm run serve`
1. Navigate to http://localhost:8080/sample-app/dist/
