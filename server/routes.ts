
const routes = [
  {
    "method": "get",
    "path": "/api/articles",
    "handler": "getArticles",
    "role": "user"
  },
  {
    "method": "get",
    "path": "/api/articles/:id",
    "handler": "getArticle",
    "role": "user"
  },
  {
    "method": "get",
    "path": "/api/private",
    "handler": "getPrivateArticles",
    "role": "admin"
  }
]

export { routes };