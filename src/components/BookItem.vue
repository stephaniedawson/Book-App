<template>
    <div class="book-item basis-1/2 md:basis-1/3 lg:basis-1/5 text-center">
        <div class="bg-gray-50 m-3 rounded-lg shadow-md shadow-slate-300 dark:shadow-none">
            <a :href="volumeInfo.previewLink" target="_blank" class="p-2">
            <div v-if="volumeInfo.imageLinks">
                <img :src="volumeInfo.imageLinks.thumbnail" :alt="volumeInfo.title" class="mx-auto mb-5 block h-48 w-fit shadow-md shadow-slate-400">
            </div>
            <div v-else>
                <img src="https://via.placeholder.com/150" :alt="volumeInfo.title" width="128" class="mx-auto block">
            </div>

            <h4 class="text-md lg:text-lg font-bold line-clamp-1 px-1">{{ volumeInfo.title }}</h4>

            <p class="author text-sm line-clamp-1 px-1">
                <span v-if="!volumeInfo.authors">No authors to display</span>
                <span v-else>
                By
                <span v-for="(author, index) in volumeInfo.authors" :key="index">
                    <em>
                    {{ index + 1 !== volumeInfo.authors.length && index + 1 !== book.volumeInfo.authors.length-1 ? author + ', ' : index + 1 == book.volumeInfo.authors.length && index+1 !== 1 ? ' and ' + author : author }}
                    </em>
                </span>
                </span>
            </p>
            </a>
        </div>
    </div>
  </template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  computed: {
    volumeInfo(){
      return this.book.volumeInfo
    }
  }
}
</script>

<style>

</style>