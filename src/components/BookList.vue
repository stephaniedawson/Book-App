<template>
    <div class="relative h-5">
        <button @click="toggleResults" class="absolute top-0 right-0 dark:text-gray-100 mr-3" v-if="showResults">
            <span v-if="showResults" class="text-xl"><fa icon="close"></fa></span>
            <span v-if="!showResults"><fa icon="plus"></fa></span>
        </button>
    </div>
    <div class="book-list flex flex-wrap flex-row justify-center">
            <BookItem v-for="book in query" :key="book.id" :book="book" v-if="showResults" class="block"/>
    </div>
  </template>
  
  <script>
  import BookItem from './BookItem.vue';

  export default {
    name: 'BookList',
    props: {
      query: {
        type: Array,
        required: true}
    },
    components: { BookItem },
    data() {
        return {
            showResults: true
        }
    },
    methods: {
        toggleResults() {
            this.showResults = !this.showResults
            console.log('clicked')
        }
    }
  }
  </script>
  
  <style>
  </style>