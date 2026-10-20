
const card = document.getElementById("card");
const message = document.getElementById("message");
const readAgain = document.getElementById("readAgain");

card.addEventListener("click", function () {
  // Không mở lại nếu thiệp đã mở
  if (card.classList.contains("open")) {
    return;
  }

  // Bắt đầu hiệu ứng mở thiệp
  card.classList.add("open");

  // Chờ thiệp mở một chút rồi hiện nội dung
  setTimeout(function () {
    message.classList.remove("hidden");

    // Cuộn đến lời chúc
    setTimeout(function () {
      message.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 100);
  }, 650);
});

// Nút đọc lại lời chúc
readAgain.addEventListener("click", function () {
  document.querySelector(".letter").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});


const showRose = document.getElementById("showRose");
const roseStage = document.getElementById("roseStage");

showRose.addEventListener("click", function () {
  roseStage.classList.add("revealed");
  roseStage.setAttribute("aria-hidden", "false");

  showRose.textContent = "Món quà dành riêng cho mẹ ♡";
  showRose.disabled = true;

  setTimeout(function () {
    roseStage.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 180);
});

