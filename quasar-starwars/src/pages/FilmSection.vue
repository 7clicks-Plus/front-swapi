<template>
  <q-layout class="bg-primary">
    <div class="bg-secondary" style="height: 150px">
      <q-toolbar>
        <q-space />
        <q-btn flat round dense class="q-mr-xs">
          <q-icon
            size="10"
            color="black"
            name="mdi-arrow-left"
            clickable
            @click="$router.back()"
          />
        </q-btn>
      </q-toolbar>
    </div>

    <Loading v-if="loading" />
    <div v-else>
      <q-card
        class="size-card flex flex-center q-mt-lg q-mr-lg q-ml-lg q-mb-md"
        style="position: relative"
      >
        <img
          src="../assets/no-image.jpeg"
          alt="Fiml"
          class="img-film shadow-8"
        />
        <div style="width: 85%">
          <h5 class="text-bold text-uppercase border-name-film text-center">
            {{ film.title }}
          </h5>
        </div>
      </q-card>
      <div class="row q-mb-md">
        <q-card style="width: 41%" class="col-6 q-ml-lg q-mr-sm">
          <p class="sub-title-size text-grey-6 q-pa-sm">Director</p>
          <a class="text-links flex flex-center q-pb-lg" href="#">{{
            film.director
          }}</a>
        </q-card>
        <q-card style="width: 41%" class="col-6 q-mr-lg q-ml-sm">
          <p class="sub-title-size text-grey-6 q-pa-sm">Episode</p>
          <a class="text-links flex flex-center q-pb-lg" href="#">{{
            film.episode_id
          }}</a>
        </q-card>
      </div>

      <h6 class="q-ml-lg text-uppercase text-grey-8">Characters</h6>

      <div class="row">
        <template v-for="ch in film.characters" :key="ch">
          <div style="width: 150px" class="q-ml-lg">
            <img width="150" src="../assets/no-image.jpeg" alt="" />
            <p class="text-caption text-center text-bold">
              {{ ch[ch] }}
            </p>
          </div>
        </template>
      </div>

      <h6 class="q-ml-lg text-uppercase text-grey-8">Vehicles</h6>

      <div class="row">
        <template v-for="vehicle in film.vehicles" :key="vehicle">
          <div style="width: 150px" class="q-ml-lg">
            <img width="150" src="../assets/no-image.jpeg" alt="" />
            <p class="text-caption text-center text-bold">
              {{ vehicle.vehicles }}
            </p>
          </div>
        </template>
      </div>
    </div>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import api from '../services/api';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();
    const film = ref([]);
    const loading = ref(true);

    const fetchFilm = async () => {
      const id = route.params.id;
      const response = await api.get(`films/${id}`);
      film.value = response.data;
      loading.value = false;
    };

    onMounted(fetchFilm);

    return { film, loading };
  },
});
</script>

<style scoped>
.img-film {
  width: 230px;
  position: absolute;
  top: -85px;
  left: 50px;
  border: 3px solid rgb(198, 209, 219);
}

.size-card {
  padding-top: 8rem;
}

.border-name-film {
  border-top: 1px solid rgb(241, 206, 5);
  border-bottom: 1px solid rgb(241, 206, 5);
  padding: 1rem 0 1rem 0;
}

.sub-title-size {
  font-size: 9px;
}

.text-links {
  color: rgb(214, 185, 21);
}
</style>
