/* A design set's one link to its shell. The shell lives beside it in shell/,
 * so a page opens straight from disk with nothing to install. */
(function () {
  var me = document.currentScript, view = me.getAttribute("data-view");
  var root = me.src.replace(/shell\.js(\?.*)?$/, "");
  document.write('<script src="' + root + 'shell/boot.js" data-root="' + root + '"' +
    (view ? ' data-view="' + view + '"' : "") + "></" + "script>");
})();
