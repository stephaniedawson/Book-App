<template>
    <div class="search-box bg-slate-100 dark:bg-slate-800">
        <div class="container mx-auto py-36">
            <h1 class="text-center text-slate-700 dark:text-white text-3xl font-bold mb-8 font-serif">Find Your Next Book</h1>
            <div class="query px-3">
                <form @submit.prevent="search">
                    <div class="search-bar p-1 flex items-center border-1 bg-white border shadow-md rounded-lg mx-auto lg:w-1/2">
                        <input type="text" v-model="keyword" placeholder="Search..." class="rounded-l-sm w-full px-4 text-gray-700 leading-tight focus:outline-none" required>
                        <button type="submit" value="Search" class="bg-emerald-500 text-white rounded hover:bg-slate-700 m-1 focus:outline-none w-24 h-12 flex items-center justify-center text-xl"><fa icon="search"></fa></button>
                    </div>
                    <div class="search-options relative text-center mt-4 w-64 mx-auto z-0" v-if="loadState == 'success'">
                        <select name="order" v-model="orderBy" @change="search" class="block appearance-none w-full mx-auto bg-gray-50 border border text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none">
                            <option value="newest">newest</option>
                            <option value="relevance">relevance</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </form>
            </div>
            <div class="content">
                <div class="loading relative" v-if="loadState == 'loading'">
                    <div class="mt-3 w-full h-96 bg-gray-100 dark:bg-gray-800 text-white grid grid-cols-1 grid-rows-1 place-items-center">
                        <div><fa icon="book-reader" class="text-6xl animate-spin text-slate-700 dark:text-gray-100"></fa></div>
                    </div>
                </div>
                <BookList v-if="loadState == 'success'" :query="query"/>
            </div>
        </div>
    </div>
</template>

<script>
import BookList from './BookList.vue'
import axios from 'axios'

    export default {
        name: 'BookSearch',
        components: { BookList },
        data() {
            return {
                query: [],
                keyword: '',
                orderBy: 'relevance',
                maxResults: '15',
                loadState: ''
            }
        },
        methods: {
            search() {
                this.loadState = 'loading'
                axios
                .get(
                    `https://www.googleapis.com/books/v1/volumes?q=:${this.keyword}&orderBy=${this.orderBy}&maxResults=${this.maxResults}`
                )
                .then(response => {
                    console.log(response.data.items)
                    this.query = response.data.items
                    this.loadState = 'success'
                })
            }
        }
    }
</script>

<style scoped>
    .search-box {
        background-image: url("../assets/background.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>