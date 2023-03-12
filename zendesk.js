tikket = "";
user_name = "";
user_call = "";
function GetZendesk(document_root) {
  Array.from(document.querySelectorAll(".ember-view.btn.active")).find((el) => {
    if (el.innerText != ""&&el.innerText.includes("티켓")) {
      tikket = el.innerText.substr(7, 9);
      user_name = el.previousElementSibling.innerText;
      console.log(el.previousElementSibling.innerText);
    }
  });
  Array.from(document.querySelectorAll("p")).find((el) => {
    if (el.innerText.includes("고객전화번호 : <<")) {
      user_call = el.innerText.split("<<")[1].split(">>")[0];
    }
  });
  return { user_tikket: tikket, user_name: user_name, user_call: user_call };
}

chrome.runtime.sendMessage({
  action: "Zendesk_data",
  source: GetZendesk(document),
});

/* 
function GetZendesk(document_root) {
  tikket = document.querySelectorAll(".ember-view.btn.active");
  tikket = "";
  tikket.forEach((element) => {
    if (element.innerText != "") {
      tikket = element.innerText.substr(7, 9);
    }
  });
  return tikket;
}

chrome.runtime.sendMessage({
  action: "Zendesk_data",
  source: GetZendesk(document),
});
 */
