import accessories from "../../assets/images/accessories.jpg";

export const accessoriesFigures = {
  title: "손으로 쓰거나 키보드로 치거나.",
  imgSrc: accessories,
  imgAlt:
    "Smart Keyboard와 Apple Pencil이 갖춰진 iPad에서 Split View로 Mail 앱의 이메일과 메모 앱의 손글씨 필기",
  figcaptions: [
    `<div class="caption-memo">이메일도 타이핑 하고 손글씨 메모도 적고</div>`,
    `<div class="caption-supports">SMART KEYBOARD 및 APPLE PENCIL 지원</div>`,
  ],
};

export const accessoriesInfos = [
  {
    icon: "pencil",
    paragraph: `Apple Pencil은 실제 펜으로 종이에 쓰듯 자연스러운 느낌을 선사합니다.
                동시에 당신의 손글씨를 키보드로 입력한 텍스트만큼이나 강력하게 만들어주는
                탁월한 역량을 자랑하죠.<sup><a href="#footnote4">4</a></sup>`,
  },
  {
    icon: "keyboard",
    paragraph: `얇고 가벼운 Smart Keyboard를 부착해 편안하게 타이핑하세요.
                리포트 작성, 업무 기획 등에 딱이죠.`,
  },
  {
    icon: "notes",
    paragraph: `Apple Pencil을 활용해 기억에 남는 메모를 끄적이고, 멋진 예술 작품을 만들고,
                스크린샷에 마킹하는 등 실로 다양한 일을 할 수 있답니다.`,
    links: [{ text: "Apple Pencil에 대해 더 알아보기" }],
  },
  {
    icon: "covers",
    paragraph: `Smart Keyboard는 접으면 어딜 가든 iPad를 보호해주는
                슬림하고 가벼운 커버가 되어줍니다.<sup><a href="#footnote4">4</a></sup>`,
    links: [{ text: "Smart Keyboard에 대해 더 알아보기" }],
  },
];
