<template>
  <section class="blog section-padding">
    <div class="container">
      <div class="row xlg-marg justify-center">
        <div class="w-[72%]">
          <div class="main-post">
            <div class="item pb-60">
              <article>
                <div class="text">
                  <p>
                    <span class="spec-letter">Q</span>
                    {{ post.content }}
                  </p>
                </div>
                <div class="text">
                  <p>
                    However, Apple might not include it in the Air series when
                    it launches it. As for the notebook’s release date, the
                    15-inch MacBook isn’t coming soon. It’ll get a late 2023
                    release at best, according to the new claims.
                  </p>
                </div>
                <div class="title mt-30">
                  <h4>What sizes do MacBook Airs come in?</h4>
                </div>
                <div class="text mt-20">
                  <p>
                    Apple currently sells only one MacBook Air size. The laptop
                    comes in a 13-inch version that matches the pre-2021 13-inch
                    MacBook Pro size. Previously, Apple sold an 11-inch MacBook
                    Air, but the company discontinued that model in 2017.
                  </p>
                </div>
              </article>

              <div class="post-qoute mt-50">
                <h6 class="fz-20">
                  <span class="l-block">
                    And the day came when the risk to remain tight in a bud was
                    more painful than the risk it took to blossom.
                  </span>
                  <span class="sub-title mt-20 mb-0"> - UiCamp</span>
                </h6>
              </div>

              <div class="mb-50 mt-50">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="iner-img sm-mb30">
                      <img src="/dark/assets/imgs/blog/b2.jpg" alt="" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="iner-img">
                      <img src="/dark/assets/imgs/blog/b3.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="title mb-10">
                <h4>Apple currently sells.</h4>
              </div>

              <div class="text mb-20">
                <p>
                  A new report said earlier this week that Apple is working on a
                  brand new laptop. Apple plans to release a 15-inch MacBook Air
                  in 2023, a first for the Air series. A trusted Apple insider
                  with a proven track record confirmed that Apple is working on
                  the larger MacBook Air.
                </p>
              </div>

              <div class="unorder-list mb-30">
                <h6 class="mb-15">Ordered & Unordered Lists.</h6>
                <ul class="rest">
                  <li>Yet this above sewed flirted opened ouch</li>
                  <li>Goldfinch realistic sporadic ingenuous</li>
                  <li>
                    Abominable this abidin far successfully then like piquan
                  </li>
                </ul>
              </div>

              <div class="order-list mb-30">
                <h6 class="mb-15">Ordered & Unordered Lists.</h6>
                <ul class="rest">
                  <li>
                    <span>01 -</span> Yet this above sewed flirted opened ouch
                  </li>
                  <li>
                    <span>02 -</span> Goldfinch realistic sporadic ingenuous
                  </li>
                  <li>
                    <span>03 -</span> Abominable this abidin far successfully
                    then like piquan
                  </li>
                </ul>
              </div>

              <div class="text">
                <p>
                  However, Apple might not include it in the Air series when it
                  launches it. As for the notebook’s release date, the 15-inch
                  MacBook isn’t coming soon. It’ll get a late 2023 release at
                  best, according to the new claims.
                </p>
              </div>
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
                    <img src="/dark/assets/imgs/blog/author.png" alt="" class="circle-img" />
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

defineProps({
  post: {
    type: Object,
    required: true
  }
});

</script>