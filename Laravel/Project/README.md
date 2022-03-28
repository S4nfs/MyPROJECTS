<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

MVC(Model View Controller)

## Controller
🍔Controller is a mediator between the view and the model.
To create a controller, we need to create a class that extends the base controller class or use command
```
php artisan make:controller Mycustomcontrollername
```
## View
🍔View is the interface between the controller and the user.
You can access blade views file out side the view folder but you need to do some changes
1. Open Config directory change resource_path('views'), to resource_path('customviews'),
2. Make new directory in resources name as "customview" and placed all new blade

## Component
🍔Component is a class that can be used in multiple places.
#php artisan make:component Mycustomcomponentname
generate two files in resources/views/components folder named Mycustomcomponentname.blade.php and in app/views/components folder named Mycustomcomponentname.blade.php

## Model
🍔Model is the data that is stored in the database. If same name (Model name should be singular[Capital Letter] || table name plural) otherwise define in model file
```
php artisan make:model Mycustommodelname
```
## CSRF token
🍔@csrf
CSRF tokens are strings that are automatically generated and can be attached to a form when the form is created. They are used to uniquely identify forms generated from the server

## HTTP Methods
🍔HTTP Request Method:
Get: Retrieve
Post: Send data
Put: Update data 
Delete: Delete data
PATCH: Update data 

## Locale
🍔Locale language:
{{__('fileName.keyName')}}

## Query Builder
🍔Query Builder: Laravel connect with database in two ways, one is Eloquent ORM (Model) and another is Query Builder

## Migration
🍔Migration is an important feature in a Laravel, which helps us to create the tables in a database in an ordered mode
```
php artisan make:migration create_SVTABLE_table
```
1.Migrate a particular database
```
php artisan migrate --path=/database/migrations/2020_01_01_000000_create_SVTABLE_table.php
```
2.Reset database:
```
php artisan migrate:reset
```
3.Rollback database [like restore points]:
```
php artisan migrate:rollback            // rollback to previous migration
```
```
php artisan migrate:rollback --step=2   // rollback to 2 previous migration
```
## Seeder
🍔Seeding: insert dummy data into database
Create a seeder file in database/seeds folder
```
php artisan make:seeder Mycustomseedername
```
Insert dummy data
```
php artisan db:seed --class=Mycustomseedername
```
## Accessors & Mutators
🍔Accessors & Mutators: 
Accessors are used to format the attributes after you retrieve them from database. Mutators are used to format the attributes before you save them to database.

## Relationships
🍔Relationships:
1.One to One Relationship:
2.One to Many Relationsip:
3.Many to Many Relationship:

## Markdown Mail
🍔Markdown Mail: 
```
php artisan make:mail SampleMail --markdown=emails.SampleMail 
```

## APIs
🍔APIs: 
You can create using simple model and controller and route multiple request methods OR
Create Using resources, resources are used for creating API endpoint
```
php artisan make:controller Mycustomresourcename --resource
```
## API Authentication with Sanctum
### Step 1:Install Laravel Sanctum.

````
composer require laravel/sanctum
````

### Step 2:Publish the Sanctum configuration and migration files.

````
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"

````

### Step 3:Run your database migrations.

````
php artisan migrate

````

### Step 4:Add the Sanctum's middleware in kernal.

````
../app/Http/Kernel.php

use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;

...

    protected $middlewareGroups = [
        ...

        'api' => [
            EnsureFrontendRequestsAreStateful::class,
            'throttle:60,1',
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],
    ];

    ...
],

````

### Step 5:To use tokens for users.

````
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;
}

````

### Step 6:Let's create the seeder for the User model

```
php artisan make:seeder SVtableSeeder
````

### Step 7: Now let's insert as record

```
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
...
...
DB::table('register')->insert([
    'name' => 'Sagar Verma',
    'email' => 'sagar@gamil.com',
    'password' => Hash::make('password')
]);
````

### Step 8:To seed users table with user

```javascript 
php artisan db:seed --class=SVtableSeeder

````


### Step 9: create a controller nad  /login route in the routes/api.php file:

``` 
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
class Sanctuez extends Controller
{
    // 

    public function securewithsanctum(Request $req){
        $data = User::where('email', $req->myemail)->first();
        if(!$data || !Hash::check($req->mypassword, $data->password)){
            return response(['message' => ['These Credentials do not match with our records']], 404);
        }
        $token = $data->createToken('myverysecretkey')->plainTextToken;
        
        $result = [
            'data' => $data,
            'token' => $token
        ];
        return response($result, 200);
    }
}

````
### Step 11: Test with postman, Result will be below:

``` 
{
    "user": {
        "id": 1,
        "name": "Sagar Verma",
        "email": "sagar@gmail.com",
        "email_verified_at": null,
        "created_at": null,
        "updated_at": null
    },
    "token": "AbQzDgXa..."
}

````

### Step 11: Make Details API or any other with secure route  

``` 
Route::group(['middleware' => 'auth:sanctum'], function(){
    //All secure URL's

    });


Route::post("secure",[Sanctuez::class,'securewithsanctum']);

````

## Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Cubet Techno Labs](https://cubettech.com)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[Many](https://www.many.co.uk)**
- **[Webdock, Fast VPS Hosting](https://www.webdock.io/en)**
- **[DevSquad](https://devsquad.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[OP.GG](https://op.gg)**
- **[WebReinvent](https://webreinvent.com/?utm_source=laravel&utm_medium=github&utm_campaign=patreon-sponsors)**
- **[Lendio](https://lendio.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).


## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
