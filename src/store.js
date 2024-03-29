import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './redux/reducers/user'
import { adminReducer } from './redux/reducers/admin'
import { projectReducer } from './redux/reducers/project'
import { testimonialReducer } from './redux/reducers/testimonial'
import { themeReducer } from './redux/reducers/theme'
import { blogReducer } from './redux/reducers/blog'
import { categoryReducer } from './redux/reducers/category'
import { priceReducer } from './redux/reducers/pricing'

export const server = "https://artline-aslibackend.vercel.app"
// export const server = "http://localhost:4000" 

export const store = configureStore({
  reducer: {
    user: userReducer,
    admin: adminReducer,
    project: projectReducer,
    testimonial: testimonialReducer,
    blog: blogReducer,
    category: categoryReducer,
    price: priceReducer,
    theme: themeReducer,
  },
})

