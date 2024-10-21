<template>
  <section class="blog-crev section-padding">
    <div class="container">
      <div v-if="error">
        <p>Erro ao carregar posts: {{ error.message }}</p>
      </div>
      <div v-else-if="posts && posts.data">
        <div class="row">
          <div class="col-lg-4" v-for="post in posts.data" :key="post.id">
            <div class="item sub-bg mb-40">
              <div class="img">
                <img :src="post.image || '/dark/assets/imgs/blog/b/7.jpg'" alt="" />
                <div class="tag sub-bg">
                  <span>{{ post.category || 'Envato' }}</span>
                  <div class="shap-right-bottom">
                    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#1d1d1d"></path>
                    </svg>
                  </div>
                  <div class="shap-left-bottom">
                    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#1d1d1d"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="cont">
                <div class="date fz-13 text-u ls1 mb-10 opacity-7">
                  <NuxtLink :to="{ path: `/blog/${post.slug}` }">{{ formatDate(post.createdAt) }}</NuxtLink>
                </div>
                <h5>
                  <NuxtLink :to="`/blog/${post.slug}`" @click="handleClick($event, post.slug)">
                    {{ post.title }}
                  </NuxtLink>
                </h5>
                <a :href="`/blog/${post.slug}`">{{ post.title }}</a>
                <NuxtLink :to="`/blog/${post.slug}`" @click="logClick(post.slug)"
                  class="d-flex align-items-center mt-30">
                  <span class="text mr-15">Ler Mais</span>
                  <span class="ti-arrow-top-right"></span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Carregando posts...</p>
      </div>
    </div>
  </section>
</template>

<script setup>

const config = useRuntimeConfig();

const { data: posts, error } = await useFetch(`${config.public.strapiUri}/api/posts`, {
  headers: {
    'Authorization': `Bearer ${config.strapiApiToken}`
  }
});

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('es-ES', options);
}

</script>