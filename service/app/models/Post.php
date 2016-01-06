<?php

class Post extends \Eloquent {
	
	protected $table = 'posts';
	
	protected $guarded = [];


	/**
	* user
	* @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	*/
	public function user(){
    	return $this->belongsTo('User');
    }
}