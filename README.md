# NodeJS Delete empty Folders (efd)
a simpe-to-use Empty Folder Delete ([NodeJS](https://nodejs.org/))

# Installing
## Installing (globally / -g)
(when downloaded and unzipped) `npm install -g ./`
(when git installed) `npm install -g hasezoey/nodejs-delete-empty-folders` 

## Installing (locally)
(when downloaded and unzipped) `npm install ./`
(when git installed) `npm install hasezoey/nodejs-delete-empty-folders` 

# Usage
## Usage (globally)
execute in a console `efd` to delete empty folders (and scans sub-Directoris)
(when in dev or want to execute it but not delete directis `--no-delete`)

## Usage (locally)
```js
var efd = require('efd');
efd.dir('./', () => {
    console.log('Finished');
});
```