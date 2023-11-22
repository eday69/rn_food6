import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer -kCMu8L27oFB1uqLmyoLK6FmXQ2PkABxsQspF0Z96tJu7_IgOfboG18yh-pr-yq7htcPcCI2ufl-Cb34mXPGrBmDp0caG37ItlWdaiw_lwZGXYOkb7DBV1JSAcJbZXYx'
  }
})
