<?php

require_once __DIR__ . "/BaseDao.class.php";

class AppointmentDao extends BaseDao {
    
    public function __construct()
    {
        parent::__construct("appointments");
    }

    public function add_appointments($payload)
    {
        return $this->insert("appointments", $payload);
    }
}