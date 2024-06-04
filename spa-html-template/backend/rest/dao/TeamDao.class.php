<?php

require_once __DIR__ . "/BaseDao.class.php";

class TeamDao extends BaseDao
{
    public function __construct()
    {
        parent::__construct("team");
    }

    public function get_team()
    {
        return $this->query(
            "SELECT * FROM team", 
            []
        );
    }
}