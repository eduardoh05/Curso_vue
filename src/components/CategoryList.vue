<template>
    <div class="col-full">

        <div class="category-list" v-for="category in categories" :key= "category.id">

            <router-link 
            :to="{name: 'PageCategory', params: {id: category.id}}">

            <h2 class="list-title">{{ category.name }} </h2>
            </router-link>
            

            <forum-list :forums="getCategoryForums(category.id)"
            :categoryName="categoryName"></forum-list>

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