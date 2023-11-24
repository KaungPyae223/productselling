export const menuslide = {
  initial: {
    x: "calc(100% + 100px)",
  },
  enter: {
    x: "0%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slide = {
  initial: {
    x: "80px",
  },
  enter: (i) => ({
    x: "0px",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i) => ({
    x: "80px",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};
export const textRight = {
  initial: {
    x: "100%",
  },
  enter: {
    x: "0px",
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.2 },
  },
};
export const textLeft = {
  initial: {
    x: "-100%",
    opacity: 0,
  },
  enter: (i) => ({
    x: "0px",
    opacity: 1,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.2 * i },
  }),
};

export const FadeIn = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
  },
};
export const PageChange = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
};
export const CardUp = {
  initial: {
    y: 200,
    opacity: 0,
  },
  enter: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 * i },
  }),
};
export const Categoryfade = {
  initial: {
    opacity: 0,
  },
  enter: (i) => ({
    opacity: 1,
    transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1], delay: 0.1 * i },
  }),
};
export const CraftAppear = {
  initial: {
    x: "100%",
  },
  enter: {
    x: 0,
    transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] },
  },
};
export const CraftItemAnimation = {
  initial: {
    x: 300,
  },
  enter: (i) => ({
    x: 0,
    transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1], delay: 0.1 * i },
  }),
};
