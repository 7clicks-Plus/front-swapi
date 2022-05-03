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
        <p clickable @click="$router.push('/')" class="text-h6 q-mr-md text-grey-7">FILMS</p>
        <p class="text-bold text-h6 q-mr-md">PEOPLE</p>
        <p class="text-h6 q-mr-md text-grey-7">SPECIES</p>
      </div>
    </div>

    <div class="flex justify-around bg-primary">
      <template v-for="film in data" :key="film">
        <q-card clickable="true" @click="$router.push('/character')" class="shadow-17 size-card q-mb-md">
          <q-card-section class="q-pa-sm">
            <img width="80" :src="film.poster" :alt="film.alt" />
            <p class="text-center text-caption text-bold">
              {{ film.name }}
            </p>
          </q-card-section>
        </q-card>
      </template>
    </div>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//import axios from 'axios';

type Film = {
  poster: string;
  alt: string;
  name: string;
};
export default defineComponent({
  setup () {
    //const api = axios;

    const data = [
      {
        poster:
          'https://images-na.ssl-images-amazon.com/images/I/91eOgodm4nL.jpg',
        alt: 'episode1',
        name: 'The Phantom Manance'
      },
      {
        poster:
          'https://images-na.ssl-images-amazon.com/images/I/91eOgodm4nL.jpg',
        alt: 'episode1',
        name: 'The Phantom Manance'
      },
      {
        poster:
          'https://images-na.ssl-images-amazon.com/images/I/91eOgodm4nL.jpg',
        alt: 'episode1',
        name: 'The Phantom Manance'
      },
      {
        poster:
          'https://images-na.ssl-images-amazon.com/images/I/91eOgodm4nL.jpg',
        alt: 'episode1',
        name: 'The Phantom Manance'
      },
      {
        poster:
          'https://images-na.ssl-images-amazon.com/images/I/91eOgodm4nL.jpg',
        alt: 'episode1',
        name: 'The Phantom Manance'
      },
      {
        poster:
          'https://images-na.ssl-images-amazon.com/images/I/91eOgodm4nL.jpg',
        alt: 'episode1',
        name: 'The Phantom Manance'
      },
      {
        poster:
          'https://images-na.ssl-images-amazon.com/images/I/91eOgodm4nL.jpg',
        alt: 'episode1',
        name: 'The Phantom Manance'
      }
    ] as Film[];

    return { data };
  }
});
</script>

<style scoped>
.shadow {
  box-shadow: 5px 30px 50px 26px rgb(255, 195, 0, 0.3);
}

.size-card {
  width: 95px;
  height: 190px;
}
</style>
