<h1>Query Builder</h1>

<table border="1">
    <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Password</td>
    </tr>
    @foreach ($data as $item)
        <tr>
            <td>{{ $item->id}}</td>
            <td>{{ $item->name}}</td>
            <td>{{ $item->password}}</td>
        </tr>
    @endforeach
</table>
