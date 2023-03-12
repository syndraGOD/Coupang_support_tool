function GetEoc(document_root) {
  let result = {
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

  Array.from(document.querySelectorAll("td")).find((el) => {
    if (el.innerText == "축약형 주문 ID") result.user_food_short = textCut(el);
    if (el.innerText == "고유 주문 ID") result.user_food_long = textCut(el);
    if (el.innerText == "스토어 ID") result.store_id = textCut(el);
    if (el.innerText == "회원 번호") result.user_id = textCut(el);
    if (el.innerText == "회원 이메일") result.user_email = textCut(el);
    if (el.innerText.includes("ETA 1")) {
      [eta1, eta1_ng1, eta1_ng2] = textCut(el, 0).split(" / ");
      result.eta1 = eta1;
      result.eta2 = eta1_ng1;
      
    }
    /*     if (el.innerText == "결제 금액") {
      result.user_pay = textCut(el).split("\n")[1].split(" ")[1];
      console.log(textCut(el), result.user_pay);
    } */

    if (el.innerText == "이름") {
      result.store_name = textCut(el, 0);
      /* 스토어 전화번호 */
      result.store_call = textCut(
        el.parentElement.nextElementSibling.firstChild
      );
    }
    if (el.innerText == "수령인") result.user_you = textCut(el);
    if (el.innerText == "쿠리어 ID") result.rider_id = textCut(el);
    if (el.innerText == "쿠리어명") {
      result.rider_name = textCut(el);
      /* 쿠리어 전화번호 */
      result.rider_call = textCut(
        el.parentElement.nextElementSibling.firstChild
      );
    }
    if (el.innerText == "EDP지불금") result.rider_pay = textCut(el);
    if (el.innerText == "이메일") result.rider_email = textCut(el);
    if (el.innerText == "지번 주소") result.user_location = textCut(el);
    if (el.innerText == "생성시간") result.buytime = textCut(el);
    if (el.innerText == "주소") result.store_loc = textCut(el);
  });
  Array.from(document.querySelectorAll("li")).find((el) => {
    if (el.innerText.includes("판매가격")) {
      temp = el.innerText.split(":")[1];
      result.user_pay = temp.replace(" ", "");
    }
  });

  return result;
}

function textCut(el, op = 1) {
  if (op == 1) return el.nextElementSibling.innerText.replace(" ", "");
  if (op == 0) return el.nextElementSibling.innerText;
}

chrome.runtime.sendMessage({
  action: "Eoc_data",
  source: GetEoc(document),
});
