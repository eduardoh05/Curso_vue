<template>
  
      <div class="post-list">
        <div v-for="post in posts" :key="post.id" class="post">
          <div class="user-info">
            <a href="#" class="user-name">{{ userById(post.userId).name }}</a>
            <a href="#">
              <img class="avatar-large" :src="userById(post.userId).avatar" alt="" />
            </a>
            <p class="desktop-only text-small">107 posts</p>
            <p class="desktop-only text-small">23 threads</p>
            <span class="online desktop-only">online</span>
          </div>
  
          <div class="post-content">
            <div>
              <p :style="post.text.length > 500 ? ' color : red ' : ' color: black' ">{{ post.text }}</p>
            </div>
          </div>
  
          <div class="post-date text-faded" :title="humanFriendlyDate(post.publishedAt)">
            {{ diffForHumans(post.publishedAt) }}
          </div>
        </div>
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