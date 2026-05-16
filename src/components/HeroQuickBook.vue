<script setup lang="ts">
import { CalendarPlus, PhoneCall, Send, Sparkles } from "lucide-vue-next";
import { petOptions, serviceOptions, sizeOptions, type BookingSelection, type PetType, type ServiceKey, type SizeKey } from "@/data/site";

defineProps<{
  pet: PetType;
  size: SizeKey;
  service: ServiceKey;
  selection: BookingSelection;
}>();

defineEmits<{
  "update:pet": [value: PetType];
  "update:size": [value: SizeKey];
  "update:service": [value: ServiceKey];
}>();
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero-grid">
      <div>
        <span class="eyebrow"><Sparkles />猫犬洗护 · 造型 · 接送</span>
        <h1 id="hero-title">泡泡尾巴宠物洗护店</h1>
        <p class="hero-copy">把洗澡变成一场温柔的护理。低刺激香波、独立烘干、可视化等候区，让毛孩子干净、蓬松，也安心。</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#booking"><CalendarPlus />立即预约</a>
          <a class="btn btn-ghost" href="tel:400-618-0920"><PhoneCall />400-618-0920</a>
        </div>
      </div>

      <aside class="quick-book" aria-label="快速估价">
        <div class="quick-book-head">
          <h2>今日洗护</h2>
          <span class="open-badge">10:00-21:00</span>
        </div>
        <form @submit.prevent>
          <div class="field">
            <label for="quickPet">宠物类型</label>
            <select id="quickPet" name="pet" :value="pet" @change="$emit('update:pet', ($event.target as HTMLSelectElement).value as PetType)">
              <option v-for="option in petOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
            </select>
          </div>
          <div class="field">
            <label for="quickSize">体型</label>
            <select id="quickSize" name="size" :value="size" @change="$emit('update:size', ($event.target as HTMLSelectElement).value as SizeKey)">
              <option v-for="option in sizeOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
            </select>
          </div>
          <div class="field">
            <label for="quickService">服务</label>
            <select id="quickService" name="service" :value="service" @change="$emit('update:service', ($event.target as HTMLSelectElement).value as ServiceKey)">
              <option v-for="option in serviceOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
            </select>
          </div>
          <div class="estimate" aria-live="polite">
            <span>预估费用</span>
            <strong>{{ selection.priceText }}</strong>
          </div>
          <a class="btn btn-primary" href="#booking"><Send />填写预约</a>
        </form>
      </aside>
    </div>
  </section>
</template>
