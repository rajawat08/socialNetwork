<?php

class MemberController extends \BaseController {

	public static $filePath = "./avatars";

	public static $fullPath = "http://127.0.0.1:8080/socialNetwork/service/public/avatars/";

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

	public function postFind(){
		$key = Input::get("data")['keyword'];
		$auth = Input::get("data")['auth'];

		$members = User::select('name as display','username as value')->where('name', 'LIKE', $key.'%')->get();

		if(is_null($members)){
			return Response::make(array('status' => false,'data' => []),200);
		}else{
			return Response::make(array('status' => true, 'data' => $members),200);
		}
	}

	public function postAddtofamily(){
		$member = Input::get("data")['member'];
		$auth = Input::get("data")['auth'];

		$user = User::where('remember_token','=',$auth)->first();

		//print_r($member);
		$addedMember = User::where("username","=",$member['username'])->first();
		if(is_null($addedMember)){
			return Response::make(array('status' => false,'data' => []),200);
		}

		// need to check both member relation already exist or not.

		FamilyMembers::create([
					'from_user_id' => $user->id,
					'to_user_id'   => $addedMember->id,
					'relation'     => ($member['relation'] == 1 ? 'parents' : 'siblings'),
					'broakupComment' => ($member['relation'] == 1 ? $member['broakupComment'] : null),
					'newParentComment' => ($member['relation'] == 1 ? $member['newParentComment'] : null),
					'siblingsComment' => ($member['relation'] == 2 ? $member['siblingsComment'] : null)

				]);
		$family = FamilyMembers::with('memberFrom','memberTo')->where('from_user_id','=',$user->id)
					 ->orWhere("to_user_id","=",$user->id)
					 ->get();
		return Response::make(array('status' => true,'data' => $family),200);

	}

	public function postList(){
		$auth = Input::get("data")['auth'];
		$user = User::where('remember_token','=',$auth)->first();
		if(is_null($user)){
			return Response::make(array('status' => false,'data' => []),200);
		}

		$family = FamilyMembers::with('memberFrom','memberTo')->where('from_user_id','=',$user->id)
					 ->orWhere("to_user_id","=",$user->id)
					 ->get();
		return Response::make(array('status' => true,'data' => $family),200);
	}

	public function postUpload(){
		$auth = Input::get("auth");
		$user = User::with('info')->where('remember_token','=',$auth)->first();
		//print_r(Input::all());
		//echo Input::hasFile("file");
		if(Input::hasFile('file')){        	
        	$file = Input::file('file');
        	$ext = $file->getClientOriginalExtension();        	
        	$fileName = $this->gen_uuid().".".$ext;        	
        	if($file->move(self::$filePath, $fileName)){
        		//print_r($user);
        		UserInfo::where("user_id","=",$user->id)->update(['profile_icon' => $fileName ]);
        		return Response::make(array('status' => true,'data' => self::$fullPath.$fileName),200);
        	}        	
        }
	}

	public function gen_uuid() {
	    return strtoupper(sprintf( '%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
	        // 32 bits for "time_low"
	        mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff ),

	        // 16 bits for "time_mid"
	        mt_rand( 0, 0xffff ),

	        // 16 bits for "time_hi_and_version",
	        // four most significant bits holds version number 4
	        mt_rand( 0, 0x0fff ) | 0x4000,

	        // 16 bits, 8 bits for "clk_seq_hi_res",
	        // 8 bits for "clk_seq_low",
	        // two most significant bits holds zero and one for variant DCE1.1
	        mt_rand( 0, 0x3fff ) | 0x8000,

	        // 48 bits for "node"
	        mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff )
	    ));
	}

}