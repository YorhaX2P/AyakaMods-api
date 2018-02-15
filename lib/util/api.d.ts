/// <reference types="i18next" />
export * from './message';
export * from './storeHelper';
import { resolveCategoryName, resolveCategoryPath } from '../extensions/category_management';
import { getGame, getGames } from '../extensions/gamemode_management';
import deriveModInstallName from '../extensions/mod_management/modIdManager';
import renderModName from '../extensions/mod_management/util/modName';
import sortMods from '../extensions/mod_management/util/sort';
import { Archive } from './archives';
import AsyncComponent from './AsyncComponent';
import copyRecursive from './copyRecursive';
import { NotSupportedError, ProcessCanceled, UserCanceled } from './CustomErrors';
import Debouncer from './Debouncer';
import delayed from './delayed';
import runElevated from './elevated';
import { terminate } from './errorHandling';
import { extend } from './ExtensionProvider';
import getNormalizeFunc, { Normalize } from './getNormalizeFunc';
import { getCurrentLanguage } from './i18n';
import LazyComponent from './LazyComponent';
import lazyRequire from './lazyRequire';
import makeReactive from './makeReactive';
import ReduxProp from './ReduxProp';
import relativeTime from './relativeTime';
import steam, { ISteamEntry } from './Steam';
import runThreaded from './thread';
import { bytesToString, copyFileAtomic, isNullOrWhitespace, removePersistent, setdefault } from './util';
import walk from './walk';
export { Archive, AsyncComponent, bytesToString, copyFileAtomic, copyRecursive, Debouncer, delayed, deriveModInstallName as deriveInstallName, extend, getCurrentLanguage, getGame, getGames, getNormalizeFunc, isNullOrWhitespace, LazyComponent, lazyRequire, makeReactive, Normalize, NotSupportedError, ProcessCanceled, ReduxProp, relativeTime, removePersistent, renderModName, resolveCategoryName, resolveCategoryPath, runElevated, runThreaded, setdefault, sortMods, steam, ISteamEntry, terminate, UserCanceled, walk };
export declare type TextGroup = 'mod';
import * as I18next from 'i18next';
export declare function getText(group: TextGroup, textId: string, t: I18next.TranslationFunction): any;
