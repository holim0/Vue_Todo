<template>
    <header>
        <h1>{{ title }}</h1>
        <Button
            @show-add-todo="$emit('show-add-todo')"
            :text="isOpen ? '닫기' : '할 일 추가'"
            color="green"
        />
    </header>
</template>
<script>
import Button from "./Button";
export default {
    name: "Header",
    props: {
        title: String,
        isOpen: Boolean,
    },

    components: {
        Button,
    },

    emits: ["show-add-todo"],
};
</script>
<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>
