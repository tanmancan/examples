(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],{10:function(t,i,e){t.exports=e(17)},15:function(t,i,e){},16:function(t,i,e){},17:function(t,i,e){"use strict";e.r(i);var s,n,h=e(3),a=e.n(h),o=e(9),l=e.n(o),d=(e(15),e(0)),r=e(1),u=e(2);!function(t){t.ARROW_LEFT="ArrowLeft",t.ARROW_RIGHT="ArrowRight",t.ARROW_UP="ArrowUp",t.ARROW_DOWN="ArrowDown",t.ENTER="Enter"}(s||(s={})),function(t){t.KEYUP="keyup",t.KEYDOWN="keydown",t.MOUSEMOVE="mousemove",t.MOUSEDOWN="mousedown"}(n||(n={}));var c,v=e(6),g=function(){function t(i,e){Object(d.a)(this,t),this.bounds=[],this.callback=void 0,this.source=void 0,this.callback=i,this.source=e}return Object(r.a)(t,[{key:"addBounds",value:function(t){var i=t.map((function(t){var i=Object(u.a)(t,2);return""+i[0]+i[1]})),e=new Set([].concat(Object(v.a)(this.bounds),Object(v.a)(i)));this.bounds=Array.from(e)}},{key:"replaceBounds",value:function(t){this.bounds=[],this.addBounds(t)}},{key:"getBounds",value:function(){return this.bounds}},{key:"checkBounds",value:function(t){var i,e=this;i||t.forEach((function(t){var s=t.getBounds();if(i=s.some((function(t){return-1!==e.bounds.indexOf(t)})))return t.callback(e.source),void e.callback(t.source);i=!1}))}}]),t}(),f=function(){function t(i,e,s){Object(d.a)(this,t),this.canvas=null,this.ctx=null,this.width=void 0,this.height=void 0,this.gridSize=void 0,this.collision=void 0,this.eatCount=0,this.foodPosition=void 0,this.width=i,this.height=e,this.gridSize=s;var n=this.getRandomPosition(),h=Object(u.a)(n,2),a=h[0],o=h[1];this.foodPosition=[a,o],this.collision=new g(this.eaten.bind(this),"FOOD"),this.collision.addBounds([[a,o]]),this.setUp()}return Object(r.a)(t,[{key:"setUp",value:function(){this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.style.position="absolute",this.canvas.style.zIndex="0",this.ctx.fillStyle="red",this.draw()}},{key:"tearDown",value:function(){var t;null===(t=this.canvas)||void 0===t||t.remove(),this.canvas=null}},{key:"setCollision",value:function(t){this.collision=t,this.ctx=null}},{key:"getCollision",value:function(){return this.collision}},{key:"eaten",value:function(){var t=this.getCtx(),i=Object(u.a)(this.foodPosition,2),e=i[0],s=i[1];t.clearRect(e,s,this.gridSize,this.gridSize);var n=this.getRandomPosition(),h=Object(u.a)(n,2),a=h[0],o=h[1];t.fillRect(a,o,this.gridSize,this.gridSize),this.foodPosition=[a,o],this.collision.replaceBounds([[a,o]]),this.eatCount+=1}},{key:"getEatCount",value:function(){return this.eatCount}},{key:"getRandomPosition",value:function(){var t=this.width/this.gridSize,i=this.height/this.gridSize,e=Math.floor(Math.random()*t),s=Math.floor(Math.random()*i);return[e*this.gridSize,s*this.gridSize]}},{key:"getCanvas",value:function(){return this.canvas}},{key:"getCtx",value:function(){return this.ctx}},{key:"draw",value:function(){var t=this.getCtx(),i=Object(u.a)(this.foodPosition,2),e=i[0],s=i[1];t.fillRect(e,s,this.gridSize,this.gridSize)}}]),t}(),y=function(){function t(i,e,s){Object(d.a)(this,t),this.canvas=null,this.ctx=null,this.width=void 0,this.height=void 0,this.gridSize=void 0,this.collision=null,this.width=i,this.height=e,this.gridSize=s,this.setUp()}return Object(r.a)(t,[{key:"setUp",value:function(){this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.style.position="absolute",this.canvas.style.zIndex="1",this.ctx.translate(-.5,-.5),this.ctx.strokeStyle="white",this.collision=new g(this.collide.bind(this),"WALL");var t=this.getWallBounds();this.collision.addBounds(t),this.draw()}},{key:"tearDown",value:function(){var t;null===(t=this.canvas)||void 0===t||t.remove(),this.canvas=null,this.ctx=null,this.collision=null}},{key:"getWallBounds",value:function(){for(var t=[],i=-this.gridSize;i<this.width;i+=this.gridSize)t.push([i,-this.gridSize]),t.push([i,this.height]);for(var e=-this.gridSize;e<this.height;e+=this.gridSize)t.push([-this.gridSize,e]),t.push([this.width,e]);return t}},{key:"setCollision",value:function(t){this.collision=t}},{key:"getCollision",value:function(){return this.collision}},{key:"getCanvas",value:function(){return this.canvas}},{key:"getCtx",value:function(){return this.ctx}},{key:"collide",value:function(){}},{key:"draw",value:function(){var t=this.getCtx();t.beginPath();for(var i=0;i<this.height;i+=this.gridSize)t.moveTo(0,i),t.lineTo(this.width,i);for(var e=0;e<this.width;e+=this.gridSize)t.moveTo(e,0),t.lineTo(e,this.height);t.stroke(),t.closePath()}}]),t}(),k=function(){function t(i,e,s){Object(d.a)(this,t),this.canvas=null,this.ctx=null,this.width=void 0,this.height=void 0,this.gridSize=void 0,this.timestamp=void 0,this.collision=null,this.paused=!1,this.distanceFactor=void 0,this.timeFactor=5.5,this.vector=void 0,this.body=[[0,0]],this.bodyLength=3,this.bodySegmentSize=10,this.headCollision=null,this.tailCollision=null,this.deadSnake=!1,this.width=i,this.height=e,this.gridSize=s,this.distanceFactor=this.gridSize,this.bodySegmentSize=this.gridSize,this.vector=[this.gridSize,0],this.setUp()}return Object(r.a)(t,[{key:"setUp",value:function(){window.addEventListener(n.KEYDOWN,this),this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.style.position="absolute",this.canvas.style.zIndex="0",this.canvas.style.background="whitesmoke",this.ctx.fillStyle="green",this.collision=new g(this.collide.bind(this),"SNAKE"),this.collision.addBounds(this.body),this.headCollision=new g(this.collide.bind(this),"HEAD"),this.tailCollision=new g(this.collide.bind(this),"TAIL"),this.headCollision.addBounds([this.body[0]]),this.tailCollision.addBounds(this.body.slice(1))}},{key:"tearDown",value:function(){var t;window.removeEventListener(n.KEYDOWN,this),null===(t=this.canvas)||void 0===t||t.remove(),this.canvas=null,this.ctx=null,this.collision=null,this.headCollision=null,this.tailCollision=null}},{key:"checkInternalCollision",value:function(){var t;this.tailCollision&&(null===(t=this.headCollision)||void 0===t||t.checkBounds([this.tailCollision]))}},{key:"collide",value:function(t){switch(t){case"FOOD":this.eat();break;case"TAIL":case"HEAD":case"WALL":this.die()}}},{key:"setCollision",value:function(t){this.collision=t}},{key:"getCollision",value:function(){return this.collision}},{key:"getCanvas",value:function(){return this.canvas}},{key:"getCtx",value:function(){return this.ctx}},{key:"handleEvent",value:function(t){switch(t.type){case n.KEYDOWN:this.keyDownHandler(t)}}},{key:"keyDownHandler",value:function(t){if(!this.paused)switch(t.code){case s.ARROW_LEFT:this.vector=[-1*this.distanceFactor,0];break;case s.ARROW_RIGHT:this.vector=[this.distanceFactor,0];break;case s.ARROW_UP:this.vector=[0,-1*this.distanceFactor];break;case s.ARROW_DOWN:this.vector=[0,this.distanceFactor]}}},{key:"eat",value:function(){this.bodyLength+=1,this.timeFactor-=.125}},{key:"move",value:function(){var t,i,e,s,n=this.getNewHeadPos();if(n)return(this.body.length=this.bodyLength)&&(s=this.body.pop()),this.body.unshift(n),null===(t=this.collision)||void 0===t||t.replaceBounds(this.body),null===(i=this.headCollision)||void 0===i||i.replaceBounds([this.body[0]]),null===(e=this.tailCollision)||void 0===e||e.replaceBounds(this.body.slice(1)),this.checkInternalCollision(),s}},{key:"getNewHeadPos",value:function(){var t=Object(u.a)(this.body[0],2),i=t[0],e=t[1],s=Object(u.a)(this.vector,2);return[i+s[0],e+s[1]]}},{key:"die",value:function(){this.deadSnake=!0}},{key:"isSnakeDead",value:function(){return this.deadSnake}},{key:"delayCheck",value:function(t){return!!(t&&this.timestamp&&t<this.timestamp+Math.exp(this.timeFactor))}},{key:"draw",value:function(t,i){var e,s=this,n=this.getCtx();if(!this.isSnakeDead()&&(this.paused=null!==(e=i)&&void 0!==e&&e,!i)){if(!this.delayCheck(t)){var h=this.move();if(h){var a=Object(u.a)(h,2),o=a[0],l=a[1];n.clearRect(o,l,this.bodySegmentSize,this.bodySegmentSize)}this.timestamp=t}this.body.forEach((function(t){var i=Object(u.a)(t,2),e=i[0],h=i[1];n.fillRect(e,h,s.bodySegmentSize,s.bodySegmentSize)}))}}}]),t}(),S=e(7);!function(t){t.DEBUG="DEBUG"}(c||(c={}));var w=function(){function t(i,e,s){Object(d.a)(this,t),this.canvas=null,this.ctx=null,this.width=void 0,this.height=void 0,this.timestamp=void 0,this.gridSize=void 0,this.score=0,this.highScore=0,this.gameOver=!1,this.debugData={x:0,y:0,lastTimestamp:0,gameCount:1},this.options=void 0,this.boxChecked=new Path2D,this.width=i,this.height=e,this.gridSize=s,this.options=[{label:"Show Debug Info",type:c.DEBUG,state:!1}],this.setUp()}return Object(r.a)(t,[{key:"setUp",value:function(){var t;this.canvas=document.createElement("canvas"),this.ctx=null===(t=this.canvas)||void 0===t?void 0:t.getContext("2d"),this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.style.position="absolute",this.canvas.style.zIndex="3",this.canvas.addEventListener("mousemove",this),this.canvas.addEventListener("mousedown",this),this.setDefaultTextStyles(),this.preRenderOptions(),this.highScore=window.localStorage.getItem("canvas-snake-hs")?Number(window.localStorage.getItem("canvas-snake-hs")):0,this.draw()}},{key:"tearDown",value:function(){var t,i,e;null===(t=this.canvas)||void 0===t||t.removeEventListener("mousemove",this),null===(i=this.canvas)||void 0===i||i.removeEventListener("mousedown",this),null===(e=this.canvas)||void 0===e||e.remove(),this.canvas=null,this.ctx=null}},{key:"handleEvent",value:function(t){switch(t.type){case n.MOUSEMOVE:this.handleMouseMove(t),this.handleOptionHover(t);break;case n.MOUSEDOWN:this.handleOptionClick(t)}}},{key:"handleMouseMove",value:function(t){this.debugData.x=t.offsetX,this.debugData.y=t.offsetY}},{key:"handleOptionClick",value:function(t){var i=this;this.options.forEach((function(e){i.optionIsPointInPath(t,e)&&(e.state=!e.state)}))}},{key:"handleOptionHover",value:function(t){var i=this;this.options.forEach((function(e){var s=i.optionIsPointInPath(t,e);i.canvas&&(i.canvas.style.cursor=s?"pointer":"default")}))}},{key:"optionIsPointInPath",value:function(t,i){var e=this.getCtx(),s=!1;if(i.path&&this.canvas){var n=this.canvas,h=n.clientWidth,a=n.clientHeight,o=this.width/h,l=this.height/a,d=t.offsetX*o,r=t.offsetY*l;s=e.isPointInPath(i.path,d,r)}return s}},{key:"getCanvas",value:function(){return this.canvas}},{key:"getCtx",value:function(){return this.ctx}},{key:"setScore",value:function(t){this.score=t,this.score>this.highScore&&(this.highScore=this.score,window.localStorage.setItem("canvas-snake-hs","".concat(this.highScore)))}},{key:"setGameOver",value:function(t){this.gameOver=t}},{key:"setDefaultTextStyles",value:function(){var t=this.getCtx();t.fillStyle="black",t.font="700 ".concat(this.gridSize,"px monospace"),t.textAlign="right",t.textBaseline="top"}},{key:"setOverlayTextStyles",value:function(){var t=this.getCtx();t.fillStyle="white",t.textAlign="center",t.textBaseline="middle"}},{key:"getOptionValue",value:function(t){return this.options.filter((function(i){return i.type===t}))[0].state}},{key:"preRenderOptions",value:function(){var t=this,i=this.getCtx(),e=this.width/2,s=this.height/2-this.gridSize;this.options.forEach((function(n,h){var a=i.measureText(n.label);n.bounds={x:e-a.width/2,y:s+h*t.gridSize,width:a.width,height:t.gridSize};var o=new Path2D;o.rect(n.bounds.x,n.bounds.y,n.bounds.width,n.bounds.height);var l=new Path2D(o);l.rect(n.bounds.x-1.5*t.gridSize,n.bounds.y,t.gridSize,t.gridSize),n.path=l}))}},{key:"renderOptions",value:function(){var t=this,i=this.getCtx();this.options.forEach((function(e){if(i.stroke(t.boxChecked),e.path&&i.fill(e.path),e.bounds){var s=e.bounds,n=s.x,h=s.y,a=s.width,o=s.height;i.clearRect(n,h,a,o),i.clearRect(n-1.5*t.gridSize+5,h+5,t.gridSize-10,t.gridSize-10),i.globalAlpha=.75,i.fillStyle="black",i.fillRect(n,h,a,o),i.fillRect(n-1.5*t.gridSize+5,h+5,t.gridSize-10,t.gridSize-10),i.globalAlpha=1,i.fillStyle="white",e.state&&(i.fillStyle="green",i.fillRect(n-1.5*t.gridSize+5,h+5,t.gridSize-10,t.gridSize-10),i.fillStyle="white"),i.textAlign="center",i.textBaseline="middle",i.fillText(e.label,n+a/2,h+t.gridSize/2)}})),this.setDefaultTextStyles()}},{key:"renderOverlayBackground",value:function(){var t=this.getCtx();t.globalAlpha=.75,t.fillStyle="black",t.fillRect(0,0,this.width,this.height),t.globalAlpha=1}},{key:"renderPauseScreen",value:function(){var t=this.getCtx();this.renderOverlayBackground(),this.setOverlayTextStyles(),t.fillText("Paused",this.width/2,this.height/2-4*this.gridSize),this.renderOptions()}},{key:"renderGameOverScreen",value:function(){var t=this.getCtx();this.renderOverlayBackground(),this.setOverlayTextStyles(),t.fillText("Game Over",this.width/2,this.height/2-4*this.gridSize),t.fillText("Score ".concat(this.score),this.width/2,this.height/2-2*this.gridSize),t.fillText("High score ".concat(this.highScore),this.width/2,this.height/2-this.gridSize),t.fillText("Press Enter to",this.width/2,this.height/2+this.gridSize),t.fillText("Start a New Game",this.width/2,this.height/2+2*this.gridSize),t.fillText("Game no. ".concat(this.debugData.gameCount),this.width/2,this.height/2+4*this.gridSize)}},{key:"setDebugData",value:function(t){this.debugData=Object(S.a)(Object(S.a)({},this.debugData),t)}},{key:"renderDebugScreen",value:function(t){var i=[];if(i.push("Mouse: ".concat(this.debugData.x,", ").concat(this.debugData.y)),t){var e=t-this.debugData.lastTimestamp;i.push("FPS: ".concat(Math.floor(1e3/e))),this.debugData.lastTimestamp=t}i.push("Game count: ".concat(this.debugData.gameCount));for(var s=0;s<i.length;s++){var n;null===(n=this.ctx)||void 0===n||n.fillText("".concat(i[s]),this.width-this.gridSize,this.height-this.gridSize*(s+1))}}},{key:"renderScoreScreen",value:function(){var t=this.getCtx();this.setDefaultTextStyles(),t.fillText("".concat(this.score),this.width-this.gridSize,this.gridSize)}},{key:"clear",value:function(){this.getCtx().clearRect(0,0,this.width,this.height)}},{key:"draw",value:function(t,i){this.clear(),this.getOptionValue(c.DEBUG)&&this.renderDebugScreen(t),this.gameOver?this.renderGameOverScreen():i?this.renderPauseScreen():this.renderScoreScreen()}}]),t}(),b=function(){function t(){Object(d.a)(this,t),this.board=void 0,this.gridSize=40,this.gridWidth=30,this.gridHeight=15,this.gameWidth=void 0,this.gameHeight=void 0,this.snake=null,this.snakeCanvas=null,this.grid=null,this.gridCanvas=null,this.food=null,this.foodCanvas=null,this.ui=null,this.uiCanvas=null,this.rafId=0,this.paused=!0,this.gameCount=1,this.board=document.querySelector("div#board"),this.gameWidth=this.gridSize*this.gridWidth,this.gameHeight=this.gridSize*this.gridHeight,this.setUp()}return Object(r.a)(t,[{key:"setUp",value:function(){var t,i,e,s;window.addEventListener("keyup",this),this.snake=new k(this.gameWidth,this.gameHeight,this.gridSize),this.snakeCanvas=this.snake.getCanvas(),this.grid=new y(this.gameWidth,this.gameHeight,this.gridSize),this.gridCanvas=this.grid.getCanvas(),this.food=new f(this.gameWidth,this.gameHeight,this.gridSize),this.foodCanvas=this.food.getCanvas(),this.ui=new w(this.gameWidth,this.gameHeight,this.gridSize),this.uiCanvas=this.ui.getCanvas(),null===(t=this.board)||void 0===t||t.appendChild(this.snakeCanvas),null===(i=this.board)||void 0===i||i.appendChild(this.gridCanvas),null===(e=this.board)||void 0===e||e.appendChild(this.foodCanvas),null===(s=this.board)||void 0===s||s.appendChild(this.uiCanvas),this.ui.setDebugData({gameCount:this.gameCount})}},{key:"tearDown",value:function(){var t,i,e,s,n,h,a,o;window.removeEventListener("keyup",this),null===(t=this.snake)||void 0===t||t.tearDown(),null===(i=this.ui)||void 0===i||i.tearDown(),null===(e=this.food)||void 0===e||e.tearDown(),null===(s=this.grid)||void 0===s||s.tearDown(),null===(n=this.snakeCanvas)||void 0===n||n.remove(),null===(h=this.gridCanvas)||void 0===h||h.remove(),null===(a=this.foodCanvas)||void 0===a||a.remove(),null===(o=this.uiCanvas)||void 0===o||o.remove(),delete this.snake,delete this.snakeCanvas,delete this.grid,delete this.gridCanvas,delete this.food,delete this.foodCanvas,delete this.ui,delete this.uiCanvas,this.snake=null,this.snakeCanvas=null,this.grid=null,this.gridCanvas=null,this.food=null,this.foodCanvas=null,this.ui=null,this.uiCanvas=null,window.cancelAnimationFrame(this.rafId)}},{key:"handleEvent",value:function(t){switch(t.type){case n.KEYUP:this.handleKeyup(t)}}},{key:"handleKeyup",value:function(t){var i;switch(t.code){case s.ENTER:if(null===(i=this.snake)||void 0===i?void 0:i.isSnakeDead())return this.gameCount++,this.tearDown(),this.setUp(),void this.run();this.paused=!this.paused}}},{key:"run",value:function(t){var i,e,s,n,h,a,o,l,d,r;this.clear();var u,c,v=null!==(i=null===(e=this.food)||void 0===e?void 0:e.getEatCount())&&void 0!==i?i:0;if(null===(s=this.ui)||void 0===s||s.setScore(v),null===(n=this.snake)||void 0===n?void 0:n.isSnakeDead())return null===(u=this.ui)||void 0===u||u.setGameOver(!0),void(null===(c=this.ui)||void 0===c||c.draw(t,this.paused));null===(h=this.ui)||void 0===h||h.draw(t,this.paused),null===(a=this.snake)||void 0===a||a.draw(t,this.paused),null===(o=this.food)||void 0===o||o.draw();var g=null===(l=this.snake)||void 0===l?void 0:l.getCollision(),f=null===(d=this.food)||void 0===d?void 0:d.getCollision(),y=null===(r=this.grid)||void 0===r?void 0:r.getCollision();g&&(null===f||void 0===f||f.checkBounds([g]),null===y||void 0===y||y.checkBounds([g])),this.rafId=window.requestAnimationFrame(this.run.bind(this))}},{key:"clear",value:function(){}}],[{key:"create",value:function(){return new t}}]),t}();e(16);var m=function(){return Object(h.useEffect)((function(){b.create().run()}),[]),a.a.createElement("div",{id:"board"})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.424bdaca.chunk.js.map