<template>
        <nuxt-link 
            :to="id"
            class="textDeco"
        >
        <v-layout row class="groupThreeCards">
            <!-- BIG SCREENS -->
                    <v-card class="threeCards" min-height="490" max-height="490">
                        <v-img 
                            max-width="325"
                            min-width="325"
                            max-height="230"
                            :src="mainImage"
                        >
                        </v-img>
                        <v-layout column >
                            <v-list-item two-line>
                            <v-list-item-content>
                                <h2>
                                    {{ title }}
                                </h2>
                                <p class="mt-3">
                                    {{ posted }} 
                                </p>
                                <p class="mt-3">
                                    {{ shortDescription }} 
                                </p>
                            </v-list-item-content>
                            </v-list-item>
                            <nuxt-link 
                                :to="id"
                                class="textDeco"
                            >
                                <v-card-actions>    
                                        <v-btn color="#38ef7d" class="readMore" text>Read More</v-btn>
                                </v-card-actions>
                            </nuxt-link>
                        </v-layout>
                    </v-card>
        </v-layout>
        <v-layout class="hidden-md-and-up">
            <!-- MOBILE SCREEN -->
            <v-flex xs12 sm12 class="mt-5 hidden-sm-and-up">
                    <v-card
                        max-width="325"
                        max-height="230"
                    >
                        <v-list-item two-line>
                            <v-list-item-content>
                                <h2 class="titleMobile">{{ title }}</h2>
                                <p class="mt-3 list-item-description">
                                        {{ posted }} 
                                </p>
                                <p class="mt-3 list-item-description--mobile">
                                    {{ shortDescription }} 
                                </p>
                            </v-list-item-content>
                        <v-img 
                            :src="mainImage"
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
       shortDescription: {
          type: String,
          required: true
      },
      mainImage: {
          type: String,
          required: true
      },
      id: {
          type: String,
          required: true
      },
  }
}
</script>

<style scoped>
.threeCards {
  margin-left: 20px;
  margin-right: 20px;
  max-width: 330px;
}
.groupThreeCards {
  margin-left: 10px;
  margin-top: 42px;
  max-width: 1200px;
}
.textDeco {
    text-decoration: none;
}
.readMore {
    position: absolute;
    bottom: 0;
}
</style>