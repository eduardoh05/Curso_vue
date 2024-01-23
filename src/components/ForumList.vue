<template>
    <div class="col-full">
    <div class="forum-list">

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

            <div class="last-thread">
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
        }
    }
}
</script>

<style scoped>

</style>