ca = document.getElementById('c'),
c = ca.getContext('2d'),
h = 400,
u = 800,
M = Math,
r = M.random, 
e = M.round,
mp = M.pow,
mc = M.cos,
ms = M.sin,
pi = M.PI,
ph = prompt('text ?', " js1k.com"),
pl = ph.length,
s = u / 40,
w = s * 2,
a = [],
p = [],
m = h / 2,
l = 99,
bx = 400,
by = 200,
br = 99,
dr = r() * pi * 2,
ca.width = u,
ca.height = h;
while(l--) a.push(new (function() {
  var x = e(r() * s) * w,
  y = r() * h,
  tc = ph[e(r() * (pl - 1))];
  this.d = function () {
    (y += s) > h + w && (x = e(r() * s) * w) && (y = 0);
    c.fillText(tc, x-w, y);
    ph[x / w - 1] == tc && y == m && p.indexOf(tc) == -1 && p.push(tc);
  }
}));
t = setInterval(function () {
  la = a.length, lp = p.length;
  c.fillStyle = 'rgba(0,0,0,.5)';
  c.rect(0, 0, u, h);
  c.fill();
    c.fillStyle = 'rgba(150,250,150,0.8)';
  while (la--) a[la].d();
    if (lp == pl && a.length > 0)
        a.shift();
  while (lp--)
      c.fillText(p[lp], ph.indexOf(p[lp]) * w, m);
  i = c.getImageData(0,0,u,h);
  z = i.data;
  l = z.length;
    (bx > u-br || bx < br) && (dr = - dr + pi);
    (by > h-br || by < br) && (dr = 2 * pi - dr);
    bx += 9*mc(dr); by += 9*ms(dr);
  while (l-=4) {
      dt = M.sqrt(mp(bx - (l/4)% u, 2) + mp(by - M.floor(l / 4 / u), 2));
      if (dt < br) {
          z[l]   = br - z[l] - dt;
          z[l+1] = br - z[l+1] - dt;
          z[l+2] = br - z[l+2] - dt; 
      }
  }
    c.putImageData(i, 0, 0);
}, 50);
c.font = w+"px Arial";