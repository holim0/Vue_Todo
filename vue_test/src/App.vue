<template>
    <div class="container">
        <Header
            @show-add-todo="toggleAdd"
            :isOpen="showAddTask"
            :title="title"
        />

        <router-view :showAddTask="showAddTask"></router-view>
        <Footer />
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
    components: { Header, Footer },
    name: "App",

    data() {
        return {
            showAddTask: false,
            title: "Todo List",
        };
    },

    methods: {
        toggleAdd() {
            this.showAddTask = !this.showAddTask;
        },
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
