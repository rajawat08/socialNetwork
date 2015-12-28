<?php

class MemberController extends \BaseController {



	public function postProfile(){
		//print_r(Input::all());
		if(!Input::get('data')){
			return;
		}
		$data = Input::get('data'); 
		$basic = User::with('info')->where('username','=',$data['username'])->first();
		$profile = [];
		
		$profile['about'] = is_null($basic) ? []: $basic;		
		$profile['timeline'] = [];
		$profile['photosVideos'] = [];

		
		return Response::make(array('status' => true, 'data' =>$profile),200);
		
	}

}