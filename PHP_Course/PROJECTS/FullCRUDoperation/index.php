<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container register">
        <div class="row">
            <div class="col-md-3 register-left">
                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                <h3>Welcome for Registration</h3>
                <input type="submit" name="" value="Login" /><br />
            </div>
            <div class="col-md-9 register-right">
                <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Employee</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Hirer</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <h3 class="register-heading">Apply as a Employee</h3>
                        <form action="" method="post">
                            <div class="row register-form">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Name *" value="" name="name" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Degree *" value="" name="degree" />
                                    </div>
                                    <div class="form-group">
                                        <input type="number" class="form-control" placeholder="Mobile *" value="" name="mobile" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="email" class="form-control" placeholder="Your Email *" value="" name="email" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Refer *" value="" name="refer" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Jobpost *" value="" name="jobpost" />
                                    </div>
                                    <input type="submit" class="btnRegister" value="Register" name="submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- <div class="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <h3 class="register-heading">Apply as a Hirer</h3>
                        <div class="row register-form">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="First Name *" value="" />
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Last Name *" value="" />
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Email *" value="" />
                                </div>
                                <div class="form-group">
                                    <input type="text" maxlength="10" minlength="10" class="form-control"
                                        placeholder="Phone *" value="" />
                                </div>


                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Password *" value="" />
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Confirm Password *"
                                        value="" />
                                </div>
                                <div class="form-group">
                                    <select class="form-control">
                                        <option class="hidden" selected disabled>Please select your Sequrity Question
                                        </option>
                                        <option>What is your Birthdate?</option>
                                        <option>What is Your old Phone Number</option>
                                        <option>What is your Pet Name?</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="`Answer *" value="" />
                                </div>
                                <input type="submit" class="btnRegister" value="Register" />
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>


    <?php
    include 'connection.php';

    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $degree = $_POST['degree'];
        $mobile = $_POST['mobile'];
        $email = $_POST['email'];
        $refer = $_POST['refer'];
        $jobpost = $_POST['jobpost'];


        $insertquery = "INSERT INTO registration(name, degree, mobile, email, refer,jobpost) VALUES('$name', '$degree', '$mobile', '$email', '$refer', '$jobpost')";

        $res = mysqli_query($conn, $insertquery);

        if($res){
            ?>
            <script>
                alert("Data Submitted")
            </script>
            <?php
        }else{
            echo mysqli_error($conn);
        }
    }

    ?>
</body>

</html>