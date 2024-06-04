<?php

require_once __DIR__ . '/../../vendor/flightphp/core/flight/Flight.php';
require_once __DIR__ . '/../services/CategoriesService.class.php';

Flight::set('categories_service', new CategoriesService());

Flight::route('GET /categories', function() {
    $data = Flight::get('categories_service')->get_categories();
    Flight::json($data);
});