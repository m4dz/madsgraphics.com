(function( Raphael, data, undefined ) {
  'use strict';

  var el,
      width,
      height,
      paper,
      timeline;

  function init() {
    el = document.getElementById('rtimeline');
    width = el.offsetWidth;
    height = el.offsetHeight;

    paper = new Raphael(el, width, height);
    drawTimeline();
  }

  function drawTimeline() {
    var tab_width = width / data.tabs.length;

    timeline = paper.rect(0, height/2 - 1, width, 2);
    timeline.attr({
      fill: '#ccc',
      stroke: 'none'
    });

    for(var i = 0; i < data.tabs.length; i++) {
      paper
        .rect(tab_width * (i+1), height/2 - 1, 1, 20)
        .attr({
          fill: '#ccc',
          stroke: 'none'
        });

      paper
        .text(tab_width * i + tab_width / 2 - 14, height/2 + 14, data.tabs[i])
        .attr({
          fill: '#545454'
        });
    }
  }

  function _setDate(date) {

  }

  window.addEventListener('load', init, false);

})(Raphael, tldata);
