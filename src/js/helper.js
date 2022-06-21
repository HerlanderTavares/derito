export const timer = function (func, time) {
  setTimeout(() => {
    func();
  }, time);
};

export const mediaQuery = function (queryWidth, minmax = 'max', width_height = 'width') {
  const query = matchMedia(`(${minmax}-${width_height}: ${queryWidth}px)`);
  return query;
};

export const ANIMATION_TIME = 300;
export const DISPLAY_TIME = 100;
