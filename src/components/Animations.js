import gsap, { TimelineLite } from "gsap";

const easeIO = "power4.inOut";
const easeO = "power4.out";
const easeI = "power4.in";

export const rotateTxt = (el1, el2, el3, el4) => {
  gsap
    .timeline({ repeat: -1 })
    .from(el1, {
      duration: 1.2,
      ease: easeO,
      y: "-100%"
    })
    .to(el1, {
      duration: 1.2,
      ease: easeI,
      y: "100%"
    })
    .from(el2, {
      duration: 1.2,
      ease: easeO,
      y: "-100%"
    })
    .to(el2, {
      duration: 1.2,
      ease: easeI,
      y: "100%"
    })
    .from(el3, {
      duration: 1.2,
      ease: easeO,
      y: "-100%"
    })
    .to(el3, {
      duration: 1.2,
      ease: easeI,
      y: "100%"
    })
    .from(el4, {
      duration: 1.2,
      ease: easeO,
      y: "-100%"
    })
    .to(el4, {
      duration: 1.2,
      ease: easeI,
      y: "100%"
    });
};

export const fromRight = (el1, el2, el3, el4) => {
  gsap.from([el1, el2, el3, el4], {
    duration: 1,
    x: 100,
    opacity: 0,
    ease: easeIO,
    stagger: {
      amount: 0.7
    }
  });
};

export const imgReveal = el1 => {
  gsap.from(el1, {
    delay: 1,
    duration: 1,
    opacity: 0,
    ease: "power4.inOut"
  });
};

export const graphReveal = (el1, el2) => {
  gsap.from([el1, el2], {
    duration: 1.2,
    x: "-100%",
    ease: "power4.inOut",
    stagger: {
      amount: 0.2
    }
  });
};

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

export const fadeInRight = el => {
  gsap.from(el, {
    x: 100,
    duration: 0.8,
    opacity: 0,
    ease: easeIO,
    stagger: {
      amount: 0.2
    }
  });
};
