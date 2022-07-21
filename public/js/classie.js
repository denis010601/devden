
( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjbGFzc2llLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuKCBmdW5jdGlvbiggd2luZG93ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbi8vIGNsYXNzIGhlbHBlciBmdW5jdGlvbnMgZnJvbSBib256byBodHRwczovL2dpdGh1Yi5jb20vZGVkL2JvbnpvXG5cbmZ1bmN0aW9uIGNsYXNzUmVnKCBjbGFzc05hbWUgKSB7XG4gIHJldHVybiBuZXcgUmVnRXhwKFwiKF58XFxcXHMrKVwiICsgY2xhc3NOYW1lICsgXCIoXFxcXHMrfCQpXCIpO1xufVxuXG4vLyBjbGFzc0xpc3Qgc3VwcG9ydCBmb3IgY2xhc3MgbWFuYWdlbWVudFxuLy8gYWx0aG8gdG8gYmUgZmFpciwgdGhlIGFwaSBzdWNrcyBiZWNhdXNlIGl0IHdvbid0IGFjY2VwdCBtdWx0aXBsZSBjbGFzc2VzIGF0IG9uY2VcbnZhciBoYXNDbGFzcywgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzO1xuXG5pZiAoICdjbGFzc0xpc3QnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCApIHtcbiAgaGFzQ2xhc3MgPSBmdW5jdGlvbiggZWxlbSwgYyApIHtcbiAgICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoIGMgKTtcbiAgfTtcbiAgYWRkQ2xhc3MgPSBmdW5jdGlvbiggZWxlbSwgYyApIHtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoIGMgKTtcbiAgfTtcbiAgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiggZWxlbSwgYyApIHtcbiAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoIGMgKTtcbiAgfTtcbn1cbmVsc2Uge1xuICBoYXNDbGFzcyA9IGZ1bmN0aW9uKCBlbGVtLCBjICkge1xuICAgIHJldHVybiBjbGFzc1JlZyggYyApLnRlc3QoIGVsZW0uY2xhc3NOYW1lICk7XG4gIH07XG4gIGFkZENsYXNzID0gZnVuY3Rpb24oIGVsZW0sIGMgKSB7XG4gICAgaWYgKCAhaGFzQ2xhc3MoIGVsZW0sIGMgKSApIHtcbiAgICAgIGVsZW0uY2xhc3NOYW1lID0gZWxlbS5jbGFzc05hbWUgKyAnICcgKyBjO1xuICAgIH1cbiAgfTtcbiAgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiggZWxlbSwgYyApIHtcbiAgICBlbGVtLmNsYXNzTmFtZSA9IGVsZW0uY2xhc3NOYW1lLnJlcGxhY2UoIGNsYXNzUmVnKCBjICksICcgJyApO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyggZWxlbSwgYyApIHtcbiAgdmFyIGZuID0gaGFzQ2xhc3MoIGVsZW0sIGMgKSA/IHJlbW92ZUNsYXNzIDogYWRkQ2xhc3M7XG4gIGZuKCBlbGVtLCBjICk7XG59XG5cbnZhciBjbGFzc2llID0ge1xuICAvLyBmdWxsIG5hbWVzXG4gIGhhc0NsYXNzOiBoYXNDbGFzcyxcbiAgYWRkQ2xhc3M6IGFkZENsYXNzLFxuICByZW1vdmVDbGFzczogcmVtb3ZlQ2xhc3MsXG4gIHRvZ2dsZUNsYXNzOiB0b2dnbGVDbGFzcyxcbiAgLy8gc2hvcnQgbmFtZXNcbiAgaGFzOiBoYXNDbGFzcyxcbiAgYWRkOiBhZGRDbGFzcyxcbiAgcmVtb3ZlOiByZW1vdmVDbGFzcyxcbiAgdG9nZ2xlOiB0b2dnbGVDbGFzc1xufTtcblxuLy8gdHJhbnNwb3J0XG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgLy8gQU1EXG4gIGRlZmluZSggY2xhc3NpZSApO1xufSBlbHNlIHtcbiAgLy8gYnJvd3NlciBnbG9iYWxcbiAgd2luZG93LmNsYXNzaWUgPSBjbGFzc2llO1xufVxuXG59KSggd2luZG93ICk7XG4iXSwiZmlsZSI6ImNsYXNzaWUuanMifQ==
