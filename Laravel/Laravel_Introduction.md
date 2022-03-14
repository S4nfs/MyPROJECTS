MVC(Model View Controller)

🍔Controller is a mediator between the view and the model.
To create a controller, we need to create a class that extends the base controller class or use command
#php artisan make:controller Mycustomcontrollername

🍔 View is the interface between the controller and the user.
You can access blade views file out side the view folder but you need to do some changes
1. Open Config directory change resource_path('views'), to resource_path('customviews'),
2. Make new directory in resources name as "customview" and placed all new blade

🍔Component is a class that can be used in multiple places.
#php artisan make:component Mycustomcomponentname
generate two files in resources/views/components folder named Mycustomcomponentname.blade.php and in app/views/components folder named Mycustomcomponentname.blade.php
