<template>
    <div class="col-full">

        <div class="category-list" v-for="category in categories" :key= "category.id">

            <h2 class="list-title">{{ category.name }} </h2>

            <forum-list :forums="getCategoryForums(category.id)"></forum-list>

        </div>

    </div>


</template>

<script>
import ForumList from '@/components/ForumList.vue'
import sourceData from '@/data.json'
export default {
    components: {
        ForumList
    },
    props: {
        categories: {
            required:true,
            type: Array
        }
    },
    data(){
        return{
        forums: sourceData.forums
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