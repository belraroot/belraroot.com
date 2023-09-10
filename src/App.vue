<template>
  <HeaderSection/>
</template>

<script setup>
import {defineProps} from 'vue'
import './App.css'

import HeaderSection from "@/components/HeaderSection.vue";

defineProps({
  title: String
})

document.title = 'Codecomodo - The PHP Framework for Native Developers';
</script>