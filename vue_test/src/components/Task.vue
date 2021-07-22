<template lang="">
    <div
        @dblclick="toggleReminder"
        :class="[task.reminder ? 'reminder' : '', 'task']"
    >
        <h3>
            {{ task.text }}

            <i @click="onDelete" class="fas fa-times"></i>
        </h3>
        <div>{{ task.date }}</div>
    </div>
</template>
<script>
export default {
    name: "Task",
    props: {
        task: Object,
    },

    methods: {
        onDelete() {
            this.$emit("delete-task");
        },

        toggleReminder() {
            this.$emit("toggle-reminder");
        },
    },
};
</script>
<style scoped>
.fas {
    color: royalblue;
}

.task {
    background: #f4f4f4;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
}
.task.reminder {
    border-left: 10px solid green;
}
.task h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
