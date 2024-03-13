// @ts-check

import { $, render } from "../../utils/render";
import {
  Figures,
  VideoFigures,
  Infos,
  activateVideoContolButtons,
} from "../../components/Features";
import template from "./Camera.html";
import cameraHardware from "../../../assets/images/camera_hardware.png";
import centerStage from "../../../assets/videos/center-stage.mp4";
import cameraEdit from "../../../assets/images/camera_edit.jpg";

const stageVideoFigures = {
  title: "촬영에서 편집 공유까지 한 기기에서.",
  imgSrc: cameraHardware,
  imgAlt: "iPad의 영상 통화 중 센터 스테이지 기능이 사용되는 예시",
  videoSrc: centerStage,
  figcaptions: "센터 스테이지 덕분에 영상 통화도 더 자연스럽게",
};

const stageInfos = [
  {
    icon: "center-stage",
    paragraph: `센터 스테이지 기술이 영상 통화 시 당신이 언제나 화면 중앙에 있도록 자동으로 카메라를 조정해 줍니다.
                덕분에 서로에게 더 집중할 수 있게 되죠. SNS에 올릴 재미난 동영상을 만들 때도 요긴하답니다.`,
  },
];

const editInfos = [
  {
    icon: "front-camera",
    paragraph: `12MP 울트라 와이드 전면 카메라는 센터 스테이지 기술뿐만 아니라 엄청나게 향상된 이미지 화질을 자랑합니다.
                덕분에 더욱 훌륭한 셀카와 단체 사진도 찍을 수 있죠.`,
  },
  {
    icon: "back-camera",
    paragraph: `iPad 후면에 탑재된 8MP 와이드 카메라는 선명하고 또렷한 사진과 동영상을 담을 수 있습니다.`,
  },
  {
    icon: "scan",
    paragraph: `다재다능한 후면 카메라로 문서를 스캔하고 몰입감 넘치는 AR 앱을 즐길 수도 있습니다.`,
  },
];

const editFigures = {
  imgSrc: cameraEdit,
  imgAlt: "사진 앱에서 편집되고 있는 이미지",
  figcaptions: "사진도 동영상도 찍고 편집하고",
};

const container = $("main section.camera");

render(container)(template);
render($("div.stage"))(
  VideoFigures({ ...stageVideoFigures }) + Infos(stageInfos),
);
render($("div.edit"))(Infos(editInfos, "center") + Figures({ ...editFigures }));
activateVideoContolButtons("div.stage");
