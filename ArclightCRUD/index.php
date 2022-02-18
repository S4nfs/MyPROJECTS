<?php
require('config.php');
?>

<script type="module" src="./index.js">
// define a MySQL connection
const connection=mysql.createConnection({
    host:'<?php echo $db_host; ?>',
    user:'<?php echo $db_user; ?>',
    password:'',
    database: '<?php echo $db_name; ?>'
});
 
connection.connect(function(error){
    if(!!error) console.log(error);
    else console.log('Database Connected!');
}); 

// Server Listening
app.listen(3001, () => {
    console.log('Server is running at port 3001');
});
 
</script>