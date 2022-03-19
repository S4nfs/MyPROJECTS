<h1>get Users</h1>
<table border="2">
    <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Password</td>
    </tr>
@foreach ( $getmyusers as $list)
<tr>    
    <td>{{$list['id']}}</td>
    <td>{{$list['name']}}</td>
    <td>{{$list['password']}}</td>
</tr>

@endforeach
</table>

{{-- Pagination Starts--}}
<div>
    {{$getmyusers->links()}}
</div>
