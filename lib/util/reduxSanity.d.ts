import * as Redux from 'redux';
export declare class StateError extends Error {
    private mAction;
    constructor(action: Redux.Action, message: string);
}
export declare type SanityCheck = (state: any, action: Redux.Action) => string;
export declare function reduxSanity(callback: (err: StateError) => void): (store: Redux.Store<any>) => <S>(next: Redux.Dispatch<S>) => <A extends Redux.Action>(action: A) => A;
export declare function registerSanityCheck(type: string, check: SanityCheck): void;
