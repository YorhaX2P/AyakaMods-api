import { IInstallResult } from './IInstallResult';
import Promise from 'bluebird';
export declare type ProgressDelegate = (perc: number) => void;
export declare type InstallFunc = (files: string[], destinationPath: string, gameId: string, progressDelegate: ProgressDelegate, choices?: any, unattended?: boolean, archivePath?: string) => Promise<IInstallResult>;
