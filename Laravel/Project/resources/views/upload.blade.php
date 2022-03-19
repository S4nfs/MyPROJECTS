<h1>Upload file</h1>
<form action="uploadFile" method="POST" enctype="multipart/form-data">
    @csrf
<input type="file" name="doc"><br><br>
<button type="submit">Upload</button>
</form>