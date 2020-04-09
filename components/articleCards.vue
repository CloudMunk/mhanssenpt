<template>
        <nuxt-link 
            :to="id"
            class="noUnderline"
        >
        <v-layout justify-start>
            <!-- BIG SCREENS -->
            <v-flex xs12 sm12 class="mt-5 hidden-sm-and-down">
                    <v-card
                        min-width="534"
                        max-width="534"
                        outlined
                        class="backgroundLinear"
                    >
                        <v-list-item two-line>
                            <v-list-item-content>
                                <h2>{{ title }}</h2>
                                    <p class="mt-3 list-item-description">
                                        {{ intro }} 
                                    </p>
                                </v-list-item-content>
                        <v-img 
                            :src="mainImage"
                            class="articleImages"
                            contain
                        >
                        </v-img>
                        </v-list-item>
                        <nuxt-link 
                            :to="id"
                            class="noUnderline"
                        >
                        <v-card-actions>    
                                <v-btn color="#38ef7d" text>Read More</v-btn>
                        </v-card-actions>
                        </nuxt-link>
                    </v-card>
            </v-flex>
            <!-- MOBILE SCREEN -->
            <v-flex xs12 sm12 class="mt-5 hidden-sm-and-up">
                    <v-card
                        min-width="320"
                        max-width="320"
                        outlined
                        class="backgroundLinear mobileCard"
                    >
                        <v-list-item two-line>
                            <v-list-item-content>
                                <h2 class="titleMobile">{{ title }}</h2>
                                <p class="mt-3 list-item-description--mobile">
                                    {{ intro }} 
                                </p>
                            </v-list-item-content>
                        <v-img 
                            :src="image"
                            class="articleImages--mobile"
                            contain
                        >
                        </v-img>
                        </v-list-item>
                        <nuxt-link :to="id" class="noUnderline">
                            <v-card-actions>    
                                    <v-btn color="#38ef7d" text class="buttonMobile">Read More</v-btn>
                            </v-card-actions>
                        </nuxt-link>
                    </v-card>
            </v-flex>
        </v-layout> 
    </nuxt-link>
</template>

<script>

export default {
  props: {
      title: {
          type: String,
          required: true
      },
      posted: {
          type: String,
          required: true
      },
      mainImage: {
          type: String,
          required: true
      },
      description: {
          type: String,
          required: true
      },
      descriptionTwo: {
          type: String,
          required: false
      },
      secondImage: {
          type: String,
          required: true
      },
      id: {
          type: String,
          required: true
      },
      shortDescription: {
          type: String,
          required: true
      }
  }
}
</script>

<style scoped>
.backgroundLinear {
    background-color: #121030 !important;
}
.noUnderline {
    text-decoration: none;
}
.articleImages {
    max-height: 140px;
    max-width: 170px;
    min-height: 120px !important;
    min-width: 150px !important;
    margin-top: 5px;
}
.list-item-description {
    font-size: 12px;
    max-width: 350px;
    white-space: pre-line;
}
.list-item-description--mobile {
    font-size: 8px;
    max-width: 350px;
    white-space: pre-line;
}
.articleImages--mobile {
    max-height: 80px;
    max-width: 80px;
    margin-top: -15px;
}
.titleMobile {
    font-size: 12px;
}
.buttonMobile {
    font-size: 8px;
    margin-top: -30px;
}
.mobileCard {
    height: auto;
}
</style>