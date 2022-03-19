<h1>Custom Page</h1>

@if($name=="Sagar")
<h2>Hi, {{$name}}</h2>
@endif

@for($i=0;$i<10;$i++) 
<h3>{{$i}}</h3>
@endfor



{{-- js in blade --}}
<script>
    var data = @json($i);
    console.log(data);
</script>