import { ref } from 'vue'

const getBooks = () => {
    const books = ref([])
    const error = ref(null)

    const load = async () => {
      try {
        let res = await fetch( 'https://www.googleapis.com/books/v1/users/110563385573990342210/bookshelves/1001/volumes?&maxResults=15&key=AIzaSyDtku5s3RtmzBcw0MHNqTMrD1KUmsF7mEA' )
        if (!res.ok) {
          throw Error( 'no data' )
        }
        const data = await res.json()
        books.value = data.items
      }
      catch (err) {
        error.value = err.message
      }
    }

    return { books, error, load }
}

export default getBooks