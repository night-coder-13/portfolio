<!-- <template>
    <div class="progress-container">
      <svg class="progress-circle" viewBox="0 0 100 100">
        <circle class="progress-circle-bg" cx="50" cy="50" r="45" />
        <circle
          class="progress-circle-fg"
          cx="50"
          cy="50"
          r="45"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="circumference"
        />
      </svg>
      <div class="progress-text">{{ progress }}%</div>
    </div>
  </template>
  
  <script>
  import { gsap } from "gsap";
  
  export default {
    props: {
      progress: {
        type: Number,
        required: true,
      },
    },
    computed: {
      circumference() {
        return 2 * Math.PI * 45; // 45 = r
      },
    },
    mounted() {
      this.animateProgress();
    },
    methods: {
      animateProgress() {
        const offset = this.circumference - (this.progress / 100) * this.circumference;
        gsap.to(this.$el.querySelector('.progress-circle-fg'), {
          strokeDashoffset: offset,
          duration: 1, // مدت زمان انیمیشن
          ease: "power1.out",
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .progress-container {
    position: relative;
    width: 100px;
    height: 100px;
  }
  
  .progress-circle {
    transform: rotate(-90deg); /* چرخش دایره برای شروع از بالا */
  }
  
  .progress-circle-bg {
    fill: none;
    stroke: #070d1b;
    stroke-width: 10;
  }
  
  .progress-circle-fg {
    fill: none;
    stroke: #05cd81; /* رنگ دایره پیشرفت */
    stroke-width: 10;
    transition: stroke-dashoffset 1s ease; /* انیمیشن پیشرفت */
  }
  
  .progress-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    font-weight: bold;
  }
  </style> -->


  <template>
    <div class="progress-container" ref="progressContainer">
      <svg class="progress-circle" viewBox="0 0 100 100">
        <circle class="progress-circle-bg" cx="50" cy="50" r="45" />
        <circle
          class="progress-circle-fg"
          cx="50"
          cy="50"
          r="45"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="circumference"
        />
      </svg>
      <div class="progress-text">{{ progress }}%</div>
    </div>
  </template>
  
  <script>
  import { gsap } from "gsap";
  
  export default {
    props: {
      progress: {
        type: Number,
        required: true,
      },
    },
    computed: {
      circumference() {
        return 2 * Math.PI * 45; // 45 = r
      },
    },
    mounted() {
      this.setupIntersectionObserver();
    },
    methods: {
      animateProgress() {
        const offset = this.circumference - (this.progress / 100) * this.circumference;
        gsap.to(this.$el.querySelector('.progress-circle-fg'), {
          strokeDashoffset: offset,
          duration: 1, // مدت زمان انیمیشن
          ease: "power1.out",
        });
      },
      setupIntersectionObserver() {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                this.animateProgress();
                observer.unobserve(this.$refs.progressContainer); // متوقف کردن مشاهده پس از اجرای انیمیشن
              }
            });
          },
          {
            threshold: 0.5, // وقتی 50% عنصر در دید باشد، انیمیشن اجرا شود
          }
        );
  
        observer.observe(this.$refs.progressContainer);
      },
    },
  };
  </script>
  
  <style scoped>
  .progress-container {
    position: relative;
    width: 100px;
    height: 100px;
  }
  
  .progress-circle {
    transform: rotate(-90deg); /* چرخش دایره برای شروع از بالا */
  }
  
  .progress-circle-bg {
    fill: none;
    stroke: #070d1b;
    stroke-width: 10;
  }
  
  .progress-circle-fg {
    fill: none;
    stroke: #05cd81; /* رنگ دایره پیشرفت */
    stroke-width: 10;
    transition: stroke-dashoffset 1s ease; /* انیمیشن پیشرفت */
  }
  
  .progress-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    font-weight: bold;
  }
  </style>