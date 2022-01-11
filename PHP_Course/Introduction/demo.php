<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
//   $pciaddr = $_SESSION['pciaddr'];
//   $mdevtype = $_SESSION['mdevtype'];
// usage: nvidia-dev-ctl.py create-mdev [-n] PCI_ADDRESS, MDEV_TYPE_OR_NAME

if ($action == "createmdev"){
    $pciaddr = $_POST["pciaddr"];
    $mdevtype = $_POST["mdevtype"];



//Creating user's databse table
require('../config/config.php');
$sql = "CREATE TABLE IF NOT EXISTS arclight_vm (
  sno INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  userid INT,
  uuid varchar(255),
  action varchar(255),





$result = shell_exec('cd /var/www/html/arclight/gpubinder && ./nvidia-dev-ctl.py create-mdev $pciaddr $mdevtype');



-- // usage: nvidia-dev-ctl.py attach-mdev [-h] [--virsh-trials N]
-- // [--virsh-delay SECONDS] [-c URL]
-- // [--hotplug] [--restart] [-n]
-- // UUID, DOMAIN
-- // --hotplug 
-- // --restart 
-- // -n, --dry-run 

$result = shell_exec('cd /var/www/html/arclight/gpubinder && ./nvidia-dev-ctl.py attach-mdev $uuid $domainname');


?>

-------------------------CREATE MDEV GPU------------------------------------->

<form class="row gx-3 gy-2 align-items-center" id="createmdev" name="createmdev" role="form" action="" method="post">
  <!-- <div class="col-sm-3">
    <label class="visually-hidden" for="specificSizeInputName">PCI Address</label>
    <input type="text" class="form-control" id="pciadd" name="pciadd" placeholder="PCI Address">
  </div>
  <div class="col-sm-3">
    <label class="visually-hidden" for="optionalarguments">Optional Arguments</label>
    <select class="form-select" id="optionalarguments" name="optionalarguments">
      <option selected>Choose...</option>
      <option value="1">Hotplug</option>
      <option value="2">Restart</option>
      <option value="3">Dry Run</option>
    </select>
  </div> -->
  <div class="col-sm-3">
    <label class="visually-hidden" for="pciaddr">PCI Address</label>
    <input type="text" class="form-control" id="pciaddr" name="pciaddr" placeholder="PCI Address">
  </div>
  <div class="col-sm-3">
    <label class="visually-hidden" for="mdevtype">Mdev Type</label>
    <input type="text" class="form-control" id="mdevtype" name="mdevtype" placeholder="mdevtype">
  </div>
  <div class="col-auto">
    <button type="Create" class="btn btn-primary">Create</button>
  </div>
</form>

<!-------------------------------------ATTACH MDEV GPU------------------------------------->
<form class="row gx-3 gy-2 align-items-center" id="attachmdev" name="attachmdev" role="form" action="" method="post">
  <div class="col-sm-3">
    <label class="visually-hidden" for="specificSizeInputName">PCI Address</label>
    <input type="text" class="form-control" id="pciaddr" name="pciaddr" placeholder="PCI Address">
  </div>
  <div class="col-sm-3">
    <label class="visually-hidden" for="optionalarguments">Optional Arguments</label>
    <select class="form-select" id="optionalarguments" name="optionalarguments">
      <option selected>Choose...</option>
      <option value="1">Hotplug</option>
      <option value="2">Restart</option>
      <option value="3">Dry Run</option>
    </select>
  </div>
  <div class="col-sm-3">
    <label class="visually-hidden" for="UUID">UUID</label>
    <input type="text" class="form-control" id="UUID" name="UUID" placeholder="UUID">
  </div>
  <div class="col-sm-3">
    <label class="visually-hidden" for="domainname">Domain</label>
    <input type="text" class="form-control" id="domainname" name="domainname" placeholder="Domain Name">
  </div>
  <div class="col-auto">
    <button type="Attach" class="btn btn-primary">Attach</button>
  </div>
</form>
</body>
</html>