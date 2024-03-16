// @ts-check

import { $, render } from "../../utils/render";

const template = `
<ul>
  <li id="footnote*">
    * 보상 판매 프로그램은 Apple의 파트너이자 독립적으로 운영되는 제3의 업체에 의해 제공됩니다.
    Apple 및 Apple의 계열사는 고객과 파트너 간 계약의 당사자가 아닙니다.
    보상 판매 금액은 보상 판매되는 iPad의 상태 및 모델에 따라 달라집니다.
    19세 이상이어야 합니다.
    일부 매장에서는 본 프로그램을 이용할 수 없으며, 일부 기기는 보상 판매 대상이 아닙니다.
    Apple은 어떤 보상 판매도 거래를 거부하거나, 제한할 귄리를 보유합니다.
    새 Apple 기기 구매 시, 현재 소유한 기기의 가치만큼 할인을 받을 수도 있습니다.
    추가 약관은 apple.com/kr/trade-in을 참고하십시오.
  </li>
</ul>
<ol>
  <li id="footnote1">
    배터리 사용 시간은 사용 패턴 및 설정에 따라 다를 수 있습니다.
    자세한 내용은 apple.com/kr/batteries를 참고하십시오.
  </li>
  <li id="footnote2">직사각형 기준으로 측정했을 때, iPad 화면은 대각선 길이 기준 25.91cm입니다.</li>
  <li id="footnote3">
    데이터 요금제에 가입해야 합니다.
    Gigabit급 LTE는 일부 국가에서 일부 이동통신사를 통해 사용 가능합니다.
    속도는 이론적 처리량에 근거한 수치이며 장소 및 이동통신사에 따라 다를 수 있습니다.
    LTE 지원에 대한 자세한 내용은 이동통신사에 문의하거나
    apple.com/kr/ipad/cellular를 참고하십시오.
  </li>
  <li id="footnote4">Apple Pencil(1세대) 및 Smart Keyboard는 별도로 판매됩니다.</li>
</ol>
<ul>
  <li>앱은 App Store에서 다운로드할 수 있습니다. 각 앱의 출시 여부는 변경될 수 있습니다.</li>
  <li>AirPods(2세대) 무선 충전 케이스 모델 및 액세서리는 별도로 판매됩니다.</li>
</ul>
`;

const container = $("footer .warning");

render(container)(template);
