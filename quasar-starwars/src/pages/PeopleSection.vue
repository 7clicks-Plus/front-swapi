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
        <p
          clickable
          @click="$router.push('/')"
          class="text-h6 q-mr-md text-grey-7"
        >
          FILMS
        </p>
        <p class="text-bold text-h6 q-mr-md cursor-pointer">PEOPLE</p>
        <p class="text-h6 q-mr-md text-grey-7">SPECIES</p>
      </div>
    </div>

    <div class="flex justify-evenly bg-primary">
      <template v-for="character in characters" :key="character">
        <q-card
          clickable="true"
          @click="showData(character.url)"
          class="shadow-17 size-card q-mb-sm cursor-pointer"
        >
          <q-card-section class="q-pa-sm">
            <img
              width="100"
              height="120"
              src="../assets/no-image.jpeg"
              :alt="character.alt"
            />
            <p class="text-center text-caption text-bold">
                {{ character.name }}
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

export default defineComponent({
  setup () {
    const characters = ref([]);
    console.log(characters)

    const fetchCharacters = async () => {
      await api.get('/people').then(response => {
        characters.value = response.data.results;
      });
    };


    const router = useRouter();

    const showData = (url: string) => {
      const id = url.substring(url.length - 2, url.length - 1)
     void router.push(`/person/${id}`)
    }

    onMounted(fetchCharacters);

    return { characters, showData };
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
