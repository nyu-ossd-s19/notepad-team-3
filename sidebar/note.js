var myWindowId;
var backgroundColor;
const contentBox = document.querySelector("#content");
let colorChoice = document.getElementById("colorInput");


//update background color of sticky when user closes color picker
colorChoice.addEventListener("change", function(){
  backgroundColor= colorChoice.value;
  updateContent();
});

//update background color of sticky as user presses new color in color picker
colorChoice.addEventListener("input", function(){
  backgroundColor= colorChoice.value;
  updateContent();
});


window.addEventListener("mouseover", () => {
  contentBox.setAttribute("contenteditable", true);
});

window.addEventListener("mouseout", () => {
  contentBox.setAttribute("contenteditable", false);
  browser.tabs.query({windowId: myWindowId, active: true}).then((tabs) => {
    let contentToStore = {};
    contentToStore[tabs[0].url] = contentBox.textContent;
    browser.storage.sync.set(contentToStore);
  });
});

function updateContent() {
  browser.tabs.query({windowId: myWindowId, active: true})
    .then((tabs) => {
      contentBox.style.backgroundColor = backgroundColor;
      document.body.style.backgroundColor = backgroundColor;
      return browser.storage.sync.get(tabs[0].url);
    })
    .then((storedInfo) => {
      contentBox.textContent = storedInfo[Object.keys(storedInfo)[0]];
    });
}




browser.tabs.onActivated.addListener(updateContent);

browser.tabs.onUpdated.addListener(updateContent);

browser.windows.getCurrent({populate: true}).then((windowInfo) => {
  myWindowId = windowInfo.id;
  updateContent();

});
