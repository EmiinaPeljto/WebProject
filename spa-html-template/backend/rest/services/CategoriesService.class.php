<?php

require_once __DIR__ . "/../dao/CategoriesDao.class.php";

class CategoriesService {
    private $category_dao;

    public function __construct() {
        $this->category_dao = new CategoriesDao();
    }

    public function get_categories() {
        return $this->category_dao->get_categories();
    }
}