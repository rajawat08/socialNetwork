<?php

class AuthController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /auth
	 *
	 * @return Response
	 */
	public function index()
	{
		//
	}

	/**
	 * 
	 * POST /auth/login
	 *
	 * @return Response
	 */
	public function login()
	{
		//print_r(Input::all());
		if(!Input::has('data')){
			return;
		}
		$data = Input::get('data');
		$credentials = $data;
		 if (Auth::attempt($credentials,true))
        {
            return Response::make(array('status' => true, 'data' =>Auth::user()),200);
        }
        else{
        	return Response::make(array('status' => false, 'data' =>[]),200);
        }
	}


	public function userdata(){
		if(!Input::has('data')){
			return;
		}
		$data = Input::get('data');
		//$auth = Auth::user();
		//print_r($auth); echo 123;
		$userData = User::where("remember_token",$data['auth'])->first();
		 if (!is_null($userData))
        {
            return Response::make(array('status' => true, 'data' =>$userData),200);
        }
        else{
        	return Response::make(array('status' => false, 'data' =>[]),200);
        }
	} 

	public function logout(){
		$data = Input::get('data');
		$userData = User::where("remember_token",$data['auth'])->update(array("remember_token" => ''));
		return Response::make(array('status' => true, 'data' =>[]),200);
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /auth
	 *
	 * @return Response
	 */
	public function register()
	{
		$data = Input::get('data');
		//print_r($data);

		$email =  $data['email'];

		$isValid = User::where("email","=",$email)->first();

		if(!is_null($isValid)){
			return Response::make(array('status' => false, 'message' => 'User Already Exists',  'data' =>[]),200);
		}


		$input = array();
		$input['email'] = $email;
		$input['password'] = $data['password'];
		$input['username'] = explode("@",$email)[0];
		$input['name'] = $data['name'];
		
        User::create($input);

        return Response::make(array('status' => true, 'message' => 'User Register Successfully',  'data' =>[]),200);



	}

	/**
	 * Display the specified resource.
	 * GET /auth/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /auth/{id}/edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /auth/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /auth/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}