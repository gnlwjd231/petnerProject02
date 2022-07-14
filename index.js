$(document).ready(function () {
  $("td.comment-textarea textarea").on("keyup keypress", function () {
    const absoluteTop =
      window.pageYOffset + $(this)[0].getBoundingClientRect().top;

    if (
      $(this).height() + absoluteTop >
      $(".savebtn-container > button").position().top + 10
    ) {
      console.log("넘어갔다");
      $(this).height(
        $(".savebtn-container > button").position().top + 10 - absoluteTop
      );
      $(this).css("overflow-y", "scroll");
    } else if (
      $(this).height() + absoluteTop + 1 <
      $(".savebtn-container > button").position().top + 10
    ) {
      console.log(this.scrollHeight);
      console.log("작다");
      $(this).css("overflow-y", "hidden");
      $(this).height(0);
      $(this).height(this.scrollHeight - 35);
    }
  });

  $("td.comment-textarea textarea").on({
    focusin: function () {
      const absoluteTop =
        window.pageYOffset + $(this)[0].getBoundingClientRect().top;
      $(this).css("overflow-y", "hidden");
      $(this).height(this.scrollHeight - 35);
      if (
        $(this).height() + absoluteTop >
        $(".savebtn-container > button").position().top + 10
      ) {
        $(this).css("overflow-y", "auto");
        $(this).height(
          $(".savebtn-container > button").position().top + 10 - absoluteTop
        );
      }
    },
    focusout: function () {
      $(this).css("overflow-y", "hidden");
      $(this).scrollTop(this);
      $(this).height(16);
    },
  });
});
