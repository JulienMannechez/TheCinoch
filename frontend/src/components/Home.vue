<template>
    <div>
        <v-app-bar color="deep-purple accent-4" dense dark>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>The Cinoch</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </v-app-bar>
        <v-list>
            <v-list-item v-for="(message, index) in messages" :key="index">
                <v-list-content>
                    <v-list-item-title v-text="message"></v-list-item-title>
                </v-list-content>
            </v-list-item>
        </v-list>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from "vue";

export default defineComponent({
    name: "Home",

    data() {
        return {
            messages: ["bonjour", "c'est", "moi"]
        };
    },
    async created() {
        this.messages = (await axios.get('http://localhost:3000/home')).data;
    }
});
</script>
