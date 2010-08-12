ca = document.getElementById('c'),
c = ca.getContext('2d'),
h = 400,
wi = 800,
M = Math,
r = M.random, 
ro = M.round,
ph = prompt('text ?', " js1k.com"),
pl = ph.length,
s = wi / 40,
w = s * 2,
a = [],
p = [],
co = 'rgba(150,250,150,0.8)',
m = h / 2,
l = 100;
ca.width = wi,
ca.height = h;
while(l--) a.push(new (function() {
  var x = ro(r() * s) * w,
  y = r() * h,
  tc = ph[ro(r() * (pl - 1))];
  this.d = function () {
    (y += s) > h + w && (x = ro(r() * s) * w) && (y = 0);
    c.fillStyle = co;
    c.fillText(tc, x-w, y);
    ph[x / w - 1] == tc && y == m && p.indexOf(tc) == -1 && p.push(tc);
  }
}));
t = setInterval(function () {
  la = a.length, lp = p.length;
  c.fillStyle = 'rgba(0,0,0,.4)';
  c.rect(0, 0, wi, h);
  c.fill();
  while (la--) a[la].d();
  if (lp == pl) {
    a.shift();
    if (a.length == 0) {
      setTimeout("clearTimeout(t)", 300);
    }
  }
  while (lp--) {
    c.fillStyle = co;
    c.fillText(p[lp], ph.indexOf(p[lp]) * w, m);
  }
}, 50);
c.font = w+"px Arial";