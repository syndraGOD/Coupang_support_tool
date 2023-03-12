function GetAhri(document_root) {
  let user_name = "",
    user_number = "",
    user_email = "",
    user_code = "",
    temp = "";
  Array.from(document.querySelectorAll("div")).find((el) => {
    if (el.className.includes("MemberName")) {
      user_name = el.innerText;
    }
    if (el.className.includes("MemberDescription")) {
      temp = el.innerText;
    }
  });
  [user_number, user_email, trash, user_code] = temp.split("\n");
  /* return user_name; */
  return {
    user_name: user_name,
    user_number: user_number,
    user_email: user_email,
    user_code: user_code,
  };
}

chrome.runtime.sendMessage({
  action: "Ahri_data",
  source: GetAhri(document),
});
