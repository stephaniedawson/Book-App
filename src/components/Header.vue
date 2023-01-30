<template>
    <div class="relative overflow-hidden bg-white dark:bg-slate-900">
      <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div class="sm:max-w-lg">
            <h1 class="font text-4xl font-bold tracking-tight sm:text-6xl dark:text-gray-200 font-serif">Books are<br>cool again.</h1>
            <p class="mt-4 text-xl text-gray-500 dark:text-gray-100">Discover Your Next Favorite Read! Join Our Thriving Book Club Community and Dive into a World of Literature Today!</p>
          </div>
          <div>
            <div class="mt-10">
              <!-- Decorative image grid -->
              <div aria-hidden="true" class="lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div class="flex items-center space-x-6 lg:space-x-8">
                    
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <template v-for="book in books.slice(0, 2)" :key="book">
                        <div class="h-64 w-44 sm:opacity-0 lg:opacity-100">
                          <a :href="book.amazon_product_url" target="_blank" class="z-40"><img :src="book.book_image" alt="" class="w-full object-cover object-center rounded-lg shadow-lg shadow-slate-400" /></a>
                        </div>
                      </template>
                    </div>

                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <template v-for="book in books.slice(3, 6)" :key="book">
                        <div class="h-64 w-44 sm:opacity-0 lg:opacity-100">
                          <a :href="book.amazon_product_url" target="_blank" class="z-40"><img :src="book.book_image" alt="" class="w-full object-cover object-center rounded-lg shadow-lg shadow-slate-400" /></a>
                        </div>
                      </template>
                    </div>

                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <template v-for="book in books.slice(7, 9)" :key="book">
                        <div class="h-64 w-44 sm:opacity-0 lg:opacity-100">
                          <a :href="book.amazon_product_url" target="_blank" class="z-40"><img :src="book.book_image" alt="" class="w-full object-cover object-center rounded-lg shadow-lg shadow-slate-400" /></a>
                        </div>
                      </template>
                    </div>

                  </div>
                </div>
              </div>
  
              <a href="#" class="inline-block rounded-md border border-transparent bg-emerald-600 py-3 px-8 text-center font-medium text-white hover:bg-slate-700">Browse Books</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  

<script>
    export default {
        name: 'Header',
        props: [ 'books', 'book' ],
    }
</script>

<style scoped>

</style>