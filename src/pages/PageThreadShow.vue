<template>
    <div class="col-large push-top">
      
      <h1>{{ thread.title }}</h1>

       <div class="post-list">
        <div v-for="postID in thread.posts" :key="postID" class="post">
          <div class="user-info">
            <a href="#" class="user-name">{{ userById(postById(postID).userId).name }}</a>
            <a href="#">
              <img class="avatar-large" :src="userById(postById(postID).userId).avatar" alt="" />
            </a>
            <p class="desktop-only text-small">107 posts</p>
            <p class="desktop-only text-small">23 threads</p>
            <span class="online desktop-only">online</span>
          </div>
  
          <div class="post-content">
            <div>
              <p>{{ postById(postID).text }}</p>
            </div>
            <a href="#" style="margin-left: auto;" class="link-unstyled" title="Make a change"><i class="fa fa-pencil"></i></a>
          </div>
  
          <div class="post-date text-faded">
            {{ postById(postID).publishedAt }}
          </div>
        </div>
      </div>

      <post-editor @save="addPost"></post-editor>
    </div>
    
</template>
  
 <script>
  import sourceData from '@/data.json'
  import PostEditor from '@/components/PostEditor'

  
  export default {
    components:{
      PostEditor
    },
    props:{
        PostEditor,

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
      postById(postId) {
        return this.posts.find(p => p.id === postId)
      },
      userById(userId) {
        return this.users.find(u => u.id === userId)
      },
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

