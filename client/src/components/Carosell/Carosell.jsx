import { useEffect, useRef, useReducer } from "react";

import './Carosell.scss';

const slides = [
  {
    title: "Machu Picchu",
    subtitle: "Peru",
    description: "Adventure is never far away",
    image:
      "./imgTeam/1.jpg"
  },
  {
    title: "Chamonix",
    subtitle: "France",
    description: "Let your dreams come true",
    image:
      "./imgTeam/2.png"
  },
  {
    title: "Mimisa Rocks",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
        "./imgTeam/3.png"

  },
  {
    title: "Four",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
        "./imgTeam/4.png"
  }
];

function useTilt(active) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0
};
const slidesReducer = (state, event) => {
    console.log(state.slideIndex);
    console.log(slides.length);
  if (event.type === "NEXT" && state.slideIndex < slides.length) {
    return {
      ...state,
      slideIndex: state.slideIndex - 1
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length + 1 : state.slideIndex + 1
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >
      {/* <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      /> */}
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}

function Carosell() {
  const [state, dispatch] = useReducer(slidesReducer, initialState);

  return (
    <div className="slides">
      <button className="Prev-Slide-Team" onClick={() => dispatch({ type: "PREV" })}>‹</button>

      {slides.map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button className="Next-Slide-Team" onClick={() => dispatch({ type: "NEXT" })}>›</button>
    </div>
  );
}

export default Carosell
