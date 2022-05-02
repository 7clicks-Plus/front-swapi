<template>
  <CardIndex>
    <LogoIndex/>
    <div>
      descrição
    </div>
  </CardIndex>
</template>

<script lang="ts">
import CardIndex from '../bosons/CardIndex.vue';
import LogoIndex from '../atoms/LogoIndex.vue'

export default {
  components: {
    CardIndex, LogoIndex
  }
};
</script>
