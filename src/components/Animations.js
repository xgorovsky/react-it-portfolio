import gsap, { TimelineLite } from "gsap";

const easeIO = "power4.inOut";

export const fadeInUp = el => {
  gsap.from(el, {
    y: 60,
    duration: 1.2,
    delay: 0.2,
    opacity: 0,
    ease: easeIO
  });
};

export const floatUp = (el1, el2, el3) => {
  gsap.from([el1, el2, el3], {
    duration: 0.6,
    y: 120,
    delay: 0.25,
    ease: easeIO,
    stagger: {
      amount: 0.2
    }
  });
};

export const openMenu = (el1, el2) => {
  gsap.from([el1, el2], {
    duration: 0.8,
    height: 0,
    y: -200,
    stagger: {
      amount: 0.2
    }
  });
};

export const closeMenu = (el1, el2) => {
  gsap.to([el1, el2], {
    duration: 0.7,
    height: 0,
    y: -200,
    ease: easeIO,
    stagger: {
      amount: 0.2
    }
  });
};

export const onHover = e => {
  gsap.to(e.target, {
    duration: 0.3,
    y: 3,
    transformOrigin: "top left",
    skewX: 2,
    ease: easeIO
  });
};

export const outHover = e => {
  const tl = new TimelineLite();
  tl.to(e.target, {
    duration: 0.3,
    y: -3,
    transformOrigin: "top left",
    skewX: -1,
    ease: easeIO
  }).to(e.target, {
    transformOrigin: "top left",
    skewX: 0,
    duration: 0.1,
    ease: easeIO
  });
};

export const Loading = (el, el1, el2, el3) => {
  const tl = new TimelineLite({ repeat: -1 });
  tl.to([el, el1, el2, el3], {
    duration: 0.6,
    y: 64,
    ease: easeIO,
    stagger: {
      amount: 0.3
    }
  }).to([el, el1, el2, el3], {
    duration: 0.6,
    y: 0,
    ease: easeIO,
    stagger: {
      amount: 0.3
    }
  });
};
