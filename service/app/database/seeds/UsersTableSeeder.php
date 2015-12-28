<?php

class UsersTableSeeder extends Seeder {

	public function run()
	{
		$user = User::create([
            'name' => 'Rahul Rajawat',
            'username' => 'rajawat',
            'email' => 'rajawat@fsn.localhost',
            'password' => 'rajawat',
        ]);

	}

}