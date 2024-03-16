import powerMultipleApps from "../../assets/images/power_multiple_apps.png";
import powerArcade from "../../assets/images/power_arcade.png";
import powerCreate from "../../assets/images/power_create.jpg";

export const multipleAppsFigures = {
  imgSrc: powerMultipleApps,
  imgAlt: "Keynote 마크업과 메시지가 함께 표시된 Split View",
  figcaptions: "동시에 여러 앱 사용 가능",
};

export const arcadeFigures = {
  imgSrc: powerArcade,
  imgAlt: "iPad에 Wonderbox 앱이 열려 있는 모습",
  figcaptions: "신나게 즐기는 새로운 Apple Arcade 게임",
};

export const arcadeInfos = [
  {
    icon: "chip",
    paragraph:
      "A13 Bionic 칩이 메시지 전송, 인터넷 서핑, 여러 앱 동시에 사용하기 등 모든 작업에 더욱 탁월한 반응성을 더해줍니다.",
  },
  {
    icon: "faster",
    paragraph:
      "최대 20% 빨라진 GPU로 뛰어난 그래픽 성능을 선사합니다. 몰입감 넘치는 게임 등 더 많은 것을 즐기는 데 안성맞춤이죠.",
  },
];

export const createFigures = {
  imgSrc: powerCreate,
  imgAlt: "Procreate에서 Apple Pencil로 그림이 그려져 있는 모습",
  figcaptions: "스케치하고, 그리고, 색칠하고",
};

export const createInfos = [
  {
    icon: "neural",
    paragraph:
      "더욱 강력해진 Neural Engine이 iPadOS 15의 라이브 텍스트와 같은 머신 러닝 기반 기능을 구현해줍니다.",
  },
  {
    icon: "apps",
    paragraph:
      "A13 Bionic 칩은 Adobe Fresco, Procreate와 같은 첨단 앱도 거뜬히 구동합니다.",
  },
  {
    icon: "battery",
    paragraph: `온종일 가는 배터리를 갖춘 iPad. 당신이 열공 모드일 때도,
      게임 삼매경에 빠져 있을 때도 늘 함께할 준비가 되어 있습니다.<sup><a href="#footnote1">1</a></sup>`,
  },
];
