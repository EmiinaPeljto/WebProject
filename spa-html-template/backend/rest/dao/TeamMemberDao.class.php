<?php

require_once __DIR__ . '/BaseDao.class.php';

class TeamMemberDao extends BaseDao
{
    public function __construct()
    {
        parent::__construct('team');
    }

    public function get_team_members()
    {
        return $this->query("SELECT * FROM team", []);
    }
}