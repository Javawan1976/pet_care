<script setup lang="ts">
import { ReceiptText } from "lucide-vue-next";
import { priceRows, serviceProofs } from "@/data/site";
</script>

<template>
  <section class="section pricing" id="pricing" aria-labelledby="pricing-title">
    <div class="section-inner price-layout">
      <div>
        <span class="section-kicker"><ReceiptText />Price</span>
        <h2 class="section-title" id="pricing-title">清楚标价，按体型和毛量确认。</h2>
        <p class="section-lead">以下为常规参考价。严重打结、长毛爆毛、皮肤特殊护理会在洗前沟通，不临时加价。</p>

        <div class="service-proof-grid" aria-label="不同服务项目展示">
          <article v-for="item in serviceProofs" :key="item.title" class="service-proof-card">
            <img :src="item.image" :alt="item.alt">
            <div class="service-proof-copy">
              <div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.copy }}</p>
              </div>
              <div class="service-proof-meta">
                <span>{{ item.tag }}</span>
                <strong>{{ item.price }}</strong>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div class="price-table" role="table" aria-label="洗护价格表">
        <div class="price-row header" role="row">
          <strong role="columnheader">项目</strong>
          <span role="columnheader">小型</span>
          <span role="columnheader">中大型</span>
        </div>
        <div v-for="row in priceRows" :key="row[0]" class="price-row" role="row">
          <strong role="cell">{{ row[0] }}</strong>
          <span role="cell">{{ row[1] }}</span>
          <span role="cell">{{ row[2] }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
