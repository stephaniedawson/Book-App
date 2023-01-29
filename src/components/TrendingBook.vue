<template>
    <div class="book content-center">
        <h2 class="book-title line-clamp-1 text-center font-bold text-xl mb-1">{{ book.volumeInfo.title }}</h2>
        <p class="book-author text-center text-sm">By:
            <span v-for="(author, index) in book.volumeInfo.authors" :key="author" class="text-center">
                <span v-if="book.volumeInfo.authors.length > 1">{{ author }}<span v-if="index < book.volumeInfo.authors.length - 1">, </span></span>
                <span v-else>{{ author }}</span>
            </span>
        </p>
        <div class="book-img mt-4"><a :href="book.volumeInfo.previewLink" target="_blank" class="book-link"><img :src="book.volumeInfo.imageLinks.thumbnail" class="mx-auto shadow-md shadow-slate-500"></a></div>
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