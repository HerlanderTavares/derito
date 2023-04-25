export const viewPortHeight = () => {
  const resize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  resize();
  window.addEventListener('resize', resize);
};

export const checkProp = (prop, defaultValue = null, unit) => {
  if (unit !== undefined) {
    return prop ? prop + unit : defaultValue;
  } else {
    return prop ? prop : defaultValue;
  }
};

export const checkClass = classNameProp => (classNameProp ? ' ' + classNameProp : '');

export const css = (styles, ...classes) => `${[...classes].map(cl => eval(styles)[cl]).join(' ')}`;
