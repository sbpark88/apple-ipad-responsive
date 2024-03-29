import wirelessFacetime from "../../assets/images/wireless_facetime.jpg";
import wirelessFiles from "../../assets/images/wireless_files.png";

export const facetimeFigures = {
  imgSrc: wirelessFacetime,
  imgAlt: "19명이 참여 중인 FaceTime 영상 통화",
  figcaptions: "FACETIME으로 소통하고",
};

export const filesFigures = {
  imgSrc: wirelessFiles,
  imgAlt: "파일, iCloud Drive 선택 화면",
  figcaptions: "모든 파일 확인을 이동 중에도",
};

export const filesInfos = [
  {
    icon: "download",
    paragraph:
      "어디에서든 파일을 다운로드하고, 영화를 스트리밍하고, 동료와 협업하거나 콘텐츠를 업로드할 수 있습니다.",
  },
  {
    icon: "wifi",
    paragraph:
      "고속 Wi-Fi 덕분에 집, 직장, 학교 등 iPad와 함께하는 어디에서든 인터넷에 연결할 수 있습니다.",
  },
  {
    icon: "lte",
    paragraph: `Gigabit급 LTE 덕분에 Wi-Fi에 연결할 수 없는 경우에도 온라인 접속이 가능합니다.<sup><a href="#footnote3">3</a></sup>`,
    links: [{ text: "셀룰러에 대해 더 알아보기" }],
  },
];
