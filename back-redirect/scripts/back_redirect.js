window.onload = function() {
  // change to github state
  window.history.replaceState({}, "Roman's Github", "#github");
  // then add the document to the history
  window.history.pushState({}, "", location.pathname);

  window.addEventListener("popstate", function() {
    if(location.hash === "#github") {
      location.replace("https://github.com/RomanADavis");
    }
  });
};
