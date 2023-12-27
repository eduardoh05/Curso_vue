<template>
    
   <div class="user-info">
            <a href="#" class="user-name">{{ userById(post_json.userId).name }}</a>
            <a href="#">
              <img class="avatar-large" :src="userById(post_json.userId).avatar" alt="" />
            </a>
            <p class="desktop-only text-small">107 posts</p>
            <p class="desktop-only text-small">23 threads</p>
            <span class="online desktop-only">online</span>
  
          <div class="post-content">
            <div>
              <p >{{ post_json.text }}</p>
            </div>
          </div>


    </div>      



</template>

<script>
import sourceData from '@/data.json'

export default {
    props: {
        post_json: {
            required: true,
            type: Object
        }
    },
    data(){
        return {
            users: sourceData.users
        }
    },
    methods:{
      userById(userId) {
        return this.users.find(u => u.id === userId)
      }
    }
}
</script>

<style scoped>

</style>