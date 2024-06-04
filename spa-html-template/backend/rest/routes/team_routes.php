<?php

require_once __DIR__ . '/../../vendor/flightphp/core/flight/Flight.php';
require_once __DIR__ . '/../services/TeamService.class.php';

Flight::set('team_service', new TeamService());

Flight::route('GET /team', function() {
    $data = Flight::get('team_service')->get_team();
    Flight::json($data);
});