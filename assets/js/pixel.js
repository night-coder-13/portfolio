// pixel-canvas.js
class Pixel {
    constructor(x, y, size, color, canvas, ctx, gap, speed, shimmerSpeed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.canvas = canvas;
        this.ctx = ctx;
        this.gap = gap;
        this.speed = speed;
        this.shimmerSpeed = shimmerSpeed;
        this.opacity = 0;
        this.direction = 1;
        this.shimmerAmount = 0;
        this.shimmerDirection = 1;
        this.isAnimated = false;
    }
  
    draw() {
      this.ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`;
      this.ctx.fillRect(this.x, this.y, this.size, this.size);
    }
  
    update() {
        if(this.isAnimated) {
          if(this.opacity <= 1 && this.direction === 1){
            this.opacity = Math.min(1, this.opacity + this.speed);
          } else if(this.opacity > 0 && this.direction === -1){
            this.opacity = Math.max(0, this.opacity - this.speed);
          }
           if(this.opacity >= 1 ) {
            this.direction = -1
          } else if(this.opacity <= 0){
              this.isAnimated = false
          }
        }
        
        if (this.shimmerSpeed) {
          this.shimmerAmount += this.shimmerSpeed * this.shimmerDirection;
          if(this.shimmerAmount >= 0.3 || this.shimmerAmount <= -0.3){
            this.shimmerDirection *= -1;
          }
          this.ctx.fillStyle = `rgba(${this.color.r + this.shimmerAmount * 50}, ${this.color.g + this.shimmerAmount * 50}, ${this.color.b + this.shimmerAmount * 50}, ${this.opacity})`;
          this.ctx.fillRect(this.x, this.y, this.size, this.size);
        }
    }
    appear() {
        this.isAnimated = true;
        this.direction = 1;
    }
    disappear(){
        this.isAnimated = true;
        this.direction = -1;
    }
  }

  
    class PixelCanvas extends HTMLElement {
        constructor() {
            super();
            this.pixels = [];
            this.animating = false;
            this.canvas = document.createElement('canvas');
            this.ctx = this.canvas.getContext('2d');
            this.attachShadow({ mode: 'open' }).appendChild(this.canvas);
            this.onMouseEnter = this.onMouseEnter.bind(this);
            this.onMouseLeave = this.onMouseLeave.bind(this);
            this.onFocus = this.onFocus.bind(this);
            this.onBlur = this.onBlur.bind(this);
        }
    
        connectedCallback() {
            this.gap = parseFloat(this.dataset.gap || '10');
            this.speed = parseFloat(this.dataset.speed || '0.05');
            this.colors = this.dataset.colors ? JSON.parse(this.dataset.colors) : [{r: 255, g: 255, b:255}];
            this.shimmerSpeed = parseFloat(this.dataset.shimmerSpeed || 0);
            this.canvas.width = this.offsetWidth;
            this.canvas.height = this.offsetHeight;
            this.createPixels();
            this.draw();
            this.addEventListener('mouseenter', this.onMouseEnter);
            this.addEventListener('mouseleave', this.onMouseLeave);
            this.addEventListener('focus', this.onFocus);
            this.addEventListener('blur', this.onBlur);
        }
    
        disconnectedCallback() {
            this.removeEventListener('mouseenter', this.onMouseEnter);
            this.removeEventListener('mouseleave', this.onMouseLeave);
            this.removeEventListener('focus', this.onFocus);
            this.removeEventListener('blur', this.onBlur);
        }
    
      createPixels() {
        const pixelSize = 10; // You can parametrize this as well if needed
        for (let y = 0; y < this.canvas.height; y += pixelSize + this.gap) {
          for (let x = 0; x < this.canvas.width; x += pixelSize + this.gap) {
              const colorIndex = (x+y) % this.colors.length
            this.pixels.push(new Pixel(x, y, pixelSize, this.colors[colorIndex], this.canvas, this.ctx, this.gap, this.speed, this.shimmerSpeed));
          }
        }
      }
    
      draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let pixel of this.pixels) {
          pixel.draw();
        }
      }
        update() {
            if(this.animating) {
              for (let pixel of this.pixels) {
                  pixel.update();
              }
              this.draw();
              window.requestAnimationFrame(() => this.update());
            }
        }
        
      animatePixels(){
        if(!this.animating){
          this.animating = true
            for (let pixel of this.pixels) {
                pixel.appear()
            }
            this.update()
        }
      }
      stopAnimatePixels(){
          if(this.animating){
            for (let pixel of this.pixels) {
              pixel.disappear()
            }
          }
          setTimeout(() => {
            this.animating = false;
           }, this.pixels[0].speed * 1000 * 2)
      }
      onMouseEnter(){
         this.animatePixels();
      }
      onMouseLeave(){
        this.stopAnimatePixels();
      }
      onFocus(){
        this.animatePixels()
      }
      onBlur(){
        this.stopAnimatePixels()
      }
    }


    if (typeof window !== 'undefined') {
       window.PixelCanvas = PixelCanvas
    }
