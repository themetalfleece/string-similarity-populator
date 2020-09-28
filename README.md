This is a populator for [string-similarity-data-fetch](https://github.com/themetalfleece/string-similarity-data-fetch)

## Install

1. Install [node.js](https://nodejs.org/en/download/), [yarn](https://classic.yarnpkg.com/en/docs/install/).
2. Clone this repository, and using a terminal navigate to its directory.
3. Run `yarn` to install the dependencies.

## Populate Pokemon

1. Copy the contents of the `.env.example` file to a `.env` next to it, and edit it with your values.
2. Run `yarn download-pokemon` to download the needed files.
3. Run `yarn populate-pokemon` to populate the database with the data.

-   Steps 2 & 3 can be combined by running `yarn pokemon`

## Linting & Formatting

-   Run `yarn lint` to lint the code.
-   Run `yarn format` to format the code.
