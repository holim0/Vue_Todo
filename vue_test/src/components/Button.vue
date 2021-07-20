<template lang="">
    <button @click="onClick" class="btn">{{ text }}</button>
</template>

<script>
export default {
    name: "Button",
    props: {
        text: String,
        color: String,
    },

    methods: {
        onClick() {
            this.$emit("show-add-todo");
        },
    },
};
</script>
<style scoped>
.btn {
    border: none;
    padding: 15px;
    font-size: 20px;
    color: white;
    border-radius: 10px;
    background-color: green;
    cursor: pointer;
}

.btn:hover {
    background-color: blue;
}
</style>
