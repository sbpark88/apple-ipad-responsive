// @ts-check

import { $, normalizeHTML } from "../utils/render";
import videoPlay from "../../assets/images/video-play.svg";
import videoPause from "../../assets/images/video-pause.svg";
import { eventBind } from "../utils/eventBinding";
import { toggleClassName } from "../utils/styleHelper";
import { pipe } from "../utils/fp";

/**
 * Figures Component
 * @param title {string | undefined}
 * @param imgSrc {string}
 * @param imgAlt {string}
 * @param figcaptions {string | NodeListOf<Element> | Element}
 * @returns {string}
 * @constructor
 */
export const Figures = ({ title, imgSrc, imgAlt, figcaptions }) => `
${checkTitle(title)}
<div class="figures">
  <figure>
    <img src="${imgSrc}" alt="${imgAlt}" />
    <figcaption class="bg-text">
      ${normalizeHTML(figcaptions)}
    </figcaption>
  </figure>
</div>
`;

/**
 * VideoFigures Component
 * @param title {string | undefined}
 * @param imgSrc {string}
 * @param imgAlt {string}
 * @param videoSrc {string}
 * @param figcaptions {string | NodeListOf<Element> | Element}
 * @returns {string}
 * @constructor
 */
export const VideoFigures = ({
  title,
  imgSrc,
  imgAlt,
  videoSrc,
  figcaptions,
}) => `
${checkTitle(title)}
<div class="figures">
  <figure>
    <img src="${imgSrc}" alt="${imgAlt}" />
    <div class="video-wrap">
      <video src="${videoSrc}" muted autoplay loop></video>
      <div class="controller--play hide">
        재생 <img src="${videoPlay}" alt="Play" />
      </div>
      <div class="controller--pause">
        일시정지 <img src="${videoPause}" alt="Pause" />
      </div>
    </div>
    <figcaption class="bg-text">
      ${normalizeHTML(figcaptions)}
    </figcaption>
  </figure>
</div>
`;

/**
 * Attach event listener on video play/pause buttons and return that functions.
 * @param parentEl
 * @returns {[playVideo, pauseVideo]}
 */
export const activateVideoContolButtons = (parentEl) => {
  const video = $(`${parentEl} video`);
  const playBtn = $(`${parentEl} .controller--play`);
  const pauseBtn = $(`${parentEl} .controller--pause`);

  const playVideo = () => video.play();
  const pauseVideo = () => video.pause();
  const [hidePlay, showPlay] = toggleClassName({
    $el: playBtn,
    className: "hide",
  });
  const [hidePause, showPause] = toggleClassName({
    $el: pauseBtn,
    className: "hide",
  });

  const play = pipe(playVideo, hidePlay, showPause);
  const pause = pipe(pauseVideo, hidePause, showPlay);

  eventBind({ $el: playBtn, listener: play });
  eventBind({ $el: pauseBtn, listener: pause });

  return [play, pause];
};

/**
 * Infos Component
 * @param infos { {icon: string, paragraph: string}[]}
 * @param position {string | undefined} - undefined(default), center, end
 * @returns {string}
 * @constructor
 */
export const Infos = (infos, position) => `
<div class="infos ${position ? `infos--${position}` : ``}">
  ${normalizeHTML(infos.map((info) => Info({ ...info })))}
</div>
`;

/**
 * Info Component
 * @param icon {string}
 * @param paragraph {string}
 * @returns {string}
 * @constructor
 */
const Info = ({ icon, paragraph }) => `
<div class="info observe">
  <div class="icon icon--${icon}"></div>
  <p>${paragraph}</p>
</div>
`;

const checkTitle = (title) =>
  title ? `<h1 class="bg-text">${title}</h1>` : "";
