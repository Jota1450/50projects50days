        
<script setup>

defineProps({
    active: Boolean,
    rotate: Function
})

</script>

<template>
    <div class="circle-wrapper">
        <div class="circle centered" :class="[active ? 'active' : '']">
            <div class="menu-item right" @click="rotate">
                <img src="../assets/menu.svg" class="menu" alt="Menu" />
            </div>
            <div class="menu-item left" @click="rotate">
                <img src="../assets/cross.svg" class="menu" alt="Menu" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.circle-wrapper {
    position: fixed;
    top: -100px;
    left: -100px;
    color: white;
}

.circle {
    position: relative;
    background-color: #ff7979;
    height: 200px;
    width: 200px;
    border-radius: 100%;
    transition: 0.6s ease;
}

.menu-item {
    position: absolute;
    width: 40px;
    bottom: 36px;
    cursor: pointer;
}

.right {
    right: 40px;
}

.left {
    left: 40px;
}

.active {
    transform: rotate(-90deg);
}
</style>