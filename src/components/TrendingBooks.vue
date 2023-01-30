<template>
    <div class="book-list bg-white dark:bg-slate-900 py-7">
        <h1 class="text-3xl font-bold text-center dark:text-gray-100 my-6 font-serif">Current NYT Best Sellers - Fiction</h1>
        <div class="books container mx-auto">
            <carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
                <slide v-for="book in books" :key="book">
                    <div class="carousel__item bg-white rounded-lg border border-slate-300 p-6 w-80 shadow-lg shadow-slate-400 dark:shadow-none">
                        <TrendingBook :book="book" :key="book.rank"/>
                    </div>
                </slide>

                <template #addons>
                <navigation class="dark:text-white" />
                </template>
            </carousel>
        </div>
    </div>
</template>

<script>
import TrendingBook from './TrendingBook.vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
    name: 'TrendingBooks',
    props: [ 'books', 'book' ],
    components: { TrendingBook, Carousel, Slide, Pagination, Navigation },
    data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 2,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'center',
      },
    },
  }),
}
</script>

<style scoped>
    .carousel__slide {
        padding: 5px;
    }

    .carousel__viewport {
        perspective: 2000px;
    }

    .carousel__track {
        transform-style: preserve-3d;
    }

    .carousel__slide--sliding {
        transition: 0.5s;
    }

    .carousel__slide {
        opacity: 0.9;
        transform: rotateY(-20deg) scale(0.9);
    }

    .carousel__slide--active ~ .carousel__slide {
        transform: rotateY(20deg) scale(0.9);
    }

    .carousel__slide--prev {
        opacity: 1;
        transform: rotateY(-10deg) scale(0.95);
    }

    .carousel__slide--next {
        opacity: 1;
        transform: rotateY(10deg) scale(0.95);
    }

    .carousel__slide--active {
        opacity: 1;
        transform: rotateY(0) scale(1.1);
    }

    .carousel__item {
        margin: 50px 10px;
    }
</style>