<template>
    <!-- <div>
        <div class="table-responsive">
        <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Amount</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody id="tableContent" v-for="item in products" :key="item.ID">
            <tr>
                <td scope="row"></td>
                <td>{{item.title}}</td>
                <td>{{item.description}}</td>
                <td>{{item.ID}}</td>
                <td>{{item.price}}</td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
        <tr>
            <th>
                <td></td>
                <td>{{item.title}}</td>
                <td>{{item.description}}</td>
                <td>{{item.ID}}</td>
                <td>{{item.price}}</td>
            </th>
        </tr>
        </table>
        </div>
    </div> -->
    <h1 class="text-decoration-underline text-center">Admin</h1>
        <!-- <div class="table-responsive"> -->
          <table id="tablecon" class="tablecon text-center text-white w-100">
            <thead class="tablecont">
              <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Image</th>
              <th>Detail</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            </thead>
            <tbody class="tablecontent" v-for="item in products" style="width: 18rem" :key="item.id">
                <tr>
            <th scope="row">{{ item.ID }}</th>
            <td>{{ item.title }}</td>
            <td><img :src='manga.picture' style="width:5rem;"></td>
            <td>{{ manga.description }}</td>
            <td>R{{ manga.price }}</td>
            <!-- Button trigger modal -->
            <button style=" border: none;" id="editbtn" type="button" data-bs-toggle="modal" data-bs-target="#editModal${item.id}">
            <i class="bi bi-pencil"></i>
            </button>
           <!-- Modal -->
        <div class="modal fade" id="editModal${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
           <div class="modal-dialog">
           <div class="modal-content">
           <div class="modal-header">
           <h2 class="modal-title fs-5 text-black" id="exampleModalLabel">Edit Product</h2>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
           <div class="modal-body">
           <h6 class="name d-flex justify-content-start text-black">Name</h6>
        <input id="name1${item.id}" placeholder="Enter product name..." type="text" class="w-100">
        <h6 class="imageurl d-flex justify-content-start text-black">ImageUrl</h6>
        <input id="image1${item.id}" placeholder="Enter product image..." type="text" class="w-100">
        <h6 class="details d-flex justify-content-start text-black">Details</h6>
        <input id="detail1${item.id}" placeholder="Enter product details..." type="text" class="w-100">
        <h6 class="price d-flex justify-content-start text-black">Price</h6>
        <input id="price1${item.id}" placeholder="Enter product price..." type="text" class="w-100">
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" id="edit-changes">Save changes</button>
      </div>
    </div>
  </div>
</div>
            <td><button style=" border: none; background-color: white;" ><i class="bi bi-trash-fill"></i></button></td>
        </tr>
            </tbody>
          </table>

    </template>
    <script>
           export default {
            computed:{
                products(){
                    return this.$store.state.products
                }
            },
            mounted(){
                this.$store.dispatch('fetchProducts')
            }
        }
    </script>
    <style scoped>
    </style>
