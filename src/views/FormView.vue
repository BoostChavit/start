<template>
    <div>
        <button @click="dropdown = !dropdown">Command</button>
        <div v-if="dropdown">
            <button @click="count++">Add 1</button>
            <br>
            <button @click="count = 0">reset</button>
        </div>
        <div>Count is {{count}}</div>
        <hr>
        <div>this is on change</div>
        <input type="text" @change="count++" class="border-black border-solid border-2" >
        <hr>
        <div>Message to Santa : {{message}}</div>
        <input type="text" v-model="message" class="border-black border-solid border-2">
        <font-awesome-icon icon="fa-brands fa-facebook" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            dropdown: false,
            count: 0,
            message: "Hello World"
        }
    }
}
</script>

<style>
</style>