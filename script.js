let span = document.getElementById("span")
async function copy(value) {
  try{
    await navigator.clipboard.writeText(value);
    span.innerText = "<p>Copied</p>";
  }
  catch{
    span.innerHTML = '<p>Failed</p>';
  }

}

function Delete(website) {
  websiteName = website;
  let data = localStorage.getItem("passwords");
  let arr = JSON.parse(data);
  arrUpdated = arr.filter((objectFilter) => {
    return objectFilter.website != websiteName;
  });
  localStorage.setItem("passwords", JSON.stringify(arrUpdated));
}

function showPasswords() {
  let tb = document.querySelector("table");
  let data = localStorage.getItem("passwords");
  console.log(JSON.parse(data));
  if (data == null) {
    tb.innerHTML = "No Data to show";
  } else {
    tb.innerHTML = `<tr>
                    <th>Website</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Delete</th>
                </tr>`;

    let arr = JSON.parse(data);
    let str = "";
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];

      str += `<tr>
    <td>${element.website}</td>
    <td>${element.username}</td>
    <td>${element.password}</td>
    <td><button class= "btn" onclick = "Delete('${element.website}')" >Delete</button></td>
    </tr>`;
    }
    tb.innerHTML = tb.innerHTML + str;
  }
  username.value = "";
  website.value = "";
  password.value = "";
}


console.log("working");
showPasswords();
document.querySelector("#save").addEventListener("click", (event) => {
  event.preventDefault();
  console.log("clicked...");
  console.log(username.value, password.value);

  let passwords = localStorage.getItem("passwords");
  console.log(passwords);

  if (passwords == null) {
    let json = [];
    json.push({
      website: website.value,
      username: username.value,
      password: password.value,
    });
    alert("password saved");
    localStorage.setItem("passwords", JSON.stringify(json));
  } else {
    let json = JSON.parse(localStorage.getItem("passwords"));
    json.push({
      website: website.value,
      username: username.value,
      password: password.value,
    });
    alert("password saved");
    localStorage.setItem("passwords", JSON.stringify(json));
  }
  showPasswords();
});

// save butoon
let saveButton = document.getElementById("save");
function mouseOverOnSaveButton() {
  saveButton.style.padding = "20px";
  saveButton.style.cssText = "scale :1.3; ";
}

function mouseOutOnSaveButton() {
  saveButton.style.padding = "10px";
  saveButton.style.cssText = "scale:1;";
}
saveButton.addEventListener("mouseover", mouseOverOnSaveButton);
saveButton.addEventListener("mouseout", mouseOutOnSaveButton);

