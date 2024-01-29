<template>
    
    <h1>{{ category.name }}</h1>
    
    <h2 class="list-title">
        {{ category.name }}
    </h2>
    <forum-list
    :categoryName="category.name"
    :forums="getCategoryForums(category.id)"
    />
</template>

<script>
import ForumList from "@/components/ForumList.vue"
import sourceData from "@/data.json"


export default {

    components: {
        ForumList
    },

    props: {
        id: {
            required:true,
            type: String
        }
    },
      data(){
        return{
        forums: sourceData.forums
        }
    },
    computed: {
        category () {
            return sourceData.categories.find(category => category.id === this.id)
        }
    },
    methods: {
        getCategoryForums(categoryId){
            return this.forums.filter(forum => forum.categoryId === categoryId)
        }
    }
}
</script>

<style scoped>

</style>