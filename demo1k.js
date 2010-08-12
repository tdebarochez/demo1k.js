d = document,
C = d.getElementById('c'),
c = C.getContext('2d'),
h = 400,
u = 800,
M = Math,
r = M.random, 
e = M.round,
P = M.pow,
H = " js1k.com",
s = u / 40,
w = s * 2,
a = [],
p = [],
m = h / 2,
l = 50,
X = h,
Y = 200,
k = 0,
C.width = u,
C.height = h
while(l--) a.push(new (function() {
  var x = e(r() * s) * w,
  y = r() * h,
  C = H[e(r() * 8)];
  this.d = function () {
    (y += s) > h + w && (x = e(r() * s) * w) & (y = 0);
    c.fillText(C, x-w, y);
    H[x / w - 1] == C && y == m && p.indexOf(C) < 0 && G < 9 && p.push(C);
  }
}));
t = setInterval(function () {
  B = a.length, G = p.length;
  c.fillStyle = 'rgba(0,0,0,.5)';
  c.rect(0, 0, u, h);
  c.fill();
  c.fillStyle = W;
  G == 9 && B > 0 && a.shift() && B--
  while (B--) a[B].d()
  c.fillStyle = g;
  while (G--)
    c.fillText(p[G], H.indexOf(p[G]) * w, m)
  i = c.getImageData(0,0,u,h);
  z = i.data;
  l = z.length;
  k += 2
  while (l-=4) {
    D = M.sqrt(P(X - (l/4)% u, 2) + P(Y - M.floor(l / 4 / u), 2)) ;
    b = 99 - D;
    if (0 < b) {
      n = M.sin((D - k%25) / 4);
      z[l] = (b - z[l]) * n;
      z[l+1] = (b - z[l+1]) * n;
      z[l+2] = (b - z[l+2]) * n
    }
  }
  c.putImageData(i, 0, 0);
}, 80);
c.font = w+"px Arial";
d.onmousemove = function (e) { X = e.clientX; Y = e.clientY }
g = c.createLinearGradient(0, 180, 0, m);
g.b = g.addColorStop;
g.b(0, W = '#8f8');
g.b(.5, '#efe');
g.b(.5, W);
g.b(1, '#afa');
