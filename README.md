# NodeJS Delete empty Folders (efd)
a simpe-to-use Empty Folder Delete ([NodeJS](https://nodejs.org/))

# Installing
## Installing (globally / -g)
(when git installed) `npm install -g hasezoey/nodejs-delete-empty-folders` 

for linux:
    add `$HOME/.npm-packages/bin` to PATH for global use (only for current user) (and to `~/.profile`)

## Installing (locally)
(when git installed) `npm install hasezoey/nodejs-delete-empty-folders` 

# Usage
## Usage (globally)
execute in a console `efd` to delete empty folders (and scans sub-Directoris)
(when in dev or want to execute it but not delete Directoris `--no-delete`)

## Usage (locally)
```js
var efd = require('efd');
efd.dir('./', () => {
    console.log('Finished');
});
```
