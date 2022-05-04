<template>
  <q-layout class="bg-primary">
    <Header />
    <SubHeader />

    <Loading v-if="loading" />

    <div class="flex justify-evenly bg-primary">
      <template v-for="specie in species" :key="specie">
        <q-card
          clickable="true"
          @click="showData(specie.url)"
          class="shadow-1 size-card q-mb-sm cursor-pointer"
        >
          <q-card-section class="q-pa-sm">
            <img width="100" src="../assets/no-image.jpeg" :alt="specie.alt" />
            <p class="text-center text-caption text-bold">
              {{ specie.name }}
            </p>
          </q-card-section>
        </q-card>
      </template>
    </div>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import api from '../services/api';
import Header from 'components/molecules/Header.vue';
import Loading from '../components/molecules/Loading.vue';
import SubHeader from 'src/components/molecules/SubHeader.vue';

export default defineComponent({
  components: { Header, SubHeader, Loading },
  setup() {
    const species = ref([]);
    console.log(species);
    const loading = ref(true);

    const fetchSpecies = async () => {
      const response = await api.get('/species');
      species.value = response.data.results;
      loading.value = false;
    };

    const router = useRouter();

    const showData = (url: string) => {
      const id = url.substring(url.length - 2, url.length - 1);
      void router.push(`/specie/${id}`);
    };

    onMounted(fetchSpecies);

    return { species, showData, loading };
  },
});
</script>

<style scoped>
.size-card {
  width: 115px;
  margin: 5px;
  border-bottom-right-radius: 15px;
}
</style>
