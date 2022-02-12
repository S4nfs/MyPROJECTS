<?php

$targetPath = "uploads/" . basename($_FILES['inpfile']['name']);
move_upload_file($_FILES['inpfile']['tmp_name'], $targetPath);