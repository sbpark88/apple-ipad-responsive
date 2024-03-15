import privacy from "../../assets/images/privacy.jpg";

export const privacyInfos = [
  {
    paragraph: `다른 모든 Apple 제품과 마찬가지로 iPad 역시 당신의 개인 정보 보호 및 보안을 염두에 두고 설계되었습니다.
                결코 쉽지만은 않은 작업이죠. 하지만 그런 것만이 진정한 혁신이라 우리는 믿습니다.`,
    links: [
      { text: `개인 정보 보호를 위한<br /> 우리의 노력에 대해 더 알아보기` },
    ],
  },
];

export const privacyFigures = {
  imgSrc: privacy,
  imgAlt: "Safari에 표시",
  figcaptions: [
    `<div class="caption-apple-id">Apple로 로그인</div>`,
    `<div class="caption-touch-id">지문으로 로그인하기</div>`,
  ],
};
