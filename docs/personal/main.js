title = "DEMON ESCAPE";

description = `
`;

const G = {
  WIDTH: 150,
  HEIGHT: 100,
}

options = {
  viewSize: {x: G.WIDTH, y: G.HEIGHT},
  isCapturing: true,
  isCapturingGameCanvasOnly: true,
  captureCanvasScale: 2,
  seed: 83,
  theme: "crt",
};

let player;


function update() {
  if (!ticks)
  {
    initPlayer();
  }

  updatePlayer();
  
}

characters = [
`


yyyyYY
llyyYY
llyyYY
yyyyYY
`,
`
  yYYY
 yyyYY
yyyy l
lyy
yyl lc
ycggll
`,
`
GGGGGG
GggggG
GgccgG
GgccgG
GgggyG
GggggG
`,
`
r    r
Rr  rR
rgrrgr
 rrrr 
 yrry 
  yy  
`,
`
r    r
rr  rr
rrrrrr
 rrrr
 rrrr
  rr
`,
`
l l l 
r r r 
r r r 
 rrr  
 rrrr
  rrr 
`,
`
 l l l
 r r r
 r r r
  rrr
 rrrr
 rrr
`
]

function initPlayer()
{
  player = {
      pos: vec(G.WIDTH * 0.5, G.HEIGHT * 0.5),
      speed: G.PLAYER_SPEED,
      direction: vec(1, 0)
    };

    color("black");
    char("a", player.pos);
}



function updatePlayer()
{
    player.pos.clamp(0, G.WIDTH, 0, G.HEIGHT);
    player.pos.y += player.direction.y * player.speed;
    
    color("black");
    char("a", player.pos);
}
