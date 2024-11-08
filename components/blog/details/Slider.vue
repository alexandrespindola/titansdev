<template>
  <header class="blog-header section-padding pb-0">
    <div class="container mt-80">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="caption">
            <div class="sub-title fz-12">
              <a href="#0">
                <span>{{ post.category.title }}</span>
              </a>
            </div>
            <h1 class="fz-55 mt-30">
              {{ post.title }}
            </h1>
          </div>
          <div class="info d-flex mt-40 align-items-center">
            <div class="left-info">
              <div class="d-flex align-items-center">
                <div class="author-info">
                  <div class="d-flex align-items-center">
                    <a href="#0" class="circle-60">
                      <NuxtImg
                        :src="post.cover_image.url"
                        alt=""
                        class="circle-img"
                      />
                    </a>
                    <a href="#0" class="ml-20">
                      <span class="opacity-7">Author</span>
                      <h6 class="fz-16">{{ post.author.name }}</h6>
                    </a>
                  </div>
                </div>
                <!-- <div class="date ml-50">
                  <a href="#0">
                    <span class="opacity-7">Published</span>
                    <h6 class="fz-16">{{ post.publishedAt }}</h6>
                  </a>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="background bg-img mt-80"
      :data-background="post.cover_image.url"
    ></div>
  </header>
</template>

<script setup>

import loadBackgroudImages from '@/common/loadBackgroudImages';

defineProps({
  post: {
    type: Object,
    required: true
  }
});

onMounted(() => {
  loadBackgroudImages();
});

</script>
