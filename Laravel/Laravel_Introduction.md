MVC(Model View Controller)

🍔Controller is a mediator between the view and the model.
To create a controller, we need to create a class that extends the base controller class or use command
#php artisan make:controller Mycustomcontrollername

🍔View is the interface between the controller and the user.
You can access blade views file out side the view folder but you need to do some changes
1. Open Config directory change resource_path('views'), to resource_path('customviews'),
2. Make new directory in resources name as "customview" and placed all new blade

🍔Component is a class that can be used in multiple places.
#php artisan make:component Mycustomcomponentname
generate two files in resources/views/components folder named Mycustomcomponentname.blade.php and in app/views/components folder named Mycustomcomponentname.blade.php

🍔Model is the data that is stored in the database. If same name (Model name should be singular[Capital Letter] || table name plural) otherwise define in model file
#php artisan make:model Mycustommodelname

🍔@csrf
CSRF tokens are strings that are automatically generated and can be attached to a form when the form is created. They are used to uniquely identify forms generated from the server

🍔HTTP Request Method:
Get: Retrieve
Post: Send data
Put: Update data 
Delete: Delete data
PATCH: Update data 

🍔Locale language:
{{__('fileName.keyName')}}

🍔Query Builder: Laravel connect with database in two ways, one is Eloquent ORM (Model) and another is Query Builder
