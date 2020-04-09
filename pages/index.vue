<template class="bodyHome">
<v-container class="container">
  <v-layout
    column
    justify-center
    align-center
    class="underFold"
  >
    <!-- NAVBAR LINKS -->
    <v-layout
      row
      justify-start
      class="navbarTitles"
    >
        <nuxt-link to="/" class="navBarLinks">Home</nuxt-link>
        <nuxt-link to="About" class="navBarLinks blogItem">About</nuxt-link>
    </v-layout>
     
    <v-card
      class="mx-auto transform"
      min-width="1045"
      max-width="1045"
    >
    <v-layout row>
       <v-flex md8 lg8 xl8>
        <v-img
          class="white--text align-end firstCard"
          height="225px"
          src="/overHeadStick.jpg"
        >
        </v-img>
      </v-flex>
      <v-flex md4 lg4 xl4>
        <!-- TITLE -->
        <v-card-title>Your Professional Trainer</v-card-title>
      <v-card-subtitle class="pb-0">Private Consultations Available</v-card-subtitle>
      <!-- TEXT -->
      <v-card-text class="text--primary">
        <div>Get In Touch Today</div>
        <div>Get In Shape Today</div>
      </v-card-text>
      <!-- BUTTONS -->
      <v-card-actions>
        <v-layout column>
          <v-btn
            color="orange"
            text
          >
            Book Private Consultation
          </v-btn>
          
          <v-btn
            color="orange"
            text
          >
            Learn More
          </v-btn>
        </v-layout>
      </v-card-actions>
      </v-flex>
    </v-layout>
    </v-card>
  </v-layout>
  <!-- THREE CARDS -->
  <v-layout>
    <articleCards class="transform"
      v-for="article in articles.slice(1,4)"
              :key="article.id"
              :id="article.id"
              :title="article.title"
              :shortDescription="article.shortDescription"
              :posted="article.posted"
              :mainImage="article.mainImage"
              :description="article.description"
              :secondDescription="article.secondDescription"
              :secondImage="article.secondImage" />
  </v-layout>
  </v-container>
</template>

<script>
import articleCards from '../components/articleCards.vue'


export default {
components: {
    articleCards,
  },
  asyncData (context) {
    // Check if we are in the editor mode
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    // Load the JSON from the API
    return context.app.$storyapi.get('cdn/stories', {
      version: version,
      starts_with: 'articles/',
    })
    .then((res) => {
      return {
        articles: res.data.stories.map(ap => {
          return {
            id: ap.slug,
            title: ap.content.Title,
            posted: ap.content.posted,
            shortDescription: ap.content.shortDescription,
            mainImage: ap.content.mainImage
          }
        })
      }
    })
    .catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  }
}
</script>

<style scoped>
/* BIG SCREENS */
.container {
  position: relative;
}
.underFold {
  margin-top: -225px;
  z-index: 1;
}
.transform:hover {
  transform: scale(1.03);
}
.transform {
  transition: all 300ms ease;
  position: relative;
}
.navBarLinks {
  color: white;
  text-decoration: none;
  position: relative;
  
}
.navbarTitles {
  min-width: 1045px;
  margin-bottom: 25px;
}
.blogItem {
  margin-left: 40px !important;
}
.threeCards {
  margin-left: 20px;
  margin-right: 20px;
}
.groupThreeCards {
  margin-top: 42px;
  max-width: 1200px;
}
.bodyHome {
  background: white !important;
}
</style>
