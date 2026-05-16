<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from "vue";
import BookingSection from "@/components/BookingSection.vue";
import CareSection from "@/components/CareSection.vue";
import HeroQuickBook from "@/components/HeroQuickBook.vue";
import PricingSection from "@/components/PricingSection.vue";
import ReviewsSection from "@/components/ReviewsSection.vue";
import ServicesSection from "@/components/ServicesSection.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import SiteHeader from "@/components/SiteHeader.vue";
import ToastNotice from "@/components/ToastNotice.vue";
import { getSelection, type BookingFormPayload, type PetType, type ServiceKey, type SizeKey } from "@/data/site";

const selectedPet = ref<PetType>("dog");
const selectedSize = ref<SizeKey>("small");
const selectedService = ref<ServiceKey>("bath");
const toastMessage = ref("");
const toastVisible = ref(false);
let toastTimer: number | undefined;

const selection = computed(() => getSelection(selectedPet.value, selectedSize.value, selectedService.value));

function showToast(message: string) {
  toastMessage.value = message;
  toastVisible.value = true;
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toastVisible.value = false;
  }, 3600);
}

function handleBookingSubmit(payload: BookingFormPayload) {
  const owner = payload.owner || "客人";
  showToast(
    `${owner}，${payload.phone}，${payload.date} ${payload.time} 的${selection.value.petLabel}${selection.value.sizeLabel}${selection.value.serviceLabel}预约已记录（${selection.value.priceText}），门店会提前准备并回电确认。`
  );
}

onBeforeUnmount(() => {
  window.clearTimeout(toastTimer);
});
</script>

<template>
  <SiteHeader />
  <main id="top">
    <HeroQuickBook
      v-model:pet="selectedPet"
      v-model:size="selectedSize"
      v-model:service="selectedService"
      :selection="selection"
    />
    <ServicesSection />
    <CareSection />
    <PricingSection />
    <ReviewsSection />
    <BookingSection :selection="selection" @submit-booking="handleBookingSubmit" />
  </main>
  <SiteFooter />
  <ToastNotice :message="toastMessage" :show="toastVisible" />
</template>
