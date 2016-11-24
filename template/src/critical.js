var loadDeferredStyles = function() {
  var addStylesNode = document.getElementById('deferred-styles');
  var location = document.head.getElementsByTagName('meta')
  location[location.length - 1].insertAdjacentHTML('afterend', addStylesNode.textContent)
  addStylesNode.parentElement.removeChild(addStylesNode);
};
var raf = requestAnimationFrame || mozRequestAnimationFrame ||
    webkitRequestAnimationFrame || msRequestAnimationFrame;
if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
else window.addEventListener('load', loadDeferredStyles);