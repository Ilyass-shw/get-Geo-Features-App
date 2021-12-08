# Go Features Application 
## Overview

This one page application :
- prompts user to provide geo box coordinates either via a form, or using a selection method through a map.
- makes a call to open street map api .
- gathers information in "osm" format.
- converts data to "GeoJSON" using "osmtogeojson" .
- displays the data both on a map, and via a list of features.
- is tested using unit and integration tests.

[Check out demo](https://ecstatic-northcutt-6f4f16.netlify.app/)

## Technologies used

- @reduxjs/toolkit: "^1.6.2",
- @testing-library/jest-dom: "^4.2.4",
- @testing-library/user-event: "^7.2.1",
- cypress: "^9.1.1",
- leaflet: "^1.7.1",
- leaflet-area-select: "^1.0.5",
- osmtogeojson: "^3.0.0-beta.4",
- react: "^17.0.2",
- react-dom: "^17.0.2",
- react-hook-form: "^7.21.0",
- react-json-view: "^1.21.3",
- react-lazyload: "^3.2.0",
- react-leaflet: "^3.2.2",
- react-redux: "^7.2.6",
- react-scripts: "4.0.3",
- styled-components: "^5.3.3",
- uuid: "^8.3.2"
## Setup 
To run the app locally, clone the repo and install the app using:

```
  $ git clone https://github.com/Ilyass-shw/get-Geo-Features-App.git
  $ cd get-Geo-Features-App
  $ npm install
  $ npm start
```

To run react testing library tests:

```
  $ npm run test
```

To run Cypress tests:

```
  $ npm run e2e
```
## Wishlist


- Improve GUI
- Add more tests
