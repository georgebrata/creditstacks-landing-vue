<template>
  <div id="app">
    <nav class="header w-full p-6">
      <div v-if="page.nav.html" v-html="page.nav.html"></div>
      <ul v-else class="md:flex">
        <li class="mr-3 p-8 w-full lg:w-1/3">
          <img :src="page.logoUrl" class="mx-auto" />
        </li>
        <li class="-mt-2 w-full lg:w-1/3">
          <img :src="page.cardImageUrl" class="mx-auto" style="max-height: 15vh;" />
        </li>
        <li class="mr-3 p-8 w-full lg:w-1/3">
          <img :src="page.infoImageUrl" class="mx-auto" />
        </li>
      </ul>
    </nav>
    <main class="flex flex-col">
      <div v-if="page.heroImageUrl" class="mx-auto flex justify-center hero-image-container w-3/4 md:w-full">
        <img :src="page.heroImageUrl" style="max-height: 30vh;" />
      </div>
      <div v-if="page.c2aLink" class="mx-auto flex justify-center w-3/4 md:w-1/4 mt-8 mb-8">
        <a :href="page.c2aLink" class="w-full">
          <button class="c2a-btn w-full ">{{page.c2aLinkTitle}}</button>
        </a>
      </div>
      <div v-if="page.c2aTitle" class="mx-auto m-2 mb-8">
        <h1 class="c2a-title mb-2 mt-0">{{page.c2aTitle}}</h1>
      </div>
    </main>
    <footer id="app-footer" class="w-full">
      <div class="md:flex justify-between">
        <div class="w-full md:w-1/3 p-8">
          <img
            class="mb-2"
            src="https://landing.creditstacks.com/wp-content/uploads/2020/03/logo.svg"
          />
          <ul class="footer-links flex content-start flex-wrap text-left">
            <li class="w-1/2" v-for="link in page.footerLinks" :key="link.href+link.title">
              <a class="footer-link w-full" :href="link.href">{{link.title}}</a>
            </li>
          </ul>
        </div>
        <div class="w-2/3 p-8">
          <img
            class="mb-8"
            src="https://landing.creditstacks.com/wp-content/themes/creditstacks/img/banks_1.svg"
          />
          <div
            :class="`footer-text text-${text.align}`"
            v-for="text in page.footerTexts"
            :key="text.textHtml"
          >
            <div>
              <h1 v-if="text.titleHtml" v-html="text.titleHtml"></h1>
              <p v-if="text.textHtml" v-html="text.textHtml"></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { landing1 } from "./fakeData";

export default {
  name: "App",
  data() {
    return {
      page: landing1
    };
  }
  // computed: {
  //   cPage() {
  //     let compiledPage = Object.assign({}, this.page);
  //     for (let key of Object.keys(this.page)) {
  //       if (this.page.nav.html.indexOf("{" + key + "}") > -1) {
  //         compiledPage.nav.html = this.page.nav.html.replace(
  //           "{" + key + "}",
  //           this.page[key]
  //         );
  //       }
  //       // other html elements
  //     }

  //     return compiledPage;
  //   }
  // }
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
}

#app {
  text-align: center;
  color: white;
  background-color: black;
  height: 100vh;
}
main,
nav {
  background: darkgray;
  padding-bottom: 10px;
}
.c2a-btn {
  padding: 15px 50px;
  background: linear-gradient(95deg, #ff5300 0, #ff7d3e 100%) no-repeat
    padding-box;
  border-radius: 10px;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
}

.c2a-title {
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0;
  margin-top: 66px;
  color: #fff;
  padding: 0 15px;
}

footer {
  background: black;
}
.footer-links {
  list-style: none;
}
.footer-link {
  color: white;
  line-height: 1.9em;
  font-size: 11px;
}
.footer-link:hover {
  text-decoration: underline;
}
.footer-text {
  font-size: 11px;
  color: #fff;
  margin-top: 20px;
}
.footer-text p {
  margin-top: 20px;
}
.hero-image-container img {
  border-radius: 10px;
}
.hero-image-container img {
  -webkit-box-shadow: 0 20px 99px #000;
  box-shadow: 0 20px 99px #000;
  border-radius: 10px;
  opacity: 1;
  background: none !important;
}
.footer-text a {
  text-decoration: underline;
}
#app-footer {
  height: auto;
}
</style>

<style src="./assets/css/style.css">
</style>
