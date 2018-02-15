/// <reference types="bluebird" />
import * as Promise from 'bluebird';
export declare type Normalize = (input: string) => string;
export interface INormalizeParameters {
    separators?: boolean;
    unicode?: boolean;
    relative?: boolean;
}
/**
 * determine a function to normalize file names for the
 * file system in the specified path.
 * The second parameter can be used to specify how strict the normalization is.
 * Ideally you want everything but that makes the function slower and this function may
 * be called a lot. Oftentimes the source of the input path already guarantees some
 * normalization anyway.
 *
 * @param {string} path
 * @returns {Promise<Normalize>}
 */
declare function getNormalizeFunc(testPath: string, parameters?: INormalizeParameters): Promise<Normalize>;
export default getNormalizeFunc;
