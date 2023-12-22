<template>
    
    <div class="col-large push-top">
        <post-single :post_json="post"/>
    </div>

</template>

<script>
import PostSingle from '@/components/PostSingle.vue'
import sourceData from "@/data.json"

export default {
  components: {
     PostSingle 
     },
  props:{
    id_post: {
      required: true,
      type: String
    }
  },
  computed :{
      post () {
        /* const post = this.posts.filter(
          function (post, id = this.id_post){
            return post.id === id
          } 
        )
        return post[0] */
        const post = this.posts.filter(post => post.id === this.id_post)[0]
        console.log('teste',this.posts, this.id_post, post)
        return post
      }
  },
  data(){
    return {
      posts: sourceData.posts
    }
  }
}

</script>


