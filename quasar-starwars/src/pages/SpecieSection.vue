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
          src="images/no-image.jpeg"
          alt="Fiml"
          class="img-specie shadow-8"
        />
        <div style="width: 85%">
          <h5 class="text-bold text-uppercase border-name-specie text-center">
            {{ specie.name }}
          </h5>
        </div>
      </q-card>
      <div class="row q-mb-md">
        <q-card style="width: 41%" class="col-6 q-ml-lg q-mr-sm">
          <p class="sub-title-size text-grey-6 q-pa-sm">Language</p>
          <a class="text-links flex flex-center q-pb-lg" href="#">
            {{ specie.language }}
          </a>
        </q-card>
        <q-card style="width: 41%" class="col-6 q-mr-lg q-ml-sm">
          <p class="sub-title-size text-grey-6 q-pa-sm">Classification</p>
          <a class="text-links flex flex-center q-pb-lg" href="#">
            {{ specie.classification }}
          </a>
        </q-card>
      </div>

      <h6 class="q-ml-lg text-uppercase text-grey-8">people</h6>

      <div class="row">
        <template v-for="item in specie.people" :key="item">
          <div style="width: 150px" class="q-ml-lg">
            <img width="150" src="images/no-image.jpeg" alt="" />
            <p class="text-caption text-center text-bold">
              {{ item.item }}
            </p>
          </div>
        </template>
      </div>

      <h6 class="q-ml-lg text-uppercase text-grey-8">Films</h6>

      <div class="row">
        <template v-for="film in specie.films" :key="film">
          <div style="width: 150px" class="q-ml-lg">
            <img width="150" src="images/no-image.jpeg" alt="" />
            <p class="text-caption text-center text-bold">
              {{ film.films }}
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
import Loading from 'components/molecules/Loading.vue';

export default defineComponent({
  components: { Loading },

  setup() {
    const route = useRoute();
    const specie = ref([]);
    const loading = ref(true);

    const fetchSpecie = async () => {
      const id = route.params.id;
      const response = await api.get(`species/${id}`);
      specie.value = response.data;
      loading.value = false;
    };

    onMounted(fetchSpecie);

    return { specie, loading };
  },
});
</script>

<style scoped>
.img-specie {
  width: 230px;
  position: absolute;
  top: -85px;
  left: 50px;
  border: 3px solid rgb(198, 209, 219);
}

.size-card {
  padding-top: 8rem;
}

.border-name-specie {
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
