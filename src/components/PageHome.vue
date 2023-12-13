<template>
    <div>Hello from Page Home</div>
    <div v-for="thread in threads" :key="thread.id">
        <h2>{{ thread.title }}</h2>
        
        <div v-for="postID in thread.posts" :key = "postID">  
            <p>{{ userById(postById(postID).userId).name }}</p>
            <p>{{ postById(postID).text }}</p>
        
        </div>
    
    </div>

</template>

<script>
import sourceData from '@/data.json'

export default {
    data(){
        return {
            threads: sourceData.threads,
            posts: sourceData.posts,
            users: sourceData.users
        }
    },
    methods:{
        postById (postId){
            return this.posts.find(p => p.id === postId)
        },
        userById (userId){
            return this.users.find(u => u.id === userId)
        }
    }
}


</script>

<style scoped>

</style>