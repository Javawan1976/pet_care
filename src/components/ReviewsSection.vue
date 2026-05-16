<script setup lang="ts">
import { MessageSquareQuote } from "lucide-vue-next";
import { reviews } from "@/data/site";
</script>

<template>
  <section class="section reviews" id="reviews" aria-labelledby="reviews-title">
    <div class="section-inner">
      <span class="section-kicker"><MessageSquareQuote />Reviews</span>
      <h2 class="section-title" id="reviews-title">毛孩子的回头率，比广告更诚实。</h2>
      <p class="section-lead">店内可视化等候，主人能看到护理进度。胆小、年纪大、第一次洗护的宠物，我们会预留更长时间。</p>

      <div class="review-grid">
        <article v-for="review in reviews" :key="review.name" class="review-card">
          <div>
            <div class="stars">★★★★★</div>
            <p>{{ review.copy }}</p>
          </div>
          <div class="reviewer">
            <span class="avatar"><img :src="review.image" alt=""></span>
            <span>{{ review.name }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
