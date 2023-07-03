<script setup>
defineProps({
    active: Boolean,
})
</script>

<template>
    <div class="nav-bar" :class="[active ? 'active' : '']">
        <nav>
            <ul>
                <li> Home</li>
                <li> About</li>
                <li> Contact</li>
            </ul>
        </nav>
    </div>
</template>


<style scoped>
.nav-bar {
    position: fixed;
    bottom: 50px;
    left: 0;
    transform: translateX(-100%);
    transition: 0.6s ease;
    font-size: x-large;
    color: white;
}

.active {
    transform: translateX(0);
}

li {
    list-style: none;
    padding: 18px 0;
}

ul li+li {
    margin-left: 10px;
}

ul li+li+li {
    margin-left: 20px;
}
</style>