<template>
    <div class="book content-center">
        <h1 class="book-rank text-center font-bold text-xl mb-1">#{{ book.rank }}</h1>
        <h2 class="book-title line-clamp-1 text-center font-bold text-lg mb-1">{{ book.title }}</h2>
        <p class="book-author text-center text-sm line-clamp-1">By:
            <span class="text-center">{{ book.author }}
                <!-- <span v-if="book.author.length > 1">{{ author }}<span v-if="index < book.author.length - 1">, </span></span>
                <span v-else>{{ author }}</span> -->
            </span>
        </p>
        <div class="book-img mt-4"><a :href="book.amazon_product_url" target="_blank" class="book-link"><img :src="book.book_image" class="mx-auto shadow-md shadow-slate-500"></a></div>
        <!--<a :href="book.volumeInfo.previewLink" target="_blank" class="book-link">More Info</a>-->
    </div>
</template>

<script>
    export default {
        name: 'TrendingBook',
        props: [ 'book' ],
    }
</script>

<style scoped>

</style>