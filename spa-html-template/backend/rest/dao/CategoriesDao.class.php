<?php

require_once __DIR__ . "/BaseDao.class.php";

class CategoriesDao extends BaseDao
{
    public function __construct()
    {
        parent::__construct("categories");
    }

    public function get_categories()
    {
        return $this->query(
            "SELECT * FROM categories",
            []
        );
    }
}