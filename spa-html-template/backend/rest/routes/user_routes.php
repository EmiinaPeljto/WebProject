<?php

require_once __DIR__ . '/../../vendor/flightphp/core/flight/Flight.php';
require_once __DIR__ . '/../services/UserServices.class.php';

Flight::set('user_service', new UserService());

Flight::group('/users',function(){
    Flight::route('GET /', function() {
        $data = Flight::get('user_service')->get_user();
        Flight::json($data);
    });

    Flight::route('POST /signUp', function(){
        $payload = Flight::request()->data->getData();
        unset($payload['confirm_password']);
        $user = Flight::get('user_service')->add_user($payload);
        Flight::json($user);
    });
});

