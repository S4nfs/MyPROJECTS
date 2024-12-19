
#query {
#################Get all posts
  # getAllPosts{
  #   id
  #   title
  #   description
  # }

##################Get By Id
#   getPostById(id: "631319334fbab9fb94af4fbb") {
#     title
#     description
#   }
# }

mutation {
#################Create post
  # createPost(post: {
  #   title: "Playing Zenga"
  #   description: "I am playing Zenga with GraphQl"
  # }){
  #   id
  #   title
  #   description
  # }

#################Delete post
  # deletePost(id:"6313212c254a9fc86c14525e")

#################Update post
  updatePost(
    id: "63131ecb3989a1b83a7a4811"
    post: {
      title: "Playing Zenga"
      description: "I am playing Zenga with GraphQl"
    }
  ) {
    id
    title
    description
  }
}


