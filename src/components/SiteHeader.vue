<script setup lang="ts">
import { CalendarCheck, PawPrint } from "lucide-vue-next";
</script>

<template>
  <header class="topbar">
    <a class="brand" href="#top" aria-label="泡泡尾巴首页">
      <span class="brand-mark"><PawPrint /></span>
      <span>泡泡尾巴</span>
    </a>
    <nav class="nav-links" aria-label="主导航">
      <a href="#services">服务</a>
      <a href="#care">护理</a>
      <a href="#pricing">价格</a>
      <a href="#reviews">口碑</a>
      <a class="nav-cta" href="#booking"><CalendarCheck />预约</a>
    </nav>
  </header>
</template>
