(window.CustomerPurchased = {
  setCookie: function(o, e, t) {
    var n,
      i = "";
    t && ((n = new Date()).setTime(n.getTime() + 24 * t * 60 * 60 * 1e3), (i = "; expires=" + n.toUTCString())), (document.cookie = o + "=" + (e || "") + i + "; path=/");
  },
}),
document.addEventListener("DOMContentLoaded", function() {
  for (var o = document.cookie.split(";"), e = {}, t = 0; t < o.length; t++) {
    var n = o[t].split("=");
    e[(n[0] + "").trim()] = unescape(n.slice(1).join("="));
  }
  window.location.toString().includes("thank_you") ? window.CustomerPurchased.setCookie("customer", "yes", 300));
});
