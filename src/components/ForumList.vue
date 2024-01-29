<template>
    <div class="col-full">
    <div class="forum-list">
        <!-- 
        <h2 class="list-title">
            <a href="#"> {{ categoryName }} </a>
        </h2>
         -->
        <div class="forum-listing" v-for="forum in forums" :key="forum.id">
            <div class="forum-details">
                <router-link 
                  :to="{name: 'ForumShow', params: {id: forum.id}}"
                  class="text-xlarge">{{ forum.name }}</router-link>
                <p>{{ forum.description }}</p>
            </div>
        

            <div class="threads-count">
                <p>
                    <span class="count">
                    {{ forum.threads?.length }}</span>
                    {{ forum.threads?.length ? forum.threads?.length > 1 ?  'threads' : 'thread' : 'no threads' }}

                </p>
            </div>

        </div>
    </div>
    </div>
</template>


<script>
export default {
    props: {
        forums: {
            required: true,
            type: Array
        },
        categoryName: {
            type: String,
            
        }
    }
}
</script>

<style scoped>

</style>