<?php
namespace Home\Controller;

use Home\Controller\BaseController;

class AdminController extends BaseController
{
    /**
     * 添加管理员
     */
    public function create_post() {
        $data = I('post.');

        if (!isset($data['name']) || !isset($data['tel']) || !isset($data['email'])) {
            $this->response(null, 'json', 400);
        }
        if (!isset($data['password'])) {
            $data['password'] = '123456';
        }

        $data['id'] = create_uuid();
        $data['salt'] = getRandChar();
        $data['hash'] = md5(hash('sha1', $data['password']) . $data['salt']);

        M('Admin')->add($data) ? $this->response('', 'json', 201) : $this->response('', 'json', 400);
    }
}