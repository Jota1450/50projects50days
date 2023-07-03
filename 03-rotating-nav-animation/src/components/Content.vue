
<script setup>
defineProps({
    active: Boolean
})
</script>

<template>
    <div class="wrapper" :class="[active ? 'active' : '']">
        <section class="content">
            <article>
                <h1>Amazing Article</h1>
                <small>Florin Pop</small>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
                    quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam
                    dolor omnis atque fuga labore modi veritatis porro laborum minus, illo,
                    maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia
                    labore pariatur sunt quia harum aut. Eum maxime dolorem provident natus
                    veritatis molestiae cumque quod voluptates ab non, tempore cupiditate?
                    Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum
                    sint nam quas dolor dignissimos in error placeat quae temporibus minus
                    optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium.
                    Ducimus consequuntur perferendis consequatur nobis exercitationem
                    molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.
                </p>
            </article>

            <article>
                <h3>My Dog</h3>
                <img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                    alt="doggy" />
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero
                    deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam facere
                    earum unde harum. Ea culpa veritatis magnam at aliquid. Perferendis
                    totam placeat molestias illo laudantium? Minus id minima doloribus
                    dolorum fugit deserunt qui vero voluptas, ut quia cum amet temporibus
                    veniam ad ea ab perspiciatis, enim accusamus asperiores explicabo
                    provident. Voluptates sint, neque fuga cum illum, tempore autem maxime
                    similique laborum odio, magnam esse. Aperiam?
                </p>
            </article>
        </section>
    </div>
</template>

<style scoped>
.wrapper {
    padding: 50px;
    background-color: white;
    transition: 0.6s ease;
    transform-origin: top left;
}

.content {
    margin: 50px 200px;
}

.active {
    transform: rotate(-20deg);
}

p {
    color: #333;
    line-height: 1.5;
}
</style>
