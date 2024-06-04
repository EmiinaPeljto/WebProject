<?php

require_once __DIR__ . "/../dao/TeamDao.class.php";

class TeamService {
    private $team_dao;

    public function __construct() {
        $this->team_dao = new TeamDao();
    }

    public function get_team() {
        return $this->team_dao->get_team();
    }
}