<template>
  <section class="blog section-padding">
    <div class="container">
      <div class="row xlg-marg justify-center">
        <div class=" max-w-6xl">
          <div class="main-post">
            <div class="item pb-60">
              <article>
                <div v-if="parsedContent" v-html="parsedContent" class="md-content"></div>
                <div v-else>Conteúdo não disponível</div>
              </article>
            </div>
            <div class="info-area flex pt-50 bord-thin-top">
              <div>
                <div class="tags flex">
                  <div class="valign">
                    <span>Tags :</span>
                  </div>
                  <div>
                    <NuxtLink href="/blog">{{ post.category.title }}</NuxtLink>
                  </div>
                </div>
              </div>
              <div class="ml-auto">
                <div class="share-icon flex">
                  <div class="valign">
                    <span>Share :</span>
                  </div>
                  <div>
                    <a href="https://www.facebook.com/">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com/">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.youtube.com/">
                      <i class="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="author-area mt-50 bord-thin-bottom">
              <div class="flex">
                <div class="author-img mr-30">
                  <div class="img">
                    <NuxtImg src="/dark/assets/imgs/blog/author.png" alt="" class="circle-img" />
                  </div>
                </div>
                <div class="cont valign">
                  <div class="full-width">
                    <h6 class="fw-600 mb-10"> {{ post.author.name }}</h6>
                    <p>
                      Nulla eleifend, lectus eu gravida facilisis, ipsum metus
                      faucibus eros, vitae vulputate nibh libero ac metus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import MarkdownIt from 'markdown-it';

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
});

const md = new MarkdownIt();
const parsedContent = ref('');

onMounted(() => {
  console.log('Post content:', props.post.content);
  if (props.post.content) {
    parsedContent.value = md.render(props.post.content);
    console.log('Parsed content:', parsedContent.value);
  } else {
    console.log('Post content is empty or undefined');
  }
});
</script>

<style lang="scss">
.md-content {
  h1 {
    font-size: 2em;
    margin-bottom: 0.5em;
  }

  h2 {
    font-size: 1.5em;
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: 1.2em;
    margin-bottom: 0.5em;
  }

  p {
    margin-bottom: 1em;
  }

  img {
    max-width: 600px;
    height: auto;
  }

  blockquote {
    border-left: 4px solid #ccc;
    padding-left: 1em;
    margin-left: 0;
    font-style: italic;
  }

  ul,
  ol {
    margin-bottom: 1em;
    padding-left: 2em;
  }
}
</style>