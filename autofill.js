Array.from(document.querySelectorAll("label")).find((el) => {
  if (el.innerText == "주문번호") {
    if (el.nextElementSibling.value.length <= 5)
      el.nextElementSibling.value = dt.Data_eoc.user_food_long;
  }
  if (el.innerText == "스토어 ID") {
    if (el.nextElementSibling.value.length <= 4)
      el.nextElementSibling.value = dt.Data_eoc.store_id;
  }
  if (el.innerText == "문의자*") {
    if ((el.nextElementSibling.firstChild.firstChild.innerText = "-")) {
      el.nextElementSibling.firstChild.firstChild.innerText = "회원(본인)";
    }
  }
});
