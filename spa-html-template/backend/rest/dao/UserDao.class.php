<?php

require_once __DIR__ . "/BaseDao.class.php";



class UserDao extends BaseDao {
    public function __construct() {
        parent::__construct("users");
    }

    public function add_user($payload) {
        $this->insert("users", $payload);
    }

    public function get_user_by_id($user_id) {
        return $this->query_unique("SELECT first_name, last_name, email, phone FROM users WHERE id = :id", ["id" => $user_id]);
    }

    public function update_user($user_id, $user) {
        $this->update("users", $user_id, $user);
    }

    public function delete_patient($user_id) {
        $this ->execute("DELETE FROM users WHERE id = :id", ["id" => $user_id]);
    }

    public function get_all_users() {
        return $this->query("SELECT * FROM users", []);
    }
}