 export interface ActionsObject {
   [x: string]: (...args: any[]) => any;
 }

 export const bindActionsToDispatch = <T extends ActionsObject>(
   dispatch: Function,
   actions: T
 ) => {
   return Object.keys(actions).reduce(
     (boundActions, key) => {
       boundActions[key as keyof T] = (...args: Parameters<T[keyof T]>) => {
         dispatch(actions[key as keyof T](...args));
       };

       return boundActions;
     },
     {} as {
       [K in keyof T]: (...args: Parameters<T[K]>) => void;
     }
   );
 };


 



