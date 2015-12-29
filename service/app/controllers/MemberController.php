<?php

class MemberController extends \BaseController {



	public function postProfile(){
		//print_r(Input::all());
		if(!Input::get('data')){
			return;
		}
		$data = Input::get('data'); 
		$basic = User::with('info')->where('username','=',$data['username'])->first();
		// user not found
		 if(is_null($basic)){
		 	return Response::make(array('status' => false, 'message' => 'User not found'),200);
		 }
		$profile = [];
		
		$profile['about'] = is_null($basic) ? []: $basic;		
		$profile['timeline'] = [];
		$profile['photosVideos'] = [];

		
		return Response::make(array('status' => true, 'data' =>$profile),200);
		
	}

	public function postProfileUpdate(){
		//print_r(Input::all());

		 $data = Input::get("data")['info'];
		 $auth = Input::get("data")['auth'];
		 //if(empty($data) || empty($data['name']) || empty($data['username']) || empty($data['email'])
		 //return Response::make(array('status' => false, 'message' => 'Mandatory field should not be empty','data' =>$data),200);


		 $user = User::where('remember_token','=',$auth)->first();
		 // user not found
		 if(is_null($user)){
		 	return Response::make(array('status' => false, 'message' => 'Access Denied'),200);
		 }
		 $input = array();
		 //print_r($user);
		 if($user->username != $data['username']){
		 	// check request username exist 
		 	$exist = User::where("username","=",$data['username'])->first();
		 	if(!is_null($exist)){
		 		return Response::make(array('status' => false, 'message' => 'Username Already Exists..'),200);
		 	}
		 	$input['username'] = $data['username'];

		 }

		 //check for email address already exist
		 if($user->email != $data['email']){
		 	// check request username exist 
		 	$exist = User::where("email","=",$data['email'])->first();
		 	if(!is_null($exist)){
		 		return Response::make(array('status' => false, 'message' => 'Email Address Already Exists..'),200);
		 	}
		 	$input['email'] = $data['email'];
		 }

		 // if user want to change password 
		 if(isset($data['password'])){
		 	if(strlen($data['password'])<6){
		 		return Response::make(array('status' => false, 'message' => 'Password should be minimum 6 digit'),200);
		 	}
		 	$input['password'] = $data['password'];	 	
		 }

		 $input['name']  = $data['name'];
		 $user->update($input);

		 
		 $input = $data['info'];
		 
		 unset($input['created_at']);
		 unset($input['updated_at']);
		 $input['birthday'] = date('d/m/Y',strtotime($input['birthday']));
		 
		 UserInfo::where("user_id",'=',$user->id)->update($input);
		 $basic = User::with('info')->where('id','=',$user->id)->first();
		 return Response::make(array('status' => true, 'message' => 'Profile Updated successfully...','data' => $basic),200);

	}

}