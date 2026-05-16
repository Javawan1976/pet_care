<script setup lang="ts">
import { Scissors, ShieldCheck, ShowerHead, Sparkle, Waves } from "lucide-vue-next";
import { services } from "@/data/site";

const iconMap = {
  ShowerHead,
  Scissors,
  Sparkle,
  ShieldCheck
};
</script>

<template>
  <section class="section" id="services" aria-labelledby="services-title">
    <div class="section-inner">
      <span class="section-kicker"><Waves />Services</span>
      <h2 class="section-title" id="services-title">从一身泡泡，到一身松软。</h2>
      <p class="section-lead">每只宠物先做皮毛状态检查，再按毛量、皮肤敏感度和当天情绪安排流程。洗护师全程记录，完成后同步护理建议。</p>

      <div class="service-grid">
        <article v-for="item in services" :key="item.title" class="service-card">
          <div>
            <span class="icon"><component :is="iconMap[item.icon]" /></span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.copy }}</p>
          </div>
          <div class="service-meta"><span>{{ item.duration }}</span><strong>{{ item.price }}</strong></div>
        </article>
      </div>
    </div>
  </section>
</template>
