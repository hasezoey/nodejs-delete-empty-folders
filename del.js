#!/usr/bin/env node

var args = process.argv.splice(process.execArgv.length + 2);
var fs = require('fs');
require('colors');
var nodel_arg = args.find((x) => {
    return x == 'no-del' ||
        x == '--no-del' ||
        x == '--nodel' ||
        x == 'nodel' ||
        x == '-nodel' ||
        x == '-no-del'
}); // will try to find something like "nodel"
var nodel = nodel_arg != 'undefined' && nodel_arg != '' && nodel_arg != null;
var deletet_count = 0;
//nodel = true; //SAFETY - for in-dev usage

/**
 * @param {string} path
 * @param {function} cb
 */
function dir(path, cb = () => { }) {
    console.log(`Currently at "${path.grey}"`);
    fs.stat(path, (err, stat) => {
        if (err && err.code == 'EPERM') {
            console.log('"' + path.grey + '"'+' Operation not permitted'.red);
            cb();
        }
        if (err) {
            console.error(err);
            cb();
            return;
        }

        if (stat.isDirectory()) {
            console.log(`"${path.grey}" is a Directory`);
            fs.readdir(path, (err2, files) => {
                if (err2) {
                    console.error(err2);
                    cb();
                    return;
                }

                if (files.length == 0) {
                    //delete
                    if (!nodel) {
                        fs.rmdir(path, (err3) => {
                            if (err3) {
                                console.error(err3);
                                cb();
                                return;
                            }

                            console.log(`Deletet "${path.grey}"`);
                            deletet_count++;
                            cb(); //call cb, and had deletet it
                        });
                    } else {
                        console.log(`Found "${path.grey}", but not deleteing (no-del)`);
                        cb(); //call cb, but not delete the dir
                    }
                } else {
                    //search for another dir
                    console.log(`"${path.grey}" searching for sub-directoris`);
                    var curr = 0;
                    sync_async_while((cb2) => {
                        if (files.length == 0) {
                            console.log(`"${path.grey}" no sub-directoris found`);
                            cb2(false);
                        }
                        if (curr <= files.length - 1) {
                            console.log(`"${path.grey}" found "` + `/${files[curr]}`.grey + `"`);
                            dir(`${path}/${files[curr]}`, () => {
                                curr++;
                                cb2(true);
                            });
                        } else {
                            console.log(`"${path.grey}" finished`);
                            fs.readdir(path, (err3, files2) => {
                                if (err3) {
                                    console.error(err3);
                                    cb();
                                    return;
                                }

                                if (files2.length == 0) {
                                    // re-do it here because it is empty
                                    dir(`${path}`, () => { 
                                        cb2(false);
                                    });
                                } else {
                                    // dont do it again - not empty
                                    cb2(false);
                                }
                            });
                        }
                    }, cb);
                }
            });
        } else {
            console.log(`"${path.grey}" is not a Directory`);
            cb();
        }
    });
}

/**
 * Calles "func" always until the callback is false
 * @param {function} func function that gets always called
 * @param {function} func[cb] the callback
 * @param {function} end callback when ends
 */
function sync_async_while(func, end) {
    func((again) => {
        if (again) {
            sync_async_while(func, end);
        } else {
            end();
        }
    })
}

module.exports = {
    dir: dir,
    sync_async_while: sync_async_while,
}
