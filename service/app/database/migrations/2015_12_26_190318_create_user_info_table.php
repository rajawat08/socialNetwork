<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateUserInfoTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('user_info', function(Blueprint $table)
		{
			
			$table->integer('user_id')->unique()->unsigned()->index();
			$table->string('gender')->nullable();
			$table->string('birthday')->nullable();
			$table->text('about_me')->nullable();
			$table->string('occupation')->nullable();
			$table->string('Address')->nullable();
			$table->string('phone')->nullable();
			$table->string('website')->nullable();
			$table->string('city')->nullable();
			$table->string('region')->nullable();
			$table->string('country')->nullable();
			$table->string('status')->nullable();
			$table->foreign("user_id")->references('id')->on('users')->onDelete('cascade');			
			$table->timestamps();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('user_info');
	}

}
