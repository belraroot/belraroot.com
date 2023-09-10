<template>
  <Header/>
</template>

<script setup>
import {defineProps} from 'vue'
import './App.css'

import Header from "@/components/Header.vue";

defineProps({
  title: String
})

document.title = 'Codecomodo - The PHP Framework for Native Developers';
</script>