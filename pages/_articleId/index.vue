<template>
    <v-container fluid>
        <!-- BIG SCREENS -->
        <v-layout class="hidden-sm-and-down" >
            <v-flex lg12 xl12>
                <!-- FEATURE IMAGE -->
                    <v-layout v-if="image" class="article-image" :style="{backgroundImage: 'url('+ image +')'}">
                    </v-layout>
                    <v-layout justify-start>
                            <v-card class="introCard--bigScreens">
                                <h4 class="introduction--Bigscreens">
                                        {{ intro }}
                                </h4>
                            </v-card> 
                    </v-layout> 
                <h1 class="mt-5"> {{ title }} </h1>
                <!-- SECTION ONE -->
                    <v-layout justify-center>
                        <!-- FIRST PARAGRAPH -->
                        <p class="article--description mt-5"> {{ description }} </p>
                    </v-layout>
                    <v-layout justify-center>
                        <!-- SECOND IMAGE -->
                        <v-img 
                            class="secondImage"
                            :src="secondImage"
                        >
                        </v-img>
                    </v-layout>
                <!-- SECTION TWO -->
                    <v-layout justify-center>
                        <!-- SECOND PARAGRAPH -->
                        <p class="article--description--TWO mt-5">
                            {{ descriptionTwo }}
                        </p>
                    </v-layout>
            </v-flex>  
        </v-layout>  
        <!-- MOBILE SCREENS -->
        <v-layout class="hidden-md-and-up">
            <v-flex lg12 xl12>
                <v-layout justify-center>
                    <h1 class="mt-5 titleMobile"> {{ title }} </h1>
                </v-layout>
                <!-- TITLE FOR THE ARTICLE MOBILE -->  
                <v-layout justify-center>
                        <v-card class="introCardMobile">
                            <h4 class="introductionMobile">
                                    {{ intro }}
                            </h4>
                        </v-card> 
                </v-layout>
                <!-- FEATURE IMAGE -->
                <div class="article-image--mobile" :style="{backgroundImage: 'url('+ image +')'}">
                </div>
                <!-- SUBS FEATURED -->
                <v-layout justify-center v-if="posted">
                    <p class="mt-2 subsMobile"> {{ posted }} </p>
                </v-layout>
                <!-- LAYOUT UNDERNEATH -->
                <v-layout>
                    <v-flex>
                    <!-- SECTION ONE -->
                        <v-layout v-if="description">
                        <!-- FIRST PARAGRAPH -->
                            <p class="article--description mt-5"> {{ description }} </p>
                        </v-layout>
                        <v-layout v-if="secondImage">
                            <!-- SECOND IMAGE -->
                            <v-img 
                                class=""
                                :src="secondImage"
                            >
                            </v-img>
                        </v-layout>
                    <!-- SECTION TWO -->
                        <v-layout v-if="descriptionTwo">
                            <!-- SECOND PARAGRAPH -->
                            <p class="thirdDescriptionMobile mt-5">
                                {{ descriptionTwo }}
                            </p>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container> 
    
</template>

<script>
import storyblokLivePreview from '@/mixins/storyblokLivePreview'

export default {
    mixins: [storyblokLivePreview],
    asyncData(context) {
        let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

        return context.app.$storyapi.get('cdn/stories/articles/' + context.params.articleId, {
            version: version
        })
        .then(res => {
            console.log(res.data)
             return {
                title: res.data.story.content.title,
                posted: res.data.story.content.posted,
                intro: res.data.story.content.shortDescription,
                image: res.data.story.content.mainImage,
                description: res.data.story.content.description,
                firstImage: res.data.story.content.firstImage,
                descriptionTwo: res.data.story.content.secondDescription,
                secondImage: res.data.story.content.secondImage,
                slug: res.data.story.slug,
                id: res.data.story.id,
                name: res.data.story.name
            }
        })
    },
    data () {
      return {
        page: {
            id: this.id
        },
      }
    },
}
</script>

<style scoped>
.article-image {
    width: 100%;
    height: 500px;
    background-size: cover;
    background-position: center;
    margin-top: 20px;
}
.subsBigScreen {
    margin-top: -14px;
    font-size: 14px;
    white-space: pre-line;
}
.subsMobile {
    margin-top: -10px;
    font-size: 12px;
    white-space: pre-line;
    max-width: 320px;
}
.introduction--Bigscreens {
    white-space: pre-line;
    max-width: 550px;
    padding-top: 0px;
    padding-right: 35px;
    padding-bottom: 35px;
    padding-left: 35px;
    color: #38ef7d;
   
}

.introCard--bigScreens {
    background-color: #121030 !important;
}

.article--description {
    white-space: pre-line;
}
.article--description--TWO {
    white-space: pre-line;
    margin-top: 45px;
}
.secondImage {
   max-width: 750px;
}
.subsSecondImage {
    font-size: 14px;
    white-space: pre-line;
    margin-top: 5px;
    text-align: center;
}
.thirdImage {
    width: 20%;
    height: 550px;
    margin-right: 70px !important;
    margin-top: 48px;
}
.fourthParagraph {
    white-space: pre-line;
    margin-top: 45px;
    text-align: center;
}
.fourthImage {
    width: 100%;
    height: 400px;
    /* Set a specific height */
    height: 450px;
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 20px;
}
.thirdDescription {
    white-space: pre-line;
    max-width: 980px;
    margin-top: 45px;
    text-align: center;
}
.thirdDescriptionMobile {
    white-space: pre-line;
    max-width: 320px;
    margin-top: 15px;
    text-align: center;
}
.conclusion--bigScreens {
    background-color: #121030 !important;
    color: #38ef7d;
    margin-bottom: 25px;
}
.conclusionParagraph {
    max-width: 750px;
    white-space: pre-line;
    padding: 45px 45px;
    text-align: center;
}

/* MOBILE */
.introCardMobile {
     background-color: #121030 !important;
}
.introductionMobile {
    white-space: pre-line;
    max-width: 550px;
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: 15px;
    color: #38ef7d;
    text-align: center;
    font-size: 12px;
   
}
.article-image--mobile {
    width: 100%;
    height: 250px;
    background-size: cover;
    background-position: center;
    margin-top: 20px;
}
.subsMobile {
    font-size: 12px;
    text-align: center;
    max-width: 260px;
}
.titleMobile {
    font-size: 26px;
    text-align: center;
     margin-bottom: 20px;
}
@media only screen and (max-width: 480px) {
    .popUnderAd {
        position: fixed;
        left: 0;
        bottom: 41px;
        min-width: 100%;
        max-height: 90px;
    }
}

</style>

