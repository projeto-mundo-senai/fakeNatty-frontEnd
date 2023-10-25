<template>
<iframe :src="`http://localhost:9090/${$route.params.nomearquivo}.pdf`" frameborder="0" width="500" height="650">



</iframe>




</template>

<script lang="ts">
import http from '@/http';
import { defineComponent } from 'vue';

export default defineComponent ({
    methods: {
        async enviaEmail() {
            await http.get("/enviaemail/" + this.$route.params.nomearquivo)
        }
    }
})


</script>