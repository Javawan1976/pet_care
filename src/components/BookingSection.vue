<script setup lang="ts">
import { reactive } from "vue";
import {
  CalendarCheck,
  ClipboardCheck,
  Clock4,
  MapPin,
  MessageCircle,
  MessageCircleHeart,
  PhoneCall,
  Sparkles
} from "lucide-vue-next";
import {
  bookingPreparations,
  storeInfo,
  timeSlots,
  todayIso,
  type BookingFormPayload,
  type BookingSelection
} from "@/data/site";

defineProps<{
  selection: BookingSelection;
}>();

const emit = defineEmits<{
  "submit-booking": [payload: BookingFormPayload];
}>();

const today = todayIso();
const form = reactive<BookingFormPayload>({
  owner: "",
  phone: "",
  date: today,
  time: timeSlots[0],
  note: ""
});

const storeIconMap = {
  MapPin,
  Clock4,
  PhoneCall,
  MessageCircle
};

const preparationIconMap = {
  ClipboardCheck,
  Sparkles,
  MessageCircleHeart
};

function handleSubmit() {
  emit("submit-booking", { ...form });
  form.owner = "";
  form.phone = "";
  form.date = todayIso();
  form.time = timeSlots[0];
  form.note = "";
}
</script>

<template>
  <section class="section booking-section" id="booking" aria-labelledby="booking-title">
    <div class="section-inner booking-layout">
      <div class="store-info-panel">
        <h2 id="booking-title">预约到店</h2>
        <p>我们会按你选择的宠物类型、体型和服务提前安排洗护师、护理用品和对应时长。</p>

        <div class="store-info-list" aria-label="门店信息">
          <div v-for="item in storeInfo" :key="item.label" class="store-info-item">
            <span class="store-info-icon"><component :is="storeIconMap[item.icon]" /></span>
            <div>
              <strong>{{ item.label }}</strong>
              <span>{{ item.value }}</span>
            </div>
          </div>
        </div>

        <div class="booking-ready-list" aria-label="到店前准备内容">
          <strong>到店前我们会准备</strong>
          <span v-for="item in bookingPreparations" :key="item.copy">
            <component :is="preparationIconMap[item.icon]" />{{ item.copy }}
          </span>
        </div>
      </div>

      <aside class="book-panel">
        <div class="book-panel-head">
          <h2>确认预约信息</h2>
          <p>提交后店员会按所选时段回电确认，并提前准备对应服务。</p>
        </div>
        <form @submit.prevent="handleSubmit">
          <div class="booking-summary" aria-live="polite">
            <div class="booking-summary-title">
              <span>已选择服务</span>
              <strong>{{ selection.priceText }}</strong>
            </div>
            <div class="booking-summary-grid">
              <div class="booking-summary-item">
                <span>宠物类型</span>
                <strong>{{ selection.petLabel }}</strong>
              </div>
              <div class="booking-summary-item">
                <span>体型</span>
                <strong>{{ selection.sizeLabel }}</strong>
              </div>
              <div class="booking-summary-item">
                <span>服务</span>
                <strong>{{ selection.serviceLabel }}</strong>
              </div>
            </div>
          </div>

          <div class="form-two">
            <div class="field">
              <label for="owner">用户姓名</label>
              <input id="owner" v-model="form.owner" name="owner" autocomplete="name" required placeholder="你的称呼">
            </div>
            <div class="field">
              <label for="phone">手机号码</label>
              <input id="phone" v-model="form.phone" name="phone" inputmode="tel" autocomplete="tel" required placeholder="138 0000 0000">
            </div>
          </div>

          <div class="form-two">
            <div class="field">
              <label for="date">到店日期</label>
              <input id="date" v-model="form.date" name="date" type="date" :min="today" required>
            </div>
            <div class="field">
              <label for="time">到店时间</label>
              <select id="time" v-model="form.time" name="time" required>
                <option v-for="slot in timeSlots" :key="slot">{{ slot }}</option>
              </select>
            </div>
          </div>

          <div class="field">
            <label for="note">备注</label>
            <textarea id="note" v-model="form.note" name="note" placeholder="例如：胆小、皮肤敏感、需要接送、毛结情况"></textarea>
          </div>

          <div class="submit-row">
            <span class="form-note">门店确认前不会锁定时段。</span>
            <button class="btn btn-primary" type="submit"><CalendarCheck />提交预约</button>
          </div>
        </form>
      </aside>
    </div>
  </section>
</template>
