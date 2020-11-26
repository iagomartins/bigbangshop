<template>
    <div v-if="isSelected" class="image-tab">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        isSelected: {
            type: Boolean
        }
    }
}
</script>

<style scoped>
    @media (min-width: 1200px) {
        .image-tab {
            max-width: 50%;
            margin-left: 50px;
        }
    }
</style>