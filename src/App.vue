<template>
  <Nav />
  <BookSearch />
  <TrendingBooks :books="books" />
  <Footer />
</template>

<script> 
import TrendingBooks from './components/TrendingBooks.vue'
import getBooks from './composables/getBooks'
import Nav from './components/Nav.vue'
import BookSearch from './components/BookSearch.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: { TrendingBooks, getBooks, Nav, BookSearch, Footer },
  setup() {
    const { books, error, load } = getBooks()
    load()
    //console.log(books)
    return { books, error }
  }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
