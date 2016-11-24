$(function() {
  echartId('.ibox');
  startDrag($('.drag'));
});

var option;
var params = {
  left: 0,
  top: 0,
  currentX: 0,
  currentY: 0,
  flag: false
};

function startDrag(a) {
  var down_xAis, down_yAis;
  a.mousedown(function(c) {
    var type = $(this).attr('type')
      , txt = $(this).html();

    params.left = $(this).offset().left;
    params.top = $(this).offset().top;

    var html = $('<div id="drag" style="left:' + params.left + 'px;top:' + params.top + 'px;">' + txt + '</div>');
    $('body').append(html);

    params.flag = true;
    if (!c) {
      c = window.event;
      a.onselectstart = function() {
        return false
      }
    }
    var d = c;
    params.currentX = d.clientX;
    params.currentY = d.clientY;

    if (type == 'pie') option = eval('(' + option1 + ')');
    if (type == 'line') option = eval('(' + option2 + ')');

    _extend(option);

    document.onmousedown = function(h) {
      var i = h ? h : window.event;
      down_xAis = i.clientX;
      down_yAis = i.clientY;
    }
    document.onmousemove = function(h) {
      var i = h ? h : window.event;
      if (params.flag) {
        var d = i.clientX
          , c = i.clientY;

        var g = d - params.currentX
          , f = c - params.currentY;

        if (g != 0 || f != 0) {
          $('#drag').css({
            left: params.left + g + "px",
            top: params.top + f + "px"
          });
          var $obj = $('.ibox')
            , flag = false;
          for (var i = 0; i < $obj.length; i++) {
            if ($obj.eq(i).find('.ibox').length > 0) {
              continue;
            }
            var zoom = $('#echartController').css('zoom')
              , left = $obj.eq(i).offset().left * zoom
              , top = $obj.eq(i).offset().top * zoom
              , zoomW = $obj.eq(i).width() * zoom
              , zoomH = $obj.eq(i).height() * zoom;

            if (d > left && d < left * zoomW && c + $(document).scrollTop() > top && c + $(document).scrollTop() < top * zoomH) {
              flag = true;
              $obj.removeClass('add-active');
              $obj.eq(i).addClass('add-active');
            } else if (!flag && params.flag) {
              $obj.removeClass('add-active');
            }
            objID = $('.ibox.add-active').attr('id');
          }
        }
      }
    }
    document.onmouseup = function(h) {
      $('#drag').remove();
      var i = h ? h : window.event
        , g = i.clientX - down_xAis,
        , f = i.clientY - down_yAis;
      if ((g != 0 || f != 0) && params.flag) {
        if (objID) {
          new EC($('#echartController'), {
            echartObj: objID,
            option: option
          });
          _OPTIONS_[objID] = option;
          console.log(_OPTIONS_)
        }
      } else {
        return false;
      }
      params.flag = false;
    };
  });
}

function _extend(option) {
  var title = option.title || {}
    , legend = option.legend || {}
    , tooltip = option.tooltip || {}
  $.extend(title, _COMMON_.title);
  $.extend(legend, _COMMON_.legend);
  $.extend(tooltip, _COMMON_.tooltip);
  option.title = title;
  option.legend = legend;
  option.tooltip = tooltip;
}

function echartId(el) {
  for (var i = 0; i < $(el).length; i++) {
    if ($(el).eq(i).find(el).length > 0) {
      continue;
    }
    $(el).eq(i).attr('id', 'echarts' + i);
  }
}