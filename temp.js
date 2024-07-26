const buttons = document.getElementsByTagName("button");

async function test() {
  for (let i = 0; i < 20; i++) {
    await new Promise((r, _) => {
      setTimeout(() => r(), 2000);
    });
    const question = document.getElementsByClassName("fr-view")[0].innerText;

    const options = document.getElementsByTagName("label");

    answer.map((ans) => {
      if (ans.question.includes(question)) {
        let btnClicked = false;
        Array.from(options).map(async (option) => {
          if (option.childNodes[1].innerText == ans.explanation.trim()) {
            option.childNodes[0].childNodes[0].childNodes[0].click();
            buttons[12].click();
            btnClicked = true;
          }
        });
        if (!btnClicked) {
          buttons[12].click();
        }
      }
    });
  }
}
