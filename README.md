# NodeJS Delete empty Folders (efd)
a simpe-to-use Empty Folder Delete (NodeJS)

# Installing (globally / -g)
(when downloaded and unzipped) `npm install -g ./`
(when git installed) `npm install -g hasezoey/nodejs-delete-empty-folders` 

# Installing (locally)
(when downloaded and unzipped) `npm install ./`
(when git installed) `npm install hasezoey/nodejs-delete-empty-folders` 

# Usage (globally)
execute in a console `efd` to delete empty folders (and scans sub-Directoris)
(when in dev or want to execute it but not delete directis `--no-delete`)

# Usage (locally)
`var efd = require('efd');
 efd.dir('./', () => {
      console.log('Finished');
 });`
