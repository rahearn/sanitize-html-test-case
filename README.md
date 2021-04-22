# README

## Running the app

* bundle install
* rails server
* Navigate to http://localhost:3000

The main branch ~~will~~ used to exhibit the error as seen here: https://github.com/apostrophecms/sanitize-html/issues/420

With the changes to `config/webpack/environment.js` to exclude `sanitize-html` from the `nodeModules` loader the main branch now also works.

The `sanitize-1x` branch will properly render "Hello **Sanitize HTML**"
