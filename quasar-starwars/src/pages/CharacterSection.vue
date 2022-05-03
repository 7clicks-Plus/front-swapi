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

    <q-card
      class="size-card flex flex-center q-mt-lg q-mr-lg q-ml-lg q-mb-md"
      style="position: relative"
    >
      <img
        src="../assets/no-image.jpeg"
        alt="Character"
        class="img-character shadow-8"
      />
      <div style="width: 85%">
        <h5 class="text-bold text-uppercase border-name-character text-center">
          {{ character.name }}
        </h5>
      </div>
      <div class="q-pb-md" style="margin-top: -30px">
        <p class="text-grey-6 text-center">TATOOINE</p>
        <template v-for="film in data" :key="film">
          <p class="q-mt-md">
            Episode III: <span class="text-bold">{{ film.episode }}</span>
          </p>
        </template>
      </div>
    </q-card>
    <div class="row q-mb-md">
      <q-card style="width: 41%" class="col-6 q-ml-lg q-mr-sm">
        <p class="sub-title-size text-grey-6 q-pa-sm">HOME WORLD</p>
        <a class="text-links flex flex-center q-pb-lg" href="#">{{
          character.homeworld
        }}</a>
      </q-card>
      <q-card style="width: 41%" class="col-6 q-mr-lg q-ml-sm">
        <p class="sub-title-size text-grey-6 q-pa-sm">SPECIES</p>
        <a class="text-links flex flex-center q-pb-lg" href="#">HUMAN</a>
      </q-card>
    </div>

    <div class="row q-mb-md">
      <q-card style="width: 26%" class="col-4 q-ml-lg q-mr-sm">
        <p class="sub-title-size text-grey-6 q-pa-sm">DOB</p>
        <p class="flex flex-center q-pb-lg">{{ character.birth_year }}</p>
      </q-card>
      <q-card style="width: 26%" class="col-4 q-mr-sm q-ml-sm">
        <p class="sub-title-size text-grey-6 q-pa-sm">HEIGHT</p>
        <p class="flex flex-center q-pb-lg">{{ character.height }}</p>
      </q-card>
      <q-card style="width: 26%" class="col-4 q-mr-lg q-ml-sm">
        <p class="sub-title-size text-grey-6 q-pa-sm">MASS</p>
        <p class="flex flex-center q-pb-lg">{{ character.mass }}</p>
      </q-card>
    </div>

    <div class="row">
      <q-card style="width: 26%" class="col-4 q-ml-lg q-mr-sm">
        <p class="sub-title-size text-grey-6 q-pa-sm">GENDER</p>
        <p class="flex flex-center q-pb-lg">{{ character.gender }}</p>
      </q-card>
      <q-card style="width: 26%" class="col-4 q-mr-sm q-ml-sm">
        <p class="sub-title-size text-grey-6 q-pa-sm">HAIR</p>
        <p class="flex flex-center q-pb-lg">{{ character.hair_color }}</p>
      </q-card>
      <q-card style="width: 26%" class="col-4 q-mr-lg q-ml-sm">
        <p class="sub-title-size text-grey-6 q-pa-sm">SKIN</p>
        <p class="flex flex-center q-pb-lg">{{ character.skin_color }}</p>
      </q-card>
    </div>

    <h6 class="q-ml-lg text-uppercase text-grey-8">Films</h6>

    <div class="row">
      <template v-for="film in character" :key="film">
        <div style="width: 105px" class="q-ml-md">
          <img width="100" src="../assets/no-image.jpeg" alt="" />
          <p class="text-caption text-center text-bold">{{ film.film }}</p>
        </div>
      </template>
    </div>

    <h6 class="q-ml-lg text-uppercase text-grey-8">Starships</h6>

    <div class="row">
      <template v-for="starship in character" :key="starship">
        <div style="width: 150px" class="q-ml-lg">
          <img width="150" height="120" src="../assets/no-image.jpeg" alt="" />
          <p class="text-caption text-center text-bold">{{ starship.starships }}</p>
        </div>
      </template>
    </div>

    <h6 class="q-ml-lg text-uppercase text-grey-8">vehicles</h6>

    <div class="row">
      <template v-for="vehicle in character" :key="vehicle">
        <div style="width: 150px" class="q-ml-lg">
          <img width="150" height="120" src="../assets/no-image.jpeg" alt="" />
          <p class="text-caption text-center text-bold">{{ vehicle.vehicles }}</p>
        </div>
      </template>
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
    const character = ref([]);


    const fetchCharacter = async () => {
      const id = route.params.id
      await api.get(`people/${id}`).then((response) => {
        character.value = response.data;
      });
    };


    onMounted(fetchCharacter);


    return {  character };
  },
});
</script>

<style scoped>
.img-character {
  width: 230px;
  position: absolute;
  top: -85px;
  left: 50px;
  border: 3px solid rgb(198, 209, 219);
}

.size-card {
  padding-top: 280px;
}

.border-name-character {
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
