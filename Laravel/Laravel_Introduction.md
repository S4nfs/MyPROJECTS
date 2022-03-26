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

🍔Migration is an important feature in a Laravel, which helps us to create the tables in a database in an ordered mode
#php artisan make:migration create_SVTABLE_table

1.Migrate a particular database
#php artisan migrate --path=/database/migrations/2020_01_01_000000_create_SVTABLE_table.php

2.Reset database:
#php artisan migrate:reset

3.Rollback database [like restore points]:
#php artisan migrate:rollback            // rollback to previous migration
#php artisan migrate:rollback --step=2   // rollback to 2 previous migration

🍔Seeding: insert dummy data into database
Create a seeder file in database/seeds folder    |    #php artisan make:seeder Mycustomseedername
Insert dummy data                                |    #php artisan db:seed --class=Mycustomseedername

🍔Accessors & Mutators: 
Accessors are used to format the attributes after you retrieve them from database. Mutators are used to format the attributes before you save them to database.

🍔Relationships:
1.One to One Relationship:
2.One to Many Relationsip:
3.Many to Many Relationship:

🍔Markdown Mail: 
#php artisan make:mail SampleMail --markdown=emails.SampleMail