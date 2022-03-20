<h1>Update User</h1>
<form action="/edit" method="POST">
    @csrf
    <input type="hidden" name="id" value={{ $thedata['id'] }}>
    <input type="text" name="name" value="{{ $thedata['name'] }}"><br><br>
    <input type="text" name="password" value="{{ $thedata['password'] }}"><br><br>
    <button type="submit" name="update">Update</button>
</form>
