import {debounce} from './AppUtils';

jest.useFakeTimers();

describe('debounce', () => {
  it('delays function execution', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 500);

    debouncedFunc();
    expect(func).not.toBeCalled();

    jest.advanceTimersByTime(500);
    expect(func).toBeCalledTimes(1);
  });

  it('cancels delayed call', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 500);

    debouncedFunc();
    debouncedFunc.cancel();

    jest.advanceTimersByTime(500);
    expect(func).not.toBeCalled();
  });
});
