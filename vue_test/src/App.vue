<template>
    <div class="container">
        <Header
            @show-add-todo="toggleAdd"
            :isOpen="showAddTask"
            :title="title"
        />
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
import Header from "./components/Header.vue";
import Tasks from "./components/Tasks.vue";
import AddTask from "./components/AddTask.vue";
import axios from "axios";

export default {
    components: { Header, Tasks, AddTask },
    name: "App",

    data() {
        return {
            tasks: [],
            showAddTask: false,
            title: "Todo List",
        };
    },

    methods: {
        async deleteTask(id) {
            try {
                const res = await axios.delete(`/api/tasks/${id}`);

                console.log(res);
            } catch (err) {
                console.log(err);
            }

            this.tasks = this.tasks.filter((task) => {
                return task.id !== id;
            });
        },

        toggleReminder(id) {
            this.tasks = this.tasks.map((task) => {
                if (task.id === id) {
                    task.reminder = !task.reminder;
                }
                return task;
            });
        },

        async addTask(task) {
            try {
                const res = await axios.post("/api/tasks", task);

                console.log(res);
            } catch (err) {
                console.log(err);
            }

            this.tasks = [...this.tasks, task];
        },

        toggleAdd() {
            this.showAddTask = !this.showAddTask;
        },

        async fetchTask() {
            try {
                const res = await axios.get("/api/tasks");
                return res.data;
            } catch (err) {
                console.log(err);
            }
        },
    },

    async created() {
        this.tasks = await this.fetchTask();
    },
};
</script>

<style>
.container {
    border: 2px solid black;
    border-radius: 10px;
    height: 100%;
    padding: 20px;
}
</style>
