<h1>get Users</h1>
<table border="2">
    <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Password</td>
        <td>Action</td>
 

    </tr>
@foreach ( $getmyusers as $list)
<tr>    
    <td>{{$list['id']}}</td>
    <td>{{$list['name']}}</td>
    <td>{{$list['password']}}</td>
    <td><a href={{"/edit".$list['id']}}>Edit  </a><a href={{"/delete".$list['id']}}>Delete</a></td>

</tr>

@endforeach
</table>

{{-- Pagination Starts--}}
<div>
    {{$getmyusers->links()}}
</div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

  </body>
</html> --}}
