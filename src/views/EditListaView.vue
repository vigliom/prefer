<template>
    <div>
        <ListaComponent :id="params.id"></ListaComponent>
    </div>

</template>
<script setup>
import ListaComponent from '../components/ListaComponent.vue';
const params=defineProps( {
    id: {
        type: String,
        required: true
    }
})
</script>