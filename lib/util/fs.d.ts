/// <reference types="bluebird" />
import * as Promise from 'bluebird';
import * as fs from 'fs-extra-promise';
export { constants, FSWatcher, Stats, WriteStream } from 'fs';
export { accessSync, chmodAsync, closeAsync, closeSync, createReadStream, createWriteStream, ensureDirAsync, ensureDirSync, fsyncAsync, linkAsync, linkSync, lstatAsync, mkdirAsync, moveAsync, openSync, openAsync, readFileAsync, readFileSync, readdirAsync, readlinkAsync, readJSONSync, removeSync, renameAsync, statAsync, statSync, symlinkAsync, utimesAsync, watch, writeAsync, writeFileAsync, writeSync } from 'fs-extra-promise';
export declare function ensureFileAsync(filePath: string): Promise<void>;
export declare function copyAsync(src: string, dest: string, options?: RegExp | ((src: string, dest: string) => boolean) | fs.CopyOptions): Promise<void>;
export declare function removeAsync(dirPath: string): Promise<void>;
export declare function unlinkAsync(dirPath: string): Promise<void>;
export declare function rmdirAsync(dirPath: string): Promise<void>;
