<?php
namespace Home\Controller;
use Home\Controller\BaseController;
class AdminController extends BaseController{

	/**
	 * 添加管理员
	 * @return json
	 */
	public function create_post() {
		$data = I('post.');
		$data['id'] = create_uuid();

		$data['salt'] = getRandChar();
		$data['hash'] = md5(hash('sha1', $data['password']).$data['salt']);
		$data['last_log_ip'] = get_client_ip();  //默认最后一次登录的IP为添加管理员时的IP
		$data['last_log_time'] = time();         //默认最后一次登录时间为添加管理员时的时间

		// if (M('Admin')->add($data)) {
		// 	$this->response($data,'json',$code=201);
		// } else {
		// 	$this->response($data,'json',$code=400);
		// }
		$this->response($data,'json',$code=201);
	}
	
}