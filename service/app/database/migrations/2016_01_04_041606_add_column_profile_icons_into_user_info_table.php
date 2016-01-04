<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddColumnProfileIconsIntoUserInfoTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('user_info', function(Blueprint $table)
		{
			$table->string("profile_icon")->nullable();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('user_info', function(Blueprint $table)
		{
			$table->dropColumn("profile_icon");
		});
	}

}
