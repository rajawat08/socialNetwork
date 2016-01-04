<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateFamilyMembersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('family_members', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer("from_user_id")->unsigned()->index();
			$table->integer("to_user_id")->unsigned()->index();
			$table->string("relation")->nullable();
			$table->string("broakupComment")->nullable();
			$table->string("newParentComment")->nullable();
			$table->string("siblingsComment")->nullable();
			$table->foreign("from_user_id")->references('id')->on('users')->onDelete('cascade');	
			$table->foreign("to_user_id")->references('id')->on('users')->onDelete('cascade');
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
		Schema::drop('family_members');
	}

}
