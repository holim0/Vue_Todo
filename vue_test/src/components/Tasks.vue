<template lang="">
    <div v-for="(t, idx) in tasks" :key="idx">
        <Task
            @toggle-reminder="$emit('toggle-reminder', t.id)"
            @delete-task="$emit('delete-task', t.id)"
            :task="t"
        />
    </div>
</template>
<script>
import Task from "./Task.vue";

export default {
    name: "Tasks",
    props: {
        tasks: Array,
    },

    components: {
        Task,
    },

    emits: ["delete-task", "toggle-reminder", "add-task"],
};
</script>
<style lang=""></style>
