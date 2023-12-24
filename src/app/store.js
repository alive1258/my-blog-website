import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from '../features/blogs/blogsSlice'
import blogDetailsReducer from '../features/blog/blogSlice'
import relatedBlogsReducer from '../features/relatedBlogs/relatedBlogsSlice'
import filtersReducer from '../features/filters/filterSlice'

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blogDetails: blogDetailsReducer,
    relatedBlogs: relatedBlogsReducer,
    filters: filtersReducer,
  },
})
