# Cuneiform

View product documentation overlaid on your digital product.

## How to run back end API

1. `$ dotnet restore Cuneiform.Api`
1. `$ dotnet run Cuneiform.Api`
1. Visit <http://localhost:5001>

## How to build front end

1. `$ yarn`
1. `$ npm run build` (production build of the app with Webpack)

## Local Dev

- `$ npm run watch` (Webpack watch)
- Inspect the options view at chrome-extension://{extension-id}/src/chrome/views/options/index.html
- Inspect the popup view at chrome-extension://{extension-id}/src/chrome/views/popup/index.html
- Load the extension (unpacked) from Chrome at chrome://extensions (enable Developer Mode)

