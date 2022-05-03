<template>
  <q-layout class="bg-primary">
    <div class="bg-secondary text-white">
      <q-toolbar>
        <q-space />
        <q-btn color="black" flat round dense icon="search" class="q-mr-xs" />
      </q-toolbar>
    </div>
    <div class="bg-primary q-pa-md">
      <p class="text-caption text-grey-7 text-center">
        <span class="text-bold text-subtitle1">OMG! </span> STAR WARS
      </p>
      <div class="flex">
        <p class="text-bold text-h6 q-mr-md cursor-pointer">FILMS</p>
        <p
          clickable
          @click="$router.push('/People')"
          class="text-h6 q-mr-md text-grey-7"
        >
          PEOPLE
        </p>
        <p class="text-h6 q-mr-md text-grey-7">SPECIES</p>
      </div>
    </div>

    <div class="flex justify-evenly bg-primary">
      <template v-for="film in films" :key="film">
        <q-card
          clickable="true"
          @click="$router.push('/character')"
          class="shadow-17 size-card q-mb-md cursor-pointer"
        >
          <q-card-section class="q-pa-sm">
            <img
              width="100"
              height="120"
              src="../assets/no-image.jpeg"
              :alt="film.alt"
            />
            <p class="text-center text-caption text-bold">
              {{ film.title }}
            </p>
          </q-card-section>
        </q-card>
      </template>
    </div>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import api from '../services/api';

export default defineComponent({
  setup () {
    const films = ref([]);

    const fetchFilms = async () => {
      await api
        .get('/films')
        .then(response => (films.value = response.data.results));
    };

    onMounted(fetchFilms);

    return { films };
  }
});
</script>

<style scoped>
.shadow {
  box-shadow: 5px 30px 50px 26px rgb(255, 195, 0, 0.3);
}

.size-card {
  width: 115px;
  height: 180px;
  border-bottom-right-radius: 15px;
}
</style>
