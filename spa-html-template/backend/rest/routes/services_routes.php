<?php

require_once __DIR__ . '/../../vendor/flightphp/core/flight/Flight.php';
require_once __DIR__ . '/../services/ServicesService.class.php';

Flight::set('services_service', new ServicesService());

Flight::route('GET /services', function(){
    $data = Flight::get('services_service')->get_services();
    Flight::json($data);
});

