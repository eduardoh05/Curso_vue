<template>
    <div class="col-large push-top">
      
      <h1>{{ thread.title }}</h1>
      <post-list :posts="threadPosts"/>
  
      <post-editor @save="addPost"></post-editor>
    </div>
    
</template>
  
 <script>
  import sourceData from '@/data.json'
  import PostEditor from '@/components/PostEditor'
  import PostList from '@/components/PostList'


  
  export default {
    components:{
      PostEditor,
      PostList,
    },
    props:{
      id:{
        required: true,
        type: String
      }
    },
    data() {
      return {
        threads: sourceData.threads,
        posts: sourceData.posts,
        users: sourceData.users,
      }
    },

    computed:{
      thread(){
        return this.threads.find(thread => thread.id === this.id)
      },
      threadPosts () {
        return this.posts.filter(post => post.threadId === this.id)
      }
    },

    methods: {
      addPost(eventData){
        const post = {
          ...eventData.post,
          threadId: this.id
          // text: this.newPostText,
          // publishedAt: Math.floor(Date.now()/1000),
          // threadId: this.id,
          // userId: "rpbB8C6ifrYmNDufMERWfQUoa202"
        }
        this.posts.push(post)
        this.thread.posts.push(post.id)

        console.log(post)
      }
    }
}
</script>

<style scoped>

</style>

