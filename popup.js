function btn1() {
  copy_str = [
    `[스토어손실보상]\n`,
    `ㅁ 접수일 : ${
      String(noww.getFullYear()) +
      "-" +
      String(noww.getMonth() + 1) +
      "-" +
      String(noww.getDate())
    }\n`,
    `ㅁ 접수자_사번 : ${my_code}\n`,
    `ㅁ 고유 주문 ID : ${Data_eoc.user_food_long}\n`,
    `ㅁ 축약형 주문 ID : ${Data_eoc.user_food_short}\n`,
    `ㅁ 젠데스크 티켓 ID: #${Data_zendesk.user_tikket}\n`,
    `ㅁ 스토어 ID : ${Data_eoc.store_id}\n`,
    `ㅁ 회원번호 : ${Data_eoc.user_id}\n\n`,

    `ㅁ 스토어 명 : ${Data_eoc.store_name}\n`,
    `ㅁ 귀책주체 : 쿠팡이츠\n`,
    `ㅁ 손실금액 : ${Data_eoc.user_pay}\n`,
    `ㅁ 손실 메뉴명 : 전체\n`,
    `ㅁ 지급 요청 사유 : 배달파트너 미배정으로 인한 배달지연 [최종-최초 ${Data_eoc.eta2}분] / 고객요청에 따라 취소\n`,
    `ㅁ 스토어안내 : Y\n\n`,

    `ㅁ EDP ID : \n`,
    `ㅁ EDP 배달료 : \n`,
    `ㅁ EDP 귀책수긍여부 : \n`,
    `ㅁ EDP 컨택여부 : \n`,
  ];
  result_str = "";
  for (let i of copy_str) result_str += i;
  navigator.clipboard.writeText(result_str);
}
function btn2() {
  copy_str = [
    `[스토어손실보상]\n`,
    `ㅁ 접수일 : ${
      String(noww.getFullYear()) +
      "-0" +
      String(noww.getMonth() + 1) +
      "-" +
      String(noww.getDate())
    }\n`,
    `ㅁ 접수자_사번 : ${my_code}\n`,
    `ㅁ 고유 주문 ID : ${Data_eoc.user_food_long}\n`,
    `ㅁ 축약형 주문 ID : ${Data_eoc.user_food_short}\n`,
    `ㅁ 젠데스크 티켓 ID: #${Data_zendesk.user_tikket}\n`,
    `ㅁ 스토어 ID : ${Data_eoc.store_id}\n`,
    `ㅁ 회원번호 : ${Data_eoc.user_id}\n\n`,

    `ㅁ 스토어 명 : ${Data_eoc.store_name}\n`,
    `ㅁ 귀책주체 : EDP\n`,
    `ㅁ 손실금액 : ${Data_eoc.user_pay}\n`,
    `ㅁ 손실 메뉴명 : 전체\n`,
    `ㅁ 지급 요청 사유 : 음식 미수령, 재주문, EDP귀책 인정\n`,
    `ㅁ 스토어안내 : Y\n\n`,

    `ㅁ EDP ID : ${Data_eoc.rider_id}\n`,
    `ㅁ EDP 배달료 ${Data_eoc.rider_pay}: \n`,
    `ㅁ EDP 컨택여부 : Y\n`,
    `ㅁ EDP 귀책수긍여부 : Y\n`,
  ];
  result_str = "";
  for (let i of copy_str) result_str += i;
  navigator.clipboard.writeText(result_str);
}
function btn3() {
  copy_str = [
    `[쿠폰수기발급 요청]\n`,
    `- 접수일 : ${
      String(noww.getFullYear()) +
      "-0" +
      String(noww.getMonth() + 1) +
      "-" +
      String(noww.getDate())
    }\n`,
    `- 접수자_사번 : ${my_code}\n`,
    `- 고유 주문 ID : ${Data_eoc.user_food_long}\n`,
    `- 젠데스크 티켓 ID: #${Data_zendesk.user_tikket}\n`,
    `- 스토어 ID : ${Data_eoc.store_id}\n`,
    `- 회원번호 : ${Data_eoc.user_id}\n`,
    `- 회원이메일 : ${Data_eoc.user_email}\n`,
    `- 귀책주체 : 쿠팡이츠\n`,
    `- 지급금액 : 원\n`,
    `- 지급사유 : 부분취소불가 쿠폰 환급\n`,
    `- 유효기간: 6개월\n`,
    `- 비용승인자 : 김규영팀장님\n`,
  ];
  result_str = "";
  for (let i of copy_str) result_str += i;
  navigator.clipboard.writeText(result_str);
}
function btn4() {
  copy_str = [
    `ㅁ <EDP 재배정 요청>\n`,
    `ㅁ 스토어 ID : ${Data_eoc.store_id}\n`,
    `ㅁ 고유 주문 ID : ${Data_eoc.user_food_long}\n`,
    `ㅁ 축약형 주문 ID : ${Data_eoc.user_food_short}\n`,
    `ㅁ 내용 : EDP 배정거절 반복 / 고객 배달시간 불만 / 긴급\n`,
  ];
  result_str = "";
  for (let i of copy_str) result_str += i;
  navigator.clipboard.writeText(result_str);
}
function btn5() {
  copy_str = [
    `[EDP 부재 컨택 요청건 _ HS]\n`,
    `ㅁ 접수일 : ${
      String(noww.getFullYear()) +
      "-0" +
      String(noww.getMonth() + 1) +
      "-" +
      String(noww.getDate())
    }\n`,
    `ㅁ 접수자_사번 : ${my_code}\n`,
    `ㅁ 상담번호(티켓번호) : #${Data_zendesk.user_tikket}\n`,
    `ㅁ 축약형 주문 ID : ${Data_eoc.user_food_short}\n`,
    `ㅁ 고유 주문 ID : ${Data_eoc.user_food_long}\n`,
    `ㅁ 회원번호 : ${Data_eoc.user_id}\n`,
    `ㅁ 수령인 : ${Data_eoc.user_you}\n`,
    `ㅁ 배달파트너 ID : ${Data_eoc.rider_id}\n`,
    `ㅁ 배달파트너명: ${Data_eoc.rider_name}\n`,
    `ㅁ 배달파트너 전화번호 : ${Data_eoc.rider_call}\n`,
    `ㅁ 고객 요청사항 : \n`,
    `ㅁ EDP 컨택 횟수 : 2회 OB / 부재\n`,
  ];
  result_str = "";
  for (let i of copy_str) result_str += i;
  navigator.clipboard.writeText(result_str);
}
function btn6() {
  copy_str = [
`[직연동스토어 재배달요청건]\n`,
`■접수자_사번: ${my_code}\n`,
`■스토어명 : ${Data_eoc.store_name}\n`,
`■스토어ID : ${Data_eoc.store_id}\n`,
`■스토어주소 : ${Data_eoc.store_loc}\n`,
`■주문번호 : ${Data_eoc.user_food_long}\n`,
`■재배달필요한 메뉴 : 전체\n`,
`■수령인 : ${Data_ahri.user_name}\n`,
`■수령인 전화번호 : ${Data_ahri.user_number}\n`,
`■연락처 제공 동의 여부 : Y\n`,
`■배달주소 : ${Data_eoc.user_location}\n`,
`■내용 및 배달요청사항 : \n`,
  ];
  result_str = "";
  for (let i of copy_str) result_str += i;
  navigator.clipboard.writeText(result_str);
}
function btn7() {
  copy_str = [
    `[배달지 변경요청]\n`,
    `ㅁ 날짜 : ${
      String(noww.getFullYear()) +
      "-0" +
      String(noww.getMonth() + 1) +
      "-" +
      String(noww.getDate())
    }\n`,
    `ㅁ 티켓번호 : #${Data_zendesk.user_tikket}\n`,
    `ㅁ 축약형 주문 ID : ${Data_eoc.user_food_short}\n`,
    `ㅁ 고유 주문 ID : ${Data_eoc.user_food_long}\n`,
    `ㅁ 회원번호 : ${Data_eoc.user_id}\n`,
    `ㅁ 수령인 : ${Data_eoc.user_you}\n\n`,

    `ㅁ 배달파트너 ID : ${Data_eoc.rider_id}\n`,
    `ㅁ 배달파트너명: ${Data_eoc.rider_name}\n`,
    `ㅁ 배달파트너 전화번호 : ${Data_eoc.rider_call}\n`,
    `ㅁ 지번주소 (변경전) : ${Data_eoc.user_location}\n`,
    `ㅁ 지번주소 (변경후) : \n`,
    `ㅁ 요청사유 : \n`,
  ];
  result_str = "";
  for (let i of copy_str) result_str += i;
  navigator.clipboard.writeText(result_str);
}
function btn8() {
  copy_str = [
    `[이물질 발생]\n`,
    `ㅁ 접수일 : ${
      String(noww.getFullYear()) +
      "-0" +
      String(noww.getMonth() + 1) +
      "-" +
      String(noww.getDate())
    }\n`,
    `ㅁ 접수자_사번 : ${my_code}\n`,
    `ㅁ 젠데스크 티켓 ID : #${Data_zendesk.user_tikket}\n`,
    `ㅁ 회원번호 : ${Data_eoc.user_id}\n`,
    `ㅁ 고유 주문 ID : ${Data_eoc.user_food_long}\n`,
    `ㅁ 스토어 ID : ${Data_eoc.store_id}\n`,
    `ㅁ 식품안전센터 접수 안내 내용 : 미접수\n`,
    `ㅁ 결제 시간 : ${Data_eoc.buytime}\n`,
    `ㅁ 이물질 나온 메뉴명 : \n`,
    `ㅁ 이물질 : \n\n`,
    `ㅁ 사진여부 : \n`,
  ];
  result_str = "";
  for (let i of copy_str) result_str += i;
  navigator.clipboard.writeText(result_str);
}

function btn9() {
  copy_str = [
    `[ETA1 최종-최초 15분미경과 예외적취소공유]\n\n`,
    `ㅁ 접수일 : ${
      String(noww.getFullYear()) +
      "-0" +
      String(noww.getMonth() + 1) +
      "-" +
      String(noww.getDate())
    }\n`,
    `ㅁ 사번 : ${my_code}\n`,
    `ㅁ 티켓 : #${Data_zendesk.user_tikket}\n`,
    `ㅁ 고유 주문 ID : ${Data_eoc.user_food_long}\n`,
    `ㅁ 스토어 ID : ${Data_eoc.store_id}\n`,
    `ㅁ EDP ID : ${Data_eoc.rider_id}\n`,
    `ㅁ 사유 : 고객 2차 쿠폰까지 양해 안내 거절 + 취소 요청\n`,
  ];
  result_str = "";
  for (let i of copy_str) result_str += i;
  navigator.clipboard.writeText(result_str);
}
function btn10() {
  copy_str = [
    `[임의배달완료 처리 요청]\n\n`,
    `ㅁ 스토어 ID : ${Data_eoc.store_id}\n`,
    `ㅁ 축약형 주문 ID : ${Data_eoc.user_food_short}\n`,
    `ㅁ 고유 주문 ID : ${Data_eoc.user_food_long}\n`,
    `ㅁ 사유 : \n`,
  ];
  result_str = "";
  for (let i of copy_str) result_str += i;
  navigator.clipboard.writeText(result_str);
}
function btn_plus1() {
  copy_str = [
`긴급 / OB 및 추가금 지급 필요\n`,
`■ 스토어 ID : ${Data_eoc.store_id}\n`,
`■ 고유주문번호 : ${Data_eoc.user_food_long}\n`,
`■ 이관 요청 사유 :  \n`,
  ];
  result_str = "";
  for (let i of copy_str) result_str += i;
  navigator.clipboard.writeText(result_str);
}
function btn_plus1_zz() {
  copy_str = [
    `[쿠폰회수요청]\n\n`,
    `ㅁ 접수일 : ${
      String(noww.getFullYear()) +
      "-0" +
      String(noww.getMonth() + 1) +
      "-" +
      String(noww.getDate())
    }\n`,
    `ㅁ 스토어 ID : ${Data_eoc.store_id}\n`,
    `ㅁ 고유 주문 ID : ${Data_eoc.user_food_long}\n`,
    `ㅁ 축약형 주문 ID : ${Data_eoc.user_food_short}\n`,
    `ㅁ 젠데스크 티켓ID : #${Data_zendesk.user_tikket}\n`,
    `ㅁ 스토어 ID : ${Data_eoc.store_id}\n`,
    `ㅁ 회원번호 : ${Data_eoc.user_id}\n`,
    `ㅁ 회원이메일 : ${Data_eoc.user_email}\n`,
    `ㅁ 지급금액 : 5000원\n`,
    `ㅁ 회수사유 : 추가 쿠폰 발행으로 이전 쿠폰 회수\n`,
    `ㅁ 유효기간 : 14일\n`,
  ];
  result_str = "";
  for (let i of copy_str) result_str += i;
  navigator.clipboard.writeText(result_str);
}
function btn_plus2() {
  copy_str = [
    `[스토어손실보상]\n`,
    `ㅁ 접수일 : ${
      String(noww.getFullYear()) +
      "-0" +
      String(noww.getMonth() + 1) +
      "-" +
      String(noww.getDate())
    }\n`,
    `ㅁ 접수자_사번 : ${my_code}\n`,
    `ㅁ 고유 주문 ID : ${Data_eoc.user_food_long}\n`,
    `ㅁ 축약형 주문 ID : ${Data_eoc.user_food_short}\n`,
    `ㅁ 젠데스크 티켓 ID: #${Data_zendesk.user_tikket}\n`,
    `ㅁ 스토어 ID : ${Data_eoc.store_id}\n`,
    `ㅁ 회원번호 : ${Data_eoc.user_id}\n\n`,

    `ㅁ 스토어 명 : ${Data_eoc.store_name}\n`,
    `ㅁ 귀책주체 : 쿠팡이츠\n`,
    `ㅁ 손실금액 : ${Data_eoc.user_pay}\n`,
    `ㅁ 손실 메뉴명 : 전체\n`,
    `ㅁ 지급 요청 사유 : 음식 미수령, 취소재주문, EDP귀책 미인정\n`,
    `ㅁ 스토어안내 : Y\n\n`,

    `ㅁ EDP ID : ${Data_eoc.rider_id}\n`,
    `ㅁ EDP 배달료 ${Data_eoc.rider_pay}: \n`,
    `ㅁ EDP 컨택여부 : Y\n`,
    `ㅁ EDP 귀책수긍여부 : N\n`,
  ];
  result_str = "";
  for (let i of copy_str) result_str += i;
  navigator.clipboard.writeText(result_str);
}
function btn_plus3() {
  copy_str = [
    `[쿠폰수기발급 요청]\n`,
    `- 접수일 : ${
      String(noww.getFullYear()) +
      "-0" +
      String(noww.getMonth() + 1) +
      "-" +
      String(noww.getDate())
    }\n`,
    `- 접수자_사번 : ${my_code}\n`,
    `- 고유 주문 ID : ${Data_eoc.user_food_long}\n`,
    `- 젠데스크 티켓 ID: #${Data_zendesk.user_tikket}\n`,
    `- 스토어 ID : ${Data_eoc.store_id}\n`,
    `- 회원번호 : ${Data_eoc.user_id}\n`,
    `- 회원이메일 : ${Data_eoc.user_email}\n`,
    `- 귀책주체 : 쿠팡이츠\n`,
    `- 지급금액 : 5000원\n`,
    `- 지급사유 : 음식 미수령 보상 쿠폰 / 주소지 동일\n`,
    `- 유효기간: 30일\n`,
    `- 비용승인자 : 김규영팀장님\n`,
  ];
  result_str = "";
  for (let i of copy_str) result_str += i;
  navigator.clipboard.writeText(result_str);
}
function btn_plus4() {
  copy_str = [
    `<취합 기재사항> EDP 손실보상\n`,
    `ㅁ 취합일자 : ${
      String(noww.getFullYear()) +
      "-0" +
      String(noww.getMonth() + 1) +
      "-" +
      String(noww.getDate())
    }\n`,
    `ㅁ 주문일자 : ${
      String(noww.getFullYear()) +
      "-0" +
      String(noww.getMonth() + 1) +
      "-" +
      String(noww.getDate())
    }\n`,
    `ㅁ 주문 지역구 (스토어 기준) : ${Data_eoc.buytime.store_loc}\n`,
    `ㅁ 접수자_사번 : ${my_code}\n`,
    `ㅁ 축약형 주문 ID : ${Data_eoc.user_food_short}\n`,
    `ㅁ 고유 주문 ID : ${Data_eoc.user_food_long}\n`,
    `ㅁ 젠데스크 티켓 ID: #${Data_zendesk.user_tikket}\n`,
    `ㅁ EDP ID : ${Data_eoc.rider_id}\n`,
    `ㅁ 신청유형 : 픽업 후 주문취소\n`,
  ];
  result_str = "";
  for (let i of copy_str) result_str += i;
  navigator.clipboard.writeText(result_str);
}
function btn_plus5() {
  copy_str = [
    `[주문하지않은 음식 회수요청]\n`,
    `■ 회수 주소지 : \n`,
    `■ 공동현관 비밀번호 : -\n`,
    `■ 문앞보관여부 : O\n`,
    `■ 고객 요청사항 : EDP 음식 자체 폐기, 빠른 회수 요청\n`,
    `■ 확인된 주문번호 : ${Data_eoc.user_food_long}\n`,
  ];
  result_str = "";
  for (let i of copy_str) result_str += i;
  navigator.clipboard.writeText(result_str);
}
function sms_1(mount) {
  copy_str = `안녕하세요, 고객님
쿠팡이츠 고객센터입니다.

  이용과정에 불편을 드려 죄송함의 의미로 이츠에서 결제시
  사용 가능한 ${mount}원 쿠폰을 발행중입니다.
  쿠폰은 D+1일 내에 발급완료되며
  쿠팡이츠-My이츠-할인쿠폰에서 금액과 사용기간 확인 가능합니다.

추가 문의 사항이 있으신 경우 고객센터로 연락 바랍니다.
■ 고객센터 : 1670-9827
■ 운영시간 : 오전 06:00 ~ 새벽 03:00(연중무휴)
감사합니다.
쿠팡이츠 드림`;
  result_str = copy_str;
  navigator.clipboard.writeText(result_str);
}

function sms_2() {
  copy_str = `안녕하세요, 고객님
쿠팡이츠 고객센터입니다.
  고객님께서 요청하신 취소접수가 완료되어영업일 기준 최대 3~7일 내 결제수단에 따른 승인취소가 진행될 예정입니다.
  
  앞으로도 '한집 한배달'로 고객님이 어디 계시든 갓 조리한 음식 본연의 맛을 즐기실 수 있도록 노력하는 쿠팡이츠가 되겠습니다.

추가 문의 사항이 있으신 경우 고객센터로 연락 바랍니다.
■ 고객센터 : 1670-9827
■ 운영시간 : 오전 06:00 ~ 새벽 03:00(연중무휴)
감사합니다.
쿠팡이츠 드림`;
  result_str = copy_str;
  navigator.clipboard.writeText(result_str);
}
function sms_3() {
  copy_str = `안녕하세요, 고객님
쿠팡이츠 고객센터입니다.
  고객님의 주문 건은 스토어의 요청에 따라 재주문 처리되었습니다. 
  최대한 신속히 배달될 수 있도록 노력하겠습니다.
추가 문의 사항이 있으신 경우 고객센터로 연락 바랍니다.
■ 고객센터 : 1670-9827
■ 운영시간 : 오전 06:00 ~ 새벽 03:00(연중무휴)
감사합니다.
쿠팡이츠 드림`;
  result_str = copy_str;
  navigator.clipboard.writeText(result_str);
}
function sms_4() {
  copy_str = `안녕하세요, 고객님
 쿠팡이츠 고객센터입니다.

추가 문의 사항이 있으신 경우 고객센터로 연락 바랍니다.
■ 고객센터 : 1670-9827
■ 운영시간 : 오전 06:00 ~ 새벽 03:00(연중무휴)
감사합니다.
쿠팡이츠 드림`;
  result_str = copy_str;
  navigator.clipboard.writeText(result_str);
}
function autofill() {
  const dt = { Data_zendesk, Data_ahri, Data_eoc };
  chrome.tabs.query({}, function (tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      { code: "var dt = " + JSON.stringify(dt) },
      function () {
        chrome.tabs.executeScript(tabs[0].id, { file: "autofill.js" }, null);
      }
    );
  });
}
function simple_copy(i) {
  if (i == "1") {
    result_str = Data_zendesk.user_name;
  }
  if (i == "2") {
    result_str = Data_zendesk.user_call;
  }
  if (i == "3") {
    result_str = Data_eoc.store_call;
  }
  if (i == "4") {
    result_str = Data_eoc.rider_name;
  }
  if (i == "5") {
    result_str = Data_eoc.rider_call;
  }
  navigator.clipboard.writeText(result_str);
}
let Data_zendesk = {
  user_tikket: "",
  user_name: "",
  user_call: "",
};
let Data_ahri = {
  user_name: "",
  user_number: "",
  user_email: "",
  user_code: "",
};
let Data_eoc = {
  user_food_short: "",
  user_food_long: "",
  user_id: "",
  user_email: "",
  user_pay: "",
  user_you: "",
  user_location: "",

  store_id: "",
  store_name: "",
  store_call: "",
  store_loc: "",

  rider_id: "",
  rider_name: "",
  rider_call: "",
  rider_email: "",
  rider_pay: "",

  eta1: "",
  eta2: "",
  buytime: "",
};
const my_name = "김한울";
const my_code = "HS000110";
const noww = new Date();
let text_box;

chrome.runtime.onMessage.addListener(function (request, sender) {
  if (request.action == "Zendesk_data") {
    Data_zendesk = request.source;
  }
  if (request.action == "Ahri_data") {
    Data_ahri = request.source;
  }
  if (request.action == "Eoc_data") {
    Data_eoc = request.source;
    const eta1_t = new Date(Data_eoc.eta1);
    const eta2_t = new Date(Data_eoc.eta2);
    eta1_s = Math.floor((noww.getTime() - eta1_t.getTime()) / (1000 * 60));
    eta2_s = Math.floor((eta2_t.getTime()-eta1_t.getTime()) / (1000 * 60));
    Data_eoc.eta1 = eta1_s
    Data_eoc.eta2 = eta2_s
    if (eta1_s >= 0) {
      text_box.style.backgroundColor = "red";
      text_box.innerText = `ETA1 ${eta1_s}분 경과`;
    }
    if (eta1_s < 0) {
      text_box.style.backgroundColor = "green";
      text_box.innerText = `ETA1 ${eta1_s}분`;
    }
    if (eta2_s >= 15) {
      text_box2.style.backgroundColor = "red";
      text_box2.innerText = `최-최  ${eta2_s}분 지연`;
    }
    if (eta2_s < 15) {
      text_box2.style.backgroundColor = "green";
      text_box2.innerText = `최-최  ${eta2_s}분 지연`;
    }

  }
});
function onWindowLoad() {
  text_box = document.querySelector("#text");
  text_box2 = document.querySelector("#text2");
  text_box.style.fontSize = "26px";
  text_box.style.color = "white";
  text_box2.style.marginTop = "6px";
  text_box2.style.marginBottom = "6px";
  text_box2.style.fontSize = "20px";
  text_box2.style.color = "white";
  document.querySelector("#btn1").addEventListener("click", btn1);
  document.querySelector("#btn2").addEventListener("click", btn2);
  document.querySelector("#btn3").addEventListener("click", btn3);
  document.querySelector("#btn4").addEventListener("click", btn4);
  document.querySelector("#btn5").addEventListener("click", btn5);
  document.querySelector("#btn6").addEventListener("click", btn6);
  document.querySelector("#btn7").addEventListener("click", btn7);
  document.querySelector("#btn8").addEventListener("click", btn8);
  document.querySelector("#btn9").addEventListener("click", btn9);
  document.querySelector("#btn10").addEventListener("click", btn10);
  document.querySelector("#btn_plus1").addEventListener("click", btn_plus1);
  document.querySelector("#btn_plus2").addEventListener("click", btn_plus2);
  document.querySelector("#btn_plus3").addEventListener("click", btn_plus3);
  document.querySelector("#btn_plus4").addEventListener("click", btn_plus4);
  document.querySelector("#btn_plus5").addEventListener("click", btn_plus5);
  document.querySelector("#autofill").addEventListener("click", autofill);
  document.querySelector("#sms_cp_1").addEventListener("click", function () {
    sms_1("1000");
  });
  document.querySelector("#sms_cp_2").addEventListener("click", function () {
    sms_1("3000");
  });
  document.querySelector("#sms_cp_3").addEventListener("click", function () {
    sms_1("5000");
  });
  document.querySelector("#sms_cp_4").addEventListener("click", function () {
    sms_1("10000");
  });
  document.querySelector("#sms_cp_5").addEventListener("click", function () {
    sms_2("");
  });
  document.querySelector("#sms_cp_6").addEventListener("click", function () {
    sms_3("");
  });
  document.querySelector("#sms_cp_7").addEventListener("click", function () {
    sms_4("");
  });
  /*   document
    .querySelector("#simple_copy_1")
    .addEventListener("click", function () {
      simple_copy("1");
    }); */

  document
    .querySelector("#simple_copy_2")
    .addEventListener("click", function () {
      simple_copy("2");
    });

  document
    .querySelector("#simple_copy_3")
    .addEventListener("click", function () {
      simple_copy("3");
    });

  /*   document
    .querySelector("#simple_copy_4")
    .addEventListener("click", function () {
      simple_copy("4");
    }); */

  document
    .querySelector("#simple_copy_5")
    .addEventListener("click", function () {
      simple_copy("5");
    });
  chrome.tabs.query({}, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, { file: "zendesk.js" }, null);
    chrome.tabs.executeScript(tabs[1].id, { file: "ahri.js" }, null);
    chrome.tabs.executeScript(tabs[2].id, { file: "eoc.js" }, null);
  });
}

window.onload = onWindowLoad;
