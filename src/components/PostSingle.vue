<template>
    
   <div class="user-info">
            <a href="#" class="user-name">{{ userById(post_json.userId).name }}</a>
            <a href="#">
              <img class="avatar-large" :src="userById(post_json.userId).avatar" alt="" />
            </a>
            <p class="desktop-only text-small">107 posts</p>
            <p class="desktop-only text-small">23 threads</p>
            <span class="online desktop-only">online</span>
          </div>
  
          <div class="post-content">
            <div>
              <p :style="post_json.text.length > 500 ? ' color : red ' : ' color: black' ">{{ post_json.text }}</p>
            </div>
          </div>
  
          <div class="post-date text-faded" :title="humanFriendlyDate(post_json.publishedAt)">
            {{ diffForHumans(post_json.publishedAt) }}
          </div>

</template>

<script>
import sourceData from '@/data.json'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedDate from 'dayjs/plugin/localizedFormat'
dayjs.extend(relativeTime)
dayjs.extend(localizedDate)

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