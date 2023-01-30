import { ref } from 'vue'

const getBooks = () => {
    const books = ref([])
    const error = ref(null)

    const load = async () => {
      try {
        let res = await fetch( 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=FwZYcLWmmfGl5AYWiBF51VCnrGRLxAqg' )
        if (!res.ok) {
          throw Error( 'no data' )
        }
        const data = await res.json()
        console.log(data.results.books)
        books.value = data.results.books
      }
      catch (err) {
        error.value = err.message
      }
    }

    return { books, error, load }
}

export default getBooks