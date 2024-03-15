import iPadOsSplitView from "../../assets/images/ipados_split_view.png";
import iPadOsWidget from "../../assets/images/ipados_widgets.png";
import iPadOsQuickNote from "../../assets/images/ipados_quick_note.png";

export const iPadOsInfos = [
  {
    paragraph:
      "널찍한 Multi-Touch 디스플레이를 위해 디자인된 iPadOS는 강력하면서도 누구든 손쉽게 사용할 수 있습니다.",
  },
  {
    paragraph: `iPadOS 15는 사용하기 쉬운 멀티태스킹 기능, 정보를 검색하고 정리하는 새로운 방식,
                향상된 메모 기능 등을 통해 iPad의 성능을 한층 더 끌어올립니다.`,
    links: [{ text: "iPadOS의 새로운 기능 살펴보기" }],
  },
];

export const iPadOsFigures = [
  {
    classSuffix: "split-view",
    imgSrc: iPadOsSplitView,
    imgAlt: "Split View로 이미지를 편집하면서 Mail 앱을 사용 중인 모습",
    figcaptions: "두 개의 앱, 서로 양옆에 놓고 쓰기",
  },
  {
    classSuffix: "widgets",
    imgSrc: iPadOsWidget,
    imgAlt: "홈 화면에 표시된 위젯",
    figcaptions: "홈 화면에 바로 뜨는 위젯",
  },
  {
    classSuffix: "quick-note",
    imgSrc: iPadOsQuickNote,
    imgAlt: "Safari의 빠른 메모",
    figcaptions: "어디서나 남기는 빠른 메모",
  },
];
