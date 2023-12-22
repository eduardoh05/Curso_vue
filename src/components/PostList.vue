<template>
  
      <div class="post-list">
        <div v-for="post in posts" :key="post.id" class="post">
          <post-single :post_json="post"/>
        </div>
      </div>
    
</template>

<script>
import sourceData from '@/data.json'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedDate from 'dayjs/plugin/localizedFormat'
import PostSingle from "@/components/PostSingle.vue"
dayjs.extend(relativeTime)
dayjs.extend(localizedDate)

export default {
   components:{
      PostSingle
  },
    props:{
        posts: {
            required: true,
            type: Array
        }
    },
    data() {
      return {
        users: sourceData.users
      }
    },
    methods: {
      userById(userId) {
        return this.users.find(u => u.id === userId)
      },
      diffForHumans(timestmap){
        return dayjs.unix(timestmap).fromNow()
      },
      humanFriendlyDate(timestamp) {
        return dayjs.unix(timestamp).format('llll')
      }
    }
}
</script>

<style scoped>

</style>