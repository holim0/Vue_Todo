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
        deleteTask(id) {
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

        addTask(task) {
            this.tasks = [...this.tasks, task];
        },

        toggleAdd() {
            this.showAddTask = !this.showAddTask;
        },
    },

    created() {
        this.tasks = [
            {
                text: "밥 먹기",
                date: new Date(),
                reminder: true,
                id: 1,
            },
            {
                text: "잠 자기",
                date: new Date(),
                reminder: true,
                id: 2,
            },
            {
                text: "공부 하기",
                date: new Date(),
                reminder: false,
                id: 3,
            },
        ];
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
