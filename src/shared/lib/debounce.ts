type AnyFunction = (...args: any[]) => void;

const debounce = <T extends AnyFunction>(func: T, delay: number): T => {
    let timeoutId: NodeJS.Timeout;
  
    return function (this: any, ...args: any[]) {
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    } as T;
};

export {
    debounce,
}