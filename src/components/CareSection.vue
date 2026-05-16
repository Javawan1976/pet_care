<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { HeartHandshake, MessageCircleHeart, ScanHeart, Volume2 } from "lucide-vue-next";
import { careItems, carouselSlides } from "@/data/site";

const careIconMap = {
  ScanHeart,
  Volume2,
  MessageCircleHeart
};

const activeIndex = ref(0);
let carouselTimer: number | undefined;

const activeSlide = computed(() => carouselSlides[activeIndex.value]);

function showSlide(index: number) {
  activeIndex.value = (index + carouselSlides.length) % carouselSlides.length;
}

function startCarousel() {
  window.clearInterval(carouselTimer);
  carouselTimer = window.setInterval(() => showSlide(activeIndex.value + 1), 4200);
}

function selectSlide(index: number) {
  showSlide(index);
  startCarousel();
}

onMounted(startCarousel);
onBeforeUnmount(() => window.clearInterval(carouselTimer));
</script>

<template>
  <section class="section feature-band" id="care" aria-labelledby="care-title">
    <div class="section-inner feature-layout">
      <div class="care-intro">
        <span class="section-kicker"><HeartHandshake />Care Standard</span>
        <h2 class="section-title" id="care-title">认真洗，也认真哄。</h2>
        <p class="section-lead">洗护不是流水线。我们把环境、手法和节奏都拆得更细，让第一次来的宠物也能慢慢放松。</p>
      </div>

      <div class="store-carousel" aria-label="高端宠物洗护店内环境轮播">
        <div class="carousel-track">
          <figure
            v-for="(slide, index) in carouselSlides"
            :key="slide.title"
            class="carousel-slide"
            :class="{ active: index === activeIndex }"
          >
            <img :src="slide.image" :alt="slide.alt">
          </figure>
        </div>
        <div class="carousel-caption">
          <div>
            <strong>{{ activeSlide.title }}</strong>
            <span>{{ activeSlide.copy }}</span>
          </div>
          <div class="carousel-dots" aria-label="切换店内环境图片">
            <button
              v-for="(slide, index) in carouselSlides"
              :key="slide.title"
              class="carousel-dot"
              :class="{ active: index === activeIndex }"
              type="button"
              :aria-label="`查看${slide.title}`"
              @click="selectSlide(index)"
            ></button>
          </div>
        </div>
      </div>

      <div class="care-list">
        <article v-for="item in careItems" :key="item.title" class="care-item">
          <span class="icon"><component :is="careIconMap[item.icon]" /></span>
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.copy }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
