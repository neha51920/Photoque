
import axios from 'axios'

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers: {
        Authorization:
        'Client-ID pampn8LTW7nlXJZUowK4UyQ6R5fCYG65Uu7PSbY0ylA'
    }
});