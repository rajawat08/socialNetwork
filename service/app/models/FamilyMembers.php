<?php

class FamilyMembers extends \Eloquent {
	
	protected $table = 'family_members';
	
	protected $guarded = [];


	/**
	* user
	* @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	*/
	public function memberFrom(){
    	return $this->belongsTo('User','from_user_id');
    }

    /**
	* user
	* @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	*/
	public function memberTo(){
    	return $this->belongsTo('User','to_user_id');
    }



}