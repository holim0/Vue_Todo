<template lang="">
    <div>
        <div v-if="showAddTask">
            <AddTask @add-task="addTask" />
        </div>
        <Tasks
            @delete-task="deleteTask"
            @toggle-reminder="toggleReminder"
            :tasks="tasks"
        />
    </div>
</template>
<script>
import Tasks from "../components/Tasks.vue";
import AddTask from "../components/AddTask.vue";
import axios from "axios";

export default {
    name: "Home",
    props: {
        showAddTask: Boolean,
    },
    components: { Tasks, AddTask },

    data() {
        return {
            tasks: [],
        };
    },

    methods: {
        async deleteTask(id) {
            try {
                const res = await axios.delete(`api/tasks/${id}`);

                console.log(res);
            } catch (err) {
                console.log(err);
            }

            this.tasks = this.tasks.filter((task) => {
                return task.id !== id;
            });
        },

        async addTask(task) {
            try {
                const res = await axios.post("api/tasks", task);

                console.log(res);
            } catch (err) {
                console.log(err);
            }

            this.tasks = [...this.tasks, task];
        },
        toggleReminder(id) {
            this.tasks = this.tasks.map((task) => {
                if (task.id === id) {
                    task.reminder = !task.reminder;
                }
                return task;
            });
        },
        async fetchTasks() {
            try {
                const res = await axios.get("api/tasks");
                await console.log(res.data);
                return res.data;
            } catch (err) {
                console.log(err);
            }
        },
    },

    async created() {
        this.tasks = await this.fetchTasks();
        await console.log(this.tasks);
    },
};
</script>
