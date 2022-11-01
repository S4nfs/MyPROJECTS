const buildNewCategories = (parentId, categories, category) => {
  let myCategories = [];
  for (let cat of categories) {
    if (cat._id == parentId) {
      console.log(cat)
      myCategories.push({
        ...cat,
        children: cat.children && cat.children.length > 0 ? buildNewCategories(parentId, [...cat.children, { //spreading children
          _id: category.id,
          name: category.name,
          slug: category.slug,
          parentId: category.parentId,
          categoryImage: category.categoryImage,
          children: category.children
        }], category) : []
      })
    } else {
      myCategories.push({
        ...cat,
        children: cat.children && cat.children.length > 0 ? buildNewCategories(parentId, cat.children, category) : []
      })
    }
  }
  return myCategories;
}

let state = {
  categories: [
    {
      _id: "6349a56cbf58ef7d83f87629",
      name: "Kitchen",
      children: []
    },
    {
      _id: "634a785b1951a3c488ef3547",
      name: "Grocery",
      children: []
    },
    {
      _id: "634a7935280de96b1e990eca",
      name: "Electronics",
      children: [
        {
          _id: "634a79d6e6bc75363e70810b",
          name: "Mobiles",
          "parentId": "634a7935280de96b1e990eca",
          children: [
            {
              _id: "634a7a13e6bc75363e70810e",
              name: "Samsung",
              "parentId": "634a79d6e6bc75363e70810b",
              children: []
            },
            {
              _id: "634ae5d7826153eb3083151c",
              name: "Apple",
              "parentId": "634a79d6e6bc75363e70810b",
              children: []
            },
            {
              _id: "634bcbce5681c697216cbce7",
              name: "Realme",
              "parentId": "634a79d6e6bc75363e70810b",
              children: []
            },
            {
              _id: "634c42c59cdd8556ceda9e1d",
              name: "Infinix",
              "parentId": "634a79d6e6bc75363e70810b",
              children: []
            },
            {
              _id: "635f9ee27498a443891bc772",
              name: "Nothing",
              "parentId": "634a79d6e6bc75363e70810b",
              children: []
            },
            {
              _id: "636130080338d0ca4a024b16",
              name: "Motorola",
              "parentId": "634a79d6e6bc75363e70810b",
              children: []
            }
          ]
        }
      ]
    }
  ]
}

let category = {
  parentId: "6349a56cbf58ef7d83f87629",
  name: "verma noodles",
  categoryImage: "noodles.png"
}
buildNewCategories(category.parentId, state.categories, category);
