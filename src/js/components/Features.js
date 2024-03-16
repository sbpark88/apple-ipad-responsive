// @ts-check

import { $, normalizeHTML } from "../utils/render";
import videoPlay from "../../assets/images/video-play.svg";
import videoPause from "../../assets/images/video-pause.svg";
import { eventBind } from "../utils/eventBinding";
import { toggleClassName } from "../utils/styleHelper";
import { pipe } from "../utils/fp";
import { BlockLink } from "./Common";

/**
 * Title Component
 * @param title {string}
 * @returns {string}
 * @constructor
 */
export const Title = (title) => `<h1 class="bg-text">${title}</h1>`;

/**
 * Figures Component
 * @param imgSrc
 * @param imgAlt {string}
 * @param figcaptions {(string | string[] | Element |  NodeListOf<Element>)?}
 * @returns {string}
 * @constructor
 */
export const Figures = ({ imgSrc, imgAlt, figcaptions }) => `
<div class="figures">
  <figure>
    ${Image({ imgSrc, imgAlt })}
    ${figcaptions ? Caption({ figcaptions }) : ""}
  </figure>
</div>
`;

/**
 * MultipleFigures Component
 * @param figures {{ classSuffix, imgSrc, imgAlt, figcaptions }[]}
 * @returns {string}
 * @constructor
 */
export const MultipleFigures = (figures) => `
<div class="figures">
  ${normalizeHTML(
    figures.map(
      ({ classSuffix, imgSrc, imgAlt, figcaptions }) => `
      <div class="figure-${classSuffix}">
        <figure>
          ${Image({ imgSrc, imgAlt })}
          ${Caption({ figcaptions })}
        </figure>
      </div>
      `,
    ),
  )}
</div>
`;

/**
 * VideoFigures Component
 * @param imgSrc
 * @param imgAlt {string}
 * @param videoSrc
 * @param figcaptions {string | NodeListOf<Element> | Element}
 * @returns {string}
 * @constructor
 */
export const VideoFigures = ({ imgSrc, imgAlt, videoSrc, figcaptions }) => `
<div class="figures">
  <figure>
    ${Image({ imgSrc, imgAlt })}
    ${Video({ videoSrc })}
    ${Caption({ figcaptions })}
  </figure>
</div>
`;

const Image = ({ imgSrc, imgAlt }) => `<img src="${imgSrc}" alt="${imgAlt}" />`;

const Caption = ({ figcaptions }) =>
  `<figcaption class="bg-text">${normalizeHTML(figcaptions)}</figcaption>`;

const Video = ({ videoSrc }) => `
<div class="video-wrap">
  <video src="${videoSrc}" muted autoplay loop></video>
  <div class="controller--play hide">
    재생 <img src="${videoPlay}" alt="Play" />
  </div>
  <div class="controller--pause">
    일시정지 <img src="${videoPause}" alt="Pause" />
  </div>
</div>
`;

/**
 * Attach event listener on video play/pause buttons and return that functions.
 * @param parentEl
 * @returns {[playVideo, pauseVideo]}
 */
export const activateVideoControlButtons = (parentEl) => {
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
 * @param infos { {icon: string?, paragraph: string, links: {href: string?, text: string}[]?}[]}
 * @param position {string?} - undefined(default), center, end || large
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
 * @param icon {string?}
 * @param paragraph {string}
 * @param links {{href: string?, text: string}[]?}
 * @returns {string}
 * @constructor
 */
const Info = ({ icon, paragraph, links }) => `
<div class="info observe">
  ${icon ? `<div class="icon icon--${icon}"></div>` : ""}
  <p>${paragraph}</p>
  ${links ? normalizeHTML(links.map(BlockLink)) : ""}
</div>
`;
