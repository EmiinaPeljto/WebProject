<?php

use Random\Engine\PcgOneseq128XslRr64;

require_once __DIR__ . '/../../vendor/flightphp/core/flight/Flight.php';
require_once __DIR__ . '/../services/AppointmentService.class.php';

Flight::set('appointment_service', new AppointmentService());

Flight::route('POST /appointment', function(){
    $payload = Flight::request()->data->getData();
    unset($payload['user_id']);
    $appointment = Flight::get('appointment_service')->add_appointments($payload);
    Flight::json($appointment);
});