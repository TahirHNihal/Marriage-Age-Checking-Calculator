const age_form = document.getElementById("age_form");
const alert = document.querySelector(".alert");
const form_wraper = document.querySelector(".form-wraper");
const result = document.querySelector("#result");

age_form.onsubmit = (event) => {
  event.preventDefault();
  // Call All Fields Value
  const name = age_form.querySelector('input[name="name"]');
  const age = age_form.querySelector('input[name="age"]');
  const gender = age_form.querySelectorAll('input[name="gender"]');

  // Get Gender Value
  let genderName = "";
  gender.forEach((item) => {
    if (item.checked) {
      genderName = item.value;
    }
  });

  let agePattern = /^[0-9]{1,3}$/;

  //From Validation
  if (name.value == "" || age.value == "" || genderName == "") {
    alert.innerHTML = setAlert("All fields are required ! ");
    // form_wraper.style.width=`800 + px`;
  } else if (agePattern.test(age.value) == false) {
    alert.innerHTML = setAlert("Your age isn't correct ! ", "warning");
  } else {
    //Marrige Function

    let mAge = genderName == "male" ? 21 : 18;


    if (genderName == "male") {
      if (age.value >= mAge) {
        result.innerHTML = `Hi, ${name.value} your age is ok for marriage`;
      } else {
        result.innerHTML = `Hi, ${name.value} your age isn't ok for marriage. You have to wait ${mAge-age.value} years`;
      }
    }else{
      if (age.value >= mAge) {
        result.innerHTML = `Hi, ${name.value} your age is ok for marriage`;
      } else {
        result.innerHTML = `Hi, ${name.value} your age isn't ok for marriage. You have to wait ${mAge-age.value} years`;
      }
    }
  }
};
