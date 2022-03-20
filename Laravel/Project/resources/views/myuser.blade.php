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





{{-- <!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  </head>
  <body>
    <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Password</th>
            <th>Action</th>
          </tr>
        </thead>

        @foreach ( $getmyusers as $list)
        <tbody>
        <tr>    
            <td>{{$list['id']}}</td>
            <td>{{$list['name']}}</td>
            <td>{{$list['password']}}</td>
            <td><a href={{"/edit".$list['id']}}>Edit  </a><a href={{"/delete".$list['id']}}>Delete</a></td>
        
        </tr>
        
        @endforeach
    </tbody>
        </table><br>
        



{{-- Pagination Starts--}}
<div>
    {{$getmyusers->links()}}
</div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

  </body>
</html> --}}
