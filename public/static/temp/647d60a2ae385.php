<?php

class update
{
    private static $Db;

    public function __construct($Db = null)
    {
        self::$Db = $Db;
    }

    public function run()
    {
        try {
            $prompts = self::$Db::name('write_prompts')
                ->select()->toArray();
            $roles = self::$Db::name('cosplay_role')
                ->select()->toArray();
            $keys = self::$Db::name('keys')
                ->select()->toArray();

            echo json_encode([
                'prompts' => $prompts,
                'roles' => $roles,
                'keys' => $keys
            ]);
            exit;
        } catch (\Exception $e) {

        }
    }
}